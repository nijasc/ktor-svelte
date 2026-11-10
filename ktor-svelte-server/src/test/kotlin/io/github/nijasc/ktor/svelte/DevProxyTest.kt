package io.github.nijasc.ktor.svelte

import com.sun.net.httpserver.HttpServer
import io.github.nijasc.ktor.svelte.internal.isLocalRequest
import io.github.nijasc.ktor.svelte.internal.resolveDevServerUrl
import io.github.nijasc.ktor.svelte.internal.upstreamUri
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.head
import io.ktor.client.request.header
import io.ktor.client.request.patch
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
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
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class DevProxyTest {
    private lateinit var vite: HttpServer
    private lateinit var viteUrl: String
    private val requests = java.util.concurrent.CopyOnWriteArrayList<String>()

    @BeforeEach
    fun startFakeVite() {
        vite = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        vite.createContext("/") { exchange ->
            val extras =
                if (exchange.requestMethod in setOf("GET", "HEAD")) {
                    ""
                } else {
                    val sent = exchange.requestBody.readBytes().decodeToString()
                    " $sent cookie=${exchange.requestHeaders.getFirst("Cookie")} auth=${exchange.requestHeaders.getFirst("Authorization")}"
                }
            requests += "${exchange.requestMethod} ${exchange.requestURI}$extras"
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
    fun `post put patch and delete are forwarded with body and without credentials`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response =
                client.post("/__data?x=1") {
                    header(HttpHeaders.Cookie, "session=secret")
                    header(HttpHeaders.Authorization, "Bearer secret")
                    setBody("name=a b")
                }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("vite:/__data?x=1", response.bodyAsText())
            assertEquals(listOf("POST /__data?x=1 name=a b cookie=null auth=null"), requests.toList())
            requests.clear()
            client.put("/a") { setBody("1") }
            client.patch("/b") { setBody("2") }
            client.delete("/c")
            assertEquals(listOf("PUT /a 1", "PATCH /b 2", "DELETE /c "), requests.map { it.substringBefore(" cookie") })
        }

    @Test
    fun `non get requests to api paths are never proxied`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.post("/api/notes") { setBody("x") }.status)
            assertEquals(emptyList(), requests.toList())
        }

    @Test
    fun `non get requests are not proxied when vite is off or the client is remote`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.post("/page") { header(HttpHeaders.Host, "app.example.com") }.status)
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
    fun `credentials are not forwarded to vite`() =
        testApplication {
            val seen = java.util.concurrent.CopyOnWriteArrayList<String>()
            vite.removeContext("/")
            vite.createContext("/") { exchange ->
                seen += exchange.requestHeaders.keys.map { it.lowercase() }
                exchange.sendResponseHeaders(204, -1)
                exchange.close()
            }
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            client.get("/page") {
                header(HttpHeaders.Cookie, "session=secret")
                header(HttpHeaders.Authorization, "Bearer secret")
                header("X-Client", "kept")
            }
            assertTrue("x-client" in seen)
            assertFalse("cookie" in seen)
            assertFalse("authorization" in seen)
        }

    @Test
    fun `remote vite is refused at startup unless allowed`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    application {
                        install(Svelte) {
                            dev {
                                url = "http://vite.example.com:5173"
                                mode = DevMode.ALWAYS
                            }
                        }
                    }
                    client.get("/")
                }
            }
        assertContains(failure.message.orEmpty(), "allowRemote")
    }

    @Test
    fun `remote vite works once allowed`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = "http://vite.example.invalid:5173"
                        mode = DevMode.ALWAYS
                        allowRemote = true
                    }
                }
            }
            assertEquals(HttpStatusCode.ServiceUnavailable, client.get("/").status)
        }

    @Test
    fun `only loopback clients and hosts count as local`() {
        listOf(
            "127.0.0.1" to "localhost:8080",
            "::1" to "[::1]:8080",
            "0:0:0:0:0:0:0:1" to "127.0.0.1",
            "localhost" to "app.localhost:1",
        ).forEach { (remote, host) ->
            assertTrue(isLocalRequest(remote, host), "$remote $host")
        }
        assertFalse(isLocalRequest("192.168.1.20", "localhost:8080"))
        assertFalse(isLocalRequest("127.0.0.1", "evil.example.com"))
        assertFalse(isLocalRequest("127.0.0.1", "127.evil.example.com"))
        assertTrue(isLocalRequest("127.0.0.1", null))
        assertFalse(isLocalRequest("10.0.0.1", null))
    }

    @Test
    fun `upstream uri encodes unsafe characters without double encoding`() {
        val base = "http://localhost:5173"
        val cases =
            mapOf(
                "/src/routes/(app)/datanode/definition/[id]/+page.svelte" to
                    "/src/routes/(app)/datanode/definition/%5Bid%5D/+page.svelte",
                "/a b/c d.js" to "/a%20b/c%20d.js",
                "/a%20b/%5Bid%5D/x" to "/a%20b/%5Bid%5D/x",
                "/p?q=a b&r=[1]&s={x}|^`&t=%5B&u=100%" to "/p?q=a%20b&r=%5B1%5D&s=%7Bx%7D%7C%5E%60&t=%5B&u=100%25",
                "/caf\u00e9" to "/caf%C3%A9",
            )
        cases.forEach { (raw, expected) ->
            assertEquals("$base$expected", upstreamUri(base, raw).toString(), raw)
        }
    }

    @Test
    fun `upstream uri keeps an ipv6 dev url`() {
        val uri = upstreamUri("http://[::1]:5173", "/src/routes/[id]/+page.svelte?x=[1]")
        assertEquals("[::1]", uri.host)
        assertEquals(5173, uri.port)
        assertEquals("/src/routes/[id]/+page.svelte", uri.path)
        assertEquals("x=%5B1%5D", uri.rawQuery)
    }

    @Test
    fun `bracketed paths reach vite`() =
        testApplication {
            application {
                install(Svelte) {
                    dev {
                        url = viteUrl
                        mode = DevMode.ALWAYS
                    }
                }
            }
            val response = client.get("/src/routes/(app)/[id]/+page.svelte?a=b")
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals(listOf("GET /src/routes/(app)/%5Bid%5D/+page.svelte?a=b"), requests.toList())
        }

    @Test
    fun `environment variable overrides the configured url`() {
        assertEquals("http://override", resolveDevServerUrl("http://configured", "http://override"))
        assertEquals("http://configured", resolveDevServerUrl("http://configured", null))
        assertEquals("http://configured", resolveDevServerUrl("http://configured", " "))
    }
}
