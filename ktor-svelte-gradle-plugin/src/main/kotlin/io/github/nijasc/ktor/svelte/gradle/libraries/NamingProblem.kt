package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import java.io.File

internal class NamingProblem(
    val kind: String,
    val where: String,
    val name: String,
)

private val PAGE_FILE = Regex("\\+page(\\.server)?\\.(svelte|ts|js)")

private fun isRouteSyntax(segment: String): Boolean =
    (segment.startsWith("(") && segment.endsWith(")")) || (segment.startsWith("[") && segment.endsWith("]"))

internal fun pageNameProblems(
    routesDirectory: File,
    rule: Regex,
): List<NamingProblem> {
    if (!routesDirectory.isDirectory) return emptyList()
    return routesDirectory
        .walkTopDown()
        .filter { it.isFile && PAGE_FILE.matches(it.name) }
        .map { it.parentFile.relativeTo(routesDirectory).invariantSeparatorsPath }
        .distinct()
        .flatMap { path ->
            val segments = path.split('/').filter { it.isNotEmpty() }
            segments.indices
                .filter { index -> !isRouteSyntax(segments[index]) && !rule.matches(segments[index]) }
                .map { index -> NamingProblem("page", "/" + segments.take(index + 1).joinToString("/"), segments[index]) }
        }.distinctBy { it.where }
        .sortedBy { it.where }
        .toList()
}

@Suppress("UNCHECKED_CAST")
internal fun apiNameProblems(
    openApi: String,
    routes: Regex?,
    dtos: Regex?,
): List<NamingProblem> {
    val document = JsonSlurper().parseText(openApi) as Map<String, Any?>
    val paths = (document["paths"] as? Map<String, Any?>).orEmpty().keys
    val schemas = ((document["components"] as? Map<String, Any?>)?.get("schemas") as? Map<String, Any?>).orEmpty().keys
    val routeProblems =
        if (routes == null) {
            emptyList()
        } else {
            paths.sorted().flatMap { path ->
                path
                    .split('/')
                    .filter { it.isNotEmpty() && !(it.startsWith("{") && it.endsWith("}")) }
                    .filterNot { routes.matches(it) }
                    .map { segment -> NamingProblem("api route", path, segment) }
            }
        }
    val dtoProblems =
        if (dtos == null) {
            emptyList()
        } else {
            schemas.sorted().filterNot { dtos.matches(it) }.map { NamingProblem("dto", it, it) }
        }
    return routeProblems + dtoProblems
}

internal fun messageKeyProblems(
    keys: Collection<String>,
    rule: Regex,
): List<NamingProblem> = keys.sorted().filterNot { rule.matches(it) }.map { NamingProblem("message key", it, it) }
