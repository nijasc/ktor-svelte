package io.github.nijasc.ktor.svelte.gradle.libraries

import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class RouteRenameTest {
    @TempDir
    lateinit var dir: File

    private fun page(path: String) {
        val target = dir.resolve(path).resolve("+page.svelte")
        target.parentFile.mkdirs()
        target.writeText("")
    }

    private fun standardPages() {
        listOf("", "notes", "notes/[id]", "notes/[id]/edit", "(app)/settings", "memo").forEach(::page)
    }

    @Test
    fun `every page below the folder gets its new name`() {
        standardPages()
        assertEquals(
            listOf(
                RouteRename("/notes", "/memos", "notes", "memos", false),
                RouteRename("/notes/[id]", "/memos/[id]", "notesId", "memosId", false),
                RouteRename("/notes/[id]/edit", "/memos/[id]/edit", "notesIdEdit", "memosIdEdit", false),
            ),
            routeRenames(dir, "notes", "/memos/"),
        )
    }

    @Test
    fun `a group or a parameter can change`() {
        standardPages()
        assertEquals(
            listOf(RouteRename("/(app)/settings", "/(admin)/settings", "settings", "settings", false)),
            routeRenames(dir, "(app)/settings", "(admin)/settings"),
        )
        assertEquals(
            listOf(
                RouteRename("/notes/[id]", "/notes/[noteId]", "notesId", "notesNoteId", true),
                RouteRename("/notes/[id]/edit", "/notes/[noteId]/edit", "notesIdEdit", "notesNoteIdEdit", true),
            ),
            routeRenames(dir, "notes/[id]", "notes/[noteId]"),
        )
    }

    @Test
    fun `impossible renames say why`() {
        standardPages()
        dir.resolve("empty").mkdirs()
        assertContains(assertFailsWith<GradleException> { routeRenames(dir, "nots", "memos") }.message.orEmpty(), "There is no page folder")
        assertContains(assertFailsWith<GradleException> { routeRenames(dir, "notes", "memo") }.message.orEmpty(), "already exists")
        assertContains(assertFailsWith<GradleException> { routeRenames(dir, "notes", "notes/all") }.message.orEmpty(), "into itself")
        assertContains(assertFailsWith<GradleException> { routeRenames(dir, "empty", "other") }.message.orEmpty(), "holds no page")
        assertContains(assertFailsWith<GradleException> { routeRenames(dir, "/", "home") }.message.orEmpty(), "home page cannot be renamed")
        assertContains(
            assertFailsWith<GradleException> { routeRenames(dir, "notes/[id]", "(app)/memo") }.message.orEmpty(),
            "/(app)/memo would get the route name memo, which /memo already has",
        )
    }

    @Test
    fun `typed route calls are rewritten in the frontend`() {
        val renames =
            listOf(
                RouteRename("/notes", "/memos", "notes", "memos", false),
                RouteRename("/notes/[id]", "/memos/[id]", "notesId", "memosId", false),
            )
        val source =
            """
            <a href={routes.notes()}>All</a>
            <a href={routes.notesId({ id: note.id })}>One</a>
            {#if page.route.id === routeIds.notesId}{/if}
            <a href={routes.notesIdEdit({ id })}>Other page</a>
            {subroutes.notes} {routes.notesArchive()}
            """.trimIndent()
        assertEquals(
            """
            <a href={routes.memos()}>All</a>
            <a href={routes.memosId({ id: note.id })}>One</a>
            {#if page.route.id === routeIds.memosId}{/if}
            <a href={routes.notesIdEdit({ id })}>Other page</a>
            {subroutes.notes} {routes.notesArchive()}
            """.trimIndent() to 3,
            renameRouteUsages(source, renames, kotlin = false),
        )
    }

    @Test
    fun `kotlin usages are rewritten, with keywords escaped`() {
        val renames =
            listOf(
                RouteRename("/notes/[id]", "/memos/[id]", "notesId", "memosId", false),
                RouteRename("/old", "/object", "old", "object", false),
            )
        assertEquals(
            "call.respondRedirect(FrontendRoutes.memosId(id))\nval x = FrontendRoutes.`object`\nval y = routes.notesId\n" to 2,
            renameRouteUsages(
                "call.respondRedirect(FrontendRoutes.notesId(id))\nval x = FrontendRoutes.old\nval y = routes.notesId\n",
                renames,
                kotlin = true,
            ),
        )
    }

    @Test
    fun `a rename that keeps the name changes nothing in the sources`() {
        val renames = listOf(RouteRename("/(app)/settings", "/(admin)/settings", "settings", "settings", false))
        assertEquals("routes.settings()" to 0, renameRouteUsages("routes.settings()", renames, kotlin = false))
    }
}
