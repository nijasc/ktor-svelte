package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import org.gradle.api.GradleException
import java.io.File

private val PLACEHOLDER = Regex("\\{([A-Za-z_][A-Za-z0-9_]*)}")
private val MESSAGE_KEY = Regex("[A-Za-z][A-Za-z0-9_-]*")

public data class MessageCatalog(
    val locales: Map<String, Map<String, String>>,
) {
    val keys: List<String> get() =
        locales.values
            .first()
            .keys
            .sorted()

    public fun placeholders(key: String): List<String> =
        PLACEHOLDER
            .findAll(locales.values.first().getValue(key))
            .map { it.groupValues[1] }
            .distinct()
            .toList()
}

public fun propertyName(key: String): String {
    val parts = key.split('-', '_').filter { it.isNotEmpty() }
    return parts
        .mapIndexed { index, part ->
            if (index ==
                0
            ) {
                part.replaceFirstChar { it.lowercase() }
            } else {
                part.replaceFirstChar { it.uppercase() }
            }
        }.joinToString("")
}

public fun readMessages(
    directory: File,
    locales: List<String>,
): MessageCatalog {
    val catalogs =
        locales.associateWith { locale ->
            val file = directory.resolve("$locale.json")
            if (!file.isFile) throw GradleException("i18n is missing $file. Create it with one key per message.")
            val parsed = JsonSlurper().parse(file) as? Map<*, *> ?: throw GradleException("$file must hold one JSON object.")
            parsed.entries.associate { (key, value) ->
                if (key !is String || !MESSAGE_KEY.matches(key)) throw GradleException("$file has an invalid key: $key")
                if (value !is String) throw GradleException("$file key '$key' must be a string. Nested messages are not supported.")
                key to value
            }
        }
    return MessageCatalog(catalogs).also(::validateCatalog)
}

private fun validateCatalog(catalog: MessageCatalog) {
    val first = catalog.locales.entries.first()
    val problems = mutableListOf<String>()
    val names =
        first.value.keys
            .groupBy(::propertyName)
            .filterValues { it.size > 1 }
    names.values.forEach { problems += "Keys $it would generate the same name." }
    catalog.locales.forEach { (locale, messages) ->
        (first.value.keys - messages.keys).forEach { problems += "$locale is missing '$it'." }
        (messages.keys - first.value.keys).forEach { problems += "$locale has '$it', which ${first.key} does not." }
        (first.value.keys intersect messages.keys).forEach { key ->
            val expected = PLACEHOLDER.findAll(first.value.getValue(key)).map { it.value }.toSet()
            val actual = PLACEHOLDER.findAll(messages.getValue(key)).map { it.value }.toSet()
            if (expected != actual) problems += "$locale '$key' uses $actual, but ${first.key} uses $expected."
        }
    }
    if (problems.isNotEmpty()) throw GradleException("i18n messages do not match:\n  " + problems.joinToString("\n  "))
}
