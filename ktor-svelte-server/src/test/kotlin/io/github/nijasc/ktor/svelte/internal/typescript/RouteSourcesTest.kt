package io.github.nijasc.ktor.svelte.internal.typescript

import io.ktor.server.application.pluginOrNull
import io.ktor.server.response.respondText
import io.ktor.server.routing.RoutingRoot
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class RouteSourcesTest {
    private val sourceLines = File("src/test/kotlin/io/github/nijasc/ktor/svelte/internal/typescript/RouteSourcesTest.kt").readLines()

    private fun lineOf(marker: String): Int = sourceLines.indexOfFirst { marker in it } + 1

    @Test
    fun `handlers point at the file and line of their route`() {
        var sources: Map<String, SourceLocation> = emptyMap()
        testApplication {
            application {
                routing {
                    route("/api/items") {
                        get {
                            call.respondText("list")
                        }
                        route("/{id}") {
                            post("/archive") {
                                call.respondText("archived")
                            }
                        }
                    }
                }
                sources = routeSources(assertNotNull(pluginOrNull(RoutingRoot)))
            }
            startApplication()
        }

        val file = "io/github/nijasc/ktor/svelte/internal/typescript/RouteSourcesTest.kt"
        assertEquals(SourceLocation(file, lineOf("call.respondText(\"list\")") - 1), sources["GET /api/items"])
        assertEquals(SourceLocation(file, lineOf("post(\"/archive\") {")), sources["POST /api/items/{id}/archive"])
    }

    @Test
    fun `objects without a readable class give no location`() {
        assertEquals(null, sourceOf("not a lambda"))
    }

    @Test
    fun `the json lists every operation and its location when known`() {
        val json =
            routeSourcesJson(
                listOf(GeneratedOperation("notes.list", "GET", "/api/notes"), GeneratedOperation("a.get", "GET", "/api/a")),
                mapOf("GET /api/notes" to SourceLocation("notes/Routes.kt", 19)),
            )
        assertTrue(json.indexOf("\"a.get\"") < json.indexOf("\"notes.list\""))
        assertTrue("\"file\": \"notes/Routes.kt\",\n        \"line\": 19" in json)
        assertTrue("\"path\": \"/api/a\"\n    }" in json)
    }
}
