# Typed routes

Every page in `src/routes` becomes a typed constant in TypeScript and in Kotlin, so a link or a redirect to a page that does not exist fails to compile.

Turn it on in `build.gradle.kts` and run `./gradlew svelteSync`:

```kotlin
svelte {
    libraries {
        routes()
    }
}
```

A folder is a page when it holds a `+page.svelte`, `+page.ts`, `+page.js` or `+page.server.ts`. Route groups such as `(app)` are left out of the path, and layouts alone are not pages. If your routes live somewhere else, point to them with `routes { dir = layout.projectDirectory.dir("frontend/src/pages") }`.

## In Svelte

`#routes` exports `routes`, an object with one function per page. Each one returns the page's URL through SvelteKit's `resolve()` from `$app/paths`:

```svelte
<script lang="ts">
    import { routes } from '#routes';

    let { note } = $props();
</script>

<a href={routes.home()}>Home</a>
<a href={routes.notesId({ id: note.id })}>{note.title}</a>
```

The parameters come from SvelteKit's own route types, so a missing or misspelled parameter is a type error. Numbers are accepted too, so an ID needs no `String()`. Since every call goes through `resolve()`, a base path and relative prerender links work as usual, and the same functions work with `goto`.

`routeIds` holds the raw SvelteKit route IDs under the same names, such as `routeIds.notesId` for `/notes/[id]`. Use it to call `resolve()` yourself.

### Marking the open page in a menu

Every route can tell whether it is the page that is open, so a menu does not compare path strings:

```svelte
<script lang="ts">
    import { page } from '$app/state';
    import { routes } from '#routes';
</script>

<a href={routes.home()} aria-current={routes.home.ariaCurrent(page)}>Home</a>
<a href={routes.notes()} aria-current={routes.notes.ariaCurrent(page, { below: true })}>Notes</a>
<a href={routes.about()} class:font-bold={routes.about.isActive(page)}>About</a>
```

- `isActive(page)` is `true` on that page. For a page with parameters, such as `routes.notesId`, that is every note.
- `{ below: true }` also counts every page below it: `routes.notes` is then active on `/notes`, `/notes/4` and `/notes/4/edit`, but not on `/notebooks`. The home page has everything below it, so for `routes.home` the option changes nothing.
- `ariaCurrent(page)` gives the value for `aria-current`: `page` on the page itself, `true` on a page below it when `below` is set, and nothing otherwise, so the attribute is left out. Style the open link through it, such as `[aria-current]` in CSS or `aria-[current]:font-bold` in Tailwind.

They compare SvelteKit's route ID, not the URL, so a base path, a language prefix, a trailing slash or a query string cannot get in the way, and route groups such as `(app)` are ignored. `routes.notes.id` is the route ID itself.

