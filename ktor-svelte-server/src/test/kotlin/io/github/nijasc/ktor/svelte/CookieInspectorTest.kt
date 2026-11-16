package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.dev.maskedText
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.sessions.Sessions
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.sessions
import io.ktor.server.sessions.set
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import kotlin.time.Duration.Companion.days

enum class InspectedDensity { Comfortable, Compact }

@Serializable
data class InspectedSession(
    val userId: Int,
    @Sensitive val csrfToken: String,
)

private val InspectedDensityCookie = typedCookie<InspectedDensity>("density", default = InspectedDensity.Comfortable, maxAge = 90.days)
private val InspectedSizeCookie = typedCookie<Int>("page-size", maxAge = null, path = "/app", httpOnly = true)

class CookieInspectorTest {
    private fun app(
        sessions: Boolean = true,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        application {
            if (sessions) install(Sessions) { cookie<InspectedSession>("login") }
            install(Svelte) {
                dev {
                    url = "http://127.0.0.1:1"
                    mode = DevMode.Always
                }
                cookies(InspectedDensityCookie, InspectedSizeCookie)
            }
            routing {
                get("/api/login") {
                    call.sessions.set(InspectedSession(7, "secret-token"))
                    call.respondText("in")
                }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.report(cookies: String? = null): Map<String, JsonObject> {
        val response = client.get("/_ktor-svelte/dev/cookies") { cookies?.let { header(HttpHeaders.Cookie, it) } }
        assertEquals(HttpStatusCode.OK, response.status)
        assertEquals("no-store", response.headers[HttpHeaders.CacheControl])
        return Json
            .parseToJsonElement(response.bodyAsText())
            .jsonObject
            .getValue("cookies")
            .jsonArray
            .map { it.jsonObject }
            .associateBy { it.getValue("name").jsonPrimitive.content }
    }

    @Test
    fun `declared cookies are listed with what they mean, also when the browser did not send them`() =
        app {
            val cookies = report()
            assertEquals(listOf("density", "page-size"), cookies.keys.toList())
            assertEquals(
                """{"name":"density","sent":false,"declared":{"type":"Comfortable | Compact","reads":"Comfortable","fits":true,""" +
                    """"options":"kept 90 days, path /, SameSite=Lax"}}""",
                cookies.getValue("density").toString(),
            )
            assertEquals(
                """{"type":"whole number","reads":null,"fits":true,"options":"kept until the browser closes, path /app, SameSite=Lax, HttpOnly"}""",
                cookies.getValue("page-size").getValue("declared").toString(),
            )
        }

    @Test
    fun `sent cookies show their text, how the server reads them, and whether they fit`() =
        app {
            val cookies = report("density=Compact; page-size=many; other=a%20b")
            assertEquals(listOf("density", "other", "page-size"), cookies.keys.toList())
            assertContains(
                cookies.getValue("density").toString(),
                """"sent":true,"value":"Compact","declared":{"type":"Comfortable | Compact","reads":"Compact","fits":true""",
            )
            assertContains(
                cookies.getValue("page-size").toString(),
                """"value":"many","declared":{"type":"whole number","reads":null,"fits":false""",
            )
            assertEquals("""{"name":"other","sent":true,"value":"a%20b"}""", cookies.getValue("other").toString())
        }

    @Test
    fun `a session cookie shows the session the server reads from it, with sensitive fields hidden`() =
        app {
            val login =
                client
                    .get("/api/login")
                    .headers[HttpHeaders.SetCookie]
                    .orEmpty()
                    .substringBefore(";")
            val session = report(login).getValue("login")
            assertEquals("InspectedSession(userId=7, csrfToken=***)", session.getValue("session").jsonPrimitive.content)
            assertFalse("secret-token" in session.getValue("session").toString())
            assertFalse("session" in report("login=broken").getValue("login"))
        }

    @Test
    fun `sensitive names are hidden in text whatever their case`() {
        assertEquals("S(id=1, apiKey=***, note=x)", maskedText("S(id=1, apiKey=abc, note=x)", setOf("apikey")))
        assertEquals("S(id=1)", maskedText("S(id=1)", emptySet()))
    }

    @Test
    fun `clearing ends one cookie or all of them, each the way it was set`() =
        app {
            val login =
                client
                    .get("/api/login")
                    .headers[HttpHeaders.SetCookie]
                    .orEmpty()
                    .substringBefore(";")
            val sent = "density=Compact; page-size=20; other=1; $login"

            val one =
                client.post("/_ktor-svelte/dev/cookies/clear?name=page-size") {
                    header(HttpHeaders.Cookie, sent)
                    header("X-Ktor-Svelte-Dev", "1")
                }
            assertEquals("""{"cleared":1}""", one.bodyAsText())
            val single = one.headers.getAll(HttpHeaders.SetCookie).orEmpty()
            assertEquals(1, single.size, single.toString())
            assertContains(single.single(), "page-size=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/app; HttpOnly")

            val all =
                client.post("/_ktor-svelte/dev/cookies/clear") {
                    header(HttpHeaders.Cookie, sent)
                    header("X-Ktor-Svelte-Dev", "1")
                }
            assertEquals("""{"cleared":4}""", all.bodyAsText())
            val headers = all.headers.getAll(HttpHeaders.SetCookie).orEmpty()
            assertEquals(4, headers.size, headers.toString())
            assertTrue(headers.any { it.startsWith("other=; Max-Age=0;") && it.endsWith("Path=/") }, headers.toString())
            assertTrue(headers.any { it.startsWith("density=; Max-Age=0;") }, headers.toString())
            assertTrue(headers.any { it.startsWith("login=;") && "Max-Age=0" in it }, headers.toString())
        }

    @Test
    fun `only the dev panel on this machine reads or clears cookies`() =
        app {
            assertEquals(HttpStatusCode.Forbidden, client.post("/_ktor-svelte/dev/cookies/clear").status)
            val remoteRead = client.get("/_ktor-svelte/dev/cookies") { header(HttpHeaders.XForwardedFor, "203.0.113.9") }
            assertEquals(HttpStatusCode.Forbidden, remoteRead.status)
            val remoteClear =
                client.post("/_ktor-svelte/dev/cookies/clear") {
                    header(HttpHeaders.XForwardedFor, "203.0.113.9")
                    header("X-Ktor-Svelte-Dev", "1")
                }
            assertEquals(HttpStatusCode.Forbidden, remoteClear.status)
        }

    @Test
    fun `it works in an app without the sessions plugin`() =
        app(sessions = false) {
            assertEquals("""{"name":"login","sent":true,"value":"abc"}""", report("login=abc").getValue("login").toString())
            val cleared =
                client.post("/_ktor-svelte/dev/cookies/clear") {
                    header(HttpHeaders.Cookie, "login=abc")
                    header("X-Ktor-Svelte-Dev", "1")
                }
            assertEquals("""{"cleared":1}""", cleared.bodyAsText())
        }
}
