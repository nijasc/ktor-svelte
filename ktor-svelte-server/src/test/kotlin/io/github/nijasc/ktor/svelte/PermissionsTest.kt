package io.github.nijasc.ktor.svelte

import io.ktor.client.HttpClient
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
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.sessions.Sessions
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.get
import io.ktor.server.sessions.sessions
import io.ktor.server.sessions.set
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

enum class Allowed { NotesRead, NotesDelete, UsersManage }

enum class Other { Thing }

class PermissionsTest {
    @TempDir
    lateinit var dir: Path

    private var looked = 0

    private fun app(
        refused: ((io.ktor.server.application.ApplicationCall) -> String)? = null,
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
                    sessions.get<MemberSession>()?.let { Member(it.id, "Ada", if (it.id == 1) MemberRole.Admin else MemberRole.Member) }
                }
                permissions<Allowed, Member>(refusedMessage = refused) { member ->
                    looked++
                    if (member.role == MemberRole.Admin) Allowed.entries.toSet() else setOf(Allowed.NotesRead)
                }
            }
            routing {
                post("/api/session/{id}") {
                    call.sessions.set(MemberSession(call.parameters["id"]!!.toInt()))
                    call.currentUserChanged()
                    call.respond(HttpStatusCode.NoContent)
                }
                get("/api/may") {
                    call.respond(Allowed.entries.map { "${it.name}=${call.can(it)}" } + "looked $looked time(s)")
                }
                delete("/api/notes/{id}") {
                    call.requirePermission(Allowed.NotesRead, Allowed.NotesDelete)
                    call.respond(HttpStatusCode.NoContent)
                }
                requires(Allowed.UsersManage) {
                    route("/api/admin") {
                        get("/users") { call.respond(listOf("Ada")) }
                        post("/users") { call.respond(HttpStatusCode.Created) }
                    }
                }
                requires(Allowed.NotesRead) {
                    get("/api/notes") { call.respond(listOf("a note")) }
                }
                get("/api/other") { call.respond(call.can(Other.Thing)) }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.signedIn(id: Int): HttpClient {
        val browser = createClient { install(HttpCookies) }
        browser.post("/api/session/$id") { header(HttpHeaders.Origin, "http://localhost") }
        return browser
    }

    @Test
    fun `a route can ask what the user may do, and the answer is worked out once per call`() =
        app {
            assertEquals(
                """["NotesRead=false","NotesDelete=false","UsersManage=false","looked 0 time(s)"]""",
                client.get("/api/may").bodyAsText(),
            )
            assertEquals(
                """["NotesRead=true","NotesDelete=false","UsersManage=false","looked 1 time(s)"]""",
                signedIn(2).get("/api/may").bodyAsText(),
            )
            assertEquals(
                """["NotesRead=true","NotesDelete=true","UsersManage=true","looked 2 time(s)"]""",
                signedIn(1).get("/api/may").bodyAsText(),
            )
        }

    @Test
    fun `a required permission answers 401 to a visitor and 403 to a user without it`() =
        app {
            val visitor = client.delete("/api/notes/4") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals(HttpStatusCode.Unauthorized, visitor.status)
            assertEquals("""{"message":"Sign in first."}""", visitor.bodyAsText())

            val member = signedIn(2).delete("/api/notes/4") { header(HttpHeaders.Origin, "http://localhost") }
            assertEquals(HttpStatusCode.Forbidden, member.status)
            assertEquals("""{"message":"You are not allowed to do that."}""", member.bodyAsText())

            assertEquals(
                HttpStatusCode.NoContent,
                signedIn(1).delete("/api/notes/4") { header(HttpHeaders.Origin, "http://localhost") }.status,
            )
        }

    @Test
    fun `routes inside requires are closed to everyone without the permission`() =
        app(refused = { call -> "Nur fuer Admins: ${call.request.local.uri}" }) {
            assertEquals(HttpStatusCode.Unauthorized, client.get("/api/admin/users").status)
            val member = signedIn(2)
            val refused = member.get("/api/admin/users")
            assertEquals(HttpStatusCode.Forbidden, refused.status)
            assertEquals("""{"message":"Nur fuer Admins: /api/admin/users"}""", refused.bodyAsText())
            assertEquals(
                HttpStatusCode.Forbidden,
                member.post("/api/admin/users") { header(HttpHeaders.Origin, "http://localhost") }.status,
            )
            assertEquals("""["a note"]""", member.get("/api/notes").bodyAsText())

            val admin = signedIn(1)
            assertEquals("""["Ada"]""", admin.get("/api/admin/users").bodyAsText())
            assertEquals(HttpStatusCode.Created, admin.post("/api/admin/users") { header(HttpHeaders.Origin, "http://localhost") }.status)
        }

    @Test
    fun `the current user endpoint lists the permissions, and they follow a change of user in the same call`() =
        app {
            assertEquals("""{"user":null,"sessionSeconds":null,"permissions":[]}""", client.get("/api/current-user").bodyAsText())
            assertContains(signedIn(2).get("/api/current-user").bodyAsText(), """"permissions":["NotesRead"]""")
            assertContains(signedIn(1).get("/api/current-user").bodyAsText(), """"permissions":["NotesDelete","NotesRead","UsersManage"]""")
        }

    @Test
    fun `the frontend gets the same list as a type and a can function`() =
        app {
            startApplication()
            val api = dir.resolve("src/lib/api")
            assertContains(
                api.resolve("types.ts").readText(),
                "export type Permission = 'NotesRead' | 'NotesDelete' | 'UsersManage';\n\n" +
                    "export const Permission = {\n    NotesRead: 'NotesRead',\n    NotesDelete: 'NotesDelete',\n    UsersManage: 'UsersManage',\n} as const;\n",
            )
            val store = api.resolve("current-user.svelte.ts").readText()
            assertContains(store, "import type { CurrentUser, Permission } from './types.js';\n")
            assertContains(store, "export const currentUser = userStore<CurrentUser, Permission>('/api/current-user', state);\n")
            assertContains(store, "export const can = (permission: Permission): boolean => currentUser.can(permission);\n")
        }

    @Test
    fun `a permission of another enum, or permissions without a user, are refused with a reason`() {
        app {
            assertEquals(HttpStatusCode.InternalServerError, client.get("/api/other").status)
        }
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    val build = fixtureBuild()
                    application {
                        install(Svelte) {
                            source = SvelteSource.Directory(build)
                            dev { mode = DevMode.Never }
                            permissions<Allowed, Member> { emptySet() }
                        }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "add currentUser<Member> { ... }")
    }
}
