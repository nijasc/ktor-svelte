package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.PayloadField
import io.github.nijasc.ktor.svelte.internal.dev.largestFields
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.prepareGet
import io.ktor.client.statement.bodyAsChannel
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.readUTF8Line
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.long
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull

class PayloadSizesTest {
    private val notes =
        buildString {
            append("{\"total\":40,\"items\":[")
            append((1..40).joinToString(",") { "{\"id\":$it,\"body\":\"${"x".repeat(1000)}\"}" })
            append("]}")
        }

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
                routing {
                    get("/api/notes") { call.respondText(notes, ContentType.Application.Json) }
                    get("/api/text") { call.respondText("hello") }
                    get("/api/empty") { call.respond(HttpStatusCode.NoContent) }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.entries(count: Int): List<JsonObject> =
        client.prepareGet("/_ktor-svelte/dev/requests").execute { response ->
            val channel = response.bodyAsChannel()
            repeat(3) { channel.readUTF8Line() }
            List(count) {
                val line = channel.readUTF8Line().orEmpty()
                channel.readUTF8Line()
                Json.parseToJsonElement(line.removePrefix("data: ")).jsonObject
            }
        }

    @Test
    fun `each API call in the dev panel carries its size and its largest fields, before compression`() =
        app {
            val compressed = client.get("/api/notes") { header(HttpHeaders.AcceptEncoding, "gzip") }
            assertEquals("gzip", compressed.headers[HttpHeaders.ContentEncoding])
            client.get("/api/text")
            client.get("/api/empty")
            val (json, text, empty) = entries(3)

            val size = json.getValue("size").jsonObject
            assertEquals(notes.length.toLong(), size.getValue("bytes").jsonPrimitive.long)
            val fields = size.getValue("fields").jsonArray.map { it.jsonObject }
            assertEquals(listOf("items", "items[].body", "items[].id"), fields.map { it.getValue("name").jsonPrimitive.content })
            assertEquals(40, fields[0].getValue("items").jsonPrimitive.int)
            assertEquals(40 * 1002, fields[1].getValue("bytes").jsonPrimitive.int)

            val textSize = text.getValue("size").jsonObject
            assertEquals(5L, textSize.getValue("bytes").jsonPrimitive.long)
            assertFalse("fields" in textSize)
            assertEquals(
                0L,
                empty
                    .getValue("size")
                    .jsonObject
                    .getValue("bytes")
                    .jsonPrimitive.long,
            )
        }

    @Test
    fun `the largest fields add up the fields of every item of a list`() {
        val list = Json.parseToJsonElement("""[{"name":"a","tags":["x","y"]},{"name":"bb","tags":[]}]""")
        assertEquals(
            listOf(PayloadField("[].tags", 11, 2), PayloadField("[].name", 7, null)),
            largestFields(list),
        )
        assertEquals(emptyList(), largestFields(Json.parseToJsonElement("42")))
        assertNull(largestFields(Json.parseToJsonElement("""{"a":1}""")).single().items)
    }
}
