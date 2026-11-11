package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.w3c.dom.Element
import java.io.File
import javax.xml.parsers.DocumentBuilderFactory
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class LiveTemplatesTest {
    private val templates: List<Element> by lazy {
        val document =
            DocumentBuilderFactory
                .newInstance()
                .newDocumentBuilder()
                .parse(renderTemplate("live-templates.xml").byteInputStream())
        val nodes = document.getElementsByTagName("template")
        (0 until nodes.length).map { nodes.item(it) as Element }
    }

    @Test
    fun `templates are valid xml with unique names`() {
        val names = templates.map { it.getAttribute("name") }
        assertEquals(listOf("ksget", "kspost", "kspage", "ksdto", "ksinput", "ksapi", "ksload", "kserror"), names)
    }

    @Test
    fun `every variable in a template is declared and dollar signs are escaped`() {
        val token = Regex("""\$([A-Z_]+)\$|\$\$""")
        templates.forEach { template ->
            val value = template.getAttribute("value")
            val used = token.findAll(value).mapNotNull { it.groups[1]?.value }.toSet() - setOf("END", "SELECTION")
            val declared =
                template
                    .getElementsByTagName("variable")
                    .let { nodes -> (0 until nodes.length).map { (nodes.item(it) as Element).getAttribute("name") } }
                    .toSet()
            assertEquals(declared, used, template.getAttribute("name"))
            assertTrue('$' !in token.replace(value, ""), template.getAttribute("name"))
        }
    }

    @Test
    fun `config folders are found per operating system`() {
        assertEquals(
            File("C:/Users/a/AppData/Roaming", "JetBrains"),
            jetBrainsConfigRoot(
                "Windows 11",
                mapOf(
                    "APPDATA" to "C:/Users/a/AppData/Roaming",
                ),
                "C:/Users/a",
            ),
        )
        assertEquals(File("/Users/a", "Library/Application Support/JetBrains"), jetBrainsConfigRoot("Mac OS X", emptyMap(), "/Users/a"))
        assertEquals(File("/home/a/.config", "JetBrains"), jetBrainsConfigRoot("Linux", emptyMap(), "/home/a"))
        assertTrue(jetBrainsConfigRoot("Linux", mapOf("XDG_CONFIG_HOME" to "/xdg"), "/home/a").path.endsWith("JetBrains"))
    }
}
