package io.github.nijasc.ktor.svelte.internal

internal const val README_URL = "https://github.com/nijasc/ktor-svelte"

internal enum class DocLink(
    val anchor: String,
) {
    ADD_TO_AN_EXISTING_PROJECT("add-to-an-existing-project"),
    API_REQUEST_GUARDS("api-request-guards"),
    COMPATIBILITY("compatibility"),
    DAISYUI("daisyui"),
    DEV_WORKFLOW("dev-workflow"),
    GENERATED_TYPESCRIPT("generated-typescript"),
    I18N("i18n"),
    KTOR("ktor"),
    TRANSPORT("transport"),
    ;

    val url: String get() = "$README_URL#$anchor"

    fun see(): String = " See $url"
}
