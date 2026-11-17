package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.propertyName
import io.github.nijasc.ktor.svelte.gradle.libraries.routeOf
import org.gradle.api.GradleException

private val OPERATION =
    Regex(
        """export const \w+ = \(([^)]*)\) =>\s*request<(.+?)>\('(GET|POST|PUT|PATCH|DELETE)', [`']([^`']*)[`'], \{.*operation: '([\w.]+)'""",
    )
private val FIELD = Regex("""^ {4}(\w+)(\?)?: (.+);$""")
private val BOUND = Regex("""^ {8}(\w+): \{""")
private val FORM_KINDS = setOf("string", "number", "boolean")
private const val SHOWN_COLUMNS = 4

internal class CrudField(
    val name: String,
    val type: String,
) {
    val kind: String get() = type.removeSuffix(" | null")
    val label: String get() = name.replace(Regex("(?<=[a-z0-9])(?=[A-Z])"), " ").lowercase().replaceFirstChar(Char::uppercase)
}

internal class CrudOperation(
    val name: String,
    val answer: String,
    val path: String,
    val parameters: Map<String, String>,
)

internal class CrudPlan(
    val type: String,
    val group: String,
    val folder: String,
    val operations: Map<String, CrudOperation>,
    val fields: List<CrudField>,
    val inputType: String?,
    val inputFields: List<CrudField>,
    val bounds: Set<String>,
    val validates: Boolean,
    val typedRoutes: Boolean,
    val translated: Boolean,
) {
    val item: String = type.replaceFirstChar(Char::lowercase)
    val paged: Boolean get() = operations.getValue("list").answer.startsWith("PageOf<")
    val numericId: Boolean get() = fields.first { it.name == "id" }.kind == "number"
    val formFields: List<CrudField> get() = inputFields.filter { it.kind in FORM_KINDS }
    val skippedFields: List<CrudField> get() = inputFields.filterNot { it.kind in FORM_KINDS }
    val shownFields: List<CrudField> get() = fields.filter { it.kind in FORM_KINDS && it.name != "id" }
    val title: String = group.replace(Regex("(?<=[a-z0-9])(?=[A-Z])"), " ").lowercase().replaceFirstChar(Char::uppercase)
    private val key: String = group.replace(Regex("(?<=[a-z0-9])(?=[A-Z])"), "-").lowercase()

    fun has(operation: String): Boolean = operation in operations

    val texts: Map<String, String> =
        buildMap {
            put("$key-title", title)
            put("$key-empty", "Nothing here yet.")
            put("$key-open", "Open")
            put("$key-back", "Back to the list")
            if (has("create")) put("$key-new", "New ${item.lowercase()}")
            if (has("create") || has("update")) put("$key-save", "Save")
            if (has("delete")) put("$key-delete", "Delete")
            (fields + inputFields)
                .distinctBy {
                    it.name
                }.filter { it.kind in FORM_KINDS }
                .forEach { put("$key-field-${it.name.lowercase()}", it.label) }
        }

    fun text(name: String): String {
        val full = "$key-$name"
        return if (translated) "{m.${propertyName(full)}()}" else texts.getValue(full)
    }

    fun label(field: CrudField): String = text("field-${field.name.lowercase()}")

    private fun page(sub: String): String = if (sub.isEmpty()) folder else "$folder/$sub"

    private fun url(sub: String): String =
        routeOf(page(sub)).let { route ->
            "/" +
                route.id
                    .split('/')
                    .filterNot { it.startsWith("(") }
                    .joinToString("/")
        }

    fun listLink(): String = if (typedRoutes) "{routes.${routeOf(folder).name}()}" else "\"${url("")}\""

    fun newLink(): String = if (typedRoutes) "{routes.${routeOf(page("new")).name}()}" else "\"${url("new")}\""

    fun itemLink(id: String): String = if (typedRoutes) "{routes.${routeOf(page("[id]")).name}({ id: $id })}" else "\"${url("")}/{$id}\""

    fun listTarget(): String = if (typedRoutes) "routes.${routeOf(folder).name}()" else "'${url("")}'"

    fun itemTarget(id: String): String = if (typedRoutes) "routes.${routeOf(page("[id]")).name}({ id: $id })" else "`${url("")}/\${$id}`"

    fun imports(vararg own: String): String =
        (
            own.toList() +
                listOfNotNull(
                    "import { m } from '#i18n';".takeIf { translated },
                    "import { routes } from '#routes';".takeIf { typedRoutes },
                )
        ).joinToString("") { "    $it\n" }
}

