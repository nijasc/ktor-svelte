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
