package io.github.nijasc.ktor.svelte.internal

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
    fun `root api prefix claims every path`() {
        val rootResolver = RequestResolver(listOf("/"), spaFallback = null, notFoundPage = null)
        assertEquals(Resolution.Unhandled, rootResolver.resolve("/about", acceptsHtml = true, manifestOf("about.html")))
    }
}
