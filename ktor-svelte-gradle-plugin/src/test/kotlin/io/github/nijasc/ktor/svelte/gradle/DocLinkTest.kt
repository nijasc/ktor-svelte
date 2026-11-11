package io.github.nijasc.ktor.svelte.gradle

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
        assertEquals("https://github.com/nijasc/ktor-svelte/blob/main/docs/frontend-libraries.md", DocLink.FRONTEND_LIBRARIES.url)
        assertEquals(" See https://github.com/nijasc/ktor-svelte#create-a-project", DocLink.CREATE_A_PROJECT.see())
    }
}
