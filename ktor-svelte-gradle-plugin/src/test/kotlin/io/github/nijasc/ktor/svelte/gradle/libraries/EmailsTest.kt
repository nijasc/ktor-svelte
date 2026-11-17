package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import io.github.nijasc.ktor.svelte.gradle.tasks.renderedComponents
import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class EmailsTest {
    private val name = marker("name")
    private val link = marker("link")

    private fun component(
        body: String,
        head: String = "<!--abc--><title>Welcome, $name &amp; co</title>",
        props: List<String> = listOf("name", "link"),
        templateName: String = "Welcome",
    ) = RenderedComponent(templateName, DEFAULT_EMAIL_LOCALE, props, head, body)

    @Test
    fun `the subject comes from the title, with its entities decoded`() {
        val template = emailTemplate(component("<p>$name</p><a href=\"$link\">Open</a>"))

        assertEquals("Welcome, $name & co", template.subject)
        assertContains(template.html, "<title>Welcome, $name &amp; co</title>")
    }

    @Test
    fun `an email without a title is rejected, because it would have no subject`() {
        val failure = assertFailsWith<GradleException> { emailTemplate(component("<p>$name $link</p>", head = "")) }

        assertContains(failure.message!!, "src/emails/Welcome.svelte has no subject")
        assertContains(failure.message!!, "features/emails")
    }

    @Test
    fun `scoped rules become style attributes, ordered by specificity, and the element's own style wins`() {
        val css =
            """
            .button.svelte-x1 {
                color: white;
                background: #7f52ff
            }
            a.svelte-x1 { color: black; }
            p.svelte-x1, h1.svelte-x1 { margin: 0; font-family: "Inter", sans-serif; }
            #top.svelte-x1 { padding: 4px; }
            """.trimIndent()
        val body =
            "<h1 id=\"top\" class=\"svelte-x1\">Hi</h1><p class=\"svelte-x1\">Text</p>" +
                "<a class=\"button svelte-x1\" href=\"x\" style=\"font-weight: bold;\">Go</a><br/>"

        val inlined = inlineCss(body, css)

        assertEquals(
            "<h1 id=\"top\" style=\"margin: 0; font-family: &quot;Inter&quot;, sans-serif; padding: 4px\">Hi</h1>" +
                "<p style=\"margin: 0; font-family: &quot;Inter&quot;, sans-serif\">Text</p>" +
                "<a class=\"button\" href=\"x\" style=\"color: black; color: white; background: #7f52ff; font-weight: bold\">Go</a><br />",
            inlined.html,
        )
        assertEquals("", inlined.leftover)
    }

    @Test
    fun `rules that cannot be inlined stay in a style element, with the classes they need`() {
        val css =
            """
            .button.svelte-x1:hover { color: red; }
            @media (max-width: 600px) { .title.svelte-x1 { font-size: 20px; } }
            .list.svelte-x1 li { margin: 0; }
            """.trimIndent()
        val body = "<a class=\"button svelte-x1\">Go</a><ul class=\"list svelte-x2\"><li>One</li></ul>"

        val inlined = inlineCss(body, css)

        assertEquals("<a class=\"button svelte-x1\">Go</a><ul class=\"list\"><li>One</li></ul>", inlined.html)
        assertEquals(
            ".button.svelte-x1:hover { color: red; }\n" +
                "@media (max-width: 600px) { .title.svelte-x1 { font-size: 20px; } }\n" +
                ".list.svelte-x1 li { margin: 0; }",
            inlined.leftover,
        )
    }

    @Test
    fun `the html is a whole document with the leftover css in its head and no hydration comments`() {
        val head =
            "<title>Hi $name</title>" +
                "<style id=\"svelte-x1\">p.svelte-x1 { color: red; } a.svelte-x1:hover { color: blue; }\n/*# map */</style>"
        val template = emailTemplate(component("<!--[--><p class=\"svelte-x1\">$name</p><a href=\"$link\">Open</a><!--]-->", head))

        assertEquals(
            "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "<title>Hi $name</title>\n<style>\na.svelte-x1:hover { color: blue; }\n</style>\n</head>\n<body>\n" +
                "<p class=\"svelte-x1\" style=\"color: red\">$name</p><a href=\"$link\">Open</a>\n</body>\n</html>\n",
            template.html,
        )
    }

    @Test
    fun `the text part keeps paragraphs, lists and link targets`() {
        val html =
            "<div><h1>Hello   $name</h1>\n<p>Thanks for\n joining &amp; welcome.</p><ul><li>One</li><li>Two</li></ul>" +
                "<p><a href=\"$link\">Open the board</a> or <a href=\"https://x.test\">https://x.test</a>.</p>" +
                "<p>Line<br>break <img src=\"logo.png\" alt=\"Logo\"></p><style>p { color: red; }</style></div>"

        assertEquals(
            "Hello $name\n\nThanks for joining & welcome.\n\n- One\n- Two\n\nOpen the board ($link) or https://x.test.\n\nLine\nbreak Logo\n",
            htmlToText(html),
        )
    }

    @Test
    fun `a prop that never shows up unchanged is rejected`() {
        val failure =
            assertFailsWith<GradleException> {
                emailTemplates(listOf(component("<p>${name.uppercase()}</p><a href=\"$link\">Open</a>", head = "<title>Hi</title>")))
            }

        assertContains(failure.message!!, "reads the prop name but never shows it as it is")
    }

    @Test
    fun `names that do not fit Kotlin are rejected`() {
        val badTemplate = assertFailsWith<GradleException> { emailTemplate(component("<p>$name $link</p>", templateName = "welcome-mail")) }
        val badProp = assertFailsWith<GradleException> { emailTemplate(component("<p>x</p>", props = listOf("\$name"))) }

        assertContains(badTemplate.message!!, "needs a name that starts with an upper case letter")
        assertContains(badProp.message!!, "has the prop '\$name'")
    }

    @Test
    fun `each template becomes a function with a String parameter per prop`() {
        val templates =
            emailTemplates(
                listOf(
                    component("<p>$name</p><a href=\"$link\">Open</a>"),
                    component("<p>Ping</p>", head = "<title>Ping</title>", props = emptyList(), templateName = "Ping"),
                    component("<p>${marker("in")}</p>", head = "<title>Hi</title>", props = listOf("in"), templateName = "Keyword"),
                ),
            )

        val source = emailsKotlin("app.generated", templates)

        assertContains(source, "// $GENERATED_MARKER\npackage app.generated\n")
        assertContains(source, "    public fun keyword(\n        `in`: String,\n    ): RenderedEmail =\n")
        assertContains(source, "renderEmail(\"Keyword\", \"default\", mapOf(\"in\" to `in`))")
        assertContains(source, "    public fun ping(): RenderedEmail = renderEmail(\"Ping\", \"default\", emptyMap())")
        assertContains(
            source,
            "    public fun welcome(\n        name: String,\n        link: String,\n    ): RenderedEmail =\n" +
                "        renderEmail(\"Welcome\", \"default\", mapOf(\"name\" to name, \"link\" to link))",
        )
        assertContains(source, "getResource(\"/ktor-svelte/emails/\$path\")")
        assertFalse("{{" in source)
    }

    @Test
    fun `with i18n each email takes its language from forLocale and the call`() {
        val i18n = I18nSpec(listOf("en", "de"), "en", LocaleStrategy.Cookie)
        val templates =
            listOf("en", "de").map { locale ->
                emailTemplate(RenderedComponent("Welcome", locale, listOf("name"), "<title>$locale $name</title>", "<p>$name</p>"))
            }

        val source = emailsKotlin("app.generated", templates, i18n, callExtension = true)
        val withoutRuntime = emailsKotlin("app.generated", templates, i18n, callExtension = false)

        assertContains(source, "public class Emails private constructor(\n    public val locale: String,\n) {\n")
        assertContains(source, "renderEmail(\"Welcome\", locale, mapOf(\"name\" to name))")
        assertContains(source, "public val locales: List<String> = listOf(\"en\", \"de\")")
        assertContains(source, "public val defaultLocale: String = \"en\"")
        assertContains(source, "public fun forLocale(locale: String): Emails = Emails(if (locale in locales) locale else defaultLocale)")
        assertContains(source, "import io.github.nijasc.ktor.svelte.svelteLocale\nimport io.ktor.server.application.ApplicationCall\n")
        assertContains(source, "public val ApplicationCall.emails: Emails get() = Emails.forLocale(svelteLocale)")
        assertFalse("ApplicationCall" in withoutRuntime)
        assertContains(templates.last().html, "<html lang=\"de\">")
        assertEquals(
            setOf("ktor-svelte/emails/Welcome/en.html", "ktor-svelte/emails/Welcome/de.html"),
            emailResources(templates).keys.filter { it.endsWith(".html") }.toSet(),
        )
    }

    @Test
    fun `a prop that one language leaves out is fine while another shows it`() {
        val templates =
            listOf(
                RenderedComponent("Welcome", "en", listOf("name"), "<title>Hi $name</title>", "<p>Hi</p>"),
                RenderedComponent("Welcome", "de", listOf("name"), "<title>Hallo</title>", "<p>Hallo</p>"),
            )

        assertEquals(2, emailTemplates(templates).size)
    }

    @Test
    fun `the subject, html and text of each template become resources`() {
        val template = emailTemplate(component("<p>$name</p><a href=\"$link\">Open</a>"))

        assertEquals(
            mapOf(
                "ktor-svelte/emails/Welcome/default.subject" to template.subject,
                "ktor-svelte/emails/Welcome/default.html" to template.html,
                "ktor-svelte/emails/Welcome/default.txt" to template.text,
            ),
            emailResources(listOf(template)),
        )
    }

    @Test
    fun `the render script output is read back with its props in order`() {
        val json = """[{"name":"Welcome","locale":"default","props":["name","link"],"head":"<title>x</title>","body":"<p>name</p>"}]"""

        val rendered = renderedComponents(json).single()

        assertEquals(listOf("name", "link"), rendered.props)
        assertEquals("<p>$name</p>", rendered.body)
    }
}
