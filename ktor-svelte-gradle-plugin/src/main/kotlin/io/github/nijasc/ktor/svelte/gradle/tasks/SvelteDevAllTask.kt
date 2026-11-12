package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.COMPILE_ERRORS_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.DEVELOPMENT_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.FRONTEND_DIR_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.requireExecutable
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Nested
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.jvm.toolchain.JavaLauncher
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.concurrent.thread

private const val POLL_MILLIS = 500L
private const val SETTLE_MILLIS = 1000L

internal fun fingerprintOf(directories: Iterable<File>): Long =
    directories.sumOf { directory ->
        directory
            .walkTopDown()
            .filter { it.isFile }
            .sumOf { it.lastModified() + it.length() + it.path.hashCode() }
    }

internal class ChangeDetector(
    initial: Long,
    private val settleMillis: Long,
) {
    private var settled = initial
    private var pending = initial
    private var pendingSince = 0L

    fun hasSettledChange(
        fingerprint: Long,
        now: Long,
    ): Boolean {
        if (fingerprint != pending) {
            pending = fingerprint
            pendingSince = now
            return false
        }
        if (pending == settled || now - pendingSince < settleMillis) return false
        settled = pending
        return true
    }
}

internal fun debugArguments(port: Int): List<String> =
    if (port > 0) listOf("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=127.0.0.1:$port") else emptyList()

internal fun stopProcessTree(process: Process) {
    val descendants = process.descendants().toList()
    descendants.forEach { it.destroy() }
    process.destroy()
    if (!process.waitFor(3, TimeUnit.SECONDS)) process.destroyForcibly()
    descendants.filter { it.isAlive }.forEach { it.destroyForcibly() }
}

@UntrackedTask(because = "Runs Vite, the Kotlin compiler and the app until it is stopped")
public abstract class SvelteDevAllTask : SvelteToolTask() {
    @get:Input
    public abstract val script: Property<String>

    @get:Input
    public abstract val port: Property<Int>

    @get:Input
    public abstract val debugPort: Property<Int>

    @get:Input
    public abstract val openBrowser: Property<Boolean>

    @get:Input
    public abstract val mainClass: Property<String>

    @get:Internal
    public abstract val appClasspath: ConfigurableFileCollection

    @get:Internal
    public abstract val classesDirectories: ConfigurableFileCollection

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    public abstract val gradleExecutable: Property<String>

    @get:Nested
    public abstract val javaLauncher: Property<JavaLauncher>

    @get:Internal
    public abstract val compileErrorsFile: RegularFileProperty

    @Transient
    private lateinit var devLog: DevLogFormatter

    @TaskAction
    public fun runAll() {
        devLog = DevLogFormatter(useColor(System.getenv()), projectDirectory.get().asFile)
        val running = mutableListOf<Process>()
        val banner = ReadyBanner(port.get())
        if (openBrowser.get()) banner.onFirstReady = ::openInBrowser
        val stopAll = Thread { running.forEach(::stopProcessTree) }
        Runtime.getRuntime().addShutdownHook(stopAll)
        try {
            val vite = startVite()
            running += vite
            val errors = CompileErrorReport(compileErrorsFile.get().asFile)
            running += startCompiler(errors)
            var app = startApp(banner)
            running += app
            logger.lifecycle("ktor-svelte: Vite, the Kotlin compiler and the app are running. Stop this task to stop them all.")
            if (debugPort.get() > 0) {
                logger.lifecycle(
                    "ktor-svelte: attach a debugger to 127.0.0.1:${debugPort.get()}. It reconnects after each restart if auto restart is on.",
                )
            }

            val classes = classesDirectories.files
            val detector = ChangeDetector(fingerprintOf(classes), SETTLE_MILLIS)
            while (vite.isAlive) {
                Thread.sleep(POLL_MILLIS)
                if (detector.hasSettledChange(fingerprintOf(classes), System.currentTimeMillis())) {
                    logger.lifecycle("ktor-svelte: Kotlin changed, restarting the app.")
                    stopProcessTree(app)
                    running -= app
                    app = startApp(banner)
                    running += app
                }
            }
            logger.lifecycle("ktor-svelte: Vite stopped, so everything else is stopping too.")
        } catch (_: InterruptedException) {
            Thread.currentThread().interrupt()
        } finally {
            running.forEach(::stopProcessTree)
            Runtime.getRuntime().removeShutdownHook(stopAll)
        }
    }

    private fun openInBrowser(url: String) {
        val command = browserCommand(System.getProperty("os.name"), System.getenv(), url) ?: return
        runCatching { ProcessBuilder(command).redirectErrorStream(true).start() }
            .onFailure { logger.info("ktor-svelte could not open a browser: ${it.message}") }
    }

    private fun startVite(): Process {
        val tool = tool()
        val command =
            listOf(requireExecutable(tool).absolutePath) +
                tool.runArguments(script.get(), listOf("--port", port.get().toString(), "--strictPort"))
        return start(LogSource.VITE, command, frontendDir.get().asFile)
    }

    private fun startCompiler(errors: CompileErrorReport): Process {
        val command =
            listOf(
                gradleExecutable.get(),
                "--project-dir",
                projectDirectory.get().asFile.path,
                "--continuous",
                "--quiet",
                "classes",
                "svelteSync",
                "-Psvelte.dev=true",
            )
        return start(LogSource.KOTLIN, command, projectDirectory.get().asFile, errors::onLine)
    }

    private fun startApp(banner: ReadyBanner): Process {
        val command =
            listOf(
                javaLauncher
                    .get()
                    .executablePath.asFile.path,
            ) + debugArguments(debugPort.get()) +
                listOf(
                    "-D$DEVELOPMENT_SYSTEM_PROPERTY=true",
                    "-D$FRONTEND_DIR_SYSTEM_PROPERTY=${frontendDir.get().asFile.path}",
                    "-D$COMPILE_ERRORS_SYSTEM_PROPERTY=${compileErrorsFile.get().asFile.path}",
                    "-cp",
                    appClasspath.asPath,
                    mainClass.get(),
                )
        return start(LogSource.APP, command, projectDirectory.get().asFile) { line -> banner.onAppLine(line)?.let(logger::lifecycle) }
    }

    private fun start(
        source: LogSource,
        command: List<String>,
        directory: File,
        onLine: (String) -> Unit = {},
    ): Process {
        val builder = ProcessBuilder(command).directory(directory).redirectErrorStream(true)
        builder.environment().putAll(System.getenv())
        val process = builder.start()
        thread(isDaemon = true, name = "ktor-svelte-${source.label}") {
            process.inputStream.bufferedReader().useLines { lines ->
                lines.forEach { line ->
                    devLog.format(source, line)?.let(logger::lifecycle)
                    onLine(line)
                }
            }
        }
        return process
    }
}