With [i18n](./frontend-libraries.md#i18n) and `strategy = LocaleStrategy.UrlPrefix`, every route also puts the current language in front, such as `/de/notes/1`, so every language gets prerendered without calling `localizeHref` by hand. With the `Cookie` strategy, or without i18n, it is plain `resolve()`.

## In Kotlin

The same pages become `FrontendRoutes` in the generated package. Pages without parameters are constants, and pages with parameters are functions that encode their arguments:

```kotlin
import io.github.nijasc.ktorsvelte.FrontendRoutes
import io.github.nijasc.ktorsvelte.localizeHref

post("/api/notes") {
    val note = store.create(call.receive<Note>())
    call.respondRedirect(call.localizeHref(FrontendRoutes.notesId(note.id.toString())))
}

get("/old-about") {
    call.respondRedirect(FrontendRoutes.about, permanent = true)
}
```

Optional parameters such as `[[lang]]` become nullable arguments, and rest parameters such as `[...path]` keep their slashes. With i18n, `call.localizeHref` adds the visitor's language for `UrlPrefix` and returns the path unchanged for `Cookie`.

## Names

A route's name is its path in camel case, without groups: `/` is `home`, `/about` is `about`, `/notes/[id]` is `notesId` and `/[[lang]]/docs/[...path]` is `langDocsPath`. A name that would start with a digit gets a `route` prefix, such as `route404`. When two pages would get the same name, such as `/blog-post` and `/blog/post`, sync fails and names both, so rename one of the folders.

## Keeping it current

`routes.ts` is a generated file like the others: commit it, and a production build fails if it is out of date. While `svelteDev` or `svelteDevAll` runs, adding, moving or deleting a page updates `routes.ts` at once. Under `svelteDevAll` `FrontendRoutes` follows and the app restarts. Otherwise it updates the next time Kotlin compiles.

## Renaming a page

Moving a page folder changes its route name, so every typed call to it stops compiling. `svelteRename` moves the folder and fixes those calls in one step:

```bash
./gradlew svelteRename --page=notes/[id] --to=memos/[id]
```

It moves `src/routes/notes/[id]` and every page below it, rewrites `routes.notesId` and `routeIds.notesId` in the frontend and `FrontendRoutes.notesId` in Kotlin to the new names, and then runs `svelteSync`, so `routes.ts` matches again. Both paths are relative to the routes folder, and route groups such as `(app)` are written as they are on disk.

The task stops before it changes anything when a file it would rewrite has uncommitted changes, so the rename stays one clean diff. Add `--force` to rename anyway. When the page's parameters change, such as `[id]` to `[noteId]`, the calls are renamed but their arguments are yours to update, and the compiler names each one. Nothing answers at the old address afterwards, so add a redirect if it was linked from outside the app.

## Finding links that are still strings

An app that turns typed routes on later still has links such as `href="/notes/{note.id}"`. `svelteVerifyRoutes` reads every `.svelte`, `.ts` and `.js` file under `src` and lists each `href`, `goto` and `redirect` whose path is one of your pages, with the call to write instead. It reads the Kotlin files in `src/main/kotlin` too, and lists each `respondRedirect` to a page with its `FrontendRoutes` replacement:

```bash
./gradlew svelteVerifyRoutes
```

```text
src/routes/+page.svelte:12  href="/notes/{note.id}"  ->  routes.notesId({ id: note.id })
src/lib/NoteForm.svelte:31  goto("/notes/" + created.id)  ->  routes.notesId({ id: created.id })
src/main/kotlin/notes/Routes.kt:48  respondRedirect("/notes/${note.id}")  ->  FrontendRoutes.notesId(note.id)
```

It fails while it finds any, and it only looks at paths that match a page, so links to your API, to files and to other sites are left alone. When a path is too dynamic to read, the suggestion shows `...` where the value goes. In Kotlin, string templates such as `$id` and `${note.id}` become the arguments, and a value that is not a `String` still needs its `toString()`. Add `--fix` and the task rewrites the links for you and adds the `#routes` import to each file it changes:

```bash
./gradlew svelteVerifyRoutes --fix
```

It only rewrites a link when nothing is lost. A link with a query string or a fragment, a path that is too dynamic to read, and a Kotlin redirect with parameters are still listed for you to change by hand, and a file that already has something else called `routes` is left alone. Look at the diff before you commit, and run your formatter afterwards.

The check is not part of `check`. To keep new string links out, add it yourself:

```kotlin no-check
tasks.check {
    dependsOn("svelteVerifyRoutes")
}
```

## Finding links that lead nowhere

`svelteVerifyLinks` is the opposite check. It reads the same files, and lists every internal link whose path is not one of your pages, not under your API and not a file in `static`, so a typo in an `href` shows up before a visitor finds it:

```bash
./gradlew svelteVerifyLinks
```

```text
src/routes/+page.svelte:14  href="/abuot"  ->  nothing is served at /abuot
src/main/kotlin/notes/Routes.kt:52  respondRedirect("/notes/${id}/edit")  ->  nothing is served at /notes/{}/edit
```

It only lists what it finds. Add `--strict` to fail the build instead, for example in CI.

The check works with or without typed routes. Paths under your API are never reported, because the generated client already makes a call to a missing route a compile error. The API roots come from the generated `openapi.json`, or `/api` when there is none. A link that starts with a value, such as `href="/{section}/overview"`, cannot be judged and is skipped, and with `LocaleStrategy.UrlPrefix` a leading language such as `/de` is accepted.

## A new page

A new page is a folder, two files with the right names, the load's types, and for a page with a parameter two settings that are easy to forget. `svelteAdd` writes them:

```bash
./gradlew svelteAdd --page=notes/[id]
```

```text
ktor-svelte added /notes/[id]:
  frontend/src/routes/notes/[id]/+page.svelte
  frontend/src/routes/notes/[id]/+page.ts
Its load calls api.notes.get, the route that answers at the same path.
Add paramRoutes("/notes/[id]") to install(Svelte), so the app serves the page for every value.
The files are yours from here on.
```

Write the folder as it is under `src/routes`, with groups such as `(app)/settings` if you use them.

The `+page.ts` has a typed load. When the generated client already has a `GET` route at the same path below your API prefix, the load calls it, with the page's parameters in the type the route wants:

```ts no-check
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => {
    return { note: await apiWith(event).notes.get(Number(event.params.id)) };
};
```

Without such a route the load returns the page's parameters, and you fill in the rest. The `+page.svelte` shows a title and the loaded data, so the page works before you have designed it. With [typed routes](#typed-routes) on, `routes.ts` is updated in the same run.

Add `--route` and the task also writes a Kotlin file with a route to start from, at the API path of the page:

```bash
./gradlew svelteAdd --page=orders/[id] --route
```

```kotlin no-check
fun Route.ordersIdRoutes() {
    get("/api/orders/{id}") {
        val id = call.parameters["id"].orEmpty()
        call.respondText("Orders $id")
    }
}
```

The file goes into the package of your main class. Call the function inside `routing { }`, and after the next `svelteGenerateTs` the client has the route.

The task only creates. It refuses when one of its files is already there, it never edits a file of yours, and what it wrote has no generated header: the files are yours.
