package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.subscribeWhileRunning
import io.github.nijasc.ktor.svelte.internal.typescript.SourceLocation
import io.github.nijasc.ktor.svelte.internal.typescript.handlerSource
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.RoutingRoot
import io.ktor.server.routing.get
import io.ktor.util.AttributeKey
import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.util.concurrent.ConcurrentHashMap

internal const val DEV_REQUESTS_PATH = "/_ktor-svelte/dev/requests"
internal const val DEV_OPEN_PATH = "/_ktor-svelte/dev/open"
private const val KEPT_REQUESTS = 100

private val RequestStartedAt = AttributeKey<Long>("KtorSvelteDevRequestStartedAt")
private val RequestFields = AttributeKey<Map<String, List<String>>>("KtorSvelteDevRequestFields")
private val RequestRoute = AttributeKey<RoutingNode>("KtorSvelteDevRequestRoute")

internal class DevRequestLog(
    private val resolver: RequestResolver,
    private val clock: () -> Long = System::nanoTime,
    private val wallClock: () -> Long = System::currentTimeMillis,
    private val sourceFiles: SourceFiles = SourceFiles(),
) {
    private val sources = ConcurrentHashMap<RoutingNode, Any>()
    private val unknown = Any()
    private val recent = ArrayDeque<String>()
    private val updates = MutableSharedFlow<String>(extraBufferCapacity = KEPT_REQUESTS, onBufferOverflow = BufferOverflow.DROP_OLDEST)

    val entries: SharedFlow<String> get() = updates

    fun install(application: Application) {
        application.subscribeWhileRunning(RoutingRoot.RoutingCallStarted, { it.application === application }) { call ->
            call.attributes.put(RequestRoute, call.route)
        }
    }

    private fun sourceFor(node: RoutingNode): SourceLocation? = sources.getOrPut(node) { handlerSource(node) ?: unknown } as? SourceLocation

    fun started(call: ApplicationCall) {
        call.attributes.put(RequestStartedAt, clock())
    }

    fun validationFailed(
        call: ApplicationCall,
        fields: Map<String, List<String>>,
    ) {
        call.attributes.put(RequestFields, fields)
    }

    fun finished(call: ApplicationCall) {
        val startedAt = call.attributes.getOrNull(RequestStartedAt) ?: return
        if (!resolver.isApiPath(decodedPathOrRaw(call))) return
        val entry =
            buildJsonObject {
                put("method", call.request.httpMethod.value)
                put("path", call.request.uri)
                put("status", (call.response.status() ?: HttpStatusCode.OK).value)
                put("ms", (clock() - startedAt) / 1_000_000.0)
                put("at", wallClock())
                (call.request.header(HttpHeaders.XRequestId) ?: call.response.headers[HttpHeaders.XRequestId])?.let { put("id", it) }
                call.attributes.getOrNull(RequestRoute)?.let(::sourceFor)?.let { source ->
                    put(
                        "source",
                        buildJsonObject {
                            put("file", source.file)
                            put("line", source.line)
                            sourceFiles.pathOf(source.file)?.let { put("path", it) }
                        },
                    )
                }
                call.attributes.getOrNull(RequestFields)?.let { fields ->
                    put(
                        "fields",
                        buildJsonObject {
                            fields.forEach { (field, messages) ->
                                put(field, JsonArray(messages.map(::JsonPrimitive)))
                            }
                        },
                    )
                }
            }.toString()
        synchronized(recent) {
            recent.addLast(entry)
            if (recent.size > KEPT_REQUESTS) recent.removeFirst()
        }
        updates.tryEmit(entry)
    }

    fun snapshot(): List<String> = synchronized(recent) { recent.toList() }

    fun isRouteSource(path: String): Boolean = sourceFiles.isKnown(path)
}

internal fun Route.devRequestRoutes(
    log: DevRequestLog,
    allowRemote: Boolean,
    proxy: DevProxy,
) {
    get(DEV_OPEN_PATH) {
        val file = call.request.queryParameters["file"].orEmpty()
        val line = call.request.queryParameters["line"]?.toIntOrNull()
        call.response.header(HttpHeaders.CacheControl, "no-store")
        when {
            !isLocalCall(call) ->
                call.respondText("The ktor-svelte dev client only opens files for this machine.", status = HttpStatusCode.Forbidden)
            line == null || line < 1 || !log.isRouteSource(file) ->
                call.respondText("Only the file of a route in the request list can be opened.", status = HttpStatusCode.BadRequest)
            proxy.openInEditor(file, line) -> call.respondText("", status = HttpStatusCode.NoContent)
            else -> call.respondText("Vite did not take the request to open the editor.", status = HttpStatusCode.BadGateway)
        }
    }
    get(DEV_REQUESTS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondEventStreamUntilDisconnect {
            log.snapshot().forEach { write("data: $it\n\n") }
            flush()
            log.entries.collect { entry ->
                write("data: $entry\n\n")
                flush()
            }
        }
    }
}
