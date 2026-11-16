package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.COOKIES_FILE
import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

private val NeededCookie = typedCookie<String>("needed", default = "none")
private val VisitsCookie = typedCookie<Int>("visits", default = 0, category = "analytics")
private val LayoutCookie = typedCookie<String>("layout", category = "preferences", path = "/app")
private val TrackerCookie = typedCookie<String>("tracker", category = "marketing", httpOnly = true)

class CookieConsentTest {
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    cookies(NeededCookie, VisitsCookie, LayoutCookie, TrackerCookie)
                }
                routing {
                    get("/api/read") {
                        val consent = call.cookieConsent?.sorted()?.joinToString(",")
                        val values = listOf(call.readCookie(NeededCookie), call.readCookie(VisitsCookie), call.readCookie(LayoutCookie))
                        call.respondText("$consent|${call.consentsTo("analytics")}|${values.joinToString("|")}")
                    }
                    get("/api/write") {
                        call.writeCookie(NeededCookie, "yes")
                        call.writeCookie(VisitsCookie, 3)
                        call.writeCookie(LayoutCookie, "wide")
                        call.respondText("ok")
                    }
                }
            }
            block()
        }

    private suspend fun ApplicationTestBuilder.read(cookies: String) = client.get("/api/read") { header("Cookie", cookies) }.bodyAsText()

    private suspend fun ApplicationTestBuilder.written(cookies: String?): List<String> =
        client
            .get("/api/write") { cookies?.let { header("Cookie", it) } }
            .headers
            .getAll("Set-Cookie")
            .orEmpty()
            .map { it.substringBefore("=") }

    @Test
    fun `an optional cookie is only read when the visitor accepted its category`() =
        app {
            val sent = "needed=yes; visits=3; layout=wide"
            assertEquals("null|false|yes|0|null", read(sent))
            assertEquals("|false|yes|0|null", read("$sent; cookie-consent=none"))
            assertEquals("analytics|true|yes|3|null", read("$sent; cookie-consent=analytics"))
            assertEquals("analytics,preferences|true|yes|3|wide", read("$sent; cookie-consent=analytics.preferences"))
            assertEquals("|false|yes|0|null", read("$sent; cookie-consent=Analytics.%3Cb%3E"))
        }

    @Test
    fun `an optional cookie is only written when the visitor accepted its category`() =
        app {
            assertEquals(listOf("needed"), written(null))
            assertEquals(listOf("needed"), written("cookie-consent=none"))
            assertEquals(listOf("needed", "layout"), written("cookie-consent=preferences"))
            assertEquals(listOf("needed", "visits", "layout"), written("cookie-consent=preferences.analytics"))
        }

    @Test
    fun `a category or name that cannot work is refused where the cookie is declared`() {
        val category = assertFailsWith<IllegalArgumentException> { typedCookie<String>("a", category = "Web Analytics") }
        assertContains(category.message.orEmpty(), "The cookie 'a' has the category 'Web Analytics'.")
        assertFailsWith<IllegalArgumentException> { typedCookie<String>("a", category = "none") }
        val name = assertFailsWith<IllegalArgumentException> { typedCookie<String>("cookie-consent") }
        assertContains(name.message.orEmpty(), "is the cookie that holds the visitor's choice")
    }

    @Test
    fun `the client gets the categories and the cookies to remove on refusal`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{}}}"""
        val declared = listOf(NeededCookie, VisitsCookie, LayoutCookie, TrackerCookie).map { it.spec() }
        val source = TypeScriptGenerator(listOf("/api"), cookies = declared).generate(openApi).getValue(COOKIES_FILE)
        assertContains(source, "import { consentStore, typedCookie } from './client.js';")
        assertContains(
            source,
            "    visits: typedCookie<number, number>('visits', " +
                "{ kind: 'int', default: 0, maxAge: 31536000, path: '/', sameSite: 'lax', secure: false, category: 'analytics' })",
        )
        assertContains(
            source,
            "export const cookieConsent = consentStore(['analytics', 'marketing', 'preferences'] as const, " +
                "[{ name: 'layout', path: '/app', category: 'preferences' }, { name: 'visits', path: '/', category: 'analytics' }]);",
        )
        assertFalse("tracker" in source)

        val serverOnly = TypeScriptGenerator(listOf("/api"), cookies = listOf(TrackerCookie.spec())).generate(openApi)
        assertEquals(
            "import { consentStore } from './client.js';\n\nexport const cookieConsent = consentStore(['marketing'] as const, []);\n",
            serverOnly.getValue(COOKIES_FILE),
        )
        val plain = TypeScriptGenerator(listOf("/api"), cookies = listOf(NeededCookie.spec())).generate(openApi)
        assertFalse("consent" in plain.getValue(COOKIES_FILE))
    }
}
