package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlin.io.path.createTempDirectory
import kotlin.test.Test
import kotlin.test.assertEquals

class HealthEndpointTest {
    @Test
    fun `health is off unless enabled`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/_ktor-svelte/health").status)
        }

    @Test
    fun `health reports up with a build, from any client, without caching`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    healthEndpoint = true
                    dev { mode = DevMode.NEVER }
                }
            }
            val response =
                client.get("/_ktor-svelte/health") {
                    header(HttpHeaders.Host, "example.com")
                    header(HttpHeaders.XForwardedFor, "203.0.113.7")
                }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("""{"status":"up"}""", response.bodyAsText())
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
        }

    @Test
    fun `health reports down without a build`() =
        testApplication {
            val build = createTempDirectory("empty-build")
            serverConfig { developmentMode = true }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    healthEndpoint = true
                    dev { mode = DevMode.NEVER }
                }
            }
            val response = client.get("/_ktor-svelte/health")
            assertEquals(HttpStatusCode.ServiceUnavailable, response.status)
            assertEquals("""{"status":"down"}""", response.bodyAsText())
        }

    @Test
    fun `failing or throwing checks report down`() {
        listOf<suspend () -> Boolean>({ false }, { error("database unreachable") }).forEach { check ->
            testApplication {
                val build = fixtureBuild()
                application {
                    install(Svelte) {
                        source = SvelteSource.Directory(build)
                        healthEndpoint = true
                        healthCheck { true }
                        healthCheck(check)
                        dev { mode = DevMode.NEVER }
                    }
                }
                val response = client.get("/_ktor-svelte/health")
                assertEquals(HttpStatusCode.ServiceUnavailable, response.status)
                assertEquals("""{"status":"down"}""", response.bodyAsText())
            }
        }
    }

    @Test
    fun `passing checks report up`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    healthEndpoint = true
                    healthCheck { true }
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.OK, client.get("/_ktor-svelte/health").status)
        }
}
