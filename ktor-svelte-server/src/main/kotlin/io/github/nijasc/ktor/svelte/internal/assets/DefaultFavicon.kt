package io.github.nijasc.ktor.svelte.internal.assets

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.header
import io.ktor.server.response.respondBytes
import java.nio.file.Path
import kotlin.io.path.exists

private val OWN_FAVICONS = listOf("favicon.ico", "favicon.svg", "favicon.png")

private val DEFAULT_FILES =
    mapOf(
        "/favicon.ico" to ContentType("image", "x-icon"),
        "/favicon.svg" to ContentType.Image.SVG,
        "/favicon.png" to ContentType.Image.PNG,
        "/apple-touch-icon.png" to ContentType.Image.PNG,
    )

internal class DefaultFavicon(
    private val staticDirectory: Path?,
) {
    private val bytes =
        DEFAULT_FILES.keys.associateWith { path ->
            DefaultFavicon::class.java.getResource("favicon$path")?.readBytes()
                ?: error("ktor-svelte is missing its default favicon $path. The JAR may be damaged.")
        }

    fun serves(path: String): Boolean = path in DEFAULT_FILES

    fun appHasOwn(manifest: Manifest?): Boolean =
        OWN_FAVICONS.any { name -> manifest?.files?.containsKey(name) == true || staticDirectory?.resolve(name)?.exists() == true }

    suspend fun respond(
        call: ApplicationCall,
        path: String,
    ) {
        call.response.header(HttpHeaders.CacheControl, "public, max-age=86400")
        call.respondBytes(bytes.getValue(path), DEFAULT_FILES.getValue(path))
    }
}
