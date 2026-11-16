package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertEquals

class ToastsBehaviourTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `a toast can carry an action, and the new version toast reloads the page once asked`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        val toasts = dir.resolve("toasts.ts").apply { writeText(renderTemplate("toasts.ts", mapOf("daisy" to "false"))) }
        val harness = File(checkNotNull(javaClass.getResource("/toasts-harness.ts")).toURI())
        val process = ProcessBuilder(bun!!.path, harness.path, toasts.path).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val results = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>

        assertEquals(listOf("\u00d7"), results["plainButtons"])
        assertEquals(listOf("Undo", "\u00d7"), results["actionButtons"])
        assertEquals(1, results["actionRan"])
        assertEquals(0, results["actionClosesTheToast"])
        assertEquals(1, results["newBuildToasts"])
        assertEquals("A new version is available.", results["newBuildText"])
        assertEquals(listOf("Neu laden", "\u00d7"), results["newBuildButtons"])
        assertEquals(0, results["reloadsBeforeClick"])
        assertEquals(1, results["reloadsAfterClick"])
    }
}
