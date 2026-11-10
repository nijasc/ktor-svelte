package io.github.nijasc.ktor.svelte.internal

import io.ktor.http.HttpMethod
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class OriginCheckTest {
    private val check = OriginCheck(listOf("https://Admin.Example.com/"))

    private fun allows(
        origin: String?,
        host: String = "app.example.com",
        secFetchSite: String? = null,
        method: HttpMethod = HttpMethod.Post,
    ): Boolean = check.allows(method, origin, secFetchSite, host)

    @Test
    fun `ipv6 hosts match with and without brackets`() {
        assertTrue(allows("http://[::1]:8080", host = "[::1]"))
        assertTrue(allows("http://[::1]:8080", host = "::1"))
        assertFalse(allows("http://[::2]:8080", host = "::1"))
    }

    @Test
    fun `allow list ignores case and a trailing slash`() {
        assertTrue(allows("https://admin.example.com"))
        assertTrue(allows("HTTPS://ADMIN.EXAMPLE.COM/"))
        assertFalse(allows("https://admin.example.com:8443"))
    }

    @Test
    fun `origin that is not a url is refused`() {
        assertFalse(allows("not a url"))
        assertFalse(allows("https://"))
        assertFalse(allows(" null "))
    }

    @Test
    fun `fetch metadata only matters without an origin`() {
        assertTrue(allows(null, secFetchSite = "same-site"))
        assertTrue(allows(null, secFetchSite = "none"))
        assertFalse(allows(null, secFetchSite = "CROSS-SITE"))
        assertTrue(allows("https://app.example.com", secFetchSite = "cross-site"))
    }

    @Test
    fun `safe methods are never refused`() {
        listOf(HttpMethod.Get, HttpMethod.Head, HttpMethod.Options, HttpMethod("TRACE")).forEach { method ->
            assertTrue(allows("https://evil.example", method = method))
        }
        assertFalse(allows("https://evil.example", method = HttpMethod("REPORT")))
    }
}
