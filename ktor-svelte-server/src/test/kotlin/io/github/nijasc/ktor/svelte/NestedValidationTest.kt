package io.github.nijasc.ktor.svelte

import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.openapi.JsonSchema
import io.ktor.server.application.install
import io.ktor.server.request.receive
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonObject
import kotlin.test.Test
import kotlin.test.assertEquals

@Serializable
data class Seat(
    @JsonSchema.Minimum(1.0)
    val row: Int,
    val label: String = "a",
) : Validated {
    override fun Validator.rules() {
        check(::label, label != "x") { "No seat x." }
    }
}

@Serializable
sealed interface Shape

@Serializable
data class Circle(
    @JsonSchema.Minimum(1.0)
    val radius: Int,
) : Shape

@Serializable
enum class Level { LOW, HIGH }

@JvmInline
@Serializable
value class Code(
    val value: String,
)

@Serializable
data class Mixed(
    val extra: JsonObject = JsonObject(emptyMap()),
    @JsonSchema.Minimum(5.0)
    val level: Level = Level.LOW,
    @JsonSchema.MaxLength(2)
    val note: String? = null,
    @JsonSchema.MaxLength(3)
    val code: Code = Code("a"),
    @JsonSchema.Maximum(1.0)
    val counts: List<Int> = emptyList(),
    val seat: Seat = Seat(1),
)

@Serializable
data class Booking(
    val seats: List<Seat> = emptyList(),
    val byName: Map<String, Seat> = emptyMap(),
    val main: Seat? = null,
    val shape: Shape? = null,
)

class NestedValidationTest {
    private fun nestedTest(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    transport { json() }
                }
                routing {
                    post("/api/booking") { call.respondText("ok ${call.receive<Booking>().seats.size}") }
                    post("/api/seats") { call.respondText("ok ${call.receive<List<Seat>>().size}") }
                    post("/api/mixed") { call.respondText("ok ${call.receive<Mixed>().level}") }
                    post("/api/seat-map") { call.respondText("ok ${call.receive<Map<String, Seat>>().size}") }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.send(
        path: String,
        body: String,
    ): HttpResponse =
        client.post(path) {
            contentType(ContentType.Application.Json)
            setBody(body)
        }

    private suspend fun assertFields(
        response: HttpResponse,
        fields: String,
    ) {
        assertEquals(HttpStatusCode.UnprocessableEntity, response.status)
        assertEquals("""{"message":"Validation failed","fields":$fields}""", response.bodyAsText())
    }

    @Test
    fun `rules of nested objects run with their path`() =
        nestedTest {
            assertFields(
                send("/api/booking", """{"seats":[{"row":1},{"row":2,"label":"x"}],"main":{"row":1,"label":"x"}}"""),
                """{"seats[1].label":["No seat x."],"main.label":["No seat x."]}""",
            )
        }

    @Test
    fun `map values are checked with the key in the path`() =
        nestedTest {
            assertFields(
                send("/api/booking", """{"byName":{"ann":{"row":0},"bob":{"row":1,"label":"x"}}}"""),
                """{"byName[ann].row":["Must be at least 1."],"byName[bob].label":["No seat x."]}""",
            )
        }

    @Test
    fun `sealed values are checked as their concrete type`() =
        nestedTest {
            assertFields(
                send("/api/booking", """{"shape":{"type":"io.github.nijasc.ktor.svelte.Circle","radius":0}}"""),
                """{"shape.radius":["Must be at least 1."]}""",
            )
        }

    @Test
    fun `a received list is checked item by item`() =
        nestedTest {
            assertFields(
                send("/api/seats", """[{"row":1},{"row":0,"label":"x"}]"""),
                """{"[1].row":["Must be at least 1."],"[1].label":["No seat x."]}""",
            )
        }

    @Test
    fun `a received map is checked value by value`() =
        nestedTest {
            assertFields(send("/api/seat-map", """{"a":{"row":0}}"""), """{"[a].row":["Must be at least 1."]}""")
        }

    @Test
    fun `json fields, enums, nullable and value class properties are handled`() =
        nestedTest {
            assertFields(
                send("/api/mixed", """{"extra":{"a":[1]},"level":"HIGH","note":"abc","code":"abcd","counts":[1,2],"seat":{"row":0}}"""),
                """{"note":["Must be at most 2 characters."],"code":["Must be at most 3 characters."],"seat.row":["Must be at least 1."]}""",
            )
            assertEquals(HttpStatusCode.OK, send("/api/mixed", """{"note":null,"extra":{"b":"x"}}""").status)
        }

    @Test
    fun `valid nested values reach the route`() =
        nestedTest {
            val response = send("/api/booking", """{"seats":[{"row":1}],"byName":{"a":{"row":2}},"main":{"row":3}}""")
            assertEquals("ok 1", response.bodyAsText())
        }
}
