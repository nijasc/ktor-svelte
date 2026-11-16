package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.security.decodedPathOrRaw
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.util.AttributeKey
import org.slf4j.Logger
import org.slf4j.LoggerFactory

internal const val ACCESS_LOGGER = "ktor-svelte.access"
private const val BUILD_ASSETS = "/_app/"
private const val NANOS_PER_MILLI = 1_000_000
private val NEEDS_QUOTES = Regex("""[\s"=]""")
private val AccessStartedAt = AttributeKey<Long>("KtorSvelteAccessStartedAt")

internal fun accessLine(
    method: String,
    path: String,
    status: Int,
    milliseconds: Long,
    requestId: String?,
): String {
    val shownPath = if (NEEDS_QUOTES.containsMatchIn(path)) "\"" + path.replace("\\", "\\\\").replace("\"", "\\\"") + "\"" else path
    val id = requestId?.takeIf(::isValidRequestId)?.let { " id=$it" }.orEmpty()
    return "method=$method path=$shownPath status=$status ms=$milliseconds$id"
}

internal class AccessLog(
    private val logger: Logger = LoggerFactory.getLogger(ACCESS_LOGGER),
    private val clock: () -> Long = System::nanoTime,
) {
    fun started(call: ApplicationCall) {
        call.attributes.put(AccessStartedAt, clock())
    }

    fun finished(call: ApplicationCall) {
        val startedAt = call.attributes.getOrNull(AccessStartedAt) ?: return
        val path = decodedPathOrRaw(call)
        if (path.startsWith(BUILD_ASSETS)) return
        logger.info(
            accessLine(
                call.request.httpMethod.value,
                path,
                (call.response.status() ?: HttpStatusCode.OK).value,
                (clock() - startedAt) / NANOS_PER_MILLI,
                call.request.header(HttpHeaders.XRequestId) ?: call.response.headers[HttpHeaders.XRequestId],
            ),
        )
    }
}
