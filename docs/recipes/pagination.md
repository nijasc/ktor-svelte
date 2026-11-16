# Page through long lists

Declare the route with `getPage`, return a `Page<T>`, and `pages` reads it one page at a time:

```kotlin
route("/api/users") {
    getPage<User> { request -> users.page(request.cursor, request.limit) }
}
```

`getPage` reads the `cursor` and `limit` query parameters for you. A missing or unreadable `limit` becomes 50, and the limit never leaves the range from 1 to 100. Change both with `getPage<User>(defaultLimit = 20, maxLimit = 200)`. It also describes the route, so the generated client knows the parameters and the `Page<User>` it returns, even without Ktor's compiler plugin.

A paged route that reads more query parameters, such as a filter, is written by hand. `getPage` only does what these lines do:

```kotlin
get("/api/users") {
    val cursor = call.queryParameters["cursor"]
    val limit = call.queryParameters["limit"]?.toIntOrNull() ?: 50
    val page: Page<User> = users.page(cursor, limit.coerceIn(1, 100))
    call.respond(page)
}
```

```ts no-check
import { api, pages } from '#api';

for await (const users of pages(api.users.list, { limit: '100' })) table.push(...users);
```

- Use the ID or sort key of the last item as the cursor, not an offset, so rows added while someone pages do not shift the results.
- Always cap `limit` on the server.

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

