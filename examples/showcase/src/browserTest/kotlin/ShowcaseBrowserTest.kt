import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Locator
import com.microsoft.playwright.Page
import com.microsoft.playwright.Route
import com.microsoft.playwright.assertions.LocatorAssertions
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
            assertThat(page).hasURL(loginFrom(path))
        }
    }

    @Test
    fun `signing in brings the visitor back to the page they asked for`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val id = page.createTask(unique("Come back"))
        page.button("Sign out").click()
        assertThat(page).hasURL(LOGIN)

        page.navigate("/tasks/$id")
        assertThat(page).hasURL(loginFrom("/tasks/$id"))
        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill(ADMIN_PASSWORD)
        page.submitSignIn()
        assertThat(page).hasURL(Pattern.compile(".*/tasks/$id$"))
        assertThat(page.locator("#task-title")).containsText("Come back")
    }

    @Test
    fun `a session that ends while a page is open leads to the login page and back`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/settings")
        assertThat(page.getByLabel("Name")).not().hasValue("")
        context.clearCookies(com.microsoft.playwright.BrowserContext.ClearCookiesOptions().setName("showcase_session"))
        page.getByLabel("Name").fill("Ada Lovelace")
        page.button("Save").click()
        assertThat(page).hasURL(loginFrom("/settings"))
        assertThat(page.locator("#signed-in-as")).hasCount(0)

        page.getByLabel("Email").fill(ADMIN_EMAIL)
        page.getByLabel("Password").fill(ADMIN_PASSWORD)
        page.submitSignIn()
        assertThat(page).hasURL(Pattern.compile(".*/settings$"))
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
        assertThat(page.getByLabel("Password")).hasAttribute("autocomplete", "new-password")
        assertThat(page.getByLabel("Email")).hasAttribute("autocomplete", "username")
        assertThat(page.getByLabel("Password")).hasAttribute("aria-invalid", "true")
        assertThat(page.getByLabel("Password")).isFocused()

        page.getByLabel("Password").fill("registered-password")
        page.button("Create account").click()
        assertThat(page).hasURL(BOARD)
        assertThat(page.locator("#signed-in-as")).hasText(name)
        assertThat(page.navigationLink("Admin")).hasCount(0)
    }

    @Test
    fun `the server says while typing that an email is taken, and stops saying it when it changes`() {
        page.openWhenInteractive("/register")
        val asked = java.util.concurrent.CopyOnWriteArrayList<String>()
        page.onRequest { request -> if ("/api/checks/email" in request.url()) asked += request.url().substringAfter("value=") }
        val email = page.getByLabel("Email")
        val alert = page.getByRole(AriaRole.ALERT)

        email.pressSequentially(ADMIN_EMAIL)
        assertThat(alert).hasText("That email address already has an account.")
        assertThat(email).hasAttribute("aria-invalid", "true")
        assertEquals(listOf(ADMIN_EMAIL.replace("@", "%40")), asked.toList())

        page.getByLabel("Name").fill("Somebody")
        page.getByLabel("Password").fill("registered-password")
        page.button("Create account").click()
        assertThat(alert).hasText("That email address already has an account.")
        assertThat(page).hasURL(Pattern.compile(".*/register$"))

        email.fill(unique("free").replace(" ", ".").lowercase() + "@example.com")
        assertThat(alert).hasCount(0)
        page.waitForCondition { asked.size == 2 }
        assertThat(alert).hasCount(0)
        page.button("Create account").click()
        assertThat(page).hasURL(BOARD)
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
        assertThat(page.locator("#shown")).hasText("5 tasks shown")
        assertThat(page.locator("#tasks")).containsText("$token 6")
        page.button("Load more").click()
        assertThat(tasks).hasCount(6)
        assertThat(page.button("Load more")).hasCount(0)

        page.getByLabel("Search tasks").fill("$token 4")
        assertThat(tasks).hasCount(1)
        assertThat(page.locator("#shown")).hasText("1 task shown")
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
    fun `a visitor chooses whether the optional cookie is kept, and the choice is followed`() {
        fun cookies() = page.context().cookies().associate { it.name to it.value }
        val banner = page.getByRole(AriaRole.REGION, Page.GetByRoleOptions().setName("Cookies"))
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        assertThat(banner).hasCount(0)

        context.clearCookies(com.microsoft.playwright.BrowserContext.ClearCookiesOptions().setName("cookie-consent"))
        page.navigate("/board")
        assertThat(banner).containsText("This site can remember your board filter in a cookie.")
        banner.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Only what is needed")).click()
        assertThat(banner).hasCount(0)
        assertEquals("none", cookies()["cookie-consent"])
        page.locator("#mine").check()
        assertThat(page.locator("#tasks > li, #no-tasks").first()).isVisible()
        assertEquals(null, cookies()["board-mine"])
        page.reload()
        assertThat(page.locator("#mine")).not().isChecked()
        assertThat(banner).hasCount(0)

        context.clearCookies(com.microsoft.playwright.BrowserContext.ClearCookiesOptions().setName("cookie-consent"))
        page.reload()
        banner.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Remember it")).click()
        assertEquals("preferences", cookies()["cookie-consent"])
        page.locator("#mine").check()
        page.waitForCondition { cookies()["board-mine"] == "true" }
        page.reload()
        assertThat(page.locator("#mine")).isChecked()
        page.locator("#mine").uncheck()
    }

    @Test
    fun `a generated field ties its label, hint, bounds and errors to the input`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/settings")
        assertThat(page.locator("#profile-name")).hasAttribute("autocomplete", "name")
        val next = page.getByLabel("New password")
        assertThat(next).hasAttribute("minlength", "10")
        assertThat(next).hasAttribute("type", "password")
        val hint = page.locator("#" + next.getAttribute("aria-describedby"))
        assertThat(hint).hasText("At least 10 characters.")

        next.fill("short")
        page.getByLabel("Current password").fill(ADMIN_PASSWORD)
        next.press("Enter")
        assertThat(next).hasAttribute("aria-invalid", "true")
        val described = next.getAttribute("aria-describedby").orEmpty().split(" ")
        assertEquals(2, described.size)
        assertThat(page.locator("#" + described[0])).hasText("At least 10 characters.")
        assertThat(page.locator("#" + described[1])).hasAttribute("role", "alert")
        assertThat(page.locator("#" + described[1])).not().isEmpty()
    }

    @Test
    fun `generated date and enum inputs put typed values into the request`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/tasks/new")
        val priority = page.getByLabel("Priority")
        assertThat(priority.locator("option")).hasText(arrayOf("Low", "Normal", "High"))
        priority.selectOption("HIGH")
        val due = page.getByLabel("Due on")
        assertThat(due).hasAttribute("type", "date")
        due.fill("2026-12-24")
        page.getByLabel("Title").fill(unique("Typed inputs"))
        val created = java.util.function.Predicate<com.microsoft.playwright.Request> { it.method() == "POST" && it.url().endsWith("/api/tasks") }
        val body = page.waitForRequest(created) { page.button("Create task").click() }.postData().orEmpty()
        assertEquals(true, "\"priority\":\"HIGH\"" in body, body)
        assertEquals(true, "\"dueOn\":\"2026-12-24\"" in body, body)
    }

    @Test
    fun `the board remembers the mine filter in its typed cookie`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/board")
        assertThat(page.locator("#mine")).not().isChecked()
        page.locator("#mine").check()
        page.waitForCondition { page.context().cookies().any { it.name == "board-mine" && it.value == "true" } }
        page.reload()
        assertThat(page.locator("#mine")).isChecked()
        page.locator("#mine").uncheck()
        page.waitForCondition { page.context().cookies().any { it.name == "board-mine" && it.value == "false" } }
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
        val written = page.locator("#comments time").last()
        assertThat(written).hasText("now")
        assertThat(written).hasAttribute("title", Pattern.compile("^[A-Z][a-z]{2} \\d{1,2}, \\d{4}, \\d{1,2}:\\d{2}.[AP]M$"))
        assertThat(written).hasAttribute("datetime", Pattern.compile("^\\d{4}-\\d{2}-\\d{2}T"))
        assertThat(page.locator("#activity")).containsText("Ada Lovelace commented: Looks fine from here.")

        page.getByLabel("Attach files").setInputFiles(FilePayload("pixel.png", "image/png", PNG_PIXEL))
        assertThat(page.locator("#attachments")).containsText("pixel.png")
        val preview = page.locator("#attachments img")
        preview.scrollIntoViewIfNeeded()
        assertThat(preview).hasJSProperty("naturalWidth", 1)

        page.getByLabel("Attach files").setInputFiles(FilePayload("drawing.svg", "image/svg+xml", "<svg/>".toByteArray()))
        val refused = page.locator("[data-upload-state=failed]")
        assertThat(refused).containsText("drawing.svg")
        assertThat(refused.getByRole(AriaRole.ALERT)).hasText("Only images, PDF, text, CSV and ZIP files can be attached.")
        assertThat(page.locator("#attachments > li")).hasCount(1)
        assertThat(page.getByLabel("Attach files")).hasAttribute("accept", Pattern.compile("^image/png,.*application/zip$"))

        val download = page.waitForDownload { page.locator("#attachments").getByRole(AriaRole.LINK).click() }
        assertEquals("pixel.png", download.suggestedFilename())

        page.button("Remove pixel.png").click()
        assertThat(page.locator("#attachments")).containsText("No files yet.")

        page.waitForLoadState(LoadState.NETWORKIDLE)
        page.reload()
        assertThat(page.locator("#task-title")).hasText("$title edited")
        assertThat(page.getByLabel("Status")).hasValue("DOING")

        page.button("Delete").click()
        val question = page.getByRole(AriaRole.DIALOG)
        assertThat(question).containsText("Delete this task?")
        page.expectAccessible()
        question.getByText("Cancel").click()
        assertThat(question).hasCount(0)
        assertThat(page.locator("#task-title")).hasText("$title edited")

        page.button("Delete").click()
        page.keyboard().press("Escape")
        assertThat(question).hasCount(0)

        page.button("Delete").click()
        question.locator("[data-confirm]").click()
        assertThat(page.locator(".toast")).containsText("Task deleted.")
        assertThat(page).hasURL(BOARD)
        page.getByLabel("Search tasks").fill(title)
        assertThat(page.locator("#no-tasks")).isVisible()
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `a form knows when it has changes and can discard them and its errors`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/tasks/new")
        val discard = page.button("Discard changes")
        assertThat(discard).isDisabled()

        page.button("Create task").click()
        assertThat(page.getByRole(AriaRole.ALERT)).hasText("Must be at least 1 character.")
        assertThat(discard).isDisabled()

        page.getByLabel("Title").fill("Typed and thrown away")
        assertThat(discard).isEnabled()
        page.getByLabel("Title").fill("")
        assertThat(discard).isDisabled()

        page.getByLabel("Title").fill("Typed and thrown away")
        discard.click()
        assertThat(page.getByLabel("Title")).hasValue("")
        assertThat(page.getByRole(AriaRole.ALERT)).hasCount(0)
        assertThat(discard).isDisabled()
        assertThat(page).hasURL(Pattern.compile(".*/tasks/new$"))
    }

    @Test
    fun `a modal opens from a button and closes by its button, by Escape and by a click beside it`() {
        page.openWhenInteractive("/about")
        val dialog = page.getByRole(AriaRole.DIALOG)
        assertThat(dialog).hasCount(0)

        page.button("Demo users").click()
        assertThat(dialog).containsText("ada@example.com")
        page.expectAccessible()
        dialog.getByText("Close").click()
        assertThat(dialog).hasCount(0)

        page.button("Demo users").click()
        assertThat(dialog).isVisible()
        page.keyboard().press("Escape")
        assertThat(dialog).hasCount(0)

        page.button("Demo users").click()
        assertThat(dialog).isVisible()
        page.mouse().click(5.0, 5.0)
        assertThat(dialog).hasCount(0)
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
        page.register(unique("Polyglot"))
        assertThat(page).hasURL(BOARD)
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
        assertThat(page).hasURL(loginFrom("/board"))
    }

    @Test
    fun `a member has no admin area`() {
        page.signIn(MEMBER_EMAIL, MEMBER_PASSWORD)
        assertThat(page.navigationLink("Admin")).hasCount(0)
        page.navigate("/admin")
        assertThat(page.heading()).hasText("403")
        assertThat(page.locator("#error-message")).hasText("You are not allowed to see this page.")
        val asked = page.evaluate("fetch('/api/admin/users').then((answer) => answer.status)")
        assertEquals(403, asked)
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
    fun `the generated data table pages through a route and shows typed columns`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val token = unique("Tabled").replace(" ", "")
        (1..6).forEach { page.createTask("$token $it") }
        page.navigationLink("Admin").click()
        val table = page.locator("#all-tasks")
        val rows = table.locator("tbody tr")
        assertThat(table.locator("thead th")).hasText(arrayOf("", "Title", "Status", "Created by"))
        assertThat(rows).hasCount(5)
        assertThat(rows.first()).containsText("$token 6")
        assertThat(rows.first()).containsText("To do")
        assertThat(rows.first()).containsText("Ada Lovelace, ")
        val previous = table.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Previous"))
        val next = table.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Next"))
        assertThat(previous).isDisabled()

        next.click()
        assertThat(rows.first()).containsText("$token 1")
        assertThat(previous).isEnabled()
        previous.click()
        assertThat(rows.first()).containsText("$token 6")
        assertThat(rows).hasCount(5)
        assertThat(previous).isDisabled()

        table.getByText("Columns").click()
        table.getByRole(AriaRole.CHECKBOX, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Status")).uncheck()
        assertThat(table.locator("thead th")).hasText(arrayOf("", "Title", "Created by"))
        assertThat(rows.first().locator("td")).hasCount(3)
        val up = table.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Up: Created by"))
        up.click()
        assertThat(table.locator("thead th")).hasText(arrayOf("", "Title", "Created by"))
        up.click()
        assertThat(table.locator("thead th")).hasText(arrayOf("", "Created by", "Title"))
        page.reload()
        assertThat(page.locator("#all-tasks thead th")).hasText(arrayOf("", "Created by", "Title"))
    }

    @Test
    fun `rows of the data table can be chosen and an action runs for each of them`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val token = unique("Bulk").replace(" ", "")
        (1..3).forEach { page.createTask("$token $it") }
        page.navigationLink("Admin").click()
        val table = page.locator("#all-tasks")
        table.getByLabel("Select: $token 3").check()
        table.getByLabel("Select: $token 2").check()
        assertThat(table.getByText("2 selected")).isVisible()
        table.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Mark as done")).click()
        assertThat(table.getByText("Done: 2 of 2 worked.")).isVisible()
        val rows = table.locator("tbody tr")
        assertThat(rows.filter(com.microsoft.playwright.Locator.FilterOptions().setHasText("$token 3"))).containsText("Done")
        assertThat(rows.filter(com.microsoft.playwright.Locator.FilterOptions().setHasText("$token 2"))).containsText("Done")
        assertThat(rows.filter(com.microsoft.playwright.Locator.FilterOptions().setHasText("$token 1"))).containsText("To do")
        assertThat(table.getByLabel("Select: $token 1")).not().isChecked()
    }

    @Test
    fun `a click on a sortable header sorts the rows, and a second click reverses them`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val token = unique("Sorted").replace(" ", "")
        listOf("b", "d", "a", "e", "c").forEach { page.createTask("$token $it") }
        page.navigationLink("Admin").click()
        val table = page.locator("#all-tasks")
        val titles = table.locator("tbody tr td:nth-child(2)")
        assertThat(titles).hasText(arrayOf("$token c", "$token e", "$token a", "$token d", "$token b"))
        val header = table.locator("thead th").filter(com.microsoft.playwright.Locator.FilterOptions().setHasText("Title"))
        header.getByRole(AriaRole.BUTTON).click()
        assertThat(header).hasAttribute("aria-sort", "ascending")
        assertThat(titles).hasText(arrayOf("$token a", "$token b", "$token c", "$token d", "$token e"))
        header.getByRole(AriaRole.BUTTON).click()
        assertThat(header).hasAttribute("aria-sort", "descending")
        assertThat(titles).hasText(arrayOf("$token e", "$token d", "$token c", "$token b", "$token a"))
        header.getByRole(AriaRole.BUTTON).click()
        assertThat(header).not().hasAttribute("aria-sort", Pattern.compile(".*"))
    }

    @Test
    fun `an empty table says whether nothing exists or nothing matches the filter`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigationLink("Admin").click()
        val table = page.locator("#all-tasks")
        assertThat(table.locator("[data-empty]")).hasCount(0)
        page.locator("#task-search").fill(unique("NoSuchTask").replace(" ", ""))
        assertThat(table.locator("[data-empty]")).hasAttribute("data-empty", "filtered")
        assertThat(table.getByText("Nothing matches this search.")).isVisible()
        assertThat(table.getByText("Nothing here yet.")).hasCount(0)
        page.locator("#task-search").fill("")
        assertThat(table.locator("[data-empty]")).hasCount(0)
    }

    @Test
    fun `while the first page loads the table shows placeholder rows shaped like its columns`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val held = java.util.concurrent.CopyOnWriteArrayList<Route>()
        page.route("**/api/tasks?*") { route -> held += route }
        page.navigationLink("Admin").click()
        val skeleton = page.locator("#all-tasks tbody tr[data-skeleton]")
        assertThat(skeleton).hasCount(3)
        assertThat(skeleton.first().locator("td")).hasCount(4)
        assertThat(skeleton.first()).hasAttribute("aria-hidden", "true")
        page.waitForCondition { held.isNotEmpty() }
        page.unroute("**/api/tasks?*")
        held.forEach { it.resume() }
        assertThat(skeleton).hasCount(0)
        assertThat(page.locator("#all-tasks tbody tr").first()).isVisible()
    }

    @Test
    fun `a long table renders only the rows in view and loads more while scrolling`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val asked = java.util.concurrent.CopyOnWriteArrayList<String>()
        page.route("**/api/tasks?*") { route ->
            val cursor = Regex("cursor=(\\d+)").find(route.request().url())?.groupValues?.get(1)?.toInt() ?: 0
            asked += cursor.toString()
            val items =
                (cursor until cursor + 50).joinToString(",") { id ->
                    "{\"id\":${id + 1},\"title\":\"Row ${id + 1}\",\"description\":\"\",\"status\":\"TODO\",\"priority\":\"NORMAL\"," +
                        "\"labels\":[],\"icon\":\"Circle\",\"creator\":{\"id\":1,\"name\":\"Ada\"},\"createdAt\":\"2026-11-17T10:00:00Z\",\"version\":1}"
                }
            val next = if (cursor + 50 < 200) "\"${cursor + 50}\"" else "null"
            route.fulfill(Route.FulfillOptions().setContentType("application/json").setBody("{\"items\":[$items],\"next\":$next}"))
        }
        page.navigate("/admin/tasks")
        val table = page.locator("#every-task")
        val rows = table.locator("tbody tr:not([data-spacer])")
        assertThat(rows.first()).containsText("Row 1")
        val rendered = rows.count()
        assertTrue(rendered in 10..30, "rendered $rendered rows")
        assertThat(table.locator("table")).hasAttribute("aria-rowcount", "51")
        val box = table.locator("[data-virtual]")
        repeat(6) {
            box.evaluate("(box) => { box.scrollTop = box.scrollHeight; box.dispatchEvent(new Event('scroll')); }")
            page.waitForTimeout(200.0)
        }
        page.waitForCondition { asked.size >= 3 }
        assertThat(table.locator("table")).hasAttribute("aria-rowcount", Pattern.compile("1[0-9][0-9]|20[0-1]"))
        assertTrue(rows.count() < 40, "still only the rows in view")
        assertThat(table.getByText("Row 1", com.microsoft.playwright.Locator.GetByTextOptions().setExact(true))).hasCount(0)
    }

    @Test
    fun `the rows of a table are reached with the arrow keys and opened with Enter`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val token = unique("Keys").replace(" ", "")
        (1..3).forEach { page.createTask("$token $it") }
        page.navigationLink("Admin").click()
        val rows = page.locator("#all-tasks tbody tr[data-row]")
        assertThat(rows.first()).containsText("$token 3")
        assertThat(rows.first()).hasAttribute("tabindex", "0")
        assertThat(rows.nth(1)).hasAttribute("tabindex", "-1")
        rows.first().focus()
        page.keyboard().press("ArrowDown")
        page.keyboard().press("ArrowDown")
        assertThat(rows.nth(2)).isFocused()
        assertThat(rows.nth(2)).hasAttribute("tabindex", "0")
        page.keyboard().press("ArrowUp")
        assertThat(rows.nth(1)).isFocused()
        page.keyboard().press("Enter")
        assertThat(page).hasURL(Pattern.compile(".*/tasks/\\d+$"))
        assertThat(page.locator("#task-title")).containsText("$token 2")
    }

    @Test
    fun `the breadcrumb trail leads from the start page through the admin area to the open page`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/admin/tasks")
        val trail = page.getByRole(AriaRole.NAVIGATION, Page.GetByRoleOptions().setName("Breadcrumb"))
        assertThat(trail.getByRole(AriaRole.LINK)).hasCount(2)
        assertThat(trail.getByRole(AriaRole.LINK).last()).hasText("Admin")
        assertThat(trail.locator("[aria-current=page]")).hasText("All tasks")
        trail.getByRole(AriaRole.LINK, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Admin")).click()
        assertThat(page).hasURL(Pattern.compile(".*/admin$"))
    }

    @Test
    fun `the generated error page shows the status and message of what failed`() {
        val heading = page.getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.navigate("/no-such-page")
        assertThat(heading).hasText("404")
        assertThat(page.locator("#error-message")).hasText("This page does not exist.")
        assertThat(page.locator("#error-request-id")).hasCount(0)

        page.navigate("/tasks/999999")
        assertThat(heading).hasText("404")
        assertThat(page.locator("#error-message")).hasText("That task does not exist.")
        assertThat(page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Back to the start page"))).hasAttribute("href", "/")

        page.route("**/api/tasks/424242**") { route ->
            route.fulfill(
                Route
                    .FulfillOptions()
                    .setStatus(500)
                    .setHeaders(mapOf("content-type" to "application/json", "x-request-id" to "req-424242"))
                    .setBody("{}"),
            )
        }
        page.navigate("/tasks/424242")
        assertThat(heading).hasText("500")
        assertThat(page.locator("#error-message")).hasText("Something went wrong.")
        assertThat(page.locator("#error-request-id")).hasText("Request ID: req-424242")
    }

    @Test
    fun `the generated switches list the themes and name each language in its own words`() {
        page.navigate("/about")
        assertThat(page.getByLabel("Language").locator("option")).hasText(arrayOf("English", "Deutsch"))
        assertThat(page.getByLabel("Language")).hasValue("en")
        val themes = page.getByLabel("Theme")
        assertThat(themes.locator("option")).hasCount(5)
        themes.selectOption("nord")
        assertThat(page.locator("html")).hasAttribute("data-theme", "nord")
        page.reload()
        assertThat(page.getByLabel("Theme")).hasValue("nord")
    }

    @Test
    fun `a bar shows while the next page loads and leaves when it is there`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val bar = page.getByRole(AriaRole.PROGRESSBAR, Page.GetByRoleOptions().setName("Loading page"))
        assertThat(bar).hasCount(0)
        val held = java.util.concurrent.CopyOnWriteArrayList<Route>()
        page.route("**/api/admin/users") { route -> held += route }

        page.navigationLink("Admin").click()
        assertThat(bar).hasAttribute("aria-busy", "true")
        assertThat(page.locator("#users")).hasCount(0)
        page.waitForCondition { held.isNotEmpty() }
        held.forEach { it.resume() }

        assertThat(page.locator("#users")).containsText(MEMBER_EMAIL)
        assertThat(bar).hasCount(0)
    }

    @Test
    fun `someone else's change is noticed on save, and can be loaded or overwritten`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val title = unique("Contested")
        val id = page.createTask(title)
        val conflict = page.locator("#conflict")

        fun changeElsewhere(to: String) {
            val response = page.request().put("/api/tasks/$id", com.microsoft.playwright.options.RequestOptions.create().setData(mapOf("title" to to)))
            assertEquals(200, response.status())
        }

        page.button("Edit").click()
        page.getByLabel("Title").fill("$title mine")
        changeElsewhere("$title theirs")
        page.button("Save").click()
        assertThat(conflict).containsText("Someone else changed this task while you were editing it.")
        assertThat(page.locator(".toast").getByText("Someone else changed this task")).hasCount(0)

        conflict.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Load their version")).click()
        assertThat(conflict).hasCount(0)
        assertThat(page.getByLabel("Title")).hasValue("$title theirs")

        page.getByLabel("Title").fill("$title mine again")
        changeElsewhere("$title theirs again")
        page.button("Save").click()
        conflict.getByRole(AriaRole.BUTTON, com.microsoft.playwright.Locator.GetByRoleOptions().setName("Save mine anyway")).click()
        assertThat(page.locator("#task-title")).hasText("$title mine again")
        assertThat(conflict).hasCount(0)
    }

    @Test
    fun `one field is cleared with a patch and the rest of the task stays`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        val title = unique("Due")
        page.navigate("/tasks/new")
        page.getByLabel("Title").fill(title)
        page.getByLabel("Due on").fill("2026-12-24")
        page.getByLabel("Description").fill("Stays as it is.")
        page.button("Create task").click()
        assertThat(page.locator("#task-title")).hasText(title)
        val patched = java.util.function.Predicate<com.microsoft.playwright.Request> { it.method() == "PATCH" && "/api/tasks/" in it.url() }

        val body = page.waitForRequest(patched) { page.locator("#clear-due").click() }.postData()
        assertEquals("""{"dueOn":null}""", body)
        assertThat(page.locator("#clear-due")).hasCount(0)
        assertThat(page.locator("#task-title")).hasText(title)
        assertThat(page.getByText("Stays as it is.")).isVisible()
    }

    @Test
    fun `files dropped on the drop zone are previewed, uploaded with progress and listed`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.createTask(unique("Dropped"))
        val zone = page.locator("[data-drop-zone]")
        val held = java.util.concurrent.CopyOnWriteArrayList<Route>()
        page.route("**/api/tasks/*/attachments") { route -> if (route.request().method() == "POST") held += route else route.resume() }

        val png = java.util.Base64.getEncoder().encodeToString(PNG_PIXEL)
        val transfer =
            page.evaluateHandle(
                """(encoded) => {
                    const bytes = Uint8Array.from(atob(encoded), (letter) => letter.charCodeAt(0));
                    const data = new DataTransfer();
                    data.items.add(new File([bytes], 'dropped.png', { type: 'image/png' }));
                    data.items.add(new File(['hello'], 'notes.txt', { type: 'text/plain' }));
                    return data;
                }""",
                png,
            )
        zone.dispatchEvent("dragover", mapOf("dataTransfer" to transfer))
        assertThat(zone).hasAttribute("data-over", "true")
        zone.dispatchEvent("drop", mapOf("dataTransfer" to transfer))
        assertThat(zone).hasAttribute("data-over", "false")

        val rows = zone.locator("li")
        assertThat(rows).hasCount(2)
        assertThat(rows.first()).containsText("dropped.png")
        assertThat(rows.first().locator("img")).hasJSProperty("naturalWidth", 1)
        assertThat(rows.first().getByRole(AriaRole.PROGRESSBAR)).hasAttribute("aria-label", "Uploading dropped.png")
        assertThat(rows.nth(1)).containsText("5 B")
        assertThat(rows.nth(1)).hasAttribute("data-upload-state", "waiting")

        page.waitForCondition { held.size == 1 }
        held.first().resume()
        page.waitForCondition { held.size == 2 }
        held[1].resume()
        assertThat(rows).hasCount(0)
        assertThat(page.locator("#attachments > li")).hasCount(2)
        assertThat(page.locator("#attachments")).containsText("notes.txt")
    }

    @Test
    fun `the app's own font is preloaded and used, and nothing is asked of another host`() {
        val hosts = java.util.concurrent.ConcurrentHashMap.newKeySet<String>()
        page.onRequest { request -> hosts += java.net.URI(request.url()).host }
        page.navigate("/about")
        val preload = page.locator("link[rel=preload][as=font]")
        assertThat(preload).hasAttribute("href", Pattern.compile("^/_app/immutable/assets/inter-latin-wght-normal\\.[^./]+\\.woff2$"))
        assertThat(preload).hasAttribute("type", "font/woff2")
        assertEquals(true, page.evaluate("getComputedStyle(document.documentElement).fontFamily.includes('Inter Variable')"))
        page.waitForFunction("document.fonts.ready.then(() => document.fonts.check('16px \"Inter Variable\"'))")
        assertEquals(1, hosts.size, hosts.toString())
    }

    @Test
    fun `the board's chart draws one bar per status in the theme's color`() {
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        page.createTask(unique("Charted"))
        page.navigate("/board")
        val chart = page.locator("#status-chart")
        assertThat(chart.locator("svg").first()).isVisible()
        assertThat(chart).containsText("To do")
        assertThat(chart).containsText("Done")
        val drawn =
            page.waitForFunction(
                """() => {
                    const bars = [...document.querySelectorAll('#status-chart svg rect, #status-chart svg path')]
                        .filter((bar) => bar.getBoundingClientRect().height > 2 && bar.getBoundingClientRect().width > 8);
                    const probe = document.createElement('span');
                    probe.style.color = 'var(--color-primary)';
                    document.body.append(probe);
                    const primary = getComputedStyle(probe).color;
                    probe.remove();
                    const themed = bars.filter((bar) => getComputedStyle(bar).fill === primary);
                    return themed.length >= 1 ? themed.length : false;
                }""",
            )
        assertEquals(true, (drawn.jsonValue() as Int) >= 1)
    }

    @Test
    fun `the header knows who is signed in from one request and forgets them on sign-out`() {
        val asked = java.util.concurrent.atomic.AtomicInteger()
        page.onRequest { request -> if (request.url().endsWith("/api/current-user")) asked.incrementAndGet() }
        page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
        assertThat(page.locator("#signed-in-as")).hasText("Ada Lovelace")
        val afterSignIn = asked.get()
        assertEquals(true, afterSignIn in 1..2, "asked $afterSignIn times")

        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Settings")).click()
        assertThat(page).hasURL(Pattern.compile("/settings$"))
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Board")).click()
        assertThat(page).hasURL(BOARD)
        assertEquals(afterSignIn, asked.get(), "moving between pages asks nothing")

        page.getByRole(AriaRole.BUTTON, Page.GetByRoleOptions().setName("Sign out")).click()
        assertThat(page).hasURL(LOGIN)
        assertThat(page.locator("#signed-in-as")).hasCount(0)
        assertThat(page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Sign in"))).isVisible()
    }

    @Test
    fun `a session about to end is announced, can be extended, and ends on the page when it is not`() {
        ShowcaseServer(directory.resolve("short-sessions"), sessionSeconds = 6).use { short ->
            BrowserSession(short).use { browser ->
                val visitor = browser.newContext().newPage()
                visitor.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
                val warning = visitor.locator("#session-ending")
                assertThat(warning).containsText("You will be signed out soon.")
                assertThat(visitor.locator("#signed-in-as")).hasText("Ada Lovelace")

                val extended =
                    visitor.waitForResponse({ it.url().endsWith("/api/current-user/extend") }) {
                        warning.getByRole(AriaRole.BUTTON, Locator.GetByRoleOptions().setName("Stay signed in")).click()
                    }
                assertEquals(200, extended.status())
                assertEquals("POST", extended.request().method())
                assertThat(visitor.locator("#signed-in-as")).hasText("Ada Lovelace")

                assertThat(visitor.locator("#signed-in-as")).hasCount(0, LocatorAssertions.HasCountOptions().setTimeout(15_000.0))
                assertThat(warning).hasCount(0)
            }
        }
    }

    @Test
    fun `preferences are kept for the person and follow them to another browser`() {
        val name = unique("Prefers")
        page.register(name)
        assertThat(page).hasURL(BOARD)
        val list = page.locator("#tasks")
        assertThat(list).hasAttribute("data-compact", "false")

        val saved = page.waitForResponse({ it.url().endsWith("/api/preferences") && it.request().method() == "PUT" }) {
            page.getByLabel("Compact list").check()
        }
        assertEquals(200, saved.status())
        assertThat(list).hasAttribute("data-compact", "true")
        page.waitForResponse({ it.url().endsWith("/api/preferences") && it.request().method() == "PUT" }) {
            page.getByLabel("Theme").selectOption("dracula")
        }
        page.reload()
        assertThat(list).hasAttribute("data-compact", "true")

        session.newContext().use { elsewhere ->
            val other = elsewhere.newPage()
            other.navigate("/login")
            assertThat(other.locator("html")).hasAttribute("data-theme", "shadcn-light")
            other.signIn(name.replace(' ', '.').lowercase() + "@example.com", "registered-password")
            assertThat(other.locator("#tasks")).hasAttribute("data-compact", "true")
            assertThat(other.locator("html")).hasAttribute("data-theme", "dracula")
            assertThat(other.getByLabel("Compact list")).isChecked()
        }
    }

    @Test
    fun `an error nobody caught is reported to the app`() {
        page.navigate("/about")
        assertThat(page.heading()).isVisible()
        val report =
            page.waitForRequest({ it.url().endsWith("/_ktor-svelte/errors") }) {
                page.evaluate("setTimeout(() => { throw new Error('thrown by the browser test'); }, 0)")
            }
        assertEquals("POST", report.method())
        assertContains(report.postData().orEmpty(), "\"message\":\"Error: thrown by the browser test\"")
        assertContains(report.postData().orEmpty(), "\"page\":\"/about\"")
        val status = report.response()?.status()
        assertEquals(true, status == 204 || status == 429, "answered $status")
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
        page.getByLabel("Theme").selectOption(theme)
        assertThat(page.locator("html")).hasAttribute("data-theme", theme)
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

    @Test
    fun `the app can be installed and shows its offline page without a connection`() {
        val context = session.newContext(serviceWorkers = true)
        val page = context.newPage()
        val manifest = page.request().get("/ktor-svelte/manifest.webmanifest")
        assertTrue(manifest.headers().getValue("content-type").startsWith("application/manifest+json"))
        assertContains(manifest.text(), "\"short_name\": \"Showcase\"")
        assertEquals(200, page.request().get("/ktor-svelte/icon-maskable-512.png").status())

        page.navigate("/")
        assertThat(page.locator("link[rel=manifest]")).hasAttribute("href", "/ktor-svelte/manifest.webmanifest")
        assertThat(page.locator("meta[name=theme-color]")).hasAttribute("content", "#7f52ff")
        if (session.name != "chromium") return context.close()

        assertEquals("activated", page.evaluate(
            "navigator.serviceWorker.ready.then((registration) => new Promise((done) => { const worker = registration.active; " +
                "if (worker.state === 'activated') done(worker.state); " +
                "worker.addEventListener('statechange', () => worker.state === 'activated' && done(worker.state)); }))",
        ))
        page.reload()
        assertTrue(page.evaluate("navigator.serviceWorker.controller !== null") as Boolean)
        context.setOffline(true)
        page.navigate("/about")
        assertThat(page.heading()).hasText("You are offline")
        assertThat(page.getByRole(AriaRole.BUTTON, Page.GetByRoleOptions().setName("Try again"))).isVisible()
        context.setOffline(false)
        assertThat(page.heading()).not().hasText("You are offline")
        assertThat(page).hasURL(Pattern.compile(".*/about$"))
        context.close()
    }
}
