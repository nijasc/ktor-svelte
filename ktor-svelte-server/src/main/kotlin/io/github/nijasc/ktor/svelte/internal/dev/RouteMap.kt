package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.io.File

private val PAGE_FILE = Regex("""\+page(@[^.]*)?\.svelte""")
private val GROUP = Regex("""\(.+\)""")

internal data class PageRow(
    val path: String,
    val file: String?,
    val sourcePath: String?,
)

internal fun pagesIn(routes: File): List<PageRow> =
    routes
        .walkTopDown()
        .filter { it.isFile && PAGE_FILE.matches(it.name) }
        .map { page ->
            val folder = page.parentFile.relativeTo(routes).invariantSeparatorsPath
            val segments = folder.split('/').filter { it.isNotEmpty() && !GROUP.matches(it) }
            PageRow(
                "/" + segments.joinToString("/"),
                "src/routes/" + page.relativeTo(routes).invariantSeparatorsPath,
                page.absoluteFile.invariantSeparatorsPath,
            )
        }.sortedBy { it.path }
        .toList()

internal fun pagesOf(
    frontend: File?,
    manifest: Manifest?,
): List<PageRow> {
    val routes = frontend?.resolve("src/routes")
    if (routes != null && routes.isDirectory) return pagesIn(routes)
    return manifest
        ?.files
        ?.keys
        .orEmpty()
        .filter { it.endsWith(".html") && !it.startsWith("_app/") }
        .sorted()
        .map { PageRow(pageUrl(it).trimEnd('/').ifEmpty { "/" }, null, null) }
}

internal fun routeMap(
    table: RouteTable,
    pages: List<PageRow>,
    sources: SourceFiles,
    docsPath: String?,
): JsonObject =
    buildJsonObject {
        docsPath?.let { put("docs", it) }
        put(
            "pages",
            buildJsonArray {
                pages.forEach { page ->
                    add(
                        buildJsonObject {
                            put("path", page.path)
                            page.file?.let { put("file", it) }
                            page.sourcePath?.let { put("sourcePath", sources.allow(it)) }
                        },
                    )
                }
            },
        )
        put(
            "routes",
            buildJsonArray {
                table.routes.forEach { route ->
                    add(
                        buildJsonObject {
                            put("method", route.method)
                            put("path", route.path)
                            put("api", route.api)
                            route.source?.let { source ->
                                val file = source.substringBeforeLast(':')
                                put("file", file)
                                put("line", source.substringAfterLast(':').toIntOrNull() ?: 1)
                                sources.pathOf(file)?.let { put("sourcePath", it) }
                            }
                        },
                    )
                }
            },
        )
    }
