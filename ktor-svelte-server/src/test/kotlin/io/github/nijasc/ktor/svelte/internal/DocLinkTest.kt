package io.github.nijasc.ktor.svelte.internal

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DocLinkTest {
    private fun anchors(page: String): Set<String> =
        File("../$page")
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
    fun `every linked page and section exists`() {
        DocLink.entries.forEach { link ->
            assertTrue(File("../${link.page}").isFile, "${link.page} does not exist")
            link.anchor?.let { anchor -> assertTrue(anchor in anchors(link.page), "${link.page} has no section for #$anchor") }
        }
    }

    @Test
    fun `links point at the repository`() {
        assertEquals("https://github.com/nijasc/ktor-svelte/blob/main/docs/server.md#transport", DocLink.TRANSPORT.url)
        assertEquals(" See https://github.com/nijasc/ktor-svelte#compatibility", DocLink.COMPATIBILITY.see())
    }
}
