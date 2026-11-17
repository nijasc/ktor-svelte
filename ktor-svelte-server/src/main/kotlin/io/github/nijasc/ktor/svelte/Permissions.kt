package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DocLink
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.createRouteScopedPlugin
import io.ktor.server.application.install
import io.ktor.server.routing.Route
import io.ktor.server.routing.RouteSelector
import io.ktor.server.routing.RouteSelectorEvaluation
import io.ktor.server.routing.RoutingResolveContext
import io.ktor.util.AttributeKey
import kotlin.reflect.KClass

internal const val REFUSED_MESSAGE = "You are not allowed to do that."

internal class PermissionSet(
    val type: Class<*>,
    val names: List<String>,
    val userType: KClass<*>,
    val refusedMessage: ((ApplicationCall) -> String)?,
    val of: suspend ApplicationCall.(Any) -> Set<Enum<*>>,
)

internal class PermissionDeniedException : RuntimeException(REFUSED_MESSAGE)

internal val PermissionsKey = AttributeKey<PermissionSet>("KtorSveltePermissions")

private class PermissionRouteSelector(
    private val names: String,
) : RouteSelector() {
    override suspend fun evaluate(
        context: RoutingResolveContext,
        segmentIndex: Int,
    ): RouteSelectorEvaluation = RouteSelectorEvaluation.Transparent

    override fun toString(): String = "(requires $names)"
}

private fun ApplicationCall.permissionSet(asked: Enum<*>?): PermissionSet {
    val name = asked?.javaClass?.simpleName ?: "Permission"
    val set =
        application.attributes.getOrNull(PermissionsKey)
            ?: error(
                "Permissions are checked, but nothing says who has which. " +
                    "Say it once: install(Svelte) { permissions<$name, User> { user -> ... } }." + DocLink.PERMISSIONS.see(),
            )
    check(asked == null || set.type.isInstance(asked)) {
        "${asked?.javaClass?.simpleName}.$asked was checked, but permissions are declared as ${set.type.simpleName}."
    }
    return set
}

internal suspend fun ApplicationCall.grantedPermissions(asked: Enum<*>? = null): Set<Enum<*>> {
    val set = permissionSet(asked)
    attributes.getOrNull(GrantedPermissionsKey)?.let { return it }
    val user = findUser(set.userType)
    val granted = if (user == null) emptySet() else set.of(this, user)
    attributes.put(GrantedPermissionsKey, granted)
    return granted
}

public suspend fun ApplicationCall.can(permission: Enum<*>): Boolean = permission in grantedPermissions(permission)

public suspend fun ApplicationCall.requirePermission(vararg permissions: Enum<*>) {
    require(permissions.isNotEmpty()) { "requirePermission needs at least one permission." }
    val granted = grantedPermissions(permissions.first())
    permissions.forEach { permissionSet(it) }
    if (permissions.all { it in granted }) return
    if (findUser(permissionSet(null).userType) == null) throw SignInRequiredException()
    throw PermissionDeniedException()
}

public fun Route.requires(
    vararg permissions: Enum<*>,
    build: Route.() -> Unit,
): Route {
    require(permissions.isNotEmpty()) { "requires needs at least one permission." }
    val guarded = createChild(PermissionRouteSelector(permissions.joinToString { it.name }))
    guarded.install(
        createRouteScopedPlugin("KtorSvelteRequires") {
            onCall { call -> call.requirePermission(*permissions) }
        },
    )
    guarded.build()
    return guarded
}
