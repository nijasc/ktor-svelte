package io.github.nijasc.ktor.svelte

import com.sun.net.httpserver.HttpServer
import io.github.nijasc.ktor.svelte.internal.resolveDevServerUrl
import io.ktor.client.request.get
import io.ktor.client.request.head
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.BeforeEach
import java.net.BindException
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.ServerSocket
import java.net.SocketException
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class DevProxyTest {
    private lateinit var vite: HttpServer
    private lateinit var viteUrl: String
    private val requests = java.util.concurrent.CopyOnWriteArrayList<String>()

    @BeforeEach
    fun startFakeVite() {
        vite = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        vite.createContext("/") { exchange ->
            requests += "${exchange.requestMethod} ${exchange.requestURI}"
            val path = exchange.requestURI.path
            if (path == "/moved") {
                exchange.responseHeaders.add("Location", "/elsewhere")
                exchange.sendResponseHeaders(302, -1)
            } else if (path == "/cached") {
                exchange.responseHeaders.add("ETag", "\"vite\"")
                exchange.sendResponseHeaders(304, -1)
            } else {
                val body = "vite:${exchange.requestURI}".toByteArray()
                exchange.responseHeaders.add("Content-Type", "text/javascript")
                exchange.responseHeaders.add("X-From-Vite", exchange.requestHeaders.getFirst("X-Client") ?: "yes")
                val length = if (exchange.requestMethod == "HEAD") -1L else body.size.toLong()
                exchange.sendResponseHeaders(200, length)
                if (length > 0) exchange.responseBody.use { it.write(body) }
            }
            exchange.close()
        }
        vite.start()
        viteUrl = "http://${vite.address.address.hostAddress}:${vite.address.port}"
    }

    @AfterEach
    fun stopFakeVite() {
        vite.stop(0)
    }

    private fun unusedUrl(): String = "http://127.0.0.1:${ServerSocket(0).use { it.localPort }}"

    @Test
    fun `get is forwarded with path query status and headers`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response = client.get("/@vite/client?t=1") { header("X-Client", "browser") }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("vite:/@vite/client?t=1", response.bodyAsText())
            assertEquals("browser", response.headers["X-From-Vite"])
            assertContains(response.headers[HttpHeaders.ContentType].orEmpty(), "text/javascript")
        }

    @Test
    fun `head is forwarded without a body`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response = client.head("/page")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("", response.bodyAsText())
            assertEquals(listOf("HEAD /page"), requests.toList())
        }

    @Test
    fun `redirects are passed through and not followed`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val noRedirects = createClient { followRedirects = false }
            val response = noRedirects.get("/moved")
            assertEquals(HttpStatusCode.Found, response.status)
            assertEquals("/elsewhere", response.headers[HttpHeaders.Location])
            assertEquals(listOf("GET /moved"), requests.toList())
        }

    @Test
    fun `not modified is passed through`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response = client.get("/cached")
            assertEquals(HttpStatusCode.NotModified, response.status)
            assertEquals("\"vite\"", response.headers[HttpHeaders.ETag])
        }

    @Test
    fun `api paths and app routes are never proxied`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
                routing { get("/health") { call.respondText("ok") } }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/api/typo").status)
            assertEquals("ok", client.get("/health").bodyAsText())
            assertEquals(emptyList(), requests.toList())
        }

    @Test
    fun `non get methods are not proxied`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.post("/page").status)
            assertEquals(emptyList(), requests.toList())
        }

    @Test
    fun `unreachable vite falls back to built files`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev {
                        url = unusedUrl()
                        mode = DevMode.ALWAYS
                    }
                }
            }
            assertEquals("<h1>home</h1>", client.get("/").bodyAsText())
        }

    @Test
    fun `unreachable vite without a build explains how to start it`() =
        testApplication {
            environment { classLoader = java.net.URLClassLoader(emptyArray(), null) }
            application {
                install(Svelte) {
                    dev {
                        url = unusedUrl()
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response = client.get("/")
            assertEquals(HttpStatusCode.ServiceUnavailable, response.status)
            assertContains(response.bodyAsText(), "./gradlew svelteDev")
        }

    @Test
    fun `auto mode proxies in development mode`() =
        testApplication {
            serverConfig { developmentMode = true }
            application { install(Svelte) { dev { url = viteUrl } } }
            assertEquals("vite:/page", client.get("/page").bodyAsText())
        }

    @Test
    fun `auto mode never proxies in production`() =
        testApplication {
            serverConfig { developmentMode = false }
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { url = viteUrl }
                }
            }
            assertEquals("<h1>home</h1>", client.get("/").bodyAsText())
            assertEquals(emptyList(), requests.toList())
        }

    @Test
    fun `never mode does not proxy in development mode`() =
        testApplication {
            serverConfig { developmentMode = true }
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev {
                        url = viteUrl
                        mode = DevMode.NEVER
                    }
                }
            }
            assertFalse(client.get("/").bodyAsText().startsWith("vite"))
            assertEquals(emptyList(), requests.toList())
        }

    @Test
    fun `default test application serves built files when vite is not running`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { url = unusedUrl() }
                }
            }
            assertEquals("<h1>home</h1>", client.get("/").bodyAsText())
        }

    @Test
    fun `localhost reaches vite on an ipv6 only loopback`() {
        val ipv6 =
            try {
                HttpServer.create(InetSocketAddress(InetAddress.getByName("::1"), 0), 0)
            } catch (_: BindException) {
                null
            } catch (_: SocketException) {
                null
            }
        assumeTrue(ipv6 != null, "IPv6 loopback is not available")
        val server = ipv6!!
        server.createContext("/") { exchange ->
            val body = "ipv6".toByteArray()
            exchange.sendResponseHeaders(200, body.size.toLong())
            exchange.responseBody.use { it.write(body) }
        }
        server.start()
        try {
            testApplication {
                application {
                    install(Svelte) {
                        dev {
                            url = "http://localhost:${server.address.port}"
                            mode = DevMode.ALWAYS
                        }
                    }
                }
                assertEquals("ipv6", client.get("/").bodyAsText())
            }
        } finally {
            server.stop(0)
        }
    }

    @Test
    fun `environment variable overrides the configured url`() {
        assertEquals("http://override", resolveDevServerUrl("http://configured", "http://override"))
        assertEquals("http://configured", resolveDevServerUrl("http://configured", null))
        assertEquals("http://configured", resolveDevServerUrl("http://configured", " "))
    }
}
