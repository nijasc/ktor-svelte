package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import java.io.File
import java.util.concurrent.TimeUnit

internal const val OPENAPI_FILE = "src/lib/api/openapi.json"
private const val DEEPEST_FIELD = 8
private const val GIT_SECONDS = 30L
private val METHODS = listOf("get", "post", "put", "patch", "delete")
private const val SCHEMA_PREFIX = "#/components/schemas/"

internal class ApiChange(
    val breaking: Boolean,
    val where: String,
    val what: String,
)

private class Field(
    val type: String,
    val required: Boolean,
)

@Suppress("UNCHECKED_CAST")
private fun Any?.asMap(): Map<String, Any?> = this as? Map<String, Any?> ?: emptyMap()

private class Document(
    root: Map<String, Any?>,
) {
    private val schemas = root["components"].asMap()["schemas"].asMap()
    val operations: Map<String, Map<String, Any?>> =
        root["paths"]
            .asMap()
            .flatMap { (path, item) ->
                METHODS.mapNotNull { method -> item.asMap()[method]?.let { "${method.uppercase()} $path" to it.asMap() } }
            }.toMap()

    private fun resolved(schema: Map<String, Any?>): Pair<Map<String, Any?>, String?> {
        val reference = schema["\$ref"] as? String ?: return schema to null
        val name = reference.removePrefix(SCHEMA_PREFIX)
        return schemas[name].asMap() to name
    }

    private fun typeOf(schema: Map<String, Any?>): String {
        val (plain, name) = resolved(schema)
        val options = (plain["oneOf"] ?: plain["anyOf"]) as? List<*>
        val values = plain["enum"] as? List<*>
        return when {
            values != null -> values.filterNotNull().joinToString(" | ")
            options != null -> options.joinToString(" | ") { typeOf(it.asMap()) }
            plain["type"] == "array" -> typeOf(plain["items"].asMap()) + "[]"
            plain["type"] == "object" || plain["properties"] != null -> name ?: "object"
            plain["type"] is List<*> -> (plain["type"] as List<*>).joinToString(" | ")
            else ->
                listOfNotNull(
                    plain["type"]?.toString(),
                    plain["format"]?.toString()?.let { "($it)" },
                ).joinToString(" ").ifEmpty { "any" }
        }
    }

    fun fields(
        schema: Map<String, Any?>?,
        prefix: String = "",
        depth: Int = 0,
        seen: Set<String> = emptySet(),
    ): Map<String, Field> {
        if (schema == null || depth > DEEPEST_FIELD) return emptyMap()
        val (plain, name) = resolved(schema)
        if (name != null && name in seen) return emptyMap()
        val inside = if (name == null) seen else seen + name
        if (plain["type"] == "array") return fields(plain["items"].asMap(), "$prefix[]", depth + 1, inside)
        val required = (plain["required"] as? List<*>).orEmpty().toSet()
        return plain["properties"]
            .asMap()
            .flatMap { (property, of) ->
                val path = if (prefix.isEmpty()) property else "$prefix.$property"
                listOf(path to Field(typeOf(of.asMap()), property in required)) + fields(of.asMap(), path, depth + 1, inside).toList()
            }.toMap()
    }

    fun body(operation: Map<String, Any?>): Map<String, Any?>? =
        operation["requestBody"]
            .asMap()["content"]
            .asMap()
            .values
            .firstOrNull()
            .asMap()["schema"]
            ?.asMap()

    fun answer(operation: Map<String, Any?>): Map<String, Any?>? =
        operation["responses"]
            .asMap()
            .entries
            .filter { it.key.startsWith("2") }
            .minByOrNull { it.key }
            ?.value
            .asMap()["content"]
            .asMap()
            .values
            .firstOrNull()
            .asMap()["schema"]
            ?.asMap()

    fun query(operation: Map<String, Any?>): Map<String, Field> =
        (operation["parameters"] as? List<*>)
            .orEmpty()
            .map { it.asMap() }
            .filter { it["in"] == "query" }
            .associate { it["name"].toString() to Field(typeOf(it["schema"].asMap()), it["required"] == true) }
}

