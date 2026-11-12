import com.microsoft.playwright.Browser
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.ServerSocket
import java.net.Socket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Path
import java.util.regex.Pattern
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import kotlin.test.fail

private const val APP_PORT = 8080
private const val VITE_PORT = 5173
private const val APP = "http://localhost:$APP_PORT"
private const val ADMIN_EMAIL = "ada@example.com"
private const val ADMIN_PASSWORD = "dev-browser-admin-password"
private const val MEMBER_PASSWORD = "dev-browser-member-password"
private const val START_SECONDS = 240
private const val CHANGE_SECONDS = 180

class DevModeBrowserTest {
    companion object {
        @TempDir
        @JvmStatic
        lateinit var directory: Path

        private val project = File(System.getProperty("example.dir"))
        private val log = File(project, "build/dev-browser-test.log")
        private val http = HttpClient.newHttpClient()
        private val originals = mutableMapOf<File, String>()
        private lateinit var gradle: Process
        private lateinit var playwright: Playwright
        private lateinit var browser: Browser

        private fun portIsFree(port: Int): Boolean = runCatching { ServerSocket(port).close() }.isSuccess

        private var lastAnswer = "no request yet"

        fun get(path: String): HttpResponse<String>? {
            val request = HttpRequest.newBuilder(URI.create(APP + path)).header("Accept", "text/html, */*").build()
            val answer = runCatching { http.send(request, HttpResponse.BodyHandlers.ofString()) }
            lastAnswer = "$path answered " + answer.fold({ it.statusCode().toString() }, { it.toString() })
            return answer.getOrNull()
        }

        fun waitFor(
            what: String,
            seconds: Int,
            condition: () -> Boolean,
        ) {
            repeat(seconds * 2) {
                if (runCatching(condition).getOrDefault(false)) return
                Thread.sleep(500)
            }
            fail("Timed out waiting for $what. The last request: $lastAnswer. The dev log ends with: " + log.readLines().takeLast(15).joinToString(" | "))
        }

        fun change(
            file: File,
            edit: (String) -> String,
        ) {
            val current = file.readText()
            originals.putIfAbsent(file, current)
            val edited = edit(current)
            check(edited != current) { "The edit did not change ${file.name}" }
            file.writeText(edited)
        }

        fun restore(file: File) {
            originals.remove(file)?.let(file::writeText)
        }

        @JvmStatic
        @BeforeAll
        fun start() {
            check(portIsFree(APP_PORT) && portIsFree(VITE_PORT)) { "Ports $APP_PORT and $VITE_PORT must be free for the development mode test." }
            Runtime.getRuntime().addShutdownHook(Thread { originals.forEach { (file, content) -> file.writeText(content) } })
            val windows = System.getProperty("os.name").startsWith("Windows")
            val wrapper = File(project, if (windows) "../../gradlew.bat" else "../../gradlew").canonicalPath
            log.parentFile.mkdirs()
            gradle =
                ProcessBuilder(wrapper, "-p", project.path, "svelteDevAll", "--console=plain")
                    .apply {
                        environment()["CI"] = "true"
                        environment()["SHOWCASE_DATA"] = directory.resolve("data").toString()
                        environment()["SHOWCASE_ADMIN_PASSWORD"] = ADMIN_PASSWORD
                        environment()["SHOWCASE_MEMBER_PASSWORD"] = MEMBER_PASSWORD
                    }.redirectErrorStream(true)
                    .redirectOutput(log)
                    .start()
            waitFor("the app and Vite", START_SECONDS) { get("/_ktor-svelte/health")?.statusCode() == 200 && get("/")?.statusCode() == 200 }
            playwright = Playwright.create()
            browser = playwright.chromium().launch()
        }

        @JvmStatic
        @AfterAll
        fun stop() {
            runCatching { browser.close() }
            runCatching { playwright.close() }
            originals.keys.toList().forEach(::restore)
            val processes = gradle.toHandle().descendants().toList() + gradle.toHandle()
            processes.forEach { it.destroyForcibly() }
            repeat(40) {
                if (portIsFree(APP_PORT) && portIsFree(VITE_PORT)) return
                Thread.sleep(250)
            }
        }
    }

