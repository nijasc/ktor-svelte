package io.github.nijasc.ktor.svelte.gradle

internal const val README_URL = "https://github.com/nijasc/ktor-svelte"

internal enum class DocLink(
    val anchor: String,
) {
    ADD_TO_AN_EXISTING_PROJECT("add-to-an-existing-project"),
    CREATE_A_PROJECT("create-a-project"),
    DAISYUI("daisyui"),
    FRONTEND_LIBRARIES("frontend-libraries"),
    GENERATED_TYPESCRIPT("generated-typescript"),
    GRADLE("gradle"),
    I18N("i18n"),
    ;

    val url: String get() = "$README_URL#$anchor"

    fun see(): String = " See $url"
}
