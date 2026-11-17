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

To change or translate the three built-in sentences, assign to `errorMessages.network`, `errorMessages.timeout` and `errorMessages.failed` once at startup.

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

The answer is `{ "message": "Email taken.", "code": "EmailTaken" }` with the given status, 400 when none is given. The generated client knows the enum as the type `ErrorCode`, so a mistyped or removed code no longer compiles:

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

- One answer: `call.respondError(code, status, message = "...")`, or the `message` of `ApiException`.
- Every answer, on the server: `errorCodes<AccountError> { call, code -> ... }` returns the text for a code, or null to leave it. It gets the call, so it can translate.
- In the browser: `setCodeMessages({ EmailTaken: 'That email already has an account.' })` once at startup. `errorMessage`, and so the toasts of `toasts()`, then use this text for the code and ignore what the server sent. A value can be a function, for a translation that depends on the current language.

An app has one enum of error codes. A class of your API named `ErrorCode` clashes with the generated type and stops generation.

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

The generated function takes the same fields with their types:

```ts no-check
await api.notes.list({ status: Status.OPEN, mine: true, limit: 50, tags: ['home', 'food'] });
```

The properties can be text, numbers, booleans, enums, value classes over those, types that are written as text such as dates, and lists of them. A nested class is refused when the route is declared.

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
- `NoteInput::title in patch`, `patch.has("title")` and `patch.fields` say what was sent, for a route that treats one field specially.

In the generated client the body is the class with every field optional, and null allowed where the class allows it:

```ts no-check
import { api, patchOf } from '#api';

await api.notes.patch(note.id, { dueOn: null });
await api.notes.patch(note.id, patchOf(original, draft));
```

`patchOf(before, after)` is the fields that differ between two objects, with null for the ones that were cleared, so an edit form sends what the visitor changed and nothing else. `applyPatch(target, patch)` does on the client what `applyTo` does on the server, for showing the result before the answer is there. `Patch<T>` is the type of both.

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

When the version that came in is not the stored one, `respondIfStale` answers 409 with the code `version.conflict` and the record as it is now, and returns true. The block that gives the record only runs then. An update without a version is not checked, so make the field required if every client must send it. The third argument is the message, for your own wording or language.

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

[`formState`](validation.md) does the bookkeeping: after a conflict, `form.conflict` holds their record, `form.takeTheirs()` resets the form to it, and `form.keepMine()` takes over their version so the next `form.submit` goes through. Pass `takeTheirs` a value when the form's type is not the record's type.

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

## In load functions

Inside a SvelteKit `load` function, every call has to go through the `fetch` SvelteKit gives you. `apiWith(event)`, shown above, does that for all calls at once. For a single call, pass `fetch` as the last argument:

```ts no-check
import { api } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const note = await api.notes.get(params.id, { fetch });
    return { note };
};
```

With its own `fetch`, SvelteKit knows which requests a page depends on, reuses a response it already has during hydration, and can rerun the load when you invalidate it. Without it, the call still works, but the browser console warns with `window_fetch_in_load`.

`svelteVerifyLoads` finds the calls that forgot. It reads every `+page.ts`, `+page.js`, `+layout.ts` and `+layout.js`, and fails with the file, the line and the call:

```bash
./gradlew svelteVerifyLoads
```

```text
src/routes/notes/[id]/+page.ts:6  api.notes.get(params.id)  ->  use apiWith(event), or pass { fetch } as the last argument
```

