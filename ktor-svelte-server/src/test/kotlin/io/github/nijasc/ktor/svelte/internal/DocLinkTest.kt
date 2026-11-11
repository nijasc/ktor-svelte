package io.github.nijasc.ktor.svelte.internal

import java.io.File
import kotlin.test.Test
import kotlin.test.assertTrue

class DocLinkTest {
    private val anchors =
        File("../README.md")
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
    fun `every linked section exists in the README`() {
        DocLink.entries.forEach { link -> assertTrue(link.anchor in anchors, "README has no section for #${link.anchor}") }
    }

    @Test
    fun `links point at the repository README`() {
        assertTrue(DocLink.TRANSPORT.see() == " See https://github.com/nijasc/ktor-svelte#transport")
    }
}
