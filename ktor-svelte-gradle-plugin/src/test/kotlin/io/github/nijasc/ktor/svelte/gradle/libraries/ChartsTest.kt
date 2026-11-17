package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.tasks.updatedPackageJson
import org.gradle.api.GradleException
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class ChartsTest {
    @TempDir
    lateinit var dir: File

    private val daisy = DaisySpec(listOf("light", "dark"), "light", "dark", emptyList())

    private fun spec(
        charts: Boolean,
        withDaisy: Boolean = true,
    ) = LibrarySpec(TailwindSpec(false, false), daisy.takeIf { withDaisy }, false, null, 5173, "app.generated", charts = charts)

    @Test
    fun `charts bring the chart library, its theme preset and the series helper`() {
        val files = frontendFiles(spec(charts = true), null, false)
        assertContains(
            files.getValue("$GENERATED_DIR/app.css"),
            "@import 'tailwindcss';\n@import 'layerchart/daisyui-5.css';\n@plugin 'daisyui'",
        )
        assertContains(files.getValue(CHARTS_HELPER), "export function chartSeries<T>(")
        val json = updatedPackageJson(emptyMap(), spec(charts = true))
        assertEquals("^2.10.1", (json["devDependencies"] as Map<*, *>)["layerchart"])
        assertEquals("./src/lib/ktor-svelte/charts.ts", (json["imports"] as Map<*, *>)["#charts"])
        assertContains(assistantGuide(spec(charts = true), null), "## Charts")

        val without = frontendFiles(spec(charts = false), null, false)
        assertFalse(CHARTS_HELPER in without)
        assertFalse("layerchart" in without.getValue("$GENERATED_DIR/app.css"))
        val removed = updatedPackageJson(mapOf("devDependencies" to mapOf("layerchart" to "^2.10.1")), spec(charts = false))
        assertFalse("layerchart" in (removed["devDependencies"] as Map<*, *>))
    }

    @Test
    fun `charts need the theme they take their colors from`() {
        val failure = assertFailsWith<GradleException> { spec(charts = true, withDaisy = false).validate() }
        assertContains(failure.message.orEmpty(), "charts needs daisyUi()")
        spec(charts = true).validate()
    }

    @Test
    fun `series get their labels and the theme's colors, in order unless one is named`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        dir.resolve("charts.ts").writeText(frontendFiles(spec(charts = true), null, false).getValue(CHARTS_HELPER))
        val script =
            """
            import { chartSeries } from './charts.ts';
            interface Day { day: string; open: number; done: number; late?: number | null }
            const series = chartSeries<Day>({ open: 'Open', done: { label: 'Done', color: 'success' }, late: {} });
            console.log(JSON.stringify({ series }));
            """.trimIndent()
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(bun!!.path, file.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val result = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
        assertEquals(
            listOf(
                mapOf("key" to "open", "label" to "Open", "color" to "var(--color-primary)"),
                mapOf("key" to "done", "label" to "Done", "color" to "var(--color-success)"),
                mapOf("key" to "late", "label" to "late", "color" to "var(--color-accent)"),
            ),
            result["series"],
        )
    }
}
