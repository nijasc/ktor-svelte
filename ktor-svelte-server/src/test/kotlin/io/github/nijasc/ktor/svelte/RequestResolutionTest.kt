package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.head
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class RequestResolutionTest {
    private fun svelteTest(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
        }
        val noRedirects =
            createClient {
                followRedirects = false
            }
        this.client = noRedirects
        block()
    }

    @Test
    fun `root serves index page`() =
        svelteTest {
            assertEquals("<h1>home</h1>", client.get("/").bodyAsText())
        }

    @Test
    fun `exact file is served`() =
        svelteTest {
            assertEquals("console.log(1)", client.get("/_app/immutable/entry/app.abc.js").bodyAsText())
        }

    @Test
    fun `flat prerendered page is served without extension`() =
        svelteTest {
            assertEquals("<h1>about</h1>", client.get("/about").bodyAsText())
        }

    @Test
    fun `folder page is served with trailing slash`() =
        svelteTest {
            assertEquals("<h1>docs</h1>", client.get("/docs/").bodyAsText())
        }

    @Test
    fun `trailing slash on flat page redirects with 308 and keeps query`() =
        svelteTest {
            val response = client.get("/about/?a=1&b=2")
            assertEquals(HttpStatusCode.PermanentRedirect, response.status)
            assertEquals("/about?a=1&b=2", response.headers[HttpHeaders.Location])
        }

    @Test
    fun `missing trailing slash on folder page redirects with 308`() =
        svelteTest {
            val response = client.get("/docs")
            assertEquals(HttpStatusCode.PermanentRedirect, response.status)
            assertEquals("/docs/", response.headers[HttpHeaders.Location])
        }

    @Test
    fun `missing path under app directory is 404 and never the fallback`() =
        svelteTest {
            val response = client.get("/_app/immutable/chunks/old.js")
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertFalse(response.bodyAsText().contains("fallback"))
        }

    @Test
    fun `missing path with extension is 404 and never the fallback`() =
        svelteTest {
            val response = client.get("/missing.png")
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertFalse(response.bodyAsText().contains("fallback"))
        }

    @Test
    fun `unknown route gets fallback with status 200`() =
        svelteTest {
            val response = client.get("/app/settings") { header(HttpHeaders.Accept, "text/html") }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("<h1>fallback</h1>", response.bodyAsText())
        }

    @Test
    fun `request without html in accept gets the not found page`() =
        svelteTest {
            val response = client.get("/app/settings") { header(HttpHeaders.Accept, "application/json") }
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertEquals("<h1>missing</h1>", response.bodyAsText())
        }

    @Test
    fun `disabled fallback serves the not found page with status 404`() =
        svelteTest(config = { spaFallback = null }) {
            val response = client.get("/app/settings") { header(HttpHeaders.Accept, "text/html") }
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertEquals("<h1>missing</h1>", response.bodyAsText())
        }

    @Test
    fun `disabled fallback and not found page give a plain 404`() =
        svelteTest(
            config = {
                spaFallback = null
                notFoundPage = null
            },
        ) {
            val response = client.get("/app/settings")
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertFalse(response.bodyAsText().contains("missing"))
        }

    @Test
    fun `unknown api path is not answered by the frontend`() =
        svelteTest {
            val response = client.get("/api/typo") { header(HttpHeaders.Accept, "text/html") }
            assertEquals(HttpStatusCode.NotFound, response.status)
            assertFalse(response.bodyAsText().contains("h1"))
        }

    @Test
    fun `api prefix matches on segment boundary only`() =
        svelteTest {
            val response = client.get("/apiary") { header(HttpHeaders.Accept, "text/html") }
            assertEquals("<h1>fallback</h1>", response.bodyAsText())
        }

    @Test
    fun `custom api prefixes replace the default`() =
        svelteTest(config = { apiPrefixes("/rpc/") }) {
            assertEquals(HttpStatusCode.NotFound, client.get("/rpc/x").status)
            assertEquals("<h1>fallback</h1>", client.get("/api/x").bodyAsText())
        }

    @Test
    fun `post to a frontend page is not allowed`() =
        svelteTest {
            assertEquals(HttpStatusCode.MethodNotAllowed, client.post("/about").status)
        }

    @Test
    fun `head returns headers and no body`() =
        svelteTest {
            val response = client.head("/about")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("14", response.headers[HttpHeaders.ContentLength])
            assertEquals("", response.bodyAsText())
        }

    @Test
    fun `malformed percent encoding is not handled`() =
        svelteTest {
            assertEquals(HttpStatusCode.NotFound, client.get("/%zz.png").status)
        }

    @Test
    fun `traversal attempt cannot leave the build directory`() =
        svelteTest {
            val response = client.get("/_app/..%2f..%2fsecret.txt")
            assertEquals(HttpStatusCode.NotFound, response.status)
        }

    @Test
    fun `routes registered before the plugin win`() =
        testApplication {
            val build = fixtureBuild()
            application {
                routing { get("/about") { call.respondText("route") } }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
            }
            assertEquals("route", client.get("/about").bodyAsText())
        }

    @Test
    fun `routes registered after the plugin win`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    get("/about") { call.respondText("route") }
                    get("/api/hello") { call.respondText("api") }
                    get("/users/{id}") { call.respondText("user") }
                    post("/submit") { call.respondText("posted") }
                }
            }
            assertEquals("route", client.get("/about").bodyAsText())
            assertEquals("api", client.get("/api/hello").bodyAsText())
            assertEquals("user", client.get("/users/1").bodyAsText())
            assertEquals("posted", client.post("/submit").bodyAsText())
            assertEquals("<h1>home</h1>", client.get("/").bodyAsText())
        }

    @Test
    fun `classpath source reads manifest and files`() =
        testApplication {
            val manifest =
                """
                {"formatVersion":1,"files":{"index.html":{"size":4,"hash":"abc"}}}
                """.trimIndent()
            environment {
                classLoader = classLoaderWithManifest(manifest, mapOf("index.html" to "home".toByteArray()))
            }
            application {
                install(Svelte) { dev { mode = DevMode.Never } }
            }
            val response = client.get("/")
            assertEquals("home", response.bodyAsText())
            assertTrue(response.headers[HttpHeaders.ContentType].orEmpty().startsWith("text/html"))
        }

    @Test
    fun `redirects to pages with spaces and non ascii names are percent encoded`() =
        testApplication {
            val build = fixtureBuild(mapOf("café.html" to "cafe", "a b/index.html" to "ab", "index.html" to "home"))
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
            }
            val noRedirects = createClient { followRedirects = false }
            val flat = noRedirects.get("/caf%C3%A9/?x=1")
            val folder = noRedirects.get("/a%20b")
            assertEquals(HttpStatusCode.PermanentRedirect, flat.status)
            assertEquals("/caf%C3%A9?x=1", flat.headers[HttpHeaders.Location])
            assertEquals("/a%20b/", folder.headers[HttpHeaders.Location])
            assertEquals("cafe", noRedirects.get("/caf%C3%A9").bodyAsText())
        }

    @Test
    fun `redirects keep an encoded query and answer head requests`() =
        svelteTest {
            val get = client.get("/about/?q=a%20b%26c&x")
            val head = client.head("/docs")
            assertEquals("/about?q=a%20b%26c&x", get.headers[HttpHeaders.Location])
            assertEquals(HttpStatusCode.PermanentRedirect, head.status)
            assertEquals("/docs/", head.headers[HttpHeaders.Location])
        }
}
