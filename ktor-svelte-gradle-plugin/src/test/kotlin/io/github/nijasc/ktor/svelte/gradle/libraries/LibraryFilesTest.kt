package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.DaisyCustomTheme
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LibraryFilesTest {
    @TempDir
    lateinit var dir: File

    private fun spec(
        tailwind: TailwindSpec? = null,
        daisy: DaisySpec? = null,
        lucide: Boolean = false,
        i18n: I18nSpec? = null,
        images: Boolean = false,
    ) = LibrarySpec(tailwind, daisy, lucide, i18n, 5173, "ktorsvelte", images)

    private val daisy = DaisySpec(listOf("light", "dark"), "light", "dark", emptyList())
    private val cookieI18n = I18nSpec(listOf("en", "de"), "en", LocaleStrategy.Cookie)
    private val urlI18n = I18nSpec(listOf("en", "de"), "en", LocaleStrategy.UrlPrefix)
    private val catalog =
        MessageCatalog(
            linkedMapOf(
                "en" to mapOf("app-title" to "Notes", "greeting" to "Hi {name}, it's \$5"),
                "de" to mapOf("app-title" to "Notizen", "greeting" to "Hallo {name}"),
            ),
        )

    @Test
    fun `tailwind wires vite and css with chosen plugins`() {
        val files = frontendFiles(spec(tailwind = TailwindSpec(typography = true, forms = false)), null, false)
        assertContains(files.getValue("vite.config.ts"), "tailwindcss()")
        val css = files.getValue("$GENERATED_DIR/app.css")
        assertContains(css, "@import 'tailwindcss';")
        assertContains(css, "@plugin '@tailwindcss/typography';")
        assertFalse(css.contains("forms"))
    }

    @Test
    fun `images add enhanced-img to vite before sveltekit`() {
        val images = spec(tailwind = TailwindSpec(false, false), images = true)
        val vite = frontendFiles(images, null, false).getValue("vite.config.ts")
        assertContains(vite, "import { enhancedImages } from '@sveltejs/enhanced-img';")
        assertContains(vite, "plugins: [tailwindcss(), enhancedImages(), sveltekit(")
        assertEquals(setOf("tailwindcss", "@tailwindcss/vite", "@sveltejs/enhanced-img"), images.requiredPackages)
        assertFalse(spec(images = true).isEmpty)
        assertFalse(frontendFiles(spec(lucide = true), null, false).getValue("vite.config.ts").contains("enhanced"))
    }

    @Test
    fun `no css library means no tailwind in vite`() {
        val files = frontendFiles(spec(lucide = true), null, false)
        assertFalse(files.getValue("vite.config.ts").contains("tailwind"))
        assertFalse("$GENERATED_DIR/app.css" in files)
    }

    @Test
    fun `user vite config is merged`() {
        val vite = frontendFiles(spec(lucide = true), null, true).getValue("vite.config.ts")
        assertContains(vite, "import userConfig from './vite.user';")
        assertContains(vite, "mergeConfig(config, userConfig)")
    }

    @Test
    fun `daisy themes mark default and prefers dark`() {
        val css = frontendFiles(spec(TailwindSpec(false, false), daisy), null, false).getValue("$GENERATED_DIR/app.css")
        assertContains(css, "themes: light --default, dark --prefersdark;")
    }

    @Test
    fun `custom themes are written as daisy theme plugins`() {
        val custom = DaisySpec(emptyList(), "brand", null, listOf(DaisyCustomTheme("brand", "dark", mapOf("color-primary" to "#123456"))))
        val css = frontendFiles(spec(TailwindSpec(false, false), custom), null, false).getValue("$GENERATED_DIR/app.css")
        assertContains(css, "themes: false;")
        assertContains(css, "name: 'brand';")
        assertContains(css, "default: true;")
        assertContains(css, "color-scheme: dark;")
        assertContains(css, "--color-primary: #123456;")
    }

    @Test
    fun `theme helper is typed and hook applies default and saved theme`() {
        val files = frontendFiles(spec(TailwindSpec(false, false), daisy), null, false)
        assertContains(files.getValue("$GENERATED_DIR/theme.ts"), "export const themes = ['light','dark'] as const;")
        val hooks = files.getValue("$GENERATED_DIR/server-hooks.ts")
        assertContains(hooks, "data-theme=\"light\"")
        assertContains(hooks, "ktor_svelte_theme")
        assertContains(files.getValue("src/hooks.server.ts"), "ktorSvelteHandle as handle")
    }

    @Test
    fun `messages become typed functions`() {
        val i18n = frontendFiles(spec(i18n = cookieI18n), catalog, false).getValue("$GENERATED_DIR/i18n.ts")
        assertContains(i18n, "appTitle: () => translate('app-title'),")
        assertContains(i18n, "greeting: (values: { name: string | number }) => translate('greeting', values),")
        assertContains(i18n, "export const defaultLocale: Locale = 'en';")
        assertContains(i18n, "location.reload();")
    }

    @Test
    fun `url prefix adds reroute prerender entries and path based locale`() {
        val files = frontendFiles(spec(i18n = urlI18n), catalog, false)
        assertContains(files.getValue("src/hooks.ts"), "export const reroute")
        assertContains(files.getValue("vite.config.ts"), "entries: ['*','/en','/de']")
        val i18n = files.getValue("$GENERATED_DIR/i18n.ts")
        assertContains(i18n, "location.pathname.split('/')[1]")
        assertContains(i18n, "document.documentElement.lang = getLocale();")
        assertContains(i18n, "ktor_svelte_locale=\${getLocale()}; path=/")
    }

    @Test
    fun `cookie strategy has no reroute`() {
        assertFalse("src/hooks.ts" in frontendFiles(spec(i18n = cookieI18n), catalog, false))
    }

    @Test
    fun `icon names become valid constants`() {
        assertEquals("House", iconConstant("house"))
        assertEquals("ArrowRight", iconConstant("arrow-right"))
        assertEquals("Icon3dRotate", iconConstant("3d-rotate"))
        val sources = iconSources(listOf("house", "arrow-right"))
        assertContains(sources.getValue("$GENERATED_DIR/icons.ts"), "ArrowRight: () => import('@lucide/svelte/icons/arrow-right'),")
        assertEquals("[\"ArrowRight\",\"House\"]\n", sources.getValue("$GENERATED_DIR/icons.json"))
    }

    @Test
    fun `kotlin enum lists icons`() {
        val enum = kotlinFiles(spec(lucide = true), listOf("House", "Icon3dRotate"), null, true).getValue("LucideIcon.kt")
        assertContains(enum, "public enum class LucideIcon {")
        assertContains(enum, "    Icon3dRotate,")
    }

    @Test
    fun `kotlin messages escape text and take parameters`() {
        val source = kotlinFiles(spec(i18n = cookieI18n), emptyList(), catalog, true).getValue("Messages.kt")
        assertContains(source, "public fun appTitle(): String")
        assertContains(source, "public fun greeting(name: String): String = table.getValue(\"greeting\").replace(\"{name}\", name)")
        assertContains(source, "\"Hi {name}, it's \\\$5\"")
    }

    @Test
    fun `kotlin messages stay within ktlint layout`() {
        val longText = "x".repeat(140)
        val wide =
            MessageCatalog(
                linkedMapOf("en" to mapOf("stats" to "{total} of {archived}", "intro" to longText)),
            )
        val source = kotlinFiles(spec(i18n = cookieI18n), emptyList(), wide, true).getValue("Messages.kt")
        assertContains(
            source,
            "    public fun stats(\n        total: String,\n        archived: String,\n    ): String =\n" +
                "        table\n            .getValue(\"stats\")\n" +
                "            .replace(\"{total}\", total)\n            .replace(\"{archived}\", archived)",
        )
        assertContains(source, "                        \"intro\" to\n                            \"$longText\",")
        assertTrue(source.lines().all { it.length <= 140 || it.trim() == "\"$longText\"," })
    }

    @Test
    fun `call extensions need the runtime dependency`() {
        val daisySpec = spec(TailwindSpec(false, false), daisy, i18n = cookieI18n)
        val extensions = kotlinFiles(daisySpec, emptyList(), catalog, true).getValue("CallExtensions.kt")
        assertContains(extensions, "ApplicationCall.messages")
        assertContains(extensions, "ApplicationCall.theme")
        assertFalse("CallExtensions.kt" in kotlinFiles(daisySpec, emptyList(), catalog, false))
    }

    @Test
    fun `runtime properties describe i18n and themes`() {
        val properties = runtimeProperties(spec(TailwindSpec(false, false), daisy, i18n = urlI18n))
        assertContains(properties, "i18n.strategy=UrlPrefix\n")
        assertContains(properties, "theme.names=light,dark\n")
    }

    @Test
    fun `invalid configs fail with a useful message`() {
        val badDefault = spec(i18n = I18nSpec(listOf("en"), "de", LocaleStrategy.Cookie))
        assertContains(assertFailsWith<GradleException> { badDefault.validate() }.message.orEmpty(), "defaultLocale 'de'")
        val badTheme = spec(TailwindSpec(false, false), DaisySpec(listOf("light"), "dark", null, emptyList()))
        assertContains(assertFailsWith<GradleException> { badTheme.validate() }.message.orEmpty(), "defaultTheme 'dark'")
        val badLocale = spec(i18n = I18nSpec(listOf("../x"), "../x", LocaleStrategy.Cookie))
        assertContains(assertFailsWith<GradleException> { badLocale.validate() }.message.orEmpty(), "Invalid i18n locales")
    }

    @Test
    fun `missing keys and placeholders fail reading messages`() {
        dir.resolve("en.json").writeText("""{"title":"Hi {name}","only-en":"x"}""")
        dir.resolve("de.json").writeText("""{"title":"Hallo","only-de":"y"}""")
        val message = assertFailsWith<GradleException> { readMessages(dir, listOf("en", "de")) }.message.orEmpty()
        assertContains(message, "de is missing 'only-en'.")
        assertContains(message, "de has 'only-de'")
        assertContains(message, "de 'title' uses")
    }

    @Test
    fun `nested messages and missing files are rejected`() {
        dir.resolve("en.json").writeText("""{"a":{"b":"c"}}""")
        assertContains(
            assertFailsWith<GradleException> { readMessages(dir, listOf("en")) }.message.orEmpty(),
            "Nested messages are not supported",
        )
        assertContains(assertFailsWith<GradleException> { readMessages(dir, listOf("fr")) }.message.orEmpty(), "fr.json")
    }

    @Test
    fun `valid messages parse with placeholders`() {
        dir.resolve("en.json").writeText("""{"hello-there":"Hi {name} and {other}"}""")
        val catalog = readMessages(dir, listOf("en"))
        assertEquals(listOf("hello-there"), catalog.keys)
        assertEquals(listOf("name", "other"), catalog.placeholders("hello-there"))
        assertEquals("helloThere", propertyName("hello-there"))
        assertTrue(catalog.locales.containsKey("en"))
    }
}
