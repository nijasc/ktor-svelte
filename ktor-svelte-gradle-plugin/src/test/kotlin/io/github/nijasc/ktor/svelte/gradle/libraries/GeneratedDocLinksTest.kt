package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class GeneratedDocLinksTest {
    private val spec =
        LibrarySpec(
            tailwind = TailwindSpec(typography = false, forms = false),
            daisy = null,
            lucide = true,
            i18n = I18nSpec(listOf("en", "de"), "en", LocaleStrategy.Cookie),
            devPort = 5173,
            generatedPackage = "app.generated",
            toasts = true,
            routes = true,
            components = true,
            charts = false,
        )

    @Test
    fun `the link goes on the line after the marker, in the comment style of the file`() {
        assertEquals(
            "// $GENERATED_MARKER\n// See https://nijasc.github.io/ktor-svelte/features/i18n\nexport {};\n",
            withDocLink("src/lib/ktor-svelte/i18n.ts", "// $GENERATED_MARKER\nexport {};\n"),
        )
        assertEquals(
            "<!-- $GENERATED_MARKER -->\n<!-- See https://nijasc.github.io/ktor-svelte/features/icons-and-images -->\n<script></script>\n",
            withDocLink("src/lib/ktor-svelte/Icon.svelte", "<!-- $GENERATED_MARKER -->\n<script></script>\n"),
        )
        assertEquals(
            "/* $GENERATED_MARKER */\n/* See https://nijasc.github.io/ktor-svelte/features/styling */\n@import 'tailwindcss';\n",
            withDocLink("src/lib/ktor-svelte/app.css", "/* $GENERATED_MARKER */\n@import 'tailwindcss';\n"),
        )
        assertEquals(
            "# $GENERATED_MARKER\n# See https://nijasc.github.io/ktor-svelte/guide/project-structure\n* text eol=lf\n",
            withDocLink("src/lib/ktor-svelte/.gitattributes", "# $GENERATED_MARKER\n* text eol=lf\n"),
        )
    }

    @Test
    fun `files without the marker on their first line stay as they are, and a link is added once`() {
        assertEquals("[\"Plus\"]\n", withDocLink("src/lib/ktor-svelte/icons.json", "[\"Plus\"]\n"))
        val once = withDocLink("vite.config.ts", "// $GENERATED_MARKER\nexport default {};\n")
        assertEquals(once, withDocLink("vite.config.ts", once))
    }

    @Test
    fun `every generated file keeps the marker first and links to a docs page that exists`() {
        val catalog = MessageCatalog(mapOf("en" to mapOf("hello" to "Hello"), "de" to mapOf("hello" to "Hallo")))
        val files =
            frontendFiles(spec, catalog, false, emptyList()) +
                iconSources(listOf("plus")) +
                kotlinFiles(spec, listOf("Plus"), catalog, hasRuntimeDependency = true, routes = emptyList())
        val marked = files.filterValues { GENERATED_MARKER in it.substringBefore('\n') }

        assertTrue(marked.size > 20)
        marked.forEach { (path, content) ->
            val link = content.lines()[1]
            assertTrue("See https://nijasc.github.io/ktor-svelte/" in link, "$path has no doc link: $link")
            val page = docPageFor(path)
            assertTrue(File("../docs/$page.md").isFile, "$path links to docs/$page.md, which does not exist")
        }
    }
}
