package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.tasks.updatedPackageJson
import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

class FontsTest {
    private val tailwind = TailwindSpec(typography = false, forms = false)

    private fun spec(
        fonts: FontSpec?,
        withTailwind: Boolean = true,
    ) = LibrarySpec(tailwind.takeIf { withTailwind }, null, false, null, 5173, "app.generated", fonts = fonts)

    @Test
    fun `a variable font is installed, imported into the stylesheet and made the default`() {
        val fonts = FontSpec("Inter", "JetBrains Mono", variable = true)
        val files = frontendFiles(spec(fonts), null, false)
        val css = files.getValue("$GENERATED_DIR/app.css")
        assertContains(
            css,
            "@import 'tailwindcss';\n@import '@fontsource-variable/inter/wght.css';\n" +
                "@import '@fontsource-variable/jetbrains-mono/wght.css';\n" +
                "@theme {\n    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;\n" +
                "    --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;\n}\n",
        )
        val packages = updatedPackageJson(emptyMap(), spec(fonts))["devDependencies"] as Map<*, *>
        assertEquals("^5.3.0", packages["@fontsource-variable/inter"])
        assertEquals("^5.3.0", packages["@fontsource-variable/jetbrains-mono"])
    }

    @Test
    fun `the font is preloaded on every page from the app's own files`() {
        val hooks = frontendFiles(spec(FontSpec("Inter", null, variable = true)), null, false).getValue("$GENERATED_DIR/server-hooks.ts")
        assertContains(hooks, "import font0 from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';")
        assertContains(
            hooks,
            "            html.replace('</head>', () => `<link rel=\"preload\" as=\"font\" type=\"font/woff2\" " +
                "href=\"\${font0}\" crossorigin></head>`)\n",
        )
        assertFalse("<html" in hooks)
    }

    @Test
    fun `a font without a variable version takes its regular and bold files`() {
        val fonts = FontSpec("Roboto", null, variable = false)
        val files = frontendFiles(spec(fonts), null, false)
        assertContains(
            files.getValue("$GENERATED_DIR/app.css"),
            "@import '@fontsource/roboto/400.css';\n@import '@fontsource/roboto/700.css';\n",
        )
        assertContains(files.getValue("$GENERATED_DIR/app.css"), "--font-sans: 'Roboto', ui-sans-serif")
        assertContains(files.getValue("$GENERATED_DIR/server-hooks.ts"), "'@fontsource/roboto/files/roboto-latin-400-normal.woff2?url'")
    }

    @Test
    fun `fonts need a stylesheet and a name that is one`() {
        val noCss = assertFailsWith<GradleException> { spec(FontSpec("Inter", null, true), withTailwind = false).validate() }
        assertContains(noCss.message.orEmpty(), "fonts needs tailwind() or daisyUi()")
        val name = assertFailsWith<GradleException> { spec(FontSpec("@evil/package", null, true)).validate() }
        assertContains(name.message.orEmpty(), "is not a font name")
        spec(FontSpec("IBM Plex Sans", null, true)).validate()
        assertFalse(spec(null).usesHooks)
    }
}
