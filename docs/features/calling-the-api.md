# Calling the API

Call your Ktor routes from Svelte components and SvelteKit load functions through the [generated client](./typescript.md), with typed results, typed errors, retries, streams, paged lists and uploads. Most features are one setting or one option on a call.

<Badge type="warning" text="Generated client" /> <Badge type="tip" text="Ktor plugin" />

## On this page

| Group | Sections |
|---|---|
| [Basics](#basics) | [Quick start](#quick-start), [In components](#in-components), [In load functions](#in-load-functions), [Generated page loads](#generated-page-loads), [Inline page data](#inline-page-data), [Request options](#request-options), [Client settings](#client-settings), [Import single functions](#import-single-functions), [Find the Kotlin route of a call](#find-the-kotlin-route-of-a-call) |
| [Errors](#errors) | [Typed errors](#typed-errors), [Error codes](#error-codes), [Errors from StatusPages](#errors-from-statuspages), [Show errors automatically](#show-errors-automatically), [Ask before a call](#ask-before-a-call), [Request IDs](#request-ids) |
| [Reading data](#reading-data) | [Query parameters as a class](#query-parameters-as-a-class), [Share identical requests](#share-identical-requests), [Prefetch on hover](#prefetch-on-hover), [Search as you type](#search-as-you-type), [Paged lists](#paged-lists), [Only some fields](#only-some-fields), [Included relations](#included-relations), [Event streams](#event-streams) |
| [Writing data](#writing-data) | [Refresh the page after a write](#refresh-the-page-after-a-write), [Changing some fields](#changing-some-fields), [Two people, one record](#two-people-one-record), [Writes that are safe to send twice](#writes-that-are-safe-to-send-twice), [Uploads](#uploads) |
| [The server talks back](#the-server-talks-back) | [Toasts from the server](#toasts-from-the-server), [Navigation from the server](#navigation-from-the-server), [Reload after a deploy](#reload-after-a-deploy), [The visitor's time zone](#the-visitor-s-time-zone) |
| [Slow and flaky networks](#slow-and-flaky-networks) | [Timeouts](#timeouts), [Retries](#retries), [Rate limits](#rate-limits) |
| [Testing](#testing) | [Fixtures for frontend tests](#fixtures-for-frontend-tests) |
| [Full examples](#full-examples) | [A notes page](#a-notes-page), [A search box](#a-search-box), [A paged table](#a-paged-table) |

## Basics

### Quick start

```ts
import { api, apiConfig } from '#api';

const notes = await api.notes.list({ search: 'milk' });
const note = await api.notes.get(1);
await api.notes.update(1, { title: 'Oat milk' });

apiConfig.headers['Authorization'] = 'Bearer token';
```

Every function returns a promise of the route's response type and throws an [`ApiError`](#typed-errors) for any status that is not a success. How the functions are named is described in [Service names](./typescript.md#service-names).

### In components

Call the client from a component's script, from an event handler or from an `{#await}` block:

```svelte
<script lang="ts">
    import { api, errorMessage } from '#api';

    const loading = api.notes.list();
</script>

{#await loading}
    <p>Loading...</p>
{:then found}
    <ul>
        {#each found as item (item.id)}
            <li>{item.title}</li>
        {/each}
    </ul>
{:catch error}
    <p role="alert">{errorMessage(error)}</p>
{/await}
```

For data a page needs before it shows, prefer a `load` function, below.

### In load functions

Inside a SvelteKit `load` function, every call has to go through the `fetch` SvelteKit gives you. `apiWith(event)` returns the same client, but every call goes through SvelteKit's `fetch`, which prerendering and client-side navigation need:

```ts
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    return { notes: await api.notes.list(), stats: await api.stats.list() };
};
```

For a single call, pass `fetch` as the last argument instead:

```ts no-check
import { api } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const note = await api.notes.get(params.id, { fetch });
    return { note };
};
```

A `fetch` passed in the options of a single call still wins over the one from `apiWith`.

With its own `fetch`, SvelteKit knows which requests a page depends on, reuses a response it already has during hydration, and can rerun the load when you invalidate it. Without it, the call still works, but the browser console warns with `window_fetch_in_load`.

`svelteVerifyLoads` finds the calls that forgot. It reads every `+page.ts`, `+page.js`, `+layout.ts` and `+layout.js`, and fails with the file, the line and the call:

```bash
./gradlew svelteVerifyLoads
```

```text
src/routes/notes/[id]/+page.ts:6  api.notes.get(params.id)  ->  use apiWith(event), or pass { fetch } as the last argument
```

It is not part of `check`. The [lint rule](./frontend-libraries.md#lint-rules) `ktor-svelte/fetch-in-load` reports the same thing in the editor.

### Generated page loads

Most `+page.ts` files only fetch a few things and return them. Say which routes a page needs in Kotlin instead, next to the routes, and the plugin writes the load for you:

```kotlin no-check
routing {
    val members = get("/api/members") { call.respond(members.all()) }
    route("/api/tasks/{id}") {
        val task = get { call.respond(tasks.find(call.id())) }
        val comments = get("/comments") { call.respond(tasks.comments(call.id())) }

        pageLoad(FrontendRoutes.Patterns.tasksId) {
            data("task", task)
            data("comments", comments)
            data("members", members)
        }
    }
}
```

Both sides are checked by the compiler: the page is a constant of the generated [`FrontendRoutes.Patterns`](./routes.md) (`"/tasks/[id]"`), and each call is the route object that `get` returns. Rename or remove the page or the route, and the build fails where it is used.

The next `svelteGenerateTs`, or the dev server, writes two things:

- `loadTasksId` in `src/lib/api/loads.ts`, exported from `#api`, which runs the calls at the same time through SvelteKit's `fetch`;
- `src/routes/tasks/[id]/+page.ts` (or wherever the page lives, route groups such as `(app)` included), a one-line file that uses it.

The page then reads typed data, with no load file of its own:

```svelte no-check
<script lang="ts">
    let { data } = $props();
</script>

<h1>{data.task.title}</h1>
<p>{data.comments.length} comments</p>
```

| `data(...)` | What it does |
| --- | --- |
| `key` | The name the page reads, as `data.key` |
| `route` | The route to call: what `get(...) { }` returned |
| `params` | Which page parameter fills which path parameter, when the names differ: `mapOf("id" to "taskId")` |

- Path parameters are filled from the page parameter of the same name: `[id]` in the page fills `{id}` in the route. A route that takes a number gets `Number(params.id)`.
- Only `GET` routes under the API prefixes, without a required body, query or header, can be loaded this way. A `post` route is refused at startup, the others when the client is generated, with what to do; write that load yourself.
- `pageLoad` works anywhere inside `routing { }`, so the routes of a page can come from different files: pass the route objects to where the `pageLoad` is.
- The calls are `silent`: a failed one throws to the page's error page instead of showing a toast.
- A `+page.ts` you wrote yourself is never touched; only files that start with the `// Generated by ktor-svelte` line are written. The function in `loads.ts` is still generated, so a hand-written load that needs a `_nav` export, a redirect or a computed value can call it: `return { ...(await loadTasksId(event)), extra }`.
- Remove a `pageLoad` and its generated `+page.ts` is deleted on the next generation. `svelteVerifyTs` reports a generated load that is out of date.

### Inline page data

When someone opens a page directly, for example from a link in an email, the browser first gets the HTML, then runs the load, then waits for the API. With `inline = true`, the server makes the calls of every [`pageLoad`](#generated-page-loads) itself and puts the answers into the HTML, so the page renders with its data at once:

```kotlin
install(Svelte) {
    pageLoads {
        inline = true
    }
}
```

There is nothing to change in the frontend: the generated load reads the data from the page on its first run, and uses the API as before on every later navigation.

| Setting | Default | What it does |
| --- | --- | --- |
| `inline` | `false` | Put the answers of a page's loads into its HTML |
| `inlineTimeout` | `2.seconds` | How long the server waits for all calls of a page before it sends the page without data |

- The server calls its own API over its own port, with the visitor's cookies, `Authorization` and `Accept-Language`, so every call sees the same user, guards and permissions as the browser would.
- All calls of the page run at the same time. If one of them fails, is slower than `inlineTimeout` or does not answer with JSON, the page is sent without data and the browser loads as usual. A visitor who is not signed in gets the page without data, and the guard sends them to the login page as before.
- A page with data is sent with `Cache-Control: private, no-store`, because it holds that visitor's data.
- It works where the plugin serves the built frontend, as in production. In development, pages come from the Vite dev server and load as usual.
- The data is only used when it was made for the path in the address bar, and only once.
- With [`LocaleStrategy.UrlPrefix`](./i18n.md#url-prefix), a page under its language, such as `/de/tasks/5`, gets its data the same way.
- The calls count as requests in your logs, metrics and rate limits, from `127.0.0.1`. They carry an `X-Ktor-Svelte-Inline` header if you want to tell them apart.

### Request options

Every generated function takes the request options as its last argument. They are the options of `fetch`, such as `signal` and `headers`, plus these:

| Option | What it does | Section |
|---|---|---|
| `fetch` | The `fetch` to use for this call | [In load functions](#in-load-functions) |
| `timeout` | Milliseconds before the call gives up | [Timeouts](#timeouts) |
| `retry` | `true`, `false` or `{ attempts, delay, maxDelay }` | [Retries](#retries) |
| `silent` | `true` keeps the error away from `apiConfig.onError`, and so from toasts | [Show errors automatically](#show-errors-automatically) |
| `refresh` | `false` skips `apiConfig.onWrite` after this write | [Refresh the page after a write](#refresh-the-page-after-a-write) |
| `onUploadProgress` | Called with `{ loaded, total }` while a body is sent | [Uploads](#uploads) |

```ts
import { api } from '#api';

const controller = new AbortController();
const found = await api.notes.list({ search: 'milk' }, { signal: controller.signal, timeout: 5000, silent: true });
```

### Client settings

`apiConfig` holds the settings for every call. Set them once, such as in your root layout or `src/hooks.client.ts`:

| Setting | Default | What it does |
|---|---|---|
| `baseUrl` | `''` | Put in front of every path |
| `headers` | `{}` | Sent with every call |
| `fetch` | the global `fetch` | The `fetch` every call uses, such as [`fixtureFetch`](#fixtures-for-frontend-tests) in a test |
| `timeout` | none | [Timeout](#timeouts) for every call, in milliseconds |
| `retry` | off | [Retries](#retries) for reads |
| `dedupeGets` | `false` | [Shares identical GET requests](#share-identical-requests) that are in flight |
| `idempotencyKeys` | on | `false` stops sending the [`Idempotency-Key`](#writes-that-are-safe-to-send-twice) header |
| `sendTimeZone` | on | `false` stops sending the [visitor's time zone](#the-visitor-s-time-zone) |
| `onError` | none | Called with every failed call. [Toasts](#show-errors-automatically) set it for you |
| `onWrite` | none | Called after successful writes, to [refresh the page](#refresh-the-page-after-a-write) |
| `onToast` | none | Shows [toasts from the server](#toasts-from-the-server) |
| `onNavigate` | none | Follows [navigation from the server](#navigation-from-the-server) |
| `onNewBuild` | none | Called when a [new build is deployed](#reload-after-a-deploy) |
| `onUnauthorized`, `loginPage`, `sessionWarning` | | For signed-in users. See [Auth](./auth.md#the-login-page) |

### Import single functions

Every endpoint is also exported on its own, named after its group and service, such as `notesList` or `notesGet`. Import those in pages that use only a few endpoints, and the bundler leaves the rest of the client out of that page:

```ts
import { notesGet } from '#api';

const note = await notesGet(1);
```

### Find the Kotlin route of a call

In development, ktor-svelte also writes `build/ktor-svelte/routes.json`, which maps every generated service to the Kotlin route that serves it:

```json
"notes.get": { "method": "GET", "path": "/api/notes/{id}", "file": "notes/Routes.kt", "line": 43 }
```

- Search it for the operation name you see in the frontend, or let an editor plugin use it to jump from a call to its route.
- `file` is relative to your source root, and `line` is the line of the route's handler.
- It lives in `build/` because line numbers change with every edit.
- When ktor-svelte cannot read a handler's location, the entry has only `method` and `path`.

## Errors

### Typed errors

Every failed call throws an `ApiError` with the `status`, the parsed `body`, the `url`, the `operation` name and the [`requestId`](#request-ids). Errors are typed too. Ktor's compiler plugin finds error responses such as `call.respond(HttpStatusCode.NotFound, Problem(...))`, and `isApiError` narrows the body:

```ts
import { api, isApiError, isValidationError } from '#api';

try {
    await api.notes.create({ title: '' });
} catch (error) {
    if (isValidationError(error)) showErrors(error.body.fields);
    if (isApiError(error, 'notes.get')) console.log(error.body.message);
}
```

| Helper | True for |
|---|---|
| `isApiError(error, 'notes.get')` | An error the route declares, with its body typed |
| `isValidationError(error)` | A 422 with `fields`, from [validation](./validation.md) |
| `isVersionConflict(error)` | A [version conflict](#two-people-one-record) |
| `isRateLimitError(error)` | A 429, with `retryAfter` in milliseconds. See [Rate limits](#rate-limits) |
| `isTimeoutError(error)` | A call that hit its [timeout](#timeouts) |
| `isAbortError(error)` | A call that was aborted, such as by [`latest`](#search-as-you-type) |
| `hasErrorCode(error, code)` | An answer with that one of your [error codes](#error-codes) |
| `isUploadError(error)` | A file that breaks the [upload rules](../recipes/uploads.md#rules-for-both-sides) |

`errorCode(error)` returns the `code` of an error body, or `undefined` when there is none.

When you only need one line to show, `errorMessage` turns anything a call can throw into text: the `message` of the error body when the server sent one, and otherwise a sentence for a timeout, for a lost connection, or for everything else:

```ts
import { api, errorMessage } from '#api';

let problem = '';

try {
    await api.notes.create({ title: 'Buy milk' });
} catch (error) {
    problem = errorMessage(error);
}
```

To change or translate the three built-in sentences, assign to `errorMessages.network`, `errorMessages.timeout` and `errorMessages.failed` once at startup:

```ts
import { errorMessages } from '#api';

errorMessages.network = 'Keine Verbindung zum Server.';
```

### Error codes

A page that has to tell "this email is taken" from "the last admin cannot leave" should not compare status numbers or message text. Give the errors names, in one enum, and name it in `install(Svelte)`:

```kotlin
enum class AccountError { EmailTaken, LastAdmin }

install(Svelte) {
    generateTs = true
    errorCodes<AccountError>()
}
```

A route answers with a code, either directly or by throwing from anywhere below it:

```kotlin
import io.github.nijasc.ktor.svelte.ApiException
import io.github.nijasc.ktor.svelte.respondError

post("/api/register") {
    call.respondError(AccountError.EmailTaken, HttpStatusCode.Conflict)
}

put("/api/admin/users/{id}/role") {
    throw ApiException(AccountError.LastAdmin, HttpStatusCode.Conflict)
}
```

The answer is `{ "message": "Email taken.", "code": "EmailTaken" }` with the given status, 400 when none is given. `respondError` only takes an error status, 400 and above. The generated client knows the enum as the type `ErrorCode`, so a mistyped or removed code no longer compiles:

```ts no-check
import { api, ErrorCode, hasErrorCode } from '#api';

try {
    await api.register.create(form);
} catch (error) {
    if (hasErrorCode(error, ErrorCode.EmailTaken)) emailProblem = error.body.message;
    else throw error;
}
```

The message is the code's name as a sentence unless you say otherwise. There are three places to say otherwise, and the first that applies wins:

| Where | How | Scope |
|---|---|---|
| One answer | `call.respondError(code, status, message = "...")`, or the `message` of `ApiException` | That answer |
| On the server | `errorCodes<AccountError> { call, code -> ... }` returns the text for a code, or null to leave it. It gets the call, so it can translate | Every answer |
| In the browser | `setCodeMessages({ EmailTaken: 'That email already has an account.' })` once at startup | `errorMessage`, and so the toasts of `toasts()`, use this text for the code and ignore what the server sent. A value can be a function, for a translation that depends on the current language |

::: warning
An app has one enum of error codes. A class of your API named `ErrorCode` clashes with the generated type and stops generation.
:::

### Errors from StatusPages

Errors that `StatusPages` sends are invisible to the compiler plugin, because its handlers are plain lambdas. Declare them once, and they join the typed errors of every API endpoint, unless a route already declares that status itself:

```kotlin
install(StatusPages) {
    exception<NotFoundException> { call, cause -> call.respond(HttpStatusCode.NotFound, Problem(cause.message.orEmpty())) }
}
install(Svelte) {
    errorResponse<Problem>(HttpStatusCode.NotFound, HttpStatusCode.Conflict)
}
```

### Show errors automatically

Turn on toasts in Gradle, and every failed API call shows a short message in the corner of the page, so you don't have to write error handling for the common case:

```kotlin
svelte {
    libraries {
        toasts()
    }
}
```

Run `svelteSync` once. It writes `src/lib/ktor-svelte/toasts.ts` and a `src/hooks.client.ts` that sets `apiConfig.onError`.

- The message comes from the error body's `message`, such as `Problem("That note does not exist.")`, or reads "Something went wrong (error 500)" with the request ID for server errors.
- Network failures and timeouts get their own message.
- With DaisyUI, toasts are DaisyUI alerts in your theme. Otherwise they bring their own small style.

Some errors are left to you, because a toast would be the wrong answer:

- 422 validation errors, which your form shows next to the fields.
- 401, which [the login page](auth.md#the-login-page) or `apiConfig.onUnauthorized` handles.
- Aborted requests, failed prefetches, and calls made with `silent: true`, such as `api.notes.get(id, { silent: true })`.

The promise still rejects, so you can add handling where you want more.

```ts no-check
import { toast, toastMessages } from '#lib/ktor-svelte/toasts.ts';

toast('Saved.', { kind: 'success' });
toast('Note deleted.', { action: { label: 'Undo', run: restore } });
toastMessages.close = 'Schliessen';
```

| Function | What it does |
|---|---|
| `toast(message, { kind, duration, action })` | Shows your own message. `kind` is `info`, `success`, `warning` or `error`, `duration` is in milliseconds, and `action` adds a button: `{ label: 'Undo', run: restore }` |
| `toastMessages` | The built-in texts, to change or translate |

Without `toasts()`, `apiConfig.onError` is yours to set, for example to report errors to a monitoring service. See also [Toasts](./frontend-libraries.md#toasts) among the frontend libraries.

### Ask before a call

A call that deletes something should ask first. `confirmed` asks, and only calls when the answer is yes:

```ts no-check
import { api } from '#api';
import { confirmed } from '#lib/ktor-svelte/confirm.ts';

const deleted = await confirmed('Delete this note?', () => api.notes.delete(id), {
    details: 'It cannot be restored.',
    confirm: 'Delete',
    danger: true
});
```

It resolves to what the call returned, or to `undefined` when the answer was no.

| Option | What it does |
|---|---|
| `details` | A second line under the question |
| `confirm`, `cancel` | The button labels. Default to `confirmMessages.confirm` and `confirmMessages.cancel` |
| `danger` | `true` makes the confirm button red and puts the focus on Cancel |

- With DaisyUI on, the question is a modal in your theme. While the call runs, both buttons are disabled, so it cannot be sent twice. When it fails, the modal stays open and shows the error's `message`, and the user can try again or cancel. Escape cancels.
- Without DaisyUI it is the browser's own `confirm`, and a failed call rejects as usual.

`svelteSync` writes the helper to `src/lib/ktor-svelte/confirm.ts` for every project that has generated files. Set `confirmMessages.confirm` and `confirmMessages.cancel` once, such as to your translations.

### Request IDs

Every call from the generated client sends a fresh `X-Request-Id`. The server keeps it when it is well formed, letters, digits, dots, dashes and underscores up to 128 characters, or generates one, and sends it back in the response. Unhandled errors are logged with it, and `ApiError.requestId` carries it, so a user can quote one ID that support finds in the logs:

```ts
try {
    await api.notes.create(draft);
} catch (error) {
    if (error instanceof ApiError) showError(`Something went wrong. Reference: ${error.requestId}`);
}
```

- The ID is available in routes as `call.callId`, and with Ktor's `CallLogging` you can put it into every log line with `callIdMdc("requestId")`.
- The client only sends the header to its own origin, so it never causes CORS preflights.
- If you install Ktor's `CallId` yourself, your setup is used.
- `requestIds = false` in `install(Svelte)` turns it off.

## Reading data

### Query parameters as a class

A list route usually reads its query string one parameter at a time, converts each by hand and guesses what to do with a wrong one, and the generated client sees a handful of optional strings. Describe the query as a class instead:

```kotlin no-check
import io.github.nijasc.ktor.svelte.query
import io.github.nijasc.ktor.svelte.queryOf

@Serializable
data class NoteQuery(
    val search: String? = null,
    val status: Status? = null,
    val mine: Boolean = false,
    @JsonSchema.Minimum(1.0) @JsonSchema.Maximum(100.0) val limit: Int = 20,
    val tags: List<String> = emptyList(),
)

get("/api/notes") {
    val query = call.query<NoteQuery>()
    call.respond(notes.find(query))
}.queryOf<NoteQuery>()
```

- `call.query<NoteQuery>()` reads the query string into the class. Numbers, booleans and enums are converted, a parameter that is given several times fills a list, and what is not there takes the property's default.
- A value that does not fit, such as `limit=many` or an unknown status, and a missing parameter without a default, are answered with the same 422 as a request body, with the field named. The `JsonSchema` annotations and `Validated` rules apply too.
- Parameters the class does not have are ignored, and an empty one counts as not given, as a form sends it for an empty field.
- `.queryOf<NoteQuery>()` tells the generated client about the parameters. Without it the function has no `query` argument.
- In a [resource](./typescript.md#resource-routes), `list<NoteQuery> { query -> }` does both.

The generated function takes the same fields with their types:

```ts no-check
await api.notes.list({ status: Status.OPEN, mine: true, limit: 50, tags: ['home', 'food'] });
```

The properties can be text, numbers, booleans, enums, value classes over those, types that are written as text such as dates, and lists of them. A nested class is refused when the route is declared.

### Share identical requests

When several components load the same data at the same time, set `apiConfig.dedupeGets = true`:

```ts
import { apiConfig } from '#api';

apiConfig.dedupeGets = true;
```

- Identical GET requests that are still in flight then share one network request and get the same parsed result, so do not mutate it.
- Calls with their own `headers`, `fetch` or `signal` are never shared.
- Nothing is cached after a response arrives.
- It is off by default.

### Prefetch on hover

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

- `prefetchOnHover` starts after the pointer rests for 50 ms, or at once on focus or touch.
- Call `prefetch(() => api.notes.get(id))` yourself for other triggers, and pass a second argument to change how long the result is kept, in milliseconds.
- Only GET requests made synchronously inside the callback are prefetched, without their own `headers` or `signal`.
- A failed prefetch is simply forgotten.

```ts
import { api, prefetch } from '#api';

void prefetch(() => api.notes.get(id), 30_000);
```

### Search as you type

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

A superseded call always rejects with an `AbortError`, even when it was cancelled while its body was being read. Your own `signal` still works alongside it. A complete component is in [A search box](#a-search-box).

### Paged lists

For paged lists, return `Page<T>` from `io.github.nijasc.ktor.svelte` and read a `cursor` query parameter. `next` is the cursor of the following page, or `null` on the last one:

```kotlin
get("/api/notes/feed") {
    val cursor = call.queryParameters["cursor"]
    val page: Page<Note> = store.page(cursor, limit = 20)
    call.respond(page)
}
```

`getPage` writes those lines for you and reads `cursor`, `limit` and `total`. A page carries a total count only when the client asks with `total: true`, see [Show how many there are](../recipes/pagination.md#show-how-many-there-are). See [Page through long lists](../recipes/pagination.md) for its settings and for paging an Exposed query.

`pages` turns any such endpoint into an async iterator that fetches one page at a time, typed from the endpoint:

```ts
import { api, pages } from '#api';

for await (const notes of pages(api.notes.getFeed, { limit: '50' })) render(notes);
```

To fetch one page at a time on demand, such as behind a "Load more" button, call the endpoint with the `cursor` yourself, as in [A paged table](#a-paged-table).

### Only some fields

A list that shows three columns does not need the other twenty fields of each row. Let the route answer with only the fields the page asks for:

```kotlin
get("/api/notes/feed") {
    call.respond(store.page(call.queryParameters["cursor"], limit = 20))
}.sparseFields<Note>()
```

The page names the fields, and the type of the answer narrows to exactly those:

```ts no-check
const feed = await api.notes.getFeed({ fields: ['id', 'title'] });
feed.items[0].title;
feed.items[0].body;
```

The first line compiles; the second does not, since `body` was not asked for and is not in the answer. Without `fields`, the call returns every field, as before.

- The server reads `?fields=id,title` or `?fields=id&fields=title`, and sends only those fields of each object: of a list, of one object, or of the `items` of a [page](#paged-lists).
- A field that the class does not have is refused with 400 and a message that lists the fields there are, such as `secret is not a field of Note. Ask for id, title, body.`
- The fields are the top-level properties of the class, by their JSON names, so `@SerialName` is respected. Nested objects are sent whole.
- Routes without `sparseFields` ignore a `fields` parameter.
- Passed on as a value, such as `load={api.tasks.list}` for a table, the call keeps the full type, and `fields` can still go into the table's `query`.
- The trimming happens after the answer is serialized, so the handler does not change. To save the database work too, read the asked fields in the handler and load less.

### Included relations

A page that shows tasks with their latest comment would otherwise make one call for the tasks and one per task for the comments. Let the route add related objects on request instead:

```kotlin
get("/api/notes/feed") {
    call.respond(store.page(call.queryParameters["cursor"], limit = 20))
}.includes<Note> {
    relation<User?>("author") { notes -> notes.map { users.find(it.id.toString()) } }
}
```

```ts no-check
const feed = await api.notes.getFeed({ include: ['author'] });
feed.items[0].author?.name;
const plain = await api.notes.getFeed();
plain.items[0].author;
```

The field `author` exists in the type only when it was asked for: the second access does not compile.

- The resolver gets all items of the answer at once, typed, and returns one value per item, in the same order. So it can load every author with one query. A wrong number of values is an error that says so.
- The server reads `?include=author` (comma-separated or repeated), refuses a relation the route does not declare with 400 and the list of those it has, and adds the values to each item of a list, of one object, or of the `items` of a page.
- A relation is computed only when it was asked for.
- It works together with [only some fields](#only-some-fields): `?fields=id,title&include=author` sends the two fields and the author.
- A relation may not have the name of a field of the class. The relation's values are serialized with the default `Json` settings.

### How the types follow the query

Both features are declared on the route, so the generator knows what can be asked for, from an `x-ktor-svelte-fields` and an `x-ktor-svelte-include` entry in the route's OpenAPI description. The generated call has two signatures:

- one generic over the asked fields and relations, which returns `Pick<Task, F> & Pick<{ lastComment: Comment | null }, I>` wherever the answer holds a task,
- and one with the full type, which TypeScript uses when the call is passed on as a value, such as `load={api.tasks.list}`.

Without `fields` and `include`, the type is the full class without relations, as for any other route.

### Event streams

Routes that declare a `text/event-stream` response, for example through `describe`, become async generators. Each event's `data` is parsed as JSON when possible, and the stream ends when the connection closes or you stop iterating:

```ts no-check
for await (const tick of api.ticks.watch()) console.log(tick);
```

- Pass a `signal` and abort it when the component goes away, to close the connection.
- Event streams ignore `apiConfig.timeout`, because a live stream is supposed to stay open. Give one its own `timeout` if you want that.
- Streams are never retried.

The server side, with a complete component, is in [Stream live updates](../recipes/live-updates.md).

## Writing data

### Refresh the page after a write

After you create, change or delete something, the lists and details on the page are out of date. Tell the client what to do after a successful write, once, in your root layout, and every page keeps itself current:

```ts no-check
import { refreshAll } from '$app/navigation';
import { apiConfig } from '#api';

apiConfig.onWrite = () => void refreshAll();
```

- `onWrite` runs after every POST, PUT, PATCH and DELETE that succeeds, and `refreshAll` reruns the `load` functions of the page you are on.
- Writes that finish together, such as three calls in a `Promise.all`, cause one refresh, not three.
- A failed write does not trigger it, and neither does a read.

A call that should not refresh the page, such as saving a draft while the user types, opts out:

```ts no-check
await api.notes.update(id, draft, { refresh: false });
```

The client does not import SvelteKit itself, so nothing happens until you set `onWrite`. That also means you can do something else there, such as refreshing only one resource with `invalidate`.

### Changing some fields

A `PUT` replaces a record, so the browser has to send every field, also the ones the visitor never touched. A `PATCH` sends only what changed, but then the server has to tell a field that was left out from one that was set to null, and a nullable Kotlin property cannot: both arrive as null. `Patch<T>` can, without a second DTO:

```kotlin no-check
import io.github.nijasc.ktor.svelte.Patch

patch("/api/notes/{id}") {
    val patch = call.receive<Patch<NoteInput>>()
    val stored = notes.find(id)
    val updated = patch.applyTo(stored.toInput())
    call.respond(notes.save(id, updated))
}
```

- `applyTo` returns the given object with the sent fields replaced. A field that was not sent keeps its value, and one sent as null becomes null.
- The result is checked like a received object: the bounds from annotations and the `Validated` rules, answered with the usual 422. `@Trim` and the other normalisers apply to the sent fields.
- A field the class does not have, null for a property that is not nullable, or a value of the wrong type is a 400.
- `NoteInput::title in patch`, `patch.has("title")` and `patch.fields` say what was sent, for a route that treats one field specially. `patch.isEmpty()` is true when nothing was sent.

In the generated client the body is the class with every field optional, and null allowed where the class allows it:

```ts no-check
import { api, patchOf } from '#api';

await api.notes.patch(note.id, { dueOn: null });
await api.notes.patch(note.id, patchOf(original, draft));
```

| Helper | What it does |
|---|---|
| `patchOf(before, after)` | The fields that differ between two objects, with null for the ones that were cleared, so an edit form sends what the visitor changed and nothing else |
| `applyPatch(target, patch)` | Does on the client what `applyTo` does on the server, for showing the result before the answer is there |
| `Patch<T>` | The type of both |

### Two people, one record

Two people open the same record, both change it, both save. Without a check the second save silently replaces the first. With a version, the second one is told.

Give the record a number that changes on every save, a counter or the time of the last change, send it out with the record and take it back with an update:

```kotlin no-check
import io.github.nijasc.ktor.svelte.respondIfStale

@Serializable
data class Note(val id: Int, val title: String, val version: Long)

@Serializable
data class NoteUpdate(val title: String, val version: Long? = null)

put("/api/notes/{id}") {
    val update = call.receive<NoteUpdate>()
    val stored = notes.find(id)
    if (call.respondIfStale(update.version, stored.version) { stored }) return@put
    call.respond(notes.save(id, update))
}
```

- When the version that came in is not the stored one, `respondIfStale` answers 409 with the code `version.conflict` and the record as it is now, and returns true. The block that gives the record only runs then.
- An update without a version is not checked, so make the field required if every client must send it.
- The third argument is the message, for your own wording or language. It defaults to "Someone else changed this in the meantime."

In the browser, `isVersionConflict` recognises the answer and gives you the other person's record:

```ts no-check
import { api, isVersionConflict, type Note } from '#api';

try {
    note = await api.notes.update(note.id, draft, { silent: true });
} catch (error) {
    if (!isVersionConflict<Note>(error)) throw error;
    theirs = error.body.current;
}
```

From there the two usual ways out are one line each. To load their version, show `theirs` and start over. To save yours anyway, set `draft.version = theirs.version` and send again.

[`formState`](validation.md#form-state) does the bookkeeping: after a conflict, `form.conflict` holds their record, `form.takeTheirs()` resets the form to it, and `form.keepMine()` takes over their version so the next `form.submit` goes through. Pass `takeTheirs` a value when the form's type is not the record's type.

### Writes that are safe to send twice

A `GET` can be repeated without harm. A `POST` cannot: when the answer is lost on the way back, the browser does not know whether the order was placed, and sending it again may place it twice. That is why only `GET` requests are [retried](#retries) by default.

An idempotency key removes the doubt. The generated client adds a header, `Idempotency-Key`, with a fresh random value to every write, and uses the same value when it sends that call again. Turn on the server side, and a repeated key is answered with the stored first answer instead of doing the work again:

```kotlin
install(Svelte) {
    idempotency()
}
```

Now a write can be retried, when the call asks for it:

```ts no-check
await api.orders.create(order, { retry: true });
```

- The repeat gets the same status, body and headers as the first answer, plus `Idempotency-Replayed: true`. [Toasts and navigation from the server](#toasts-from-the-server) are repeated with it, since the first ones never arrived.
- An answer with a status of 500 and above is not kept, so the retry does the work. A repeat that arrives while the first is still running is answered with 409 and the code `idempotency.inProgress`, which the client waits for and retries.
- A key counts for one caller (the same `Authorization` and `Cookie` headers), one method and one path. Somebody else sending the same key gets their own result.
- Streamed answers and answers above 1 MiB are not kept. Reads and routes outside the API prefixes are not looked at.

| Setting in `idempotency { }` | Default | What it does |
|---|---|---|
| `ttl` | `10.minutes` | How long an answer is kept |
| `maxEntries` | `10_000` | How many answers are kept, in memory |

```kotlin no-check
install(Svelte) {
    idempotency {
        ttl = 30.minutes
        maxEntries = 50_000
    }
}
```

With several instances of the app behind a load balancer, a repeat only finds the answer on the instance that gave it.

`retry` in `apiConfig` still applies to reads only. A write is retried when its own call says `retry`, so the decision stays next to the routes where you know the server side is on. To stop sending the header, set `apiConfig.idempotencyKeys = false`, which also stops writes from being retried.

### Show that something is still saving

`pendingWrites` knows whether any write is still on its way: every call that is not a `GET`, `HEAD` or `OPTIONS`, from anywhere in the app. Use it for a "Saving..." badge, and `warnBeforeLeaving()` asks before the tab is closed while one is running:

```svelte no-check
<script lang="ts">
    import { pendingWrites, warnBeforeLeaving } from '#lib/api/pending-writes.svelte.ts';

    $effect(() => warnBeforeLeaving());
</script>

{#if pendingWrites.active}
    <span role="status">Saving...</span>
{/if}
```

| Name | What it is |
| --- | --- |
| `pendingWrites.active` | `true` while at least one write is in flight; reactive |
| `pendingWrites.count` | how many writes are in flight |
| `warnBeforeLeaving()` | adds a `beforeunload` guard that only asks while a write is running, and returns the function that removes it; returning it from `$effect`, as above, removes it with the component |
| `watchPendingWrites(listener)` | the same count without Svelte, from `#api`; returns a function that stops listening |

- A write counts from the call until its answer, retries included, and also when it fails.
- The browser shows its own "Leave site?" text; pages cannot change it.
- `warnBeforeLeaving()` covers closing and reloading the tab. Navigations inside the app keep running the write.
- Put both into your root layout once, as the showcase does.

### Uploads

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

::: warning
Uploads count towards `maxApiBodySize`, which is 1 MiB by default, so raise it for routes that accept files.
:::

Rules for size and type that are checked in the browser and on the server, and forms with named fields, are in [Upload files](../recipes/uploads.md).

## The server talks back

### Toasts from the server

Often the route knows best what to tell the user: that the note was saved, that it was the last free seat, that the export will arrive by mail. Say it there:

```kotlin
import io.github.nijasc.ktor.svelte.ToastKind
import io.github.nijasc.ktor.svelte.toast

post("/api/notes") {
    val note = store.create(call.receive<Note>())
    call.toast("Note saved", ToastKind.Success)
    call.respond(HttpStatusCode.Created, note)
}
```

With `toasts()` on, the browser shows it when the answer arrives, and no component has to know. The kinds are `Info` (the default), `Success`, `Warning` and `Error`. With [i18n](./frontend-libraries.md#i18n), pass a message in the visitor's language, such as `call.toast(call.messages.noteSaved())`.

- The toast travels in a response header, so the body and its type stay what they are, and it works with any status, also with an error or an empty 204.
- Call `toast` before you respond.
- A response carries up to five toasts of up to 500 characters each.
- The generated client reads the header on answers from your own origin only, so another server cannot put words into your app.
- Without `toasts()`, set `apiConfig.onToast = (message, kind) => ...` to show them your way, and nothing is shown until you do.
- Calls made on the server during SSR do not show toasts.

### Navigation from the server

"Create it, then open it" is the same few lines in every form: wait for the answer, read the ID, call `goto`. The route already knows where to go, so let it say so:

```kotlin
import io.github.nijasc.ktor.svelte.navigateTo

post("/api/notes") {
    val note = store.create(call.receive<Note>())
    call.navigateTo("/notes/${note.id}")
    call.respond(HttpStatusCode.Created, note)
}
```

With [typed routes](./routes.md) on, write `call.navigateTo(FrontendRoutes.notesId(note.id))`, and a renamed page cannot leave a stale path behind.

After the call succeeded, the browser opens that page with SvelteKit's `goto`, so it is a client-side navigation and not a reload. The code that awaited the call runs first, so it can still use the result. A failed call navigates nowhere.

With `toasts()` on, this is wired up for you. Without it, add one line to your root layout:

```ts no-check
import { goto } from '$app/navigation';
import { apiConfig } from '#api';

apiConfig.onNavigate = (path) => void goto(path);
```

::: tip Safe by design
The path has to be one inside your app: `navigateTo` refuses anything that does not start with a single `/`, and the client ignores such a header as well, and reads it on answers from your own origin only. So the header cannot be used to send a visitor to another site.
:::

### Reload after a deploy

Every API response carries the fingerprint of the frontend build the server runs, in the `X-Ktor-Svelte-Build` header. When a response reports a different build than the first one the page saw, the client calls `apiConfig.onNewBuild`, so you can offer a reload instead of running old code against a new API.

The toasts library has that prompt ready. Turn it on in Gradle and run `svelteSync`:

```kotlin
svelte {
    libraries {
        toasts { reloadPrompt() }
    }
}
```

After a deploy, the next API call shows "A new version is available." with a Reload button. The toast stays until the visitor reloads or closes it, and it shows once, not after every call. Change the texts through `toastMessages.newBuild` and `toastMessages.reload`.

To do something else, set the handler yourself. Your handler wins over the prompt:

```ts no-check
import { apiConfig } from '#api';
import { toast } from '#lib/ktor-svelte/toasts';

apiConfig.onNewBuild = () => {
    toast('We just shipped an update.', { duration: 0, action: { label: 'Reload', run: () => location.reload() } });
};
```

Set `buildHeader = false` in `install(Svelte)` to leave the header out.

### The visitor's time zone

The server usually runs in UTC, and the visitor does not. The generated client sends the browser's time zone with every call to your app, and a route reads it as `call.timeZone`:

```kotlin
get("/api/report") {
    val today = java.time.LocalDate.now(call.timeZone)
    call.respondText("Report for $today")
}
```

- It is a `java.time.ZoneId`, such as `Europe/Zurich`, taken from the `X-Time-Zone` header.
- A request without the header, or with a name the JDK does not know, gets `defaultTimeZone` from `install(Svelte)`, which is `UTC` unless you change it. That covers requests the client does not make, such as a plain link to a download.
- The header only goes to your own origin, never to a `baseUrl` on another host.
- To stop sending it, set `apiConfig.sendTimeZone = false`.

## Slow and flaky networks

### Timeouts

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

- A per-call `timeout` wins over `apiConfig.timeout`, and your own `signal` still works next to it.
- There is no timeout unless you set one.
- Event streams ignore `apiConfig.timeout`, because a live stream is supposed to stay open. Give one its own `timeout` if you want that.

#### A time limit per route

When a route knows how long it may take, say so on the route. The generated function then uses that as its timeout, and the server stops the handler when the time is up:

```kotlin
import kotlin.time.Duration.Companion.seconds

get("/api/reports/summary") {
    call.respond(listOf("Summary"))
}.timeout(30.seconds)
```

```ts no-check
const summary = await api.reports.summary();
const patient = await api.reports.summary({ timeout: 120_000 });
```

| Where | What happens |
| --- | --- |
| Generated function | Calls get `timeout: 30000` unless the call passes its own `timeout`. It wins over `apiConfig.timeout` like any per-call timeout. |
| Server | When the handler is still running after the limit, it is cancelled and the route answers `503` with `{"message": "This request took longer than its limit of 30s."}`. An answer that has already started is left alone. |

`timeout` takes a positive, finite `Duration`. Use it for slow reports, exports and calls to other services, so a stuck request fails in the same, known time on both sides.

### Retries

A GET that fails because the network dropped, the request timed out, or a proxy answered 502, 503 or 504 often works a moment later. Turn retries on once, and the client tries again by itself:

```ts
import { apiConfig } from '#api';

apiConfig.retry = true;
```

It then makes up to three attempts, waiting 300 ms before the second and 600 ms before the third. Only GET requests are retried, because repeating a write could do the work twice (see [Writes that are safe to send twice](#writes-that-are-safe-to-send-twice)). Every other answer, such as a 404 or a 500, fails at once as before, and `apiConfig.onError` only hears about the last failure.

To change the numbers, pass them instead of `true`. A single call can also set its own, or opt out:

```ts no-check
apiConfig.retry = { attempts: 5, delay: 200, maxDelay: 2000 };

const notes = await api.notes.list({ retry: false });
const report = await api.reports.get(id, { retry: { attempts: 2 } });
```

| Setting | Default | What it does |
|---|---|---|
| `attempts` | `3` | Attempts in total, the first one included |
| `delay` | `300` | Milliseconds before the second attempt. It doubles after every attempt |
| `maxDelay` | `5000` | The longest wait between attempts, and the longest [rate limit](#rate-limits) wait the client sits out |

A call that is aborted through its `signal` stops waiting at once, and each attempt gets the full `timeout`.

### Rate limits

When the server refuses a call with 429, the error says how long to wait. `isRateLimitError` narrows it, and `retryAfter` is the wait in milliseconds, read from the `Retry-After` header:

```ts
import { api, isRateLimitError } from '#api';

let notice = '';

try {
    await api.notes.create({ title: 'Buy milk' });
} catch (error) {
    if (isRateLimitError(error)) {
        const seconds = Math.ceil((error.retryAfter ?? 60_000) / 1000);
        notice = `Too many requests. Try again in ${seconds} seconds.`;
    }
}
```

With retries on, the client waits and sends the call again by itself, once, when the wait is no longer than `maxDelay`, which is five seconds unless you change it. That also applies to writes: a call the rate limit refused never reached your route, so sending it again cannot do the work twice. A longer wait is not sat out, and the error reaches you at once.

The server side, `rateLimit { }` in `install(Svelte)`, is described under [Security](../security.md#api-request-guards).

## Testing

### Fixtures for frontend tests

A frontend test should not need the backend running, and writing its answers by hand goes stale. Record them instead. In development, click through the part of the app you want to test, open the [dev panel](../guide/dev-workflow.md) and press **Save fixtures**. You get `api-fixtures.json` with every call the page made and what the server answered:

```json
{
    "recorded": "2026-11-16T12:00:00.000Z",
    "calls": [
        { "method": "GET", "path": "/api/notes?page=1", "status": 200, "response": { "items": [] } },
        { "method": "POST", "path": "/api/notes", "status": 201, "request": { "title": "New" }, "response": { "id": 7 } }
    ]
}
```

In a test, let the client answer from that file:

```ts no-check
import { api, apiConfig, fixtureFetch, type ApiFixtures } from '#api';
import recorded from './api-fixtures.json';

apiConfig.fetch = fixtureFetch(recorded satisfies ApiFixtures);

const page = await api.notes.list({ page: 1 });
```

- The calls go through the real generated client, so the test sees typed results, `ApiError` for a recorded 404 and validation errors for a recorded 422, exactly as the app does.
- A call is matched by its method and its path with the query.
- When the same call was recorded more than once, such as a list before and after a create, the answers come back in that order, and the last one repeats.
- A call that was never recorded fails with a message that names it.

::: warning Look before you commit
Look through the file before you commit it. It holds the bodies as they were sent and received, which can include data you would not put in the repository. Fields marked [`@Sensitive`](./validation.md#sensitive-fields), such as a password, are saved as `***`. **Clear** in the panel starts a new recording.
:::

## Full examples

### A notes page

A list of notes loaded before the page shows, with a clear error when the server is down, an edit form that creates and updates, and a delete that asks first. The root layout refreshes the page after every write, so the list is never stale.

::: code-group

```ts [+page.ts]
import { error } from '@sveltejs/kit';
import { apiWith, errorMessage } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    try {
        const [notes, stats] = await Promise.all([api.notes.list(), api.stats.list()]);
        return { notes, stats };
    } catch (failure) {
        error(503, errorMessage(failure));
    }
};
```

```svelte [+page.svelte]
<script lang="ts">
    import { api, errorMessage, field, NoteInput, type Note } from '#api';
    import { formState } from '#lib/api/form-state.svelte.ts';
    import { confirmed } from '#lib/ktor-svelte/confirm.ts';
    import { routes } from '#routes';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const form = formState<NoteInput>(NoteInput.empty(), { validate: NoteInput.validate });
    let editing = $state<Note | undefined>(undefined);
    let problem = $state('');

    function edit(note: Note) {
        editing = note;
        form.reset({ title: note.title, body: note.body, tags: note.tags });
    }

    function startOver() {
        editing = undefined;
        form.reset(NoteInput.empty());
    }

    async function save(event: SubmitEvent) {
        event.preventDefault();
        const target = editing;
        const saved = await form.submit((draft) => (target ? api.notes.update(target.id, draft) : api.notes.create(draft)));
        if (saved) startOver();
    }

    async function remove(note: Note) {
        problem = '';
        try {
            await confirmed(`Delete "${note.title}"?`, () => api.notes.delete(note.id), {
                details: 'It cannot be restored.',
                confirm: 'Delete',
                danger: true
            });
        } catch (error) {
            problem = errorMessage(error);
        }
    }
</script>

<h1>Notes ({data.stats.total})</h1>

{#if problem}<p role="alert">{problem}</p>{/if}

<ul>
    {#each data.notes as note (note.id)}
        <li>
            <a href={routes.notesId({ id: note.id })}>{note.title}</a>
            <button type="button" onclick={() => edit(note)}>Edit</button>
            <button type="button" onclick={() => remove(note)}>Delete</button>
        </li>
    {:else}
        <li>No notes yet.</li>
    {/each}
</ul>

<form onsubmit={save}>
    <h2>{editing ? 'Edit note' : 'New note'}</h2>
    <input aria-label="Title" bind:value={form.draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: form.errors.title }} />
    <textarea aria-label="Body" bind:value={form.draft.body}></textarea>
    {#if form.message}<p role="alert">{form.message}</p>{/if}
    <button disabled={form.submitting}>{editing ? 'Save' : 'Create'}</button>
    {#if editing}<button type="button" onclick={startOver}>Cancel</button>{/if}
</form>
```

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { refreshAll } from '$app/navigation';
    import { apiConfig } from '#api';

    let { children } = $props();

    apiConfig.onWrite = () => void refreshAll();
</script>

{@render children()}
```

```kotlin no-check [Routes.kt]
fun Route.noteRoutes(store: NoteStore) {
    resource<Note, Int>("/api/notes") {
        missing<Problem> { Problem("That note does not exist.") }
        list<NoteQuery> { query -> store.list(query.search, query.tag) }
        create<NoteInput> { input -> store.create(input) }
        get { id -> store.find(id) }
        update<NoteInput> { id, input -> store.update(id, input) }
        delete { id -> store.delete(id) }
    }
    get("/api/stats") {
        call.respond(store.stats())
    }
}
```

:::

What each part does:

- The load uses `apiWith(event)`, so SvelteKit tracks the calls and `refreshAll` reruns them after a write.
- When the server cannot be reached, `error(503, ...)` shows your error page with a readable message instead of a broken list.
- `formState` runs `NoteInput.validate` before sending, puts a 422 from the server into `form.errors`, and anything else into `form.message`. With [toasts](#show-errors-automatically) on, the user also sees other failures without any markup.
- `confirmed` asks before the delete. With DaisyUI the modal shows a failure itself; without it the call rejects and the page shows `problem`.

### A search box

Results follow the input while the visitor types. `latest` drops answers to older terms, and the short pause keeps the server from a request per keystroke.

```svelte [SearchNotes.svelte]
<script lang="ts">
    import { api, errorMessage, isAbortError, latest, type Note } from '#api';

    const search = latest(api.notes.list);

    let term = $state('');
    let results = $state<Note[]>([]);
    let problem = $state('');
    let timer: ReturnType<typeof setTimeout> | undefined;

    function onInput() {
        clearTimeout(timer);
        timer = setTimeout(run, 200);
    }

    async function run() {
        problem = '';
        try {
            results = await search({ search: term.trim() || undefined }, { silent: true });
        } catch (error) {
            if (!isAbortError(error)) problem = errorMessage(error);
        }
    }
</script>

<input type="search" placeholder="Search notes" aria-label="Search notes" bind:value={term} oninput={onInput} />

{#if problem}<p role="alert">{problem}</p>{/if}

<ul>
    {#each results as note (note.id)}
        <li>{note.title}</li>
    {:else}
        <li>Nothing found.</li>
    {/each}
</ul>
```

`silent: true` keeps failed searches out of the toasts, since the component shows its own message.

### A paged table

A table that loads 20 rows at a time behind a "Load more" button, on top of a paged route.

::: code-group

```kotlin [Routes.kt]
routing {
    getPage<Note>("/api/notes/feed", defaultLimit = 20) { request -> store.page(request.cursor, request.limit) }
}
```

```svelte [NoteTable.svelte]
<script lang="ts">
    import { onMount } from 'svelte';
    import { api, errorMessage, IsoDateTime, type Note } from '#api';

    let rows = $state<Note[]>([]);
    let cursor: string | undefined;
    let done = $state(false);
    let loading = $state(false);
    let problem = $state('');

    async function more() {
        loading = true;
        problem = '';
        try {
            const page = await api.notes.getFeed({ cursor, limit: '20' });
            rows = [...rows, ...page.items];
            cursor = page.next ?? undefined;
            done = cursor === undefined;
        } catch (error) {
            problem = errorMessage(error);
        } finally {
            loading = false;
        }
    }

    onMount(more);
</script>

<table>
    <thead>
        <tr><th>Title</th><th>Tags</th><th>Created</th></tr>
    </thead>
    <tbody>
        {#each rows as note (note.id)}
            <tr>
                <td>{note.title}</td>
                <td>{note.tags.join(', ')}</td>
                <td>{IsoDateTime.parse(note.createdAt).toLocaleDateString()}</td>
            </tr>
        {/each}
    </tbody>
</table>

{#if problem}<p role="alert">{problem}</p>{/if}
{#if !done}
    <button type="button" disabled={loading} onclick={more}>{loading ? 'Loading...' : 'Load more'}</button>
{/if}
```

:::

For a ready-made table with sorting and paging, see [DataTable](./frontend-libraries.md#datatable) and [A table without the code](../recipes/pagination.md#a-table-without-the-code).

## Use cases

- A page that needs data before it shows: [in load functions](#in-load-functions).
- A form: [typed errors](#typed-errors) with [validation](./validation.md), or the [form helper](./validation.md#form-state).
- Error handling for the common case without code: [show errors automatically](#show-errors-automatically).
- Deleting or other risky actions: [ask before a call](#ask-before-a-call).
- Mobile users and flaky networks: [timeouts](#timeouts), [retries](#retries) and [writes that are safe to send twice](#writes-that-are-safe-to-send-twice).
- Long lists: [paged lists](#paged-lists). Live data: [event streams](#event-streams).
- Support tickets: [request IDs](#request-ids).
- Frontend tests without a backend: [fixtures](#fixtures-for-frontend-tests).

## Good to know

- The client always speaks JSON. See [Transport](./transport.md).
- Calls with their own `headers`, `fetch` or `signal` are never [shared](#share-identical-requests), and calls with their own `headers` or `signal` are never [prefetched](#prefetch-on-hover).
- `X-Request-Id`, `X-Time-Zone` and `Idempotency-Key` are only sent to your own origin, never to a `baseUrl` on another host.
- A 401 goes to `apiConfig.onUnauthorized` when you set it. Otherwise a 401 from your own origin sends the visitor to the [login page](./auth.md#the-login-page), when one is set.
