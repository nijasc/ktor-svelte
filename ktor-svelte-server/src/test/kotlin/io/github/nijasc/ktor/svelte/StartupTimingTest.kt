package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.github.nijasc.ktor.svelte.internal.StartupStep
import io.github.nijasc.ktor.svelte.internal.StartupTiming
import io.github.nijasc.ktor.svelte.internal.startupSteps
import io.github.nijasc.ktor.svelte.internal.took
import io.ktor.server.application.install
import io.ktor.server.application.serverConfig
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.LoggerFactory
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class StartupTimingTest {
    @Test
    fun `durations read as milliseconds below a second and as seconds above`() {
        assertEquals("0 ms", took(0))
        assertEquals("999 ms", took(999))
        assertEquals("1.0 s", took(1000))
        assertEquals("12.4 s", took(12_449))
    }

    @Test
    fun `the line splits the startup into its phases and lists the steps by size`() {
        val timing = StartupTiming(jvmStarted = 1_000, installStarted = 1_800)
        timing.installEnded = 1_920
        timing.modulesEnded = 3_100
        assertEquals(
            "ktor-svelte: started in 2.3 s: 800 ms for the JVM and your code before install(Svelte), 120 ms in install(Svelte), " +
                "1.2 s in your code after it, 150 ms to open the port. Steps: Database 900 ms, Seed data 200 ms.",
            timing.line(3_250, listOf(StartupStep("Seed data", 200), StartupStep("Database", 900))),
        )
    }

    @Test
    fun `without steps a slow startup gets a hint and a fast one does not`() {
        val slow = StartupTiming(jvmStarted = null, installStarted = 0).apply { installEnded = 100 }
        slow.modulesEnded = 1_500
        assertEquals(
            "ktor-svelte: started in 1.6 s: 100 ms in install(Svelte), 1.4 s in your code after it, 60 ms to open the port. " +
                "To see what your own code spends it on, wrap the slow parts in startupStep(\"name\") { }.",
            slow.line(1_560, emptyList()),
        )
        val fast = StartupTiming(jvmStarted = null, installStarted = 0).apply { installEnded = 100 }
        fast.modulesEnded = 300
        assertTrue(fast.line(320, emptyList()).endsWith("20 ms to open the port."))
    }

    private fun startupLines(
        development: Boolean,
        configure: SvelteDevConfig.() -> Unit = {},
    ): List<String> {
        val logger = LoggerFactory.getLogger("startup-timing-test") as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        val build = fixtureBuild()
        val server =
            embeddedServer(
                Netty,
                rootConfig =
                    serverConfig(applicationEnvironment { log = logger }) {
                        developmentMode = development
                        watchPaths = emptyList()
                        module {
                            startupStep("Before the plugin") { Thread.sleep(30) }
                            install(Svelte) {
                                source = SvelteSource.Directory(build)
                                dev {
                                    mode = DevMode.Never
                                    configure()
                                }
                            }
                            assertEquals("kept", startupStep("With a result") { "kept" })
                            runCatching { startupStep<Unit>("Failing") { error("stops here") } }
                            assertEquals(listOf("Before the plugin", "With a result", "Failing"), startupSteps().map { it.name })
                        }
                    },
                configure = {
                    connector {
                        host = "127.0.0.1"
                        port = 0
                    }
                },
            )
        try {
            server.start(wait = false)
        } finally {
            server.stop(0, 0)
            logger.detachAppender(appender)
        }
        return appender.list.map { it.formattedMessage }.filter { it.startsWith("ktor-svelte: started in ") }
    }

    @Test
    fun `a real server logs the line once in development, with the steps the app named`() {
        val lines = startupLines(development = true)
        assertEquals(1, lines.size, lines.toString())
        assertContains(lines.single(), " in install(Svelte), ")
        assertContains(lines.single(), " to open the port. Steps: ")
        assertContains(lines.single(), "Before the plugin ")
        assertContains(lines.single(), "With a result ")
        assertContains(lines.single(), "Failing ")
    }

    @Test
    fun `production and a switched off setting log nothing`() {
        assertEquals(emptyList(), startupLines(development = false))
        assertEquals(emptyList(), startupLines(development = true) { startupTiming = false })
    }
}
