# Server features

Validation, transport, auth, runtime config and the endpoints ktor-svelte can add.

## Validation

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

Errors use the JSON name, with paths such as `lines[1].sku` for nested values, `prices[eur].amount` for map values and `[0].sku` for the items of a received list. `check(::title, ...)` names the field from the property, so renaming it in the IDE keeps the error in sync. If the property has a different `@SerialName`, pass the name as a string instead.

With `generateTs`, the same annotations end up in OpenAPI and in the generated TypeScript, so a form gets the bounds without asking the server, and `validate()` checks a value in the browser with the same messages the server sends. See [Generated TypeScript](typescript.md#generated-typescript).

For a rule that depends on the route, such as comparing against a database, call `validate { check(...) { ... } }` inside the route. It answers the same way. If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.

`use:field` puts the bounds on an input and shows its errors right after it, with `aria-invalid` and `aria-describedby` set for screen readers. Pass the same errors whether they come from `validate()` or from a 422:

```svelte
<input bind:value={draft.title} use:field={{ bounds: NoteInput.bounds.title, errors: errors.title, errorClass: 'text-error' }} />
```

The message is a `<p role="alert">` with the class `field-error` unless you pass `errorClass`, and it disappears when the errors are empty.

## Transport

Choose how your API talks inside `install(Svelte)`. Without a `transport` block, nothing is installed and you stay in control.

```kotlin
install(Svelte) {
    transport {
        json { prettyPrint = true }
        xml()
        compression()
    }
}
```

| Function | Effect |
|---|---|
| `json()` | Adds JSON to Ktor's `ContentNegotiation`. Takes a `kotlinx.serialization` `Json` builder |
| `xml()` | Adds XML. Needs `implementation("io.ktor:ktor-serialization-kotlinx-xml")` in your build |
| `negotiation { }` | Registers any other format, such as CBOR, on `ContentNegotiation` directly |
| `compression { }` | Installs Ktor's `Compression`. Takes its normal configuration, and defaults to gzip and deflate |

The client picks a format with its `Accept` header, and the first format you list is the default. Already installing these plugins yourself? You will get a clear error at startup, so remove one of the two. Files precompressed by your adapter are left alone. The generated TypeScript client always speaks JSON.

## Auth

To put the frontend behind Ktor's authentication, take over its routing. List what stays public. Those paths must include your login page and `/_app/*`, or the login page cannot load. Anyone can still download the JS bundles under `/_app`, so keep secrets on the server.

```kotlin
install(Svelte) {
    routing = SvelteRouting.Manual
}

routing {
    svelte(public = listOf("/login", "/_app/*"))
    authenticate("session") {
        svelte()
    }
}
```

Pages served by a plain `svelte()` get `private` caching, so shared proxies do not keep them. Paths in the `public` list keep normal caching.

In the browser, react to expired sessions in one place:

```ts
apiConfig.onUnauthorized = () => goto('/login');
```

In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.

## Runtime config

Pass values to the frontend at startup, so one JAR works in every environment. The type comes along with `generateTs`:

```kotlin
@Serializable
data class AppConfig(val sentryDsn: String?)

install(Svelte) {
    publicConfig(AppConfig(sentryDsn = System.getenv("SENTRY_DSN")))
}
```

```ts
import { loadPublicConfig } from '#api';

const config = await loadPublicConfig();
```

It is served as JSON from `/_ktor-svelte/config.json` to anyone who asks, so **never put secrets in it**. In SvelteKit, call `loadPublicConfig` only in the browser, because prerendering has no server to ask.

## Status endpoint

```kotlin
install(Svelte) {
    statusEndpoint = true
}
```

`GET /_ktor-svelte/status` returns JSON with the bundled build (`present`, `formatVersion`, `files`, `fingerprint`) and the dev proxy (`proxy`, and when active `url` and `reachable`). It is off by default, never cached, hidden from the OpenAPI document, and answers only requests from this machine with a local `Host`. Everything else gets 403.

## Health endpoint

For load balancers, container orchestrators and uptime checks:

```kotlin
install(Svelte) {
    healthEndpoint = true
    healthCheck { database.isReachable() }
}
```

`GET /_ktor-svelte/health` answers `200` with `{"status":"up"}` when the frontend can be served and every `healthCheck` returns `true`, and `503` with `{"status":"down"}` otherwise. A check that throws counts as down and is logged. Unlike the status endpoint, it answers every client, because it reveals nothing beyond up or down. It is off by default, never cached and hidden from the OpenAPI document.

## API docs

`apiDocs = true` serves Swagger UI at `/api/docs` in development mode only, using the same OpenAPI document as `generateTs`. Change the path with `apiDocsPath`. The page loads its scripts from a public CDN, so it needs internet access.
