package io.github.nijasc.ktor.svelte.gradle.libraries

private val NAME = Regex("[A-Za-z_][A-Za-z0-9_]*")
private val PLURAL_HEAD = Regex("^([A-Za-z_][A-Za-z0-9_]*)\\s*,\\s*plural\\s*,(.*)$", RegexOption.DOT_MATCHES_ALL)
private val EXACT = Regex("=\\d+")
private val CATEGORIES = listOf("zero", "one", "two", "few", "many", "other")

internal class MessageShape(
    val names: List<String>,
    val counts: Set<String>,
    val problems: List<String>,
)

internal class PluralFamily(
    val languages: List<String>,
    val forms: List<Pair<String, String>>,
)

private const val LAST_OF_FEW = "m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)"

internal val PLURAL_FAMILIES: List<PluralFamily> =
    listOf(
        PluralFamily(listOf("ja", "zh", "ko", "vi", "th", "id", "ms"), emptyList()),
        PluralFamily(listOf("fr", "pt", "hy"), listOf("one" to "n == 0 || n == 1")),
        PluralFamily(
            listOf("ru", "uk", "be"),
            listOf("one" to "m10 == 1 && m100 != 11", "few" to LAST_OF_FEW, "many" to "true"),
        ),
        PluralFamily(listOf("pl"), listOf("one" to "n == 1", "few" to LAST_OF_FEW, "many" to "true")),
        PluralFamily(listOf("cs", "sk"), listOf("one" to "n == 1", "few" to "n >= 2 && n <= 4")),
        PluralFamily(listOf("hr", "sr", "bs"), listOf("one" to "m10 == 1 && m100 != 11", "few" to LAST_OF_FEW)),
        PluralFamily(listOf("ro"), listOf("one" to "n == 1", "few" to "n == 0 || (m100 >= 1 && m100 <= 19)")),
        PluralFamily(
            listOf("lt"),
            listOf("one" to "m10 == 1 && (m100 < 11 || m100 > 19)", "few" to "m10 >= 2 && m10 <= 9 && (m100 < 11 || m100 > 19)"),
        ),
        PluralFamily(listOf("lv"), listOf("zero" to "m10 == 0 || (m100 >= 11 && m100 <= 19)", "one" to "m10 == 1 && m100 != 11")),
        PluralFamily(listOf("sl"), listOf("one" to "m100 == 1", "two" to "m100 == 2", "few" to "m100 == 3 || m100 == 4")),
        PluralFamily(listOf("he"), listOf("one" to "n == 1", "two" to "n == 2")),
        PluralFamily(
            listOf("ar"),
            listOf(
                "zero" to "n == 0",
                "one" to "n == 1",
                "two" to "n == 2",
                "few" to "m100 >= 3 && m100 <= 10",
                "many" to "m100 >= 11 && m100 <= 99",
            ),
        ),
    )

internal val ONE_OTHER = PluralFamily(emptyList(), listOf("one" to "n == 1"))

internal fun pluralFamily(locale: String): PluralFamily {
    val tag = locale.lowercase()
    if (tag == "pt-pt") return ONE_OTHER
    val language = tag.substringBefore('-').substringBefore('_')
    return PLURAL_FAMILIES.firstOrNull { language in it.languages } ?: ONE_OTHER
}

private fun closing(
    text: String,
    open: Int,
): Int {
    var depth = 0
    for (at in open until text.length) {
        if (text[at] == '{') {
            depth++
        } else if (text[at] == '}' && --depth == 0) {
            return at
        }
    }
    return -1
}

private fun pluralForms(body: String): Map<String, String>? {
    val forms = linkedMapOf<String, String>()
    var at = 0
    while (at < body.length) {
        val open = body.indexOf('{', at)
        if (open < 0) return forms.takeIf { body.substring(at).isBlank() }
        val close = closing(body, open)
        if (close < 0) return null
        forms[body.substring(at, open).trim()] = body.substring(open + 1, close)
        at = close + 1
    }
    return forms
}

internal fun messageShape(text: String): MessageShape {
    val names = linkedSetOf<String>()
    val counts = linkedSetOf<String>()
    val problems = mutableListOf<String>()

    fun walk(part: String) {
        var at = 0
        while (at < part.length) {
            val open = part.indexOf('{', at)
            if (open < 0) return
            val close = closing(part, open)
            if (close < 0) {
                problems += "has a { that is never closed"
                return
            }
            val inner = part.substring(open + 1, close)
            val plural = PLURAL_HEAD.find(inner)
            if (plural != null) {
                val name = plural.groupValues[1]
                names += name
                counts += name
                val forms = pluralForms(plural.groupValues[2])
                if (forms == null) {
                    problems += "has a plural for '$name' that cannot be read. Write it as {$name, plural, one {...} other {...}}"
                } else {
                    val unknown = forms.keys.filterNot { it in CATEGORIES || EXACT.matches(it) }
                    if (unknown.isNotEmpty()) {
                        problems +=
                            "has the plural form${if (unknown.size == 1) "" else "s"} ${unknown.joinToString { "'$it'" }} for '$name'. " +
                            "The forms are ${CATEGORIES.joinToString()}, and exact numbers such as =0"
                    }
                    if ("other" !in forms) problems += "has a plural for '$name' without the form 'other', which every language needs"
                    forms.values.forEach(::walk)
                }
            } else if (NAME.matches(inner)) {
                names += inner
            }
            at = close + 1
        }
    }
    walk(text)
    return MessageShape(names.toList(), counts, problems)
}

