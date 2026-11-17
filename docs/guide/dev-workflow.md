# Dev workflow

One command runs Vite, the Kotlin compiler and your app together. Save a Svelte file and the page hot reloads, save a Kotlin file and the app restarts, and a panel in the page shows every API call it made.

<Badge type="info" text="Gradle" /> <Badge type="tip" text="Ktor plugin" />

## Quick start

```bash
./gradlew svelteDevAll
```

Then open Ktor's port, not Vite's: `http://localhost:8080`. In IntelliJ, this is the `Dev` run configuration, and `./gradlew dev` is the [short name](../reference/gradle.md#short-task-names).

| You change | What happens |
|---|---|
| A `.svelte` or `.ts` file | Vite hot reloads the page |
| A Kotlin file | The app restarts, open pages reload their data, and with `generateTs` on the TypeScript client updates a moment later, so type errors show up in the editor right away |
| A file in `src/main/resources` | The app restarts |
| A page folder (added, moved, deleted) | `routes.ts` updates at once, and `FrontendRoutes` follows with a restart |

A restart loses anything your app keeps in memory. Stopping the task stops all three processes.

## The ready banner

Once the app is listening, it prints the links you need, so they do not get lost in the output:

```text
ktor-svelte is ready. Open the app URL, not the Vite one:
  App:      http://localhost:8080
  API docs: http://localhost:8080/api/docs
  Vite:     http://localhost:5173
```

- It also opens the app in your default browser, the first time only, so restarts do not open new tabs. It never does so in CI or on a Linux machine without a display. Turn it off with `svelte { dev { openBrowser = false } }`.
- The API docs line appears when `apiDocs = true`.
- After a restart it prints one line with the app URL instead.
- The URL comes from Ktor's `Responding at` log line, so keep Ktor's INFO logging on for the application logger.
- With [HTTPS in development](#https-in-development) on, the banner and the browser use the HTTPS address.

## One console for everything

Vite, the compiler and the app write to one console in the same shape, so you can tell them apart at a glance:

```text
10:17:17  app      INFO   Application started in 0.959 seconds.
10:17:17  vite     INFO   (ssr) connected.
10:17:31  kotlin   ERROR  file:///home/me/shop/src/main/kotlin/shop/Routes.kt:24:16 Initializer type mismatch: expected 'Int', actual 'String'.
10:17:32  kotlin   ERROR  does not compile: 1 error
10:17:34  kotlin   INFO   compiled
```

- Each source has its own color, and warnings and errors stand out. Colors are off when `CI` or `NO_COLOR` is set, or the terminal is `dumb`.
- Compiler errors and browser stack traces point to your files as `file:///...:line:column` links, which IntelliJ opens at that line when you click them. Browser frames such as `http://localhost:8080/src/routes/+page.svelte:12:5` are turned into links to the file in `frontend/`.
- App lines keep the time and level your logging framework printed, and show the logger's class name when it isn't `Application`.
- Left out on purpose: Vite's start banner, its copies of browser console messages (ktor-svelte forwards those itself), and Gradle's build failure boilerplate. The ready banner already lists the URLs and the compiler errors say what failed.

### Shorter stack traces

Stack traces from your app are shortened so the lines that matter stay on screen. Runs of frames from Netty, coroutines and the Ktor engine become one `... framework frames hidden` line, and your own frames stay.

The frames that come from your own source files are named first, right under the exception, each with a link that opens the file at that line. In the stack trace itself they keep their normal color, and every frame from a library is dimmed:

```text
09:28:32  app      ERROR  Errors Request failed
09:28:32  app             java.lang.IllegalStateException: No such note
09:28:32  app                 your code: app.notes.NoteStore.find  file:///home/you/app/src/main/kotlin/app/notes/NoteStore.kt:42
09:28:32  app                 your code: app.notes.RoutesKt$noteRoutes$1.invokeSuspend  file:///home/you/app/src/main/kotlin/app/notes/Routes.kt:17
09:28:32  app             	at io.ktor.utils.io.ByteChannel.getClosedCause(ByteChannel.kt:350)
09:28:32  app             	at app.notes.NoteStore.find(NoteStore.kt:42)
09:28:32  app             	at app.notes.RoutesKt$noteRoutes$1.invokeSuspend(Routes.kt:17)
09:28:32  app             	... framework frames hidden
```

A frame is yours when its file name and package match a file in your main source folders. Up to three are named first, and each `Caused by` gets its own.

### Repeated errors

When the same error is logged again, only its first line is printed, with how often it has happened and since when:

```text
09:28:33  app      ERROR  Errors Request failed
09:28:33  app             java.lang.IllegalStateException: boom  (seen 3 times since 09:28:32, stack trace hidden)
```

An error counts as the same when its log message and its exception line are the same. A restart forgets what was seen, so the first error after a Kotlin change always shows its stack trace.

To see everything in full:

```bash
./gradlew svelteDevAll --full-stack-traces
```

## Hot reload and restart

### Open pages reload their data

After a Kotlin change the app restarts, and every page you have open loads its data again by itself. Only the `load` functions rerun, through SvelteKit's `refreshAll`, so what you typed into a form and the state of your components stay as they are.

If your sessions do not survive a restart, such as with a signing key that is generated at startup, the refreshed page finds you signed out, exactly as a manual reload would. Turn it off with:

```kotlin
dev { refreshAfterRestart = false }
```

### Compile errors in the browser

When Kotlin stops compiling, the app keeps running its last good version, and the compiler errors appear in the browser in Vite's error overlay, with the file and line of each. Click the file to open it in your editor, or press Esc to hide the overlay until the errors change. It disappears once the code compiles again.

### What each restart cost

After every restart, `svelteDevAll` sums it up in one line: which file caused it, how long compiling and starting took, and whether the generated API client is different now:

```text
ktor-svelte: restarted in 4.7 s after TaskRoutes.kt changed: 2.2 s to compile, 2.5 s to start. The API client changed: openapi.json, services.ts.
```

- "To compile" runs from the moment the file was saved until the classes were written, so it includes the time Gradle takes to notice the change.
- When several files changed, the one saved last is named with the number of others.
- "The API client did not change" tells you the frontend has nothing new to pick up, and the list of files tells you where to look when it has.

### Why the app runs from a copy

The app that `svelteDevAll` starts runs from a copy of your compiled classes and resources, taken at the moment it starts. So nothing changes underneath a running app: while the compiler rewrites class files, the app keeps answering from what it started with, and then it is restarted once, as a whole. A change in `src/main/resources` restarts it too.

Ktor's own auto-reload, which watches the class folders and reloads inside the running process, has nothing to react to and stays out of the way. Without that, a Kotlin change was applied twice, once by each, and requests in between failed.

## Startup timing

Every restart costs you the app's startup time, so in development the app also logs what that time was spent on:

```text
ktor-svelte: started in 2.3 s: 800 ms for the JVM and your code before install(Svelte), 120 ms in install(Svelte), 1.2 s in your code after it, 150 ms to open the port.
```

Most of it is usually your own module: opening the database, running migrations, loading seed data. Give those parts a name with `startupStep` and they are listed, largest first:

```kotlin
fun Application.module() {
    val connection = startupStep("Database") { openDatabase() }
    startupStep("Migrations") { runMigrations(connection) }
    install(Svelte)
}
```

```text
ktor-svelte: started in 2.3 s: ... Steps: Migrations 900 ms, Database 250 ms.
```

`startupStep` returns what its block returns and costs nothing in production, where the line is not logged. Turn the line off with `dev { startupTiming = false }`.

## Settings at startup

At startup in development, the app logs which protections and settings are active, so a 403, 413 or 429 does not come as a surprise:

```text
ktor-svelte settings:
  API prefixes: /api
  Dev proxy: http://localhost:5173
  Origin check: on (same host only)
  Body limit: 1 MiB, JSON depth: 64
  Rate limit: 120 writes per 1m per client, FixedWindow
  Content-Security-Policy: off while proxying to Vite
  Error details: hidden in production, shown now
  API compression: on, request IDs: on
```

Production logs only the version and the build fingerprint. See [Monitoring](./monitoring.md#startup-log).

## Slow API calls

In development, API calls that take 500 ms or longer are logged with the route that served them, so you can jump straight to the code:

```text
ktor-svelte: slow API call GET /api/notes?search=milk took 812 ms (notes/Routes.kt:19)
```

Change the threshold, or set it to `null` to turn it off. Production never logs these.

```kotlin
dev { slowApiCall = 200.milliseconds }
```

## The dev panel

An **API** button in the bottom right corner of the page opens the dev panel. It only exists while ktor-svelte proxies to Vite, so production pages never contain it. Turn it off with `dev { panel = false }`.

| Part | What it gives you |
|---|---|
| [Request log](#request-log) | The last 100 API calls, with status, timing, size, validation errors, SQL cost and duplicates |
| [Replay and curl](#replay-and-copy-as-curl) | Send a call again, or copy it as a `curl` command |
| [Open route in your editor](#open-the-route-in-your-editor) | Click a path to open the Kotlin route that answered it |
| [Server errors](#server-errors-in-the-browser) | The Kotlin exception of a failed call, as an overlay |
| [Save fixtures](#save-fixtures) | The calls of this page as JSON for frontend tests |
| [Status](#status) | Versions, health, Vite, refusals and the settings in effect |
| [Environment](#environment) | Config, environment variables and system properties the app sees, secrets hidden |
| [Migrations](#migrations) | Which Flyway migrations ran, which are pending, and whether the last one failed |
| [Memory and threads](#memory-and-threads) | Heap, garbage collection and threads of the running app, live |
| [Cookies](#cookie-inspector) | What this browser sends, as the server reads it, with Clear buttons |
| [Routes](#route-map) | Every page and API route with the file behind it |
| [Accessibility](#accessibility-check) | An axe check of the page you are looking at |
| [Public config](#public-config) | Try other `publicConfig` values in this browser |
| [Theme colors and Not translated](#theme-colors-and-not-translated) | Shown when DaisyUI or i18n are on |

### Request log

The panel lists the last 100 API calls the app answered: method, path, status, how long the server took, how big the answer was, and the `X-Request-Id` on hover. Calls that failed validation show the message for each field, and the button turns red while any call failed. **Clear** empties the list.

**Database cost.** When your app uses [Exposed](https://www.jetbrains.com/exposed/), each call also shows what it cost in the database, such as `7 SQL, 12 ms`: the number of statements it ran and the time they took together. When one statement ran five times or more in a single call, the line says so in yellow, with the statement on hover. That is the usual sign of a query inside a loop, the kind that is fast with ten rows and slow with ten thousand.

- No setup and no code: ktor-svelte registers itself with Exposed when both are in the app.
- Statements count for the call that started them, also when they run on another thread or in a child coroutine.
- It works with Exposed 1.0 and newer, and only measures while the dev panel is on.

**Payload size.** Each call shows how big its answer was, such as `48.2 KB`, measured before compression, so it is what the server had to build and the browser has to parse. Hover the size to see the three largest fields of a JSON answer:

- A field of the answer counts with the size of its JSON, such as `items 47.9 KB (120 items)`.
- For a list of objects the fields of all its items add up, such as `items[].description 31.0 KB`, so a field that is small once but repeated in every row stands out.
- From 100 KB on the size turns yellow and the largest fields are written under the call, since that is usually a list that should be paged or a field the page does not need.

Streamed answers, such as server-sent events, have no size.

**Asked for twice.** When a page asks for the same thing twice, the second call is marked: `asked for twice within 12 ms, from src/routes/+layout.svelte:33 and from src/routes/board/+page.svelte:18`. That happens easily when a layout and a page both load the same data, and it costs a second trip to the server and the database for nothing. The two files tell you where to remove one, or to share the result.

- Only `GET` calls made within two seconds of each other count.
- A replay from the panel does not count.
- The line numbers are those of the code the browser runs, which can be a few lines off your source.

### Replay and copy as curl

Each call has two buttons:

- **Replay** sends it again, with the same method, path, headers and body, so you can repeat a call after changing the Kotlin code without clicking through the page again.
- **curl** copies it as a `curl` command, with its body and its `X-Request-Id`, to paste into a terminal or a bug report.

::: warning What curl carries
The command carries no cookies, so add your session yourself for a call that needs one. It carries the body as it was sent, except for fields you marked [`@Sensitive`](../features/validation.md#sensitive-fields), so look at it before you share it.
:::

The buttons work for calls this page made, since that is where the body is known, and for every `GET`. For other calls, such as an upload or one from another tab, they are disabled.

### Open the route in your editor

Click the path of a call and the Kotlin route that answered it opens in your editor, at its line. Hovering a call shows the file and line.

The app hands this to Vite's "open in editor", the same one Vite's error overlay uses: it finds the editor that is running, or takes the one named in the `LAUNCH_EDITOR` environment variable, such as `idea` or `code`. Only this machine can ask for it, and only for files of routes that are in the list.

### Server errors in the browser

When an API call from the page fails with an exception on the server, the browser shows it the way Vite shows a frontend error: an overlay with the exception, its message and the stack trace without the framework frames, and a link to the first line of your own code in it. Click it or press Escape to close it. You do not have to switch to the terminal to see why a call answered 500.

- The overlay only appears for calls the open page made itself, and only for exceptions that reach Ktor.
- An exception your own `StatusPages` handler turns into an answer is yours, and shows up as its status in the list.
- Turn it off with `dev { errorOverlay = false }`. It needs the panel, so `panel = false` turns it off too.

### Save fixtures

**Save fixtures** in the panel's header downloads the calls this page made, with their answers, as a JSON file that [frontend tests can replay](../features/calling-the-api.md#fixtures-for-frontend-tests) without a backend.

### Status

The **Status** section shows what the app is running with, in plain rows:

- the versions of ktor-svelte, Ktor, Kotlin and Java,
- the version and commit of your own build,
- whether your health checks pass, and whether Vite is reachable,
- how many requests the security guards refused,
- the settings in effect, such as the API prefixes, the body limit and the rate limits.

It is what the [status endpoint](../features/endpoints.md#status-endpoint) and the startup log tell you, without `statusEndpoint = true` and without reading JSON. Open it again to refresh it.

### Environment

The **Environment** section shows what the running app sees, so you can answer "which database is it talking to" or "did my variable arrive" without a debugger:

- **Config**: every value of the Ktor config the app runs with (`application.yaml` or `application.conf`, after substitutions), as dotted names such as `ktor.deployment.port`.
- **Environment variables**: what the app process got, which is not always what your terminal has, for example when the IDE starts it.
- **System properties**: the `-D` values, without the JVM's own ones such as `java.version`.

Type into the filter to narrow it down by name or value.

Secrets are hidden as `***`:

- a value whose name has a word such as `password`, `secret`, `token`, `key`, `auth`, `session` or `salt` in it, such as `DATABASE_PASSWORD`, `apiKey` or `jwt.secret`,
- a value whose name is a field you marked [`@Sensitive`](../features/validation.md#sensitive-fields),
- the password inside a URL, such as `postgres://app:***@db/app`, and `password=` or `token=` parameters in a connection string.

The hiding goes by names, so a secret in a variable with a plain name, such as `DB=...`, is shown. Like the rest of the panel, it only answers this machine unless `allowRemote` is on.

### Migrations

The **Migrations** section shows the state of the database schema, when your app runs [Flyway](https://documentation.red-gate.com/flyway) migrations with Exposed:

- every migration with its version, description, state and when it ran,
- how many are pending, which happens when you added a migration file and the app has not run it yet,
- whether the last one that ran failed, in red.

A pending or failed migration is usually why a new column "does not exist". The section asks Flyway each time you open it, through the database your app connected with `Database.connect`, and changes nothing.

- It needs `flyway-core` and Exposed in the app. Without Flyway on the classpath the section says so; ktor-svelte itself does not depend on it.
- It reads Flyway's default setup: migrations in `src/main/resources/db/migration` and the history in `flyway_schema_history`. With other `locations` or another `table`, the list may not match what your app runs.

### Memory and threads

The **Memory and threads** section shows how the running app is doing, refreshed every two seconds while it is open:

- a bar of the heap in use against the limit, and the heap in numbers: used, taken from the system, and the `-Xmx` limit,
- memory outside the heap, such as loaded classes,
- each garbage collector with how often it ran and how long it took in all,
- the threads: live, daemon, the peak, how many were started since the start, and how many are running, waiting or blocked,
- the processors the JVM sees, and how long the app has been up.

**Collect garbage** asks the JVM for a full collection. What is still in use afterwards is what the app really holds, so a heap that keeps growing after each collection while you click through a page points to a leak. A thread count that only goes up points to threads or coroutines that never end.

The numbers come from the JVM's standard management beans, so they need no agent and no library.

### Cookie inspector

The **Cookies** section shows what this browser sends, as the server reads it.

- Each cookie is listed with its text.
- A [typed cookie](../recipes/sessions.md#typed-cookies) also shows its type, its options and the value the server reads from it. It is listed even when the browser has not set it, with the default it reads as. A value that does not fit its type is marked.
- A cookie that holds a Ktor session shows the session object the server gets from it, with [sensitive fields](../features/validation.md#sensitive-fields) hidden.
- That includes `HttpOnly` cookies, which the browser's own tools show but scripts cannot read.

**Clear** next to a cookie ends that one, and **Clear all** ends every cookie the browser sent, which signs you out. It is the quick way to see the app as a first-time visitor. The server ends them, so `HttpOnly` cookies go too. A cookie that was set for a path other than `/` and is not a typed cookie cannot be ended this way, because the request does not say which path it belongs to.

### Route map

The **Routes** section is a map of the whole app: every page with the Svelte file behind it, and every API route with its method and the Kotlin file and line that answers it.

- Type into the filter to narrow it down by path, method or file name.
- A page without parameters is a link that takes you there.
- A file name opens that file in your editor.
- When `apiDocs` is on there is a link to the API docs.

It answers "where does this URL come from" without searching the project. A similar table is also a page of its own, see [Route table](#route-table).

### Accessibility check

The **Accessibility** section checks the page you are looking at with [axe](https://github.com/dequelabs/axe-core), the engine behind most accessibility tests, so you find a missing label or a low contrast while you build the page and not when CI or a user does.

- Open the section and it lists what axe found, worst first as axe ranks it, with how many elements each problem affects and a link to the rule's explanation.
- Click a problem and the elements get a red outline and scroll into view.
- **Check again** runs it once more after you changed something.

It needs `axe-core` in your frontend, and tells you so when it is missing:

```bash
cd frontend && bun add -d axe-core
```

axe only sees what is on the screen at that moment, so open the dialog or the menu you want checked first. A page without findings is not proof that it is accessible. It is the automatic part of the check. To check every page in CI, use [`svelteVerifyA11y`](./browser-tests.md#accessibility).

### Public config

The **Public config** section lists the values of your [`publicConfig`](../features/runtime-config.md) and lets you change them for this browser only: flip a feature flag, lower a limit, see the page with another name, without editing a config file and without a restart.

- Values are written as JSON, so text goes in double quotes.
- **Apply and reload** saves them in the browser's local storage and reloads the page. From then on `loadPublicConfig()` and `readPublicConfig()` return the changed values in this browser.
- A yellow "config changed" mark on the API button reminds you.
- **Reset all** goes back to what the server sends.

Only the browser is told something different. The server keeps its own values, so a limit the server enforces is still enforced, and nobody else sees the change. It exists in development only, like the rest of the panel.

### Theme colors and Not translated

Two more sections appear when the matching library is on:

- **Theme colors**, with [DaisyUI](../features/frontend-libraries.md#daisyui): a color picker for each theme color that recolors the open page at once, and **Copy for Gradle** to take the result into `build.gradle.kts`.
- **Not translated**, with [i18n](../features/frontend-libraries.md#i18n), when you look at the app in another language than the default one: the messages on the page whose text is the same as in the default language.

## Browser console in the server log

Browser console output lands in the same console as your app. Every `console.log`, `info`, `debug`, `warn` and `error`, uncaught errors and unhandled promise rejections are sent to the app and logged by the `ktor-svelte.browser` logger, with the page they came from:

```text
10:21:19 WARN  ktor-svelte.browser Probe warning {"id":7} [/notes]
10:21:19 ERROR ktor-svelte.browser Error: Probe crash
```

- Objects are written as JSON, and errors with their stack trace.
- `console.debug` uses the DEBUG level, so it only shows when you enable it in your logging configuration.
- Like the panel, this only exists while ktor-svelte proxies to Vite, and only for requests from this machine.
- Turn it off with `dev { browserLogs = false }`.

In production, [frontend error reporting](./monitoring.md#errors-from-the-browser) does the part of this that matters there.

## Route table

Open `http://localhost:8080/_ktor-svelte/routes` to see every Ktor route next to every SvelteKit page, with the file and line of each route and a warning on routes that hide a page. Ask for `application/json` to get the same table as JSON:

```bash
curl -H 'Accept: application/json' http://localhost:8080/_ktor-svelte/routes
```

It exists only in development and answers only requests from this machine.

## Debugging

### Kotlin

Start `Dev` as usual and then start the `Debug app` run configuration in debug mode.

IntelliJ debugs Gradle tasks only when they run a JVM through Gradle, and `svelteDevAll` starts the app itself, so the app instead listens for a debugger on `127.0.0.1:5005` (see `dev.debugPort` in the [Gradle settings](../reference/gradle.md)). `Debug app` has auto restart on, so it reconnects after each restart.

- Outside IntelliJ, attach any JDWP debugger to that port.
- Two apps running `svelteDevAll` at once need different debug ports.
- `debugPort = 0` turns the debugger port off.

```kotlin
svelte {
    dev {
        debugPort = 5006
    }
}
```

### Both in one click

Run `Dev and debug`. It starts `Dev` and attaches the Kotlin debugger, and stopping it stops both.

### The frontend

Run `Debug frontend` in debug mode while `Dev` runs. IntelliJ opens the app at `http://localhost:8080` in Chrome with its JavaScript debugger attached, and breakpoints in `.svelte` and `.ts` files under `frontend/` work through Vite's source maps. If your app runs on another port, change the URL in that run configuration.

## IDE run configurations

`svelteInit` writes IntelliJ run configurations to `.run/` for you. In an existing project, write them with:

```bash
./gradlew svelteGenerateRunConfigurations
```

It keeps any configuration that already exists.

| Configuration | What it runs |
|---|---|
| `Dev` | `svelteDevAll` |
| `Dev and debug` | `Dev`, with the Kotlin debugger attached |
| `Debug app` | Attaches the debugger to the app `svelteDevAll` started |
| `Debug frontend` | Chrome with the JavaScript debugger on the app |
| `Ktor` | The app on its own |
| `Vite` | Vite on its own |
| `Generate TypeScript` | `svelteGenerateTs` |
| `Build JAR` | The runnable JAR |
| `Type check frontend` | The frontend's type check |
| `Update frontend dependencies` | `svelteUpdateDependencies` |

## Live templates

For the edits you make most, install the live templates once and restart the IDE:

```bash
./gradlew svelteLiveTemplates --install
```

| Template | Language | Writes |
|---|---|---|
| `ksget` | Kotlin | A GET route |
| `kspost` | Kotlin | A POST route that receives a validated body |
| `kspage` | Kotlin | A paged GET route |
| `ksdto` | Kotlin | A serializable DTO |
| `ksinput` | Kotlin | A request body with bounds and rules |
| `ksapi` | TypeScript | A call through the generated client |
| `ksload` | TypeScript | A `load` function with `apiWith` |
| `kserror` | TypeScript | Typed error handling around your code |

Type the name and press Tab. Without `--install`, the task only writes the templates to `build/ktor-svelte/live-templates/`. `--install` copies them into every IntelliJ IDEA and WebStorm configuration it finds, and `--config-dir=...` picks another JetBrains folder.

## Separate terminals

Prefer separate terminals? Run these instead:

```bash
./gradlew svelteDev
```

```bash
./gradlew run -Psvelte.dev=true
```

`svelteDev` starts Vite on `dev.port`. `-Psvelte.dev=true` skips the frontend build and starts the app with `-Dio.ktor.development=true`. With two terminals there is no restart on Kotlin changes, no restart summary and no cleanup of [leftover processes](#when-a-port-is-still-in-use).

## The dev proxy

In development mode the runtime proxies page requests to Vite. In order:

1. If Vite is reachable, the page comes from Vite.
2. Otherwise it serves built files if they exist.
3. Otherwise it returns a 503 explaining how to start Vite.

API prefixes are never proxied, whatever the method.

**Only this machine.** The proxy only answers requests from this machine, so your frontend source is not open to everyone on your network, even though Ktor listens on all interfaces. Requests from elsewhere get your built files, or a 403 if there are none. It never forwards cookies or `Authorization` headers. It also refuses to start if `dev.url` points at another machine.

To test from your phone or use Vite in another container, allow it, and only on a network you trust:

```kotlin
dev { allowRemote = true }
```

**Methods.** The proxy forwards HTTP only. POST, PUT, PATCH and DELETE requests are forwarded too, with their body, so Vite endpoints and SvelteKit form actions work in dev.

**Hot reload connection.** `server.hmr.clientPort` in `vite.config.ts` makes Vite's client connect straight to Vite, and `protocol: 'ws'` keeps that working on a page served over HTTPS. Without it HMR still works, but the browser logs one WebSocket error before Vite falls back. Either way, the browser must be able to reach Vite's port, so a remote machine or container needs that port exposed.

**Vite somewhere else.** `dev.url` sets the Vite address, and the `KTOR_SVELTE_DEV_SERVER` environment variable overrides it. `dev.mode` decides when the proxy is on: `Auto` follows Ktor's development mode, `Always` and `Never` force it.

## HTTPS in development

Some things only work on a page served over HTTPS: cookies marked `Secure`, service workers on any host but `localhost`, and sign-in providers that refuse plain HTTP callback URLs. To develop with them, turn HTTPS on:

```kotlin
svelte {
    dev {
        https = true
        httpsPort = 8443
    }
}
```

`svelteDevAll` then serves the app at `https://localhost:8443` as well as on its usual port, and the ready banner and the browser it opens use the HTTPS address. A small proxy in the Gradle task ends TLS and passes each request on to the app, WebSockets included. Your app keeps listening on plain HTTP, so `application.conf` and `embeddedServer` stay as they are.

### The certificate

The certificate is made on the first run with the JDK's `keytool`: a development certificate authority for your user, and a certificate for `localhost`, `127.0.0.1` and `::1` signed by it. Both live in `~/.ktor-svelte/dev-https`, and every project on your computer shares them. The certificate for `localhost` is renewed after about a year.

Your browser does not trust the authority until you tell it to. The first run prints the command for your system, such as `certutil -addstore -user Root` on Windows. ktor-svelte never runs it for you. Firefox keeps its own list, so import `ca.crt` there under Settings, Certificates, Authorities. Without that step the page still works after you accept the browser's warning, but service workers and some sign-in providers refuse an untrusted certificate.

::: warning Keep the folder to yourself
Anyone who has the files in `~/.ktor-svelte/dev-https` can sign certificates your browser then trusts, so do not copy that folder to other machines. When you stop using HTTPS in development, delete the folder and remove the authority from your system's trust store.
:::

### What the app sees

In development mode the app treats requests from this proxy as HTTPS: `call.request.origin.scheme` is `https` and the port is the HTTPS port, so redirects, absolute URLs and `Secure` cookies come out right. It only does so for requests from this machine that carry the proxy's mark, and never outside development mode.

### Hot reload over HTTPS

Vite's hot reload still talks to Vite over plain `ws` on its own port, which browsers allow from a secure page on `localhost`. Projects from `svelteInit` and the generated `vite.config.ts` set `protocol: 'ws'` for that. A hand-written `vite.config.ts` needs it too:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: { hmr: { clientPort: 5173, protocol: 'ws' } }
});
```

## When a port is still in use

`svelteDevAll` stops Vite, the compiler and the app when it ends, even when its terminal is closed. If it gets killed hard, such as when the Gradle daemon or the IDE crashes, they can keep running and hold their ports.

The next `svelteDevAll` cleans that up by itself: it remembers the processes it started in `build/ktor-svelte/dev-processes`, and stops the ones that are still alive before it starts new ones. It tells you which:

```text
ktor-svelte: stopping what an earlier svelteDevAll of this project left running: node (PID 4242), java (PID 4310).
```

It only ever stops processes it started itself. When some other program holds Vite's port or the debug port, the task stops before starting anything and names it:

```text
Port 5173, which Vite needs, is in use by node.exe (PID 9120). svelteDevAll did not start it, so it was left alone.
Stop it, or use another port with svelte { dev { port = 5174 } }.
```

- The app's own port is set in your Ktor configuration, which Gradle does not read, so a foreign program on that port shows up as the app's own "Address already in use" error in the log.
- With two terminals instead of `svelteDevAll`, nothing is remembered: run `./gradlew --stop`, or stop the process listening on that port yourself.

## Dev settings

Everything on this page that you can turn on or off, in one place. Gradle settings go in `svelte { dev { } }`, Ktor settings in `install(Svelte) { dev { } }`.

| Setting | Where | Default | What it does |
|---|---|---|---|
| `port` | Gradle | `5173` | Port Vite runs on |
| `script` | Gradle | `"dev"` | `package.json` script that starts Vite |
| `debugPort` | Gradle | `5005` | Debugger port of the app, on `127.0.0.1`. `0` turns it off |
| `openBrowser` | Gradle | `true` | Opens the app once it is ready, the first time only |
| `https` | Gradle | `false` | Serves the app over HTTPS too |
| `httpsPort` | Gradle | `8443` | Port of the HTTPS address, on `127.0.0.1` |
| `url` | Ktor | `"http://localhost:5173"` | Vite address. `KTOR_SVELTE_DEV_SERVER` overrides it |
| `mode` | Ktor | `DevMode.Auto` | When the proxy is on: `Auto`, `Always`, `Never` |
| `allowRemote` | Ktor | `false` | Lets other machines use the dev proxy |
| `panel` | Ktor | `true` | The dev panel |
| `errorOverlay` | Ktor | `true` | Server exceptions as a browser overlay. Needs `panel` |
| `browserLogs` | Ktor | `true` | Browser console in the server log |
| `refreshAfterRestart` | Ktor | `true` | Open pages rerun their `load` after a restart |
| `slowApiCall` | Ktor | `500.milliseconds` | Logs slower API calls. `null` turns it off |
| `startupTiming` | Ktor | `true` | Logs what the startup time was spent on |

## Full example

A project that runs Vite on another port, debugs on another port and develops over HTTPS:

::: code-group

```kotlin [build.gradle.kts]
svelte {
    dev {
        port = 5174
        debugPort = 5006
        openBrowser = false
        https = true
    }
}
```

```kotlin [Application.kt]
install(Svelte) {
    generateTs = true
    apiDocs = true
    dev {
        url = "http://localhost:5174"
        slowApiCall = 200.milliseconds
        refreshAfterRestart = false
    }
}
```

:::

## Good to know

- Everything on this page exists in development only. Production pages carry no panel, no browser logging and no proxy.
- The proxy, the panel, the route table and "open in editor" only answer requests from this machine.
- For checks and helper tasks you run while developing, see [Checks and tooling](./checks-and-tooling.md).
- For problems while developing, see [Troubleshooting](../reference/troubleshooting.md#development).
