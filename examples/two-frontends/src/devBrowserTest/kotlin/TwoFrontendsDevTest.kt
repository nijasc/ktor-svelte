import com.microsoft.playwright.Browser
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import java.io.File
import java.net.ServerSocket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.fail

private val APP_PORT = System.getProperty("dev.appPort", "18081").toInt()
private val VITE_PORT = System.getProperty("dev.vitePort", "15174").toInt()
private val ADMIN_VITE_PORT = System.getProperty("dev.adminVitePort", "15175").toInt()
private val APP = "http://localhost:$APP_PORT"
private const val START_SECONDS = 240

class TwoFrontendsDevTest {
    companion object {
        private val project = File(System.getProperty("example.dir"))
        private val log = File(project, "build/dev-browser-test.log")
        private val http = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NORMAL).build()
        private lateinit var gradle: Process
        private lateinit var playwright: Playwright
        private lateinit var browser: Browser

        private fun portIsFree(port: Int): Boolean = runCatching { ServerSocket(port).close() }.isSuccess

        fun get(path: String): HttpResponse<String>? =
            runCatching {
                http.send(
                    HttpRequest.newBuilder(URI.create(APP + path)).header("Accept", "text/html, */*").build(),
                    HttpResponse.BodyHandlers.ofString(),
                )
            }.getOrNull()

        private fun waitFor(
            what: String,
            condition: () -> Boolean,
        ) {
            repeat(START_SECONDS * 2) {
                if (runCatching(condition).getOrDefault(false)) return
                Thread.sleep(500)
            }
            val admin = get("/admin")
            fail(
                "Timed out waiting for $what. /admin answered ${admin?.statusCode()}: ${admin?.body().orEmpty().take(600)}. " +
                    "The dev log ends with: " + log.readLines().takeLast(20).joinToString(" | "),
            )
        }

        @JvmStatic
        @BeforeAll
        fun start() {
            listOf(APP_PORT, VITE_PORT, ADMIN_VITE_PORT).forEach { check(portIsFree(it)) { "Port $it must be free for the development mode test." } }
            val windows = System.getProperty("os.name").startsWith("Windows")
            val wrapper = File(project, if (windows) "../../gradlew.bat" else "../../gradlew").canonicalPath
            log.parentFile.mkdirs()
            gradle =
                ProcessBuilder(
                    wrapper,
                    "-p",
                    project.path,
                    "svelteDevAll",
                    "--console=plain",
                    "-PvitePort=$VITE_PORT",
                    "-PadminVitePort=$ADMIN_VITE_PORT",
                    "-PdebugPort=0",
                ).apply {
                    environment()["CI"] = "true"
                    environment()["PORT"] = APP_PORT.toString()
                    environment()["KTOR_SVELTE_DEV_SERVER"] = "http://localhost:$VITE_PORT"
                }.redirectErrorStream(true)
                    .redirectOutput(log)
                    .start()
            waitFor("the app and both Vite servers") {
                get("/")?.body().orEmpty().contains("__sveltekit_dev") && get("/admin")?.body().orEmpty().contains("assets: \"/admin\"")
            }
            playwright = Playwright.create()
            browser = playwright.chromium().launch()
        }

        @JvmStatic
        @AfterAll
        fun stop() {
            runCatching { browser.close() }
            runCatching { playwright.close() }
            val processes = gradle.toHandle().descendants().toList() + gradle.toHandle()
            processes.forEach { it.destroyForcibly() }
        }
    }

    private fun page(): Page = browser.newContext(Browser.NewContextOptions().setBaseURL(APP)).newPage()

    private fun Page.heading() = getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))

    @Test
    fun `each frontend comes from its own Vite through the app port`() {
        assertContains(get("/")?.body().orEmpty(), "/_ktor-svelte/dev/client.js")
        assertContains(get("/admin")?.body().orEmpty(), "/_ktor-svelte/dev/client.js")

        val page = page()
        page.navigate("/")
        assertThat(page.heading()).hasText("The public site")
        assertThat(page.locator("#greeting")).hasText("Hello from Ktor")

        page.navigate("/admin")
        assertThat(page.heading()).hasText("The admin area")
        assertThat(page.locator("#admin-greeting")).hasText("Hello from Ktor")
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Users")).click()
        assertThat(page.heading()).hasText("Admin users")
    }
}
