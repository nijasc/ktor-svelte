package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsBytes
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.server.application.install
import io.ktor.server.plugins.compression.Compression
import io.ktor.server.plugins.compression.deflate
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.util.zip.GZIPInputStream
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class ApiCompressionTest {
    private val large = "{\"items\":[" + (1..200).joinToString(",") { "{\"id\":$it,\"title\":\"Buy milk number $it\"}" } + "]}"

    private fun compressed(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild(files = mapOf("index.html" to "<h1>" + "home ".repeat(500) + "</h1>", "200.html" to "fallback"))
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing {
                get("/api/large") { call.respondText(large, ContentType.Application.Json) }
                get("/api/small") { call.respondText("{\"ok\":true}", ContentType.Application.Json) }
                get("/api/events") { call.respondText("data: x\n\n".repeat(500), ContentType.Text.EventStream) }
                get("/api/image") { call.respondText("x".repeat(5000), ContentType.Image.PNG) }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.fetch(
        path: String,
        accept: String,
    ) = client.get(path) { header(HttpHeaders.AcceptEncoding, accept) }

    @Test
    fun `large API responses are gzipped by default`() =
        compressed {
            val response = fetch("/api/large", "gzip, deflate")
            assertEquals("gzip", response.headers[HttpHeaders.ContentEncoding])
            assertEquals(large, GZIPInputStream(response.bodyAsBytes().inputStream()).readBytes().decodeToString())
        }

    @Test
    fun `zstd wins when the browser accepts it and the module is present`() =
        compressed {
            val response = fetch("/api/large", "gzip, deflate, br, zstd")
            assertEquals("zstd", response.headers[HttpHeaders.ContentEncoding])
            val bytes = response.bodyAsBytes()
            assertEquals(listOf(0x28, 0xB5, 0x2F, 0xFD), bytes.take(4).map { it.toInt() and 0xFF })
            assertTrue(bytes.size < large.length / 3)
        }

    @Test
    fun `small responses, events, images and pages are left alone`() =
        compressed {
            listOf("/api/small", "/api/events", "/api/image", "/").forEach { path ->
                assertNull(fetch(path, "gzip, zstd").headers[HttpHeaders.ContentEncoding], path)
            }
            assertEquals("{\"ok\":true}", fetch("/api/small", "gzip").bodyAsText())
        }

    @Test
    fun `clients that accept nothing get plain JSON`() =
        compressed {
            val response = client.get("/api/large")
            assertNull(response.headers[HttpHeaders.ContentEncoding])
            assertEquals(large, response.bodyAsText())
        }

    @Test
    fun `api compression can be turned off`() =
        compressed({ apiCompression = false }) {
            assertNull(fetch("/api/large", "gzip, zstd").headers[HttpHeaders.ContentEncoding])
        }

    @Test
    fun `an app that installs Compression itself, after the plugin, keeps its own setup`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                install(Compression) { deflate() }
                routing { get("/api/large") { call.respondText(large, ContentType.Application.Json) } }
            }
            assertEquals("deflate", fetch("/api/large", "gzip, deflate, zstd").headers[HttpHeaders.ContentEncoding])
        }
}
