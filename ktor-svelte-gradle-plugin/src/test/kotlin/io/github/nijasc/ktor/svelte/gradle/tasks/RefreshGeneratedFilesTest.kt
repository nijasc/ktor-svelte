package io.github.nijasc.ktor.svelte.gradle.tasks

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class RefreshGeneratedFilesTest {
    @Test
    fun `rewrites only generated files whose content changed`() {
        val frontend = Files.createTempDirectory("frontend").toFile()
        val generated = frontend.resolve("src/lib/ktor-svelte").apply { mkdirs() }
        generated.resolve("i18n.ts").writeText("old")
        generated.resolve("theme.ts").writeText("same")
        frontend.resolve("vite.config.ts").writeText("mine")

        val changed =
            refreshGeneratedFiles(
                frontend,
                mapOf(
                    "src/lib/ktor-svelte/i18n.ts" to "new",
                    "src/lib/ktor-svelte/theme.ts" to "same",
                    "src/lib/ktor-svelte/icons.ts" to "missing",
                    "vite.config.ts" to "generated",
                ),
            )

        assertEquals(listOf("src/lib/ktor-svelte/i18n.ts"), changed)
        assertEquals("new", generated.resolve("i18n.ts").readText())
        assertFalse(generated.resolve("icons.ts").exists())
        assertEquals("mine", frontend.resolve("vite.config.ts").readText())
    }
}
