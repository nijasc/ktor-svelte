package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class DeleteUnlockedTest {
    private val root: File = Files.createTempDirectory("deep-clean").toFile()

    @Test
    fun `deletes a whole tree`() {
        val directory = root.resolve(".gradle")
        directory.resolve("8.14/fileHashes/fileHashes.bin").apply { parentFile.mkdirs() }.writeText("x")
        directory.resolve("marker").writeText("x")

        assertEquals(emptyList(), deleteUnlocked(directory))
        assertFalse(directory.exists())
    }

    @Test
    fun `a missing directory is fine`() {
        assertEquals(emptyList(), deleteUnlocked(root.resolve("missing")))
    }

    @Test
    fun `locked files are reported and the rest is deleted`() {
        val directory = root.resolve(".kotlin")
        val locked = directory.resolve("daemon/lock").apply { parentFile.mkdirs() }.apply { writeText("x") }
        val free = directory.resolve("sessions/free").apply { parentFile.mkdirs() }.apply { writeText("x") }
        val isWindows = System.getProperty("os.name").startsWith("Windows")

        val reported = locked.inputStream().use { deleteUnlocked(directory) }

        assertFalse(free.exists())
        if (isWindows) {
            assertEquals(listOf(locked), reported)
            assertTrue(locked.exists())
        } else {
            assertEquals(emptyList(), reported)
        }
    }
}
