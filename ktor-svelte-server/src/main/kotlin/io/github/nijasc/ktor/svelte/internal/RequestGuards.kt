package io.github.nijasc.ktor.svelte.internal

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.decodeURLPart
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.PayloadTooLargeException
import io.ktor.server.plugins.origin
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.path
import io.ktor.server.response.respondText
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import java.net.URI
import java.net.URISyntaxException

private val UNSAFE_METHODS = setOf(HttpMethod.Post, HttpMethod.Put, HttpMethod.Patch, HttpMethod.Delete)
private const val SEC_FETCH_SITE = "Sec-Fetch-Site"
private const val CROSS_ORIGIN_MESSAGE =
    "Cross-origin API request refused. Add the origin with allowedOrigins(...) in install(Svelte) to allow it."

internal class OriginCheck(
    allowedOrigins: List<String>,
) {
    private val allowed = allowedOrigins.map(::normalizeOrigin).toSet()

    fun allows(
        method: HttpMethod,
        origin: String?,
        secFetchSite: String?,
        requestHost: String,
    ): Boolean {
        if (method !in UNSAFE_METHODS) return true
        if (origin == null) return !secFetchSite.equals("cross-site", ignoreCase = true)
        if (origin.trim() == "null") return false
        if (normalizeOrigin(origin) in allowed) return true
        val originHost = hostOf(origin) ?: return false
        return originHost.equals(requestHost.removeSurrounding("[", "]"), ignoreCase = true)
    }

    suspend fun refuseIfCrossOrigin(call: ApplicationCall): Boolean {
        val allowedCall =
            allows(
                call.request.httpMethod,
                call.request.header(HttpHeaders.Origin),
                call.request.header(SEC_FETCH_SITE),
                call.request.origin.serverHost,
            )
        if (allowedCall) return false
        respondJsonMessage(call, HttpStatusCode.Forbidden, CROSS_ORIGIN_MESSAGE)
        return true
    }
}

internal fun requestPathForGuards(call: ApplicationCall): String {
    val path = call.request.path()
    return try {
        path.decodeURLPart()
    } catch (_: IllegalArgumentException) {
        path
    }
}

internal fun Throwable.findPayloadTooLarge(): PayloadTooLargeException? =
    generateSequence(this) { it.cause }.take(16).filterIsInstance<PayloadTooLargeException>().firstOrNull()

internal suspend fun respondBodyTooLarge(
    call: ApplicationCall,
    limit: Long,
) {
    respondJsonMessage(call, HttpStatusCode.PayloadTooLarge, "Request body is larger than the limit of $limit bytes.")
}

private suspend fun respondJsonMessage(
    call: ApplicationCall,
    status: HttpStatusCode,
    message: String,
) {
    val body = JsonObject(mapOf("message" to JsonPrimitive(message)))
    call.respondText(body.toString(), ContentType.Application.Json, status)
}

private fun normalizeOrigin(origin: String): String = origin.trim().trimEnd('/').lowercase()

private fun hostOf(origin: String): String? =
    try {
        URI(origin.trim()).host?.removeSurrounding("[", "]")
    } catch (_: URISyntaxException) {
        null
    }
