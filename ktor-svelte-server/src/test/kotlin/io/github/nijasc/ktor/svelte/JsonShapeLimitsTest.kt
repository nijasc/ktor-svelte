package io.github.nijasc.ktor.svelte

import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.request.receive
import io.ktor.server.request.receiveText
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlin.test.Test
import kotlin.test.assertEquals

@Serializable
data class Comment(
    val text: String,
    val tags: List<String> = emptyList(),
)

class JsonShapeLimitsTest {
    private fun shaped(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                transport { json() }
                config()
            }
            routing {
                post("/api/comments") { call.respondText("got ${call.receive<Comment>().text.length}") }
                post("/api/any") { call.respondText("depth ok ${call.receive<JsonElement>().toString().length}") }
                post("/upload") { call.respondText("raw ${call.receiveText().length}") }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.postJson(
        path: String,
        json: String,
    ) = client.post(path) {
        contentType(ContentType.Application.Json)
        setBody(json)
    }

    private fun nested(levels: Int) = "[".repeat(levels) + "]".repeat(levels)

    @Test
    fun `deeply nested JSON is refused before it is parsed`() =
        shaped {
            assertEquals(HttpStatusCode.OK, postJson("/api/any", nested(64)).status)
            val refused = postJson("/api/any", nested(65))
            assertEquals(HttpStatusCode.BadRequest, refused.status)
            assertEquals("{\"message\":\"Request JSON is nested deeper than 64 levels.\"}", refused.bodyAsText())
        }

    @Test
    fun `brackets and escaped quotes inside strings do not count`() =
        shaped({ maxJsonDepth = 2 }) {
            val response = postJson("/api/comments", """{"text":"[[[{{{ \" ]]] \\","tags":["a"]}""")
            assertEquals(HttpStatusCode.OK, response.status)
        }

    @Test
    fun `long strings are refused when a limit is set`() =
        shaped({ maxJsonStringLength = 10 }) {
            assertEquals("got 10", postJson("/api/comments", """{"text":"0123456789"}""").bodyAsText())
            assertEquals("got 10", postJson("/api/comments", """{"text":"ääääääääää"}""").bodyAsText())
            val refused = postJson("/api/comments", """{"text":"0123456789X"}""")
            assertEquals(HttpStatusCode.BadRequest, refused.status)
            assertEquals("{\"message\":\"Request JSON has a string longer than 10 characters.\"}", refused.bodyAsText())
        }

    @Test
    fun `paths outside the API and other content types are not scanned`() =
        shaped({ maxJsonDepth = 1 }) {
            assertEquals("raw 20", postJson("/upload", nested(10)).bodyAsText())
        }

    @Test
    fun `limits can be turned off`() =
        shaped({ maxJsonDepth = null }) {
            assertEquals(HttpStatusCode.OK, postJson("/api/any", nested(200)).status)
        }

    @Test
    fun `large valid bodies still arrive whole`() =
        shaped {
            val text = "x".repeat(200_000)
            assertEquals("got 200000", postJson("/api/comments", """{"text":"$text"}""").bodyAsText())
        }
}
