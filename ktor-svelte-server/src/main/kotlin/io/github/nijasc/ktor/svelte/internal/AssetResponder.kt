package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.SvelteCacheConfig
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.http.defaultForFilePath
import io.ktor.http.withCharsetIfNeeded
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.acceptEncodingItems
import io.ktor.server.request.header
import io.ktor.server.request.httpMethod
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.jvm.javaio.toByteReadChannel
import java.io.InputStream

private const val IMMUTABLE_PREFIX = "_app/immutable/"
private const val VERSION_FILE = "_app/version.json"

internal fun privateCacheControl(value: String): String =
    when {
        "public" in value -> value.replace("public", "private")
        "private" in value || "no-store" in value -> value
        else -> "private, $value"
    }

internal class AssetResponder(
    private val store: AssetStore,
    private val cache: SvelteCacheConfig,
) {
    suspend fun respond(
        call: ApplicationCall,
        path: String,
        entry: ManifestEntry,
        notFound: Boolean,
        privateResponse: Boolean = false,
    ) {
        val encoding = selectEncoding(call, entry)
        val eTag = if (encoding == null) "\"${entry.hash}\"" else "\"${entry.hash}-${encoding.manifestKey}\""
        val status = if (notFound) HttpStatusCode.NotFound else HttpStatusCode.OK

        val cacheControl = cacheControlFor(path)
        call.response.header(HttpHeaders.CacheControl, if (privateResponse) privateCacheControl(cacheControl) else cacheControl)
        call.response.header(HttpHeaders.ETag, eTag)
        if (entry.encodings.isNotEmpty()) call.response.header(HttpHeaders.Vary, HttpHeaders.AcceptEncoding)

        if (!notFound && matchesIfNoneMatch(call.request.header(HttpHeaders.IfNoneMatch), eTag)) {
            call.respond(HttpStatusCode.NotModified)
            return
        }

        if (encoding != null) call.response.header(HttpHeaders.ContentEncoding, encoding.manifestKey)
        val contentType = ContentType.defaultForFilePath(path).withCharsetIfNeeded(Charsets.UTF_8)
        val length = encoding?.let { entry.encodings.getValue(it) } ?: entry.size

        if (call.request.httpMethod == HttpMethod.Head) {
            call.respond(HeadContent(status, contentType, length))
            return
        }

        val stream =
            store.open(path + encoding?.fileSuffix.orEmpty())
                ?: error("ktor-svelte manifest lists '$path', but the file could not be opened.")
        call.respond(StreamContent(status, contentType, length, stream))
    }

    private fun cacheControlFor(path: String): String =
        when {
            path.startsWith(IMMUTABLE_PREFIX) -> cache.immutable
            path == VERSION_FILE || path.endsWith(".html") -> cache.html
            else -> cache.other
        }

    private fun selectEncoding(
        call: ApplicationCall,
        entry: ManifestEntry,
    ): AssetEncoding? {
        if (entry.encodings.isEmpty()) return null
        val accepted =
            call.request
                .acceptEncodingItems()
                .filter { it.quality > 0.0 }
                .map { it.value.lowercase() }
        return AssetEncoding.entries.firstOrNull { encoding ->
            encoding in entry.encodings && (encoding.manifestKey in accepted || "*" in accepted)
        }
    }

    private fun matchesIfNoneMatch(
        header: String?,
        eTag: String,
    ): Boolean {
        if (header == null) return false
        return header.split(',').map { it.trim().removePrefix("W/") }.any { it == "*" || it == eTag }
    }
}

private class HeadContent(
    override val status: HttpStatusCode,
    override val contentType: ContentType,
    override val contentLength: Long,
) : OutgoingContent.NoContent()

private class StreamContent(
    override val status: HttpStatusCode,
    override val contentType: ContentType,
    override val contentLength: Long,
    private val stream: InputStream,
) : OutgoingContent.ReadChannelContent() {
    override fun readFrom(): ByteReadChannel = stream.toByteReadChannel()
}
