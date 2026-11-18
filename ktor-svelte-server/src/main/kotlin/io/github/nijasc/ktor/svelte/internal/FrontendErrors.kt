package io.github.nijasc.ktor.svelte.internal

import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.origin
import io.ktor.server.request.header
import io.ktor.server.request.receiveChannel
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.post
import io.ktor.utils.io.ExperimentalKtorApi
import io.ktor.utils.io.readRemaining
import kotlinx.io.readByteArray
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.util.concurrent.ConcurrentHashMap

internal const val FRONTEND_ERRORS_PATH = "/_ktor-svelte/errors"
internal const val FRONTEND_LOGGER = "ktor-svelte.frontend"
private const val MAX_MESSAGE = 500
private const val MAX_PAGE = 200
private const val MAX_STACK_LINE = 300
private const val MAX_REQUEST_ID = 64
private const val MINUTE_MILLIS = 60_000L
private const val MAX_CLIENTS = 10_000
private val lenient = Json { ignoreUnknownKeys = true }
private val REQUEST_ID = Regex("[A-Za-z0-9._-]+")
private val CONTROL_RUN = Regex("\\p{Cntrl}+")

@Serializable
internal data class FrontendError(
    val message: String = "",
    val stack: String? = null,
    val page: String = "",
    val requestId: String? = null,
)

internal class ReportLimiter(
    private val perMinute: Int,
    private val now: () -> Long = System::currentTimeMillis,
) {
    private class Window(
        var start: Long,
        var count: Int,
    )

    private val windows = ConcurrentHashMap<String, Window>()

    fun allows(client: String): Boolean {
        val time = now()
        if (windows.size > MAX_CLIENTS) windows.entries.removeIf { time - it.value.start >= MINUTE_MILLIS }
        if (windows.size > MAX_CLIENTS) return false
        val window = windows.computeIfAbsent(client) { Window(time, 0) }
        synchronized(window) {
            if (time - window.start >= MINUTE_MILLIS) {
                window.start = time
                window.count = 0
            }
            window.count++
            return window.count <= perMinute
        }
    }
}

internal suspend fun ApplicationCall.receiveTextUpTo(limit: Int): String? {
    val bytes = receiveChannel().readRemaining(limit + 1L).readByteArray()
    return if (bytes.size > limit) null else bytes.decodeToString()
}

private fun oneLine(
    text: String,
    limit: Int,
): String = text.take(limit).replace(CONTROL_RUN, " ").trim()

internal fun frontendErrorLine(error: FrontendError): String? {
    val message = oneLine(error.message, MAX_MESSAGE)
    if (message.isEmpty()) return null
    val page = oneLine(error.page, MAX_PAGE).ifEmpty { "an unknown page" }
    val where =
        error.stack
            ?.lineSequence()
            ?.map { oneLine(it, MAX_STACK_LINE) }
            ?.firstOrNull { it.startsWith("at ") || '@' in it }
    val request = error.requestId?.take(MAX_REQUEST_ID)?.takeIf { REQUEST_ID.matches(it) }
    return "Frontend error on $page: $message" +
        (where?.let { " ($it)" } ?: "") +
        (request?.let { ", after the API call with request ID $it" } ?: "")
}

@OptIn(ExperimentalKtorApi::class)
internal fun Route.frontendErrorRoute(
    perClientPerMinute: Int,
    maxBodyBytes: Int,
    logger: Logger = LoggerFactory.getLogger(FRONTEND_LOGGER),
) {
    val limiter = ReportLimiter(perClientPerMinute)
    post(FRONTEND_ERRORS_PATH) {
        call.response.headers.append(HttpHeaders.CacheControl, "no-store")
        if (!limiter.allows(call.request.origin.remoteAddress)) return@post call.respond(HttpStatusCode.TooManyRequests)
        val declared = call.request.header(HttpHeaders.ContentLength)?.toLongOrNull()
        if (declared != null && declared > maxBodyBytes) return@post call.respond(HttpStatusCode.PayloadTooLarge)
        val body = call.receiveTextUpTo(maxBodyBytes) ?: return@post call.respond(HttpStatusCode.PayloadTooLarge)
        val line = runCatching { lenient.decodeFromString<FrontendError>(body) }.getOrNull()?.let(::frontendErrorLine)
        if (line == null) return@post call.respond(HttpStatusCode.BadRequest)
        logger.warn(line)
        call.respond(HttpStatusCode.NoContent)
    }.hide()
}
