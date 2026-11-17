package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull

class SvelteAddTest {
    private val services =
        """
        export const notesList = (query?: { search?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' });
        export const notesCreate = (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' });
        export const notesGet = (id: number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${'$'}{encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });
        export const tasksGetComments = (id: string | number, options?: RequestOptions) => request<PageOf<Comment>>('GET', `/api/tasks/${'$'}{encodeURIComponent(id)}/comments`, { ...options, operation: 'tasks.getComments' });
        """.trimIndent()

    @Test
    fun `a page folder gives the address, the names and the title`() {
        val page = PagePath("(app)/task-lists/[listId]/items")
        assertEquals("/task-lists/[listId]/items", page.url)
        assertEquals("/api/task-lists/{listId}/items", page.apiPath)
        assertEquals(listOf("listId"), page.parameters)
        assertEquals("Items", page.title)
        assertEquals("TaskListsListIdItems", page.typeName)
        assertEquals("taskListsListIdItemsRoutes", page.functionName)
        assertEquals("Home", PagePath("(marketing)").typeName)
        listOf("", "../x", "Notes", "notes/[id", "notes//x", "notes/[...rest]").forEach { wrong ->
            val failure = assertFailsWith<GradleException>(wrong) { PagePath(wrong) }
            assertContains(failure.message.orEmpty(), "is not a page folder")
        }
    }

    @Test
    fun `the load calls the route that answers at the same path, with the id as the type the client wants`() {
        val page = PagePath("notes/[id]")
        val call = matchingClientCall(page, services)
        assertEquals("notes.get", call?.operation)
        assertEquals(
            "import { apiWith } from '#api';\n" +
                "import type { PageLoad } from './\$types';\n\n" +
                "export const prerender = false;\n" +
                "export const ssr = false;\n\n" +
                "export const load: PageLoad = async (event) => {\n" +
                "    return { note: await apiWith(event).notes.get(Number(event.params.id)) };\n" +
                "};\n",
            pageLoadSource(page, call),
        )
        val list = PagePath("(app)/notes")
        assertContains(
            pageLoadSource(list, matchingClientCall(list, services)),
            "    return { notes: await apiWith(event).notes.list() };\n",
        )
        val comments = PagePath("tasks/[task]/comments")
        assertContains(
            pageLoadSource(comments, matchingClientCall(comments, services)),
            "    return { comments: await apiWith(event).tasks.getComments(event.params.task) };\n",
        )
    }

    @Test
    fun `without a matching route the load passes the parameters on, or nothing`() {
        val page = PagePath("orders/[year]/[id]")
        assertNull(matchingClientCall(page, services))
        assertEquals(
            "import type { PageLoad } from './\$types';\n\n" +
                "export const prerender = false;\n" +
                "export const ssr = false;\n\n" +
                "export const load: PageLoad = async ({ params }) => {\n" +
                "    return { year: params.year, id: params.id };\n" +
                "};\n",
            pageLoadSource(page, null),
        )
        assertEquals(
            "import type { PageLoad } from './\$types';\n\n" +
                "export const load: PageLoad = async () => {\n    return {};\n};\n",
            pageLoadSource(PagePath("about-us"), null),
        )
        assertContains(pageSource(PagePath("about-us")), "<h1>About us</h1>\n")
    }

    @Test
    fun `the route stub answers at the API path of the page`() {
        assertEquals(
            "package demo.app\n\n" +
                "import io.ktor.server.response.respondText\n" +
                "import io.ktor.server.routing.Route\n" +
                "import io.ktor.server.routing.get\n\n" +
                "fun Route.notesIdRoutes() {\n" +
                "    get(\"/api/notes/{id}\") {\n" +
                "        val id = call.parameters[\"id\"].orEmpty()\n" +
                "        call.respondText(\"Notes \$id\")\n" +
                "    }\n" +
                "}\n",
            routeStubSource(PagePath("notes/[id]"), "demo.app"),
        )
        assertContains(
            routeStubSource(PagePath("about"), null),
            "fun Route.aboutRoutes() {\n    get(\"/api/about\") {\n        call.respondText(\"About\")",
        )
    }
}
