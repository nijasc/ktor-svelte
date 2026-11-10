# ktor-svelte

[![Latest release](https://img.shields.io/github/v/release/nijasc/ktor-svelte?label=release&sort=semver)](https://github.com/nijasc/ktor-svelte/releases/latest)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.nijasc/ktor-svelte-server?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server)
[![Gradle Plugin Portal](https://img.shields.io/gradle-plugin-portal/v/io.github.nijasc.ktor-svelte?label=Gradle%20Plugin%20Portal)](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte)
[![CI](https://img.shields.io/github/actions/workflow/status/nijasc/ktor-svelte/ci.yml?branch=main&label=CI)](https://github.com/nijasc/ktor-svelte/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/nijasc/ktor-svelte)](LICENSE)
[![Ktor](https://img.shields.io/badge/Ktor-3.x-087CFA?logo=ktor&logoColor=white)](https://ktor.io)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-3.x-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)

**Latest release:** [Maven Central](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server) | [Gradle Plugin Portal](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte) | [Release notes](https://github.com/nijasc/ktor-svelte/releases/latest)

Ship your Ktor API and your SvelteKit frontend as one app: one JAR, one port, and a TypeScript client that always matches your routes.

```kotlin
install(Svelte) {
    generateTs = true
    transport {
        json()
        compression()
    }
}
```

Write a route in Kotlin, save, and call it from Svelte with full types:

```ts
import { api } from '#api';

const note = await api.notes.create({ title: 'Buy milk' });
```

No CORS setup, no second server in production, no hand-written API types drifting away from the backend.

> [!WARNING]
> **This project was made heavily with AI, and nothing is guaranteed.** The author needed it for other projects and did not want to spend a lot of time on it. It has real tests, but read the code before you trust it with anything important.

> **Status:** early. Expect breaking changes while the version starts with `0.`.

## What you get

- **One port, one JAR.** Your built frontend goes inside the JAR, next to your API. Works with `jar`, Shadow and Ktor's `buildFatJar`.
- **Your routes win.** Anything you define in Ktor beats the frontend, whatever order you register it in.
- **Generated TypeScript.** Types and services come from your Ktor routes through OpenAPI, with no npm dependencies.
- **Real hot reload.** One command runs everything. You open Ktor's port and get Vite's HMR, with the same origin as production. Change a route and your TypeScript follows.
- **Transport in one place.** JSON, XML and compression are configured inside `install(Svelte)`.
- **Sensible production defaults.** Immutable caching for hashed assets, ETags, precompressed files, SPA fallback and real 404s for stale chunks.
- **Frontend libraries from Kotlin.** Turn on Tailwind, DaisyUI, Lucide and i18n in Gradle, with typed icons, themes and messages on both sides.
- **Bring your package manager.** Bun, pnpm, npm or Yarn, picked from your lockfile.
- **Run configurations for IntelliJ.** One click starts Vite and Ktor together.

## Create a project

One command asks a few questions and sets up a working project, always on the latest release. You need Java 17 or newer and one of Bun, pnpm, npm or Yarn.

**macOS and Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh
```

**Windows:**

```powershell
powershell -c "irm https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.ps1 | iex"
```

It asks a few questions, and you can press Enter for the defaults. Then start it:

```bash
./gradlew svelteDevAll
```

| Question | Flag | Default | What you get |
|---|---|---|---|
| Project name, Kotlin package, package manager | `--name`, `--package`, `--package-manager` | `my-app`, `com.example.app`, first one found | |
| TypeScript client | `--generate-ts` | yes | `generateTs` turned on |
| DaisyUI, Tailwind, Lucide | `--daisy`, `--tailwind`, `--lucide` | yes | Configured in `build.gradle.kts` |
| i18n | `--i18n`, `--locales`, `--locale-strategy` | no | Message files and the chosen strategy |
| Sign in | `--auth` | no | Cookie sessions, hashed passwords, routes, and login and account pages |
| Postgres | `--database` | no | Exposed, HikariCP, `compose.yaml` and a small example table |
| Flyway, only with Postgres | `--flyway` | yes | Migrations in `src/main/resources/db/migration` |
| No package folders | `--idea-ext` | yes | Kotlin files directly in `src/main/kotlin`, and IntelliJ knows the package through the `idea-ext` plugin |
| Convention plugin | `--conventions` | no | `build-logic` with shared Kotlin and ktlint setup, for multi-module projects |
| Dockerfile | `--docker` | yes | A multi-stage build that runs the JAR as a non-root user |
| GitHub Actions | `--github-actions` | yes | A CI workflow with Actions pinned to commit SHAs |
| Git repository, only if git is installed | `--git` | yes | `git init` |
| Open in IntelliJ, only if it is installed | `--open-idea` | yes, but no with `--yes` | Opens the project when it is ready |

Every project also gets a Gradle version catalog, JSON and typed error responses, ktlint, ESLint and Prettier, a `README.md`, a `.env.example` and a `.gitignore`. With sign in or Postgres, it also gets a `.env` with random secrets, which is not committed.

To skip the questions, add `--yes` and any options. Turn something off with `--no-`, such as `--no-lucide`:

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=shop
```

Prefer to read scripts before running them? They are in [`scripts/`](scripts).

## Add to an existing project

Add the plugin to a Kotlin JVM project that uses the `application` plugin, in `build.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
plugins {
    id("io.github.nijasc.ktor-svelte") version "0.3.1"
}
```
<!-- x-release-please-end -->

Create the frontend. This writes a working SvelteKit 3 project to `frontend/` and installs it with the first package manager on your `PATH`:

```bash
./gradlew svelteInit
```

Already have a frontend? It needs `adapter-static`, and since SvelteKit 3 has no `svelte.config.js`, the configuration goes in `frontend/vite.config.ts`. Run `./gradlew svelteDoctor` to check the rest:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html' }) })],
    server: { hmr: { clientPort: 5173 } }
});
```

Install the Ktor plugin:

```kotlin
import io.github.nijasc.ktor.svelte.Svelte

fun Application.module() {
    install(Svelte)

    routing {
        get("/api/hello") { call.respondText("hi") }
    }
}
```

Run it. The frontend is built first and served from the same port as your API:

```bash
./gradlew run
```

For one runnable JAR, add [Shadow](https://gradleup.com/shadow/) or Ktor's Gradle plugin and run `shadowJar` or `buildFatJar`. The frontend comes along automatically.

Want an IDE setup? This writes run configurations to `.run/`:

```bash
./gradlew svelteGenerateRunConfigurations
```

The Gradle plugin adds the runtime for you. If you only want the library, add it directly:

<!-- x-release-please-start-version -->
```kotlin
implementation("io.github.nijasc:ktor-svelte-server:0.3.1")
```
<!-- x-release-please-end -->

## Frontend libraries

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
            themes(DaisyTheme.Light, DaisyTheme.Dark, DaisyTheme.Cupcake)
            customTheme("brand") {
                primary = "#6b57ff"
                base100 = "#fdfcff"
            }
            defaultTheme(DaisyTheme.Light)
            prefersDark(DaisyTheme.Dark)
        }
        lucide()
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

Generated Kotlin lands in the `ktorsvelte` package. Change it with `generatedPackage = "com.example.ui"`.

### Tailwind

`tailwind()` installs Tailwind 4 and wires Vite and the CSS. `typography()` and `forms()` add the official plugins. Everything else is normal Tailwind CSS.

### DaisyUI

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
import ktorsvelte.AppTheme
import ktorsvelte.theme

get("/api/report") {
    val isDark = call.theme == AppTheme.Dark
}
```

`customTheme` also accepts `secondary`, `accent`, `neutral`, `base200`, `base300`, `baseContent`, `info`, `success`, `warning` and `error`, plus `variable("radius-box", "1rem")` for anything else Daisy supports. Pass `colorScheme = "dark"` for dark themes.

The saved theme is applied by a small inline script. If you set a strict `contentSecurityPolicy`, allow it with SvelteKit's `csp` option in `hash` mode.

### Lucide

`lucide()` generates a `LucideIcon` enum from the installed version, so a misspelled icon is a compile error. Use it in your DTOs and it reaches the frontend as the same type:

```kotlin
import ktorsvelte.LucideIcon

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

### i18n

Keep one JSON file per language in `frontend/messages`. Change the folder with `messagesDir`. Files are flat, and `{name}` is a parameter:

```json
{
  "note-created": "Created {title}",
  "app-title": "Notes"
}
```

Both sides get typed functions from the same files. A missing key or a mismatched parameter in any language fails the build, so translations can't drift.

```svelte
<script lang="ts">
    import { getLocale, localizeHref, locales, m, setLocale } from '#i18n';
</script>

<h1>{m.appTitle()}</h1>
<p>{m.noteCreated({ title: 'Milk' })}</p>
<a href={localizeHref('/about')}>About</a>
<button onclick={() => setLocale('de')}>Deutsch</button>
```

```kotlin
import ktorsvelte.Messages
import ktorsvelte.messages

get("/api/hello") {
    call.respondText(call.messages.noteCreated("Milk"))
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

## Generated TypeScript

Set `generateTs = true`. Each time the app starts in development mode, it reads your routing tree, builds an OpenAPI document and writes this to `frontend/src/lib/api`:

| File | Contents |
|---|---|
| `types.ts` | An interface or union for every schema |
| `services.ts` | One object per resource, such as `api.notes.list()` |
| `client.ts` | The small `fetch` wrapper, `ApiError` and `apiConfig` |
| `index.ts` | Re-exports all of the above |
| `openapi.json` | The OpenAPI document itself |

Commit these files. That way a frontend build never needs your app to run first. Unchanged files are not rewritten, so Vite does not reload for nothing. Nothing is generated in production.

`svelteInit` also sets up the short `#api` import. For a frontend you already have, add it to `frontend/package.json`:

```json
{
  "imports": {
    "#api": "./src/lib/api/index.ts"
  }
}
```

### Getting exact types

Ktor's compiler plugin reads `call.receive<T>()`, `call.respond()` and `call.queryParameters` for you, so plain routes get full types. Add the Ktor Gradle plugin:

```kotlin
plugins {
    id("io.ktor.plugin") version "3.6.1"
}

ktor {
    openApi {
        enabled = true
        codeInferenceEnabled = true
        onlyCommented = false
    }
}
```

Without it, describe routes by hand. A route with no description still gets a service, but it returns `unknown`:

```kotlin
get("/api/todos") { call.respond(todos) }.describe {
    responses {
        HttpStatusCode.OK { schema = jsonSchema<List<Todo>>() }
    }
}
```

### Calling the API

```ts
import { api, apiConfig } from '#api';

const notes = await api.notes.list({ search: 'milk' });
const note = await api.notes.get(1);
await api.notes.update(1, { title: 'Oat milk' });

apiConfig.headers['Authorization'] = 'Bearer token';
```

Errors are typed too. Ktor's compiler plugin finds error responses such as `call.respond(HttpStatusCode.NotFound, Problem(...))`, and `isApiError` narrows the body:

```ts
import { api, isApiError, isValidationError } from '#api';

try {
    await api.notes.create({ title: '' });
} catch (error) {
    if (isValidationError(error)) showErrors(error.body.fields);
    if (isApiError(error, 'notes.get')) console.log(error.body.message);
}
```

Service names follow your routes: `GET /notes` is `list`, `GET /notes/{id}` is `get`, `POST` is `create`, `PUT` is `update`, `DELETE` is `delete`, and `POST /notes/{id}/archive` is `archive`. Set `operationId` in `describe` to choose your own. Inside a SvelteKit `load`, pass its `fetch`:

```ts
export const load: PageLoad = async ({ fetch }) => ({
    notes: await api.notes.list(undefined, { fetch })
});
```

To refresh the files without your dev server, for example in CI, run the task below and check for a diff. It starts your app once, so the app's port must be free.

```bash
./gradlew svelteGenerateTs
```

## Validation

Put the rules on the class itself by implementing `Validated`. They then run on every `call.receive` of that class, in every route. When a rule fails, the route never runs, and the client gets a 422 with an error list per field, in one standard shape that `isValidationError` understands.

```kotlin
@Serializable
data class NoteInput(val title: String, val body: String = "") : Validated {
    override fun Validator.rules() {
        check("title", title.isNotBlank()) { "A note needs a title." }
        check("title", title.length <= 80) { "Keep the title under 80 characters." }
    }
}

post("/api/notes") {
    val input = call.receive<NoteInput>()
    call.respond(HttpStatusCode.Created, store.create(input))
}
```

```json
{ "message": "Validation failed", "fields": { "title": ["A note needs a title."] } }
```

For a rule that depends on the route, such as comparing against a database, call `validate { check(...) { ... } }` inside the route. It answers the same way. If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.

## Transport

Choose how your API talks inside `install(Svelte)`. Without a `transport` block, nothing is installed and you stay in control.

```kotlin
install(Svelte) {
    transport {
        json { prettyPrint = true }
        xml()
        compression()
    }
}
```

| Function | Effect |
|---|---|
| `json()` | Adds JSON to Ktor's `ContentNegotiation`. Takes a `kotlinx.serialization` `Json` builder |
| `xml()` | Adds XML. Needs `implementation("io.ktor:ktor-serialization-kotlinx-xml")` in your build |
| `negotiation { }` | Registers any other format, such as CBOR, on `ContentNegotiation` directly |
| `compression { }` | Installs Ktor's `Compression`. Takes its normal configuration, and defaults to gzip and deflate |

The client picks a format with its `Accept` header, and the first format you list is the default. Already installing these plugins yourself? You will get a clear error at startup, so remove one of the two. Files precompressed by your adapter are left alone. The generated TypeScript client always speaks JSON.

## Auth

To put the frontend behind Ktor's authentication, take over its routing. List what stays public. Those paths must include your login page and `/_app/*`, or the login page cannot load. Anyone can still download the JS bundles under `/_app`, so keep secrets on the server.

```kotlin
install(Svelte) {
    routing = SvelteRouting.Manual
}

routing {
    svelte(public = listOf("/login", "/_app/*"))
    authenticate("session") {
        svelte()
    }
}
```

Pages served by a plain `svelte()` get `private` caching, so shared proxies do not keep them. Paths in the `public` list keep normal caching.

In the browser, react to expired sessions in one place:

```ts
apiConfig.onUnauthorized = () => goto('/login');
```

In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.

## Runtime config

Pass values to the frontend at startup, so one JAR works in every environment. The type comes along with `generateTs`:

```kotlin
@Serializable
data class AppConfig(val sentryDsn: String?)

install(Svelte) {
    publicConfig(AppConfig(sentryDsn = System.getenv("SENTRY_DSN")))
}
```

```ts
import { loadPublicConfig } from '#api';

const config = await loadPublicConfig();
```

It is served as JSON from `/_ktor-svelte/config.json` to anyone who asks, so **never put secrets in it**. In SvelteKit, call `loadPublicConfig` only in the browser, because prerendering has no server to ask.

## Security headers

```kotlin
install(Svelte) {
    securityHeaders()
}
```

This sends `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` and `Referrer-Policy: strict-origin-when-cross-origin` on every response. Each is a property you can change, or set to `null` to leave out.

`contentSecurityPolicy` is off by default, because SvelteKit's inline startup script would break under a strict policy. Use SvelteKit's own `csp` option in `hash` mode, or set this property yourself and test it. It is never sent in dev, because it would break Vite.

## API docs

`apiDocs = true` serves Swagger UI at `/api/docs` in development mode only, using the same OpenAPI document as `generateTs`. Change the path with `apiDocsPath`. The page loads its scripts from a public CDN, so it needs internet access.

## How it works

At build time, three tasks run before `processResources`:

1. `svelteInstall` installs dependencies from your lockfile.
2. `svelteBuild` runs your build script.
3. `svelteBundle` copies the output to `ktor-svelte/public/` in your resources, and writes `ktor-svelte/manifest.json` with a hash of every file.

`svelteBundle` leaves out hidden files such as `.env` (but keeps `.well-known`), source maps and symlinks, and warns about any hidden files it skipped. `SvelteSource.Directory` also ignores hidden files and symlinks, but serves source maps.

At run time, `install(Svelte)` adds a catch-all route. Ktor always prefers more specific routes, so yours win. GET and HEAD requests that reach the catch-all are resolved in this order:

| Step | Request | Result |
|---|---|---|
| 1 | Path under an API prefix | Not handled, so Ktor returns its normal 404 |
| 2 | Exact file in the manifest | Serve the file |
| 3 | `/about` when `about.html` exists, or `/about/` when `about/index.html` exists | Serve the page |
| 4 | `/about/` when only `about.html` exists, or `/about` when only `about/index.html` exists | 308 redirect to the form that exists, keeping the query string |
| 5 | Missing path under `/_app/`, or any path with a file extension | 404, never the fallback |
| 6 | Other path, with a fallback page and a request that accepts HTML | Serve the fallback with status 200 |
| 7 | Anything else | `404.html` with status 404 if it exists, otherwise a plain 404 |

Step 4 exists because prerendered pages load assets with relative paths, so serving `about.html` at `/about/` would break them. Step 5 lets SvelteKit recover from stale chunks after a deploy by doing a full page reload.

## Configuration

### Ktor

The values shown are the defaults.

```kotlin
install(Svelte) {
    apiPrefixes("/api")
    spaFallback = "200.html"
    notFoundPage = "404.html"
    source = SvelteSource.Classpath
    generateTs = false
    generateTsOutput = null
    apiDocs = false
    apiDocsPath = "/api/docs"
    routing = SvelteRouting.Automatic

    cache {
        immutable = "public, max-age=31536000, immutable"
        html = "no-cache"
        other = "no-cache"
    }

    dev {
        url = "http://localhost:5173"
        mode = DevMode.AUTO
        allowRemote = false
    }

    transport {
    }
}
```

| Setting | Purpose |
|---|---|
| `apiPrefixes` | Paths the frontend never answers, and the routes included in `generateTs`. `/api` matches `/api` and `/api/x`, not `/apiary` |
| `spaFallback` | Page for client-side routes. Must match the adapter's `fallback` option. `null` disables it |
| `notFoundPage` | Page served with status 404. `null` disables it |
| `source` | `SvelteSource.Classpath`, or `SvelteSource.Directory(path)` to serve a build from disk |
| `generateTs` | Generates TypeScript from your routes in development mode |
| `generateTsOutput` | Output directory. Defaults to `src/lib/api` in your frontend |
| `apiDocs` | Serves Swagger UI in development mode. See [API docs](#api-docs) |
| `routing` | `Manual` lets you place the frontend with `svelte()`. See [Auth](#auth) |
| `securityHeaders { }` | See [Security headers](#security-headers) |
| `publicConfig(value)` | See [Runtime config](#runtime-config) |
| `cache` | `Cache-Control` values for `_app/immutable/**`, HTML pages and other files |
| `dev.url` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `AUTO` follows Ktor's development mode. `ALWAYS` and `NEVER` force it |
| `dev.allowRemote` | Lets other machines use the dev proxy, and lets `dev.url` point at another machine. Off by default |
| `transport` | JSON, XML and compression. See [Transport](#transport) |

A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages.

ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts. If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`.

If the frontend build is missing, the app fails at startup in production with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.

### Gradle

The values shown are the defaults. `PackageManager` needs `import io.github.nijasc.ktor.svelte.gradle.PackageManager` at the top of the build script.

```kotlin
svelte {
    frontendDir = layout.projectDirectory.dir("frontend")
    outputDir = "build"
    packageManager = PackageManager.AUTO
    buildScript = "build"
    buildEnv = emptySet()
    addRuntimeDependency = true
    includeSourceMaps = false
    dev {
        port = 5173
        script = "dev"
    }
}
```

| Setting | Purpose |
|---|---|
| `frontendDir` | Directory of the SvelteKit project |
| `outputDir` | Adapter output, relative to `frontendDir`. Must match the adapter's `pages` option |
| `packageManager` | `AUTO`, `BUN`, `PNPM`, `NPM` or `YARN`. `AUTO` picks from `bun.lock`, `pnpm-lock.yaml`, `package-lock.json` or `yarn.lock` |
| `buildScript` | `package.json` script that builds the frontend |
| `buildEnv` | Environment variables that affect the build. Declare any your frontend reads through `$env`, or Gradle can reuse a stale build |
| `libraries` | Tailwind, DaisyUI, Lucide and i18n. See [Frontend libraries](#frontend-libraries) |
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
| `includeSourceMaps` | Ships `.map` files in the JAR, where anyone can download them. Off by default |
| `dev.port` | Port passed to Vite by `svelteDev` |
| `dev.script` | `package.json` script that starts Vite |

The package manager must already be installed. The plugin does not download Node or Bun.

### Gradle tasks

| Task | What it does |
|---|---|
| `svelteSync` | Installs configured libraries and writes their generated files |
| `svelteVerifySync` | Fails if libraries don't match your config. Runs before every frontend build |
| `svelteGenerateSources` | Generates Kotlin for your libraries. Runs before compiling |
| `svelteInit` | Creates a working SvelteKit project in an empty `frontendDir`. Takes `--package-manager=bun` |
| `svelteDoctor` | Checks adapter, `#api`, tsconfig, Kit version, tool and port, and says what to fix |
| `svelteDevAll` | Runs Vite, the Kotlin compiler and your app, and restarts the app when Kotlin changes |
| `svelteDev` | Starts Vite |
| `svelteGenerateTs` | Starts your app once to regenerate TypeScript |
| `svelteCheck` | Runs your `check` script |
| `svelteRun --script=lint` | Runs any `package.json` script |
| `svelteOutdated` | Lists outdated frontend dependencies |
| `svelteUpdateDependencies` | Updates frontend dependencies and the lockfile |
| `svelteClean` | Deletes `node_modules`, `.svelte-kit` and the build output |
| `deepClean` | Runs `clean`, then also deletes `node_modules`, `.svelte-kit`, `.vite`, `.turbo`, `.cache`, `.eslintcache` and the build output. Lockfiles and generated files are kept |
| `svelteGenerateRunConfigurations` | Writes IntelliJ run configurations to `.run/`, keeping any that exist |

| Property | Effect |
|---|---|
| `-Psvelte.skip=true` | Skips the frontend build, and warns if a JAR is being built |
| `-Psvelte.dev=true` | Same as skip, and also sets `-Dio.ktor.development=true` on `run` |

## Dev workflow

One command runs everything. Then open Ktor's port, not Vite's:

```bash
./gradlew svelteDevAll
```

It starts Vite, keeps Kotlin compiling and runs your app. Save a Svelte file and the page hot reloads. Save a Kotlin file and the app restarts, and with `generateTs` on your TypeScript updates a moment later, so type errors show up in the editor right away. A restart loses anything your app keeps in memory. Stopping the task stops all three. In IntelliJ, this is the `Dev` run configuration, and each line of output is labelled `[vite]`, `[kotlin]` or `[app]`.

Prefer separate terminals, for example to attach a debugger to the app? Run these instead:

```bash
./gradlew svelteDev
```

```bash
./gradlew run -Psvelte.dev=true
```

In development mode the runtime proxies to Vite if it is reachable, otherwise serves built files if they exist, and otherwise returns a 503 explaining how to start Vite. API prefixes are never proxied.

The proxy only answers requests from this machine, so your frontend source is not open to everyone on your network, even though Ktor listens on all interfaces. Requests from elsewhere get your built files, or a 403 if there are none. It never forwards cookies or `Authorization` headers. It also refuses to start if `dev.url` points at another machine. To test from your phone or use Vite in another container, set `dev { allowRemote = true }`, and only on a network you trust.

The proxy forwards HTTP only. `server.hmr.clientPort` in the quick start makes Vite's client connect straight to Vite. Without it HMR still works, but the browser logs one WebSocket error before Vite falls back. Either way, the browser must be able to reach Vite's port, so a remote machine or container needs that port exposed.

With two terminals, if a Gradle process is killed rather than stopped normally, Vite or the app can keep running and hold its port. Run `./gradlew --stop`, or stop the process listening on that port. `svelteDevAll` stops its children even when its terminal is closed.

## Examples

| Example | Shows |
|---|---|
| [`examples/basic`](examples/basic) | The smallest possible app: one API route, prerendered pages and an SPA route |
| [`examples/notes`](examples/notes) | Full CRUD with `generateTs`, JSON, XML and compression, validation errors, runtime config, security headers, Swagger, dynamic routes and typed 404 pages |

Open this repository in IntelliJ and run `Notes: Dev`, then visit `http://localhost:8080`. Or from a terminal:

```bash
./gradlew -p examples/notes svelteDevAll
```

## Limits

- `adapter-static` only. There is no Node process in production, so `+page.server.ts`, `+server.ts` and form actions are not supported. Ktor is the backend.
- The app is mounted at the root. `paths.base` is not supported yet.
- No range requests, so large media does not belong in the SvelteKit build.
- Security headers such as CSP are left to the app.
- `generateTs` builds on Ktor's OpenAPI support, which Ktor still marks as experimental.

## Compatibility

| Tool | Supported | Tested with |
|---|---|---|
| Ktor | 3.6 and newer 3.x | 3.6.1 |
| Kotlin | 2.3 and newer | 2.4.21 |
| JVM | 17 and newer | 17, 21 |
| Gradle | Latest 8.x and 9.x | 8.14.6, 9.8.2 |
| SvelteKit | 3.x | 3.1.1 |
| Package managers | Bun, pnpm, npm, Yarn | Bun end to end. The others use fake tools in tests, plus npm in CI |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Releases are automated with release-please, and release notes live on the [releases page](https://github.com/nijasc/ktor-svelte/releases).

## License

[Apache 2.0](LICENSE)
