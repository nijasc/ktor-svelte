package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import org.gradle.api.GradleException
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull

class NavMetadataTest {
    @TempDir
    lateinit var dir: File

    private fun page(
        folder: String,
        script: String?,
    ) {
        val directory = dir.resolve("routes/$folder").apply { mkdirs() }
        directory.resolve("+page.svelte").writeText("<h1>page</h1>")
        if (script != null) directory.resolve("+page.ts").writeText(script)
    }

    @Test
    fun `a page says its title, icon and place once, in its own file`() {
        assertEquals(
            NavMeta("Board", "LayoutDashboard", 1),
            navMeta("export const ssr = false;\nexport const _nav = { title: 'Board', icon: \"LayoutDashboard\", order: 1 };\n", "x"),
        )
        assertEquals(
            NavMeta("It's here", menu = false),
            navMeta("export const _nav = {\n    title: 'It\\'s here',\n    menu: false,\n};", "x"),
        )
        assertNull(navMeta("export const load = () => ({});", "x"))
    }

    @Test
    fun `what cannot be read without running the file is refused, with the file`() {
        val wrong =
            mapOf(
                "{ title: m.board() }" to "has a part that cannot be read here: title: m.board()",
                "{ icon: 'X' }" to "needs a title",
                "{ title: 'A', colour: 'red' }" to "has no setting called colour",
                "{ title: 'A', order: 'first' }" to "needs a whole number for order",
                "{ title: 3 }" to "needs text for title",
            )
        wrong.forEach { (literal, reason) ->
            val failure = assertFailsWith<GradleException>(literal) { navMeta("export const _nav = $literal;", "src/routes/a/+page.ts") }
            assertContains(failure.message.orEmpty(), "src/routes/a/+page.ts: _nav $reason")
        }
    }

    @Test
    fun `the routes file gets a menu in order, page titles and breadcrumbs`() {
        page("", "export const _nav = { title: 'nav-home', order: 1 };")
        page("(app)/board", "export const _nav = { title: 'nav-board', icon: 'LayoutDashboard', order: 2 };")
        page("(app)/tasks/[id]", "export const _nav = { title: 'Task' };")
        page("(app)/tasks/new", "export const _nav = { title: 'New task', icon: 'Plus' };")
        page("about", "export const _nav = { title: 'About', order: 2 };")
        page("login", "export const _nav = { title: 'Sign in', menu: false };")
        page("register", null)
        val routes = scanRoutes(dir.resolve("routes"))
        assertEquals(NavMeta("nav-board", "LayoutDashboard", 2), routes.single { it.name == "board" }.nav)
        assertNull(routes.single { it.name == "register" }.nav)

        val source = routesSource(routes, null, setOf("nav-home", "nav-board"))
        assertContains(source, "import { m } from './i18n.js';\n")
        assertContains(
            source,
            "export const nav = [\n" +
                "    { name: 'home' as const, to: routes.home, title: () => m.navHome(), icon: undefined },\n" +
                "    { name: 'board' as const, to: routes.board, title: () => m.navBoard(), icon: 'LayoutDashboard' as const },\n" +
                "    { name: 'about' as const, to: routes.about, title: () => 'About', icon: undefined },\n" +
                "    { name: 'tasksNew' as const, to: routes.tasksNew, title: () => 'New task', icon: 'Plus' as const }\n" +
                "];\n",
        )
        assertContains(source, "    { id: '/(app)/tasks/[id]', title: () => 'Task' },\n")
        assertContains(source, "    { id: '/login', title: () => 'Sign in' }\n];\n")
        assertContains(source, "export function pageTitle(page: CurrentPage): string | undefined {")
        assertContains(source, "export function breadcrumbs(page: OpenPage): Crumb[] {")
    }

