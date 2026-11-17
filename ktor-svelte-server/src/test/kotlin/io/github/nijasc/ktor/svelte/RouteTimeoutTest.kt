package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlinx.coroutines.delay
import java.nio.file.Files
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration.Companion.seconds

class RouteTimeoutTest {
    @Test
    fun `a route that takes longer than its limit answers 503, and a quick one is not touched`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                }
                routing {
                    get("/api/slow") {
                        delay(5.seconds)
                        call.respondText("late")
                    }.timeout(200.milliseconds)
                    get("/api/quick") { call.respondText("on time") }.timeout(2.seconds)
                }
            }
            val slow = client.get("/api/slow")
            assertEquals(HttpStatusCode.ServiceUnavailable, slow.status)
            assertContains(slow.bodyAsText(), "took longer than its limit of 200ms")
            val quick = client.get("/api/quick")
            assertEquals(HttpStatusCode.OK, quick.status)
            assertEquals("on time", quick.bodyAsText())
        }

    @Test
    fun `the limit reaches the generated client as the call's timeout`() {
        val frontend = Files.createTempDirectory("ktor-svelte-frontend")
        frontend.resolve("package.json").writeText("{}")
        val output = frontend.resolve("src/lib/api").createDirectories()
        testApplication {
            serverConfig { developmentMode = true }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = output.toString()
                }
                routing {
                    get("/api/reports") { call.respondText("[]") }.timeout(5.seconds)
                }
            }
            startApplication()
        }
        assertContains(output.resolve("openapi.json").readText(), "\"x-ktor-svelte-timeout\"")
        assertContains(output.resolve("services.ts").readText(), "{ timeout: 5000, ...options, operation: 'reports.list' }")
    }

    @Test
    fun `a limit that is not positive is refused`() {
        testApplication {
            application {
                routing {
                    assertFailsWith<IllegalArgumentException> { get("/api/a") {}.timeout(Duration.ZERO) }
                    assertFailsWith<IllegalArgumentException> { get("/api/b") {}.timeout(Duration.INFINITE) }
                }
            }
            startApplication()
        }
    }
}
