package io.github.nijasc.ktor.svelte

import io.ktor.client.request.patch
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.jsonSchema
import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.install
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.patch
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Serializable
data class PatchedNote(
    @Trim
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(20)
    val title: String,
    val text: String = "",
    val dueOn: String? = null,
    val stars: Int = 0,
    val tags: List<String> = emptyList(),
) : Validated {
    override fun Validator.rules() {
        check(::stars, stars in 0..5) { "Give 0 to 5 stars." }
    }
}

class PatchTest {
    @TempDir
    lateinit var dir: Path

    @OptIn(io.ktor.utils.io.ExperimentalKtorApi::class)
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            var stored = PatchedNote("Shopping", "milk", "2026-12-24", 3, listOf("home"))
            application {
                install(ContentNegotiation) { json() }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                }
                routing {
                    patch("/api/note") {
                        val patch = call.receive<Patch<PatchedNote>>()
                        stored = patch.applyTo(stored)
                        call.respond(stored)
                    }.describe {
                        requestBody { schema = jsonSchema<Patch<PatchedNote>>() }
                        responses { HttpStatusCode.OK { schema = jsonSchema<PatchedNote>() } }
                    }
                    patch("/api/note/fields") {
                        val patch = call.receive<Patch<PatchedNote>>()
                        val asked = listOf(PatchedNote::title in patch, PatchedNote::dueOn in patch, patch.has("stars"), patch.isEmpty())
                        call.respondText("${patch.fields.sorted()} $asked")
                    }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.send(
        body: String,
        path: String = "/api/note",
    ) = client.patch(path) {
        contentType(ContentType.Application.Json)
        setBody(body)
    }

    @Test
    fun `a field that is not sent stays, a field set to null is cleared, and the rest is replaced`() =
        app {
            assertEquals(
                """{"title":"Shopping","text":"milk","dueOn":"2026-12-24","stars":4,"tags":["home"]}""",
                send("""{"stars":4}""").bodyAsText(),
            )
            assertEquals(
                """{"title":"Shopping","text":"milk","stars":4,"tags":[]}""",
                send("""{"dueOn":null,"tags":[]}""").bodyAsText().replace(""""dueOn":null,""", ""),
            )
            assertEquals("""{"title":"Shopping","text":"milk","dueOn":null,"stars":4,"tags":[]}""", send("{}").bodyAsText())
        }

    @Test
    fun `the route can ask which fields were sent`() =
        app {
            assertEquals(
                "[dueOn, title] [true, true, false, false]",
                send("""{"title":"x","dueOn":null}""", "/api/note/fields").bodyAsText(),
            )
            assertEquals("[] [false, false, false, true]", send("{}", "/api/note/fields").bodyAsText())
        }

    @Test
    fun `a patch that names an unknown field, nulls a required one or has the wrong type is a bad request`() =
        app {
            val unknown = send("""{"titel":"typo"}""")
            assertEquals(HttpStatusCode.BadRequest, unknown.status)
            val required = send("""{"title":null}""")
            assertEquals(HttpStatusCode.BadRequest, required.status)
            val wrongType = send("""{"stars":"many"}""")
            assertEquals(HttpStatusCode.BadRequest, wrongType.status)
            assertEquals(HttpStatusCode.BadRequest, send("""["title"]""").status)
            assertContains(send("{}").bodyAsText(), """"title":"Shopping"""")
        }

    @Test
    fun `the patched result is normalised and validated like a received object`() =
        app {
            assertContains(send("""{"title":"  Trimmed  "}""").bodyAsText(), """"title":"Trimmed"""")
            val tooLong = send("""{"title":"${"x".repeat(21)}"}""")
            assertEquals(HttpStatusCode.UnprocessableEntity, tooLong.status)
            assertContains(tooLong.bodyAsText(), """"title":[""")
            val rule = send("""{"stars":9}""")
            assertEquals(HttpStatusCode.UnprocessableEntity, rule.status)
            assertContains(rule.bodyAsText(), "Give 0 to 5 stars.")
            assertContains(send("{}").bodyAsText(), """"stars":3""")
        }

    @Test
    fun `a patch is written as the fields it holds, and only classes can be patched`() {
        val serializer = PatchSerializer(PatchedNote.serializer())
        val patch = Json.decodeFromString(serializer, """{"dueOn":null,"stars":2}""")
        assertEquals("""{"dueOn":null,"stars":2}""", Json.encodeToString(serializer, patch))
        assertEquals(PatchedNote("A", stars = 2), patch.applyTo(PatchedNote("A", dueOn = "2026-01-01")))
        assertTrue(serializer.descriptor.isElementOptional(0))
        assertFailsWith<IllegalArgumentException> { PatchSerializer(kotlinx.serialization.serializer<String>()) }
    }

    @Test
    fun `the generated function takes the fields as optional, and null only where the class allows it`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(
                services,
                "export const notePatch = (body: {\n    title?: string;\n    text?: string;\n    dueOn?: string | null;\n" +
                    "    stars?: number;\n    tags?: string[];\n}, options?: RequestOptions) => request<PatchedNote>('PATCH', '/api/note',",
            )
            assertFalse("Patch<" in services)
            val client = dir.resolve("src/lib/api/client.ts").readText()
            assertContains(client, "export type Patch<T> = { [K in keyof T]?: T[K] };")
            assertContains(client, "export function patchOf<T extends object>(before: T, after: T): Patch<T> {")
        }
}
