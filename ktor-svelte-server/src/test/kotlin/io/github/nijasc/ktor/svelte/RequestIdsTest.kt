package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.server.application.install
import io.ktor.server.plugins.callid.CallId
import io.ktor.server.plugins.callid.callId
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class RequestIdsTest {
    private val header = "X-Request-Id"

    private fun withIds(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing { get("/api/id") { call.respondText(call.callId ?: "none") } }
        }
        block()
    }

    @Test
    fun `a request ID from the client is kept and echoed`() =
        withIds {
            val response = client.get("/api/id") { header(header, "abc-123") }
            assertEquals("abc-123", response.headers[header])
            assertEquals("abc-123", response.bodyAsText())
        }

    @Test
    fun `a missing or malformed ID is replaced with a generated one`() =
        withIds {
            val generated = client.get("/api/id").headers[header].orEmpty()
            assertTrue(generated.matches(Regex("[0-9a-f-]{36}")), generated)
            val replaced = client.get("/api/id") { header(header, "<script>") }.headers[header].orEmpty()
            assertNotEquals("<script>", replaced)
            assertEquals(36, replaced.length)
        }

    @Test
    fun `request IDs can be turned off`() =
        withIds({ requestIds = false }) {
            assertNull(client.get("/api/id").headers[header])
        }

    @Test
    fun `an app that installs CallId itself keeps its own setup`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                install(CallId) {
                    generate { "mine" }
                    replyToHeader("X-Trace")
                }
                routing { get("/api/id") { call.respondText(call.callId ?: "none") } }
            }
            val response = client.get("/api/id")
            assertEquals("mine", response.headers["X-Trace"])
            assertNull(response.headers[header])
        }
}
