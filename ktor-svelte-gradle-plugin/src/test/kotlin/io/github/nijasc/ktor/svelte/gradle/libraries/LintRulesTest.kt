package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class LintRulesTest {
    @TempDir
    lateinit var dir: File

    private val routes =
        listOf(
            "/",
            "/login",
            "/(app)/notes",
            "/(app)/notes/[id]",
            "/(app)/notes/new",
            "/docs/[[lang]]/[...path]",
        ).map(::routeOf)

    @Test
    fun `the rules carry the page list and are not type checked`() {
        val source = lintRulesSource(routes)
        assertContains(source, "// $GENERATED_MARKER\n// @ts-nocheck\n")
        assertContains(source, """const routeIds = {"home":"/","login":"/login","notes":"/(app)/notes","notesId":"/(app)/notes/[id]"""")
        assertContains(lintRulesSource(null), "const routeIds = {};")
    }

    @Test
    fun `the rules ship with every app that has generated files`() {
        val spec = LibrarySpec(null, DaisySpec(listOf("light"), "light", null, emptyList()), false, null, 5173, "app.generated")
        assertContains(frontendFiles(spec, null, false).getValue(GENERATED_LINT_RULES), "export default plugin;")
        val imagesOnly = LibrarySpec(null, null, false, null, 5173, "app.generated", images = true)
        assertFalse(frontendFiles(imagesOnly, null, false).containsKey(GENERATED_LINT_RULES))
    }

    @Test
    fun `the rules report what they should when a JavaScript runtime runs them`() {
        val runtime = listOf("bun", "node").firstNotNullOfOrNull { locateExecutable(it) }
        assumeTrue(runtime != null, "Neither bun nor node is on PATH")
        val rules = dir.resolve("eslint.js").apply { writeText(lintRulesSource(routes)) }
        val harness = File(checkNotNull(javaClass.getResource("/lint-rules-harness.mjs")).toURI())
        val process = ProcessBuilder(runtime!!.path, harness.path, rules.path).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val results = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
        assertEquals(
            listOf(
                "typed:home",
                "typed:notesId",
                "typed:login",
                "typed:notesNew",
                "typed:notesId",
                "typed:notesId",
                "typed:notesId",
                "typed:login",
                "typed:docsLangPath",
            ),
            results["links"],
        )
        assertEquals(listOf("fetch", "fetch", "fetch"), results["loadFile"])
        assertEquals(emptyList<String>(), results["otherFile"])
        assertEquals(emptyList<String>(), results["ownClient"])
        assertEquals(listOf("message:error", "message:error"), results["messages"])
        assertEquals(
            listOf("ktor-svelte/no-string-page-links", "ktor-svelte/fetch-in-load", "ktor-svelte/no-error-body-message"),
            results["recommended"],
        )
    }
}
