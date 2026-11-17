package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
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

class PluralsTest {
    @TempDir
    lateinit var dir: File

    private val notes = "{count, plural, =0 {No notes} one {# note} other {# notes}} for {name}"

    private fun bun(
        script: String,
        vararg arguments: String,
    ): Map<*, *> {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(listOf(bun!!.path, file.path) + arguments).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        return JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
    }

    @Test
    fun `a message tells its placeholders, which of them are counts, and what is wrong with it`() {
        val shape = messageShape(notes)
        assertEquals(listOf("count", "name"), shape.names)
        assertEquals(setOf("count"), shape.counts)
        assertEquals(emptyList(), shape.problems)

        val nested = messageShape("{a, plural, one {{b, plural, one {x {who}} other {y}}} other {z}}")
        assertEquals(listOf("a", "b", "who"), nested.names)
        assertEquals(setOf("a", "b"), nested.counts)
        assertEquals(listOf("name"), messageShape("Hello {name}, {not a name} and {}").names)

        assertContains(messageShape("{count, plural, one {# note}}").problems.joinToString(), "without the form 'other'")
        assertContains(
            messageShape("{count, plural, single {x} other {y}}").problems.joinToString(),
            "has the plural form 'single' for 'count'",
        )
        assertContains(messageShape("{count, plural, one {x} other {y}").problems.joinToString(), "has a { that is never closed")
        assertContains(
            messageShape("{count, plural, one x other {y}}").problems.joinToString(),
            "has the plural form 'one x other' for 'count'",
        )
    }

    @Test
    fun `the rules of each language family give the categories the browser gives`() {
        val families = (PLURAL_FAMILIES + ONE_OTHER.let { PluralFamily(listOf("en", "de", "es", "it", "nl", "sv", "pt-PT"), it.forms) })
        val asJson =
            JsonOutput.toJson(
                families.map { family ->
                    mapOf("languages" to family.languages, "forms" to family.forms.map { listOf(it.first, it.second) })
                },
            )
        val script =
            """
            const families = JSON.parse(await Bun.file('families.json').text());
            const wrong = [];
            for (const family of families) {
                const pick = new Function('n', 'm10', 'm100', family.forms.map(([name, when]) => 'if (' + when + ') return "' + name + '";').join('') + 'return "other";');
                for (const language of family.languages) {
                    const rules = new Intl.PluralRules(language);
                    for (let n = 0; n <= 1200; n++) {
                        const mine = pick(n, n % 10, n % 100);
                        if (mine !== rules.select(n)) wrong.push(language + ' ' + n + ': ' + mine + ' instead of ' + rules.select(n));
                    }
                }
            }
            console.log(JSON.stringify({ checked: families.flatMap((family) => family.languages).length, wrong: wrong.slice(0, 20) }));
            """.trimIndent()
        dir.resolve("families.json").writeText(asJson)
        val result = bun(script)
        assertEquals(emptyList<Any>(), result["wrong"])
        assertEquals(families.sumOf { it.languages.size }, result["checked"])
        assertEquals(ONE_OTHER, pluralFamily("xx"))
        assertEquals(ONE_OTHER, pluralFamily("pt-PT"))
        assertEquals(pluralFamily("ru"), pluralFamily("ru-RU"))
    }

    private fun catalog(vararg locales: Pair<String, Map<String, String>>) = MessageCatalog(locales.toMap())

    @Test
    fun `a catalog whose plurals do not line up is refused with the reason`(
        @TempDir messages: File,
    ) {
        fun read(
            english: String,
            russian: String,
        ): String {
            messages.resolve("en.json").writeText(JsonOutput.toJson(mapOf("notes" to english)))
            messages.resolve("ru.json").writeText(JsonOutput.toJson(mapOf("notes" to russian)))
            return assertFailsWith<GradleException> { readMessages(messages, listOf("en", "ru")) }.message.orEmpty()
        }
        val russian = "{count, plural, one {# zametka} few {# zametki} many {# zametok} other {# zametki}}"
        assertContains(
            read("{count, plural, one {# note} other {# notes}}", "{count} zametok"),
            "ru 'notes' has a plural for nothing, but en has one for [count].",
        )
        assertContains(read("{count, plural, one {# note}}", russian), "en 'notes' has a plural for 'count' without the form 'other'")
        assertContains(
            read("{count, plural, one {# note} few {# notes} other {# notes}}", russian),
            "en 'notes' has the plural form 'few', which en never uses.",
        )
        assertContains(read("{total, plural, one {# note} other {# notes}}", russian), "ru 'notes' uses [{count}], but en uses [{total}].")
        messages
            .resolve(
                "en.json",
            ).writeText(JsonOutput.toJson(mapOf("notes" to "{count, plural, =0 {None} one {# note} other {# notes}}")))
        messages.resolve("ru.json").writeText(JsonOutput.toJson(mapOf("notes" to russian)))
        assertEquals(setOf("count"), readMessages(messages, listOf("en", "ru")).counts("notes"))
    }

