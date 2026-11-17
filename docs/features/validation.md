# Validation

One set of rules for the server and the browser, with errors per field. You write the rules once in Kotlin; the server enforces them on every request, and the generated client checks the same rules in the browser with the same messages.

<Badge type="tip" text="Ktor plugin" /> <Badge type="warning" text="Generated client" />

## Quick start

Put simple bounds on the properties with Ktor's `JsonSchema` annotations, and any other rule on the class itself by implementing `Validated`:

```kotlin
import io.ktor.openapi.JsonSchema

@Serializable
data class NoteInput(
    @JsonSchema.MaxLength(80)
    val title: String,
    val body: String = "",
) : Validated {
    override fun Validator.rules() {
        check(::title, title.isNotBlank()) { "A note needs a title." }
    }
}

post("/api/notes") {
    val input = call.receive<NoteInput>()
    call.respond(HttpStatusCode.Created, store.create(input))
}
```

When something fails, the route never runs, and the client gets a 422 with an error list per field, in one standard shape that `isValidationError` understands:

```json
{ "message": "Validation failed", "fields": { "title": ["A note needs a title."] } }
```

## Where the rules run

Both kinds of rule run on every `call.receive` of that class, in every route:

- for nested classes, lists, map values and sealed subtypes too
- for every item when you receive a `List` or `Map` of such classes
- for a [query class](./calling-the-api.md#query-parameters-as-a-class) read with `call.query<T>()`
- for the result of a [`Patch<T>`](./calling-the-api.md#changing-some-fields)

| Rule | Server | Browser (`validate()`) |
|---|---|---|
| `JsonSchema` annotations | Yes | Yes, same messages |
| `@Trim`, `@Lowercase`, `@EmptyAsNull` | Yes | No, the text is checked as typed |
| `Validated.rules()` | Yes | No, the errors arrive with the 422 |
| `validate { }` in a route | Yes | No, the errors arrive with the 422 |
| `fieldCheck` routes | Yes | Asked while typing, through [`formState`](#checks-only-the-server-can-make) |

## Rules on properties

| Annotation | Checks | Message |
|---|---|---|
| `@JsonSchema.MinLength(n)`, `@JsonSchema.MaxLength(n)` | Length of a string | `Must be at most 80 characters.` |
| `@JsonSchema.Minimum(x)`, `@JsonSchema.Maximum(x)` | A number, `exclusive = true` for a strict bound | `Must be at least 1.` |
| `@JsonSchema.Pattern(regex)` | A string contains a match | `Must match ^[a-z]+$.` |

```kotlin
@Serializable
data class Product(
    @JsonSchema.Pattern("^[A-Z]{3}-[0-9]{4}$")
    val sku: String,
    @JsonSchema.Minimum(0.0, exclusive = true)
    val price: Double,
    @JsonSchema.Minimum(1.0) @JsonSchema.Maximum(99.0)
    val quantity: Int,
)
```

The messages for these bounds are English and are the same in the browser and on the server. For another language, or friendlier wording than `Must match ^[a-z]+$.`, write the rule yourself with `check` and your own text.

## Rules on the class

Anything the annotations cannot say, such as a rule over two fields, goes into `Validated.rules()`:

```kotlin
@Serializable
data class Booking(
    val from: String,
    val until: String,
    val guests: Int,
) : Validated {
    override fun Validator.rules() {
        check(::until, until >= from) { "The stay has to end after it starts." }
        check(::guests, guests in 1..8) { "Between 1 and 8 guests." }
    }
}
```

- `check(::title, condition) { message }` adds the message when the condition is false.
- It names the field from the property, so renaming it in the IDE keeps the error in sync. If the property has a different `@SerialName`, pass the name as a string instead: `check("api_key", ...)`.
- Every failed check is collected, so the user sees all problems at once.

### Error paths

Errors use the JSON name, with paths for nested values:

| Where | Path |
|---|---|
| A field | `title` |
| A field of an item in a list | `lines[1].sku` |
| A field of a map value | `prices[eur].amount` |
| A field of an item of a received list | `[0].sku` |

## Rules inside a route

For a rule that depends on the route, such as comparing against a database, call `validate { check(...) { ... } }` inside the route. It answers the same way, with a 422 and the errors per field:

```kotlin
@Serializable
data class CouponInput(val code: String)

post("/api/coupons/redeem") {
    val input = call.receive<CouponInput>()
    validate {
        check("code", input.code.startsWith("WELCOME")) { "That code does not exist." }
    }
    call.respond(HttpStatusCode.NoContent)
}
```

::: warning StatusPages
`validate` and the other rules throw a `ValidationException`, which ktor-svelte turns into the 422. If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.
:::

## Cleaning up input

People paste text with spaces around it and type their email address with capitals. Say once, on the field, how it should arrive, and no route cleans up strings by hand:

```kotlin
@Serializable
data class SignUp(
    @Trim @Lowercase
    val email: String,
    @Trim
    @JsonSchema.MinLength(1)
    val name: String,
    @Trim @EmptyAsNull
    val company: String? = null,
)
```

| Annotation | What arrives in the route |
|---|---|
| `@Trim` | The text without whitespace at both ends |
| `@Lowercase` | The text in lowercase, independent of the server's locale |
| `@EmptyAsNull` | `null` when the text is empty, which is what a form sends for a field left blank. The property has to be nullable |

- They are applied in that order, so `@Trim @EmptyAsNull` turns a field of only spaces into `null`.
- This happens when the JSON body is received, before the bounds and your `Validated` rules run, so `@Trim @JsonSchema.MinLength(1)` refuses a name of only spaces without a rule of your own.
- On a `List<String>` or a `Map<String, String>` they apply to every item or value.
- They are found in nested classes, in lists of classes, in sealed subtypes with the default `type` discriminator, and on the property of a value class, so `value class Email(@Trim @Lowercase val value: String)` is clean wherever it is used.

::: info Server only
Only JSON request bodies are cleaned up, not query parameters, and the browser does not apply them: `validate()` in the generated TypeScript checks the text as typed. That only matters for a value that is valid after trimming but not before, which the server then accepts.
:::

## Sensitive fields

The development tools show a lot of what travels between browser and server, and some of it should not be shown: a password, a token, an API key. Mark such a field once:

```kotlin
@Serializable
data class Login(
    val email: String,
    @Sensitive
    val password: String,
)
```

From then on the field's value is replaced by `***` wherever ktor-svelte itself displays or stores it:

- in the `curl` command the [dev panel](../guide/dev-workflow.md) copies
- in the [fixtures](./calling-the-api.md#fixtures-for-frontend-tests) it saves, for request and response bodies
- in browser console output that is forwarded to the dev log
- in the request list and the slow call log, for a query parameter of that name

It works for requests and for responses, in nested classes too, and by the JSON name of the field, so `@SerialName("api_key")` masks `api_key`.

::: warning Two things to know
- Masking goes by name: once `password` is marked in one class, every field and query parameter called `password` is masked in those places, in any class. So give a sensitive field a telling name, not `value` or `next`.
- It changes nothing about your API: the field is received and returned as before. Keeping a value out of a response is still done by not putting it into the response class.
:::

## In the browser

With `generateTs`, the same annotations end up in OpenAPI and in the generated TypeScript, so a form gets the bounds without asking the server, and `validate()` checks a value in the browser with the same messages the server sends:

```ts
import { NoteInput } from '#api';

const problems = NoteInput.validate(draft);
const titleBounds = NoteInput.bounds.title;
```

How `bounds` and `validate()` are generated, and which bounds get `required`, is in [Generated TypeScript](typescript.md#types-and-forms).

### Errors next to inputs

`use:field` puts the bounds on an input and shows its errors right after it, with `aria-invalid` and `aria-describedby` set for screen readers. Pass the same errors whether they come from `validate()` or from a 422:

```svelte
<input bind:value={draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: errors.title, errorClass: 'text-error' }} />
```

| Option | What it does |
|---|---|
| `bounds` | The HTML attributes from `bounds`, such as `maxlength` |
| `errors` | The messages for this field. The message disappears when they are empty |
| `errorClass` | The class of the message. Defaults to `field-error` |
| `describedBy` | The id of the input's own hint, which stays in `aria-describedby` next to the error |

The message is a `<p role="alert">`.

With `libraries { components() }`, the generated [`<Field>`](frontend-libraries.md#field) wraps this action together with the label and a hint.

## Form state

Every form needs the same few variables: the values being edited, whether they changed, whether a submit is running, and the errors that came back. `formState` holds them, so a form is its inputs and one function:

```svelte
<script lang="ts">
    import { api, field, NoteInput } from '#api';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<NoteInput>(NoteInput.empty(), { validate: NoteInput.validate, resetOnSuccess: true });

    async function create() {
        const note = await form.submit((draft) => api.notes.create(draft));
        if (note) console.log('created', note.id);
    }
</script>

<form onsubmit={(event) => { event.preventDefault(); void create(); }}>
    <input bind:value={form.draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: form.errors.title }} />
    <p role="alert">{form.message}</p>
    <button disabled={form.submitting}>Create</button>
    <button type="button" disabled={!form.dirty} onclick={() => form.reset()}>Discard</button>
</form>
```

| | |
|---|---|
| `form.draft` | The values being edited, deeply reactive, so `bind:value={form.draft.title}` works |
| `form.dirty` | `true` while the draft differs from the last saved values |
| `form.submitting` | `true` while `submit` waits for the server. A second `submit` in that time does nothing |
| `form.errors` | Errors per field, from `validate`, from a 422 answer and from [checks](#checks-only-the-server-can-make). Hand them to `use:field` |
| `form.error`, `form.message` | Any other failure of the last submit, and its text for the user. `message` is empty when there is none |
| `form.checking` | `true` while a [check](#checks-only-the-server-can-make) waits for its answer |
| `form.reset()` | Back to the last saved values, with the errors cleared. `form.reset(values)` makes `values` the saved ones, such as after loading a record |
| `form.submit(send)` | Runs `validate` first and stops on errors without calling the server. Otherwise calls `send` with a plain copy of the draft and returns its result, or `undefined` when it failed |
| `form.conflict`, `form.takeTheirs()`, `form.keepMine()` | After a [version conflict](./calling-the-api.md#two-people-one-record): the other person's record, reset to it, or take over its version so the next submit goes through |

| Option | Default | What it does |
|---|---|---|
| `validate` | none | Checks the draft before sending, such as `NoteInput.validate` |
| `resetOnSuccess` | `false` | Empties the form after a successful submit |
| `checks` | none | [Check routes](#checks-only-the-server-can-make) per field |
| `checkDelay` | `300` | Milliseconds of quiet typing before a check is asked |

- After a successful submit the sent values are the saved ones, so the form is no longer dirty. That suits an edit form. For a form that creates something, `resetOnSuccess: true` empties it again.
- `submit` never throws: a failed call ends up in `errors` or `error`. The failure still reaches `apiConfig.onError`, so with [toasts](calling-the-api.md#show-errors-automatically) on, the user sees it without any markup of yours.
- The helper uses runes, so it is a module of its own and not part of `#api`.
- The draft should be plain data, the kind that goes into a JSON body. `dirty` compares it as JSON.

### An edit form

For a record that already exists, start with its values and save with `update`:

```svelte
<script lang="ts">
    import { api, field, NoteInput } from '#api';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<NoteInput>({ title: note.title, body: note.body, tags: note.tags }, { validate: NoteInput.validate });
</script>

<form onsubmit={(event) => { event.preventDefault(); void form.submit((draft) => api.notes.update(note.id, draft)); }}>
    <input bind:value={form.draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: form.errors.title }} />
    <button disabled={!form.dirty || form.submitting}>Save</button>
</form>
```

## Checks only the server can make

Whether an email address is taken, or a coupon code exists, cannot be decided in the browser. Without help, the visitor learns it after sending the whole form. A check route answers the question for one value:

```kotlin
import io.github.nijasc.ktor.svelte.fieldCheck

routing {
    fieldCheck("/api/checks/email") { email ->
        if (email == "ada@example.com") "That email address already has an account." else null
    }
}
```

- The block gets the value and returns what is wrong with it, or null when it is fine.
- It runs inside the route, so `call` is there for the current user or the language.
- The route is a `GET` with the value in the `value` query parameter, never cached, and part of the generated client like any other, such as `api.checks.getEmail({ value })`.
- An empty value is never passed to the block, and a value longer than 1000 characters is refused with a 400.

`formState` asks it while the visitor types:

```svelte no-check
<script lang="ts">
    import { api, field, Registration } from '#api';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<Registration>(Registration.empty(), {
        validate: Registration.validate,
        checks: { email: api.checks.getEmail }
    });
</script>

<input type="email" bind:value={form.draft.email} use:field={{ errors: form.errors.email }} />
```

- The call waits until typing has paused for 300 ms (`checkDelay`), and an answer that arrives for an older value is dropped.
- The answer is part of `form.errors.email`, next to the errors from `validate` and from a 422, so it shows up the same way with no extra markup.
- While a check says no, `form.submit` does not send. `form.checking` is true while an answer is awaited.
- An empty value and the value the form started with are not checked. A profile form does not tell its owner that their own email is taken.
- A check that fails, because the server is unreachable or answers with an error, says nothing. The real answer comes when the form is sent.

::: warning Keep the rule in the route
A check does not replace the rule in the route that saves: two people can pass the check at the same moment. Keep the rule there and treat the check as the earlier, friendlier message.

A check route also tells anyone who asks whether a value exists. For email addresses that reveals who has an account, so put the route under a [rate limit](calling-the-api.md#rate-limits), as you would the sign-in route.
:::

## Full example

A registration form: the email is cleaned up and checked while typing, the password is masked in the dev tools, two passwords must match, and the route checks the email once more when the form is sent.

::: code-group

```kotlin no-check [Registration.kt]
@Serializable
data class Registration(
    @Trim @Lowercase
    @JsonSchema.Pattern("^[^@ ]+@[^@ ]+$")
    val email: String,
    @Trim
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(60)
    val name: String,
    @Sensitive
    @JsonSchema.MinLength(12)
    val password: String,
    @Sensitive
    val repeatPassword: String,
    @Trim @EmptyAsNull
    val company: String? = null,
) : Validated {
    override fun Validator.rules() {
        check(::repeatPassword, repeatPassword == password) { "The passwords do not match." }
    }
}

fun Route.registrationRoutes(accounts: Accounts) {
    fieldCheck("/api/checks/email") { email ->
        if (accounts.isTaken(email)) "That email address already has an account." else null
    }

    post("/api/register") {
        val input = call.receive<Registration>()
        validate {
            check(input::email, !accounts.isTaken(input.email)) { "That email address already has an account." }
        }
        val account = accounts.create(input)
        call.toast("Welcome, ${account.name}!", ToastKind.Success)
        call.respond(HttpStatusCode.Created, account)
    }
}
```

```svelte no-check [+page.svelte]
<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, field, Registration } from '#api';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<Registration>(Registration.empty(), {
        validate: Registration.validate,
        checks: { email: api.checks.getEmail }
    });

    async function register(event: SubmitEvent) {
        event.preventDefault();
        const account = await form.submit((draft) => api.register.create(draft));
        if (account) await goto('/welcome');
    }
</script>

<form onsubmit={register}>
    <label>
        Email
        <input type="email" bind:value={form.draft.email} use:field={{ bounds: Registration.bounds.email, errors: form.errors.email }} />
    </label>
    <label>
        Name
        <input bind:value={form.draft.name} use:field={{ bounds: Registration.bounds.name, errors: form.errors.name }} />
    </label>
    <label>
        Password
        <input type="password" bind:value={form.draft.password} use:field={{ bounds: Registration.bounds.password, errors: form.errors.password }} />
    </label>
    <label>
        Repeat password
        <input type="password" bind:value={form.draft.repeatPassword} use:field={{ errors: form.errors.repeatPassword }} />
    </label>
    <label>
        Company (optional)
        <input bind:value={form.draft.company} />
    </label>

    {#if form.message}<p role="alert">{form.message}</p>{/if}
    <button disabled={form.submitting || form.checking}>Create account</button>
</form>
```

:::

What happens where:

- In the browser, `Registration.validate` checks the pattern and the lengths on every submit, and `api.checks.getEmail` asks about the email while the visitor types.
- On the server, `@Trim @Lowercase` clean up the email before anything else, the annotations and `rules()` run on `call.receive`, and `validate { }` checks the email once more, because two people can pass the check at the same moment.
- Every error lands in `form.errors`, whichever side found it, and `use:field` shows it next to the input.
- The passwords show as `***` in the dev panel, the fixtures and the logs.

## Use cases

- Any form that sends a body: annotations plus [`formState`](#form-state).
- Rules over two fields, such as dates or passwords: [`Validated.rules()`](#rules-on-the-class).
- Rules that need the database: [`validate { }` in the route](#rules-inside-a-route), with a [check route](#checks-only-the-server-can-make) for early feedback.
- Email addresses, names and optional text from forms: [cleaning up input](#cleaning-up-input).
- Passwords, tokens and keys: [sensitive fields](#sensitive-fields).
- Two people editing one record: [version conflicts](./calling-the-api.md#two-people-one-record).

## Good to know

- The 422 has one shape everywhere: `{ "message": "Validation failed", "fields": { ... } }`. `isValidationError` in the client recognises it.
- Annotation messages are English. Write a `check` with your own text for other languages.
- Write patterns with `^` and `$`: the browser matches the whole value, the server looks for a match inside it.
- Classes without annotations or rules are not checked, and get no `validate()` in TypeScript.
