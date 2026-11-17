package io.github.nijasc.ktor.svelte.gradle.libraries

import java.io.File

internal const val PLUGIN_ID = "io.github.nijasc.ktor-svelte"
internal const val MAVEN_METADATA_URL = "https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml"

private val RELEASE_TAG = Regex("<release>\\s*([^<\\s]+)\\s*</release>")
private val VERSION_HEADING = Regex("^##\\s+(\\S+)\\s*$")
private val CONDITION = Regex("^when\\s+([^:]+):\\s*(.+)$")
private val BUILD_FILE_NAMES = listOf("build.gradle.kts", "build.gradle", "settings.gradle.kts", "settings.gradle")

internal data class UpgradeNote(
    val version: String,
    val text: String,
    val requiredPath: String? = null,
)

internal fun compareVersions(
    left: String,
    right: String,
): Int {
    fun parts(version: String): List<Int> = version.substringBefore('-').split('.').map { it.toIntOrNull() ?: 0 }
    val a = parts(left)
    val b = parts(right)
    for (index in 0 until maxOf(a.size, b.size)) {
        val difference = a.getOrElse(index) { 0 }.compareTo(b.getOrElse(index) { 0 })
        if (difference != 0) return difference
    }
    val leftPre = '-' in left
    val rightPre = '-' in right
    return when {
        leftPre == rightPre -> 0
        leftPre -> -1
        else -> 1
    }
}

internal fun latestReleaseFrom(metadata: String): String? = RELEASE_TAG.find(metadata)?.groupValues?.get(1)

internal fun parseUpgradeNotes(text: String): List<UpgradeNote> {
    val notes = mutableListOf<UpgradeNote>()
    var version: String? = null
    text.lines().forEach { raw ->
        val line = raw.trim()
        VERSION_HEADING.matchEntire(line)?.let {
            version = it.groupValues[1]
            return@forEach
        }
        if (!line.startsWith("- ")) return@forEach
        val current = version ?: error("Upgrade note '$line' comes before any '## <version>' heading.")
        val body = line.removePrefix("- ").trim()
        val condition = CONDITION.matchEntire(body)
        notes +=
            if (condition != null) {
                UpgradeNote(current, condition.groupValues[2].trim(), condition.groupValues[1].trim())
            } else {
                UpgradeNote(current, body)
            }
    }
    return notes
}

internal fun notesBetween(
    notes: List<UpgradeNote>,
    since: String,
    until: String,
    exists: (String) -> Boolean,
): List<UpgradeNote> =
    notes
        .filter { compareVersions(it.version, since) > 0 && compareVersions(it.version, until) <= 0 }
        .filter { note -> note.requiredPath?.let(exists) ?: true }
        .sortedWith { left, right -> compareVersions(left.version, right.version) }

internal fun upgradeNotesReport(
    notes: List<UpgradeNote>,
    since: String,
    until: String,
): String =
    buildString {
        if (notes.isEmpty()) {
            appendLine("ktor-svelte $since -> $until: nothing in this upgrade needs your attention.")
            return@buildString
        }
        appendLine("ktor-svelte $since -> $until: what to know")
        notes.groupBy { it.version }.forEach { (version, entries) ->
            appendLine()
            appendLine(version)
            entries.forEach { appendLine("  - ${it.text}") }
        }
    }

internal data class VersionBump(
    val file: File,
    val content: String,
)

internal fun versionBumps(
    rootDirectory: File,
    from: String,
    to: String,
): List<VersionBump> {
    val quotedFrom = Regex.escape(from)
    val catalogs =
        rootDirectory
            .resolve("gradle")
            .listFiles { file -> file.name.endsWith(".versions.toml") }
            .orEmpty()
            .toList()
    val buildFiles =
        rootDirectory
            .walkTopDown()
            .onEnter { it.name !in setOf("build", ".gradle", "node_modules", ".git", ".kotlin") }
            .filter { it.isFile && it.name in BUILD_FILE_NAMES }
            .toList()
    val catalogEntry = Regex("""(?m)^(\s*ktor-svelte\s*=\s*")$quotedFrom(")""")
    val catalogInline = Regex("""(?m)^(.*(?:${Regex.escape(PLUGIN_ID)}|io\.github\.nijasc:ktor-svelte).*version\s*=\s*")$quotedFrom(")""")
    val pluginsBlock = Regex("""(id\s*\(?\s*["']${Regex.escape(PLUGIN_ID)}["']\s*\)?\s+version\s+\(?\s*["'])$quotedFrom(["'])""")
    val coordinates = Regex("""(["']io\.github\.nijasc:ktor-svelte[a-z-]*:)$quotedFrom(["'])""")
    return (catalogs.map { it to listOf(catalogEntry, catalogInline) } + buildFiles.map { it to listOf(pluginsBlock, coordinates) })
        .mapNotNull { (file, patterns) ->
            val original = file.readText()
            val updated =
                patterns.fold(
                    original,
                ) { text, pattern -> pattern.replace(text) { "${it.groupValues[1]}$to${it.groupValues[2]}" } }
            if (updated == original) null else VersionBump(file, updated)
        }
}
