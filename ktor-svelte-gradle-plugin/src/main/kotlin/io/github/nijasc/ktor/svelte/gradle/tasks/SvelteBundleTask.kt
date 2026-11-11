package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.CacheableTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.PathSensitive
import org.gradle.api.tasks.PathSensitivity
import org.gradle.api.tasks.TaskAction
import java.io.File
import java.nio.file.Files
import java.security.MessageDigest
import java.util.zip.Deflater
import java.util.zip.GZIPOutputStream

private const val MANIFEST_FORMAT_VERSION = 1
private val ENCODINGS = listOf("br" to ".br", "gzip" to ".gz")
private const val MIN_COMPRESSIBLE_SIZE = 1024L
private const val MAX_USEFUL_RATIO = 0.9
private val COMPRESSIBLE_EXTENSIONS =
    setOf("html", "js", "mjs", "css", "svg", "json", "webmanifest", "xml", "txt", "csv", "map", "wasm", "ico", "ttf", "otf", "eot")

internal fun isCompressible(path: String): Boolean =
    path.substringAfterLast('/').substringAfterLast('.', "").lowercase() in COMPRESSIBLE_EXTENSIONS

internal fun isHiddenPath(path: String): Boolean = path.split('/').any { it.startsWith(".") && it != ".well-known" }

internal fun isSourceMap(path: String): Boolean = path.removeSuffix(".br").removeSuffix(".gz").endsWith(".map")

@CacheableTask
public abstract class SvelteBundleTask : DefaultTask() {
    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val buildOutput: DirectoryProperty

    @get:Input
    public abstract val outputDirName: Property<String>

    @get:Input
    public abstract val includeSourceMaps: Property<Boolean>

    @get:Input
    public abstract val precompress: Property<Boolean>

    @get:OutputDirectory
    public abstract val bundleDirectory: DirectoryProperty

    @TaskAction
    public fun bundle() {
        val source = buildOutput.get().asFile
        val found =
            source
                .walkTopDown()
                .filter { it.isFile && !Files.isSymbolicLink(it.toPath()) }
                .associateBy { it.relativeTo(source).invariantSeparatorsPath }
                .toSortedMap()
        val hidden = found.keys.filter(::isHiddenPath)
        if (hidden.isNotEmpty()) logger.warn("ktor-svelte left hidden files out of the JAR: ${hidden.joinToString()}")
        val files = found.filterKeys { !isHiddenPath(it) && (includeSourceMaps.get() || !isSourceMap(it)) }

        if (files.keys.none { it.endsWith(".html") }) {
            throw GradleException(
                "ktor-svelte found no HTML files in $source. " +
                    "Check that the frontend uses adapter-static, and that svelte.outputDir " +
                    "('${outputDirName.get()}') matches the adapter's pages option.",
            )
        }

        val target = bundleDirectory.get().asFile
        target.deleteRecursively()
        val publicRoot = target.resolve("ktor-svelte/public")
        files.forEach { (path, file) -> file.copyTo(publicRoot.resolve(path), overwrite = true) }
        val compressed = if (precompress.get()) gzipUncompressed(files, publicRoot) else emptyMap()
        target.resolve("ktor-svelte/manifest.json").writeText(manifestJson(files + compressed))
    }

    private fun gzipUncompressed(
        files: Map<String, File>,
        publicRoot: File,
    ): Map<String, File> =
        files
            .filter { (path, file) ->
                isCompressible(path) &&
                    file.length() >= MIN_COMPRESSIBLE_SIZE &&
                    !isEncodedVariant(path, files.keys) &&
                    ENCODINGS.none { (_, suffix) -> (path + suffix) in files }
            }.mapNotNull { (path, file) ->
                val variant = publicRoot.resolve("$path.gz")
                gzip(file, variant)
                if (variant.length() <= file.length() * MAX_USEFUL_RATIO) {
                    "$path.gz" to variant
                } else {
                    variant.delete()
                    null
                }
            }.toMap()

    private fun gzip(
        source: File,
        target: File,
    ) {
        target.outputStream().use { output ->
            object : GZIPOutputStream(output) {
                init {
                    def.setLevel(Deflater.BEST_COMPRESSION)
                }
            }.use { gzip -> source.inputStream().use { it.copyTo(gzip) } }
        }
    }

    private fun manifestJson(files: Map<String, File>): String {
        val entries =
            files
                .filterKeys { path -> !isEncodedVariant(path, files.keys) }
                .map { (path, file) -> "${quote(path)}:${entryJson(path, file, files)}" }
        return "{\"formatVersion\":$MANIFEST_FORMAT_VERSION,\"files\":{${entries.joinToString(",")}}}\n"
    }

    private fun entryJson(
        path: String,
        file: File,
        files: Map<String, File>,
    ): String {
        val encodings =
            ENCODINGS.mapNotNull { (key, suffix) ->
                files[path + suffix]?.let { variant -> "${quote(key)}:{\"size\":${variant.length()}}" }
            }
        val encodingsJson = if (encodings.isEmpty()) "" else ",\"encodings\":{${encodings.joinToString(",")}}"
        return "{\"size\":${file.length()},\"hash\":${quote(sha256(file))}$encodingsJson}"
    }

    private fun isEncodedVariant(
        path: String,
        all: Set<String>,
    ): Boolean = ENCODINGS.any { (_, suffix) -> path.endsWith(suffix) && path.removeSuffix(suffix) in all }

    private fun sha256(file: File): String {
        val digest = MessageDigest.getInstance("SHA-256")
        file.inputStream().use { stream ->
            val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
            while (true) {
                val read = stream.read(buffer)
                if (read < 0) break
                digest.update(buffer, 0, read)
            }
        }
        return digest.digest().joinToString("") { "%02x".format(it) }
    }

    private fun quote(value: String): String {
        val escaped =
            buildString {
                value.forEach { character ->
                    when {
                        character == '"' -> append("\\\"")
                        character == '\\' -> append("\\\\")
                        character < ' ' -> append("\\u%04x".format(character.code))
                        else -> append(character)
                    }
                }
            }
        return "\"$escaped\""
    }
}
