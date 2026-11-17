package io.github.nijasc.ktor.svelte.test

import java.io.File
import java.net.HttpURLConnection
import java.net.ServerSocket
import java.net.URI
import java.nio.file.Files
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.TimeUnit

internal const val JAR_PROPERTY = "ktorSvelte.test.jar"
internal const val CLASSPATH_PROPERTY = "ktorSvelte.test.classpath"
internal const val MAIN_CLASS_PROPERTY = "ktorSvelte.test.mainClass"
private const val POLL_MILLIS = 200L
private const val CONNECT_MILLIS = 1000
private const val STOP_SECONDS = 10L
private const val LOG_TAIL = 25
private const val SERVER_ERRORS = 500

public class TestApp private constructor(
    public val url: String,
    public val log: File,
    private val process: Process,
) : AutoCloseable {
    override fun close() {
        process.descendants().forEach { it.destroy() }
        process.destroy()
        if (!process.waitFor(STOP_SECONDS, TimeUnit.SECONDS)) process.destroyForcibly()
    }

    public companion object {
        private val shared = ConcurrentHashMap<Map<String, String>, TestApp>()

        public fun shared(environment: Map<String, String> = emptyMap()): TestApp =
            shared.computeIfAbsent(environment) { wanted ->
                start(wanted).also { app -> Runtime.getRuntime().addShutdownHook(Thread(app::close)) }
            }

        public fun start(
            environment: Map<String, String> = emptyMap(),
            startSeconds: Int = 60,
            readyPath: String = "/",
        ): TestApp {
            val port = ServerSocket(0).use { it.localPort }
            val log = Files.createTempFile("ktor-svelte-test-app", ".log").toFile().apply { deleteOnExit() }
            val builder = ProcessBuilder(startCommand() + "-port=$port").redirectErrorStream(true).redirectOutput(log)
            builder.environment()["PORT"] = port.toString()
            builder.environment().putAll(environment)
            val process = builder.start()
            val app = TestApp("http://localhost:$port", log, process)
            val deadline = System.nanoTime() + TimeUnit.SECONDS.toNanos(startSeconds.toLong())
            while (!answers(app.url + readyPath)) {
                val problem =
                    when {
                        !process.isAlive -> "The app stopped with exit code ${process.exitValue()} before it answered at $readyPath."
                        System.nanoTime() > deadline -> "The app did not answer at $readyPath within $startSeconds seconds."
                        else -> null
                    }
                if (problem != null) {
                    app.close()
                    throw IllegalStateException(
                        "$problem It is started with PORT set and -port passed, so it has to read one of them. " +
                            "The end of its output:\n" + log.readLines().takeLast(LOG_TAIL).joinToString("\n") { "  $it" },
                    )
                }
                Thread.sleep(POLL_MILLIS)
            }
            return app
        }

        internal fun startCommand(
            jar: String? = System.getProperty(JAR_PROPERTY),
            classpath: String? = System.getProperty(CLASSPATH_PROPERTY),
            mainClass: String? = System.getProperty(MAIN_CLASS_PROPERTY),
        ): List<String> {
            val java = File(System.getProperty("java.home"), "bin/java").path
            return when {
                !jar.isNullOrEmpty() -> listOf(java, "-jar", jar)
                !classpath.isNullOrEmpty() && !mainClass.isNullOrEmpty() -> listOf(java, "-cp", classpath, mainClass)
                else ->
                    throw IllegalStateException(
                        "The browser tests do not know which app to start. The ktor-svelte Gradle plugin tells them when the tests " +
                            "are in a test suite called browserTest. Without it, set the system property $JAR_PROPERTY to the app's JAR.",
                    )
            }
        }

        private fun answers(address: String): Boolean =
            runCatching {
                val connection = URI(address).toURL().openConnection() as HttpURLConnection
                connection.connectTimeout = CONNECT_MILLIS
                connection.readTimeout = CONNECT_MILLIS
                connection.instanceFollowRedirects = false
                try {
                    connection.responseCode < SERVER_ERRORS
                } finally {
                    connection.disconnect()
                }
            }.getOrDefault(false)
    }
}
