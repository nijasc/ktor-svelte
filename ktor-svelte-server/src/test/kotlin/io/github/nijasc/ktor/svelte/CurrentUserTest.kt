package io.github.nijasc.ktor.svelte

import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.sessions.Sessions
import io.ktor.server.sessions.clear
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.get
import io.ktor.server.sessions.sessions
import io.ktor.server.sessions.set
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import java.time.Instant
import kotlin.io.path.createDirectories
import kotlin.io.path.exists
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

@Serializable
enum class MemberRole { Admin, Member }

@Serializable
data class Member(
    val id: Int,
    val name: String,
    val role: MemberRole = MemberRole.Member,
)

@Serializable
data class MemberSession(
    val id: Int,
)

class CurrentUserTest {
    @TempDir
    lateinit var dir: Path

    private var asked = 0

    private fun app(
        otherRoute: Boolean = true,
        configure: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        dir.resolve("package.json").writeText("{}")
        dir.resolve("src/lib").createDirectories()
        val build = fixtureBuild()
        application {
            install(Sessions) { cookie<MemberSession>("member") }
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                generateTs = true
                generateTsOutput = dir.resolve("src/lib/api").toString()
                transport { json() }
                currentUser<Member> {
                    asked++
                    sessions.get<MemberSession>()?.let { Member(it.id, "Ada", MemberRole.Admin) }
                }
                configure()
            }
            routing {
                post("/api/session") {
                    call.sessions.set(MemberSession(7))
                    call.currentUserChanged()
                    call.currentUserChanged()
                    call.respond(HttpStatusCode.NoContent)
                }
                delete("/api/session") {
                    call.sessions.clear<MemberSession>()
                    call.currentUserChanged()
                    call.respond(HttpStatusCode.NoContent)
                }
                if (otherRoute) get("/api/members") { call.respond(listOf(Member(1, "Grace"))) }.describeMembers()
                get("/api/whoami") {
                    val first: Member? = call.user()
                    val second = call.user<Member>()
                    call.respond(listOf(first?.name ?: "nobody", second?.name ?: "nobody", "asked $asked time(s)"))
                }
                get("/api/mine") {
                    val member: Member = call.requireUser()
                    call.respond(listOf(member.name))
                }
                post("/api/switch") {
                    val before = call.user<Member>()?.name ?: "nobody"
                    call.sessions.set(MemberSession(9))
                    call.currentUserChanged()
                    call.respond(listOf(before, call.requireUser<Member>().id.toString()))
                }
                get("/api/wrong") { call.respond(listOf(call.user<MemberSession>().toString())) }
            }
        }
        block()
    }

    @Test
    fun `the endpoint answers with the signed-in user, or with none, and is never cached`() =
        app {
            val browser = createClient { install(HttpCookies) }
            val nobody = browser.get("/api/current-user")
            assertEquals(HttpStatusCode.OK, nobody.status)
            assertEquals("""{"user":null,"sessionSeconds":null}""", nobody.bodyAsText())
            assertEquals("no-store", nobody.headers[HttpHeaders.CacheControl])

            val signedIn = browser.post("/api/session") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals(listOf("changed"), signedIn.headers.getAll("X-Ktor-Svelte-User"))
            assertEquals(
                """{"user":{"id":7,"name":"Ada","role":"Admin"},"sessionSeconds":null}""",
                browser.get("/api/current-user").bodyAsText(),
            )

            assertEquals(
                "changed",
                browser.delete("/api/session") { header(HttpHeaders.Origin, "http://localhost") }.headers["X-Ktor-Svelte-User"],
            )
            assertEquals("""{"user":null,"sessionSeconds":null}""", browser.get("/api/current-user").bodyAsText())
            assertEquals(null, browser.get("/api/members").headers["X-Ktor-Svelte-User"])
        }

    @Test
    fun `any route can ask for the user, who is looked up once per call`() =
        app {
            val browser = createClient { install(HttpCookies) }
            assertEquals("""["nobody","nobody","asked 1 time(s)"]""", browser.get("/api/whoami").bodyAsText())
            browser.post("/api/session") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals("""["Ada","Ada","asked 2 time(s)"]""", browser.get("/api/whoami").bodyAsText())
            assertEquals("""["Ada"]""", browser.get("/api/mine").bodyAsText())
        }

    @Test
    fun `a route that requires a user answers 401 to a visitor, in the words the app chose`() {
        app {
            val refused = client.get("/api/mine")
            assertEquals(HttpStatusCode.Unauthorized, refused.status)
            assertEquals("""{"message":"Sign in first."}""", refused.bodyAsText())
            assertContains(refused.headers[HttpHeaders.ContentType].orEmpty(), "application/json")
        }
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    currentUser<Member>(signInMessage = { call -> "Bitte anmelden: ${call.request.local.uri}" }) { null }
                }
                routing {
                    get("/api/mine") { call.respond(call.requireUser<Member>().name) }
                }
            }
            assertEquals("""{"message":"Bitte anmelden: /api/mine"}""", client.get("/api/mine").bodyAsText())
        }
    }

    @Test
    fun `the user is looked up again after the route changed who is signed in`() =
        app {
            val browser = createClient { install(HttpCookies) }
            browser.post("/api/session") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals("""["Ada","9"]""", browser.post("/api/switch") { header(HttpHeaders.Origin, "http://localhost") }.bodyAsText())
        }

    @Test
    fun `asking without a declared user, or for another class, says what to do`() {
        app {
            assertEquals(HttpStatusCode.InternalServerError, client.get("/api/wrong").status)
        }
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    hideErrorDetails = false
                }
                routing {
                    get("/api/mine") { call.respond(call.requireUser<Member>().name) }
                }
            }
            val failure = client.get("/api/mine")
            assertEquals(HttpStatusCode.InternalServerError, failure.status)
        }
    }

    private fun timedApp(block: suspend ApplicationTestBuilder.(extended: () -> Int) -> Unit) {
        var ends = Instant.now().plusSeconds(600)
        var extended = 0
        testApplication {
            val build = fixtureBuild()
            application {
                install(Sessions) { cookie<MemberSession>("member") }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    transport { json() }
                    currentUser<Member>(
                        sessionEnds = { ends.takeIf { sessions.get<MemberSession>() != null } },
                        extendSession = {
                            extended++
                            ends = Instant.now().plusSeconds(1800)
                        },
                    ) { sessions.get<MemberSession>()?.let { Member(it.id, "Ada") } }
                }
                routing {
                    post("/api/session") {
                        call.sessions.set(MemberSession(7))
                        call.respond(HttpStatusCode.NoContent)
                    }
                    get("/api/notes") { call.respond(listOf("a")) }
                    get("/pages/notes") { call.respond(listOf("a")) }
                }
            }
            block { extended }
        }
    }

    private fun seconds(body: String): Long =
        Regex("\"sessionSeconds\":(\\d+)")
            .find(body)
            ?.groupValues
            ?.get(1)
            ?.toLong() ?: -1

    @Test
    fun `the endpoint and every API response say how long the session still lasts`() =
        timedApp {
            val browser = createClient { install(HttpCookies) }
            assertEquals("""{"user":null,"sessionSeconds":null}""", browser.get("/api/current-user").bodyAsText())
            assertEquals(null, browser.get("/api/notes").headers["X-Ktor-Svelte-Session"], "a visitor has no session to end")

            val signedIn = browser.post("/api/session") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals(true, signedIn.headers["X-Ktor-Svelte-Session"]?.toLong() in 590L..600L, "the session that the call just started")
            assertEquals(true, seconds(browser.get("/api/current-user").bodyAsText()) in 590L..600L)
            assertEquals(true, browser.get("/api/notes").headers["X-Ktor-Svelte-Session"]?.toLong() in 590L..600L)
            assertEquals(null, browser.get("/pages/notes").headers["X-Ktor-Svelte-Session"], "only API responses carry it")
        }

    @Test
    fun `extending runs the app's own code and answers with the new end`() =
        timedApp { extended ->
            val browser = createClient { install(HttpCookies) }
            val visitor = browser.post("/api/current-user/extend") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals("""{"user":null,"sessionSeconds":null}""", visitor.bodyAsText())
            assertEquals(0, extended(), "there is nothing to extend for a visitor")

            browser.post("/api/session") { header(HttpHeaders.Origin, "http://localhost") }
            val longer = browser.post("/api/current-user/extend") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals(HttpStatusCode.OK, longer.status)
            assertEquals(true, seconds(longer.bodyAsText()) in 1790L..1800L, longer.bodyAsText())
            assertEquals("no-store", longer.headers[HttpHeaders.CacheControl])
            assertEquals(1, extended())
            assertEquals(
                HttpStatusCode.Forbidden,
                browser
                    .post("/api/current-user/extend") {
                        header(HttpHeaders.Origin, "https://other.example")
                    }.status,
            )
        }

    @Test
    fun `the path follows the first API prefix unless one is given`() {
        app(configure = { apiPrefixes("/backend", "/api") }) {
            assertEquals("""{"user":null,"sessionSeconds":null}""", client.get("/backend/current-user").bodyAsText())
        }
        assertFailsWith<IllegalStateException> {
            app(configure = { currentUser<Member> { null } }) { startApplication() }
        }
    }

    @Test
    fun `the frontend gets a typed store that reads the endpoint, and the endpoint is no route of the client`() =
        app {
            startApplication()
            val api = dir.resolve("src/lib/api")
            assertEquals(
                "import { userStore, type UserState } from './client.js';\n" +
                    "import type { CurrentUser } from './types.js';\n\n" +
                    "const state = \$state<UserState<CurrentUser>>(" +
                    "{ user: null, ready: false, sessionEnds: null, sessionEnding: false });\n\n" +
                    "export const currentUser = userStore<CurrentUser>('/api/current-user', state);\n",
                api.resolve("current-user.svelte.ts").readText(),
            )
            assertContains(api.resolve("types.ts").readText(), "export type CurrentUser = Member;\n")
            assertContains(api.resolve("index.ts").readText(), "export * from './current-user.svelte.js';\n")
            assertContains(api.resolve(".gitattributes").readText(), "current-user.svelte.ts ")
            assertFalse("current-user" in api.resolve("services.ts").readText())
            assertFalse("current-user" in api.resolve("openapi.json").readText())
        }

    @Test
    fun `a user type that no route returns is declared for the store`() =
        app(otherRoute = false) {
            startApplication()
            val types = dir.resolve("src/lib/api/types.ts").readText()
            assertContains(types, "export interface CurrentUser {\n    id: number;\n    name: string;\n")
            assertFalse("export type CurrentUser = " in types)
        }

    @Test
    fun `without a declared user nothing is generated or served`() =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                }
            }
            startApplication()
            assertFalse(dir.resolve("src/lib/api/current-user.svelte.ts").exists())
            assertFalse("current-user" in dir.resolve("src/lib/api/index.ts").readText())
            assertEquals(HttpStatusCode.NotFound, client.get("/api/current-user").status)
        }
}
