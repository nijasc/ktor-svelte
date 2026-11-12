package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.ktor.http.ContentType
import io.ktor.http.Headers
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.request.receive
import io.ktor.server.request.uri
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.jvm.javaio.toByteReadChannel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.future.await
import kotlinx.coroutines.withContext
import java.io.IOException
import java.io.InputStream
import java.net.InetAddress
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
private val IPV6_LITERAL = Regex("[0-9a-f:.]+")

internal fun isLoopbackHost(host: String): Boolean {
    val name = host.lowercase().removeSurrounding("[", "]")
    return name == "localhost" || name.endsWith(".localhost") || isLoopbackIp(name)
}

private fun isLoopbackIp(address: String): Boolean {
    val name = address.lowercase().removeSurrounding("[", "]").substringBefore('%')
    if (IPV4_LOOPBACK.matches(name)) return true
    return ':' in name && IPV6_LITERAL.matches(name) && runCatching { InetAddress.getByName(name).isLoopbackAddress }.getOrDefault(false)
}

internal fun hostWithoutPort(hostHeader: String): String =
    if (hostHeader.startsWith("[")) hostHeader.substringBefore("]") + "]" else hostHeader.substringBefore(':')

internal fun isLocalRequest(
    remoteAddress: String,
    hostHeader: String?,
): Boolean =
    (remoteAddress == "localhost" || isLoopbackIp(remoteAddress)) &&
        (hostHeader == null || isLoopbackHost(hostWithoutPort(hostHeader)))

private val FORWARDING_HEADERS = listOf(HttpHeaders.Forwarded, HttpHeaders.XForwardedFor, HttpHeaders.XForwardedHost, "X-Real-IP")

internal fun isLocalCall(call: ApplicationCall): Boolean =
    FORWARDING_HEADERS.none { it in call.request.headers } &&
        isLocalRequest(call.request.local.remoteAddress, call.request.header(HttpHeaders.Host))

internal fun requireAllowedTarget(
    url: String,
    allowRemote: Boolean,
) {
    val host = URI.create(url).host.orEmpty()
    check(allowRemote || isLoopbackHost(host)) {
        "ktor-svelte will not proxy to $url because it is not on this machine. Set dev { allowRemote = true } if you trust it." +
            DocLink.DEV_WORKFLOW.see()
    }
}

internal fun resolveDevServerUrl(
    configured: String,
    environmentOverride: String?,
): String = environmentOverride?.takeIf { it.isNotBlank() } ?: configured

private const val URI_SAFE_PUNCTUATION = "-._~!$&'()*+,;=:@/?"

private fun isPercentEscape(
    value: String,
    index: Int,
): Boolean = index + 2 < value.length && value[index + 1].isHexDigit() && value[index + 2].isHexDigit()

private fun Char.isHexDigit(): Boolean = this in '0'..'9' || this in 'a'..'f' || this in 'A'..'F'

internal fun upstreamUri(
    target: String,
    requestUri: String,
): URI {
    val encoded = StringBuilder(target.length + requestUri.length + 16).append(target)
    var index = 0
    while (index < requestUri.length) {
        val char = requestUri[index]
        when {
            char == '%' && isPercentEscape(requestUri, index) -> {
                encoded.append(requestUri, index, index + 3)
                index += 3
            }
            char in 'a'..'z' || char in 'A'..'Z' || char in '0'..'9' || char in URI_SAFE_PUNCTUATION -> {
                encoded.append(char)
                index++
            }
            else -> {
                val length = if (Character.isHighSurrogate(char) && index + 1 < requestUri.length) 2 else 1
                requestUri.substring(index, index + length).toByteArray(Charsets.UTF_8).forEach {
                    encoded.append('%').append("%02X".format(it.toInt() and 0xFF))
                }
                index += length
            }
        }
    }
    return URI.create(encoded.toString())
}

internal class DevProxy(
    baseUrl: String,
    private val clientFeatures: List<String> = emptyList(),
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
        val method = call.request.httpMethod
        val body =
            if (method == HttpMethod.Get || method == HttpMethod.Head) {
                HttpRequest.BodyPublishers.noBody()
            } else {
                HttpRequest.BodyPublishers.ofByteArray(call.receive<ByteArray>())
            }
        val orderedTargets = listOf(preferredTarget) + (targets - preferredTarget)
        for (target in orderedTargets) {
            val response = send(call, target, body) ?: continue
            preferredTarget = target
            respond(call, response)
            return true
        }
        return false
    }

    suspend fun isReachable(): Boolean =
        targets.any { target ->
            val request =
                HttpRequest
                    .newBuilder(URI.create("$target/"))
                    .timeout(Duration.ofSeconds(1))
                    .method(HttpMethod.Head.value, HttpRequest.BodyPublishers.noBody())
                    .build()
            try {
                client.sendAsync(request, HttpResponse.BodyHandlers.discarding()).await()
                true
            } catch (_: IOException) {
                false
            }
        }

    private suspend fun send(
        call: ApplicationCall,
        target: String,
        body: HttpRequest.BodyPublisher,
    ): HttpResponse<InputStream>? {
        val builder =
            HttpRequest
                .newBuilder(upstreamUri(target, call.request.uri))
                .method(call.request.httpMethod.value, body)
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
        val injectable =
            status == HttpStatusCode.OK &&
                contentType?.match(ContentType.Text.Html) == true &&
                response.headers().firstValue(HttpHeaders.ContentEncoding).isEmpty
        if (hasNoBody) {
            response.body().close()
            call.respond(ProxiedHeaders(status, contentType, contentLength, headers))
        } else if (injectable) {
            val html = withContext(Dispatchers.IO) { response.body().use { it.readBytes() } }.toString(Charsets.UTF_8)
            call.respond(ProxiedBytes(status, contentType, headers, injectDevClient(html, clientFeatures).toByteArray()))
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

private class ProxiedBytes(
    override val status: HttpStatusCode,
    override val contentType: ContentType?,
    override val headers: Headers,
    private val bytes: ByteArray,
) : OutgoingContent.ByteArrayContent() {
    override val contentLength: Long get() = bytes.size.toLong()

    override fun bytes(): ByteArray = bytes
}

private class ProxiedBody(
    override val status: HttpStatusCode,
    override val contentType: ContentType?,
    override val contentLength: Long?,
    override val headers: Headers,
    private val stream: InputStream,
) : OutgoingContent.ReadChannelContent() {
    override fun readFrom(): ByteReadChannel = stream.toByteReadChannel()
}
