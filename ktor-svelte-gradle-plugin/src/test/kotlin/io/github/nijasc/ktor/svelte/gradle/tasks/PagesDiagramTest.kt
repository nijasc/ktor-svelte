package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertNull

class PagesDiagramTest {
    @TempDir
    lateinit var frontend: File

    private val routes: File get() = frontend.resolve("src/routes")

    private fun write(
        path: String,
        vararg lines: String,
    ) {
        frontend.resolve(path).parentFile.mkdirs()
        frontend.resolve(path).writeText(lines.joinToString("\n"))
    }

    private fun project() {
        write("package.json", """{"imports":{"#api":"./src/lib/api/index.ts","#lib/*":"./src/lib/*"}}""")
        write(
            "src/lib/api/services.ts",
            listOf(
                "export const notesList = (options?: RequestOptions) => " +
                    "request<Note[]>('GET', '/api/notes', { ...options, operation: 'notes.list' });",
                "export const notesGet = (id: string, options?: RequestOptions) => " +
                    "request<Note>('GET', `/api/notes/${'$'}{encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });",
                "export const meGet = (options?: RequestOptions) => request<Me>('GET', '/api/me', { ...options, operation: 'me.get' });",
                "export const adminWipe = (options?: RequestOptions) => " +
                    "request<void>('DELETE', '/api/admin', { ...options, operation: 'admin.wipe' });",
            ).joinToString("\n"),
        )
        write("src/routes/(app)/+layout.ts", "import { meGet } from '#api';\nexport const load = () => meGet();")
        write("src/routes/(app)/notes/+page.svelte", "<script lang=\"ts\">", "import NoteList from '#lib/NoteList.svelte';", "</script>")
        write("src/lib/NoteList.svelte", "<script lang=\"ts\">", "import { api } from '#api';", "import './helpers';", "api.notes.list();")
        write("src/lib/helpers.ts", "import { notesGet } from '#api';", "export const one = notesGet;")
        write(
            "src/routes/(app)/notes/[id]/+page.ts",
            "import { notesGet } from '#api';",
            "export const load = ({ params }) => notesGet(params.id);",
        )
        write("src/routes/about/+page.svelte", "<h1>About</h1>")
    }

    @Test
    fun `each page lists the API routes it and the components it imports call`() {
        project()
        val calls = pageCalls(frontend, routes).orEmpty()
        assertEquals(
            listOf(
                "/ (layout) -> GET /api/me",
                "/about -> ",
                "/notes -> GET /api/notes, GET /api/notes/{id}",
                "/notes/[id] -> GET /api/notes/{id}",
            ),
            calls.map { page ->
                "${page.page}${if (page.layout) " (layout)" else ""} -> ${page.endpoints.joinToString { "${it.method} ${it.path}" }}"
            },
        )
    }

    @Test
    fun `the diagram is Mermaid with a table, and marks routes no page calls`() {
        project()
        val endpoints =
            io.github.nijasc.ktor.svelte.gradle.libraries
                .generatedEndpoints(frontend.resolve("src/lib/api/services.ts").readText())
        val text = pagesDiagram(pageCalls(frontend, routes).orEmpty(), endpoints)
        assertContains(text, "```mermaid\nflowchart LR\n")
        assertContains(text, "    page0[\"/ (layout)\"]\n")
        assertContains(text, "    api1([\"GET /api/notes/{id}\"])\n")
        assertContains(text, "    page3 --> api1\n")
        assertContains(text, "    class api3 uncalled\n")
        assertContains(text, "| `/notes/[id]` | `GET /api/notes/{id}` |")
        assertContains(text, "No page calls `DELETE /api/admin`.")
    }

    @Test
    fun `without a generated client there is nothing to draw`() {
        assertNull(pageCalls(frontend, routes))
    }

    @Test
    fun `route groups are left out of the page address`() {
        assertEquals("/notes/[id]", pageRoute(routes, routes.resolve("(app)/notes/[id]")))
        assertEquals("/", pageRoute(routes, routes))
    }
}
