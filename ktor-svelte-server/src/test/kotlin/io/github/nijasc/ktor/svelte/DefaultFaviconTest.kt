package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsBytes
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

class DefaultFaviconTest {
    private fun ApplicationTestBuilder.serve(
        build: Path = fixtureBuild(mapOf("index.html" to "home")),
        configure: SvelteConfig.() -> Unit = {},
    ) {
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                configure()
            }
        }
    }

    @Test
    fun `apps without a favicon get the ktor-svelte one`() =
        testApplication {
            serve()
            val ico = client.get("/favicon.ico")
            assertEquals(HttpStatusCode.OK, ico.status)
            assertEquals("image/x-icon", ico.headers[HttpHeaders.ContentType])
            assertEquals("public, max-age=86400", ico.headers[HttpHeaders.CacheControl])
            assertContentEquals(byteArrayOf(0, 0, 1, 0), ico.bodyAsBytes().copyOf(4))
            assertContains(client.get("/favicon.svg").bodyAsText(), "<svg")
            assertEquals("image/png", client.get("/favicon.png").headers[HttpHeaders.ContentType])
            assertEquals("image/png", client.get("/apple-touch-icon.png").headers[HttpHeaders.ContentType])
        }

    @Test
    fun `any favicon of the app replaces all defaults`() =
        testApplication {
            serve(fixtureBuild(mapOf("index.html" to "home", "favicon.png" to "mine")))
            assertEquals("mine", client.get("/favicon.png").bodyAsText())
            assertEquals(HttpStatusCode.NotFound, client.get("/favicon.ico").status)
            assertEquals(HttpStatusCode.NotFound, client.get("/favicon.svg").status)
        }

    @Test
    fun `the default can be turned off`() =
        testApplication {
            serve { defaultFavicon = false }
            assertEquals(HttpStatusCode.NotFound, client.get("/favicon.ico").status)
        }
}
