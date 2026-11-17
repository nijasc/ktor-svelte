package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.GradleException
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse

internal val CRUD_SERVICES =
    """
    export const notesList = (query?: { search?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' });
    export const notesCreate = (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' });
    export const notesGet = (id: number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${'$'}{encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });
    export const notesUpdate = (id: number, body: NoteInput, options?: RequestOptions) => request<Note>('PUT', `/api/notes/${'$'}{encodeURIComponent(id)}`, { ...options, body, operation: 'notes.update' });
    export const notesDelete = (id: number, options?: RequestOptions) => request<void>('DELETE', `/api/notes/${'$'}{encodeURIComponent(id)}`, { ...options, operation: 'notes.delete' });
    export const auditLogList = (options?: RequestOptions) => request<PageOf<Entry>>('GET', '/api/audit-log', { ...options, operation: 'auditLog.list' });
    export const adminUsersList = (options?: RequestOptions) => request<User[]>('GET', '/api/admin/users', { ...options, operation: 'admin.users.list' });
    """.trimIndent()

internal val CRUD_TYPES =
    """
    /** A note. */
    export interface Note {
        id: number;
        title: string;
        /** The text. */
        body: string;
        tags: string[];
        pinned: boolean;
        createdAt: IsoDateTime;
    }

    export const Note = {
        empty: (): Note => ({
            id: 0,
        }),
    };

    export interface NoteInput {
        title: string;
        body?: string;
        tags?: string[];
        pinned?: boolean;
        weight?: number | null;
    }

    export const NoteInput = {
        empty: (): NoteInput => ({
            title: '',
        }),
        bounds: {
            title: { required: true, minlength: 1, maxlength: 80 },
        },
        validate: (value: NoteInput): Record<string, string[]> => {
            return {};
        },
    };

    export interface Entry {
        id: string;
        what: string;
    }

    export interface Tag {
        name: string;
    }
    """.trimIndent()

class CrudScaffoldTest {
    private fun plan(
        type: String = "Note",
        folder: String? = null,
        typedRoutes: Boolean = true,
        translated: Boolean = true,
    ) = crudPlan(type, CRUD_SERVICES, CRUD_TYPES, folder, typedRoutes, translated)

    @Test
    fun `the plan comes from the routes and types of the generated client`() {
        val plan = plan()
        assertEquals("notes", plan.group)
        assertEquals("notes", plan.folder)
        assertEquals(setOf("list", "get", "create", "update", "delete"), plan.operations.keys)
        assertEquals("NoteInput", plan.inputType)
        assertEquals(listOf("title", "body", "pinned", "weight"), plan.formFields.map { it.name })
        assertEquals(listOf("tags"), plan.skippedFields.map { it.name })
        assertEquals(setOf("title"), plan.bounds)
        assertEquals(true, plan.validates)
        assertEquals(
            setOf("notes-title", "notes-empty", "notes-open", "notes-back", "notes-new", "notes-save", "notes-delete") +
                setOf("id", "title", "body", "pinned", "weight").map { "notes-field-$it" },
            plan.texts.keys,
        )
    }

