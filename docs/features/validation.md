# Validation

One set of rules for the server and the browser, with errors per field.

Put simple bounds on the properties with Ktor's `JsonSchema` annotations, and any other rule on the class itself by implementing `Validated`. Both run on every `call.receive` of that class, in every route, for nested classes, lists, map values and sealed subtypes too. Receiving a `List` or `Map` of such classes checks every item. When something fails, the route never runs, and the client gets a 422 with an error list per field, in one standard shape that `isValidationError` understands.

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

```json
{ "message": "Validation failed", "fields": { "title": ["A note needs a title."] } }
```

| Annotation | Checks | Message |
|---|---|---|
| `@JsonSchema.MinLength(n)`, `@JsonSchema.MaxLength(n)` | Length of a string | `Must be at most 80 characters.` |
| `@JsonSchema.Minimum(x)`, `@JsonSchema.Maximum(x)` | A number, `exclusive = true` for a strict bound | `Must be at least 1.` |
| `@JsonSchema.Pattern(regex)` | A string contains a match | `Must match ^[a-z]+$.` |

The messages for these bounds are English and are the same in the browser and on the server. For another language, or friendlier wording than `Must match ^[a-z]+$.`, write the rule yourself with `check` and your own text.

Errors use the JSON name, with paths such as `lines[1].sku` for nested values, `prices[eur].amount` for map values and `[0].sku` for the items of a received list. `check(::title, ...)` names the field from the property, so renaming it in the IDE keeps the error in sync. If the property has a different `@SerialName`, pass the name as a string instead.

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

They are applied in that order, so `@Trim @EmptyAsNull` turns a field of only spaces into `null`. This happens when the JSON body is received, before the bounds and your `Validated` rules run, so `@Trim @JsonSchema.MinLength(1)` refuses a name of only spaces without a rule of your own.

On a `List<String>` or a `Map<String, String>` they apply to every item or value. They are found in nested classes, in lists of classes, in sealed subtypes with the default `type` discriminator, and on the property of a value class, so `value class Email(@Trim @Lowercase val value: String)` is clean wherever it is used.

Only JSON request bodies are cleaned up, not query parameters, and the browser does not apply them: `validate()` in the generated TypeScript checks the text as typed. That only matters for a value that is valid after trimming but not before, which the server then accepts.

With `generateTs`, the same annotations end up in OpenAPI and in the generated TypeScript, so a form gets the bounds without asking the server, and `validate()` checks a value in the browser with the same messages the server sends. See [Generated TypeScript](typescript.md#generated-typescript).

For a rule that depends on the route, such as comparing against a database, call `validate { check(...) { ... } }` inside the route. It answers the same way. If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.

`use:field` puts the bounds on an input and shows its errors right after it, with `aria-invalid` and `aria-describedby` set for screen readers. Pass the same errors whether they come from `validate()` or from a 422:

```svelte
<input bind:value={draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: errors.title, errorClass: 'text-error' }} />
```

The message is a `<p role="alert">` with the class `field-error` unless you pass `errorClass`, and it disappears when the errors are empty.

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
| `form.errors` | Errors per field, from `validate` or from a 422 answer. Hand them to `use:field` |
| `form.error`, `form.message` | Any other failure of the last submit, and its text for the user. `message` is empty when there is none |
| `form.reset()` | Back to the last saved values, with the errors cleared. `form.reset(values)` makes `values` the saved ones, such as after loading a record |
| `form.submit(send)` | Runs `validate` first and stops on errors without calling the server. Otherwise calls `send` with a plain copy of the draft and returns its result, or `undefined` when it failed |

After a successful submit the sent values are the saved ones, so the form is no longer dirty. That suits an edit form. For a form that creates something, `resetOnSuccess: true` empties it again.

`submit` never throws: a failed call ends up in `errors` or `error`. The failure still reaches `apiConfig.onError`, so with [toasts](calling-the-api.md#show-errors-automatically) on, the user sees it without any markup of yours.

The helper uses runes, so it is a module of its own and not part of `#api`. The draft should be plain data, the kind that goes into a JSON body. `dirty` compares it as JSON.
