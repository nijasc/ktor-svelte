import com.microsoft.playwright.Browser
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import com.microsoft.playwright.options.Cookie
import com.microsoft.playwright.options.LoadState
import java.nio.file.Files
import java.nio.file.Path

private const val WIDTH = 1280
private const val HEIGHT = 800

private class Shot(
    val file: String,
    val theme: String,
    val locale: String,
    val open: (Page) -> Unit,
)

private val shots =
    listOf(
        Shot("board.png", "shadcn-light", "en") { page ->
            page.navigate("/board")
            assertThat(page.locator("#tasks > li").first()).isVisible()
        },
        Shot("task.png", "shadcn-dark", "en") { page ->
            page.navigate("/board")
            page.getByLabel("Search tasks").fill("Welcome")
            page.locator("#tasks a").first().click()
            assertThat(page.locator("#comments")).containsText("Looks good")
        },
        Shot("admin.png", "ktor", "de") { page ->
            page.navigate("/admin")
            assertThat(page.locator("#users")).containsText(MEMBER_EMAIL)
        },
    )

fun main(arguments: Array<String>) {
    val output = Path.of(arguments.first())
    Files.createDirectories(output)
    val data = Files.createTempDirectory("showcase-screenshots")
    ShowcaseServer(data, appName = "ktor-svelte showcase").use { server ->
        Playwright.create().use { playwright ->
            val browser = playwright.chromium().launch()
            shots.forEach { shot ->
                val options = Browser.NewContextOptions().setBaseURL(server.url).setLocale("en-US").setViewportSize(WIDTH, HEIGHT)
                browser.newContext(options).use { context ->
                    val page = context.newPage()
                    page.signIn(ADMIN_EMAIL, ADMIN_PASSWORD)
                    context.addCookies(
                        listOf(
                            Cookie("ktor_svelte_theme", shot.theme).setUrl(server.url),
                            Cookie("ktor_svelte_locale", shot.locale).setUrl(server.url),
                        ),
                    )
                    shot.open(page)
                    page.waitForLoadState(LoadState.NETWORKIDLE)
                    page.screenshot(Page.ScreenshotOptions().setPath(output.resolve(shot.file)))
                    println("Wrote ${output.resolve(shot.file)}")
                }
            }
            browser.close()
        }
    }
}
