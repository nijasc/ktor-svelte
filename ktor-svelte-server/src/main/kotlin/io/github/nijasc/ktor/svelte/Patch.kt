@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.validation.SchemaConstraints
import io.ktor.server.plugins.BadRequestException
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationException
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.descriptors.buildClassSerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonDecoder
import kotlinx.serialization.json.JsonEncoder
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject
import kotlin.reflect.KProperty1

private val PatchJson =
    Json {
        encodeDefaults = true
        explicitNulls = true
    }
private val PatchConstraints = SchemaConstraints()

@Serializable(with = PatchSerializer::class)
public class Patch<T : Any> internal constructor(
    internal val sent: JsonObject,
    private val serializer: KSerializer<T>,
) {
    public val fields: Set<String> get() = sent.keys

    public fun isEmpty(): Boolean = sent.isEmpty()

    public fun has(field: String): Boolean = field in sent

    public operator fun contains(property: KProperty1<T, *>): Boolean = property.name in sent

    public fun applyTo(current: T): T {
        val before = PatchJson.encodeToJsonElement(serializer, current).jsonObject
        val merged =
            try {
                PatchJson.decodeFromJsonElement(serializer, JsonObject(before + sent))
            } catch (failure: SerializationException) {
                throw BadRequestException("The patch does not fit: ${failure.message?.lineSequence()?.firstOrNull().orEmpty()}", failure)
            }
        PatchConstraints.requireValid(merged)
        return merged
    }

    override fun toString(): String = "Patch($sent)"
}

public class PatchSerializer<T : Any>(
    private val serializer: KSerializer<T>,
) : KSerializer<Patch<T>> {
    private val of: SerialDescriptor = serializer.descriptor

    init {
        require(of.kind == StructureKind.CLASS) { "Patch<${of.serialName}> needs a class with properties, such as a data class." }
    }

    override val descriptor: SerialDescriptor =
        buildClassSerialDescriptor("io.github.nijasc.ktor.svelte.Patch<${of.serialName}>") {
            for (index in 0 until of.elementsCount) {
                element(of.getElementName(index), of.getElementDescriptor(index), of.getElementAnnotations(index), isOptional = true)
            }
        }

    override fun serialize(
        encoder: Encoder,
        value: Patch<T>,
    ) {
        val json = encoder as? JsonEncoder ?: throw SerializationException("A Patch can only be written as JSON.")
        json.encodeJsonElement(value.sent)
    }

    override fun deserialize(decoder: Decoder): Patch<T> {
        val json = decoder as? JsonDecoder ?: throw SerializationException("A Patch can only be read from JSON.")
        val sent =
            json.decodeJsonElement() as? JsonObject ?: throw SerializationException("A patch is a JSON object of the fields to change.")
        val names = (0 until of.elementsCount).associateBy { of.getElementName(it) }
        val unknown = sent.keys - names.keys
        if (unknown.isNotEmpty()) {
            throw SerializationException(
                "A patch cannot change ${unknown.joinToString { "'$it'" }}. The fields are ${names.keys.joinToString()}.",
            )
        }
        sent.forEach { (name, value) ->
            if (value is JsonNull && !of.getElementDescriptor(names.getValue(name)).isNullable) {
                throw SerializationException("'$name' cannot be set to null.")
            }
        }
        return Patch(sent, serializer)
    }
}
