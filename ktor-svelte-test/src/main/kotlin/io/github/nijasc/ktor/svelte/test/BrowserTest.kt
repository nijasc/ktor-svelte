package io.github.nijasc.ktor.svelte.test

import com.microsoft.playwright.Browser
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach

internal const val BROWSER_PROPERTY = "browser"

internal object SharedBrowser {
    private val playwright: Playwright by lazy { Playwright.create().also { Runtime.getRuntime().addShutdownHook(Thread(it::close)) } }

    val name: String get() = System.getProperty(BROWSER_PROPERTY, "chromium")

    val browser: Browser by lazy {
        when (name) {
            "firefox" -> playwright.firefox()
            "webkit" -> playwright.webkit()
            "chromium" -> playwright.chromium()
            else -> throw IllegalStateException("The browser '$name' is not one of chromium, firefox and webkit.")
        }.launch()
    }
}

public abstract class BrowserTest {
    protected open val environment: Map<String, String> get() = emptyMap()

    protected open val locale: String get() = "en-US"

    public val app: TestApp get() = TestApp.shared(environment)

    public lateinit var context: BrowserContext
        private set

    public lateinit var page: Page
        private set

    public val api: TestApi get() = TestApi(context, app.url)

    public fun newContext(): BrowserContext =
        SharedBrowser.browser.newContext(Browser.NewContextOptions().setBaseURL(app.url).setLocale(locale))

    @BeforeEach
    public fun openPage() {
        context = newContext()
        page = context.newPage()
    }

    @AfterEach
    public fun closePage() {
        if (::context.isInitialized) context.close()
    }
}
