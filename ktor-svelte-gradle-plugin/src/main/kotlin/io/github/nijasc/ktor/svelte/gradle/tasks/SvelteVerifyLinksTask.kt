package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.UnmatchedLink
import io.github.nijasc.ktor.svelte.gradle.libraries.deadLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.findUnmatchedKotlinLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.findUnmatchedLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinLinkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.readLinkTargets
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

internal fun deadLinkReport(
    frontend: File,
    routesDirectory: File,
    projectDirectory: File,
    kotlinSources: Collection<File>,
    localePrefixes: List<String>,
): List<String> {
    val routes = scanRoutes(routesDirectory)
    val targets = readLinkTargets(frontend)
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))

    fun lines(
        file: File,
        base: File,
        unmatched: List<UnmatchedLink>,
    ): List<String> {
        val path = file.relativeToOrSelf(base).invariantSeparatorsPath
        return deadLinks(unmatched, targets).map { link -> "$path:${link.line}  ${link.written}  ->  nothing is served at ${link.path}" }
    }
    val inFrontend =
        linkSourceFiles(frontend.resolve("src"), excluded).flatMap { file ->
            lines(file, frontend, findUnmatchedLinks(file.readText(), routes, localePrefixes))
        }
    val inKotlin =
        kotlinLinkSourceFiles(kotlinSources).flatMap { file ->
            lines(file, projectDirectory, findUnmatchedKotlinLinks(file.readText(), routes, localePrefixes))
        }
    return inFrontend + inKotlin
}

@UntrackedTask(because = "Reads the frontend and Kotlin sources and reports links that lead nowhere")
public abstract class SvelteVerifyLinksTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val kotlinSources: ConfigurableFileCollection

    @get:Input
    public abstract val localePrefixes: ListProperty<String>

    @get:Input
    @get:Optional
    @get:Option(option = "strict", description = "Fails the build when a dead link is found, instead of only listing it")
    public abstract val strict: Property<Boolean>

    @TaskAction
    public fun verify() {
        val report =
            deadLinkReport(
                frontendDir.get().asFile,
                routesDirectory.get().asFile,
                projectDirectory.get().asFile,
                kotlinSources.files,
                localePrefixes.get(),
            )
        if (report.isEmpty()) {
            logger.lifecycle("ktor-svelte: every internal link leads to a page, an API route or a static file.")
            return
        }
        report.forEach { logger.lifecycle(it) }
        val summary = "${report.size} internal link(s) lead to no page, no API route and no static file."
        if (strict.getOrElse(false)) throw GradleException(summary + DocLink.ROUTES.see())
        logger.warn("ktor-svelte: $summary Add --strict to fail the build on them." + DocLink.ROUTES.see())
    }
}
