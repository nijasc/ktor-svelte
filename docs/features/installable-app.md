# Installable app

`installable { }` makes the app installable, on phones and on desktops: a web manifest, icons in every size, a theme color and a small service worker with an offline page. Name, colors and icon are set once, in Gradle.

<Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated files" />

This page is part of [Frontend libraries](./frontend-libraries.md).

## Quick start

```kotlin
svelte {
    libraries {
        installable {
            name = "Notes"
            icon = file("app-icon.png")
        }
    }
}
```

```bash
./gradlew svelteSync
```

Put a square PNG of at least 512 pixels next to the build file. After the next build, browsers offer to install the app.

## Settings

```kotlin
svelte {
    libraries {
        installable {
            name = "Notes"
            shortName = "Notes"
            description = "Notes for the whole team"
            themeColor = "#4f46e5"
            backgroundColor = "#ffffff"
            display = "standalone"
            icon = file("app-icon.png")
        }
    }
}
```

| Setting | Default | Purpose |
|---|---|---|
| `name` | required | The name shown when the app is installed and in the app list |
| `shortName` | `name` | The name under the icon on a home screen, where space is short |
| `description` | none | What the app does, shown by some install dialogs |
| `themeColor` | `#ffffff` | Color of the browser bar and the title bar of the installed app, as a hex color |
| `backgroundColor` | `#ffffff` | Color of the splash screen while the app starts, and behind the maskable and Apple icons |
| `display` | `standalone` | `standalone`, `fullscreen`, `minimal-ui` or `browser` |
| `icon` | required | A square PNG of at least 512 pixels |

Colors are hex colors with three or six digits, such as `"#4f46e5"` or `"#fff"`.

### Display modes

| `display` | What the installed app looks like |
|---|---|
| `standalone` | Its own window, without the browser's address bar. The usual choice |
| `fullscreen` | The whole screen, without the system's status bar either. For games and kiosks |
| `minimal-ui` | Its own window with a few browser controls, such as back and reload |
| `browser` | A normal browser tab |

## What svelteSync writes

- `static/ktor-svelte/manifest.webmanifest`, with `start_url` and `scope` set to `/` and the default locale as `lang` when i18n is on.
- `static/ktor-svelte/icon-48.png` to `icon-512.png` in nine sizes, `icon-maskable-192.png` and `icon-maskable-512.png` with the icon inside the safe zone on the background color, and `apple-touch-icon.png`.
- `src/service-worker/index.ts` and its `tsconfig.json`, which SvelteKit builds and registers by itself.
- The manifest link, the `theme-color` tag and the Apple icon in the head of every page, through the generated server hook.

The icons are made from your PNG with plain Java, so nothing else needs to be installed. `svelteVerifySync` compares them by their pixels, so a build on another JDK, which may compress PNGs differently, does not count as a change. Commit the files like the rest of the generated ones. `static/ktor-svelte` carries its own `.gitattributes` that keeps the PNGs binary.

## What the service worker does

- It caches the hashed files of the build, everything under `_app/immutable/`, when it is installed, and serves them from that cache.
- When a page cannot be loaded because there is no connection, it answers with an [offline page](#offline-page) in the app's colors.
- It never caches API responses or HTML pages, so a deploy is never hidden behind a stale copy.
- Requests to other sites, and anything but GET, go straight to the network.

### Updates

A new build installs a new worker, which takes over once every tab of the old version is closed and then deletes the old cache. Open tabs keep the files of the version they started with. Use `toasts { reloadPrompt() }` to offer a reload:

```kotlin
svelte {
    libraries {
        toasts { reloadPrompt() }
        installable {
            name = "Notes"
            icon = file("app-icon.png")
        }
    }
}
```

See [Reload after a deploy](./calling-the-api.md#reload-after-a-deploy).

## Offline page

When a page cannot be loaded because there is no connection, the worker answers with an offline page in the app's colors, which reloads by itself once the connection is back.

The offline page is in English. To translate it, add these keys to your [messages](./i18n.md#message-files), with your own wording, for example:

```json
{
  "offline-title": "You are offline",
  "offline-text": "Check your connection. This page reloads by itself once you are back online.",
  "offline-retry": "Try again"
}
```

The page uses the default locale, since a service worker cannot know the visitor's. Like every message, the keys must be in every language file.

## On the server

On the server nothing needs setting up. The files are served like the rest of the build, without a long cache time, so a new manifest or worker is picked up right away. When the app answers `svelte(public = ...)` and asks for a sign-in everywhere else, `/service-worker.js` and `/ktor-svelte/*` stay public, since a browser fetches them without a session.

## Full example

An app for a German-speaking team, based on the showcase example: installable, with a reload prompt after a deploy and a German offline page.

::: code-group

```kotlin [build.gradle.kts]
import io.github.nijasc.ktor.svelte.gradle.DaisyTheme
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

svelte {
    libraries {
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark)
        }
        installable {
            name = "ktor-svelte showcase"
            shortName = "Showcase"
            description = "A team board in one JAR"
            themeColor = "#7f52ff"
            backgroundColor = "#fdfcff"
            icon = file("app-icon.png")
        }
        toasts { reloadPrompt() }
        i18n {
            locales("de", "en")
            defaultLocale = "de"
            strategy = LocaleStrategy.Cookie
        }
    }
}
```

```json [messages/de.json]
{
  "offline-title": "Keine Verbindung",
  "offline-text": "Diese Seite laedt neu, sobald du wieder online bist.",
  "offline-retry": "Erneut versuchen"
}
```

```text [Generated files]
frontend/
  static/ktor-svelte/
    manifest.webmanifest
    icon-48.png ... icon-512.png
    icon-maskable-192.png
    icon-maskable-512.png
    apple-touch-icon.png
    .gitattributes
  src/service-worker/
    index.ts
    tsconfig.json
```

:::

`en.json` needs the same three keys, in English. The offline page shows the German text, because `de` is the default locale.

To try it on a phone, open the app over [HTTPS in development](../guide/dev-workflow.md#https-in-development) and choose "Install" or "Add to Home Screen" in the browser's menu.

## Use cases

- An internal tool people open many times a day: an icon on the desktop or home screen, in its own window.
- A field app on phones with a patchy connection: a clear offline page instead of the browser's error.
- Faster repeat visits: the hashed files of the build come from the worker's cache.

## Good to know

::: warning HTTPS or localhost only
Service workers only run on `https` or on `localhost`. Test on another device with [HTTPS in development](../guide/dev-workflow.md#https-in-development).
:::

::: warning Your own service worker
If you already have `src/service-worker/index.ts`, sync stops instead of overwriting it.
:::

::: tip Turning it off
Turning `installable` off again removes the files, and browsers unregister the old worker when `/service-worker.js` no longer exists.
:::

::: details What the build checks
`svelteSync` stops with a message when `name` or `icon` is missing, when the icon file does not exist, is not a PNG Java can read, is not square or is smaller than 512 pixels, when a color is not a hex color, or when `display` is not one of the four modes. The message links to [Frontend libraries](./frontend-libraries.md).
:::
