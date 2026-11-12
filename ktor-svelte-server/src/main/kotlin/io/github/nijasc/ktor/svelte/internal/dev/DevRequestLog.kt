package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.response.respondTextWriter
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.util.AttributeKey
import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put

internal const val DEV_REQUESTS_PATH = "/_ktor-svelte/dev/requests"
private const val KEPT_REQUESTS = 100

private val RequestStartedAt = AttributeKey<Long>("KtorSvelteDevRequestStartedAt")
private val RequestFields = AttributeKey<Map<String, List<String>>>("KtorSvelteDevRequestFields")

internal class DevRequestLog(
    private val resolver: RequestResolver,
    private val clock: () -> Long = System::nanoTime,
    private val wallClock: () -> Long = System::currentTimeMillis,
) {
    private val recent = ArrayDeque<String>()
    private val updates = MutableSharedFlow<String>(extraBufferCapacity = KEPT_REQUESTS, onBufferOverflow = BufferOverflow.DROP_OLDEST)

    val entries: SharedFlow<String> get() = updates

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
}

internal fun Route.devRequestRoutes(
    log: DevRequestLog,
    allowRemote: Boolean,
) {
    get(DEV_REQUESTS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondTextWriter(ContentType.Text.EventStream) {
            log.snapshot().forEach { write("data: $it\n\n") }
            flush()
            log.entries.collect { entry ->
                write("data: $entry\n\n")
                flush()
            }
        }
    }
}
