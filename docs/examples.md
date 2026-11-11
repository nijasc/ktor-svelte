# Examples

Two example apps live in the repository. They are separate Gradle builds that use ktor-svelte the way your project does, and they double as the end-to-end tests, so they always work with the current code.

## Run them

Clone the repository, then start an example with everything in one command:

```bash
git clone https://github.com/nijasc/ktor-svelte.git
cd ktor-svelte
./gradlew -p examples/notes svelteDevAll
```

Open `http://localhost:8080`. In IntelliJ, open the repository and run the `Notes: Dev` or `Basic: Dev` run configuration instead. You need Java 17 or newer and [Bun](https://bun.sh).

To build and run the production JAR:

```bash
./gradlew -p examples/notes buildFatJar
```

```bash
java -jar examples/notes/build/libs/notes-all.jar
```

## basic

[`examples/basic`](https://github.com/nijasc/ktor-svelte/tree/main/examples/basic) is the smallest possible app.

| Look at | To see |
|---|---|
| `src/main/kotlin/Application.kt` | `install(Svelte)` with no settings, and one API route |
| `frontend/src/routes/+page.svelte`, `about/` | Prerendered pages |
| `frontend/src/routes/app/` | A page that renders in the browser and calls the API |
| `frontend/vite.config.ts` | The `adapter-static` setup SvelteKit needs |

## notes

[`examples/notes`](https://github.com/nijasc/ktor-svelte/tree/main/examples/notes) is a small notes app that uses almost every feature.

| Look at | To see |
|---|---|
| `src/main/kotlin/notes/Application.kt` | `generateTs`, `transport { json(); xml(); compression() }`, `publicConfig` and `apiDocs` |
| `src/main/kotlin/notes/Model.kt` | DTOs with `@JsonSchema` bounds and `Validated` rules, `Page<Note>` |
| `src/main/kotlin/notes/Routes.kt` | CRUD routes, typed 404 errors, a paged feed and multipart attachments |
| `frontend/src/lib/api/` | The generated client, committed |
| `frontend/src/routes/notes/+page.svelte` | Forms with `use:field`, client and server validation, search and tag filters |
| `frontend/src/routes/notes/[id]/` | A dynamic route with `apiWith(event)` in `load` and typed errors |
| `frontend/src/routes/+layout.svelte` | DaisyUI themes, Lucide icons and i18n with a language switcher |
| `src/e2eTest/kotlin/NotesAppTest.kt` | How the production JAR is tested end to end |

Things to try while `svelteDevAll` runs:

- Change a Svelte file: the page updates without a reload.
- Add a property to `Note` in `Model.kt`: the app restarts, and `frontend/src/lib/api/types.ts` gains the property a moment later.
- Open `http://localhost:8080/api/docs` for Swagger UI.
- Submit an empty title: the error comes from the generated `validate()` before any request is sent.

## Your own examples

The [recipes](recipes/index.md) show complete solutions for sessions, uploads, live updates, paging and an admin area that you can copy into your app.
