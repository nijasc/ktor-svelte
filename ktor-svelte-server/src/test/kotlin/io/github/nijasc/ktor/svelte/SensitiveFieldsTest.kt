package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.SensitiveFields
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.prepareGet
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsChannel
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.install
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.readUTF8Line
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.serializer
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

@Serializable
data class Credentials(
    val email: String,
    @Sensitive val password: String,
    val device: Device? = null,
)

@Serializable
data class Device(
    val name: String,
    @Sensitive
    @SerialName("push_token")
    val pushToken: String,
)

@Serializable
data class Session(
    val user: String,
    @Sensitive val apiKey: String,
)

class SensitiveFieldsTest {
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(ContentNegotiation) { json() }
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
                routing {
                    post("/api/login") {
                        val credentials = call.receive<Credentials>()
                        call.respond(Session(credentials.email, "key-123"))
                    }
                    get("/api/reset") { call.respondText("done") }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.sensitive() = client.get("/_ktor-svelte/dev/sensitive")

    @Test
    fun `nothing is known before a class with a sensitive field was received or sent`() =
        app {
            assertEquals("[]", sensitive().bodyAsText())
            assertEquals("no-store", sensitive().headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `the names of sensitive fields are learned from what the app receives and answers`() =
        app {
            client.post("/api/login") {
                contentType(ContentType.Application.Json)
                setBody("""{"email":"ada@example.com","password":"hunter2"}""")
            }
            assertEquals("""["apiKey","password","push_token"]""", sensitive().bodyAsText())
            val remote = client.get("/_ktor-svelte/dev/sensitive") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }

    @Test
    fun `a query parameter with a sensitive name is masked in the request list`() =
        app {
            client.post("/api/login") {
                contentType(ContentType.Application.Json)
                setBody("""{"email":"ada@example.com","password":"hunter2"}""")
            }
            client.get("/api/reset?user=ada&PASSWORD=hunter2&next=%2Fboard")
            val lines =
                client.prepareGet("/_ktor-svelte/dev/requests").execute { response ->
                    val channel = response.bodyAsChannel()
                    repeat(3) { channel.readUTF8Line() }
                    List(3) { channel.readUTF8Line().orEmpty() }
                }
            assertContains(lines[2], "\"path\":\"/api/reset?user=ada&PASSWORD=***&next=%2Fboard\"")
            assertFalse(lines.any { "hunter2" in it })
        }

    @Test
    fun `query strings are only touched where a name matches`() {
        val fields = SensitiveFields()
        assertEquals("/api/reset?token=abc", fields.maskQuery("/api/reset?token=abc"))
        fields.learnFrom(serializer<Device>().descriptor)
        assertEquals(setOf("push_token"), fields.names)
        assertEquals("/api/x?a=1&push_token=***&b=2#top", fields.maskQuery("/api/x?a=1&push_token=abc&b=2#top"))
        assertEquals("/api/x?push_token=***", fields.maskQuery("/api/x?push_token="))
        assertEquals("/api/x?push_tokens=abc", fields.maskQuery("/api/x?push_tokens=abc"))
        assertEquals("/api/push_token/abc", fields.maskQuery("/api/push_token/abc"))
    }
}
