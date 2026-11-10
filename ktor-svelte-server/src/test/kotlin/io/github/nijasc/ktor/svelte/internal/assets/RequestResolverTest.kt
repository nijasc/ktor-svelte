package io.github.nijasc.ktor.svelte.internal.assets

import kotlin.test.Test
import kotlin.test.assertEquals

class RequestResolverTest {
    private val resolver = RequestResolver(listOf("/api"), spaFallback = null, notFoundPage = null)

    private fun manifestOf(vararg paths: String) = Manifest(paths.associateWith { ManifestEntry(size = 1, hash = "h") })

    @Test
    fun `double slash path never redirects to another host`() {
        val manifest = manifestOf("evil.com.html", "evil.com/index.html")
        assertEquals(Resolution.Unhandled, resolver.resolve("//evil.com/", acceptsHtml = true, manifest))
        assertEquals(Resolution.Unhandled, resolver.resolve("//evil.com", acceptsHtml = true, manifest))
    }

    @Test
    fun `dot segments are not treated as pages`() {
        val manifest = manifestOf("secret.html")
        assertEquals(Resolution.Unhandled, resolver.resolve("/a/../secret", acceptsHtml = true, manifest))
    }

    @Test
    fun `flat page wins over folder page without trailing slash`() {
        val manifest = manifestOf("both.html", "both/index.html")
        assertEquals(Resolution.Serve("both.html"), resolver.resolve("/both", acceptsHtml = true, manifest))
        assertEquals(Resolution.Serve("both/index.html"), resolver.resolve("/both/", acceptsHtml = true, manifest))
    }

    @Test
    fun `param routes serve the fallback even without an html accept header`() {
        val paramResolver =
            RequestResolver(
                listOf("/api"),
                spaFallback = "200.html",
                notFoundPage = "404.html",
                paramRoutes = listOf("/items/[id]", "/docs/[...rest]", "/blog/[[page]]"),
            )
        val manifest = manifestOf("200.html", "404.html")
        val fallback = Resolution.Serve("200.html")
        assertEquals(fallback, paramResolver.resolve("/items/7", acceptsHtml = false, manifest))
        assertEquals(fallback, paramResolver.resolve("/items/7/", acceptsHtml = false, manifest))
        assertEquals(fallback, paramResolver.resolve("/docs/a/b/c", acceptsHtml = false, manifest))
        assertEquals(fallback, paramResolver.resolve("/blog", acceptsHtml = false, manifest))
        assertEquals(fallback, paramResolver.resolve("/blog/2", acceptsHtml = false, manifest))
        assertEquals(Resolution.Serve("404.html", notFound = true), paramResolver.resolve("/items", acceptsHtml = false, manifest))
        assertEquals(Resolution.Serve("404.html", notFound = true), paramResolver.resolve("/items/7/x", acceptsHtml = false, manifest))
        assertEquals(Resolution.Unhandled, paramResolver.resolve("/items/photo.png", acceptsHtml = false, manifest))
    }

    @Test
    fun `root api prefix claims every path`() {
        val rootResolver = RequestResolver(listOf("/"), spaFallback = null, notFoundPage = null)
        assertEquals(Resolution.Unhandled, rootResolver.resolve("/about", acceptsHtml = true, manifestOf("about.html")))
    }
}
