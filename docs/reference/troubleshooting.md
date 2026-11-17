# Troubleshooting

Find the message you see, then its cause and fix.

::: tip Start with the doctor
Run `./gradlew svelteDoctor` first: it checks the frontend setup and lists most problems on this page at once. Add `--fix` and it repairs the ones that need no decision from you: a missing `#api` import, a `tsconfig.json` that does not extend `$app/tsconfig`, `$lib` imports left over from SvelteKit 2, and a `node_modules` folder whose packages lost their files, which it deletes so the next build installs it again. It prints each change as `FIXED`, and everything else stays a finding for you. See [svelteDoctor](../guide/checks-and-tooling.md#sveltedoctor).
:::

## At a glance

| You see | Go to |
|---|---|
| The build fails before the frontend is built | [Build](#build) |
| The app does not start | [Startup](#startup) |
| A request answers 403, 413, 429 or 503 | [Requests](#requests) |
| Something is off while `svelteDevAll` runs | [Development](#development) |
| A check, hook or browser test fails | [Checks and tests](#checks-and-tests) |

## Build

### ktor-svelte found no lockfile

- **Cause:** the frontend has no `bun.lock`, `pnpm-lock.yaml`, `package-lock.json` or `yarn.lock`, so the plugin cannot tell which package manager to use.
- **Fix:** install the dependencies once with your package manager, or set `svelte { packageManager = PackageManager.Bun }`.

### ktor-svelte could not find bun on PATH

- **Cause:** the package manager the lockfile asks for is not installed, or Gradle cannot see it.
- **Fix:** install it and restart the Gradle daemon with `./gradlew --stop` so it picks up the new `PATH`, or set `packageManager` to one you have.
- **Or:** let the plugin download Bun for you with `svelte { bunVersion = "1.3.14" }`. See [Pin Bun](./gradle.md#pin-bun).

### ktor-svelte found no HTML files

- **Cause:** the frontend build produced no pages where the plugin looked.
- **Fix:** check that the frontend uses `adapter-static`, and that `svelte { outputDir }` matches the adapter's `pages` option. The default for both is `build`.

### svelte.outputDir must be a path inside svelte.frontendDir

- **Cause:** `outputDir` points outside the frontend folder.
- **Fix:** give it relative to `frontendDir`, such as `outputDir = "build"`.

### ktor-svelte has no setting 'x' in svelte { }

- **Cause:** a Groovy build script assigns a setting that does not exist, usually a typo.
- **Fix:** the message names the closest setting and lists all of them. See [Gradle settings](./gradle.md) for what each one does.

### Frontend libraries are out of sync

- **Cause:** `build.gradle.kts` changed the frontend libraries, but `package.json`, the lockfile or the generated files were not updated.
- **Fix:** run `./gradlew svelteSync` and commit the result.

### ktor-svelte generates vite.config.ts, but found your own version

- **Cause:** the plugin needs to own `vite.config.ts` and the hooks files once frontend libraries are on.
- **Fix:** move your own Vite settings to `vite.user.ts`, merge custom hooks by hand, delete those files and run `svelteSync`.

### Generated TypeScript is out of date

- **Cause:** `check` runs `svelteVerifyTs`, which found that a route or DTO changed but the committed client did not.
- **Fix:** run `./gradlew svelteGenerateTs`, or start the app in development mode, and commit the files in `frontend/src/lib/api`.

### ktor-svelte found secret values in the frontend build

- **Cause:** `svelteVerifyLeaks` found the value of a secret environment variable or a `.env` entry in the built files.
- **Fix:** read that value on the server only. A value that is meant to be public belongs in `svelte { buildEnv }`, or gets a name that starts with `PUBLIC_`. See [Secrets in the frontend build](../features/runtime-config.md#secrets-in-the-frontend-build).

### undefined is not an object (evaluating 'ts.sys.readFile')

- **Cause:** the frontend uses TypeScript 7, which SvelteKit 3 cannot load yet. It usually arrives through an automatic dependency update.
- **Fix:** set `"typescript": "^6.0.0"` in `frontend/package.json` and install again.
- **Keep it away:** tell your update bot to ignore major versions of `typescript`.

### Cannot find module 'rolldown/parseAst', or another package that is installed

- **Cause:** the install was cut short: the package's folder exists in `node_modules`, but its files do not, and the package manager still reported success. `./gradlew svelteDoctor` names the packages that lost their files.
- **Fix:** run `./gradlew svelteClean` and install again.
- **If they come back empty:** the package manager's cache is the cause, so clear it with the command `svelteDoctor` prints, such as `bun pm cache rm`, and install once more.

### The frontend build failed with exit code 1

- **Cause:** ktor-svelte hides the package manager and Vite output while it succeeds and prints all of it when it fails, above this message. The real error is there.
- **Fix:** to see the output every time, add `-Psvelte.verbose=true`.

## Startup

### ktor-svelte found no frontend build

- **Cause:** the app runs in production mode, but the JAR has no frontend in it.
- **Fix:** build it with the Gradle plugin and without `-Psvelte.skip=true` or `-Psvelte.dev=true`.
- **During development:** start it with `-Dio.ktor.development=true`, or use `svelteDevAll`, which does that for you.

### ktor-svelte manifest has format version 2, but this runtime reads version 1

- **Cause:** the Gradle plugin and `ktor-svelte-server` have different versions.
- **Fix:** use the same version for both. With `addRuntimeDependency` on, which is the default, the plugin adds the matching runtime for you.

### ContentNegotiation is already installed

- **Cause:** you install `ContentNegotiation` yourself and also list formats in `transport { }`.
- **Fix:** keep one of the two. The same applies to `Compression` and `compression()`.

### RequestBodyLimit is already installed, or RateLimit is already installed

- **Cause:** ktor-svelte installs these plugins for its body and rate limits.
- **Fix:** to use your own, set `maxApiBodySize = null` or `rateLimit { enabled = false }`.

### ktor-svelte will not proxy to this URL because it is not on this machine

- **Cause:** `dev { url }` or `KTOR_SVELTE_DEV_SERVER` points at another host.
- **Fix:** use a loopback address, or set `dev { allowRemote = true }` if you trust that machine.

### Install the Svelte plugin before calling svelte() in routing

- **Cause:** with `routing = SvelteRouting.Manual`, `svelte()` ran before the plugin was installed.
- **Fix:** call `install(Svelte)` before the `routing { }` block that calls `svelte()`.

### errorCodes, currentUser, permissions or preferences is already set

- **Cause:** an app has one enum of error codes, one kind of signed-in user, one enum of permissions and one class of preferences, and one of them was declared twice.
- **Fix:** keep one declaration in `install(Svelte)`.

### The Ktor route GET /about hides the frontend page about.html

- **Cause:** a route in your app answers the same path as a prerendered page, so the page is never served.
- **Fix:** move the route under your API prefix, or rename the page.

## Requests

### 403: Cross-origin API request refused

- **Cause:** the origin check refused a write from another site.
- **Fix:** if that site is yours, such as a separate admin frontend, add it with `allowedOrigins("https://admin.example.com")`.
- **Behind a proxy that changes the host:** install `XForwardedHeaders` so the app sees the host the browser used. See [Security](../security.md#api-request-guards).

### 413: Request body is larger than the limit

- **Cause:** API bodies are limited to 1 MiB.
- **Fix:** raise `maxApiBodySize` for apps that accept uploads.

### 400: Request JSON is nested deeper than 64 levels

- **Cause:** the JSON body nests deeper than `maxJsonDepth`, or has a string longer than `maxJsonStringLength`.
- **Fix:** raise the limit if your API really takes such bodies, or set it to `null`. See [Security](../security.md#api-request-guards).

### 429: Too Many Requests

- **Cause:** a client sent more than 120 writes to API paths in a minute, or hit a named limit.
- **Behind a proxy:** install `XForwardedHeaders`, or all users share one limit.
- **Fix:** raise `rateLimit { apiWrites = ... }` if your app writes a lot.

### 503 in development: no Vite and no build

- **Cause:** the app runs in development mode, Vite is not running and there is no frontend build.
- **Fix:** start everything with `./gradlew svelteDevAll`, or Vite alone with `./gradlew svelteDev`.

### 403: The dev proxy only answers requests from this machine

- **Cause:** you opened the app from another device while it runs in development mode.
- **Fix:** set `dev { allowRemote = true }` on a network you trust.

### A page shows a blank screen after a deploy

- **Cause:** the browser has an old page that loads chunks which no longer exist. ktor-svelte answers those with 404 on purpose, so SvelteKit reloads the page.
- **Fix:** if it does not reload, check that nothing in front of the app caches HTML: pages are sent with `Cache-Control: no-cache`.

## Development

### The browser logs a WebSocket error for HMR

- **Cause:** without `server.hmr.clientPort` in `vite.config.ts`, Vite's client first tries Ktor's port. Hot reload still works after one error.
- **Fix:** set `server: { hmr: { clientPort: 5173, protocol: 'ws' } }`. Projects from `svelteInit` already set it.

### A port is already in use

- **Cause:** a Vite or app process from an earlier run is still alive, usually because a terminal was killed.
- **Fix:** `svelteDevAll` stops what an earlier `svelteDevAll` left running by itself. For anything else, run `./gradlew --stop`, or stop the process on that port. See [When a port is still in use](../guide/dev-workflow.md#when-a-port-is-still-in-use).

### Port 5173, which Vite needs, is in use by another program

- **Cause:** a program `svelteDevAll` did not start holds Vite's port or the debug port, so the task stops before starting anything.
- **Fix:** stop that program, or use another port with `svelte { dev { port = 5174 } }` or `dev { debugPort = ... }`.

### Types do not update after a Kotlin change

- **Cause:** the client is generated when the app starts in development mode with `generateTs = true`.
- **Fix:** with `svelteDevAll`, that happens after every Kotlin change. With separate terminals, restart the app, or run `./gradlew svelteGenerateTs`.

### The browser does not trust the HTTPS certificate in development

- **Cause:** the development certificate authority in `~/.ktor-svelte/dev-https` is not in your trust store yet.
- **Fix:** run the command the first `svelteDevAll` printed, such as `certutil -addstore -user Root` on Windows. In Firefox, import `ca.crt` under Settings, Certificates, Authorities. See [HTTPS in development](../guide/dev-workflow.md#https-in-development).

### The console warns with window_fetch_in_load

- **Cause:** an API call in a `load` function does not use SvelteKit's `fetch`.
- **Fix:** use `apiWith(event)`, or pass `{ fetch }` as the last argument. `./gradlew svelteVerifyLoads` finds every such call. See [In load functions](../features/calling-the-api.md#in-load-functions).

### The page signs me out after every Kotlin change

- **Cause:** your sessions do not survive a restart, such as with a signing key that is generated at startup.
- **Fix:** read the key from the environment, so it stays the same across restarts. To stop pages from reloading their data after a restart, set `dev { refreshAfterRestart = false }`.

## Checks and tests

### svelteDoctor found problems to fix

- **Cause:** at least one finding is an `ERROR`.
- **Fix:** each line says what to do. `./gradlew svelteDoctor --fix` repairs the ones that need no decision.

### The pre-commit hook already exists and was not written by ktor-svelte

- **Cause:** another tool installed a pre-commit hook, and `svelteGitHooks` never replaces it.
- **Fix:** call `./gradlew formatCheck svelteVerifySync` from that hook yourself, or delete it and run `svelteGitHooks` again.

### Not inside a git repository, so there is nowhere to install a hook

- **Cause:** `svelteGitHooks` ran in a folder that is not a git clone.
- **Fix:** run `git init` first, or run the task in the clone.

### The app did not answer within 60 seconds

- **Cause:** a browser test, `svelteSmokeTest` or `svelteVerifyA11y` started the packaged app, and it did not answer in time or stopped. Usually a variable or a database it needs is missing.
- **Fix:** read the app's output: `build/ktor-svelte/smoke-test.log` for the smoke test, the file in `app.log` in a browser test. Give the app what it needs, or more time with `--start-seconds` for the smoke test.

### The app ignores the port in tests

- **Cause:** the port is passed as the `PORT` variable and as `-port`, and the app reads neither.
- **Fix:** read one of them, as `EngineMain` does with `-port`.

## Still stuck?

Open an [issue](https://github.com/nijasc/ktor-svelte/issues) with the full message, your `install(Svelte)` and `svelte { }` blocks, and the output of `./gradlew svelteDoctor`.
