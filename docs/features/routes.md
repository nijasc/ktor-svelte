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

`routeIds` holds the raw SvelteKit route IDs under the same names, such as `routeIds.notesId` for `/notes/[id]`. Use it to compare with `page.route.id`, or to call `resolve()` yourself.

With [i18n](./frontend-libraries.md#i18n) and `strategy = LocaleStrategy.UrlPrefix`, every route also puts the current language in front, such as `/de/notes/1`, so every language gets prerendered without calling `localizeHref` by hand. With the `Cookie` strategy, or without i18n, it is plain `resolve()`.

## In Kotlin

The same pages become `FrontendRoutes` in the generated package. Pages without parameters are constants, and pages with parameters are functions that encode their arguments:

```kotlin
import io.github.nijasc.ktorsvelte.FrontendRoutes
import io.github.nijasc.ktorsvelte.localizeHref

post("/api/notes") {
    val note = notes.create(call.receive())
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

It fails while it finds any, and it only looks at paths that match a page, so links to your API, to files and to other sites are left alone. When a path is too dynamic to read, the suggestion shows `...` where the value goes. In Kotlin, string templates such as `$id` and `${note.id}` become the arguments, and a value that is not a `String` still needs its `toString()`. It is not part of `check`. To keep new string links out, add it yourself:

```kotlin no-check
tasks.check {
    dependsOn("svelteVerifyRoutes")
}
```
