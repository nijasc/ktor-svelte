package io.github.nijasc.ktor.svelte.internal.typescript

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

    fun generate(openApiJson: String): Map<String, String> {
        val document = Json.parseToJsonElement(openApiJson).jsonObject
        val filtered = withApiPathsOnly(document)
        val schemas = filtered.objectAt("components")?.objectAt("schemas").orEmpty()
        return mapOf(
            "client.ts" to CLIENT_SOURCE,
            "types.ts" to typesSource(schemas) + publicConfigDeclaration(),
            "services.ts" to servicesSource(filtered.objectAt("paths").orEmpty(), schemas.keys + LUCIDE_TYPE),
            "index.ts" to INDEX_SOURCE,
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

    private fun publicConfigDeclaration(): String {
        val schema = publicConfigSchema ?: return ""
        return "\n" + declaration("PublicConfig", Json.parseToJsonElement(schema).jsonObject, mutableSetOf())
    }

    private fun isApiPath(path: String): Boolean =
        excludedPaths.none { path == it || path.startsWith("$it/") } &&
            (prefixes.isEmpty() || prefixes.any { prefix -> prefix == "/" || path == prefix || path.startsWith("$prefix/") })

    private fun typesSource(schemas: Map<String, JsonElement>): String {
        if (schemas.isEmpty() && iconNames.isEmpty()) return "export {};\n"
        val references = mutableSetOf<String>()
        val declarations =
            schemas.toSortedMap().entries.joinToString("\n") { (name, schema) ->
                declaration(typeName(name), schema.jsonObject, references)
            }
        val iconImport =
            if (LUCIDE_TYPE in
                references
            ) {
                "import type { LucideIconName as $LUCIDE_TYPE } from '../ktor-svelte/icons.js';\n\nexport type { $LUCIDE_TYPE };\n\n"
            } else {
                ""
            }
        return iconImport + declarations.ifEmpty { "export {};\n" }
    }

    private fun declaration(
        name: String,
        schema: JsonObject,
        references: MutableSet<String>,
    ): String {
        val properties = schema.objectAt("properties")
        if (properties != null && schema["allOf"] == null) {
            return "export interface $name ${objectBody(schema, references, indent = "")}\n"
        }
        return "export type $name = ${tsType(schema, references)};\n"
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
            "string" -> "string"
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
            if (publicConfigSchema != null) append(PUBLIC_CONFIG_SOURCE)
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

private const val LUCIDE_TYPE = "LucideIcon"
private const val EVENT_STREAM = "text/event-stream"

private const val PUBLIC_CONFIG_SOURCE = """let publicConfig: Promise<PublicConfig> | undefined;

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

"""

private const val INDEX_SOURCE = """export * from './client.js';
export * from './services.js';
export type * from './types.js';
"""

private const val CLIENT_SOURCE = """export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
    fetch?: typeof fetch;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
    fetch?: typeof fetch;
    onUnauthorized?: (response: Response) => void;
}

export const apiConfig: ApiConfig = { baseUrl: '', headers: {} };

export class ApiError<E = unknown> extends Error {
    constructor(
        readonly status: number,
        readonly body: E,
        readonly url: string,
        readonly operation?: string
    ) {
        super(`Request to ${'$'}{url} failed with status ${'$'}{status}`);
        this.name = 'ApiError';
    }
}

export interface ValidationProblem {
    message: string;
    fields: Record<string, string[]>;
}

export function isValidationError(error: unknown): error is ApiError<ValidationProblem> {
    return (
        error instanceof ApiError &&
        error.status === 422 &&
        typeof error.body === 'object' &&
        error.body !== null &&
        'fields' in error.body
    );
}

interface InternalOptions extends RequestOptions {
    query?: Record<string, unknown>;
    body?: unknown;
    operation?: string;
}

function queryString(query: Record<string, unknown> | undefined): string {
    if (!query) return '';
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) params.append(key, String(item));
    }
    const text = params.toString();
    return text ? `?${'$'}{text}` : '';
}

function isRawBody(body: unknown): body is BodyInit {
    return typeof body === 'string' || body instanceof FormData || body instanceof Blob || body instanceof URLSearchParams;
}

async function parseResponse(response: Response): Promise<unknown> {
    if (response.status === 204 || response.status === 205) return undefined;
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) return response.json();
    const text = await response.text();
    return text === '' ? undefined : text;
}

function prepare(method: string, path: string, options: InternalOptions, accept: string) {
    const { query, body, operation, fetch: customFetch, headers, ...init } = options;
    const send = customFetch ?? apiConfig.fetch ?? fetch;
    const url = apiConfig.baseUrl + path + queryString(query);
    const merged = new Headers(apiConfig.headers);
    merged.set('Accept', accept);
    new Headers(headers).forEach((value, key) => merged.set(key, value));
    let payload: BodyInit | undefined;
    if (body !== undefined) {
        payload = isRawBody(body) ? body : JSON.stringify(body);
        if (!isRawBody(body) && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
    }
    return { url, operation, send: () => send(url, { ...init, method, headers: merged, body: payload }) };
}

async function checked(response: Response, url: string, operation: string | undefined): Promise<Response> {
    if (response.status === 401) apiConfig.onUnauthorized?.(response);
    if (!response.ok) throw new ApiError(response.status, await parseResponse(response), url, operation);
    return response;
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    const { url, operation, send } = prepare(method, path, options, 'application/json');
    const response = await checked(await send(), url, operation);
    return (await parseResponse(response)) as T;
}

function eventData<T>(data: string): T {
    try {
        return JSON.parse(data) as T;
    } catch {
        return data as T;
    }
}

export async function* stream<T>(method: string, path: string, options: InternalOptions = {}): AsyncGenerator<T, void, undefined> {
    const { url, operation, send } = prepare(method, path, options, 'text/event-stream');
    const response = await checked(await send(), url, operation);
    if (!response.body) return;
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = '';
    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            const frames = buffer.split(/\r?\n\r?\n/);
            buffer = frames.pop() ?? '';
            for (const frame of frames) {
                const data = frame
                    .split(/\r?\n/)
                    .filter((line) => line.startsWith('data:'))
                    .map((line) => line.slice(5).replace(/^ /, ''))
                    .join('\n');
                if (data !== '') yield eventData<T>(data);
            }
        }
    } finally {
        reader.cancel().catch(() => undefined);
    }
}
"""