It is not part of `check`. The [lint rule](./frontend-libraries.md#lint-rules) `ktor-svelte/fetch-in-load` reports the same thing in the editor.

## Refresh the page after a write

After you create, change or delete something, the lists and details on the page are out of date. Tell the client what to do after a successful write, once, in your root layout, and every page keeps itself current:

```ts no-check
import { refreshAll } from '$app/navigation';
import { apiConfig } from '#api';

apiConfig.onWrite = () => void refreshAll();
```

`onWrite` runs after every POST, PUT, PATCH and DELETE that succeeds, and `refreshAll` reruns the `load` functions of the page you are on. Writes that finish together, such as three calls in a `Promise.all`, cause one refresh, not three. A failed write does not trigger it, and neither does a read.

A call that should not refresh the page, such as saving a draft while the user types, opts out:

```ts no-check
await api.notes.update(id, draft, { refresh: false });
```

The client does not import SvelteKit itself, so nothing happens until you set `onWrite`. That also means you can do something else there, such as refreshing only one resource with `invalidate`.

## Fixtures for frontend tests

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

The calls go through the real generated client, so the test sees typed results, `ApiError` for a recorded 404 and validation errors for a recorded 422, exactly as the app does. A call is matched by its method and its path with the query. When the same call was recorded more than once, such as a list before and after a create, the answers come back in that order, and the last one repeats. A call that was never recorded fails with a message that names it.

Look through the file before you commit it. It holds the bodies as they were sent and received, which can include data you would not put in the repository. Fields marked [`@Sensitive`](./validation.md#sensitive-fields), such as a password, are saved as `***`. **Clear** in the panel starts a new recording.

## Ask before a call

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

With DaisyUI on, the question is a modal in your theme. While the call runs, both buttons are disabled, so it cannot be sent twice. When it fails, the modal stays open and shows the error's `message`, and the user can try again or cancel. `danger: true` makes the confirm button red and puts the focus on Cancel. Escape cancels.

Without DaisyUI it is the browser's own `confirm`, and a failed call rejects as usual.

`svelteSync` writes the helper to `src/lib/ktor-svelte/confirm.ts` for every project that has generated files. The button labels default to `confirmMessages.confirm` and `confirmMessages.cancel`, which you can set once, such as to your translations.

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
- 401, which [the login page](auth.md#the-login-page) or `apiConfig.onUnauthorized` handles.
- Aborted requests, failed prefetches, and calls made with `silent: true`, such as `api.notes.get(id, { silent: true })`.

The promise still rejects, so you can add handling where you want more. Call `toast('Saved.', { kind: 'success' })` from `#lib/ktor-svelte/toasts.ts` for your own messages, give one a button with `action: { label: 'Undo', run: restore }`, and change the built-in texts through `toastMessages`. Without `toasts()`, `apiConfig.onError` is yours to set, for example to report errors to a monitoring service.

## Toasts from the server

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

With `toasts()` on, the browser shows it when the answer arrives, and no component has to know. The kinds are `Info`, `Success`, `Warning` and `Error`. With [i18n](./frontend-libraries.md#i18n), pass a message in the visitor's language, such as `call.toast(call.messages.noteSaved())`.

The toast travels in a response header, so the body and its type stay what they are, and it works with any status, also with an error or an empty 204. Call `toast` before you respond. A response carries up to five toasts of up to 500 characters each.

The generated client reads the header on answers from your own origin only, so another server cannot put words into your app. Without `toasts()`, set `apiConfig.onToast = (message, kind) => ...` to show them your way, and nothing is shown until you do. Calls made on the server during SSR do not show toasts.

## Navigation from the server

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

The path has to be one inside your app: `navigateTo` refuses anything that does not start with a single `/`, and the client ignores such a header as well, and reads it on answers from your own origin only. So the header cannot be used to send a visitor to another site.

## Reload after a deploy

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

## Retries

A GET that fails because the network dropped, the request timed out, or a proxy answered 502, 503 or 504 often works a moment later. Turn retries on once, and the client tries again by itself:

```ts
import { apiConfig } from '#api';

apiConfig.retry = true;
```

It then makes up to three attempts, waiting 300 ms before the second and 600 ms before the third. Only GET requests are retried, because repeating a write could do the work twice. Every other answer, such as a 404 or a 500, fails at once as before, and `apiConfig.onError` only hears about the last failure.

To change the numbers, pass them instead of `true`. A single call can also set its own, or opt out:

```ts no-check
apiConfig.retry = { attempts: 5, delay: 200, maxDelay: 2000 };

const notes = await api.notes.list({ retry: false });
const report = await api.reports.get(id, { retry: { attempts: 2 } });
```

`delay` doubles after every attempt until it reaches `maxDelay`. A call that is aborted through its `signal` stops waiting at once, and each attempt gets the full `timeout`.

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

### Writes that are safe to send twice

A `GET` can be repeated without harm. A `POST` cannot: when the answer is lost on the way back, the browser does not know whether the order was placed, and sending it again may place it twice. That is why only `GET` requests are retried above.

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
- Answers are kept for ten minutes, at most 10,000 of them, in memory: `idempotency { ttl = 30.minutes; maxEntries = 50_000 }`. With several instances of the app behind a load balancer, a repeat only finds the answer on the instance that gave it.
- Streamed answers and answers above 1 MiB are not kept. Reads and routes outside the API prefixes are not looked at.

`retry` in `apiConfig` still applies to reads only. A write is retried when its own call says `retry`, so the decision stays next to the routes where you know the server side is on. To stop sending the header, set `apiConfig.idempotencyKeys = false`.

## The visitor's time zone

The server usually runs in UTC, and the visitor does not. The generated client sends the browser's time zone with every call to your app, and a route reads it as `call.timeZone`:

```kotlin
get("/api/report") {
    val today = java.time.LocalDate.now(call.timeZone)
    call.respondText("Report for $today")
}
```

It is a `java.time.ZoneId`, such as `Europe/Zurich`, taken from the `X-Time-Zone` header. A request without the header, or with a name the JDK does not know, gets `defaultTimeZone` from `install(Svelte)`, which is `UTC` unless you change it. That covers requests the client does not make, such as a plain link to a download.

The header only goes to your own origin, never to a `baseUrl` on another host. To stop sending it, set `apiConfig.sendTimeZone = false`.

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
