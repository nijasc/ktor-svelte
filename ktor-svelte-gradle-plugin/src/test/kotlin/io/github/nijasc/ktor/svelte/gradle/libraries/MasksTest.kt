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

class MasksTest {
    @TempDir
    lateinit var dir: File

    private val results: Map<*, *> by lazy {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        val masks = dir.resolve("masks.ts").apply { writeText(renderTemplate("components/masks.ts")) }
        val harness = File(checkNotNull(javaClass.getResource("/masks-harness.ts")).toURI())
        val process = ProcessBuilder(bun!!.path, harness.path, masks.path).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
    }

    private fun mask(name: String) = results[name] as Map<*, *>

    @Test
    fun `phone numbers are grouped while typing and sent with only digits and the plus`() {
        val phone = mask("phone")
        assertEquals(listOf("+49 301 234 567", "0301 2345 67", "+49 301 234 567", ""), phone["retyped"])
        assertEquals(listOf("+49301234567", "0301234567", "+49301234567", ""), phone["cleaned"])
        assertEquals(listOf("+49 301 234 567", "0301 2345 67"), phone["shown"])
    }

    @Test
    fun `an IBAN is shown in blocks of four in capitals and sent without spaces`() {
        val iban = mask("iban")
        assertEquals(listOf("DE89 3704 0044 0532 0130 00", "DE89 3704 0044 0532 0130 00", "DE89 3704"), iban["retyped"])
        assertEquals(listOf("DE89370400440532013000", "DE89370400440532013000", "DE893704"), iban["cleaned"])
        assertEquals(listOf("DE89 3704 0044 0532 0130 00"), iban["shown"])
    }

    @Test
    fun `a date is typed in the visitor's order and sent as an ISO date once it is complete and real`() {
        val german = mask("dateDe")
        assertEquals(listOf("24", "24.12", "24.12.2026", "24.12.2026", "31.02.2026", "1"), german["retyped"])
        assertEquals(listOf("", "", "2026-12-24", "2026-12-24", "", ""), german["cleaned"])
        assertEquals(listOf("24.12.2026", ""), german["shown"])
        val american = mask("dateUs")
        assertEquals(listOf("12/24/2026"), american["retyped"])
        assertEquals(listOf("2026-12-24"), american["cleaned"])
        assertEquals(listOf("12/24/2026"), american["shown"])
    }

    @Test
    fun `money is grouped for the locale while typing, keeps a typed decimal, and is sent as a plain decimal`() {
        val german = mask("moneyDe")
        assertEquals(listOf("1.234.567", "1.234.567,8", "1.234,", "1.234,56", "-12,34", "", "0,"), german["retyped"])
        assertEquals(listOf("1234567", "1234567.8", "1234", "1234.56", "-12.34", "", ""), german["cleaned"])
        assertEquals(listOf("1.234.567,8", "-12", ""), german["shown"])
        val english = mask("moneyEn")
        assertEquals(listOf("1,234,567.89", "1,234"), english["retyped"])
        assertEquals(listOf("1234567.89", "1234"), english["cleaned"])
        assertEquals(listOf("1,234,567.89"), english["shown"])
    }

    @Test
    fun `numbers take a chosen number of decimals, whole numbers none, and long numbers keep every digit`() {
        val whole = mask("wholeDe")
        assertEquals(listOf("1.234.567", "125", "-40"), whole["retyped"])
        assertEquals(listOf("1234567", "125", "-40"), whole["cleaned"])
        assertEquals(listOf("1.234.567", "-40"), whole["shown"])
        val precise = mask("preciseEn")
        assertEquals(listOf("12,345,678,901,234,567,890.1234"), precise["retyped"])
        assertEquals(listOf("12345678901234567890.1234"), precise["cleaned"])
        assertEquals(listOf("12,345,678,901,234,567,890.1234"), precise["shown"])
    }

    @Test
    fun `the caret stays after the same typed character when the text is regrouped`() {
        val caret = mask("caret")
        assertEquals(5, caret["keptBeforeCaret"])
        assertEquals(4, caret["caretAfterFour"])
        assertEquals(6, caret["caretAfterFive"])
        assertEquals(0, caret["caretAtStart"])
    }

    @Test
    fun `the masked input binds the clean value and keeps the caret`() {
        val input = renderTemplate("components/MaskedInput.svelte", mapOf("input" to "input w-full"))
        assertContains(input, "value = clean === '' ? null : clean;")
        assertContains(input, "node.setSelectionRange(caret, caret);")
        assertContains(input, "inputmode={chosen.inputMode}")
    }
}
