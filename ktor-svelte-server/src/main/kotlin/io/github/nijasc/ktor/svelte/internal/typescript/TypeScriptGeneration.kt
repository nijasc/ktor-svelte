package io.github.nijasc.ktor.svelte.internal.typescript

import io.ktor.openapi.OpenApiDoc
import io.ktor.openapi.OpenApiInfo
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStarted
import io.ktor.server.application.log
import io.ktor.server.routing.openapi.OpenApiDocSource
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonPrimitive
import java.nio.file.Path
import kotlin.io.path.Path
import kotlin.io.path.absolute
import kotlin.io.path.createDirectories
import kotlin.io.path.exists
import kotlin.io.path.readText
import kotlin.io.path.writeText

private const val GENERATE_ONLY_PROPERTY = "ktor.svelte.generateTsOnly"
private const val FRONTEND_DIR_PROPERTY = "ktor.svelte.frontendDir"
private const val VERIFY_REPORT_PROPERTY = "ktor.svelte.generateTsVerify"

internal fun writeIfChanged(
    directory: Path,
    files: Map<String, String>,
): List<String> {
    directory.createDirectories()
    return files.mapNotNull { (name, content) ->
        val file = directory.resolve(name)
        if (file.exists() && file.readText() == content) {
            null
        } else {
            file.writeText(content)
            name
        }
    }
}

internal fun staleFiles(
    directory: Path,
    files: Map<String, String>,
): List<Path> =
    files.mapNotNull { (name, content) ->
        val file = directory.resolve(name)
        file.takeUnless { it.exists() && it.readText().normalizeLineEndings() == content.normalizeLineEndings() }
    }

private fun String.normalizeLineEndings(): String = replace("\r\n", "\n")

internal fun findFrontendRoot(directory: Path): Path? =
    generateSequence(directory.absolute().normalize()) { it.parent }.firstOrNull { it.resolve("package.json").exists() }

internal fun readIconNames(apiDirectory: Path): List<String> {
    val file = apiDirectory.resolveSibling("ktor-svelte/icons.json")
    if (!file.exists()) return emptyList()
    return Json.parseToJsonElement(file.readText()).jsonArray.map { it.jsonPrimitive.content }
}

internal fun installTypeScriptGeneration(
    application: Application,
    enabled: Boolean,
    configuredOutput: String?,
    apiPrefixes: List<String>,
    excludedPaths: List<String>,
    publicConfigSchema: String?,
) {
    val verifyReport = System.getProperty(VERIFY_REPORT_PROPERTY)?.let { Path(it) }
    val generateOnly = verifyReport != null || System.getProperty(GENERATE_ONLY_PROPERTY) == "true"
    if (generateOnly && !enabled) {
        application.monitor.subscribe(ApplicationStarted) {
            if (verifyReport != null) {
                application.log.info("ktor-svelte has nothing to verify: generateTs is off.")
                Runtime.getRuntime().halt(0)
            }
            application.log.error("svelteGenerateTs needs install(Svelte) { generateTs = true }.")
            Runtime.getRuntime().halt(1)
        }
        return
    }
    if (!enabled || !(application.developmentMode || generateOnly)) return

    val frontendDir = System.getProperty(FRONTEND_DIR_PROPERTY) ?: "frontend"
    val output = Path(configuredOutput ?: "$frontendDir/src/lib/api")
    val generator = TypeScriptGenerator(apiPrefixes, excludedPaths, publicConfigSchema, readIconNames(output))

    application.monitor.subscribe(ApplicationStarted) {
        val succeeded = generate(application, output, generator, verifyReport)
        if (generateOnly) Runtime.getRuntime().halt(if (succeeded) 0 else 1)
    }
}

private fun generate(
    application: Application,
    output: Path,
    generator: TypeScriptGenerator,
    verifyReport: Path?,
): Boolean {
    if (findFrontendRoot(output) == null) {
        application.log.warn("ktor-svelte did not generate TypeScript: no package.json found at or above ${output.absolute()}.")
        return false
    }
    return try {
        val openApiJson =
            OpenApiDocSource
                .Routing()
                .read(application, OpenApiDoc(info = OpenApiInfo(title = "API", version = "1.0")))
                .content
        val files = generator.generate(openApiJson)
        if (verifyReport != null) {
            val stale = staleFiles(output, files).map { it.absolute().normalize().toString() }
            verifyReport.parent?.createDirectories()
            verifyReport.writeText(stale.joinToString("") { "$it\n" })
        } else {
            val changed = writeIfChanged(output, files)
            if (changed.isNotEmpty()) application.log.info("ktor-svelte updated ${changed.joinToString()} in $output")
        }
        true
    } catch (failure: Exception) {
        application.log.error("ktor-svelte could not generate TypeScript", failure)
        false
    }
}
