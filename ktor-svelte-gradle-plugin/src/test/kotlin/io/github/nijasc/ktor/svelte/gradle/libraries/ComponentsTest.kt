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
        assertEquals(listOf("$COMPONENTS_DIR/Field.svelte"), files.keys.filter { it.startsWith(COMPONENTS_DIR) })
        assertTrue(GENERATED_GIT_ATTRIBUTES in files)
        assertFalse(spec(components = true).isEmpty)
    }

    @Test
    fun `the field uses the field action, binds its value and passes the rest to the input`() {
        val field = componentFiles(spec(components = true)).getValue("$COMPONENTS_DIR/Field.svelte")
        assertContains(field, "import { field, type FieldBounds } from '#api';")
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
