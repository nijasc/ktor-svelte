package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.RouteRename
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinLinkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.normalizedRoutePath
import io.github.nijasc.ktor.svelte.gradle.libraries.renameRouteUsages
import io.github.nijasc.ktor.svelte.gradle.libraries.routeRenames
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
import java.io.IOException
import java.nio.file.Files
import java.util.concurrent.TimeUnit

internal data class PageRename(
    val renames: List<RouteRename>,
    val updatedCalls: Int,
    val updatedFiles: List<File>,
)

private data class PendingRewrite(
    val file: File,
    val content: String,
    val calls: Int,
)

internal fun uncommittedFiles(
    directory: File,
    files: List<File>,
): List<String> {
    if (files.isEmpty()) return emptyList()
    return try {
        val command = listOf("git", "status", "--porcelain", "--") + files.map { it.absolutePath }
        val process = ProcessBuilder(command).directory(directory).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        if (!process.waitFor(30, TimeUnit.SECONDS) || process.exitValue() != 0) return emptyList()
        output.lines().filter { it.isNotBlank() }.map { it.drop(3).trim() }
    } catch (_: IOException) {
        emptyList()
    }
}

internal fun renamePage(
    frontend: File,
    routesDirectory: File,
    kotlinSources: Collection<File>,
    from: String,
    to: String,
    requireClean: (List<File>) -> Unit = {},
): PageRename {
    val renames = routeRenames(routesDirectory, from, to)
    val sourceDirectory = routesDirectory.resolve(normalizedRoutePath(from))
    val targetDirectory = routesDirectory.resolve(normalizedRoutePath(to))
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve("src/lib/api"))
    val frontendFiles = linkSourceFiles(frontend.resolve("src"), excluded).map { it to false }
    val kotlinFiles = kotlinLinkSourceFiles(kotlinSources).map { it to true }
    val rewrites =
        (frontendFiles + kotlinFiles).mapNotNull { (file, kotlin) ->
            val (content, calls) = renameRouteUsages(file.readText(), renames, kotlin)
            if (calls == 0) null else PendingRewrite(file, content, calls)
        }
    requireClean(rewrites.map { it.file } + sourceDirectory)
    rewrites.forEach { it.file.writeText(it.content) }
    targetDirectory.parentFile.mkdirs()
    Files.move(sourceDirectory.toPath(), targetDirectory.toPath())
    generateSequence(sourceDirectory.parentFile) { it.parentFile }
        .takeWhile { it != routesDirectory && it.startsWith(routesDirectory) && it.list().isNullOrEmpty() }
        .forEach { it.delete() }
    val moved = { file: File -> if (file.startsWith(sourceDirectory)) targetDirectory.resolve(file.relativeTo(sourceDirectory)) else file }
    return PageRename(renames, rewrites.sumOf { it.calls }, rewrites.map { moved(it.file) })
}

@UntrackedTask(because = "Moves a page folder and rewrites the sources that link to it")
public abstract class SvelteRenameTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val kotlinSources: ConfigurableFileCollection

    @get:Input
    @get:Optional
    @get:Option(option = "page", description = "The page folder to move, relative to the routes folder, such as notes/[id]")
    public abstract val page: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "to", description = "Where to move it, relative to the routes folder, such as memos/[id]")
    public abstract val to: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "force", description = "Renames even when the files it changes have uncommitted changes")
    public abstract val force: Property<Boolean>

    @TaskAction
    public fun rename() {
        val from = page.orNull?.takeIf { it.isNotBlank() }
        val target = to.orNull?.takeIf { it.isNotBlank() }
        if (from == null || target == null) {
            throw GradleException("Say what to rename: svelteRename --page=notes/[id] --to=memos/[id]" + DocLink.ROUTES.see())
        }
        val project = projectDirectory.get().asFile
        val result =
            renamePage(frontendDir.get().asFile, routesDirectory.get().asFile, kotlinSources.files, from, target) { touched ->
                val dirty = if (force.getOrElse(false)) emptyList() else uncommittedFiles(project, touched)
                if (dirty.isNotEmpty()) {
                    throw GradleException(
                        "These files have uncommitted changes, and the rename would change them too: ${dirty.joinToString()}. " +
                            "Commit or stash them first, or add --force.",
                    )
                }
            }
        val first = result.renames.first()
        logger.lifecycle(
            "ktor-svelte: moved ${first.oldId} to ${first.newId} and updated ${result.updatedCalls} typed route call(s) " +
                "in ${result.updatedFiles.size} file(s).",
        )
        if (result.renames.any { it.parametersChanged }) {
            logger.warn(
                "ktor-svelte: the page's parameters changed, so the arguments of its typed route calls need a look. The compiler names each one.",
            )
        }
        logger.lifecycle("ktor-svelte: nothing answers at ${first.oldId} any more. Add a redirect if it was linked from outside the app.")
    }
}
