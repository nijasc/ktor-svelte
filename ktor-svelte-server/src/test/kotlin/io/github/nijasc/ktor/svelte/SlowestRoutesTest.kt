package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.RouteTimes
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.coroutines.delay
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.double
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class SlowestRoutesTest {
    @Test
    fun `the dev panel ranks the routes by the time they took in all, with calls to one route counted together`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
                routing {
                    route("/api/notes") {
                        get("/{id}") {
                            delay(60)
                            call.respondText("note")
                        }
                    }
                    get("/api/fast") { call.respondText("fast") }
                    get("/api/broken") { error("broken") }
                }
            }
            client.get("/api/notes/1")
            client.get("/api/notes/2")
            client.get("/api/fast")
            client.get("/api/broken")
            client.get("/about")

            val response = client.get("/_ktor-svelte/dev/slowest")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val ranking = Json.parseToJsonElement(response.bodyAsText()).jsonObject
            assertEquals(3, ranking.getValue("routes").jsonPrimitive.int)
            val slowest = ranking.getValue("slowest").jsonArray.map { it.jsonObject }
            val first = slowest.first()
            assertEquals("GET", first.getValue("method").jsonPrimitive.content)
            assertEquals("/api/notes/{id}", first.getValue("path").jsonPrimitive.content)
            assertEquals(2, first.getValue("calls").jsonPrimitive.int)
            assertTrue(first.getValue("totalMs").jsonPrimitive.double >= 120.0)
            assertTrue(first.getValue("slowestMs").jsonPrimitive.double >= 60.0)
            assertFalse("failed" in first)
            val broken = slowest.single { it.getValue("path").jsonPrimitive.content == "/api/broken" }
            assertEquals(1, broken.getValue("failed").jsonPrimitive.int)

            val remote = client.get("/_ktor-svelte/dev/slowest") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }

    @Test
    fun `averages and the slowest call are kept per route`() {
        val times = RouteTimes()
        times.record("POST /api/a", 10.0, 200)
        times.record("POST /api/a", 30.0, 500)
        times.record("GET /api/b", 5.0, 200)
        val first =
            times
                .ranking()
                .getValue("slowest")
                .jsonArray
                .first()
                .jsonObject
        assertEquals("/api/a", first.getValue("path").jsonPrimitive.content)
        assertEquals(20.0, first.getValue("averageMs").jsonPrimitive.double)
        assertEquals(30.0, first.getValue("slowestMs").jsonPrimitive.double)
        assertEquals(1, first.getValue("failed").jsonPrimitive.int)
    }
}
