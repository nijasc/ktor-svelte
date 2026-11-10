package io.github.nijasc.ktor.svelte.internal

import java.nio.file.Files
import kotlin.io.path.getLastModifiedTime
import kotlin.io.path.setLastModifiedTime
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

class DirectoryAssetStoreTest {
    private val root = Files.createTempDirectory("ktor-svelte-store")
    private val page = root.resolve("index.html").also { it.writeText("<h1>one</h1>") }
    private val store = DirectoryAssetStore(root, rescanOnEveryRead = true)

    private fun hash(): String =
        store
            .manifest()!!
            .files
            .getValue("index.html")
            .hash

    @Test
    fun `a changed file gets a new hash on the next read`() {
        val before = hash()
        page.writeText("<h1>two, longer</h1>")
        assertNotEquals(before, hash())
    }

    @Test
    fun `an unchanged file is not hashed again`() {
        val before = hash()
        val modified = page.getLastModifiedTime()
        page.writeText("<h1>two</h1>")
        page.setLastModifiedTime(modified)
        assertEquals(before, hash())
    }

    @Test
    fun `removed files leave the manifest`() {
        root.resolve("about.html").writeText("about")
        assertEquals(setOf("about.html", "index.html"), store.manifest()!!.files.keys)
        Files.delete(root.resolve("about.html"))
        assertEquals(setOf("index.html"), store.manifest()!!.files.keys)
    }
}
