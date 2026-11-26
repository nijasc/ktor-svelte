# Styling

Tailwind, DaisyUI themes and self-hosted fonts, set up from Gradle. Themes are typed in TypeScript and Kotlin, and the visitor's choice is applied before the first paint.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

This page is part of [Frontend libraries](./frontend-libraries.md). Run `./gradlew svelteSync` after every change to the `libraries { }` block.

## Quick start

```kotlin
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

svelte {
    libraries {
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark)
        }
        fonts("Inter")
    }
}
```

```svelte
<button class="btn btn-primary">Save</button>
```

That is Tailwind, DaisyUI with the shadcn look in light and dark, and Inter as the font of the whole page.

## Tailwind

`tailwind()` installs Tailwind 4 and wires Vite and the CSS. Everything else is normal Tailwind CSS.

```kotlin
svelte {
    libraries {
        tailwind()
    }
}
```

| Setting | Default | What it does |
|---|---|---|
| `typography()` | off | Adds the official typography plugin, for the `prose` classes on long text |
| `forms()` | off | Adds the official forms plugin, which gives form controls a plain base style that is easy to change with utilities |

```kotlin
svelte {
    libraries {
        tailwind {
            typography()
            forms()
        }
    }
}
```

The stylesheet is generated as `src/lib/ktor-svelte/app.css`. If you already had a root layout, import it there once:

```ts
import '#lib/ktor-svelte/app.css';
```

`daisyUi()` turns on Tailwind as well, so you do not need both lines.

## DaisyUI