private fun block(
    source: String,
    opening: String,
): List<String>? {
    val lines = source.lines()
    val start = lines.indexOf(opening)
    if (start < 0) return null
    return lines.drop(start + 1).takeWhile { it != "}" && it != "};" }
}

internal fun crudPlan(
    type: String,
    services: String,
    types: String,
    folder: String?,
    typedRoutes: Boolean,
    translated: Boolean,
): CrudPlan {
    val all =
        services
            .lineSequence()
            .mapNotNull { line ->
                val (signature, answer, _, path, operation) = OPERATION.find(line)?.destructured ?: return@mapNotNull null
                val parameters =
                    signature.split(',').filter { ':' in it }.associate {
                        it.substringBefore(':').trim().removeSuffix("?") to
                            it.substringAfter(':').trim()
                    }
                operation to CrudOperation(operation.substringAfterLast('.'), answer, path, parameters)
            }.toMap()
    val listed =
        all.entries.firstOrNull { (operation, found) -> operation.endsWith(".list") && found.answer in setOf("$type[]", "PageOf<$type>") }
            ?: throw GradleException(
                "The generated client has no route that lists $type. Add one, such as resource<$type>(\"/api/...\") { list { } }, " +
                    "run svelteGenerateTs, and try again." + DocLink.GENERATED_TYPESCRIPT.see(),
            )
    val group = listed.key.substringBeforeLast('.')
    if ('.' in
        group
    ) {
        throw GradleException("svelteAdd --crud works for routes one level below the API prefix, but $type is listed by api.$group.")
    }
    val operations =
        listOf("list", "get", "create", "update", "delete").mapNotNull { name -> all["$group.$name"]?.let { name to it } }.toMap()
    val fields = fieldsOf(types, type) ?: throw GradleException("types.ts has no interface $type. Run svelteGenerateTs and try again.")
    if (fields.none { it.name == "id" }) throw GradleException("$type has no id field, which the pages need to tell one from another.")
    val inputType = (operations["create"] ?: operations["update"])?.parameters?.get("body")
    val helper = inputType?.let { block(types, "export const $it = {") }.orEmpty()
    val boundsAt = helper.indexOf("    bounds: {")
    val bounds =
        if (boundsAt <
            0
        ) {
            emptySet()
        } else {
            helper
                .drop(boundsAt + 1)
                .takeWhile { it != "    }," }
                .mapNotNull { BOUND.find(it)?.groupValues?.get(1) }
                .toSet()
        }
    val path =
        listed.value.path
            .trim('/')
            .substringAfter('/', "")
    return CrudPlan(
        type = type,
        group = group,
        folder = folder ?: path.ifEmpty { group },
        operations = operations,
        fields = fields,
        inputType = inputType,
        inputFields = inputType?.let { fieldsOf(types, it) }.orEmpty(),
        bounds = bounds,
        validates = helper.any { it.startsWith("    validate:") },
        typedRoutes = typedRoutes,
        translated = translated,
    )
}

private fun fieldsOf(
    types: String,
    name: String,
): List<CrudField>? =
    block(types, "export interface $name {")?.mapNotNull { line ->
        FIELD.find(line)?.let { CrudField(it.groupValues[1], it.groupValues[3]) }
    }

private fun idArgument(
    plan: CrudPlan,
    operation: String,
    text: String,
): String = if (plan.operations.getValue(operation).parameters["id"] == "number" && !plan.numericId) "Number($text)" else text

private fun formFieldsSource(plan: CrudPlan): String =
    plan.formFields.joinToString("") { field ->
        val id = "${plan.item}-${field.name}"
        val bounds = if (field.name in plan.bounds) "bounds: ${plan.inputType}.bounds.${field.name}, " else ""
        val use = "use:field={{ ${bounds}errors: form.errors.${field.name} }}"
        val input =
            when (field.kind) {
                "boolean" -> "<input id=\"$id\" class=\"checkbox\" type=\"checkbox\" bind:checked={form.draft.${field.name}} />"
                "number" -> "<input id=\"$id\" class=\"input w-full\" type=\"number\" bind:value={form.draft.${field.name}} $use />"
                else -> "<input id=\"$id\" class=\"input w-full\" bind:value={form.draft.${field.name}} $use />"
            }
        "    <label class=\"grid gap-1\" for=\"$id\">\n        <span>${plan.label(field)}</span>\n        $input\n    </label>\n"
    }

