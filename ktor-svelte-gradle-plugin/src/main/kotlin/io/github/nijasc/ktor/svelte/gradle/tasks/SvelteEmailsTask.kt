package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.libraries.EMAILS_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.RenderedComponent
import io.github.nijasc.ktor.svelte.gradle.libraries.emailResources
import io.github.nijasc.ktor.svelte.gradle.libraries.emailTemplates
import io.github.nijasc.ktor.svelte.gradle.libraries.emailsKotlin
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
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

internal const val RENDER_EMAILS_DIR = "node_modules/.cache/ktor-svelte"
private const val RENDER_EMAILS_TSCONFIG = """{ "compilerOptions": { "target": "esnext", "verbatimModuleSyntax": true } }"""

internal fun hasEmailTemplates(frontend: File): Boolean =
    frontend
        .resolve(EMAILS_DIR)
        .listFiles()
        .orEmpty()
        .any { it.isFile && it.name.endsWith(".svelte") }

@Suppress("UNCHECKED_CAST")
internal fun renderedComponents(json: String): List<RenderedComponent> =
    (JsonSlurper().parseText(json) as List<Map<String, Any?>>).map { entry ->
        RenderedComponent(
            name = entry["name"] as String,
            locale = entry["locale"] as String,
            props = entry["props"] as List<String>,
            head = entry["head"] as String,
            body = entry["body"] as String,
        )
    }

@CacheableTask
public abstract class SvelteEmailsTask : SvelteToolTask() {
    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val sources: ConfigurableFileCollection

    @get:Input
    public abstract val generatedPackage: Property<String>

    @get:OutputDirectory
    public abstract val kotlinDirectory: DirectoryProperty

    @get:OutputDirectory
    public abstract val resourcesDirectory: DirectoryProperty

    @TaskAction
    public fun render() {
        val frontend = frontendDir.get().asFile
        if (!hasEmailTemplates(frontend)) {
            writeOnlyWhatChanged(kotlinDirectory.get().asFile, emptyMap())
            writeOnlyWhatChanged(resourcesDirectory.get().asFile, emptyMap())
            return
        }
        val templates = emailTemplates(renderedComponents(renderComponents(frontend)))
        val packagePath = generatedPackage.get().replace('.', '/')
        writeOnlyWhatChanged(
            kotlinDirectory.get().asFile,
            mapOf("$packagePath/Emails.kt" to emailsKotlin(generatedPackage.get(), templates)),
        )
        writeOnlyWhatChanged(resourcesDirectory.get().asFile, emailResources(templates))
    }

    private fun renderComponents(frontend: File): String {
        if (!frontend.resolve("node_modules").isDirectory) {
            throw GradleException(
                "ktor-svelte: $EMAILS_DIR holds email templates, but the frontend dependencies are not installed. Run svelteInstall." +
                    DocLink.EMAILS.see(),
            )
        }
        val scriptDirectory = frontend.resolve(RENDER_EMAILS_DIR).apply { mkdirs() }
        val script = scriptDirectory.resolve("render-emails.mjs").apply { writeText(renderTemplate("render-emails.mjs")) }
        scriptDirectory.resolve("tsconfig.json").writeText(RENDER_EMAILS_TSCONFIG)
        val output = File(temporaryDir, "emails.json").apply { delete() }
        val tool = tool()
        val node = pinnedNode()
        val runtime =
            if (tool.packageManager == PackageManager.Bun) {
                executable(tool)
            } else {
                node?.node ?: locateExecutable("node")
                    ?: throw GradleException(
                        "ktor-svelte renders the email templates with Node.js, but node is not on PATH." + DocLink.EMAILS.see(),
                    )
            }
        runRuntimeQuietly(runtime, listOf(script.absolutePath, EMAILS_DIR, output.absolutePath), node?.binDirectory)
        return output.readText()
    }
}
