package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.GENERATED_DIR
import io.github.nijasc.ktor.svelte.gradle.libraries.generatedEndpoints
import io.github.nijasc.ktor.svelte.gradle.libraries.linkSourceFiles
import io.github.nijasc.ktor.svelte.gradle.libraries.unusedEndpoints
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

private const val API_DIR = "src/lib/api"

internal fun unusedEndpointReport(frontend: File): List<String>? {
    val services = frontend.resolve("$API_DIR/services.ts").takeIf { it.isFile } ?: return null
    val excluded = setOf(frontend.resolve(GENERATED_DIR), frontend.resolve(API_DIR))
    val sources = linkSourceFiles(frontend.resolve("src"), excluded).map { it.readText() }
    return unusedEndpoints(generatedEndpoints(services.readText()), sources).map { endpoint ->
        "${endpoint.method} ${endpoint.path}  ->  nothing in the frontend calls api.${endpoint.operation}"
    }
}

@UntrackedTask(because = "Reads the generated client and the frontend sources and reports API routes nothing calls")
public abstract class SvelteVerifyEndpointsTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Input
    @get:Optional
    @get:Option(option = "strict", description = "Fails the build when an API route is unused, instead of only listing it")
    public abstract val strict: Property<Boolean>

    @TaskAction
    public fun verify() {
        val report = unusedEndpointReport(frontendDir.get().asFile)
        if (report == null) {
            logger.lifecycle("ktor-svelte: there is no generated client in $API_DIR, so there are no endpoints to verify.")
            return
        }
        if (report.isEmpty()) {
            logger.lifecycle("ktor-svelte: the frontend calls every API route.")
            return
        }
        report.forEach { logger.lifecycle(it) }
        val summary = "${report.size} API route(s) are not called by the frontend."
        if (strict.getOrElse(false)) throw GradleException(summary + DocLink.GENERATED_TYPESCRIPT.see())
        logger.warn("ktor-svelte: $summary Add --strict to fail the build on them." + DocLink.GENERATED_TYPESCRIPT.see())
    }
}
