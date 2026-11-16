@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte.internal.typescript

import io.github.nijasc.ktor.svelte.DECIMAL_SERIAL_NAME
import io.ktor.openapi.AdditionalProperties
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.JsonSchemaInference
import io.ktor.openapi.JsonType
import io.ktor.openapi.KotlinxSerializerJsonSchemaInference
import io.ktor.openapi.ReferenceOr
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.serializerOrNull
import kotlin.reflect.KType

private const val DEEPEST_TYPE = 32
private val DECIMAL_NAMES = setOf(DECIMAL_SERIAL_NAME, "java.math.BigDecimal", "BigDecimal")
private val BRANDABLE = setOf(JsonType.STRING, JsonType.INTEGER, JsonType.NUMBER)

internal object BrandedSchemaInference : JsonSchemaInference {
    override fun buildSchema(type: KType): JsonSchema {
        val schema = KotlinxSerializerJsonSchemaInference.Default.buildSchema(type)
        val descriptor = runCatching { serializerOrNull(type)?.descriptor }.getOrNull() ?: return schema
        return branded(schema, descriptor, 0)
    }

    private fun plainType(schema: JsonSchema): JsonType? =
        when (val type = schema.type) {
            is JsonType -> type
            is JsonSchema.SchemaType.AnyOf -> type.types.singleOrNull { it != JsonType.NULL }
            else -> null
        }

    private fun branded(
        reference: ReferenceOr<JsonSchema>,
        descriptor: SerialDescriptor,
        depth: Int,
    ): ReferenceOr<JsonSchema> =
        if (reference is ReferenceOr.Value) ReferenceOr.Value(branded(reference.value, descriptor, depth)) else reference

    private fun branded(
        schema: JsonSchema,
        descriptor: SerialDescriptor,
        depth: Int,
    ): JsonSchema {
        if (depth > DEEPEST_TYPE) return schema
        if (descriptor.serialName.trimEnd('?') in DECIMAL_NAMES && plainType(schema) == JsonType.STRING && schema.format == null) {
            return schema.copy(format = DECIMAL_FORMAT)
        }
        if (descriptor.isInline) {
            val plain = plainType(schema)
            if (plain !in BRANDABLE || schema.copy(type = null) != JsonSchema()) return schema
            val named = JsonSchema(type = plain, title = descriptor.serialName.trimEnd('?'))
            if (schema.type is JsonType) return named
            return JsonSchema(oneOf = listOf(ReferenceOr.Value(named), ReferenceOr.Value(JsonSchema(type = JsonType.NULL))))
        }
        return when (descriptor.kind) {
            StructureKind.CLASS, StructureKind.OBJECT -> {
                val elements =
                    (0 until descriptor.elementsCount).associate {
                        descriptor.getElementName(it) to
                            descriptor.getElementDescriptor(it)
                    }
                schema.copy(
                    properties =
                        schema.properties?.mapValues { (name, property) ->
                            elements[name]?.let { branded(property, it, depth + 1) } ?: property
                        },
                )
            }
            StructureKind.LIST -> schema.copy(items = schema.items?.let { branded(it, descriptor.getElementDescriptor(0), depth + 1) })
            StructureKind.MAP -> {
                val values = schema.additionalProperties
                if (values is AdditionalProperties.PSchema) {
                    schema.copy(
                        additionalProperties =
                            AdditionalProperties.PSchema(
                                branded(
                                    values.value,
                                    descriptor.getElementDescriptor(1),
                                    depth + 1,
                                ),
                            ),
                    )
                } else {
                    schema
                }
            }
            else -> schema
        }
    }
}
