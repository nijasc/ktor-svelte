package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.FrontendError
import io.github.nijasc.ktor.svelte.internal.ReportLimiter
import io.github.nijasc.ktor.svelte.internal.frontendErrorLine
import io.ktor.client.request.HttpRequestBuilder
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.ByteWriteChannel
import io.ktor.utils.io.writeFully
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import java.util.concurrent.atomic.AtomicLong
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

internal fun HttpRequestBuilder.hugeChunkedBody(sent: AtomicLong) {
    setBody(
        object : OutgoingContent.WriteChannelContent() {
            override suspend fun writeTo(channel: ByteWriteChannel) {
                val chunk = ByteArray(8 * 1024) { 'x'.code.toByte() }
                repeat(8 * 1024) {
                    channel.writeFully(chunk)
                    channel.flush()
                    sent.addAndGet(chunk.size.toLong())
                }
            }
        },
    )
}

class FrontendErrorsTest {
    @TempDir
    lateinit var dir: Path

    private fun app(
        configure: SvelteConfig.() -> Unit = { frontendErrors { perClientPerMinute = 3 } },
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        dir.resolve("package.json").writeText("{}")
        dir.resolve("src/lib").createDirectories()
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                generateTs = true
                generateTsOutput = dir.resolve("src/lib/api").toString()
                configure()
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.report(body: String): HttpResponse =
        client.post("/_ktor-svelte/errors") {
            contentType(ContentType.Application.Json)
            setBody(body)
        }

    @Test
    fun `a report becomes one log line with the page, the place and the request`() {
        assertEquals(
            "Frontend error on /board: TypeError: x is not a function (at save (app.js:1:2)), after the API call with request ID 9f2c-1",
            frontendErrorLine(
                FrontendError(
                    "TypeError: x is not a function",
                    "TypeError: x is not a function\n    at save (app.js:1:2)\n    at y",
                    "/board",
                    "9f2c-1",
                ),
            ),
        )
        assertEquals("Frontend error on an unknown page: Boom", frontendErrorLine(FrontendError("Boom")))
        assertEquals(
            "Frontend error on /a: first second",
            frontendErrorLine(FrontendError("first\r\nsecond", null, "/a", "bad id\nINFO forged line")),
            "a report cannot start a log line of its own",
        )
        assertEquals(500 + "Frontend error on /a: ".length, frontendErrorLine(FrontendError("x".repeat(5000), null, "/a"))?.length)
        assertNull(frontendErrorLine(FrontendError("   ")))
    }

    @Test
    fun `the endpoint takes small JSON reports and refuses the rest`() =
        app {
            assertEquals(HttpStatusCode.NoContent, report("""{"message":"Boom","page":"/board","extra":1}""").status)
            assertEquals(HttpStatusCode.BadRequest, report("not json").status)
            assertEquals(HttpStatusCode.PayloadTooLarge, report("""{"message":"${"x".repeat(9000)}"}""").status)
        }

    @Test
    fun `a chunked report is cut off at the limit instead of read to the end`() =
        app {
            val sent = AtomicLong()
            val response =
                client.post("/_ktor-svelte/errors") {
                    contentType(ContentType.Application.Json)
                    hugeChunkedBody(sent)
                }
            assertEquals(HttpStatusCode.PayloadTooLarge, response.status)
            assertTrue(sent.get() < 4 * 1024 * 1024, "the server read ${sent.get()} bytes of a report limited to 8 KiB")
        }

    @Test
    fun `one client can send only so many reports a minute`() {
        app {
            val statuses = (1..5).map { report("""{"message":"Boom $it"}""").status.value }
            assertEquals(listOf(204, 204, 204, 429, 429), statuses)
        }
        var time = 0L
        val limiter = ReportLimiter(2) { time }
        assertEquals(listOf(true, true, false), (1..3).map { limiter.allows("a") })
        assertEquals(true, limiter.allows("b"))
        time = 60_000
        assertEquals(true, limiter.allows("a"))
    }

    @Test
    fun `it is off unless asked for, and the client reports only when it is on`() {
        app(configure = {}) {
            assertEquals(HttpStatusCode.NotFound, report("""{"message":"Boom"}""").status)
            startApplication()
            assertFalse("\nreportErrors('" in dir.resolve("src/lib/api/client.ts").readText())
        }
        app {
            startApplication()
            assertContains(dir.resolve("src/lib/api/client.ts").readText(), "\nreportErrors('/_ktor-svelte/errors');\n")
        }
        assertFailsWith<IllegalArgumentException> { app(configure = { frontendErrors { perClientPerMinute = 0 } }) { startApplication() } }
        assertFailsWith<IllegalArgumentException> {
            app(
                configure = { frontendErrors { maxBodyBytes = 1_000_000 } },
            ) { startApplication() }
        }
    }
}
