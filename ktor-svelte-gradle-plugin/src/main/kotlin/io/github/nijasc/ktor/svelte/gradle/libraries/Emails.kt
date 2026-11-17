package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.gradle.api.GradleException

internal const val EMAILS_DIR = "src/emails"
internal const val EMAIL_RESOURCES = "ktor-svelte/emails"
internal const val DEFAULT_EMAIL_LOCALE = "default"
internal const val PROP_START = ''
internal const val PROP_END = ''

private val TEMPLATE_NAME = Regex("[A-Z][A-Za-z0-9]*")
private val PROP_NAME = Regex("[A-Za-z_][A-Za-z0-9_]*")
private val HTML_COMMENT = Regex("<!--.*?-->", RegexOption.DOT_MATCHES_ALL)
private val TITLE = Regex("<title[^>]*>(.*?)</title>", setOf(RegexOption.DOT_MATCHES_ALL, RegexOption.IGNORE_CASE))
private val STYLE = Regex("<style[^>]*>(.*?)</style>", setOf(RegexOption.DOT_MATCHES_ALL, RegexOption.IGNORE_CASE))
private val CSS_COMMENT = Regex("/\\*.*?\\*/", RegexOption.DOT_MATCHES_ALL)
private val SIMPLE_SELECTOR = Regex("([a-zA-Z][a-zA-Z0-9-]*|\\*)?((?:[.#][A-Za-z_-][A-Za-z0-9_-]*)*)")
private val SELECTOR_PART = Regex("([.#])([A-Za-z_-][A-Za-z0-9_-]*)")
private val START_TAG =
    Regex("""<([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[^\s"'>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*(/?)>""")
private val ATTRIBUTE = Regex("""([^\s"'>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?""")
private val SCOPE_CLASS = Regex("svelte-[a-z0-9]+")
private val WHITESPACE = Regex("\\s+")
private val ENTITY = Regex("&(#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);")
private val NAMED_ENTITIES = mapOf("amp" to "&", "lt" to "<", "gt" to ">", "quot" to "\"", "apos" to "'", "nbsp" to " ")

internal class RenderedComponent(
    val name: String,
    val locale: String,
    val props: List<String>,
    val head: String,
    val body: String,
)

internal class EmailTemplate(
    val name: String,
    val locale: String,
    val props: List<String>,
    val subject: String,
    val html: String,
    val text: String,
)

internal fun marker(prop: String): String = "$PROP_START$prop$PROP_END"

private fun emailFailure(
    name: String,
    message: String,
): GradleException = GradleException("ktor-svelte: $EMAILS_DIR/$name.svelte $message" + DocLink.EMAILS.see())

internal fun emailTemplates(rendered: List<RenderedComponent>): List<EmailTemplate> {
    val templates = rendered.map(::emailTemplate)
    templates.groupBy { it.name }.forEach { (name, locales) ->
        val props = locales.flatMap { it.props }.distinct()
        val unused = props.filter { prop -> locales.none { marker(prop) in it.subject + it.html + it.text } }
        if (unused.isNotEmpty()) {
            throw emailFailure(
                name,
                "reads the prop${if (unused.size == 1) "" else "s"} ${unused.joinToString()} but never shows it as it is. " +
                    "The server fills props in as text, so show each prop unchanged, and decide on conditions and formatting in Kotlin.",
            )
        }
    }
    return templates
}

