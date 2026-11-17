package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.KtorSveltePlugin
import io.github.nijasc.ktor.svelte.gradle.renderTemplate

internal const val FORMAT_HELPER = "$GENERATED_DIR/format.ts"
private const val FALLBACK_LOCALE = "en"

@Suppress("UNCHECKED_CAST")
private val allFormats: Map<String, Map<String, Any?>> by lazy {
    val resource =
        KtorSveltePlugin::class.java.getResource("formats/locales.json")
            ?: error("ktor-svelte is missing its format data. The plugin JAR may be damaged.")
    plain(JsonSlurper().parseText(resource.readText())) as Map<String, Map<String, Any?>>
}

private fun plain(value: Any?): Any? =
    when (value) {
        is Map<*, *> -> value.entries.associate { (key, item) -> key.toString() to plain(item) }
        is List<*> -> value.map(::plain)
        else -> value
    }

internal val knownFormatLocales: Set<String> get() = allFormats.keys

internal fun formatLocale(locale: String): String {
    val known = allFormats.keys
    val exact = known.firstOrNull { it.equals(locale, ignoreCase = true) }
    val language = locale.substringBefore('-').substringBefore('_')
    return exact ?: known.firstOrNull { it.equals(language, ignoreCase = true) } ?: FALLBACK_LOCALE
}

internal fun formatData(locale: String): Map<String, Any?> = allFormats.getValue(formatLocale(locale))

internal fun formatSource(i18n: I18nSpec): String {
    val data =
        i18n.locales.joinToString(",\n") { locale ->
            "    ${JsonOutput.toJson(locale)}: ${JsonOutput.toJson(formatData(locale))}"
        }
    return "// $GENERATED_MARKER\n" + renderTemplate("format.ts", mapOf("data" to data))
}

private fun kotlinText(value: Any?): String =
    buildString {
        append('"')
        value.toString().forEach { character ->
            when {
                character == '"' -> append("\\\"")
                character == '\\' -> append("\\\\")
                character == '$' -> append("\\$")
                character.code < 0x20 || character.code > 0x7e -> append("\\u%04x".format(character.code))
                else -> append(character)
            }
        }
        append('"')
    }

@Suppress("UNCHECKED_CAST")
private fun kotlinLocale(
    locale: String,
    data: Map<String, Any?>,
): String {
    fun texts(name: String) = (data.getValue(name) as List<String>).joinToString(", ") { kotlinText(it) }
    val currencies =
        (data.getValue("currencies") as Map<String, List<Any>>).entries.joinToString(", ") { (code, entry) ->
            "${kotlinText(code)} to (${kotlinText(entry[0])} to ${entry[1]})"
        }
    val plain =
        listOf("decimal", "group", "minus", "money", "dateShort", "dateMedium", "dateLong", "dateTimeShort", "dateTimeMedium", "time")
    return "                ${kotlinText(locale)} to\n                    LocaleFormats(\n" +
        plain.joinToString("") { "                        $it = ${kotlinText(data.getValue(it))},\n" } +
        "                        monthsShort = listOf(${texts("monthsShort")}),\n" +
        "                        monthsLong = listOf(${texts("monthsLong")}),\n" +
        "                        amPm = listOf(${texts("amPm")}),\n" +
        "                        currencies = mapOf($currencies),\n" +
        "                    )"
}

internal fun formatsClass(
    generatedPackage: String,
    i18n: I18nSpec,
): String =
    "// $GENERATED_MARKER\npackage $generatedPackage\n\n" +
        renderTemplate(
            "Formats.kt.template",
            mapOf(
                "defaultLocale" to kotlinText(i18n.defaultLocale),
                "tables" to i18n.locales.joinToString(",\n") { kotlinLocale(it, formatData(it)) },
            ),
        )
