package io.github.nijasc.ktor.svelte.test

import com.microsoft.playwright.options.ColorScheme
import kotlin.test.Test
import kotlin.test.assertEquals

class AccessibilityTest {
    @Test
    fun `pages are looked at in light and in dark, with the app's themes when it has them`() {
        val themed = looks("shadcn-light", "dracula")
        assertEquals(listOf("the light theme shadcn-light", "the dark theme dracula"), themed.map { it.name })
        assertEquals(listOf("shadcn-light", "dracula"), themed.map { it.theme })
        assertEquals(listOf(ColorScheme.LIGHT, ColorScheme.DARK), themed.map { it.scheme })
        val plain = looks(null, null)
        assertEquals(listOf("light colors", "dark colors"), plain.map { it.name })
        assertEquals(listOf(null, null), plain.map { it.theme })
    }
}
