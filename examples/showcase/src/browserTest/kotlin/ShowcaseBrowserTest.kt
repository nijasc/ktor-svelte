import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Page
import com.microsoft.playwright.Route
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import com.microsoft.playwright.options.Cookie
import com.microsoft.playwright.options.FilePayload
import com.microsoft.playwright.options.LoadState
import com.microsoft.playwright.options.RequestOptions
import com.microsoft.playwright.options.SameSiteAttribute
import com.microsoft.playwright.options.SelectOption
import com.microsoft.playwright.options.WaitUntilState
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import java.util.regex.Pattern
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ShowcaseBrowserTest {
    companion object {
        @TempDir
        @JvmStatic
        lateinit var directory: Path

        private lateinit var server: ShowcaseServer
        private lateinit var session: BrowserSession

        @JvmStatic
        @BeforeAll
        fun start() {
            server = ShowcaseServer(directory.resolve("data"))
            session = BrowserSession(server)
        }

        @JvmStatic
        @AfterAll
        fun stop() {
            session.close()
            server.close()
        }
    }

    private lateinit var context: BrowserContext
    private lateinit var page: Page

    @BeforeEach
    fun open() {
        context = session.newContext()
        page = context.newPage()
    }

    @AfterEach
    fun close() {
        context.close()
    }

    private fun useTheme(theme: String) {
        context.addCookies(listOf(Cookie("ktor_svelte_theme", theme).setUrl(server.url)))
    }

    @Test
    fun `the start page is prerendered, greets from the server and has no errors`() {
        val problems = page.problems()
        assertContains(page.request().get("/").text(), "A team board in one JAR")

        page.navigate("/")
        assertThat(page.heading()).hasText("A team board in one JAR")
        assertThat(page.locator("#greeting")).containsText("Hello SvelteKit, greetings from Ktor!")
        assertThat(page.getByRole(AriaRole.BANNER).getByRole(AriaRole.LINK).first()).containsText("Showcase under test")
        assertThat(page.getByRole(AriaRole.IMG, Page.GetByRoleOptions().setName("Ktor and SvelteKit working together"))).isVisible()
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `pages behind the login send visitors to the sign in page`() {
        listOf("/board", "/tasks/1", "/settings", "/admin").forEach { path ->
            page.navigate(path)
            assertThat(page).hasURL(LOGIN)
        }
    }

    @Test
    fun `a wrong password is explained and the right one opens the board`() {
        page.openWhenInteractive("/login")
        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill("not-the-password")
        page.submitSignIn()
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Wrong email or password.")
        assertThat(page).hasURL(LOGIN)

        page.getByLabel("Password").fill(ADMIN_PASSWORD)
        page.submitSignIn()
        assertThat(page).hasURL(BOARD)
        assertThat(page.locator("#signed-in-as")).hasText("Ada Lovelace")

        val cookie = context.cookies().single { it.name == "showcase_session" }
        assertEquals(true, cookie.httpOnly)
        if (session.name != "webkit") assertEquals(SameSiteAttribute.LAX, cookie.sameSite)
    }

    @Test
    fun `registration checks the form in the browser and then signs the person in`() {
        val name = unique("Newcomer")
        page.register(name, password = "short")
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Must be at least 10 characters.")
        assertThat(page.getByLabel("Password")).hasAttribute("aria-invalid", "true")

        page.getByLabel("Password").fill("registered-password")
        page.button("Create account").click()
        assertThat(page).hasURL(BOARD)
        assertThat(page.locator("#signed-in-as")).hasText(name)
        assertThat(page.navigationLink("Admin")).hasCount(0)
    }

    @Test
    fun `text typed before the page is interactive is kept`() {
        val held = mutableListOf<Route>()
        var holding = true
        page.route("**/_app/immutable/**/*.js") { route -> if (holding) held += route else route.resume() }
        val name = unique("Early")
        page.navigate("/register", Page.NavigateOptions().setWaitUntil(WaitUntilState.DOMCONTENTLOADED))
        page.getByLabel("Name").pressSequentially(name)
        page.getByLabel("Email").pressSequentially(name.replace(' ', '.').lowercase() + "@example.com")
        assertEquals(null, page.getByLabel("Name").getAttribute("maxlength"))

        holding = false
        held.forEach { it.resume() }
        assertThat(page.getByLabel("Name")).hasAttribute("maxlength", "80")
        assertThat(page.getByLabel("Name")).hasValue(name)

        page.getByLabel("Password").fill("registered-password")
        page.button("Create account").click()
        assertThat(page).hasURL(BOARD)
        assertThat(page.locator("#signed-in-as")).hasText(name)
    }

    @Test
    fun `search, filters and load more narrow and extend the list`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val token = unique("Findme").replace(" ", "")
        (1..6).forEach { page.createTask("$token $it") }
        page.navigate("/board")
        val tasks = page.locator("#tasks > li")
        val status = page.getByRole(AriaRole.GROUP, Page.GetByRoleOptions().setName("Status"))

        page.getByLabel("Search tasks").fill(token)
        assertThat(tasks).hasCount(5)
        assertThat(page.locator("#tasks")).containsText("$token 6")
        page.button("Load more").click()
        assertThat(tasks).hasCount(6)
        assertThat(page.button("Load more")).hasCount(0)

        page.getByLabel("Search tasks").fill("$token 4")
        assertThat(tasks).hasCount(1)
        page.locator("#tasks").getByRole(AriaRole.BUTTON).filter(com.microsoft.playwright.Locator.FilterOptions().setHasText("Start")).click()
        assertThat(tasks.first()).containsText("In progress")

        status.getByText("Done").click()
        assertThat(page.locator("#no-tasks")).hasText("No tasks match.")
        status.getByText("In progress").click()
        assertThat(tasks).hasCount(1)

        page.getByLabel("Search tasks").fill("nothing-has-this-title")
        assertThat(page.locator("#no-tasks")).isVisible()
    }

    @Test
    fun `a task goes from the form through edits, comments and files to deletion`() {
        val problems = page.problems()
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val title = unique("Lifecycle")
        page.navigate("/tasks/new")
        page.button("Create task").click()
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Must be at least 1 character.")

        page.getByLabel("Title").fill(title)
        page.getByLabel("Description").fill("Written by a browser. <b>not bold</b>")
        page.getByLabel("Labels").fill("Not Valid!")
        page.getByLabel("Assignee").selectOption(SelectOption().setLabel("Grace Hopper"))
        page.getByLabel("Due on").fill("2026-12-24")
        page.button("Create task").click()
        assertThat(page.getByRole(AriaRole.ALERT)).containsText("Labels are lowercase letters")

        page.getByLabel("Labels").fill("browser, e2e")
        page.button("Create task").click()
        assertThat(page.locator("#task-title")).hasText(title)
        assertThat(page.locator("#task-description")).hasText("Written by a browser. <b>not bold</b>")
        assertThat(page.main()).containsText("Grace Hopper")
        assertThat(page.main()).containsText("Dec 24, 2026")

        page.button("Edit").click()
        page.getByLabel("Title").fill("$title edited")
        page.getByLabel("Priority").selectOption("HIGH")
        page.button("Save").click()
        assertThat(page.locator("#task-title")).hasText("$title edited")

        page.getByLabel("Status").selectOption("DOING")
        page.getByLabel("Add a comment").fill("Looks fine from here.")
        page.button("Comment").click()
        assertThat(page.locator("#comments")).containsText("Looks fine from here.")
        assertThat(page.locator("#activity")).containsText("Ada Lovelace commented: Looks fine from here.")

        page.getByLabel("Attach files").setInputFiles(FilePayload("pixel.png", "image/png", PNG_PIXEL))
        assertThat(page.locator("#attachments")).containsText("pixel.png")
        val preview = page.locator("#attachments img")
        preview.scrollIntoViewIfNeeded()
        assertThat(preview).hasJSProperty("naturalWidth", 1)

        page.getByLabel("Attach files").setInputFiles(FilePayload("drawing.svg", "image/svg+xml", "<svg/>".toByteArray()))
        assertThat(page.locator(".toast")).containsText("Only images, PDF, text, CSV and ZIP files can be attached.")
        assertThat(page.locator("#attachments > li")).hasCount(1)

        val download = page.waitForDownload { page.locator("#attachments").getByRole(AriaRole.LINK).click() }
        assertEquals("pixel.png", download.suggestedFilename())

        page.button("Remove pixel.png").click()
        assertThat(page.locator("#attachments")).containsText("No files yet.")

        page.waitForLoadState(LoadState.NETWORKIDLE)
        page.reload()
        assertThat(page.locator("#task-title")).hasText("$title edited")
        assertThat(page.getByLabel("Status")).hasValue("DOING")

        page.button("Delete").click()
        assertThat(page.getByRole(AriaRole.DIALOG)).containsText("Delete this task?")
        page.locator("#confirm-delete").click()
        assertThat(page).hasURL(BOARD)
        page.getByLabel("Search tasks").fill(title)
        assertThat(page.locator("#no-tasks")).isVisible()
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `a task that does not exist shows the error page`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/tasks/999999")
        assertThat(page.heading()).hasText("404")
        assertThat(page.locator("#error-message")).hasText("That task does not exist.")
    }

    @Test
    fun `language and theme are remembered and reach the server`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.getByLabel("Language").selectOption("de")
        assertThat(page.navigationLink("Neue Aufgabe")).isVisible()
        assertThat(page.locator("html")).hasAttribute("lang", "de")

        page.navigate("/tasks/999999")
        assertThat(page.locator("#error-message")).hasText("Diese Aufgabe gibt es nicht.")

        page.getByLabel("Theme").selectOption("dracula")
        assertThat(page.locator("html")).hasAttribute("data-theme", "dracula")
        page.navigate("/")
        assertThat(page.locator("html")).hasAttribute("data-theme", "dracula")
        assertThat(page.locator("#greeting")).containsText("(de, dracula)")
        assertThat(page.heading()).hasText("Ein Team-Board in einem JAR")
    }

    @Test
    fun `signing out closes the protected pages again`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.button("Sign out").click()
        assertThat(page).hasURL(LOGIN)
        page.navigate("/board")
        assertThat(page).hasURL(LOGIN)
    }

    @Test
    fun `a member has no admin area`() {
        page.signIn(MEMBER_EMAIL, MEMBER_PASSWORD)
        assertThat(page.navigationLink("Admin")).hasCount(0)
        page.navigate("/admin")
        assertThat(page.heading()).hasText("403")
        assertThat(page.locator("#error-message")).hasText("Only admins can do that.")
    }

    @Test
    fun `an admin sees everyone and cannot remove the last admin`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigationLink("Admin").click()
        assertThat(page.locator("#users")).containsText(MEMBER_EMAIL)

        val role = page.getByLabel("Role of Ada Lovelace")
        role.selectOption("MEMBER")
        assertThat(page.locator(".toast")).containsText("The board needs at least one active admin.")
        assertThat(role).hasValue("ADMIN")
    }

    @Test
    fun `a profile can be renamed and the password needs the current one`() {
        val name = unique("Renamed")
        page.register("Before $name")
        assertThat(page).hasURL(BOARD)

        page.navigationLink("Settings").click()
        page.getByLabel("Name").fill(name)
        page.button("Save").click()
        assertThat(page.locator("#signed-in-as")).hasText(name)

        page.getByLabel("Current password").fill("not-my-password")
        page.getByLabel("New password").fill("another-long-password")
        page.button("Change password").click()
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Your current password is not correct.")
    }

    @Test
    fun `assets are cached forever, compressed and missing ones are not pages`() {
        val caching = mutableMapOf<String, String>()
        page.onResponse { response ->
            if ("/_app/immutable/" in response.url()) caching[response.url()] = response.headers()["cache-control"].orEmpty()
        }
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("Hello")
        assertTrue(caching.isNotEmpty())
        caching.forEach { (url, cache) -> assertContains(cache, "immutable", message = url) }

        val script = caching.keys.first { it.endsWith(".js") }
        val compressed = page.request().get(script, RequestOptions.create().setHeader("Accept-Encoding", "br, gzip"))
        assertContains(listOf("br", "gzip"), compressed.headers()["content-encoding"])

        assertEquals(404, page.request().get("/_app/immutable/missing.js").status())
        val first = page.request().get("/", RequestOptions.create().setHeader("Accept", "text/html"))
        val again =
            page.request().get(
                "/",
                RequestOptions.create().setHeader("Accept", "text/html").setHeader("If-None-Match", first.headers().getValue("etag")),
            )
        assertEquals(304, again.status())
    }

    @Test
    fun `pages carry security headers and nothing breaks the content security policy`() {
        val violations = mutableListOf<String>()
        page.onConsoleMessage { message ->
            if (message.text().contains("content security policy", ignoreCase = true)) violations += message.text()
        }
        val response = page.request().get("/login", RequestOptions.create().setHeader("Accept", "text/html"))
        val policy = response.headers().getValue("content-security-policy")
        assertContains(policy, "default-src 'self'")
        assertContains(policy, "object-src 'none'")
        assertContains(policy, "frame-ancestors 'none'")
        assertFalse(Regex("script-src[^;]*'unsafe-inline'").containsMatchIn(policy))
        assertEquals("nosniff", response.headers()["x-content-type-options"])
        assertEquals("DENY", response.headers()["x-frame-options"])

        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        listOf("/", "/about", "/board", "/tasks/new", "/settings", "/admin").forEach { path ->
            page.navigate(path)
            assertThat(page.heading()).isVisible()
        }
        assertEquals(emptyList(), violations)
    }

    private fun checkPublicPages(theme: String) {
        useTheme(theme)
        listOf("/", "/about", "/login", "/register").forEach { path ->
            page.navigate(path)
            assertThat(page.locator("html")).hasAttribute("data-theme", theme)
            assertThat(page.heading()).isVisible()
            page.expectAccessible()
        }
    }

    private fun checkPagesBehindLogin(theme: String) {
        useTheme(theme)
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val id = page.createTask(unique("Accessible"))
        listOf("/board", "/tasks/new", "/tasks/$id", "/settings", "/admin", "/tasks/999999").forEach { path ->
            page.navigate(path)
            assertThat(page.heading()).isVisible()
            page.expectAccessible()
        }
    }

    @Test
    fun `public pages have no accessibility violations in the light theme`() = checkPublicPages("shadcn-light")

    @Test
    fun `public pages have no accessibility violations in the dark theme`() = checkPublicPages("shadcn-dark")

    @Test
    fun `pages behind the login have no accessibility violations in the light theme`() = checkPagesBehindLogin("shadcn-light")

    @Test
    fun `pages behind the login have no accessibility violations in the dark theme`() = checkPagesBehindLogin("shadcn-dark")

    @Test
    fun `errors and toasts are announced and stay accessible`() {
        page.openWhenInteractive("/login")
        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill("not-the-password")
        page.submitSignIn()
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Wrong email or password.")
        page.expectAccessible()

        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/admin")
        page.getByLabel("Role of Ada Lovelace").selectOption("MEMBER")
        assertThat(page.locator(".toast")).containsText("at least one active admin")
        assertThat(page.locator(".toast")).hasAttribute("aria-live", "polite")
        page.expectAccessible()
    }

    @Test
    fun `the keyboard reaches the content first`() {
        page.navigate("/")
        assertThat(page.locator("#greeting")).containsText("Hello")
        val skipLink = page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Skip to content"))
        if (session.name == "webkit") skipLink.focus() else page.keyboard().press("Tab")
        assertThat(skipLink).isFocused()
        assertThat(skipLink).isInViewport()
        page.keyboard().press("Enter")
        assertThat(page).hasURL(Pattern.compile(".*#content$"))
    }
}
