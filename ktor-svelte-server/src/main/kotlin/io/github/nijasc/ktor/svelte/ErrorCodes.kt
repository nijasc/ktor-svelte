package io.github.nijasc.ktor.svelte

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.respondText
import io.ktor.util.AttributeKey
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

internal class ErrorCodeSet(
    val type: Class<*>,
    val names: List<String>,
    val message: ((ApplicationCall, Enum<*>) -> String?)?,
)

internal val ErrorCodesKey = AttributeKey<ErrorCodeSet>("KtorSvelteErrorCodes")
private val WORD_START = Regex("(?<=[a-z0-9])(?=[A-Z])|_+")

public class ApiException(
    public val code: Enum<*>,
    public val status: HttpStatusCode = HttpStatusCode.BadRequest,
    message: String? = null,
) : RuntimeException(message ?: code.name)

internal fun readableCode(name: String): String {
    val words = name.split(WORD_START).filter { it.isNotEmpty() }.map { it.lowercase() }
    return words.joinToString(" ").replaceFirstChar { it.uppercase() } + "."
}

internal fun errorCodeBody(
    call: ApplicationCall,
    code: Enum<*>,
    message: String?,
): String {
    val registered = call.application.attributes.getOrNull(ErrorCodesKey)
    val own = registered?.takeIf { it.type.isInstance(code) }?.message
    val text = message ?: own?.invoke(call, code) ?: readableCode(code.name)
    return JsonObject(mapOf("message" to JsonPrimitive(text), "code" to JsonPrimitive(code.name))).toString()
}

public suspend fun ApplicationCall.respondError(
    code: Enum<*>,
    status: HttpStatusCode = HttpStatusCode.BadRequest,
    message: String? = null,
) {
    require(status.value >= HttpStatusCode.BadRequest.value) { "respondError takes an error status, 400 and above, but got $status." }
    respondText(errorCodeBody(this, code, message), ContentType.Application.Json, status)
}
