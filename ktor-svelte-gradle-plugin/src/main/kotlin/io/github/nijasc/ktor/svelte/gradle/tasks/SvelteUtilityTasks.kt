package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option

@UntrackedTask(because = "Changes dependencies through the package manager")
public abstract class SvelteUpdateDependenciesTask : SvelteToolTask() {
    @TaskAction
    public fun update() {
        val tool = tool()
        val command = if (tool.packageManager == PackageManager.YARN) "upgrade" else "update"
        runTool(tool, listOf(command))
    }
}

@UntrackedTask(because = "Reports the current state of the package registry")
public abstract class SvelteOutdatedTask : SvelteToolTask() {
    @TaskAction
    public fun outdated() {
        val tool = tool()
        runTool(tool, listOf("outdated"), ignoreExitValue = true)
    }
}

@UntrackedTask(because = "Runs an arbitrary package.json script")
public abstract class SvelteRunScriptTask : SvelteToolTask() {
    @get:Input
    @get:Optional
    @get:Option(option = "script", description = "The package.json script to run")
    public abstract val script: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "args", description = "Arguments passed to the script, for example --args=\"--fix --quiet\"")
    public abstract val scriptArguments: Property<String>

    @TaskAction
    public fun runScript() {
        val name =
            script.orNull
                ?: throw GradleException("Name a package.json script, for example: svelteRun --script=lint")
        val tool = tool()
        runTool(tool, tool.runArguments(name, splitArguments(scriptArguments.getOrElse(""))))
    }
}

internal fun splitArguments(line: String): List<String> {
    val arguments = mutableListOf<String>()
    val current = StringBuilder()
    var quote: Char? = null
    var started = false
    line.forEach { character ->
        when {
            quote != null && character == quote -> quote = null
            quote != null -> current.append(character)
            character == '"' || character == '\'' -> {
                quote = character
                started = true
            }
            character.isWhitespace() -> {
                if (started) arguments += current.toString()
                current.clear()
                started = false
            }
            else -> {
                current.append(character)
                started = true
            }
        }
    }
    if (quote != null) throw GradleException("Unclosed quote in svelteRun --args: $line")
    if (started) arguments += current.toString()
    return arguments
}

@UntrackedTask(because = "Runs the frontend's own type checker")
public abstract class SvelteCheckTask : SvelteToolTask() {
    @TaskAction
    public fun check() {
        val tool = tool()
        runTool(tool, tool.runArguments("check"))
    }
}

@UntrackedTask(because = "Writes IDE files that the user may edit")
public abstract class SvelteRunConfigurationsTask : DefaultTask() {
    @get:OutputDirectory
    public abstract val outputDirectory: DirectoryProperty

    @get:Input
    public abstract val hasApplicationPlugin: Property<Boolean>

    @get:Input
    public abstract val debugPort: Property<Int>

    @get:Input
    public abstract val externalProjectPath: Property<String>

    @get:Input
    public abstract val taskPrefix: Property<String>

    @get:Input
    public abstract val namePrefix: Property<String>

    @TaskAction
    public fun generate() {
        val directory = outputDirectory.get().asFile
        directory.mkdirs()
        val prefix = namePrefix.get()
        val tasks = taskPrefix.get()
        val written =
            buildList {
                add(gradleConfiguration("${prefix}Vite", "${tasks}svelteDev"))
                add(gradleConfiguration("${prefix}Build JAR", "${tasks}jar"))
                add(gradleConfiguration("${prefix}Type check frontend", "${tasks}svelteCheck"))
                add(gradleConfiguration("${prefix}Update frontend dependencies", "${tasks}svelteUpdateDependencies"))
                if (hasApplicationPlugin.get()) {
                    add(gradleConfiguration("${prefix}Ktor", "${tasks}run", "-Psvelte.dev=true"))
                    add(gradleConfiguration("${prefix}Generate TypeScript", "${tasks}svelteGenerateTs"))
                    add(gradleConfiguration("${prefix}Dev", "${tasks}svelteDevAll"))
                    if (debugPort.get() > 0) add(remoteDebugConfiguration("${prefix}Debug app", debugPort.get()))
                }
            }.mapNotNull { (name, xml) ->
                val file = directory.resolve(name.replace(Regex("[^A-Za-z0-9 _-]"), "_") + ".run.xml")
                if (file.exists()) {
                    null
                } else {
                    file.writeText(xml)
                    name
                }
            }
        logger.lifecycle(
            if (written.isEmpty()) {
                "ktor-svelte: run configurations already exist in $directory"
            } else {
                "ktor-svelte: wrote ${written.joinToString()} to $directory"
            },
        )
    }

    private fun gradleConfiguration(
        name: String,
        task: String,
        parameters: String = "",
    ): Pair<String, String> =
        name to
            renderTemplate(
                "gradle.run.xml",
                mapOf(
                    "name" to escapeXml(name),
                    "projectPath" to escapeXml(externalProjectPath.get()),
                    "scriptParameters" to escapeXml(parameters),
                    "task" to escapeXml(task),
                ),
            )

    private fun remoteDebugConfiguration(
        name: String,
        port: Int,
    ): Pair<String, String> = name to renderTemplate("remote-debug.run.xml", mapOf("name" to escapeXml(name), "port" to port.toString()))

    private fun escapeXml(value: String): String =
        value
            .replace("&", "&amp;")
            .replace("\"", "&quot;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
}
