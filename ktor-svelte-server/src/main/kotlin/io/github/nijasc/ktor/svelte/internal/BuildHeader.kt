package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.AssetStore
import io.github.nijasc.ktor.svelte.internal.assets.Manifest

internal const val BUILD_HEADER = "X-Ktor-Svelte-Build"

internal class BuildFingerprint(
    private val store: AssetStore,
) {
    @Volatile
    private var cached: Pair<Manifest, String>? = null

    fun current(): String? {
        val manifest = store.manifest() ?: return null
        cached?.let { (known, value) -> if (known === manifest) return value }
        return shortFingerprint(manifest).also { cached = manifest to it }
    }
}
