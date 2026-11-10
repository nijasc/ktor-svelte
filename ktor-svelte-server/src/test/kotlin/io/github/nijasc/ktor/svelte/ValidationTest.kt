package io.github.nijasc.ktor.svelte

import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.openapi.JsonSchema
import io.ktor.server.application.install
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@Serializable
data class SignUp(
    val email: String,
    val password: String,
    val repeated: String,
) : Validated {
    override fun Validator.rules() {
        check(::email, "@" in email) { "Enter a valid email." }
        check(::repeated, password == repeated) { "Passwords do not match." }
    }
}

@Serializable
data class Line(
    @JsonSchema.Pattern("^[a-z]+$")
    val sku: String,
    @JsonSchema.Minimum(1.0)
    @JsonSchema.Maximum(10.0, exclusive = true)
    val quantity: Int,
)

@Serializable
data class Order(
    @JsonSchema.MinLength(2)
    @JsonSchema.MaxLength(5)
    val name: String,
    val lines: List<Line> = emptyList(),
    val note: String? = null,
) : Validated {
    override fun Validator.rules() {
        check(::name, name != "admin") { "Pick another name." }
    }
}

class ValidationTest {
    private fun dtoTest(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    transport { json() }
                }
                routing {
                    post("/api/signup") { call.respond(call.receive<SignUp>()) }
                    post("/api/plain") { call.respond(call.receive<Greeting>()) }
                    post("/api/order") { call.respond(call.receive<Order>()) }
                }
            }
            block()
        }

    @Test
    fun `rules on the dto run on every receive`() =
        dtoTest {
            val response =
                client.post("/api/signup") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"email":"nope","password":"a","repeated":"b"}""")
                }
            assertEquals(HttpStatusCode.UnprocessableEntity, response.status)
            assertEquals(
                """{"message":"Validation failed","fields":{"email":["Enter a valid email."],"repeated":["Passwords do not match."]}}""",
                response.bodyAsText(),
            )
        }

    @Test
    fun `valid dto reaches the route`() =
        dtoTest {
            val response =
                client.post("/api/signup") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"email":"a@b.c","password":"a","repeated":"a"}""")
                }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `classes without rules are untouched`() =
        dtoTest {
            val response =
                client.post("/api/plain") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"message":" "}""")
                }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `schema annotations are enforced with nested paths`() =
        dtoTest {
            val response =
                client.post("/api/order") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"name":"x","lines":[{"sku":"ok","quantity":1},{"sku":"NO","quantity":10}]}""")
                }
            assertEquals(HttpStatusCode.UnprocessableEntity, response.status)
            assertEquals(
                """{"message":"Validation failed","fields":{"name":["Must be at least 2 characters."],""" +
                    """"lines[1].sku":["Must match ^[a-z]+$."],"lines[1].quantity":["Must be less than 10."]}}""",
                response.bodyAsText(),
            )
        }

    @Test
    fun `schema annotations and rules report together`() =
        dtoTest {
            val response =
                client.post("/api/order") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"name":"admin","lines":[{"sku":"a","quantity":0}]}""")
                }
            assertEquals(
                """{"message":"Validation failed","fields":{"lines[0].quantity":["Must be at least 1."],"name":["Pick another name."]}}""",
                response.bodyAsText(),
            )
        }

    @Test
    fun `values within the schema bounds reach the route`() =
        dtoTest {
            val response =
                client.post("/api/order") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"name":"abc","lines":[{"sku":"a","quantity":9}]}""")
                }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    private fun validationTest(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    transport { json() }
                }
                routing {
                    post("/api/greeting") {
                        val input = call.receive<Greeting>()
                        validate {
                            check("message", input.message.isNotBlank()) { "A message is required." }
                        }
                        call.respond(input)
                    }
                }
            }
            block()
        }

    @Test
    fun `failed rules answer 422 with field errors`() =
        validationTest {
            val response =
                client.post("/api/greeting") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"message":" "}""")
                }
            assertEquals(HttpStatusCode.UnprocessableEntity, response.status)
            assertContains(response.headers[HttpHeaders.ContentType].orEmpty(), "application/json")
            assertEquals("""{"message":"Validation failed","fields":{"message":["A message is required."]}}""", response.bodyAsText())
        }

    @Test
    fun `passing rules continue to the route`() =
        validationTest {
            val response =
                client.post("/api/greeting") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"message":"hi"}""")
                }
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `one field can collect several errors`() {
        val failure =
            assertFailsWith<ValidationException> {
                validate {
                    check("a", false) { "one" }
                    check("a", false) { "two" }
                    check("b", true) { "never" }
                }
            }
        assertEquals(mapOf("a" to listOf("one", "two")), failure.fields)
    }
}
