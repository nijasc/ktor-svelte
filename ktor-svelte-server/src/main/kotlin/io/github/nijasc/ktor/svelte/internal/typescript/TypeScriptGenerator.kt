package io.github.nijasc.ktor.svelte.internal.typescript

import io.github.nijasc.ktor.svelte.internal.validation.ConstraintMessages
import io.github.nijasc.ktor.svelte.internal.validation.formatNumber
import io.github.nijasc.ktor.svelte.svelte
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

private val HTTP_METHODS = listOf("get", "post", "put", "patch", "delete", "head", "options")
private val IDENTIFIER = Regex("[A-Za-z_$][A-Za-z0-9_$]*")
private val PATH_PARAMETER = Regex("\\{([^}]+)}")
private val prettyJson = Json { prettyPrint = true }

internal class TypeScriptGenerator(
    apiPrefixes: List<String>,
    private val excludedPaths: List<String> = emptyList(),
    private val publicConfigSchema: String? = null,
    iconNames: List<String> = emptyList(),
) {
    private val iconNames = iconNames.toSet()
    private val prefixes = apiPrefixes.map { "/" + it.trim('/') }
    private var enumTypes: Map<Set<String>, EnumType> = emptyMap()
    private var usesDates = false
    private val validationHelpers = sortedSetOf<ValidationHelper>()

    fun generate(openApiJson: String): Map<String, String> {
        val document = Json.parseToJsonElement(openApiJson).jsonObject
        val filtered = withApiPathsOnly(document)
        val schemas = filtered.objectAt("components")?.objectAt("schemas").orEmpty()
        enumTypes = nameEnums(filtered, schemas)
        usesDates = hasDateFormat(filtered) || publicConfigSchema?.let { hasDateFormat(Json.parseToJsonElement(it)) } == true
        val dateTypes = if (usesDates) DATE_FORMATS.values else emptyList()
        validationHelpers.clear()
        val types = typesSource(schemas) + publicConfigDeclaration(schemas)
        return mapOf(
            "client.ts" to typeScriptTemplate("client.ts"),
            "types.ts" to types + validationHelpers.joinToString("") { "\n" + it.source },
            "services.ts" to
                servicesSource(
                    filtered.objectAt("paths").orEmpty(),
                    schemas.keys + LUCIDE_TYPE + enumTypes.values.map { it.name } + dateTypes,
                ),
            "index.ts" to typeScriptTemplate("index.ts"),
            "openapi.json" to prettyJson.encodeToString(JsonElement.serializer(), filtered) + "\n",
        )
    }

    private fun withApiPathsOnly(document: JsonObject): JsonObject {
        val paths =
            document
                .objectAt("paths")
                .orEmpty()
                .filterKeys(::isApiPath)
                .toSortedMap()
        return JsonObject(document + ("paths" to JsonObject(paths)))
    }

    private fun publicConfigDeclaration(schemas: Map<String, JsonElement>): String {
        val schema = publicConfigSchema ?: return ""
        return "\n" + declaration("PublicConfig", Json.parseToJsonElement(schema).jsonObject, mutableSetOf(), schemas)
    }

    private fun isApiPath(path: String): Boolean =
        excludedPaths.none { path == it || path.startsWith("$it/") } &&
            (prefixes.isEmpty() || prefixes.any { prefix -> prefix == "/" || path == prefix || path.startsWith("$prefix/") })

    private fun typesSource(schemas: Map<String, JsonElement>): String {
        if (schemas.isEmpty() && iconNames.isEmpty() && enumTypes.isEmpty() && !usesDates) return "export {};\n"
        val references = mutableSetOf<String>()
        val schemaDeclarations =
            schemas.map { (name, schema) -> name to declaration(typeName(name), schema.jsonObject, references, schemas) }
        val enumDeclarations =
            enumTypes.values.filter { it.inline }.map { it.name to enumDeclaration(it.name, it.values) }
        val declarations = (schemaDeclarations + enumDeclarations).sortedBy { it.first }.joinToString("\n") { it.second }
        val iconImport =
            if (LUCIDE_TYPE in
                references
            ) {
                "import type { LucideIconName as $LUCIDE_TYPE } from '../ktor-svelte/icons.js';\n\nexport type { $LUCIDE_TYPE };\n\n"
            } else {
                ""
            }
        val body = listOfNotNull(typeScriptTemplate("dates.ts").takeIf { usesDates }, declarations.ifEmpty { null }).joinToString("\n")
        return iconImport + body.ifEmpty { "export {};\n" }
    }

    private fun declaration(
        name: String,
        schema: JsonObject,
        references: MutableSet<String>,
        schemas: Map<String, JsonElement>,
    ): String {
        val enumValues = enumValues(schema)
        if (enumValues != null && schema["enum"]?.jsonArray?.none { it is JsonNull } == true) return enumDeclaration(name, enumValues)
        if (hasEmptyFactory(schema)) {
            return "export interface $name ${objectBody(schema, references, indent = "")}\n\n" +
                "export const $name = {\n" +
                "    empty: (): $name => (${emptyObject(schema, schemas, "    ", emptySet())}),\n" +
                boundsSource(schema) +
                validateSource(name, schema, schemas) +
                "};\n"
        }
        return "export type $name = ${tsType(schema, references)};\n"
    }

    private fun boundsSource(schema: JsonObject): String {
        val required = schema.stringList("required")
        val lines =
            schema.objectAt("properties").orEmpty().mapNotNull { (name, value) ->
                val attributes = inputAttributes(value.jsonObject, name in required)
                if (attributes.isEmpty()) {
                    null
                } else {
                    "        ${propertyKey(name)}: { ${attributes.joinToString { (key, attribute) -> "$key: $attribute" }} },"
                }
            }
        if (lines.isEmpty()) return ""
        return "    bounds: {\n${lines.joinToString("\n")}\n    },\n"
    }

    private fun inputAttributes(
        schema: JsonObject,
        required: Boolean,
    ): List<Pair<String, String>> {
        val integer = schema.typeNames().contains("integer")

        fun bound(
            key: String,
            exclusiveKey: String,
            step: Int,
        ): String? {
            schema.numberAt(key)?.let { return formatNumber(it) }
            val exclusive = schema.numberAt(exclusiveKey) ?: return null
            return if (integer) formatNumber(exclusive + step) else null
        }
        return listOfNotNull(
            ("required" to "true").takeIf { isRequiredInput(schema, required) },
            schema.numberAt("minLength")?.let { "minlength" to formatNumber(it) },
            schema.numberAt("maxLength")?.let { "maxlength" to formatNumber(it) },
            bound("minimum", "exclusiveMinimum", 1)?.let { "min" to it },
            bound("maximum", "exclusiveMaximum", -1)?.let { "max" to it },
            schema.stringAt("pattern")?.let { "pattern" to literal(JsonPrimitive(it)) },
        )
    }

    private fun isRequiredInput(
        schema: JsonObject,
        required: Boolean,
    ): Boolean {
        if (isNullable(schema) || schema["enum"] != null) return false
        return if ("string" in schema.typeNames()) {
            (schema.numberAt("minLength") ?: 0.0) >= 1
        } else {
            required && isNumber(schema)
        }
    }

    private fun isNumber(schema: JsonObject): Boolean = schema.typeNames().any { it == "integer" || it == "number" }

    private fun validateSource(
        name: String,
        schema: JsonObject,
        schemas: Map<String, JsonElement>,
    ): String {
        if (!hasValidator(schema, schemas, emptySet())) return ""
        val required = schema.stringList("required")
        val checks =
            schema.objectAt("properties").orEmpty().flatMap { (property, value) ->
                val propertySchema = value.jsonObject
                val access = "value" + if (IDENTIFIER.matches(property)) ".$property" else "[${literal(JsonPrimitive(property))}]"
                constraintChecks(property, access, propertySchema, property in required) +
                    nestedChecks(propertySchema, access, templateText(property), "        ", 0, schemas)
            }
        return "    validate: (value: $name): Record<string, string[]> => {\n" +
            "        const errors: Record<string, string[]> = {};\n" +
            checks.joinToString("") { "$it\n" } +
            "        return errors;\n" +
            "    },\n"
    }

    private fun hasValidator(
        schema: JsonObject,
        schemas: Map<String, JsonElement>,
        visiting: Set<String>,
    ): Boolean =
        hasEmptyFactory(schema) &&
            schema.objectAt("properties").orEmpty().values.any { value ->
                val property = value.jsonObject
                CONSTRAINT_KEYWORDS.any { property.numberAt(it) != null || (it == "pattern" && property.stringAt(it) != null) } ||
                    referencedSchema(property)?.let { raw ->
                        raw !in visiting && (schemas[raw] as? JsonObject)?.let { hasValidator(it, schemas, visiting + raw) } == true
                    } == true
            }

    private fun referencedSchema(schema: JsonObject): String? {
        schema.stringAt("\$ref")?.let { return it.substringAfterLast('/') }
        nonNullOption(schema)?.let { return referencedSchema(it) }
        if ("array" in schema.typeNames()) return schema.objectAt("items")?.let(::referencedSchema)
        return null
    }

    private fun nonNullOption(schema: JsonObject): JsonObject? =
        (schema.arrayAt("oneOf") ?: schema.arrayAt("anyOf"))
            ?.mapNotNull { it as? JsonObject }
            ?.filterNot { it.typeNames() == listOf("null") }
            ?.singleOrNull()

    private fun constraintChecks(
        property: String,
        access: String,
        schema: JsonObject,
        required: Boolean,
    ): List<String> {
        val field = literal(JsonPrimitive(property))

        fun fail(message: String) = "addError(errors, $field, ${literal(JsonPrimitive(message))});"
        val minLength = schema.numberAt("minLength")?.toInt()
        val maxLength = schema.numberAt("maxLength")?.toInt()
        val pattern = (schema["pattern"] as? JsonPrimitive)?.takeIf { it.isString }?.content
        val lower = schema.numberAt("minimum")?.let { it to false } ?: schema.numberAt("exclusiveMinimum")?.let { it to true }
        val upper = schema.numberAt("maximum")?.let { it to false } ?: schema.numberAt("exclusiveMaximum")?.let { it to true }
        val lines = mutableListOf<String>()
        if (isRequiredInput(schema, required) && isNumber(schema)) {
            lines += "        if (typeof $access !== 'number' || Number.isNaN($access)) ${fail(REQUIRED_MESSAGE)}"
        }
        if (minLength != null || maxLength != null || pattern != null) {
            lines += "        if (typeof $access === 'string') {"
            if (minLength != null || maxLength != null) lines += "            const length = [...$access].length;"
            minLength?.let { lines += "            if (length < $it) ${fail(ConstraintMessages.minLength(it))}" }
            maxLength?.let { lines += "            if (length > $it) ${fail(ConstraintMessages.maxLength(it))}" }
            pattern?.let {
                validationHelpers += ValidationHelper.MATCHES
                lines += "            if (!matches(${literal(JsonPrimitive(it))}, $access)) ${fail(ConstraintMessages.pattern(it))}"
            }
            lines += "        }"
        }
        if (lower != null || upper != null) {
            lines += "        if (typeof $access === 'number') {"
            lower?.let { (bound, exclusive) ->
                val operator = if (exclusive) "<=" else "<"
                lines += "            if ($access $operator ${formatNumber(bound)}) ${fail(ConstraintMessages.minimum(bound, exclusive))}"
            }
            upper?.let { (bound, exclusive) ->
                val operator = if (exclusive) ">=" else ">"
                lines += "            if ($access $operator ${formatNumber(bound)}) ${fail(ConstraintMessages.maximum(bound, exclusive))}"
            }
            lines += "        }"
        }
        if (lines.isNotEmpty()) validationHelpers += ValidationHelper.ADD_ERROR
        return lines
    }

    private fun nestedChecks(
        schema: JsonObject,
        access: String,
        path: String,
        indent: String,
        depth: Int,
        schemas: Map<String, JsonElement>,
    ): List<String> {
        schema.stringAt("\$ref")?.let { reference ->
            val raw = reference.substringAfterLast('/')
            val target = schemas[raw] as? JsonObject ?: return emptyList()
            if (!hasValidator(target, schemas, emptySet())) return emptyList()
            validationHelpers += listOf(ValidationHelper.ADD_ERROR, ValidationHelper.ADD_NESTED)
            return listOf("${indent}if ($access != null) addNested(errors, `$path.`, ${typeName(raw)}.validate($access));")
        }
        nonNullOption(schema)?.let { return nestedChecks(it, access, path, indent, depth, schemas) }
        if ("array" !in schema.typeNames()) return emptyList()
        val items = schema.objectAt("items") ?: return emptyList()
        val suffix = if (depth == 0) "" else "${depth + 1}"
        val item = "item$suffix"
        val index = "index$suffix"
        val inner = nestedChecks(items, item, "$path[\${$index}]", "$indent        ", depth + 1, schemas)
        if (inner.isEmpty()) return emptyList()
        return listOf("${indent}if (Array.isArray($access)) {", "$indent    $access.forEach(($item, $index) => {") +
            inner +
            listOf("$indent    });", "$indent}")
    }

    private fun templateText(value: String): String = value.replace("\\", "\\\\").replace("`", "\\`").replace("$", "\\$")

    private fun JsonObject.numberAt(key: String): Double? =
        (this[key] as? JsonPrimitive)?.takeUnless { it.isString }?.contentOrNull?.toDoubleOrNull()

    private fun JsonObject.typeNames(): List<String> =
        when (val type = this["type"]) {
            is JsonArray -> type.map { it.jsonPrimitive.content }
            is JsonPrimitive -> listOf(type.content)
            else -> emptyList()
        }

    private fun enumDeclaration(
        name: String,
        values: List<String>,
    ): String {
        val members = values.joinToString("") { "    ${propertyKey(it)}: ${literal(JsonPrimitive(it))},\n" }
        return "export const $name = {\n$members} as const;\n\nexport type $name = (typeof $name)[keyof typeof $name];\n"
    }

    private fun nameEnums(
        document: JsonObject,
        schemas: Map<String, JsonElement>,
    ): Map<Set<String>, EnumType> {
        val named = linkedMapOf<Set<String>, EnumType>()
        schemas.toSortedMap().forEach { (name, schema) ->
            enumValues(schema.jsonObject)?.let { values ->
                named.putIfAbsent(values.toSet(), EnumType(typeName(name), values, inline = false))
            }
        }
        val usages = linkedMapOf<Set<String>, MutableList<EnumUsage>>()
        val values = mutableMapOf<Set<String>, List<String>>()

        fun walk(
            element: JsonElement,
            owner: String,
            property: String,
            topLevel: Boolean,
        ) {
            when (element) {
                is JsonArray -> element.forEach { walk(it, owner, property, false) }

                is JsonObject -> {
                    enumValues(element)?.takeUnless { topLevel }?.let { enumValues ->
                        usages.getOrPut(enumValues.toSet()) { mutableListOf() } += EnumUsage(owner, property)
                        values.putIfAbsent(enumValues.toSet(), enumValues)
                    }
                    val parameterName = if (element.stringAt("in") != null) element.stringAt("name") else null
                    element.forEach { (key, child) ->
                        when {
                            key == "properties" && child is JsonObject ->
                                child.forEach { (name, schema) ->
                                    walk(schema, owner, name, false)
                                }
                            key == "schema" && parameterName != null -> walk(child, owner, parameterName, false)
                            key != "enum" -> walk(child, owner, property, false)
                        }
                    }
                }

                else -> {}
            }
        }
        schemas.forEach { (name, schema) -> walk(schema, typeName(name), typeName(name), topLevel = true) }
        document.objectAt("paths")?.let { walk(it, "", "", false) }

        val inline =
            usages.keys.filter { it !in named && it != iconNames }.sortedBy { key ->
                values
                    .getValue(
                        key,
                    ).sorted()
                    .joinToString("\u0000")
            }
        val firstUsages = inline.associateWith { key -> usages.getValue(key).minWith(compareBy({ it.owner }, { it.property })) }
        val claims = firstUsages.values.groupingBy { typeName(it.property) }.eachCount()
        val taken = (schemas.keys.map(::typeName) + LUCIDE_TYPE + "PublicConfig").toMutableSet()
        val result = LinkedHashMap<Set<String>, EnumType>(named)
        inline.forEach { key ->
            val usage = firstUsages.getValue(key)
            val base = typeName(usage.property)
            val preferred =
                if (claims.getValue(base) > 1 ||
                    base in taken
                ) {
                    usage.owner.let { if (it.isEmpty()) base else it + base }
                } else {
                    base
                }
            val name = if (preferred !in taken) preferred else generateSequence(2) { it + 1 }.map { "$preferred$it" }.first { it !in taken }
            taken += name
            result[key] = EnumType(name, values.getValue(key), inline = true)
        }
        return result
    }

    private fun enumValues(schema: JsonObject): List<String>? {
        val array = schema.arrayAt("enum") ?: return null
        val strings = array.filter { it !is JsonNull }
        if (strings.any { it !is JsonPrimitive || !it.isString }) return null
        val names = strings.map { it.jsonPrimitive.content }.distinct()
        return names.takeIf { it.size > 1 }
    }

    private class EnumType(
        val name: String,
        val values: List<String>,
        val inline: Boolean,
    )

    private class EnumUsage(
        val owner: String,
        val property: String,
    )

    private fun hasEmptyFactory(schema: JsonObject): Boolean = schema.objectAt("properties") != null && schema["allOf"] == null

    private fun emptyObject(
        schema: JsonObject,
        schemas: Map<String, JsonElement>,
        indent: String,
        visiting: Set<String>,
    ): String {
        val properties = schema.objectAt("properties").orEmpty()
        if (properties.isEmpty()) return "{}"
        val lines =
            properties.map { (name, value) ->
                "$indent    ${propertyKey(name)}: ${emptyValue(value.jsonObject, schemas, "$indent    ", visiting)},"
            }
        return (listOf("{") + lines + "$indent}").joinToString("\n")
    }

    private fun emptyValue(
        schema: JsonObject,
        schemas: Map<String, JsonElement>,
        indent: String,
        visiting: Set<String>,
    ): String {
        if (isNullable(schema)) return "null"
        schema.stringAt("\$ref")?.let { reference ->
            val raw = reference.substringAfterLast('/')
            val target = schemas[raw] as? JsonObject ?: return "null"
            if (hasEmptyFactory(target)) return "${typeName(raw)}.empty()"
            if (raw in visiting) return "null"
            return emptyValue(target, schemas, indent, visiting + raw)
        }
        schema["enum"]?.let { values -> return values.jsonArray.firstOrNull()?.let(::literal) ?: "null" }
        schema["const"]?.let { value -> return literal(value) }
        (schema.arrayAt("oneOf") ?: schema.arrayAt("anyOf"))?.let { options ->
            return options.firstOrNull()?.let { emptyValue(it.jsonObject, schemas, indent, visiting) } ?: "null"
        }
        schema.arrayAt("allOf")?.let { parts ->
            if (parts.size == 1) return emptyValue(parts.single().jsonObject, schemas, indent, visiting)
            return parts.joinToString(", ", "{ ", " }") { "..." + emptyValue(it.jsonObject, schemas, indent, visiting) }
        }
        val type =
            when (val declared = schema["type"]) {
                is JsonArray -> declared.firstOrNull()?.jsonPrimitive?.content
                is JsonPrimitive -> declared.contentOrNull
                else -> null
            }
        return when (type) {
            "string" -> dateType(schema)?.let { "'' as $it" } ?: "''"
            "integer", "number" -> "0"
            "boolean" -> "false"
            "array" ->
                schema
                    .arrayAt("prefixItems")
                    ?.joinToString(", ", "[", "]") { emptyValue(it.jsonObject, schemas, indent, visiting) }
                    ?: "[]"
            "object" -> emptyObject(schema, schemas, indent, visiting)
            null -> if (schema["properties"] != null) emptyObject(schema, schemas, indent, visiting) else "null"
            else -> "null"
        }
    }

    private fun isNullable(schema: JsonObject): Boolean {
        val type = schema["type"]
        val options = schema.arrayAt("oneOf").orEmpty() + schema.arrayAt("anyOf").orEmpty()
        return (type is JsonArray && type.any { it.jsonPrimitive.content == "null" }) ||
            (type is JsonPrimitive && type.content == "null") ||
            (schema["nullable"] as? JsonPrimitive)?.contentOrNull == "true" ||
            schema.arrayAt("enum").orEmpty().any { it is JsonNull } ||
            options.any { (it as? JsonObject)?.let(::isNullable) == true }
    }

    private fun objectBody(
        schema: JsonObject,
        references: MutableSet<String>,
        indent: String,
    ): String {
        val required = schema.stringList("required")
        val lines =
            schema.objectAt("properties").orEmpty().map { (name, value) ->
                val optional = if (name in required) "" else "?"
                "$indent    ${propertyKey(name)}$optional: ${tsType(value.jsonObject, references, "$indent    ")};"
            }
        return (listOf("{") + lines + "$indent}").joinToString("\n")
    }

    private fun tsType(
        schema: JsonObject,
        references: MutableSet<String>,
        indent: String = "",
    ): String {
        schema.stringAt("\$ref")?.let { reference ->
            val name = typeName(reference.substringAfterLast('/'))
            references += name
            return name
        }
        schema["enum"]?.let { values ->
            val names = values.jsonArray.mapNotNull { (it as? JsonPrimitive)?.contentOrNull }.toSet()
            if (iconNames.isNotEmpty() && names == iconNames) {
                references += LUCIDE_TYPE
                return LUCIDE_TYPE
            }
            enumValues(schema)?.let { enumValues ->
                enumTypes[enumValues.toSet()]?.let { type ->
                    references += type.name
                    return if (values.jsonArray.any { it is JsonNull }) "${type.name} | null" else type.name
                }
            }
            return values.jsonArray.joinToString(" | ", transform = ::literal).ifEmpty { "never" }
        }
        schema["const"]?.let { value -> return literal(value) }
        schema.arrayAt("oneOf")?.let { options -> return union(options, references, indent) }
        schema.arrayAt("anyOf")?.let { options -> return union(options, references, indent) }
        schema.arrayAt("allOf")?.let { parts ->
            return parts.joinToString(" & ") { tsType(it.jsonObject, references, indent) }
        }
        return when (val type = schema["type"]) {
            null -> if (schema["properties"] != null) objectType(schema, references, indent) else "unknown"
            is JsonArray -> type.map { singleType(it.jsonPrimitive.content, schema, references, indent) }.distinct().joinToString(" | ")
            else -> singleType(type.jsonPrimitive.content, schema, references, indent)
        }
    }

    private fun singleType(
        type: String,
        schema: JsonObject,
        references: MutableSet<String>,
        indent: String,
    ): String =
        when (type) {
            "string" -> dateType(schema)?.also { references += it } ?: "string"
            "integer", "number" -> "number"
            "boolean" -> "boolean"
            "null" -> "null"
            "array" -> arrayType(schema, references, indent)
            "object" -> objectType(schema, references, indent)
            else -> "unknown"
        }

    private fun arrayType(
        schema: JsonObject,
        references: MutableSet<String>,
        indent: String,
    ): String {
        schema.arrayAt("prefixItems")?.let { items ->
            return items.joinToString(", ", "[", "]") { tsType(it.jsonObject, references, indent) }
        }
        val item = schema["items"]?.jsonObject ?: return "unknown[]"
        val itemType = tsType(item, references, indent)
        return if (" | " in itemType || " & " in itemType) "($itemType)[]" else "$itemType[]"
    }

    private fun objectType(
        schema: JsonObject,
        references: MutableSet<String>,
        indent: String,
    ): String {
        if (schema.objectAt("properties").orEmpty().isNotEmpty()) return objectBody(schema, references, indent)
        val additional = schema["additionalProperties"] as? JsonObject
        return if (additional != null) "Record<string, ${tsType(additional, references, indent)}>" else "Record<string, unknown>"
    }

    private fun union(
        options: JsonArray,
        references: MutableSet<String>,
        indent: String,
    ): String = options.map { tsType(it.jsonObject, references, indent) }.distinct().joinToString(" | ")

    private fun literal(value: JsonElement): String =
        when {
            value is JsonNull -> "null"
            value is JsonPrimitive && value.isString -> "'" + value.content.replace("\\", "\\\\").replace("'", "\\'") + "'"
            value is JsonPrimitive -> value.content
            else -> "unknown"
        }

    private fun servicesSource(
        paths: Map<String, JsonElement>,
        schemaNames: Set<String>,
    ): String {
        val references = sortedSetOf<String>()
        val groups = linkedMapOf<String, MutableList<Endpoint>>()
        val errors = mutableListOf<ErrorEntry>()
        paths.forEach { (path, item) ->
            val pathItem = item.jsonObject
            HTTP_METHODS.forEach { method ->
                pathItem.objectAt(method)?.let { operation ->
                    groups.getOrPut(groupName(path)) { mutableListOf() } += endpoint(path, method, pathItem, operation)
                }
            }
        }
        val serviceBlocks =
            groups.toSortedMap().map { (group, endpoints) ->
                val taken = mutableSetOf<String>()
                val members =
                    endpoints.joinToString("\n") { endpoint ->
                        references += endpoint.references
                        val name = uniqueName(endpoint.name, endpoint.parameters, taken)
                        val operation = "$group.$name"
                        endpoint.errorType?.let { errors += ErrorEntry(operation, it, endpoint.errorStatuses) }
                        "    ${propertyKey(name)}: ${endpoint.source(operation)},"
                    }
                "export const $group = {\n$members\n};\n"
            }
        val typeImports = references.filter { name -> name in schemaNames.map(::typeName) }
        val clientImports = if (groups.values.flatten().any { it.streaming }) "ApiError, request, stream" else "ApiError, request"
        return buildString {
            append("import { $clientImports, type RequestOptions } from './client.js';\n")
            val imports = if (publicConfigSchema != null) typeImports + "PublicConfig" else typeImports
            if (imports.isNotEmpty()) append("import type { ${imports.joinToString()} } from './types.js';\n")
            append("\n")
            serviceBlocks.forEach { block -> append(block).append("\n") }
            append(errorsSource(errors))
            if (publicConfigSchema != null) append(typeScriptTemplate("public-config.ts"))
            append("export const api = { ${groups.keys.sorted().joinToString()} };\n")
        }
    }

    private fun errorsSource(errors: List<ErrorEntry>): String {
        val types = errors.joinToString("") { "    '${it.operation}': ${it.type};\n" }
        val statuses = errors.joinToString("") { "    '${it.operation}': [${it.statuses.joinToString()}],\n" }
        return "export interface ApiErrors {\n$types}\n\n" +
            "const errorStatuses: Record<string, number[]> = {\n$statuses};\n\n" +
            "export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {\n" +
            "    return error instanceof ApiError && error.operation === operation && " +
            "(errorStatuses[operation] ?? []).includes(error.status);\n" +
            "}\n\n"
    }

    private fun uniqueName(
        name: String,
        pathParameters: List<String>,
        taken: MutableSet<String>,
    ): String {
        val candidates = sequenceOf(name, name + pathParameters.joinToString("") { pascalCase(it) })
        val free = candidates.firstOrNull { it !in taken } ?: generateSequence(2) { it + 1 }.map { "$name$it" }.first { it !in taken }
        taken += free
        return free
    }

    private fun endpoint(
        path: String,
        method: String,
        pathItem: JsonObject,
        operation: JsonObject,
    ): Endpoint {
        val references = mutableSetOf<String>()
        val declared = (pathItem.arrayAt("parameters").orEmpty() + operation.arrayAt("parameters").orEmpty()).map { it.jsonObject }
        val pathParameters = PATH_PARAMETER.findAll(path).map { it.groupValues[1] }.toList()
        val signature = mutableListOf<String>()

        pathParameters.forEach { parameter ->
            val schema = declared.firstOrNull { it.stringAt("name") == parameter && it.stringAt("in") == "path" }?.objectAt("schema")
            val type = schema?.let { tsType(it, references) }?.takeUnless { it == "unknown" || it == "string" } ?: "string | number"
            signature += "${identifier(parameter)}: $type"
        }

        val requestBody = operation.objectAt("requestBody")
        val bodyType = requestBody?.objectAt("content")?.let { preferredSchema(it) }?.let { tsType(it, references) }
        if (requestBody != null) signature += "body: ${bodyType ?: "unknown"}"

        val queryParameters = declared.filter { it.stringAt("in") == "query" }
        if (queryParameters.isNotEmpty()) {
            val fields =
                queryParameters.joinToString("; ") { parameter ->
                    val required = parameter["required"]?.jsonPrimitive?.contentOrNull == "true"
                    val type = parameter.objectAt("schema")?.let { tsType(it, references) }?.takeUnless { it == "unknown" } ?: "string"
                    "${propertyKey(parameter.stringAt("name").orEmpty())}${if (required) "" else "?"}: $type"
                }
            val anyRequired = queryParameters.any { it["required"]?.jsonPrimitive?.contentOrNull == "true" }
            signature += "query${if (anyRequired) "" else "?"}: { $fields }"
        }
        signature += "options?: RequestOptions"

        val urlSource =
            if (pathParameters.isEmpty()) {
                "'$path'"
            } else {
                "`" + PATH_PARAMETER.replace(path) { match -> "\${encodeURIComponent(${identifier(match.groupValues[1])})}" } + "`"
            }
        val extras =
            buildList {
                add("...options")
                if (queryParameters.isNotEmpty()) add("query")
                if (requestBody != null) add("body")
            }
        val returnType = responseType(operation, references)
        val streaming = isEventStream(operation)
        val declaredErrors = errorResponses(operation, references)
        return Endpoint(
            name = operation.stringAt("operationId")?.let(::camelCase) ?: conventionalName(path, method),
            parameters = pathParameters,
            source = { key ->
                val arguments = (extras + "operation: '$key'").joinToString()
                val call = if (streaming) "stream" else "request"
                "(${signature.joinToString()}) => $call<$returnType>('${method.uppercase()}', $urlSource, { $arguments })"
            },
            references = references,
            streaming = streaming,
            errorType =
                declaredErrors.values
                    .distinct()
                    .joinToString(" | ")
                    .ifEmpty { null },
            errorStatuses = declaredErrors.keys.toList(),
        )
    }

    private fun errorResponses(
        operation: JsonObject,
        references: MutableSet<String>,
    ): Map<Int, String> =
        operation
            .objectAt("responses")
            .orEmpty()
            .entries
            .mapNotNull { (status, response) ->
                val code = status.toIntOrNull()?.takeIf { it >= 400 } ?: return@mapNotNull null
                val content = response.jsonObject.objectAt("content") ?: return@mapNotNull null
                val schema = preferredSchema(content) ?: return@mapNotNull null
                code to tsType(schema, references)
            }.toMap()
            .toSortedMap()

    private fun responseType(
        operation: JsonObject,
        references: MutableSet<String>,
    ): String {
        val responses = operation.objectAt("responses") ?: return "unknown"
        val success =
            responses.entries
                .filter { (status, _) -> status.startsWith("2") }
                .minByOrNull { (status, _) -> status }
                ?.value
                ?.jsonObject
                ?: return "unknown"
        val content = success.objectAt("content") ?: return "void"
        content.objectAt(EVENT_STREAM)?.let { return it.objectAt("schema")?.let { schema -> tsType(schema, references) } ?: "string" }
        val json = content.keys.firstOrNull { it.contains("json") }
        if (json != null) {
            return content.objectAt(json)?.objectAt("schema")?.let { tsType(it, references) } ?: "unknown"
        }
        return "string"
    }

    private fun isEventStream(operation: JsonObject): Boolean =
        operation
            .objectAt("responses")
            .orEmpty()
            .filterKeys { it.startsWith("2") }
            .values
            .any { (it as? JsonObject)?.objectAt("content")?.containsKey(EVENT_STREAM) == true }

    private fun preferredSchema(content: JsonObject): JsonObject? {
        val key = content.keys.firstOrNull { it.contains("json") } ?: content.keys.firstOrNull()
        return key?.let { content.objectAt(it)?.objectAt("schema") }
    }

    private fun groupName(path: String): String {
        val prefix = prefixes.firstOrNull { path == it || path.startsWith("$it/") }.orEmpty()
        val first =
            path
                .removePrefix(prefix)
                .split('/')
                .firstOrNull { it.isNotEmpty() && !it.startsWith("{") }
        return first?.let(::camelCase)?.let(::identifier) ?: "root"
    }

    private fun conventionalName(
        path: String,
        method: String,
    ): String {
        val prefix = prefixes.firstOrNull { path == it || path.startsWith("$it/") }.orEmpty()
        val segments = path.removePrefix(prefix).split('/').filter { it.isNotEmpty() }
        val statics = segments.filterNot { it.startsWith("{") }.drop(1)
        if (statics.isNotEmpty()) {
            val verb = if (method == "post") "" else method
            return camelCase(verb + statics.joinToString("") { pascalCase(it) })
        }
        val endsWithParameter = segments.lastOrNull()?.startsWith("{") == true
        return when (method) {
            "get" -> if (endsWithParameter) "get" else "list"
            "post" -> "create"
            "put" -> "update"
            else -> method
        }
    }

    private class Endpoint(
        val name: String,
        val parameters: List<String>,
        val source: (String) -> String,
        val references: Set<String>,
        val streaming: Boolean,
        val errorType: String?,
        val errorStatuses: List<Int>,
    )

    private class ErrorEntry(
        val operation: String,
        val type: String,
        val statuses: List<Int>,
    )
}

