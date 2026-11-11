package io.github.nijasc.ktor.svelte.internal.assets

import io.github.nijasc.ktor.svelte.SvelteCacheConfig
import io.github.nijasc.ktor.svelte.internal.security.CONTENT_SECURITY_POLICY_HEADER
import io.github.nijasc.ktor.svelte.internal.security.PageContentSecurityPolicy
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
import io.ktor.util.cio.readChannel
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.jvm.javaio.toByteReadChannel
import java.io.InputStream
import java.nio.file.Path
import java.util.concurrent.ConcurrentHashMap

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
    private val contentSecurityPolicy: PageContentSecurityPolicy? = null,
    private val configInjector: ConfigInjector? = null,
) {
    private val prepared = ConcurrentHashMap<String, PreparedHeaders>()

    suspend fun respond(
        call: ApplicationCall,
        path: String,
        entry: ManifestEntry,
        notFound: Boolean,
        privateResponse: Boolean = false,
    ) {
        val range = requestedRange(call, entry, notFound)
        val encoding = if (range != null) null else selectEncoding(call, entry)
        val headers = preparedFor(path, entry)
        val eTag = headers.eTags.getValue(encoding)
        val status = if (notFound) HttpStatusCode.NotFound else HttpStatusCode.OK

        call.response.header(HttpHeaders.CacheControl, if (privateResponse) headers.privateCacheControl else headers.cacheControl)
        call.response.header(HttpHeaders.ETag, eTag)
        if (entry.encodings.isNotEmpty()) call.response.header(HttpHeaders.Vary, HttpHeaders.AcceptEncoding)
        val contentType = headers.contentType
        if (contentSecurityPolicy != null && headers.isHtml) {
            call.response.header(CONTENT_SECURITY_POLICY_HEADER, contentSecurityPolicy.forPage(path, entry))
        }
        if (configInjector != null && headers.isHtml) {
            configInjector.pageFor(path, entry)?.let { page ->
                respondInjected(call, page, status, notFound, contentType)
                return
            }
        }

        if (!notFound && matchesIfNoneMatch(call.request.header(HttpHeaders.IfNoneMatch), eTag)) {
            call.respond(HttpStatusCode.NotModified)
            return
        }

        if (!notFound) call.response.header(HttpHeaders.AcceptRanges, "bytes")
        if (range == RangeRequest.Unsatisfiable) {
            call.response.header(HttpHeaders.ContentRange, "bytes */${entry.size}")
            call.respond(HttpStatusCode.RequestedRangeNotSatisfiable)
            return
        }
        if (range is RangeRequest.Satisfiable) {
            respondRange(call, path, entry, contentType, range)
            return
        }

        if (encoding != null) call.response.header(HttpHeaders.ContentEncoding, encoding.manifestKey)
        val length = encoding?.let { entry.encodings.getValue(it) } ?: entry.size

        if (call.request.httpMethod == HttpMethod.Head) {
            call.respond(HeadContent(status, contentType, length))
            return
        }

        val servedPath = path + encoding?.fileSuffix.orEmpty()
        val localFile = store.localFile(servedPath)
        if (localFile != null) {
            call.respond(FileContent(status, contentType, length, localFile))
            return
        }
        val stream =
            store.open(servedPath)
                ?: error("ktor-svelte manifest lists '$path', but the file could not be opened.")
        call.respond(StreamContent(status, contentType, length, stream))
    }

    private suspend fun respondInjected(
        call: ApplicationCall,
        page: InjectedPage,
        status: HttpStatusCode,
        notFound: Boolean,
        contentType: ContentType,
    ) {
        val gzip = acceptsGzip(call)
        val eTag = if (gzip) "\"${page.eTag}-gzip\"" else "\"${page.eTag}\""
        call.response.header(HttpHeaders.ETag, eTag)
        call.response.header(HttpHeaders.Vary, HttpHeaders.AcceptEncoding)
        if (!notFound && matchesIfNoneMatch(call.request.header(HttpHeaders.IfNoneMatch), eTag)) {
            call.respond(HttpStatusCode.NotModified)
            return
        }
        if (gzip) call.response.header(HttpHeaders.ContentEncoding, "gzip")
        val bytes = if (gzip) page.gzip else page.plain
        if (call.request.httpMethod == HttpMethod.Head) {
            call.respond(HeadContent(status, contentType, bytes.size.toLong()))
            return
        }
        call.respond(BytesContent(status, contentType, bytes))
    }

    private fun acceptsGzip(call: ApplicationCall): Boolean =
        call.request
            .acceptEncodingItems()
            .any { it.quality > 0.0 && (it.value.equals("gzip", ignoreCase = true) || it.value == "*") }

    private suspend fun respondRange(
        call: ApplicationCall,
        path: String,
        entry: ManifestEntry,
        contentType: ContentType,
        range: RangeRequest.Satisfiable,
    ) {
        call.response.header(HttpHeaders.ContentRange, "bytes ${range.first}-${range.last}/${entry.size}")
        val status = HttpStatusCode.PartialContent
        if (call.request.httpMethod == HttpMethod.Head) {
            call.respond(HeadContent(status, contentType, range.length))
            return
        }
        val localFile = store.localFile(path)
        if (localFile != null) {
            call.respond(FileContent(status, contentType, range.length, localFile, range))
            return
        }
        val stream =
            store.open(path)
                ?: error("ktor-svelte manifest lists '$path', but the file could not be opened.")
        call.respond(StreamContent(status, contentType, range.length, stream.slice(range)))
    }

    private fun requestedRange(
        call: ApplicationCall,
        entry: ManifestEntry,
        notFound: Boolean,
    ): RangeRequest? {
        if (notFound) return null
        val method = call.request.httpMethod
        if (method != HttpMethod.Get && method != HttpMethod.Head) return null
        val header = call.request.header(HttpHeaders.Range) ?: return null
        val ifRange = call.request.header(HttpHeaders.IfRange)
        if (ifRange != null && ifRange.trim() != "\"${entry.hash}\"") return null
        return parseRange(header, entry.size)
    }

    private fun preparedFor(
        path: String,
        entry: ManifestEntry,
    ): PreparedHeaders {
        prepared[path]?.takeIf { it.hash == entry.hash && it.encodings == entry.encodings.keys }?.let { return it }
        val contentType = ContentType.defaultForFilePath(path).withCharsetIfNeeded(Charsets.UTF_8)
        val cacheControl = cacheControlFor(path)
        val eTags = HashMap<AssetEncoding?, String>()
        eTags[null] = "\"${entry.hash}\""
        entry.encodings.keys.forEach { encoding -> eTags[encoding] = "\"${entry.hash}-${encoding.manifestKey}\"" }
        return PreparedHeaders(
            hash = entry.hash,
            encodings = entry.encodings.keys,
            contentType = contentType,
            isHtml = contentType.match(ContentType.Text.Html),
            cacheControl = cacheControl,
            privateCacheControl = privateCacheControl(cacheControl),
            eTags = eTags,
        ).also { prepared[path] = it }
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

private class PreparedHeaders(
    val hash: String,
    val encodings: Set<AssetEncoding>,
    val contentType: ContentType,
    val isHtml: Boolean,
    val cacheControl: String,
    val privateCacheControl: String,
    val eTags: Map<AssetEncoding?, String>,
)

private class BytesContent(
    override val status: HttpStatusCode,
    override val contentType: ContentType,
    private val bytes: ByteArray,
) : OutgoingContent.ByteArrayContent() {
    override val contentLength: Long get() = bytes.size.toLong()

    override fun bytes(): ByteArray = bytes
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

private class FileContent(
    override val status: HttpStatusCode,
    override val contentType: ContentType,
    override val contentLength: Long,
    private val file: Path,
    private val range: RangeRequest.Satisfiable? = null,
) : OutgoingContent.ReadChannelContent() {
    override fun readFrom(): ByteReadChannel = if (range == null) file.readChannel() else file.readChannel(range.first, range.last)
}
