package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File

internal fun hasPackageScript(
    frontend: File,
    name: String,
): Boolean {
    val manifest = runCatching { JsonSlurper().parse(frontend.resolve("package.json")) as? Map<*, *> }.getOrNull()
    return (manifest?.get("scripts") as? Map<*, *>)?.containsKey(name) == true
}

@UntrackedTask(because = "Runs the frontend's own formatter or linter")
public abstract class SvelteFormatTask : SvelteToolTask() {
    @get:Input
    public abstract val script: Property<String>

    @get:Input
    public abstract val purpose: Property<String>

    @get:Input
    public abstract val example: Property<String>

    @TaskAction
    public fun format() {
        val name = script.get()
        if (!hasPackageScript(frontendDir.get().asFile, name)) {
            logger.lifecycle(
                "ktor-svelte: package.json has no \"$name\" script, so the frontend was not ${purpose.get()}. " +
                    "Add one, such as \"$name\": \"${example.get()}\".",
            )
            return
        }
        val tool = tool()
        runTool(tool, tool.runArguments(name))
    }
}
