package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpHeaders
import io.ktor.server.application.ApplicationCall
import io.ktor.server.request.receive
import io.ktor.server.response.header
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.hide
import io.ktor.server.routing.put
import io.ktor.util.reflect.TypeInfo
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlin.reflect.KClass

internal const val PREFERENCES_ROUTE = "preferences"

@Serializable
public class PreferencesAnswer<T>(
    public val preferences: T,
    public val signedIn: Boolean,
)

internal class PreferencesSpec(
    val typeName: String,
    val schema: String,
    val defaultsJson: String,
    val userType: KClass<*>,
    val path: String?,
    val valueType: TypeInfo,
    val answerType: TypeInfo,
    val defaults: Any,
    val load: suspend ApplicationCall.(Any) -> Any?,
    val save: suspend ApplicationCall.(Any, Any) -> Unit,
)

@OptIn(ExperimentalKtorApi::class)
internal fun Route.preferencesRoutes(
    path: String,
    spec: PreferencesSpec,
) {
    get(path) {
        val user = call.findUser(spec.userType)
        val value = if (user == null) spec.defaults else spec.load(call, user) ?: spec.defaults
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respond(PreferencesAnswer(value, user != null), spec.answerType)
    }.hide()
    put(path) {
        val user = call.findUser(spec.userType) ?: throw SignInRequiredException()
        val value = call.receive<Any>(spec.valueType)
        spec.save(call, user, value)
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respond(PreferencesAnswer(value, true), spec.answerType)
    }.hide()
}
