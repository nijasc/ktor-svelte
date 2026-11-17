package io.github.nijasc.ktor.svelte.gradle.libraries

import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.io.File
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
    fun `without any page metadata the routes file is as before`() {
        page("about", "export const prerender = true;")
        val source = routesSource(scanRoutes(dir.resolve("routes")), null, setOf("nav-home"))
        assertFalse("export const nav" in source || "pageTitle" in source || "i18n" in source)
    }
}
