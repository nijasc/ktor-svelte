package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.findLoadCallsWithoutFetch
import io.github.nijasc.ktor.svelte.gradle.libraries.loadFiles
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File

internal fun loadFetchReport(
    frontend: File,
    routesDirectory: File,
): List<String> =
    loadFiles(routesDirectory).flatMap { file ->
        val path = file.relativeToOrSelf(frontend).invariantSeparatorsPath
        findLoadCallsWithoutFetch(file.readText()).map { call ->
            "$path:${call.line}  ${call.written}  ->  use apiWith(event), or pass { fetch } as the last argument"
        }
    }

@UntrackedTask(because = "Reads the load functions of the frontend and reports API calls made without their fetch")
public abstract class SvelteVerifyLoadsTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @TaskAction
    public fun verify() {
        val report = loadFetchReport(frontendDir.get().asFile, routesDirectory.get().asFile)
        if (report.isEmpty()) {
            logger.lifecycle("ktor-svelte: every API call in a load function goes through SvelteKit's fetch.")
            return
        }
        report.forEach { logger.lifecycle(it) }
        throw GradleException(
            "${report.size} API call(s) in load functions use neither apiWith(event) nor { fetch }, " +
                "so SvelteKit cannot track or reuse them." + DocLink.CALLING_THE_API.see(),
        )
    }
}
