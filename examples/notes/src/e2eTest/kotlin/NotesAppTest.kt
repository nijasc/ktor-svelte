import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import java.io.ByteArrayInputStream
import java.io.File
import java.net.ServerSocket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.util.zip.GZIPInputStream
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.fail

class NotesAppTest {
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
                    .apply {
                        environment()["PORT"] = port.toString()
                        environment()["APP_NAME"] = "from e2e"
                    }
                    .redirectErrorStream(true)
                    .redirectOutput(ProcessBuilder.Redirect.DISCARD)
                    .start()
            repeat(100) {
                val ready = runCatching { send("GET", "/api/stats").statusCode() == 200 }.getOrDefault(false)
                if (ready) return
                Thread.sleep(100)
            }
            fail("Notes app did not start")
        }

        @JvmStatic
        @AfterAll
        fun stop() {
            server.destroyForcibly()
        }

        private fun send(
            method: String,
            path: String,
            body: String? = null,
            vararg headers: Pair<String, String>,
        ): HttpResponse<String> {
            val publisher = body?.let(HttpRequest.BodyPublishers::ofString) ?: HttpRequest.BodyPublishers.noBody()
            val builder = HttpRequest.newBuilder(URI.create("http://localhost:$port$path")).method(method, publisher)
            if (body != null) builder.header("Content-Type", "application/json")
            headers.forEach { (name, value) -> builder.header(name, value) }
            return http.send(builder.build(), HttpResponse.BodyHandlers.ofString())
        }
    }

    private val html = "Accept" to "text/html"

    @Test
    fun `notes can be created read updated archived and deleted`() {
        val created = send("POST", "/api/notes", """{"title":"Milk","tags":["shop"]}""")
        assertEquals(201, created.statusCode())
        val id = Regex(""""id":\s*(\d+)""").find(created.body())!!.groupValues[1]

        assertContains(send("GET", "/api/notes/$id").body(), "Milk")

        val updated = send("PUT", "/api/notes/$id", """{"title":"Oat milk"}""")
        assertContains(updated.body(), "Oat milk")

        assertContains(send("POST", "/api/notes/$id/archive").body(), "ARCHIVED")

        assertEquals(204, send("DELETE", "/api/notes/$id").statusCode())
        assertEquals(404, send("GET", "/api/notes/$id").statusCode())
    }

    @Test
    fun `public config is served and uses the environment`() {
        val response = send("GET", "/_ktor-svelte/config.json")
        assertEquals(200, response.statusCode())
        assertContains(response.body(), """"appName":"from e2e"""")
    }

    @Test
    fun `security headers are sent on pages and api calls`() {
        listOf("/", "/api/stats", "/api/nothing").forEach { path ->
            assertEquals("nosniff", send("GET", path).headers().firstValue("X-Content-Type-Options").orElse(""), path)
        }
    }

    @Test
    fun `api docs are not served in production`() {
        assertEquals(404, send("GET", "/api/docs").statusCode())
    }

    @Test
    fun `updates are validated by the same rules`() {
        val created = send("POST", "/api/notes", """{"title":"Keep"}""")
        val id = Regex(""""id":\s*(\d+)""").find(created.body())!!.groupValues[1]
        assertEquals(422, send("PUT", "/api/notes/$id", """{"title":" "}""").statusCode())
    }

    @Test
    fun `search filters notes`() {
        assertContains(send("GET", "/api/notes?search=welcome").body(), "Welcome")
        assertFalse(send("GET", "/api/notes?search=nothing-matches").body().contains("Welcome"))
    }

    @Test
    fun `validation errors come back as json`() {
        val response = send("POST", "/api/notes", """{"title":" "}""")
        assertEquals(422, response.statusCode())
        assertContains(response.body(), """"title":["A note needs a title."]""")
    }

    @Test
    fun `api answers json or xml based on accept`() {
        val json = send("GET", "/api/notes/export", null, "Accept" to "application/json")
        assertContains(json.headers().firstValue("Content-Type").orElse(""), "json")
        val xml = send("GET", "/api/notes/export", null, "Accept" to "application/xml")
        assertContains(xml.headers().firstValue("Content-Type").orElse(""), "xml")
        assertContains(xml.body(), "<NotesExport")
    }

    @Test
    fun `api responses are compressed when large enough`() {
        repeat(5) { send("POST", "/api/notes", """{"title":"Filler","body":"${"x".repeat(1000)}"}""") }
        val request =
            HttpRequest
                .newBuilder(URI.create("http://localhost:$port/api/notes"))
                .header("Accept-Encoding", "gzip")
                .build()
        val response = http.send(request, HttpResponse.BodyHandlers.ofByteArray())
        assertEquals("gzip", response.headers().firstValue("Content-Encoding").orElse(""))
        val text = GZIPInputStream(ByteArrayInputStream(response.body())).readBytes().decodeToString()
        assertContains(text, "Welcome")
    }

    @Test
    fun `prerendered pages and spa routes are served`() {
        assertContains(send("GET", "/", null, html).body(), "One app, one JAR, one port")
        assertContains(send("GET", "/about", null, html).body(), "About this example")
        val detail = send("GET", "/notes/1", null, html)
        assertEquals(200, detail.statusCode())
        assertContains(detail.body(), "/_app/immutable/")
        assertFalse(detail.body().contains("One app, one JAR"))
    }
}
