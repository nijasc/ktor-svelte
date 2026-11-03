package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.plugins.compression.Compression
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals
import kotlin.test.assertNull

class CachingAndCompressionTest {
    private val compressedFiles =
        mapOf(
            "about.html.br" to "brotli-bytes",
            "about.html.gz" to "gzip-bytes!",
        )

    private fun svelteTest(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild(encoded = compressedFiles)
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                config()
            }
        }
        block()
    }

    @Test
    fun `immutable assets are cached for a year`() =
        svelteTest {
            val response = client.get("/_app/immutable/entry/app.abc.js")
            assertEquals("public, max-age=31536000, immutable", response.headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `html version file and other files are revalidated`() =
        svelteTest {
            assertEquals("no-cache", client.get("/about").headers[HttpHeaders.CacheControl])
            assertEquals("no-cache", client.get("/_app/version.json").headers[HttpHeaders.CacheControl])
            assertEquals("no-cache", client.get("/favicon.png").headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `cache values are configurable and version file stays with html`() =
        svelteTest(
            config = {
                cache {
                    immutable = "immutable-value"
                    html = "html-value"
                    other = "other-value"
                }
            },
        ) {
            assertEquals("immutable-value", client.get("/_app/immutable/entry/app.abc.js").headers[HttpHeaders.CacheControl])
            assertEquals("html-value", client.get("/about").headers[HttpHeaders.CacheControl])
            assertEquals("html-value", client.get("/_app/version.json").headers[HttpHeaders.CacheControl])
            assertEquals("other-value", client.get("/favicon.png").headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `matching etag gives 304 without a body`() =
        svelteTest {
            val eTag = client.get("/favicon.png").headers[HttpHeaders.ETag].orEmpty()
            val response = client.get("/favicon.png") { header(HttpHeaders.IfNoneMatch, eTag) }
            assertEquals(HttpStatusCode.NotModified, response.status)
            assertEquals(eTag, response.headers[HttpHeaders.ETag])
            assertEquals("", response.bodyAsText())
        }

    @Test
    fun `weak and listed etags match and others do not`() =
        svelteTest {
            val eTag = client.get("/favicon.png").headers[HttpHeaders.ETag].orEmpty()
            val listed = client.get("/favicon.png") { header(HttpHeaders.IfNoneMatch, "\"other\", W/$eTag") }
            assertEquals(HttpStatusCode.NotModified, listed.status)
            val different = client.get("/favicon.png") { header(HttpHeaders.IfNoneMatch, "\"other\"") }
            assertEquals(HttpStatusCode.OK, different.status)
        }

    @Test
    fun `not found page never answers 304`() =
        svelteTest(config = { spaFallback = null }) {
            val eTag = client.get("/nope").headers[HttpHeaders.ETag].orEmpty()
            val response = client.get("/nope") { header(HttpHeaders.IfNoneMatch, eTag) }
            assertEquals(HttpStatusCode.NotFound, response.status)
        }

    @Test
    fun `brotli is preferred over gzip`() =
        svelteTest {
            val response = client.get("/about") { header(HttpHeaders.AcceptEncoding, "gzip, br") }
            assertEquals("br", response.headers[HttpHeaders.ContentEncoding])
            assertEquals(HttpHeaders.AcceptEncoding, response.headers[HttpHeaders.Vary])
            assertEquals("brotli-bytes", response.bodyAsText())
        }

    @Test
    fun `gzip is served when brotli is not accepted`() =
        svelteTest {
            val response = client.get("/about") { header(HttpHeaders.AcceptEncoding, "gzip, br;q=0") }
            assertEquals("gzip", response.headers[HttpHeaders.ContentEncoding])
            assertEquals("gzip-bytes!", response.bodyAsText())
        }

    @Test
    fun `plain file is served without accept encoding and keeps vary`() =
        svelteTest {
            val response = client.get("/about")
            assertNull(response.headers[HttpHeaders.ContentEncoding])
            assertEquals(HttpHeaders.AcceptEncoding, response.headers[HttpHeaders.Vary])
            assertEquals("<h1>about</h1>", response.bodyAsText())
        }

    @Test
    fun `each encoding has its own etag`() =
        svelteTest {
            val plain = client.get("/about").headers[HttpHeaders.ETag]
            val brotli = client.get("/about") { header(HttpHeaders.AcceptEncoding, "br") }.headers[HttpHeaders.ETag]
            val gzip = client.get("/about") { header(HttpHeaders.AcceptEncoding, "gzip") }.headers[HttpHeaders.ETag]
            assertEquals(3, setOf(plain, brotli, gzip).size)
        }

    @Test
    fun `encoded variants cannot be requested directly`() =
        svelteTest {
            assertEquals(HttpStatusCode.NotFound, client.get("/about.html.br").status)
        }

    @Test
    fun `files without variants do not send vary`() =
        svelteTest {
            assertNull(client.get("/favicon.png").headers[HttpHeaders.Vary])
        }

    @Test
    fun `compression plugin leaves precompressed responses alone`() =
        testApplication {
            val build = fixtureBuild(encoded = compressedFiles)
            application {
                install(Compression)
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                }
            }
            val response = client.get("/about") { header(HttpHeaders.AcceptEncoding, "br") }
            assertEquals("br", response.headers[HttpHeaders.ContentEncoding])
            assertEquals("brotli-bytes", response.bodyAsText())
        }

    @Test
    fun `compression plugin may still compress plain files`() =
        testApplication {
            val large = "x".repeat(4096)
            val build = fixtureBuild(files = mapOf("index.html" to large))
            application {
                install(Compression)
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                }
            }
            val response = client.get("/") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("gzip", response.headers[HttpHeaders.ContentEncoding])
            assertNotEquals(large, response.bodyAsText())
        }

    @Test
    fun `directory source picks up changes in development mode`() =
        testApplication {
            serverConfig { developmentMode = true }
            val build = fixtureBuild(files = mapOf("index.html" to "one"))
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals("one", client.get("/").bodyAsText())
            build.resolve("index.html").toFile().writeText("two!")
            val response = client.get("/")
            assertEquals("two!", response.bodyAsText())
            assertFalse(response.headers[HttpHeaders.ETag].isNullOrEmpty())
        }
}
