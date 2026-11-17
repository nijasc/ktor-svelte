# Tutorial: a notes app

Build a small notes app from an empty folder: a Ktor API, a SvelteKit page that calls it through the generated client, validation on both sides, config from the server, and one JAR at the end. It takes about 20 minutes.

Every step shows the whole file, so you can copy it as it is. The finished, larger version is [`examples/notes`](https://github.com/nijasc/ktor-svelte/tree/main/examples/notes).

**You need** Java 17 or newer and one of Bun, pnpm, npm or Yarn.

**You will build:**

| Step | You learn |
|---|---|
| [1. Create the project](#_1-create-the-project) | The setup script and the dev loop |
| [2. Model the notes](#_2-model-the-notes) | DTOs with validation rules |
| [3. Add the routes](#_3-add-the-routes) | Ktor routes and the generated client |
| [4. Load notes into a page](#_4-load-notes-into-a-page) | `apiWith(event)` in a `load` function |
| [5. Show and change them](#_5-show-and-change-them) | Typed calls from a Svelte page |
| [6. Try the validation](#_6-try-the-validation) | Errors from the browser and from the server |
| [7. Pass config to the frontend](#_7-pass-config-to-the-frontend) | `publicConfig` |
| [8. Run the checks](#_8-run-the-checks) | What keeps the two sides in step |
| [9. Ship one JAR](#_9-ship-one-jar) | `buildFatJar` and Docker |

## 1. Create the project

Run the setup script with the defaults, a project name and a package:

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=notes --package=notes
cd notes
./gradlew svelteDevAll
```

On Windows:

```powershell
powershell -c "& ([scriptblock]::Create((irm https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.ps1))) --yes --name=notes --package=notes"
cd notes
gradlew.bat svelteDevAll
```

`svelteDevAll` starts Vite, the Kotlin compiler and the app, and opens `http://localhost:8080` once everything answers. Leave it running: every step below reloads on save.

With the defaults, Kotlin files sit directly in `src/main/kotlin`, without package folders. This is the `Application.kt` the script wrote:

```kotlin no-check [src/main/kotlin/Application.kt]
package notes

import io.github.nijasc.ktor.svelte.Svelte
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.serialization.Serializable

@Serializable
data class Greeting(
    val message: String,
)

fun main() {
    val port = env("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)
}

fun Application.module() {
    install(Svelte) {
        generateTs = true
        transport {
            json()
            compression()
        }
    }
    configureErrors()

    routing {
        get("/api/hello") {
            call.respond(Greeting("Hello from Ktor"))
        }
    }
}
```

`generateTs = true` means the TypeScript client in `frontend/src/lib/api/` is rewritten from your routes each time the app starts. `env` comes from `Env.kt` and reads the environment and `.env`. `configureErrors` comes from `Errors.kt` and turns exceptions into JSON error responses.

## 2. Model the notes

Create `src/main/kotlin/Notes.kt` next to `Application.kt`:

```kotlin [src/main/kotlin/Notes.kt]
package notes

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.Validator
import io.ktor.openapi.JsonSchema
import kotlinx.serialization.Serializable
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger

@Serializable
enum class NoteStatus { ACTIVE, ARCHIVED }

@Serializable
data class Note(
    val id: Int,
    val title: String,
    val body: String,
    val status: NoteStatus,
)

@Serializable
data class NoteInput(
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(80)
    val title: String,
    val body: String = "",
) : Validated {
    override fun Validator.rules() {
        check(::title, title.isNotBlank()) { "A note needs a title." }
    }
}

class NoteStore {
    private val ids = AtomicInteger()
    private val notes = ConcurrentHashMap<Int, Note>()

    fun list(): List<Note> = notes.values.sortedBy { it.id }

    fun create(input: NoteInput): Note = Note(ids.incrementAndGet(), input.title, input.body, NoteStatus.ACTIVE).also { notes[it.id] = it }

    fun archive(id: Int): Note? = notes.computeIfPresent(id) { _, note -> note.copy(status = NoteStatus.ARCHIVED) }

    fun delete(id: Int): Boolean = notes.remove(id) != null
}
```

The schema annotations and the `Validated` rules do two jobs:

- ktor-svelte checks every received `NoteInput` against them and answers 422 with field errors.
- The generated client gets the same limits for your form.

The store keeps notes in memory, so they are gone after a restart. That is fine for now. [Page through long lists](../recipes/pagination.md#with-exposed) shows a store on a database.

## 3. Add the routes

Create `src/main/kotlin/NoteRoutes.kt`:

```kotlin [src/main/kotlin/NoteRoutes.kt]
package notes

import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.noteRoutes(store: NoteStore) {
    route("/api/notes") {
        get {
            val notes: List<Note> = store.list()
            call.respond(notes)
        }
        post {
            val input = call.receive<NoteInput>()
            call.respond(HttpStatusCode.Created, store.create(input))
        }
        post("/{id}/archive") {
            val note: Note? = store.archive(call.parameters["id"]?.toIntOrNull() ?: -1)
            if (note == null) call.respond(HttpStatusCode.NotFound) else call.respond(note)
        }
        delete("/{id}") {
            val deleted = store.delete(call.parameters["id"]?.toIntOrNull() ?: -1)
            call.respond(if (deleted) HttpStatusCode.NoContent else HttpStatusCode.NotFound)
        }
    }
}
```

Register them in `Application.kt`. Create the store above the existing `routing { }` block and add the routes inside it:

```kotlin no-check [src/main/kotlin/Application.kt]
package notes

import io.github.nijasc.ktor.svelte.Svelte
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import kotlinx.serialization.Serializable

@Serializable
data class Greeting(
    val message: String,
)

fun main() {
    val port = env("PORT")?.toInt() ?: 8080
    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)
}

fun Application.module() {
    install(Svelte) {
        generateTs = true
        transport {
            json()
            compression()
        }
    }
    configureErrors()

    val store = NoteStore()
    routing {
        get("/api/hello") {
            call.respond(Greeting("Hello from Ktor"))
        }
        noteRoutes(store)
    }
}
```

The two lines that changed, on their own:

```kotlin
val store = NoteStore()
routing {
    noteRoutes(store)
}
```

Save. The app restarts, and `frontend/src/lib/api/` now contains:

- the types `Note` and `NoteInput`,
- a `Status` enum, because enums are named after the property that uses them, so `status: NoteStatus` becomes `Status`,
- a `notes` service with `list`, `create`, `archive` and `delete`.

Open `http://localhost:8080/_ktor-svelte/routes` to see your routes next to the frontend pages.

::: tip How the names are chosen
`GET /api/notes` is `list`, `POST` is `create`, `DELETE /{id}` is `delete`, and `POST /{id}/archive` is `archive`. [Calling the API](../features/calling-the-api.md) has the full rules.
:::

## 4. Load notes into a page

Create `frontend/src/routes/notes/+page.ts`:

```ts [frontend/src/routes/notes/+page.ts]
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => ({
    notes: await apiWith(event).notes.list()
});
```

- `prerender = false` and `ssr = false`: the page depends on data from your API, so it is rendered in the browser and not at build time.
- `apiWith(event)` uses SvelteKit's `fetch` inside `load`. See [In load functions](../features/calling-the-api.md#in-load-functions).

## 5. Show and change them

Create `frontend/src/routes/notes/+page.svelte`:

```svelte [frontend/src/routes/notes/+page.svelte]
<script lang="ts">
    import { api, isValidationError, NoteInput, Status, type Note } from '#api';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let notes = $state<Note[]>([]);
    let title = $state('');
    let body = $state('');
    let errors = $state<Record<string, string[]>>({});

    $effect(() => {
        notes = data.notes;
    });

    async function refresh() {
        notes = await api.notes.list();
    }

    async function create(event: SubmitEvent) {
        event.preventDefault();
        const draft: NoteInput = { title, body };
        errors = NoteInput.validate(draft);
        if (Object.keys(errors).length > 0) return;
        try {
            await api.notes.create(draft);
            title = body = '';
            await refresh();
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
        }
    }
</script>

<h1 class="text-3xl font-bold">Notes</h1>

<form class="my-6 grid gap-2" onsubmit={create}>
    <input class="input w-full" placeholder="Title" bind:value={title} />
    {#each errors.title ?? [] as message}
        <p class="text-error text-sm">{message}</p>
    {/each}
    <textarea class="textarea w-full" placeholder="Body" bind:value={body}></textarea>
    <button class="btn btn-primary" type="submit">Add note</button>
</form>

<ul class="grid gap-2">
    {#each notes as note (note.id)}
        <li class="card bg-base-200 p-4" class:opacity-60={note.status === Status.ARCHIVED}>
            <strong>{note.title}</strong>
            <p>{note.body}</p>
            <div class="flex gap-2">
                <button class="btn btn-xs" disabled={note.status === Status.ARCHIVED} onclick={() => api.notes.archive(note.id).then(refresh)}>Archive</button>
                <button class="btn btn-xs btn-error" onclick={() => api.notes.delete(note.id).then(refresh)}>Delete</button>
            </div>
        </li>
    {:else}
        <li>No notes yet.</li>
    {/each}
</ul>
```

Open `http://localhost:8080/notes`. Add a note, archive it, delete it.

Every call is typed. Try it: rename `body` in `NoteInput`, save, and `svelte-check` points at each line that needs to change. Rename it back before you go on.

## 6. Try the validation

The form has two layers of checks, and you can see both:

1. **Submit an empty title.** `NoteInput.validate` shows "Must be at least 1 character." without sending a request, because the generated client knows the `MinLength` annotation.
2. **Type only spaces.** That passes the browser check, but the `isNotBlank` rule runs on the server, which answers 422, and `isValidationError` shows "A note needs a title." under the field.

Rules in `Validated.rules()` only run on the server. Annotations run on both sides. See [Validation](../features/validation.md) for every annotation and for [form state](../features/validation.md#form-state), which saves you the error variables.

## 7. Pass config to the frontend

Values that differ per environment, such as the app name, come from Ktor at startup. Add a class to `Notes.kt`:

```kotlin
@Serializable
data class AppConfig(
    val appName: String,
)
```

Pass it in `install(Svelte)`. `env` comes with the generated project and also reads `.env`:

```kotlin
publicConfig(AppConfig(appName = env("APP_NAME") ?: "Notes"))
```

In the whole `install(Svelte)` block, that is:

```kotlin no-check [src/main/kotlin/Application.kt]
install(Svelte) {
    generateTs = true
    publicConfig(AppConfig(appName = env("APP_NAME") ?: "Notes"))
    transport {
        json()
        compression()
    }
}
```

Load it next to the notes in `frontend/src/routes/notes/+page.ts`:

```ts [frontend/src/routes/notes/+page.ts]
import { apiWith, loadPublicConfig } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => ({
    notes: await apiWith(event).notes.list(),
    config: await loadPublicConfig()
});
```

Use `{data.config.appName}` as the heading of the page:

```svelte no-check
<h1 class="text-3xl font-bold">{data.config.appName}</h1>
```

- In production the config is inlined into every page, so `loadPublicConfig()` reads it without a request.
- In development Vite serves the pages, so it is fetched once.

::: warning Never put secrets in it
Anyone can read the public config. Keep keys and passwords on the server. See [Runtime config](../features/runtime-config.md).
:::

## 8. Run the checks

Stop `svelteDevAll`, then format both sides and run the checks:

```bash
./gradlew format
./gradlew check
```

`check` starts your app once, generates the TypeScript in memory and fails if the committed client differs from it. So a changed DTO or route can never drift away from the frontend unnoticed, also in CI. The project came with a GitHub Actions workflow that runs this for you.

## 9. Ship one JAR

Build the JAR and run it:

```bash
./gradlew buildFatJar
APP_NAME="My notes" java -jar build/libs/notes-all.jar
```

On Windows:

```powershell
$env:APP_NAME = "My notes"; java -jar build\libs\notes-all.jar
```

The JAR contains the API, the built frontend and its manifest. Open `http://localhost:8080/notes`: same app, now with compressed, cached files and a strict Content-Security-Policy.

The project also came with a `Dockerfile` that builds the same JAR and runs it as a non-root user:

```bash
docker build -t notes .
docker run -p 8080:8080 -e APP_NAME="My notes" notes
```

Before you deploy for real, `./gradlew svelteSmokeTest` starts the packaged app in production mode and checks that every page and API route answers. See [Deployment](deployment.md) for Docker, reverse proxies and a checklist.

## Where to go next

- Tags, search, paging and uploads: [examples/notes](https://github.com/nijasc/ktor-svelte/tree/main/examples/notes) and the [recipes](../recipes/)
- Less route code: [resource routes](../features/typescript.md#resource-routes) register list, get, create, update and delete in one block
- Sign-in with a session cookie: [Sessions](../recipes/sessions.md)
- Everything the client can do: [Calling the API](../features/calling-the-api.md)
- Every feature at a glance: [Everything ktor-svelte does](../features/)
