package io.github.nijasc.ktor.svelte.gradle.tasks

private val RESPONDING_AT = Regex("""Responding at (https?://\S+)""")
private val API_DOCS_AT = Regex("""ktor-svelte serves API docs at (/\S*)""")

internal fun browsableUrl(url: String): String =
    url
        .trimEnd('/')
        .replace("://0.0.0.0", "://localhost")
        .replace("://[::]", "://localhost")
        .replace("://127.0.0.1", "://localhost")

internal class ReadyBanner(
    private val vitePort: Int,
) {
    private var apiDocsPath: String? = null
    private var announced = false
    var onFirstReady: (String) -> Unit = {}

    @Synchronized
    fun onAppLine(line: String): String? {
        API_DOCS_AT.find(line)?.let { apiDocsPath = it.groupValues[1] }
        val appUrl =
            RESPONDING_AT
                .find(line)
                ?.groupValues
                ?.get(1)
                ?.let(::browsableUrl) ?: return null
        if (announced) return "ktor-svelte: the app is ready again at $appUrl"
        announced = true
        onFirstReady(appUrl)
        val rows =
            listOfNotNull(
                "App" to appUrl,
                apiDocsPath?.let { "API docs" to appUrl + it },
                "Vite" to "http://localhost:$vitePort",
            )
        val width = rows.maxOf { it.first.length } + 1
        return (
            listOf("", "ktor-svelte is ready. Open the app URL, not the Vite one:") +
                rows.map { (name, url) -> "  ${"$name:".padEnd(width)} $url" } +
                ""
        ).joinToString(System.lineSeparator())
    }
}
