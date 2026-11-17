# Search as you type

You want a search box that updates the results while someone types, without flooding the server, and without an older, slower answer overwriting a newer one.

**Time:** about 10 minutes. **Level:** beginner.

What you use:

- A [query class](../features/calling-the-api.md#query-parameters-as-a-class) on the list route, so the search term is a typed field in the client.
- [`latest`](../features/calling-the-api.md#search-as-you-type) from the generated client, which aborts the call before when a new one starts.
- A short pause before each call, so a fast typist sends one request, not ten.

## Step 1: a list route that takes a search term

Describe the query as a class. With [`resource`](../features/typescript.md#resource-routes), the `list` block takes it:

::: code-group

```kotlin no-check [With resource]
@Serializable
data class NoteQuery(
    val search: String? = null,
    val tag: String? = null,
)

resource<Note, Int>("/api/notes") {
    list<NoteQuery> { query -> store.list(query.search, query.tag) }
}
```

```kotlin no-check [With a plain route]
get("/api/notes") {
    val query = call.query<NoteQuery>()
    call.respond(store.list(query.search, query.tag))
}.queryOf<NoteQuery>()
```

:::

An empty parameter counts as not given, as a form sends it for an empty field, so `?search=` reads as `null`. Run `./gradlew svelteGenerateTs`, and `api.notes.list` takes `{ search?: string; tag?: string }`.

Search in the database, not in memory, once the list is long: a `LIKE` or a full text index, and a limit on the number of results.

## Step 2: the search box

```svelte
<script lang="ts">
    import { api, isAbortError, latest, type Note } from '#api';

    const search = latest(api.notes.list);

    let term = $state('');
    let results = $state<Note[]>([]);
    let searching = $state(false);
    let timer: ReturnType<typeof setTimeout> | undefined;

    function onInput() {
        clearTimeout(timer);
        timer = setTimeout(run, 250);
    }

    async function run() {
        searching = true;
        try {
            results = await search({ search: term.trim() || undefined });
            searching = false;
        } catch (error) {
            if (isAbortError(error)) return;
            searching = false;
            throw error;
        }
    }
</script>

<input type="search" bind:value={term} oninput={onInput} placeholder="Search notes" aria-label="Search notes" />
{#if searching}<p>Searching...</p>{/if}
<ul>
    {#each results as note (note.id)}
        <li>{note.title}</li>
    {/each}
</ul>
```

Three things keep it fast and correct:

| Line | Why |
| --- | --- |
| `setTimeout(run, 250)` | Waits until typing pauses for a quarter of a second, so one request goes out per pause, not one per key |
| `latest(api.notes.list)` | Each call aborts the one before it, so a slow answer for "no" never replaces the answer for "notes" |
| `isAbortError(error)` | A superseded call always rejects with an `AbortError`, even when it was cancelled while its body was being read. It is not a failure, so it is ignored |

Your own `signal` still works alongside `latest`.

## Step 3: keep the term in the address

A search that survives a reload, and that can be shared as a link, keeps its term in the URL. Read it in the page's load, and replace the address as the visitor types:

::: code-group

```ts no-check [+page.ts]
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const term = event.url.searchParams.get('q') ?? '';
    return { term, notes: await apiWith(event).notes.list({ search: term || undefined }) };
};
```

```svelte no-check [+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let term = $state(data.term);
    let timer: ReturnType<typeof setTimeout> | undefined;

    function onInput() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const url = new URL(page.url);
            if (term.trim()) url.searchParams.set('q', term.trim());
            else url.searchParams.delete('q');
            void goto(url, { replaceState: true, keepFocus: true, noScroll: true });
        }, 250);
    }
</script>

<input type="search" bind:value={term} oninput={onInput} aria-label="Search notes" />
<ul>
    {#each data.notes as note (note.id)}
        <li>{note.title}</li>
    {/each}
</ul>
```

:::

`replaceState` keeps the history clean, and `keepFocus` leaves the cursor in the box while the page loads again.

## A searchable table without the code

With `libraries { components() }` and a paged route, the generated [`<DataTable>`](../features/frontend-libraries.md#datatable) loads again from the start whenever its `query` changes, so a search box is one `bind:value`:

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import DataTable from '#components/DataTable.svelte';

    let search = $state('');
</script>

<input type="search" bind:value={search} aria-label="Search" />
<DataTable load={api.notes.list} query={{ search, limit: '20' }} key={(note) => note.id} columns={[{ key: 'title', label: 'Title' }]} />
```

## Good to know

- A search is a `GET`, so it is never rate limited and never blocked by the origin check. A very public search box can still be costly: keep the result count small on the server.
- For a check of one value while the visitor types, such as whether an email is taken, use a [field check](../features/validation.md#checks-only-the-server-can-make) instead. It has its own pause and drops stale answers for you.
- With [prefetch on hover](../features/calling-the-api.md#prefetch-on-hover), the detail page of a result can be loaded before the click.