internal fun emailTemplate(component: RenderedComponent): EmailTemplate {
    val name = component.name
    if (!TEMPLATE_NAME.matches(name)) {
        throw emailFailure(name, "needs a name that starts with an upper case letter and has only letters and digits, like Welcome.")
    }
    component.props.firstOrNull { !PROP_NAME.matches(it) }?.let { prop ->
        throw emailFailure(name, "has the prop '$prop'. Email props need names of letters, digits and underscores.")
    }
    val head = component.head.replace(HTML_COMMENT, "")
    val subject =
        TITLE
            .find(head)
            ?.groupValues
            ?.get(1)
            ?.let { decodeEntities(stripTags(it)).replace(WHITESPACE, " ").trim() }
            .orEmpty()
    if (subject.isEmpty()) throw emailFailure(name, "has no subject. Add <svelte:head><title>The subject</title></svelte:head>.")
    val css = STYLE.findAll(head).joinToString("\n") { it.groupValues[1] }
    val body = component.body.replace(HTML_COMMENT, "")
    val inlined = inlineCss(body, css)
    val html =
        buildString {
            append("<!DOCTYPE html>\n")
            append(if (component.locale == DEFAULT_EMAIL_LOCALE) "<html>\n" else "<html lang=\"${component.locale}\">\n")
            append("<head>\n<meta charset=\"utf-8\">\n")
            append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n")
            append("<title>${escapeText(subject)}</title>\n")
            if (inlined.leftover.isNotEmpty()) append("<style>\n${inlined.leftover}\n</style>\n")
            append("</head>\n<body>\n${inlined.html.trim()}\n</body>\n</html>\n")
        }
    return EmailTemplate(name, component.locale, component.props, subject, html, htmlToText(body))
}

private fun escapeText(text: String): String = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

private fun stripTags(html: String): String = html.replace(Regex("<[^>]*>"), "")

internal fun decodeEntities(text: String): String =
    ENTITY.replace(text) { match ->
        val entity = match.groupValues[1]
        when {
            entity.startsWith("#x") || entity.startsWith("#X") -> codePoint(entity.substring(2).toIntOrNull(16), match.value)
            entity.startsWith("#") -> codePoint(entity.substring(1).toIntOrNull(), match.value)
            else -> NAMED_ENTITIES[entity] ?: match.value
        }
    }

private fun codePoint(
    value: Int?,
    original: String,
): String = if (value == null || !Character.isValidCodePoint(value)) original else String(Character.toChars(value))

internal class InlinedHtml(
    val html: String,
    val leftover: String,
)

private class SimpleSelector(
    val tag: String?,
    val classes: Set<String>,
    val ids: Set<String>,
) {
    val specificity: Int = ids.size * 10_000 + classes.size * 100 + if (tag == null) 0 else 1

    fun matches(
        element: String,
        elementClasses: Set<String>,
        elementId: String?,
    ): Boolean =
        (tag == null || tag.equals(element, ignoreCase = true)) &&
            elementClasses.containsAll(classes) &&
            ids.all { it == elementId }
}

private class InlineRule(
    val selector: SimpleSelector,
    val declarations: String,
    val order: Int,
)

private fun simpleSelector(text: String): SimpleSelector? {
    val match = SIMPLE_SELECTOR.matchEntire(text.trim()) ?: return null
    if (match.value.isEmpty()) return null
    val parts = SELECTOR_PART.findAll(match.groupValues[2]).toList()
    return SimpleSelector(
        tag = match.groupValues[1].takeUnless { it.isEmpty() || it == "*" },
        classes = parts.filter { it.groupValues[1] == "." }.map { it.groupValues[2] }.toSet(),
        ids = parts.filter { it.groupValues[1] == "#" }.map { it.groupValues[2] }.toSet(),
    )
}

private fun splitSelectors(selector: String): List<String> {
    val parts = mutableListOf<String>()
    var depth = 0
    var start = 0
    selector.forEachIndexed { index, character ->
        when (character) {
            '(', '[' -> depth++
            ')', ']' -> depth--
            ',' ->
                if (depth == 0) {
                    parts += selector.substring(start, index)
                    start = index + 1
                }
        }
    }
    parts += selector.substring(start)
    return parts.map { it.trim() }.filter { it.isNotEmpty() }
}

private fun closingBrace(
    css: String,
    open: Int,
): Int {
    var depth = 0
    for (index in open until css.length) {
        when (css[index]) {
            '{' -> depth++
            '}' -> if (--depth == 0) return index
        }
    }
    return css.length - 1
}

