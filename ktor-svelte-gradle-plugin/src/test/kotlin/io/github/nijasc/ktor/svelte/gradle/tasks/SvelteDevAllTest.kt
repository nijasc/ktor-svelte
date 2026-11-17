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
    fun `the app learns where the Vite and the folder of each other frontend are`() {
        assertEquals(
            listOf(
                "-Dktor.svelte.devUrl.admin=http://localhost:5174",
                "-Dktor.svelte.frontendDir.admin=/work/admin",
                "-Dktor.svelte.devUrl.admin-reports=http://localhost:5175",
            ),
            frontendArguments(mapOf("admin" to "/work/admin"), mapOf("admin-reports" to 5175, "admin" to 5174)),
        )
        assertEquals(emptyList(), frontendArguments(emptyMap(), emptyMap()))
    }

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
    fun `the app listens for a debugger on loopback only`() {
        assertEquals(
            listOf("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=127.0.0.1:5005"),
            debugArguments(5005),
        )
    }

    @Test
    fun `a debug port of zero turns debugging off`() {
        assertEquals(emptyList(), debugArguments(0))
    }

    @Test
    fun `stopping a process tree stops children too`() {
        val java = File(System.getProperty("java.home"), "bin/java").path
        val parent = ProcessBuilder(java, "--version").start()
        parent.waitFor()
        stopProcessTree(parent)
        assertFalse(parent.isAlive)
    }

    @Test
    fun `the app runs from a copy of its folders, so nothing changes underneath it`() {
        val classes = dir.resolve("build/classes/kotlin/main").apply { mkdirs() }
        classes.resolve("app/Routes.class").apply {
            parentFile.mkdirs()
            writeText("first")
        }
        val resources = dir.resolve("build/resources/main").apply { mkdirs() }
        resources.resolve("application.yaml").writeText("port: 8080")
        val empty = dir.resolve("build/generated/empty").apply { mkdirs() }
        val missing = dir.resolve("build/classes/java/main")
        val library =
            dir.resolve("cache/lib.jar").apply {
                parentFile.mkdirs()
                writeText("jar")
            }
        val snapshots = dir.resolve("build/ktor-svelte/dev-classpath")

        val first = snapshotOfFolders(listOf(classes, resources, empty, missing, library), snapshots, 1)

        assertEquals(listOf(missing, library), first.drop(3), "what is no folder is passed on as it is")
        assertEquals("first", first[0].resolve("app/Routes.class").readText())
        assertEquals("port: 8080", first[1].resolve("application.yaml").readText())
        assertTrue(first[2].isDirectory)
        assertTrue(first.take(3).all { it.startsWith(snapshots.resolve("1")) })
        assertEquals(3, first.take(3).distinct().size)

        classes.resolve("app/Routes.class").writeText("second")
        assertEquals("first", first[0].resolve("app/Routes.class").readText(), "the running app keeps what it started with")

        val second = snapshotOfFolders(listOf(classes, resources), snapshots, 2)
        assertEquals("second", second[0].resolve("app/Routes.class").readText())
        assertFalse(snapshots.resolve("1").exists(), "the copy of the stopped app is removed")
    }

    @Test
    fun `two folders with the same name get their own copy`() {
        val kotlin = dir.resolve("classes/kotlin/main").apply { mkdirs() }
        val java = dir.resolve("classes/java/main").apply { mkdirs() }
        kotlin.resolve("A.class").writeText("kotlin")
        java.resolve("A.class").writeText("java")
        val copies = snapshotOfFolders(listOf(kotlin, java), dir.resolve("snapshots"), 1)
        assertEquals(listOf("kotlin", "java"), copies.map { it.resolve("A.class").readText() })
    }
}
