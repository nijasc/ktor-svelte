---
layout: home

hero:
  name: ktor-svelte
  text: One app. One JAR. One port.
  tagline: Write your API in Ktor and your pages in SvelteKit. Call every route from Svelte with full types, develop with hot reload on one port, and ship it all as a single JAR.
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: Everything it does
      link: /features/
    - theme: alt
      text: Tutorial
      link: /guide/tutorial
    - theme: alt
      text: View on GitHub
      link: https://github.com/nijasc/ktor-svelte

features:
  - title: One port, one JAR
    details: The built frontend goes inside the JAR, next to your API. Works with jar, Shadow and Ktor's buildFatJar. No CORS, no second server, no Node in production.
    link: /guide/deployment
    linkText: Deploy it
  - title: A typed client for your routes
    details: Types, services, enums and validation helpers come from your Ktor routes, with no npm dependencies. Change a route and the frontend follows.
    link: /features/typescript
    linkText: See the client
  - title: Calling the API
    details: Typed errors, paging, uploads with progress, event streams, retries, timeouts and toasts from the server, all from one import.
    link: /features/calling-the-api
    linkText: Call it
  - title: One set of rules
    details: Put bounds on your Kotlin classes once. The server answers 422 with field errors, and the browser runs the same checks before it sends.
    link: /features/validation
    linkText: Validation
  - title: Typed links
    details: Every SvelteKit page becomes a typed constant in TypeScript and in Kotlin, so a link to a page that does not exist fails to compile.
    link: /features/routes
    linkText: Typed routes
  - title: Real hot reload
    details: One command runs Vite, the Kotlin compiler and your app. Svelte changes hot reload, Kotlin changes restart the app, and a dev panel shows every call.
    link: /guide/dev-workflow
    linkText: Dev workflow
  - title: Styling from Gradle
    details: Tailwind, DaisyUI themes, shadcn looks and self-hosted fonts, turned on in build.gradle.kts and typed on both sides.
    link: /features/styling
    linkText: Styling
  - title: Ready-made components
    details: Form fields, date inputs, a data table, a file drop zone, an error page and theme and language switches, built on the generated client.
    link: /features/components
    linkText: Components
  - title: Two languages, one message file
    details: Typed messages with plurals, and numbers, money and dates that read the same in the browser and on the server.
    link: /features/i18n
    linkText: i18n
  - title: Users and permissions
    details: Declare the current user, permissions and page guards once in Kotlin. The frontend gets a typed store and the same rules.
    link: /features/auth
    linkText: Auth
  - title: Secure by default
    details: Strict CSP from build hashes, security headers, origin checks, body limits, rate limits and hidden error details, each with a one-line opt-out.
    link: /security
    linkText: Security
  - title: Fast in production
    details: Immutable caching, ETags, precompressed files with zstd, Brotli and gzip, and compressed API responses.
    link: /features/transport
    linkText: Transport
---

## Taste it

Write a route in Kotlin and save. Call it from Svelte, with the types, the field limits and the errors already there.

::: code-group

```kotlin [Routes.kt]
@Serializable
data class NoteInput(
    @JsonSchema.MinLength(1)
    @JsonSchema.MaxLength(80)
    val title: String,
)

fun Route.noteRoutes(notes: MutableList<Note>) {
    route("/api/notes") {
        get {
            call.respond(notes.toList())
        }
        post {
            val input = call.receive<NoteInput>()
            val note = Note(id = notes.size + 1, title = input.title)
            notes += note
            call.respond(HttpStatusCode.Created, note)
        }
    }
}
```

```svelte [+page.svelte]
<script lang="ts">
    import { api, isValidationError, type Note } from '#api';

    let notes = $state<Note[]>([]);
    let title = $state('');
    let errors = $state<Record<string, string[]>>({});

    $effect(() => {
        api.notes.list().then((list) => (notes = list));
    });

    async function add(event: SubmitEvent) {
        event.preventDefault();
        try {
            await api.notes.create({ title });
            notes = await api.notes.list();
            title = '';
            errors = {};
        } catch (error) {
            if (!isValidationError(error)) throw error;
            errors = error.body.fields;
        }
    }
</script>

<form onsubmit={add}>
    <input bind:value={title} placeholder="Title" />
    {#each errors.title ?? [] as message}
        <p>{message}</p>
    {/each}
    <button type="submit">Add</button>
</form>

<ul>
    {#each notes as note (note.id)}
        <li>{note.title}</li>
    {/each}
</ul>
```

:::

`api.notes.list()` returns `Note[]`, `api.notes.create` only takes a `NoteInput`, and a title that breaks the limits comes back as a field error. Rename `title` in Kotlin, and `svelte-check` points at every line that needs to change. The [tutorial](./guide/tutorial.md) builds this app step by step.

## What you get

- **One app.** In production, one JVM process serves your pages and your API on one port. In development you open the same port and get Vite's hot reload.
- **Your routes win.** A Ktor route beats a frontend page with the same path, whatever order you register them in.
- **Types across the line.** DTOs, enums, sealed classes, IDs, dates, money, constants, error codes and permissions reach TypeScript with their Kotlin names.
- **Batteries in Gradle.** Tailwind, DaisyUI, Lucide, charts, fonts, images, i18n, components and an installable app, each one line in `build.gradle.kts`.
- **Checks that catch drift.** `./gradlew check` fails when the committed client or the generated frontend files are out of date.
- **Tests in Kotlin.** Drive a real browser against the packaged JAR with the [browser test kit](./guide/browser-tests.md).

Every feature, grouped and linked, is on [Everything ktor-svelte does](./features/). What the last major release brought is in [New in 1.0](./releases/1.0.md).

## See it in an app

The [showcase example](./examples.md#showcase) is a team board with sign in, roles, a database, file uploads, search and two languages. These are pictures of its production JAR: one process that serves the pages and the API.

![The board of the showcase, with counters, a search box, filters and a list of tasks](/showcase/board.png)

A task in the dark theme, with its files and comments:

![A task of the showcase in the dark theme, with a file upload and a comment](/showcase/task.png)

The admin area in German and in a custom theme, both set from Gradle:

![The admin area of the showcase in German, with a role select and an active switch for each person](/showcase/admin.png)

The pictures come from `./gradlew -p examples/showcase screenshots`, so they show what the current code does.
