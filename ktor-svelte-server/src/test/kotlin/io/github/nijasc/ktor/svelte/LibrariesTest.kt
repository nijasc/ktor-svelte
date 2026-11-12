package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.LibraryConfig
import io.github.nijasc.ktor.svelte.internal.needsLocalePrefix
import io.github.nijasc.ktor.svelte.internal.resolveLocale
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.net.URLClassLoader
import java.nio.file.Files
import kotlin.io.path.createDirectories
import kotlin.io.path.writeText
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class LibrariesTest {
    private fun config(strategy: String = "Cookie") =
        LibraryConfig(listOf("en", "de", "pt-BR"), "en", strategy == "UrlPrefix", listOf("light", "dark"), "light")

    private fun classLoaderWith(properties: String): ClassLoader {
        val root = Files.createTempDirectory("ktor-svelte-libraries")
        val file = root.resolve("ktor-svelte/libraries.properties")
        file.parent.createDirectories()
        file.writeText(properties)
        return URLClassLoader(arrayOf(root.toUri().toURL()), null)
    }

    private fun libraryApp(
        properties: String,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build =
            fixtureBuild(
                files =
                    mapOf(
                        "index.html" to "root",
                        "de.html" to "german home",
                        "de/about.html" to "german about",
                        "200.html" to "fallback",
                        "_app/immutable/app.js" to "code",
                        "favicon.png" to "png",
                    ),
            )
        environment { classLoader = classLoaderWith(properties) }
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
            }
            routing {
                get("/api/locale") { call.respondText(call.svelteLocale) }
                get("/api/theme") { call.respondText(call.svelteTheme) }
            }
        }
        val noRedirects = createClient { followRedirects = false }
        this.client = noRedirects
        block()
    }

    private val cookieConfig = "i18n.locales=en,de\ni18n.default=en\ni18n.strategy=Cookie\ntheme.names=light,dark\ntheme.default=light\n"
    private val urlConfig = "i18n.locales=en,de\ni18n.default=en\ni18n.strategy=UrlPrefix\n"

    @Test
    fun `cookie wins over accept language and default`() {
        assertEquals("de", resolveLocale("de", null, listOf("en"), config()))
        assertEquals("de", resolveLocale(null, null, listOf("de-AT", "en"), config()))
        assertEquals("pt-BR", resolveLocale("pt-br", null, emptyList(), config()))
        assertEquals("en", resolveLocale("fr", null, listOf("fr"), config()))
    }

    @Test
    fun `url prefix wins only with that strategy`() {
        assertEquals("de", resolveLocale("en", "de", emptyList(), config("UrlPrefix")))
        assertEquals("en", resolveLocale("en", "de", emptyList(), config("Cookie")))
    }

    @Test
    fun `only page paths need a locale prefix`() {
        val prefixed = config("UrlPrefix")
        assertTrue(needsLocalePrefix("/", prefixed))
        assertTrue(needsLocalePrefix("/about", prefixed))
        assertTrue(needsLocalePrefix("/notes/1", prefixed))
        assertFalse(needsLocalePrefix("/de/about", prefixed))
        assertFalse(needsLocalePrefix("/_app/immutable/x.js", prefixed))
        assertFalse(needsLocalePrefix("/favicon.png", prefixed))
        assertFalse(needsLocalePrefix("/@vite/client", prefixed))
        assertFalse(needsLocalePrefix("/src/routes/+page.ts", prefixed))
        assertFalse(needsLocalePrefix("/node_modules/.vite/x", prefixed))
        assertFalse(needsLocalePrefix("/about", config("Cookie")))
    }

    @Test
    fun `calls read locale and theme from cookies`() =
        libraryApp(cookieConfig) {
            val locale = client.get("/api/locale") { header(HttpHeaders.Cookie, "ktor_svelte_locale=de") }
            assertEquals("de", locale.bodyAsText())
            val browser = client.get("/api/locale") { header(HttpHeaders.AcceptLanguage, "de-CH,de;q=0.9") }
            assertEquals("de", browser.bodyAsText())
            assertEquals("en", client.get("/api/locale").bodyAsText())

            val theme = client.get("/api/theme") { header(HttpHeaders.Cookie, "ktor_svelte_theme=dark") }
            assertEquals("dark", theme.bodyAsText())
            val unknown = client.get("/api/theme") { header(HttpHeaders.Cookie, "ktor_svelte_theme=evil") }
            assertEquals("light", unknown.bodyAsText())
        }

    @Test
    fun `cookie strategy never redirects`() =
        libraryApp(cookieConfig) {
            assertEquals("root", client.get("/").bodyAsText())
        }

    @Test
    fun `url prefix redirects pages and keeps query`() =
        libraryApp(urlConfig) {
            val home = client.get("/") { header(HttpHeaders.AcceptLanguage, "de") }
            assertEquals(HttpStatusCode.Found, home.status)
            assertEquals("/de", home.headers[HttpHeaders.Location])

            val page = client.get("/about?a=1") { header(HttpHeaders.Cookie, "ktor_svelte_locale=de") }
            assertEquals("/de/about?a=1", page.headers[HttpHeaders.Location])
        }

    @Test
    fun `url prefix serves prefixed pages assets and api without redirect`() =
        libraryApp(urlConfig) {
            assertEquals("german about", client.get("/de/about").bodyAsText())
            assertEquals("fallback", client.get("/de/notes/1").bodyAsText())
            assertEquals("code", client.get("/_app/immutable/app.js").bodyAsText())
            assertEquals("png", client.get("/favicon.png").bodyAsText())
            assertNull(client.get("/api/locale").headers[HttpHeaders.Location])
        }

    @Test
    fun `locale fails clearly when i18n is not configured`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                resolveLocale(null, null, emptyList(), LibraryConfig(emptyList(), null, false, emptyList(), null))
            }
        assertTrue(failure.message.orEmpty().contains("i18n is not configured"))
    }
}
