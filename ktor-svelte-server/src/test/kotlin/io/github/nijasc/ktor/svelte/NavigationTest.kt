package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class NavigationTest {
    private fun headerFor(path: String?): String? {
        var header: String? = null
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    get("/api/create") {
                        if (path != null) call.navigateTo(path)
                        call.respond(HttpStatusCode.Created, "made")
                    }
                }
            }
            header = client.get("/api/create").headers["X-Ktor-Svelte-Navigate"]
        }
        return header
    }

    @Test
    fun `the path to open travels in a response header`() {
        assertEquals("/notes/4", headerFor("/notes/4"))
        assertEquals("/notes/4?tab=files#top", headerFor("/notes/4?tab=files#top"))
        assertEquals(null, headerFor(null))
    }

    @Test
    fun `a path with other characters is encoded for the header`() {
        val header = headerFor("/notes/caf\u00e9 au lait")!!
        assertTrue(header.all { it.code in 33..126 }, header)
        assertEquals("/notes/caf%C3%A9%20au%20lait", header)
    }

    @Test
    fun `only paths inside the app are accepted`() {
        listOf("/", "/notes", "/a/b?c=d").forEach { assertTrue(isPagePath(it), it) }
        listOf("https://other.example", "//other.example/x", "notes/4", "", "/\\other.example", "/notes\nX-Injected: 1").forEach {
            assertFalse(isPagePath(it), it)
        }
        assertEquals(null, headerFor("https://other.example/notes"), "the route fails and nothing is sent")
        assertEquals("/a%F0%9F%98%80b", asciiOnly("/a\uD83D\uDE00b"))
    }
}
