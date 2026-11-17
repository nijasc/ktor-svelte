package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.BunDownload
import io.github.nijasc.ktor.svelte.gradle.FrontendTool
import io.github.nijasc.ktor.svelte.gradle.NodeDownload
import io.github.nijasc.ktor.svelte.gradle.NodeInstallation
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.requireExecutable
import io.github.nijasc.ktor.svelte.gradle.resolveFrontendTool
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.MapProperty
import org.gradle.api.provider.Property
import org.gradle.api.provider.ValueSource
import org.gradle.api.provider.ValueSourceParameters
import org.gradle.api.tasks.CacheableTask
import org.gradle.api.tasks.Console
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.PathSensitive
import org.gradle.api.tasks.PathSensitivity
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.process.ExecOperations
import org.gradle.work.DisableCachingByDefault
import java.io.ByteArrayOutputStream
import java.io.File
import javax.inject.Inject
import kotlin.concurrent.thread

@DisableCachingByDefault(because = "Base type for tasks that run the frontend tool")
public abstract class SvelteToolTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Input
    public abstract val packageManager: Property<PackageManager>

    @get:Input
    @get:Optional
    public abstract val bunVersion: Property<String>

    @get:Internal
    public abstract val toolCacheDirectory: DirectoryProperty

    @get:Input
    @get:Optional
    public abstract val nodeVersion: Property<String>

    @get:Internal
    public abstract val nodeCacheDirectory: DirectoryProperty

    @get:Console
    public abstract val verbose: Property<Boolean>

    @get:Inject
    protected abstract val execOperations: ExecOperations

    internal fun tool(): FrontendTool {
        val configured = packageManager.get()
        if (bunVersion.isPresent && configured == PackageManager.Auto) return FrontendTool(PackageManager.Bun)
        return resolveFrontendTool(frontendDir.get().asFile, configured)
    }

    internal fun executable(tool: FrontendTool): File {
        val pinned = bunVersion.orNull
        if (pinned == null || tool.packageManager != PackageManager.Bun) return requireExecutable(tool)
        return BunDownload(toolCacheDirectory.get().asFile).executable(pinned)
    }

    internal fun pinnedNode(): NodeInstallation? =
        nodeVersion.orNull?.let { NodeDownload(nodeCacheDirectory.get().asFile).installation(it) }

    internal fun command(
        tool: FrontendTool,
        arguments: List<String>,
    ): ToolCommand = toolCommand(tool, arguments, pinnedNode()) { executable(tool) }

    internal fun runTool(
        tool: FrontendTool,
        arguments: List<String>,
        ignoreExitValue: Boolean = false,
    ) {
        val command = command(tool, arguments)
        execOperations.exec { spec ->
            spec.workingDir = frontendDir.get().asFile
            spec.commandLine(command.arguments)
            command.pathPrefix?.let { spec.environment(prependedPath(spec.environment, it)) }
            spec.isIgnoreExitValue = ignoreExitValue
        }
    }

    internal fun runToolQuietly(
        tool: FrontendTool,
        arguments: List<String>,
    ) {
        if (verbose.getOrElse(false)) return runTool(tool, arguments)
        val command = command(tool, arguments)
        val output = ByteArrayOutputStream()
        val result =
            execOperations.exec { spec ->
                spec.workingDir = frontendDir.get().asFile
                spec.commandLine(command.arguments)
                command.pathPrefix?.let { spec.environment(prependedPath(spec.environment, it)) }
                spec.standardOutput = output
                spec.errorOutput = output
                spec.isIgnoreExitValue = true
            }
        val text = output.toString(Charsets.UTF_8).trimEnd()
        if (result.exitValue == 0) {
            if (text.isNotEmpty()) logger.info(text)
            return
        }
        if (text.isNotEmpty()) logger.error(text)
        throw GradleException(
            "ktor-svelte: '${(listOf(tool.executableName) + arguments).joinToString(" ")}' failed with exit code ${result.exitValue}. " +
                "Its output is printed above. Run with -Psvelte.verbose=true to always see the frontend output.",
        )
    }
}

internal class ToolCommand(
    val arguments: List<String>,
    val pathPrefix: File?,
)

internal fun toolCommand(
    tool: FrontendTool,
    arguments: List<String>,
    node: NodeInstallation?,
    executable: () -> File,
): ToolCommand =
    if (node != null && tool.packageManager == PackageManager.Npm) {
        ToolCommand(listOf(node.node.absolutePath, node.npmCli.absolutePath) + arguments, node.binDirectory)
    } else {
        ToolCommand(listOf(executable().absolutePath) + arguments, node?.binDirectory)
    }

