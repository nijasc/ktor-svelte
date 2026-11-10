package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.privateCacheControl
import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import io.ktor.client.request.basicAuth
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.UserIdPrincipal
import io.ktor.server.auth.authenticate
import io.ktor.server.auth.basic
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import java.nio.file.Files
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Serializable
data class Limits(
    val maximum: Int,
)

@Serializable
data class PublicSettings(
    val appName: String,
    val sentryDsn: String? = null,
    val limits: Limits,
)

class ProductionFeaturesTest {
    private val frontendFiles =
        mapOf(
            "index.html" to "<h1>home</h1>",
            "login.html" to "<h1>login</h1>",
            "200.html" to "<h1>fallback</h1>",
            "_app/immutable/app.js" to "code",
        )

    private fun protectedApp(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Authentication) {
                    basic("session") {
                        validate { credentials ->
                            if (credentials.password == "secret") UserIdPrincipal(credentials.name) else null
                        }
                    }
                }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    routing = SvelteRouting.Manual
                    dev { mode = DevMode.NEVER }
                }
                routing {
                    get("/api/open") { call.respondText("open") }
                    svelte(public = listOf("/login", "/_app/*"))
                    authenticate("session") {
                        svelte()
                    }
                }
            }
            block()
        }

    @Test
    fun `manual routing protects pages and keeps public paths open`() =
        protectedApp {
            assertEquals(HttpStatusCode.Unauthorized, client.get("/").status)
            assertEquals(HttpStatusCode.Unauthorized, client.get("/anything/else").status)
            assertEquals("<h1>login</h1>", client.get("/login").bodyAsText())
            assertEquals("code", client.get("/_app/immutable/app.js").bodyAsText())
            assertEquals("open", client.get("/api/open").bodyAsText())
        }

    @Test
    fun `authenticated requests reach the frontend`() =
        protectedApp {
            val home = client.get("/") { basicAuth("me", "secret") }
            assertEquals("<h1>home</h1>", home.bodyAsText())
            val route = client.get("/anything/else") { basicAuth("me", "secret") }
            assertEquals("<h1>fallback</h1>", route.bodyAsText())
        }

    @Test
    fun `protected pages are private and public paths stay shared`() =
        protectedApp {
            val page = client.get("/") { basicAuth("me", "secret") }
            assertEquals("private, no-cache", page.headers[HttpHeaders.CacheControl])
            val asset = client.get("/_app/immutable/app.js")
            assertEquals("public, max-age=31536000, immutable", asset.headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `private cache control rewrites public and keeps stricter values`() {
        assertEquals("private, max-age=31536000, immutable", privateCacheControl("public, max-age=31536000, immutable"))
        assertEquals("private, no-cache", privateCacheControl("no-cache"))
        assertEquals("no-store", privateCacheControl("no-store"))
        assertEquals("private, max-age=1", privateCacheControl("private, max-age=1"))
    }

    @Test
    fun `directory source hides dotfiles and symlinks`() =
        testApplication {
            val outside = Files.createTempFile("ktor-svelte-outside", ".txt")
            outside.writeText("secret")
            val build = fixtureBuild(files = frontendFiles + (".env" to "SECRET=1") + (".well-known/security.txt" to "contact"))
            val linked =
                try {
                    Files.createSymbolicLink(build.resolve("linked.txt"), outside)
                    true
                } catch (_: Exception) {
                    false
                }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/.env").status)
            assertEquals("contact", client.get("/.well-known/security.txt").bodyAsText())
            if (linked) assertEquals(HttpStatusCode.NotFound, client.get("/linked.txt").status)
        }

    @Test
    fun `manual routing does not add a catch all by itself`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    routing = SvelteRouting.Manual
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/").status)
        }

    @Test
    fun `svelte route without the plugin explains what to do`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    application {
                        routing { svelte() }
                    }
                    client.get("/")
                }
            }
        assertContains(failure.message.orEmpty(), "Install the Svelte plugin")
    }

    @Test
    fun `public config is served as json without caching`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    publicConfig(PublicSettings("demo", limits = Limits(3)))
                }
            }
            val response = client.get("/_ktor-svelte/config.json")
            assertEquals("""{"appName":"demo","limits":{"maximum":3}}""", response.bodyAsText())
            assertEquals("no-cache", response.headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `public config is missing when not configured`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/_ktor-svelte/config.json").status)
        }

    @Test
    fun `generated code includes public config types and loader`() {
        val root = Files.createTempDirectory("ktor-svelte-public-config")
        root.resolve("package.json").writeText("{}")
        val output = root.resolve("src/lib/api").also { it.createDirectories() }
        testApplication {
            serverConfig { developmentMode = true }
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    generateTs = true
                    generateTsOutput = output.toString()
                    publicConfig(PublicSettings("demo", limits = Limits(3)))
                }
            }
            startApplication()
        }
        val types = output.resolve("types.ts").readText()
        assertContains(types, "export interface PublicConfig {")
        assertContains(types, "appName: string;")
        assertContains(types, "maximum: number;")
        val services = output.resolve("services.ts").readText()
        assertContains(services, "export function loadPublicConfig(")
        assertContains(services, "import type { PublicConfig } from './types.js';")
    }

    @Test
    fun `client calls onUnauthorized and generator leaves config out by default`() {
        val generated = TypeScriptGenerator(listOf("/api")).generate("""{"paths":{}}""")
        assertContains(generated.getValue("client.ts"), "apiConfig.onUnauthorized?.(response)")
        assertFalse(generated.getValue("services.ts").contains("loadPublicConfig"))
    }

    @Test
    fun `api docs are served in development mode and stay out of generated code`() {
        val root = Files.createTempDirectory("ktor-svelte-docs")
        root.resolve("package.json").writeText("{}")
        val output = root.resolve("src/lib/api").also { it.createDirectories() }
        testApplication {
            serverConfig { developmentMode = true }
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    apiDocs = true
                    generateTs = true
                    generateTsOutput = output.toString()
                }
                routing { get("/api/x") { call.respondText("x") } }
            }
            val docs = client.get("/api/docs")
            assertEquals(HttpStatusCode.OK, docs.status)
            assertContains(docs.bodyAsText(), "swagger")
        }
        val services = output.resolve("services.ts").readText()
        assertTrue("export const x = {" in services)
        assertFalse(services.contains("docs"))
    }

    @Test
    fun `api docs are not served in production`() =
        testApplication {
            serverConfig { developmentMode = false }
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.NEVER }
                    apiDocs = true
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/api/docs").status)
        }
}
