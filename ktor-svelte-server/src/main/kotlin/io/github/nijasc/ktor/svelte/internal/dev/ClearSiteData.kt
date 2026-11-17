package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.header
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.post

internal const val DEV_CLEAR_SITE_DATA_PATH = "/_ktor-svelte/dev/clear-site-data"
internal const val CLEAR_SITE_DATA_HEADER = "Clear-Site-Data"
internal const val CLEAR_EVERYTHING = "\"cache\", \"cookies\", \"storage\""

internal fun Route.devClearSiteDataRoute(allowRemote: Boolean) {
    post(DEV_CLEAR_SITE_DATA_PATH) {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        when {
            !allowRemote && !isLocalCall(call) ->
                call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            call.request.header(DEV_CLIENT_HEADER) == null ->
                call.respondText("Only the ktor-svelte dev panel clears site data.", status = HttpStatusCode.Forbidden)
            else -> {
                call.response.header(CLEAR_SITE_DATA_HEADER, CLEAR_EVERYTHING)
                call.respondText("", status = HttpStatusCode.NoContent)
            }
        }
    }
}
