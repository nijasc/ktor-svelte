package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.renderTemplate

private const val MAX_GENERATED_LINE_LENGTH = 140

private fun kotlinString(value: String): String =
    buildString {
        append('"')
        value.forEach { character ->
            when (character) {
                '"' -> append("\\\"")
                '\\' -> append("\\\\")
                '$' -> append("\\$")
                '\n' -> append("\\n")
                '\r' -> append("\\r")
                '\t' -> append("\\t")
                else -> append(character)
            }
        }
        append('"')
    }

private fun fileHeader(generatedPackage: String): String = "// $GENERATED_MARKER\npackage $generatedPackage\n\n"

internal fun kotlinFiles(
    spec: LibrarySpec,
    iconConstants: List<String>,
    messages: MessageCatalog?,
    hasRuntimeDependency: Boolean,
): Map<String, String> =
    buildMap {
        if (spec.lucide) put("LucideIcon.kt", lucideEnum(spec.generatedPackage, iconConstants))
        if (spec.daisy != null) put("AppTheme.kt", themeEnum(spec.generatedPackage, spec.daisy))
        if (spec.i18n != null && messages != null) put("Messages.kt", messagesClass(spec, messages))
        if (hasRuntimeDependency && (spec.daisy != null || spec.i18n != null)) {
            put("CallExtensions.kt", callExtensions(spec))
        }
    }

internal fun runtimeProperties(spec: LibrarySpec): String =
    buildString {
        spec.i18n?.let { i18n ->
            append("i18n.locales=${i18n.locales.joinToString(",")}\n")
            append("i18n.default=${i18n.defaultLocale}\n")
            append("i18n.strategy=${i18n.strategy.name}\n")
        }
        spec.daisy?.let { daisy ->
            append("theme.names=${daisy.allThemes.joinToString(",")}\n")
            append("theme.default=${daisy.defaultTheme}\n")
        }
    }

private fun lucideEnum(
    generatedPackage: String,
    constants: List<String>,
): String =
    fileHeader(generatedPackage) +
        "public enum class LucideIcon {\n" +
        constants.joinToString(",\n", postfix = ",\n") { "    $it" } +
        "}\n"

private fun themeConstant(name: String): String = name.split('-').joinToString("") { part -> part.replaceFirstChar { it.uppercase() } }

private fun themeEnum(
    generatedPackage: String,
    daisy: DaisySpec,
): String =
    fileHeader(generatedPackage) +
        renderTemplate(
            "AppTheme.kt.template",
            mapOf(
                "entries" to daisy.allThemes.joinToString(",\n", postfix = ",") { "    ${themeConstant(it)}(${kotlinString(it)})" },
                "defaultTheme" to themeConstant(daisy.defaultTheme),
            ),
        )

private fun messagesClass(
    spec: LibrarySpec,
    catalog: MessageCatalog,
): String {
    val functions =
        catalog.keys.joinToString("\n\n") { key ->
            messageFunction(key, catalog.placeholders(key))
        }
    val tables =
        catalog.locales.entries.joinToString(",\n") { (locale, messages) ->
            val entries =
                messages.toSortedMap().entries.joinToString(",\n") { (key, text) ->
                    messageEntry(key, text)
                }
            "                ${kotlinString(locale)} to\n                    mapOf(\n$entries,\n                    )"
        }
    val i18n = spec.i18n!!
    return fileHeader(spec.generatedPackage) +
        renderTemplate(
            "Messages.kt.template",
            mapOf(
                "functions" to functions,
                "locales" to i18n.locales.joinToString(", ") { kotlinString(it) },
                "defaultLocale" to kotlinString(i18n.defaultLocale),
                "tables" to tables,
            ),
        )
}

private fun messageFunction(
    key: String,
    placeholders: List<String>,
): String {
    val name = propertyName(key)
    val lookup = "getValue(${kotlinString(key)})"
    val replacements = placeholders.map { ".replace(${kotlinString("{$it}")}, $it)" }
    if (placeholders.size < 2) {
        val parameters = placeholders.joinToString { "$it: String" }
        return "    public fun $name($parameters): String = table.$lookup${replacements.joinToString("")}"
    }
    val parameters = placeholders.joinToString("") { "        $it: String,\n" }
    val chain = replacements.joinToString("") { "\n            $it" }
    return "    public fun $name(\n$parameters    ): String =\n        table\n            .$lookup$chain"
}

private fun messageEntry(
    key: String,
    text: String,
): String {
    val indent = "                        "
    val line = "$indent${kotlinString(key)} to ${kotlinString(text)},"
    return if (line.length <= MAX_GENERATED_LINE_LENGTH) {
        line.removeSuffix(",")
    } else {
        "$indent${kotlinString(key)} to\n$indent    ${kotlinString(text)}"
    }
}

private fun callExtensions(spec: LibrarySpec): String =
    buildString {
        append(fileHeader(spec.generatedPackage))
        if (spec.i18n != null) append("import io.github.nijasc.ktor.svelte.svelteLocale\n")
        if (spec.daisy != null) append("import io.github.nijasc.ktor.svelte.svelteTheme\n")
        append("import io.ktor.server.application.ApplicationCall\n\n")
        if (spec.i18n != null) append("public val ApplicationCall.messages: Messages get() = Messages.forLocale(svelteLocale)\n")
        if (spec.daisy != null) {
            append("public val ApplicationCall.theme: AppTheme get() = AppTheme.fromCssName(svelteTheme) ?: AppTheme.default\n")
        }
    }
