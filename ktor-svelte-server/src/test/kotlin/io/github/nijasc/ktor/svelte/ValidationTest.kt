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
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class ValidationTest {
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
