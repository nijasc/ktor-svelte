package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.request.receiveText
import io.ktor.server.response.respondText
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.long
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class RefusalMetricsTest {
    @Test
    fun `each refusal is counted and reported`() =
        testApplication {
            val build = fixtureBuild()
            lateinit var app: Application
            application {
                app = this
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    statusEndpoint = true
                    maxApiBodySize = 10
                    rateLimit { apiWrites = 3 }
                }
                routing { post("/api/notes") { call.respondText("size ${call.receiveText().length}") } }
            }

            assertEquals(HttpStatusCode.Forbidden, client.post("/api/notes") { header(HttpHeaders.Origin, "https://evil.example") }.status)
            assertEquals(HttpStatusCode.PayloadTooLarge, client.post("/api/notes") { setBody("x".repeat(100)) }.status)
            assertEquals(HttpStatusCode.OK, client.post("/api/notes").status)
            assertEquals(HttpStatusCode.TooManyRequests, client.post("/api/notes").status)

            assertEquals(1, app.svelteMetrics.crossOriginRefusals)
            assertEquals(1, app.svelteMetrics.bodyTooLargeRefusals)
            assertEquals(1, app.svelteMetrics.rateLimitRefusals)
            val refusals =
                Json
                    .parseToJsonElement(client.get("/_ktor-svelte/status").bodyAsText())
                    .jsonObject
                    .getValue("refusals")
                    .jsonObject
            assertEquals(1, refusals.getValue("crossOrigin").jsonPrimitive.long)
            assertEquals(1, refusals.getValue("bodyTooLarge").jsonPrimitive.long)
            assertEquals(1, refusals.getValue("rateLimit").jsonPrimitive.long)
        }

    @Test
    fun `metrics need the plugin`() {
        testApplication {
            application {
                assertFailsWith<IllegalStateException> { svelteMetrics }
            }
            startApplication()
        }
    }
}
