package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.findStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File

internal fun stringLinkReport(
    frontend: File,
    routesDirectory: File,
): List<String> {
    val routes = scanRoutes(routesDirectory)
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))
    return linkSourceFiles(frontend.resolve("src"), excluded).flatMap { file ->
        val path = file.relativeTo(frontend).invariantSeparatorsPath
        findStringLinks(file.readText(), routes).map { link -> "$path:${link.line}  ${link.written}  ->  ${link.suggestion}" }
    }
}

@UntrackedTask(because = "Reads the frontend sources and reports links written as strings")
public abstract class SvelteVerifyRoutesTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Input
    public abstract val routesEnabled: Property<Boolean>

    @TaskAction
    public fun verify() {
        if (!routesEnabled.get()) {
            logger.lifecycle("ktor-svelte: typed routes are off, so there are no links to verify. Turn them on with routes() in libraries.")
            return
        }
        val report = stringLinkReport(frontendDir.get().asFile, routesDirectory.get().asFile)
        if (report.isEmpty()) {
            logger.lifecycle("ktor-svelte: every link to a page uses a typed route.")
            return
        }
        report.forEach { logger.lifecycle(it) }
        throw GradleException(
            "${report.size} link(s) to pages are written as strings. Use the typed routes from '#routes' instead." + DocLink.ROUTES.see(),
        )
    }
}
