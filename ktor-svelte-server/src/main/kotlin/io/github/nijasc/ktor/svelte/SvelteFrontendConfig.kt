package io.github.nijasc.ktor.svelte

import io.ktor.utils.io.KtorDsl

private val PREFIX_SEGMENT = Regex("[A-Za-z0-9._~-]+")

@KtorDsl
public class SvelteFrontendConfig internal constructor(
    public val prefix: String,
) {
    public val name: String = prefix.trim('/').replace('/', '-')

    internal var paramRouteList: List<String> = emptyList()
        private set

    public var source: SvelteSource = SvelteSource.Classpath
    public var spaFallback: String? = "200.html"
    public var notFoundPage: String? = "404.html"
    public var devUrl: String? = null
    public var generateTsOutput: String? = null

    public fun paramRoutes(vararg routes: String) {
        paramRouteList = routes.toList()
    }
}

internal fun frontendDevUrlProperty(name: String): String = "ktor.svelte.devUrl.$name"

internal fun frontendClientOutput(frontend: SvelteFrontendConfig): String =
    frontend.generateTsOutput ?: ((System.getProperty("ktor.svelte.frontendDir.${frontend.name}") ?: frontend.name) + "/src/lib/api")

internal fun checkFrontendPrefix(prefix: String) {
    val segments = prefix.removePrefix("/").split('/')
    require(prefix.startsWith("/") && segments.all { PREFIX_SEGMENT.matches(it) && it != "." && it != ".." }) {
        "frontend takes a path prefix such as \"/admin\": it starts with a slash, has no slash at the end and only letters, digits, " +
            "'-', '_', '.' and '~' in its parts, but is '$prefix'."
    }
}

internal fun coversPath(
    prefix: String,
    path: String,
): Boolean = path == prefix || path.startsWith("$prefix/")
