package io.github.nijasc.ktor.svelte.internal.assets

internal class PublicConfigSource(
    private val provider: () -> String,
    reloadOnEveryRead: Boolean,
) {
    private val fixed: String? = if (reloadOnEveryRead) null else provider()

    fun current(): String = fixed ?: provider()
}
