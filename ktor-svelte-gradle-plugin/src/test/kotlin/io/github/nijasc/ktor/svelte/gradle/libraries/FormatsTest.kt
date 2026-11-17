package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class FormatsTest {
    @TempDir
    lateinit var dir: File

    private val i18n = I18nSpec(listOf("en", "de", "fr", "en-GB", "xx"), "en", LocaleStrategy.Cookie)
    private val spec = LibrarySpec(null, null, false, i18n, 5173, "app.generated")
    private val catalog = MessageCatalog(i18n.locales.associateWith { mapOf("hello" to "x") })

    @Test
    fun `a time is told as a distance from now, in the language's own words`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        dir.resolve("i18n.ts").writeText(
            "export type Locale = 'en' | 'de' | 'fr' | 'en-GB' | 'xx';\nexport const getLocale = (): Locale => 'en';\n",
        )
        dir.resolve("format.ts").writeText(formatSource(i18n))
        val script =
            """
            import { timeAgo } from './format.ts';
            const now = new Date('2026-12-24T12:00:00Z');
            const at = (seconds) => new Date(now.getTime() + seconds * 1000);
            const steps = [0, -20, -59, -60, -150, -3600, -7200, -86400, -172800, -700000, -3000000, -40000000, 90, 7200, 86400];
            console.log(JSON.stringify({
                en: steps.map((step) => timeAgo(at(step), now, 'en')),
                de: steps.slice(0, 9).map((step) => timeAgo(at(step), now, 'de')),
                text: timeAgo('2026-12-24T11:57:00Z', now, 'en'),
            }));
            """.trimIndent()
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(bun!!.path, file.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val result = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
        assertEquals(
            listOf(
                "now",
                "now",
                "now",
                "1 minute ago",
                "2 minutes ago",
                "1 hour ago",
                "2 hours ago",
                "yesterday",
                "2 days ago",
                "last week",
                "last month",
                "last year",
                "in 1 minute",
                "in 2 hours",
                "tomorrow",
            ),
            result["en"],
        )
        assertEquals(
            listOf("jetzt", "jetzt", "jetzt", "vor 1 Minute", "vor 2 Minuten", "vor 1 Stunde", "vor 2 Stunden", "gestern", "vorgestern"),
            result["de"],
        )
        assertEquals("3 minutes ago", result["text"])
    }

    @Test
    fun `a locale takes its own data, then its language's, then English`() {
        assertEquals("de-AT", formatLocale("de-AT"))
        assertEquals("de", formatLocale("de-LU"))
        assertEquals("pt-BR", formatLocale("pt-br"))
        assertEquals("en", formatLocale("xx"))
        assertTrue(knownFormatLocales.size >= 60)
        knownFormatLocales.forEach { locale ->
            val data = formatData(locale)
            assertEquals(12, (data.getValue("monthsShort") as List<*>).size, locale)
            assertContains(data.getValue("money").toString(), "#,##0.00", message = locale)
        }
    }

    @Test
    fun `both sides are generated from the same data, for the configured locales`() {
        val script = frontendFiles(spec, catalog, false).getValue(FORMAT_HELPER)
        assertContains(script, "    \"de\": {\"decimal\":\",\",\"group\":\".\",")
        assertContains(
            script,
            "export function formatMoney(amount: number | string, currency: string, locale: Locale = getLocale()): string {",
        )
        assertFalse("\"ja\"" in script)
        val kotlin = kotlinFiles(spec, emptyList(), catalog, true)
        val formats = kotlin.getValue("Formats.kt")
        assertContains(formats, "package app.generated")
        assertContains(
            formats,
            "                \"de\" to\n                    LocaleFormats(\n                        decimal = \",\",\n                        group = \".\",",
        )
        assertContains(formats, "dateMedium = \"dd.MM.y\",")
        assertContains(formats, "\"EUR\" to (\"\\u20ac\" to 2)")
        assertTrue(formats.all { it.code < 0x7f }, "the generated Kotlin is plain ASCII")
        assertContains(
            kotlin.getValue("CallExtensions.kt"),
            "public val ApplicationCall.formats: Formats get() = Formats.forLocale(svelteLocale)",
        )
    }

    @Test
    fun `the TypeScript formatters print numbers, money and dates the way each locale writes them`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        dir.resolve("i18n.ts").writeText(
            "export type Locale = 'en' | 'de' | 'fr' | 'en-GB' | 'xx';\nlet current: Locale = 'en';\n" +
                "export const getLocale = (): Locale => current;\nexport const use = (locale: Locale) => (current = locale);\n",
        )
        dir.resolve("format.ts").writeText(formatSource(i18n))
        val script =
            """
            import { formatDate, formatDateTime, formatMoney, formatNumber, formatTime } from './format.ts';
            const at = new Date(2026, 11, 24, 15, 5);
            const row = (locale) => [
                formatNumber(1234567.891, 2, locale),
                formatNumber(-0.004, 2, locale),
                formatNumber('1234567890123456789.995', 2, locale),
                formatNumber(1.005, 2, locale),
                formatNumber(1000, 0, locale),
                formatMoney(1234.5, 'EUR', locale),
                formatMoney('-0.5', 'USD', locale),
                formatMoney(1234.5, 'JPY', locale),
                formatMoney(5, 'XTS', locale),
                formatDate('2026-03-07', 'short', locale),
                formatDate('2026-03-07', 'medium', locale),
                formatDate('2026-03-07', 'long', locale),
                formatDateTime(at, 'medium', locale),
                formatTime(at, locale),
            ];
            console.log(JSON.stringify({ en: row('en'), de: row('de'), fr: row('fr'), gb: row('en-GB'), xx: row('xx') }));
            """.trimIndent()
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(bun!!.path, file.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val result = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
        val narrow = "\u202f"
        val hard = "\u00a0"
        assertEquals(
            listOf(
                "1,234,567.89",
                "0.00",
                "1,234,567,890,123,456,790.00",
                "1.00",
                "1,000",
                "\u20ac1,234.50",
                "-\$0.50",
                "\u00a51,235",
                "XTS5.00",
                "3/7/26",
                "Mar 7, 2026",
                "March 7, 2026",
                "Dec 24, 2026, 3:05${narrow}PM",
                "3:05${narrow}PM",
            ),
            result["en"],
        )
        assertEquals(
            listOf(
                "1.234.567,89",
                "0,00",
                "1.234.567.890.123.456.790,00",
                "1,00",
                "1.000",
                "1.234,50$hard\u20ac",
                "-0,50$hard\$",
                "1.235$hard\u00a5",
                "5,00${hard}XTS",
                "07.03.26",
                "07.03.2026",
                "7. M\u00e4rz 2026",
                "24.12.2026, 15:05",
                "15:05",
            ),
            result["de"],
        )
        val french = result["fr"] as List<*>
        assertEquals("1${narrow}234${narrow}567,89", french[0])
        assertEquals("7 mars 2026", french[11])
        assertEquals("07/03/2026", (result["gb"] as List<*>)[9])
        assertEquals(result["en"], result["xx"])
    }
}
