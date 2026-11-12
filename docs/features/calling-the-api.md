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

## Prefetch on hover

Projects created by ktor-svelte set `data-sveltekit-preload-data="hover"` on `<body>`, so SvelteKit runs a page's `load` function when the pointer rests on a link to it. A `load` that calls the API through `apiWith(event)` therefore fetches its data before the click, and the page opens without waiting. Add the attribute to `src/app.html` in older projects.

For data a component fetches itself, prefetch the call. The next identical GET within 10 seconds gets that response instead of a new request, once:

```svelte
<script lang="ts">
    import { api, prefetchOnHover } from '#api';
</script>

{#each notes as note (note.id)}
    <a href="/notes/{note.id}" use:prefetchOnHover={() => api.notes.get(note.id)}>{note.title}</a>
{/each}
```

`prefetchOnHover` starts after the pointer rests for 50 ms, or at once on focus or touch. Call `prefetch(() => api.notes.get(id))` yourself for other triggers, and pass a second argument to change how long the result is kept, in milliseconds. Only GET requests made synchronously inside the callback are prefetched, without their own `headers` or `signal`, and a failed prefetch is simply forgotten.

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

```ts no-check
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
import type { PageLoad } from './$types';

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

## Show errors automatically

Turn on toasts in Gradle, and every failed API call shows a short message in the corner of the page, so you don't have to write error handling for the common case:

```kotlin
svelte {
    libraries {
        toasts()
    }
}
```

Run `svelteSync` once. It writes `src/lib/ktor-svelte/toasts.ts` and a `src/hooks.client.ts` that sets `apiConfig.onError`. The message comes from the error body's `message`, such as `Problem("That note does not exist.")`, or reads "Something went wrong (error 500)" with the request ID for server errors. Network failures and timeouts get their own message. With DaisyUI, toasts are DaisyUI alerts in your theme. Otherwise they bring their own small style.

Some errors are left to you, because a toast would be the wrong answer:

- 422 validation errors, which your form shows next to the fields.
- 401, which `apiConfig.onUnauthorized` handles.
- Aborted requests, failed prefetches, and calls made with `silent: true`, such as `api.notes.get(id, { silent: true })`.

The promise still rejects, so you can add handling where you want more. Call `toast('Saved.', { kind: 'success' })` from `#lib/ktor-svelte/toasts.ts` for your own messages, and change the built-in texts through `toastMessages`. Without `toasts()`, `apiConfig.onError` is yours to set, for example to report errors to a monitoring service.

## Reload after a deploy

Every API response carries the fingerprint of the frontend build the server runs, in the `X-Ktor-Svelte-Build` header. When a response reports a different build than the first one the page saw, the client calls `apiConfig.onNewBuild`, so you can offer a reload instead of running old code against a new API:

```ts
import { apiConfig } from '#api';

apiConfig.onNewBuild = () => {
    showToast('A new version is available.', { action: 'Reload', onAction: () => location.reload() });
};
```

Set `buildHeader = false` in `install(Svelte)` to leave the header out.

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

```ts no-check
import { api, apiConfig, isTimeoutError } from '#api';

apiConfig.timeout = 10_000;

try {
    const report = await api.reports.create(input, { timeout: 60_000 });
} catch (error) {
    if (isTimeoutError(error)) showError('The server took too long. Please try again.');
}
```

A per-call `timeout` wins over `apiConfig.timeout`, and your own `signal` still works next to it. Event streams ignore `apiConfig.timeout`, because a live stream is supposed to stay open. Give one its own `timeout` if you want that.

## Search as you type

When every keystroke starts a request, an older, slower response can arrive after a newer one and overwrite it. Wrap the call in `latest`, and each call aborts the one before it:

```ts
import { api, isAbortError, latest } from '#api';

const search = latest(api.notes.list);

async function onInput(term: string) {
    try {
        notes = await search({ search: term });
    } catch (error) {
        if (!isAbortError(error)) throw error;
    }
}
```

A superseded call always rejects with an `AbortError`, even when it was cancelled while its body was being read. Your own `signal` still works alongside it.
