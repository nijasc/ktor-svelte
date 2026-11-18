package io.github.nijasc.ktor.svelte.internal.typescript

import io.github.nijasc.ktor.svelte.internal.validation.ConstraintMessages
import io.github.nijasc.ktor.svelte.internal.validation.RulePresets
import io.github.nijasc.ktor.svelte.internal.validation.formatNumber
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.addJsonObject
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.intOrNull
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import kotlinx.serialization.json.longOrNull
import kotlinx.serialization.json.put
import kotlinx.serialization.json.putJsonArray
import kotlinx.serialization.json.putJsonObject

private val HTTP_METHODS = listOf("get", "post", "put", "patch", "delete", "head", "options")
private val IDENTIFIER = Regex("[A-Za-z_$][A-Za-z0-9_$]*")
private val PATH_PARAMETER = Regex("\\{([^}]+)\\}")
private val prettyJson = Json { prettyPrint = true }

internal const val CURRENT_USER_FILE = "current-user.svelte.ts"
private const val CURRENT_USER_TYPE = "CurrentUser"
private const val CURRENT_USER_STORE = "currentUser"
private const val PERMISSION_TYPE = "Permission"
private const val CAN_FUNCTION = "can"

internal const val GUARDS_FILE = "guards.ts"
private val GUARD_EXPORTS = listOf("guardPages", "signedInUser", "pageGuards")

internal class GuardSpec(
    val page: String,
    val permission: String?,
)

internal const val PREFERENCES_FILE = "preferences.svelte.ts"
private const val PREFERENCES_TYPE = "UserPreferences"
private const val PREFERENCES_STORE = "preferences"

internal class PreferencesType(
    val typeName: String,
    val schema: String,
    val path: String,
    val defaultsJson: String,
    val cookies: Map<String, String>,
)

internal class CurrentUserType(
    val typeName: String,
    val schema: String,
    val path: String,
)

