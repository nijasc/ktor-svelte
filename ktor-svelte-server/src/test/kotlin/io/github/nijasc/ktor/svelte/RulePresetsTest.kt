package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.github.nijasc.ktor.svelte.internal.validation.RulePreset
import io.github.nijasc.ktor.svelte.internal.validation.RulePresets
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.ReferenceOr
import io.ktor.server.application.install
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlin.reflect.typeOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Serializable
data class Account(
    @Rule.Email val email: String,
    @Rule.StrongPassword val password: String,
    @Rule.WebAddress val homepage: String? = null,
    @Rule.Phone val phone: String? = null,
    @Rule.Slug val handle: String = "me",
)

class RulePresetsTest {
    private fun RulePreset.accepts(text: String): Boolean = checks.all { Regex(it.pattern).containsMatchIn(text) }

    @Test
    fun `each preset accepts what it should and refuses what it should not`() {
        val cases =
            mapOf(
                RulePresets.email to
                    (listOf("ada@example.com", "a.b+c@mail.co.uk") to listOf("ada", "ada@", "@example.com", "a b@c.de", "ada@example")),
                RulePresets.webAddress to
                    (
                        listOf("https://example.com", "http://example.com/path?q=1") to
                            listOf("example.com", "ftp://example.com", "https://", "https://a b.de")
                    ),
                RulePresets.phone to (listOf("+49 30 1234567", "030/1234567", "(030) 123-45") to listOf("12", "phone", "+49 30 12x4567")),
                RulePresets.slug to (listOf("hello", "hello-world-2") to listOf("Hello", "hello--world", "-hello", "hello_world", "")),
                RulePresets.strongPassword to
                    (listOf("Correct1horse", "Aaaaaaaaa1") to listOf("short1A", "alllowercase1", "ALLUPPERCASE1", "NoDigitsHereAtAll")),
            )
        cases.forEach { (preset, examples) ->
            examples.first.forEach { assertTrue(preset.accepts(it), "${preset.format} should accept '$it'") }
            examples.second.forEach { assertFalse(preset.accepts(it), "${preset.format} should refuse '$it'") }
        }
    }

    @Test
    fun `the server refuses a value that breaks a preset, with the preset's message`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    transport { json() }
                }
                routing { post("/api/accounts") { call.respond(call.receive<Account>()) } }
            }
            val refused =
                client.post("/api/accounts") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"email":"ada","password":"short","homepage":"example.com","phone":"12","handle":"Ada Lovelace"}""")
                }
            assertEquals(HttpStatusCode.UnprocessableEntity, refused.status)
            assertEquals(
                """{"message":"Validation failed","fields":{"email":["${RulePresets.email.message}"],""" +
                    """"password":["${RulePresets.strongPassword.message}"],"homepage":["${RulePresets.webAddress.message}"],""" +
                    """"phone":["${RulePresets.phone.message}"],"handle":["${RulePresets.slug.message}"]}}""",
                refused.bodyAsText(),
            )
            val accepted =
                client.post("/api/accounts") {
                    contentType(ContentType.Application.Json)
                    setBody("""{"email":"ada@example.com","password":"Correct1horse"}""")
                }
            assertEquals(HttpStatusCode.OK, accepted.status)
        }

    @Test
    fun `the schema names each preset as the property's format`() {
        val properties = BrandedSchemaInference.buildSchema(typeOf<Account>()).properties.orEmpty()

        fun format(name: String) = (properties.getValue(name) as ReferenceOr.Value<JsonSchema>).value.format
        assertEquals("email", format("email"))
        assertEquals("strong-password", format("password"))
        assertEquals("uri", format("homepage"))
        assertEquals("phone", format("phone"))
        assertEquals("slug", format("handle"))
    }
}