internal fun unusedPluralForms(
    text: String,
    locale: String,
): List<String> {
    val needed = pluralFamily(locale).forms.map { it.first }.toSet() + "other"
    val found = mutableListOf<String>()

    fun walk(part: String) {
        var at = 0
        while (at < part.length) {
            val open = part.indexOf('{', at)
            val close = if (open < 0) -1 else closing(part, open)
            if (close < 0) return
            val forms = PLURAL_HEAD.find(part.substring(open + 1, close))?.let { pluralForms(it.groupValues[2]) }
            forms?.forEach { (selector, body) ->
                if (selector in CATEGORIES && selector !in needed) found += selector
                walk(body)
            }
            at = close + 1
        }
    }
    walk(text)
    return found.distinct()
}

private fun pluralBranch(
    tags: List<String>,
    family: PluralFamily,
): String {
    val label = "            ${tags.joinToString { "\"$it\"" }} ->"
    if (family.forms.isEmpty()) return "$label \"other\"\n"
    val conditions =
        family.forms.joinToString("") { (category, condition) ->
            "                    ${if (condition == "true") "else" else condition} -> \"$category\"\n"
        }
    val fallback = if (family.forms.last().second == "true") "" else "                    else -> \"other\"\n"
    return "$label\n                when {\n$conditions$fallback                }\n"
}

internal fun kotlinPluralSupport(locales: List<String>): String {
    val branches =
        locales
            .groupBy { pluralFamily(it) }
            .filterKeys { it !== ONE_OTHER }
            .entries
            .joinToString("") { (family, tags) -> pluralBranch(tags, family) }
    return """
        |
        |private val PLURAL_HEAD = Regex("^(\\w+)\\s*,\\s*plural\\s*,(.*)${'$'}", RegexOption.DOT_MATCHES_ALL)
        |private val PLAIN_NAME = Regex("\\w+")
        |
        |@Suppress("UNUSED_VARIABLE", "KotlinConstantConditions")
        |private fun pluralCategory(
        |    locale: String,
        |    count: Int,
        |): String {
        |    val n = if (count < 0) -count else count
        |    val m10 = n % 10
        |    val m100 = n % 100
        |    return when (locale) {
        |${branches.trimEnd('\n').lines().joinToString("\n") { it.removePrefix("    ") }}
        |        else -> if (n == 1) "one" else "other"
        |    }
        |}
        |
        |private fun closingBrace(
        |    text: String,
        |    open: Int,
        |): Int {
        |    var depth = 0
        |    for (at in open until text.length) {
        |        if (text[at] == '{') {
        |            depth++
        |        } else if (text[at] == '}' && --depth == 0) {
        |            return at
        |        }
        |    }
        |    return -1
        |}
        |
        |private fun pluralForm(
        |    forms: String,
        |    count: Int,
        |    locale: String,
        |): String? {
        |    val found = mutableMapOf<String, String>()
        |    var at = 0
        |    while (at < forms.length) {
        |        val open = forms.indexOf('{', at)
        |        val close = if (open < 0) -1 else closingBrace(forms, open)
        |        if (close < 0) break
        |        found[forms.substring(at, open).trim()] = forms.substring(open + 1, close)
        |        at = close + 1
        |    }
        |    return found["=${'$'}count"] ?: found[pluralCategory(locale, count)] ?: found["other"]
        |}
        |
        |private fun formatMessage(
        |    text: String,
        |    values: Map<String, Any>,
        |    locale: String,
        |): String {
        |    val result = StringBuilder()
        |    var at = 0
        |    while (at < text.length) {
        |        val open = text.indexOf('{', at)
        |        val close = if (open < 0) -1 else closingBrace(text, open)
        |        if (close < 0) return result.append(text, at, text.length).toString()
        |        result.append(text, at, open)
        |        val inner = text.substring(open + 1, close)
        |        val plural = PLURAL_HEAD.find(inner)
        |        val value = values[inner]
        |        if (plural != null) {
        |            val count = (values[plural.groupValues[1]] as? Number)?.toInt() ?: 0
        |            val form = pluralForm(plural.groupValues[2], count, locale)
        |            if (form != null) result.append(formatMessage(form.replace("#", count.toString()), values, locale))
        |        } else if (PLAIN_NAME.matches(inner) && value != null) {
        |            result.append(value)
        |        } else {
        |            result.append(text, open, close + 1)
        |        }
        |        at = close + 1
        |    }
        |    return result.toString()
        |}
        |
        """.trimMargin()
}
