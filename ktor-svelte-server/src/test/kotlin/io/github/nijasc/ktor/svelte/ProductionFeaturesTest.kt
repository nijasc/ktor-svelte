package io.github.nijasc.ktor.svelte

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
import kotlin.test.assertNull
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
    fun `security headers are sent on pages api calls and misses`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    securityHeaders()
                }
                routing { get("/api/x") { call.respondText("x") } }
            }
            listOf("/", "/api/x", "/api/missing").forEach { path ->
                val response = client.get(path)
                assertEquals("nosniff", response.headers["X-Content-Type-Options"], path)
                assertEquals("DENY", response.headers["X-Frame-Options"], path)
                assertEquals("strict-origin-when-cross-origin", response.headers["Referrer-Policy"], path)
                assertNull(response.headers["Content-Security-Policy"], path)
            }
        }

    @Test
    fun `security headers can be changed or left out`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    securityHeaders {
                        frameOptions = null
                        contentSecurityPolicy = "default-src 'self'"
                    }
                }
            }
            val response = client.get("/")
            assertNull(response.headers["X-Frame-Options"])
            assertEquals("default-src 'self'", response.headers["Content-Security-Policy"])
        }

    @Test
    fun `content security policy is skipped while proxying to vite`() =
        testApplication {
            val build = fixtureBuild(files = frontendFiles)
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.ALWAYS
                    }
                    securityHeaders { contentSecurityPolicy = "default-src 'self'" }
                }
            }
            val response = client.get("/")
            assertNull(response.headers["Content-Security-Policy"])
            assertEquals("nosniff", response.headers["X-Content-Type-Options"])
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