    @Test
    fun `titles and breadcrumbs follow the open page`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        page("", "export const _nav = { title: 'Home' };")
        page("(app)/notes", "export const _nav = { title: 'Notes' };")
        page("(app)/notes/[id]", "export const _nav = { title: 'One note' };")
        page("(app)/notes/[id]/files", "export const _nav = { title: 'Files' };")
        page("notes-archive", "export const _nav = { title: 'Archive' };")
        page("about", null)
        val source =
            routesSource(scanRoutes(dir.resolve("routes")), null)
                .replace(
                    "import { resolve } from '\$app/paths';",
                    "const resolve = (id: string, params: Record<string, string> = {}) =>\n" +
                        "    id.replace(/\\/\\([^/]+\\)/g, '').replace(/\\[(\\w+)\\]/g, (_, name: string) => params[name] ?? '?') || '/';",
                ).replace(
                    "import type { RouteId, RouteParams } from '\$app/types';",
                    "type RouteId = string;\ntype RouteParams<T> = Record<string, string>;",
                )
        dir.resolve("routes.ts").writeText(source)
        val script =
            """
            import { breadcrumbs, nav, pageTitle } from './routes.ts';
            const open = { route: { id: '/(app)/notes/[id]/files' }, params: { id: '7' } };
            console.log(JSON.stringify({
                crumbs: breadcrumbs(open).map((crumb) => crumb.title + ' ' + crumb.href + (crumb.current ? ' current' : '')),
                title: pageTitle(open),
                untitled: pageTitle({ route: { id: '/about' } }) ?? null,
                nowhere: breadcrumbs({ route: { id: null } }),
                archive: breadcrumbs({ route: { id: '/notes-archive' } }).map((crumb) => crumb.title),
                menu: nav.map((item) => item.title() + ' ' + item.to()),
            }));
            """.trimIndent()
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(bun!!.path, file.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val result = JsonSlurper().parseText(output.lines().last { it.startsWith("{") }) as Map<*, *>
        assertEquals(listOf("Home /", "Notes /notes", "One note /notes/7", "Files /notes/7/files current"), result["crumbs"])
        assertEquals("Files", result["title"])
        assertNull(result["untitled"])
        assertEquals(emptyList<Any>(), result["nowhere"])
        assertEquals(listOf("Home", "Archive"), result["archive"], "a page whose name only starts the same is no parent")
        assertEquals(listOf("Home /", "Notes /notes", "Archive /notes-archive"), result["menu"])
    }

    @Test
    fun `a page with a description or an image gets its sharing tags into the prerendered page`() {
        val bun = locateExecutable("bun")
        assumeTrue(bun != null, "bun is not on PATH")
        page(
            "",
            "export const _nav = { title: 'Team \"board\" & more', description: 'about-text', image: 'https://example.com/share.png' };",
        )
        page("about", "export const _nav = { title: 'About', description: 'Who we are' };")
        page("plain", "export const _nav = { title: 'Plain' };")
        val routes = scanRoutes(dir.resolve("routes"))
        assertEquals(true, sharesPages(routes))
        val source = routesSource(routes, null, setOf("about-text"))
        assertContains(source, "description: () => m.aboutText(), image: 'https://example.com/share.png' }")
        dir.resolve("i18n.js").writeText("export const m = { aboutText: () => 'One <JAR>' };\n")
        dir.resolve("routes.ts").writeText(
            source
                .replace("import { resolve } from '\$app/paths';", "const resolve = (id: string) => id;")
                .replace(
                    "import type { RouteId, RouteParams } from '\$app/types';",
                    "type RouteId = string;\ntype RouteParams<T> = Record<string, string>;",
                ),
        )
        val script =
            """
            import { shareTags } from './routes.ts';
            console.log(JSON.stringify(['/', '/about', '/plain', '/other', null].map((id) => shareTags({ route: { id } }))));
            """.trimIndent()
        val file = dir.resolve("script.ts").apply { writeText(script) }
        val process = ProcessBuilder(bun!!.path, file.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val tags = JsonSlurper().parseText(output.lines().last { it.startsWith("[") }) as List<*>
        assertEquals(
            "<meta property=\"og:type\" content=\"website\">" +
                "<meta property=\"og:title\" content=\"Team &quot;board&quot; &amp; more\">" +
                "<meta name=\"description\" content=\"One &lt;JAR&gt;\">" +
                "<meta property=\"og:description\" content=\"One &lt;JAR&gt;\">" +
                "<meta property=\"og:image\" content=\"https://example.com/share.png\">" +
                "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            tags[0],
        )
        assertContains(tags[1].toString(), "<meta name=\"description\" content=\"Who we are\">")
        assertFalse("og:image" in tags[1].toString())
        assertEquals(listOf("", "", ""), tags.drop(2))

        val spec = LibrarySpec(null, null, false, null, 5173, "app.generated", routes = true)
        val files = frontendFiles(spec, null, false, routes)
        val hooks = files.getValue("$GENERATED_DIR/server-hooks.ts")
        assertContains(hooks, "import { shareTags } from './routes.js';")
        assertContains(hooks, "html.replace('</head>', () => `\${shareTags(event)}</head>`)")
        assertContains(files.getValue("src/hooks.server.ts"), "ktorSvelteHandle as handle")
        assertFalse("$GENERATED_DIR/server-hooks.ts" in frontendFiles(spec, null, false, routes.map { it.copy(nav = null) }))
        val wrong = assertFailsWith<GradleException> { navMeta("export const _nav = { title: 'A', image: 'share.png' };", "f") }
        assertContains(wrong.message.orEmpty(), "needs an address for image")
    }

    @Test
    fun `without any page metadata the routes file is as before`() {
        page("about", "export const prerender = true;")
        val source = routesSource(scanRoutes(dir.resolve("routes")), null, setOf("nav-home"))
        assertFalse("export const nav" in source || "pageTitle" in source || "i18n" in source)
    }
}