internal fun prependedPath(
    environment: Map<String, *>,
    directory: File,
): Map<String, String> {
    val key = environment.keys.firstOrNull { it.equals("PATH", ignoreCase = true) } ?: "PATH"
    val current = environment[key]?.toString().orEmpty()
    return mapOf(key to if (current.isEmpty()) directory.absolutePath else directory.absolutePath + File.pathSeparator + current)
}

@DisableCachingByDefault(because = "Writes node_modules, which is not worth caching")
public abstract class SvelteInstallTask : SvelteToolTask() {
    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val dependencyFiles: ConfigurableFileCollection

    @get:OutputFile
    public abstract val stampFile: RegularFileProperty

    init {
        outputs.upToDateWhen { task ->
            (task as SvelteInstallTask)
                .frontendDir
                .get()
                .dir("node_modules")
                .asFile.isDirectory
        }
    }

    @TaskAction
    public fun install() {
        val tool = tool()
        runToolQuietly(tool, tool.installArguments)
        stampFile.get().asFile.writeText(tool.executableName)
    }
}

@CacheableTask
public abstract class SvelteBuildTask : SvelteToolTask() {
    @get:InputFiles
    @get:PathSensitive(PathSensitivity.RELATIVE)
    public abstract val sources: ConfigurableFileCollection

    @get:Input
    public abstract val script: Property<String>

    @get:Input
    public abstract val toolVersion: Property<String>

    @get:Input
    public abstract val declaredEnvironment: MapProperty<String, String>

    @get:OutputDirectory
    public abstract val outputDirectory: DirectoryProperty

    @TaskAction
    public fun build() {
        val tool = tool()
        runToolQuietly(tool, tool.runArguments(script.get()))
    }
}

@UntrackedTask(because = "Starts the Vite dev server, which runs until it is stopped")
public abstract class SvelteDevTask : SvelteLibraryTask() {
    @get:Input
    public abstract val script: Property<String>

    @get:Input
    public abstract val port: Property<Int>

    @TaskAction
    public fun dev() {
        val tool = tool()
        val current = spec.orNull
        val watched =
            listOfNotNull(
                messagesDirectory.get().asFile.takeIf { current?.i18n != null },
                routesDirectory.get().asFile.takeIf { current?.routes == true },
            )
        val watcher = if (watched.isEmpty()) null else watchSources(watched)
        try {
            runTool(tool, tool.runArguments(script.get(), listOf("--port", port.get().toString(), "--strictPort")))
        } finally {
            watcher?.interrupt()
        }
    }

    private fun watchSources(directories: List<File>): Thread {
        val frontend = frontendDir.get().asFile
        return thread(isDaemon = true, name = "ktor-svelte-sources") {
            val detector = ChangeDetector(fingerprintOf(directories), MESSAGES_SETTLE_MILLIS)
            while (!Thread.currentThread().isInterrupted) {
                try {
                    Thread.sleep(MESSAGES_POLL_MILLIS)
                } catch (_: InterruptedException) {
                    return@thread
                }
                if (!detector.hasSettledChange(fingerprintOf(directories), System.currentTimeMillis())) continue
                runCatching { refreshGeneratedFiles(frontend, expectedFiles()) }
                    .onSuccess { changed ->
                        changed.forEach { logger.lifecycle("ktor-svelte: updated $it.") }
                    }.onFailure { logger.warn("ktor-svelte: ${it.message}") }
            }
        }
    }
}

private const val MESSAGES_POLL_MILLIS = 300L
private const val MESSAGES_SETTLE_MILLIS = 200L

internal abstract class ToolVersionSource : ValueSource<String, ToolVersionSource.Parameters> {
    public interface Parameters : ValueSourceParameters {
        public val frontendDir: DirectoryProperty
        public val packageManager: Property<PackageManager>
        public val bunVersion: Property<String>
        public val nodeVersion: Property<String>
    }

    override fun obtain(): String =
        bunOrTool() +
            parameters.nodeVersion.orNull
                ?.let { ", node $it (pinned)" }
                .orEmpty()

    private fun bunOrTool(): String =
        runCatching {
            val pinned = parameters.bunVersion.orNull
            val configured = parameters.packageManager.get()
            if (pinned != null && (configured == PackageManager.Auto || configured == PackageManager.Bun)) return "bun $pinned (pinned)"
            val tool = resolveFrontendTool(parameters.frontendDir.get().asFile, parameters.packageManager.get())
            val executable = locateExecutable(tool.executableName) ?: return UNAVAILABLE
            "${tool.executableName} ${toolFingerprint(executable, tool.executableName)}"
        }.getOrDefault(UNAVAILABLE)

    private companion object {
        const val UNAVAILABLE = "unavailable"
    }
}
