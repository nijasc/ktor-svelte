package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.head
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsBytes
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlin.io.path.writeBytes
import kotlin.random.Random
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class DirectoryFilesTest {
    @Test
    fun `large files from a directory arrive complete with their length`() =
        testApplication {
            val build = fixtureBuild()
            val bytes = Random(7).nextBytes(3 * 1024 * 1024 + 17)
            build.resolve("_app/immutable/assets/big.bin").also { it.parent.toFile().mkdirs() }.writeBytes(bytes)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
            }

            val response = client.get("/_app/immutable/assets/big.bin")

            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals(bytes.size.toString(), response.headers[HttpHeaders.ContentLength])
            assertContentEquals(bytes, response.bodyAsBytes())
        }

    @Test
    fun `encoded variants and not found pages are read from their own files`() =
        testApplication {
            val build = fixtureBuild(encoded = mapOf("about.html.gz" to "gzip-bytes!"))
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.Never }
                }
            }

            val encoded = client.get("/about") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals("gzip", encoded.headers[HttpHeaders.ContentEncoding])
            assertContentEquals("gzip-bytes!".toByteArray(), encoded.bodyAsBytes())

            val missing = client.get("/nowhere") { header(HttpHeaders.Accept, "text/html") }
            assertEquals(HttpStatusCode.NotFound, missing.status)
            assertEquals("<h1>missing</h1>", missing.bodyAsText())

            val head = client.head("/about")
            assertEquals("14", head.headers[HttpHeaders.ContentLength])
            assertEquals("", head.bodyAsText())
        }
}
