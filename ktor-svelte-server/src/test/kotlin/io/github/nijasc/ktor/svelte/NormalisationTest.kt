package io.github.nijasc.ktor.svelte

import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.openapi.JsonSchema
import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.install
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

@JvmInline
@Serializable
value class NormalisedEmail(
    @Trim @Lowercase val value: String,
)

@Serializable
data class NormalisedAddress(
    @Trim val city: String,
    val street: String,
)

@Serializable
sealed interface NormalisedContact {
    @Serializable
    @SerialName("phone")
    data class Phone(
        @Trim val number: String,
    ) : NormalisedContact

    @Serializable
    @SerialName("post")
    data class Post(
        val address: NormalisedAddress,
    ) : NormalisedContact
}

@Serializable
data class NormalisedSignUp(
    @Trim @Lowercase val username: String,
    @Trim @EmptyAsNull val nickname: String? = null,
    @EmptyAsNull val referral: String? = "none",
    val password: String,
    val email: NormalisedEmail? = null,
    @Trim @Lowercase val tags: List<String> = emptyList(),
    @Trim val labels: Map<String, String> = emptyMap(),
    val address: NormalisedAddress? = null,
    val contacts: List<NormalisedContact> = emptyList(),
    val age: Int = 0,
)

@Serializable
data class NormalisedTitle(
    @Trim
    @JsonSchema.MinLength(3)
    val title: String,
) : Validated {
    override fun Validator.rules() {
        check(::title, title == title.trim()) { "The rule saw untrimmed text." }
    }
}

@Serializable
data class UntouchedText(
    val text: String,
)

class NormalisationTest {
    private val json = Json { encodeDefaults = true }

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(ContentNegotiation) { json() }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    post(
                        "/api/sign-up",
                    ) { call.respondText(json.encodeToString(call.receive<NormalisedSignUp>()), ContentType.Application.Json) }
                    post(
                        "/api/sign-ups",
                    ) { call.respondText(json.encodeToString(call.receive<List<NormalisedSignUp>>()), ContentType.Application.Json) }
                    post("/api/titled") { call.respond(call.receive<NormalisedTitle>()) }
                    post("/api/untouched") { call.respondText(call.receive<UntouchedText>().text) }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.send(
        path: String,
        body: String,
    ) = client.post(path) {
        contentType(ContentType.Application.Json)
        setBody(body)
    }

    private suspend fun ApplicationTestBuilder.signUp(body: String): NormalisedSignUp =
        json.decodeFromString(send("/api/sign-up", body).bodyAsText())

    @Test
    fun `text is trimmed and lowercased where the field asks for it`() =
        app {
            val received = signUp("""{"username":"  Ada.Lovelace ","password":"  Keep Me  "}""")
            assertEquals("ada.lovelace", received.username)
            assertEquals("  Keep Me  ", received.password)
        }

    @Test
    fun `empty text becomes null, also after trimming`() =
        app {
            val received = signUp("""{"username":"ada","password":"x","nickname":"   ","referral":""}""")
            assertEquals(null, received.nickname)
            assertEquals(null, received.referral)
            val kept = signUp("""{"username":"ada","password":"x","nickname":" Countess ","referral":" "}""")
            assertEquals("Countess", kept.nickname)
            assertEquals(" ", kept.referral)
        }

    @Test
    fun `lists, maps, nested classes, value classes and sealed subtypes are reached`() =
        app {
            val received =
                signUp(
                    """
                    {"username":"ada","password":"x","email":"  Ada@Example.COM ","tags":[" Math","ENGINE "],
                     "labels":{" Key ":" value "},"address":{"city":" London ","street":" 12 St "},
                     "contacts":[{"type":"phone","number":" 555 "},{"type":"post","address":{"city":" Paris","street":" Rue "}}],
                     "age":36}
                    """.trimIndent(),
                )
            assertEquals(NormalisedEmail("ada@example.com"), received.email)
            assertEquals(listOf("math", "engine"), received.tags)
            assertEquals(mapOf(" Key " to "value"), received.labels)
            assertEquals(NormalisedAddress("London", " 12 St "), received.address)
            assertEquals(
                listOf(NormalisedContact.Phone("555"), NormalisedContact.Post(NormalisedAddress("Paris", " Rue "))),
                received.contacts,
            )
            assertEquals(36, received.age)
        }

    @Test
    fun `a received list is normalised item by item`() =
        app {
            val body = send("/api/sign-ups", """[{"username":" A ","password":"x"},{"username":"B","password":"y"}]""").bodyAsText()
            assertEquals(listOf("a", "b"), json.decodeFromString<List<NormalisedSignUp>>(body).map { it.username })
        }

    @Test
    fun `validation sees the normalised value`() =
        app {
            val tooShort = send("/api/titled", """{"title":"  ab   "}""")
            assertEquals(HttpStatusCode.UnprocessableEntity, tooShort.status)
            assertContains(tooShort.bodyAsText(), "Must be at least 3 characters.")
            val fine = send("/api/titled", """{"title":"  abc   "}""")
            assertEquals(HttpStatusCode.OK, fine.status)
            assertEquals("""{"title":"abc"}""", fine.bodyAsText())
        }

    @Test
    fun `a body that is not JSON is left for the app to refuse, and other classes are not touched`() =
        app {
            assertEquals(HttpStatusCode.BadRequest, send("/api/sign-up", """{"username": """).status)
            assertEquals(HttpStatusCode.BadRequest, send("/api/sign-up", """{"username":"","password":"x","age":"old"}""").status)
            assertEquals("  as sent  ", send("/api/untouched", """{"text":"  as sent  "}""").bodyAsText())
        }

    @Test
    fun `text that is not on an annotated field keeps its type and value`() =
        app {
            val received = signUp("""{"username":"ada","password":"x","nickname":null,"tags":[],"age":7}""")
            assertEquals(null, received.nickname)
            assertEquals("none", received.referral)
            assertEquals(7, received.age)
        }
}
