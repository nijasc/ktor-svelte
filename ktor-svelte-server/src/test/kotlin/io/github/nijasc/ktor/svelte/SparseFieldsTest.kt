package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import io.ktor.client.request.get
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.OpenApiDoc
import io.ktor.openapi.OpenApiInfo
import io.ktor.openapi.jsonSchema
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.OpenApiDocSource
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

@Serializable
data class Card(
    val id: Int,
    val title: String,
    val body: String,
    @SerialName("due_on") val dueOn: String? = null,
)

@OptIn(ExperimentalKtorApi::class)
class SparseFieldsTest {
    private val cards = listOf(Card(1, "One", "first body", "2026-12-01"), Card(2, "Two", "second body"))

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    transport { json() }
                }
                routing {
                    route("/api/cards") {
                        get { call.respond(cards) }.sparseFields<Card>().describe {
                            responses { HttpStatusCode.OK { schema = jsonSchema<List<Card>>() } }
                        }
                        get("/{id}") { call.respond(cards.first()) }.sparseFields<Card>()
                        getPage<Card>("/paged") { Page(cards, "2") }.sparseFields<Card>()
                    }
                    get("/api/plain") { call.respond(cards) }
                }
            }
            block()
        }

    private suspend fun HttpResponse.json() = Json.parseToJsonElement(bodyAsText())

    @Test
    fun `asked fields are the only ones sent, for a list, one object and a page`() =
        app {
            assertEquals(
                """[{"id":1,"title":"One"},{"id":2,"title":"Two"}]""",
                client.get("/api/cards?fields=id,title").bodyAsText(),
            )
            assertEquals("""{"title":"One","due_on":"2026-12-01"}""", client.get("/api/cards/1?fields=title&fields=due_on").bodyAsText())
            val page = client.get("/api/cards/paged?fields=title").json() as JsonObject
            assertEquals("""[{"title":"One"},{"title":"Two"}]""", page.getValue("items").toString())
            assertEquals("\"2\"", page.getValue("next").toString())
        }

    @Test
    fun `without fields everything is sent, and routes that declare nothing ignore fields`() =
        app {
            val whole = client.get("/api/cards").bodyAsText()
            assertContains(whole, "\"body\":\"first body\"")
            assertEquals(whole, client.get("/api/plain?fields=id").bodyAsText())
        }

    @Test
    fun `a field the route does not have is refused with the fields it has`() =
        app {
            val wrong = client.get("/api/cards?fields=id,secret")
            assertEquals(HttpStatusCode.BadRequest, wrong.status)
            assertContains(wrong.bodyAsText(), "secret is not a field of Card. Ask for id, title, body, due_on.")
            val empty = client.get("/api/cards?fields=")
            assertEquals(HttpStatusCode.BadRequest, empty.status)
            assertContains(empty.bodyAsText(), "fields names the fields to send")
        }

    @Test
    fun `the generated call takes the fields and narrows its return type to them`() =
        app {
            startApplication()
            val openApi =
                OpenApiDocSource
                    .Routing(schemaInference = BrandedSchemaInference)
                    .read(application, OpenApiDoc(info = OpenApiInfo(title = "API", version = "1")))
                    .content
            val services = TypeScriptGenerator(listOf("/api")).generate(openApi, emptyMap()).getValue("services.ts")
            assertContains(
                services,
                "export const cardsList: {\n" +
                    "    <F extends 'id' | 'title' | 'body' | 'due_on' = 'id' | 'title' | 'body' | 'due_on'>" +
                    "(query?: { fields?: readonly F[] }, options?: RequestOptions): Promise<Pick<Card, F>[]>;\n" +
                    "    (query?: { fields?: readonly ('id' | 'title' | 'body' | 'due_on')[] }, " +
                    "options?: RequestOptions): Promise<Card[]>;\n" +
                    "} = (query?: { fields?: readonly ('id' | 'title' | 'body' | 'due_on')[] }, options?: RequestOptions) => " +
                    "request<Card[]>('GET', '/api/cards', { ...options, query, operation: 'cards.list' });",
            )
            assertContains(services, "items: Pick<Card, F>[];")
        }
}
