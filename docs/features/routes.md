# Typed routes

Every page in `src/routes` becomes a typed constant in TypeScript and in Kotlin, so a link or a redirect to a page that does not exist fails to compile. On top of that come menus, titles, breadcrumbs, link previews, checks for string links and dead links, and tasks that create, rename and scaffold pages.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated client" />

## Quick start

Turn it on in `build.gradle.kts` and run `./gradlew svelteSync`:

```kotlin
svelte {
    libraries {
        routes()
    }
}
```

Then link to pages by name:

```svelte
<script lang="ts">
    import { routes } from '#routes';

    let { note } = $props();
</script>

<a href={routes.home()}>Home</a>
<a href={routes.notesId({ id: note.id })}>{note.title}</a>
```

## What counts as a page

- A folder is a page when it holds a `+page.svelte`, `+page.ts`, `+page.js` or `+page.server.ts`.
- Route groups such as `(app)` are left out of the path.
- Layouts alone are not pages.

| Setting in `routes { }` | Default | What it does |
|---|---|---|
| `dir` | `src/routes` in your frontend | Where your routes live |

```kotlin
svelte {
    libraries {
        routes { dir = layout.projectDirectory.dir("frontend/src/pages") }
    }
}
```

## Overview

| You want to | Use |
|---|---|
| Link to a page in Svelte | [`routes.notesId({ id })`](#in-svelte) |
| Highlight the open page in a menu | [`isActive`, `ariaCurrent`](#marking-the-open-page-in-a-menu) |
| Redirect to a page from Kotlin | [`FrontendRoutes.notesId(id)`](#in-kotlin) |
| Build a menu, titles and breadcrumbs | [`_nav`, `nav`, `pageTitle`, `breadcrumbs`](#menu-titles-and-breadcrumbs) |
| Nice previews when a link is shared | [`description` and `image` in `_nav`](#link-previews) |
| Rename a page and every link to it | [`svelteRename`](#renaming-a-page) |
| Find links that are still strings | [`svelteVerifyRoutes`](#finding-links-that-are-still-strings) |
| Find links that lead nowhere | [`svelteVerifyLinks`](#finding-links-that-lead-nowhere) |
| Create a page | [`svelteAdd --page`](#a-new-page) |
| Create list, detail and form pages for a class | [`svelteAdd --crud`](#pages-for-a-class) |

## In Svelte

`#routes` exports `routes`, an object with one function per page. Each one returns the page's URL through SvelteKit's `resolve()` from `$app/paths`:

```svelte
<script lang="ts">
    import { goto } from '$app/navigation';
    import { routes } from '#routes';

    let { note } = $props();
</script>

<a href={routes.notes()}>All notes</a>
<button onclick={() => goto(routes.notesId({ id: note.id }))}>Open</button>
```

- The parameters come from SvelteKit's own route types, so a missing or misspelled parameter is a type error.
- Numbers are accepted too, so an ID needs no `String()`.
- Since every call goes through `resolve()`, a base path and relative prerender links work as usual, and the same functions work with `goto`.

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

| Function | Returns |
|---|---|
| `isActive(page)` | `true` on that page. For a page with parameters, such as `routes.notesId`, that is every note |
| `isActive(page, { below: true })` | Also `true` on every page below it |
| `ariaCurrent(page)` | The value for `aria-current`: `page` on the page itself, `true` on a page below it when `below` is set, and nothing otherwise, so the attribute is left out |
| `routes.notes.id` | The route ID itself |

- With `{ below: true }`, `routes.notes` is active on `/notes`, `/notes/4` and `/notes/4/edit`, but not on `/notebooks`. The home page has everything below it, so for `routes.home` the option changes nothing.
- Style the open link through `aria-current`, such as `[aria-current]` in CSS or `aria-[current]:font-bold` in Tailwind.
- They compare SvelteKit's route ID, not the URL, so a base path, a language prefix, a trailing slash or a query string cannot get in the way, and route groups such as `(app)` are ignored.

### With i18n

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

- Optional parameters such as `[[lang]]` become nullable arguments.
- Rest parameters such as `[...path]` keep their slashes.
- With i18n, `call.localizeHref` adds the visitor's language for `UrlPrefix` and returns the path unchanged for `Cookie`.
- The same names work with [`call.navigateTo`](./calling-the-api.md#navigation-from-the-server), which opens a page in the browser after an API call.
- `FrontendRoutes.Patterns` has every page as its pattern, such as `FrontendRoutes.Patterns.notesId` for `"/notes/[id]"`. Use it where Kotlin names a page rather than a link to one, as in [`pageLoad`](./calling-the-api.md#generated-page-loads).

## Names

A route's name is its path in camel case, without groups:

| Page | Name |
|---|---|
| `/` | `home` |
| `/about` | `about` |
| `/notes/[id]` | `notesId` |
| `/[[lang]]/docs/[...path]` | `langDocsPath` |
| `/404` | `route404` |

A name that would start with a digit gets a `route` prefix. When two pages would get the same name, such as `/blog-post` and `/blog/post`, sync fails and names both, so rename one of the folders.

## Keeping it current

`routes.ts` is a generated file like the others: commit it, and a production build fails if it is out of date.

- While `svelteDev` or `svelteDevAll` runs, adding, moving or deleting a page updates `routes.ts` at once.
- Under `svelteDevAll` `FrontendRoutes` follows and the app restarts. Otherwise it updates the next time Kotlin compiles.

## Renaming a page

Moving a page folder changes its route name, so every typed call to it stops compiling. `svelteRename` moves the folder and fixes those calls in one step:

```bash
./gradlew svelteRename --page=notes/[id] --to=memos/[id]
```

It moves `src/routes/notes/[id]` and every page below it, rewrites `routes.notesId` and `routeIds.notesId` in the frontend and `FrontendRoutes.notesId` in Kotlin to the new names, and then runs `svelteSync`, so `routes.ts` matches again. Both paths are relative to the routes folder, and route groups such as `(app)` are written as they are on disk.

| Option | What it does |
|---|---|
| `--page=<path>` | The page to move, relative to the routes folder |
| `--to=<path>` | Where it goes |
| `--force` | Renames even when a file it would rewrite has uncommitted changes |

- The task stops before it changes anything when a file it would rewrite has uncommitted changes, so the rename stays one clean diff. Add `--force` to rename anyway.
- When the page's parameters change, such as `[id]` to `[noteId]`, the calls are renamed but their arguments are yours to update, and the compiler names each one.
- Nothing answers at the old address afterwards, so add a redirect if it was linked from outside the app.

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

- It fails while it finds any.
- It only looks at paths that match a page, so links to your API, to files and to other sites are left alone.
- When a path is too dynamic to read, the suggestion shows `...` where the value goes.
- In Kotlin, string templates such as `$id` and `${note.id}` become the arguments, and a value that is not a `String` still needs its `toString()`.

Add `--fix` and the task rewrites the links for you and adds the `#routes` import to each file it changes:

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

- The check works with or without typed routes.
- Paths under your API are never reported, because the generated client already makes a call to a missing route a compile error. The API roots come from the generated `openapi.json`, or `/api` when there is none.
- A link that starts with a value, such as `href="/{section}/overview"`, cannot be judged and is skipped.
- With `LocaleStrategy.UrlPrefix` a leading language such as `/de` is accepted.

## Menu, titles and breadcrumbs

A menu is a list of pages with a title and an icon each, kept by hand somewhere far from the pages. Let each page say it about itself instead, in its `+page.ts`:

```ts no-check
export const _nav = { title: 'Board', icon: 'LayoutDashboard', order: 1 };
```

| Field | What it does |
| --- | --- |
| `title` | The page's title. With `i18n` on, write the key of a message, such as `'nav-board'`, and the title is translated |
| `icon` | Optional. With `lucide()` on, the name of an icon |
| `order` | Optional. Where the page stands in the menu. Pages without it come last, in the order of their paths |
| `menu` | Optional. `false` keeps the page out of the menu, with its title still known |
| `description`, `image` | Optional. For [link previews](#link-previews) |

The name starts with an underscore because SvelteKit refuses other exports from a page file. Keep the values plain: text, numbers, `true` and `false`. The plugin reads the file without running it, so a function call or a variable there fails `svelteSync` with the name of the file.

`routes.ts` then has three more things:

```svelte no-check
<script lang="ts">
    import { page } from '$app/state';
    import { breadcrumbs, nav, pageTitle } from '#routes';
</script>

<svelte:head>
    <title>{pageTitle(page) ?? 'My app'}</title>
</svelte:head>

<nav>
    {#each nav as item (item.name)}
        <a href={item.to()} aria-current={item.to.ariaCurrent(page)}>{item.title()}</a>
    {/each}
</nav>

<ol>
    {#each breadcrumbs(page) as crumb (crumb.href)}
        <li><a href={crumb.href} aria-current={crumb.current ? 'page' : undefined}>{crumb.title}</a></li>
    {/each}
</ol>
```

| Export | What it is |
|---|---|
| `nav` | The pages without parameters, in order. Each item has the typed route as `to`, the `title` as a function so that it follows the language, the `icon`, and the route's `name` |
| `pageTitle(page)` | The title of the open page, or `undefined` for a page that declared none. It works for pages with parameters too |
| `breadcrumbs(page)` | The way from the start page to the open one: every page above it that has a title, with a link that carries the open page's parameters. Each crumb has `href`, `title` and `current` |

A menu that depends on who is signed in is a filter over `nav`. With [page guards](auth.md#page-guards) the rule is already written:

```ts no-check
const links = $derived(
    nav.filter((item) => {
        const guard = matchGuard(pageGuards, item.to());
        if (!guard) return true;
        return currentUser.signedIn && (!guard.permission || can(guard.permission));
    })
);
```

## Link previews

When someone pastes a link to your site into a chat, the preview comes from tags in the page's HTML. Add what the preview should say to the same `_nav`:

```ts no-check
export const _nav = {
    title: 'home-title',
    description: 'home-lead',
    image: 'https://example.com/share/home.png'
};
```

| Field | What it does |
| --- | --- |
| `description` | One or two sentences. Like `title`, the key of a message when `i18n` is on |
| `image` | The preview image. Give its full address: most services do not follow a path. A path that starts with `/` is accepted and written as it is |

Every prerendered page that has a `description` or an `image` then gets these tags in its `<head>`, at build time:

```html
<meta property="og:type" content="website">
<meta property="og:title" content="A team board in one JAR">
<meta name="description" content="This example uses every ktor-svelte feature.">
<meta property="og:description" content="This example uses every ktor-svelte feature.">
<meta property="og:image" content="https://example.com/share/home.png">
<meta name="twitter:card" content="summary_large_image">
```

- They are written by the generated server hooks, so there is nothing to add to a layout.
- With `LocaleStrategy.UrlPrefix` each language's pages get the tags in that language. With the cookie strategy a page is prerendered once, so its tags are in the default language.

::: info Prerendered pages only
This is for pages that are prerendered. A page with a parameter, such as `/notes/[id]`, is not: the server never renders pages, so such a page sets its own title when it runs, and a link to it previews without these tags.
:::

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

- Without such a route the load returns the page's parameters, and you fill in the rest.
- The `+page.svelte` shows a title and the loaded data, so the page works before you have designed it.
- With `routes()` on, `routes.ts` is updated in the same run.

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

| Option | What it does |
|---|---|
| `--page=<path>` | The page folder under `src/routes`. With `--crud`, the folder for the pages |
| `--route` | Also writes a Kotlin route at the page's API path |
| `--crud=<Class>` | Writes list, detail and form pages for a class. See [Pages for a class](#pages-for-a-class) |

The task only creates. It refuses when one of its files is already there, it never edits a file of yours, and what it wrote has no generated header: the files are yours.

## Pages for a class

Once the API can list, read, create, change and delete something, the first version of its pages is the same every time: a table, a form, a detail page. `svelteAdd --crud` writes that first version from the generated client:

```bash
./gradlew svelteAdd --crud=Note
```

```text
ktor-svelte added pages for Note, wired to api.notes:
  frontend/src/routes/notes/+page.ts
  frontend/src/routes/notes/+page.svelte
  frontend/src/routes/notes/new/+page.svelte
  frontend/src/routes/notes/[id]/+page.ts
  frontend/src/routes/notes/[id]/+page.svelte
Their texts are in de.json, en.json, in English. Translate them.
The form leaves out tags, icon: add inputs for them, they are not plain text, numbers or switches.
Add paramRoutes("/notes/[id]") to install(Svelte), so the app serves the detail page for every id.
The files are yours from here on.
```

The task looks for the route that lists the class, such as the `list` of a [resource](typescript.md#resource-routes), and for the other four routes next to it. What it finds decides what it writes:

| Route in the client | Page |
| --- | --- |
| `list` | A table of the class's plain fields, loaded in `+page.ts` |
| `create` | `new/+page.svelte` with a form, and a link to it from the list |
| `get` | `[id]/+page.ts` and a detail page, and a link to it from each row |
| `update` | The form again on the detail page, filled with the item |
| `delete` | A delete button in each row and on the detail page |

The pages use what the project has:

- The form is a [`formState`](./validation.md#form-state) of the input class, with its `validate` and, per field, its `bounds`, so the browser shows the same rules as the server.
- With `routes()` on, every link and `goto` is a typed route.
- With `i18n` on, every text is a message. The keys are added to each locale file in English, and keys that are already there are left alone.

Text, numbers and booleans get an input. Other fields, such as lists and enums, are left out of the form and named in the output, and the draft keeps their default.

`--page=(app)/memos` puts the pages in another folder than the one named after the API path.

As with a single page, the task only creates: it refuses when a file is already there, and what it wrote has no generated header. These are your pages from the first minute, a starting point to redesign and not a layer to configure.

## Full example

An app shell with a menu built from the pages themselves, the title in the browser tab, breadcrumbs, and a Kotlin route that sends old links to the right page.

::: code-group

```ts no-check [notes/+page.ts]
export const _nav = {
    title: 'Notes',
    icon: 'NotebookPen',
    order: 1,
    description: 'All your notes in one place.',
    image: 'https://example.com/share/notes.png'
};
```

```ts no-check [notes/[id]/+page.ts]
import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const _nav = { title: 'Note', menu: false };

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => {
    return { note: await apiWith(event).notes.get(Number(event.params.id)) };
};
```

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { page } from '$app/state';
    import Icon from '#icon';
    import { breadcrumbs, nav, pageTitle, routes } from '#routes';

    let { children } = $props();
</script>

<svelte:head>
    <title>{pageTitle(page) ?? 'Notes app'}</title>
</svelte:head>

<header>
    <a href={routes.home()}>Notes app</a>
    <nav>
        {#each nav as item (item.name)}
            <a href={item.to()} aria-current={item.to.ariaCurrent(page, { below: true })}>
                {#if item.icon}<Icon name={item.icon} size={16} />{/if}
                {item.title()}
            </a>
        {/each}
    </nav>
</header>

<ol aria-label="Breadcrumbs">
    {#each breadcrumbs(page) as crumb (crumb.href)}
        <li><a href={crumb.href} aria-current={crumb.current ? 'page' : undefined}>{crumb.title}</a></li>
    {/each}
</ol>

<main>{@render children()}</main>
```

```kotlin no-check [Redirects.kt]
import io.github.nijasc.ktorsvelte.FrontendRoutes

fun Route.oldLinks() {
    get("/memo/{id}") {
        val id = call.pathParameter<Int>("id")
        call.respondRedirect(FrontendRoutes.notesId(id.toString()), permanent = true)
    }
    get("/memos") {
        call.respondRedirect(FrontendRoutes.notes, permanent = true)
    }
}
```

:::

Move `notes` to `memos` with `svelteRename`, and the menu, the breadcrumbs, the redirects and every `routes.notesId` call follow in one diff.

## Use cases

- Any app with more than a handful of pages: typed links, and [`svelteVerifyLinks`](#finding-links-that-lead-nowhere) in CI.
- Turning typed routes on in an existing app: [`svelteVerifyRoutes --fix`](#finding-links-that-are-still-strings).
- A menu, the tab title and breadcrumbs from one place: [`_nav`](#menu-titles-and-breadcrumbs).
- Pages shared on social media and in chats: [link previews](#link-previews).
- Redirects after a form post or from old addresses: [`FrontendRoutes`](#in-kotlin).
- Starting a new feature: [`svelteAdd`](#a-new-page), or [`svelteAdd --crud`](#pages-for-a-class) for a whole resource.

## Good to know

- A page with a parameter needs `paramRoutes("/notes/[id]")` in `install(Svelte)`, so the app serves it for every value. `svelteAdd` reminds you.
- `routes.ts` is generated: commit it, and do not edit it.
- `svelteVerifyRoutes` and `svelteVerifyLinks` are not part of `check`. Add them to `check` or to CI yourself.
- See also [Routes](./frontend-libraries.md#routes) among the frontend libraries.
