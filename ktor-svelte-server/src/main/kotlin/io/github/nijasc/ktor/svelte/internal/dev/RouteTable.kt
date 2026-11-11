package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.assets.RequestResolver
import io.github.nijasc.ktor.svelte.internal.typescript.routeEntries
import io.ktor.server.routing.RoutingNode
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put

internal data class KtorRouteRow(
    val method: String,
    val path: String,
    val source: String?,
    val api: Boolean,
    val hidesPage: String?,
)

internal data class RouteTable(
    val routes: List<KtorRouteRow>,
    val pages: List<String>,
    val paramRoutes: List<String>,
)

internal fun pageUrl(file: String): String =
    when {
        file == "index.html" -> "/"
        file.endsWith("/index.html") -> "/" + file.removeSuffix("index.html")
        else -> "/" + file.removeSuffix(".html")
    }

internal fun routeTable(
    root: RoutingNode,
    manifest: Manifest?,
    resolver: RequestResolver,
    paramRoutes: List<String>,
): RouteTable {
    val pageFiles =
        manifest
            ?.files
            ?.keys
            .orEmpty()
            .filter { it.endsWith(".html") && !it.startsWith("_app/") }
            .sorted()
    val pageUrls = pageFiles.associateBy { pageUrl(it).trimEnd('/').ifEmpty { "/" } }
    val routes =
        routeEntries(root)
            .map { (key, source) ->
                val method = key.substringBefore(' ')
                val path = key.substringAfter(' ')
                val hides = if (method == "GET" && !resolver.isApiPath(path)) pageUrls[path.trimEnd('/').ifEmpty { "/" }] else null
                KtorRouteRow(method, path, source?.let { "${it.file}:${it.line}" }, resolver.isApiPath(path), hides)
            }.filterNot { it.path.contains("{svelte-path...}") }
            .sortedWith(compareBy({ it.path }, { it.method }))
    return RouteTable(routes, pageFiles.map(::pageUrl), paramRoutes)
}

internal fun RouteTable.toJson(): String =
    buildJsonObject {
        put(
            "routes",
            buildJsonArray {
                routes.forEach { route ->
                    add(
                        buildJsonObject {
                            put("method", route.method)
                            put("path", route.path)
                            put("api", route.api)
                            route.source?.let { put("source", it) }
                            route.hidesPage?.let { put("hidesPage", it) }
                        },
                    )
                }
            },
        )
        put("pages", buildJsonArray { pages.forEach { add(kotlinx.serialization.json.JsonPrimitive(it)) } })
        put("paramRoutes", buildJsonArray { paramRoutes.forEach { add(kotlinx.serialization.json.JsonPrimitive(it)) } })
    }.toString()

private fun escape(text: String): String =
    text
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\"", "&quot;")

internal fun RouteTable.toHtml(): String =
    buildString {
        append("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>ktor-svelte routes</title>")
        append("<style>body{font:14px system-ui,sans-serif;margin:24px;color:#222}table{border-collapse:collapse;margin-bottom:24px}")
        append(
            "td,th{border-bottom:1px solid #ddd;padding:4px 12px;text-align:left}code{font-size:13px}.warn{color:#b00020}</style></head><body>",
        )
        append("<h1>Routes</h1><p>Only shown in development. Ktor routes always win over pages with the same path.</p>")
        append("<h2>Ktor routes</h2><table><tr><th>Method</th><th>Path</th><th>Kind</th><th>Source</th><th></th></tr>")
        routes.forEach { route ->
            append("<tr><td>${escape(route.method)}</td><td><code>${escape(route.path)}</code></td>")
            append("<td>${if (route.api) "API" else "other"}</td><td><code>${escape(route.source.orEmpty())}</code></td>")
            append("<td class=\"warn\">${route.hidesPage?.let { "hides ${escape(it)}" }.orEmpty()}</td></tr>")
        }
        append("</table><h2>SvelteKit pages</h2><table><tr><th>Path</th></tr>")
        pages.forEach { append("<tr><td><code>${escape(it)}</code></td></tr>") }
        append("</table>")
        if (paramRoutes.isNotEmpty()) {
            append("<h2>Param routes</h2><table><tr><th>Pattern</th></tr>")
            paramRoutes.forEach { append("<tr><td><code>${escape(it)}</code></td></tr>") }
            append("</table>")
        }
        append("</body></html>")
    }
