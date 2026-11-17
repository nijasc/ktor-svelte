package io.github.nijasc.ktor.svelte

import io.ktor.http.ContentType
import io.ktor.http.content.OutgoingContent
import io.ktor.http.content.TextContent
import io.ktor.http.withCharset
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.call
import io.ktor.server.response.ApplicationSendPipeline
import io.ktor.util.AttributeKey
import io.ktor.util.pipeline.PipelinePhase
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

private val ShapePhase = PipelinePhase("KtorSvelteShapeAnswer")
private val ShapingInstalled = AttributeKey<Unit>("KtorSvelteShapingInstalled")
private val Embedded = AttributeKey<Map<String, List<JsonElement>>>("KtorSvelteEmbedded")

internal fun askedList(
    call: ApplicationCall,
    parameter: String,
): List<String>? =
    call.request.queryParameters
        .getAll(parameter)
        ?.flatMap { it.split(',') }
        ?.map(String::trim)
        ?.filter(String::isNotEmpty)
        ?.distinct()

internal fun Application.installAnswerShaping() {
    if (attributes.contains(ShapingInstalled)) return
    attributes.put(ShapingInstalled, Unit)
    sendPipeline.intercept(ApplicationSendPipeline.Before) { value ->
        resolveIncludes(call, value)?.let { call.attributes.put(Embedded, it) }
    }
    sendPipeline.insertPhaseAfter(ApplicationSendPipeline.Render, ShapePhase)
    sendPipeline.intercept(ShapePhase) { content ->
        val fields = call.attributes.getOrNull(AskedFields)
        val embedded = call.attributes.getOrNull(Embedded)
        if (fields == null && embedded == null) return@intercept
        val outgoing = content as? OutgoingContent.ByteArrayContent ?: return@intercept
        val type = outgoing.contentType ?: return@intercept
        if (!type.match(ContentType.Application.Json) || (outgoing.status?.value ?: 200) >= 300) return@intercept
        var shaped = runCatching { Json.parseToJsonElement(outgoing.bytes().decodeToString()) }.getOrNull() ?: return@intercept
        if (fields != null) shaped = keepFields(shaped, fields.asked, fields.known)
        if (embedded != null) {
            val known =
                call.attributes
                    .getOrNull(AskedIncludes)
                    ?.known
                    .orEmpty() + embedded.keys + fields?.asked.orEmpty()
            shaped = embed(shaped, embedded, known)
        }
        proceedWith(TextContent(shaped.toString(), ContentType.Application.Json.withCharset(Charsets.UTF_8), outgoing.status))
    }
}

internal fun mapItems(
    element: JsonElement,
    known: Set<String>,
    change: (Int, JsonObject) -> JsonObject,
): JsonElement =
    when (element) {
        is JsonArray -> JsonArray(element.mapIndexed { index, item -> if (item is JsonObject) change(index, item) else item })
        is JsonObject ->
            when {
                element.keys.all { it in known } -> change(0, element)
                element["items"] is JsonArray -> JsonObject(element + ("items" to mapItems(element.getValue("items"), known, change)))
                else -> element
            }
        else -> element
    }

internal fun keepFields(
    element: JsonElement,
    asked: Set<String>,
    known: Set<String>,
): JsonElement = mapItems(element, known) { _, item -> JsonObject(item.filterKeys { it in asked }) }

internal fun embed(
    element: JsonElement,
    embedded: Map<String, List<JsonElement>>,
    known: Set<String>,
): JsonElement =
    mapItems(element, known) { index, item ->
        JsonObject(item + embedded.mapNotNull { (name, values) -> values.getOrNull(index)?.let { name to it } })
    }
