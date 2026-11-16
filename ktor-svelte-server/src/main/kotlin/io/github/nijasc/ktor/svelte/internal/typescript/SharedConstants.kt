package io.github.nijasc.ktor.svelte.internal.typescript

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import java.lang.reflect.Modifier
import kotlin.time.Duration

internal const val CONSTANTS_FILE = "constants.ts"
private val TS_IDENTIFIER = Regex("[A-Za-z_$][A-Za-z0-9_$]*")
private val GETTER = Regex("(?:get|is)([A-Z].*)")
private val NOT_A_CONSTANT = setOf("INSTANCE", "Companion", "\$stable")

internal class SharedHolder(
    val name: String,
    val values: Map<String, JsonElement>,
)

internal fun constantValue(
    value: Any?,
    where: String,
): JsonElement =
    when (value) {
        is String -> JsonPrimitive(value)
        is Boolean -> JsonPrimitive(value)
        is Int, is Long, is Short, is Byte -> JsonPrimitive((value as Number).toLong())
        is Double, is Float -> {
            val number = (value as Number).toDouble()
            require(number.isFinite()) { "$where is not a finite number, so it cannot be shared with TypeScript." }
            JsonPrimitive(number)
        }
        is Char -> JsonPrimitive(value.toString())
        is Regex -> JsonPrimitive(value.pattern)
        is Enum<*> -> JsonPrimitive(value.name)
        is Duration -> JsonPrimitive(value.inWholeMilliseconds)
        is Map<*, *> -> JsonObject(value.entries.associate { (key, item) -> key.toString() to constantValue(item, "$where[$key]") })
        is Iterable<*> -> JsonArray(value.mapIndexed { index, item -> constantValue(item, "$where[$index]") })
        is Array<*> -> JsonArray(value.mapIndexed { index, item -> constantValue(item, "$where[$index]") })
        else ->
            throw IllegalArgumentException(
                "$where is a ${value?.javaClass?.name ?: "null"}, which cannot be shared with TypeScript. " +
                    "Use text, numbers, booleans, enums, Regex, Duration, or lists and maps of those.",
            )
    }

internal fun sharedHolder(holder: Any): SharedHolder {
    val type = holder.javaClass
    val name = type.simpleName.ifEmpty { type.name.substringAfterLast('.') }
    require(TS_IDENTIFIER.matches(name)) { "constants(...) takes named objects, such as object Limits, but got ${type.name}." }
    val values = sortedMapOf<String, JsonElement>()
    type.declaredFields
        .filter { Modifier.isStatic(it.modifiers) && Modifier.isPublic(it.modifiers) && Modifier.isFinal(it.modifiers) }
        .filter { it.name !in NOT_A_CONSTANT && it.type != type }
        .forEach { field -> values[field.name] = constantValue(field.get(null), "$name.${field.name}") }
    type.declaredMethods
        .filter { Modifier.isPublic(it.modifiers) && !Modifier.isStatic(it.modifiers) && it.parameterCount == 0 && !it.isSynthetic }
        .filter { '$' !in it.name }
        .forEach { method ->
            val property = GETTER.matchEntire(method.name)?.groupValues?.get(1) ?: return@forEach
            require('-' !in property) {
                "$name.${property.substringBefore('-').replaceFirstChar { it.lowercase() }} is a value class, such as a Duration, " +
                    "which arrives here without its type. Share a plain value instead, such as its inWholeMilliseconds."
            }
            val key =
                if (method.name.startsWith("is")) {
                    method.name
                } else if (property.all { it.isUpperCase() || !it.isLetter() }) {
                    property
                } else {
                    property.replaceFirstChar { it.lowercase() }
                }
            if (key !in values) values[key] = constantValue(method.invoke(holder), "$name.$key")
        }
    require(values.isNotEmpty()) { "$name has no public constants to share. Declare them as const val or val inside the object." }
    return SharedHolder(name, values)
}

private fun literal(
    value: JsonElement,
    indent: String,
): String =
    when (value) {
        is JsonPrimitive -> if (value.isString) quotedString(value.content) else value.content
        is JsonArray -> value.joinToString(", ", "[", "]") { literal(it, indent) }
        is JsonObject ->
            if (value.isEmpty()) {
                "{}"
            } else {
                value.entries.joinToString(",\n", "{\n", "\n$indent}") { (key, item) ->
                    "$indent    ${if (TS_IDENTIFIER.matches(key)) key else quotedString(key)}: ${literal(item, "$indent    ")}"
                }
            }
    }

private fun quotedString(text: String): String =
    "'" +
        text
            .replace("\\", "\\\\")
            .replace("'", "\\'")
            .replace("\n", "\\n")
            .replace("\r", "\\r") + "'"

internal fun constantsSource(holders: List<SharedHolder>): String =
    holders.sortedBy { it.name }.joinToString("\n") { holder ->
        "export const ${holder.name} = ${literal(JsonObject(holder.values), "")} as const;\n"
    }
