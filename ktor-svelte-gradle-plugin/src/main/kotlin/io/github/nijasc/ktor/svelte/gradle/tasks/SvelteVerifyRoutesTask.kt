package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.FrontendRoute
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.StringLink
import io.github.nijasc.ktor.svelte.gradle.libraries.definesOwnRoutes
import io.github.nijasc.ktor.svelte.gradle.libraries.findKotlinStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.findStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.fixStringLinks
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinLinkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import io.github.nijasc.ktor.svelte.gradle.libraries.withKotlinImport
import io.github.nijasc.ktor.svelte.gradle.libraries.withRoutesImport
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

internal data class LinkReport(
    val lines: List<String>,
    val rewritten: Int = 0,
    val rewrittenFiles: Int = 0,
) {
    operator fun plus(other: LinkReport): LinkReport =
        LinkReport(lines + other.lines, rewritten + other.rewritten, rewrittenFiles + other.rewrittenFiles)
}

private const val OWN_ROUTES_NOTE = "  (not rewritten: this file has its own routes)"

private fun reportLines(
    file: File,
    base: File,
    links: List<StringLink>,
    note: String = "",
): List<String> {
    val path = file.relativeToOrSelf(base).invariantSeparatorsPath
    return links.map { link -> "$path:${link.line}  ${link.written}  ->  ${link.suggestion}$note" }
}

internal fun stringLinkReport(
    frontend: File,
    routesDirectory: File,
): List<String> = frontendLinkReport(frontend, scanRoutes(routesDirectory), fix = false).lines

internal fun frontendLinkReport(
    frontend: File,
    routes: List<FrontendRoute>,
    fix: Boolean,
): LinkReport {
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))
    return linkSourceFiles(frontend.resolve("src"), excluded)
        .map { file ->
            val source = file.readText()
            val links = findStringLinks(source, routes)
            when {
                !fix || links.none { it.replacement != null } -> LinkReport(reportLines(file, frontend, links))
                definesOwnRoutes(source) -> LinkReport(reportLines(file, frontend, links, OWN_ROUTES_NOTE))
                else -> {
                    val fixed = fixStringLinks(source, links)
                    val rewritten = withRoutesImport(fixed.source, svelte = file.extension == "svelte")
                    file.writeText(rewritten)
                    LinkReport(reportLines(file, frontend, findStringLinks(rewritten, routes)), fixed.fixed, 1)
                }
            }
        }.fold(LinkReport(emptyList()), LinkReport::plus)
}

internal fun kotlinLinkReport(
    projectDirectory: File,
    sourceDirectories: Collection<File>,
    routes: List<FrontendRoute>,
    fix: Boolean = false,
    generatedPackage: String = "",
): LinkReport =
    kotlinLinkSourceFiles(sourceDirectories)
        .map { file ->
            val source = file.readText()
            val links = findKotlinStringLinks(source, routes)
            if (!fix || links.none { it.replacement != null }) {
                LinkReport(reportLines(file, projectDirectory, links))
            } else {
                val fixed = fixStringLinks(source, links)
                val rewritten = withKotlinImport(fixed.source, "$generatedPackage.FrontendRoutes")
                file.writeText(rewritten)
                LinkReport(reportLines(file, projectDirectory, findKotlinStringLinks(rewritten, routes)), fixed.fixed, 1)
            }
        }.fold(LinkReport(emptyList()), LinkReport::plus)

@UntrackedTask(because = "Reads the frontend and Kotlin sources and reports or rewrites links written as strings")
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

    @get:Input
    public abstract val generatedPackage: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "fix", description = "Rewrites the links it can to typed routes and adds the import they need")
    public abstract val fix: Property<Boolean>

    @TaskAction
    public fun verify() {
        if (!routesEnabled.get()) {
            logger.lifecycle("ktor-svelte: typed routes are off, so there are no links to verify. Turn them on with routes() in libraries.")
            return
        }
        val fixing = fix.getOrElse(false)
        val routes = scanRoutes(routesDirectory.get().asFile)
        val inFrontend = frontendLinkReport(frontendDir.get().asFile, routes, fixing)
        val inKotlin = kotlinLinkReport(projectDirectory.get().asFile, kotlinSources.files, routes, fixing, generatedPackage.get())
        val report = inFrontend + inKotlin
        if (report.rewritten > 0) {
            logger.lifecycle(
                "ktor-svelte: rewrote ${report.rewritten} link(s) in ${report.rewrittenFiles} file(s). Review the changes before you commit.",
            )
        }
        if (report.lines.isEmpty()) {
            logger.lifecycle("ktor-svelte: every link to a page uses a typed route.")
            return
        }
        report.lines.forEach { logger.lifecycle(it) }
        val advice =
            listOfNotNull(
                "the typed routes from '#routes'".takeIf { inFrontend.lines.isNotEmpty() },
                "FrontendRoutes in Kotlin".takeIf { inKotlin.lines.isNotEmpty() },
            ).joinToString(" and ")
        val remaining = if (fixing) " and need a person to rewrite them" else ""
        val hint = if (fixing) "" else " Run svelteVerifyRoutes --fix to rewrite the ones that can be rewritten."
        throw GradleException(
            "${report.lines.size} link(s) to pages are written as strings$remaining. Use $advice instead.$hint" + DocLink.ROUTES.see(),
        )
    }
}
