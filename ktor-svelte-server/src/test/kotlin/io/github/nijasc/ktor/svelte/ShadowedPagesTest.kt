package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import org.slf4j.LoggerFactory
import kotlin.test.Test
import kotlin.test.assertEquals

class ShadowedPagesTest {
    @Test
    fun `routes that hide pages are reported once at startup`() {
        val logger = LoggerFactory.getLogger("io.ktor.test") as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        try {
            testApplication {
                val build = fixtureBuild()
                application {
                    routing {
                        get("/about") { call.respondText("mine") }
                        route("/docs") { get { call.respondText("docs") } }
                        get("/notes/{id}") { call.respondText("note") }
                        post("/") { call.respondText("posted") }
                        get("/api/about") { call.respondText("api") }
                        get("/elsewhere") { call.respondText("nothing to hide") }
                    }
                    install(Svelte) {
                        source = SvelteSource.Directory(build)
                        dev { mode = DevMode.Never }
                        healthEndpoint = true
                    }
                }
                startApplication()
            }
        } finally {
            logger.detachAppender(appender)
        }
        val warnings = appender.list.map { it.formattedMessage }.filter { "hides the frontend page" in it }
        assertEquals(
            listOf(
                "ktor-svelte: the Ktor route GET /about hides the frontend page about.html. Move the route or rename the page.",
                "ktor-svelte: the Ktor route GET /docs hides the frontend page docs/index.html. Move the route or rename the page.",
            ),
            warnings,
        )
    }
}
