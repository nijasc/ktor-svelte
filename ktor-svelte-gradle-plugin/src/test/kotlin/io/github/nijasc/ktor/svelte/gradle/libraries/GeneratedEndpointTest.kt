package io.github.nijasc.ktor.svelte.gradle.libraries

import kotlin.test.Test
import kotlin.test.assertEquals

class GeneratedEndpointTest {
    private val dollar = "$"
    private val services =
        """
        import { ApiError, request, stream, type RequestOptions } from './client.js';
        import type { Note, NoteInput } from './types.js';

        /** @see notes/Routes.kt */
        export const notesList = (query?: { search?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' });
        export const notesCreate = (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' });
        export const notesGet = (id: string | number, options?: RequestOptions) => request<Note>('GET', `/api/notes/$dollar{encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });
        export const notesGetFeed = (query?: { cursor?: string; limit?: string }, options?: RequestOptions) => request<{
            items: Note[];
            next?: string | null;
        }>('GET', '/api/notes/feed', { ...options, query, operation: 'notes.getFeed' });
        export const notesEvents = (options?: RequestOptions) => stream<Note>('GET', '/api/notes/events', { ...options, operation: 'notes.events' });
        export const statsList = (options?: RequestOptions) => request<void>('GET', '/api/stats', { ...options, operation: 'stats.list' });

        export const notes = {
            list: notesList,
            create: notesCreate,
        };
        """.trimIndent()

    private val endpoints = generatedEndpoints(services)

    @Test
    fun `endpoints are read from the generated services`() {
        assertEquals(
            listOf(
                GeneratedEndpoint("notesList", "notes.list", "GET", "/api/notes"),
                GeneratedEndpoint("notesCreate", "notes.create", "POST", "/api/notes"),
                GeneratedEndpoint("notesGet", "notes.get", "GET", "/api/notes/{id}"),
                GeneratedEndpoint("notesGetFeed", "notes.getFeed", "GET", "/api/notes/feed"),
                GeneratedEndpoint("notesEvents", "notes.events", "GET", "/api/notes/events"),
                GeneratedEndpoint("statsList", "stats.list", "GET", "/api/stats"),
            ),
            endpoints,
        )
    }

    @Test
    fun `a call through the client, a resource or the function itself counts as use`() {
        val sources =
            listOf(
                "const all = await api.notes.list({ fetch });",
                "import { notes } from '#api';\nawait notes.create(input);",
                "import { notesGet } from '#api';\nconst note = await notesGet(id);",
                "for await (const note of client\n    .notes\n    .events()) show(note);",
            )
        assertEquals(listOf("notes.getFeed", "stats.list"), unusedEndpoints(endpoints, sources).map { it.operation })
    }

    @Test
    fun `passing the function without calling it counts too`() {
        assertEquals(
            listOf("notes.list", "notes.create", "notes.get", "notes.events", "stats.list"),
            unusedEndpoints(endpoints, listOf("for await (const page of pages(api.notes.getFeed)) {}")).map { it.operation },
        )
    }

    @Test
    fun `a name that only looks alike does not count`() {
        val sources = listOf("const list = notesListing(); other.stats.listAll(); const statsListed = 1; notes.listen();")
        assertEquals(endpoints, unusedEndpoints(endpoints, sources))
    }
}
