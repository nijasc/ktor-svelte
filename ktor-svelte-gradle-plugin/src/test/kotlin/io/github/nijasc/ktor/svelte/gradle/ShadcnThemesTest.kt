package io.github.nijasc.ktor.svelte.gradle

import io.github.nijasc.ktor.svelte.gradle.libraries.LibrarySpec
import io.github.nijasc.ktor.svelte.gradle.libraries.frontendFiles
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class ShadcnThemesTest {
    private val shadcn = listOf(DaisyTheme.ShadcnLight.cssName, DaisyTheme.ShadcnDark.cssName)

    @Test
    fun `shadcn themes become custom themes with light default and dark preference`() {
        val spec = daisySpecOf(shadcn, emptyList(), null, null)
        assertEquals(emptyList(), spec.themes)
        assertEquals(shadcn, spec.allThemes)
        assertEquals("shadcn-light", spec.defaultTheme)
        assertEquals("shadcn-dark", spec.prefersDark)
    }

    @Test
    fun `shadcn mixes with built-in and user themes`() {
        val brand = DaisyCustomTheme("brand", "light", mapOf("color-primary" to "#6b57ff"))
        val spec = daisySpecOf(listOf("cupcake") + shadcn, listOf(brand), "brand", null)
        assertEquals(listOf("cupcake"), spec.themes)
        assertEquals(listOf("cupcake", "shadcn-light", "shadcn-dark", "brand"), spec.allThemes)
        assertEquals(listOf("shadcn-light", "cupcake"), daisySpecOf(listOf("shadcn-light", "cupcake"), emptyList(), null, null).allThemes)
        assertEquals("brand", spec.defaultTheme)
        assertEquals("shadcn-dark", spec.prefersDark)
    }

    @Test
    fun `without themes the daisy defaults stay`() {
        val spec = daisySpecOf(emptyList(), emptyList(), null, null)
        assertEquals(listOf("light", "dark"), spec.themes)
        assertEquals("dark", spec.prefersDark)
    }

    @Test
    fun `css and kotlin enum use the shadcn palette`() {
        val spec = LibrarySpec(null, daisySpecOf(shadcn, emptyList(), null, null), false, null, 5173, "io.github.nijasc.ktorsvelte")
        val css = frontendFiles(spec, null, false).getValue("src/lib/ktor-svelte/app.css")
        assertContains(css, "themes: false;")
        assertContains(css, "name: 'shadcn-light';\n    default: true;\n    prefersdark: false;\n    color-scheme: light;")
        assertContains(css, "name: 'shadcn-dark';\n    default: false;\n    prefersdark: true;\n    color-scheme: dark;")
        assertContains(css, "--color-primary: oklch(0.205 0 0);")
        assertContains(css, "--radius-box: 0.625rem;")
        assertFalse(css.contains("--default"))
    }
}
