package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsBytes
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.plugins.compression.Compression
import io.ktor.server.plugins.compression.gzip
import io.ktor.server.plugins.compression.minimumSize
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import java.io.ByteArrayOutputStream
import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue

@Serializable
data class Greeting(
    val message: String = "",
)

class TransportTest {
    private fun Application.greetingRoutes() {
        routing {
            get("/api/greeting") { call.respond(Greeting("hello")) }
            post("/api/greeting") { call.respond(call.receive<Greeting>()) }
        }
    }

    private fun Application.svelte(transportConfig: SvelteTransportConfig.() -> Unit) {
        val build = fixtureBuild()
        install(Svelte) {
            source = SvelteSource.Directory(build)
            dev { mode = DevMode.Never }
            transport(transportConfig)
        }
    }

    @Test
    fun `json sends and receives`() =
        testApplication {
            application {
                svelte { json() }
                greetingRoutes()
            }
            assertEquals("""{"message":"hello"}""", client.get("/api/greeting").bodyAsText())
            val echoed =
                client.post("/api/greeting") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"message":"echo"}""")
                }
            assertEquals("""{"message":"echo"}""", echoed.bodyAsText())
        }

    @Test
    fun `json can be configured`() =
        testApplication {
            application {
                svelte { json { prettyPrint = true } }
                greetingRoutes()
            }
            assertContains(client.get("/api/greeting").bodyAsText(), "\n")
        }

    @Test
    fun `xml and json are chosen from the accept header`() =
        testApplication {
            application {
                svelte {
                    json()
                    xml()
                }
                greetingRoutes()
            }
            val xml = client.get("/api/greeting") { header(HttpHeaders.Accept, "application/xml") }
            assertContains(xml.bodyAsText(), "<Greeting")
            val json = client.get("/api/greeting") { header(HttpHeaders.Accept, "application/json") }
            assertEquals("""{"message":"hello"}""", json.bodyAsText())
        }

    @Test
    fun `compression applies to api responses and leaves frontend precompression alone`() =
        testApplication {
            val build = fixtureBuild(encoded = mapOf("about.html.br" to "brotli-bytes"))
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    transport {
                        json()
                        compression { gzip { minimumSize(1) } }
                    }
                }
                greetingRoutes()
            }
            val api = client.get("/api/greeting") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals("gzip", api.headers[HttpHeaders.ContentEncoding])
            val page = client.get("/about") { header(HttpHeaders.AcceptEncoding, "br") }
            assertEquals("brotli-bytes", page.bodyAsText())
        }

    @Test
    fun `precompressed pages and assets are never compressed a second time`() =
        testApplication {
            val build =
                fixtureBuild(
                    files = mapOf("index.html" to "<html><head></head><body>home</body></html>", "app.js" to "go()", "app.css" to "a{}"),
                    encoded = mapOf("app.js.br" to "brotli-bytes", "app.css.gz" to "gzip-bytes"),
                )
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    publicConfig(Greeting("inlined"))
                    transport {
                        json()
                        compression { gzip { minimumSize(1) } }
                    }
                }
                greetingRoutes()
            }
            val browser = "gzip, deflate, br, zstd"

            val script = client.get("/app.js") { header(HttpHeaders.AcceptEncoding, browser) }
            assertEquals(listOf("br"), script.headers.getAll(HttpHeaders.ContentEncoding))
            assertEquals("brotli-bytes", script.bodyAsText())

            val styles = client.get("/app.css") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals(listOf("gzip"), styles.headers.getAll(HttpHeaders.ContentEncoding))
            assertEquals("gzip-bytes", styles.bodyAsText())

            val page = client.get("/") { header(HttpHeaders.AcceptEncoding, browser) }
            assertEquals(listOf("gzip"), page.headers.getAll(HttpHeaders.ContentEncoding))
            assertContains(GZIPInputStream(page.bodyAsBytes().inputStream()).readBytes().decodeToString(), "<body>home</body>")

            val part =
                client.get("/app.js") {
                    header(HttpHeaders.AcceptEncoding, "gzip")
                    header(HttpHeaders.Range, "bytes=0-1")
                }
            assertNull(part.headers[HttpHeaders.ContentEncoding])
            assertEquals("go", part.bodyAsText())

            val api = client.get("/api/greeting") { header(HttpHeaders.AcceptEncoding, browser) }
            assertEquals(listOf("gzip"), api.headers.getAll(HttpHeaders.ContentEncoding))
        }

    @Test
    fun `a compressed request body cannot grow past the body limit`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    maxApiBodySize = 1024
                    transport {
                        json()
                        compression()
                    }
                }
                greetingRoutes()
            }

            fun gzip(text: String): ByteArray =
                ByteArrayOutputStream().also { bytes -> GZIPOutputStream(bytes).use { it.write(text.toByteArray()) } }.toByteArray()

            suspend fun send(text: String) =
                client.post("/api/greeting") {
                    header(HttpHeaders.ContentEncoding, "gzip")
                    contentType(ContentType.Application.Json)
                    setBody(gzip(text))
                }

            val small = send("""{"message":"hi"}""")
            assertEquals(HttpStatusCode.OK, small.status)
            assertContains(small.bodyAsText(), "hi")

            val inflated = """{"message":"${"a".repeat(200_000)}"}"""
            assertTrue(gzip(inflated).size < 1024)
            assertEquals(HttpStatusCode.PayloadTooLarge, send(inflated).status)
        }

    @Test
    fun `no transport block installs nothing`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                install(ContentNegotiation)
                install(Compression)
            }
            assertNull(client.get("/").headers[HttpHeaders.ContentEncoding])
        }

    @Test
    fun `existing content negotiation gives a clear error`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    application {
                        install(ContentNegotiation)
                        svelte { json() }
                    }
                    client.get("/")
                }
            }
        assertTrue(failure.message.orEmpty().contains("ContentNegotiation is already installed"))
    }

    @Test
    fun `existing compression gives a clear error`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    application {
                        install(Compression)
                        svelte { compression() }
                    }
                    client.get("/")
                }
            }
        assertTrue(failure.message.orEmpty().contains("Compression is already installed"))
    }
}
