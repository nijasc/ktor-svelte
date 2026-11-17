package io.github.nijasc.ktor.svelte.test

import com.deque.html.axecore.playwright.AxeBuilder
import com.microsoft.playwright.Browser
import com.microsoft.playwright.Page
import com.microsoft.playwright.options.ColorScheme
import com.microsoft.playwright.options.Cookie
import com.microsoft.playwright.options.LoadState
import java.io.File
import kotlin.system.exitProcess

private val RULE_SETS = listOf("wcag2a", "wcag2aa", "wcag21a", "wcag21aa")
private const val STILL = "*, *::before, *::after { transition: none !important; animation: none !important; }"
private const val THEME_COOKIE = "ktor_svelte_theme"
private const val SHOWN_ELEMENTS = 3

public fun Page.accessibilityProblems(): List<String> {
    addStyleTag(Page.AddStyleTagOptions().setContent(STILL))
    return AxeBuilder(this).withTags(RULE_SETS).analyze().violations.map { violation ->
        val elements = violation.nodes.map { it.target.toString() }
        val shown =
            elements.take(SHOWN_ELEMENTS).joinToString() +
                if (elements.size > SHOWN_ELEMENTS) " and ${elements.size - SHOWN_ELEMENTS} more" else ""
        "${violation.id}: ${violation.help} ($shown)"
    }
}

internal class Look(
    val name: String,
    val theme: String?,
    val scheme: ColorScheme,
)

internal fun looks(
    light: String?,
    dark: String?,
): List<Look> =
    listOf(
        Look(light?.let { "the light theme $it" } ?: "light colors", light, ColorScheme.LIGHT),
        Look(dark?.let { "the dark theme $it" } ?: "dark colors", dark, ColorScheme.DARK),
    )

internal fun checkPages(
    app: TestApp,
    browser: Browser,
    pages: List<String>,
    looks: List<Look>,
): List<String> =
    looks.flatMap { look ->
        val context =
            browser.newContext(
                Browser
                    .NewContextOptions()
                    .setBaseURL(app.url)
                    .setColorScheme(look.scheme)
                    .setLocale("en-US"),
            )
        try {
            if (look.theme != null) context.addCookies(listOf(Cookie(THEME_COOKIE, look.theme).setUrl(app.url)))
            val page = context.newPage()
            pages.flatMap { path ->
                page.navigate(path)
                page.waitForLoadState(LoadState.NETWORKIDLE)
                page.accessibilityProblems().map { "$path in ${look.name}: $it" }
            }
        } finally {
            context.close()
        }
    }

public object AccessibilityCheck {
    @JvmStatic
    public fun main(arguments: Array<String>) {
        val report = File(arguments[0])
        val light = arguments[1].ifEmpty { null }
        val dark = arguments[2].ifEmpty { null }
        val pages = arguments.drop(3)
        val problems = TestApp.start().use { app -> checkPages(app, SharedBrowser.browser, pages, looks(light, dark)) }
        report.parentFile?.mkdirs()
        report.writeText(problems.joinToString("") { "$it\n" })
        exitProcess(0)
    }
}
