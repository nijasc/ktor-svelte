package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.github.nijasc.ktor.svelte.internal.subscribeWhileRunning
import io.github.nijasc.ktor.svelte.internal.typescript.SourceLocation
import io.github.nijasc.ktor.svelte.internal.typescript.handlerSource
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.ApplicationSendPipeline
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.RoutingRoot
import io.ktor.server.routing.get
import io.ktor.util.AttributeKey
import io.ktor.util.pipeline.PipelinePhase
import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.util.concurrent.ConcurrentHashMap

internal const val DEV_REQUESTS_PATH = "/_ktor-svelte/dev/requests"
internal const val DEV_OPEN_PATH = "/_ktor-svelte/dev/open"
internal const val DEV_ROUTE_MAP_PATH = "/_ktor-svelte/dev/routes"
internal const val DEV_STATUS_PATH = "/_ktor-svelte/dev/status"
internal const val DEV_SENSITIVE_PATH = "/_ktor-svelte/dev/sensitive"
internal const val DEV_SLOWEST_PATH = "/_ktor-svelte/dev/slowest"
private const val KEPT_REQUESTS = 100

private val RequestStartedAt = AttributeKey<Long>("KtorSvelteDevRequestStartedAt")
private val RequestFields = AttributeKey<Map<String, List<String>>>("KtorSvelteDevRequestFields")
private val RequestRoute = AttributeKey<RoutingNode>("KtorSvelteDevRequestRoute")
private val RequestError = AttributeKey<JsonObject>("KtorSvelteDevRequestError")
private val RequestListed = AttributeKey<Boolean>("KtorSvelteDevRequestListed")
private val MeasurePayload = PipelinePhase("KtorSvelteDevMeasurePayload")

internal class DevRequestLog(
    private val resolver: RequestResolver,
    private val clock: () -> Long = System::nanoTime,
    private val wallClock: () -> Long = System::currentTimeMillis,
    val sourceFiles: SourceFiles = SourceFiles(),
    val sensitive: SensitiveFields = SensitiveFields(),
) {
    private val sources = ConcurrentHashMap<RoutingNode, Any>()
    private val routeKeys = ConcurrentHashMap<RoutingNode, String>()
    private val unknown = Any()
    val routeTimes = RouteTimes()
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

    fun countSql(application: Application) {
        application.intercept(ApplicationCallPipeline.Setup) {
            if (!resolver.isApiPath(decodedPathOrRaw(call))) return@intercept
            val sql = RequestSql()
            call.attributes.put(RequestSqlKey, sql)
            withContext(RequestSqlElement(sql)) { proceed() }
        }
    }

    fun measurePayloads(application: Application) {
        application.sendPipeline.insertPhaseAfter(ApplicationSendPipeline.Render, MeasurePayload)
        application.sendPipeline.intercept(MeasurePayload) { content ->
            if (!resolver.isApiPath(decodedPathOrRaw(call))) return@intercept
            payloadSummary(content)?.let { call.attributes.put(RequestPayloadKey, it) }
        }
    }

    fun validationFailed(
        call: ApplicationCall,
        fields: Map<String, List<String>>,
    ) {
        call.attributes.put(RequestFields, fields)
    }

    fun failed(
        call: ApplicationCall,
        cause: Throwable,
    ) {
        call.attributes.put(RequestError, errorSummary(cause, sourceFiles))
    }

    fun leftUnanswered(call: ApplicationCall) {
        if (!call.response.isCommitted) finished(call, HttpStatusCode.InternalServerError)
    }

    fun finished(
        call: ApplicationCall,
        status: HttpStatusCode = call.response.status() ?: HttpStatusCode.OK,
    ) {
        val startedAt = call.attributes.getOrNull(RequestStartedAt) ?: return
        if (!resolver.isApiPath(decodedPathOrRaw(call)) || call.attributes.contains(RequestListed)) return
        call.attributes.put(RequestListed, true)
        val ms = (clock() - startedAt) / 1_000_000.0
        call.attributes.getOrNull(RequestRoute)?.let { node ->
            routeKeys
                .getOrPut(
                    node,
                ) { routeKey(node).orEmpty() }
                .takeIf { it.isNotEmpty() }
                ?.let { routeTimes.record(it, ms, status.value) }
        }
        val entry =
            buildJsonObject {
                put("method", call.request.httpMethod.value)
                put("path", sensitive.maskQuery(call.request.uri))
                put("status", status.value)
                put("ms", ms)
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
                call.attributes.getOrNull(RequestError)?.let { put("error", it) }
                call.attributes.getOrNull(RequestPayloadKey)?.let { put("size", it) }
                call.attributes
                    .getOrNull(RequestSqlKey)
                    ?.summary()
                    ?.let { put("sql", it) }
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
    routeMap: () -> JsonObject,
    status: suspend (ApplicationCall) -> JsonObject,
) {
    get(DEV_SENSITIVE_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(
            JsonArray(
                log.sensitive.names
                    .sorted()
                    .map(::JsonPrimitive),
            ).toString(),
            ContentType.Application.Json,
        )
    }
    get(DEV_SLOWEST_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(log.routeTimes.ranking().toString(), ContentType.Application.Json)
    }
    get(DEV_STATUS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(status(call).toString(), ContentType.Application.Json)
    }
    get(DEV_ROUTE_MAP_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(routeMap().toString(), ContentType.Application.Json)
    }
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
