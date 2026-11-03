# ktor-svelte

Serve your SvelteKit build from Ktor on the same port as your API. One app, one JAR.

> **Status:** pre-release. Nothing is published yet, so the coordinates below are not resolvable until `0.1.0` ships.

## Quick start

`build.gradle.kts`:

```kotlin
plugins {
    kotlin("jvm") version "2.4.21"
    application
    id("io.github.nijasc.ktor-svelte") version "0.1.0"
}

repositories {
    mavenCentral()
}
```

Put a SvelteKit project in `frontend/` and use `adapter-static`. SvelteKit 3 has no `svelte.config.js`, so the configuration goes in `frontend/vite.config.js`:

```js
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html' }) })]
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

Then build and run:

```bash
./gradlew jar
```

`./gradlew run` builds the frontend too, and everything is served from one port.

## How it works

```
                 ┌──────────────── build time ────────────────┐
 frontend/ ───►  svelteInstall ─► svelteBuild ─► svelteBundle ─► processResources ─► JAR
                 └────────────────────────────────────────────┘
                                                     writes ktor-svelte/public/**
                                                     and ktor-svelte/manifest.json

 request ───► Ktor routing
                ├─ your routes win, because they are more specific
                └─ catch-all route from install(Svelte)
                     └─ resolved against the manifest
```

GET and HEAD requests that no route of yours matched are resolved in this order:

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
| `packageManager` | `AUTO`, `BUN`, `PNPM`, `NPM` or `YARN`. `AUTO` picks from the lockfile |
| `buildScript` | `package.json` script that builds the frontend |
| `buildEnv` | Environment variables that affect the build. Declare any your frontend reads through `$env`, or Gradle can reuse a stale build |
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
| `dev.port` | Port passed to Vite by `svelteDev` |
| `dev.script` | `package.json` script that starts Vite |

The package manager must already be installed. The plugin does not download Node or Bun.

| Lockfile | Tool |
|---|---|
| `bun.lock` | Bun |
| `pnpm-lock.yaml` | pnpm |
| `package-lock.json` | npm |
| `yarn.lock` | Yarn |

Gradle properties:

| Property | Effect |
|---|---|
| `-Psvelte.skip=true` | Skips the frontend tasks, and warns if a JAR is being built |
| `-Psvelte.dev=true` | Same as skip, and also sets `-Dio.ktor.development=true` on `run` |

### Ktor

The values shown are the defaults.

```kotlin
install(Svelte) {
    apiPrefixes("/api")
    spaFallback = "200.html"
    notFoundPage = "404.html"
    source = SvelteSource.Classpath

    cache {
        immutable = "public, max-age=31536000, immutable"
        html = "no-cache"
        other = "no-cache"
    }

    dev {
        url = "http://localhost:5173"
        mode = DevMode.AUTO
    }
}
```

| Setting | Purpose |
|---|---|
| `apiPrefixes` | Paths the frontend never answers. `/api` matches `/api` and `/api/x`, not `/apiary`. Existing routes already win, so this only keeps unknown API paths from returning HTML |
| `spaFallback` | Page for client-side routes. Must match the adapter's `fallback` option. `null` disables it |
| `notFoundPage` | Page served with status 404. `null` disables it |
| `source` | `SvelteSource.Classpath`, or `SvelteSource.Directory(path)` to serve a build from disk |
| `cache` | `Cache-Control` values for `_app/immutable/**`, HTML pages and other files |
| `dev.url` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `AUTO` follows Ktor's development mode. `ALWAYS` and `NEVER` force it |

A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages.

### Caching and compression

ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts. If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`. The runtime never compresses anything itself.

### Missing frontend build

In production the app fails at startup with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.

## Dev workflow

Run these in two terminals, then open Ktor's port, not Vite's:

```bash
./gradlew svelteDev
```

```bash
./gradlew run -Psvelte.dev=true
```

In development mode the runtime proxies to Vite if it is reachable, otherwise serves built files if they exist, and otherwise returns a 503 explaining how to start Vite. API prefixes are never proxied.

The proxy forwards HTTP only. Vite's client tries a WebSocket through Ktor, fails, and falls back to connecting directly to Vite. HMR works, but the browser logs one connection error. To remove it, connect straight to Vite:

```js
export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html' }) })],
    server: { hmr: { clientPort: 5173 } }
});
```

The browser must be able to reach Vite's port directly, so a remote machine or container needs that port exposed.

In IntelliJ, run `main` with the VM option `-Dio.ktor.development=true`, and add `-Psvelte.dev=true` to the Gradle settings if the IDE builds through Gradle.

If Gradle is killed rather than stopped normally, Vite or the app can keep running and hold its port. Run `./gradlew --stop`, or stop the process listening on that port.

## Limits

- `adapter-static` only. There is no Node process in production, so `+page.server.ts`, `+server.ts` and form actions are not supported. Ktor is the backend.
- The app is mounted at the root. `paths.base` is not supported yet.
- No range requests, so large media does not belong in the SvelteKit build.
- Security headers such as CSP are left to the app.

## Compatibility

| Tool | Supported |
|---|---|
| Ktor | 3.6 and newer 3.x |
| Kotlin | 2.3 and newer |
| JVM | 17 and newer |
| Gradle | Latest 8.x and 9.x |
| SvelteKit | 3.x |
| Package managers | Bun, pnpm, npm, Yarn |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[Apache 2.0](LICENSE)
