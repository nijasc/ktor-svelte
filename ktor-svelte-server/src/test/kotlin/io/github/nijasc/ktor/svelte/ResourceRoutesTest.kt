package io.github.nijasc.ktor.svelte

import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.contentType
import io.ktor.server.application.install
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
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

@Serializable
data class Book(
    val id: Int,
    val title: String,
)

@Serializable
data class BookInput(
    val title: String,
)

@Serializable
data class BookQuery(
    val search: String? = null,
    val limit: Int = 10,
)

@Serializable
data class Tag(
    val name: String,
)

class ResourceRoutesTest {
    @TempDir
    lateinit var dir: Path

    private val books = mutableMapOf(1 to Book(1, "Dune"), 2 to Book(2, "Emma"))

    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                    transport { json() }
                }
                routing {
                    resource<Book, Int>("/api/books") {
                        list<BookQuery> { query ->
                            books.values.filter { query.search == null || query.search in it.title }.take(query.limit)
                        }
                        get { id -> books[id] }
                        create<BookInput> { input -> Book(books.size + 1, input.title).also { books[it.id] = it } }
                        update<BookInput> { id, input -> books[id]?.copy(title = input.title)?.also { books[id] = it } }
                        delete { id -> books.remove(id) != null }
                    }
                    resource<Tag>("/api/tags") {
                        list { listOf(Tag("fiction")) }
                        get { name -> Tag(name).takeIf { name == "fiction" } }
                    }
                }
            }
            block()
        }

    private fun io.ktor.client.request.HttpRequestBuilder.json(body: String) {
        header(HttpHeaders.Origin, "http://localhost")
        contentType(ContentType.Application.Json)
        setBody(body)
    }

    @Test
    fun `the five blocks answer on the conventional paths with the conventional statuses`() =
        app {
            assertEquals("""[{"id":1,"title":"Dune"},{"id":2,"title":"Emma"}]""", client.get("/api/books").bodyAsText())
            assertEquals("""{"id":2,"title":"Emma"}""", client.get("/api/books/2").bodyAsText())

            val created = client.post("/api/books") { json("""{"title":"Ulysses"}""") }
            assertEquals(HttpStatusCode.Created, created.status)
            assertEquals("""{"id":3,"title":"Ulysses"}""", created.bodyAsText())

            val updated = client.put("/api/books/3") { json("""{"title":"Odyssey"}""") }
            assertEquals(HttpStatusCode.OK, updated.status)
            assertEquals("""{"id":3,"title":"Odyssey"}""", updated.bodyAsText())

            assertEquals(HttpStatusCode.NoContent, client.delete("/api/books/3") { header(HttpHeaders.Origin, "http://localhost") }.status)
            assertEquals(listOf(1, 2), books.keys.toList())
        }

    @Test
    fun `what is not there, or has an id of the wrong kind, is a 404`() =
        app {
            assertEquals(HttpStatusCode.NotFound, client.get("/api/books/9").status)
            assertEquals(HttpStatusCode.NotFound, client.get("/api/books/abc").status)
            assertEquals(HttpStatusCode.NotFound, client.put("/api/books/9") { json("""{"title":"x"}""") }.status)
            assertEquals(HttpStatusCode.NotFound, client.delete("/api/books/9") { header(HttpHeaders.Origin, "http://localhost") }.status)
            assertEquals(HttpStatusCode.NotFound, client.get("/api/tags/poetry").status)
            assertEquals("""{"name":"fiction"}""", client.get("/api/tags/fiction").bodyAsText())
        }

    @Test
    fun `a list can take its query as a class, and a block that is left out is no route`() =
        app {
            assertEquals("""[{"id":1,"title":"Dune"}]""", client.get("/api/books?search=un").bodyAsText())
            assertEquals("""[{"id":1,"title":"Dune"}]""", client.get("/api/books?limit=1").bodyAsText())
            assertFalse(client.post("/api/tags") { json("""{"name":"x"}""") }.status.value < 400)
        }

    @Test
    fun `the generated client has the same five names with the types of the blocks`() =
        app {
            startApplication()
            val services = dir.resolve("src/lib/api/services.ts").readText()
            assertContains(
                services,
                "export const booksList = (query?: { search?: string; limit?: number }, options?: RequestOptions) =>",
            )
            assertContains(services, "request<Book[]>('GET', '/api/books'")
            assertContains(
                services,
                "export const booksGet = (id: number, options?: RequestOptions) => request<Book>('GET', `/api/books/\${encodeURIComponent(id)}`",
            )
            assertContains(
                services,
                "export const booksCreate = (body: BookInput, options?: RequestOptions) => request<Book>('POST', '/api/books'",
            )
            assertContains(services, "export const booksUpdate = (id: number, body: BookInput, options?: RequestOptions) =>")
            assertContains(
                services,
                "export const booksDelete = (id: number, options?: RequestOptions) => request<void>('DELETE', `/api/books/",
            )
            assertContains(services, "export const tagsGet = (id: string | number, options?: RequestOptions) => request<Tag>(")
            assertFalse("Resources.kt" in services, "every function points at the app's own file")
            assertFalse("tagsCreate" in services)
            val types = dir.resolve("src/lib/api/types.ts").readText()
            assertContains(types, "export interface Book {\n    id: number;\n    title: string;\n}")
            assertContains(types, "export interface BookInput {\n    title: string;\n}")
        }

    @Test
    fun `a block cannot be declared twice`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    val build = fixtureBuild()
                    application {
                        install(Svelte) {
                            source = SvelteSource.Directory(build)
                            dev { mode = DevMode.Never }
                        }
                        routing {
                            resource<Tag>("/api/tags") {
                                list { emptyList() }
                                list { emptyList() }
                            }
                        }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "resource: list is declared twice.")
    }
}
