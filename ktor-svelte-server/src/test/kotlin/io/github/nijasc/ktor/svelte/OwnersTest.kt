package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.nio.file.Files
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

data class Draft(
    val id: Int,
    val ownerId: Int,
    val text: String,
)

class OwnersTest {
    private val drafts = mapOf(1 to Draft(1, 7, "mine"), 2 to Draft(2, 8, "theirs"))

    private fun ownerApp(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    currentUser<Member> { request.headers["X-User"]?.toIntOrNull()?.let { Member(it, "Someone") } }
                }
                routing {
                    get("/api/drafts/{id}") {
                        val draft =
                            call.requireOwner(drafts[call.pathParameter<Int>("id")]) { user: Member, draft ->
                                draft.ownerId ==
                                    user.id
                            }
                        call.respondText(draft.text)
                    }.ownerChecked()
                    get("/api/open/{id}") {
                        val draft =
                            call.requireOwner(drafts[call.pathParameter<Int>("id")], OtherOwner.Forbidden) { user: Member, draft ->
                                draft.ownerId == user.id
                            }
                        call.respondText(draft.text)
                    }
                }
            }
            block()
        }

    @Test
    fun `the owner gets the record, anybody else gets a 404 as if it did not exist`() =
        ownerApp {
            assertEquals("mine", client.get("/api/drafts/1") { header("X-User", "7") }.bodyAsText())
            val theirs = client.get("/api/drafts/2") { header("X-User", "7") }
            assertEquals(HttpStatusCode.NotFound, theirs.status)
            assertEquals("""{"message":"This does not exist."}""", theirs.bodyAsText())
            assertEquals(HttpStatusCode.NotFound, client.get("/api/drafts/3") { header("X-User", "7") }.status)
            assertEquals(HttpStatusCode.Unauthorized, client.get("/api/drafts/1").status)
        }

    @Test
    fun `a route can say forbidden instead, and a missing record is still a 404`() =
        ownerApp {
            assertEquals(HttpStatusCode.Forbidden, client.get("/api/open/2") { header("X-User", "7") }.status)
            assertEquals(HttpStatusCode.NotFound, client.get("/api/open/3") { header("X-User", "7") }.status)
            assertEquals("theirs", client.get("/api/open/2") { header("X-User", "8") }.bodyAsText())
        }

    @Test
    fun `ownerChecked tells the generated client which errors to expect`() {
        val frontend = Files.createTempDirectory("ktor-svelte-frontend")
        frontend.resolve("package.json").writeText("{}")
        val output = frontend.resolve("src/lib/api").createDirectories()
        testApplication {
            serverConfig { developmentMode = true }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = output.toString()
                }
                routing { get("/api/drafts/{id}") { call.respondText("x") }.ownerChecked() }
            }
            startApplication()
        }
        val services = output.resolve("services.ts").readText()
        assertContains(services, "'drafts.get': [401, 403, 404]")
    }
}
