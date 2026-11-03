# ktor-svelte

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
import { api } from '#lib/api/index.js';

const note = await api.notes.create({ title: 'Buy milk' });
```

No CORS setup, no second server in production, no hand-written API types drifting away from the backend.

> [!WARNING]
> **This project was made heavily with AI, and nothing is guaranteed.** The author needed it for other projects and did not want to spend a lot of time on it. It has real tests, but read the code before you trust it with anything important.

> **Status:** pre-release. Nothing is published yet, so the coordinates below will not resolve until the first release ships.

## What you get

- **One port, one JAR.** Your built frontend goes inside the JAR, next to your API. Works with `jar`, Shadow and Ktor's `buildFatJar`.
- **Your routes win.** Anything you define in Ktor beats the frontend, whatever order you register it in.
- **Generated TypeScript.** Types and services come from your Ktor routes through OpenAPI, with no npm dependencies.
- **Real hot reload.** One command runs everything. You open Ktor's port and get Vite's HMR, with the same origin as production. Change a route and your TypeScript follows.
- **Transport in one place.** JSON, XML and compression are configured inside `install(Svelte)`.
- **Sensible production defaults.** Immutable caching for hashed assets, ETags, precompressed files, SPA fallback and real 404s for stale chunks.
- **Bring your package manager.** Bun, pnpm, npm or Yarn, picked from your lockfile.
- **Run configurations for IntelliJ.** One click starts Vite and Ktor together.

## Quick start

`build.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
plugins {
    kotlin("jvm") version "2.4.21"
    application
    id("io.github.nijasc.ktor-svelte") version "0.1.0"
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

SvelteKit 3 needs a `#lib` import in `frontend/package.json`:

```json
{
  "imports": {
    "#lib": "./src/lib/index.js",
    "#lib/*": "./src/lib/*"
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
import { api, apiConfig } from '#lib/api/index.js';

const notes = await api.notes.list({ search: 'milk' });
const note = await api.notes.get(1);
await api.notes.update(1, { title: 'Oat milk' });

apiConfig.headers['Authorization'] = 'Bearer token';
```

Errors are typed too. Ktor's compiler plugin finds error responses such as `call.respond(HttpStatusCode.NotFound, Problem(...))`, and `isApiError` narrows the body:

```ts
import { api, isApiError, isValidationError } from '#lib/api/index.js';

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

Check input with `validate`. When a rule fails, the client gets a 422 with an error list per field, in one standard shape that `isValidationError` understands. No extra plugins are needed.

```kotlin
post("/api/notes") {
    val input = call.receive<NoteInput>()
    validate {
        check("title", input.title.isNotBlank()) { "A note needs a title." }
        check("title", input.title.length <= 80) { "Keep the title under 80 characters." }
    }
    call.respond(HttpStatusCode.Created, store.create(input))
}
```

```json
{ "message": "Validation failed", "fields": { "title": ["A note needs a title."] } }
```

If you use Ktor's `StatusPages` with a handler for all exceptions, it runs first, so let `ValidationException` through.

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
import { loadPublicConfig } from '#lib/api/index.js';

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
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
| `includeSourceMaps` | Ships `.map` files in the JAR, where anyone can download them. Off by default |
| `dev.port` | Port passed to Vite by `svelteDev` |
| `dev.script` | `package.json` script that starts Vite |

The package manager must already be installed. The plugin does not download Node or Bun.

### Gradle tasks

| Task | What it does |
|---|---|
| `svelteInit` | Creates a working SvelteKit project in an empty `frontendDir`. Takes `--package-manager=bun` |
| `svelteDoctor` | Checks adapter, `#lib`, tsconfig, Kit version, tool and port, and says what to fix |
| `svelteDevAll` | Runs Vite, the Kotlin compiler and your app, and restarts the app when Kotlin changes |
| `svelteDev` | Starts Vite |
| `svelteGenerateTs` | Starts your app once to regenerate TypeScript |
| `svelteCheck` | Runs your `check` script |
| `svelteRun --script=lint` | Runs any `package.json` script |
| `svelteOutdated` | Lists outdated frontend dependencies |
| `svelteUpdateDependencies` | Updates frontend dependencies and the lockfile |
| `svelteClean` | Deletes `node_modules`, `.svelte-kit` and the build output |
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
