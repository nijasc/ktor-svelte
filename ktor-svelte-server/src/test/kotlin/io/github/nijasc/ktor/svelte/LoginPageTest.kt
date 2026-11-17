package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class LoginPageTest {
    @TempDir
    lateinit var dir: Path

    private fun app(
        page: String? = "/login",
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        dir.resolve("package.json").writeText("{}")
        dir.resolve("src/lib").createDirectories()
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                routing = SvelteRouting.Manual
                generateTs = true
                generateTsOutput = dir.resolve("src/lib/api").toString()
                loginPage = page
            }
            routing {
                get("/members/{...}") { call.respondLoginRedirect() }
                get("/login") { call.respondLoginRedirect() }
                post("/members") { call.respondLoginRedirect() }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.locationOf(path: String): String? {
        val visitor = createClient { followRedirects = false }
        val response = visitor.get(path)
        assertEquals(HttpStatusCode.Found, response.status)
        return response.headers[HttpHeaders.Location]
    }

    @Test
    fun `the redirect to the login page carries the page the visitor asked for`() =
        app {
            assertEquals("/login?next=%2Fmembers%2F4", locationOf("/members/4"))
            assertEquals("/login?next=%2Fmembers%2F4%3Ftab%3Dfiles%26q%3Da%2520b", locationOf("/members/4?tab=files&q=a%20b"))
            assertEquals("/login", locationOf("/login?next=%2Fmembers"), "the login page does not return to itself")
            val visitor = createClient { followRedirects = false }
            val written = visitor.post("/members") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals("/login", written.headers[HttpHeaders.Location], "a write is not a page to come back to")
        }

    @Test
    fun `only a page of this app is a place to return to`() {
        assertEquals("/login?next=%2Fboard", loginLocation("/login", "/board"))
        assertEquals("/login", loginLocation("/login", "//other.example/board"))
        assertEquals("/login", loginLocation("/login", "https://other.example"))
        assertEquals("/login", loginLocation("/login", "/login/"))
        assertEquals("/login", loginLocation("/login", null))
        assertEquals("/sign-in?next=%2Flogin", loginLocation("/sign-in", "/login"))
    }

    @Test
    fun `the generated client knows the login page`() =
        app {
            startApplication()
            assertContains(dir.resolve("src/lib/api/client.ts").readText(), "\napiConfig.loginPage = '/login';\n")
        }

    @Test
    fun `without a login page the client is unchanged and the redirect says what is missing`() =
        app(page = null) {
            startApplication()
            assertFalse("apiConfig.loginPage = " in dir.resolve("src/lib/api/client.ts").readText())
            assertEquals(HttpStatusCode.InternalServerError, client.get("/members/4").status)
        }

    @Test
    fun `the login page must be a path of this app`() {
        listOf("login", "https://other.example/login", "//other.example", "/login?x=1").forEach { page ->
            val failure = assertFailsWith<IllegalArgumentException>(page) { app(page = page) { startApplication() } }
            assertContains(failure.message.orEmpty(), "loginPage takes the path of a page in this app")
        }
    }
}
