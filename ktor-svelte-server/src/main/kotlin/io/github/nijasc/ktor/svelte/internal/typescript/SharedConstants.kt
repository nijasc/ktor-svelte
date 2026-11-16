package io.github.nijasc.ktor.svelte.internal.typescript

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

internal const val CONSTANTS_FILE = "constants.ts"
private val TS_IDENTIFIER = Regex("[A-Za-z_$][A-Za-z0-9_$]*")

internal class SharedHolder(
    val name: String,
    val values: Map<String, JsonElement>,
)

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
