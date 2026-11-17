package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.assets.ClasspathAssetStore
import io.github.nijasc.ktor.svelte.internal.assets.frontendResourceRoot
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.net.URLClassLoader
import java.nio.file.Files
import kotlin.io.path.createDirectories
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull

class MultipleFrontendsTest {
    private val admin =
        fixtureBuild(
            mapOf(
                "index.html" to "<h1>admin home</h1>",
                "users.html" to "<h1>admin users</h1>",
                "settings/index.html" to "<h1>admin settings</h1>",
                "200.html" to "<h1>admin fallback</h1>",
                "_app/immutable/entry/admin.abc.js" to "console.log('admin')",
            ),
        )
    private val reports =
        fixtureBuild(
            mapOf(
                "index.html" to "<h1>reports home</h1>",
                "200.html" to "<h1>reports fallback</h1>",
            ),
        )

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    frontend("/admin") { source = SvelteSource.Directory(admin) }
                    frontend("/admin/reports") { source = SvelteSource.Directory(reports) }
                }
                routing { get("/api/hello") { call.respondText("hi") } }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.page(path: String): HttpResponse =
        client.get(path) { header(HttpHeaders.Accept, "text/html") }

    @Test
    fun `each frontend answers under its prefix and the main frontend keeps the rest`() =
        app {
            assertEquals("<h1>home</h1>", page("/").bodyAsText())
            assertEquals("<h1>about</h1>", page("/about").bodyAsText())
            assertEquals("<h1>admin home</h1>", page("/admin").bodyAsText())
            assertEquals("<h1>admin home</h1>", page("/admin/").bodyAsText())
            assertEquals("<h1>admin users</h1>", page("/admin/users").bodyAsText())
            assertEquals("<h1>admin settings</h1>", page("/admin/settings/").bodyAsText())
            assertEquals("<h1>fallback</h1>", page("/administrator").bodyAsText(), "a prefix only covers whole path segments")
            assertEquals("hi", client.get("/api/hello").bodyAsText())
        }

    @Test
    fun `the longest prefix wins`() =
        app {
            assertEquals("<h1>reports home</h1>", page("/admin/reports").bodyAsText())
            assertEquals("<h1>reports fallback</h1>", page("/admin/reports/2026").bodyAsText())
            assertEquals("<h1>admin fallback</h1>", page("/admin/report").bodyAsText())
        }

    @Test
    fun `a frontend has its own fallback, its own files and redirects inside its prefix`() =
        app {
            assertEquals("<h1>admin fallback</h1>", page("/admin/users/7").bodyAsText())
            val script = client.get("/admin/_app/immutable/entry/admin.abc.js")
            assertEquals("console.log('admin')", script.bodyAsText())
            assertContains(script.headers[HttpHeaders.CacheControl].orEmpty(), "immutable")
            assertEquals(HttpStatusCode.NotFound, client.get("/_app/immutable/entry/admin.abc.js").status)
            assertEquals(HttpStatusCode.NotFound, client.get("/admin/_app/immutable/entry/app.abc.js").status)

            val noFollow = createClient { followRedirects = false }
            val redirect = noFollow.get("/admin/users/?tab=all") { header(HttpHeaders.Accept, "text/html") }
            assertEquals(HttpStatusCode.PermanentRedirect, redirect.status)
            assertEquals("/admin/users?tab=all", redirect.headers[HttpHeaders.Location])
            val folder = noFollow.get("/admin/settings") { header(HttpHeaders.Accept, "text/html") }
            assertEquals("/admin/settings/", folder.headers[HttpHeaders.Location])
        }

    @Test
    fun `without a frontend nothing changes`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                }
            }
            assertEquals("<h1>fallback</h1>", page("/admin").bodyAsText())
        }

    @Test
    fun `prefixes must be plain paths of their own`() {
        listOf("admin", "/", "/admin/", "/ad min", "/admin/../x", "/{id}", "/admin//x").forEach { prefix ->
            assertFailsWith<IllegalArgumentException>(prefix) { SvelteConfig().frontend(prefix) }
        }
        assertFailsWith<IllegalArgumentException> {
            SvelteConfig().apply {
                frontend("/admin")
                frontend("/admin")
            }
        }
        assertEquals("admin-reports", SvelteFrontendConfig("/admin/reports").name)
    }

    @Test
    fun `a frontend may not sit inside the API`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                testApplication {
                    application {
                        install(Svelte) {
                            source = SvelteSource.Directory(fixtureBuild())
                            dev { mode = DevMode.Never }
                            frontend("/api/admin") { source = SvelteSource.Directory(admin) }
                        }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "inside the API prefixes")
    }

    @Test
    fun `outside development a frontend without a build stops the start`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    serverConfig { developmentMode = false }
                    application {
                        install(Svelte) {
                            source = SvelteSource.Directory(fixtureBuild())
                            dev { mode = DevMode.Never }
                            frontend("/admin") { source = SvelteSource.Directory(Files.createTempDirectory("empty")) }
                        }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "svelte { frontend(\"admin\") { } }")
    }

    @Test
    fun `from the classpath each frontend reads its own resource folder`() {
        val root = Files.createTempDirectory("ktor-svelte-frontends")
        val base = root.resolve(frontendResourceRoot("admin"))
        base.resolve("public").createDirectories()
        base.resolve("public/index.html").writeText("<h1>admin</h1>")
        base.resolve("manifest.json").writeText("""{"formatVersion":1,"files":{"index.html":{"size":14,"hash":"abc"}}}""")
        val loader = URLClassLoader(arrayOf(root.toUri().toURL()), null)
        val store = ClasspathAssetStore(loader, frontendResourceRoot("admin"))
        assertEquals(setOf("index.html"), store.manifest()?.files?.keys)
        assertEquals("<h1>admin</h1>", store.open("index.html")?.readBytes()?.decodeToString())
        assertNull(ClasspathAssetStore(loader).manifest())
    }
}