private fun typeName(raw: String): String =
    raw
        .split(Regex("[^A-Za-z0-9]+"))
        .filter { it.isNotEmpty() }
        .joinToString("") { pascalCase(it) }
        .ifEmpty { "Unnamed" }

private fun pascalCase(value: String): String = camelCase(value).replaceFirstChar { it.uppercase() }

private fun camelCase(value: String): String {
    val parts = value.split(Regex("[^A-Za-z0-9]+")).filter { it.isNotEmpty() }
    return parts
        .mapIndexed { index, part ->
            if (index == 0) part.replaceFirstChar { it.lowercase() } else part.replaceFirstChar { it.uppercase() }
        }.joinToString("")
}

private fun identifier(value: String): String {
    val name = camelCase(value)
    return if (IDENTIFIER.matches(name)) name else "_$name"
}

private fun propertyKey(name: String): String = if (IDENTIFIER.matches(name)) name else "'${name.replace("'", "\\'")}'"

private fun JsonObject.objectAt(key: String): JsonObject? = this[key] as? JsonObject

private fun JsonObject.arrayAt(key: String): JsonArray? = this[key] as? JsonArray

private fun JsonObject.stringAt(key: String): String? = (this[key] as? JsonPrimitive)?.contentOrNull

private fun JsonObject.stringList(key: String): List<String> = arrayAt(key).orEmpty().map { it.jsonPrimitive.content }

private val DATE_FORMATS = linkedMapOf("date" to "IsoDate", "time" to "IsoTime", "date-time" to "IsoDateTime")

private fun dateType(schema: JsonObject): String? = schema.stringAt("format")?.let(DATE_FORMATS::get)

private fun hasDateFormat(element: JsonElement): Boolean =
    when (element) {
        is JsonObject -> dateType(element) != null || element.values.any(::hasDateFormat)
        is JsonArray -> element.any(::hasDateFormat)
        else -> false
    }

private const val LUCIDE_TYPE = "LucideIcon"
private const val REQUIRED_MESSAGE = "Required."
private val CONSTRAINT_KEYWORDS = listOf("minLength", "maxLength", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "pattern")

private enum class ValidationHelper(
    private val file: String,
) {
    ADD_ERROR("add-error.ts"),
    ADD_NESTED("add-nested.ts"),
    MATCHES("matches.ts"),
    ;

    val source: String get() = typeScriptTemplate(file)
}

private const val EVENT_STREAM = "text/event-stream"
