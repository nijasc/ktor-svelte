package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

enum class QueryStatus { OPEN, DONE }

@JvmInline
@Serializable
value class QueryOwner(
    val value: Long,
)

@Serializable
data class NoteQuery(
    val search: String? = null,
    val status: QueryStatus? = null,
    val owner: QueryOwner? = null,
    val mine: Boolean = false,
    @JsonSchema.Minimum(1.0)
    @JsonSchema.Maximum(50.0)
    val limit: Int = 20,
    val ratio: Double? = null,
    val tags: List<String> = emptyList(),
    val year: Int,
) : Validated {
    override fun Validator.rules() {
        check(::search, search == null || search.length >= 2) { "Type at least 2 letters." }
    }
}

@Serializable
data class NestedQuery(
    val inner: NoteQuery,
)

class QueriesTest {
    @TempDir
    lateinit var dir: Path

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
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
                routing {
                    get("/api/notes") { call.respondText(call.query<NoteQuery>().toString()) }.queryOf<NoteQuery>()
                }
            }
            block()
        }

    @Test
    fun `the query string becomes the class, with types converted and defaults filled in`() =
        app {
            assertEquals(
                "NoteQuery(search=null, status=null, owner=null, mine=false, limit=20, ratio=null, tags=[], year=2026)",
                client.get("/api/notes?year=2026").bodyAsText(),
            )
            assertEquals(
                "NoteQuery(search=milk tea, status=DONE, owner=QueryOwner(value=7), mine=true, limit=5, ratio=0.5, tags=[a, b], year=2026)",
                client
                    .get(
                        "/api/notes?search=milk%20tea&status=DONE&owner=7&mine=true&limit=5&ratio=0.5&tags=a&tags=b&year=2026&utm=x",
                    ).bodyAsText(),
            )
            assertContains(client.get("/api/notes?year=2026&search=&status=").bodyAsText(), "search=null, status=null")
        }

    @Test
    fun `a value of the wrong type or a missing one is a 422 that names the field`() =
        app {
            val wrong = client.get("/api/notes?year=soon&limit=many&mine=yes&status=CLOSED&ratio=x")
            assertEquals(HttpStatusCode.UnprocessableEntity, wrong.status)
            val body = wrong.bodyAsText()
            assertContains(body, """"year":["Must be a whole number."]""")
            assertContains(body, """"limit":["Must be a whole number."]""")
            assertContains(body, """"mine":["Must be true or false."]""")
            assertContains(body, """"status":["Must be one of OPEN, DONE."]""")
            assertContains(body, """"ratio":["Must be a number."]""")
            assertContains(client.get("/api/notes").bodyAsText(), """"year":["Is required."]""")
        }

    @Test
    fun `annotations and rules apply as they do to a request body`() =
        app {
            val tooMany = client.get("/api/notes?year=2026&limit=500")
            assertEquals(HttpStatusCode.UnprocessableEntity, tooMany.status)
            assertContains(tooMany.bodyAsText(), """"limit":[""")
            assertContains(client.get("/api/notes?year=2026&search=a").bodyAsText(), "Type at least 2 letters.")
        }

    @Test
    fun `a class that a query string cannot hold is refused when the route is declared`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                testApplication {
                    application { routing { get("/api/nested") { call.respondText("x") }.queryOf<NestedQuery>() } }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "A query string cannot hold a io.github.nijasc.ktor.svelte.NoteQuery.")
    }

    @Test
    fun `the generated function takes the same fields with their types`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(
                services,
                "query: { search?: string; status?: Status; owner?: number; mine?: boolean; limit?: number; ratio?: number; tags?: string[]; year: number }",
            )
            assertContains(
                dir.resolve("src/lib/api/types.ts").readText(),
                "export const Status = {\n    OPEN: 'OPEN',\n    DONE: 'DONE',\n} as const;",
            )
        }
}
