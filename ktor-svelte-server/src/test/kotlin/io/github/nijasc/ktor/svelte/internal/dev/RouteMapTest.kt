package io.github.nijasc.ktor.svelte.internal.dev

import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class RouteMapTest {
    @TempDir
    lateinit var dir: File

    private fun page(path: String): File =
        dir.resolve("frontend/src/routes/$path").apply {
            parentFile.mkdirs()
            writeText("<h1>page</h1>\n")
        }

    @Test
    fun `pages come from the route folders, without groups and without files that are no page`() {
        page("+page.svelte")
        page("(app)/notes/+page.svelte")
        page("(app)/notes/[id]/+page@.svelte")
        page("about/+page.svelte")
        page("about/+layout.svelte")
        page("api/[...rest]/+server.ts")

        val pages = pagesOf(dir.resolve("frontend"), null)

        assertEquals(listOf("/", "/about", "/notes", "/notes/[id]"), pages.map { it.path })
        assertEquals("src/routes/(app)/notes/+page.svelte", pages[2].file)
        assertTrue(File(pages[2].sourcePath!!).isFile)
    }

    @Test
    fun `without a frontend folder there are no pages to list`() {
        assertEquals(emptyList(), pagesOf(dir.resolve("missing"), null))
        assertEquals(emptyList(), pagesOf(null, null))
    }

    @Test
    fun `the map lists pages and routes with their files, and makes exactly those files openable`() {
        val notes = page("notes/+page.svelte")
        val kotlin =
            dir.resolve("src/main/kotlin/app/Routes.kt").apply {
                parentFile.mkdirs()
                writeText("package app\n")
            }
        val sources = SourceFiles(dir)
        val table =
            RouteTable(
                listOf(
                    KtorRouteRow("GET", "/api/notes", "app/Routes.kt:12", api = true, hidesPage = null),
                    KtorRouteRow("GET", "/health", null, api = false, hidesPage = null),
                ),
                emptyList(),
                emptyList(),
            )

        val map = routeMap(table, pagesOf(dir.resolve("frontend"), null), sources, "/api/docs")

        assertEquals("/api/docs", map.getValue("docs").jsonPrimitive.content)
        val page =
            map
                .getValue("pages")
                .jsonArray
                .single()
                .jsonObject
        assertEquals("/notes", page.getValue("path").jsonPrimitive.content)
        assertEquals(notes.absoluteFile.invariantSeparatorsPath, page.getValue("sourcePath").jsonPrimitive.content)
        val route =
            map
                .getValue("routes")
                .jsonArray
                .first()
                .jsonObject
        assertEquals("app/Routes.kt", route.getValue("file").jsonPrimitive.content)
        assertEquals("12", route.getValue("line").jsonPrimitive.content)
        assertEquals(kotlin.absoluteFile.invariantSeparatorsPath, route.getValue("sourcePath").jsonPrimitive.content)
        assertFalse(
            "file" in
                map
                    .getValue("routes")
                    .jsonArray
                    .last()
                    .jsonObject,
        )
        assertFalse("docs" in routeMap(table, emptyList(), sources, null))

        assertTrue(sources.isKnown(notes.absoluteFile.invariantSeparatorsPath))
        assertTrue(sources.isKnown(kotlin.absoluteFile.invariantSeparatorsPath))
        assertFalse(sources.isKnown(dir.resolve("frontend/src/app.html").absoluteFile.invariantSeparatorsPath))
    }
}
