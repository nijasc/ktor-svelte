package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.FrontendRoute
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.StringLink
import io.github.nijasc.ktor.svelte.gradle.libraries.findKotlinStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.findStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinLinkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File

private fun reportLines(
    file: File,
    base: File,
    links: List<StringLink>,
): List<String> {
    val path = file.relativeToOrSelf(base).invariantSeparatorsPath
    return links.map { link -> "$path:${link.line}  ${link.written}  ->  ${link.suggestion}" }
}

internal fun stringLinkReport(
    frontend: File,
    routesDirectory: File,
): List<String> = frontendLinkReport(frontend, scanRoutes(routesDirectory))

private fun frontendLinkReport(
    frontend: File,
    routes: List<FrontendRoute>,
): List<String> {
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))
    return linkSourceFiles(frontend.resolve("src"), excluded).flatMap { file ->
        reportLines(file, frontend, findStringLinks(file.readText(), routes))
    }
}

internal fun kotlinLinkReport(
    projectDirectory: File,
    sourceDirectories: Collection<File>,
    routes: List<FrontendRoute>,
): List<String> =
    kotlinLinkSourceFiles(sourceDirectories).flatMap { file ->
        reportLines(file, projectDirectory, findKotlinStringLinks(file.readText(), routes))
    }

@UntrackedTask(because = "Reads the frontend and Kotlin sources and reports links written as strings")
public abstract class SvelteVerifyRoutesTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val kotlinSources: ConfigurableFileCollection

    @get:Input
    public abstract val routesEnabled: Property<Boolean>

    @TaskAction
    public fun verify() {
        if (!routesEnabled.get()) {
            logger.lifecycle("ktor-svelte: typed routes are off, so there are no links to verify. Turn them on with routes() in libraries.")
            return
        }
        val routes = scanRoutes(routesDirectory.get().asFile)
        val inFrontend = frontendLinkReport(frontendDir.get().asFile, routes)
        val inKotlin = kotlinLinkReport(projectDirectory.get().asFile, kotlinSources.files, routes)
        val report = inFrontend + inKotlin
        if (report.isEmpty()) {
            logger.lifecycle("ktor-svelte: every link to a page uses a typed route.")
            return
        }
        report.forEach { logger.lifecycle(it) }
        val advice =
            listOfNotNull(
                "the typed routes from '#routes'".takeIf { inFrontend.isNotEmpty() },
                "FrontendRoutes in Kotlin".takeIf { inKotlin.isNotEmpty() },
            ).joinToString(" and ")
        throw GradleException("${report.size} link(s) to pages are written as strings. Use $advice instead." + DocLink.ROUTES.see())
    }
}
