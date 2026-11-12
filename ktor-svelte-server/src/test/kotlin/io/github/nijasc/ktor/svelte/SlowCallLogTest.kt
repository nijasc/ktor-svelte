package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.ktor.client.request.get
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.coroutines.delay
import org.slf4j.LoggerFactory
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import kotlin.time.Duration.Companion.milliseconds

class SlowCallLogTest {
    private val sourceLines = File("src/test/kotlin/io/github/nijasc/ktor/svelte/SlowCallLogTest.kt").readLines()

    private fun slowMessages(
        development: Boolean,
        threshold: kotlin.time.Duration?,
    ): List<String> {
        val logger = LoggerFactory.getLogger("io.ktor.test") as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        try {
            testApplication {
                serverConfig { developmentMode = development }
                val build = fixtureBuild()
                application {
                    install(Svelte) {
                        source = SvelteSource.Directory(build)
                        dev {
                            mode = DevMode.Never
                            slowApiCall = threshold
                        }
                    }
                    routing {
                        get("/api/slow") {
                            delay(60)
                            call.respondText("done")
                        }
                        get("/api/fast") { call.respondText("done") }
                    }
                }
                client.get("/api/slow")
                client.get("/api/fast")
            }
        } finally {
            logger.detachAppender(appender)
        }
        return appender.list.map { it.formattedMessage }.filter { "slow API call" in it }
    }

    @Test
    fun `slow calls are logged with the file and line of their route`() {
        val messages = slowMessages(development = true, threshold = 30.milliseconds)
        assertEquals(1, messages.size, messages.toString())
        val line = sourceLines.indexOfFirst { "get(\"/api/slow\")" in it } + 1
        assertTrue(messages.single().startsWith("ktor-svelte: slow API call GET /api/slow took "), messages.single())
        assertTrue(messages.single().endsWith("(io/github/nijasc/ktor/svelte/SlowCallLogTest.kt:$line)"), messages.single())
    }

    @Test
    fun `nothing is logged in production or when turned off`() {
        assertEquals(emptyList(), slowMessages(development = false, threshold = 30.milliseconds))
        assertEquals(emptyList(), slowMessages(development = true, threshold = null))
    }
}
