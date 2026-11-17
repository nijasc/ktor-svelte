package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import org.gradle.jvm.toolchain.JavaLauncher
import java.io.File
import java.net.InetSocketAddress
import java.net.ServerSocket
import java.net.Socket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.concurrent.TimeUnit

internal const val SMOKE_FALLBACK_PAGE = "200.html"
private const val HOST = "127.0.0.1"
private const val START_SECONDS = 60
private const val REQUEST_SECONDS = 15L
private const val CONNECT_MILLIS = 500
private const val POLL_MILLIS = 250L
private const val STOP_SECONDS = 10L
private const val LOG_TAIL = 25
private const val OK = 200
private const val REDIRECTS_END = 400
private const val NOT_FOUND = 404
private const val SERVER_ERRORS = 500
private val COMPRESSED = setOf("br", "gz")

internal enum class SmokeKind(
    val expected: String,
) {
    Page("200 and HTML"),
    Asset("200"),
    Api("anything but 404 and a server error"),
    Path("a status below 400"),
}

internal data class SmokeRequest(
    val kind: SmokeKind,
    val path: String,
) {
    val label: String get() = if (kind == SmokeKind.Api) "GET $path" else path

    fun accepts(
        status: Int,
        contentType: String?,
    ): Boolean =
        when (kind) {
            SmokeKind.Page -> status == OK && contentType.orEmpty().startsWith("text/html")
            SmokeKind.Asset -> status == OK
            SmokeKind.Api -> status != NOT_FOUND && status < SERVER_ERRORS
            SmokeKind.Path -> status < REDIRECTS_END
        }
}

internal class SmokeAnswer(
    val request: SmokeRequest,
    val status: Int?,
    val contentType: String?,
    val problem: String?,
) {
    val correct: Boolean get() = status != null && request.accepts(status, contentType)
}

internal fun prerenderedPages(build: File): List<String> =
    build
        .walkTopDown()
        .filter { it.isFile && it.extension == "html" }
        .map { it.relativeTo(build).invariantSeparatorsPath }
        .filter { it != SMOKE_FALLBACK_PAGE }
        .map { file ->
            when {
                file == "index.html" -> "/"
                file.endsWith("/index.html") -> "/" + file.removeSuffix("/index.html")
                else -> "/" + file.removeSuffix(".html")
            }
        }.sorted()
        .toList()

internal fun smokeAsset(build: File): String? =
    build
        .resolve("_app/immutable")
        .walkTopDown()
        .filter { it.isFile && it.extension !in COMPRESSED }
        .map { "/" + it.relativeTo(build).invariantSeparatorsPath }
        .minOrNull()

@Suppress("UNCHECKED_CAST")
internal fun smokeApiRoutes(
    openApi: String,
    skipped: Collection<String>,
): List<String> {
    val paths = (JsonSlurper().parseText(openApi) as Map<String, Any?>)["paths"] as? Map<String, Any?> ?: return emptyList()
    return paths
        .filter { (path, item) ->
            val get = (item as? Map<String, Any?>)?.get("get") as? Map<String, Any?>
            val needsInput = (get?.get("parameters") as? List<*>).orEmpty().any { (it as? Map<*, *>)?.get("required") == true }
            get != null && '{' !in path && !needsInput && path !in skipped
        }.keys
        .sorted()
}

internal fun smokeReport(
    answers: List<SmokeAnswer>,
    logFile: String,
): String? {
    val wrong = answers.filterNot { it.correct }
    if (wrong.isEmpty()) return null
    val width = wrong.maxOf { it.request.label.length }
    val rows =
        wrong.joinToString("\n") {
            "  ${(it.status?.toString() ?: "---")}  ${it.request.label.padEnd(
                width,
            )}  ${it.problem ?: "expected ${it.request.kind.expected}"}"
        }
    return "The production build did not answer ${wrong.size} of ${answers.size} requests correctly:\n$rows\n" +
        "The app's output is in $logFile." + DocLink.DEPLOYMENT.see()
}

private fun freePort(): Int = ServerSocket(0).use { it.localPort }

private fun answers(port: Int): Boolean =
    runCatching { Socket().use { it.connect(InetSocketAddress(HOST, port), CONNECT_MILLIS) } }.isSuccess

@UntrackedTask(because = "Starts the packaged app and sends requests to it")
public abstract class SvelteSmokeTestTask : DefaultTask() {
    @get:Internal
    public abstract val javaLauncher: Property<JavaLauncher>

    @get:Internal
    public abstract val jarFile: RegularFileProperty

    @get:Internal
    public abstract val libDirectory: DirectoryProperty

    @get:Internal
    public abstract val mainClass: Property<String>

    @get:Internal
    public abstract val buildOutput: DirectoryProperty

    @get:Internal
    public abstract val openApiFile: RegularFileProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val logFile: RegularFileProperty

    @get:Internal
    @get:Option(
        option = "path",
        description = "Another path to request, which must answer with a status below 400. Can be given more than once.",
    )
    public abstract val paths: ListProperty<String>