internal class TypeScriptGenerator(
    apiPrefixes: List<String>,
    private val excludedPaths: List<String> = emptyList(),
    private val publicConfigSchema: String? = null,
    iconNames: List<String> = emptyList(),
    private val declaredErrors: List<DeclaredError> = emptyList(),
    private val constants: List<SharedHolder> = emptyList(),
    private val errorCodes: List<String> = emptyList(),
    cookies: List<CookieSpec> = emptyList(),
    private val currentUser: CurrentUserType? = null,
    private val loginPage: String? = null,
    private val permissions: List<String> = emptyList(),
    private val guards: List<GuardSpec> = emptyList(),
    private val preferences: PreferencesType? = null,
    private val errorReportPath: String? = null,
    private val vitalsCall: String? = null,
) {
    private var pageLoads: List<PageLoadSpec> = emptyList()

    private val declaredCookies = cookies
    private val sideSchemas =
        listOfNotNull(publicConfigSchema, currentUser?.schema, preferences?.schema).map { Json.parseToJsonElement(it) }
    private val cookies = cookies.filterNot { it.httpOnly }
    private var componentSchemas: Map<String, JsonElement> = emptyMap()
    private val cookieFile = this.cookies.isNotEmpty() || cookies.any { it.category != null }

    private val iconNames = iconNames.toSet()
    private val prefixes = apiPrefixes.map { "/" + it.trim('/') }
    private var enumTypes: Map<Set<String>, EnumType> = emptyMap()
    private var usesDates = false
    private var usesQuantities = false
    private val validationHelpers = mutableSetOf<ValidationHelper>()
    val operations = mutableListOf<GeneratedOperation>()
    private var routeFiles: Map<String, String> = emptyMap()

    fun generate(
        openApiJson: String,
        routeFiles: Map<String, String> = emptyMap(),
        pageLoads: List<PageLoadSpec> = emptyList(),
    ): Map<String, String> {
        this.routeFiles = routeFiles
        this.pageLoads = pageLoads
        val document = Json.parseToJsonElement(openApiJson).jsonObject
        val filtered = withNullableReferences(withDeclaredErrors(withApiPathsOnly(document)))
        val schemas = filtered.objectAt("components")?.objectAt("schemas").orEmpty()
        componentSchemas = schemas
        enumTypes = nameEnums(filtered, schemas)
        usesDates = hasDateFormat(filtered) || sideSchemas.any { hasDateFormat(it) }
        usesQuantities = hasFormat(filtered, QUANTITY_FORMATS) || sideSchemas.any { hasFormat(it, QUANTITY_FORMATS) }
        val dateTypes =
            (if (usesDates) DATE_FORMATS.values else emptyList()) + (if (usesQuantities) QUANTITY_FORMATS.values else emptyList())
        validationHelpers.clear()
        operations.clear()
        val types =
            typesSource(schemas) + publicConfigDeclaration(schemas) + currentUserDeclaration(schemas) + preferencesDeclaration(schemas)
        val taken =
            schemas.keys.map(::typeName) +
                filtered
                    .objectAt("paths")
                    .orEmpty()
                    .keys
                    .map(::groupName) + SERVICES_MODULE_NAMES
        check(errorCodes.isEmpty() || ERROR_CODE_TYPE !in taken) {
            "errorCodes would be exported as '$ERROR_CODE_TYPE', which a class of your API is already called. Rename that class."
        }
        check(currentUser == null || (CURRENT_USER_TYPE !in taken && CURRENT_USER_STORE !in taken)) {
            "currentUser exports '$CURRENT_USER_STORE' and '$CURRENT_USER_TYPE', and the generated client already uses one of the names. " +
                "Rename the class or the route that takes it."
        }
        check(permissions.isEmpty() || currentUser != null) { "permissions needs currentUser, which says who the permissions belong to." }
        check(permissions.isEmpty() || (PERMISSION_TYPE !in taken && CAN_FUNCTION !in taken)) {
            "permissions exports '$PERMISSION_TYPE' and '$CAN_FUNCTION', and the generated client already uses one of the names. " +
                "Rename the class or the route that takes it."
        }
        check(preferences == null || (PREFERENCES_TYPE !in taken && PREFERENCES_STORE !in taken)) {
            "preferences exports '$PREFERENCES_STORE' and '$PREFERENCES_TYPE', and the generated client already uses one of the names. " +
                "Rename the class or the route that takes it."
        }
        check(guards.isEmpty() || currentUser != null) { "guards needs currentUser, which says who is signed in." }
        check(guards.isEmpty() || GUARD_EXPORTS.none { it in taken }) {
            "guards exports ${GUARD_EXPORTS.joinToString()}, and the generated client already uses one of the names."
        }
        check(cookies.isEmpty() || "cookies" !in taken) {
            "cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies."
        }
        check(cookieCategories(declaredCookies).isEmpty() || "cookieConsent" !in taken) {
            "Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent."
        }
        cookies.groupBy { cookieKey(it.name) }.values.firstOrNull { it.size > 1 }?.let { same ->
            error(
                "The cookies ${same.joinToString(
                    " and ",
                ) { "'${it.name}'" }} would both be called ${cookieKey(same.first().name)} in TypeScript.",
            )
        }
        constants.firstOrNull { it.name in taken }?.let { holder ->
            error(
                "constants(${holder.name}) would be exported as '${holder.name}', which the generated client already uses. Rename the object.",
            )
        }
        return withGitAttributes(
            "client.ts" to typeScriptTemplate(
                "client.ts",
            ) + loginPageSource() + (errorReportPath?.let { "\nreportErrors('$it');\n" } ?: "") + (vitalsCall?.let { "\n$it\n" } ?: ""),
            "form.ts" to typeScriptTemplate("form.ts") + passwordRulesSource(),
            FORM_STATE_FILE to typeScriptTemplate(FORM_STATE_FILE),
            PENDING_WRITES_FILE to typeScriptTemplate(PENDING_WRITES_FILE),
            "types.ts" to
                (if (errorCodes.isEmpty() && permissions.isEmpty()) types else types.removeSuffix("export {};\n")) +
                validationHelpers.sorted().joinToString("") { "\n" + it.source } +
                errorCodeType() +
                constantUnion(PERMISSION_TYPE, permissions),
            "services.ts" to
                servicesSource(
                    filtered.objectAt("paths").orEmpty(),
                    schemas.keys + LUCIDE_TYPE + enumTypes.values.map { it.name } + dateTypes,
                ),
            *(if (pageLoads.isEmpty()) emptyArray() else arrayOf(PAGE_LOADS_FILE to pageLoadsSource(pageLoads, operations))),
            "index.ts" to typeScriptTemplate("index.ts") + (if (constants.isEmpty()) "" else "export * from './constants.js';\n") +
                (if (pageLoads.isEmpty()) "" else "export * from './${PAGE_LOADS_FILE.removeSuffix(".ts")}.js';\n") +
                (if (cookieFile) "export * from './cookies.js';\n" else "") +
                (if (currentUser != null) "export * from './${CURRENT_USER_FILE.removeSuffix(".ts")}.js';\n" else "") +
                (if (guards.isNotEmpty()) "export * from './${GUARDS_FILE.removeSuffix(".ts")}.js';\n" else "") +
                (if (preferences != null) "export * from './${PREFERENCES_FILE.removeSuffix(".ts")}.js';\n" else ""),
            *(if (constants.isEmpty()) emptyArray() else arrayOf(CONSTANTS_FILE to constantsSource(constants))),
            *(if (cookieFile) arrayOf(COOKIES_FILE to cookiesSource(declaredCookies)) else emptyArray()),
            *(currentUser?.let { arrayOf(CURRENT_USER_FILE to currentUserSource(it)) } ?: emptyArray()),
            *(if (guards.isEmpty()) emptyArray() else arrayOf(GUARDS_FILE to guardsSource())),
            *(preferences?.let { arrayOf(PREFERENCES_FILE to preferencesSource(it)) } ?: emptyArray()),
            "openapi.json" to prettyJson.encodeToString(JsonElement.serializer(), filtered) + "\n",
        )
    }

    private fun withGitAttributes(vararg files: Pair<String, String>): Map<String, String> =
        mapOf(*files) +
            (
                GIT_ATTRIBUTES_FILE to
                    "# Generated by ktor-svelte. Do not edit.\n" +
                    "# See https://nijasc.github.io/ktor-svelte/features/typescript\n" +
                    files.joinToString("") { (name, _) -> "$name $GENERATED_FILE_ATTRIBUTES\n" }
            )

    private fun withApiPathsOnly(document: JsonObject): JsonObject {
        val paths =
            document
                .objectAt("paths")
                .orEmpty()
                .filterKeys(::isApiPath)
                .sortedByKey()
        return JsonObject(document + ("paths" to JsonObject(paths)))
    }

    private fun withDeclaredErrors(document: JsonObject): JsonObject {
        if (declaredErrors.isEmpty()) return document
        val components = document.objectAt("components") ?: JsonObject(emptyMap())
        val schemas = components.objectAt("schemas").orEmpty().toMutableMap()
        declaredErrors.forEach { error -> schemas.getOrPut(error.name) { Json.parseToJsonElement(error.schema) } }
        val paths =
            document.objectAt("paths").orEmpty().mapValues { (_, item) ->
                JsonObject(
                    item.jsonObject.mapValues { (key, operation) ->
                        if (key in HTTP_METHODS && operation is JsonObject) withErrorResponses(operation) else operation
                    },
                )
            }
        return JsonObject(
            document + ("paths" to JsonObject(paths)) + ("components" to JsonObject(components + ("schemas" to JsonObject(schemas)))),
        )
    }

    private fun withNullableReferences(document: JsonObject): JsonObject {
        val components = document.objectAt("components") ?: return document
        val schemas = components.objectAt("schemas").orEmpty()
        val nullable =
            schemas
                .filterValues { it is JsonObject && it.isNullableObject() }
                .mapValues { (_, schema) -> JsonObject(schema.jsonObject + ("type" to JsonPrimitive("object"))) }
        if (nullable.isEmpty()) return document
        val plainNames =
            schemas
                .filterKeys { it !in nullable }
                .entries
                .associate { (name, schema) -> (schema as? JsonObject)?.withoutTitle() to name }
        val targets = nullable.mapValues { (name, schema) -> plainNames[schema.withoutTitle()] ?: name }
        val kept =
            schemas
                .filterKeys { targets[it] == null || targets[it] == it }
                .mapValues { (name, schema) -> nullable[name] ?: schema }

        fun rewrite(element: JsonElement): JsonElement =
            when (element) {
                is JsonObject -> {
                    val target = element.stringAt("\$ref")?.substringAfterLast('/')?.let(targets::get)
                    if (target == null) JsonObject(element.mapValues { rewrite(it.value) }) else nullableReference(target)
                }
                is JsonArray -> JsonArray(element.map(::rewrite))
                else -> element
            }
        val withKeptSchemas = JsonObject(components + ("schemas" to JsonObject(kept)))
        return rewrite(JsonObject(document + ("components" to withKeptSchemas))).jsonObject
    }

    private fun JsonObject.isNullableObject(): Boolean =
        typeNames().toSet() == setOf("object", "null") && objectAt("properties").orEmpty().isNotEmpty()

    private fun JsonObject.withoutTitle(): JsonObject = JsonObject(this - "title")

    private fun nullableReference(name: String): JsonObject =
        buildJsonObject {
            putJsonArray("oneOf") {
                addJsonObject { put("\$ref", "#/components/schemas/$name") }
                addJsonObject { put("type", "null") }
            }
        }

    private fun withErrorResponses(operation: JsonObject): JsonObject {
        val responses = operation.objectAt("responses").orEmpty().toMutableMap()
        declaredErrors.forEach { error ->
            val response =
                buildJsonObject {
                    put("description", "")
                    putJsonObject("content") {
                        putJsonObject("application/json") {
                            putJsonObject("schema") { put("\$ref", "#/components/schemas/${error.name}") }
                        }
                    }
                }
            error.statuses.forEach { status -> responses.getOrPut(status.toString()) { response } }
        }
        return JsonObject(operation + ("responses" to JsonObject(responses)))
    }

    private fun publicConfigDeclaration(schemas: Map<String, JsonElement>): String {
        val schema = publicConfigSchema ?: return ""
        return "\n" + declaration("PublicConfig", Json.parseToJsonElement(schema).jsonObject, mutableSetOf(), schemas)
    }

    private fun loginPageSource(): String {
        val page = loginPage ?: return ""
        return "\napiConfig.loginPage = '${page.replace("\\", "\\\\").replace("'", "\\'")}';\n"
    }

    private fun guardsSource(): String {
        val withPermissions = guards.any { it.permission != null }
        val rows =
            guards.sortedBy { it.page }.joinToString("") { guard ->
                val permission = guard.permission?.let { ", permission: ${quoted(it)}" }.orEmpty()
                "    { page: ${quoted(guard.page)}$permission },\n"
            }
        val turnedAway =
            if (loginPage != null) "redirect(307, loginPath(url))" else "error(401, 'Unauthorized')"
        return "import { error${if (loginPage != null) ", redirect" else ""} } from '@sveltejs/kit';\n" +
            "import { ${if (loginPage != null) "loginPath, " else ""}matchGuard, type PageGuard } from './client.js';\n" +
            "import { $CURRENT_USER_STORE } from './${CURRENT_USER_FILE.removeSuffix(".ts")}.js';\n" +
            "import type { ${if (withPermissions) "$CURRENT_USER_TYPE, $PERMISSION_TYPE" else CURRENT_USER_TYPE} } from './types.js';\n\n" +
            "export const pageGuards: readonly PageGuard<${if (withPermissions) PERMISSION_TYPE else "never"}>[] = [\n$rows];\n\n" +
            "export async function signedInUser(url: URL): Promise<$CURRENT_USER_TYPE> {\n" +
            "    const user = await $CURRENT_USER_STORE.load();\n" +
            "    if (!user) $turnedAway;\n" +
            (
                if (withPermissions) {
                    "    const guard = matchGuard(pageGuards, url.pathname);\n" +
                        "    if (guard?.permission && !$CURRENT_USER_STORE.can(guard.permission)) error(403, 'Forbidden');\n"
                } else {
                    ""
                }
            ) +
            "    return user;\n" +
            "}\n\n" +
            "export async function guardPages(event: { url: URL }): Promise<void> {\n" +
            "    if (typeof document === 'undefined' || !matchGuard(pageGuards, event.url.pathname)) return;\n" +
            "    await signedInUser(event.url);\n" +
            "}\n"
    }

    private fun currentUserDeclaration(schemas: Map<String, JsonElement>): String {
        val user = currentUser ?: return ""
        return sideDeclaration(CURRENT_USER_TYPE, user.typeName, user.schema, schemas)
    }

    private fun preferencesDeclaration(schemas: Map<String, JsonElement>): String {
        val declared = preferences ?: return ""
        return sideDeclaration(PREFERENCES_TYPE, declared.typeName, declared.schema, schemas)
    }

    private fun sideDeclaration(
        name: String,
        kotlinName: String,
        schema: String,
        schemas: Map<String, JsonElement>,
    ): String {
        val same = schemas.keys.firstOrNull { typeName(it) == kotlinName }
        if (same != null) return "\nexport type $name = ${typeName(same)};\n"
        return "\n" + declaration(name, Json.parseToJsonElement(schema).jsonObject, mutableSetOf(), schemas)
    }

    private fun preferencesSource(declared: PreferencesType): String {
        val fields =
            Json
                .parseToJsonElement(declared.schema)
                .jsonObject
                .objectAt("properties")
                .orEmpty()
                .keys
        val bound = declared.cookies.filterKeys { it in fields }
        val cookies = bound.entries.joinToString(", ") { (field, cookie) -> "${propertyKey(field)}: ${quoted(cookie)}" }
        val defaults = prettyJson.encodeToString(JsonElement.serializer(), Json.parseToJsonElement(declared.defaultsJson))
        return "import { preferenceStore, type PreferenceState } from './client.js';\n" +
            "import type { $PREFERENCES_TYPE } from './types.js';\n\n" +
            "const defaults: Required<$PREFERENCES_TYPE> = $defaults;\n\n" +
            "const state = \$state<PreferenceState<Required<$PREFERENCES_TYPE>>>({ value: defaults, ready: false });\n\n" +
            "export const $PREFERENCES_STORE = preferenceStore<Required<$PREFERENCES_TYPE>>(" +
            "${quoted(declared.path)}, state, defaults, {${if (cookies.isEmpty()) "" else " $cookies "}});\n"
    }

    private fun currentUserSource(user: CurrentUserType): String {
        val withPermissions = permissions.isNotEmpty()
        val types = if (withPermissions) "$CURRENT_USER_TYPE, $PERMISSION_TYPE" else CURRENT_USER_TYPE
        return "import { userStore, type UserState } from './client.js';\n" +
            "import type { $types } from './types.js';\n\n" +
            "const state = \$state<UserState<$types>>(" +
            "{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });\n\n" +
            "export const $CURRENT_USER_STORE = userStore<$types>('${user.path}', state);\n" +
            if (withPermissions) {
                "\nexport const $CAN_FUNCTION = (permission: $PERMISSION_TYPE): boolean => $CURRENT_USER_STORE.can(permission);\n"
            } else {
                ""
            }
    }

    private fun isApiPath(path: String): Boolean =
        excludedPaths.none { path == it || path.startsWith("$it/") } &&
            (prefixes.isEmpty() || prefixes.any { prefix -> prefix == "/" || path == prefix || path.startsWith("$prefix/") })

    private fun typesSource(schemas: Map<String, JsonElement>): String {
        if (schemas.isEmpty() && iconNames.isEmpty() && enumTypes.isEmpty() && !usesDates && !usesQuantities) return "export {};\n"
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
        val brands = schemas.values.any { isBrand(it.jsonObject) }
        val body =
            listOfNotNull(
                BRAND_SYMBOL.takeIf { brands || usesQuantities },
                typeScriptTemplate("dates.ts").takeIf { usesDates },
                typeScriptTemplate("quantities.ts").takeIf { usesQuantities },
                declarations.ifEmpty { null },
            ).joinToString("\n")
        return iconImport + body.ifEmpty { "export {};\n" }
    }

    private fun declaration(
        name: String,
        schema: JsonObject,
        references: MutableSet<String>,
        schemas: Map<String, JsonElement>,
    ): String {
        val docs = jsDoc(schemaDocs(schema), "")
        val enumValues = enumValues(schema)
        if (enumValues != null && schema["enum"]?.jsonArray?.none { it is JsonNull } == true) {
            return docs + enumDeclaration(name, enumValues)
        }
        if (isBrand(schema)) {
            val plain = tsType(schema, references)
            return docs + "export type $name = $plain & { readonly [brand]: '$name' };\n\n" +
                "export const $name = (value: $plain): $name => value as $name;\n"
        }
        if (hasEmptyFactory(schema)) {
            return docs + "export interface $name ${objectBody(schema, references, indent = "")}\n\n" +
                "export const $name = {\n" +
                "    empty: (): $name => (${emptyObject(schema, schemas, "    ", emptySet())}),\n" +
                boundsSource(schema) +
                validateSource(name, schema, schemas) +
                "};\n"
        }
        val union = docs + "export type $name = ${tsType(schema, references)};\n"
        return union + (discriminatedCompanion(name, schema, schemas) ?: "")
    }

    private fun discriminatedCompanion(
        name: String,
        schema: JsonObject,
        schemas: Map<String, JsonElement>,
    ): String? {
        val property = schema.objectAt("discriminator")?.stringAt("propertyName") ?: return null
        val options = schema.arrayAt("oneOf") ?: schema.arrayAt("anyOf") ?: return null
        val mapped =
            schema
                .objectAt("discriminator")
                ?.objectAt("mapping")
                ?.keys
                ?.toList()
                .orEmpty()
        val values =
            mapped.ifEmpty {
                options.map { option ->
                    val resolved = referencedSchema(option.jsonObject)?.let { schemas[it]?.jsonObject } ?: option.jsonObject
                    val literal =
                        resolved
                            .objectAt("properties")
                            ?.objectAt(property)
                            ?.arrayAt("enum")
                            ?.singleOrNull()
                    (literal as? JsonPrimitive)?.contentOrNull ?: return null
                }
            }
        if (values.isEmpty()) return null
        val key = literal(JsonPrimitive(property))
        val typeList = values.joinToString { literal(JsonPrimitive(it)) }
        return "\nexport const $name = {\n" +
            "    types: [$typeList] as const,\n" +
            "    match: <R>(value: $name, cases: { [K in $name[$key]]: (value: Extract<$name, { ${propertyKey(
                property,
            )}: K }>) => R }): R =>\n" +
            "        (cases[value[$key]] as (value: $name) => R)(value),\n" +
            "};\n"
    }

    private fun boundsSource(schema: JsonObject): String {
        val required = schema.stringList("required")
        val lines =
            schema.objectAt("properties").orEmpty().mapNotNull { (name, value) ->
                val attributes = inputAttributes(value.jsonObject, name in required) + hintAttributes(name, value.jsonObject)
                if (attributes.isEmpty()) {
                    null
                } else {
                    "        ${propertyKey(name)}: { ${attributes.joinToString { (key, attribute) -> "$key: $attribute" }} },"
                }
            }
        if (lines.isEmpty()) return ""
        return "    bounds: {\n${lines.joinToString("\n")}\n    },\n"
    }

    private fun hintAttributes(
        name: String,
        schema: JsonObject,
    ): List<Pair<String, String>> {
        if ("string" !in schema.typeNames() && nonNullOption(schema)?.typeNames()?.contains("string") != true) return emptyList()
        val hint = inputHint(name, schema.stringAt("format") ?: nonNullOption(schema)?.stringAt("format")) ?: return emptyList()
        return listOfNotNull(
            hint.autocomplete?.let { "autocomplete" to literal(JsonPrimitive(it)) },
            hint.type?.let { "type" to literal(JsonPrimitive(it)) },
        )
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
                    RulePresets.forFormat(property.stringAt("format")) != null ||
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
        val preset = RulePresets.forFormat(schema.stringAt("format"))
        val lower = schema.numberAt("minimum")?.let { it to false } ?: schema.numberAt("exclusiveMinimum")?.let { it to true }
        val upper = schema.numberAt("maximum")?.let { it to false } ?: schema.numberAt("exclusiveMaximum")?.let { it to true }
        val lines = mutableListOf<String>()
        if (isRequiredInput(schema, required) && isNumber(schema)) {
            lines += "        if (typeof $access !== 'number' || Number.isNaN($access)) ${fail(REQUIRED_MESSAGE)}"
        }
        if (minLength != null || maxLength != null || pattern != null || preset != null) {
            lines += "        if (typeof $access === 'string') {"
            if (minLength != null || maxLength != null) lines += "            const length = [...$access].length;"
            minLength?.let { lines += "            if (length < $it) ${fail(ConstraintMessages.minLength(it))}" }
            maxLength?.let { lines += "            if (length > $it) ${fail(ConstraintMessages.maxLength(it))}" }
            pattern?.let {
                validationHelpers += ValidationHelper.MATCHES
                lines += "            if (!matches(${literal(JsonPrimitive(it))}, $access)) ${fail(ConstraintMessages.pattern(it))}"
            }
            preset?.let {
                validationHelpers += ValidationHelper.MATCHES
                val passes = it.checks.joinToString(" && ") { check -> "matches(${literal(JsonPrimitive(check.pattern))}, $access)" }
                lines += "            if (!($passes)) ${fail(it.message)}"
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
        schemas.sortedByKey().forEach { (name, schema) ->
            enumValues(schema.jsonObject)?.let { values ->
                named.getOrPut(values.toSet()) { EnumType(typeName(name), values, inline = false) }
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
                        values.getOrPut(enumValues.toSet()) { enumValues }
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

    private fun isBrand(schema: JsonObject): Boolean =
        (schema["type"] as? JsonPrimitive)?.contentOrNull in BRANDED_TYPES &&
            schema["title"] != null &&
            schema.keys.all { it == "type" || it == "title" }

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
            if (isBrand(target)) return "${typeName(raw)}(${emptyValue(target, schemas, indent, visiting + raw)})"
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
            "string" ->
                dateType(schema)?.let { "'' as $it" } ?: quantityType(schema)?.let { "${QUANTITY_EMPTY.getValue(it)} as $it" }
                    ?: "''"
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
                val readonly = if (value.jsonObject.isReadOnly()) "readonly " else ""
                jsDoc(schemaDocs(value.jsonObject), "$indent    ") +
                    "$indent    $readonly${propertyKey(name)}$optional: ${tsType(value.jsonObject, references, "$indent    ")};"
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
            "string" -> (dateType(schema) ?: quantityType(schema))?.also { references += it } ?: "string"
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
            value is JsonPrimitive && value.isString -> quoted(value.content)
            value is JsonPrimitive -> value.content
            else -> "unknown"
        }

    private fun servicesSource(
        paths: Map<String, JsonElement>,
        schemaNames: Set<String>,
    ): String {
        val references = mutableSetOf<String>()
        val groups = linkedMapOf<String, MutableList<Endpoint>>()
        val errors = mutableListOf<ErrorEntry>()
        val uploads = mutableMapOf<String, String>()
        paths.forEach { (path, item) ->
            val pathItem = item.jsonObject
            HTTP_METHODS.forEach { method ->
                pathItem.objectAt(method)?.let { operation ->
                    groups.getOrPut(groupName(path)) { mutableListOf() } += endpoint(path, method, pathItem, operation)
                }
            }
        }
        val exportNames = SERVICES_MODULE_NAMES.toMutableSet().apply { addAll(groups.keys) }
        val serviceBlocks =
            groups.sortedByKey().map { (group, endpoints) ->
                val taken = mutableSetOf<String>()
                val exports = StringBuilder()
                val members =
                    endpoints.joinToString("\n") { endpoint ->
                        references += endpoint.references
                        val name = uniqueName(endpoint.name, endpoint.parameters, taken)
                        val operation = "$group.$name"
                        operations +=
                            GeneratedOperation(
                                operation,
                                endpoint.method,
                                endpoint.path,
                                endpoint.parameters,
                                endpoint.pathTypes,
                                endpoint.optionalSlots,
                                endpoint.needsInput,
                            )
                        endpoint.errorType?.let { errors += ErrorEntry(operation, it, endpoint.errorStatuses) }
                        endpoint.upload?.let { uploads[operation] = it }
                        val exportName = exportName("$group-$name", exportNames)
                        exports.append(jsDoc(endpoint.docs, ""))
                        exports.append("export const $exportName${endpoint.annotation} = ${endpoint.source(operation)};\n")
                        jsDoc(endpoint.docs, "    ") + "    ${propertyKey(name)}: $exportName,"
                    }
                "$exports\nexport const $group = {\n$members\n};\n"
            }
        val typeImports = references.sorted().filter { name -> name in schemaNames.map(::typeName) }
        val base = if (groups.values.flatten().any { it.streaming }) "ApiError, request, stream" else "ApiError, request"
        val clientImports = if (errorCodes.isEmpty()) base else "$base, codeMessages, errorCode"
        return buildString {
            append("import { $clientImports, type RequestOptions } from './client.js';\n")
            val withConfig = if (publicConfigSchema != null) typeImports + "PublicConfig" else typeImports
            val imports = if (errorCodes.isEmpty()) withConfig else (withConfig + ERROR_CODE_TYPE).sorted()
            if (imports.isNotEmpty()) append("import type { ${imports.joinToString()} } from './types.js';\n")
            append("\n")
            serviceBlocks.forEach { block -> append(block).append("\n") }
            append(errorsSource(errors))
            if (errorCodes.isNotEmpty()) append(ERROR_CODE_HELPERS)
            if (uploads.isNotEmpty()) {
                append("export const uploadRules = {\n")
                uploads.entries.sortedBy { it.key }.forEach { (operation, rules) -> append("    '$operation': $rules,\n") }
                append("} as const;\n\n")
            }
            if (publicConfigSchema != null) append(typeScriptTemplate("public-config.ts"))
            append("export const api = { ${groups.keys.sorted().joinToString()} };\n")
            append(typeScriptTemplate("api-with.ts"))
        }
    }

    private fun formType(schema: JsonObject): String? {
        val properties = schema.objectAt("properties")?.takeIf { it.isNotEmpty() } ?: return null
        val required = schema.stringList("required").toSet()

        fun isFile(field: JsonObject): Boolean = field.stringAt("type") == "string" && field.stringAt("format") == "binary"
        val fields =
            properties.entries.joinToString("; ") { (name, field) ->
                val of = field.jsonObject
                val type =
                    when {
                        isFile(of) -> "File"
                        of.stringAt("type") == "array" && of.objectAt("items")?.let(::isFile) == true -> "File[]"
                        else -> "string"
                    }
                "${propertyKey(name)}${if (name in required) "" else "?"}: $type"
            }
        return "{ $fields }"
    }

    private fun uploadRulesLiteral(rules: JsonObject): String {
        val parts =
            listOfNotNull(
                rules["maxBytes"]?.jsonPrimitive?.longOrNull?.let { "maxBytes: $it" },
                rules
                    .arrayAt(
                        "types",
                    )?.map { quoted(it.jsonPrimitive.content) }
                    ?.takeIf { it.isNotEmpty() }
                    ?.let { "types: [${it.joinToString()}]" },
                rules["maxFiles"]?.jsonPrimitive?.intOrNull?.let { "maxFiles: $it" },
            )
        return "{ ${parts.joinToString()} }"
    }

    private fun errorCodeType(): String = constantUnion(ERROR_CODE_TYPE, errorCodes)

    private fun passwordRulesSource(): String {
        val rules =
            RulePresets.strongPassword.checks.joinToString("") { check ->
                "    { pattern: ${literal(JsonPrimitive(check.pattern))}, requirement: ${literal(JsonPrimitive(check.requirement))} },\n"
            }
        return "\nexport interface PasswordRule {\n    readonly pattern: string;\n    readonly requirement: string;\n}\n\n" +
            "export const passwordRules: readonly PasswordRule[] = [\n$rules];\n\n" +
            "export const passwordMessage = ${literal(JsonPrimitive(RulePresets.strongPassword.message))};\n\n" +
            "export interface PasswordStrength {\n    readonly met: readonly PasswordRule[];\n" +
            "    readonly missing: readonly PasswordRule[];\n    readonly score: number;\n    readonly strong: boolean;\n}\n\n" +
            "export function passwordStrength(password: string): PasswordStrength {\n" +
            "    const met = passwordRules.filter((rule) => new RegExp(rule.pattern).test(password));\n" +
            "    const missing = passwordRules.filter((rule) => !met.includes(rule));\n" +
            "    return { met, missing, score: met.length / passwordRules.length, strong: missing.length === 0 };\n}\n"
    }

    private fun constantUnion(
        name: String,
        values: List<String>,
    ): String {
        if (values.isEmpty()) return ""
        val union = values.joinToString(" | ") { quoted(it) }
        val members = values.joinToString("") { "    ${propertyKey(it)}: ${quoted(it)},\n" }
        return "\nexport type $name = $union;\n\nexport const $name = {\n$members} as const;\n"
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

    private fun exportName(
        value: String,
        taken: MutableSet<String>,
    ): String {
        val base = identifier(value)
        val free = generateSequence(1) { it + 1 }.map { if (it == 1) base else "$base$it" }.first { it !in taken }
        taken += free
        return free
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
        val pathTypes = mutableListOf<String>()

        pathParameters.forEach { parameter ->
            val schema = declared.firstOrNull { it.stringAt("name") == parameter && it.stringAt("in") == "path" }?.objectAt("schema")
            val type = schema?.let { tsType(it, references) }?.takeUnless { it == "unknown" || it == "string" } ?: "string | number"
            signature += "${parameterName(parameter)}: $type"
            pathTypes += type
        }

        val requestBody = operation.objectAt("requestBody")
        val bodyContent = requestBody?.objectAt("content")
        val multipart = bodyContent?.entries?.firstOrNull { it.key.startsWith(MULTIPART_PREFIX) }
        val formFields =
            multipart
                ?.value
                ?.let { it as? JsonObject }
                ?.objectAt("schema")
                ?.let(::formType)
        val bodyType =
            if (multipart != null) {
                formFields ?: "FormData"
            } else {
                bodyContent?.let { preferredSchema(it) }?.let { tsType(it, references) }
            }
        val computed = if (multipart == null) bodyContent?.let { preferredSchema(it) }?.let(::readOnlyProperties).orEmpty() else emptyList()
        val writableBody = if (computed.isEmpty()) bodyType else "Omit<$bodyType, ${computed.joinToString(" | ") { quoted(it) }}>"
        if (requestBody != null) signature += "body: ${writableBody ?: "unknown"}"

        val sparse = operation.objectAt(FIELDS_EXTENSION)
        val sparseNames =
            sparse
                ?.arrayAt("fields")
                ?.mapNotNull { (it as? JsonPrimitive)?.contentOrNull }
                .orEmpty()
        val sparseUnion = sparseNames.joinToString(" | ") { quoted(it) }.ifEmpty { null }
        val include = operation.objectAt(INCLUDE_EXTENSION)
        val relations = include?.objectAt("relations").orEmpty()
        val includeUnion = relations.keys.joinToString(" | ") { quoted(it) }.ifEmpty { null }
        val shaped = sparseUnion != null || includeUnion != null
        val queryParameters =
            declared.filter { parameter ->
                val name = parameter.stringAt("name")
                parameter.stringAt("in") == "query" &&
                    !(sparseUnion != null && name == "fields") &&
                    !(includeUnion != null && name == "include")
            }
        var queryIndex = -1
        var narrowedQuery = ""
        if (queryParameters.isNotEmpty() || shaped) {
            val fields =
                queryParameters.map { parameter ->
                    val required = parameter["required"]?.jsonPrimitive?.contentOrNull == "true"
                    val type = parameter.objectAt("schema")?.let { tsType(it, references) }?.takeUnless { it == "unknown" } ?: "string"
                    "${propertyKey(parameter.stringAt("name").orEmpty())}${if (required) "" else "?"}: $type"
                }
            val anyRequired = queryParameters.any { it["required"]?.jsonPrimitive?.contentOrNull == "true" }
            val query = "query${if (anyRequired) "" else "?"}"
            queryIndex = signature.size
            val asked =
                listOfNotNull(sparseUnion?.let { "fields?: readonly ($it)[]" }, includeUnion?.let { "include?: readonly ($it)[]" })
            val narrowedAsked =
                listOfNotNull(
                    "fields?: readonly F[]".takeIf { sparseUnion != null },
                    "include?: readonly I[]".takeIf { includeUnion != null },
                )
            signature += "$query: { ${(fields + asked).joinToString("; ")} }"
            narrowedQuery = "$query: { ${(fields + narrowedAsked).joinToString("; ")} }"
        }
        val headerParameters =
            declared.filter { it.stringAt("in") == "header" && it.stringAt("name").orEmpty().lowercase() !in MANAGED_HEADERS }
        if (headerParameters.isNotEmpty()) {
            val fields =
                headerParameters.joinToString("; ") { parameter ->
                    val required = parameter["required"]?.jsonPrimitive?.contentOrNull == "true"
                    val type =
                        parameter.objectAt("schema")?.let { tsType(it, references) }?.takeUnless { it == "unknown" } ?: "string"
                    "${quoted(parameter.stringAt("name").orEmpty())}${if (required) "" else "?"}: $type"
                }
            val anyRequired = headerParameters.any { it["required"]?.jsonPrimitive?.contentOrNull == "true" }
            signature += "headers${if (anyRequired) "" else "?"}: { $fields }"
        }
        signature += "options?: RequestOptions"

        val urlSource = if (pathParameters.isEmpty()) quoted(path) else urlTemplate(path)
        val upload = operation.objectAt(UPLOAD_EXTENSION)?.let(::uploadRulesLiteral)
        val timeout =
            operation[TIMEOUT_EXTENSION]
                ?.jsonPrimitive
                ?.contentOrNull
                ?.toDoubleOrNull()
                ?.toLong()
                ?.takeIf { it > 0 }
        val extras =
            buildList {
                if (timeout != null) add("timeout: $timeout")
                add("...options")
                if (queryParameters.isNotEmpty() || shaped) add("query")
                if (headerParameters.isNotEmpty()) add("typedHeaders: headers")
                if (requestBody != null) add("body")
                if (computed.isNotEmpty()) add("omit: [${computed.joinToString { quoted(it) }}]")
                if (upload != null) add("upload: $upload")
                if (formFields != null) add("multipart: true")
            }
        val itemType = sparse?.stringAt("type") ?: include?.stringAt("type")
        val fullType = responseType(operation, references)
        val streaming = isEventStream(operation)
        val annotation =
            if (shaped && itemType != null && !streaming && queryIndex >= 0) {
                val base = if (sparseUnion != null) "Pick<$itemType, F>" else itemType
                val relationTypes =
                    relations.entries.joinToString("; ") { (name, schema) ->
                        "${propertyKey(name)}: ${(schema as? JsonObject)?.let { tsType(it, references) } ?: "unknown"}"
                    }
                val item = if (includeUnion != null) "($base & Pick<{ $relationTypes }, I>)" else base
                val narrowedType = Regex("\\b${Regex.escape(itemType)}\\b").replace(fullType, item)
                val narrowed = signature.toMutableList().also { it[queryIndex] = narrowedQuery }
                val generics =
                    listOfNotNull(sparseUnion?.let { "F extends $it = $it" }, includeUnion?.let { "I extends $it = never" }).joinToString()
                ": {\n    <$generics>(${narrowed.joinToString()}): Promise<$narrowedType>;\n" +
                    "    (${signature.joinToString()}): Promise<$fullType>;\n}"
            } else {
                ""
            }
        val returnType = fullType
        val declaredErrors = errorResponses(operation, references)
        return Endpoint(
            method = method.uppercase(),
            path = path,
            name = operation.stringAt("operationId")?.let(::camelCase) ?: conventionalName(path, method),
            docs =
                listOfNotNull(operation.stringAt("summary"), operation.stringAt("description"))
                    .map(String::trim)
                    .filter(String::isNotEmpty)
                    .distinct() +
                    listOfNotNull(
                        DEPRECATED_TAG.takeIf { operation.isDeprecated() },
                        routeFiles["${method.uppercase()} $path"]?.let { "@see $it" },
                    ),
            parameters = pathParameters,
            pathTypes = pathTypes,
            optionalSlots = signature.size - pathParameters.size - 1,
            needsInput = signature.drop(pathParameters.size).dropLast(1).any { !it.substringBefore(':').endsWith("?") },
            source = { key ->
                val arguments = (extras + "operation: '$key'").joinToString()
                val call = if (streaming) "stream" else "request"
                "(${signature.joinToString()}) => $call<$returnType>('${method.uppercase()}', $urlSource, { $arguments })"
            },
            annotation = annotation,
            references = references,
            streaming = streaming,
            upload = upload,
            errorType =
                declaredErrors.values
                    .distinct()
                    .joinToString(" | ")
                    .ifEmpty { null },
            errorStatuses = declaredErrors.keys.toList(),
        )
    }

    private fun readOnlyProperties(schema: JsonObject): List<String> {
        val target =
            schema.stringAt("\$ref")?.let { componentSchemas[it.substringAfterLast('/')] as? JsonObject } ?: schema
        return target
            .objectAt("properties")
            .orEmpty()
            .filterValues { (it as? JsonObject)?.isReadOnly() == true }
            .keys
            .toList()
    }

    private fun urlTemplate(path: String): String =
        buildString {
            append('`')
            var end = 0
            PATH_PARAMETER.findAll(path).forEach { match ->
                append(templateText(path.substring(end, match.range.first)))
                append("\${encodeURIComponent(${parameterName(match.groupValues[1])})}")
                end = match.range.last + 1
            }
            append(templateText(path.substring(end)))
            append('`')
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
            .sortedByKey()

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
        return first?.let { identifier(it, SERVICES_MODULE_NAMES) } ?: "root"
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

    private fun schemaDocs(schema: JsonObject): List<String> =
        listOfNotNull(schema.stringAt("description")?.trim()?.ifEmpty { null }, DEPRECATED_TAG.takeIf { schema.isDeprecated() })

    private fun jsDoc(
        lines: List<String>,
        indent: String,
    ): String {
        if (lines.isEmpty()) return ""
        val text = lines.joinToString("\n\n").replace("*/", "*\\/").lines()
        if (text.size == 1) return "$indent/** ${text.single()} */\n"
        return "$indent/**\n" + text.joinToString("") { line -> "$indent *${if (line.isEmpty()) "" else " $line"}\n" } + "$indent */\n"
    }

    private class Endpoint(
        val method: String,
        val path: String,
        val name: String,
        val docs: List<String>,
        val parameters: List<String>,
        val source: (String) -> String,
        val references: Set<String>,
        val streaming: Boolean,
        val upload: String?,
        val errorType: String?,
        val errorStatuses: List<Int>,
        val pathTypes: List<String> = emptyList(),
        val optionalSlots: Int = 0,
        val needsInput: Boolean = false,
        val annotation: String = "",
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
        .let { if (it.first().isDigit()) "_$it" else it }

private fun pascalCase(value: String): String = camelCase(value).replaceFirstChar { it.uppercase() }

private fun camelCase(value: String): String {
    val parts = value.split(Regex("[^A-Za-z0-9]+")).filter { it.isNotEmpty() }
    return parts
        .mapIndexed { index, part ->
            if (index == 0) part.replaceFirstChar { it.lowercase() } else part.replaceFirstChar { it.uppercase() }
        }.joinToString("")
}

private fun identifier(
    value: String,
    taken: Set<String> = emptySet(),
): String {
    val name = camelCase(value)
    return if (IDENTIFIER.matches(name) && name !in RESERVED_WORDS && name !in taken) name else "_$name"
}

private fun parameterName(value: String): String = identifier(value, ENDPOINT_ARGUMENTS)

private fun propertyKey(name: String): String = if (IDENTIFIER.matches(name)) name else quoted(name)

private fun quoted(value: String): String =
    buildString {
        append('\'')
        value.forEach { character ->
            when {
                character == '\\' -> append("\\\\")
                character == '\'' -> append("\\'")
                character == '\n' -> append("\\n")
                character == '\r' -> append("\\r")
                character < ' ' || character == ' ' || character == ' ' -> append("\\u" + character.code.toString(16).padStart(4, '0'))
                else -> append(character)
            }
        }
        append('\'')
    }

private const val DEPRECATED_TAG = "@deprecated"

private fun JsonObject.isDeprecated(): Boolean = (this["deprecated"] as? JsonPrimitive)?.booleanOrNull == true

private fun JsonObject.isReadOnly(): Boolean = (this["readOnly"] as? JsonPrimitive)?.booleanOrNull == true

private fun JsonObject.objectAt(key: String): JsonObject? = this[key] as? JsonObject

private fun <K : Comparable<K>, V> Map<K, V>.sortedByKey(): Map<K, V> = entries.sortedBy { it.key }.associate { it.key to it.value }

private fun JsonObject.arrayAt(key: String): JsonArray? = this[key] as? JsonArray

private fun JsonObject.stringAt(key: String): String? = (this[key] as? JsonPrimitive)?.contentOrNull

private fun JsonObject.stringList(key: String): List<String> = arrayAt(key).orEmpty().map { it.jsonPrimitive.content }

private val DATE_FORMATS = linkedMapOf("date" to "IsoDate", "time" to "IsoTime", "date-time" to "IsoDateTime")

private fun dateType(schema: JsonObject): String? = schema.stringAt("format")?.let(DATE_FORMATS::get)

internal const val DECIMAL_FORMAT = "decimal"
private val QUANTITY_FORMATS = linkedMapOf("duration" to "IsoDuration", DECIMAL_FORMAT to "Decimal")
private val QUANTITY_EMPTY = mapOf("IsoDuration" to "'PT0S'", "Decimal" to "'0'")

private fun quantityType(schema: JsonObject): String? = schema.stringAt("format")?.let(QUANTITY_FORMATS::get)

private fun hasFormat(
    element: JsonElement,
    formats: Map<String, String>,
): Boolean =
    when (element) {
        is JsonObject -> element.stringAt("format") in formats || element.values.any { hasFormat(it, formats) }
        is JsonArray -> element.any { hasFormat(it, formats) }
        else -> false
    }

private fun hasDateFormat(element: JsonElement): Boolean =
    when (element) {
        is JsonObject -> dateType(element) != null || element.values.any(::hasDateFormat)
        is JsonArray -> element.any(::hasDateFormat)
        else -> false
    }

private const val LUCIDE_TYPE = "LucideIcon"
internal const val GIT_ATTRIBUTES_FILE = ".gitattributes"
private const val BRAND_SYMBOL = "declare const brand: unique symbol;\n"
private val BRANDED_TYPES = setOf("string", "integer", "number")
internal const val UPLOAD_EXTENSION = "x-ktor-svelte-upload"
internal const val TIMEOUT_EXTENSION = "x-ktor-svelte-timeout"
internal const val FIELDS_EXTENSION = "x-ktor-svelte-fields"
internal const val INCLUDE_EXTENSION = "x-ktor-svelte-include"
private const val ERROR_CODE_TYPE = "ErrorCode"
private val ERROR_CODE_HELPERS =
    """
    |export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    |    return errorCode(error) === code;
    |}
    |
    |export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    |    Object.assign(codeMessages, messages);
    |}
    |
    |
    """.trimMargin()
internal const val FORM_STATE_FILE = "form-state.svelte.ts"
internal const val PENDING_WRITES_FILE = "pending-writes.svelte.ts"
private const val GENERATED_FILE_ATTRIBUTES = "text eol=lf linguist-generated merge=ktor-svelte"
private val TEMPLATE_EXPORT =
    Regex("^export (?:async )?(?:function\\*?|const|let|class) +([A-Za-z_$][A-Za-z0-9_$]*)", RegexOption.MULTILINE)
private val SERVICES_MODULE_NAMES by lazy {
    setOf(
        "api",
        "request",
        "stream",
        "ApiError",
        "errorStatuses",
        "isApiError",
        "publicConfig",
        "loadPublicConfig",
        "uploadRules",
        "hasErrorCode",
        "setCodeMessages",
        "passwordRules",
        "passwordMessage",
        "passwordStrength",
    ) +
        listOf("client.ts", "form.ts", "public-config.ts", "api-with.ts").flatMap { template ->
            TEMPLATE_EXPORT.findAll(typeScriptTemplate(template)).map { it.groupValues[1] }
        }
}
private val ENDPOINT_ARGUMENTS = setOf("body", "query", "headers", "options", "encodeURIComponent")
private val MANAGED_HEADERS =
    setOf("accept", "content-type", "content-length", "cookie", "x-request-id", "idempotency-key", "x-time-zone")
private val RESERVED_WORDS =
    setOf(
        "arguments",
        "await",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "eval",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "function",
        "if",
        "implements",
        "import",
        "in",
        "instanceof",
        "interface",
        "let",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "return",
        "static",
        "super",
        "switch",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        "yield",
    )
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
private const val MULTIPART_PREFIX = "multipart/"

internal data class DeclaredError(
    val name: String,
    val schema: String,
    val statuses: List<Int>,
)

internal data class GeneratedOperation(
    val name: String,
    val method: String,
    val path: String,
    val pathParameters: List<String> = emptyList(),
    val pathTypes: List<String> = emptyList(),
    val optionalSlots: Int = 0,
    val needsInput: Boolean = false,
)

internal data class SourceLocation(
    val file: String,
    val line: Int,
)
