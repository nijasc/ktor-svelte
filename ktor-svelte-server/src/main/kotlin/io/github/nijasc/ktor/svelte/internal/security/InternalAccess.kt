package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.SvelteInternalAccessConfig
import io.github.nijasc.ktor.svelte.internal.dev.isLocalCall
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.origin
import io.ktor.server.request.header
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import java.net.InetAddress
import java.security.MessageDigest

private const val SHORTEST_TOKEN = 16
private const val BITS_PER_BYTE = 8
private const val BEARER = "Bearer "
private val IP_LITERAL = Regex("[0-9a-fA-F:.]+")
private val FORWARDING_HEADERS = listOf(HttpHeaders.Forwarded, HttpHeaders.XForwardedFor, "X-Real-IP")

internal const val INTERNAL_MESSAGE = "This endpoint is internal."

internal class NetworkRange private constructor(
    private val address: ByteArray,
    private val prefix: Int,
) {
    fun contains(ip: String): Boolean {
        val other = addressOf(ip) ?: return false
        if (other.size != address.size) return false
        return (0 until prefix).all { bit ->
            val mask = 1 shl (BITS_PER_BYTE - 1 - bit % BITS_PER_BYTE)
            (address[bit / BITS_PER_BYTE].toInt() and mask) == (other[bit / BITS_PER_BYTE].toInt() and mask)
        }
    }

    companion object {
        fun addressOf(ip: String): ByteArray? {
            val literal = ip.substringBefore('%').removeSurrounding("[", "]")
            if (!IP_LITERAL.matches(literal) || (':' !in literal && literal.count { it == '.' } != 3)) return null
            return runCatching { InetAddress.getByName(literal).address }.getOrNull()
        }

        fun parse(range: String): NetworkRange {
            val address = addressOf(range.substringBefore('/'))
            val bits = address?.let { it.size * BITS_PER_BYTE }
            val prefix = if ('/' in range) range.substringAfter('/').toIntOrNull() else bits
            require(address != null && bits != null && prefix != null && prefix in 0..bits) {
                "internalAccess: '$range' is not a network range. Use an address or a range such as \"10.0.0.0/8\" or \"fd00::/8\"."
            }
            return NetworkRange(address, prefix)
        }
    }
}

internal fun pathSegments(path: String): List<String> = path.split('/').filter { it.isNotEmpty() }

internal enum class AccessDecision { ALLOWED, TOKEN_MISSING, REFUSED }

internal class InternalAccess(
    config: SvelteInternalAccessConfig,
) {
    private val token = config.token?.toByteArray()
    private val networks = config.networkList.map(NetworkRange::parse)
    private val checks = config.checks.toList()
    val isConfigured: Boolean = config.isConfigured

    init {
        require(config.token == null || config.token.orEmpty().length >= SHORTEST_TOKEN) {
            "internalAccess: the token is shorter than $SHORTEST_TOKEN characters. Use a long random value, such as the output of 'openssl rand -hex 32'."
        }
    }

    val summary: String
        get() =
            listOfNotNull(
                "this machine",
                "a token".takeIf { token != null },
                "${networks.size} network range${if (networks.size == 1) "" else "s"}".takeIf { networks.isNotEmpty() },
                "${checks.size} check${if (checks.size == 1) "" else "s"} of your own".takeIf { checks.isNotEmpty() },
            ).joinToString(", ")

    suspend fun decide(call: ApplicationCall): AccessDecision {
        if (isLocalCall(call)) return AccessDecision.ALLOWED
        val sent = call.request.header(HttpHeaders.Authorization)?.takeIf { it.startsWith(BEARER, ignoreCase = true) }
        if (token != null && sent != null && MessageDigest.isEqual(token, sent.substring(BEARER.length).trim().toByteArray())) {
            return AccessDecision.ALLOWED
        }
        if (networks.isNotEmpty() && comesFromAllowedNetwork(call)) return AccessDecision.ALLOWED
        if (checks.any { it(call) }) return AccessDecision.ALLOWED
        return if (token != null && sent == null) AccessDecision.TOKEN_MISSING else AccessDecision.REFUSED
    }

    private fun comesFromAllowedNetwork(call: ApplicationCall): Boolean {
        val peer = call.request.local.remoteAddress
        val client = call.request.origin.remoteAddress
        val throughUnknownProxy = client == peer && FORWARDING_HEADERS.any { it in call.request.headers }
        return !throughUnknownProxy && networks.any { it.contains(client) }
    }

    private suspend fun refuse(
        call: ApplicationCall,
        decision: AccessDecision,
        localOnlyMessage: String,
    ) {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        if (decision == AccessDecision.TOKEN_MISSING) {
            call.response.header(HttpHeaders.WWWAuthenticate, "Bearer")
            call.respondText(INTERNAL_MESSAGE, status = HttpStatusCode.Unauthorized)
        } else {
            call.respondText(if (isConfigured) INTERNAL_MESSAGE else localOnlyMessage, status = HttpStatusCode.Forbidden)
        }
    }

    suspend fun allows(
        call: ApplicationCall,
        localOnlyMessage: String,
    ): Boolean {
        val decision = decide(call)
        if (decision != AccessDecision.ALLOWED) refuse(call, decision, localOnlyMessage)
        return decision == AccessDecision.ALLOWED
    }
}
