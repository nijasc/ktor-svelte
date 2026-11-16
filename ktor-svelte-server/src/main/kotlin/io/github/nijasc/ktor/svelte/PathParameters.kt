package io.github.nijasc.ktor.svelte

import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.NotFoundException
import io.ktor.server.request.path
import java.util.UUID
import kotlin.reflect.KClass

private const val UUID_LENGTH = 36

public inline fun <reified T : Any> ApplicationCall.pathParameter(name: String): T = pathParameter(name, T::class)

@PublishedApi
internal fun <T : Any> ApplicationCall.pathParameter(
    name: String,
    type: KClass<T>,
): T {
    val raw = parameters[name] ?: error("This route has no path parameter '$name'. Its path needs a {$name} segment.")
    val converted =
        when {
            type == String::class -> raw
            type == Int::class -> raw.toIntOrNull()
            type == Long::class -> raw.toLongOrNull()
            type == UUID::class -> raw.takeIf { it.length == UUID_LENGTH }?.let { runCatching { UUID.fromString(it) }.getOrNull() }
            type.java.isEnum -> type.java.enumConstants.firstOrNull { (it as Enum<*>).name.equals(raw, ignoreCase = true) }
            else -> throw IllegalArgumentException(
                "pathParameter reads String, Int, Long, UUID and enums, but '$name' was asked for as ${type.simpleName}.",
            )
        }
    @Suppress("UNCHECKED_CAST")
    return converted as T? ?: throw NotFoundException("Nothing is at ${request.path()}.")
}
