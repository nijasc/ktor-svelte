@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.validation.SchemaConstraints
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.JsonType
import io.ktor.openapi.buildJsonSchema
import io.ktor.server.application.ApplicationCall
import io.ktor.server.plugins.BadRequestException
import io.ktor.server.routing.Route
import io.ktor.server.routing.openapi.describe
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerializationException
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.SerialKind
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.descriptors.elementNames
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.serializer

private val QueryJson = Json { explicitNulls = false }
private val QueryConstraints = SchemaConstraints()
private val WHOLE_NUMBERS = setOf(PrimitiveKind.INT, PrimitiveKind.LONG, PrimitiveKind.SHORT, PrimitiveKind.BYTE)
private val NUMBERS = setOf(PrimitiveKind.DOUBLE, PrimitiveKind.FLOAT)

private class QueryValue(
    val value: JsonElement?,
    val problem: String?,
)

private fun valueOf(
    descriptor: SerialDescriptor,
    text: String,
): QueryValue {
    val plain = if (descriptor.isInline) descriptor.getElementDescriptor(0) else descriptor
    return when (plain.kind) {
        PrimitiveKind.STRING, PrimitiveKind.CHAR -> QueryValue(JsonPrimitive(text), null)
        in WHOLE_NUMBERS -> text.toLongOrNull()?.let { QueryValue(JsonPrimitive(it), null) } ?: QueryValue(null, "Must be a whole number.")
        in NUMBERS ->
            text.toDoubleOrNull()?.takeIf { it.isFinite() }?.let { QueryValue(JsonPrimitive(it), null) }
                ?: QueryValue(null, "Must be a number.")
        PrimitiveKind.BOOLEAN ->
            text.toBooleanStrictOrNull()?.let { QueryValue(JsonPrimitive(it), null) }
                ?: QueryValue(null, "Must be true or false.")
        SerialKind.ENUM ->
            if (text in plain.elementNames) {
                QueryValue(JsonPrimitive(text), null)
            } else {
                QueryValue(null, "Must be one of ${plain.elementNames.joinToString()}.")
            }
        else -> throw unsupported(descriptor)
    }
}

private fun unsupported(descriptor: SerialDescriptor) =
    IllegalArgumentException(
        "A query string cannot hold a ${descriptor.serialName.trimEnd('?')}. " +
            "Use text, numbers, booleans, enums, value classes over those, and lists of them.",
    )

private fun isSimple(descriptor: SerialDescriptor): Boolean {
    val plain = if (descriptor.isInline) descriptor.getElementDescriptor(0) else descriptor
    return plain.kind is PrimitiveKind || plain.kind == SerialKind.ENUM
}

private fun requireQueryClass(descriptor: SerialDescriptor) {
    require(
        descriptor.kind == StructureKind.CLASS,
    ) { "query<${descriptor.serialName}> needs a class with properties, such as a data class." }
    for (index in 0 until descriptor.elementsCount) {
        val element = descriptor.getElementDescriptor(index)
        val item = if (element.kind == StructureKind.LIST) element.getElementDescriptor(0) else element
        if (!isSimple(item)) throw unsupported(item)
    }
}

@PublishedApi
internal fun <T : Any> readQuery(
    call: ApplicationCall,
    serializer: KSerializer<T>,
): T {
    val descriptor = serializer.descriptor
    requireQueryClass(descriptor)
    val problems = linkedMapOf<String, List<String>>()
    val fields = linkedMapOf<String, JsonElement>()
    for (index in 0 until descriptor.elementsCount) {
        val name = descriptor.getElementName(index)
        val element = descriptor.getElementDescriptor(index)
        val sent =
            call.request.queryParameters
                .getAll(name)
                .orEmpty()
                .filter { it.isNotEmpty() }
        if (sent.isEmpty()) {
            if (!descriptor.isElementOptional(index) && !element.isNullable) problems[name] = listOf("Is required.")
            continue
        }
        val values =
            if (element.kind ==
                StructureKind.LIST
            ) {
                sent.map { valueOf(element.getElementDescriptor(0), it) }
            } else {
                listOf(valueOf(element, sent.last()))
            }
        val problem = values.firstNotNullOfOrNull { it.problem }
        if (problem != null) {
            problems[name] = listOf(problem)
        } else {
            val converted = values.mapNotNull { it.value }
            fields[name] = if (element.kind == StructureKind.LIST) JsonArray(converted) else converted.single()
        }
    }
    if (problems.isNotEmpty()) throw ValidationException(problems)
    val result =
        try {
            QueryJson.decodeFromJsonElement(serializer, JsonObject(fields))
        } catch (failure: SerializationException) {
            throw BadRequestException("The query does not fit: ${failure.message?.lineSequence()?.firstOrNull().orEmpty()}", failure)
        }
    QueryConstraints.requireValid(result)
    return result
}

public inline fun <reified T : Any> ApplicationCall.query(): T = readQuery(this, serializer<T>())

private fun withoutNull(schema: JsonSchema): JsonSchema {
    val type = schema.type
    return if (type is JsonSchema.SchemaType.AnyOf) schema.copy(type = type.types.firstOrNull { it != JsonType.NULL }) else schema
}

@PublishedApi
@OptIn(ExperimentalKtorApi::class)
internal fun Route.describeQuery(descriptor: SerialDescriptor): Route {
    requireQueryClass(descriptor)
    return describe {
        parameters {
            for (index in 0 until descriptor.elementsCount) {
                val element = descriptor.getElementDescriptor(index)
                query(descriptor.getElementName(index)) {
                    required = !descriptor.isElementOptional(index) && !element.isNullable
                    schema =
                        withoutNull(
                            element.buildJsonSchema(
                                includeAnnotations = descriptor.getElementAnnotations(index),
                                visiting = mutableSetOf(),
                            ),
                        )
                }
            }
        }
    }
}

public inline fun <reified T : Any> Route.queryOf(): Route = describeQuery(serializer<T>().descriptor)
