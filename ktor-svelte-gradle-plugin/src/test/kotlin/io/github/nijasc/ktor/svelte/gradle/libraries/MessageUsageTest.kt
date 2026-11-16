package io.github.nijasc.ktor.svelte.gradle.libraries

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class MessageUsageTest {
    @TempDir
    lateinit var dir: File

    private val keys = listOf("app-title", "nav_sign_in", "greeting", "old-banner", "by-key", "kotlin-only")

    @Test
    fun `a key is used when its generated name is called in the frontend or in Kotlin`() {
        val sources =
            listOf(
                "<title>{m.appTitle()} - {m.navSignIn()}</title>\n<p>{m.greeting({ name })}</p>",
                "val text = Messages.forLocale(locale).kotlinOnly()",
            )
        assertEquals(listOf("old-banner", "by-key"), unusedMessageKeys(keys, sources))
    }

    @Test
    fun `a key written as a string counts as used, because it may be looked up by name`() {
        assertEquals(
            listOf("app-title", "nav_sign_in", "greeting", "old-banner", "kotlin-only"),
            unusedMessageKeys(keys, listOf("const key = 'by-key';")),
        )
    }

    @Test
    fun `a word that only looks like the name does not count`() {
        val sources = listOf("const greeting = 'hi'; function appTitle() {} // m.oldBannerText()")
        assertEquals(keys, unusedMessageKeys(keys, sources))
    }

    @Test
    fun `sources are frontend and Kotlin files outside the excluded folders`() {
        listOf(
            "src/routes/+page.svelte",
            "src/lib/text.ts",
            "src/lib/ktor-svelte/i18n.ts",
            "src/lib/logo.png",
            "kotlin/app/Routes.kt",
        ).forEach { path ->
            dir.resolve(path).apply { parentFile.mkdirs() }.writeText("")
        }
        assertEquals(
            listOf("kotlin/app/Routes.kt", "src/lib/text.ts", "src/routes/+page.svelte"),
            messageSourceFiles(
                listOf(dir.resolve("src"), dir.resolve("kotlin"), dir.resolve("missing")),
                setOf(dir.resolve("src/lib/ktor-svelte")),
            ).map { it.relativeTo(dir).invariantSeparatorsPath },
        )
    }
}
