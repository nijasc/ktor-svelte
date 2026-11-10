package io.github.nijasc.ktor.svelte.gradle

private val PLACEHOLDER = Regex("""\{\{(\w+)}}""")

internal fun renderTemplate(
    name: String,
    values: Map<String, String> = emptyMap(),
): String {
    val text =
        KtorSveltePlugin::class.java.getResource("templates/$name")?.readText()
            ?: error("ktor-svelte is missing its template $name. The plugin JAR may be damaged.")
    val expected = PLACEHOLDER.findAll(text).map { it.groupValues[1] }.toSet()
    require(expected == values.keys) { "Template $name needs ${expected.sorted()}, but got ${values.keys.sorted()}." }
    return PLACEHOLDER.replace(text) { values.getValue(it.groupValues[1]) }
}
