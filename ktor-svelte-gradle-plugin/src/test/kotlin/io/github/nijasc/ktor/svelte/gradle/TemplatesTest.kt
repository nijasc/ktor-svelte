package io.github.nijasc.ktor.svelte.gradle

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class TemplatesTest {
    @Test
    fun `placeholders are replaced literally`() {
        val xml = renderTemplate("remote-debug.run.xml", mapOf("name" to "a \$1 \b", "port" to "5005"))
        assertContains(xml, "name=\"a \$1 \b\"")
        assertContains(xml, "<option name=\"PORT\" value=\"5005\" />")
        assertFalse("{{" in xml)
    }

    @Test
    fun `missing or extra values are refused`() {
        assertFailsWith<IllegalArgumentException> { renderTemplate("remote-debug.run.xml", mapOf("name" to "x")) }
        assertFailsWith<IllegalArgumentException> {
            renderTemplate("remote-debug.run.xml", mapOf("name" to "x", "port" to "1", "other" to "y"))
        }
    }

    @Test
    fun `unknown templates fail with the name`() {
        val failure = assertFailsWith<IllegalStateException> { renderTemplate("nope.txt") }
        assertContains(failure.message.orEmpty(), "nope.txt")
    }
}
