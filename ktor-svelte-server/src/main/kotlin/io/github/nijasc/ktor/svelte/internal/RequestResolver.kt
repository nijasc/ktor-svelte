package io.github.nijasc.ktor.svelte.internal

internal sealed interface Resolution {
    data class Serve(
        val path: String,
        val notFound: Boolean = false,
    ) : Resolution

    data class Redirect(
        val location: String,
    ) : Resolution

    data object Unhandled : Resolution
}

internal class RequestResolver(
    apiPrefixes: List<String>,
    private val spaFallback: String?,
    private val notFoundPage: String?,
    paramRoutes: List<String> = emptyList(),
) {
    private val normalizedPrefixes = apiPrefixes.map { "/" + it.trim('/') }
    private val paramRoutePatterns = paramRoutes.map { route -> route.trim('/').split('/').filter { it.isNotEmpty() } }

    fun isApiPath(path: String): Boolean =
        normalizedPrefixes.any { prefix ->
            prefix == "/" || path == prefix || path.startsWith("$prefix/")
        }

    fun resolve(
        path: String,
        acceptsHtml: Boolean,
        manifest: Manifest,
    ): Resolution {
        if (isApiPath(path)) return Resolution.Unhandled

        val files = manifest.files
        val relative = path.removePrefix("/")
        if (relative in files) return Resolution.Serve(relative)

        if (isSafePagePath(relative)) {
            val page = resolvePage(relative, files)
            if (page != null) return page
        }

        if (isAssetPath(relative)) return Resolution.Unhandled

        if (spaFallback != null && spaFallback in files && (acceptsHtml || matchesParamRoute(relative))) {
            return Resolution.Serve(spaFallback)
        }
        if (notFoundPage != null && notFoundPage in files) {
            return Resolution.Serve(notFoundPage, notFound = true)
        }
        return Resolution.Unhandled
    }

    private fun resolvePage(
        relative: String,
        files: Map<String, ManifestEntry>,
    ): Resolution? {
        if (relative.isEmpty()) {
            return if ("index.html" in files) Resolution.Serve("index.html") else null
        }
        val name = relative.removeSuffix("/")
        val flatPage = "$name.html"
        val folderPage = "$name/index.html"
        return if (relative.endsWith("/")) {
            when {
                folderPage in files -> Resolution.Serve(folderPage)
                flatPage in files -> Resolution.Redirect("/$name")
                else -> null
            }
        } else {
            when {
                flatPage in files -> Resolution.Serve(flatPage)
                folderPage in files -> Resolution.Redirect("/$name/")
                else -> null
            }
        }
    }

    private fun matchesParamRoute(relative: String): Boolean {
        val segments = relative.trim('/').split('/').filter { it.isNotEmpty() }
        return paramRoutePatterns.any { matches(it, segments) }
    }

    private fun matches(
        pattern: List<String>,
        segments: List<String>,
    ): Boolean {
        if (pattern.isEmpty()) return segments.isEmpty()
        val head = pattern.first()
        val rest = pattern.drop(1)
        return when {
            head.startsWith("[...") && head.endsWith("]") -> (0..segments.size).any { matches(rest, segments.drop(it)) }
            head.startsWith("[[") && head.endsWith("]]") ->
                matches(rest, segments) || (segments.isNotEmpty() && matches(rest, segments.drop(1)))
            head.startsWith("[") && head.endsWith("]") -> segments.isNotEmpty() && matches(rest, segments.drop(1))
            else -> segments.firstOrNull() == head && matches(rest, segments.drop(1))
        }
    }

    private fun isSafePagePath(relative: String): Boolean {
        if (relative.isEmpty()) return true
        return relative.removeSuffix("/").split('/').none { it.isEmpty() || it == "." || it == ".." }
    }

    private fun isAssetPath(relative: String): Boolean {
        if (relative == "_app" || relative.startsWith("_app/")) return true
        return '.' in relative.removeSuffix("/").substringAfterLast('/')
    }
}
