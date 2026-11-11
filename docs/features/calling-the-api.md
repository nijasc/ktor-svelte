# Calling the API

Use the generated client from components and load functions, handle typed errors, stream events, page through lists and upload files.

```ts
import { api, apiConfig } from '#api';

const notes = await api.notes.list({ search: 'milk' });
const note = await api.notes.get(1);
await api.notes.update(1, { title: 'Oat milk' });

apiConfig.headers['Authorization'] = 'Bearer token';
```

When several components load the same data at the same time, set `apiConfig.dedupeGets = true`. Identical GET requests that are still in flight then share one network request and get the same parsed result, so do not mutate it. Calls with their own `headers`, `fetch` or `signal` are never shared, and nothing is cached after a response arrives. It is off by default.

Errors are typed too. Ktor's compiler plugin finds error responses such as `call.respond(HttpStatusCode.NotFound, Problem(...))`, and `isApiError` narrows the body:

```ts
import { api, isApiError, isValidationError } from '#api';

try {
    await api.notes.create({ title: '' });
} catch (error) {
    if (isValidationError(error)) showErrors(error.body.fields);
    if (isApiError(error, 'notes.get')) console.log(error.body.message);
}
```

Errors that `StatusPages` sends are invisible to the compiler plugin, because its handlers are plain lambdas. Declare them once, and they join the typed errors of every API endpoint, unless a route already declares that status itself:

```kotlin
install(StatusPages) {
    exception<NotFoundException> { call, cause -> call.respond(HttpStatusCode.NotFound, Problem(cause.message.orEmpty())) }
}
install(Svelte) {
    errorResponse<Problem>(HttpStatusCode.NotFound, HttpStatusCode.Conflict)
}
```

Routes that declare a `text/event-stream` response, for example through `describe`, become async generators. Each event's `data` is parsed as JSON when possible, and the stream ends when the connection closes or you stop iterating:

```ts
for await (const tick of api.ticks.watch()) console.log(tick);
```

Every endpoint is also exported on its own, named after its group and service, such as `notesList` or `notesGet`. Import those in pages that use only a few endpoints, and the bundler leaves the rest of the client out of that page:

```ts
import { notesGet } from '#api';

const note = await notesGet(1);
```

For paged lists, return `Page<T>` from `io.github.nijasc.ktor.svelte` and read a `cursor` query parameter. `next` is the cursor of the following page, or `null` on the last one:

```kotlin
get("/api/notes/feed") {
    val cursor = call.queryParameters["cursor"]
    val page: Page<Note> = store.page(cursor, limit = 20)
    call.respond(page)
}
```

`pages` turns any such endpoint into an async iterator that fetches one page at a time, typed from the endpoint:

```ts
import { api, pages } from '#api';

for await (const notes of pages(api.notes.getFeed, { limit: '50' })) render(notes);
```

Uploads work with `FormData`. Ktor cannot infer a multipart body from `receiveMultipart`, so describe it once, and the generated function takes `body: FormData`:

```kotlin
post("/api/notes/{id}/attachments") {
    call.receiveMultipart().forEachPart { part -> part.dispose() }
    call.respond(HttpStatusCode.NoContent)
}.describe {
    requestBody { ContentType.MultiPart.FormData() }
}
```

Pass `onUploadProgress` to follow the upload. `fetch` cannot report upload progress, so such a call uses `XMLHttpRequest` instead, with the same headers, errors and `signal` support:

```ts
const form = new FormData();
form.append('file', file);
await api.notes.attachments(id, form, {
    onUploadProgress: ({ loaded, total }) => (progress = total ? loaded / total : 0)
});
```

Uploads count towards `maxApiBodySize`, which is 1 MiB by default, so raise it for routes that accept files.

Service names follow your routes: `GET /notes` is `list`, `GET /notes/{id}` is `get`, `POST` is `create`, `PUT` is `update`, `DELETE` is `delete`, and `POST /notes/{id}/archive` is `archive`. Set `operationId` in `describe` to choose your own. Inside a SvelteKit `load`, use `apiWith(event)`. It is the same client, but every call goes through SvelteKit's `fetch`, which prerendering and client-side navigation need:

```ts
import { apiWith } from '#api';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    return { notes: await api.notes.list(), stats: await api.stats.list() };
};
```

In development, ktor-svelte also writes `build/ktor-svelte/routes.json`, which maps every generated service to the Kotlin route that serves it:

```json
"notes.get": { "method": "GET", "path": "/api/notes/{id}", "file": "notes/Routes.kt", "line": 43 }
```

Search it for the operation name you see in the frontend, or let an editor plugin use it to jump from a call to its route. `file` is relative to your source root, and `line` is the line of the route's handler. It lives in `build/` because line numbers change with every edit. When ktor-svelte cannot read a handler's location, the entry has only `method` and `path`.

A `fetch` passed in the options of a single call still wins.

To refresh the files without your dev server, for example in CI, run the task below and check for a diff. It starts your app once, so the app's port must be free.

```bash
./gradlew svelteGenerateTs
```

## Request IDs

Every call from the generated client sends a fresh `X-Request-Id`. The server keeps it when it is well formed, letters, digits, dots, dashes and underscores up to 128 characters, or generates one, and sends it back in the response. Unhandled errors are logged with it, and `ApiError.requestId` carries it, so a user can quote one ID that support finds in the logs:

```ts
try {
    await api.notes.create(draft);
} catch (error) {
    if (error instanceof ApiError) showError(`Something went wrong. Reference: ${error.requestId}`);
}
```

The ID is available in routes as `call.callId`, and with Ktor's `CallLogging` you can put it into every log line with `callIdMdc("requestId")`. The client only sends the header to its own origin, so it never causes CORS preflights. If you install Ktor's `CallId` yourself, your setup is used. `requestIds = false` turns it off.

## Timeouts

A request that hangs blocks the UI until the browser gives up, which can take minutes. Set a timeout for every call, or for one:

```ts
import { api, apiConfig, isTimeoutError } from '#api';

apiConfig.timeout = 10_000;

try {
    const report = await api.reports.create(input, { timeout: 60_000 });
} catch (error) {
    if (isTimeoutError(error)) showError('The server took too long. Please try again.');
}
```

A per-call `timeout` wins over `apiConfig.timeout`, and your own `signal` still works next to it. Event streams ignore `apiConfig.timeout`, because a live stream is supposed to stay open. Give one its own `timeout` if you want that.
