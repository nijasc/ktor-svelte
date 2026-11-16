package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.tasks.updatedPackageJson
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ComponentsTest {
    private val daisy = DaisySpec(listOf("light"), "light", null, emptyList())

    private fun spec(
        components: Boolean,
        withDaisy: Boolean = false,
    ) = LibrarySpec(null, daisy.takeIf { withDaisy }, false, null, 5173, "app.generated", components = components)

    @Test
    fun `components are generated only when the library is on`() {
        assertFalse(frontendFiles(spec(components = false), null, false).keys.any { it.startsWith(COMPONENTS_DIR) })
        val files = frontendFiles(spec(components = true), null, false)
        assertEquals(
            listOf("DataTable.svelte", "DateInput.svelte", "DateTimeInput.svelte", "EnumSelect.svelte", "ErrorPage.svelte", "Field.svelte"),
            files.keys
                .filter { it.startsWith(COMPONENTS_DIR) }
                .map { it.substringAfterLast('/') }
                .sorted(),
        )
        assertTrue(GENERATED_GIT_ATTRIBUTES in files)
        assertFalse(spec(components = true).isEmpty)
    }

    @Test
    fun `the field uses the field action, binds its value and passes the rest to the input`() {
        val field = componentFiles(spec(components = true)).getValue("$COMPONENTS_DIR/Field.svelte")
        assertContains(field, "import { field, type FieldBounds, type FieldOptions } from '#api';")
        assertContains(field, "value = \$bindable()")
        assertContains(field, "<label class=\"ktor-svelte-field-label\" for={inputId}>{label}</label>")
        assertContains(field, "<input id={inputId} class=\"ktor-svelte-field-input\" bind:value use:field={options} {...rest} />")
        assertContains(field, "describedBy: hint ? hintId : undefined")
        assertContains(field, "errorClass: 'field-error'")
        assertContains(field, ".ktor-svelte-field {")
        assertFalse("{{" in field)
    }

    @Test
    fun `with daisyUI the field uses its classes and carries no style of its own`() {
        val field = componentFiles(spec(components = true, withDaisy = true)).getValue("$COMPONENTS_DIR/Field.svelte")
        assertContains(field, "<input id={inputId} class=\"input w-full\" bind:value")
        assertContains(field, "<textarea id={inputId} class=\"textarea w-full\" bind:value")
        assertContains(field, "errorClass: 'text-error text-sm'")
        assertFalse("<style>" in field)
        assertFalse("ktor-svelte-field" in field)
    }

    @Test
    fun `the date and enum inputs are fields with their own control`() {
        val files = componentFiles(spec(components = true, withDaisy = true))
        val field = files.getValue("$COMPONENTS_DIR/Field.svelte")
        assertContains(field, "control?: Snippet<[{ id: string; options: FieldOptions }]>;")
        assertContains(field, "{@render control({ id: inputId, options })}")

        val date = files.getValue("$COMPONENTS_DIR/DateInput.svelte")
        assertContains(date, "<script lang=\"ts\" generics=\"T extends string = string\">")
        assertContains(date, "bind:value={() => value ?? '', (text) => (value = text === '' ? null : (text as T))}")
        assertContains(date, "class=\"input w-full\"")

        val dateTime = files.getValue("$COMPONENTS_DIR/DateTimeInput.svelte")
        assertContains(dateTime, "type=\"datetime-local\"")
        assertContains(dateTime, "date.toISOString() as T")
        assertContains(dateTime, "if (local) return current.slice(0, 16);")

        val select = files.getValue("$COMPONENTS_DIR/EnumSelect.svelte")
        assertContains(select, "options: Readonly<Record<string, T>>;")
        assertContains(select, "<select id={inputId} class=\"select w-full\" bind:value use:field={fieldOptions} {...rest}>")
        assertContains(select, "{#each Object.values(options) as option (option)}")
        files.values.forEach { assertFalse("{{" in it) }
        componentFiles(spec(components = true)).filterKeys { "Input" in it || "Select" in it }.values.forEach {
            assertContains(it, "class=\"ktor-svelte-field-input\"")
        }
    }

    @Test
    fun `the data table loads pages through the route's own function and types its columns from the items`() {
        val table = componentFiles(spec(components = true, withDaisy = true)).getValue("$COMPONENTS_DIR/DataTable.svelte")
        assertContains(table, "<script lang=\"ts\" generics=\"T, Q extends { cursor?: string } = { cursor?: string }\">")
        assertContains(table, "load: (query: Q) => Promise<PageOf<T>>;")
        assertContains(table, "| { key: keyof T & string; label: string; text?: (item: T) => string; class?: string }")
        assertContains(table, "export function reload(): Promise<void> {")
        assertContains(table, "<table class=\"table\" aria-busy={busy}>")
        assertContains(table, "<p class=\"text-error py-2 text-sm\" role=\"alert\">")
        assertFalse("<style>" in table)
        val plain = componentFiles(spec(components = true)).getValue("$COMPONENTS_DIR/DataTable.svelte")
        assertContains(plain, "<table class=\"ktor-svelte-table\" aria-busy={busy}>")
        assertContains(plain, ".ktor-svelte-table-pager {")
        assertFalse("{{" in plain)
    }

    @Test
    fun `the error page comes with its route, the hook that fills it and the type of what it reads`() {
        val files = frontendFiles(spec(components = true), null, false)
        assertEquals(
            "<!-- $GENERATED_MARKER -->\n<script lang=\"ts\">\n    import ErrorPage from '#components/ErrorPage.svelte';\n</script>\n\n<ErrorPage />\n",
            files.getValue(ERROR_ROUTE),
        )
        assertEquals("// $GENERATED_MARKER\nexport { handleError } from './lib/ktor-svelte/errors';\n", files.getValue(CLIENT_HOOKS))
        assertContains(
            files.getValue("$GENERATED_DIR/errors.ts"),
            "export function handleError(input: { error: unknown; kind?: string; status?: number }): PageErrorDetails | undefined {",
        )
        assertContains(files.getValue("$GENERATED_DIR/app-error.d.ts"), "interface Error {")

        val withToasts = frontendFiles(spec(components = true).copy(toasts = true), null, false).getValue(CLIENT_HOOKS)
        assertContains(withToasts, "client.apiConfig.onError = toastApiError;")
        assertTrue(withToasts.endsWith(";\n\nexport { handleError } from './lib/ktor-svelte/errors';\n"), withToasts.takeLast(120))
        val toastsOnly = frontendFiles(spec(components = false).copy(toasts = true), null, false)
        assertFalse("handleError" in toastsOnly.getValue(CLIENT_HOOKS))
        assertFalse(ERROR_ROUTE in toastsOnly)
    }

    @Test
    fun `the error page speaks English until the app's messages have its keys`() {
        val english = componentFiles(spec(components = true)).getValue("$COMPONENTS_DIR/ErrorPage.svelte")
        assertContains(english, "status === 404 ? 'This page does not exist.' : status === 403 ? 'You are not allowed to see this page.'")
        assertContains(english, ">Request ID: <code>{requestId}</code></p>")
        assertContains(english, "<a class=\"ktor-svelte-error-home\" href={home}>Back to the start page</a>")
        assertFalse("#i18n" in english)

        val catalog = MessageCatalog(mapOf("en" to mapOf("error-not-found" to "Gone.", "error-home" to "Home", "title" to "App")))
        val translated = componentFiles(spec(components = true, withDaisy = true), catalog).getValue("$COMPONENTS_DIR/ErrorPage.svelte")
        assertContains(translated, "    import { m } from '#i18n';\n")
        assertContains(translated, "status === 404 ? m.errorNotFound() : status === 403 ? 'You are not allowed to see this page.'")
        assertContains(translated, "<a class=\"btn btn-primary\" href={home}>{m.errorHome()}</a>")
        assertFalse("{{" in translated)
    }

    @Test
    fun `the components folder gets an import alias and a place in the assistant guide`() {
        val imports = updatedPackageJson(emptyMap(), spec(components = true))["imports"] as Map<*, *>
        assertEquals("./src/lib/ktor-svelte/components/*", imports["#components/*"])
        val without =
            updatedPackageJson(mapOf("imports" to mapOf("#components/*" to "./src/lib/ktor-svelte/components/*")), spec(components = false))
        assertFalse("#components/*" in (without["imports"] as Map<*, *>))
        assertContains(assistantGuide(spec(components = true), null), "import Field from '#components/Field.svelte'")
        assertFalse("#components" in assistantGuide(spec(components = false), null))
    }
}
