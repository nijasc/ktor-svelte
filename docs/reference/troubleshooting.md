# Troubleshooting

Find the message you see, then its cause and fix. Run `./gradlew svelteDoctor` first: it checks the frontend setup and lists most problems on this page at once.

## Build

### ktor-svelte found no lockfile

The frontend has no `bun.lock`, `pnpm-lock.yaml`, `package-lock.json` or `yarn.lock`, so the plugin cannot tell which package manager to use. Install the dependencies once with your package manager, or set `svelte { packageManager = PackageManager.BUN }`.

### ktor-svelte could not find bun on PATH

The package manager the lockfile asks for is not installed, or Gradle cannot see it. Install it, restart the Gradle daemon with `./gradlew --stop` so it picks up the new `PATH`, or set `packageManager` to one you have.

### ktor-svelte found no HTML files

The frontend build produced no pages where the plugin looked. Check that the frontend uses `adapter-static`, and that `svelte { outputDir }` matches the adapter's `pages` option. The default for both is `build`.

### Frontend libraries are out of sync

`build.gradle.kts` changed the frontend libraries, but `package.json`, the lockfile or the generated files were not updated. Run `./gradlew svelteSync` and commit the result.

### ktor-svelte generates vite.config.ts, but found your own version

The plugin needs to own `vite.config.ts` and the hooks files once frontend libraries are on. Move your own Vite settings to `vite.user.ts`, merge custom hooks by hand, delete those files and run `svelteSync`.

### Generated TypeScript is out of date

`check` runs `svelteVerifyTs`, which found that a route or DTO changed but the committed client did not. Run `./gradlew svelteGenerateTs`, or start the app in development mode, and commit the files in `frontend/src/lib/api`.

### The frontend build failed with exit code 1

ktor-svelte hides the package manager and Vite output while it succeeds and prints all of it when it fails, above this message. To see it every time, add `-Psvelte.verbose=true`.

## Startup

### ktor-svelte found no frontend build

The app runs in production mode, but the JAR has no frontend in it. Build it with the Gradle plugin and without `-Psvelte.skip=true` or `-Psvelte.dev=true`. During development, start it with `-Dio.ktor.development=true`, or use `svelteDevAll`, which does that for you.

### ktor-svelte manifest has format version 2, but this runtime reads version 1

The Gradle plugin and `ktor-svelte-server` have different versions. Use the same version for both. With `addRuntimeDependency` on, which is the default, the plugin adds the matching runtime for you.

### ContentNegotiation is already installed

You install `ContentNegotiation` yourself and also list formats in `transport { }`. Keep one of the two. The same applies to `Compression` and `compression()`.

### RequestBodyLimit is already installed, or RateLimit is already installed

ktor-svelte installs these plugins for its body and rate limits. To use your own, set `maxApiBodySize = null` or `rateLimit { enabled = false }`.

### ktor-svelte will not proxy to this URL because it is not on this machine

`dev { url }` or `KTOR_SVELTE_DEV_SERVER` points at another host. Use a loopback address, or set `dev { allowRemote = true }` if you trust that machine.

### Install the Svelte plugin before calling svelte() in routing

With `routing = SvelteRouting.Manual`, call `install(Svelte)` before the `routing { }` block that calls `svelte()`.

### The Ktor route GET /about hides the frontend page about.html

A route in your app answers the same path as a prerendered page, so the page is never served. Move the route under your API prefix, or rename the page.

## Requests

### 403: Cross-origin API request refused

The origin check refused a write from another site. If that site is yours, such as a separate admin frontend, add it with `allowedOrigins("https://admin.example.com")`. Behind a proxy that changes the host, install `XForwardedHeaders` so the app sees the host the browser used. See [Security](../security.md#api-request-guards).

### 413: Request body is larger than the limit

API bodies are limited to 1 MiB. Raise `maxApiBodySize` for apps that accept uploads.

### 429: Too Many Requests

A client sent more than 120 writes to API paths in a minute, or hit a named limit. Behind a proxy, install `XForwardedHeaders`, or all users share one limit. Raise `rateLimit { apiWrites = ... }` if your app writes a lot.

### 503 in development: no Vite and no build

The app runs in development mode, Vite is not running and there is no frontend build. Start everything with `./gradlew svelteDevAll`, or Vite alone with `./gradlew svelteDev`.

### 403: The dev proxy only answers requests from this machine

You opened the app from another device while it runs in development mode. Set `dev { allowRemote = true }` on a network you trust.

### A page shows a blank screen after a deploy

The browser has an old page that loads chunks which no longer exist. ktor-svelte answers those with 404 on purpose, so SvelteKit reloads the page. If it does not, check that nothing in front of the app caches HTML: pages are sent with `Cache-Control: no-cache`.

## Development

### The browser logs a WebSocket error for HMR

Without `server.hmr.clientPort` in `vite.config.ts`, Vite's client first tries Ktor's port. Hot reload still works after one error. Projects from `svelteInit` already set it.

### A port is already in use

A Vite or app process from an earlier run is still alive, usually because a terminal was killed. Run `./gradlew --stop`, or stop the process on that port. `svelteDevAll` stops its children even when its terminal closes.

### Types do not update after a Kotlin change

The client is generated when the app starts in development mode with `generateTs = true`. With `svelteDevAll`, that happens after every Kotlin change. With separate terminals, restart the app, or run `./gradlew svelteGenerateTs`.

## Still stuck?

Open an [issue](https://github.com/nijasc/ktor-svelte/issues) with the full message, your `install(Svelte)` and `svelte { }` blocks, and the output of `./gradlew svelteDoctor`.
