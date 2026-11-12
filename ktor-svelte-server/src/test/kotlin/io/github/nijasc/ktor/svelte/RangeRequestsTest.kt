package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.assets.RangeRequest
import io.github.nijasc.ktor.svelte.internal.assets.parseRange
import io.ktor.client.request.get
import io.ktor.client.request.head
import io.ktor.client.request.header
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class RangeRequestsTest {
    private val video = "0123456789abcdefghij"

    private fun ranged(
        source: (java.nio.file.Path) -> SvelteSource,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build =
            fixtureBuild(
                files = mapOf("index.html" to "<h1>home</h1>", "media/clip.mp4" to video),
                encoded =
                    mapOf(
                        "media/clip.mp4.gz" to "gz",
                    ),
            )
        application {
            install(Svelte) {
                this.source = source(build)
                dev { mode = DevMode.Never }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.fetch(
        range: String?,
        vararg headers: Pair<String, String>,
    ): HttpResponse =
        client.get("/media/clip.mp4") {
            range?.let { header(HttpHeaders.Range, it) }
            header(HttpHeaders.AcceptEncoding, "gzip")
            headers.forEach { (name, value) -> header(name, value) }
        }

    @Test
    fun `a byte range answers 206 with exactly those bytes`() =
        ranged({ SvelteSource.Directory(it) }) {
            val response = fetch("bytes=2-5")
            assertEquals(HttpStatusCode.PartialContent, response.status)
            assertEquals("2345", response.bodyAsText())
            assertEquals("bytes 2-5/20", response.headers[HttpHeaders.ContentRange])
            assertEquals("4", response.headers[HttpHeaders.ContentLength])
            assertNull(response.headers[HttpHeaders.ContentEncoding])
        }

    @Test
    fun `open and suffix ranges work`() =
        ranged({ SvelteSource.Directory(it) }) {
            assertEquals("fghij", fetch("bytes=15-").bodyAsText())
            assertEquals("hij", fetch("bytes=-3").bodyAsText())
            assertEquals("bytes 17-19/20", fetch("bytes=-3").headers[HttpHeaders.ContentRange])
        }

    @Test
    fun `a range past the end answers 416`() =
        ranged({ SvelteSource.Directory(it) }) {
            val response = fetch("bytes=50-60")
            assertEquals(HttpStatusCode.RequestedRangeNotSatisfiable, response.status)
            assertEquals("bytes */20", response.headers[HttpHeaders.ContentRange])
        }

    @Test
    fun `without a range the full file comes with Accept-Ranges`() =
        ranged({ SvelteSource.Directory(it) }) {
            val response = fetch(null)
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("bytes", response.headers[HttpHeaders.AcceptRanges])
            assertEquals("gzip", response.headers[HttpHeaders.ContentEncoding])
        }

    @Test
    fun `If-Range with an old ETag gets the full file`() =
        ranged({ SvelteSource.Directory(it) }) {
            val stale = fetch("bytes=0-1", HttpHeaders.IfRange to "\"old\"")
            assertEquals(HttpStatusCode.OK, stale.status)
            val eTag = client.get("/media/clip.mp4").headers[HttpHeaders.ETag]!!
            val current =
                client.get("/media/clip.mp4") {
                    header(HttpHeaders.Range, "bytes=0-1")
                    header(HttpHeaders.IfRange, eTag)
                }
            assertEquals(HttpStatusCode.PartialContent, current.status)
            assertEquals("01", current.bodyAsText())
        }

    @Test
    fun `HEAD with a range reports the slice length`() =
        ranged({ SvelteSource.Directory(it) }) {
            val response = client.head("/media/clip.mp4") { header(HttpHeaders.Range, "bytes=0-9") }
            assertEquals(HttpStatusCode.PartialContent, response.status)
            assertEquals("10", response.headers[HttpHeaders.ContentLength])
        }

    @Test
    fun `classpath builds serve ranges from the stream`() =
        testApplication {
            val manifest = """{"formatVersion":1,"files":{"index.html":{"size":4,"hash":"h"},"clip.mp4":{"size":20,"hash":"c"}}}"""
            val loader = classLoaderWithManifest(manifest, mapOf("index.html" to "home".toByteArray(), "clip.mp4" to video.toByteArray()))
            environment { classLoader = loader }
            application {
                install(Svelte) {
                    source = SvelteSource.Classpath
                    dev { mode = DevMode.Never }
                }
            }
            val response = client.get("/clip.mp4") { header(HttpHeaders.Range, "bytes=10-12") }
            assertEquals(HttpStatusCode.PartialContent, response.status)
            assertEquals("abc", response.bodyAsText())
        }

    @Test
    fun `ranges are parsed strictly`() {
        assertEquals(RangeRequest.Satisfiable(0, 9), parseRange("bytes=0-9", 20))
        assertEquals(RangeRequest.Satisfiable(5, 19), parseRange("bytes=5-100", 20))
        assertEquals(RangeRequest.Unsatisfiable, parseRange("bytes=-0", 20))
        assertEquals(RangeRequest.Unsatisfiable, parseRange("bytes=9-3", 20))
        assertNull(parseRange("bytes=0-1,4-5", 20))
        assertNull(parseRange("items=0-1", 20))
        assertNull(parseRange("bytes=-", 20))
    }
}
