package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.internal.assets.MANIFEST_FORMAT_VERSION
import io.github.nijasc.ktor.svelte.internal.assets.Manifest
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import java.security.MessageDigest

internal fun Manifest.fingerprint(): String {
    val digest = MessageDigest.getInstance("SHA-256")
    files.toSortedMap().forEach { (path, entry) -> digest.update("$path\u0000${entry.hash}\n".toByteArray()) }
    return digest.digest().joinToString("") { "%02x".format(it) }
}

internal suspend fun statusJson(
    manifest: Manifest?,
    devProxy: DevProxy?,
    devUrl: String,
): String =
    buildJsonObject {
        put(
            "build",
            buildJsonObject {
                put("present", manifest != null)
                if (manifest != null) {
                    put("formatVersion", MANIFEST_FORMAT_VERSION)
                    put("files", manifest.files.size)
                    put("fingerprint", manifest.fingerprint())
                }
            },
        )
        put(
            "dev",
            buildJsonObject {
                put("proxy", devProxy != null)
                if (devProxy != null) {
                    put("url", devUrl)
                    put("reachable", devProxy.isReachable())
                }
            },
        )
    }.toString()
