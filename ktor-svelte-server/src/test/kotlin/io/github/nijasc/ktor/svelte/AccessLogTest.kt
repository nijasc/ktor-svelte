package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.github.nijasc.ktor.svelte.internal.ACCESS_LOGGER
import io.github.nijasc.ktor.svelte.internal.accessLine
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.slf4j.LoggerFactory
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class AccessLogTest {
    private fun logged(
        development: Boolean = false,
        config: SvelteConfig.() -> Unit = { accessLog = true },
        block: suspend ApplicationTestBuilder.() -> Unit,
    ): List<String> {
        val logger = LoggerFactory.getLogger(ACCESS_LOGGER) as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        try {
            testApplication {
                serverConfig { developmentMode = development }
                val build = fixtureBuild()
                application {
                    install(Svelte) {
                        source = SvelteSource.Directory(build)
                        dev { mode = DevMode.Never }
                        config()
                    }
                    routing {
                        get("/api/notes") { call.respondText("[]") }
                        post("/api/notes") { call.respond(HttpStatusCode.Created) }
                    }
                }
                block()
            }
        } finally {
            logger.detachAppender(appender)
        }
        return appender.list.map { it.formattedMessage.replace(Regex("""ms=\d+"""), "ms=N") }
    }

    @Test
    fun `a line holds method, path, status, time and request ID`() {
        assertEquals("method=GET path=/api/notes status=200 ms=12 id=abc-1", accessLine("GET", "/api/notes", 200, 12, "abc-1"))
        assertEquals("method=GET path=/about status=404 ms=0", accessLine("GET", "/about", 404, 0, null))
        assertEquals(
            """method=GET path="/files/my \"big\" file=1.txt" status=200 ms=3""",
            accessLine("GET", """/files/my "big" file=1.txt""", 200, 3, null),
        )
        assertEquals("method=GET path=/ status=200 ms=1", accessLine("GET", "/", 200, 1, "bad id\nmethod=DELETE"))
    }

    @Test
    fun `API calls and pages are logged in production, and build assets are not`() {
        val lines =
            logged {
                client.get("/api/notes?token=secret") { header("X-Request-Id", "req-1") }
                client.post("/api/notes") { header("X-Request-Id", "req-2") }
                client.get("/about") { header("X-Request-Id", "req-3") }
                client.get("/_app/immutable/entry/app.abc.js")
                client.get("/api/missing") { header("X-Request-Id", "req-4") }
            }
        assertEquals(
            listOf(
                "method=GET path=/api/notes status=200 ms=N id=req-1",
                "method=POST path=/api/notes status=201 ms=N id=req-2",
                "method=GET path=/about status=200 ms=N id=req-3",
                "method=GET path=/api/missing status=404 ms=N id=req-4",
            ),
            lines,
        )
    }

    @Test
    fun `a request without an ID is logged with the one it was given`() {
        val line = logged { client.get("/api/notes") }.single()
        assertTrue(Regex("""method=GET path=/api/notes status=200 ms=N id=[A-Za-z0-9-]{36}""").matches(line), line)
    }

    @Test
    fun `nothing is logged by default or in development`() {
        assertEquals(emptyList(), logged(config = {}) { client.get("/api/notes") })
        assertEquals(emptyList(), logged(development = true) { client.get("/api/notes") })
    }
}
