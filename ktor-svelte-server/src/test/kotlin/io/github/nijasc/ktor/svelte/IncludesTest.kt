package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import io.ktor.client.request.get
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
import kotlinx.serialization.Serializable
import java.util.concurrent.atomic.AtomicInteger
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@Serializable
data class Author(
    val id: Int,
    val name: String,
)

@Serializable
data class Post(
    val id: Int,
    val title: String,
    val authorId: Int,
)

@OptIn(ExperimentalKtorApi::class)
class IncludesTest {
    private val authors = mapOf(1 to Author(1, "Ada"), 2 to Author(2, "Grace"))
    private val posts = listOf(Post(10, "Hello", 1), Post(11, "Again", 2), Post(12, "Orphan", 9))
    private val lookups = AtomicInteger()

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    transport { json() }
                }
                routing {
                    route("/api/posts") {
                        get { call.respond(posts) }
                            .includes<Post> {
                                relation<Author?>("author") { items ->
                                    lookups.incrementAndGet()
                                    items.map { authors[it.authorId] }
                                }
                                relation<List<String>>("tags") { items -> items.map { listOf("t${it.id}") } }
                            }.sparseFields<Post>()
                            .describe { responses { HttpStatusCode.OK { schema = jsonSchema<List<Post>>() } } }
                        get("/{id}") { call.respond(posts.first()) }.includes<Post> {
                            relation<Author?>("author") { items -> items.map { authors[it.authorId] } }
                        }
                        getPage<Post>("/paged") { Page(posts.take(1), null) }.includes<Post> {
                            relation<Author?>("author") { items -> items.map { authors[it.authorId] } }
                        }
                    }
                }
            }
            block()
        }

    @Test
    fun `asked relations are added to each item, from one call of the resolver`() =
        app {
            assertEquals(
                """[{"id":10,"title":"Hello","authorId":1,"author":{"id":1,"name":"Ada"}},""" +
                    """{"id":11,"title":"Again","authorId":2,"author":{"id":2,"name":"Grace"}},""" +
                    """{"id":12,"title":"Orphan","authorId":9,"author":null}]""",
                client.get("/api/posts?include=author").bodyAsText(),
            )
            assertEquals(1, lookups.get())
            assertEquals(
                """{"id":10,"title":"Hello","authorId":1,"author":{"id":1,"name":"Ada"}}""",
                client.get("/api/posts/10?include=author").bodyAsText(),
            )
            assertContains(
                client.get("/api/posts/paged?include=author").bodyAsText(),
                """"items":[{"id":10,"title":"Hello","authorId":1,"author":{"id":1""",
            )
        }

    @Test
    fun `relations combine with sparse fields, and nothing is added or looked up unless asked`() =
        app {
            assertEquals(
                """[{"title":"Hello","tags":["t10"]},{"title":"Again","tags":["t11"]},{"title":"Orphan","tags":["t12"]}]""",
                client.get("/api/posts?fields=title&include=tags").bodyAsText(),
            )
            assertEquals(false, "\"author\":" in client.get("/api/posts").bodyAsText())
            assertEquals(0, lookups.get())
        }

    @Test
    fun `a relation the route does not have is refused with the ones it has`() =
        app {
            val wrong = client.get("/api/posts?include=editor")
            assertEquals(HttpStatusCode.BadRequest, wrong.status)
            assertContains(wrong.bodyAsText(), "editor is not a relation of Post. Ask for author, tags.")
        }

    @Test
    fun `a relation may not be named like a field`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                testApplication {
                    application {
                        install(Svelte) { dev { mode = DevMode.Never } }
                        routing { get("/api/x") { }.includes<Post> { relation<String>("title") { items -> items.map { "" } } } }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "'title' is already a field of Post")
    }

    @Test
    fun `the generated call adds a relation to the type only when it is asked for`() =
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
                "<F extends 'id' | 'title' | 'authorId' = 'id' | 'title' | 'authorId', I extends 'author' | 'tags' = never>",
            )
            assertContains(services, "include?: readonly I[]")
            assertContains(services, "Promise<(Pick<Post, F> & Pick<{ author: ")
            assertContains(services, "tags: string[] }, I>)[]>;")
            assertContains(services, "include?: readonly ('author' | 'tags')[]")
        }
}
