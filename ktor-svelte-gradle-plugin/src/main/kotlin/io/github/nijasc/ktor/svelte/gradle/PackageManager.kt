package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.GradleException
import java.io.File

public enum class PackageManager {
    AUTO,
    BUN,
    PNPM,
    NPM,
    YARN,
}

internal val LOCKFILES: List<Pair<String, PackageManager>> =
    listOf(
        "bun.lock" to PackageManager.BUN,
        "bun.lockb" to PackageManager.BUN,
        "pnpm-lock.yaml" to PackageManager.PNPM,
        "package-lock.json" to PackageManager.NPM,
        "yarn.lock" to PackageManager.YARN,
    )

internal data class FrontendTool(
    val packageManager: PackageManager,
) {
    val executableName: String = packageManager.name.lowercase()

    val installArguments: List<String>
        get() =
            when (packageManager) {
                PackageManager.NPM -> listOf("ci")
                else -> listOf("install", "--frozen-lockfile")
            }

    fun runArguments(
        script: String,
        scriptArguments: List<String> = emptyList(),
    ): List<String> {
        val separator = if (packageManager == PackageManager.NPM && scriptArguments.isNotEmpty()) listOf("--") else emptyList()
        return listOf("run", script) + separator + scriptArguments
    }
}

internal fun resolveFrontendTool(
    frontendDir: File,
    configured: PackageManager,
): FrontendTool {
    if (configured != PackageManager.AUTO) return FrontendTool(configured)
    val detected =
        LOCKFILES.firstOrNull { (lockfile, _) -> frontendDir.resolve(lockfile).isFile }
            ?: throw GradleException(
                "ktor-svelte found no lockfile in $frontendDir. " +
                    "Expected one of ${LOCKFILES.joinToString { it.first }}. " +
                    "Install the frontend dependencies once, or set svelte.packageManager.",
            )
    return FrontendTool(detected.second)
}

internal fun locateExecutable(
    name: String,
    searchPath: String = System.getenv("PATH").orEmpty(),
    isWindows: Boolean = isWindowsHost(),
): File? {
    val candidates = if (isWindows) listOf("$name.exe", "$name.cmd", "$name.bat") else listOf(name)
    val separator = if (isWindows) ';' else ':'
    return searchPath
        .split(separator)
        .map { it.trim().replace("\"", "") }
        .filter { it.isNotEmpty() }
        .asSequence()
        .flatMap { directory -> candidates.asSequence().map { File(directory, it) } }
        .firstOrNull { it.isFile && it.canExecute() }
}

internal fun requireExecutable(tool: FrontendTool): File =
    locateExecutable(tool.executableName)
        ?: throw GradleException(
            "ktor-svelte could not find ${tool.executableName} on PATH. " +
                "Install ${tool.executableName}, or set svelte.packageManager to a tool you have installed.",
        )
