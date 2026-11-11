package io.github.nijasc.ktor.svelte.internal.security

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.log
import io.ktor.server.application.pluginRegistry
import io.ktor.server.engine.defaultExceptionStatusCode
import io.ktor.server.plugins.callid.callId
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.respondText

private const val STATUS_PAGES_PLUGIN = "StatusPages"

internal fun mayHideErrorDetails(call: ApplicationCall): Boolean =
    !call.application.developmentMode &&
        !call.response.isCommitted &&
        call.application.pluginRegistry.allKeys
            .none { it.name == STATUS_PAGES_PLUGIN }

internal suspend fun respondWithoutDetails(
    call: ApplicationCall,
    cause: Throwable,
    asJson: Boolean,
) {
    val status = defaultExceptionStatusCode(cause) ?: HttpStatusCode.InternalServerError
    if (status == HttpStatusCode.InternalServerError) {
        val requestId = call.callId?.let { " [request $it]" }.orEmpty()
        call.application.log.error("Unhandled: ${call.request.httpMethod.value} - ${call.request.uri}$requestId", cause)
    }
    val message = "${status.description}."
    if (asJson) respondJsonMessage(call, status, message) else call.respondText(message, status = status)
}
