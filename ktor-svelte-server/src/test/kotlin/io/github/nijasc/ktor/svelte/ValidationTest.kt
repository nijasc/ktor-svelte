package io.github.nijasc.ktor.svelte

import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
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
        check("email", "@" in email) { "Enter a valid email." }
        check("repeated", password == repeated) { "Passwords do not match." }
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