    @Test
    fun `the generated TypeScript picks the form for the locale and fills in the rest`() {
        val i18n = I18nSpec(listOf("en", "ru"), "en", LocaleStrategy.Cookie)
        val russian = "{count, plural, one {# zametka} few {# zametki} many {# zametok} other {# zametki}} dlya {name}"
        val both =
            catalog(
                "en" to mapOf("notes" to notes, "hello" to "Hello {name}"),
                "ru" to mapOf("notes" to russian, "hello" to "Privet {name}"),
            )
        val source =
            frontendFiles(
                LibrarySpec(null, null, false, i18n, 5173, "app.generated"),
                both,
                false,
            ).getValue("$GENERATED_DIR/i18n.ts")
        assertContains(source, "notes: (values: { count: number; name: string | number }) => translate('notes', values),")
        assertContains(source, "hello: (values: { name: string | number }) => translate('hello', values),")

        dir.resolve("i18n.ts").writeText(source.replace("import.meta.env.DEV", "false"))
        val script =
            """
            import { m } from './i18n.ts';
            const counts = [0, 1, 2, 5, 21, 22, 25, 111];
            const english = counts.map((count) => m.notes({ count, name: 'Ada' }));
            globalThis.__ktorSvelteLocale = 'ru';
            const russian = counts.map((count) => m.notes({ count, name: 'Ada' }));
            console.log(JSON.stringify({ english, russian, hello: m.hello({ name: 'Ada' }) }));
            """.trimIndent()
        val result = bun(script)
        assertEquals(
            listOf(
                "No notes for Ada",
                "1 note for Ada",
                "2 notes for Ada",
                "5 notes for Ada",
                "21 notes for Ada",
                "22 notes for Ada",
                "25 notes for Ada",
                "111 notes for Ada",
            ),
            result["english"],
        )
        assertEquals(
            listOf(
                "0 zametok dlya Ada",
                "1 zametka dlya Ada",
                "2 zametki dlya Ada",
                "5 zametok dlya Ada",
                "21 zametka dlya Ada",
                "22 zametki dlya Ada",
                "25 zametok dlya Ada",
                "111 zametok dlya Ada",
            ),
            result["russian"],
        )
        assertEquals("Privet Ada", result["hello"])
    }

    @Test
    fun `the generated Kotlin takes counts as numbers and carries the rules of the configured languages only`() {
        val i18n = I18nSpec(listOf("en", "ru", "ja"), "en", LocaleStrategy.Cookie)
        val russian = "{count, plural, one {# zametka} few {# zametki} many {# zametok} other {# zametki}} dlya {name}"
        val all =
            catalog(
                "en" to mapOf("notes" to notes, "hello" to "Hello {name}"),
                "ru" to mapOf("notes" to russian, "hello" to "x {name}"),
                "ja" to mapOf("notes" to "{count, plural, other {#}} {name}", "hello" to "y {name}"),
            )
        val spec = LibrarySpec(null, null, false, i18n, 5173, "app.generated")
        val source = kotlinFiles(spec, emptyList(), all, true).getValue("Messages.kt")
        assertContains(
            source,
            "    public fun notes(\n        count: Int,\n        name: String,\n    ): String = formatMessage(table.getValue(\"notes\"), mapOf(\"count\" to count, \"name\" to name), locale)",
        )
        assertContains(source, "    public fun hello(name: String): String = table.getValue(\"hello\").replace(\"{name}\", name)")
        assertContains(source, "        \"ru\" ->\n            when {\n                m10 == 1 && m100 != 11 -> \"one\"")
        assertContains(source, "        \"ja\" -> \"other\"")
        assertContains(source, "                else -> \"many\"\n            }")
        assertContains(source, "        else -> if (n == 1) \"one\" else \"other\"")
        assertFalse("\"en\" ->" in source || "\"ar\"" in source)

        val plain =
            catalog(
                "en" to mapOf("hello" to "Hello {name}"),
                "ru" to mapOf("hello" to "x {name}"),
                "ja" to mapOf("hello" to "y {name}"),
            )
        assertFalse("pluralCategory" in kotlinFiles(spec, emptyList(), plain, true).getValue("Messages.kt"))
    }
}
