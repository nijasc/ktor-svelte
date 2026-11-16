package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.typeScriptTemplate
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.install
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.put
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

@Serializable
data class VersionedNote(
    val title: String,
    val version: Long? = null,
)

class VersionConflictsTest {
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            var stored = VersionedNote("first", 1)
            var looked = 0
            application {
                install(ContentNegotiation) { json() }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    put("/api/note") {
                        val input = call.receive<VersionedNote>()
                        val stale =
                            call.respondIfStale(input.version, stored.version ?: 0) {
                                looked++
                                stored
                            }
                        if (stale) return@put
                        stored = VersionedNote(input.title, (stored.version ?: 0) + 1)
                        call.respond(stored)
                    }
                    put("/api/note/translated") {
                        val input = call.receive<VersionedNote>()
                        if (call.respondIfStale(input.version, stored.version ?: 0, "Jemand war schneller.") { stored }) return@put
                        call.respond(stored)
                    }
                    put("/api/looked") { call.respond(mapOf("looked" to looked)) }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.save(
        body: String,
        path: String = "/api/note",
    ) = client.put(path) {
        contentType(ContentType.Application.Json)
        setBody(body)
    }

    @Test
    fun `a write with the current version goes through and one with an old version is answered with the current record`() =
        app {
            val first = save("""{"title":"second","version":1}""")
            assertEquals(HttpStatusCode.OK, first.status)
            assertEquals("""{"title":"second","version":2}""", first.bodyAsText())

            val stale = save("""{"title":"mine","version":1}""")
            assertEquals(HttpStatusCode.Conflict, stale.status)
            assertEquals(
                """{"message":"Someone else changed this in the meantime.","code":"version.conflict","current":{"title":"second","version":2}}""",
                stale.bodyAsText(),
            )
            assertEquals("""{"title":"mine","version":3}""", save("""{"title":"mine","version":2}""").bodyAsText())
        }

    @Test
    fun `a write without a version is not checked, and the record is only looked up for a stale one`() =
        app {
            assertEquals(HttpStatusCode.OK, save("""{"title":"no version"}""").status)
            assertEquals("""{"looked":0}""", save("{}", "/api/looked").bodyAsText())
            assertEquals(HttpStatusCode.Conflict, save("""{"title":"old","version":1}""").status)
            assertEquals("""{"looked":1}""", save("{}", "/api/looked").bodyAsText())
        }

    @Test
    fun `the message can be the app's own`() =
        app {
            assertContains(
                save("""{"title":"x","version":9}""", "/api/note/translated").bodyAsText(),
                """"message":"Jemand war schneller."""",
            )
        }

    @Test
    fun `the client can tell a version conflict from other errors, and the form state keeps the current record`() {
        val client = typeScriptTemplate("client.ts")
        assertContains(client, "export function isVersionConflict<T = unknown>(error: unknown): error is ApiError<VersionConflict<T>> {")
        val form = typeScriptTemplate("form-state.svelte.ts")
        assertContains(form, "if (isVersionConflict(error)) conflict = error.body.current;")
        assertContains(form, "(draft as { version?: unknown }).version = theirs.version;")
        assertContains(form, "reset(next ?? (conflict as T));")
    }
}
