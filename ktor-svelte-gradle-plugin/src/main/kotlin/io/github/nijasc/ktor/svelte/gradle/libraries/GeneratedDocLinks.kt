package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.DOCS_URL

private val DOC_PAGES: List<Pair<(String) -> Boolean, String>> =
    listOf(
        { name: String -> name == "AGENTS.md" } to "features/components",
        { name: String -> name == "eslint.js" } to "guide/checks-and-tooling",
        { name: String -> name == ".gitattributes" } to "guide/project-structure",
        { name: String -> name in setOf("i18n.ts", "format.ts", "Messages.kt", "Formats.kt", "AppLanguage.kt") } to "features/i18n",
        { name: String -> name in setOf("theme.ts", "app.css", "AppTheme.kt") } to "features/styling",
        { name: String -> name in setOf("Icon.svelte", "icons.ts", "LucideIcon.kt") } to "features/icons-and-images",
        { name: String -> name in setOf("routes.ts", "FrontendRoutes.kt") } to "features/routes",
        { name: String -> name == "charts.ts" } to "features/charts",
        { name: String -> name == "Emails.kt" } to "features/emails",
        { name: String -> name.startsWith("service-worker") || name == "tsconfig.json" } to "features/installable-app",
        { name: String -> name in setOf("toasts.ts", "confirm.ts", "modal.ts", "errors.ts", "app-error.d.ts", "+error.svelte") } to
            "features/components",
    )

internal fun docPageFor(path: String): String {
    val name = path.substringAfterLast('/')
    if (path.startsWith("$COMPONENTS_DIR/")) return "features/components"
    if (path.contains("service-worker")) return "features/installable-app"
    return DOC_PAGES.firstOrNull { (matches, _) -> matches(name) }?.second ?: "features/frontend-libraries"
}

internal fun docLinkUrl(path: String): String = "$DOCS_URL/${docPageFor(path)}"

internal fun withDocLink(
    path: String,
    content: String,
): String {
    val firstLine = content.substringBefore('\n')
    if (GENERATED_MARKER !in firstLine || !content.contains('\n')) return content
    val rest = content.substringAfter('\n')
    if (rest.substringBefore('\n').contains(DOCS_URL)) return content
    val url = docLinkUrl(path)
    val link =
        when {
            firstLine.startsWith("<!--") -> "<!-- See $url -->"
            firstLine.startsWith("/*") -> "/* See $url */"
            firstLine.startsWith("#") -> "# See $url"
            else -> "// See $url"
        }
    return "$firstLine\n$link\n$rest"
}

internal fun Map<String, String>.withDocLinks(): Map<String, String> = mapValues { (path, content) -> withDocLink(path, content) }
