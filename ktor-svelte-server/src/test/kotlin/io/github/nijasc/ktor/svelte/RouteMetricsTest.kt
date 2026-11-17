package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.OTHER_ROUTES
import io.github.nijasc.ktor.svelte.internal.RouteMetricStore
import io.github.nijasc.ktor.svelte.internal.UNMATCHED_ROUTE
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class RouteMetricsTest {
    @Test
    fun `API routes and pages are counted by their template, with server errors apart`() =
        testApplication {
            val build = fixtureBuild()
            lateinit var app: Application
            application {
                app = this
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    statusEndpoint = true
                    paramRoutes("/notes/[id]")
                }
                routing {
                    route("/api/notes") {
                        get("/{id}") { call.respondText("note ${call.parameters["id"]}") }
                        post { call.respondText("created") }
                    }
                    get("/api/broken") { error("boom") }
                }
            }

            client.get("/api/notes/1")
            client.get("/api/notes/2")
            client.post("/api/notes")
            assertEquals(HttpStatusCode.InternalServerError, client.get("/api/broken").status)
            assertEquals(HttpStatusCode.NotFound, client.get("/api/nothing/here").status)
            client.get("/notes/41") { header(HttpHeaders.Accept, "text/html") }
            client.get("/notes/42") { header(HttpHeaders.Accept, "text/html") }
            client.get("/about") { header(HttpHeaders.Accept, "text/html") }
            client.get("/_app/immutable/entry/app.abc.js")

            val routes = app.svelteMetrics.routes.associateBy { "${it.kind} ${it.method} ${it.route}" }
            assertEquals(
                listOf(
                    "Api GET $UNMATCHED_ROUTE",
                    "Api GET /api/broken",
                    "Api GET /api/notes/{id}",
                    "Api POST /api/notes",
                    "Page GET /about",
                    "Page GET /notes/[id]",
                ),
                routes.keys.sorted(),
            )
            val notes = routes.getValue("Api GET /api/notes/{id}")
            assertEquals(2, notes.count)
            assertEquals(0, notes.serverErrors)
            assertEquals(2, notes.buckets.sumOf { it.count })
            val broken = routes.getValue("Api GET /api/broken")
            assertEquals(1, broken.serverErrors)
            assertEquals(1.0, broken.errorRate)
            assertEquals(1, routes.getValue("Api GET $UNMATCHED_ROUTE").clientErrors)
            assertEquals(2, routes.getValue("Page GET /notes/[id]").count)

            val reported =
                Json
                    .parseToJsonElement(client.get("/_ktor-svelte/status").bodyAsText())
                    .jsonObject
                    .getValue("routes")
                    .jsonArray
                    .map { it.jsonObject }
            val brokenRow = reported.single { it.getValue("route").jsonPrimitive.content == "/api/broken" }
            assertEquals("api", brokenRow.getValue("kind").jsonPrimitive.content)
            assertEquals("1", brokenRow.getValue("serverErrors").jsonPrimitive.content)
            assertEquals(6, app.svelteMetrics.routes.size)
        }

    @Test
    fun `latencies fall into buckets, and percentiles read from them`() {
        val store = RouteMetricStore()
        listOf(3.0, 4.0, 20.0, 30.0, 90.0, 400.0, 400.0, 900.0, 3000.0, 20_000.0).forEach {
            store.record(RouteKind.Api, "GET", "/api/x", it, 200)
        }
        val metric = store.snapshot().single()
        assertEquals(listOf(2L, 0, 1, 1, 1, 0, 2, 1, 0, 1, 0, 1), metric.buckets.map { it.count })
        assertEquals(listOf(5L, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, null), metric.buckets.map { it.upToMillis })
        assertEquals(20_000.0, metric.maxMillis)
        assertEquals(100L, metric.percentileMillis(0.5))
        assertEquals(1000L, metric.percentileMillis(0.8))
        assertNull(metric.percentileMillis(0.99))
    }

    @Test
    fun `routes beyond the limit are counted together`() {
        val store = RouteMetricStore(maxRoutes = 2)
        listOf("/a", "/b", "/c", "/d").forEach { store.record(RouteKind.Api, "GET", it, 1.0, 200) }
        store.record(RouteKind.Api, "GET", "/a", 1.0, 200)
        assertEquals(mapOf("/a" to 2L, "/b" to 1L, OTHER_ROUTES to 2L), store.snapshot().associate { it.route to it.count })
    }
}
