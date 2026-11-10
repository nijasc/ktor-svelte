package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.ValidationException
import io.github.nijasc.ktor.svelte.Validator
import io.ktor.openapi.JsonSchema
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerializationException
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.descriptors.PolymorphicKind
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.SerialKind
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.encoding.AbstractEncoder
import kotlinx.serialization.encoding.CompositeEncoder
import kotlinx.serialization.modules.EmptySerializersModule
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.serializerOrNull
import java.util.Optional
import java.util.concurrent.ConcurrentHashMap

internal class SchemaConstraints {
    private val serializers = ConcurrentHashMap<Class<*>, Optional<KSerializer<Any>>>()
    private val patterns = ConcurrentHashMap<String, Regex>()

    fun requireValid(received: Any) {
        val validator = Validator()
        check(received, "", validator)
        val failures = validator.failures()
        if (failures.isNotEmpty()) throw ValidationException(failures)
    }

    private fun check(
        value: Any,
        path: String,
        validator: Validator,
    ) {
        when (value) {
            is Collection<*> -> value.forEachIndexed { index, item -> item?.let { check(it, "$path[$index]", validator) } }
            is Map<*, *> -> value.forEach { (key, item) -> item?.let { check(it, "$path[$key]", validator) } }
            else -> {
                val serializer = serializerFor(value.javaClass)
                if (serializer != null) {
                    ConstraintEncoder(path, null, validator).encodeSerializableValue(serializer, value)
                } else if (value is Validated) {
                    runRules(value, path, validator)
                }
            }
        }
    }

    private fun serializerFor(type: Class<*>): KSerializer<Any>? =
        serializers.computeIfAbsent(type) { Optional.ofNullable(runCatching { serializerOrNull(type) }.getOrNull()) }.orElse(null)

    private fun runRules(
        value: Validated,
        path: String,
        validator: Validator,
    ) {
        val own = Validator()
        with(value) { own.rules() }
        own.failures().forEach { (field, messages) -> messages.forEach { validator.fail(join(path, field), it) } }
    }

    private fun checkText(
        text: String,
        annotations: List<Annotation>,
        field: String,
        validator: Validator,
    ) {
        val length = text.codePointCount(0, text.length)
        annotations.forEach { annotation ->
            when (annotation) {
                is JsonSchema.MinLength ->
                    if (length <
                        annotation.value
                    ) {
                        validator.fail(field, ConstraintMessages.minLength(annotation.value))
                    }
                is JsonSchema.MaxLength ->
                    if (length >
                        annotation.value
                    ) {
                        validator.fail(field, ConstraintMessages.maxLength(annotation.value))
                    }
                is JsonSchema.Pattern ->
                    if (!patterns.computeIfAbsent(annotation.value, ::Regex).containsMatchIn(text)) {
                        validator.fail(field, ConstraintMessages.pattern(annotation.value))
                    }
            }
        }
    }

    private fun checkNumber(
        number: Double,
        annotations: List<Annotation>,
        field: String,
        validator: Validator,
    ) {
        annotations.forEach { annotation ->
            when (annotation) {
                is JsonSchema.Minimum ->
                    if (number < annotation.value || (annotation.exclusive && number == annotation.value)) {
                        validator.fail(field, ConstraintMessages.minimum(annotation.value, annotation.exclusive))
                    }

                is JsonSchema.Maximum ->
                    if (number > annotation.value || (annotation.exclusive && number == annotation.value)) {
                        validator.fail(field, ConstraintMessages.maximum(annotation.value, annotation.exclusive))
                    }
            }
        }
    }

    @OptIn(ExperimentalSerializationApi::class)
    private inner class ConstraintEncoder(
        private val base: String,
        private val kind: SerialKind?,
        private val validator: Validator,
    ) : AbstractEncoder() {
        override val serializersModule: SerializersModule = EmptySerializersModule()
        private var field = base
        private var annotations: List<Annotation> = emptyList()
        private var readingKey = false
        private var mapKey = ""

        override fun beginStructure(descriptor: SerialDescriptor): CompositeEncoder = ConstraintEncoder(field, descriptor.kind, validator)

        override fun encodeElement(
            descriptor: SerialDescriptor,
            index: Int,
        ): Boolean {
            readingKey = false
            annotations = emptyList()
            field =
                when (kind) {
                    StructureKind.LIST -> "$base[$index]"
                    StructureKind.MAP -> if (index % 2 == 0) base.also { readingKey = true } else "$base[$mapKey]"
                    is PolymorphicKind -> base.also { readingKey = index == 0 }
                    else -> join(base, descriptor.getElementName(index)).also { annotations = descriptor.getElementAnnotations(index) }
                }
            return true
        }

        override fun <T> encodeSerializableValue(
            serializer: SerializationStrategy<T>,
            value: T,
        ) {
            val path = field
            try {
                serializer.serialize(this, value)
            } catch (_: SerializationException) {
                return
            } catch (_: IllegalStateException) {
                return
            }
            val descriptor = serializer.descriptor
            if (value is Validated && !descriptor.isNullable && descriptor.kind !is PolymorphicKind) runRules(value, path, validator)
        }

        override fun encodeValue(value: Any) {
            if (readingKey) {
                mapKey = value.toString()
                readingKey = false
                return
            }
            when (value) {
                is String -> checkText(value, annotations, field, validator)
                is Number -> checkNumber(value.toDouble(), annotations, field, validator)
            }
        }

        override fun encodeEnum(
            enumDescriptor: SerialDescriptor,
            index: Int,
        ) {
            if (readingKey) encodeValue(enumDescriptor.getElementName(index))
        }

        override fun encodeNull() {
            readingKey = false
        }
    }
}

private fun join(
    path: String,
    field: String,
): String = if (path.isEmpty()) field else "$path.$field"

internal object ConstraintMessages {
    fun minLength(count: Int): String = "Must be at least ${characters(count)}."

    fun maxLength(count: Int): String = "Must be at most ${characters(count)}."

    fun minimum(
        value: Double,
        exclusive: Boolean,
    ): String = "Must be ${if (exclusive) "greater than" else "at least"} ${formatNumber(value)}."

    fun maximum(
        value: Double,
        exclusive: Boolean,
    ): String = "Must be ${if (exclusive) "less than" else "at most"} ${formatNumber(value)}."

    fun pattern(pattern: String): String = "Must match $pattern."

    private fun characters(count: Int): String = if (count == 1) "1 character" else "$count characters"
}

internal fun formatNumber(value: Double): String = if (value % 1.0 == 0.0) value.toLong().toString() else value.toString()
