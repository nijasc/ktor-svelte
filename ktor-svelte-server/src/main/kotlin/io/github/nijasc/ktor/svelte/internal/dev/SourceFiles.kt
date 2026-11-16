package io.github.nijasc.ktor.svelte.internal.dev

import java.io.File

private const val REBUILD_AFTER_MILLIS = 5_000L
private val SKIPPED_FOLDERS = setOf("build", "node_modules", "out", "target")

internal class SourceFiles(
    private val root: File = File(System.getProperty("user.dir")),
    private val now: () -> Long = System::currentTimeMillis,
) {
    private var files: List<String>? = null
    private var builtAt = 0L
    private val found = HashMap<String, String>()

    @Synchronized
    fun pathOf(location: String): String? {
        found[location]?.let { return it }
        val match = lookUp(location) ?: if (now() - builtAt >= REBUILD_AFTER_MILLIS) lookUp(location, rebuild = true) else null
        if (match != null) found[location] = match
        return match
    }

    @Synchronized
    fun isKnown(path: String): Boolean = path in found.values

    private fun lookUp(
        location: String,
        rebuild: Boolean = false,
    ): String? {
        if (rebuild) files = null
        val all = files ?: index().also { files = it }
        all.firstOrNull { it.endsWith("/$location") }?.let { return it }
        val name = location.substringAfterLast('/')
        return all.filter { it.endsWith("/$name") }.singleOrNull()
    }

    private fun index(): List<String> {
        builtAt = now()
        return root
            .walkTopDown()
            .onEnter { it == root || (it.name !in SKIPPED_FOLDERS && !it.name.startsWith(".")) }
            .filter { it.isFile && (it.extension == "kt" || it.extension == "java") }
            .map { it.absoluteFile.invariantSeparatorsPath }
            .toList()
    }
}
