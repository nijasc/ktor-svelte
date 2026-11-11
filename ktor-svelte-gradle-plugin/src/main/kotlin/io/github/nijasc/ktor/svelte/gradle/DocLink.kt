package io.github.nijasc.ktor.svelte.gradle

internal const val DOCS_URL = "https://nijasc.github.io/ktor-svelte"

internal enum class DocLink(
    val page: String,
    val anchor: String?,
) {
    ADD_TO_AN_EXISTING_PROJECT("guide/existing-project", null),
    CREATE_A_PROJECT("guide/getting-started", null),
    DAISYUI("features/frontend-libraries", "daisyui"),
    FRONTEND_LIBRARIES("features/frontend-libraries", null),
    GENERATED_TYPESCRIPT("features/typescript", null),
    GRADLE("reference/gradle", null),
    I18N("features/frontend-libraries", "i18n"),
    ;

    val url: String get() = if (anchor == null) "$DOCS_URL/$page" else "$DOCS_URL/$page#$anchor"

    fun see(): String = " See $url"
}
