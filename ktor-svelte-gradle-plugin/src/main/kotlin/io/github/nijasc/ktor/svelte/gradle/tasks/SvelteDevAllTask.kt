package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.COMPILE_ERRORS_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.DEVELOPMENT_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.FRONTEND_DIR_SYSTEM_PROPERTY
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.MapProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Nested
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import org.gradle.jvm.toolchain.JavaLauncher
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.concurrent.thread

private const val POLL_MILLIS = 500L
private const val GENERATED_CLIENT_DIR = "src/lib/api"
private const val RECORD_EVERY_POLLS = 4
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

internal fun frontendArguments(
    directories: Map<String, String>,
    ports: Map<String, Int>,
): List<String> =
    ports.toSortedMap().flatMap { (name, number) ->
        listOfNotNull(
            "-Dktor.svelte.devUrl.$name=http://localhost:$number",
            directories[name]?.let { "-Dktor.svelte.frontendDir.$name=$it" },
        )
    }

internal fun debugArguments(port: Int): List<String> =
    if (port > 0) listOf("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=127.0.0.1:$port") else emptyList()

internal fun snapshotOfFolders(
    classpath: Iterable<File>,
    snapshots: File,
    number: Int,
): List<File> {
    snapshots.listFiles().orEmpty().forEach { it.deleteRecursively() }
    val target = snapshots.resolve(number.toString())
    return classpath.mapIndexed { index, entry ->
        if (!entry.isDirectory) return@mapIndexed entry
        val copy = target.resolve("$index-${entry.name}")
        entry.copyRecursively(copy, overwrite = true)
        copy.mkdirs()
        copy
    }
}

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
    public abstract val sourceDirectories: ConfigurableFileCollection

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Input
    public abstract val gradleExecutable: Property<String>

    @get:Nested
    public abstract val javaLauncher: Property<JavaLauncher>

    @get:Internal
    public abstract val https: Property<Boolean>

    @get:Internal
    public abstract val httpsPort: Property<Int>

    @get:Internal
    public abstract val certificateDirectory: Property<File>

    @get:Internal
    public abstract val compileErrorsFile: RegularFileProperty

    @get:Internal
    public abstract val frontendDirectories: MapProperty<String, String>

    @get:Internal
    public abstract val frontendPorts: MapProperty<String, Int>

    @get:Input
    @get:Optional
    @get:Option(option = "full-stack-traces", description = "Prints every stack trace in full, without hiding framework frames or repeats")
    public abstract val fullStackTraces: Property<Boolean>

    @Transient
    private lateinit var devLog: DevLogFormatter

    @Transient
    private var appStarts = 0

    @Transient
    @Volatile
    private var pendingRestart: PendingRestart? = null

    @TaskAction
    public fun runAll() {
        devLog =
            DevLogFormatter(
                useColor(System.getenv()),
                projectDirectory.get().asFile,
                frontendDirectory = frontendDir.get().asFile,
                foldStackTraces = !fullStackTraces.getOrElse(false),
                sourceDirectories = sourceDirectories.files.toList(),
            )
        val record = DevProcessRecord(compileErrorsFile.get().asFile.resolveSibling("dev-processes"))
        freePorts(record)
        val running = mutableListOf<Process>()
        val secure = https.getOrElse(false)
        val banner = ReadyBanner(port.get(), httpsPort.get().takeIf { secure })
        var proxy: DevHttpsProxy? = null
        if (secure) {
            val keytool =
                javaLauncher.get().metadata.installationPath.asFile.resolve("bin").listFiles { file ->
                    file.nameWithoutExtension ==
                        "keytool"
                }
            val owner =
                System.getProperty("user.name") + "@" +
                    runCatching {
                        java.net.InetAddress
                            .getLocalHost()
                            .hostName
                    }.getOrDefault("this computer")
            val certificate =
                devCertificate(
                    certificateDirectory.get(),
                    keytool?.firstOrNull() ?: throw GradleException("dev { https = true } needs keytool, which this JDK does not have."),
                    owner,
                )
            if (portIsInUse(httpsPort.get())) {
                throw GradleException(
                    portInUseMessage(httpsPort.get(), "HTTPS", "httpsPort", portOwner(httpsPort.get())) + DocLink.DEV_WORKFLOW.see(),
                )
            }
            proxy = DevHttpsProxy(certificate, httpsPort.get()) { banner.appPort }
            if (certificate.created) {
                logger.lifecycle(
                    "ktor-svelte: " + trustInstructions(System.getProperty("os.name"), certificate.authority),
                )
            }
        }
        if (openBrowser.get()) banner.onFirstReady = ::openInBrowser
        val stopAll = Thread { running.forEach(::stopProcessTree) }
        Runtime.getRuntime().addShutdownHook(stopAll)
        try {
            val vite = startVite()
            running += vite
            frontendPorts.getOrElse(emptyMap()).forEach { (name, number) ->
                running += startVite(File(frontendDirectories.get().getValue(name)), number)
            }
            val errors = CompileErrorReport(compileErrorsFile.get().asFile)
            val compiler = startCompiler(errors)
            running += compiler
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
            val sources = sourceDirectories.files
            val client = frontendDir.get().asFile.resolve(GENERATED_CLIENT_DIR)
            var lastRestart = System.currentTimeMillis()
            var recorded = emptySet<RecordedProcess>()
            var polls = 0
            while (vite.isAlive) {
                Thread.sleep(POLL_MILLIS)
                if (polls++ % RECORD_EVERY_POLLS == 0) {
                    val tree = processTree(holdingPorts = running - compiler, sharingHelpers = listOf(compiler))
                    if (tree != recorded) record.write(tree)
                    recorded = tree
                }
                if (detector.hasSettledChange(fingerprintOf(classes), System.currentTimeMillis())) {
                    logger.lifecycle("ktor-svelte: Kotlin changed, restarting the app.")
                    val compiledAt = System.currentTimeMillis()
                    pendingRestart = PendingRestart(changedSince(sources, lastRestart), compiledAt, clientFingerprint(client))
                    lastRestart = compiledAt
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
            proxy?.close()
            record.clear()
            classpathSnapshots().deleteRecursively()
            Runtime.getRuntime().removeShutdownHook(stopAll)
        }
    }

    private fun freePorts(record: DevProcessRecord) {
        val leftovers = stillRunning(record.read())
        if (leftovers.isNotEmpty()) {
            logger.lifecycle(
                "ktor-svelte: stopping what an earlier svelteDevAll of this project left running: ${leftovers.joinToString {
                    describe(
                        it,
                    )
                }}.",
            )
            stopLeftovers(leftovers)
        }
        record.clear()
        val frontendVites =
            frontendPorts.getOrElse(emptyMap()).map { (name, number) ->
                Triple(number, "the Vite of the frontend '$name'", "devPort")
            }
        (listOf(Triple(port.get(), "Vite", "port"), Triple(debugPort.get(), "the debugger", "debugPort")) + frontendVites)
            .filter { (number, _, _) -> number > 0 && portIsInUse(number) }
            .forEach { (number, purpose, setting) ->
                throw GradleException(portInUseMessage(number, purpose, setting, portOwner(number)) + DocLink.DEV_WORKFLOW.see())
            }
    }

    private fun openInBrowser(url: String) {
        val command = browserCommand(System.getProperty("os.name"), System.getenv(), url) ?: return
        runCatching { ProcessBuilder(command).redirectErrorStream(true).start() }
            .onFailure { logger.info("ktor-svelte could not open a browser: ${it.message}") }
    }

    private fun startVite(
        directory: File = frontendDir.get().asFile,
        vitePort: Int = port.get(),
    ): Process {
        val tool = tool()
        val command = command(tool, tool.runArguments(script.get(), listOf("--port", vitePort.toString(), "--strictPort")))
        return start(LogSource.VITE, command.arguments, directory, pathPrefix = command.pathPrefix)
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
        return start(LogSource.KOTLIN, command, projectDirectory.get().asFile, onLine = errors::onLine)
    }

    private fun classpathSnapshots(): File = compileErrorsFile.get().asFile.resolveSibling("dev-classpath")

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
                ) + frontendArguments(frontendDirectories.getOrElse(emptyMap()), frontendPorts.getOrElse(emptyMap())) +
                listOf(
                    "-cp",
                    snapshotOfFolders(appClasspath.files, classpathSnapshots(), ++appStarts).joinToString(File.pathSeparator) { it.path },
                    mainClass.get(),
                )
        val client = frontendDir.get().asFile.resolve(GENERATED_CLIENT_DIR)
        return start(LogSource.APP, command, projectDirectory.get().asFile) { line ->
            banner.onAppLine(line)?.let { ready ->
                logger.lifecycle(ready)
                pendingRestart?.let { logger.lifecycle(restartSummary(it, System.currentTimeMillis(), clientFingerprint(client))) }
                pendingRestart = null
            }
        }
    }

    private fun start(
        source: LogSource,
        command: List<String>,
        directory: File,
        pathPrefix: File? = null,
        onLine: (String) -> Unit = {},
    ): Process {
        val builder = ProcessBuilder(command).directory(directory).redirectErrorStream(true)
        builder.environment().putAll(System.getenv())
        pathPrefix?.let { builder.environment().putAll(prependedPath(builder.environment(), it)) }
        val process = builder.start()
        thread(isDaemon = true, name = "ktor-svelte-${source.label}") {
            process.inputStream.bufferedReader().use { reader ->
                while (true) {
                    val line = reader.readLine() ?: break
                    devLog.format(source, line)?.let(logger::lifecycle)
                    onLine(line)
                    if (source == LogSource.APP && !reader.ready()) devLog.flushStackTrace()?.let(logger::lifecycle)
                }
                if (source == LogSource.APP) devLog.flushStackTrace()?.let(logger::lifecycle)
            }
        }
        return process
    }
}
