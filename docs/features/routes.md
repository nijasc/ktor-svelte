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

`#routes` exports `routes`, an object with one entry per page, and `href`, which turns a route into a link through SvelteKit's `resolve()` from `$app/paths`:

```svelte
<script lang="ts">
    import { href, routes } from '#routes';

    let { note } = $props();
</script>

<a href={href(routes.home)}>Home</a>
<a href={href(routes.notesId, { id: note.id })}>{note.title}</a>
```

The parameters come from SvelteKit's own route types, so a missing or misspelled parameter is a type error. Since `href` goes through `resolve()`, a base path and relative prerender links work as usual. You can also pass a route to `resolve()` yourself, as in `resolve(routes.notesId, { id })`.

With [i18n](./frontend-libraries.md#i18n) and `strategy = LocaleStrategy.UrlPrefix`, `href` also puts the current language in front, such as `/de/notes/1`, so every language gets prerendered without calling `localizeHref` by hand. With the `Cookie` strategy, or without i18n, it is plain `resolve()`.

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
