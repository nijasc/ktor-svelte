package io.github.nijasc.ktor.svelte

import com.sun.net.httpserver.HttpServer
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.server.application.install
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import java.net.InetAddress
import java.net.InetSocketAddress
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class FrontendDevProxyTest {
    private lateinit var vite: HttpServer
    private lateinit var viteUrl: String

    @BeforeEach
    fun startFakeVite() {
        vite = HttpServer.create(InetSocketAddress(InetAddress.getLoopbackAddress(), 0), 0)
        vite.createContext("/") { exchange ->
            val html = exchange.requestURI.path == "/admin/users"
            val body =
                if (html) {
                    "<html><head></head><body>admin vite</body></html>".toByteArray()
                } else {
                    "admin-vite:${exchange.requestURI}"
                        .toByteArray()
                }
            exchange.responseHeaders.add("Content-Type", if (html) "text/html" else "text/javascript")
            exchange.sendResponseHeaders(200, body.size.toLong())
            exchange.responseBody.use { it.write(body) }
            exchange.close()
        }
        vite.start()
        viteUrl = "http://${vite.address.address.hostAddress}:${vite.address.port}"
    }

    @AfterEach
    fun stopFakeVite() {
        vite.stop(0)
    }

    @Test
    fun `in development each frontend proxies to its own Vite, with the prefix kept`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                    frontend("/admin") { devUrl = viteUrl }
                }
            }
            assertEquals("admin-vite:/admin/@vite/client", client.get("/admin/@vite/client").bodyAsText())
            assertEquals("admin-vite:/admin/_app/x.js?t=1", client.get("/admin/_app/x.js?t=1").bodyAsText())
            val page = client.get("/admin/users") { header(HttpHeaders.Accept, "text/html") }.bodyAsText()
            assertContains(page, "admin vite")
            assertContains(page, "/_ktor-svelte/dev/client.js")
            assertEquals("<h1>home</h1>", client.get("/") { header(HttpHeaders.Accept, "text/html") }.bodyAsText())
        }

    @Test
    fun `the Vite address can come from the system property svelteDevAll sets`() {
        System.setProperty("ktor.svelte.devUrl.admin", viteUrl)
        try {
            testApplication {
                application {
                    install(Svelte) {
                        source = SvelteSource.Directory(fixtureBuild())
                        dev {
                            url = "http://127.0.0.1:1"
                            mode = DevMode.Always
                        }
                        frontend("/admin")
                    }
                }
                assertEquals("admin-vite:/admin/app.js", client.get("/admin/app.js").bodyAsText())
            }
        } finally {
            System.clearProperty("ktor.svelte.devUrl.admin")
        }
    }

    @Test
    fun `with manual routing the Vite paths of every frontend stay open`() =
        testApplication {
            application {
                install(Svelte) {
                    routing = SvelteRouting.Manual
                    source = SvelteSource.Directory(fixtureBuild())
                    dev {
                        url = "http://127.0.0.1:1"
                        mode = DevMode.Always
                    }
                    frontend("/admin") { devUrl = viteUrl }
                }
                routing { svelte(public = listOf("/login")) }
            }
            assertEquals("admin-vite:/admin/@vite/client", client.get("/admin/@vite/client").bodyAsText())
        }
}
