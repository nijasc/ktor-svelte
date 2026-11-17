package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpHeaders
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.hide
import io.ktor.util.reflect.TypeInfo
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable

internal const val USER_HEADER = "X-Ktor-Svelte-User"
internal const val USER_CHANGED = "changed"
internal const val CURRENT_USER_ROUTE = "current-user"

@Serializable
public class CurrentUserAnswer<T>(
    public val user: T?,
)

internal class CurrentUserSpec(
    val typeName: String,
    val schema: String,
    val path: String?,
    val answerType: TypeInfo,
    val find: suspend ApplicationCall.() -> Any?,
)

public fun ApplicationCall.currentUserChanged() {
    if (response.headers[USER_HEADER] == null) response.header(USER_HEADER, USER_CHANGED)
}

@OptIn(ExperimentalKtorApi::class)
internal fun Route.currentUserRoute(
    path: String,
    spec: CurrentUserSpec,
) {
    get(path) {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respond(CurrentUserAnswer(spec.find(call)), spec.answerType)
    }.hide()
}
