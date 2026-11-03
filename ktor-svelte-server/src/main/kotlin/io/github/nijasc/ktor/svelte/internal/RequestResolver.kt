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
) {
    private val normalizedPrefixes = apiPrefixes.map { "/" + it.trim('/') }

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

        if (acceptsHtml && spaFallback != null && spaFallback in files) {
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

    private fun isSafePagePath(relative: String): Boolean {
        if (relative.isEmpty()) return true
        return relative.removeSuffix("/").split('/').none { it.isEmpty() || it == "." || it == ".." }
    }

    private fun isAssetPath(relative: String): Boolean {
        if (relative == "_app" || relative.startsWith("_app/")) return true
        return '.' in relative.removeSuffix("/").substringAfterLast('/')
    }
}
