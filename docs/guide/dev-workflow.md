# Dev workflow

Hot reload for Svelte and Kotlin, debugging and the dev proxy.

One command runs everything. Then open Ktor's port, not Vite's:

```bash
./gradlew svelteDevAll
```

It starts Vite, keeps Kotlin compiling and runs your app. Save a Svelte file and the page hot reloads. Save a Kotlin file and the app restarts, and with `generateTs` on your TypeScript updates a moment later, so type errors show up in the editor right away. A restart loses anything your app keeps in memory. Stopping the task stops all three. In IntelliJ, this is the `Dev` run configuration.

All three write to one console in the same shape, so you can tell them apart at a glance:

```text
10:17:17  app      INFO   Application started in 0.959 seconds.
10:17:17  vite     INFO   (ssr) connected.
10:17:31  kotlin   ERROR  src/main/kotlin/shop/Routes.kt:24:16 Initializer type mismatch: expected 'Int', actual 'String'.
10:17:32  kotlin   ERROR  does not compile: 1 error
10:17:34  kotlin   INFO   compiled
```

Each source has its own color, and warnings and errors stand out. App lines keep the time and level your logging framework printed, and show the logger's class name when it isn't `Application`. Vite's start banner, its copies of browser console messages, which ktor-svelte forwards itself, and Gradle's build failure boilerplate are left out, because the ready message above already lists the URLs and the compiler errors say what failed. Colors are off when `CI` or `NO_COLOR` is set, or the terminal is `dumb`.

When Kotlin stops compiling, the app keeps running its last good version, and the compiler errors appear in the browser in Vite's error overlay, with the file and line of each. Click the file to open it in your editor, or press Esc to hide the overlay until the errors change. It disappears once the code compiles again.

An **API** button in the bottom right corner of the page lists the last 100 API calls the app answered: method, path, status, how long the server took, and the `X-Request-Id` on hover. Calls that failed validation show the message for each field, and the button turns red while any call failed. It only exists while ktor-svelte proxies to Vite, so production pages never contain it. Turn it off with `dev { panel = false }`.

Browser console output lands in the same console as your app. Every `console.log`, `info`, `debug`, `warn` and `error`, uncaught errors and unhandled promise rejections are sent to the app and logged by the `ktor-svelte.browser` logger, with the page they came from:

```text
10:21:19 WARN  ktor-svelte.browser Probe warning {"id":7} [/notes]
10:21:19 ERROR ktor-svelte.browser Error: Probe crash
```

Objects are written as JSON, and errors with their stack trace. `console.debug` uses the DEBUG level, so it only shows when you enable it in your logging configuration. Like the panel, this only exists while ktor-svelte proxies to Vite, and only for requests from this machine. Turn it off with `dev { browserLogs = false }`.

Once the app is listening, it prints the links you need, so they do not get lost in the output:

```
ktor-svelte is ready. Open the app URL, not the Vite one:
  App:      http://localhost:8080
  API docs: http://localhost:8080/api/docs
  Vite:     http://localhost:5173
```

It also opens the app in your default browser, the first time only, so restarts do not open new tabs. It never does so in CI or on a Linux machine without a display. Turn it off with `svelte { dev { openBrowser = false } }`. The API docs line appears when `apiDocs = true`. After a restart it prints one line with the app URL instead. The URL comes from Ktor's `Responding at` log line, so keep Ktor's INFO logging on for the application logger.

For the edits you make most, install the live templates once with `./gradlew svelteLiveTemplates --install` and restart the IDE. In Kotlin, `ksget`, `kspost` and `kspage` write routes, and `ksdto` and `ksinput` write DTOs with bounds and rules. In TypeScript, `ksapi` calls the generated client, `ksload` writes a `load` function with `apiWith`, and `kserror` wraps code in typed error handling.

To debug your Kotlin code, start `Dev` as usual and then start the `Debug app` run configuration in debug mode. IntelliJ debugs Gradle tasks only when they run a JVM through Gradle, and `svelteDevAll` starts the app itself, so the app instead listens for a debugger on `127.0.0.1:5005` (see `dev.debugPort`). `Debug app` has auto restart on, so it reconnects after each restart. Outside IntelliJ, attach any JDWP debugger to that port. Two apps running `svelteDevAll` at once need different debug ports.

To do both in one click, run `Dev and debug`. It starts `Dev` and attaches the Kotlin debugger, and stopping it stops both.

To debug the frontend, run `Debug frontend` in debug mode while `Dev` runs. IntelliJ opens the app at `http://localhost:8080` in Chrome with its JavaScript debugger attached, and breakpoints in `.svelte` and `.ts` files under `frontend/` work through Vite's source maps. If your app runs on another port, change the URL in that run configuration.

At startup in development, the app logs which protections and settings are active, so a 403, 413 or 429 does not come as a surprise:

```
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

Production logs only the version and the build fingerprint.

In development, API calls that take 500 ms or longer are logged with the route that served them, so you can jump straight to the code:

```
ktor-svelte: slow API call GET /api/notes?search=milk took 812 ms (notes/Routes.kt:19)
```

Change the threshold with `dev { slowApiCall = 200.milliseconds }`, or set it to `null` to turn it off. Production never logs these.

Open `http://localhost:8080/_ktor-svelte/routes` to see every Ktor route next to every SvelteKit page, with the file and line of each route and a warning on routes that hide a page. Ask for `application/json` to get the same table as JSON. It exists only in development and answers only requests from this machine.

Prefer separate terminals? Run these instead:

```bash
./gradlew svelteDev
```

```bash
./gradlew run -Psvelte.dev=true
```

In development mode the runtime proxies to Vite if it is reachable, otherwise serves built files if they exist, and otherwise returns a 503 explaining how to start Vite. API prefixes are never proxied.

The proxy only answers requests from this machine, so your frontend source is not open to everyone on your network, even though Ktor listens on all interfaces. Requests from elsewhere get your built files, or a 403 if there are none. It never forwards cookies or `Authorization` headers. It also refuses to start if `dev.url` points at another machine. To test from your phone or use Vite in another container, set `dev { allowRemote = true }`, and only on a network you trust.

The proxy forwards HTTP only. POST, PUT, PATCH and DELETE requests are forwarded too, with their body, so Vite endpoints and SvelteKit form actions work in dev. Paths under your API prefixes are never proxied, whatever the method. `server.hmr.clientPort` in the quick start makes Vite's client connect straight to Vite. Without it HMR still works, but the browser logs one WebSocket error before Vite falls back. Either way, the browser must be able to reach Vite's port, so a remote machine or container needs that port exposed.

With two terminals, if a Gradle process is killed rather than stopped normally, Vite or the app can keep running and hold its port. Run `./gradlew --stop`, or stop the process listening on that port. `svelteDevAll` stops its children even when its terminal is closed.
