package io.github.nijasc.ktor.svelte

import ch.qos.logback.classic.Logger
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.read.ListAppender
import io.github.nijasc.ktor.svelte.internal.WARM_UP_HEADER
import io.github.nijasc.ktor.svelte.internal.WarmUpResult
import io.github.nijasc.ktor.svelte.internal.warmUpBaseUrl
import io.github.nijasc.ktor.svelte.internal.warmUpLine
import io.ktor.server.application.install
import io.ktor.server.application.serverConfig
import io.ktor.server.engine.ConnectorType
import io.ktor.server.engine.EngineConnectorBuilder
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.request.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class WarmUpTest {
    @Test
    fun `the app calls its own routes once and reports ready only afterwards`() {
        val logger = LoggerFactory.getLogger("warm-up-test") as Logger
        val appender = ListAppender<ILoggingEvent>().apply { start() }
        logger.addAppender(appender)
        val release = CountDownLatch(1)
        val calls = CopyOnWriteArrayList<String>()
        val server =
            embeddedServer(
                Netty,
                rootConfig =
                    serverConfig(applicationEnvironment { log = logger }) {
                        developmentMode = false
                        watchPaths = emptyList()
                        module {
                            install(Svelte) {
                                source = SvelteSource.Directory(fixtureBuild())
                                healthEndpoint = true
                                warmUp("/api/slow", "/api/broken")
                            }
                            routing {
                                get("/api/slow") {
                                    calls += "slow ${call.request.header(WARM_UP_HEADER)}"
                                    release.await(10, TimeUnit.SECONDS)
                                    call.respondText("ok")
                                }
                                get("/api/broken") {
                                    calls += "broken"
                                    error("boom")
                                }
                            }
                        }
                    },
                configure = {
                    connector {
                        host = "127.0.0.1"
                        port = 0
                    }
                },
            )
        try {
            server.start(wait = false)
            val port =
                runBlocking {
                    server.engine
                        .resolvedConnectors()
                        .first()
                        .port
                }
            val health = { get("http://127.0.0.1:$port/_ktor-svelte/health") }
            assertEquals(503 to """{"status":"starting"}""", health())
            release.countDown()
            val deadline = System.currentTimeMillis() + 10_000
            while (health().first != 200 && System.currentTimeMillis() < deadline) Thread.sleep(20)
            assertEquals(200 to """{"status":"up"}""", health())
            assertEquals(listOf("slow true", "broken"), calls.toList())
            val messages = appender.list.map { it.formattedMessage }
            assertTrue(messages.any { it.startsWith("ktor-svelte: warm-up call GET /api/broken answered 500") }, messages.toString())
            assertTrue(messages.any { it.startsWith("ktor-svelte: warmed up 2 route(s) in ") }, messages.toString())
        } finally {
            release.countDown()
            server.stop(0, 0)
            logger.detachAppender(appender)
        }
    }

    @Test
    fun `the warm-up goes to the HTTP connector, on loopback when it listens everywhere`() {
        fun connector(
            type: ConnectorType,
            host: String,
            port: Int,
        ) = EngineConnectorBuilder(type).apply {
            this.host = host
            this.port = port
        }
        assertEquals("http://127.0.0.1:8080", warmUpBaseUrl(listOf(connector(ConnectorType.HTTP, "0.0.0.0", 8080))))
        val both = listOf(connector(ConnectorType.HTTPS, "x", 1), connector(ConnectorType.HTTP, "10.0.0.5", 9000))
        assertEquals("http://10.0.0.5:9000", warmUpBaseUrl(both))
        assertEquals("http://[::1]:80", warmUpBaseUrl(listOf(connector(ConnectorType.HTTP, "::1", 80))))
        assertEquals(null, warmUpBaseUrl(listOf(connector(ConnectorType.HTTPS, "x", 1))))
    }

    @Test
    fun `the log line counts the calls that did not answer well`() {
        assertEquals("ktor-svelte: warmed up 1 route(s) in 120 ms.", warmUpLine(listOf(WarmUpResult("/", 200, null)), 120))
        assertContains(warmUpLine(listOf(WarmUpResult("/", null, "failed")), 1500), "in 1.5 s, 1 of them did not answer well.")
    }

    @Test
    fun `warm-up paths start with a slash`() {
        assertFailsWith<IllegalArgumentException> { SvelteConfig().warmUp("api/notes") }
    }

    private fun get(url: String): Pair<Int, String> {
        val response =
            HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), HttpResponse.BodyHandlers.ofString())
        return response.statusCode() to response.body()
    }
}
