package io.github.nijasc.ktor.svelte.internal.assets

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.URLBuilder
import io.ktor.http.URLProtocol
import io.ktor.http.encodeURLPath
import io.ktor.http.withCharset
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.origin
import io.ktor.server.response.header
import io.ktor.server.response.respondText

internal const val SITEMAP_PATH = "/sitemap.xml"
internal const val ROBOTS_PATH = "/robots.txt"

internal class SiteFiles(
    siteUrl: String?,
    apiPrefixes: List<String>,
    private val excludedPages: Set<String>,
) {
    private val siteUrl = siteUrl?.trimEnd('/')
    private val apiPrefixes = apiPrefixes.map { "/" + it.trim('/') }.filter { it != "/" }

    fun serves(path: String): Boolean = path == SITEMAP_PATH || path == ROBOTS_PATH

    suspend fun respond(
        call: ApplicationCall,
        path: String,
        manifest: Manifest,
    ) {
        val base = siteUrl ?: requestBaseUrl(call)
        call.response.header(HttpHeaders.CacheControl, "no-cache")
        if (path == SITEMAP_PATH) {
            call.respondText(sitemapXml(base, manifest), ContentType.Application.Xml.withCharset(Charsets.UTF_8))
        } else {
            call.respondText(robotsTxt(base), ContentType.Text.Plain.withCharset(Charsets.UTF_8))
        }
    }

    fun pageUrls(manifest: Manifest): List<String> =
        manifest.files.keys
            .filter { it.endsWith(".html") && it !in excludedPages && !it.startsWith("_app/") }
            .map(::pageUrl)
            .sorted()

    fun sitemapXml(
        base: String,
        manifest: Manifest,
    ): String =
        buildString {
            append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n")
            append("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n")
            pageUrls(manifest).forEach { page ->
                append("  <url><loc>").append(escapeXml(base + page.encodeURLPath())).append("</loc></url>\n")
            }
            append("</urlset>\n")
        }

    fun robotsTxt(base: String): String =
        buildString {
            append("User-agent: *\n")
            apiPrefixes.forEach { append("Disallow: ").append(it).append("/\n") }
            append("Disallow: /_ktor-svelte/\n")
            append("\nSitemap: ").append(base).append(SITEMAP_PATH).append('\n')
        }
}

private fun pageUrl(file: String): String =
    when {
        file == "index.html" -> "/"
        file.endsWith("/index.html") -> "/" + file.removeSuffix("index.html")
        else -> "/" + file.removeSuffix(".html")
    }

private fun requestBaseUrl(call: ApplicationCall): String {
    val origin = call.request.origin
    return URLBuilder(
        protocol = URLProtocol.createOrDefault(origin.scheme),
        host = origin.serverHost,
        port = origin.serverPort,
    ).buildString().trimEnd('/')
}

private fun escapeXml(value: String): String =
    value
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\"", "&quot;")
        .replace("'", "&apos;")
