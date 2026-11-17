# Generated TypeScript

ktor-svelte reads your Ktor routes and DTOs and writes a typed TypeScript client for them: types, one function per route, validation helpers and a few small utilities, with no npm dependencies. Change a field in Kotlin, and the frontend code that uses it stops compiling.

<Badge type="tip" text="Ktor plugin" /> <Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated client" />

## Quick start

Turn it on in `install(Svelte)`:

```kotlin
install(Svelte) {
    generateTs = true
}
```

Start the app in development mode, and call your routes from the frontend:

```ts
import { api } from '#api';

const notes = await api.notes.list({ search: 'milk' });
const note = await api.notes.get(notes[0].id);
```

To see the output for your own API before installing anything, paste its OpenAPI document into the [generator playground](./playground).

## What you get

| You write in Kotlin | You get in TypeScript | Section |
|---|---|---|
| A route | A typed function, such as `api.notes.list()` | [Service names](#service-names) |
| A `@Serializable` class | An interface, `empty()`, and `bounds` and `validate()` where it has rules | [Types and forms](#types-and-forms) |
| An enum | A `const` object and a type of the same name | [Enums](#enums) |
| `LocalDate`, `Instant`, ... | `IsoDate`, `IsoDateTime`, ... with helpers | [Dates](#dates) |
| `describe { summary }`, `@JsonSchema.Description` | JSDoc in the editor | [Documentation in the editor](#documentation-in-the-editor) |
| An object passed to `constants()` | The same values in `constants.ts` | [Shared constants](#shared-constants) |
| A value class | A branded type that cannot be mixed up | [IDs that cannot be mixed up](#ids-that-cannot-be-mixed-up) |
| `Decimal`, `Duration` | `Decimal`, `IsoDuration` with exact helpers | [Money and durations](#money-and-durations) |
| A sealed class | A union with an exhaustive `match` | [Sealed classes](#sealed-classes) |
| `resource<Note, Int>(...)` | `list`, `get`, `create`, `update`, `delete` | [Resource routes](#resource-routes) |

How to call the functions, handle errors, retry, stream and upload is on [Calling the API](./calling-the-api.md).

## The generated files

Each time the app starts in development mode, ktor-svelte reads your routing tree, builds an OpenAPI document and writes this to `frontend/src/lib/api`:

| File | Contents |
|---|---|
| `types.ts` | An interface or union for every schema, an `empty()` factory for every object, `bounds` and `validate()` where the schema has constraints, a `const` object for every enum, and date types |
| `services.ts` | One object per resource, such as `api.notes.list()` |
| `client.ts` | The small `fetch` wrapper, `ApiError` and `apiConfig` |
| `index.ts` | Re-exports all of the above |
| `openapi.json` | The OpenAPI document itself |
| `.gitattributes` | Marks these files as generated and keeps their line endings the same on every machine, so Git on Windows does not warn about them and GitHub folds them in diffs |

Depending on what you use, a few more files appear next to them, such as `constants.ts` for [shared constants](#shared-constants) and `form-state.svelte.ts` for the [form helper](./validation.md#form-state).

| Setting in `install(Svelte)` | Default | What it does |
|---|---|---|
| `generateTs` | `false` | Writes the client each time the app starts in development mode |
| `generateTsOutput` | `null` | Output directory. `null` means `src/lib/api` in your frontend |

### Commit the files

Commit these files. That way a frontend build never needs your app to run first.

- Unchanged files are not rewritten, so Vite does not reload for nothing.
- Nothing is generated in production.
- To refresh the files without your dev server, for example in CI, run the task below and check for a diff. It starts your app once, so the app's port must be free.

```bash
./gradlew svelteGenerateTs
```

### Keeping it in sync

With the `application` plugin, `check` runs `svelteVerifyTs`. It starts your app once, generates the TypeScript in memory and fails if the committed files differ, so a changed DTO or route can't drift away from the frontend unnoticed.

- Line endings are ignored.
- It passes when `generateTs` is off.
- To fix a failure, run `svelteGenerateTs`, or start the app in development mode, and commit the result.
- To leave it out of `check`, set `svelte.verifyTs=false` in `gradle.properties` or pass `-Psvelte.verifyTs=false`.

### The #api import

`svelteInit` also sets up the short `#api` import. For a frontend you already have, add it to `frontend/package.json`:

```json
{
  "imports": {
    "#api": "./src/lib/api/index.ts"
  }
}
```

## Service names

Every route becomes a function on `api`, grouped by resource. The names follow your routes:

| Route | Function |
|---|---|
| `GET /api/notes` | `api.notes.list()` |
| `GET /api/notes/{id}` | `api.notes.get(id)` |
| `POST /api/notes` | `api.notes.create(body)` |
| `PUT /api/notes/{id}` | `api.notes.update(id, body)` |
| `DELETE /api/notes/{id}` | `api.notes.delete(id)` |
| `POST /api/notes/{id}/archive` | `api.notes.archive(id)` |

Set `operationId` in `describe` to choose your own name.

A function takes its arguments in this order: the path parameters, the body, the query, and last the [request options](./calling-the-api.md#request-options). Every function is also exported on its own, named after its group and service, such as `notesList` or `notesGet`, so a page can [import only what it uses](./calling-the-api.md#import-single-functions).

## Typed path parameters

A path parameter is typed from the route's description. A [resource](#resource-routes) describes its id for you, so `api.notes.get` takes a `number` there. A parameter without a described type accepts `string | number`.

On the server, `call.pathParameter<T>(name)` reads a path parameter in the type you ask for:

```kotlin
get("/api/notes/{id}/summary") {
    val id = call.pathParameter<Int>("id")
    call.respondText("Note $id")
}
```

| Type | Accepts |
|---|---|
| `String` | Any text |
| `Int`, `Long` | A whole number that fits the type |
| `java.util.UUID` | A UUID in its usual 36 character form |
| An enum | One of its names, in any letter case |

- A value that does not fit, such as `/api/notes/abc`, is answered with 404 before the route does any work, because nothing is at that address.
- Asking for a name the path does not have, or for another type such as `Double`, is a mistake in the route and fails with a 500.

To give the generated function the exact type, describe the parameter:

```kotlin no-check
get("/api/notes/{id}/summary") {
    call.respondText("Note ${call.pathParameter<Int>("id")}")
}.describe {
    parameters { path("id") { schema = jsonSchema<Int>() } }
}
```

## Typed request headers

A route that reads a header can say so, and the generated function then takes it as a typed argument instead of a loose `headers` object you have to remember:

```kotlin
get("/api/reports") {
    val tenant = call.request.headers["X-Tenant"] ?: return@get call.respond(HttpStatusCode.BadRequest)
    call.respond(listOf("Report for $tenant"))
}.describe {
    parameters {
        header("X-Tenant") { required = true }
        header("X-Report-Rows") { schema = jsonSchema<Int>() }
    }
}
```

```ts no-check
import { api } from '#api';

const reports = await api.reports.list({ 'X-Tenant': 'acme', 'X-Report-Rows': 50 });
```

| In `describe` | In the generated function |
| --- | --- |
| `header("X-Tenant") { required = true }` | `headers: { 'X-Tenant': string }`, required |
| `header("X-Report-Rows") { schema = jsonSchema<Int>() }` | `'X-Report-Rows'?: number`, optional |
| Only optional headers | The whole `headers` argument is optional |

- The argument comes after the path parameters, the body and `query`, and before `options`.
- Values are sent as text; a header you leave `undefined` is not sent.
- Headers in `options.headers` win over the typed ones, so one call can still override a value.
- Headers the client sets by itself are left out of the argument even if a route lists them: `Accept`, `Content-Type`, `Content-Length`, `Cookie`, `X-Request-Id`, `Idempotency-Key` and `X-Time-Zone`.
- Headers that every call needs, such as `Authorization`, still belong in `apiConfig.headers`.

## Types and forms

### Empty objects

Every object type gets an `empty()` factory, handy as the initial state of a form:

```ts
import { NoteInput } from '#api';

let draft = $state(NoteInput.empty());
```

Every property is filled in, optional ones included:

| Property | Starts as |
|---|---|
| Text | `''` |
| Number | `0` |
| Boolean | `false` |
| List | `[]` |
| Map | `{}` |
| Nullable | `null` |
| Enum | Its first value |
| Nested object | Its own `empty()` |

Each call returns a fresh object.

### Bounds for inputs

Properties with [validation annotations](validation.md) also appear under `bounds`, named like the HTML attributes, so you can spread them onto an input:

```svelte
<input bind:value={draft.title} {...NoteInput.bounds.title} />
```

- Strings get `minlength`, `maxlength` and `pattern`, numbers get `min` and `max`.
- A strict bound on an integer moves by one, and on a decimal it is left out, because HTML has no strict bounds.
- The browser matches `pattern` against the whole value, while the server only looks for a match inside it, so write patterns with `^` and `$` to get the same result in both.

`required: true` is added only where the server would reject an empty field too, so the browser is never stricter than the server: strings with a minimum length of at least 1, and numbers that are required and not nullable, because an empty number input gives `null`. Nullable properties, booleans, lists, objects and enums never get it. A property with only `required` still gets a `bounds` entry.

#### Autocomplete and input types from names

Text properties whose names say what they hold also get `autocomplete`, and where it helps a `type`, so browsers and password managers fill them in and phones show the right keyboard. You write nothing:

| Property names (any case, `_` and `-` ignored) | `autocomplete` | `type` |
| --- | --- | --- |
| `email`, `emailAddress`, `mail` | `email` | `email` |
| `password`, `currentPassword` | `current-password` | `password` |
| `newPassword`, `repeatPassword`, `confirmPassword`, `passwordRepeat`, `passwordConfirmation` | `new-password` | `password` |
| `name`, `fullName`, `displayName` | `name` | |
| `givenName`, `firstName`, `forename` | `given-name` | |
| `familyName`, `lastName`, `surname` | `family-name` | |
| `username`, `login`, `loginName` | `username` | |
| `phone`, `phoneNumber`, `tel`, `telephone`, `mobile`, `mobilePhone` | `tel` | `tel` |
| `street`, `streetAddress`, `address`, `addressLine` | `street-address` | |
| `postalCode`, `postcode`, `zip`, `zipCode` | `postal-code` | |
| `city`, `town`, `locality` | `address-level2` | |
| `country`, `countryName` | `country-name` | |
| `organization`, `organisation`, `company` | `organization` | |
| `birthday`, `birthdate`, `dateOfBirth` | `bday` | |
| `url`, `website`, `homepage` | `url` | `url` |
| `oneTimeCode`, `otp`, `verificationCode` | `one-time-code` | |

[Rule presets](./validation.md#ready-made-rules) add the same: `@Rule.Email` gives `email`, `@Rule.WebAddress` `url`, `@Rule.Phone` `tel`, and `@Rule.StrongPassword` `new-password` with `type: 'password'`, whatever the property is called. A preset wins over the name, so a `password` with `@Rule.StrongPassword` is a new password.

- `use:field` and the generated components only add `autocomplete` and `type` when the input does not set its own, so `<Field autocomplete="username" ...>` keeps yours.
- `type` is only set on `<input>`, never on a `<textarea>` or `<select>`.
- Only text properties get hints; a `homepageVisits: Int` gets none.

### Checking in the browser

Every object type that the server checks against annotations, directly or through a nested object or list, also gets `validate()`. It runs the same checks in the browser and returns errors in the same shape as `fields` of a 422:

- the same messages, and paths such as `lines[1].sku`
- `Required.` for an empty required number
- an empty object when the value is valid

Types without annotations get no `validate()`, just as the server skips them. One error display then covers both instant feedback and the server answer:

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

Rules in `Validated.rules()` and in `validate { }` inside a route only run on the server, so their errors arrive with the 422. See [Validation](./validation.md) for the rules themselves, and for `formState`, which does this bookkeeping for you.

### Read-only fields

Fields the server fills in, such as an ID or a creation time, are marked with Ktor's `@JsonSchema.ReadOnly`. They become `readonly` in TypeScript, and the generated functions that send the class leave them out:

```kotlin
import io.ktor.openapi.JsonSchema

@Serializable
data class Ticket(
    @JsonSchema.ReadOnly val id: Long = 0,
    val title: String,
    @JsonSchema.ReadOnly val createdAt: String = "",
)
```

```ts no-check
export interface Ticket {
    readonly id: number;
    title: string;
    readonly createdAt?: string;
}

export const ticketsCreate = (body: Omit<Ticket, 'id' | 'createdAt'>, options?: RequestOptions) => ...
```

- A call that sends a `Ticket` takes `Omit<Ticket, 'id' | 'createdAt'>`, so you cannot pass an ID by mistake, and a whole record you edited can still be passed: the client takes the read-only fields out of the body before it is sent. Your object is not changed.
- Give read-only fields a default in Kotlin, as above, so `call.receive<Ticket>()` works on a body without them, and set the real values on the server.
- Only the fields of the class that is the body itself are left out, not those of nested classes, lists or upload forms.

### Created and updated stamps

Most records want to know when they were made and changed, and by whom. `Stamps` is a small ready type for that, filled on the server and typed on the client:

```kotlin
import io.github.nijasc.ktor.svelte.Stamps
import io.ktor.openapi.JsonSchema

@Serializable
data class Article(
    val title: String,
    @JsonSchema.ReadOnly val stamps: Stamps? = null,
)

fun newArticle(title: String, author: String): Article {
    return Article(title, Stamps.created(by = author))
}

fun renamed(article: Article, title: String, editor: String): Article {
    return article.copy(title = title, stamps = article.stamps?.touched(by = editor))
}
```

| Field | Set by | Type in TypeScript |
| --- | --- | --- |
| `createdAt` | `Stamps.created()` | `IsoDateTime` |
| `updatedAt` | `Stamps.created()`, then every `touched()` | `IsoDateTime` |
| `createdBy` | `Stamps.created(by = ...)`, optional | `string` |
| `updatedBy` | the last `touched(by = ...)`, optional | `string` |

- `Stamps.created()` and `touched()` use the current time; pass `at = ...` to choose it, for example in tests.
- `by` is whatever names a person in your app, such as `call.requireUser<User>().email`.
- Mark the property `@JsonSchema.ReadOnly`, as above, so the browser never sends it back and the server stays the one that sets it. Show it with `IsoDateTime.parse(article.stamps.updatedAt)` or the [relative time](./i18n.md) helpers.

### Enums

Every Kotlin enum with two or more values becomes a `const` object plus a type of the same name, so you can use the values in code and not only in types:

```ts
import { Status } from '#api';

const archived = notes.filter((note) => note.status === Status.ARCHIVED);
```

Enums that appear in several classes with the same values share one generated name. The name comes from the property, such as `status` becoming `Status`. When two different enums would get the same name, the owning class is added in front, such as `NoteStatus`.

### Dates

Dates arrive as strings, but not as plain `string`, so a date can't be mixed up with ordinary text:

| Kotlin | TypeScript |
|---|---|
| `LocalDate` | `IsoDate` |
| `LocalTime` | `IsoTime` |
| `Instant`, `LocalDateTime` | `IsoDateTime` |

Helpers convert them safely:

```ts
import { IsoDate, IsoDateTime } from '#api';

const due = IsoDate.parse(task.due);
const created = IsoDateTime.parse(note.createdAt).toLocaleString();
const input = { due: IsoDate.today(), remindAt: IsoDateTime.now() };
```

- `IsoDate.parse` returns local midnight. `new Date('2026-11-10')` would give UTC midnight instead, which shows the previous day west of Greenwich.
- For an `Instant` use `IsoDateTime.from(date)`, which writes UTC. For a `LocalDateTime` use `IsoDateTime.fromLocal(date)`, which writes no offset. Both share one OpenAPI format, so the type can't tell them apart.
- The values of `<input type="date">`, `type="time"` and `type="datetime-local"` already have the right shape for `LocalDate`, `LocalTime` and `LocalDateTime`.
- The helpers are only generated when your API uses a date.

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

Types and their fields are documented the same way:

| On the Kotlin side | In TypeScript |
|---|---|
| `@JsonSchema.Description` on a class or property | JSDoc on the interface or the field |
| `@JsonSchema.DeprecatedSchema` on a property | `@deprecated`, which editors show struck through at every use |
| `deprecated = true` in `describe { }` on a route | `@deprecated` on the function |

```kotlin no-check
@Serializable
@JsonSchema.Description("A note with its tags and its icon.")
data class Note(
    val id: Int,
    @JsonSchema.Description("Lowercase words the list can be filtered by.")
    val tags: List<String>,
    @JsonSchema.DeprecatedSchema
    val color: String? = null,
)
```

```ts no-check
/** A note with its tags and its icon. */
export interface Note {
    id: number;
    /** Lowercase words the list can be filtered by. */
    tags: string[];
    /** @deprecated */
    color?: string | null;
}
```

Kotlin's own documentation comments and `@Deprecated` do not exist at runtime, where the schema is read, so they cannot be picked up. The annotations are the way to say it once for both sides.

### Where a route is declared

Every generated function also names the Kotlin file its route is declared in, as an `@see` line, whether you describe the route or not:

```ts no-check
/** @see notes/Routes.kt */
export const notesCreate = (body: NoteInput, options?: RequestOptions) => ...
```

The path is the file's package folder and name, so it is the same on every machine. The line number is left out on purpose: it would change the generated file every time you edit above a route. To jump to the exact line, use the route list at `/_ktor-svelte/routes` while the app runs in development, or [`routes.json`](./calling-the-api.md#find-the-kotlin-route-of-a-call).

## Routes nothing calls

A call to a route that no longer exists does not compile. The other direction needs a task: `svelteVerifyApiRoutes` lists the API routes that nothing in the frontend calls, so you can see what is safe to remove:

```bash
./gradlew svelteVerifyApiRoutes
```

```text
GET /api/notes/export  ->  nothing in the frontend calls api.notes.export
```

- A route counts as called when `api.notes.export`, a client from `apiWith`, the `notes` object or the `notesExport` function is used anywhere outside the generated folders, even when it is only passed along.
- The task only lists what it finds, because a route can also be called from outside the frontend, such as a webhook or another service.
- Add `--strict` to fail the build instead.

## What changed for callers

The frontend in the same repository is checked by the compiler. A mobile app, another service or a webhook sender is not, and for them a renamed field is an outage. `svelteApiChanges` compares the committed `openapi.json` with the one on another git revision and lists what a caller would notice:

```bash
./gradlew svelteApiChanges
```

```text
API changes against origin/main: 2 that can break callers, 3 other.

Can break callers
  GET /api/tasks  query  limit            was string, is integer
  POST /api/tasks  request  folder        is new and required

Other changes
  GET /api/tasks  response  items[].version  added
  POST /api/tasks  request  version          added
  PATCH /api/tasks/{id}                      added
```

It compares with `origin/main` unless you name another revision, such as the last release:

```bash
./gradlew svelteApiChanges --against=v1.1.0
```

| Option | What it does |
|---|---|
| `--against=<revision>` | The git revision to compare with. Defaults to `origin/main` |
| `--strict` | Fails the build on a change that can break callers, which is what you want in a pipeline for an API with callers you do not control |

What counts as able to break a caller:

- A route that is gone.
- In a response: a field that is gone, has another type, or can now be missing.
- In a request or the query: a field that is new and required, has become required, or has another type.

A new route, a new response field, a new optional request field and a request field that is no longer read are listed under the other changes.

::: warning Limits
- The task reads the committed file and never starts your app, so run it after `svelteGenerateTs`. Without `--strict` it only reports.
- It compares the type as the OpenAPI document states it, so a query parameter that was a plain string and is now an enum is listed as changed, even when every old call still works.
- It looks at the first successful response of a route, not at the error responses.
:::

## Shared constants

A page size, a maximum number of labels, a list of plans: values like these are needed on both sides, and when they are typed in twice, one side changes and the other does not. Keep them in a Kotlin object and name it in `install(Svelte)`:

```kotlin
object Limits {
    const val PAGE_SIZE = 20
    const val MAX_LABELS = 5
    val PLANS = listOf("free", "team")
    val LABEL = Regex("[a-z0-9-]{1,20}")
}

install(Svelte) {
    generateTs = true
    constants(Limits)
}
```

`svelteGenerateTs` writes them to `constants.ts` next to the client, and `#api` exports the object under its Kotlin name:

```ts no-check
import { Limits } from '#api';

const next = await api.notes.list({ limit: Limits.PAGE_SIZE });
```

```ts no-check
export const Limits = {
    LABEL: '[a-z0-9-]{1,20}',
    MAX_LABELS: 5,
    PAGE_SIZE: 20,
    PLANS: ['free', 'team']
} as const;
```

- Every public `const val` and `val` of the object is shared, under the name it has in Kotlin. Private and internal ones stay out, so the object can hold more than it shares.
- `constants()` takes several objects at once.
- The values can be text, numbers, booleans, enums (by name), `Regex` (as its pattern text), and lists, sets and maps of those.
- Because the object is `as const`, TypeScript knows the exact values: `Limits.PLANS[number]` is `'free' | 'team'`.
- A value of another type stops generation with a message that names the property. That includes a `Duration` property, whose type is not visible from outside the object: share `timeout.inWholeMilliseconds` instead.

Like the rest of the client, `constants.ts` is checked by `svelteVerifyTs`, so a changed constant with a stale client fails `check`.

## IDs that cannot be mixed up

A note ID and a user ID are both numbers, so nothing stops code from passing one where the other belongs. In Kotlin a value class prevents that:

```kotlin no-check
@JvmInline
@Serializable
value class NoteId(val value: Long)

@Serializable
data class Note(val id: NoteId, val authorId: UserId, val title: String)
```

The generated client keeps the distinction. In JSON the ID is still a plain number, but in TypeScript it is its own type:

```ts no-check
export type NoteId = number & { readonly [brand]: 'NoteId' };

export interface Note {
    id: NoteId;
    authorId: UserId;
    title: string;
}
```

```ts no-check
import { api, NoteId } from '#api';

const note = await api.notes.get(5);
await api.notes.delete(note.id);
await api.users.get(note.id); // fine today: path parameters take any number or text
const copy: Note = { ...note, authorId: note.id }; // does not compile: NoteId is not UserId

const fromUrl = NoteId(Number(page.params.id));
```

- Values that come from the server already have the type. To make one from a plain value, such as a route parameter, call the function of the same name: `NoteId(5)`.
- A branded ID is still a number or text to everything that only reads it: it can be printed, compared and passed to a path parameter.
- This applies to a value class over `Int`, `Long`, `Double` or `String`, wherever it appears in a DTO: alone, optional, in a list or as the values of a map. Value classes over anything else, or with validation annotations on the property, are generated as their underlying type, as before.

::: warning Upgrading
When you turn an existing `Long` field into a value class, or update to this version with value classes already in your DTOs, the frontend stops compiling where it builds such a value from a plain number. Wrap those places in the function, as above.
:::

## Money and durations

Two kinds of value do not survive the trip to JavaScript as plain numbers or text: exact decimals, such as prices, and lengths of time.

```kotlin no-check
import io.github.nijasc.ktor.svelte.Decimal
import kotlin.time.Duration

@Serializable
data class Invoice(val total: Decimal, val payWithin: Duration)
```

- `Decimal` is `java.math.BigDecimal` with a serializer that writes it as text, `"1234.50"`, so no digit is lost on the way.
- A `kotlin.time.Duration` is written as ISO text, `"PT1H30M"`, as kotlinx.serialization does by default.

In the generated client both have their own type and a few helpers:

```ts no-check
import { Decimal, IsoDuration, type Invoice } from '#api';

declare const invoice: Invoice;

Decimal.add(invoice.total, Decimal.from('0.10')); // exact: 0.1 + 0.2 is 0.3
Decimal.times(invoice.total, 3);
Decimal.compare(invoice.total, Decimal.from(100)) > 0;
Decimal.format(invoice.total, 'de-DE', { style: 'currency', currency: 'EUR' });

IsoDuration.toMillis(invoice.payWithin);
IsoDuration.fromMillis(90 * 60 * 1000); // 'PT1H30M'
IsoDuration.format(invoice.payWithin); // '1:30:00'
```

| Helper | What it does |
|---|---|
| `Decimal.from(text or number)` | Makes a `Decimal`, and throws for anything that is not a plain decimal number. |
| `Decimal.add`, `subtract` | Exact, at the larger number of decimal places of the two. |
| `Decimal.times(value, count)` | Exact, for a whole `count`, such as a quantity. |
| `Decimal.compare` | -1, 0 or 1. `1.50` and `1.5` are equal. |
| `Decimal.format(value, locale?, options?)` | Text for people, through `Intl.NumberFormat`, keeping the decimal places. |
| `Decimal.toNumber` | A JavaScript number, when exactness no longer matters, such as for a chart. |
| `IsoDuration.toMillis`, `fromMillis` | To and from milliseconds. |
| `IsoDuration.add` | The sum of two. |
| `IsoDuration.format` | A clock text such as `1:30:00`. |

- The helpers are only in `types.ts` when the API uses one of the two types.
- A `BigDecimal` with your own serializer is recognised too, when the serializer writes text and its descriptor is named `BigDecimal` or `java.math.BigDecimal`.

::: warning Upgrading
A `Duration` field used to be generated as `string`. It is `IsoDuration` now, so code that assigns plain text to one needs `as IsoDuration`, or better `IsoDuration.fromMillis(...)`.
:::

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

| Generated | What it is |
|---|---|
| `Activity` (type) | The union of `Archived` and `Created`, narrowed by `item.type` |
| `Activity.types` | The type names, such as `['archived', 'created']` |
| `Activity.match(value, cases)` | Calls the case for the value's type. Every type needs a case |

Use `@SerialName` for short type names. Without it, the type name is the fully qualified class name.

## Resource routes

Most APIs have a few things that can be listed, read, created, changed and deleted, and for each of them the same five routes. `resource` registers them with the paths, statuses and names that the generated client expects:

```kotlin no-check
routing {
    resource<Note, Int>("/api/notes") {
        missing<Problem> { Problem("That note does not exist.") }
        list<NoteQuery> { query -> store.list(query.search, query.tag) }
        get { id -> store.find(id) }
        create<NoteInput> { input -> store.create(input) }
        update<NoteInput> { id, input -> store.update(id, input) }
        delete { id -> store.delete(id) }
    }
}
```

| Block | Route | Returns | Client |
| --- | --- | --- | --- |
| `list { }` | `GET /api/notes` | The list | `api.notes.list()` |
| `get { id -> }` | `GET /api/notes/{id}` | The item, or `null` for a 404 | `api.notes.get(id)` |
| `create<Input> { input -> }` | `POST /api/notes` | The new item, sent with a 201 | `api.notes.create(input)` |
| `update<Input> { id, input -> }` | `PUT /api/notes/{id}` | The changed item, or `null` for a 404 | `api.notes.update(id, input)` |
| `delete { id -> }` | `DELETE /api/notes/{id}` | `true`, or `false` for a 404. A 204 is sent | `api.notes.delete(id)` |

Each block returns its answer and does not call `respond`. That is what lets the types line up without anything being inferred:

- `Note` is the type of every answer.
- The type you name on `create` and `update` is the body.
- The second type of `resource` is the type of the id, so `api.notes.get` takes a `number` here. Leave the second type out and the id is a string. The id is read like [`pathParameter`](#typed-path-parameters), and an id that is not of that type is a 404.

These are ordinary Ktor routes. Every block is optional, a block that is left out is no route, and `call` is there in each block for anything else you need. Nothing is stored or generated for you: the blocks are your code.

- `list<NoteQuery> { query -> }` reads the query string into a `@Serializable` class, and the client gets the same fields as a typed query. See [Query parameters as a class](./calling-the-api.md#query-parameters-as-a-class).
- `missing<Problem> { ... }` says what a 404 looks like. It comes first in the block, and the client then knows the type of that error for `get`, `update` and `delete`. Without it a 404 has no body of yours.
- Each block can be declared once. Declaring one twice, or `missing` after `get`, `update` or `delete`, fails with a message when the routes are set up.
- Other routes of the same thing, such as `POST /api/notes/{id}/archive`, go next to the resource in a normal `route("/api/notes") { }`.

`svelteAdd --crud` writes the first version of the pages for a resource. See [Pages for a class](./routes.md#pages-for-a-class).

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

## Full example

A notes app end to end: a resource with a typed query and a shared constant on the server, and a component that uses the generated types, enums, dates and the sealed `Activity` union.

::: code-group

```kotlin no-check [Model.kt]
object NoteLimits {
    const val PAGE_SIZE = 20
    const val MAX_TAGS = 5
}

enum class NoteStatus { ACTIVE, ARCHIVED }

@Serializable
@JsonSchema.Description("A note with its tags and its icon.")
data class Note(
    val id: Int,
    val title: String,
    val body: String,
    val tags: List<String>,
    val status: NoteStatus,
    val createdAt: Instant,
)

@Serializable
data class NoteInput(
    @Trim
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(80)
    val title: String,
    val body: String = "",
    val tags: List<String> = emptyList(),
)

@Serializable
data class NoteQuery(val search: String? = null, val tag: String? = null)

@Serializable
sealed interface Activity

@Serializable
@SerialName("created")
data class Created(val at: Instant) : Activity

@Serializable
@SerialName("archived")
data class Archived(val at: Instant, val title: String) : Activity
```

```kotlin no-check [Routes.kt]
fun Application.module(store: NoteStore) {
    install(Svelte) {
        generateTs = true
        constants(NoteLimits)
    }
    routing {
        resource<Note, Int>("/api/notes") {
            missing<Problem> { Problem("That note does not exist.") }
            list<NoteQuery> { query -> store.list(query.search, query.tag) }
            get { id -> store.find(id) }
            create<NoteInput> { input -> store.create(input) }
            update<NoteInput> { id, input -> store.update(id, input) }
            delete { id -> store.delete(id) }
        }
        get("/api/notes/{id}/activity") {
            val note = store.find(call.pathParameter<Int>("id")) ?: throw NotFoundException()
            val activity: List<Activity> = store.activity(note)
            call.respond(activity)
        }
    }
}
```

```svelte [NoteCard.svelte]
<script lang="ts">
    import { Activity, api, IsoDateTime, Status, type Note } from '#api';

    let { note }: { note: Note } = $props();

    let lines = $state<string[]>([]);

    async function showActivity() {
        const activity = await api.notes.getActivity(note.id);
        lines = activity.map((item) =>
            Activity.match(item, {
                created: (created) => `Created ${IsoDateTime.parse(created.at).toLocaleString()}`,
                archived: (archived) => `Archived as "${archived.title}"`
            })
        );
    }
</script>

<article class:opacity-60={note.status === Status.ARCHIVED}>
    <h2>{note.title}</h2>
    <time datetime={note.createdAt}>{IsoDateTime.parse(note.createdAt).toLocaleDateString()}</time>
    <p>{note.body}</p>
    <button onclick={showActivity}>Show activity</button>
    <ul>
        {#each lines as line, index (index)}
            <li>{line}</li>
        {/each}
    </ul>
</article>
```

:::

Rename `title` in `Note`, restart the app, and `NoteCard.svelte` no longer compiles. Add a third `Activity` subtype, and every `Activity.match` that does not handle it fails too.

## Use cases

- A frontend and a backend in one repository that should never drift: commit the client and let `check` run [`svelteVerifyTs`](#keeping-it-in-sync).
- Forms that show the server's rules before sending: [bounds and `validate()`](#types-and-forms), or the [form helper](./validation.md#form-state).
- Values both sides need, such as page sizes: [shared constants](#shared-constants).
- Prices and durations: [money and durations](#money-and-durations).
- Feeds of different kinds of events: [sealed classes](#sealed-classes).
- A public API with outside callers: run [`svelteApiChanges --strict`](#what-changed-for-callers) in CI.
- Cleaning up an old API: [`svelteVerifyApiRoutes`](#routes-nothing-calls).

## Good to know

- Only paths under the API prefix are generated. See `apiPrefixes` in the [Ktor reference](../reference/ktor.md).
- The client is written in development mode only, never in production. When it seems stale, see [troubleshooting](../reference/troubleshooting.md).
- With `lucide()` on, an icon property becomes the `LucideIcon` type, and with `publicConfig` set, the client gets [`readPublicConfig()`](./runtime-config.md).
- How to call the functions is on [Calling the API](./calling-the-api.md).
