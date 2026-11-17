package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.long
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class RuntimeViewTest {
    private fun app(block: suspend io.ktor.server.testing.ApplicationTestBuilder.() -> Unit) =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                }
            }
            block()
        }

    @Test
    fun `the dev panel gets heap, garbage collection and thread counts of the running app`() =
        app {
            val response = client.get("/_ktor-svelte/dev/runtime")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val state = Json.parseToJsonElement(response.bodyAsText()).jsonObject
            val heap = state.getValue("heap").jsonObject
            assertTrue(heap.getValue("used").jsonPrimitive.long > 0)
            assertTrue(heap.getValue("committed").jsonPrimitive.long >= heap.getValue("used").jsonPrimitive.long)
            assertTrue(state.getValue("collectors").jsonArray.isNotEmpty())
            val threads = state.getValue("threads").jsonObject
            val live = threads.getValue("live").jsonPrimitive.int
            assertTrue(live > 0)
            assertTrue(threads.getValue("peak").jsonPrimitive.int >= live)
            assertTrue("RUNNABLE" in threads.getValue("states").jsonObject)
            assertEquals(Runtime.getRuntime().availableProcessors(), state.getValue("processors").jsonPrimitive.int)

            val remote = client.get("/_ktor-svelte/dev/runtime") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remote.status)
        }

    @Test
    fun `only the dev panel asks for a garbage collection`() =
        app {
            assertEquals(HttpStatusCode.Forbidden, client.post("/_ktor-svelte/dev/runtime/gc").status)
            assertEquals(HttpStatusCode.NoContent, client.post("/_ktor-svelte/dev/runtime/gc") { header("X-Ktor-Svelte-Dev", "1") }.status)
        }
}
