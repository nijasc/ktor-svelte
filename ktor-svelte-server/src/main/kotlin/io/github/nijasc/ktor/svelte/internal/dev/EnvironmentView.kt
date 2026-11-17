package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.config.ApplicationConfig
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray

internal const val DEV_ENVIRONMENT_PATH = "/_ktor-svelte/dev/environment"
private const val HIDDEN = "***"

private val SECRET_WORDS =
    setOf(
        "secret",
        "password",
        "passwd",
        "pass",
        "passphrase",
        "token",
        "key",
        "apikey",
        "credential",
        "credentials",
        "auth",
        "private",
        "signature",
        "salt",
        "pepper",
        "cookie",
        "session",
        "dsn",
        "cert",
        "certificate",
        "jwt",
        "otp",
    )
private val SECRET_ENDINGS = listOf("secret", "password", "passwd", "token", "apikey", "privatekey")
private val CAMEL_HUMP = Regex("(?<=[a-z0-9])(?=[A-Z])")
private val NOT_A_LETTER = Regex("[^A-Za-z0-9]+")
private val CREDENTIALS_IN_URL = Regex("(://[^/:@\\s]+:)[^@/\\s]+@")
private val SECRET_PARAMETER = Regex("((?:password|pwd|secret|token|key)=)[^&;\\s]+", RegexOption.IGNORE_CASE)
private val JVM_OWN_PROPERTIES =
    listOf(
        "java.",
        "javax.",
        "jdk.",
        "sun.",
        "com.sun.",
        "os.",
        "user.",
        "file.",
        "line.",
        "path.",
        "native.",
        "stdout.",
        "stderr.",
        "awt.",
        "apple.",
        "idea.",
        "intellij.",
        "jna.",
        "kotlin.",
        "org.gradle.",
        "io.netty.",
        "http.nonProxyHosts",
        "ftp.nonProxyHosts",
        "socksNonProxyHosts",
        "gopherProxySet",
    )

internal data class EnvironmentRow(
    val name: String,
    val value: String,
    val hidden: Boolean,
)

internal fun isSecretName(
    name: String,
    sensitive: Set<String> = emptySet(),
): Boolean {
    val words =
        name
            .split(CAMEL_HUMP)
            .joinToString(" ")
            .split(NOT_A_LETTER)
            .filter { it.isNotEmpty() }
            .map { it.lowercase() }
    val marked = sensitive.map { it.lowercase() }.toSet()
    return words.joinToString("") in marked ||
        words.any { word -> word in SECRET_WORDS || word in marked || SECRET_ENDINGS.any(word::endsWith) }
}

internal fun maskedSetting(
    name: String,
    value: String,
    sensitive: Set<String> = emptySet(),
): EnvironmentRow {
    if (isSecretName(name, sensitive) && value.isNotEmpty()) return EnvironmentRow(name, HIDDEN, true)
    val shown = value.replace(CREDENTIALS_IN_URL, "$1$HIDDEN@").replace(SECRET_PARAMETER, "$1$HIDDEN")
    return EnvironmentRow(name, shown, shown != value)
}

private fun flatten(
    prefix: String,
    value: Any?,
    into: MutableMap<String, String>,
) {
    when (value) {
        is Map<*, *> -> value.forEach { (name, inner) -> flatten(if (prefix.isEmpty()) "$name" else "$prefix.$name", inner, into) }
        is List<*> -> value.forEachIndexed { index, inner -> flatten("$prefix[$index]", inner, into) }
        else -> into[prefix] = value?.toString().orEmpty()
    }
}

internal fun configSettings(config: ApplicationConfig): Map<String, String> =
    buildMap {
        runCatching { config.toMap() }.getOrNull()?.let { flatten("", it, this) }
    }

internal fun appProperties(properties: Map<String, String>): Map<String, String> =
    properties.filterKeys { name -> JVM_OWN_PROPERTIES.none(name::startsWith) }

internal fun environmentJson(
    config: Map<String, String>,
    variables: Map<String, String>,
    properties: Map<String, String>,
    sensitive: Set<String>,
): JsonObject =
    buildJsonObject {
        putJsonArray("groups") {
            listOf("Config" to config, "Environment variables" to variables, "System properties" to properties).forEach { (title, values) ->
                addJsonObject {
                    put("name", title)
                    putJsonArray("rows") {
                        values.toSortedMap(String.CASE_INSENSITIVE_ORDER).forEach { (name, value) ->
                            val row = maskedSetting(name, value, sensitive)
                            addJsonObject {
                                put("name", row.name)
                                put("value", row.value)
                                if (row.hidden) put("hidden", true)
                            }
                        }
                    }
                }
            }
        }
    }

internal fun Route.devEnvironmentRoute(
    allowRemote: Boolean,
    sensitive: SensitiveFields,
    config: () -> ApplicationConfig,
) {
    get(DEV_ENVIRONMENT_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        val properties = System.getProperties().stringPropertyNames().associateWith { System.getProperty(it).orEmpty() }
        val json = environmentJson(configSettings(config()), System.getenv(), appProperties(properties), sensitive.names)
        call.respondText(json.toString(), ContentType.Application.Json)
    }
}
