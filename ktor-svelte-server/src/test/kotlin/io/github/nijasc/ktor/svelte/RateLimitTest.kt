package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.plugins.forwardedheaders.XForwardedHeaders
import io.ktor.server.plugins.ratelimit.RateLimit
import io.ktor.server.plugins.ratelimit.RateLimitName
import io.ktor.server.plugins.ratelimit.rateLimit
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNotNull
import kotlin.time.Duration.Companion.minutes

class RateLimitTest {
    private fun rateLimited(
        config: SvelteConfig.() -> Unit,
        block: suspend ApplicationTestBuilder.() -> Unit,
    ) = testApplication {
        val build = fixtureBuild()
        application {
            install(XForwardedHeaders)
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                config()
            }
            routing {
                post("/api/notes") { call.respondText("created") }
                get("/api/notes") { call.respondText("listed") }
                rateLimit(RateLimitName("login")) {
                    post("/api/login") { call.respondText("welcome") }
                }
            }
        }
        block()
    }

    private suspend fun ApplicationTestBuilder.postFrom(
        path: String,
        client: String,
    ) = this.client.post(path) { header(HttpHeaders.XForwardedFor, client) }

    @Test
    fun `api writes are limited per client and reads are not`() =
        rateLimited({
            rateLimit {
                apiWrites = 3
                limit("login", 5, 1.minutes)
            }
        }) {
            repeat(3) { assertEquals(HttpStatusCode.OK, postFrom("/api/notes", "203.0.113.1").status) }
            val refused = postFrom("/api/notes", "203.0.113.1")
            assertEquals(HttpStatusCode.TooManyRequests, refused.status)
            assertNotNull(refused.headers[HttpHeaders.RetryAfter])

            assertEquals(HttpStatusCode.OK, postFrom("/api/notes", "203.0.113.2").status)
            repeat(
                10,
            ) { assertEquals(HttpStatusCode.OK, client.get("/api/notes") { header(HttpHeaders.XForwardedFor, "203.0.113.1") }.status) }
            repeat(10) { assertEquals(HttpStatusCode.OK, client.get("/about").status) }
        }

    @Test
    fun `named limits protect chosen routes`() =
        rateLimited({ rateLimit { limit("login", requests = 2, per = 1.minutes) } }) {
            repeat(2) { assertEquals(HttpStatusCode.OK, postFrom("/api/login", "198.51.100.9").status) }
            assertEquals(HttpStatusCode.TooManyRequests, postFrom("/api/login", "198.51.100.9").status)
            assertEquals(HttpStatusCode.OK, postFrom("/api/login", "198.51.100.10").status)
        }

    @Test
    fun `the default allows normal use`() =
        rateLimited({ rateLimit { limit("login", 100, 1.minutes) } }) {
            repeat(120) { assertEquals(HttpStatusCode.OK, postFrom("/api/notes", "192.0.2.1").status) }
            assertEquals(HttpStatusCode.TooManyRequests, postFrom("/api/notes", "192.0.2.1").status)
        }

    @Test
    fun `rate limits can be turned off to install RateLimit yourself`() =
        testApplication {
            val build = fixtureBuild()
            application {
                install(RateLimit) { register(RateLimitName("mine")) { rateLimiter(limit = 1, refillPeriod = 1.minutes) } }
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.NEVER }
                    rateLimit { enabled = false }
                }
                routing { post("/api/notes") { call.respondText("created") } }
            }
            repeat(200) { assertEquals(HttpStatusCode.OK, client.post("/api/notes").status) }
        }

    @Test
    fun `installing RateLimit yourself without turning ours off fails clearly`() {
        val failure =
            assertFailsWith<IllegalStateException> {
                testApplication {
                    val build = fixtureBuild()
                    application {
                        install(RateLimit) { register(RateLimitName("mine")) { rateLimiter(limit = 1, refillPeriod = 1.minutes) } }
                        install(Svelte) {
                            source = SvelteSource.Directory(build)
                            dev { mode = DevMode.NEVER }
                        }
                    }
                    startApplication()
                }
            }
        assertEquals(true, failure.message?.contains("rateLimit { enabled = false }"))
    }

    @Test
    fun `a custom key decides who shares a limit`() =
        rateLimited({
            rateLimit {
                apiWrites = 2
                key { call -> call.request.headers["X-User"] ?: "anonymous" }
                limit("login", 5, 1.minutes)
            }
        }) {
            suspend fun postAs(
                user: String,
                address: String,
            ) = client.post("/api/notes") {
                header("X-User", user)
                header(HttpHeaders.XForwardedFor, address)
            }
            assertEquals(HttpStatusCode.OK, postAs("ada", "203.0.113.1").status)
            assertEquals(HttpStatusCode.OK, postAs("ada", "203.0.113.2").status)
            assertEquals(HttpStatusCode.TooManyRequests, postAs("ada", "203.0.113.3").status)
            assertEquals(HttpStatusCode.OK, postAs("grace", "203.0.113.1").status)
        }

    @Test
    fun `a named limit can use its own key`() =
        rateLimited({
            rateLimit {
                limit("login", requests = 1, per = 1.minutes) { call -> call.request.headers["X-Account"] ?: "none" }
            }
        }) {
            suspend fun login(
                account: String,
                address: String,
            ) = client.post("/api/login") {
                header("X-Account", account)
                header(HttpHeaders.XForwardedFor, address)
            }
            assertEquals(HttpStatusCode.OK, login("ada@example.com", "198.51.100.1").status)
            assertEquals(HttpStatusCode.TooManyRequests, login("ada@example.com", "198.51.100.2").status)
            assertEquals(HttpStatusCode.OK, login("grace@example.com", "198.51.100.1").status)
        }

    @Test
    fun `invalid named limits are rejected`() {
        assertFailsWith<IllegalArgumentException> { SvelteRateLimitConfig().limit("login", 0, 1.minutes) }
        assertFailsWith<IllegalArgumentException> { SvelteRateLimitConfig().limit("login", 1, 0.minutes) }
    }
}
