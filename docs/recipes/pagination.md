# Page through long lists

You want a list that can grow to thousands of rows, such as notes, orders or users, to load a page at a time, with a "Load more" button or Previous and Next, and with the same limits on the server whatever the browser asks for.

**Time:** about 15 minutes. **Level:** beginner.

What you use:

- `getPage` on the server, which reads `cursor` and `limit` and returns a typed `Page<T>`.
- `pages` in the browser, which walks through every page.
- With Exposed, `pageBy` and `toDto`, which write the query for you.
- With `components()`, a `<DataTable>` that does all of it.

## Step 1: a paged route

Declare the route with `getPage` and return a `Page<T>`:

```kotlin
route("/api/users") {
    getPage<User> { request -> users.page(request.cursor, request.limit) }
}
```

`Page<T>` has `items` and `next`, the cursor of the next page, or `null` on the last one. `getPage` reads the `cursor` and `limit` query parameters for you:

| Parameter | Default | What it does |
| --- | --- | --- |
| `path` | `""` | The path below the current route, such as `getPage<Note>("/feed")` |
| `defaultLimit` | `50` | The limit when the query has none, or one that is not a number |
| `maxLimit` | `100` | The largest limit. The limit never leaves the range from 1 to `maxLimit` |

```kotlin
route("/api/notes") {
    getPage<Note>("/feed", defaultLimit = 20, maxLimit = 200) { request -> store.page(request.cursor, request.limit) }
}
```

It also describes the route, so the generated client knows the parameters and the `Page<User>` it returns, even without Ktor's compiler plugin.

## Step 2: make the cursor

Your store returns the rows after the cursor, and the cursor of the next page:

```kotlin no-check
fun page(cursor: String?, limit: Int): Page<User> {
    val after = cursor?.toIntOrNull() ?: 0
    val rows = all.filter { it.id > after }.sortedBy { it.id }.take(limit + 1)
    val items = rows.take(limit)
    return Page(items, next = if (rows.size > limit) items.last().id.toString() else null)
}
```

- Use the ID or sort key of the last item as the cursor, not an offset, so rows added while someone pages do not shift the results.
- Ask for one row more than the limit: if it is there, there is a next page.
- Always cap `limit` on the server. `getPage` does it for you.

## Step 3: read every page in the browser

`pages` takes the generated function and walks through the pages, one array of items at a time:

```ts
import { api, pages } from '#api';

for await (const batch of pages(api.notes.getFeed, { limit: '20' })) notes.push(...batch);
```

It stops after the page whose `next` is `null`. The options you pass as the third argument, such as a `signal`, go to every request.

## Step 4: a "Load more" button

Most pages show the first page and load more on request:

```svelte no-check
<script lang="ts">
    import { onMount } from 'svelte';
    import { api, type Note } from '#api';

    let items = $state<Note[]>([]);
    let next = $state<string | null | undefined>(undefined);
    let loading = $state(false);

    async function more() {
        loading = true;
        try {
            const page = await api.notes.getFeed({ cursor: next ?? undefined, limit: '20' });
            items.push(...page.items);
            next = page.next ?? null;
        } finally {
            loading = false;
        }
    }

    onMount(more);
</script>

<ul>
    {#each items as note (note.id)}
        <li>{note.title}</li>
    {/each}
</ul>

{#if next}
    <button type="button" onclick={more} disabled={loading}>Load more</button>
{/if}
```

## Show how many there are

Counting every row is often the slowest part of a list, so a page only carries a total when the client asks for it with `?total=true`. `page.total { }` runs your count only then:

```kotlin
routing {
    getPage<Note>("/api/notes/all") { page ->
        val rows = store.page(page.cursor, page.limit)
        Page(rows.items, rows.next, total = page.total { store.count().toLong() })
    }
}
```

```ts no-check
import { api } from '#api';

const first = await api.notes.all({ total: true });
const heading = `${first.total} notes`;
```

