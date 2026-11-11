package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import java.io.File
import java.nio.file.Files
import java.nio.file.Path

private const val PACKAGE_SEARCH_DEPTH = 4

internal fun toolFingerprint(
    executable: File,
    name: String,
): String {
    val path = executable.toPath()
    val real = runCatching { path.toRealPath() }.getOrDefault(path)
    val besideShim =
        path.parent
            ?.resolve("node_modules")
            ?.resolve(name)
            ?.resolve("package.json")
    val aboveRealPath =
        generateSequence(real.parent) { it.parent }
            .take(PACKAGE_SEARCH_DEPTH)
            .map { it.resolve("package.json") }
    val version = (sequenceOf(besideShim) + aboveRealPath).filterNotNull().firstNotNullOfOrNull { packageVersion(it, name) }
    return version ?: "size ${Files.size(real)}"
}

private fun packageVersion(
    packageJson: Path,
    name: String,
): String? {
    if (!Files.isRegularFile(packageJson)) return null
    val content = runCatching { JsonSlurper().parse(packageJson.toFile()) as? Map<*, *> }.getOrNull() ?: return null
    val packageName = content["name"] as? String ?: return null
    val version = content["version"] as? String ?: return null
    return "$packageName@$version".takeIf { packageName == name || packageName == "corepack" }
}
