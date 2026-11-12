package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.http.ContentType
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNull

class BuildHeaderTest {
    private val header = "X-Ktor-Svelte-Build"

    private fun withBuild(
        config: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.(java.nio.file.Path) -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                config()
            }
            routing { get("/api/ping") { call.respondText("pong", ContentType.Text.Plain) } }
        }
        block(build)
    }

    @Test
    fun `API responses carry a short build fingerprint and pages do not`() =
        withBuild {
            val value = client.get("/api/ping").headers[header]
            assertEquals(12, value?.length)
            assertEquals(value, client.get("/api/ping").headers[header])
            assertNull(client.get("/about").headers[header])
        }

    @Test
    fun `a changed build changes the header in development`() =
        testApplication {
            serverConfig { developmentMode = true }
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing { get("/api/ping") { call.respondText("pong") } }
            }
            val before = client.get("/api/ping").headers[header]
            build.resolve("about.html").writeText("<h1>changed about page</h1>")
            assertNotEquals(before, client.get("/api/ping").headers[header])
        }

    @Test
    fun `the header can be turned off`() =
        withBuild({ buildHeader = false }) {
            assertNull(client.get("/api/ping").headers[header])
        }
}
