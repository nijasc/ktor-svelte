package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

class SvelteDevAllTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `a change restarts only after it has settled`() {
        val detector = ChangeDetector(initial = 1, settleMillis = 1000)
        assertFalse(detector.hasSettledChange(1, now = 0))
        assertFalse(detector.hasSettledChange(2, now = 100))
        assertFalse(detector.hasSettledChange(2, now = 600))
        assertTrue(detector.hasSettledChange(2, now = 1100))
        assertFalse(detector.hasSettledChange(2, now = 1600))
    }

    @Test
    fun `a compile that keeps writing delays the restart`() {
        val detector = ChangeDetector(initial = 1, settleMillis = 1000)
        assertFalse(detector.hasSettledChange(2, now = 0))
        assertFalse(detector.hasSettledChange(3, now = 900))
        assertFalse(detector.hasSettledChange(3, now = 1800))
        assertTrue(detector.hasSettledChange(3, now = 1900))
    }

    @Test
    fun `fingerprint changes when a class file changes and survives a missing folder`() {
        val classes = dir.resolve("classes").apply { mkdirs() }
        val file = classes.resolve("A.class").apply { writeText("one") }
        val before = fingerprintOf(listOf(classes, dir.resolve("missing")))
        assertEquals(before, fingerprintOf(listOf(classes, dir.resolve("missing"))))
        file.writeText("longer content")
        assertNotEquals(before, fingerprintOf(listOf(classes, dir.resolve("missing"))))
    }

    @Test
    fun `stopping a process tree stops children too`() {
        val java = File(System.getProperty("java.home"), "bin/java").path
        val parent = ProcessBuilder(java, "--version").start()
        parent.waitFor()
        stopProcessTree(parent)
        assertFalse(parent.isAlive)
    }
}
