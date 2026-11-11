package io.github.nijasc.ktor.svelte.internal

internal const val REPOSITORY_URL = "https://github.com/nijasc/ktor-svelte"

internal enum class DocLink(
    val page: String,
    val anchor: String?,
) {
    ADD_TO_AN_EXISTING_PROJECT("README.md", "add-to-an-existing-project"),
    API_REQUEST_GUARDS("docs/security.md", "api-request-guards"),
    COMPATIBILITY("README.md", "compatibility"),
    DAISYUI("docs/frontend-libraries.md", "daisyui"),
    DEV_WORKFLOW("docs/dev-workflow.md", null),
    GENERATED_TYPESCRIPT("docs/typescript.md", null),
    I18N("docs/frontend-libraries.md", "i18n"),
    KTOR("docs/configuration.md", "ktor"),
    TRANSPORT("docs/server.md", "transport"),
    ;

    val url: String
        get() {
            val base = if (page == "README.md") REPOSITORY_URL else "$REPOSITORY_URL/blob/main/$page"
            return if (anchor == null) base else "$base#$anchor"
        }

    fun see(): String = " See $url"
}
