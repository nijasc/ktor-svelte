package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class WriteOnlyWhatChangedTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `a file whose content is the same is not written again`() {
        val root = dir.resolve("generated")
        writeOnlyWhatChanged(root, mapOf("app/Routes.kt" to "routes", "app/Icons.kt" to "icons"))
        val routes = root.resolve("app/Routes.kt")
        val icons = root.resolve("app/Icons.kt")
        routes.setLastModified(1_000_000)
        icons.setLastModified(1_000_000)

        writeOnlyWhatChanged(root, mapOf("app/Routes.kt" to "routes", "app/Icons.kt" to "more icons"))

        assertEquals(1_000_000, routes.lastModified(), "an unchanged file keeps its time, so nothing watching it wakes up")
        assertTrue(icons.lastModified() > 1_000_000)
        assertEquals("more icons", icons.readText())
    }

    @Test
    fun `files that are no longer wanted go, with the folders they leave empty`() {
        val root = dir.resolve("generated")
        writeOnlyWhatChanged(root, mapOf("old/pkg/Gone.kt" to "gone", "app/Stays.kt" to "stays"))
        root.resolve("stray.txt").writeText("left by something else")

        writeOnlyWhatChanged(root, mapOf("app/Stays.kt" to "stays", "app/New.kt" to "new"))

        assertEquals(
            listOf("app/New.kt", "app/Stays.kt"),
            root
                .walkTopDown()
                .filter {
                    it.isFile
                }.map { it.relativeTo(root).invariantSeparatorsPath }
                .sorted()
                .toList(),
        )
        assertFalse(root.resolve("old").exists())
        assertTrue(root.isDirectory)
    }

    @Test
    fun `nothing wanted leaves an empty folder, and a missing folder is created`() {
        val root = dir.resolve("generated")
        writeOnlyWhatChanged(root, mapOf("a/B.kt" to "b"))
        writeOnlyWhatChanged(root, emptyMap())
        assertEquals(emptyList(), root.walkTopDown().filter { it.isFile }.toList())
    }
}
