import com.microsoft.playwright.Page
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.AriaRole
import io.github.nijasc.ktor.svelte.test.BrowserTest
import io.github.nijasc.ktor.svelte.test.problems
import java.util.concurrent.CopyOnWriteArrayList
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class TwoFrontendsBrowserTest : BrowserTest() {
    private fun Page.failedRequests(): List<String> {
        val failed = CopyOnWriteArrayList<String>()
        onResponse { response -> if (response.status() >= 400) failed += "${response.status()} ${response.url()}" }
        onRequestFailed { request -> failed += "failed ${request.url()}" }
        return failed
    }

    private fun Page.heading() = getByRole(AriaRole.HEADING, Page.GetByRoleOptions().setLevel(1))

    private fun Page.files(): List<String> {
        val loaded = CopyOnWriteArrayList<String>()
        onRequest { request ->
            val path = java.net.URI(request.url()).path
            if ("/_app/" in path) loaded += path
        }
        return loaded
    }

    @Test
    fun `the public site renders with its own files and calls the API through its own client`() {
        val problems = page.problems()
        val failed = page.failedRequests()
        val files = page.files()
        page.navigate("/")
        assertThat(page.heading()).hasText("The public site")
        assertThat(page.locator("#greeting")).hasText("Hello from Ktor")
        assertTrue(files.isNotEmpty())
        assertTrue(files.all { it.startsWith("/_app/") }, files.toString())
        assertEquals(emptyList(), failed)
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `the admin area renders under its prefix with its own files and client`() {
        val problems = page.problems()
        val failed = page.failedRequests()
        val files = page.files()
        page.navigate("/admin")
        assertThat(page.heading()).hasText("The admin area")
        assertThat(page.locator("#admin-greeting")).hasText("Hello from Ktor")
        assertTrue(files.isNotEmpty())
        assertTrue(files.all { it.startsWith("/admin/_app/") }, files.toString())
        assertEquals(emptyList(), failed)
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `navigation stays inside each frontend without reloading the page`() {
        page.navigate("/")
        assertThat(page.heading()).hasText("The public site")
        page.evaluate("window.stayed = true")
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("About")).click()
        assertThat(page.heading()).hasText("About the public site")
        assertEquals(true, page.evaluate("window.stayed === true"))

        page.navigate("/admin")
        assertThat(page.heading()).hasText("The admin area")
        page.evaluate("window.stayed = true")
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Users")).click()
        assertThat(page.heading()).hasText("Admin users")
        assertTrue(page.url().endsWith("/admin/users"), page.url())
        assertEquals(true, page.evaluate("window.stayed === true"))
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Admin home")).click()
        assertThat(page.heading()).hasText("The admin area")
        assertEquals(true, page.evaluate("window.stayed === true"))
    }

    @Test
    fun `links between the frontends load the other frontend`() {
        page.navigate("/")
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Admin area")).click()
        assertThat(page.heading()).hasText("The admin area")
        page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName("Public site")).click()
        assertThat(page.heading()).hasText("The public site")
    }

    @Test
    fun `a missing admin page gets the admin fallback, and a look-alike path is not the admin area`() {
        val missing = page.request().get("/admin/missing")
        assertEquals(200, missing.status())
        assertContains(missing.text(), "/admin/_app/")
        page.navigate("/admin/missing")
        assertThat(page.locator("#admin-error")).hasText("Admin area: 404")

        val lookAlike = page.request().get("/administrator")
        assertFalse("/admin/_app/" in lookAlike.text())
        page.navigate("/administrator")
        assertThat(page.locator("#site-error")).hasText("Public site: 404")
    }

    @Test
    fun `an admin file is not served from the public site, nor a public file from the admin area`() {
        val adminPage = page.request().get("/admin/").text()
        val adminFile = Regex("_app/immutable/[^\"']+\\.js").find(adminPage)?.value
        assertTrue(adminFile != null, adminPage)
        assertEquals(200, page.request().get("/admin/$adminFile").status())
        assertEquals(404, page.request().get("/$adminFile").status())
    }
}
