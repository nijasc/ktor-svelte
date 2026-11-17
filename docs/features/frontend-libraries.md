# Frontend libraries

Tailwind, DaisyUI, fonts, charts, Lucide icons, optimized images, an installable app, toasts, typed routes, ready-made components and i18n, all turned on in Gradle, with typed helpers on both sides.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

You list what you want in `build.gradle.kts`. ktor-svelte installs the packages, configures them, and generates the glue, so everything works together, including across Kotlin and TypeScript. This page is the map: what each library does, how they are applied, and what ktor-svelte owns in your frontend. Each library has its own page with every option and longer examples.

## Quick start

```kotlin
svelte {
    libraries {
        daisyUi()
        lucide()
        toasts()
    }
}
```

```bash
./gradlew svelteSync
```

That is a styled app with themes, typed icons and error toasts. Add the rest one line at a time.

## All libraries

| Library | In `libraries { }` | What you get | Page |
|---|---|---|---|
| Tailwind | `tailwind()` | Tailwind 4 wired into Vite and the CSS, with the typography and forms plugins on request | [Styling](./styling.md#tailwind) |
| DaisyUI | `daisyUi { }` | Components and themes, typed in TypeScript and Kotlin, with no flash of the wrong theme | [Styling](./styling.md#daisyui) |
| Fonts | `fonts("Inter")` | A font served from your own app, preloaded, as the default font | [Styling](./styling.md#fonts) |
| Charts | `charts()` | LayerChart in your theme colors, with typed series | [Charts](./charts.md) |
| Lucide | `lucide()` | A typed `LucideIcon` enum and an `<Icon>` component, with only the icons you use in the build | [Icons and images](./icons-and-images.md#lucide-icons) |
| Images | `images()` | `<enhanced:img>`: AVIF and WebP in several widths, at build time | [Icons and images](./icons-and-images.md#images) |
| Installable app | `installable { }` | A web manifest, icons in every size and a service worker with an offline page | [Installable app](./installable-app.md) |
| Toasts | `toasts()` | Failed API calls shown as toasts, a `toast()` helper and an optional reload prompt | [Calling the API](./calling-the-api.md#show-errors-automatically), [Components](./components.md#toasts) |
| Routes | `routes()` | Every page as a typed constant in TypeScript and Kotlin | [Typed routes](./routes.md) |
| Components | `components()` | Form fields, date inputs, a data table, file drop, error page, theme and language switches | [Components](./components.md) |
| i18n | `i18n { }` | Typed messages, plurals, and number, money and date formats that match on both sides | [i18n](./i18n.md) |

Every project with generated files also gets a [modal helper](./components.md#modals), a [confirm helper](./components.md#confirm-before-a-call), a [guide for coding assistants](./components.md#guide-for-coding-assistants) and [lint rules](./components.md#lint-rules).

## The libraries block

Everything at once, as a full example:

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
        fonts("Inter")
        charts()
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

Some libraries build on others:

- `daisyUi()` turns on `tailwind()` as well.
- `fonts(...)` needs `tailwind()` or `daisyUi()`, which bring the stylesheet.
- `charts()` needs `daisyUi()`, whose theme colors the charts take.
- `components()` imports from `#api`, so it needs `generateTs = true` on the server.
- `ThemeToggle` is generated with `daisyUi`, and `LocaleSwitch` and `TimeAgo` with `i18n`.

A setting the plugin does not know, such as a typo inside `daisyUi { }`, fails the build with the name of the block.

## Apply changes with svelteSync

```bash
./gradlew svelteSync
```

`svelteSync` adds the packages, updates your lockfile and writes the generated files. Commit the result.

- The generated folder `src/lib/ktor-svelte` carries its own `.gitattributes`, which marks the files as generated and keeps their line endings the same on every machine.
- `svelteDev` and `svelteDevAll` sync automatically.
- A production build never changes anything: it fails and asks you to run `svelteSync` if something is out of date.

## What ktor-svelte owns

Once any library is on, some files belong to the plugin. You change them through Gradle, not by hand.

| File | Who writes it | How you add your own |
|---|---|---|
| `vite.config.ts` | ktor-svelte | Put your settings in `vite.user.ts`. They are merged in |
| `src/hooks.server.ts` | ktor-svelte | Combine your `handle` with `ktorSvelteHandle`, see below |
| `src/hooks.ts` | ktor-svelte, for URL prefixes | |
| `src/lib/ktor-svelte/` | ktor-svelte, rewritten by every sync | Write your own files next to it, such as a component on the same helper |
| `src/routes/+layout.svelte` | Created only when you have none | Add the stylesheet import to yours |
| Generated Kotlin | ktor-svelte, in `io.github.nijasc.ktorsvelte` | Change the package with `generatedPackage` |

Your own Vite settings go in `vite.user.ts`:

```ts
export default {
    server: { port: 3000 }
};
```

If you already have your own versions of the hook files, sync stops rather than overwriting them, and tells you to move your settings and delete the file. To combine your own `handle` with ours, use `sequence` from `@sveltejs/kit/hooks` with `ktorSvelteHandle` from `#lib/ktor-svelte/server-hooks.js`, after removing the generated hook file and any use of a library that needs it.

If you already have `src/routes/+layout.svelte`, add this line once. Without a layout, one is created for you.

```ts
import '#lib/ktor-svelte/app.css';
```

Generated Kotlin lands in the `io.github.nijasc.ktorsvelte` package. Change it in the libraries block:

```kotlin
svelte {
    libraries {
        generatedPackage = "com.example.ui"
    }
}
```

## Tailwind

`tailwind()` installs Tailwind 4 and wires Vite and the CSS. `typography()` and `forms()` add the official plugins. See [Styling: Tailwind](./styling.md#tailwind).

## DaisyUI

`daisyUi()` adds DaisyUI and turns on Tailwind as well. With no themes listed, you get `Light` and `Dark`. Themes are typed on both sides, and the saved choice is applied before the first paint, so there is no flash of the wrong theme. Use the theme selector in the top bar of this site to see every theme ktor-svelte ships, the shadcn themes included.

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

```svelte
<script lang="ts">
    import { setTheme, themes } from '#theme';
</script>

{#each themes as theme}
    <button class="btn" onclick={() => setTheme(theme)}>{theme}</button>
{/each}
```

The build stops when `daisyUi` has no theme, when `defaultTheme` or `prefersDark` names a theme that is not in the list, or when a custom theme name is not lowercase letters, digits and dashes. Custom themes, the dev panel color picker, the server side and the full list of themes are on [Styling: DaisyUI](./styling.md#daisyui).

### shadcn themes

`DaisyTheme.ShadcnLight` and `DaisyTheme.ShadcnDark` bring the look of shadcn/ui to every DaisyUI component. See [Styling: shadcn themes](./styling.md#shadcn-themes).

## Fonts

`fonts("Inter")` serves a font from your own app instead of a font CDN. See [Styling: Fonts](./styling.md#fonts).

## Charts

`charts()` sets up LayerChart in your theme colors. See [Charts](./charts.md).

## Lucide

`lucide()` generates a typed `LucideIcon` enum and builds only the icons you use. See [Icons and images: Lucide icons](./icons-and-images.md#lucide-icons).

## Images

`images()` adds `<enhanced:img>`, which turns pictures into AVIF and WebP in several widths at build time. See [Icons and images: Images](./icons-and-images.md#images).

## Installable app

`installable { }` makes the app installable on phones and desktops, with a manifest, icons and an offline page. See [Installable app](./installable-app.md).

## Toasts

`toasts()` shows failed API calls as toasts, without any error handling in your components. See [Show errors automatically](./calling-the-api.md#show-errors-automatically), and [Components: Toasts](./components.md#toasts) for your own toasts.

`toasts { reloadPrompt() }` also offers a reload when the server runs a newer build than the page. See [Reload after a deploy](./calling-the-api.md#reload-after-a-deploy).

## Routes

`routes()` turns every page into a typed constant in TypeScript and Kotlin, for links and redirects that always point to a real page. See [Typed routes](./routes.md).

## i18n

`i18n { }` gives both sides typed functions from one set of JSON message files, and a missing key or a mismatched parameter in any language fails the build.

```kotlin
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

svelte {
    libraries {
        i18n {
            locales("en", "de")
            defaultLocale = "en"
            strategy = LocaleStrategy.Cookie
        }
    }
}
```

The build stops when `i18n` has no locale, when `defaultLocale` is not one of the locales, or when a locale is not a tag such as `en` or `pt-BR`. Messages, strategies, plurals and formats are on the [i18n page](./i18n.md).

### Plurals

Moved to [i18n: Plurals](./i18n.md#plurals).

### Numbers, money and dates

Moved to [i18n: Numbers, money and dates](./i18n.md#numbers-money-and-dates).

### Messages nobody translated yet

Moved to [i18n: Messages nobody translated yet](./i18n.md#messages-nobody-translated-yet).

### Messages nothing uses

Moved to [i18n: Messages nothing uses](./i18n.md#messages-nothing-uses).

## Components

`components()` generates Svelte components over the helpers ktor-svelte already writes. See [Components](./components.md).

### Field

Moved to [Components: Field](./components.md#field).

### DateInput and DateTimeInput

Moved to [Components: DateInput and DateTimeInput](./components.md#dateinput-and-datetimeinput).

### EnumSelect

Moved to [Components: EnumSelect](./components.md#enumselect).

### DataTable

Moved to [Components: DataTable](./components.md#datatable).

### FileDrop

Moved to [Components: FileDrop](./components.md#filedrop).

### ErrorPage

Moved to [Components: ErrorPage](./components.md#errorpage).

### ThemeToggle and LocaleSwitch

Moved to [Components: ThemeToggle and LocaleSwitch](./components.md#themetoggle-and-localeswitch).

### NavigationProgress

Moved to [Components: NavigationProgress](./components.md#navigationprogress).

## Modals

`modal()` opens a `<dialog>` and returns a promise with its result. See [Components: Modals](./components.md#modals).

## Guide for coding assistants

`svelteSync` writes an `AGENTS.md` that tells coding assistants how your project works. See [Components: Guide for coding assistants](./components.md#guide-for-coding-assistants).

## Lint rules

`svelteSync` writes a small ESLint plugin for common ktor-svelte mistakes. See [Components: Lint rules](./components.md#lint-rules).
