package io.github.nijasc.ktor.svelte

import io.ktor.client.request.HttpRequestBuilder
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.options
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.request
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.request.contentLength
import io.ktor.server.request.receive
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.options
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.ByteWriteChannel
import io.ktor.utils.io.writeFully
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

private val PROPFIND = HttpMethod("PROPFIND")

class RequestGuardsTest {
    private fun guardTest(
        configure: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                transport { json() }
                configure()
            }
            routing {
                post("/api/notes") { call.respondText("size ${call.receiveText().length}") }
                put("/api/notes") { call.respondText("updated") }
                delete("/api/notes") { call.respondText("deleted") }
                get("/api/notes") { call.respondText("listed") }
                options("/api/notes") { call.respondText("options") }
                route("/api/notes", PROPFIND) { handle { call.respondText("properties") } }
                post("/api/greeting") { call.respond(call.receive<Greeting>()) }
                post("/length") { call.respondText("${call.request.contentLength()}") }
                post("/upload") { call.respondText("size ${call.receiveText().length}") }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.postNote(
        vararg headers: Pair<String, String>,
        path: String = "/api/notes",
    ): HttpResponse =
        client.post(path) {
            headers.forEach { (name, value) -> header(name, value) }
            setBody("hello")
        }

    @Test
    fun `same host origin is allowed whatever the scheme and port`() =
        guardTest {
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "http://localhost").status)
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "https://LOCALHOST:5173").status)
        }

    @Test
    fun `cross site origin is refused with a json message`() =
        guardTest {
            val response = postNote(HttpHeaders.Origin to "https://evil.example")
            assertEquals(HttpStatusCode.Forbidden, response.status)
            assertEquals(ContentType.Application.Json, response.contentType()?.withoutParameters())
            assertContains(response.bodyAsText(), "\"message\":\"Cross-origin API request refused.")
        }

    @Test
    fun `production leaves out the hint and development mode keeps it`() =
        testApplication {
            serverConfig { developmentMode = false }
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing { post("/api/notes") { call.respondText("created") } }
            }
            val response = client.post("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }
            assertEquals(HttpStatusCode.Forbidden, response.status)
            assertEquals("{\"message\":\"Cross-origin API request refused.\"}", response.bodyAsText())
        }

    @Test
    fun `development mode explains how to allow an origin`() =
        guardTest {
            assertContains(postNote(HttpHeaders.Origin to "https://evil.example").bodyAsText(), "allowedOrigins(...)")
        }

    @Test
    fun `every unsafe method is checked`() =
        guardTest {
            val put = client.put("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }
            val delete = client.delete("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }
            assertEquals(HttpStatusCode.Forbidden, put.status)
            assertEquals(HttpStatusCode.Forbidden, delete.status)
        }

    @Test
    fun `methods outside the safe set are checked`() =
        guardTest {
            val evil =
                client.request("/api/notes") {
                    method = PROPFIND
                    header(HttpHeaders.Origin, "https://evil.example")
                }
            val same =
                client.request("/api/notes") {
                    method = PROPFIND
                    header(HttpHeaders.Origin, "http://localhost")
                }
            assertEquals(HttpStatusCode.Forbidden, evil.status)
            assertEquals("properties", same.bodyAsText())
        }

    @Test
    fun `options is never checked`() =
        guardTest {
            val response = client.options("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }
            assertEquals("options", response.bodyAsText())
        }

    @Test
    fun `host that only shares a suffix is refused`() =
        guardTest {
            assertEquals(HttpStatusCode.Forbidden, postNote(HttpHeaders.Origin to "https://evil-localhost").status)
            assertEquals(HttpStatusCode.Forbidden, postNote(HttpHeaders.Origin to "https://localhost.evil.example").status)
        }

    @Test
    fun `allow listed origin is accepted`() =
        guardTest({ allowedOrigins("https://admin.example.com") }) {
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "https://Admin.example.com/").status)
            assertEquals(HttpStatusCode.Forbidden, postNote(HttpHeaders.Origin to "http://admin.example.com").status)
        }

    @Test
    fun `null origin is refused`() =
        guardTest {
            assertEquals(HttpStatusCode.Forbidden, postNote(HttpHeaders.Origin to "null").status)
        }

    @Test
    fun `cross site fetch metadata without origin is refused`() =
        guardTest {
            assertEquals(HttpStatusCode.Forbidden, postNote("Sec-Fetch-Site" to "cross-site").status)
            assertEquals(HttpStatusCode.OK, postNote("Sec-Fetch-Site" to "same-origin").status)
        }

    @Test
    fun `request without origin headers is allowed`() =
        guardTest {
            val response = postNote()
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("size 5", response.bodyAsText())
        }

    @Test
    fun `get is never checked`() =
        guardTest {
            val response = client.get("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `paths outside the api prefixes are not checked`() =
        guardTest {
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "https://evil.example", path = "/upload").status)
        }

    @Test
    fun `only the configured api prefixes are checked`() =
        guardTest({ apiPrefixes("/rpc") }) {
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "https://evil.example").status)
        }

    @Test
    fun `origin check can be turned off`() =
        guardTest({ originCheck = false }) {
            assertEquals(HttpStatusCode.OK, postNote(HttpHeaders.Origin to "https://evil.example").status)
        }

    @Test
    fun `body over the limit with content length is refused`() =
        guardTest({ maxApiBodySize = 10 }) {
            val response = client.post("/api/notes") { setBody("x".repeat(11)) }
            assertEquals(HttpStatusCode.PayloadTooLarge, response.status)
            assertEquals(ContentType.Application.Json, response.contentType()?.withoutParameters())
            assertEquals("{\"message\":\"Request body is larger than the limit of 10 bytes.\"}", response.bodyAsText())
        }

    @Test
    fun `chunked body over the limit is refused`() =
        guardTest({ maxApiBodySize = 10 }) {
            assertEquals("null", client.post("/length") { chunkedBody(ByteArray(64)) }.bodyAsText())
            val response = client.post("/api/notes") { chunkedBody(ByteArray(64) { 'x'.code.toByte() }) }
            assertEquals(HttpStatusCode.PayloadTooLarge, response.status)
            assertContains(response.bodyAsText(), "larger than the limit of 10 bytes")
        }

    @Test
    fun `chunked json body over the limit is refused`() =
        guardTest({ maxApiBodySize = 10 }) {
            val response =
                client.post("/api/greeting") {
                    contentType(ContentType.Application.Json)
                    chunkedBody("{\"message\":\"${"x".repeat(64)}\"}".toByteArray())
                }
            assertEquals(HttpStatusCode.PayloadTooLarge, response.status)
        }

    @Test
    fun `body under the limit is accepted`() =
        guardTest({ maxApiBodySize = 10 }) {
            val response = client.post("/api/notes") { chunkedBody("x".repeat(10).toByteArray()) }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("size 10", response.bodyAsText())
        }

    @Test
    fun `default limit is one mebibyte`() =
        guardTest {
            val atLimit = client.post("/api/notes") { setBody("x".repeat(1024 * 1024)) }
            val overLimit = client.post("/api/notes") { setBody("x".repeat(1024 * 1024 + 1)) }
            assertEquals(HttpStatusCode.OK, atLimit.status)
            assertEquals(HttpStatusCode.PayloadTooLarge, overLimit.status)
        }

    @Test
    fun `body limit ignores paths outside the api prefixes`() =
        guardTest({ maxApiBodySize = 10 }) {
            val response = client.post("/upload") { chunkedBody(ByteArray(64)) }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `null body limit disables it`() =
        guardTest({ maxApiBodySize = null }) {
            val response = client.post("/api/notes") { chunkedBody(ByteArray(2 * 1024 * 1024)) }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    private fun HttpRequestBuilder.chunkedBody(bytes: ByteArray) {
        setBody(
            object : OutgoingContent.WriteChannelContent() {
                override suspend fun writeTo(channel: ByteWriteChannel) {
                    bytes.asList().chunked(8).forEach { channel.writeFully(it.toByteArray()) }
                }
            },
        )
    }
}
