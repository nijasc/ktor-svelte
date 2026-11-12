# Generated TypeScript

Types, services and validation helpers generated from your Ktor routes, with no npm dependencies.

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
import { Status } from '#api';

const archived = notes.filter((note) => note.status === Status.ARCHIVED);
```

Enums that appear in several classes with the same values share one generated name. The name comes from the property, such as `status` becoming `Status`. When two different enums would get the same name, the owning class is added in front, such as `NoteStatus`.

Every object type also gets an `empty()` factory, handy as the initial state of a form:

```ts
import { NoteInput } from '#api';

let draft = $state(NoteInput.empty());
```

Every property is filled in, optional ones included: strings become `''`, numbers `0`, booleans `false`, lists `[]`, maps `{}`, nullable properties `null`, enums their first value, and nested objects their own `empty()`. Each call returns a fresh object.

Properties with [validation annotations](validation.md) also appear under `bounds`, named like the HTML attributes, so you can spread them onto an input:

```svelte
<input bind:value={draft.title} {...NoteInput.bounds.title} />
```

Strings get `minlength`, `maxlength` and `pattern`, numbers get `min` and `max`. A strict bound on an integer moves by one, and on a decimal it is left out, because HTML has no strict bounds. The browser matches `pattern` against the whole value, while the server only looks for a match inside it, so write patterns with `^` and `$` to get the same result in both.

`required: true` is added only where the server would reject an empty field too, so the browser is never stricter than the server: strings with a minimum length of at least 1, and numbers that are required and not nullable, because an empty number input gives `null`. Nullable properties, booleans, lists, objects and enums never get it. A property with only `required` still gets a `bounds` entry.

Every object type that the server checks against annotations, directly or through a nested object or list, also gets `validate()`. It runs the same checks in the browser and returns errors in the same shape as `fields` of a 422, with the same messages and paths such as `lines[1].sku`, plus `Required.` for an empty required number. An empty object means valid. Types without annotations get no `validate()`, just as the server skips them. One error display then covers both instant feedback and the server answer:

```svelte stackblitz
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

## Documentation in the editor

A `summary` and `description` set in `describe { }` end up as JSDoc on the generated function, so the editor shows them when you hover over a call:

```kotlin
post("/api/notes/{id}/attachments") { /* ... */ }.describe {
    summary = "Uploads files to a note."
    description = "Send the files as multipart form data."
}
```

```ts no-check
/**
 * Uploads files to a note.
 *
 * Send the files as multipart form data.
 */
export const notesAttachments = (id: string | number, body: FormData, options?: RequestOptions) => ...
```

## Sealed classes

A sealed class or interface becomes a union of its subtypes, each with a literal `type` field, so TypeScript narrows it in a `switch`. The generated companion also lists the type names and has an exhaustive `match`: leave out a case and the code does not compile.

```kotlin
@Serializable
sealed interface Activity

@Serializable
@SerialName("created")
data class Created(val at: Instant) : Activity

@Serializable
@SerialName("archived")
data class Archived(val at: Instant, val title: String) : Activity
```

```ts
import { Activity, api } from '#api';

const lines = (await api.notes.getActivity(id)).map((item) =>
    Activity.match(item, {
        created: (created) => `Created at ${created.at}`,
        archived: (archived) => `Archived "${archived.title}"`
    })
);
```

Use `@SerialName` for short type names. Without it, the type name is the fully qualified class name.

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
