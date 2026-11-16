# Frontend libraries

Tailwind, DaisyUI, Lucide, i18n, image optimization, error toasts and typed routes, configured in Gradle with typed helpers on both sides.

Turn on what you need in `build.gradle.kts`. Packages get installed and configured for you, and everything works together, including across Kotlin and TypeScript.

```kotlin
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

svelte {
    libraries {
        tailwind {
            typography()
            forms()
        }
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark, DaisyTheme.Cupcake)
            customTheme("brand") {
                primary = "#7f52ff"
                base100 = "#fdfcff"
            }
            defaultTheme(DaisyTheme.ShadcnLight)
            prefersDark(DaisyTheme.ShadcnDark)
        }
        lucide()
        images()
        toasts()
        routes()
        components()
        i18n {
            locales("en", "de")
            defaultLocale = "en"
            strategy = LocaleStrategy.Cookie
        }
    }
}
```

Then apply it:

```bash
./gradlew svelteSync
```

`svelteSync` adds the packages, updates your lockfile and writes the generated files. Commit the result. The generated folder `src/lib/ktor-svelte` carries its own `.gitattributes`, which marks the files as generated and keeps their line endings the same on every machine. `svelteDev` and `svelteDevAll` sync automatically. A production build never changes anything: it fails and asks you to run `svelteSync` if something is out of date.

**ktor-svelte owns `vite.config.ts`** once any library is on. Put your own Vite settings in `vite.user.ts`, and they are merged in:

```ts
export default {
    server: { port: 3000 }
};
```

It also generates `src/hooks.server.ts`, and `src/hooks.ts` for URL prefixes. If you already have your own versions of these files, sync stops rather than overwriting them. It tells you to move your settings and delete the file. To combine your own `handle` with ours, use `sequence` from `@sveltejs/kit/hooks` with `ktorSvelteHandle` from `#lib/ktor-svelte/server-hooks.js`, after removing the generated hook file and any use of a library that needs it.

If you already have `src/routes/+layout.svelte`, add this line once. Without a layout, one is created for you.

```ts
import '#lib/ktor-svelte/app.css';
```

Generated Kotlin lands in the `io.github.nijasc.ktorsvelte` package. Change it with `generatedPackage = "com.example.ui"`.

## Tailwind

`tailwind()` installs Tailwind 4 and wires Vite and the CSS. `typography()` and `forms()` add the official plugins. Everything else is normal Tailwind CSS.

## DaisyUI

Use the theme selector in the top bar of this site to see every theme ktor-svelte ships, the shadcn themes included, applied to these pages. `daisyUi()` turns on Tailwind as well. With no themes listed, you get `Light` and `Dark`. Themes are typed on both sides, and the saved choice is applied before the first paint, so there is no flash of the wrong theme.

```svelte
<script lang="ts">
    import { setTheme, themes } from '#theme';
</script>

{#each themes as theme}
    <button class="btn" onclick={() => setTheme(theme)}>{theme}</button>
{/each}
```

```kotlin
import io.github.nijasc.ktorsvelte.AppTheme
import io.github.nijasc.ktorsvelte.theme

get("/api/report") {
    val isDark = call.theme == AppTheme.Dark
}
```

### shadcn themes

