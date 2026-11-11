package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.assets.ManifestEntry
import io.github.nijasc.ktor.svelte.internal.dev.fingerprint
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

class StartupLogTest {
    private val manifest = Manifest(mapOf("index.html" to ManifestEntry(10, "a"), "app.js" to ManifestEntry(20, "b")))

    @Test
    fun `the runtime knows its own version`() {
        assertNotEquals("unknown", runtimeVersion)
        assertTrue(runtimeVersion.matches(Regex("""\d+\.\d+\.\d+.*""")), runtimeVersion)
    }

    @Test
    fun `a bundled build is identified by a short fingerprint`() {
        assertEquals(
            "ktor-svelte $runtimeVersion serves frontend build ${manifest.fingerprint().take(12)} with 2 files",
            startupLine(manifest, devUrl = null),
        )
    }

    @Test
    fun `the dev proxy and a missing build are named`() {
        assertEquals(
            "ktor-svelte $runtimeVersion proxies pages to Vite at http://localhost:5173",
            startupLine(manifest, "http://localhost:5173"),
        )
        assertEquals("ktor-svelte $runtimeVersion has no frontend build", startupLine(null, null))
    }
}
