package io.github.nijasc.ktor.svelte.gradle.libraries

import java.io.File

private val KOTLIN_ICON = Regex("""LucideIcon\.([A-Z][A-Za-z0-9]*)""")
private val FRONTEND_ICON = Regex("""(?:Icon\.|['"`])([A-Z][A-Za-z0-9]*)""")
private val FRONTEND_EXTENSIONS = setOf("svelte", "ts", "js", "mts", "mjs")

internal fun usedIcons(
    known: Set<String>,
    kotlinSources: Iterable<File>,
    frontendSources: File,
    skippedDirectories: Set<File>,
): Set<String> {
    val used = sortedSetOf<String>()
    kotlinSources
        .filter { it.isDirectory }
        .flatMap { directory -> directory.walkTopDown().filter { it.isFile && it.extension == "kt" }.toList() }
        .forEach { file -> KOTLIN_ICON.findAll(file.readText()).mapTo(used) { it.groupValues[1] } }
    val skipped = skippedDirectories.map { it.canonicalFile }
    frontendSources
        .walkTopDown()
        .onEnter { directory -> directory.canonicalFile !in skipped }
        .filter { it.isFile && it.extension in FRONTEND_EXTENSIONS }
        .forEach { file -> FRONTEND_ICON.findAll(file.readText()).mapTo(used) { it.groupValues[1] } }
    return used.filterTo(sortedSetOf()) { it in known }
}
