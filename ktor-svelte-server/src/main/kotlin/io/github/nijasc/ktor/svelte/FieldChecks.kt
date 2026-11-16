package io.github.nijasc.ktor.svelte

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.jsonSchema
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingContext
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

private const val LONGEST_CHECKED_VALUE = 1000

@Serializable
public data class FieldCheckAnswer(
    val message: String? = null,
)

@OptIn(ExperimentalKtorApi::class)
public fun Route.fieldCheck(
    path: String,
    check: suspend RoutingContext.(String) -> String?,
): Route =
    get(path) {
        val value = call.request.queryParameters["value"].orEmpty()
        call.response.header(HttpHeaders.CacheControl, "no-store")
        if (value.length > LONGEST_CHECKED_VALUE) {
            call.respondText("The value to check is longer than $LONGEST_CHECKED_VALUE characters.", status = HttpStatusCode.BadRequest)
            return@get
        }
        val message = if (value.isEmpty()) null else check(value)
        val answer = JsonObject(mapOf("message" to (message?.let(::JsonPrimitive) ?: JsonNull)))
        call.respondText(answer.toString(), ContentType.Application.Json)
    }.describe {
        parameters {
            query("value") { required = true }
        }
        responses {
            HttpStatusCode.OK { schema = jsonSchema<FieldCheckAnswer>() }
        }
    }
