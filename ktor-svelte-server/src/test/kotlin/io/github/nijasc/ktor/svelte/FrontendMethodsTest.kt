package io.github.nijasc.ktor.svelte

import io.ktor.client.request.delete
import io.ktor.client.request.options
import io.ktor.client.request.post
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class FrontendMethodsTest {
    private fun frontend(block: suspend io.ktor.server.testing.ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                }
            }
            block()
        }

    @Test
    fun `writes to pages and files answer 405 with Allow`() =
        frontend {
            listOf("/about", "/", "/favicon.png", "/notes/42").forEach { path ->
                val response = client.post(path)
                assertEquals(HttpStatusCode.MethodNotAllowed, response.status, path)
                assertEquals("GET, HEAD, OPTIONS", response.headers[HttpHeaders.Allow], path)
            }
            assertEquals(HttpStatusCode.MethodNotAllowed, client.delete("/about").status)
        }

    @Test
    fun `OPTIONS on a page lists the allowed methods`() =
        frontend {
            val response = client.options("/about")
            assertEquals(HttpStatusCode.NoContent, response.status)
            assertEquals("GET, HEAD, OPTIONS", response.headers[HttpHeaders.Allow])
        }

    @Test
    fun `missing files and API paths still answer 404`() =
        frontend {
            listOf("/missing.png", "/_app/immutable/gone.js", "/api/nothing").forEach { path ->
                val response = client.post(path)
                assertEquals(HttpStatusCode.NotFound, response.status, path)
                assertNull(response.headers[HttpHeaders.Allow], path)
            }
        }
}
