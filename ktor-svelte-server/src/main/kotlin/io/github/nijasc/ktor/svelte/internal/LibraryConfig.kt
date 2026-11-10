package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.svelteLocale
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.path
import io.ktor.server.request.uri
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.util.AttributeKey
import java.util.Properties

private const val LIBRARIES_RESOURCE = "ktor-svelte/libraries.properties"
private const val URL_PREFIX_STRATEGY = "UrlPrefix"
private val VITE_ROOTS = setOf("src", "node_modules")
private val LibraryConfigKey = AttributeKey<LibraryConfig>("KtorSvelteLibraries")

internal data class LibraryConfig(
    val locales: List<String>,
    val defaultLocale: String?,
    val usesUrlPrefix: Boolean,
    val themes: List<String>,
    val defaultTheme: String?,
) {
    companion object {
        fun load(classLoader: ClassLoader): LibraryConfig {
            val properties = Properties()
            classLoader.getResourceAsStream(LIBRARIES_RESOURCE)?.use(properties::load)
            return LibraryConfig(
                locales =
                    properties
                        .getProperty("i18n.locales")
                        .orEmpty()
                        .split(',')
                        .filter { it.isNotEmpty() },
                defaultLocale = properties.getProperty("i18n.default"),
                usesUrlPrefix = properties.getProperty("i18n.strategy") == URL_PREFIX_STRATEGY,
                themes =
                    properties
                        .getProperty("theme.names")
                        .orEmpty()
                        .split(',')
                        .filter { it.isNotEmpty() },
                defaultTheme = properties.getProperty("theme.default"),
            )
        }
    }
}

internal val Application.libraryConfig: LibraryConfig
    get() = attributes.computeIfAbsent(LibraryConfigKey) { LibraryConfig.load(environment.classLoader) }

internal fun matchLocale(
    tag: String?,
    locales: List<String>,
): String? {
    if (tag == null) return null
    return locales.firstOrNull { it.equals(tag, ignoreCase = true) }
        ?: locales.firstOrNull { it.equals(tag.substringBefore('-'), ignoreCase = true) }
}

internal fun resolveLocale(
    cookie: String?,
    pathPrefix: String?,
    acceptedLanguages: List<String>,
    config: LibraryConfig,
): String {
    val fromPath = if (config.usesUrlPrefix) config.locales.firstOrNull { it == pathPrefix } else null
    return fromPath
        ?: matchLocale(cookie, config.locales)
        ?: acceptedLanguages.firstNotNullOfOrNull { matchLocale(it, config.locales) }
        ?: config.defaultLocale
        ?: error("i18n is not configured. Add svelte { libraries { i18n { } } } to your build.")
}

internal fun needsLocalePrefix(
    path: String,
    config: LibraryConfig,
): Boolean {
    if (!config.usesUrlPrefix) return false
    val segments = path.removePrefix("/").split('/')
    val first = segments.first()
    if (first in config.locales || first in VITE_ROOTS || first == "_app") return false
    if (first.startsWith("@") || first.startsWith(".")) return false
    return '.' !in path.removeSuffix("/").substringAfterLast('/')
}

internal suspend fun redirectToLocale(call: ApplicationCall) {
    val query = call.request.uri.substringAfter('?', "")
    val path = call.request.path().let { if (it == "/") "" else it }
    val target = "/${call.svelteLocale}$path" + if (query.isEmpty()) "" else "?$query"
    call.response.header(HttpHeaders.Location, target)
    call.response.header(HttpHeaders.Vary, "${HttpHeaders.Cookie}, ${HttpHeaders.AcceptLanguage}")
    call.respond(HttpStatusCode.Found)
}
