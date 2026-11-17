package io.github.nijasc.ktor.svelte.test

import com.sun.net.httpserver.HttpServer
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.InetSocketAddress
import java.net.URI
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class TinyApp {
    companion object {
        @JvmStatic
        fun main(arguments: Array<String>) {
            val port =
                System.getenv("PORT")?.toIntOrNull() ?: run {
                    println("no port given")
                    kotlin.system.exitProcess(7)
                }
            val server = HttpServer.create(InetSocketAddress("127.0.0.1", port), 0)
            server.createContext("/") { exchange ->
                val body = "hello ${System.getenv("GREETING") ?: "nobody"} ${arguments.joinToString()}".toByteArray()
                exchange.sendResponseHeaders(200, body.size.toLong())
                exchange.responseBody.use { it.write(body) }
            }
            server.start()
        }
    }
}

class TestAppTest {
    @TempDir
    lateinit var dir: File

    private fun withApp(
        mainClass: String,
        block: () -> Unit,
    ) {
        System.setProperty(CLASSPATH_PROPERTY, System.getProperty("java.class.path"))
        System.setProperty(MAIN_CLASS_PROPERTY, mainClass)
        try {
            block()
        } finally {
            System.clearProperty(CLASSPATH_PROPERTY)
            System.clearProperty(MAIN_CLASS_PROPERTY)
        }
    }

    @Test
    fun `the app is started on a free port with the environment the test gives it, and stopped again`() =
        withApp(TinyApp::class.java.name) {
            val address: String
            TestApp.start(environment = mapOf("GREETING" to "tests")).use { app ->
                address = app.url
                val answer = URI(app.url + "/").toURL().readText()
                assertTrue(answer.startsWith("hello tests -port="), answer)
                assertTrue(app.log.isFile)
            }
            assertFailsWith<java.io.IOException> { URI("$address/").toURL().readText() }
        }

    @Test
    fun `the same environment shares one app, another one gets its own`() =
        withApp(TinyApp::class.java.name) {
            val first = TestApp.shared(mapOf("GREETING" to "one"))
            assertEquals(first.url, TestApp.shared(mapOf("GREETING" to "one")).url)
            val second = TestApp.shared(mapOf("GREETING" to "two"))
            assertTrue(first.url != second.url)
            assertContains(URI(second.url + "/").toURL().readText(), "hello two")
        }

    @Test
    fun `an app that does not start fails the test with the end of its output`() =
        withApp("no.such.Main") {
            val failure = assertFailsWith<IllegalStateException> { TestApp.start(startSeconds = 20) }
            assertContains(failure.message.orEmpty(), "The app stopped with exit code")
            assertContains(failure.message.orEmpty(), "no.such.Main")
        }

    @Test
    fun `the start command comes from the JAR, or from a classpath and a main class`() {
        assertEquals(listOf("-jar", "app.jar"), TestApp.startCommand("app.jar", null, null).drop(1))
        assertEquals(listOf("-cp", "a:b", "demo.Main"), TestApp.startCommand(null, "a:b", "demo.Main").drop(1))
        val failure = assertFailsWith<IllegalStateException> { TestApp.startCommand(null, null, null) }
        assertContains(failure.message.orEmpty(), "in a test suite called browserTest")
    }
}
