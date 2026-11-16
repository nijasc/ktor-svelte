package io.github.nijasc.ktor.svelte

import io.ktor.server.application.ApplicationCall

internal const val NAVIGATE_HEADER = "X-Ktor-Svelte-Navigate"

internal fun isPagePath(path: String): Boolean =
    path.startsWith("/") && !path.startsWith("//") && '\\' !in path && path.none { it.isISOControl() }

private const val FIRST_PRINTABLE = 33
private const val LAST_PRINTABLE = 126
private const val BYTE = 0xff

internal fun asciiOnly(path: String): String =
    buildString {
        path.codePoints().forEach { point ->
            if (point in FIRST_PRINTABLE..LAST_PRINTABLE) {
                appendCodePoint(point)
            } else {
                String(Character.toChars(point)).toByteArray().forEach { append("%%%02X".format(it.toInt() and BYTE)) }
            }
        }
    }

public fun ApplicationCall.navigateTo(path: String) {
    require(isPagePath(path)) {
        "navigateTo takes a path inside this app, such as \"/notes/4\" or FrontendRoutes.notesId(\"4\"), but got '$path'. " +
            "To send the browser to another site, answer with its address and let the page decide."
    }
    response.headers.append(NAVIGATE_HEADER, asciiOnly(path), safeOnly = false)
}
