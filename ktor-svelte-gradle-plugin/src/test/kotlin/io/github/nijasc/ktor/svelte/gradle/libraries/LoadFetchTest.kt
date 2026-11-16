package io.github.nijasc.ktor.svelte.gradle.libraries

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class LoadFetchTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `calls without fetch inside load are found with their line`() {
        val source =
            """
            import { api } from '#api';
            import type { PageLoad } from './${'$'}types';

            export const load: PageLoad = async ({ fetch, params }) => {
                const nodes = await api.datanode.getAllDataNodesByDefinition(params.id);
                const definition = await api.datanode.getDataNodeDefinition(params.id, { fetch });
                const user = await api.profiles.me();
                return { nodes, definition, user };
            };
            """.trimIndent()
        assertEquals(
            listOf(
                LoadCall(5, "api.datanode.getAllDataNodesByDefinition(params.id)"),
                LoadCall(7, "api.profiles.me()"),
            ),
            findLoadCallsWithoutFetch(source),
        )
    }

    @Test
    fun `every way of passing fetch is accepted`() {
        val source =
            """
            export async function load({ fetch, params }) {
                const options = { fetch };
                await api.notes.list({ fetch });
                await api.notes.list({ query: { q: 'a, b' } }, { fetch, signal });
                await api.notes.get(params.id, { timeout: 5000, fetch: fetch });
                await api.notes.get(params.id, options);
                await api.notes.get(params.id, requestOptions);
                await api.notes.get(params.id, { ...shared });
                await api.notes.create({ title: text(')') }, { fetch });
            }
            """.trimIndent()
        assertEquals(emptyList(), findLoadCallsWithoutFetch(source))
    }

    @Test
    fun `a client made with apiWith needs nothing more`() {
        val source =
            """
            import { apiWith } from '#api';

            export const load = async (event) => {
                const api = apiWith(event);
                const [notes, stats] = await Promise.all([api.notes.list(), api.stats.list()]);
                return { notes, stats };
            };
            """.trimIndent()
        assertEquals(emptyList(), findLoadCallsWithoutFetch(source))
    }

    @Test
    fun `fetch inside the body argument does not count`() {
        val source =
            """
            export const load = async ({ fetch }) => {
                await api.notes.create({ title: 'fetch' });
                await api.notes.update(id, { fetch: true }, { signal });
            };
            """.trimIndent()
        assertEquals(listOf(2, 3), findLoadCallsWithoutFetch(source).map { it.line })
    }

    @Test
    fun `code before load, comments and other objects are ignored`() {
        val source =
            """
            const warmup = api.notes.list();
            // api.notes.list()
            /* await api.notes.get(1) */
            export const load = async ({ fetch }) => {
                // await api.notes.list();
                const other = client.api.notes;
                await myapi.notes.list();
                return {};
            };
            """.trimIndent()
        assertEquals(emptyList(), findLoadCallsWithoutFetch(source))
        assertEquals(emptyList(), findLoadCallsWithoutFetch("export const prerender = true;\nawait api.notes.list();"))
    }

    @Test
    fun `long calls are shortened and calls over several lines are joined`() {
        val source =
            """
            export const load = async () => {
                await api.notes.search(
                    'a very long search text that goes on and on and on and on and on and on',
                    filters
                );
            };
            """.trimIndent()
        assertEquals(
            listOf(LoadCall(2, "api.notes.search( 'a very long search text that goes on and on and on and on ...")),
            findLoadCallsWithoutFetch(source),
        )
    }

    @Test
    fun `only universal page and layout loads are read`() {
        listOf("+page.ts", "notes/+layout.js", "notes/+page.server.ts", "notes/+page.svelte", "notes/helpers.ts").forEach { path ->
            dir.resolve(path).apply { parentFile.mkdirs() }.writeText("")
        }
        assertEquals(listOf("+page.ts", "notes/+layout.js"), loadFiles(dir).map { it.relativeTo(dir).invariantSeparatorsPath })
    }
}
