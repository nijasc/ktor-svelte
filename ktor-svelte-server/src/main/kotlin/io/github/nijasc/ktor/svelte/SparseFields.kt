package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.security.respondJsonMessage
import io.github.nijasc.ktor.svelte.internal.typescript.FIELDS_EXTENSION
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.OutgoingContent
import io.ktor.http.content.TextContent
import io.ktor.http.withCharset
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.ApplicationCallPipeline
import io.ktor.server.application.call
import io.ktor.server.response.ApplicationSendPipeline
import io.ktor.server.routing.Route
import io.ktor.server.routing.RoutingNode
import io.ktor.server.routing.application
import io.ktor.server.routing.openapi.describe
import io.ktor.util.AttributeKey
import io.ktor.util.pipeline.PipelinePhase
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.serializer

private const val FIELDS_PARAMETER = "fields"
private val SparseFieldsPhase = PipelinePhase("KtorSvelteSparseFields")
private val TrimPhase = PipelinePhase("KtorSvelteTrimFields")
private val AskedFields = AttributeKey<AskedFieldSet>("KtorSvelteAskedFields")
private val TrimInstalled = AttributeKey<Unit>("KtorSvelteTrimInstalled")

@Serializable
internal data class SparseFieldsSpec(
    val type: String,
    val fields: List<String>,
)

internal class AskedFieldSet(
    val asked: Set<String>,
    val known: Set<String>,
)

public inline fun <reified T : Any> Route.sparseFields(): Route {
    val descriptor = serializer<T>().descriptor
    return sparseFields(
        T::class.simpleName ?: descriptor.serialName.substringAfterLast('.'),
        List(descriptor.elementsCount, descriptor::getElementName),
    )
}

@PublishedApi
@OptIn(ExperimentalKtorApi::class)
internal fun Route.sparseFields(
    type: String,
    fields: List<String>,
): Route {
    require(fields.isNotEmpty()) { "sparseFields needs a class with at least one field, but $type has none." }
    val known = fields.toSet()
    application.installFieldTrimming()
    val node = this as? RoutingNode
    if (node != null) {
        node.insertPhaseBefore(ApplicationCallPipeline.Call, SparseFieldsPhase)
        node.intercept(SparseFieldsPhase) {
            val asked = askedFields(call) ?: return@intercept
            val unknown = asked.filterNot { it in known }
            when {
                asked.isEmpty() -> {
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "fields names the fields to send, such as ?fields=${fields.first()}.",
                    )
                    finish()
                }
                unknown.isNotEmpty() -> {
                    val list = unknown.joinToString(", ")
                    respondJsonMessage(
                        call,
                        HttpStatusCode.BadRequest,
                        "$list ${if (unknown.size == 1) "is not a field" else "are not fields"} of $type. Ask for ${fields.joinToString(
                            ", ",
                        )}.",
                    )
                    finish()
                }
                else -> call.attributes.put(AskedFields, AskedFieldSet(asked.toSet(), known))
            }
        }
    }
    return describe { extension(FIELDS_EXTENSION, SparseFieldsSpec(type, fields)) }
}

private fun askedFields(call: ApplicationCall): List<String>? =
    call.request.queryParameters
        .getAll(FIELDS_PARAMETER)
        ?.flatMap { it.split(',') }
        ?.map(String::trim)
        ?.filter(String::isNotEmpty)
        ?.distinct()

private fun Application.installFieldTrimming() {
    if (attributes.contains(TrimInstalled)) return
    attributes.put(TrimInstalled, Unit)
    sendPipeline.insertPhaseAfter(ApplicationSendPipeline.Render, TrimPhase)
    sendPipeline.intercept(TrimPhase) { content ->
        val fields = call.attributes.getOrNull(AskedFields) ?: return@intercept
        val outgoing = content as? OutgoingContent.ByteArrayContent ?: return@intercept
        val type = outgoing.contentType ?: return@intercept
        if (!type.match(ContentType.Application.Json) || (outgoing.status?.value ?: 200) >= 300) return@intercept
        val parsed = runCatching { Json.parseToJsonElement(outgoing.bytes().decodeToString()) }.getOrNull() ?: return@intercept
        val trimmed = keepFields(parsed, fields.asked, fields.known)
        proceedWith(TextContent(trimmed.toString(), ContentType.Application.Json.withCharset(Charsets.UTF_8), outgoing.status))
    }
}

internal fun keepFields(
    element: JsonElement,
    asked: Set<String>,
    known: Set<String>,
): JsonElement =
    when (element) {
        is JsonArray -> JsonArray(element.map { item -> if (item is JsonObject) item.only(asked) else item })
        is JsonObject ->
            when {
                element.keys.all { it in known } -> element.only(asked)
                element["items"] is JsonArray -> JsonObject(element + ("items" to keepFields(element.getValue("items"), asked, known)))
                else -> element
            }
        else -> element
    }

private fun JsonObject.only(asked: Set<String>): JsonObject = JsonObject(filterKeys { it in asked })
