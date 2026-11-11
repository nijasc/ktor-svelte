package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class ReadyBannerTest {
    private val newline = System.lineSeparator()

    @Test
    fun `wildcard and loopback hosts become localhost`() {
        assertEquals("http://localhost:8080", browsableUrl("http://0.0.0.0:8080"))
        assertEquals("http://localhost:8080", browsableUrl("http://[::]:8080/"))
        assertEquals("https://localhost:8443", browsableUrl("https://127.0.0.1:8443"))
        assertEquals("http://example.test:8080", browsableUrl("http://example.test:8080"))
    }

    @Test
    fun `other lines print nothing`() {
        val banner = ReadyBanner(5173)
        assertNull(banner.onAppLine("INFO  Application - Application started in 0.3 seconds."))
    }

    @Test
    fun `the first start lists the app, the API docs and Vite`() {
        val banner = ReadyBanner(5173)
        assertNull(banner.onAppLine("INFO  Application - ktor-svelte serves API docs at /api/docs"))

        val printed = banner.onAppLine("INFO  Application - Responding at http://0.0.0.0:8080")

        assertEquals(
            listOf(
                "",
                "ktor-svelte is ready. Open the app URL, not the Vite one:",
                "  App:      http://localhost:8080",
                "  API docs: http://localhost:8080/api/docs",
                "  Vite:     http://localhost:5173",
                "",
            ).joinToString(newline),
            printed,
        )
    }

    @Test
    fun `without API docs the row is left out`() {
        val printed = ReadyBanner(5174).onAppLine("Responding at http://127.0.0.1:9000")
        assertEquals(
            listOf(
                "",
                "ktor-svelte is ready. Open the app URL, not the Vite one:",
                "  App:  http://localhost:9000",
                "  Vite: http://localhost:5174",
                "",
            ).joinToString(newline),
            printed,
        )
    }

    @Test
    fun `a restart prints one line`() {
        val banner = ReadyBanner(5173)
        banner.onAppLine("Responding at http://0.0.0.0:8080")
        assertEquals("ktor-svelte: the app is ready again at http://localhost:8080", banner.onAppLine("Responding at http://0.0.0.0:8080"))
    }
}
