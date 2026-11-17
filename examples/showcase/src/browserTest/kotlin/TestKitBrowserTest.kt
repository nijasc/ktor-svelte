import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import io.github.nijasc.ktor.svelte.test.ApiFailure
import io.github.nijasc.ktor.svelte.test.BrowserTest
import io.github.nijasc.ktor.svelte.test.problems
import io.github.nijasc.ktorsvelte.FrontendRoutes
import showcase.Login
import showcase.ProfileInput
import showcase.User
import showcase.UserRef
import java.nio.file.Files
import java.util.regex.Pattern
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

private val kitData = Files.createTempDirectory("showcase-kit").toString()

class TestKitBrowserTest : BrowserTest() {
    override val environment: Map<String, String>
        get() =
            mapOf(
                "SHOWCASE_DATA" to kitData,
                "SHOWCASE_ADMIN_PASSWORD" to ADMIN_PASSWORD,
                "SHOWCASE_MEMBER_PASSWORD" to MEMBER_PASSWORD,
                "SHOWCASE_INSECURE_COOKIES" to "true",
                "SHOWCASE_LOGIN_ATTEMPTS" to "1000",
                "APP_NAME" to "Showcase from the kit",
            )

    @Test
    fun `a typed route opens a page of the app the kit started`() {
        val problems = page.problems()
        page.navigate(FrontendRoutes.about)
        assertThat(page.getByRole(com.microsoft.playwright.options.AriaRole.BANNER)).containsText("Showcase from the kit")
        page.waitForLoadState(com.microsoft.playwright.options.LoadState.NETWORKIDLE)
        page.navigate(FrontendRoutes.board)
        assertThat(page).hasURL(Pattern.compile(".*/login\\?next=%2Fboard$"))
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `the API is called with the app's own classes, as the signed-in browser`() {
        val refused = assertFailsWith<ApiFailure> { api.get<List<UserRef>>("/api/members") }
        assertEquals(401, refused.status)

        val ada: User = api.post("/api/session", Login(ADMIN_EMAIL, ADMIN_PASSWORD))
        assertEquals("Ada Lovelace", ada.name)
        val members: List<UserRef> = api.get("/api/members")
        assertContains(members.map { it.name }, "Grace Hopper")
        val renamed: User = api.put("/api/me", ProfileInput("Ada Lovelace"))
        assertEquals(ada.id, renamed.id)

        page.waitForLoadState(com.microsoft.playwright.options.LoadState.NETWORKIDLE)
        page.navigate(FrontendRoutes.board)
        assertThat(page.locator("#signed-in-as")).hasText("Ada Lovelace")
        api.delete("/api/session")
        assertEquals(401, api.status("GET", "/api/members"))
    }
}
