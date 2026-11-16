package io.github.nijasc.ktor.svelte.internal.dev

import io.github.nijasc.ktor.svelte.TypedCookie
import io.github.nijasc.ktor.svelte.clearCookie
import io.github.nijasc.ktor.svelte.readCookie
import io.ktor.http.ContentType
import io.ktor.http.CookieEncoding
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.header
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.sessions.sessions
import io.ktor.util.AttributeKey
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.serializerOrNull
import kotlin.time.Duration

internal const val DEV_COOKIES_PATH = "/_ktor-svelte/dev/cookies"
internal const val DEV_CLIENT_HEADER = "X-Ktor-Svelte-Dev"
internal val TypedCookiesKey = AttributeKey<List<TypedCookie<*>>>("KtorSvelteTypedCookies")
private const val MASK = "***"

private val sessionsAvailable: Boolean by lazy { runCatching { Class.forName("io.ktor.server.sessions.SessionDataKt") }.isSuccess }

private object SessionReader {
    fun read(
        call: ApplicationCall,
        name: String,
    ): Any? = runCatching { call.sessions.get(name) }.getOrNull()

    fun clear(
        call: ApplicationCall,
        name: String,
    ): Boolean = runCatching { call.sessions.clear(name) }.isSuccess
}

private fun sessionOf(
    call: ApplicationCall,
    name: String,
): Any? = if (sessionsAvailable) SessionReader.read(call, name) else null

internal fun maskedText(
    text: String,
    sensitive: Set<String>,
): String {
    if (sensitive.isEmpty()) return text
    val names = sensitive.joinToString("|") { Regex.escape(it) }
    return Regex("\\b($names)=([^,)]*)", RegexOption.IGNORE_CASE).replace(text) { "${it.groupValues[1]}=$MASK" }
}

private fun age(duration: Duration?): String =
    when {
        duration == null -> "until the browser closes"
        duration.inWholeDays >= 1 -> "${duration.inWholeDays} days"
        else -> duration.toString()
    }

private fun typeText(cookie: TypedCookie<*>): String {
    val spec = cookie.spec()
    return when (spec.kind) {
        "enum" -> spec.values.joinToString(" | ")
        "int" -> "whole number"
        "number" -> "number"
        "boolean" -> "true | false"
        else -> "text"
    }
}

private fun declaredJson(
    call: ApplicationCall,
    cookie: TypedCookie<*>,
    raw: String?,
): JsonObject =
    buildJsonObject {
        put("type", typeText(cookie))
        put("reads", call.readCookie(cookie)?.let { if (it is Enum<*>) it.name else it.toString() })
        put("fits", raw == null || cookie.parse(raw) != null)
        put(
            "options",
            listOfNotNull(
                "kept ${age(cookie.maxAge)}",
                "path ${cookie.path}",
                "SameSite=${cookie.sameSite.name}",
                "Secure".takeIf { cookie.secure },
                "HttpOnly".takeIf { cookie.httpOnly },
                cookie.category?.let { "needs consent to $it" },
            ).joinToString(", "),
        )
    }

private fun sessionText(
    session: Any,
    sensitive: SensitiveFields,
): String {
    runCatching { serializerOrNull(session.javaClass)?.descriptor }.getOrNull()?.let { sensitive.learnFrom(it) }
    return maskedText(session.toString(), sensitive.names)
}

internal fun cookieReport(
    call: ApplicationCall,
    sensitive: SensitiveFields,
): JsonObject {
    val declared =
        call.application.attributes
            .getOrNull(TypedCookiesKey)
            .orEmpty()
            .associateBy { it.name }
    val sent = call.request.cookies.rawCookies
    val names = (sent.keys + declared.keys).distinct().sorted()
    return buildJsonObject {
        put(
            "cookies",
            JsonArray(
                names.map { name ->
                    val raw = call.request.cookies[name, CookieEncoding.RAW]
                    buildJsonObject {
                        put("name", name)
                        put("sent", raw != null)
                        if (raw != null) put("value", raw)
                        declared[name]?.let { put("declared", declaredJson(call, it, raw)) }
                        if (raw != null) sessionOf(call, name)?.let { put("session", sessionText(it, sensitive)) }
                    }
                },
            ),
        )
    }
}

private fun clearCookies(
    call: ApplicationCall,
    only: String?,
): Int {
    val declared =
        call.application.attributes
            .getOrNull(TypedCookiesKey)
            .orEmpty()
            .associateBy { it.name }
    val targets =
        call.request.cookies.rawCookies.keys
            .filter { only == null || it == only }
    targets.forEach { name ->
        val typed = declared[name]
        when {
            sessionOf(call, name) != null && SessionReader.clear(call, name) -> Unit
            typed != null -> call.clearCookie(typed)
            else -> call.response.headers.append(HttpHeaders.SetCookie, "$name=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/")
        }
    }
    return targets.size
}

internal fun Route.devCookieRoutes(
    allowRemote: Boolean,
    sensitive: SensitiveFields,
) {
    get(DEV_COOKIES_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(cookieReport(call, sensitive).toString(), ContentType.Application.Json)
    }
    post("$DEV_COOKIES_PATH/clear") {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        when {
            !allowRemote && !isLocalCall(call) ->
                call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            call.request.header(DEV_CLIENT_HEADER) == null ->
                call.respondText("Only the ktor-svelte dev panel clears cookies.", status = HttpStatusCode.Forbidden)
            else -> {
                val cleared = clearCookies(call, call.request.queryParameters["name"])
                call.respondText("""{"cleared":$cleared}""", ContentType.Application.Json)
            }
        }
    }
}
