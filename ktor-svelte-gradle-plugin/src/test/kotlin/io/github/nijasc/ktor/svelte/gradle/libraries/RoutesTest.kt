package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class RoutesTest {
    @TempDir
    lateinit var dir: File

    private fun page(
        path: String,
        file: String = "+page.svelte",
    ) {
        val target = dir.resolve(path).resolve(file)
        target.parentFile.mkdirs()
        target.writeText("")
    }

    private fun spec(
        routes: Boolean = true,
        i18n: I18nSpec? = null,
    ) = LibrarySpec(null, null, false, i18n, 5173, "app.generated", routes = routes)

    @Test
    fun `finds every page and skips folders without one`() {
        page("")
        page("about")
        page("notes/[id]", "+page.ts")
        page("(app)/settings", "+page.server.ts")
        page("reset", "+page@.svelte")
        dir.resolve("notes/+layout.svelte").writeText("")
        dir.resolve("lib/helper.ts").also { it.parentFile.mkdirs() }.writeText("")

        val routes = scanRoutes(dir)

        assertEquals(listOf("/", "/(app)/settings", "/about", "/notes/[id]", "/reset"), routes.map { it.id })
        assertEquals(listOf("home", "settings", "about", "notesId", "reset"), routes.map { it.name })
    }

    @Test
    fun `names are camel case and never start with a digit`() {
        assertEquals("blogPostsPostSlug", routeOf("/blog-posts/[post_slug]").name)
        assertEquals("route404Page", routeOf("/404-page").name)
        assertEquals("langAbout", routeOf("/[[lang]]/about").name)
        assertEquals("filesPath", routeOf("/files/[...path]").name)
        assertEquals("itemsId", routeOf("/items/[id=integer]").name)
        assertEquals("home", routeOf("/(marketing)").name)
    }

    @Test
    fun `parses every kind of parameter`() {
        val route = routeOf("/[[lang]]/files/[...path]/v[id=integer]")
        assertEquals(
            listOf(
                RoutePart.Param("lang", optional = true, rest = false),
                RoutePart.Param("path", optional = false, rest = true),
                RoutePart.Param("id", optional = false, rest = false),
            ),
            route.params,
        )
        assertEquals(listOf(RoutePart.Text("v"), RoutePart.Param("id", false, false)), route.segments.last())
        assertEquals(listOf(RoutePart.Text("a/b")), routeOf("/a[x+2f]b").segments.single())
    }

    @Test
    fun `routes with the same name fail with both ids`() {
        page("blog-post")
        page("blog/post")
        val error = assertFailsWith<GradleException> { scanRoutes(dir) }
        assertContains(error.message!!, "/blog-post and /blog/post are both blogPost")
    }

    @Test
    fun `a missing routes folder fails with a hint`() {
        val error = assertFailsWith<GradleException> { scanRoutes(dir.resolve("missing")) }
        assertContains(error.message!!, "routes { dir = ... }")
    }

    @Test
    fun `typescript has route ids and a resolving function per route`() {
        val source = routesSource(listOf(routeOf("/"), routeOf("/notes/[id]")), null)
        assertTrue(source.startsWith("// $GENERATED_MARKER\n"))
        assertContains(source, "import { resolve } from '\$app/paths';")
        assertContains(source, "export const routeIds = {\n    home: '/',\n    notesId: '/notes/[id]'\n} as const;")
        assertContains(source, "export const routes = {\n    home: route(routeIds.home),\n    notesId: route(routeIds.notesId)\n};")
        assertContains(source, "RouteParams<T>[K] | number")
        assertContains(source, "(resolve as (id: string, params?: object) => string)(id, ...args)")
        assertFalse(source.contains("getLocale"))
        assertEquals(
            source,
            routesSource(listOf(routeOf("/"), routeOf("/notes/[id]")), I18nSpec(listOf("en"), "en", LocaleStrategy.Cookie)),
        )
    }

    @Test
    fun `url prefix routes get the locale before resolving`() {
        val source = routesSource(listOf(routeOf("/")), I18nSpec(listOf("en", "de"), "en", LocaleStrategy.UrlPrefix))
        assertContains(source, "import { getLocale } from './i18n.js';")
        assertContains(source, "(resolve as (pathname: string) => string)(path ? `\${getLocale()}/\${path}` : getLocale())")
    }

    @Test
    fun `kotlin gets constants for static routes and functions for dynamic ones`() {
        val source =
            routesObject(
                "app.generated",
                listOf(
                    routeOf("/"),
                    routeOf("/about us"),
                    routeOf("/[[lang]]/files/[...path]"),
                    routeOf("/notes/[id]"),
                    routeOf("/object"),
                ),
            )
        assertContains(source, "package app.generated\n\npublic object FrontendRoutes {\n")
        assertContains(source, "    public const val home: String = \"/\"")
        assertContains(source, "    public const val aboutUs: String = \"/about%20us\"")
        assertContains(source, "    public const val `object`: String = \"/object\"")
        assertContains(source, "    public fun notesId(id: String): String = path(\"notes\", encode(id))")
        assertContains(
            source,
            "    public fun langFilesPath(lang: String? = null, path: String): String = path(encode(lang), \"files\", encodeRest(path))",
        )
        assertContains(source, "private fun encodeRest(")
    }

    @Test
    fun `static routes need no helpers`() {
        val source = routesObject("app.generated", listOf(routeOf("/"), routeOf("/about")))
        assertFalse(source.contains("private fun"))
    }

    @Test
    fun `path segments are percent encoded like encodeURIComponent keeps sub-delimiters`() {
        assertEquals("a%20b%2Fc", encodePathSegment("a b/c"))
        assertEquals("%C3%A4", encodePathSegment("ä"))
        assertEquals("a-b_c.d~e:f@g", encodePathSegment("a-b_c.d~e:f@g"))
    }

    @Test
    fun `routes add a file, an import alias and kotlin, and nothing when off`() {
        val routes = listOf(routeOf("/"))
        assertContains(frontendFiles(spec(), null, false, routes).keys, "$GENERATED_DIR/routes.ts")
        assertContains(kotlinFiles(spec(), emptyList(), null, false, routes).keys, "FrontendRoutes.kt")
        assertFalse(spec().isEmpty)
        assertNull(frontendFiles(spec(routes = false), null, false, routes)["$GENERATED_DIR/routes.ts"])
        assertNull(kotlinFiles(spec(routes = false), emptyList(), null, false, routes)["FrontendRoutes.kt"])
    }

    @Test
    fun `i18n adds localizeHref for kotlin`() {
        val prefix = I18nSpec(listOf("en", "de"), "en", LocaleStrategy.UrlPrefix)
        val messages = MessageCatalog(linkedMapOf("en" to mapOf("a" to "A"), "de" to mapOf("a" to "A")))
        val prefixed = kotlinFiles(spec(i18n = prefix), emptyList(), messages, true).getValue("CallExtensions.kt")
        assertContains(prefixed, "if (path == \"/\") \"/\$svelteLocale\" else \"/\$svelteLocale\$path\"")
        val cookie = kotlinFiles(spec(i18n = prefix.copy(strategy = LocaleStrategy.Cookie)), emptyList(), messages, true)
        assertContains(cookie.getValue("CallExtensions.kt"), "public fun ApplicationCall.localizeHref(path: String): String = path\n")
    }
}
