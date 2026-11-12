@file:OptIn(ExperimentalJsExport::class)

package io.github.nijasc.ktor.svelte.playground

import io.github.nijasc.ktor.svelte.internal.typescript.TypeScriptGenerator
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive

@JsExport
fun generateTypeScript(
    openApi: String,
    apiPrefix: String,
): String =
    try {
        val files = TypeScriptGenerator(listOf(apiPrefix)).generate(openApi)
        Json.encodeToString(JsonObject.serializer(), JsonObject(mapOf("files" to JsonObject(files.mapValues { JsonPrimitive(it.value) }))))
    } catch (failure: Throwable) {
        Json.encodeToString(JsonObject.serializer(), JsonObject(mapOf("error" to JsonPrimitive(failure.message ?: failure.toString()))))
    }
