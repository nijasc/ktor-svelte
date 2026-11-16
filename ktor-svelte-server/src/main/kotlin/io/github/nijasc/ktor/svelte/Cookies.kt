package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.CookieSpec
import io.ktor.http.CookieEncoding
import io.ktor.http.HttpHeaders
import io.ktor.http.renderSetCookieHeader
import io.ktor.server.application.ApplicationCall
import io.ktor.util.date.GMTDate
import java.net.URLDecoder
import java.net.URLEncoder
import kotlin.time.Duration
import kotlin.time.Duration.Companion.days

private val COOKIE_NAME = Regex("[A-Za-z0-9_.-]+")
private val COOKIE_PATH = Regex("/[A-Za-z0-9_./~-]*")

public enum class CookieSameSite { Lax, Strict, None }

public class TypedCookie<T : Any>
    @PublishedApi
    internal constructor(
        public val name: String,
        private val type: Class<T>,
        public val default: T?,
        public val maxAge: Duration?,
        public val path: String,
        public val sameSite: CookieSameSite,
        public val secure: Boolean,
        public val httpOnly: Boolean,
    ) {
        private val kind: String =
            when {
                type == String::class.java -> "string"
                type == Int::class.javaObjectType || type == Long::class.javaObjectType -> "int"
                type == Double::class.javaObjectType -> "number"
                type == Boolean::class.javaObjectType -> "boolean"
                type.isEnum -> "enum"
                else ->
                    throw IllegalArgumentException(
                        "The cookie '$name' holds a ${type.name}, which a typed cookie cannot. Use String, Int, Long, Double, Boolean or an enum.",
                    )
            }

        init {
            require(COOKIE_NAME.matches(name)) { "'$name' is not a cookie name. Use letters, digits, '_', '-' and '.'." }
            require(COOKIE_PATH.matches(path)) { "The cookie '$name' has the path '$path', which is not a path such as / or /app." }
            require(
                maxAge == null || maxAge.isPositive(),
            ) { "The cookie '$name' needs a maxAge above zero, or null to end with the browser session." }
            require(
                sameSite != CookieSameSite.None || secure,
            ) { "The cookie '$name' is SameSite=None, which browsers only accept with secure = true." }
        }

        internal fun format(value: T): String {
            val text = if (value is Enum<*>) value.name else value.toString()
            return URLEncoder.encode(text, Charsets.UTF_8).replace("+", "%20")
        }

        @Suppress("UNCHECKED_CAST")
        internal fun parse(raw: String): T? {
            val text = runCatching { URLDecoder.decode(raw.replace("+", "%2B"), Charsets.UTF_8) }.getOrNull() ?: return null
            val value: Any? =
                when {
                    kind == "string" -> text
                    type == Int::class.javaObjectType -> text.toIntOrNull()
                    type == Long::class.javaObjectType -> text.toLongOrNull()
                    kind == "number" -> text.toDoubleOrNull()?.takeIf { it.isFinite() }
                    kind == "boolean" -> text.toBooleanStrictOrNull()
                    else -> type.enumConstants.firstOrNull { (it as Enum<*>).name == text }
                }
            return value as T?
        }

        internal fun spec(): CookieSpec =
            CookieSpec(
                name = name,
                kind = kind,
                values = if (kind == "enum") type.enumConstants.map { (it as Enum<*>).name } else emptyList(),
                default = default?.let { if (it is Enum<*>) it.name else it.toString() },
                maxAgeSeconds = maxAge?.inWholeSeconds,
                path = path,
                sameSite = sameSite.name.lowercase(),
                secure = secure,
                httpOnly = httpOnly,
            )
    }

public inline fun <reified T : Any> typedCookie(
    name: String,
    default: T? = null,
    maxAge: Duration? = 365.days,
    path: String = "/",
    sameSite: CookieSameSite = CookieSameSite.Lax,
    secure: Boolean = false,
    httpOnly: Boolean = false,
): TypedCookie<T> = TypedCookie(name, T::class.javaObjectType, default, maxAge, path, sameSite, secure, httpOnly)

public fun <T : Any> ApplicationCall.readCookie(cookie: TypedCookie<T>): T? =
    request.cookies[cookie.name, CookieEncoding.RAW]?.let(cookie::parse) ?: cookie.default

private fun ApplicationCall.sendCookie(
    cookie: TypedCookie<*>,
    value: String,
    maxAge: Int?,
    expires: GMTDate?,
) {
    response.headers.append(
        HttpHeaders.SetCookie,
        renderSetCookieHeader(
            name = cookie.name,
            value = value,
            encoding = CookieEncoding.RAW,
            maxAge = maxAge,
            expires = expires,
            path = cookie.path,
            secure = cookie.secure,
            httpOnly = cookie.httpOnly,
            extensions = mapOf("SameSite" to cookie.sameSite.name),
            includeEncoding = false,
        ),
    )
}

public fun <T : Any> ApplicationCall.writeCookie(
    cookie: TypedCookie<T>,
    value: T,
) {
    sendCookie(
        cookie,
        cookie.format(value),
        cookie.maxAge
            ?.inWholeSeconds
            ?.coerceAtMost(Int.MAX_VALUE.toLong())
            ?.toInt(),
        null,
    )
}

public fun ApplicationCall.clearCookie(cookie: TypedCookie<*>) {
    sendCookie(cookie, "", 0, GMTDate.START)
}
