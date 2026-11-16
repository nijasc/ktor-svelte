package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import java.net.URLDecoder
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class ToastsTest {
    private fun toastsOf(path: String): List<String> {
        lateinit var headers: List<String>
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                }
                routing {
                    get("/api/saved") {
                        call.toast("Note saved", ToastKind.Success)
                        call.respondText("ok")
                    }
                    get("/api/plain") {
                        call.toast("Heads up")
                        call.respondText("ok")
                    }
                    get("/api/tricky") {
                        call.toast("Gr\u00fc\u00dfe, Ada: 100% \n done \u2713", ToastKind.Warning)
                        call.respondText("ok")
                    }
                    get("/api/many") {
                        repeat(9) { call.toast("Toast $it", ToastKind.Error) }
                        call.toast("  ")
                        call.respondText("ok")
                    }
                    get("/api/long") {
                        call.toast("x".repeat(2000))
                        call.respondText("ok")
                    }
                    get("/api/none") { call.respondText("ok") }
                }
            }
            headers =
                client
                    .get(path)
                    .headers
                    .getAll("X-Ktor-Svelte-Toast")
                    .orEmpty()
        }
        return headers
    }

    @Test
    fun `a toast travels as a response header with its kind`() {
        assertEquals(listOf("success:Note%20saved"), toastsOf("/api/saved"))
        assertEquals(listOf("info:Heads%20up"), toastsOf("/api/plain"))
        assertEquals(emptyList(), toastsOf("/api/none"))
    }

    @Test
    fun `any text survives the header, commas, colons and line breaks included`() {
        val header = toastsOf("/api/tricky").single()
        assertTrue(header.all { it.code in 33..126 }, header)
        assertTrue(',' !in header && header.count { it == ':' } == 1, header)
        assertEquals(
            "Gr\u00fc\u00dfe, Ada: 100% \n done \u2713",
            URLDecoder.decode(header.substringAfter(':').replace("+", "%2B"), Charsets.UTF_8),
        )
    }

    @Test
    fun `a response carries at most five toasts of at most 500 characters`() {
        assertEquals((0..4).map { "error:Toast%20$it" }, toastsOf("/api/many"))
        assertEquals("info:" + "x".repeat(500), toastsOf("/api/long").single())
    }
}
