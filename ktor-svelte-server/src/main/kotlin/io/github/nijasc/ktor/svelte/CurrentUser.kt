package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.ktor.http.HttpHeaders
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.hide
import io.ktor.util.AttributeKey
import io.ktor.util.reflect.TypeInfo
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlin.reflect.KClass

internal const val USER_HEADER = "X-Ktor-Svelte-User"
internal const val USER_CHANGED = "changed"
internal const val CURRENT_USER_ROUTE = "current-user"

@Serializable
public class CurrentUserAnswer<T>(
    public val user: T?,
)

internal const val SIGN_IN_MESSAGE = "Sign in first."

internal class CurrentUserSpec(
    val type: KClass<*>,
    val schema: String,
    val path: String?,
    val answerType: TypeInfo,
    val signInMessage: ((ApplicationCall) -> String)?,
    val find: suspend ApplicationCall.() -> Any?,
) {
    val typeName: String get() = type.simpleName ?: "User"
}

internal class SignInRequiredException : RuntimeException(SIGN_IN_MESSAGE)

private class FoundUser(
    val user: Any?,
)

internal val CurrentUserKey = AttributeKey<CurrentUserSpec>("KtorSvelteCurrentUser")
private val FoundUserKey = AttributeKey<FoundUser>("KtorSvelteFoundUser")

@PublishedApi
internal suspend fun ApplicationCall.findUser(asked: KClass<*>): Any? {
    val spec =
        application.attributes.getOrNull(CurrentUserKey)
            ?: error(
                "call.user needs to know how the signed-in user is found. " +
                    "Say it once: install(Svelte) { currentUser<${asked.simpleName}> { ... } }." + DocLink.CURRENT_USER.see(),
            )
    check(asked.java.isAssignableFrom(spec.type.java)) {
        "call.user<${asked.simpleName}>() was asked, but currentUser is declared as ${spec.typeName}."
    }
    attributes.getOrNull(FoundUserKey)?.let { return it.user }
    return spec.find(this).also { attributes.put(FoundUserKey, FoundUser(it)) }
}

@PublishedApi
internal fun signInRequired(): Nothing = throw SignInRequiredException()

public suspend inline fun <reified T : Any> ApplicationCall.user(): T? = findUser(T::class) as T?

public suspend inline fun <reified T : Any> ApplicationCall.requireUser(): T = findUser(T::class) as T? ?: signInRequired()

public fun ApplicationCall.currentUserChanged() {
    attributes.remove(FoundUserKey)
    if (response.headers[USER_HEADER] == null) response.header(USER_HEADER, USER_CHANGED)
}

@OptIn(ExperimentalKtorApi::class)
internal fun Route.currentUserRoute(
    path: String,
    spec: CurrentUserSpec,
) {
    get(path) {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respond(CurrentUserAnswer(call.findUser(spec.type)), spec.answerType)
    }.hide()
}
