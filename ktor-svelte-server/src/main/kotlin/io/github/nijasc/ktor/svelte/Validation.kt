package io.github.nijasc.ktor.svelte

import io.ktor.utils.io.KtorDsl
import kotlin.reflect.KProperty0

public class ValidationException(
    public val fields: Map<String, List<String>>,
) : RuntimeException("Validation failed for ${fields.keys.joinToString()}")

@KtorDsl
public class Validator {
    private val errors = linkedMapOf<String, MutableList<String>>()

    public fun check(
        field: String,
        condition: Boolean,
        message: () -> String,
    ) {
        if (!condition) fail(field, message())
    }

    public fun check(
        property: KProperty0<*>,
        condition: Boolean,
        message: () -> String,
    ) {
        check(property.name, condition, message)
    }

    internal fun fail(
        field: String,
        message: String,
    ) {
        errors.getOrPut(field) { mutableListOf() } += message
    }

    internal fun failures(): Map<String, List<String>> = errors
}

public interface Validated {
    public fun Validator.rules()
}

public fun validate(rules: Validator.() -> Unit) {
    val failures = Validator().apply(rules).failures()
    if (failures.isNotEmpty()) throw ValidationException(failures)
}
