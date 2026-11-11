package io.github.nijasc.ktor.svelte.internal

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
        assertEquals("https://nijasc.github.io/ktor-svelte/security#api-request-guards", DocLink.API_REQUEST_GUARDS.url)
        assertEquals(" See https://nijasc.github.io/ktor-svelte/features/transport", DocLink.TRANSPORT.see())
    }
}