    @Test
    fun `list, new and detail pages use the client, typed routes, bounds and translated texts`() {
        val files = crudFiles(plan(folder = "(app)/memos"))
        assertEquals(
            listOf("+page.ts", "+page.svelte", "new/+page.svelte", "[id]/+page.ts", "[id]/+page.svelte").map { "(app)/memos/$it" },
            files.keys.toList(),
        )
        assertContains(files.getValue("(app)/memos/+page.ts"), "    return { notes: await apiWith(event).notes.list() };\n")
        val list = files.getValue("(app)/memos/+page.svelte")
        assertContains(list, "<a class=\"btn btn-primary\" href={routes.memosNew()}>{m.notesNew()}</a>")
        assertContains(list, "{#each data.notes as note (note.id)}")
        assertContains(list, "href={routes.memosId({ id: note.id })}")
        assertContains(list, "        await api.notes.delete(id);\n        await invalidateAll();\n")
        assertContains(list, "                <th>{m.notesFieldTitle()}</th>\n                <th>{m.notesFieldBody()}</th>\n")

        val created = files.getValue("(app)/memos/new/+page.svelte")
        assertContains(created, "    const form = formState<NoteInput>(NoteInput.empty(), { validate: NoteInput.validate });\n")
        assertContains(created, "        const saved = await form.submit((draft) => api.notes.create(draft));\n")
        assertContains(created, "        if (saved) await goto(routes.memosId({ id: saved.id }));\n")
        assertContains(
            created,
            "bind:value={form.draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: form.errors.title }} />",
        )
        assertContains(created, "bind:value={form.draft.body} use:field={{ errors: form.errors.body }} />")
        assertContains(created, "<input id=\"note-pinned\" class=\"checkbox\" type=\"checkbox\" bind:checked={form.draft.pinned} />")
        assertContains(created, "type=\"number\" bind:value={form.draft.weight}")
        assertFalse("tags" in created)

        assertContains(
            files.getValue("(app)/memos/[id]/+page.ts"),
            "    return { note: await apiWith(event).notes.get(Number(event.params.id)) };\n",
        )
        val detail = files.getValue("(app)/memos/[id]/+page.svelte")
        assertContains(
            detail,
            "        form.reset({ ...NoteInput.empty(), title: data.note.title, body: data.note.body, pinned: data.note.pinned });\n",
        )
        assertContains(detail, "api.notes.update(data.note.id, draft)")
        assertContains(detail, "        await goto(routes.memos());\n")
        assertContains(detail, "    <dt class=\"font-semibold\">{m.notesFieldPinned()}</dt>\n    <dd>{data.note.pinned}</dd>\n")
    }

    @Test
    fun `without typed routes and translations the pages carry plain addresses and English text`() {
        val files = crudFiles(plan(typedRoutes = false, translated = false))
        val list = files.getValue("notes/+page.svelte")
        assertContains(list, "<a class=\"btn btn-primary\" href=\"/notes/new\">New note</a>")
        assertContains(list, "href=\"/notes/{note.id}\"")
        assertContains(list, "<h1 class=\"mb-4 text-3xl font-bold\">Notes</h1>")
        assertFalse("#i18n" in list || "#routes" in list)
        assertContains(files.getValue("notes/new/+page.svelte"), "        if (saved) await goto(`/notes/\${saved.id}`);\n")
    }

    @Test
    fun `a list that is all there is gives a list page only, and a paged one reads its items`() {
        val files = crudFiles(plan(type = "Entry"))
        assertEquals(listOf("audit-log/+page.ts", "audit-log/+page.svelte"), files.keys.toList())
        assertContains(files.getValue("audit-log/+page.ts"), "    return { auditLog: (await apiWith(event).auditLog.list()).items };\n")
        val list = files.getValue("audit-log/+page.svelte")
        assertFalse("invalidateAll" in list || "routes.auditLogNew" in list)
        assertContains(list, "{m.auditLogTitle()}")
    }

    @Test
    fun `what cannot be scaffolded is refused with the next step`() {
        assertContains(assertFailsWith<GradleException> { plan(type = "Tag") }.message.orEmpty(), "has no route that lists Tag")
        assertContains(assertFailsWith<GradleException> { plan(type = "User") }.message.orEmpty(), "one level below the API prefix")
        val noId = CRUD_SERVICES.replace("Note[]", "Tag[]")
        val failure = assertFailsWith<GradleException> { crudPlan("Tag", noId, CRUD_TYPES, null, typedRoutes = true, translated = true) }
        assertContains(failure.message.orEmpty(), "Tag has no id field")
    }

    @Test
    fun `texts are added to a message file once, at its end`() {
        val before = "{\n  \"notes-title\": \"My notes\",\n  \"other\": \"x\"\n}\n"
        val after = withMessages(before, mapOf("notes-title" to "Notes", "notes-new" to "New \"note\""))
        assertEquals("{\n  \"notes-title\": \"My notes\",\n  \"other\": \"x\",\n  \"notes-new\": \"New \\\"note\\\"\"\n}\n", after)
        assertEquals(after, withMessages(after, mapOf("notes-new" to "Again")))
        assertEquals("{\n  \"a\": \"b\"\n}\n", withMessages("{}", mapOf("a" to "b")))
    }
}
