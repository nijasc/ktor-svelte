package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File

private const val REBUILD_AFTER_MILLIS = 5_000L
private const val HEADER_LINES = 60
private val PACKAGE_LINE = Regex("""^\s*package\s+([\w.`]+)""")
private val SOURCE_FRAME = Regex("""^\s*at (?:[^\s/()]+/+)?((?:[\w$]+\.)*)([\w$]+)\.([\w$<>-]+)\(([^():]+\.(?:kt|java)):(\d+)\)""")

internal data class OwnFrame(
    val method: String,
    val file: File,
    val line: Int,
)

internal class SourceIndex(
    private val directories: List<File>,
    private val now: () -> Long = System::currentTimeMillis,
) {
    private var byName: Map<String, List<File>>? = null
    private var builtAt = 0L
    private val packages = HashMap<File, String>()

    val isEmpty: Boolean get() = directories.isEmpty()

    fun ownFrame(frame: String): OwnFrame? {
        val match = SOURCE_FRAME.find(frame) ?: return null
        val (packagePrefix, type, method, fileName, line) = match.destructured
        val file = find(packagePrefix.trimEnd('.'), fileName) ?: return null
        return OwnFrame("$packagePrefix$type.$method", file, line.toInt())
    }

    private fun find(
        packageName: String,
        fileName: String,
    ): File? {
        if (isEmpty) return null
        lookUp(packageName, fileName)?.let { return it }
        if (now() - builtAt < REBUILD_AFTER_MILLIS) return null
        byName = null
        return lookUp(packageName, fileName)
    }

    private fun lookUp(
        packageName: String,
        fileName: String,
    ): File? = files()[fileName].orEmpty().firstOrNull { packageOf(it) == packageName }

    private fun files(): Map<String, List<File>> =
        byName ?: directories
            .filter { it.isDirectory }
            .flatMap { directory ->
                directory.walkTopDown().filter { it.isFile && (it.extension == "kt" || it.extension == "java") }.toList()
            }.groupBy { it.name }
            .also {
                byName = it
                builtAt = now()
                packages.clear()
            }

    private fun packageOf(file: File): String =
        packages.getOrPut(file) {
            runCatching {
                file.useLines { lines ->
                    lines.take(HEADER_LINES).firstNotNullOfOrNull { PACKAGE_LINE.find(it)?.groupValues?.get(1) }
                }
            }.getOrNull()?.replace("`", "").orEmpty()
        }
}
