package io.github.nijasc.ktor.svelte.gradle.tasks

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

internal const val RAILWAY_FILE = ".railway/railway.ts"
internal const val HEALTH_PATH = "/_ktor-svelte/health"
private const val HEALTH_TIMEOUT_SECONDS = 120
private val SUPPORTED_HOSTS = listOf("railway")
private val GITHUB_REMOTE = Regex("""github\.com[:/]([A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+?)(?:\.git)?\s*$""")
private val REQUIRED_NOTE = Regex(""" Required\.( Secret\.)?$""")
private val ASSIGNED = Regex("""^([A-Z][A-Z0-9_]*)=""")

internal class StartPlan(
    val build: String,
    val start: String,
)

internal fun startPlan(
    projectName: String,
    taskNames: Set<String>,
): StartPlan =
    when {
        "buildFatJar" in taskNames -> StartPlan("./gradlew buildFatJar --no-daemon", "java -jar build/libs/$projectName-all.jar")
        "shadowJar" in taskNames -> StartPlan("./gradlew shadowJar --no-daemon", "java -jar build/libs/$projectName-all.jar")
        else -> StartPlan("./gradlew installDist --no-daemon", "build/install/$projectName/bin/$projectName")
    }

internal fun requiredVariables(example: String): List<String> {
    val names = mutableListOf<String>()
    var required = false
    example.lineSequence().forEach { line ->
        val assigned = ASSIGNED.find(line)?.groupValues?.get(1)
        if (assigned != null && required) names += assigned
        required = line.startsWith("# ") && REQUIRED_NOTE.containsMatchIn(line.trimEnd())
    }
    return names
}

internal fun githubRepository(gitConfig: String): String? {
    var inOrigin = false
    gitConfig.lineSequence().forEach { line ->
        val trimmed = line.trim()
        if (trimmed.startsWith("[")) inOrigin = trimmed == "[remote \"origin\"]"
        if (inOrigin && trimmed.startsWith("url")) return GITHUB_REMOTE.find(trimmed)?.groupValues?.get(1)
    }
    return null
}

internal fun railwayConfig(
    name: String,
    repository: String?,
    plan: StartPlan?,
    variables: List<String>,
): String {
    val imports =
        listOfNotNull(
            "defineRailway",
            "github".takeIf { repository != null },
            "preserve".takeIf { variables.isNotEmpty() },
            "project",
            "service",
        )
    val options =
        buildList {
            if (repository != null) add("        source: github(\"$repository\"),")
            if (plan != null) {
                add("        build: \"${plan.build}\",")
                add("        start: \"${plan.start}\",")
            }
            add("        healthcheck: \"$HEALTH_PATH\",")
            add("        healthcheckTimeout: $HEALTH_TIMEOUT_SECONDS,")
            if (variables.isNotEmpty()) {
                add("        env: {")
                variables.forEach { add("            $it: preserve(),") }
                add("        },")
            }
        }
    return "import { ${imports.joinToString()} } from \"railway/iac\";\n\n" +
        "export default defineRailway(() => {\n" +
        "    const app = service(\"$name\", {\n" +
        options.joinToString("\n") + "\n" +
        "    });\n\n" +
        "    return project(\"$name\", {\n" +
        "        resources: [app],\n" +
        "    });\n" +
        "});\n"
}

@UntrackedTask(because = "Writes a deploy configuration once, which then belongs to the app")
public abstract class SvelteDeployTask : DefaultTask() {
    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    public abstract val projectName: Property<String>

    @get:Input
    public abstract val buildCommand: Property<String>

    @get:Input
    public abstract val startCommand: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "host", description = "The host to write the configuration for. Only railway so far.")
    public abstract val host: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "force", description = "Replaces a configuration that is already there")
    public abstract val force: Property<Boolean>

    @TaskAction
    public fun write() {
        val chosen = host.getOrElse("railway").lowercase()
        if (chosen !in SUPPORTED_HOSTS) {
            throw GradleException(
                "svelteDeploy has no preset for '$chosen' yet. It can write one for: ${SUPPORTED_HOSTS.joinToString()}. " +
                    "Open an issue to ask for another host.",
            )
        }
        val directory = projectDirectory.get().asFile
        val target = directory.resolve(RAILWAY_FILE)
        if (target.exists() && !force.getOrElse(false)) {
            throw GradleException("$RAILWAY_FILE is already there and belongs to the app now. Run svelteDeploy --force to write it again.")
        }
        val hasDockerfile = directory.resolve("Dockerfile").isFile
        val variables =
            directory
                .resolve(ENV_EXAMPLE_FILE)
                .takeIf(File::isFile)
                ?.let { requiredVariables(it.readText()) }
                .orEmpty()
        val repository = generateSequence(directory) { it.parentFile }.map { it.resolve(".git/config") }.firstOrNull(File::isFile)
        val plan = if (hasDockerfile) null else StartPlan(buildCommand.get(), startCommand.get())
        target.parentFile.mkdirs()
        target.writeText(railwayConfig(projectName.get(), repository?.let { githubRepository(it.readText()) }, plan, variables))
        logger.lifecycle(
            listOf(
                "ktor-svelte wrote $RAILWAY_FILE. It is yours from here on.",
                if (hasDockerfile) {
                    "  Railway builds with the Dockerfile it finds, so the file has no build or start command."
                } else {
                    "  Build: ${buildCommand.get()}   Start: ${startCommand.get()}"
                },
                "  Health check: $HEALTH_PATH, which needs healthEndpoint = true in install(Svelte).",
                if (variables.isEmpty()) {
                    "  No required environment variables found in $ENV_EXAMPLE_FILE."
                } else {
                    "  Set these in Railway before the first deploy: ${variables.joinToString()}."
                },
                "  Next: npm install railway, then railway login, railway link, railway config plan and railway config apply.",
            ).joinToString("\n"),
        )
    }
}
