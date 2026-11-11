package io.github.nijasc.ktor.svelte.internal.security

import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.assets.ManifestEntry
import java.io.InputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class PageContentSecurityPolicyTest {
    private class CountingStore(
        private val files: Map<String, String>,
    ) : AssetStore {
        val opened = mutableListOf<String>()

        override fun manifest(): Manifest =
            Manifest(files.mapValues { (_, text) -> ManifestEntry(text.length.toLong(), text.hashCode().toString()) })

        override fun open(path: String): InputStream? {
            opened += path
            return files[path]?.byteInputStream()
        }
    }

    @Test
    fun `precomputing reads every page once and nothing else`() {
        val store =
            CountingStore(
                mapOf(
                    "index.html" to "<script>start()</script>",
                    "about.html" to "<p>About</p>",
                    "_app/immutable/entry.js" to "start()",
                ),
            )
        val policy = PageContentSecurityPolicy(store, "DENY", emptyMap())

        policy.precomputeAll()
        assertEquals(listOf("about.html", "index.html"), store.opened.sorted())

        val manifest = store.manifest()
        val index = policy.forPage("index.html", manifest.files.getValue("index.html"))
        policy.forPage("about.html", manifest.files.getValue("about.html"))
        assertEquals(2, store.opened.size)
        assertContains(index, inlineScriptHashes("<script>start()</script>").single())
    }

    @Test
    fun `a changed page is read again`() {
        val store = CountingStore(mapOf("index.html" to "<script>a()</script>"))
        val policy = PageContentSecurityPolicy(store, null, emptyMap())
        policy.precomputeAll()

        policy.forPage("index.html", ManifestEntry(1, "another-hash"))

        assertEquals(listOf("index.html", "index.html"), store.opened)
    }
}
