# Tutorial: a notes app

Build a small notes app from an empty folder: a Ktor API, a SvelteKit page that calls it through the generated client, validation on both sides, and one JAR at the end. It takes about 20 minutes. The finished, larger version is [`examples/notes`](https://github.com/nijasc/ktor-svelte/tree/main/examples/notes).

You need Java 17 or newer and one of Bun, pnpm, npm or Yarn.

## 1. Create the project

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=notes --package=notes
cd notes
./gradlew svelteDevAll
```

On Windows, use the PowerShell command from [Getting started](getting-started.md) with the same options. `svelteDevAll` starts Vite, the Kotlin compiler and the app, and opens `http://localhost:8080` once everything answers. Leave it running: every step below reloads on save.

The project has `generateTs = true` in `install(Svelte)`, so the TypeScript client in `frontend/src/lib/api/` is rewritten from your routes each time the app starts.

## 2. Model the notes

Create `src/main/kotlin/Notes.kt` next to `Application.kt`:

```kotlin
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

The schema annotations and the `Validated` rules do two jobs. ktor-svelte checks every received `NoteInput` against them and answers 422 with field errors, and the generated client gets the same limits for your form.

## 3. Add the routes

Create `src/main/kotlin/NoteRoutes.kt`:

```kotlin
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

```kotlin
val store = NoteStore()
routing {
    noteRoutes(store)
}
```

Save. The app restarts, and `frontend/src/lib/api/` now contains `Note`, `NoteInput`, a `Status` enum and a `notes` service with `list`, `create`, `archive` and `delete`. Enums are named after the property that uses them, so `status: NoteStatus` becomes `Status`. Open `http://localhost:8080/_ktor-svelte/routes` to see your routes next to the frontend pages.

## 4. Load notes into a page

Create `frontend/src/routes/notes/+page.ts`:

```ts
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => ({
    notes: await apiWith(event).notes.list()
});
```

The page depends on data from your API, so it is rendered in the browser and not at build time. `apiWith(event)` uses SvelteKit's `fetch` inside `load`.

## 5. Show and change them

Create `frontend/src/routes/notes/+page.svelte`:

```svelte
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

Open `http://localhost:8080/notes`. Add a note, archive it, delete it. Every call is typed: rename `body` in `NoteInput`, save, and `svelte-check` points at each line that needs to change.

Submit an empty title: `NoteInput.validate` shows "Must be at least 1 character." without sending a request, because the generated client knows the `MinLength` annotation. Now type only spaces: that passes the browser check, but the `isNotBlank` rule runs on the server, which answers 422, and `isValidationError` shows "A note needs a title." under the field.

## 6. Pass config to the frontend

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

Load it next to the notes in `frontend/src/routes/notes/+page.ts`:

```ts
import { apiWith, loadPublicConfig } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => ({
    notes: await apiWith(event).notes.list(),
    config: await loadPublicConfig()
});
```

In production the config is inlined into every page, so `loadPublicConfig()` reads it without a request. In development Vite serves the pages, so it is fetched once. Use `{data.config.appName}` as the heading of the page. Never put secrets in it: anyone can read it. See [Runtime config](../features/runtime-config.md).

## 7. Ship one JAR

Stop `svelteDevAll`, then build and run:

```bash
./gradlew buildFatJar
APP_NAME="My notes" java -jar build/libs/notes-all.jar
```

The JAR contains the API, the built frontend and its manifest. Open `http://localhost:8080/notes`: same app, now with compressed, cached files and a strict Content-Security-Policy. See [Deployment](deployment.md) for Docker and reverse proxies.

## Where to go next

- Tags, search, paging and uploads: [examples/notes](https://github.com/nijasc/ktor-svelte/tree/main/examples/notes) and the [recipes](../recipes/)
- Sign-in with a session cookie: [Sessions](../recipes/sessions.md)
- Everything the client can do: [Calling the API](../features/calling-the-api.md)
