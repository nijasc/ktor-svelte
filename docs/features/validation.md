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

With `generateTs`, the same annotations end up in OpenAPI and in the generated TypeScript, so a form gets the bounds without asking the server, and `validate()` checks a value in the browser with the same messages the server sends. See [Generated TypeScript](typescript.md#generated-typescript).

For a rule that depends on the route, such as comparing against a database, call `validate { check(...) { ... } }` inside the route. It answers the same way. If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.

`use:field` puts the bounds on an input and shows its errors right after it, with `aria-invalid` and `aria-describedby` set for screen readers. Pass the same errors whether they come from `validate()` or from a 422:

```svelte
<input bind:value={draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: errors.title, errorClass: 'text-error' }} />
```

The message is a `<p role="alert">` with the class `field-error` unless you pass `errorClass`, and it disappears when the errors are empty.
