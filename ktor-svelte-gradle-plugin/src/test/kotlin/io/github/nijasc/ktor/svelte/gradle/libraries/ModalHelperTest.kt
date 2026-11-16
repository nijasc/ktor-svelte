package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class ModalHelperTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `a modal opens its dialog, answers with what it was closed with, and cleans up`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        val helper = dir.resolve("modal.ts").apply { writeText(renderTemplate("modal.ts")) }
        val harness = File(checkNotNull(javaClass.getResource("/modal-harness.ts")).toURI())
        val process = ProcessBuilder(bun!!.path, harness.path, helper.path).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val results = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>

        assertContains(results["unattached"].toString(), "Put use:attach on a <dialog>")
        assertEquals(false, results["closedAtFirst"])
        assertEquals(true, results["sameWhileOpen"])
        assertEquals(listOf(true, 1), results["opened"])
        assertEquals("ada@example.com", results["result"])
        assertEquals(listOf(false, false), results["closedAfter"])
        assertEquals(null, results["escaped"])
        assertEquals(true, results["clickInsideKeepsOpen"])
        assertEquals(listOf(null, false), results["backdrop"])
        assertEquals(null, results["answerDoesNotLeak"])
        assertEquals(listOf(null, 0), results["destroyed"])
        assertEquals(true, results["stickyStaysOpen"])
        assertEquals(7, results["stickyResult"])
        assertEquals(false, results["closingTwiceIsHarmless"])
    }

    @Test
    fun `the helper is generated with the other files`() {
        val files = frontendFiles(LibrarySpec(null, null, true, null, 5173, "app.generated"), null, false)
        assertContains(files.getValue(MODAL_HELPER), "export function modal<T = void>(options: ModalOptions = {}): Modal<T> {")
    }
}