internal fun inlineCss(
    body: String,
    css: String,
): InlinedHtml {
    val rules = mutableListOf<InlineRule>()
    val leftover = mutableListOf<String>()
    val source = css.replace(CSS_COMMENT, "")
    var at = 0
    while (at < source.length) {
        val open = source.indexOf('{', at)
        if (open < 0) break
        val prelude = source.substring(at, open).trim()
        if (prelude.startsWith("@")) {
            val close = closingBrace(source, open)
            leftover += source.substring(at, close + 1).trim()
            at = close + 1
            continue
        }
        val close = source.indexOf('}', open).takeIf { it >= 0 } ?: source.length
        val declarations =
            source
                .substring(open + 1, close)
                .replace(WHITESPACE, " ")
                .trim()
                .trimEnd(';')
                .trim()
        at = close + 1
        if (declarations.isEmpty()) continue
        val (simple, complex) = splitSelectors(prelude).partition { simpleSelector(it) != null }
        simple.forEach { rules += InlineRule(simpleSelector(it)!!, declarations, rules.size) }
        if (complex.isNotEmpty()) leftover += "${complex.joinToString(", ")} { $declarations; }"
    }
    val keptCss = leftover.joinToString("\n")
    val html =
        START_TAG.replace(body) { tag ->
            val element = tag.groupValues[1]
            val attributes =
                ATTRIBUTE
                    .findAll(tag.groupValues[2])
                    .map { attribute ->
                        val values = attribute.groupValues
                        val value = values[2].ifEmpty { values[3].ifEmpty { values[4] } }
                        values[1] to value.takeIf { attribute.value.contains('=') }
                    }.toMutableList()
            val classes =
                attributes
                    .firstOrNull { it.first == "class" }
                    ?.second
                    .orEmpty()
                    .split(WHITESPACE)
                    .filter { it.isNotEmpty() }
            val id = attributes.firstOrNull { it.first == "id" }?.second
            val styles =
                rules
                    .filter { it.selector.matches(element, classes.toSet(), id) }
                    .sortedWith(compareBy({ it.selector.specificity }, { it.order }))
                    .map { it.declarations } +
                    listOfNotNull(
                        attributes
                            .firstOrNull { it.first == "style" }
                            ?.second
                            ?.trim()
                            ?.trimEnd(';')
                            ?.takeIf { it.isNotEmpty() },
                    )
            val keptClasses = classes.filter { !SCOPE_CLASS.matches(it) || it in keptCss }
            attributes.removeAll { it.first == "class" || it.first == "style" }
            if (keptClasses.isNotEmpty()) attributes.add(0, "class" to keptClasses.joinToString(" "))
            if (styles.isNotEmpty()) attributes += "style" to styles.joinToString("; ").replace("\"", "&quot;")
            buildString {
                append('<').append(element)
                attributes.forEach { (name, value) ->
                    append(' ').append(name)
                    if (value != null) append("=\"").append(value.replace("\"", "&quot;")).append('"')
                }
                if (tag.groupValues[3].isNotEmpty()) append(" /")
                append('>')
            }
        }
    return InlinedHtml(html, keptCss)
}

private val LINK = Regex("<a\\b[^>]*?\\bhref=\"([^\"]*)\"[^>]*>(.*?)</a>", setOf(RegexOption.IGNORE_CASE, RegexOption.DOT_MATCHES_ALL))
private val IMAGE_ALT = Regex("<img\\b[^>]*?\\balt=\"([^\"]*)\"[^>]*>", RegexOption.IGNORE_CASE)
private val HIDDEN = Regex("<(style|script|head|title)\\b[^>]*>.*?</\\1>", setOf(RegexOption.IGNORE_CASE, RegexOption.DOT_MATCHES_ALL))
private val PARAGRAPH = Regex("</?(p|h[1-6]|table|ul|ol|blockquote|pre)\\b[^>]*>", RegexOption.IGNORE_CASE)
private val LINE = Regex("<br\\b[^>]*>|<hr\\b[^>]*>|</(div|tr|section|header|footer|article)>", RegexOption.IGNORE_CASE)
private val LIST_ITEM = Regex("<li\\b[^>]*>", RegexOption.IGNORE_CASE)
private val CELL = Regex("</t[dh]>", RegexOption.IGNORE_CASE)
private val ANY_TAG = Regex("<[^>]*>")

