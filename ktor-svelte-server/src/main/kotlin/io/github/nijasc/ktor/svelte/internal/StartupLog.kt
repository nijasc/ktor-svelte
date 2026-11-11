package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import io.github.nijasc.ktor.svelte.internal.dev.fingerprint
import java.util.Properties

private const val FINGERPRINT_LENGTH = 12

internal val runtimeVersion: String by lazy {
    val properties = Properties()
    object {}.javaClass.getResourceAsStream("/ktor-svelte-server.properties")?.use(properties::load)
    properties.getProperty("version") ?: "unknown"
}

internal fun shortFingerprint(manifest: Manifest): String = manifest.fingerprint().take(FINGERPRINT_LENGTH)

internal fun startupLine(
    manifest: Manifest?,
    devUrl: String?,
): String =
    when {
        devUrl != null -> "ktor-svelte $runtimeVersion proxies pages to Vite at $devUrl"
        manifest == null -> "ktor-svelte $runtimeVersion has no frontend build"
        else -> "ktor-svelte $runtimeVersion serves frontend build ${shortFingerprint(manifest)} with ${manifest.files.size} files"
    }
