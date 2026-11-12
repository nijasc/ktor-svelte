package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.inlineScriptHashes
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
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
import kotlin.test.assertNotNull
import kotlin.test.assertNull

private const val CSP = "Content-Security-Policy"
private const val BOOTSTRAP_HASH = "'sha256-IwJ8HMQ0kEv4Hqeb/k0wwXXvuYWzywnUAuKiS02uiBk='"
private const val THEME_HASH = "'sha256-rrmL0nLbAU0oUq1tpOXuVlX3mM0+k6nPR9QT6RgSUOY='"

class SecurityHeadersTest {
    private val frontendFiles =
        mapOf(
            "index.html" to "<head><script>var t=1;</script></head><body><script>\n  start();\n</script></body>",
            "plain.html" to "<h1>plain</h1>",
            "200.html" to "<h1>fallback</h1>",
            "404.html" to "<h1>missing</h1>",
            "_app/immutable/app.js" to "code",
        )

    private fun app(
        configure: SvelteConfig.() -> Unit = {},
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild(files = frontendFiles)
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.Never }
                configure()
            }
            routing { get("/api/x") { call.respondText("x") } }
        }
        block()
    }

    @Test
    fun `security headers are sent by default on pages api calls and misses`() =
        app {
            listOf("/", "/api/x", "/api/missing", "/_app/immutable/app.js").forEach { path ->
                val response = client.get(path)
                assertEquals("nosniff", response.headers["X-Content-Type-Options"], path)
                assertEquals("DENY", response.headers["X-Frame-Options"], path)
                assertEquals("strict-origin-when-cross-origin", response.headers["Referrer-Policy"], path)
            }
        }

    @Test
    fun `pages get a strict policy that allows exactly their inline scripts`() =
        app {
            val policy = assertNotNull(client.get("/").headers[CSP])
            assertEquals(
                "default-src 'self'; script-src 'self' $THEME_HASH $BOOTSTRAP_HASH; style-src 'self' 'unsafe-inline'; " +
                    "img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none'; " +
                    "base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
                policy,
            )
            assertContains(assertNotNull(client.get("/plain").headers[CSP]), "script-src 'self'; ")
        }

    @Test
    fun `fallback and not found pages get a policy too`() =
        app {
            assertNotNull(client.get("/somewhere") { header(HttpHeaders.Accept, "text/html") }.headers[CSP])
            val missing = client.get("/missing") { header(HttpHeaders.Accept, "application/json") }
            assertEquals(HttpStatusCode.NotFound, missing.status)
            assertNotNull(missing.headers[CSP])
        }

    @Test
    fun `non html responses get no policy`() =
        app {
            listOf("/_app/immutable/app.js", "/api/x").forEach { path ->
                assertNull(client.get(path).headers[CSP], path)
            }
        }

    @Test
    fun `cached responses keep the policy`() =
        app {
            val first = client.get("/")
            val second = client.get("/") { header(HttpHeaders.IfNoneMatch, first.headers[HttpHeaders.ETag]) }
            assertEquals(HttpStatusCode.NotModified, second.status)
            assertEquals(first.headers[CSP], second.headers[CSP])
        }

    @Test
    fun `security headers can be turned off in one line`() =
        app({ securityHeaders { enabled = false } }) {
            val response = client.get("/")
            listOf("X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", CSP).forEach { name ->
                assertNull(response.headers[name], name)
            }
        }

    @Test
    fun `the automatic policy can be turned off alone`() =
        app({ securityHeaders { automaticContentSecurityPolicy = false } }) {
            val response = client.get("/")
            assertNull(response.headers[CSP])
            assertEquals("nosniff", response.headers["X-Content-Type-Options"])
        }

    @Test
    fun `an explicit policy wins unchanged`() =
        app({
            securityHeaders {
                frameOptions = null
                contentSecurityPolicy = "default-src 'self'"
                allowCspSources("script-src", "https://ignored.example")
            }
        }) {
            val response = client.get("/")
            assertNull(response.headers["X-Frame-Options"])
            assertEquals(listOf("default-src 'self'"), response.headers.getAll(CSP))
            assertEquals("default-src 'self'", client.get("/api/x").headers[CSP])
        }

    @Test
    fun `extra sources extend the automatic policy`() =
        app({
            securityHeaders {
                allowCspSources("script-src", "https://plausible.io")
                allowCspSources("connect-src", "https://plausible.io")
                allowCspSources("object-src", "https://media.example")
                allowCspSources("worker-src", "'self'", "blob:")
            }
        }) {
            val policy = assertNotNull(client.get("/").headers[CSP])
            assertContains(policy, "script-src 'self' https://plausible.io $THEME_HASH $BOOTSTRAP_HASH;")
            assertContains(policy, "connect-src 'self' https://plausible.io;")
            assertContains(policy, "object-src https://media.example;")
            assertContains(policy, "; worker-src 'self' blob:")
        }

    @Test
    fun `frame ancestors follow frame options`() {
        app({ securityHeaders { frameOptions = "SAMEORIGIN" } }) {
            assertContains(assertNotNull(client.get("/").headers[CSP]), "frame-ancestors 'self'")
        }
        app({ securityHeaders { frameOptions = null } }) {
            assertFalse("frame-ancestors" in assertNotNull(client.get("/").headers[CSP]))
        }
    }

    @Test
    fun `malformed sources are rejected`() {
        assertFailsWith<IllegalArgumentException> { SvelteSecurityHeadersConfig().allowCspSources("script-src", "a; b") }
        assertFailsWith<IllegalArgumentException> { SvelteSecurityHeadersConfig().allowCspSources("Script Src", "a") }
    }

    @Test
    fun `no policy is sent while proxying to vite`() =
        app({
            dev {
                url = "http://127.0.0.1:1"
                mode = DevMode.Always
            }
        }) {
            val response = client.get("/")
            assertNull(response.headers[CSP])
            assertEquals("nosniff", response.headers["X-Content-Type-Options"])
        }

    @Test
    fun `an explicit policy is not sent while proxying to vite`() =
        app({
            dev {
                url = "http://127.0.0.1:1"
                mode = DevMode.Always
            }
            securityHeaders { contentSecurityPolicy = "default-src 'self'" }
        }) {
            assertNull(client.get("/").headers[CSP])
        }

    @Test
    fun `inline script hashes skip external scripts and keep exact bytes`() {
        val html =
            """
            <script src="/a.js"></script>
            <script type="module" data-x='>'>var t=1;</script>
            <SCRIPT>var t=1;</SCRIPT >
            <script>${"\n  start();\n"}</script>
            """.trimIndent()
        assertEquals(listOf(THEME_HASH, BOOTSTRAP_HASH), inlineScriptHashes(html))
    }

    @Test
    fun `inline script hashes cover non ascii text as utf 8`() {
        val hash = inlineScriptHashes("<script>ü</script>").single()
        assertEquals("'sha256-YHR0ykdalyTXNgq6caVtXfd+YTUOP3JM+h9G6Ffi2F8='", hash)
    }
}