`daisyUi()` adds [DaisyUI](https://daisyui.com) on top of Tailwind. Themes are typed on both sides, and the saved choice is applied before the first paint, so there is no flash of the wrong theme. Use the theme selector in the top bar of this site to see every theme ktor-svelte ships, the shadcn themes included, applied to these pages.

```kotlin
svelte {
    libraries {
        daisyUi()
    }
}
```

With no themes and no custom theme, you get `Light` and `Dark`.

### Choosing themes

`themes(...)` takes the themes as `DaisyTheme` constants, so a typo is a compile error. Themes appear in `themes` in the frontend in the order you list them.

```kotlin
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

svelte {
    libraries {
        daisyUi {
            themes(DaisyTheme.Light, DaisyTheme.Dark, DaisyTheme.Nord, DaisyTheme.Dracula)
        }
    }
}
```

::: details Every DaisyTheme constant
`Light`, `Dark`, `Cupcake`, `Bumblebee`, `Emerald`, `Corporate`, `Synthwave`, `Retro`, `Cyberpunk`, `Valentine`, `Halloween`, `Garden`, `Forest`, `Aqua`, `Lofi`, `Pastel`, `Fantasy`, `Wireframe`, `Black`, `Luxury`, `Dracula`, `Cmyk`, `Autumn`, `Business`, `Acid`, `Lemonade`, `Night`, `Coffee`, `Winter`, `Dim`, `Nord`, `Sunset`, `Caramellatte`, `Abyss`, `Silk`, `ShadcnLight` and `ShadcnDark`.

In the frontend each theme is its DaisyUI name in lowercase, such as `'cupcake'`, and the shadcn ones are `'shadcn-light'` and `'shadcn-dark'`.
:::

### Default theme and dark mode

| Setting | Default | What it does |
|---|---|---|
| `themes(...)` | `Light` and `Dark`, when there is no custom theme either | The DaisyUI themes to ship |
| `defaultTheme(...)` | The first theme | The theme for a visitor who has not chosen one |
| `prefersDark(...)` | `Dark` or `ShadcnDark`, when one of them is in the list | The theme for a visitor whose system is set to dark mode |
| `customTheme(name) { }` | none | A theme of your own, see [Custom themes](#custom-themes) |

`defaultTheme` and `prefersDark` take a `DaisyTheme` or the name of a custom theme as text:

```kotlin
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

svelte {
    libraries {
        daisyUi {
            themes(DaisyTheme.Corporate, DaisyTheme.Business)
            customTheme("brand") {
                primary = "#7f52ff"
            }
            defaultTheme("brand")
            prefersDark(DaisyTheme.Business)
        }
    }
}
```

A visitor's own choice always wins over both.

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

On the server they are `AppTheme.ShadcnLight` and `AppTheme.ShadcnDark`, and in the frontend `'shadcn-light'` and `'shadcn-dark'`. When you only pick these two, the dark one is used for visitors who prefer dark mode.

### Custom themes

`customTheme` defines a theme of your own. Set the colors you want, and DaisyUI fills in the rest:

```kotlin
svelte {
    libraries {
        daisyUi {
            customTheme("brand") {
                primary = "#7f52ff"
                secondary = "#ff3e00"
                base100 = "#fdfcff"
                baseContent = "#1f1b3a"
            }
        }
    }
}
```

| Setting | DaisyUI variable |
|---|---|
| `primary`, `secondary`, `accent`, `neutral` | `--color-primary` and so on |
| `base100`, `base200`, `base300`, `baseContent` | `--color-base-100`, `--color-base-200`, `--color-base-300`, `--color-base-content` |
| `info`, `success`, `warning`, `error` | `--color-info` and so on |
| `variable("radius-box", "1rem")` | Any other variable DaisyUI supports, by its name without `--` |
| `colorScheme = "dark"` | Marks a dark theme. The default is `"light"` |

`colorScheme` is a parameter of `customTheme`:

```kotlin
svelte {
    libraries {
        daisyUi {
            customTheme("midnight", colorScheme = "dark") {
                primary = "#a78bfa"
                base100 = "#0f0d1a"
                variable("radius-box", "1rem")
            }
        }
    }
}
```

- The name must be lowercase letters, digits and dashes, starting with a letter.
- Custom themes join the list after the ones you pass to `themes(...)`.
- In Kotlin the theme becomes an `AppTheme` constant in PascalCase: `"brand"` is `AppTheme.Brand`, `"my-brand"` is `AppTheme.MyBrand`.

### Tune colors in the dev panel

You do not have to guess those colors in the build file. With DaisyUI on, the [dev panel](../guide/dev-workflow.md) has a **Theme colors** section with a color picker for each of the twelve. Changing one recolors the open page at once, so you tune the theme on your real screens. **Copy for Gradle** puts the result on the clipboard as a finished block, named as you typed it:

```kotlin no-check
customTheme("sunset") {
    primary = "#ff0044"
    secondary = "#f5f5f5"
    base100 = "#fff8e7"
}
```

The real block lists all twelve colors, and says `colorScheme = "dark"` when you started from a dark theme. Paste it into `daisyUi { }`, and `svelteSync` makes it a theme like any other. The changes on the page are a preview only: **Reset**, or a reload, brings the theme back.

### Switch themes in the frontend

`#theme` holds the helpers, generated from your list:

| Export | What it is |
|---|---|
| `themes` | Every theme name, in order, as a readonly tuple |
| `ThemeName` | The union of those names, such as `'shadcn-light' \| 'shadcn-dark'` |
| `themeMinLength`, `themeMaxLength` | The length of the shortest and the longest theme name, such as `11` and `12` for the two above |
| `defaultTheme` | The default theme |
| `getTheme()` | The visitor's saved theme, or the default. On the server it is always the default |
| `setTheme(theme)` | Applies the theme at once and saves it in a cookie for a year |

```svelte
<script lang="ts">
    import { onMount } from 'svelte';
    import { getTheme, setTheme, themes, type ThemeName } from '#theme';

    let current = $state<ThemeName>(themes[0]);

    onMount(() => {
        current = getTheme();
    });

    function pick(theme: ThemeName) {
        current = theme;
        setTheme(theme);
    }
</script>

<div class="join">
    {#each themes as theme (theme)}
        <button class="btn join-item" class:btn-active={theme === current} onclick={() => pick(theme)}>{theme}</button>
    {/each}
</div>
```

For a switch you do not have to write, `components()` generates [`ThemeToggle`](./components.md#themetoggle-and-localeswitch): a button with two themes, a select with more.

### The theme on the server

The theme cookie is readable in Ktor too, typed through the generated `AppTheme` enum:

```kotlin
import io.github.nijasc.ktorsvelte.AppTheme
import io.github.nijasc.ktorsvelte.theme

get("/api/report") {
    val isDark = call.theme == AppTheme.Dark
}
```

- `call.theme` is the visitor's theme, or `AppTheme.default` when there is none.
- Each constant has its `cssName`, such as `"shadcn-dark"`.
- `AppTheme.fromCssName(name)` turns a name back into a constant, or `null`.
- `AppTheme.MAX_LENGTH` is the length of the longest constant name, such as `11` for `ShadcnLight`. Use it to size a column that stores the theme, for example `enumerationByName("theme", AppTheme.MAX_LENGTH, AppTheme::class)` in Exposed. `AppTheme.MIN_LENGTH` is the length of the shortest one, such as `4` for `Dark`. Both are `const`, so they also work in annotations.

Use it for anything rendered on the server that should match the page, such as a PDF or a chart image.

### Content-Security-Policy

The saved theme is applied by a small inline script. The automatic [Content-Security-Policy](../security.md#security-headers) allows it by its hash. If you set your own `contentSecurityPolicy`, allow it with SvelteKit's `csp` option in `hash` mode.

## Fonts

A font from a font CDN is a request to another company on every first visit, a line in the privacy policy, and an exception in the Content-Security-Policy. `fonts` serves the font from your own app instead:

```kotlin
svelte {
    libraries {
        tailwind()
        fonts("Inter")
    }
}
```

`svelteSync` then does three things:

- It installs the font from [Fontsource](https://fontsource.org), an npm package per font, so the lockfile pins the files like any other dependency.
- It imports the font into the generated stylesheet and makes it the default: `font-sans` in Tailwind, and so the font of the whole page.
- It preloads the Latin file on every page, through the generated server hooks, so text does not first appear in a fallback font.

The files end up in the frontend build under hashed names and are served by your app, with the long cache lifetime of every other asset.

| Setting | Default | What it does |
|---|---|---|
| `fonts("Inter")` | none | The font of the page, `font-sans` |
| `mono` | none | The font for code, `font-mono` |
| `variable` | `true` | Uses the variable version, one file for all weights. Set `false` for a font that has none, and the regular and bold files are used |

### A font for code

```kotlin no-check
fonts("Inter") {
    mono = "JetBrains Mono"
}
```

Write the names as the fonts are called, with spaces.

### Fonts without a variable version

```kotlin no-check
fonts("Roboto") {
    variable = false
}
```

Whether a font exists, and whether it has a variable version, shows on its Fontsource page.

## Full example

A settings page where the visitor picks a theme from cards that each show the theme itself. The build file ships four themes and one of your own, like the showcase example:

::: code-group

```kotlin [build.gradle.kts]
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

svelte {
    libraries {
        tailwind {
            typography()
            forms()
        }
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark, DaisyTheme.Nord, DaisyTheme.Dracula)
            customTheme("ktor") {
                primary = "#7f52ff"
                secondary = "#ff3e00"
                accent = "#c711e1"
                base100 = "#fdfcff"
                baseContent = "#1f1b3a"
            }
            defaultTheme(DaisyTheme.ShadcnLight)
            prefersDark(DaisyTheme.ShadcnDark)
        }
        fonts("Inter") {
            mono = "JetBrains Mono"
        }
    }
}
```

```svelte no-check [settings/appearance/+page.svelte]
<script lang="ts">
    import { onMount } from 'svelte';
    import { getTheme, setTheme, themes, type ThemeName } from '#theme';

    const names: Partial<Record<ThemeName, string>> = {
        'shadcn-light': 'Light',
        'shadcn-dark': 'Dark',
        nord: 'Nord',
        dracula: 'Dracula',
        ktor: 'Ktor purple'
    };

    let current = $state<ThemeName>(themes[0]);

    onMount(() => {
        current = getTheme();
    });

    function pick(theme: ThemeName) {
        current = theme;
        setTheme(theme);
    }
</script>

<h1 class="mb-6 text-3xl font-bold">Appearance</h1>

<fieldset class="grid gap-4 sm:grid-cols-3">
    <legend class="mb-2 font-semibold">Theme</legend>
    {#each themes as theme (theme)}
        <label
            data-theme={theme}
            class="card bg-base-100 text-base-content cursor-pointer border-2 p-4"
            class:border-primary={theme === current}
            class:border-base-300={theme !== current}
        >
            <input class="sr-only" type="radio" name="theme" value={theme} checked={theme === current} onchange={() => pick(theme)} />
            <span class="font-semibold">{names[theme] ?? theme}</span>
            <span class="mt-3 flex gap-1">
                <span class="badge badge-primary">Aa</span>
                <span class="badge badge-secondary">Aa</span>
                <span class="badge badge-accent">Aa</span>
            </span>
            <code class="mt-3 font-mono text-xs">{theme}</code>
        </label>
    {/each}
</fieldset>

<article class="prose mt-10">
    <h2>Preview</h2>
    <p>Long text gets the typography plugin's styles, in your theme and in Inter.</p>
</article>
```

```kotlin no-check [ReportRoutes.kt]
import io.github.nijasc.ktorsvelte.AppTheme
import io.github.nijasc.ktorsvelte.theme

get("/api/report.pdf") {
    val dark = call.theme in setOf(AppTheme.ShadcnDark, AppTheme.Dracula)
    call.respondBytes(renderReport(dark = dark), ContentType.Application.Pdf)
}
```

:::

Each card sets `data-theme` on itself, so it shows that theme's colors whatever the page uses.

## Use cases

- A product with a brand color: one `customTheme`, tuned in the dev panel.
- An internal tool that should look calm and neutral: the [shadcn themes](#shadcn-themes).
- A public site with a privacy policy to keep short: [fonts](#fonts) from your own app instead of a CDN.
- Server-rendered files, such as PDFs or emails, that match the visitor's theme: [`call.theme`](#the-theme-on-the-server).
- A theme switch without writing one: [ThemeToggle](./components.md#themetoggle-and-localeswitch).

## Good to know

::: tip The theme is applied before the first paint
The saved theme is in a cookie (`ktor_svelte_theme`), and a small inline script sets it on `<html>` before the page shows, so there is no flash of the wrong theme.
:::

::: warning The build checks your themes
The build stops when `daisyUi` has no theme, when `defaultTheme` or `prefersDark` names a theme that is not in the list, and when a custom theme name is not lowercase letters, digits and dashes. The error message links to [DaisyUI](./frontend-libraries.md#daisyui) on the Frontend libraries page.
:::

::: warning Changing fonts
`fonts` needs `tailwind()` or `daisyUi()`, which bring the stylesheet. A name that does not exist fails at `svelteSync`, when the package cannot be installed. When you drop or change a font, remove its old `@fontsource` package from `package.json` yourself: the plugin does not know which of them are yours.
:::
