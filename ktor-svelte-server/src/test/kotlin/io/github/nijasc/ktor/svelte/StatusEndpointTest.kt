package io.github.nijasc.ktor.svelte

import com.sun.net.httpserver.HttpServer
import io.github.nijasc.ktor.svelte.internal.dev.fingerprint
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.boolean
import kotlinx.serialization.json.int
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.ServerSocket
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class StatusEndpointTest {
    private fun unusedUrl(): String = "http://127.0.0.1:${ServerSocket(0).use { it.localPort }}"

    @Test
    fun `status is off unless enabled`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    spaFallback = null
                    dev { mode = DevMode.NEVER }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/_ktor-svelte/status").status)
        }

    @Test
    fun `status reports the bundled build and no dev proxy`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    statusEndpoint = true
                    dev { mode = DevMode.NEVER }
                }
            }
            val response = client.get("/_ktor-svelte/status")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
            val status = Json.parseToJsonElement(response.bodyAsText()).jsonObject
            val statusBuild = status.getValue("build").jsonObject
            assertTrue(statusBuild.getValue("present").jsonPrimitive.boolean)
            assertEquals(1, statusBuild.getValue("formatVersion").jsonPrimitive.int)
            assertEquals(8, statusBuild.getValue("files").jsonPrimitive.int)
            assertEquals(
                64,
                statusBuild
                    .getValue("fingerprint")
                    .jsonPrimitive.content.length,
            )
            val dev = status.getValue("dev").jsonObject
            assertFalse(dev.getValue("proxy").jsonPrimitive.boolean)
            assertNull(dev["reachable"])
        }

    @Test
    fun `fingerprint changes with the build`() {
        fun fingerprint(files: Map<String, String>): String {
            var value = ""
            testApplication {
                val build = fixtureBuild(files = files)
                application {
                    install(Svelte) {
                        source = SvelteSource.Directory(build)
                        statusEndpoint = true
                        dev { mode = DevMode.NEVER }
                    }
                }
                val status = Json.parseToJsonElement(client.get("/_ktor-svelte/status").bodyAsText()).jsonObject
                value =
                    status
                        .getValue("build")
                        .jsonObject
                        .getValue("fingerprint")
                        .jsonPrimitive.content
            }
            return value
        }
        val first = fingerprint(mapOf("index.html" to "one"))
        assertEquals(first, fingerprint(mapOf("index.html" to "one")))
        assertTrue(first != fingerprint(mapOf("index.html" to "two")))
    }

    @Test
    fun `status says whether vite is reachable`() {
        val vite = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        vite.createContext("/") { exchange ->
            exchange.sendResponseHeaders(404, -1)
            exchange.close()
        }
        vite.start()
        try {
            testApplication {
                application {
                    install(Svelte) {
                        statusEndpoint = true
                        dev {
                            url = "http://${vite.address.address.hostAddress}:${vite.address.port}"
                            mode = DevMode.ALWAYS
                        }
                    }
                }
                val dev =
                    Json
                        .parseToJsonElement(client.get("/_ktor-svelte/status").bodyAsText())
                        .jsonObject
                        .getValue("dev")
                        .jsonObject
                assertTrue(dev.getValue("proxy").jsonPrimitive.boolean)
                assertTrue(dev.getValue("reachable").jsonPrimitive.boolean)
                assertTrue(
                    dev
                        .getValue("url")
                        .jsonPrimitive.content
                        .startsWith("http://"),
                )
            }
        } finally {
            vite.stop(0)
        }
    }

    @Test
    fun `status reports a stopped vite and a missing build`() =
        testApplication {
            application {
                install(Svelte) {
                    statusEndpoint = true
                    dev {
                        url = unusedUrl()
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val status = Json.parseToJsonElement(client.get("/_ktor-svelte/status").bodyAsText()).jsonObject
            assertFalse(
                status
                    .getValue("build")
                    .jsonObject
                    .getValue("present")
                    .jsonPrimitive.boolean,
            )
            assertFalse(
                status
                    .getValue("dev")
                    .jsonObject
                    .getValue("reachable")
                    .jsonPrimitive.boolean,
            )
        }

    @Test
    fun `status refuses requests that are not local`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    statusEndpoint = true
                    dev { mode = DevMode.NEVER }
                }
            }
            val response = client.get("/_ktor-svelte/status") { header(HttpHeaders.Host, "app.example.com") }
            assertEquals(HttpStatusCode.Forbidden, response.status)
            assertFalse(response.bodyAsText().contains("fingerprint"))
        }
}
