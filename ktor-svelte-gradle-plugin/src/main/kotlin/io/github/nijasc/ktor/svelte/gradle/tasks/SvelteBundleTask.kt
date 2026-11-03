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
import java.security.MessageDigest

private const val FORMAT_VERSION = 1
private val ENCODINGS = listOf("br" to ".br", "gzip" to ".gz")

@CacheableTask
public abstract class SvelteBundleTask : DefaultTask() {
    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val buildOutput: DirectoryProperty

    @get:Input
    public abstract val outputDirName: Property<String>

    @get:OutputDirectory
    public abstract val bundleDirectory: DirectoryProperty

    @TaskAction
    public fun bundle() {
        val source = buildOutput.get().asFile
        val files =
            source
                .walkTopDown()
                .filter { it.isFile }
                .associateBy { it.relativeTo(source).invariantSeparatorsPath }
                .toSortedMap()

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
        target.resolve("ktor-svelte/manifest.json").writeText(manifestJson(files))
    }

    private fun manifestJson(files: Map<String, File>): String {
        val entries =
            files
                .filterKeys { path -> !isEncodedVariant(path, files.keys) }
                .map { (path, file) -> "${quote(path)}:${entryJson(path, file, files)}" }
        return "{\"formatVersion\":$FORMAT_VERSION,\"files\":{${entries.joinToString(",")}}}\n"
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
