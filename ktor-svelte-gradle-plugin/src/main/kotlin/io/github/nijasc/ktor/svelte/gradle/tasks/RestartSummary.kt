package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.util.Locale
import java.util.zip.CRC32

private const val MILLIS_PER_SECOND = 1000.0
private val SOURCE_EXTENSIONS = setOf("kt", "kts", "java")

internal data class SourceChange(
    val newest: File,
    val files: Int,
    val savedAt: Long,
)

internal data class PendingRestart(
    val change: SourceChange?,
    val compiledAt: Long,
    val clientBefore: Map<String, Long>,
)

internal fun changedSince(
    directories: Iterable<File>,
    since: Long,
): SourceChange? {
    val changed =
        directories
            .filter { it.isDirectory }
            .flatMap { directory -> directory.walkTopDown().filter { it.isFile && it.lastModified() > since }.toList() }
            .distinct()
    val sources = changed.filter { it.extension in SOURCE_EXTENSIONS }.ifEmpty { changed }
    val newest = sources.maxByOrNull { it.lastModified() } ?: return null
    return SourceChange(newest, sources.size, sources.minOf { it.lastModified() })
}

internal fun clientFingerprint(directory: File): Map<String, Long> =
    directory
        .listFiles()
        .orEmpty()
        .filter { it.isFile }
        .associate { file -> file.name to CRC32().apply { update(runCatching { file.readBytes() }.getOrDefault(ByteArray(0))) }.value }

internal fun changedClientFiles(
    before: Map<String, Long>,
    after: Map<String, Long>,
): List<String> = (before.keys + after.keys).filter { before[it] != after[it] }.sorted()

private fun seconds(millis: Long): String = String.format(Locale.ROOT, "%.1f s", millis.coerceAtLeast(0) / MILLIS_PER_SECOND)

internal fun restartSummary(
    restart: PendingRestart,
    readyAt: Long,
    clientAfter: Map<String, Long>,
): String {
    val change = restart.change
    val cause =
        when {
            change == null -> "a change"
            change.files == 1 -> "${change.newest.name} changed"
            change.files == 2 -> "${change.newest.name} and 1 more file changed"
            else -> "${change.newest.name} and ${change.files - 1} more files changed"
        }
    val toStart = seconds(readyAt - restart.compiledAt)
    val timing =
        if (change == null || change.savedAt > restart.compiledAt) {
            "restarted in $toStart after $cause"
        } else {
            val total = seconds(readyAt - change.savedAt)
            val toCompile = seconds(restart.compiledAt - change.savedAt)
            "restarted in $total after $cause: $toCompile to compile, $toStart to start"
        }
    val clientFiles = changedClientFiles(restart.clientBefore, clientAfter)
    val client =
        when {
            restart.clientBefore.isEmpty() && clientAfter.isEmpty() -> ""
            clientFiles.isEmpty() -> " The API client did not change."
            else -> " The API client changed: ${clientFiles.joinToString()}."
        }
    return "ktor-svelte: $timing.$client"
}
