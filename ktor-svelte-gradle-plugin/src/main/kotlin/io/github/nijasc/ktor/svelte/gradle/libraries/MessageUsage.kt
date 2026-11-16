package io.github.nijasc.ktor.svelte.gradle.libraries

import java.io.File

private val MEMBER_NAME = Regex("""\.\s*([A-Za-z_]\w*)""")
private val QUOTED_KEY = Regex("""['"`]([A-Za-z][A-Za-z0-9_-]*)['"`]""")
private val MESSAGE_SOURCE_EXTENSIONS = setOf("svelte", "ts", "js", "mts", "mjs", "kt")

internal fun messageSourceFiles(
    directories: Collection<File>,
    excluded: Set<File>,
): List<File> =
    directories
        .flatMap { directory ->
            directory
                .walkTopDown()
                .onEnter { it !in excluded }
                .filter { it.isFile && it.extension in MESSAGE_SOURCE_EXTENSIONS }
        }.sortedBy { it.invariantSeparatorsPath }

internal fun unusedMessageKeys(
    keys: List<String>,
    sources: Iterable<String>,
): List<String> {
    val members = HashSet<String>()
    val quoted = HashSet<String>()
    sources.forEach { source ->
        MEMBER_NAME.findAll(source).mapTo(members) { it.groupValues[1] }
        QUOTED_KEY.findAll(source).mapTo(quoted) { it.groupValues[1] }
    }
    return keys.filter { key -> propertyName(key) !in members && key !in quoted }
}
