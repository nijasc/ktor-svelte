package io.github.nijasc.ktor.svelte.internal

internal const val DOCS_URL = "https://nijasc.github.io/ktor-svelte"

internal enum class DocLink(
    val page: String,
    val anchor: String?,
) {
    ADD_TO_AN_EXISTING_PROJECT("guide/existing-project", null),
    API_REQUEST_GUARDS("security", "api-request-guards"),
    COMPATIBILITY("reference/compatibility", null),
    DAISYUI("features/frontend-libraries", "daisyui"),
    DEV_WORKFLOW("guide/dev-workflow", null),
    GENERATED_TYPESCRIPT("features/typescript", null),
    I18N("features/frontend-libraries", "i18n"),
    KTOR("reference/ktor", null),
    TRANSPORT("features/transport", null),
    ;

    val url: String get() = if (anchor == null) "$DOCS_URL/$page" else "$DOCS_URL/$page#$anchor"

    fun see(): String = " See $url"
}
