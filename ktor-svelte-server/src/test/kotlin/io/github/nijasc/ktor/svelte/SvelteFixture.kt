package io.github.nijasc.ktor.svelte

import java.nio.file.Files
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.writeBytes
import kotlin.io.path.writeText

internal fun fixtureBuild(
    files: Map<String, String> =
        mapOf(
            "index.html" to "<h1>home</h1>",
            "about.html" to "<h1>about</h1>",
            "docs/index.html" to "<h1>docs</h1>",
            "200.html" to "<h1>fallback</h1>",
            "404.html" to "<h1>missing</h1>",
            "favicon.png" to "png",
            "_app/version.json" to "{\"version\":\"1\"}",
            "_app/immutable/entry/app.abc.js" to "console.log(1)",
        ),
    encoded: Map<String, String> = emptyMap(),
): Path {
    val root = Files.createTempDirectory("ktor-svelte-fixture")
    (files + encoded).forEach { (path, content) ->
        val file = root.resolve(path)
        file.parent.createDirectories()
        file.writeText(content)
    }
    return root
}

internal fun classLoaderWithManifest(
    manifestJson: String,
    files: Map<String, ByteArray> = emptyMap(),
): ClassLoader {
    val root = Files.createTempDirectory("ktor-svelte-classpath")
    val manifest = root.resolve("ktor-svelte/manifest.json")
    manifest.parent.createDirectories()
    manifest.writeText(manifestJson)
    files.forEach { (path, content) ->
        val file = root.resolve("ktor-svelte/public/$path")
        file.parent.createDirectories()
        file.writeBytes(content)
    }
    return java.net.URLClassLoader(arrayOf(root.toUri().toURL()), null)
}
