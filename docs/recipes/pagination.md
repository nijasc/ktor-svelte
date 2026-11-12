# Page through long lists

Return `Page<T>` with a `cursor` query parameter, and `pages` reads it one page at a time:

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
