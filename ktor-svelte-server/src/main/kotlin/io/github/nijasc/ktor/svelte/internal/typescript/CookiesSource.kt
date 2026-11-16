package io.github.nijasc.ktor.svelte.internal.typescript

internal const val COOKIES_FILE = "cookies.ts"
private val KEY = Regex("[A-Za-z_$][A-Za-z0-9_$]*")
private val KEY_BREAK = Regex("[._-]+([A-Za-z0-9])")

internal class CookieSpec(
    val name: String,
    val kind: String,
    val values: List<String>,
    val default: String?,
    val maxAgeSeconds: Long?,
    val path: String,
    val sameSite: String,
    val secure: Boolean,
    val httpOnly: Boolean,
    val category: String? = null,
)

private fun text(value: String): String =
    "'" +
        value
            .replace("\\", "\\\\")
            .replace("'", "\\'")
            .replace("\n", "\\n")
            .replace("\r", "\\r") + "'"

internal fun cookieKey(name: String): String {
    val key = KEY_BREAK.replace(name.trim('.', '_', '-')) { it.groupValues[1].uppercase() }
    return if (KEY.matches(key)) key else text(name)
}

private fun cookieType(cookie: CookieSpec): String =
    when (cookie.kind) {
        "string" -> "string"
        "boolean" -> "boolean"
        "enum" -> cookie.values.joinToString(" | ") { text(it) }
        else -> "number"
    }

private fun cookieEntry(cookie: CookieSpec): String {
    val type = cookieType(cookie)
    val quotedDefault = cookie.kind == "string" || cookie.kind == "enum"
    val rules =
        listOfNotNull(
            "kind: ${text(cookie.kind)}",
            if (cookie.kind == "enum") "values: [${cookie.values.joinToString(", ") { text(it) }}]" else null,
            cookie.default?.let { "default: ${if (quotedDefault) text(it) else it}" },
            cookie.maxAgeSeconds?.let { "maxAge: $it" },
            "path: ${text(cookie.path)}",
            "sameSite: ${text(cookie.sameSite)}",
            "secure: ${cookie.secure}",
            cookie.category?.let { "category: ${text(it)}" },
        )
    val types = if (cookie.default == null) "<$type>" else "<$type, $type>"
    return "    ${cookieKey(cookie.name)}: typedCookie$types(${text(cookie.name)}, { ${rules.joinToString(", ")} })"
}

internal fun cookieCategories(cookies: List<CookieSpec>): List<String> = cookies.mapNotNull { it.category }.distinct().sorted()

internal fun cookiesSource(cookies: List<CookieSpec>): String {
    val readable = cookies.filterNot { it.httpOnly }.sortedBy { it.name }
    val categories = cookieCategories(cookies)
    val imports = listOfNotNull("consentStore".takeIf { categories.isNotEmpty() }, "typedCookie".takeIf { readable.isNotEmpty() })
    val optional =
        readable.filter { it.category != null }.joinToString(", ") {
            "{ name: ${text(it.name)}, path: ${text(it.path)}, category: ${text(it.category.orEmpty())} }"
        }
    return buildString {
        append("import { ${imports.joinToString(", ")} } from './client.js';\n")
        if (readable.isNotEmpty()) {
            append("\nexport const cookies = {\n" + readable.joinToString(",\n", transform = ::cookieEntry) + "\n};\n")
        }
        if (categories.isNotEmpty()) {
            append("\nexport const cookieConsent = consentStore([${categories.joinToString(", ") { text(it) }}] as const, [$optional]);\n")
        }
    }
}
