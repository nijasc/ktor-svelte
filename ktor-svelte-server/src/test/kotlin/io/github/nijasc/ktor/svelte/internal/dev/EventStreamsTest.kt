package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import java.io.Writer
import java.net.Socket
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertIs

class EventStreamsTest {
    private class Exchange(
        val outcome: Result<Unit>,
        val received: String,
    )

    private fun stream(
        leaveAfterFirstBytes: Boolean,
        events: suspend Writer.() -> Unit,
    ): Exchange {
        val outcome = CompletableFuture<Result<Unit>>()
        val server =
            embeddedServer(
                Netty,
                configure = {
                    connector {
                        host = "127.0.0.1"
                        port = 0
                    }
                    responseWriteTimeoutSeconds = 1
                },
            ) {
                routing {
                    get("/events") {
                        outcome.complete(runCatching { call.respondEventStreamUntilDisconnect(events) })
                    }
                }
            }.start()
        try {
            val port =
                runBlocking {
                    server.engine
                        .resolvedConnectors()
                        .first()
                        .port
                }
            val received = StringBuilder()
            Socket("127.0.0.1", port).use { socket ->
                socket.getOutputStream().write("GET /events HTTP/1.1\r\nHost: localhost\r\n\r\n".toByteArray())
                socket.getOutputStream().flush()
                val buffer = ByteArray(4096)
                do {
                    val read = socket.getInputStream().read(buffer)
                    if (read > 0) received.append(String(buffer, 0, read))
                } while (read > 0 && !leaveAfterFirstBytes && !outcome.isDone)
            }
            return Exchange(outcome.get(20, TimeUnit.SECONDS), received.toString())
        } finally {
            server.stop(0, 0)
        }
    }

    @Test
    fun `a browser that leaves mid-stream ends the stream without failing the request`() {
        val exchange =
            stream(leaveAfterFirstBytes = true) {
                while (true) {
                    write("data: tick\n\n")
                    flush()
                    delay(20)
                }
            }
        assertEquals(Result.success(Unit), exchange.outcome)
    }

    @Test
    fun `a stream with nothing to send yet opens at once and outlives the write timeout`() {
        val exchange = stream(leaveAfterFirstBytes = false) { delay(2500) }
        assertEquals(Result.success(Unit), exchange.outcome)
        assertContains(exchange.received, "text/event-stream")
        assertContains(exchange.received, ": connected")
    }

    @Test
    fun `other failures in a stream are not hidden`() {
        val exchange = stream(leaveAfterFirstBytes = true) { error("broken") }
        assertIs<IllegalStateException>(exchange.outcome.exceptionOrNull())
    }
}
