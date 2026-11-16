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
import kotlin.test.assertFalse

class ConfirmHelperTest {
    @TempDir
    lateinit var dir: File

    private fun run(daisy: Boolean): Map<*, *> {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        val helper = dir.resolve("confirm.ts").apply { writeText(renderTemplate("confirm.ts", mapOf("daisy" to daisy.toString()))) }
        val harness = File(checkNotNull(javaClass.getResource("/confirm-harness.ts")).toURI())
        val process =
            ProcessBuilder(bun!!.path, harness.path, helper.path, if (daisy) "daisy" else "plain").redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        return JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
    }

    @Test
    fun `without DaisyUI the browser asks, and only a yes runs the action`() {
        val results = run(daisy = false)
        assertEquals(1, results["confirmedValue"])
        assertEquals(null, results["declinedValue"])
        assertEquals(1, results["ran"])
        assertEquals(listOf("Delete this note?\n\nIt cannot be restored.", "Delete this note?", "Again?", "Again?"), results["asked"])
        assertEquals("down", results["failure"])
    }

    @Test
    fun `with DaisyUI a modal asks, waits for the action and shows why it failed`() {
        val results = run(daisy = true)
        val dialog = results["dialog"] as Map<*, *>
        assertEquals(true, dialog["open"])
        assertEquals(true, dialog["labelledBy"])
        assertEquals(listOf("Delete this task?", "Its comments go too.", "Cancel", "Delete"), dialog["texts"])
        assertEquals("btn btn-error", dialog["confirmClass"])
        assertEquals(true, dialog["cancelHasFocus"])
        assertEquals(listOf(null, 0, 0), results["cancelled"])

        assertEquals("btn btn-primary", results["plainConfirmClass"])
        assertEquals(true, results["confirmHasFocus"])
        assertEquals(listOf(null, 0, 0), results["escaped"])

        assertEquals(listOf(true, true, "true"), results["whileRunning"])
        assertEquals(1, results["staysOpenWhileRunning"])
        assertEquals(listOf("archived", 0), results["finished"])

        val failed = results["afterFailure"] as Map<*, *>
        assertEquals(1, failed["stillOpen"])
        assertEquals("That note is locked.", failed["alert"])
        assertEquals(true, failed["enabledAgain"])
        assertEquals(listOf("deleted", 2, 0), results["retried"])
        assertEquals(true, results["unnamedFailure"])
        assertEquals(null, results["cancelledAfterFailure"])
    }

    @Test
    fun `the helper is generated with the other files and follows the DaisyUI setting`() {
        val daisy = DaisySpec(listOf("light"), "light", null, emptyList())
        val styled = frontendFiles(LibrarySpec(TailwindSpec(false, false), daisy, false, null, 5173, "app.generated"), null, false)
        assertContains(styled.getValue(CONFIRM_HELPER), "const daisy = true;")
        val plain = frontendFiles(LibrarySpec(null, null, true, null, 5173, "app.generated"), null, false)
        assertContains(plain.getValue(CONFIRM_HELPER), "const daisy = false;")
        val imagesOnly = LibrarySpec(null, null, false, null, 5173, "app.generated", images = true)
        assertFalse(CONFIRM_HELPER in frontendFiles(imagesOnly, null, false))
    }
}
