package io.github.nijasc.ktor.svelte.gradle.libraries

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

public fun kotlinFiles(
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

public fun runtimeProperties(spec: LibrarySpec): String =
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
        "public enum class AppTheme(\n    public val cssName: String,\n) {\n" +
        daisy.allThemes.joinToString(",\n", postfix = ",\n") { "    ${themeConstant(it)}(${kotlinString(it)})" } +
        "    ;\n\n    public companion object {\n" +
        "        public val default: AppTheme = ${themeConstant(daisy.defaultTheme)}\n\n" +
        "        public fun fromCssName(name: String): AppTheme? = entries.firstOrNull { it.cssName == name }\n" +
        "    }\n}\n"

private fun messagesClass(
    spec: LibrarySpec,
    catalog: MessageCatalog,
): String {
    val functions =
        catalog.keys.joinToString("\n\n") { key ->
            val placeholders = catalog.placeholders(key)
            val parameters = placeholders.joinToString(", ") { "$it: String" }
            val replacements = placeholders.joinToString("") { ".replace(${kotlinString("{$it}")}, $it)" }
            "    public fun ${propertyName(key)}($parameters): String = table.getValue(${kotlinString(key)})$replacements"
        }
    val tables =
        catalog.locales.entries.joinToString(",\n") { (locale, messages) ->
            val entries =
                messages.toSortedMap().entries.joinToString(
                    ",\n",
                ) { (key, text) -> "                ${kotlinString(key)} to ${kotlinString(text)}" }
            "            ${kotlinString(locale)} to\n                mapOf(\n$entries,\n                )"
        }
    val i18n = spec.i18n!!
    return fileHeader(spec.generatedPackage) +
        "public class Messages private constructor(\n    public val locale: String,\n    private val table: Map<String, String>,\n) {\n" +
        functions +
        "\n\n    public companion object {\n" +
        "        public val locales: List<String> = listOf(${i18n.locales.joinToString(", ") { kotlinString(it) }})\n" +
        "        public val defaultLocale: String = ${kotlinString(i18n.defaultLocale)}\n\n" +
        "        private val tables: Map<String, Map<String, String>> by lazy {\n" +
        "            mapOf(\n$tables,\n            )\n        }\n\n" +
        "        public fun forLocale(locale: String): Messages {\n" +
        "            val resolved = if (locale in tables) locale else defaultLocale\n" +
        "            return Messages(resolved, tables.getValue(resolved))\n        }\n    }\n}\n"
}

private fun callExtensions(spec: LibrarySpec): String =
    buildString {
        append(fileHeader(spec.generatedPackage))
        if (spec.daisy != null) append("import io.github.nijasc.ktor.svelte.svelteTheme\n")
        if (spec.i18n != null) append("import io.github.nijasc.ktor.svelte.svelteLocale\n")
        append("import io.ktor.server.application.ApplicationCall\n\n")
        if (spec.i18n != null) append("public val ApplicationCall.messages: Messages get() = Messages.forLocale(svelteLocale)\n")
        if (spec.daisy != null) {
            append("public val ApplicationCall.theme: AppTheme get() = AppTheme.fromCssName(svelteTheme) ?: AppTheme.default\n")
        }
    }
