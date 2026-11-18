package io.github.nijasc.ktor.svelte.internal.assets

import io.github.nijasc.ktor.svelte.internal.LibraryConfig
import io.github.nijasc.ktor.svelte.internal.libraryConfig
import io.github.nijasc.ktor.svelte.internal.typescript.GeneratedOperation
import io.github.nijasc.ktor.svelte.internal.typescript.PageLoadSpec
import io.github.nijasc.ktor.svelte.internal.typescript.pageParameters
import io.ktor.http.HttpHeaders
import io.ktor.http.decodeURLPart
import io.ktor.http.encodeURLPathPart
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.request.path
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.future.await
import kotlinx.coroutines.withTimeoutOrNull
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonPrimitive
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import kotlin.time.Duration
import kotlin.time.toJavaDuration

internal const val PAGE_DATA_ELEMENT_ID = "ktor-svelte-data"
internal const val INLINE_REQUEST_HEADER = "X-Ktor-Svelte-Inline"

private val FORWARDED_HEADERS = listOf(HttpHeaders.Cookie, HttpHeaders.Authorization, HttpHeaders.AcceptLanguage)
private val ROUTE_PARAMETER = Regex("\\{([^}/]+)}")

internal class PageDataInliner(
    pages: () -> List<PageLoadSpec>,
    private val timeout: Duration,
) {
    @Volatile
    var operationSource: () -> List<GeneratedOperation> = { emptyList() }

    private val operations by lazy { operationSource().associateBy { "${it.method} ${it.path}" } }
    private val patterns by lazy { pages().map { page -> page to pagePattern(page.page) } }
    private val http: HttpClient = HttpClient.newBuilder().connectTimeout(timeout.toJavaDuration()).build()

    suspend fun elementFor(call: ApplicationCall): String? {
        if (call.request.header(INLINE_REQUEST_HEADER) != null) return null
        val path = call.request.path()
        val pagePath = withoutLocale(path, call.application.libraryConfig)
        val (page, values) =
            patterns.firstNotNullOfOrNull { (page, pattern) ->
                pattern.matchEntire(pagePath)?.let { match -> page to pageParameters(page.page).zip(match.groupValues.drop(1)).toMap() }
            } ?: return null
        val urls = page.data.map { data -> urlOf(data.route, data.params, values) ?: return null }
        val local = call.request.local
        val base = "${if (local.scheme == "https") "https" else "http"}://127.0.0.1:${local.localPort}"
        val bodies =
            withTimeoutOrNull(timeout) {
                coroutineScope { urls.map { url -> async { fetch(base + url, call) } }.awaitAll() }
            } ?: return null
        if (bodies.any { it == null }) return null
        val json =
            buildString {
                append("{\"path\":").append(JsonPrimitive(path)).append(",\"data\":{")
                page.data.zip(bodies).forEachIndexed { index, (data, body) ->
                    if (index > 0) append(',')
                    append(JsonPrimitive(data.key)).append(':').append(body)
                }
                append("}}")
            }
        return "<script type=\"application/json\" id=\"$PAGE_DATA_ELEMENT_ID\">${escapeForScript(json)}</script>"
    }

    private fun urlOf(
        route: String,
        params: Map<String, String>,
        values: Map<String, String>,
    ): String? {
        val found = operations[route]?.takeIf { it.method == "GET" && !it.needsInput } ?: return null
        val filled = found.pathParameters.associateWith { name -> values[params[name] ?: name] ?: return null }
        return ROUTE_PARAMETER.replace(found.path) { match ->
            filled[match.groupValues[1]].orEmpty().decodeURLPart().encodeURLPathPart()
        }
    }

    private suspend fun fetch(
        url: String,
        call: ApplicationCall,
    ): String? =
        runCatching {
            val request =
                HttpRequest
                    .newBuilder(URI(url))
                    .timeout(timeout.toJavaDuration())
                    .header(HttpHeaders.Accept, "application/json")
                    .header(INLINE_REQUEST_HEADER, "1")
                    .apply { FORWARDED_HEADERS.forEach { name -> call.request.header(name)?.let { header(name, it) } } }
                    .GET()
                    .build()
            val response = http.sendAsync(request, HttpResponse.BodyHandlers.ofString()).await()
            val json =
                response
                    .headers()
                    .firstValue(HttpHeaders.ContentType)
                    .orElse("")
                    .contains("json")
            response
                .body()
                .takeIf { response.statusCode() == 200 && json }
                ?.also { Json.parseToJsonElement(it) }
        }.getOrNull()
}

private fun withoutLocale(
    path: String,
    config: LibraryConfig,
): String {
    if (!config.usesUrlPrefix) return path
    val first = path.removePrefix("/").substringBefore('/')
    if (first !in config.locales) return path
    return path.removePrefix("/$first").ifEmpty { "/" }
}

internal fun pagePattern(page: String): Regex {
    val segments =
        page.trim('/').split('/').filter { it.isNotEmpty() }.joinToString("") { segment ->
            "/" + if (segment.startsWith("[") && segment.endsWith("]")) "([^/]+)" else Regex.escape(segment)
        }
    return Regex(segments.ifEmpty { "" } + "/?")
}
