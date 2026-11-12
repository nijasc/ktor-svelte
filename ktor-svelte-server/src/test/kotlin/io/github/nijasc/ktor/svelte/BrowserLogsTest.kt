package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import org.slf4j.LoggerFactory
import kotlin.test.Test
import kotlin.test.assertEquals

class BrowserLogsTest {
    @Test
    fun `browser console output is logged by the app in development`() {
        val logger = LoggerFactory.getLogger("ktor-svelte.browser") as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        try {
            testApplication {
                application {
                    install(Svelte) {
                        dev {
                            url = "http://127.0.0.1:1"
                            mode = DevMode.Always
                        }
                    }
                }
                val accepted =
                    client.post("/_ktor-svelte/dev/log") {
                        contentType(ContentType.Application.Json)
                        setBody(
                            """[{"level":"warn","message":"Missing title","url":"/notes"},{"level":"error","message":"TypeError: x"}]""",
                        )
                    }
                assertEquals(HttpStatusCode.NoContent, accepted.status)
                assertEquals(
                    listOf("WARN Missing title [/notes]", "ERROR TypeError: x"),
                    appender.list.map { "${it.level} ${it.formattedMessage}" },
                )

                assertEquals(HttpStatusCode.BadRequest, client.post("/_ktor-svelte/dev/log") { setBody("not json") }.status)
                val remote =
                    client.post("/_ktor-svelte/dev/log") {
                        header(HttpHeaders.Host, "example.com")
                        setBody("[]")
                    }
                assertEquals(HttpStatusCode.Forbidden, remote.status)
            }
        } finally {
            logger.detachAppender(appender)
        }
    }

    @Test
    fun `browser logs can be turned off and never exist in production`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.post("/_ktor-svelte/dev/log") { setBody("[]") }.status)
        }
}
