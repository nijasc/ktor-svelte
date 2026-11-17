package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.SourceLocation
import io.github.nijasc.ktor.svelte.internal.typescript.routeSources
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import java.nio.file.Files
import java.util.concurrent.CopyOnWriteArrayList
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@Serializable
data class Entry(
    val id: Int,
    val title: String,
)

class PagedRoutesTest {
    private val entries = (1..250).map { Entry(it, "Entry $it") }
    private val counted =
        java.util.concurrent.atomic
            .AtomicInteger()

    private fun pageAfter(request: PageRequest): Page<Entry> {
        val after = request.cursor?.toIntOrNull() ?: 0
        val rest = entries.filter { it.id > after }
        val items = rest.take(request.limit)
        return Page(
            items,
            items
                .lastOrNull()
                ?.id
                ?.toString()
                ?.takeIf { rest.size > items.size },
        )
    }

    private fun pagedApp(
        seen: MutableList<PageRequest> = CopyOnWriteArrayList(),
        block: suspend ApplicationTestBuilder.(MutableList<PageRequest>) -> Unit,
    ) = testApplication {
        application {
            install(Svelte) {
                source = SvelteSource.Directory(fixtureBuild())
                dev { mode = DevMode.Never }
                transport { json() }
            }
            routing {
                route("/api/entries") {
                    getPage<Entry> { request ->
                        seen += request
                        pageAfter(request)
                    }
                    getPage<Entry>("/few", defaultLimit = 2, maxLimit = 5) { request ->
                        seen += request
                        pageAfter(request)
                    }
                    getPage<Entry>("/counted") { request ->
                        seen += request
                        val page = pageAfter(request)
                        Page(page.items, page.next, request.total { counted.incrementAndGet().let { entries.size.toLong() } })
                    }
                }
            }
        }
        block(seen)
    }

    @Test
    fun `a paged route answers a page and says where the next one starts`() =
        pagedApp { seen ->
            val first = client.get("/api/entries?limit=2")
            assertEquals(HttpStatusCode.OK, first.status)
            assertEquals("""{"items":[{"id":1,"title":"Entry 1"},{"id":2,"title":"Entry 2"}],"next":"2"}""", first.bodyAsText())
            assertEquals(
                """{"items":[{"id":250,"title":"Entry 250"}]}""",
                client.get("/api/entries?cursor=249").bodyAsText().replace(""","next":null""", ""),
            )
            assertEquals(listOf(PageRequest(null, 2), PageRequest("249", 50)), seen.toList())
        }

    @Test
    fun `the total is only counted when the client asks for it`() =
        pagedApp { seen ->
            val plain = client.get("/api/entries/counted?limit=1").bodyAsText()
            assertEquals(false, "total" in plain)
            assertEquals(0, counted.get())
            assertEquals(false, seen.last().wantsTotal)
            val counting = client.get("/api/entries/counted?limit=1&total=true").bodyAsText()
            assertContains(counting, "\"total\":250")
            assertEquals(1, counted.get())
            assertEquals(true, seen.last().wantsTotal)
            client.get("/api/entries/counted?limit=1&total=no")
            assertEquals(1, counted.get())
        }

    @Test
    fun `the limit falls back to the default and never leaves its bounds`() =
        pagedApp { seen ->
            listOf("", "?limit=abc", "?limit=0", "?limit=-3", "?limit=5000", "?limit=7&cursor=").forEach { client.get("/api/entries$it") }
            assertEquals(listOf(50, 50, 1, 1, 100, 7), seen.map { it.limit })
            assertEquals(listOf<String?>(null, null, null, null, null, null), seen.map { it.cursor })
            seen.clear()
            listOf("", "?limit=4", "?limit=9").forEach { client.get("/api/entries/few$it") }
            assertEquals(listOf(2, 4, 5), seen.map { it.limit })
        }

    @Test
    fun `a paged route is fully typed in the generated client without the compiler plugin`() {
        val frontend = Files.createTempDirectory("ktor-svelte-paged-frontend")
        frontend.resolve("package.json").writeText("{}")
        val output = frontend.resolve("src/lib/api")
        testApplication {
            serverConfig { developmentMode = true }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    generateTs = true
                    generateTsOutput = output.toString()
                    transport { json() }
                    dev { mode = DevMode.Never }
                }
                routing {
                    route("/api/entries") {
                        getPage<Entry> { pageAfter(it) }
                    }
                }
            }
            startApplication()
        }
        val services = output.resolve("services.ts").readText()
        assertContains(
            services,
            "export const entriesList = (query?: { cursor?: string; limit?: string; total?: boolean }, options?: RequestOptions) => request<",
        )
        assertContains(services, "items: Entry[];")
        assertContains(output.resolve("types.ts").readText(), "export interface Entry {")
    }

    @Test
    fun `a paged route is found in the file that declares it`() =
        testApplication {
            var source: SourceLocation? = null
            application {
                val root = routing { getPage<Entry>("/api/entries") { pageAfter(it) } }
                source = routeSources(root as RoutingNode)["GET /api/entries"]
            }
            startApplication()
            assertEquals("io/github/nijasc/ktor/svelte/PagedRoutesTest.kt", source?.file)
        }

    @Test
    fun `a largest limit below one is refused when the route is declared`() {
        val failure =
            assertFailsWith<IllegalArgumentException> {
                testApplication {
                    application {
                        routing { getPage<Entry>("/api/broken", maxLimit = 0) { pageAfter(it) } }
                    }
                    startApplication()
                }
            }
        assertContains(failure.message.orEmpty(), "maxLimit must be at least 1")
    }
}
