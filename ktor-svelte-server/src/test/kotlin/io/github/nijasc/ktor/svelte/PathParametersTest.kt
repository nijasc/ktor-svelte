package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

enum class Shelf { Inbox, Archive }

class PathParametersTest {
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    transport { json() }
                }
                routing {
                    get("/api/notes/{id}") { call.respondText("note ${call.pathParameter<Int>("id") + 1}") }
                    get("/api/big/{id}") { call.respondText("big ${call.pathParameter<Long>("id")}") }
                    get("/api/files/{id}") { call.respondText("file ${call.pathParameter<UUID>("id").version()}") }
                    get("/api/shelves/{shelf}") { call.respondText("shelf ${call.pathParameter<Shelf>("shelf")}") }
                    get("/api/tags/{name}") { call.respondText("tag ${call.pathParameter<String>("name")}") }
                    get("/api/wrong/{id}") { call.respondText(call.pathParameter<Int>("noteId").toString()) }
                    get("/api/odd/{id}") { call.respondText(call.pathParameter<Double>("id").toString()) }
                }
            }
            block()
        }

    @Test
    fun `a parameter arrives in the type that was asked for`() =
        app {
            assertEquals("note 8", client.get("/api/notes/7").bodyAsText())
            assertEquals("big 9000000000", client.get("/api/big/9000000000").bodyAsText())
            assertEquals("file 4", client.get("/api/files/3f2b8c1e-5d47-4a1b-9c3e-8a7d6f5e4b3c").bodyAsText())
            assertEquals("shelf Archive", client.get("/api/shelves/archive").bodyAsText())
            assertEquals("tag kotlin", client.get("/api/tags/kotlin").bodyAsText())
        }

    @Test
    fun `a value that does not fit answers 404 before the route does any work`() =
        app {
            listOf(
                "/api/notes/abc",
                "/api/notes/1.5",
                "/api/notes/99999999999",
                "/api/big/x",
                "/api/files/not-a-uuid",
                "/api/files/1-1-1-1-1",
                "/api/shelves/cellar",
            ).forEach { path ->
                val response = client.get(path)
                assertEquals(HttpStatusCode.NotFound, response.status, path)
                assertContains(response.bodyAsText(), "Nothing is at $path.", message = path)
            }
        }

    @Test
    fun `a mistake in the route itself is a server error, not a missing page`() =
        app {
            assertEquals(HttpStatusCode.InternalServerError, client.get("/api/wrong/1").status)
            assertEquals(HttpStatusCode.InternalServerError, client.get("/api/odd/1").status)
        }
}
