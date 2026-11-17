package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.provider.SetProperty
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File

internal const val README_START = "<!-- ktor-svelte:start -->"
internal const val README_END = "<!-- ktor-svelte:end -->"
private val VARIABLE_LINE = Regex("""^#?\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$""")

internal data class EnvironmentVariable(
    val name: String,
    val description: String,
    val required: Boolean,
)

internal data class ReadmeFacts(
    val taskPrefix: String,
    val tasks: Set<String>,
    val appUrl: String?,
    val devPort: Int,
    val debugPort: Int,
    val httpsPort: Int?,
    val variables: List<EnvironmentVariable>,
    val buildEnv: List<String>,
)

internal fun environmentVariables(example: File): List<EnvironmentVariable> {
    if (!example.isFile) return emptyList()
    val lines = example.readLines()
    return lines.mapIndexedNotNull { index, line ->
        val match = VARIABLE_LINE.find(line.trim()) ?: return@mapIndexedNotNull null
        val comment =
            lines
                .getOrNull(index - 1)
                ?.trim()
                ?.takeIf { it.startsWith("#") && VARIABLE_LINE.find(it) == null }
                ?.removePrefix("#")
                ?.trim()
                .orEmpty()
        EnvironmentVariable(match.groupValues[1], comment, required = !line.trimStart().startsWith("#"))
    }
}

internal fun readmeSection(facts: ReadmeFacts): String {
    fun command(vararg names: String) = "`./gradlew ${names.joinToString(" ") { facts.taskPrefix + it }}`"
    val commands =
        listOfNotNull(
            if ("svelteDevAll" in facts.tasks) {
                command("svelteDevAll") to "Runs the app, Vite and the Kotlin compiler, and restarts the app when Kotlin changes"
            } else {
                null
            },
            command("build") to "Builds the frontend and the app, and runs the tests",
            when {
                "buildFatJar" in facts.tasks -> command("buildFatJar") to "Packages the app with the frontend into one JAR"
                "shadowJar" in facts.tasks -> command("shadowJar") to "Packages the app with the frontend into one JAR"
                else -> command("jar") to "Packages the app with the frontend"
            },
            if ("run" in facts.tasks) command("run") to "Starts the app" else null,
            command("check") to "Runs the tests and the checks",
            if ("svelteGenerateTs" in facts.tasks) {
                command("svelteSync", "svelteGenerateTs") to "Writes the generated frontend files and the TypeScript client again"
            } else {
                null
            },
            command("svelteDoctor") to "Checks the frontend setup and says what to fix",
        )
    val addresses =
        listOfNotNull(
            facts.appUrl?.let { "App" to it },
            "Vite dev server" to "http://localhost:${facts.devPort}",
            facts.httpsPort?.let { "App over HTTPS in development" to "https://localhost:$it" },
            facts.debugPort.takeIf { it > 0 }?.let { "Debugger of the app started by svelteDevAll" to "localhost:$it" },
        )
    return buildString {
        appendLine("### Commands")
        appendLine()
        appendLine("| Command | What it does |")
        appendLine("|---|---|")
        commands.forEach { (name, what) -> appendLine("| $name | $what |") }
        appendLine()
        appendLine("### Addresses in development")
        appendLine()
        appendLine("| What | Address |")
        appendLine("|---|---|")
        addresses.forEach { (what, address) -> appendLine("| $what | $address |") }
        if (facts.variables.isNotEmpty() || facts.buildEnv.isNotEmpty()) {
            appendLine()
            appendLine("### Environment variables")
            appendLine()
            appendLine("| Variable | Read by | What it is |")
            appendLine("|---|---|---|")
            facts.variables.forEach { variable ->
                val required = if (variable.required) "Required." else ""
                val what = listOf(variable.description.replace("|", "\\|"), required).filter { it.isNotEmpty() }
                appendLine("| `${variable.name}` | app | ${what.joinToString(" ")} |")
            }
            facts.buildEnv.forEach { name -> appendLine("| `$name` | frontend build | Declared in `svelte { buildEnv }` |") }
        }
    }
}

internal fun replaceBetweenMarkers(
    text: String,
    section: String,
): String? {
    val start = text.indexOf(README_START)
    val end = text.indexOf(README_END, startIndex = start + README_START.length)
    if (start < 0 || end < 0) return null
    val newline = if ("\r\n" in text) "\r\n" else "\n"
    val body = section.trimEnd().replace("\r\n", "\n").replace("\n", newline)
    return text.substring(0, start + README_START.length) + newline + newline + body + newline + newline + text.substring(end)
}

@UntrackedTask(because = "Rewrites a part of the project's README")
public abstract class SvelteReadmeTask : DefaultTask() {
    @get:Internal
    public abstract val readmeFile: RegularFileProperty

    @get:Internal
    public abstract val environmentExample: RegularFileProperty

    @get:Input
    public abstract val taskPrefix: Property<String>

    @get:Input
    public abstract val taskNames: SetProperty<String>

    @get:Input
    @get:Optional
    public abstract val appUrl: Property<String>

    @get:Input
    public abstract val devPort: Property<Int>

    @get:Input
    public abstract val debugPort: Property<Int>

    @get:Input
    public abstract val https: Property<Boolean>

    @get:Input
    public abstract val httpsPort: Property<Int>

    @get:Input
    public abstract val buildEnv: ListProperty<String>

    @get:Input
    @get:Optional
    @get:Option(option = "check", description = "Fails when the README section is out of date, instead of writing it")
    public abstract val check: Property<Boolean>

    @TaskAction
    public fun write() {
        val readme = readmeFile.get().asFile
        val text = if (readme.isFile) readme.readText() else null
        val facts =
            ReadmeFacts(
                taskPrefix = taskPrefix.get(),
                tasks = taskNames.get(),
                appUrl = appUrl.orNull,
                devPort = devPort.get(),
                debugPort = debugPort.get(),
                httpsPort = httpsPort.get().takeIf { https.get() },
                variables = environmentVariables(environmentExample.get().asFile),
                buildEnv = buildEnv.get().sorted(),
            )
        val updated = text?.let { replaceBetweenMarkers(it, readmeSection(facts)) }
        if (updated == null) {
            logger.lifecycle(
                "ktor-svelte: ${readme.name} has no $README_START and $README_END lines, so nothing was written. " +
                    "Add both where the section belongs." + DocLink.GRADLE.see(),
            )
            return
        }
        if (updated == text) {
            logger.lifecycle("ktor-svelte: the section in ${readme.name} is up to date.")
            return
        }
        if (check.getOrElse(false)) throw GradleException("The section in ${readme.name} is out of date. Run svelteReadme to update it.")
        readme.writeText(updated)
        logger.lifecycle("ktor-svelte: updated the section in ${readme.name}.")
    }
}
