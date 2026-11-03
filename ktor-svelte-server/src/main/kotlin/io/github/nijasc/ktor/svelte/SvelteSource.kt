package io.github.nijasc.ktor.svelte

import java.nio.file.Path

public sealed interface SvelteSource {
    public data object Classpath : SvelteSource

    public data class Directory(
        val path: Path,
    ) : SvelteSource
}