    @get:Internal
    @get:Option(option = "skip", description = "An API route to leave out, such as /api/export. Can be given more than once.")
    public abstract val skip: ListProperty<String>

    @get:Internal
    @get:Option(option = "start-seconds", description = "How long the app may take to start. 60 unless given.")
    public abstract val startSeconds: Property<String>

    @TaskAction
    public fun smoke() {
        val directory = projectDirectory.get().asFile
        val log = logFile.get().asFile.apply { parentFile.mkdirs() }
        val build = buildOutput.get().asFile
        val api = openApiFile.orNull?.asFile?.takeIf(File::isFile)
        val requests =
            prerenderedPages(build).map { SmokeRequest(SmokeKind.Page, it) } +
                listOfNotNull(smokeAsset(build)).map { SmokeRequest(SmokeKind.Asset, it) } +
                api?.let { smokeApiRoutes(it.readText(), skip.getOrElse(emptyList())) }.orEmpty().map { SmokeRequest(SmokeKind.Api, it) } +
                paths.getOrElse(emptyList()).map { SmokeRequest(SmokeKind.Path, if (it.startsWith("/")) it else "/$it") }
        if (requests.isEmpty()) {
            throw GradleException(
                "svelteSmokeTest found nothing to request: no prerendered page in ${build.relativeToOrSelf(directory)} " +
                    "and no API route. Name a path with --path=/." + DocLink.DEPLOYMENT.see(),
            )
        }
        val port = freePort()
        val java =
            javaLauncher
                .get()
                .executablePath.asFile.path
        val jar = jarFile.orNull?.asFile
        val start =
            if (jar != null) {
                listOf(java, "-jar", jar.path)
            } else {
                listOf(java, "-cp", libDirectory.get().asFile.path + File.separator + "*", mainClass.get())
            }
        val started = jar?.relativeToOrSelf(directory)?.invariantSeparatorsPath ?: mainClass.get()
        val builder = ProcessBuilder(start + "-port=$port").directory(directory).redirectErrorStream(true).redirectOutput(log)
        builder.environment()["PORT"] = port.toString()
        val process = builder.start()
        try {
            waitForStart(process, port, log)
            logger.lifecycle("ktor-svelte: $started runs in production mode on port $port.")
            val answers = requests.map { ask(port, it) }
            answers.filter { it.correct }.forEach { logger.lifecycle("  ${it.status}  ${it.request.label}") }
            smokeReport(answers, log.relativeToOrSelf(directory).invariantSeparatorsPath)?.let { throw GradleException(it) }
            val counts =
                SmokeKind.entries.mapNotNull { kind ->
                    val count = requests.count { it.kind == kind }
                    val name = if (kind == SmokeKind.Api) "API route" else kind.name.lowercase()
                    "$count $name${if (count == 1) "" else "s"}".takeIf { count > 0 }
                }
            logger.lifecycle("ktor-svelte: the production build answered ${counts.joinToString(", ")} correctly.")
        } finally {
            stop(process)
        }
    }

    private fun waitForStart(
        process: Process,
        port: Int,
        log: File,
    ) {
        val seconds = startSeconds.orNull?.toIntOrNull() ?: START_SECONDS
        val deadline = System.nanoTime() + TimeUnit.SECONDS.toNanos(seconds.toLong())
        while (!answers(port)) {
            val problem =
                when {
                    !process.isAlive -> "The app stopped with exit code ${process.exitValue()} before it listened on port $port."
                    System.nanoTime() > deadline -> "The app did not listen on port $port within $seconds seconds."
                    else -> null
                }
            if (problem != null) {
                val tail = log.readLines().takeLast(LOG_TAIL).joinToString("\n") { "  $it" }
                throw GradleException(
                    "$problem svelteSmokeTest sets PORT and passes -port, so the app has to read one of them. " +
                        "The end of its output:\n$tail" + DocLink.DEPLOYMENT.see(),
                )
            }
            Thread.sleep(POLL_MILLIS)
        }
    }

    private fun ask(
        port: Int,
        request: SmokeRequest,
    ): SmokeAnswer {
        val client = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NEVER).build()
        val call = HttpRequest.newBuilder(URI("http://$HOST:$port${request.path}")).timeout(Duration.ofSeconds(REQUEST_SECONDS)).build()
        return runCatching { client.send(call, HttpResponse.BodyHandlers.ofInputStream()) }.fold(
            { response ->
                response.body().close()
                SmokeAnswer(request, response.statusCode(), response.headers().firstValue("Content-Type").orElse(null), null)
            },
            { failure -> SmokeAnswer(request, null, null, "no answer: ${failure.message ?: failure::class.java.simpleName}") },
        )
    }

    private fun stop(process: Process) {
        process.descendants().forEach { it.destroy() }
        process.destroy()
        if (!process.waitFor(STOP_SECONDS, TimeUnit.SECONDS)) process.destroyForcibly().waitFor(STOP_SECONDS, TimeUnit.SECONDS)
    }
}
