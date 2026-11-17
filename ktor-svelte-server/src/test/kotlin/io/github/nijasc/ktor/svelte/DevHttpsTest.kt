package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.Cookie
import io.ktor.server.application.install
import io.ktor.server.plugins.origin
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class DevHttpsTest {
    private fun seen(
        development: Boolean,
        marked: Boolean,
    ): Pair<String, String> {
        var answer = "" to ""
        testApplication {
            val build = fixtureBuild()
            serverConfig { developmentMode = development }
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    get("/api/where") {
                        val origin = call.request.origin
                        val cookie = runCatching { call.response.cookies.append(Cookie("s", "1", secure = true)) }
                        call.respondText("${origin.scheme} ${origin.serverPort} secure-cookie=${cookie.isSuccess}")
                    }
                }
            }
            val response =
                client.get("/api/where") {
                    if (marked) {
                        header("X-Ktor-Svelte-Dev-Https", "1")
                        header("X-Forwarded-Port", "8443")
                    }
                }
            answer = response.bodyAsText() to response.headers["Set-Cookie"].orEmpty()
        }
        return answer
    }

    @Test
    fun `in development a request from the HTTPS proxy counts as HTTPS, so secure cookies can be set`() {
        val (body, cookie) = seen(development = true, marked = true)
        assertEquals("https 8443 secure-cookie=true", body)
        assertContains(cookie, "Secure")
    }

    @Test
    fun `without the proxy's mark, and outside development, nothing changes`() {
        assertContains(seen(development = true, marked = false).first, "http ")
        assertContains(seen(development = false, marked = true).first, "http ")
    }
}
