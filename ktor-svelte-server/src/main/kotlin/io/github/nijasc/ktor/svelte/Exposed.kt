package io.github.nijasc.ktor.svelte

import io.ktor.server.plugins.BadRequestException
import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerializationException
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.serializer
import kotlinx.serialization.serializerOrNull
import org.jetbrains.exposed.v1.core.Column
import org.jetbrains.exposed.v1.core.ResultRow
import org.jetbrains.exposed.v1.core.SortOrder
import org.jetbrains.exposed.v1.core.greater
import org.jetbrains.exposed.v1.core.less
import org.jetbrains.exposed.v1.jdbc.Query
import org.jetbrains.exposed.v1.jdbc.andWhere

private val RowJson =
    Json {
        ignoreUnknownKeys = true
        explicitNulls = false
    }
private val WORD_START = Regex("(?<=[a-z0-9])(?=[A-Z])")

public fun <T, K : Comparable<K>> Query.pageBy(
    column: Column<K>,
    cursor: String?,
    limit: Int,
    descending: Boolean = true,
    parse: (String) -> K?,
    map: (ResultRow) -> T,
): Page<T> {
    require(limit >= 1) { "pageBy: limit must be at least 1, but is $limit." }
    if (!cursor.isNullOrEmpty()) {
        val after = parse(cursor) ?: throw BadRequestException("The cursor '$cursor' is not one this list gave out.")
        andWhere { if (descending) column less after else column greater after }
    }
    val rows = orderBy(column, if (descending) SortOrder.DESC else SortOrder.ASC).limit(limit + 1).toList()
    val shown = rows.take(limit)
    val next =
        shown
            .lastOrNull()
            ?.get(column)
            ?.toString()
            ?.takeIf { rows.size > limit }
    return Page(shown.map(map), next)
}

@JvmName("pageByInt")
public fun <T> Query.pageBy(
    column: Column<Int>,
    cursor: String?,
    limit: Int,
    descending: Boolean = true,
    map: (ResultRow) -> T,
): Page<T> = pageBy(column, cursor, limit, descending, String::toIntOrNull, map)

@JvmName("pageByLong")
public fun <T> Query.pageBy(
    column: Column<Long>,
    cursor: String?,
    limit: Int,
    descending: Boolean = true,
    map: (ResultRow) -> T,
): Page<T> = pageBy(column, cursor, limit, descending, String::toLongOrNull, map)

@JvmName("pageByIntRequest")
public fun <T> Query.pageBy(
    column: Column<Int>,
    request: PageRequest,
    descending: Boolean = true,
    map: (ResultRow) -> T,
): Page<T> = pageBy(column, request.cursor, request.limit, descending, String::toIntOrNull, map)

@JvmName("pageByLongRequest")
public fun <T> Query.pageBy(
    column: Column<Long>,
    request: PageRequest,
    descending: Boolean = true,
    map: (ResultRow) -> T,
): Page<T> = pageBy(column, request.cursor, request.limit, descending, String::toLongOrNull, map)

private fun snakeCase(name: String): String = name.replace(WORD_START, "_").lowercase()

private fun jsonOf(value: Any?): JsonElement =
    when (value) {
        null -> JsonNull
        is JsonElement -> value
        is Boolean -> JsonPrimitive(value)
        is Number -> JsonPrimitive(value)
        is String -> JsonPrimitive(value)
        is Enum<*> -> JsonPrimitive(value.name)
        is Map<*, *> -> JsonObject(value.entries.associate { (key, item) -> key.toString() to jsonOf(item) })
        is Iterable<*> -> JsonArray(value.map(::jsonOf))
        else -> {
            @Suppress("UNCHECKED_CAST")
            val known = runCatching { serializerOrNull(value.javaClass) as KSerializer<Any>? }.getOrNull()
            known?.let { runCatching { RowJson.encodeToJsonElement(it, value) }.getOrNull() } ?: JsonPrimitive(value.toString())
        }
    }

@PublishedApi
internal fun <T : Any> rowToDto(
    row: ResultRow,
    serializer: KSerializer<T>,
    extra: Map<String, Any?>,
): T {
    val descriptor = serializer.descriptor
    val columns = linkedMapOf<String, Column<*>>()
    row.fieldIndex.keys
        .filterIsInstance<Column<*>>()
        .forEach { column -> columns.putIfAbsent(column.name.lowercase(), column) }
    val fields = linkedMapOf<String, JsonElement>()
    val missing = mutableListOf<String>()
    for (index in 0 until descriptor.elementsCount) {
        val name = descriptor.getElementName(index)
        val column = columns[name.lowercase()] ?: columns[snakeCase(name)]
        when {
            name in extra -> fields[name] = jsonOf(extra[name])
            column != null -> fields[name] = jsonOf(row[column])
            !descriptor.isElementOptional(index) && !descriptor.getElementDescriptor(index).isNullable -> missing += name
        }
    }
    val type = descriptor.serialName.substringAfterLast('.')
    check(missing.isEmpty()) {
        "The row has no column for ${missing.joinToString { "'$it'" }} of $type. " +
            "Its columns are ${columns.keys.joinToString()}. Select the column, or pass the value: toDto<$type>(\"${missing.first()}\" to value)."
    }
    return try {
        RowJson.decodeFromJsonElement(serializer, JsonObject(fields))
    } catch (failure: SerializationException) {
        throw IllegalStateException("The row does not fit $type: ${failure.message?.lineSequence()?.firstOrNull().orEmpty()}", failure)
    }
}

public inline fun <reified T : Any> ResultRow.toDto(vararg extra: Pair<String, Any?>): T = rowToDto(this, serializer<T>(), extra.toMap())
