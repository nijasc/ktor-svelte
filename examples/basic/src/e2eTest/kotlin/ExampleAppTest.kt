import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import java.io.File
import java.net.ServerSocket
import java.net.Socket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.fail

class ExampleAppTest {
    companion object {
        private lateinit var server: Process
        private var port: Int = 0
        private val http = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NEVER).build()

        @JvmStatic
        @BeforeAll
        fun start() {
            port = ServerSocket(0).use { it.localPort }
            val java = File(System.getProperty("java.home"), "bin/java").path
            server =
                ProcessBuilder(java, "-jar", System.getProperty("example.jar"))
                    .apply { environment()["PORT"] = port.toString() }
                    .redirectErrorStream(true)
                    .redirectOutput(ProcessBuilder.Redirect.DISCARD)
                    .start()
            repeat(100) {
                val ready = runCatching { request("/api/hello").statusCode() == 200 }.getOrDefault(false)
                if (ready) return
                Thread.sleep(100)
            }
            fail("Example app did not start")
        }

        @JvmStatic
        @AfterAll
        fun stop() {
            server.destroyForcibly()
        }

        private fun request(
            path: String,
            vararg headers: Pair<String, String>,
        ): HttpResponse<String> {
            val builder = HttpRequest.newBuilder(URI.create("http://localhost:$port$path"))
            headers.forEach { (name, value) -> builder.header(name, value) }
            return http.send(builder.build(), HttpResponse.BodyHandlers.ofString())
        }
    }

    private val html = "Accept" to "text/html"

    private fun statusOf(
        requestLine: String,
        host: String = "localhost:$port",
    ): String =
        Socket("localhost", port).use { socket ->
            socket.getOutputStream().write("$requestLine HTTP/1.1\r\nHost: $host\r\nAccept: text/html\r\nConnection: close\r\n\r\n".toByteArray())
            socket.getInputStream().bufferedReader().readLine().orEmpty()
        }

    @Test
    fun `requests that cannot be read are bad requests, not server errors`() {
        listOf("GET /%", "GET /%zz", "GET /api/%zz", "GET /_app/%").forEach { requestLine ->
            assertContains(statusOf(requestLine), " 400 ", message = requestLine)
        }
        listOf("/sitemap.xml", "/robots.txt").forEach { path ->
            assertContains(statusOf("GET $path", host = "localhost:$port@evil.example"), " 400 ", message = path)
        }
        assertContains(statusOf("GET /"), " 200 ")
    }

    @Test
    fun `api route answers on the same port`() {
        val response = request("/api/hello")
        assertEquals(200, response.statusCode())
        assertContains(response.body(), "Hello from Ktor")
    }

    @Test
    fun `prerendered pages are served`() {
        assertContains(request("/", html).body(), "Welcome to ktor-svelte")
        assertContains(request("/about", html).body(), "About this example")
    }

    @Test
    fun `trailing slash redirects to the prerendered page`() {
        val response = request("/about/?from=test", html)
        assertEquals(308, response.statusCode())
        assertEquals("/about?from=test", response.headers().firstValue("Location").orElse(""))
    }

    @Test
    fun `client side route gets the spa fallback`() {
        val response = request("/app", html)
        assertEquals(200, response.statusCode())
        assertContains(response.body(), "/_app/immutable/")
        assertFalse(response.body().contains("Welcome to ktor-svelte"))
    }

    @Test
    fun `unknown api path is not answered with html`() {
        val response = request("/api/typo", html)
        assertEquals(404, response.statusCode())
        assertFalse(response.body().contains("<html"))
    }

    @Test
    fun `missing chunk is 404`() {
        assertEquals(404, request("/_app/immutable/chunks/gone.js", html).statusCode())
    }

    @Test
    fun `immutable assets are cached forever and html is revalidated`() {
        val page = request("/", html)
        assertEquals("no-cache", page.headers().firstValue("Cache-Control").orElse(""))

        val asset = assertNotNull(Regex("""_app/immutable/[^"]+\.js""").find(page.body())).value
        val response = request("/$asset")
        assertEquals(200, response.statusCode())
        assertEquals("public, max-age=31536000, immutable", response.headers().firstValue("Cache-Control").orElse(""))
    }

    @Test
    fun `etag gives a 304`() {
        val eTag = request("/about", html).headers().firstValue("ETag").orElse("")
        assertEquals(304, request("/about", html, "If-None-Match" to eTag).statusCode())
    }

    @Test
    fun `precompressed files follow accept encoding`() {
        val brotli = request("/about", html, "Accept-Encoding" to "br")
        assertEquals("br", brotli.headers().firstValue("Content-Encoding").orElse(""))
        assertEquals("Accept-Encoding", brotli.headers().firstValue("Vary").orElse(""))

        val gzip = request("/about", html, "Accept-Encoding" to "gzip")
        assertEquals("gzip", gzip.headers().firstValue("Content-Encoding").orElse(""))

        val plain = request("/about", html)
        assertFalse(plain.headers().firstValue("Content-Encoding").isPresent)
    }
}