`DaisyTheme.ShadcnLight` and `DaisyTheme.ShadcnDark` bring the look of [shadcn/ui](https://ui.shadcn.com) to every DaisyUI component: its neutral palette, `0.625rem` corners, thin borders and flat surfaces without shadows or noise. Use them like any other theme. Projects created by the setup script start with them:

```kotlin
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

svelte {
    libraries {
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark)
            defaultTheme(DaisyTheme.ShadcnLight)
            prefersDark(DaisyTheme.ShadcnDark)
        }
    }
}
```

On the server they are `AppTheme.ShadcnLight` and `AppTheme.ShadcnDark`, and in the frontend `'shadcn-light'` and `'shadcn-dark'`. When you only pick these two, the dark one is used for visitors who prefer dark mode. Themes appear in `themes` in the order you list them.

`customTheme` also accepts `secondary`, `accent`, `neutral`, `base200`, `base300`, `baseContent`, `info`, `success`, `warning` and `error`, plus `variable("radius-box", "1rem")` for anything else Daisy supports. Pass `colorScheme = "dark"` for dark themes.

You do not have to guess those colors in the build file. With DaisyUI on, the [dev panel](../guide/dev-workflow.md) has a **Theme colors** section with a color picker for each of the twelve. Changing one recolors the open page at once, so you tune the theme on your real screens. **Copy for Gradle** puts the result on the clipboard as a finished block, named as you typed it:

```kotlin no-check
customTheme("sunset") {
    primary = "#ff0044"
    secondary = "#f5f5f5"
    base100 = "#fff8e7"
}
```

The real block lists all twelve colors, and says `colorScheme = "dark"` when you started from a dark theme. Paste it into `daisyUi { }`, add the name to your themes, and `svelteSync` makes it a theme like any other. The changes on the page are a preview only: **Reset**, or a reload, brings the theme back.

The saved theme is applied by a small inline script. The automatic [Content-Security-Policy](../security.md#security-headers) allows it by its hash. If you set your own `contentSecurityPolicy`, allow it with SvelteKit's `csp` option in `hash` mode.

## Lucide

`lucide()` generates a `LucideIcon` enum from the installed version, so a misspelled icon is a compile error. Use it in your DTOs and it reaches the frontend as the same type:

```kotlin
import io.github.nijasc.ktorsvelte.LucideIcon

@Serializable
data class Note(val title: String, val icon: LucideIcon)
```

```svelte
<script lang="ts">
    import Icon from '#icon';
</script>

<Icon name="ArrowRight" size={20} />
<Icon name={note.icon} class="text-primary" />
```

Each icon loads on demand, so you only download the ones a page uses. An icon's enum name is its Lucide name in PascalCase, such as `arrow-right` to `ArrowRight`. Names starting with a digit get an `Icon` prefix. A misspelled icon name from a client gets a 400 from Ktor.

Only the icons your app uses are built into the frontend. `svelteSync` finds them in your Kotlin code (`LucideIcon.Flame`) and in your frontend (`name="ArrowRight"`, `Icon.Tags`, or a string such as `'Search'`), and writes just those into `src/lib/ktor-svelte/icons.ts`. Lucide has almost 2,000 icons, and each would otherwise become its own file in your JAR. In the notes example, this takes the frontend build from 6,180 files and 11 MB down to 120 files and 1.8 MB. The `LucideIcon` enum and the TypeScript type still list every icon, so anything stored or sent stays valid.

In development, an icon that isn't in the list yet still shows, with a console hint to run `svelteSync`. A production build checks the list and fails with "Run svelteSync" when an icon is missing, so nothing silently disappears. `svelteDevAll` syncs on every Kotlin change.

If icon names come from somewhere the scan can't see, such as a database your users fill or an icon picker, keep all icons:

```kotlin
svelte {
    libraries {
        lucide {
            allIcons()
        }
    }
}
```

## Images

`images()` adds SvelteKit's [`@sveltejs/enhanced-img`](https://svelte.dev/docs/kit/images#sveltejs-enhanced-img). Keep pictures next to your code, for example in `frontend/src/lib/assets`, and use `enhanced:img` instead of `img`:

```svelte
<enhanced:img src="#lib/assets/hero.png" alt="Our team" sizes="(min-width: 768px) 65ch, 100vw" />
```

At build time, every image becomes AVIF and WebP in several widths, plus a fallback in the original format, inside a `<picture>` with `srcset`, `width` and `height`. Browsers download only the size and format they need, and the layout doesn't jump while the image loads. In the notes example, a 339 KB PNG becomes an 8 KB AVIF for a laptop screen. The files land in `_app/immutable/`, so browsers cache them for a year like any other hashed asset.

Files in `frontend/static/` are copied as they are, because nothing in the build knows where they are used. Move images there to `src/lib/assets` to have them optimized. Processing uses `sharp`, which comes with prebuilt binaries for Windows, macOS and Linux. The first build with many large images takes longer, and later builds reuse Vite's cache.

## Toasts

`toasts()` shows failed API calls as toasts, without any error handling in your components. See [Show errors automatically](./calling-the-api.md#show-errors-automatically).

`toasts { reloadPrompt() }` also offers a reload when the server runs a newer build than the page. See [Reload after a deploy](./calling-the-api.md#reload-after-a-deploy).

## Routes

`routes()` turns every page into a typed constant in TypeScript and Kotlin, for links and redirects that always point to a real page. See [Typed routes](./routes.md).

## i18n

Keep one JSON file per language in `frontend/messages`. Change the folder with `messagesDir`. `svelteInit` creates an empty file for every locale you configured, and never touches one that is already there. Files are flat, and `{name}` is a parameter:

```json
{
  "server-greeting": "Hello {name}, greetings from Ktor!",
  "app-title": "Notes"
}
```

Both sides get typed functions from the same files. A missing key or a mismatched parameter in any language fails the build, so translations can't drift.

While `svelteDevAll` or `svelteDev` runs, saving a message file updates the frontend functions at once, and Vite reloads them, with no Gradle run. Under `svelteDevAll` the Kotlin `Messages` follow and the app restarts. With `svelteDev` alone, they update the next time Kotlin compiles. A file with a missing key or a mismatched parameter is reported in the console, and the last good version stays until you fix it.

```svelte
<script lang="ts">
    import { getLocale, localizeHref, locales, m, setLocale } from '#i18n';
</script>

<h1>{m.appTitle()}</h1>
<p>{m.serverGreeting({ name: 'Ada' })}</p>
<a href={localizeHref('/about')}>About</a>
<button onclick={() => setLocale('de')}>Deutsch</button>
```

```kotlin
import io.github.nijasc.ktorsvelte.Messages
import io.github.nijasc.ktorsvelte.messages

get("/api/hello") {
    call.respondText(call.messages.serverGreeting("Ada"))
}

val german = Messages.forLocale("de").appTitle()
```

Choose how the language is picked with `strategy`:

| Strategy | URLs | Best for | Trade-off |
|---|---|---|---|
| `Cookie` (default) | `/about` | Apps behind a login | Prerendered pages hold the default language and switch on load, so others can flash briefly, and search engines mostly see one language |
| `UrlPrefix` | `/de/about` | Public sites and SEO | Every language gets its own prerendered pages. Plain paths redirect to the visitor's language. Links must use `localizeHref`, or [typed routes](./routes.md), or pages won't be prerendered per language |

On the server, `call.svelteLocale` and `call.messages` follow the same rules: the URL prefix if that strategy is on, then the cookie, then `Accept-Language`, then your default. `localizeHref` is safe with either strategy, and `call.localizeHref` does the same for redirects from Ktor.

Parameters are plain text replacements. Plurals and date formatting aren't built in yet.

### Messages nobody translated yet

A key has to exist in every language file, or the build fails. The quick way to get past that is to paste the English text into the other files and translate later, and "later" is easy to forget. In development the [dev panel](../guide/dev-workflow.md) shows a **Not translated** section whenever you look at the app in another language than the default one. It lists every message on the page whose text is the same as in the default language, with its key.

Tick **Outline them on the page** and those texts get a dashed outline where they appear, so you see what a visitor in that language would read in the wrong one. The choice is remembered in your browser.

Some words are the same in two languages on purpose, such as "Name" or "Status" in English and German. They are listed too, which is why the outline is off until you ask for it.

### Messages nothing uses

A missing message fails the build, but one that is no longer used stays in every locale file and keeps being translated. `svelteVerifyMessages` lists them:

```bash
./gradlew svelteVerifyMessages
```

```text
old-banner  ->  nothing calls oldBanner() and no source names 'old-banner'
```

A message counts as used when its generated function is called anywhere in the frontend or in Kotlin, or when its key appears as a string, because it may then be looked up by name. The task only lists what it finds. Add `--strict` to fail the build instead.

## Components

`components()` generates Svelte components into `src/lib/ktor-svelte/components`, imported as `#components/...`. They are the pieces that exist because of something the plugin already generates: a component here is a few lines of markup over a generated helper, written once. They use DaisyUI's classes when `daisyUi` is on, and plain class names with a minimal style otherwise.

The files belong to the plugin and are rewritten by `svelteSync`. For a different look, write your own component on the same helper. The generated ones are short enough to copy as a start.

The components import from `#api`, so they need `generateTs = true` on the server.

### Field

One form field: its label, the input, an optional hint, and the validation errors.

```svelte no-check
<script lang="ts">
    import { NoteInput } from '#api';
    import Field from '#components/Field.svelte';
    import { formState } from '#lib/api/form-state.svelte.ts';

    const form = formState<NoteInput>(NoteInput.empty(), { validate: NoteInput.validate });
</script>

<Field label="Title" bind:value={form.value.title} bounds={NoteInput.bounds.title} errors={form.errors.title} hint="Shown in the list." />
<Field label="Text" multiline rows={4} bind:value={form.value.text} errors={form.errors.text} />
```

| Prop | Meaning |
|---|---|
| `label` | The text of the `<label>`, tied to the input. |
| `bind:value` | The value, as with an `<input>`. |
| `bounds` | The limits from the DTO, such as `NoteInput.bounds.title`. They become `required`, `maxlength` and the like. |
| `errors` | The messages for this field, from `validate()` or from a 422. |
| `hint` | A line under the input, announced with it by screen readers. |
| `multiline` | Renders a `<textarea>`. |
| `class` | Added to the wrapper. |

Everything else, such as `type`, `autocomplete`, `placeholder` or `id`, goes to the input unchanged. Underneath it is the [`field` action](validation.md), so errors appear and disappear the same way as with `use:field`.

For a control that is not a plain input, pass it as the `control` snippet. It gets the `id` the label points at and the `options` for `use:field`, and the label, hint and errors stay as they are:

```svelte no-check
<Field label="Color" errors={form.errors.color}>
    {#snippet control({ id, options })}
        <input {id} type="color" bind:value={form.value.color} use:field={options} />
    {/snippet}
</Field>
```

### DateInput and DateTimeInput

A date from the API is an `IsoDate`, text such as `2026-12-24`, and a field that may be empty is `null`. A plain `<input type="date">` gives `''` for empty and plain text otherwise, so pages convert by hand. `DateInput` binds to the value as it is:

```svelte no-check
<script lang="ts">
    import DateInput from '#components/DateInput.svelte';
    import DateTimeInput from '#components/DateTimeInput.svelte';
</script>

<DateInput label="Due on" bind:value={form.value.dueOn} errors={form.errors.dueOn} />
<DateTimeInput label="Starts at" bind:value={form.value.startsAt} />
<DateTimeInput label="Opens at" local bind:value={form.value.opensAt} />
```

Both take the props of `Field`, and an empty input is `null`.

`DateTimeInput` shows a moment in the visitor's own time zone and stores it as the UTC text the server expects for a Kotlin `Instant`. With `local`, it is for a Kotlin `LocalDateTime` instead: the wall-clock text goes to the server as typed, with no time zone.

### EnumSelect

A `<select>` over a generated enum object:

```svelte no-check
<script lang="ts">
    import { Status } from '#api';
    import EnumSelect from '#components/EnumSelect.svelte';
</script>

<EnumSelect label="Status" options={Status} bind:value={form.value.status} labels={{ TODO: 'To do', DONE: 'Done' }} placeholder="Any" />
```

It lists every value of the enum, so a value added in Kotlin appears after the next `svelteGenerateTs`. `labels` gives the text to show, as text or as a function for translations, and a value without one shows its name. With `placeholder` there is a first option that stands for `null`. The bound value has the enum's type, so no cast is needed.

### DataTable

A table over any route that returns [`Page<T>`](../recipes/pagination.md). It loads the pages, and shows a line while it loads, when there is nothing, and when a load failed, with a button to try again.

```svelte no-check
<script lang="ts">
    import { api } from '#api';
    import DataTable from '#components/DataTable.svelte';

    let search = $state('');
</script>

<input type="search" bind:value={search} aria-label="Search" />
<DataTable
    load={api.notes.list}
    query={{ search, limit: '20' }}
    key={(note) => note.id}
    columns={[
        { key: 'title', label: 'Title' },
        { key: 'createdAt', label: 'Created', text: (note) => new Date(note.createdAt).toLocaleDateString() },
        { id: 'size', label: 'Size', text: (note) => `${note.text.length} characters` }
    ]}
/>
```

`load` is the generated function of the route, and the rows have the type it returns. So a column's `key` must be a property of the item, a typo fails `svelteCheck`, and `text` gets the typed item. A column that is not one property has an `id` and a `text` instead.

| Prop | Meaning |
|---|---|
| `load` | The generated function of a route that returns `Page<T>`. |
| `columns` | The headers, and what each cell shows. |
| `query` | The query parameters besides the cursor. When they change, the table loads again from the start. |
| `key` | A stable id per row, such as `(note) => note.id`. |
| `paging` | `'more'` (the default) adds rows with a Load more button. `'pages'` shows one page with Previous and Next. |
| `first` | A first page that a `load` function already fetched, so the table does not fetch it again. |
| `caption` | A caption for the table. |
| `empty`, `loading`, `more`, `previous`, `next`, `retry` | The texts, in English unless given. |
| `class` | Added to the wrapper. |

For cells with markup, such as a link or a button, pass a `row` snippet. It renders the cells of one row, and `columns` then only gives the headers:

```svelte no-check
<DataTable load={api.notes.list} columns={[{ key: 'title', label: 'Title' }, { id: 'open', label: '' }]}>
    {#snippet row(note)}
        <td>{note.title}</td>
        <td><a href={routes.notesId({ id: note.id })}>Open</a></td>
    {/snippet}
</DataTable>
```

After a change elsewhere on the page, `bind:this` the table and call its `reload()`.

The route's pages are cursors, so there are no page numbers: the table can go forward and back, not jump.

### ErrorPage

`components()` also writes `src/routes/+error.svelte`, the page SvelteKit shows when a page cannot be shown. It is three lines around `<ErrorPage />`, which shows:

- the status, such as 404
- the message: the one the server sent in the error body when a call failed, the one you passed to `error(...)`, and otherwise a sentence for 404, 403, 401 or anything else
- the request ID for a status of 500 and above, so a visitor can quote it and you can find the request in the log
- a link back to the start page, `home="/"` unless you pass another

A `load` function no longer has to translate a failed call into a page error. Let it throw:

```ts no-check
export const load: PageLoad = async (event) => {
    return { note: await apiWith(event).notes.get(event.params.id) };
};
```

When the server answers 404 with `{ "message": "That note does not exist." }`, the error page shows 404 and that message. This works through `handleError` in `src/hooks.client.ts`, which `svelteSync` writes. It puts the status, message, request ID and [error code](calling-the-api.md#error-codes) of a failed call into `page.error`, typed through `App.Error`, so your own components can read `page.error.code` too.

The sentences are English until your messages have their keys. With `i18n` on, add the ones you want translated and run `svelteSync`:

| Key | Default |
|---|---|
| `error-not-found` | This page does not exist. |
| `error-forbidden` | You are not allowed to see this page. |
| `error-sign-in` | Sign in to see this page. |
| `error-failed` | Something went wrong. Please try again. |
| `error-request-id` | Request ID: |
| `error-home` | Back to the start page |

Your own files win. If `src/routes/+error.svelte` exists and is not the generated one, it is left alone, and you can use `<ErrorPage />` inside it or not. To change the generated one, remove its first line, and it is yours. The same goes for `src/hooks.client.ts` when `toasts()` is off: keep your own and add `export { handleError } from '#lib/ktor-svelte/errors.ts';` to it.

### ThemeToggle and LocaleSwitch

The theme and i18n helpers already know the themes and languages you configured. These two components put them on the page, so a new app has both switches from the start:

```svelte no-check
<script lang="ts">
    import LocaleSwitch from '#components/LocaleSwitch.svelte';
    import ThemeToggle from '#components/ThemeToggle.svelte';
</script>

<ThemeToggle />
<LocaleSwitch />
```

`ThemeToggle` is generated when `daisyUi` is on. With two themes it is a button that flips between them, with more it is a `<select>`. It applies the theme at once and remembers it, as `setTheme` does.

`LocaleSwitch` is generated when `i18n` is on. It lists each language under its own name, such as English and Deutsch, and switches with `setLocale`.

Both take `label` for the accessible name (`Theme` and `Language` unless given, so pass a translated one), `labels` to name single entries yourself, such as `labels={{ dracula: 'Dark' }}`, and `class` and `id`.

## Modals

A `<dialog>` normally needs a `bind:this`, a `showModal()` and a way to learn how it was closed. `modal()` from `#lib/ktor-svelte/modal.ts` is those three:

```svelte
<script lang="ts">
    import { modal } from '#lib/ktor-svelte/modal.ts';

    const rename = modal<string>();
    let name = $state('');

    async function askForName() {
        const chosen = await rename.open();
        if (chosen) console.log('renamed to', chosen);
    }
</script>

<button onclick={askForName}>Rename</button>

<dialog class="modal" use:rename.attach>
    <div class="modal-box">
        <input bind:value={name} aria-label="New name" />
        <button onclick={() => rename.close(name)}>Save</button>
        <button onclick={() => rename.close()}>Cancel</button>
    </div>
</dialog>
```

`open()` shows the dialog and returns a promise. It resolves with what `close(result)` was given, or with `undefined` when the dialog was closed any other way: `close()` without a value, Escape, or a click beside the box. Pass `modal({ closeOnBackdrop: false })` to keep such clicks from closing it. `isOpen` tells whether it is showing.

The markup is yours, so it works with DaisyUI's `modal` classes, as above, and with a plain `<dialog>`. To only ask a yes or no question before a call, use [`confirmed`](./calling-the-api.md#ask-before-a-call), which brings its own dialog.

## Guide for coding assistants

`svelteSync` also writes `src/lib/ktor-svelte/AGENTS.md`, a short guide for coding assistants such as Claude Code, Cursor or Copilot. It tells them what they otherwise get wrong in a project like this:

- which files are generated and must not be edited, and which Gradle setting or Kotlin route to change instead
- that the backend is called through the typed client from `#api`, with `apiWith(event)` in `load` functions, never through a hand-written `fetch`
- the libraries you turned on and how to use them: icons, messages, themes, toasts
- your pages by their typed route name, when `routes()` is on
- the Gradle commands to run

It describes your project, not ktor-svelte in general: a project without i18n gets no word about messages. Like every generated file it is kept current by `svelteSync` and checked by `svelteVerifySync`.

Assistants that read nested `AGENTS.md` files find it when they work in the frontend. To make sure, link it from the file your assistant reads at the project root, such as `AGENTS.md` or `CLAUDE.md`:

```md
Read `frontend/src/lib/ktor-svelte/AGENTS.md` before changing anything.
```

Projects created by the setup script have that `AGENTS.md` already. ktor-svelte never edits a root `AGENTS.md` or `CLAUDE.md` of yours.

## Lint rules

Next to the generated files, `svelteSync` writes `src/lib/ktor-svelte/eslint.js`, a small ESLint plugin with rules for mistakes that are easy to make in a ktor-svelte app. They show up in the editor while you type:

| Rule | What it flags |
|---|---|
| `ktor-svelte/no-string-page-links` | An `href`, `goto` or `redirect` that leads to one of your pages as a string, when [typed routes](./routes.md) are on |
| `ktor-svelte/fetch-in-load` | An API call inside a `load` function that goes through neither `apiWith(event)` nor `{ fetch }`, which SvelteKit reports at runtime as `window_fetch_in_load` |
| `ktor-svelte/no-error-body-message` | Reading `error.body.message` from a caught error without narrowing it with `isApiError` first, where [`errorMessage`](./calling-the-api.md) is the safe choice |

A project made by the setup script has them wired in. In an existing project, add two lines to `eslint.config.js`:

```js
import ktorSvelte from './src/lib/ktor-svelte/eslint.js';

export default [
    ...ktorSvelte.configs.recommended
];
```

All three are warnings. To turn one off or make it an error, set it like any other rule, such as `{ rules: { 'ktor-svelte/fetch-in-load': 'error' } }`. The page list inside the file follows your routes, so the first rule stays current the same way `routes.ts` does. For a one-off check across the whole project, and to rewrite string links automatically, use [`svelteVerifyRoutes`](./routes.md#finding-links-that-are-still-strings).
