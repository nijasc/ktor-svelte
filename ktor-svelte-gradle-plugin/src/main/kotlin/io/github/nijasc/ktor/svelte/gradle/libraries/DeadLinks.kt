package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import java.io.File

internal data class LinkTargets(
    val apiRoots: Set<String>,
    val staticFiles: Set<String>,
)

private const val DEFAULT_API_ROOT = "api"
private val SERVED_BY_THE_RUNTIME =
    setOf("/sitemap.xml", "/robots.txt", "/favicon.ico", "/favicon.png", "/favicon.svg", "/apple-touch-icon.png")

internal fun readLinkTargets(frontend: File): LinkTargets {
    val staticDirectory = frontend.resolve("static")
    val staticFiles =
        staticDirectory
            .walkTopDown()
            .filter { it.isFile }
            .map { "/" + it.relativeTo(staticDirectory).invariantSeparatorsPath }
            .toSet()
    return LinkTargets(apiRoots(frontend.resolve("src/lib/api/openapi.json")), staticFiles)
}

internal fun apiRoots(openApiFile: File): Set<String> {
    val paths =
        runCatching { ((JsonSlurper().parse(openApiFile) as Map<*, *>)["paths"] as Map<*, *>).keys.map { it.toString() } }
            .getOrDefault(emptyList())
    return paths.mapNotNull { path -> path.split('/').firstOrNull { it.isNotEmpty() } }.toSet().ifEmpty { setOf(DEFAULT_API_ROOT) }
}

internal fun deadLinks(
    unmatched: List<UnmatchedLink>,
    targets: LinkTargets,
): List<UnmatchedLink> =
    unmatched.filterNot { link ->
        val first = link.path.split('/').firstOrNull { it.isNotEmpty() } ?: return@filterNot true
        DYNAMIC_PART in first ||
            first in targets.apiRoots ||
            first == "_app" ||
            link.path in SERVED_BY_THE_RUNTIME ||
            (!link.dynamic && link.path.trimEnd('/') in targets.staticFiles)
    }