internal fun htmlToText(html: String): String {
    val linked =
        html
            .replace(HTML_COMMENT, "")
            .replace(HIDDEN, "")
            .replace(WHITESPACE, " ")
            .replace(LINK) { match ->
                val href = match.groupValues[1]
                val label = match.groupValues[2]
                val labelText = decodeEntities(stripTags(label)).trim()
                if (href.isBlank() || href.startsWith("#") || decodeEntities(href) == labelText) label else "$label ($href)"
            }.replace(IMAGE_ALT) { it.groupValues[1] }
    val text =
        linked
            .replace(PARAGRAPH, "\n\n")
            .replace(LINE, "\n")
            .replace(LIST_ITEM, "\n- ")
            .replace(CELL, " ")
            .replace(ANY_TAG, "")
    return decodeEntities(text)
        .lines()
        .joinToString("\n") { it.replace(Regex("[ \\t]+"), " ").trim() }
        .replace(Regex("\n{3,}"), "\n\n")
        .trim() + "\n"
}

internal fun emailFunctionName(template: String): String = template.replaceFirstChar { it.lowercaseChar() }

private fun emailFunction(
    name: String,
    props: List<String>,
    locale: String,
): String {
    val function = kotlinName(emailFunctionName(name))
    val values = if (props.isEmpty()) "emptyMap()" else "mapOf(${props.joinToString { "${kotlinString(it)} to ${kotlinName(it)}" }})"
    val call = "renderEmail(${kotlinString(name)}, $locale, $values)"
    if (props.isEmpty()) return "    public fun $function(): RenderedEmail = $call"
    val parameters = props.joinToString("") { "        ${kotlinName(it)}: String,\n" }
    return "    public fun $function(\n$parameters    ): RenderedEmail =\n        $call"
}

internal fun emailsKotlin(
    generatedPackage: String,
    templates: List<EmailTemplate>,
    i18n: I18nSpec? = null,
    callExtension: Boolean = false,
): String {
    val locale = if (i18n == null) kotlinString(DEFAULT_EMAIL_LOCALE) else "locale"
    val functions =
        templates
            .groupBy { it.name }
            .toSortedMap()
            .map { (name, locales) -> emailFunction(name, locales.flatMap { it.props }.distinct(), locale) }
            .joinToString("\n\n")
    val withCall = i18n != null && callExtension
    val imports =
        buildString {
            if (withCall) append("import io.github.nijasc.ktor.svelte.svelteLocale\nimport io.ktor.server.application.ApplicationCall\n")
            append("import java.util.concurrent.ConcurrentHashMap\n")
        }
    val emails =
        if (i18n == null) {
            "public object Emails {\n$functions\n}\n"
        } else {
            "public class Emails private constructor(\n    public val locale: String,\n) {\n$functions\n\n" +
                "    public companion object {\n" +
                "        public val locales: List<String> = listOf(${i18n.locales.joinToString { kotlinString(it) }})\n" +
                "        public val defaultLocale: String = ${kotlinString(i18n.defaultLocale)}\n\n" +
                "        public fun forLocale(locale: String): Emails = Emails(if (locale in locales) locale else defaultLocale)\n" +
                "    }\n}\n" +
                if (withCall) "\npublic val ApplicationCall.emails: Emails get() = Emails.forLocale(svelteLocale)\n" else ""
        }
    val source =
        renderTemplate(
            "Emails.kt.template",
            mapOf(
                "imports" to imports,
                "emails" to emails.trimEnd(),
                "resources" to EMAIL_RESOURCES,
            ),
        )
    return withDocLink("Emails.kt", fileHeader(generatedPackage) + source)
}

internal fun emailResources(templates: List<EmailTemplate>): Map<String, String> =
    templates
        .flatMap { template ->
            val base = "$EMAIL_RESOURCES/${template.name}/${template.locale}"
            listOf("$base.subject" to template.subject, "$base.html" to template.html, "$base.txt" to template.text)
        }.toMap()
