package io.github.nijasc.ktor.svelte

import io.ktor.client.HttpClient
import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.post
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
import kotlin.io.path.exists
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class GuardsTest {
    @TempDir
    lateinit var dir: Path

    private fun app(
        login: String? = "/login",
        withPermissions: Boolean = true,
        guarded: SvelteGuardsConfig.() -> Unit = {
            signedIn("/board", "/tasks/")
            permission(Allowed.UsersManage, "/admin")
            signedIn("/admin/help")
        },
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
                apiPrefixes("/api", "/rpc")
                loginPage = login
                currentUser<Member> {
                    sessions.get<MemberSession>()?.let { Member(it.id, "Ada", if (it.id == 1) MemberRole.Admin else MemberRole.Member) }
                }
                if (withPermissions) {
                    permissions<Allowed, Member> { member -> if (member.role == MemberRole.Admin) Allowed.entries.toSet() else emptySet() }
                }
                guards(guarded)
            }
            routing {
                post("/api/session/{id}") {
                    call.sessions.set(MemberSession(call.parameters["id"]!!.toInt()))
                    call.respond(HttpStatusCode.NoContent)
                }
                listOf(
                    "/api/tasks",
                    "/api/tasks/4/comments",
                    "/rpc/tasks",
                    "/api/admin/users",
                    "/api/admin/help",
                    "/api/administrators",
                ).forEach { path ->
                    get(path) { call.respond(listOf(path)) }
                }
                get("/api/greeting") { call.respond(listOf("hello")) }
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
    fun `the API under a guarded page is closed to visitors, under every API prefix`() =
        app {
            val closed = listOf("/api/tasks", "/api/tasks/4/comments", "/rpc/tasks", "/api/admin/users", "/api/admin/help", "/api/board")
            closed.forEach { path ->
                val refused = client.get(path)
                assertEquals(HttpStatusCode.Unauthorized, refused.status, path)
                assertEquals("""{"message":"Sign in first."}""", refused.bodyAsText(), path)
            }
            assertEquals("""["hello"]""", client.get("/api/greeting").bodyAsText())
            assertEquals("""["/api/administrators"]""", client.get("/api/administrators").bodyAsText(), "another name that starts the same")
        }

    @Test
    fun `a signed-in user gets through, and a permission guard asks for the permission`() =
        app {
            val member = signedIn(2)
            assertEquals("""["/api/tasks/4/comments"]""", member.get("/api/tasks/4/comments").bodyAsText())
            val refused = member.get("/api/admin/users")
            assertEquals(HttpStatusCode.Forbidden, refused.status)
            assertEquals("""{"message":"You are not allowed to do that."}""", refused.bodyAsText())
            assertEquals("""["/api/admin/help"]""", member.get("/api/admin/help").bodyAsText(), "the guard of the deeper page decides")
            assertEquals("""["/api/admin/users"]""", signedIn(1).get("/api/admin/users").bodyAsText())
        }

    @Test
    fun `the frontend gets the same pages as a layout guard`() =
        app {
            startApplication()
            val api = dir.resolve("src/lib/api")
            assertEquals(
                "import { error, redirect } from '@sveltejs/kit';\n" +
                    "import { loginPath, matchGuard, type PageGuard } from './client.js';\n" +
                    "import { currentUser } from './current-user.svelte.js';\n" +
                    "import type { CurrentUser, Permission } from './types.js';\n\n" +
                    "export const pageGuards: readonly PageGuard<Permission>[] = [\n" +
                    "    { page: '/admin', permission: 'UsersManage' },\n" +
                    "    { page: '/admin/help' },\n" +
                    "    { page: '/board' },\n" +
                    "    { page: '/tasks' },\n" +
                    "];\n\n" +
                    "export async function signedInUser(url: URL): Promise<CurrentUser> {\n" +
                    "    const user = await currentUser.load();\n" +
                    "    if (!user) redirect(307, loginPath(url));\n" +
                    "    return user;\n" +
                    "}\n\n" +
                    "export async function guardPages(event: { url: URL }): Promise<void> {\n" +
                    "    const guard = matchGuard(pageGuards, event.url.pathname);\n" +
                    "    if (!guard || typeof document === 'undefined') return;\n" +
                    "    await signedInUser(event.url);\n" +
                    "    if (guard.permission && !currentUser.can(guard.permission)) " +
                    "error(403, 'You are not allowed to see this page.');\n" +
                    "}\n",
                api.resolve("guards.ts").readText(),
            )
            assertContains(api.resolve("index.ts").readText(), "export * from './guards.js';\n")
            assertContains(api.resolve(".gitattributes").readText(), "guards.ts ")
        }

    @Test
    fun `without a login page the guard answers 401, and without permissions it only asks for a user`() =
        app(login = null, withPermissions = false, guarded = { signedIn("/board") }) {
            startApplication()
            val guards = dir.resolve("src/lib/api/guards.ts").readText()
            assertContains(guards, "import { error } from '@sveltejs/kit';\n")
            assertContains(guards, "import { matchGuard, type PageGuard } from './client.js';\n")
            assertContains(guards, "import type { CurrentUser } from './types.js';\n")
            assertContains(guards, "export const pageGuards: readonly PageGuard<never>[] = [\n    { page: '/board' },\n];\n")
            assertContains(guards, "    if (!user) error(401, 'Sign in first.');\n")
            assertFalse("guard.permission" in guards)
        }

    @Test
    fun `no guards, no file`() =
        app(guarded = {}) {
            startApplication()
            assertFalse(dir.resolve("src/lib/api/guards.ts").exists())
            assertEquals("""["/api/tasks"]""", client.get("/api/tasks").bodyAsText())
        }

    @Test
    fun `guards are refused when they cannot work`() {
        listOf("/", "admin", "/tasks/[id]", "/a?b=1", "https://other.example/admin").forEach { page ->
            val failure = assertFailsWith<IllegalArgumentException>(page) { app(guarded = { signedIn(page) }) { startApplication() } }
            assertContains(failure.message.orEmpty(), "guards takes the path of a page and everything below it")
        }
        val twice = assertFailsWith<IllegalArgumentException> { app(guarded = { signedIn("/board", "/board/") }) { startApplication() } }
        assertContains(twice.message.orEmpty(), "The page '/board' is guarded twice.")
        val noPermissions =
            assertFailsWith<IllegalStateException> {
                app(withPermissions = false, guarded = { permission(Allowed.UsersManage, "/admin") }) { startApplication() }
            }
        assertContains(noPermissions.message.orEmpty(), "so it needs permissions<Allowed, User> { ... }")
        val otherEnum =
            assertFailsWith<IllegalStateException> { app(guarded = { permission(Other.Thing, "/admin") }) { startApplication() } }
        assertContains(otherEnum.message.orEmpty(), "but permissions are declared as Allowed")
    }
}
