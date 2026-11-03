package io.github.nijasc.ktor.svelte.internal

import io.ktor.http.ContentType
import io.ktor.http.Headers
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.jvm.javaio.toByteReadChannel
import kotlinx.coroutines.future.await
import java.io.IOException
import java.io.InputStream
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration

private val UNFORWARDED_REQUEST_HEADERS =
    setOf(
        "authorization",
        "connection",
        "content-length",
        "cookie",
        "expect",
        "host",
        "http2-settings",
        "keep-alive",
        "proxy-authorization",
        "proxy-connection",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
    )

private val UNFORWARDED_RESPONSE_HEADERS =
    setOf(
        "connection",
        "content-length",
        "content-type",
        "keep-alive",
        "proxy-authenticate",
        "proxy-connection",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
    )

private val IPV4_LOOPBACK = Regex("127(\\.\\d{1,3}){3}")

internal fun isLoopbackHost(host: String): Boolean {
    val name = host.lowercase().removeSurrounding("[", "]").removePrefix("::ffff:")
    return name == "localhost" || name.endsWith(".localhost") || name == "::1" || name == "0:0:0:0:0:0:0:1" || IPV4_LOOPBACK.matches(name)
}

internal fun hostWithoutPort(hostHeader: String): String =
    if (hostHeader.startsWith("[")) hostHeader.substringBefore("]") + "]" else hostHeader.substringBefore(':')

internal fun isLocalRequest(
    remoteAddress: String,
    hostHeader: String?,
): Boolean = isLoopbackHost(remoteAddress) && (hostHeader == null || isLoopbackHost(hostWithoutPort(hostHeader)))

internal fun requireAllowedTarget(
    url: String,
    allowRemote: Boolean,
) {
    val host = URI.create(url).host.orEmpty()
    check(allowRemote || isLoopbackHost(host)) {
        "ktor-svelte will not proxy to $url because it is not on this machine. Set dev { allowRemote = true } if you trust it."
    }
}

internal fun resolveDevServerUrl(
    configured: String,
    environmentOverride: String?,
): String = environmentOverride?.takeIf { it.isNotBlank() } ?: configured

internal class DevProxy(
    baseUrl: String,
) {
    private val client =
        HttpClient
            .newBuilder()
            .version(HttpClient.Version.HTTP_1_1)
            .followRedirects(HttpClient.Redirect.NEVER)
            .connectTimeout(Duration.ofSeconds(1))
            .build()

    private val targets: List<String> = loopbackVariants(baseUrl.trimEnd('/'))

    @Volatile
    private var preferredTarget: String = targets.first()

    suspend fun forward(call: ApplicationCall): Boolean {
        if (call.request.header(HttpHeaders.Upgrade) != null) {
            call.respondText("The ktor-svelte dev proxy does not forward WebSockets.", status = HttpStatusCode.BadGateway)
            return true
        }
        val orderedTargets = listOf(preferredTarget) + (targets - preferredTarget)
        for (target in orderedTargets) {
            val response = send(call, target) ?: continue
            preferredTarget = target
            respond(call, response)
            return true
        }
        return false
    }

    private suspend fun send(
        call: ApplicationCall,
        target: String,
    ): HttpResponse<InputStream>? {
        val builder =
            HttpRequest
                .newBuilder(URI.create(target + call.request.uri))
                .method(call.request.httpMethod.value, HttpRequest.BodyPublishers.noBody())
        call.request.headers.forEach { name, values ->
            if (name.lowercase() !in UNFORWARDED_REQUEST_HEADERS) {
                values.forEach { value -> builder.header(name, value) }
            }
        }
        return try {
            client.sendAsync(builder.build(), HttpResponse.BodyHandlers.ofInputStream()).await()
        } catch (_: IOException) {
            null
        }
    }

    private suspend fun respond(
        call: ApplicationCall,
        response: HttpResponse<InputStream>,
    ) {
        val status = HttpStatusCode.fromValue(response.statusCode())
        val contentType =
            response
                .headers()
                .firstValue(HttpHeaders.ContentType)
                .map { ContentType.parse(it) }
                .orElse(null)
        val contentLength =
            response
                .headers()
                .firstValueAsLong(HttpHeaders.ContentLength)
                .let { if (it.isPresent) it.asLong else null }
        val headers =
            Headers.build {
                response.headers().map().forEach { (name, values) ->
                    if (!name.startsWith(":") && name.lowercase() !in UNFORWARDED_RESPONSE_HEADERS) {
                        appendAll(name, values)
                    }
                }
            }
        val hasNoBody = call.request.httpMethod == HttpMethod.Head || status == HttpStatusCode.NotModified
        if (hasNoBody) {
            response.body().close()
            call.respond(ProxiedHeaders(status, contentType, contentLength, headers))
        } else {
            call.respond(ProxiedBody(status, contentType, contentLength, headers, response.body()))
        }
    }

    private fun loopbackVariants(url: String): List<String> {
        if (URI.create(url).host != "localhost") return listOf(url)
        return listOf(url, url.replaceFirst("localhost", "127.0.0.1"), url.replaceFirst("localhost", "[::1]"))
    }
}

private class ProxiedHeaders(
    override val status: HttpStatusCode,
    override val contentType: ContentType?,
    override val contentLength: Long?,
    override val headers: Headers,
) : OutgoingContent.NoContent()

private class ProxiedBody(
    override val status: HttpStatusCode,
    override val contentType: ContentType?,
    override val contentLength: Long?,
    override val headers: Headers,
    private val stream: InputStream,
) : OutgoingContent.ReadChannelContent() {
    override fun readFrom(): ByteReadChannel = stream.toByteReadChannel()
}
