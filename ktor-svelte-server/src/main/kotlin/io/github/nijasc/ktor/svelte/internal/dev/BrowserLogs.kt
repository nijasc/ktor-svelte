package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.post
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.slf4j.Logger
import org.slf4j.LoggerFactory

internal const val BROWSER_LOG_PATH = "/_ktor-svelte/dev/log"
internal const val BROWSER_LOGGER = "ktor-svelte.browser"
private const val MAX_BATCH_CHARACTERS = 256 * 1024
private const val MAX_MESSAGE_CHARACTERS = 4000
private val lenient = Json { ignoreUnknownKeys = true }

@Serializable
internal data class BrowserLogEntry(
    val level: String = "log",
    val message: String = "",
    val url: String = "",
)

internal fun logBrowserEntries(
    logger: Logger,
    entries: List<BrowserLogEntry>,
) {
    entries.forEach { entry ->
        val text = entry.message.take(MAX_MESSAGE_CHARACTERS) + if (entry.url.isNotEmpty()) " [${entry.url.take(200)}]" else ""
        when (entry.level) {
            "error" -> logger.error(text)
            "warn" -> logger.warn(text)
            "debug" -> logger.debug(text)
            else -> logger.info(text)
        }
    }
}

internal fun Route.browserLogRoute(allowRemote: Boolean) {
    val logger = LoggerFactory.getLogger(BROWSER_LOGGER)
    post(BROWSER_LOG_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@post
        }
        val body = call.receiveText()
        if (body.length > MAX_BATCH_CHARACTERS) {
            call.respond(HttpStatusCode.PayloadTooLarge)
            return@post
        }
        val entries = runCatching { lenient.decodeFromString<List<BrowserLogEntry>>(body) }.getOrNull()
        if (entries == null) {
            call.respond(HttpStatusCode.BadRequest)
            return@post
        }
        logBrowserEntries(logger, entries)
        call.respond(HttpStatusCode.NoContent)
    }
}
