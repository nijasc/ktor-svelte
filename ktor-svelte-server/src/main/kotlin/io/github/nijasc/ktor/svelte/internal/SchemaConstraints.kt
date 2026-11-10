package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.ValidationException
import io.github.nijasc.ktor.svelte.Validator
import io.ktor.openapi.JsonSchema
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.serializerOrNull
import java.util.Optional
import java.util.concurrent.ConcurrentHashMap

internal class SchemaConstraints {
    private val json = Json { encodeDefaults = true }
    private val serializers = ConcurrentHashMap<Class<*>, Optional<KSerializer<Any>>>()
    private val patterns = ConcurrentHashMap<String, Regex>()

    fun requireValid(received: Any) {
        val validator = Validator()
        check(received, validator)
        if (received is Validated) with(received) { validator.rules() }
        val failures = validator.failures()
        if (failures.isNotEmpty()) throw ValidationException(failures)
    }

    fun check(
        received: Any,
        validator: Validator,
    ) {
        val serializer = constrainedSerializer(received.javaClass) ?: return
        val element = runCatching { json.encodeToJsonElement(serializer, received) }.getOrNull() ?: return
        collect(serializer.descriptor, element, "", validator)
    }

    private fun constrainedSerializer(type: Class<*>): KSerializer<Any>? =
        serializers
            .computeIfAbsent(type) {
                val serializer = runCatching { serializerOrNull(type) }.getOrNull()
                Optional.ofNullable(serializer?.takeIf { hasConstraints(it.descriptor, mutableSetOf()) })
            }.orElse(null)

    private fun hasConstraints(
        descriptor: SerialDescriptor,
        visited: MutableSet<String>,
    ): Boolean {
        if (!visited.add(descriptor.serialName)) return false
        return (0 until descriptor.elementsCount).any { index ->
            descriptor.getElementAnnotations(index).any(::isConstraint) ||
                hasConstraints(descriptor.getElementDescriptor(index), visited)
        }
    }

    private fun collect(
        descriptor: SerialDescriptor,
        element: JsonElement,
        path: String,
        validator: Validator,
    ) {
        when (descriptor.kind) {
            StructureKind.CLASS, StructureKind.OBJECT -> {
                val fields = element as? JsonObject ?: return
                for (index in 0 until descriptor.elementsCount) {
                    val name = descriptor.getElementName(index)
                    val value = fields[name] ?: continue
                    val field = path + name
                    descriptor.getElementAnnotations(index).forEach { annotation -> checkAnnotation(annotation, value, field, validator) }
                    collect(descriptor.getElementDescriptor(index), value, "$field.", validator)
                }
            }

            StructureKind.LIST -> {
                val items = element as? JsonArray ?: return
                val itemDescriptor = descriptor.getElementDescriptor(0)
                items.forEachIndexed { index, item -> collect(itemDescriptor, item, path.removeSuffix(".") + "[$index].", validator) }
            }

            else -> {}
        }
    }

    private fun checkAnnotation(
        annotation: Annotation,
        value: JsonElement,
        field: String,
        validator: Validator,
    ) {
        val primitive = value as? JsonPrimitive ?: return
        val text = primitive.content.takeIf { primitive.isString }
        val number = primitive.takeUnless { it.isString }?.doubleOrNull
        when (annotation) {
            is JsonSchema.MinLength ->
                if (text != null && text.codePointCount(0, text.length) < annotation.value) {
                    validator.fail(field, "Must be at least ${characters(annotation.value)}.")
                }

            is JsonSchema.MaxLength ->
                if (text != null && text.codePointCount(0, text.length) > annotation.value) {
                    validator.fail(field, "Must be at most ${characters(annotation.value)}.")
                }

            is JsonSchema.Minimum ->
                if (number != null && (number < annotation.value || (annotation.exclusive && number == annotation.value))) {
                    val relation = if (annotation.exclusive) "greater than" else "at least"
                    validator.fail(field, "Must be $relation ${format(annotation.value)}.")
                }

            is JsonSchema.Maximum ->
                if (number != null && (number > annotation.value || (annotation.exclusive && number == annotation.value))) {
                    val relation = if (annotation.exclusive) "less than" else "at most"
                    validator.fail(field, "Must be $relation ${format(annotation.value)}.")
                }

            is JsonSchema.Pattern ->
                if (text != null && !patterns.computeIfAbsent(annotation.value, ::Regex).containsMatchIn(text)) {
                    validator.fail(field, "Must match ${annotation.value}.")
                }
        }
    }

    private fun isConstraint(annotation: Annotation): Boolean =
        annotation is JsonSchema.MinLength ||
            annotation is JsonSchema.MaxLength ||
            annotation is JsonSchema.Minimum ||
            annotation is JsonSchema.Maximum ||
            annotation is JsonSchema.Pattern

    private fun characters(count: Int): String = if (count == 1) "1 character" else "$count characters"

    private fun format(value: Double): String = if (value % 1.0 == 0.0) value.toLong().toString() else value.toString()
}