private fun formSource(
    plan: CrudPlan,
    handler: String,
): String =
    "<form class=\"grid max-w-md gap-3\" novalidate onsubmit={$handler}>\n" +
        formFieldsSource(plan) +
        "    {#if form.message}<p class=\"text-error\" role=\"alert\">{form.message}</p>{/if}\n" +
        "    <button class=\"btn btn-primary\" type=\"submit\" disabled={form.submitting}>${plan.text("save")}</button>\n" +
        "</form>\n"

private fun formStateSource(plan: CrudPlan): String {
    val options = if (plan.validates) ", { validate: ${plan.inputType}.validate }" else ""
    return "    const form = formState<${plan.inputType}>(${plan.inputType}.empty()$options);\n"
}

private fun head(plan: CrudPlan): String = "<svelte:head>\n    <title>${plan.text("title")}</title>\n</svelte:head>\n\n"

private fun listLoad(plan: CrudPlan): String {
    val call = "await apiWith(event).${plan.group}.list()"
    return "import { apiWith } from '#api';\nimport type { PageLoad } from './\$types';\n\nexport const ssr = false;\n\n" +
        "export const load: PageLoad = async (event) => {\n" +
        "    return { ${plan.group}: ${if (plan.paged) "($call).items" else call} };\n" +
        "};\n"
}

private fun listPage(plan: CrudPlan): String {
    val removes = plan.has("delete")
    val idType = if (plan.numericId) "number" else "string"
    val columns = plan.shownFields.take(SHOWN_COLUMNS)
    val script =
        "<script lang=\"ts\">\n" +
            (if (removes) "    import { invalidateAll } from '\$app/navigation';\n    import { api } from '#api';\n" else "") +
            plan.imports("import type { PageProps } from './\$types';") +
            "\n    let { data }: PageProps = \$props();\n" +
            (
                if (removes) {
                    "\n    async function remove(id: $idType) {\n" +
                        "        await api.${plan.group}.delete(${idArgument(plan, "delete", "id")});\n" +
                        "        await invalidateAll();\n    }\n"
                } else {
                    ""
                }
            ) +
            "</script>\n\n"
    val open = if (plan.has("get")) "<a class=\"link\" href=${plan.itemLink("${plan.item}.id")}>${plan.text("open")}</a>" else ""
    val delete =
        if (removes) {
            "<button class=\"btn btn-sm\" type=\"button\" onclick={() => remove(${plan.item}.id)}>${plan.text(
                "delete",
            )}</button>"
        } else {
            ""
        }
    return script + head(plan) +
        "<h1 class=\"mb-4 text-3xl font-bold\">${plan.text("title")}</h1>\n" +
        (
            if (plan.has(
                    "create",
                )
            ) {
                "<p class=\"mb-4\"><a class=\"btn btn-primary\" href=${plan.newLink()}>${plan.text("new")}</a></p>\n"
            } else {
                ""
            }
        ) +
        "\n{#if data.${plan.group}.length === 0}\n    <p>${plan.text("empty")}</p>\n{:else}\n" +
        "    <table class=\"table\">\n        <thead>\n            <tr>\n" +
        columns.joinToString("") { "                <th>${plan.label(it)}</th>\n" } +
        "                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n" +
        "            {#each data.${plan.group} as ${plan.item} (${plan.item}.id)}\n                <tr>\n" +
        columns.joinToString("") { "                    <td>{${plan.item}.${it.name}}</td>\n" } +
        "                    <td>$open $delete</td>\n".replace("<td> ", "<td>").replace(" </td>", "</td>") +
        "                </tr>\n            {/each}\n        </tbody>\n    </table>\n{/if}\n"
}

private fun newPage(plan: CrudPlan): String {
    val target = if (plan.has("get")) plan.itemTarget("saved.id") else plan.listTarget()
    return "<script lang=\"ts\">\n" +
        "    import { goto } from '\$app/navigation';\n" +
        "    import { api, field, ${plan.inputType} } from '#api';\n" +
        "    import { formState } from '#lib/api/form-state.svelte.ts';\n" +
        plan.imports() +
        "\n" + formStateSource(plan) +
        "\n    async function save(event: SubmitEvent) {\n" +
        "        event.preventDefault();\n" +
        "        const saved = await form.submit((draft) => api.${plan.group}.create(draft));\n" +
        "        if (saved) await goto($target);\n" +
        "    }\n</script>\n\n" +
        "<svelte:head>\n    <title>${plan.text("new")}</title>\n</svelte:head>\n\n" +
        "<h1 class=\"mb-4 text-3xl font-bold\">${plan.text("new")}</h1>\n" +
        formSource(plan, "save") +
        "<p class=\"mt-4\"><a class=\"link\" href=${plan.listLink()}>${plan.text("back")}</a></p>\n"
}

