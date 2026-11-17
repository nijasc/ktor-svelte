package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.http.content.OutgoingContent
import io.ktor.util.AttributeKey
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray

private const val LARGEST_MEASURED_BODY = 8 * 1024 * 1024
private const val FIELDS_SHOWN = 3

internal val RequestPayloadKey = AttributeKey<JsonObject>("KtorSvelteDevRequestPayload")

internal data class PayloadField(
    val name: String,
    val bytes: Int,
    val items: Int?,
)

private class FieldTotal(
    var bytes: Int = 0,
    var items: Int? = null,
)

private fun JsonElement.byteSize(): Int = toString().encodeToByteArray().size

internal fun largestFields(body: JsonElement): List<PayloadField> {
    val totals = LinkedHashMap<String, FieldTotal>()

    fun add(
        name: String,
        value: JsonElement,
    ) {
        val total = totals.getOrPut(name) { FieldTotal() }
        total.bytes += value.byteSize()
        if (value is JsonArray) total.items = (total.items ?: 0) + value.size
    }

    fun collect(
        name: String,
        value: JsonElement,
    ) {
        add(name, value)
        if (value is JsonArray) {
            value.filterIsInstance<JsonObject>().forEach { item ->
                item.forEach { (inner, innerValue) -> add("$name[].$inner", innerValue) }
            }
        }
    }
    when (body) {
        is JsonObject -> body.forEach { (name, value) -> collect(name, value) }
        is JsonArray -> body.filterIsInstance<JsonObject>().forEach { item -> item.forEach { (name, value) -> add("[].$name", value) } }
        else -> Unit
    }
    return totals
        .map { (name, total) -> PayloadField(name, total.bytes, total.items) }
        .sortedByDescending { it.bytes }
        .take(FIELDS_SHOWN)
}

internal fun payloadSummary(content: Any): JsonObject? {
    val outgoing = content as? OutgoingContent ?: return null
    if (outgoing.contentType?.match(ContentType.Text.EventStream) == true) return null
    val bytes =
        when (outgoing) {
            is OutgoingContent.ByteArrayContent -> outgoing.bytes()
            is OutgoingContent.NoContent -> ByteArray(0)
            else -> null
        }
    val size = bytes?.size?.toLong() ?: outgoing.contentLength ?: return null
    val json = outgoing.contentType?.let { it.match(ContentType.Application.Json) || it.contentSubtype.endsWith("+json") } == true
    val fields =
        if (json && bytes != null && bytes.isNotEmpty() && bytes.size <= LARGEST_MEASURED_BODY) {
            runCatching { largestFields(Json.parseToJsonElement(bytes.decodeToString())) }.getOrDefault(emptyList())
        } else {
            emptyList()
        }
    return buildJsonObject {
        put("bytes", size)
        if (fields.isNotEmpty()) {
            putJsonArray("fields") {
                fields.forEach { field ->
                    addJsonObject {
                        put("name", field.name)
                        put("bytes", field.bytes)
                        field.items?.let { put("items", it) }
                    }
                }
            }
        }
    }
}
