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
import kotlin.time.Duration.Companion.days

enum class CookieTheme { Light, Dark }

private val ThemeCookie = typedCookie<CookieTheme>("theme", default = CookieTheme.Light)
private val PageSizeCookie = typedCookie<Int>("page-size", maxAge = 30.days, path = "/app")
private val GreetingCookie = typedCookie<String>("greeting", maxAge = null, sameSite = CookieSameSite.Strict)
private val SeenCookie = typedCookie<Boolean>("tour.seen", default = false, secure = true)
private val VisitorCookie = typedCookie<Long>("visitor", httpOnly = true)

class CookiesTest {
    private fun app(block: suspend ApplicationTestBuilder.() -> Unit) =
        testApplication {
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    cookies(ThemeCookie, PageSizeCookie, GreetingCookie, SeenCookie, VisitorCookie)
                }
                routing {
                    get("/api/read") {
                        val values =
                            listOf(
                                call.readCookie(ThemeCookie),
                                call.readCookie(PageSizeCookie),
                                call.readCookie(GreetingCookie),
                                call.readCookie(SeenCookie),
                                call.readCookie(VisitorCookie),
                            )
                        call.respondText(values.joinToString("|"))
                    }
                    get("/api/write") {
                        call.writeCookie(ThemeCookie, CookieTheme.Dark)
                        call.writeCookie(PageSizeCookie, 50)
                        call.writeCookie(GreetingCookie, "Gr\u00fc\u00df dich; a+b=c")
                        call.writeCookie(SeenCookie, true)
                        call.writeCookie(VisitorCookie, 9_000_000_000)
                        call.respondText("ok")
                    }
                    get("/api/clear") {
                        call.clearCookie(ThemeCookie)
                        call.respondText("ok")
                    }
                }
            }
            block()
        }

    @Test
    fun `a cookie is written with the options it was declared with`() =
        app {
            val written =
                client
                    .get("/api/write")
                    .headers
                    .getAll("Set-Cookie")
                    .orEmpty()
            assertEquals(
                listOf(
                    "theme=Dark; Max-Age=31536000; Path=/; SameSite=Lax",
                    "page-size=50; Max-Age=2592000; Path=/app; SameSite=Lax",
                    "greeting=Gr%C3%BC%C3%9F%20dich%3B%20a%2Bb%3Dc; Path=/; SameSite=Strict",
                    "tour.seen=true; Max-Age=31536000; Path=/; Secure; SameSite=Lax",
                    "visitor=9000000000; Max-Age=31536000; Path=/; HttpOnly; SameSite=Lax",
                ),
                written.map { header -> header.split("; ").filterNot { it.startsWith("Expires=") }.joinToString("; ") },
            )
        }

    @Test
    fun `a cookie is read with its type, and what is missing or broken falls back to the default`() =
        app {
            assertEquals("Light|null|null|false|null", client.get("/api/read").bodyAsText())
            val sent = "theme=Dark; page-size=50; greeting=Gr%C3%BC%C3%9F%20dich%3B%20a%2Bb%3Dc; tour.seen=true; visitor=9000000000"
            assertEquals(
                "Dark|50|Gr\u00fc\u00df dich; a+b=c|true|9000000000",
                client.get("/api/read") { header("Cookie", sent) }.bodyAsText(),
            )
            val broken = "theme=Purple; page-size=many; greeting=%E0%A4%A; tour.seen=yes; visitor=1.5"
            assertEquals("Light|null|null|false|null", client.get("/api/read") { header("Cookie", broken) }.bodyAsText())
        }

    @Test
    fun `clearing a cookie ends it with the same path`() =
        app {
            val cleared = client.get("/api/clear").headers["Set-Cookie"].orEmpty()
            assertContains(cleared, "theme=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/")
        }

    @Test
    fun `a cookie that cannot work is refused where it is declared`() {
        val type = assertFailsWith<IllegalArgumentException> { typedCookie<List<String>>("tags") }
        assertContains(type.message.orEmpty(), "The cookie 'tags' holds a java.util.List, which a typed cookie cannot.")
        assertContains(
            assertFailsWith<IllegalArgumentException> { typedCookie<String>("my cookie") }.message.orEmpty(),
            "is not a cookie name",
        )
        assertContains(
            assertFailsWith<IllegalArgumentException> { typedCookie<String>("a", path = "app") }.message.orEmpty(),
            "is not a path",
        )
        val none = assertFailsWith<IllegalArgumentException> { typedCookie<String>("a", sameSite = CookieSameSite.None) }
        assertContains(none.message.orEmpty(), "browsers only accept with secure = true")
        val twice = assertFailsWith<IllegalArgumentException> { SvelteConfig().cookies(ThemeCookie, typedCookie<String>("theme")) }
        assertContains(twice.message.orEmpty(), "The cookie 'theme' is declared twice.")
    }

    @Test
    fun `the client gets the cookies the browser can read, with their types and options`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{}}}"""
        val declared = listOf(ThemeCookie, PageSizeCookie, GreetingCookie, SeenCookie, VisitorCookie).map { it.spec() }
        val files = TypeScriptGenerator(listOf("/api"), cookies = declared).generate(openApi)
        assertEquals(
            listOf(
                "import { typedCookie } from './client.js';",
                "",
                "export const cookies = {",
                "    greeting: typedCookie<string>('greeting', { kind: 'string', path: '/', sameSite: 'strict', secure: false }),",
                "    pageSize: typedCookie<number>('page-size', { kind: 'int', maxAge: 2592000, path: '/app', sameSite: 'lax', secure: false }),",
                "    theme: typedCookie<'Light' | 'Dark', 'Light' | 'Dark'>('theme', " +
                    "{ kind: 'enum', values: ['Light', 'Dark'], default: 'Light', maxAge: 31536000, path: '/', sameSite: 'lax', secure: false }),",
                "    tourSeen: typedCookie<boolean, boolean>('tour.seen', " +
                    "{ kind: 'boolean', default: false, maxAge: 31536000, path: '/', sameSite: 'lax', secure: true })",
                "};",
                "",
            ).joinToString("\n"),
            files.getValue(COOKIES_FILE),
        )
        assertContains(files.getValue("index.ts"), "export * from './cookies.js';")

        val plain = TypeScriptGenerator(listOf("/api"), cookies = listOf(VisitorCookie.spec())).generate(openApi)
        assertFalse(COOKIES_FILE in plain)
        assertFalse("cookies" in plain.getValue("index.ts"))
    }

    @Test
    fun `two cookies that would share a name in TypeScript are refused`() {
        val openApi = """{"openapi":"3.1.0","paths":{},"components":{"schemas":{}}}"""
        val same = listOf(typedCookie<String>("page-size").spec(), typedCookie<String>("page.size").spec())
        val failure = assertFailsWith<IllegalStateException> { TypeScriptGenerator(listOf("/api"), cookies = same).generate(openApi) }
        assertContains(failure.message.orEmpty(), "The cookies 'page-size' and 'page.size' would both be called pageSize in TypeScript.")
    }
}
