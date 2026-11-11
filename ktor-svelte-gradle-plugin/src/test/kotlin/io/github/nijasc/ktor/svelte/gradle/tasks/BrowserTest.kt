package io.github.nijasc.ktor.svelte.gradle.tasks

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class BrowserTest {
    private val url = "http://localhost:8080"

    @Test
    fun `each desktop gets its own opener`() {
        assertEquals(listOf("cmd", "/c", "start", "", url), browserCommand("Windows 11", emptyMap(), url))
        assertEquals(listOf("open", url), browserCommand("Mac OS X", emptyMap(), url))
        assertEquals(listOf("xdg-open", url), browserCommand("Linux", mapOf("DISPLAY" to ":0"), url))
        assertEquals(listOf("xdg-open", url), browserCommand("Linux", mapOf("WAYLAND_DISPLAY" to "wayland-0"), url))
    }

    @Test
    fun `no browser in CI or without a display`() {
        assertNull(browserCommand("Windows 11", mapOf("CI" to "true"), url))
        assertNull(browserCommand("Linux", emptyMap(), url))
    }

    @Test
    fun `the first ready line opens the app once`() {
        val opened = mutableListOf<String>()
        val banner = ReadyBanner(5173).apply { onFirstReady = { opened += it } }
        banner.onAppLine("Responding at http://0.0.0.0:8080")
        banner.onAppLine("Responding at http://0.0.0.0:8080")
        assertEquals(listOf("http://localhost:8080"), opened)
    }
}