private fun itemLoad(plan: CrudPlan): String {
    val id = if (plan.operations.getValue("get").parameters["id"] == "number") "Number(event.params.id)" else "event.params.id"
    return "import { apiWith } from '#api';\nimport type { PageLoad } from './\$types';\n\n" +
        "export const prerender = false;\nexport const ssr = false;\n\n" +
        "export const load: PageLoad = async (event) => {\n" +
        "    return { ${plan.item}: await apiWith(event).${plan.group}.get($id) };\n" +
        "};\n"
}

private fun itemPage(plan: CrudPlan): String {
    val edits = plan.has("update") && plan.inputType != null
    val removes = plan.has("delete")
    val item = "data.${plan.item}"
    val shared = plan.formFields.filter { field -> plan.fields.any { it.name == field.name } }
    val navigation = listOfNotNull("goto".takeIf { removes }, "invalidateAll".takeIf { edits })
    val fromApi = listOfNotNull("api".takeIf { edits || removes }, "field".takeIf { edits }, plan.inputType.takeIf { edits })
    val script =
        "<script lang=\"ts\">\n" +
            (if (navigation.isEmpty()) "" else "    import { ${navigation.joinToString()} } from '\$app/navigation';\n") +
            (if (fromApi.isEmpty()) "" else "    import { ${fromApi.joinToString()} } from '#api';\n") +
            (if (edits) "    import { formState } from '#lib/api/form-state.svelte.ts';\n" else "") +
            plan.imports("import type { PageProps } from './\$types';") +
            "\n    let { data }: PageProps = \$props();\n" +
            (
                if (edits) {
                    "\n" + formStateSource(plan) +
                        "\n    \$effect(() => {\n" +
                        "        form.reset({ ...${plan.inputType}.empty()${shared.joinToString(
                            "",
                        ) { ", ${it.name}: $item.${it.name}" }} });\n" +
                        "    });\n" +
                        "\n    async function save(event: SubmitEvent) {\n" +
                        "        event.preventDefault();\n" +
                        "        const saved = await form.submit((draft) => api.${plan.group}.update(${idArgument(
                            plan,
                            "update",
                            "$item.id",
                        )}, draft));\n" +
                        "        if (saved) await invalidateAll();\n" +
                        "    }\n"
                } else {
                    ""
                }
            ) +
            (
                if (removes) {
                    "\n    async function remove() {\n" +
                        "        await api.${plan.group}.delete(${idArgument(plan, "delete", "$item.id")});\n" +
                        "        await goto(${plan.listTarget()});\n" +
                        "    }\n"
                } else {
                    ""
                }
            ) +
            "</script>\n\n"
    return script + head(plan) +
        "<h1 class=\"mb-4 text-3xl font-bold\">${plan.text("title")}</h1>\n" +
        "<dl class=\"mb-6 grid max-w-md grid-cols-2 gap-2\">\n" +
        plan.shownFields.joinToString("") { "    <dt class=\"font-semibold\">${plan.label(it)}</dt>\n    <dd>{$item.${it.name}}</dd>\n" } +
        "</dl>\n" +
        (if (edits) "\n" + formSource(plan, "save") else "") +
        (
            if (removes) {
                "<p class=\"mt-4\"><button class=\"btn btn-outline\" type=\"button\" onclick={remove}>${plan.text("delete")}</button></p>\n"
            } else {
                ""
            }
        ) +
        "<p class=\"mt-4\"><a class=\"link\" href=${plan.listLink()}>${plan.text("back")}</a></p>\n"
}

internal fun crudFiles(plan: CrudPlan): Map<String, String> =
    buildMap {
        put("${plan.folder}/+page.ts", listLoad(plan))
        put("${plan.folder}/+page.svelte", listPage(plan))
        if (plan.has("create") && plan.inputType != null) put("${plan.folder}/new/+page.svelte", newPage(plan))
        if (plan.has("get")) {
            put("${plan.folder}/[id]/+page.ts", itemLoad(plan))
            put("${plan.folder}/[id]/+page.svelte", itemPage(plan))
        }
    }

internal fun withMessages(
    json: String,
    texts: Map<String, String>,
): String {
    val missing = texts.filterKeys { "\"$it\"" !in json }
    if (missing.isEmpty()) return json
    val body = json.trimEnd().removeSuffix("}").trimEnd()
    val separator = if (body.endsWith("{")) "\n" else ",\n"
    val added = missing.entries.joinToString(",\n") { (key, text) -> "  \"$key\": \"${text.replace("\\", "\\\\").replace("\"", "\\\"")}\"" }
    return "$body$separator$added\n}\n"
}