    private lateinit var context: BrowserContext
    private lateinit var page: Page

    @BeforeEach
    fun open() {
        context = browser.newContext(Browser.NewContextOptions().setBaseURL(APP).setLocale("en-US"))
        page = context.newPage()
    }

    @AfterEach
    fun close() {
        context.close()
    }

    @Test
    fun `pages come from Vite through the app port with hot reload connected`() {
        val messages = mutableListOf<String>()
        page.onConsoleMessage { messages += it.text() }
        page.navigate("/")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("A team board in one JAR")
        assertThat(page.locator("#greeting")).containsText("Hello SvelteKit, greetings from Ktor!")
        waitFor("the Vite client to connect", 30) { messages.any { "[vite] connected" in it } }
        assertContains(get("/@vite/client")?.body().orEmpty(), "createHotContext")
    }

    @Test
    fun `saving a Svelte file updates the page without a reload`() {
        val about = File(project, "frontend/src/routes/about/+page.svelte")
        page.navigate("/about")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
        page.evaluate("window.keptAcrossUpdates = true")
        try {
            change(about) { "$it\n<p id=\"hot-reload-marker\">Changed while the page was open.</p>\n" }
            assertThat(page.locator("#hot-reload-marker")).hasText(
                "Changed while the page was open.",
                com.microsoft.playwright.assertions.LocatorAssertions.HasTextOptions().setTimeout(60_000.0),
            )
            assertEquals(true, page.evaluate("window.keptAcrossUpdates === true"))
        } finally {
            restore(about)
        }
        assertThat(page.locator("#hot-reload-marker")).hasCount(
            0,
            com.microsoft.playwright.assertions.LocatorAssertions.HasCountOptions().setTimeout(60_000.0),
        )
    }

    @Test
    fun `saving a Kotlin file restarts the app with the change`() {
        val routes = File(project, "src/main/kotlin/showcase/TaskRoutes.kt")
        assertContains(get("/api/greeting")?.body().orEmpty(), "Hello Ktor")
        try {
            change(routes) { it.replace("?: \"Ktor\"", "?: \"reloaded Kotlin\"") }
            waitFor("the app to restart with the new route", CHANGE_SECONDS) { "Hello reloaded Kotlin" in get("/api/greeting")?.body().orEmpty() }
        } finally {
            restore(routes)
        }
        waitFor("the app to restart with the old route", CHANGE_SECONDS) { "Hello Ktor" in get("/api/greeting")?.body().orEmpty() }
    }

    @Test
    fun `signing in works through the dev proxy and the board loads its data`() {
        page.navigate("/board")
        assertThat(page).hasURL(Pattern.compile(".*/login$"))
        assertThat(page.getByRole(AriaRole.BANNER).getByRole(AriaRole.LINK).last()).hasText("Sign in")
        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill(ADMIN_PASSWORD)
        page.getByRole(AriaRole.MAIN).getByRole(AriaRole.BUTTON).click()
        assertThat(page).hasURL(Pattern.compile(".*/board$"))
        assertThat(page.locator("#tasks > li").first()).isVisible()
        page.reload()
        assertThat(page.locator("#signed-in-as")).hasText("Ada Lovelace")
    }

    @Test
    fun `browser errors show up in the dev console`() {
        val marker = "dev-console-marker-${System.nanoTime()}"
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("Hello")
        page.evaluate("marker => console.error(marker)", marker)
        waitFor("the browser error in the dev log", 30) { log.readText().lines().any { marker in it && "browser" in it } }
    }

    @Test
    fun `api docs are served in development`() {
        val docs = get("/api/docs")
        assertEquals(200, docs?.statusCode())
        assertContains(docs?.body().orEmpty(), "swagger", ignoreCase = true)
    }

    @Test
    fun `requests for another host are not proxied`() {
        Socket("localhost", APP_PORT).use { socket ->
            socket.getOutputStream().write("GET / HTTP/1.1\r\nHost: evil.example\r\nAccept: text/html\r\nConnection: close\r\n\r\n".toByteArray())
            val status = socket.getInputStream().bufferedReader().readLine().orEmpty()
            assertTrue(status.contains(" 403") || status.contains(" 421") || status.contains(" 400"), status)
        }
    }
}
