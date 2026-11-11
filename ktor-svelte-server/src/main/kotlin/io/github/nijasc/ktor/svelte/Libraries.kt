package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.github.nijasc.ktor.svelte.internal.libraryConfig
import io.github.nijasc.ktor.svelte.internal.resolveLocale
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.acceptLanguageItems
import io.ktor.server.request.path

private const val LOCALE_COOKIE = "ktor_svelte_locale"
private const val THEME_COOKIE = "ktor_svelte_theme"

public val ApplicationCall.svelteLocale: String
    get() =
        resolveLocale(
            cookie = request.cookies[LOCALE_COOKIE],
            pathPrefix = request.path().split('/').getOrNull(1),
            acceptedLanguages = request.acceptLanguageItems().map { it.value },
            config = application.libraryConfig,
        )

public val ApplicationCall.svelteTheme: String
    get() {
        val config = application.libraryConfig
        val saved = request.cookies[THEME_COOKIE]
        return config.themes.firstOrNull { it == saved }
            ?: config.defaultTheme
            ?: error("DaisyUI is not configured. Add svelte { libraries { daisyUi { } } } to your build." + DocLink.DAISYUI.see())
    }
