# Generated TypeScript

Types and a client generated from your Ktor routes, and how to call the API from Svelte.

Set `generateTs = true`. Each time the app starts in development mode, it reads your routing tree, builds an OpenAPI document and writes this to `frontend/src/lib/api`:

| File | Contents |
|---|---|
| `types.ts` | An interface or union for every schema, an `empty()` factory for every object, `bounds` and `validate()` where the schema has constraints, a `const` object for every enum, and date types |
| `services.ts` | One object per resource, such as `api.notes.list()` |
| `client.ts` | The small `fetch` wrapper, `ApiError` and `apiConfig` |
| `index.ts` | Re-exports all of the above |
| `openapi.json` | The OpenAPI document itself |

Commit these files. That way a frontend build never needs your app to run first. Unchanged files are not rewritten, so Vite does not reload for nothing. Nothing is generated in production.

With the `application` plugin, `check` runs `svelteVerifyTs`. It starts your app once, generates the TypeScript in memory and fails if the committed files differ, so a changed DTO or route can't drift away from the frontend unnoticed. Line endings are ignored. It passes when `generateTs` is off. To fix a failure, run `svelteGenerateTs`, or start the app in development mode, and commit the result. To leave it out of `check`, set `svelte.verifyTs=false` in `gradle.properties` or pass `-Psvelte.verifyTs=false`.

Every Kotlin enum with two or more values becomes a `const` object plus a type of the same name, so you can use the values in code and not only in types:

```ts
import { NoteStatus } from '#api';

const archived = notes.filter((note) => note.status === NoteStatus.ARCHIVED);
```

Enums that appear in several classes with the same values share one generated name. The name comes from the property, such as `status` becoming `Status`. When two different enums would get the same name, the owning class is added in front, such as `NoteStatus`.

Every object type also gets an `empty()` factory, handy as the initial state of a form:

```ts
import { NoteInput } from '#api';

let draft = $state(NoteInput.empty());
```

Every property is filled in, optional ones included: strings become `''`, numbers `0`, booleans `false`, lists `[]`, maps `{}`, nullable properties `null`, enums their first value, and nested objects their own `empty()`. Each call returns a fresh object.

Properties with [validation annotations](server.md#validation) also appear under `bounds`, named like the HTML attributes, so you can spread them onto an input:

```svelte
<input bind:value={draft.title} {...NoteInput.bounds.title} />
```

Strings get `minlength`, `maxlength` and `pattern`, numbers get `min` and `max`. A strict bound on an integer moves by one, and on a decimal it is left out, because HTML has no strict bounds. The browser matches `pattern` against the whole value, while the server only looks for a match inside it, so write patterns with `^` and `$` to get the same result in both.

`required: true` is added only where the server would reject an empty field too, so the browser is never stricter than the server: strings with a minimum length of at least 1, and numbers that are required and not nullable, because an empty number input gives `null`. Nullable properties, booleans, lists, objects and enums never get it. A property with only `required` still gets a `bounds` entry.

Every object type that the server checks against annotations, directly or through a nested object or list, also gets `validate()`. It runs the same checks in the browser and returns errors in the same shape as `fields` of a 422, with the same messages and paths such as `lines[1].sku`, plus `Required.` for an empty required number. An empty object means valid. Types without annotations get no `validate()`, just as the server skips them. One error display then covers both instant feedback and the server answer:

```svelte
<script lang="ts">
    import { api, isValidationError, NoteInput } from '#api';

    let draft = $state(NoteInput.empty());
    let errors = $state<Record<string, string[]>>({});

    async function save(event: SubmitEvent) {
        event.preventDefault();
        errors = NoteInput.validate(draft);
        if (Object.keys(errors).length > 0) return;
        try {
            await api.notes.create(draft);
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
        }
    }
</script>

<form onsubmit={save}>
    <input bind:value={draft.title} oninput={() => (errors = NoteInput.validate(draft))} {...NoteInput.bounds.title} />
    {#if errors.title}<p role="alert">{errors.title.join(' ')}</p>{/if}
</form>
```

Rules in `Validated.rules()` and in `validate { }` inside a route only run on the server, so their errors arrive with the 422.

Dates arrive as strings, but not as plain `string`. A `LocalDate` becomes `IsoDate`, a `LocalTime` becomes `IsoTime`, and an `Instant` or `LocalDateTime` becomes `IsoDateTime`, so a date can't be mixed up with ordinary text. Helpers convert them safely:

```ts
import { IsoDate, IsoDateTime } from '#api';

const due = IsoDate.parse(task.due);
const created = IsoDateTime.parse(note.createdAt).toLocaleString();
const input = { due: IsoDate.today(), remindAt: IsoDateTime.now() };
```

`IsoDate.parse` returns local midnight. `new Date('2026-11-10')` would give UTC midnight instead, which shows the previous day west of Greenwich. For an `Instant` use `IsoDateTime.from(date)`, which writes UTC. For a `LocalDateTime` use `IsoDateTime.fromLocal(date)`, which writes no offset. Both share one OpenAPI format, so the type can't tell them apart. The values of `<input type="date">`, `type="time"` and `type="datetime-local"` already have the right shape for `LocalDate`, `LocalTime` and `LocalDateTime`. The helpers are only generated when your API uses a date.

`svelteInit` also sets up the short `#api` import. For a frontend you already have, add it to `frontend/package.json`:

```json
{
  "imports": {
    "#api": "./src/lib/api/index.ts"
  }
}
```

## Getting exact types

Ktor's compiler plugin reads `call.receive<T>()`, `call.respond()` and `call.queryParameters` for you, so plain routes get full types. Add the Ktor Gradle plugin:

```kotlin
plugins {
    id("io.ktor.plugin") version "3.6.1"
}

ktor {
    openApi {
        enabled = true
        codeInferenceEnabled = true
        onlyCommented = false
    }
}
```

Without it, describe routes by hand. A route with no description still gets a service, but it returns `unknown`:

```kotlin
get("/api/todos") { call.respond(todos) }.describe {
    responses {
        HttpStatusCode.OK { schema = jsonSchema<List<Todo>>() }
    }
}
```

## Calling the API

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