| Asked with | `page.wantsTotal` | `total` in the answer |
| --- | --- | --- |
| no `total` | `false` | left out, your count is never run |
| `?total=true` or `?total=1` | `true` | the number your block returns |

Ask for it on the first page only, and keep the number while you load more. `Page.total` is a `Long?`; in TypeScript it is `total?: number | null` on every page type, including the one `pages()` reads.

## With filters

A paged route that reads more query parameters, such as a filter, is written by hand. `getPage` only does what these lines do:

```kotlin
get("/api/users") {
    val cursor = call.queryParameters["cursor"]
    val limit = call.queryParameters["limit"]?.toIntOrNull() ?: 50
    val page: Page<User> = users.page(cursor, limit.coerceIn(1, 100))
    call.respond(page)
}
```

For typed filters, read the query into a class with [`call.query<T>()`](../features/calling-the-api.md#query-parameters-as-a-class), with `cursor` and `limit` as two of its fields, and describe the route with `.queryOf<T>()`.

```ts no-check
import { api, pages } from '#api';

for await (const users of pages(api.users.list, { limit: '100' })) table.push(...users);
```

## With Exposed

For apps that use [Exposed](https://www.jetbrains.com/exposed/) with JDBC, two helpers do the usual parts. They are only loaded when you call them, so the library does not bring Exposed with it.

`pageBy` pages a query by a column and returns a `Page`. It adds the condition for the cursor, the order and the limit, and makes the next cursor from the last row:

```kotlin no-check
import io.github.nijasc.ktor.svelte.pageBy
import io.github.nijasc.ktor.svelte.toDto

getPage<Note>("/api/notes") { request ->
    transaction {
        Notes.selectAll().where { Notes.owner eq userId }.pageBy(Notes.id, request) { it.toDto<Note>() }
    }
}
```

- The column is what the list is ordered by, newest first unless you pass `descending = false`. Use one whose values are unique, such as the id, or rows with equal values can be skipped between pages.
- It takes a `PageRequest` or a cursor and a limit, for `Int` and `Long` columns. For another type, pass `parse` to turn the cursor text back into a value.
- Do not order the query yourself. A cursor that the list never gave out is answered with 400.

`toDto` turns a row into a `@Serializable` class by matching property names to column names, `starCount` to `star_count` too. Enums stored as text, nullable columns and properties with defaults work as you would expect. For a property the row does not have, or one that is stored differently, pass the value:

```kotlin no-check
row.toDto<Note>("createdAt" to Instant.fromEpochMilliseconds(row[Notes.createdAt]), "author" to author)
```

When a required property has neither a column nor a passed value, the error names it and lists the row's columns. After a join, two tables may have a column of the same name, and the first one selected is used.

## A table without the code

With `libraries { components() }`, the generated [`<DataTable>`](../features/frontend-libraries.md#datatable) does all of the above for a table: it takes the route's function and a list of columns, and loads, pages and shows the empty and failed states itself.

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import DataTable from '#components/DataTable.svelte';
</script>

<DataTable
    load={api.notes.getFeed}
    query={{ limit: '20' }}
    paging="pages"
    key={(note) => note.id}
    columns={[
        { key: 'title', label: 'Title' },
        { key: 'createdAt', label: 'Created', text: (note) => new Date(note.createdAt).toLocaleDateString() }
    ]}
/>
```

`paging="pages"` shows one page with Previous and Next, and the default `'more'` adds rows with a Load more button. The pages are cursors, so the table can go forward and back, not jump to page 7.

## Good to know

- Cursor paging has no page numbers and no total. If you need "page 3 of 12", count separately and accept that rows can move between pages.
- `limit` arrives as text in the generated client (`{ limit: '20' }`) on `getPage` routes, because the route only declares the parameter, not its type. A route with a [query class](../features/calling-the-api.md#query-parameters-as-a-class) gets a typed number.
