package io.github.nijasc.ktor.svelte.gradle.libraries

import java.io.File

internal data class StringLink(
    val line: Int,
    val written: String,
    val suggestion: String,
)

private sealed interface LinkSegment {
    data class Literal(
        val text: String,
    ) : LinkSegment

    data class Dynamic(
        val expression: String?,
    ) : LinkSegment
}

private data class RouteMatch(
    val arguments: Map<String, String?>,
    val literalSegments: Int,
)

private const val EXPRESSION_MARK = '\u0000'
private const val UNKNOWN_ARGUMENT = "..."
private val LINK_SOURCE_EXTENSIONS = setOf("svelte", "ts", "js")
private val HREF = Regex("""\bhref=\{?\s*(["'`])(/[^"'`]*)\1""")
private val NAVIGATION =
    Regex("""\b(?:goto|redirect)\(\s*(?:\d+\s*,\s*)?(["'`])(/[^"'`]*)\1(?:\s*\+\s*([\w.$?\[\]]+)(?=\s*[,)]))?\s*\)?""")
private val TEMPLATE_EXPRESSION = Regex("""\$\{([^}]*)}""")
private val MARKUP_EXPRESSION = Regex("""\{([^}]*)}""")

internal fun linkSourceFiles(
    sourceDirectory: File,
    excluded: Set<File>,
): List<File> =
    sourceDirectory
        .walkTopDown()
        .onEnter { it !in excluded }
        .filter { it.isFile && it.extension in LINK_SOURCE_EXTENSIONS }
        .sortedBy { it.invariantSeparatorsPath }
        .toList()

internal fun findStringLinks(
    source: String,
    routes: List<FrontendRoute>,
): List<StringLink> =
    (HREF.findAll(source) + NAVIGATION.findAll(source))
        .sortedBy { it.range.first }
        .mapNotNull { match ->
            val quote = match.groupValues[1]
            val path = match.groupValues[2]
            val appended = match.groupValues.getOrNull(3).orEmpty()
            if (path.startsWith("//")) return@mapNotNull null
            val suggestion = suggestionFor(linkSegments(path, quote, appended), routes) ?: return@mapNotNull null
            StringLink(source.substring(0, match.range.first).count { it == '\n' } + 1, match.value, suggestion)
        }.toList()

private fun linkSegments(
    path: String,
    quote: String,
    appended: String,
): List<LinkSegment> {
    val expressions = mutableListOf<String>()
    val pattern = if (quote == "`") TEMPLATE_EXPRESSION else MARKUP_EXPRESSION
    val marked =
        pattern.replace(path) { match ->
            expressions += match.groupValues[1].trim()
            EXPRESSION_MARK.toString()
        }
    val pathOnly = marked.substringBefore('?').substringBefore('#')
    var seen = 0
    val segments =
        pathOnly.split('/').filter { it.isNotEmpty() }.map { segment ->
            val marks = segment.count { it == EXPRESSION_MARK }
            val first = seen
            seen += marks
            when {
                marks == 0 -> LinkSegment.Literal(segment)
                segment.length == 1 -> LinkSegment.Dynamic(expressions[first])
                else -> LinkSegment.Dynamic(null)
            }
        }
    if (appended.isEmpty() || pathOnly != marked) return segments
    return if (pathOnly.endsWith("/")) segments + LinkSegment.Dynamic(appended) else segments.dropLast(1) + LinkSegment.Dynamic(null)
}

private fun suggestionFor(
    link: List<LinkSegment>,
    routes: List<FrontendRoute>,
): String? {
    val best =
        routes
            .mapNotNull { route -> matchRoute(route.segments, link)?.let { route to it } }
            .maxByOrNull { (_, match) -> match.literalSegments }
            ?: return null
    val (route, match) = best
    if (route.params.isEmpty()) return "routes.${route.name}()"
    val arguments =
        route.params
            .filter { it.name in match.arguments }
            .joinToString(", ") { "${it.name}: ${match.arguments[it.name] ?: UNKNOWN_ARGUMENT}" }
    return if (arguments.isEmpty()) "routes.${route.name}()" else "routes.${route.name}({ $arguments })"
}

private fun matchRoute(
    route: List<List<RoutePart>>,
    link: List<LinkSegment>,
): RouteMatch? {
    if (route.isEmpty()) return if (link.isEmpty()) RouteMatch(emptyMap(), 0) else null
    val parts = route.first()
    val only = parts.singleOrNull() as? RoutePart.Param
    if (only != null && only.rest) {
        return (link.size downTo 0).firstNotNullOfOrNull { taken ->
            matchRoute(route.drop(1), link.drop(taken))?.let { rest ->
                if (taken == 0) rest else rest.copy(arguments = rest.arguments + (only.name to restArgument(link.take(taken))))
            }
        }
    }
    val withSegment =
        link.firstOrNull()?.let { segment ->
            matchSegment(parts, segment)?.let { here ->
                matchRoute(route.drop(1), link.drop(1))?.let { rest ->
                    RouteMatch(here.arguments + rest.arguments, here.literalSegments + rest.literalSegments)
                }
            }
        }
    return withSegment ?: if (only != null && only.optional) matchRoute(route.drop(1), link) else null
}

private fun restArgument(segments: List<LinkSegment>): String? {
    val single = segments.singleOrNull()
    if (single is LinkSegment.Dynamic) return single.expression
    if (segments.any { it is LinkSegment.Dynamic }) return null
    return quoted(segments.joinToString("/") { (it as LinkSegment.Literal).text })
}

private fun matchSegment(
    parts: List<RoutePart>,
    segment: LinkSegment,
): RouteMatch? {
    val params = parts.filterIsInstance<RoutePart.Param>()
    if (params.isEmpty()) {
        val text = parts.joinToString("") { (it as RoutePart.Text).value }
        return if (segment == LinkSegment.Literal(text)) RouteMatch(emptyMap(), 1) else null
    }
    return when (segment) {
        is LinkSegment.Dynamic -> RouteMatch(params.associate { it.name to segment.expression.takeIf { parts.size == 1 } }, 0)
        is LinkSegment.Literal -> {
            val pattern =
                parts.joinToString("") { part ->
                    when (part) {
                        is RoutePart.Text -> Regex.escape(part.value)
                        is RoutePart.Param -> "(.+)"
                    }
                }
            val values = Regex(pattern).matchEntire(segment.text)?.groupValues?.drop(1) ?: return null
            RouteMatch(params.zip(values).associate { (param, value) -> param.name to quoted(value) }, 0)
        }
    }
}

private fun quoted(value: String): String = "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"
