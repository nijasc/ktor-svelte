package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.ktor.http.HttpMethod
import io.ktor.http.encodeURLParameter
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.httpMethod
import io.ktor.server.request.uri
import io.ktor.server.response.respondRedirect
import io.ktor.util.AttributeKey

internal const val NEXT_PARAMETER = "next"

internal val LoginPageKey = AttributeKey<String>("KtorSvelteLoginPage")

internal fun loginLocation(
    loginPage: String,
    from: String?,
): String {
    if (from == null || !isPagePath(from) || from.substringBefore('?').trimEnd('/') == loginPage.trimEnd('/')) return loginPage
    return "$loginPage?$NEXT_PARAMETER=${from.encodeURLParameter()}"
}

public suspend fun ApplicationCall.respondLoginRedirect() {
    val loginPage =
        application.attributes.getOrNull(LoginPageKey)
            ?: error(
                "respondLoginRedirect needs to know the login page. " +
                    "Say it once: install(Svelte) { loginPage = \"/login\" }." + DocLink.LOGIN_PAGE.see(),
            )
    respondRedirect(loginLocation(loginPage, request.uri.takeIf { request.httpMethod == HttpMethod.Get }))
}
