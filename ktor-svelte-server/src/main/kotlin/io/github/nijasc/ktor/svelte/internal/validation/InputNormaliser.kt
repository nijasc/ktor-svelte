@file:OptIn(ExperimentalSerializationApi::class)

package io.github.nijasc.ktor.svelte.internal.validation

import io.github.nijasc.ktor.svelte.EmptyAsNull
import io.github.nijasc.ktor.svelte.Lowercase
import io.github.nijasc.ktor.svelte.Trim
import io.ktor.http.ContentType
import io.ktor.server.application.Application
import io.ktor.server.application.receiveType
import io.ktor.server.request.ApplicationReceivePipeline
import io.ktor.server.request.contentCharset
import io.ktor.server.request.contentType
import io.ktor.utils.io.ByteReadChannel
import io.ktor.utils.io.toByteArray
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.descriptors.PolymorphicKind
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.descriptors.elementDescriptors
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.serializerOrNull
import java.util.Locale
import java.util.Optional
import java.util.concurrent.ConcurrentHashMap
import kotlin.reflect.KType

private const val DEEPEST_TYPE = 32
private const val DISCRIMINATOR = "type"

internal class InputNormaliser {
    private val descriptors = ConcurrentHashMap<KType, Optional<SerialDescriptor>>()

    fun descriptorToNormalise(type: KType): SerialDescriptor? =
        descriptors
            .computeIfAbsent(type) {
                val descriptor = runCatching { serializerOrNull(type)?.descriptor }.getOrNull()
                Optional.ofNullable(descriptor?.takeIf { asksForNormalising(it, mutableSetOf(), 0) })
            }.orElse(null)

    private fun asksForNormalising(
        descriptor: SerialDescriptor,
        seen: MutableSet<String>,
        depth: Int,
    ): Boolean {
        if (depth > DEEPEST_TYPE || !seen.add(descriptor.serialName)) return false
        return (0 until descriptor.elementsCount).any { index ->
            descriptor.getElementAnnotations(index).any(::isNormaliser) ||
                asksForNormalising(descriptor.getElementDescriptor(index), seen, depth + 1)
        }
    }

    fun normalise(
        element: JsonElement,
        descriptor: SerialDescriptor,
        annotations: List<Annotation> = emptyList(),
    ): JsonElement {
        if (descriptor.isInline && descriptor.elementsCount == 1) {
            return normalise(element, descriptor.getElementDescriptor(0), annotations + descriptor.getElementAnnotations(0))
        }
        return when (element) {
            is JsonNull -> element
            is JsonPrimitive -> if (element.isString) normaliseText(element.content, annotations) else element
            is JsonArray ->
                if (descriptor.kind == StructureKind.LIST) {
                    JsonArray(element.map { normalise(it, descriptor.getElementDescriptor(0), annotations) })
                } else {
                    element
                }
            is JsonObject ->
                when (descriptor.kind) {
                    StructureKind.MAP ->
                        JsonObject(
                            element.mapValues { (_, value) ->
                                normalise(value, descriptor.getElementDescriptor(1), annotations)
                            },
                        )
                    StructureKind.CLASS, StructureKind.OBJECT -> normaliseFields(element, descriptor)
                    PolymorphicKind.SEALED -> subtypeOf(element, descriptor)?.let { normaliseFields(element, it) } ?: element
                    else -> element
                }
        }
    }

    private fun normaliseFields(
        fields: JsonObject,
        descriptor: SerialDescriptor,
    ): JsonObject {
        val changed = fields.toMutableMap()
        for (index in 0 until descriptor.elementsCount) {
            val name = descriptor.getElementName(index)
            val value = fields[name] ?: continue
            changed[name] = normalise(value, descriptor.getElementDescriptor(index), descriptor.getElementAnnotations(index))
        }
        return JsonObject(changed)
    }

    private fun subtypeOf(
        value: JsonObject,
        sealed: SerialDescriptor,
    ): SerialDescriptor? {
        val name = (value[DISCRIMINATOR] as? JsonPrimitive)?.takeIf { it.isString }?.content ?: return null
        if (sealed.elementsCount < 2) return null
        return sealed.getElementDescriptor(1).elementDescriptors.firstOrNull { it.serialName == name }
    }

    private fun normaliseText(
        text: String,
        annotations: List<Annotation>,
    ): JsonElement {
        var result = text
        if (annotations.any { it is Trim }) result = result.trim()
        if (annotations.any { it is Lowercase }) result = result.lowercase(Locale.ROOT)
        return if (result.isEmpty() && annotations.any { it is EmptyAsNull }) JsonNull else JsonPrimitive(result)
    }

    private fun isNormaliser(annotation: Annotation): Boolean = annotation is Trim || annotation is Lowercase || annotation is EmptyAsNull
}

internal fun installInputNormalisation(application: Application) {
    val normaliser = InputNormaliser()
    application.receivePipeline.intercept(ApplicationReceivePipeline.Before) { body ->
        if (body !is ByteReadChannel) return@intercept
        val contentType = context.request.contentType()
        if (!contentType.match(ContentType.Application.Json) && !contentType.contentSubtype.endsWith("+json")) return@intercept
        val type = context.receiveType.kotlinType ?: return@intercept
        val descriptor = normaliser.descriptorToNormalise(type) ?: return@intercept
        val charset = context.request.contentCharset() ?: Charsets.UTF_8
        val bytes = body.toByteArray()
        val parsed = runCatching { Json.parseToJsonElement(bytes.toString(charset)) }.getOrNull()
        val result =
            if (parsed == null) {
                bytes
            } else {
                Json.encodeToString(JsonElement.serializer(), normaliser.normalise(parsed, descriptor)).toByteArray(charset)
            }
        proceedWith(ByteReadChannel(result))
    }
}
