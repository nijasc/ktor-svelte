package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.respond
import kotlinx.serialization.Serializable

public const val VERSION_CONFLICT_CODE: String = "version.conflict"
public const val VERSION_CONFLICT_MESSAGE: String = "Someone else changed this in the meantime."

@Serializable
public data class VersionConflict<T>(
    val message: String,
    val code: String,
    val current: T,
)

public suspend inline fun <reified T : Any> ApplicationCall.respondIfStale(
    sent: Long?,
    current: Long,
    message: String = VERSION_CONFLICT_MESSAGE,
    record: () -> T,
): Boolean {
    if (sent == null || sent == current) return false
    respond(HttpStatusCode.Conflict, VersionConflict(message, VERSION_CONFLICT_CODE, record()))
    return true
}
