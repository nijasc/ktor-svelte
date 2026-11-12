import com.deque.html.axecore.playwright.AxeBuilder
import com.microsoft.playwright.Browser
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Locator
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import java.io.File
import java.net.ServerSocket
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Path
import java.util.Base64
import java.util.regex.Pattern
import kotlin.test.assertEquals
import kotlin.test.fail

const val ADMIN_EMAIL = "ada@example.com"
const val MEMBER_EMAIL = "grace@example.com"
const val ADMIN_PASSWORD = "browser-admin-password"
const val MEMBER_PASSWORD = "browser-member-password"
private const val SIGN_KEY = "ffeeddccbbaa99887766554433221100ffeeddccbbaa99887766554433221100"

val PNG_PIXEL: ByteArray =
    Base64.getDecoder().decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==")

val BOARD: Pattern = Pattern.compile(".*/board$")
val LOGIN: Pattern = Pattern.compile(".*/login$")

class ShowcaseServer(
    dataDirectory: Path,
    appName: String = "Showcase under test",
) : AutoCloseable {
    val port: Int = ServerSocket(0).use { it.localPort }
    val url: String = "http://localhost:$port"
    private val process: Process

    init {
        val java = File(System.getProperty("java.home"), "bin/java").path
        process =
            ProcessBuilder(java, "-jar", System.getProperty("example.jar"))
                .apply {
                    environment()["PORT"] = port.toString()
                    environment()["APP_NAME"] = appName
                    environment()["SHOWCASE_DATA"] = dataDirectory.toString()
                    environment()["SHOWCASE_ADMIN_PASSWORD"] = ADMIN_PASSWORD
                    environment()["SHOWCASE_MEMBER_PASSWORD"] = MEMBER_PASSWORD
                    environment()["SHOWCASE_INSECURE_COOKIES"] = "true"
                    environment()["SHOWCASE_LOGIN_ATTEMPTS"] = "1000"
                    environment()["SESSION_SIGN_KEY"] = SIGN_KEY
                }.redirectErrorStream(true)
                .redirectOutput(ProcessBuilder.Redirect.DISCARD)
                .start()
        val http = HttpClient.newHttpClient()
        val health = HttpRequest.newBuilder(URI.create("$url/_ktor-svelte/health")).build()
        val ready =
            (1..300).any {
                Thread.sleep(100)
                runCatching { http.send(health, HttpResponse.BodyHandlers.discarding()).statusCode() == 200 }.getOrDefault(false)
            }
        if (!ready) {
            process.destroyForcibly()
            fail("The showcase app did not start")
        }
    }

    override fun close() {
        process.destroyForcibly()
    }
}

class BrowserSession(
    private val server: ShowcaseServer,
) : AutoCloseable {
    val name: String = System.getProperty("browser", "chromium")
    private val playwright: Playwright = Playwright.create()
    private val browser: Browser =
        when (name) {
            "firefox" -> playwright.firefox()
            "webkit" -> playwright.webkit()
            else -> playwright.chromium()
        }.launch()

    fun newContext(): BrowserContext = browser.newContext(Browser.NewContextOptions().setBaseURL(server.url).setLocale("en-US"))

    override fun close() {
        browser.close()
        playwright.close()
    }
}

private var counter = 0

@Synchronized
fun unique(prefix: String): String = "$prefix ${System.getProperty("browser", "chromium")} ${++counter}${System.nanoTime() % 100000}"

fun Page.button(name: String): Locator = getByRole(AriaRole.BUTTON, Page.GetByRoleOptions().setName(name).setExact(true))

fun Page.main(): Locator = getByRole(AriaRole.MAIN)

fun Page.heading(): Locator = getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))

fun Page.navigationLink(name: String): Locator =
    getByRole(AriaRole.NAVIGATION).getByRole(AriaRole.LINK, Locator.GetByRoleOptions().setName(name).setExact(true))

fun Page.submitSignIn() {
    main().getByRole(AriaRole.BUTTON, Locator.GetByRoleOptions().setName("Sign in")).click()
}

fun Page.openWhenInteractive(path: String) {
    navigate(path)
    assertThat(getByRole(AriaRole.BANNER).getByRole(AriaRole.LINK, Locator.GetByRoleOptions().setName("Sign in").setExact(true))).isVisible()
}

fun Page.signIn(
    email: String,
    password: String,
) {
    openWhenInteractive("/login")
    getByLabel("Email").fill(email)
    getByLabel("Password").fill(password)
    submitSignIn()
    assertThat(this).hasURL(BOARD)
}

fun Page.register(
    name: String,
    password: String = "registered-password",
) {
    openWhenInteractive("/register")
    getByLabel("Name").fill(name)
    getByLabel("Email").fill(name.replace(' ', '.').lowercase() + "@example.com")
    getByLabel("Password").fill(password)
    button("Create account").click()
}

fun Page.createTask(title: String): String {
    navigate("/tasks/new")
    getByLabel("Title").fill(title)
    button("Create task").click()
    assertThat(locator("#task-title")).hasText(title)
    return url().substringAfterLast('/')
}

fun Page.problems(): MutableList<String> {
    val problems = mutableListOf<String>()
    onPageError { error -> problems += "page error: $error" }
    onConsoleMessage { message ->
        val expected = Regex("status of (40[1349]|422|429)").containsMatchIn(message.text())
        if (message.type() == "error" && !expected) problems += "console error: ${message.text()}"
    }
    return problems
}

fun Page.expectAccessible() {
    addStyleTag(Page.AddStyleTagOptions().setContent("*, *::before, *::after { transition: none !important; animation: none !important; }"))
    val results = AxeBuilder(this).withTags(listOf("wcag2a", "wcag2aa", "wcag21a", "wcag21aa")).analyze()
    val violations =
        results.violations.map { violation ->
            "${violation.id}: ${violation.help} (${violation.nodes.joinToString { it.target.toString() }})"
        }
    assertEquals(emptyList(), violations, "Accessibility violations on ${url()}")
}