private fun compare(
    where: String,
    before: Map<String, Field>,
    after: Map<String, Field>,
    sentByCaller: Boolean,
): List<ApiChange> =
    buildList {
        (before.keys - after.keys).forEach { name ->
            if (name.substringBeforeLast('.', "") !in before.keys - after.keys) {
                add(ApiChange(!sentByCaller, "$where  $name", if (sentByCaller) "is no longer read" else "removed"))
            }
        }
        (after.keys - before.keys).forEach { name ->
            val field = after.getValue(name)
            val parentIsNew = name.substringBeforeLast('.', "") in after.keys - before.keys
            if (!parentIsNew) {
                val needed = sentByCaller && field.required
                add(ApiChange(needed, "$where  $name", if (needed) "is new and required" else "added"))
            }
        }
        (before.keys intersect after.keys).forEach { name ->
            val old = before.getValue(name)
            val new = after.getValue(name)
            if (old.type != new.type) add(ApiChange(true, "$where  $name", "was ${old.type}, is ${new.type}"))
            if (sentByCaller && !old.required && new.required) add(ApiChange(true, "$where  $name", "is required now"))
            if (!sentByCaller && old.required && !new.required) add(ApiChange(true, "$where  $name", "can be missing now"))
        }
    }

@Suppress("UNCHECKED_CAST")
internal fun apiChanges(
    before: String,
    after: String,
): List<ApiChange> {
    val old = Document(JsonSlurper().parseText(before) as Map<String, Any?>)
    val new = Document(JsonSlurper().parseText(after) as Map<String, Any?>)
    val removed = (old.operations.keys - new.operations.keys).sorted().map { ApiChange(true, it, "removed") }
    val added = (new.operations.keys - old.operations.keys).sorted().map { ApiChange(false, it, "added") }
    val changed =
        (old.operations.keys intersect new.operations.keys).sorted().flatMap { operation ->
            val was = old.operations.getValue(operation)
            val now = new.operations.getValue(operation)
            compare("$operation  query", old.query(was), new.query(now), sentByCaller = true) +
                compare("$operation  request", old.fields(old.body(was)), new.fields(new.body(now)), sentByCaller = true) +
                compare("$operation  response", old.fields(old.answer(was)), new.fields(new.answer(now)), sentByCaller = false)
        }
    return removed + changed + added
}

internal fun apiChangeReport(
    changes: List<ApiChange>,
    against: String,
): String {
    if (changes.isEmpty()) return "ktor-svelte: the API is the same for callers as on $against."
    val (breaking, others) = changes.partition { it.breaking }
    val width = changes.maxOf { it.where.length }

    fun rows(of: List<ApiChange>) = of.joinToString("\n") { "  ${it.where.padEnd(width)}  ${it.what}" }
    return listOfNotNull(
        "API changes against $against: ${breaking.size} that can break callers, ${others.size} other.",
        "Can break callers\n${rows(breaking)}".takeIf { breaking.isNotEmpty() },
        "Other changes\n${rows(others)}".takeIf { others.isNotEmpty() },
    ).joinToString("\n\n")
}

private fun git(
    directory: File,
    vararg arguments: String,
): String? {
    val process =
        runCatching {
            ProcessBuilder(listOf("git") + arguments).directory(directory).redirectError(ProcessBuilder.Redirect.DISCARD).start()
        }.getOrNull() ?: return null
    val output = process.inputStream.bufferedReader().readText()
    if (!process.waitFor(GIT_SECONDS, TimeUnit.SECONDS)) process.destroyForcibly()
    return output.takeIf { process.exitValue() == 0 }
}

@UntrackedTask(because = "Compares the committed OpenAPI document with another git revision")
public abstract class SvelteApiChangesTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Input
    @get:Optional
    @get:Option(option = "against", description = "The git revision to compare with. origin/main unless given.")
    public abstract val against: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "strict", description = "Fails the build when a change can break callers, instead of only listing it")
    public abstract val strict: Property<Boolean>

    @TaskAction
    public fun report() {
        val revision = against.getOrElse("origin/main")
        val frontend = frontendDir.get().asFile
        val current = frontend.resolve(OPENAPI_FILE)
        if (!current.isFile) {
            throw GradleException("There is no $OPENAPI_FILE to compare. Run svelteGenerateTs first." + DocLink.GENERATED_TYPESCRIPT.see())
        }
        val prefix = git(frontend, "rev-parse", "--show-prefix")?.trim()
        if (prefix == null) throw GradleException("svelteApiChanges compares with git, and $frontend is not in a git repository.")
        val before = git(frontend, "show", "$revision:$prefix$OPENAPI_FILE")
        if (before == null) {
            logger.lifecycle("ktor-svelte: $revision has no $prefix$OPENAPI_FILE, so there is nothing to compare with yet.")
            return
        }
        val changes = apiChanges(before, current.readText())
        logger.lifecycle(apiChangeReport(changes, revision))
        if (strict.getOrElse(false) && changes.any { it.breaking }) {
            throw GradleException("${changes.count { it.breaking }} API change(s) against $revision can break callers.")
        }
    }
}
