package io.github.nijasc.ktor.svelte.gradle

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DocLinkTest {
    private fun anchors(file: File): Set<String> =
        file
            .readLines()
            .filter { it.startsWith("#") }
            .map { heading ->
                heading
                    .trimStart('#')
                    .trim()
                    .lowercase()
                    .replace(Regex("[^a-z0-9 -]"), "")
                    .replace(' ', '-')
            }.toSet()

    @Test
    fun `every linked docs page and section exists`() {
        DocLink.entries.forEach { link ->
            val file = File("../docs/${link.page}.md")
            assertTrue(file.isFile, "docs/${link.page}.md does not exist")
            link.anchor?.let { anchor -> assertTrue(anchor in anchors(file), "docs/${link.page}.md has no section for #$anchor") }
        }
    }

    @Test
    fun `links point at the docs site`() {
        assertEquals("https://nijasc.github.io/ktor-svelte/features/frontend-libraries#i18n", DocLink.I18N.url)
        assertEquals(" See https://nijasc.github.io/ktor-svelte/guide/getting-started", DocLink.CREATE_A_PROJECT.see())
    }
}
