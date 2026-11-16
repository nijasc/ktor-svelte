package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.NetworkRange
import io.github.nijasc.ktor.svelte.internal.security.pathSegments
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.plugins.forwardedheaders.XForwardedHeaders
import io.ktor.server.request.header
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

private const val TOKEN = "a-long-random-internal-token"
private const val STATUS = "/_ktor-svelte/status"

class InternalAccessTest {
    private fun app(
        development: Boolean = false,
        trustProxy: Boolean = false,
        configure: SvelteConfig.() -> Unit,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        serverConfig { developmentMode = development }
        val build = fixtureBuild()
        application {
            if (trustProxy) install(XForwardedHeaders)
            install(Svelte) {
                source = SvelteSource.Directory(build)
                statusEndpoint = true
                dev { mode = DevMode.Never }
                configure()
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.fromOutside(
        path: String,
        client: String = "203.0.113.9",
        token: String? = null,
        extra: Pair<String, String>? = null,
    ): HttpResponse =
        this.client.get(path) {
            header(HttpHeaders.XForwardedFor, client)
            token?.let { header(HttpHeaders.Authorization, "Bearer $it") }
            extra?.let { header(it.first, it.second) }
        }

    @Test
    fun `without a setting only this machine gets an answer, as before`() =
        app(configure = {}) {
            assertEquals(HttpStatusCode.OK, client.get(STATUS).status)
            val refused = fromOutside(STATUS)
            assertEquals(HttpStatusCode.Forbidden, refused.status)
            assertEquals("The ktor-svelte status endpoint only answers requests from this machine.", refused.bodyAsText())
        }

    @Test
    fun `a token opens the endpoint to whoever sends it`() =
        app(configure = { internalAccess { token = TOKEN } }) {
            val missing = fromOutside(STATUS)
            assertEquals(HttpStatusCode.Unauthorized, missing.status)
            assertEquals("Bearer", missing.headers[HttpHeaders.WWWAuthenticate])
            assertEquals("no-store", missing.headers[HttpHeaders.CacheControl])
            assertEquals("This endpoint is internal.", missing.bodyAsText())

            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, token = "$TOKEN-almost").status)
            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, token = "").status)
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, token = TOKEN).status)
            assertEquals(HttpStatusCode.OK, client.get(STATUS).status)
        }

    @Test
    fun `a network range opens the endpoint to clients a trusted proxy reports from it`() =
        app(trustProxy = true, configure = { internalAccess { networks("10.0.0.0/8", "fd00::/8", "192.0.2.7") } }) {
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, client = "10.20.30.40").status)
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, client = "fd12:3456::1").status)
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, client = "192.0.2.7").status)
            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, client = "192.0.2.8").status)
            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, client = "11.0.0.1").status)
            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, client = "2001:db8::1").status)
        }

    @Test
    fun `behind a proxy the app cannot see through, a network range opens nothing`() =
        app(configure = { internalAccess { networks("0.0.0.0/0", "::/0") } }) {
            assertEquals(HttpStatusCode.Forbidden, fromOutside(STATUS, client = "10.20.30.40").status)
        }

    @Test
    fun `a check of your own decides too, and any one way in is enough`() =
        app(
            configure = {
                internalAccess {
                    token = TOKEN
                    allow { call -> call.request.header("X-Role") == "admin" }
                }
            },
        ) {
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, extra = "X-Role" to "admin").status)
            assertEquals(HttpStatusCode.Unauthorized, fromOutside(STATUS, extra = "X-Role" to "member").status)
            assertEquals(HttpStatusCode.OK, fromOutside(STATUS, token = TOKEN).status)
        }

    @Test
    fun `the API docs leave development only when access is set up, and then they are guarded`() {
        app(configure = { apiDocs = true }) {
            assertFalse("swagger" in client.get("/api/docs").bodyAsText().lowercase())
        }
        app(
            configure = {
                apiDocs = true
                internalAccess { token = TOKEN }
            },
        ) {
            assertEquals(HttpStatusCode.Unauthorized, fromOutside("/api/docs").status)
            assertEquals(HttpStatusCode.Unauthorized, fromOutside("/api/docs/swagger-initializer.js").status)
            listOf("http://localhost//api/docs", "/api//docs", "/api/docs/", "/api/%64ocs", "/api/docs?x=1").forEach { path ->
                assertFalse("swagger" in fromOutside(path).bodyAsText().lowercase(), "$path got past the check")
            }
            val allowed = fromOutside("/api/docs", token = TOKEN)
            assertEquals(HttpStatusCode.OK, allowed.status)
            assertContains(allowed.bodyAsText().lowercase(), "swagger")
            assertFalse("swagger" in fromOutside("/api/docs").bodyAsText().lowercase())
            assertEquals(HttpStatusCode.OK, fromOutside("/").status)
        }
    }

    @Test
    fun `in development the docs stay open, with or without the setting`() =
        app(
            development = true,
            configure = {
                apiDocs = true
                internalAccess { token = TOKEN }
            },
        ) {
            assertContains(fromOutside("/api/docs").bodyAsText().lowercase(), "swagger")
        }

    @Test
    fun `a short token or a range that is none stops the app at startup`() {
        val short =
            assertFailsWith<IllegalArgumentException> { app(configure = { internalAccess { token = "secret" } }) { startApplication() } }
        assertContains(short.message.orEmpty(), "the token is shorter than 16 characters")
        val range =
            assertFailsWith<IllegalArgumentException> { app(configure = { internalAccess { networks("office") } }) { startApplication() } }
        assertContains(range.message.orEmpty(), "'office' is not a network range")
    }

    @Test
    fun `paths are compared by their segments`() {
        assertEquals(listOf("api", "docs"), pathSegments("//api///docs/"))
        assertEquals(emptyList(), pathSegments("/"))
    }

    @Test
    fun `network ranges match by prefix and never look a name up`() {
        val range = NetworkRange.parse("192.168.4.0/22")
        assertTrue(range.contains("192.168.4.1"))
        assertTrue(range.contains("192.168.7.255"))
        assertFalse(range.contains("192.168.8.0"))
        assertFalse(range.contains("::1"))
        assertFalse(range.contains("localhost"))
        assertFalse(range.contains("192.168.4"))
        assertTrue(NetworkRange.parse("::1").contains("0:0:0:0:0:0:0:1"))
        assertTrue(NetworkRange.parse("fe80::/10").contains("fe80::1%eth0"))
        listOf("10.0.0.0/33", "10.0.0.0/x", "example.com/8", "", "10.0.0/8").forEach { bad ->
            assertFailsWith<IllegalArgumentException>(bad) { NetworkRange.parse(bad) }
        }
    }
}
