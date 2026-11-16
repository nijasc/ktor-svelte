package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.Begun
import io.github.nijasc.ktor.svelte.internal.IdempotencyStore
import io.github.nijasc.ktor.svelte.internal.StoredAnswer
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytesWriter
import io.ktor.server.response.respondText
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.writeStringUtf8
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import java.util.concurrent.atomic.AtomicInteger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertNull
import kotlin.time.Duration.Companion.minutes

class IdempotencyTest {
    private val made = AtomicInteger()
    private val gate = CompletableDeferred<Unit>()
    private val entered = CompletableDeferred<Unit>()

    private fun app(
        enabled: Boolean = true,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                if (enabled) idempotency { ttl = 5.minutes }
            }
            routing {
                post("/api/orders") {
                    val number = made.incrementAndGet()
                    call.response.header(HttpHeaders.Location, "/api/orders/$number")
                    call.response.header("X-Ktor-Svelte-Toast", "Order $number placed")
                    call.respondText("""{"order":$number}""", ContentType.Application.Json, HttpStatusCode.Created)
                }
                delete("/api/orders/{id}") {
                    made.incrementAndGet()
                    call.respond(HttpStatusCode.NoContent)
                }
                post("/api/broken") {
                    if (made.incrementAndGet() == 1) error("first try fails")
                    call.respondText("worked")
                }
                post("/api/slow") {
                    made.incrementAndGet()
                    entered.complete(Unit)
                    gate.await()
                    call.respondText("done")
                }
                post("/api/stream") {
                    val number = made.incrementAndGet()
                    call.respondBytesWriter(ContentType.Text.Plain) { writeStringUtf8("part $number") }
                }
                get("/api/orders") { call.respondText("list ${made.incrementAndGet()}") }
                post("/hooks/payment") { call.respondText("hook ${made.incrementAndGet()}") }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.order(
        key: String?,
        cookie: String? = null,
        path: String = "/api/orders",
    ): HttpResponse =
        client.post(path) {
            key?.let { header("Idempotency-Key", it) }
            cookie?.let { header(HttpHeaders.Cookie, it) }
        }

    @Test
    fun `a repeated key is answered with the first result, and the work is done once`() =
        app {
            val first = order("key-1")
            assertEquals(HttpStatusCode.Created, first.status)
            assertEquals("""{"order":1}""", first.bodyAsText())
            assertNull(first.headers["Idempotency-Replayed"])

            val again = order("key-1")
            assertEquals(HttpStatusCode.Created, again.status)
            assertEquals("""{"order":1}""", again.bodyAsText())
            assertEquals("true", again.headers["Idempotency-Replayed"])
            assertEquals("/api/orders/1", again.headers[HttpHeaders.Location])
            assertEquals("Order 1 placed", again.headers["X-Ktor-Svelte-Toast"])
            assertEquals("application/json", again.headers[HttpHeaders.ContentType]?.substringBefore(";"))
            assertEquals(1, made.get())

            assertEquals("""{"order":2}""", order("key-2").bodyAsText())
            assertEquals("""{"order":3}""", order(null).bodyAsText())
            assertEquals("""{"order":4}""", order(null).bodyAsText())
        }

    @Test
    fun `a key belongs to one caller, one method and one path`() =
        app {
            assertEquals("""{"order":1}""", order("shared", cookie = "session=ada").bodyAsText())
            assertEquals("""{"order":2}""", order("shared", cookie = "session=grace").bodyAsText())
            assertEquals("""{"order":1}""", order("shared", cookie = "session=ada").bodyAsText())
            assertEquals(HttpStatusCode.NoContent, client.delete("/api/orders/1") { header("Idempotency-Key", "shared") }.status)
            assertEquals(HttpStatusCode.NoContent, client.delete("/api/orders/1") { header("Idempotency-Key", "shared") }.status)
            assertEquals(3, made.get())
        }

    @Test
    fun `a failed try is not kept, so the retry does the work`() =
        app {
            assertEquals(HttpStatusCode.InternalServerError, order("retry", path = "/api/broken").status)
            val second = order("retry", path = "/api/broken")
            assertEquals("worked", second.bodyAsText())
            assertNull(second.headers["Idempotency-Replayed"])
            assertEquals("worked", order("retry", path = "/api/broken").bodyAsText())
            assertEquals(2, made.get())
        }

    @Test
    fun `a repeat that arrives while the first is still running is told so`() =
        app {
            coroutineScope {
                val first = async { order("slow", path = "/api/slow") }
                entered.await()
                val during = order("slow", path = "/api/slow")
                assertEquals(HttpStatusCode.Conflict, during.status)
                assertEquals("""{"message":"This request is still being handled.","code":"idempotency.inProgress"}""", during.bodyAsText())
                gate.complete(Unit)
                assertEquals("done", first.await().bodyAsText())
            }
            assertEquals("done", order("slow", path = "/api/slow").bodyAsText())
            assertEquals(1, made.get())
        }

    @Test
    fun `reads, routes outside the API and answers that are streamed are left alone`() =
        app {
            assertEquals("list 1", client.get("/api/orders") { header("Idempotency-Key", "k") }.bodyAsText())
            assertEquals("list 2", client.get("/api/orders") { header("Idempotency-Key", "k") }.bodyAsText())
            assertEquals("hook 3", order("k", path = "/hooks/payment").bodyAsText())
            assertEquals("hook 4", order("k", path = "/hooks/payment").bodyAsText())
            assertEquals("part 5", order("k", path = "/api/stream").bodyAsText())
            assertEquals("part 6", order("k", path = "/api/stream").bodyAsText())
        }

    @Test
    fun `without the setting, keys are ignored`() =
        app(enabled = false) {
            assertEquals("""{"order":1}""", order("key").bodyAsText())
            assertEquals("""{"order":2}""", order("key").bodyAsText())
        }

    @Test
    fun `answers are forgotten after their time, and the oldest make room when the store is full`() {
        var now = 0L
        val store = IdempotencyStore(ttlMillis = 1000, maxEntries = 2) { now }
        val answer = StoredAnswer(HttpStatusCode.OK, null, emptyList(), ByteArray(0))
        assertIs<Begun.Fresh>(store.begin("a"))
        assertIs<Begun.InProgress>(store.begin("a"))
        store.finish("a", answer)
        assertIs<Begun.Replay>(store.begin("a"))
        now = 1001
        assertIs<Begun.Fresh>(store.begin("a"))
        store.finish("a", answer)

        assertIs<Begun.Fresh>(store.begin("b"))
        assertIs<Begun.Fresh>(store.begin("c"))
        assertEquals(2, store.size)
        assertIs<Begun.Fresh>(store.begin("a"))
        store.finish("c", null)
        assertIs<Begun.Fresh>(store.begin("c"))
    }
}
