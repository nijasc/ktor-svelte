package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class AssistantGuideTest {
    private val daisy = DaisySpec(listOf("light", "dark"), "light", null, emptyList())
    private val plain = LibrarySpec(null, null, true, null, 5173, "app.generated")
    private val full =
        LibrarySpec(
            TailwindSpec(false, false),
            daisy,
            true,
            I18nSpec(listOf("en", "de"), "en", LocaleStrategy.UrlPrefix),
            5173,
            "app.generated",
            images = true,
            toasts = true,
            routes = true,
        )

    @Test
    fun `the guide carries the generated marker and the rules that hold for every project`() {
        val guide = assistantGuide(plain, null)
        assertTrue(guide.startsWith("<!-- $GENERATED_MARKER -->\n# How this project works\n"))
        assertContains(guide, "- `src/lib/api/`: the typed API client")
        assertContains(guide, "Do not write `fetch('/api/...')` by hand")
        assertContains(guide, "| `./gradlew svelteDevAll` |")
        assertContains(guide, "- `vite.config.ts`: written by `svelteSync`.")
        assertTrue(guide.all { it.code < 128 }, "the guide is plain ASCII")
    }

    @Test
    fun `only the libraries that are on are described`() {
        val guide = assistantGuide(plain, null)
        assertContains(guide, "Icons: `import Icon from '#icon'`")
        listOf("DaisyUI", "messages/", "toast", "enhanced:img", "## Pages and links", "#routes").forEach {
            assertFalse(it in guide, "$it should not be mentioned")
        }
    }

    @Test
    fun `a project with everything on gets every section and its page list`() {
        val guide = assistantGuide(full, listOf("/", "/(app)/notes/[id]").map(::routeOf))
        assertContains(guide, "- `vite.config.ts`, `src/hooks.server.ts`, `src/hooks.ts`, `src/hooks.client.ts`: written by `svelteSync`.")
        assertContains(guide, "Themes are `light`, `dark`, set in Gradle.")
        assertContains(guide, "every file in `messages/` (`en.json`, `de.json`)")
        assertContains(guide, "Failed API calls already show a toast.")
        assertContains(guide, "| `routes.home` | `/` |\n| `routes.notesId` | `/(app)/notes/[id]` |\n")
        assertFalse("tailwind.config.js" in guide)
    }

    @Test
    fun `the guide is written next to the other generated files and only with them`() {
        val files =
            frontendFiles(
                full,
                MessageCatalog(mapOf("en" to mapOf("hello" to "Hello"), "de" to mapOf("hello" to "Hallo"))),
                false,
                listOf(routeOf("/")),
            )
        assertEquals(withDocLink(ASSISTANT_GUIDE, assistantGuide(full, listOf(routeOf("/")))), files.getValue(ASSISTANT_GUIDE))
        assertEquals("$GENERATED_DIR/AGENTS.md", ASSISTANT_GUIDE)
        val imagesOnly = LibrarySpec(null, null, false, null, 5173, "app.generated", images = true)
        assertFalse(ASSISTANT_GUIDE in frontendFiles(imagesOnly, null, false))
    }
}
