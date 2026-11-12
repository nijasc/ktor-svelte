package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.FrontendTool
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import org.gradle.api.GradleException
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

private const val TEMPLATE_ROOT = "/ktor-svelte-template"

private val TEMPLATE_FILES =
    listOf(
        "package.json",
        "vite.config.ts",
        "tsconfig.json",
        "gitignore",
        "editorconfig",
        "src/app.html",
        "src/routes/+layout.ts",
        "src/routes/+page.svelte",
    )

private val DOTFILES = setOf("gitignore", "editorconfig")

private val PREFERRED_TOOLS = listOf(PackageManager.Bun, PackageManager.Pnpm, PackageManager.Npm, PackageManager.Yarn)

@UntrackedTask(because = "Creates the frontend project once")
public abstract class SvelteInitTask : SvelteToolTask() {
    @get:Input
    @get:Optional
    @get:Option(option = "package-manager", description = "bun, pnpm, npm or yarn. Defaults to the first one found on PATH")
    public abstract val packageManagerOption: Property<String>

    @TaskAction
    public fun init() {
        val target = frontendDir.get().asFile
        if (target.list().orEmpty().any { it != "messages" }) {
            throw GradleException("ktor-svelte will not overwrite $target because it is not empty." + DocLink.CREATE_A_PROJECT.see())
        }
        val tool = FrontendTool(chooseTool())
        if (!(bunVersion.isPresent && tool.packageManager == PackageManager.Bun)) requireToolOnPath(tool)
        TEMPLATE_FILES.forEach { path -> copyTemplate(path, target) }
        runToolQuietly(tool, listOf("install"))
        logger.lifecycle("ktor-svelte: created a SvelteKit project in $target using ${tool.executableName}.")
        logger.lifecycle("Next: run svelteDoctor to check the setup, then svelteDev and run -Psvelte.dev=true.")
    }

    private fun chooseTool(): PackageManager {
        val requested = packageManagerOption.orNull
        if (requested != null) {
            return PREFERRED_TOOLS.firstOrNull { it.name.equals(requested, ignoreCase = true) }
                ?: throw GradleException("Unknown package manager '$requested'. Use bun, pnpm, npm or yarn.")
        }
        val configured = packageManager.get()
        if (configured != PackageManager.Auto) return configured
        if (bunVersion.isPresent) return PackageManager.Bun
        return PREFERRED_TOOLS.firstOrNull { locateExecutable(FrontendTool(it).executableName) != null }
            ?: throw GradleException("ktor-svelte found no package manager on PATH. Install bun, pnpm, npm or yarn.")
    }

    private fun requireToolOnPath(tool: FrontendTool) {
        if (locateExecutable(tool.executableName) == null) {
            throw GradleException("ktor-svelte could not find ${tool.executableName} on PATH.")
        }
    }

    private fun copyTemplate(
        path: String,
        target: File,
    ) {
        val stream =
            javaClass.getResourceAsStream("$TEMPLATE_ROOT/$path")
                ?: error("ktor-svelte template is missing $path")
        val file = target.resolve(if (path in DOTFILES) ".$path" else path)
        file.parentFile.mkdirs()
        stream.use { input -> file.outputStream().use { output -> input.copyTo(output) } }
    }
}
