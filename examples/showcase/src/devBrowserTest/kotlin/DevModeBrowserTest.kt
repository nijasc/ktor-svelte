import com.microsoft.playwright.Browser
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Locator
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import com.microsoft.playwright.options.LoadState
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
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import kotlin.test.fail

private const val APP_PORT = 8080
private const val VITE_PORT = 5173
private const val APP = "http://localhost:$APP_PORT"
private const val ADMIN_EMAIL = "ada@example.com"
private const val ADMIN_PASSWORD = "dev-browser-admin-password"
private const val MEMBER_PASSWORD = "dev-browser-member-password"
private const val SESSION_SIGN_KEY = "6b746f722d7376656c74652d6465762d62726f777365722d746573742d6b6579"
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
                        environment()["SESSION_SIGN_KEY"] = SESSION_SIGN_KEY
                    }.redirectErrorStream(true)
                    .redirectOutput(log)
                    .start()
            waitFor("the app and Vite", START_SECONDS) { get("/_ktor-svelte/health")?.statusCode() == 200 && get("/")?.statusCode() == 200 }
            playwright = Playwright.create()
            browser = playwright.chromium().launch()
            visitEveryPageUntilViteIsSettled()
        }

        private fun visitEveryPageUntilViteIsSettled() {
            val context = browser.newContext(Browser.NewContextOptions().setBaseURL(APP).setLocale("en-US"))
            context.addCookies(listOf(com.microsoft.playwright.options.Cookie("cookie-consent", "preferences").setUrl(APP)))
            try {
                val page = context.newPage()
                waitFor("the first sign in", 120) {
                    page.navigate("/board")
                    page.waitForURL(Pattern.compile(".*/login$"), Page.WaitForURLOptions().setTimeout(5_000.0))
                    page.getByLabel("Email").fill(ADMIN_EMAIL)
                    page.getByLabel("Password").fill(ADMIN_PASSWORD)
                    page.getByRole(AriaRole.MAIN).getByRole(AriaRole.BUTTON).click()
                    page.waitForURL(Pattern.compile(".*/board$"), Page.WaitForURLOptions().setTimeout(5_000.0))
                    true
                }
                waitFor("Vite to stop optimizing dependencies", 120) {
                    val seen = log.length()
                    listOf("/", "/about", "/board").forEach { path ->
                        page.navigate(path)
                        page.waitForLoadState(LoadState.NETWORKIDLE)
                    }
                    page.waitForTimeout(1_000.0)
                    val added = log.readBytes().drop(seen.toInt()).toByteArray().decodeToString()
                    "optimiz" !in added
                }
            } finally {
                context.close()
            }
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
        context.addCookies(listOf(com.microsoft.playwright.options.Cookie("cookie-consent", "preferences").setUrl(APP)))
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
    fun `an open page loads its data again after the app restarts, without a reload`() {
        val routes = File(project, "src/main/kotlin/showcase/TaskRoutes.kt")
        waitFor("the board after signing in", 60) {
            page.navigate("/board")
            page.waitForURL(Pattern.compile(".*/login$"), Page.WaitForURLOptions().setTimeout(5_000.0))
            page.getByLabel("Email").fill(ADMIN_EMAIL)
            page.getByLabel("Password").fill(ADMIN_PASSWORD)
            page.getByRole(AriaRole.MAIN).getByRole(AriaRole.BUTTON).click()
            page.waitForURL(Pattern.compile(".*/board$"), Page.WaitForURLOptions().setTimeout(5_000.0))
            true
        }
        assertThat(page.locator("#tasks > li").first()).isVisible()
        val loads = java.util.concurrent.CopyOnWriteArrayList<String>()
        page.onRequest { request -> if ("/api/tasks" in request.url()) loads += request.url() }
        page.evaluate("window.keptAcrossRestart = true")
        try {
            change(routes) { it.replace("?: \"Ktor\"", "?: \"restarted Kotlin\"") }
            waitFor("the app to restart with the new route", CHANGE_SECONDS) { "Hello restarted Kotlin" in get("/api/greeting")?.body().orEmpty() }
            waitFor("the board to load its tasks again", 60) {
                page.waitForTimeout(250.0)
                loads.isNotEmpty()
            }
            assertEquals(true, page.evaluate("window.keptAcrossRestart === true"))
            assertThat(page.locator("#tasks > li").first()).isVisible()
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
        val tasks =
            page
                .locator("[data-ktor-svelte-panel] .row")
                .filter(Locator.FilterOptions().setHasText("/api/tasks"))
                .first()
        assertThat(tasks.locator(".sql")).containsText(Pattern.compile("^\\d+ SQL, [\\d.]+ ms"))
    }

    @Test
    fun `the dev panel replays an API call and copies it as a curl command`() {
        context.grantPermissions(listOf("clipboard-read", "clipboard-write"))
        val panel = page.locator("[data-ktor-svelte-panel]")
        val refused =
            panel
                .locator(".row")
                .filter(Locator.FilterOptions().setHasText("/api/session"))
                .filter(Locator.FilterOptions().setHasText("POST"))
                .filter(Locator.FilterOptions().setHasText("401"))
        waitFor("a refused sign in", 60) {
            page.navigate("/login")
            page.getByLabel("Email").fill(ADMIN_EMAIL)
            page.getByLabel("Password").fill("not-the-password")
            page.getByRole(AriaRole.MAIN).getByRole(AriaRole.BUTTON).click()
            page.waitForTimeout(1_500.0)
            refused.count() > 0
        }
        panel.locator(".toggle").click()
        val failed = refused.first()
        val before = refused.count()

        failed.getByText("curl").click()
        assertThat(failed.getByText("Copied")).isVisible()
        val command = page.evaluate("navigator.clipboard.readText()") as String
        assertTrue(command.startsWith("curl -X POST '$APP/api/session'"), command)
        assertContains(command, "-H 'content-type: application/json'")
        assertContains(command, "-H 'X-Request-Id: ")
        assertContains(command, "--data-raw '{\"email\":\"$ADMIN_EMAIL\",\"password\":\"***\"}'")
        assertFalse("not-the-password" in command, "a field marked @Sensitive must not reach the clipboard")

        val download = page.waitForDownload { panel.locator(".save").click() }
        val saved = download.path().toFile().readText()
        assertContains(saved, "\"password\": \"***\"")
        assertFalse("not-the-password" in saved, "nor a saved fixture")

        failed.getByText("Replay").click()
        waitFor("the replayed call in the list", 20) { refused.count() == before + 1 }
        assertThat(refused.first().getByText("Replay")).isEnabled()
    }

    @Test
    fun `a call in the dev panel opens the Kotlin route that answered it`() {
        val asked = java.util.concurrent.CopyOnWriteArrayList<String>()
        page.route("**/_ktor-svelte/dev/open**") { route ->
            asked += java.net.URLDecoder.decode(route.request().url().substringAfter("?"), Charsets.UTF_8)
            route.fulfill(com.microsoft.playwright.Route.FulfillOptions().setStatus(204))
        }
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("greetings from Ktor!")
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()
        val greeting = panel.locator(".row").filter(Locator.FilterOptions().setHasText("/api/greeting")).first()
        assertThat(greeting).hasAttribute("title", Pattern.compile("showcase/TaskRoutes\\.kt:\\d+"))

        greeting.locator("button.path").click()

        waitFor("the request to open the editor", 10) { asked.isNotEmpty() }
        val routes = File(project, "src/main/kotlin/showcase/TaskRoutes.kt").canonicalFile
        val line = asked.single().substringAfter("&line=").toInt()
        assertEquals("file=${routes.invariantSeparatorsPath}&line=$line", asked.single())
        assertContains(routes.readLines().subList(line - 1, line + 1).joinToString(" "), "greeting")

        assertEquals(400, get("/_ktor-svelte/dev/open?file=${routes.invariantSeparatorsPath.replace("TaskRoutes", "Model")}&line=1")?.statusCode())
        assertEquals(400, get("/_ktor-svelte/dev/open?file=/etc/passwd&line=1")?.statusCode())
        assertEquals(400, get("/_ktor-svelte/dev/open?file=${routes.invariantSeparatorsPath}")?.statusCode())
    }

    @Test
    fun `an API call that fails on the server shows the Kotlin exception in the browser`() {
        val routes = File(project, "src/main/kotlin/showcase/TaskRoutes.kt")
        try {
            change(routes) {
                it.replace(
                    "        val greeting = Greeting(",
                    "        if (name == \"boom\") error(\"probe failure\")\n        val greeting = Greeting(",
                )
            }
            waitFor("the app to restart with the failing route", CHANGE_SECONDS) { get("/api/greeting?name=boom")?.statusCode() == 500 }
            page.navigate("/")
            assertThat(page.locator("#greeting")).containsText("greetings from Ktor!")
            assertThat(page.locator("vite-error-overlay")).hasCount(0)

            page.evaluate("fetch('/api/greeting?name=boom', { headers: { 'X-Request-Id': 'overlay-probe' } })")

            val overlay = page.locator("vite-error-overlay")
            assertThat(overlay).containsText("GET /api/greeting?name=boom failed on the server: java.lang.IllegalStateException: probe failure")
            assertThat(overlay).containsText("TaskRoutes.kt")
            page.keyboard().press("Escape")
            assertThat(overlay).hasCount(0)
        } finally {
            restore(routes)
        }
        waitFor("the app to restart with the old route", CHANGE_SECONDS) { get("/api/greeting?name=boom")?.statusCode() == 200 }
    }

    @Test
    fun `a public config value can be changed for this browser from the dev panel, and reset`() {
        val name = page.getByRole(AriaRole.BANNER).getByRole(AriaRole.LINK).first()
        val panel = page.locator("[data-ktor-svelte-panel]")
        page.navigate("/")
        assertThat(name).containsText("ktor-svelte showcase")
        assertThat(panel.locator(".overrides")).isHidden()

        panel.locator(".toggle").click()
        panel.locator(".config summary").click()
        val appName = panel.getByLabel("appName")
        assertThat(appName).hasValue("\"ktor-svelte showcase\"")
        appName.fill("not json")
        panel.locator(".config-apply").click()
        assertThat(panel.locator(".config-note")).containsText("appName is not valid JSON")

        appName.fill("\"Renamed in the panel\"")
        panel.locator(".config-apply").click()
        assertThat(name).containsText("Renamed in the panel")
        assertThat(panel.locator(".overrides")).isVisible()
        assertContains(get("/_ktor-svelte/config.json")?.body().orEmpty(), "ktor-svelte showcase")
        page.navigate("/about")
        assertThat(name).containsText("Renamed in the panel")

        panel.locator(".toggle").click()
        panel.locator(".config summary").click()
        assertThat(panel.locator(".config-count")).hasText(" (1 changed)")
        assertThat(panel.getByLabel("appName")).hasValue("\"Renamed in the panel\"")
        panel.locator(".config-reset").click()
        assertThat(name).containsText("ktor-svelte showcase")
        assertThat(panel.locator(".overrides")).isHidden()
    }

    @Test
    fun `the calls a page made can be saved as fixtures from the dev panel`() {
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("greetings from Ktor!")
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()

        val download = page.waitForDownload { panel.locator(".save").click() }

        assertEquals("api-fixtures.json", download.suggestedFilename())
        val saved = download.path().toFile().readText()
        assertTrue(saved.trimStart().startsWith("{") && saved.endsWith("}\n"), saved)
        assertContains(saved, "\"recorded\": \"20")
        assertContains(saved, "\"method\": \"GET\"")
        assertContains(saved, "\"path\": \"/api/greeting")
        assertContains(saved, "\"status\": 200")
        assertContains(saved, "greetings from Ktor!")
    }

    @Test
    fun `texts that are the same as in the default language are listed and can be outlined`() {
        val panel = page.locator("[data-ktor-svelte-panel]")
        page.navigate("/about")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
        assertThat(panel.locator(".untranslated")).isHidden()

        context.addCookies(listOf(com.microsoft.playwright.options.Cookie("ktor_svelte_locale", "de").setUrl(APP)))
        page.reload()
        val heading = page.locator("th").first()
        assertThat(heading).hasText("Feature")
        panel.locator(".toggle").click()
        panel.locator(".untranslated summary").click()
        val listed = panel.locator(".untranslated-row").filter(Locator.FilterOptions().setHasText("about-feature"))
        assertThat(listed).containsText("Feature")
        assertThat(heading).not().hasAttribute("data-ktor-svelte-untranslated", "about-feature")

        panel.locator(".untranslated-outline").check()
        assertThat(heading).hasAttribute("data-ktor-svelte-untranslated", "about-feature")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).not().hasAttribute("data-ktor-svelte-untranslated", Pattern.compile(".*"))
        page.reload()
        assertThat(heading).hasAttribute("data-ktor-svelte-untranslated", "about-feature")

        panel.locator(".toggle").click()
        panel.locator(".untranslated summary").click()
        panel.locator(".untranslated-outline").uncheck()
        assertThat(page.locator("[data-ktor-svelte-untranslated]")).hasCount(0)
    }

    @Test
    fun `the dev panel lists every page and API route, filters them and leads to a page`() {
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("greetings from Ktor!")
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()
        panel.locator(".routes summary").click()
        val rows = panel.locator(".routes-row")
        assertThat(rows.filter(Locator.FilterOptions().setHasText("/api/greeting"))).containsText("showcase/TaskRoutes.kt:")
        assertThat(rows.filter(Locator.FilterOptions().setHasText("src/routes/about/+page.svelte"))).containsText("PAGE")
        assertThat(rows.filter(Locator.FilterOptions().setHasText("/tasks/[id]")).first()).containsText("src/routes/(app)/tasks/[id]/+page.svelte")
        assertThat(panel.locator(".routes-docs")).hasAttribute("href", "/api/docs")
        val all = rows.count()
        assertTrue(all > 10, "only $all routes listed")

        panel.getByLabel("Filter routes").fill("about")
        assertThat(rows).hasCount(1)
        assertThat(panel.locator(".routes-note")).hasText("1 of $all")
        rows.first().locator("a.path").click()
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
    }

    @Test
    fun `the same GET made twice while a page loads is flagged with both call sites`() {
        val about = File(project, "frontend/src/routes/about/+page.svelte")
        val panel = page.locator("[data-ktor-svelte-panel]")
        val flagged = panel.locator(".row").filter(Locator.FilterOptions().setHasText("/api/greeting?name=twice")).locator(".duplicate")
        try {
            change(about) {
                it.replace(
                    "    import { m } from '#i18n';",
                    "    import { api } from '#api';\n    import { onMount } from 'svelte';\n    import { m } from '#i18n';\n\n" +
                        "    onMount(() => {\n        void api.greeting.list({ name: 'twice' });\n        void api.greeting.list({ name: 'twice' });\n    });",
                )
            }
            waitFor("the page that asks twice", 60) {
                page.navigate("/about")
                page.waitForTimeout(1_500.0)
                flagged.count() > 0
            }
            val calls = panel.locator(".row").filter(Locator.FilterOptions().setHasText("/api/greeting?name=twice"))
            val flags = flagged.count()
            val before = calls.count()
            assertEquals(before / 2, flags, "one of every two calls is the repeat")
            assertThat(flagged.first()).containsText(
                Pattern.compile(
                    "asked for twice within \\d+ ms, from src/routes/about/\\+page\\.svelte:\\d+ and from src/routes/about/\\+page\\.svelte:\\d+",
                ),
            )
        } finally {
            restore(about)
        }
    }

    @Test
    fun `the dev panel checks the open page with axe and shows where a problem is`() {
        page.navigate("/about")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()
        panel.locator(".a11y summary").click()
        assertThat(panel.locator(".a11y-note")).hasText("axe found no problems on this page.")
        assertThat(panel.locator(".a11y-count")).hasText(" (0)")

        page.evaluate(
            "document.querySelector('main, article').insertAdjacentHTML('beforeend', '<img id=\"unnamed\" src=\"data:image/gif;base64,R0lGODlhAQABAAAAACw=\" width=\"20\" height=\"20\">')",
        )
        panel.locator(".a11y-check").click()
        val problem = panel.locator(".a11y-row").filter(Locator.FilterOptions().setHasText("image-alt"))
        assertThat(problem).containsText("critical")
        assertThat(problem.locator("a")).hasAttribute("href", Pattern.compile("^https://dequeuniversity\\.com/rules/axe/.*image-alt.*"))
        assertThat(page.locator("#unnamed")).not().hasAttribute("data-ktor-svelte-a11y", "image-alt")

        problem.click()
        assertThat(page.locator("#unnamed")).hasAttribute("data-ktor-svelte-a11y", "image-alt")
        panel.locator(".a11y summary").click()
        assertThat(page.locator("[data-ktor-svelte-a11y]")).hasCount(0)
    }

    @Test
    fun `theme colors change live from the dev panel and come out as a Gradle block`() {
        context.grantPermissions(listOf("clipboard-read", "clipboard-write"))
        page.navigate("/about")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
        val panel = page.locator("[data-ktor-svelte-panel]")
        val primary = "getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()"
        val original = page.evaluate(primary) as String
        panel.locator(".toggle").click()
        panel.locator(".theme summary").click()
        assertThat(panel.getByLabel("primary", Locator.GetByLabelOptions().setExact(true))).hasValue(Pattern.compile("^#[0-9a-f]{6}$"))

        panel.getByLabel("primary", Locator.GetByLabelOptions().setExact(true)).fill("#ff0044")
        panel.getByLabel("base100").fill("#fff8e7")
        assertEquals("#ff0044", page.evaluate(primary))
        panel.getByLabel("Theme name").fill("sunset")
        panel.locator(".theme-copy").click()
        assertThat(panel.locator(".theme-note")).containsText("Copied.")
        val block = (page.evaluate("navigator.clipboard.readText()") as String).replace("\r\n", "\n")
        assertTrue(block.startsWith("customTheme(\"sunset\") {\n    primary = \"#ff0044\"\n"), block)
        assertContains(block, "    base100 = \"#fff8e7\"\n")
        assertEquals(14, block.lines().size, block)
        assertTrue(block.endsWith("\n}"), block)

        panel.locator(".theme-reset").click()
        assertEquals(original, page.evaluate(primary))
    }

    @Test
    fun `the dev panel shows versions, health, the dev proxy and the settings in plain rows`() {
        page.navigate("/about")
        assertThat(page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))).hasText("About this showcase")
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()
        panel.locator(".status summary").click()
        val rows = panel.locator(".status-row")

        fun row(label: String) = rows.filter(Locator.FilterOptions().setHasText(Pattern.compile("^$label"))).first()
        assertThat(row("ktor-svelte")).containsText(Pattern.compile("\\d+\\.\\d+"))
        assertThat(row("Java")).containsText(System.getProperty("java.version").substringBefore('.'))
        assertThat(row("health")).hasText("healthup")
        assertThat(row("health")).hasClass(Pattern.compile("\\bok\\b"))
        assertThat(row("dev reachable")).containsText("true")
        assertThat(row("refusals rateLimit")).containsText("0")
        assertThat(row("API prefixes")).containsText("/api")
        assertThat(row("Named rate limits")).containsText("login")
    }

    @Test
    fun `the dev panel lists this browser's cookies as the server reads them and clears them`() {
        page.navigate("/board")
        assertThat(page).hasURL(Pattern.compile(".*/login$"))
        assertThat(page.getByRole(AriaRole.BANNER).getByRole(AriaRole.LINK).last()).hasText("Sign in")
        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill(ADMIN_PASSWORD)
        page.getByRole(AriaRole.MAIN).getByRole(AriaRole.BUTTON).click()
        assertThat(page).hasURL(Pattern.compile(".*/board$"))
        page.locator("#mine").check()
        val panel = page.locator("[data-ktor-svelte-panel]")
        panel.locator(".toggle").click()
        panel.locator(".cookies summary").click()
        val rows = panel.locator(".cookies-row")

        fun row(name: String) = rows.filter(Locator.FilterOptions().setHasText(Pattern.compile("^$name"))).first()
        assertThat(row("board-mine")).containsText("reads as true")
        assertThat(row("board-mine")).containsText("true | false; kept 90 days, path /, SameSite=Lax")
        assertThat(row("showcase_session")).containsText("session: UserSession(")
        assertThat(panel.locator(".cookies-note")).containsText("sent with each request.")

        row("board-mine").getByRole(AriaRole.BUTTON).click()
        assertThat(row("board-mine")).containsText("not set, reads as false")
        assertThat(panel.locator(".cookies-note")).containsText("Reload the page to see it without board-mine.")

        panel.locator(".cookies-clear").click()
        assertThat(panel.locator(".cookies-note")).containsText("Reload the page to see it without them.")
        assertThat(row("showcase_session")).hasCount(0)
        page.reload()
        assertThat(page).hasURL(Pattern.compile(".*/login$"))
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
