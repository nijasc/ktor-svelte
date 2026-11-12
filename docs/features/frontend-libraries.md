# Frontend libraries

Tailwind, DaisyUI, Lucide, i18n, image optimization and error toasts, configured in Gradle with typed helpers on both sides.

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

`svelteSync` adds the packages, updates your lockfile and writes the generated files. Commit the result. `svelteDev` and `svelteDevAll` sync automatically. A production build never changes anything: it fails and asks you to run `svelteSync` if something is out of date.

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

`daisyUi()` turns on Tailwind as well. With no themes listed, you get `Light` and `Dark`. Themes are typed on both sides, and the saved choice is applied before the first paint, so there is no flash of the wrong theme.

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

## i18n

Keep one JSON file per language in `frontend/messages`. Change the folder with `messagesDir`. Files are flat, and `{name}` is a parameter:

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
| `UrlPrefix` | `/de/about` | Public sites and SEO | Every language gets its own prerendered pages. Plain paths redirect to the visitor's language. Links must use `localizeHref`, or pages won't be prerendered per language |

On the server, `call.svelteLocale` and `call.messages` follow the same rules: the URL prefix if that strategy is on, then the cookie, then `Accept-Language`, then your default. `localizeHref` is safe with either strategy.

Parameters are plain text replacements. Plurals and date formatting aren't built in yet.
