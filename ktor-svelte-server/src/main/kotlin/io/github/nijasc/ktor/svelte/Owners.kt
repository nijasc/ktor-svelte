package io.github.nijasc.ktor.svelte

import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.JsonType
import io.ktor.openapi.ReferenceOr
import io.ktor.server.application.ApplicationCall
import io.ktor.server.routing.Route
import io.ktor.server.routing.openapi.describe
import io.ktor.utils.io.ExperimentalKtorApi

internal const val NOT_FOUND_MESSAGE = "This does not exist."

internal class RecordNotFoundException : RuntimeException(NOT_FOUND_MESSAGE)

public enum class OtherOwner {
    NotFound,
    Forbidden,
}

public suspend inline fun <reified U : Any, T : Any> ApplicationCall.requireOwner(
    record: T?,
    others: OtherOwner = OtherOwner.NotFound,
    noinline owns: (user: U, record: T) -> Boolean,
): T = checkOwner(record, user<U>(), others, owns)

@PublishedApi
internal fun <U : Any, T : Any> checkOwner(
    record: T?,
    user: U?,
    others: OtherOwner,
    owns: (U, T) -> Boolean,
): T {
    if (record == null) throw RecordNotFoundException()
    if (user == null) signInRequired()
    if (owns(user, record)) return record
    when (others) {
        OtherOwner.NotFound -> throw RecordNotFoundException()
        OtherOwner.Forbidden -> throw PermissionDeniedException()
    }
}

private val messageSchema =
    JsonSchema(
        type = JsonType.OBJECT,
        required = listOf("message"),
        properties = mapOf("message" to ReferenceOr.Value(JsonSchema(type = JsonType.STRING))),
    )

@OptIn(ExperimentalKtorApi::class)
public fun Route.ownerChecked(): Route =
    describe {
        responses {
            HttpStatusCode.Unauthorized { schema = messageSchema }
            HttpStatusCode.Forbidden { schema = messageSchema }
            HttpStatusCode.NotFound { schema = messageSchema }
        }
    }
