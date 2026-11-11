package io.github.nijasc.ktor.svelte.gradle

internal const val REPOSITORY_URL = "https://github.com/nijasc/ktor-svelte"

internal enum class DocLink(
    val page: String,
    val anchor: String?,
) {
    ADD_TO_AN_EXISTING_PROJECT("README.md", "add-to-an-existing-project"),
    CREATE_A_PROJECT("README.md", "create-a-project"),
    DAISYUI("docs/frontend-libraries.md", "daisyui"),
    FRONTEND_LIBRARIES("docs/frontend-libraries.md", null),
    GENERATED_TYPESCRIPT("docs/typescript.md", null),
    GRADLE("docs/configuration.md", "gradle"),
    I18N("docs/frontend-libraries.md", "i18n"),
    ;

    val url: String
        get() {
            val base = if (page == "README.md") REPOSITORY_URL else "$REPOSITORY_URL/blob/main/$page"
            return if (anchor == null) base else "$base#$anchor"
        }

    fun see(): String = " See $url"
}
