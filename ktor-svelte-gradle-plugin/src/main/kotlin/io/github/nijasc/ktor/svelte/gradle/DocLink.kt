package io.github.nijasc.ktor.svelte.gradle

internal const val DOCS_URL = "https://nijasc.github.io/ktor-svelte"

internal enum class DocLink(
    val page: String,
    val anchor: String?,
) {
    ADD_TO_AN_EXISTING_PROJECT("guide/existing-project", null),
    BROWSER_TESTS("guide/browser-tests", "accessibility"),
    CALLING_THE_API("features/calling-the-api", "in-load-functions"),
    CREATE_A_PROJECT("guide/getting-started", null),
    DAISYUI("features/frontend-libraries", "daisyui"),
    DEPLOYMENT("guide/deployment", "smoke-test"),
    DEV_WORKFLOW("guide/dev-workflow", "when-a-port-is-still-in-use"),
    FRONTEND_LIBRARIES("features/frontend-libraries", null),
    SECRETS_IN_THE_BUILD("features/runtime-config", "secrets-in-the-frontend-build"),
    GENERATED_TYPESCRIPT("features/typescript", null),
    GRADLE("reference/gradle", null),
    I18N("features/frontend-libraries", "i18n"),
    ROUTES("features/routes", null),
    ;

    val url: String get() = if (anchor == null) "$DOCS_URL/$page" else "$DOCS_URL/$page#$anchor"

    fun see(): String = " See $url"
}
