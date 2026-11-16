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
10:17:31  kotlin   ERROR  file:///home/me/shop/src/main/kotlin/shop/Routes.kt:24:16 Initializer type mismatch: expected 'Int', actual 'String'.
10:17:32  kotlin   ERROR  does not compile: 1 error
10:17:34  kotlin   INFO   compiled
```

Each source has its own color, and warnings and errors stand out. Compiler errors and browser stack traces point to your files as `file:///...:line:column` links, which IntelliJ opens at that line when you click them. Browser frames such as `http://localhost:8080/src/routes/+page.svelte:12:5` are turned into links to the file in `frontend/`. App lines keep the time and level your logging framework printed, and show the logger's class name when it isn't `Application`. Vite's start banner, its copies of browser console messages, which ktor-svelte forwards itself, and Gradle's build failure boilerplate are left out, because the ready message above already lists the URLs and the compiler errors say what failed. Colors are off when `CI` or `NO_COLOR` is set, or the terminal is `dumb`.

Stack traces from your app are shortened so the lines that matter stay on screen. Runs of frames from Netty, coroutines and the Ktor engine become one `... framework frames hidden` line, and your own frames stay. When the same error is logged again, only its first line is printed, with how often it has happened and since when:

```text
09:28:33  app      ERROR  Errors Request failed
09:28:33  app             java.lang.IllegalStateException: boom  (seen 3 times since 09:28:32, stack trace hidden)
```

The frames that come from your own source files are named first, right under the exception, each with a link that opens the file at that line. In the stack trace itself they keep their normal color, and every frame from a library is dimmed:

```
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

An error counts as the same when its log message and its exception line are the same. A restart forgets what was seen, so the first error after a Kotlin change always shows its stack trace. To see everything, run `./gradlew svelteDevAll --full-stack-traces`.

After a Kotlin change the app restarts, and every page you have open loads its data again by itself. Only the `load` functions rerun, through SvelteKit's `refreshAll`, so what you typed into a form and the state of your components stay as they are. If your sessions do not survive a restart, such as with a signing key that is generated at startup, the refreshed page finds you signed out, exactly as a manual reload would. Turn it off with `dev { refreshAfterRestart = false }`.

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

The app that `svelteDevAll` starts runs from a copy of your compiled classes and resources, taken at the moment it starts. So nothing changes underneath a running app: while the compiler rewrites class files, the app keeps answering from what it started with, and then it is restarted once, as a whole. A change in `src/main/resources` restarts it too. Ktor's own auto-reload, which watches the class folders and reloads inside the running process, has nothing to react to and stays out of the way. Without that, a Kotlin change was applied twice, once by each, and requests in between failed.

After every restart, `svelteDevAll` sums it up in one line: which file caused it, how long compiling and starting took, and whether the generated API client is different now:

```
ktor-svelte: restarted in 4.7 s after TaskRoutes.kt changed: 2.2 s to compile, 2.5 s to start. The API client changed: openapi.json, services.ts.
```

"To compile" runs from the moment the file was saved until the classes were written, so it includes the time Gradle takes to notice the change. When several files changed, the one saved last is named with the number of others. "The API client did not change" tells you the frontend has nothing new to pick up, and the list of files tells you where to look when it has.

Every restart costs you the app's startup time, so in development the app also logs what that time was spent on:

```
ktor-svelte: started in 2.3 s: 800 ms for the JVM and your code before install(Svelte), 120 ms in install(Svelte), 1.2 s in your code after it, 150 ms to open the port.
```

Most of it is usually your own module: opening the database, running migrations, loading seed data. Give those parts a name and they are listed, largest first:

```kotlin
fun Application.module() {
    val connection = startupStep("Database") { openDatabase() }
    startupStep("Migrations") { runMigrations(connection) }
    install(Svelte)
}
```

```
ktor-svelte: started in 2.3 s: ... Steps: Migrations 900 ms, Database 250 ms.
```

`startupStep` returns what its block returns and costs nothing in production, where the line is not logged. Turn the line off with `dev { startupTiming = false }`.

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

## When a port is still in use

`svelteDevAll` stops Vite, the compiler and the app when it ends, even when its terminal is closed. If it gets killed hard, such as when the Gradle daemon or the IDE crashes, they can keep running and hold their ports. The next `svelteDevAll` cleans that up by itself: it remembers the processes it started in `build/ktor-svelte/dev-processes`, and stops the ones that are still alive before it starts new ones. It tells you which:

```text
ktor-svelte: stopping what an earlier svelteDevAll of this project left running: node (PID 4242), java (PID 4310).
```

It only ever stops processes it started itself. When some other program holds Vite's port or the debug port, the task stops before starting anything and names it:

```text
Port 5173, which Vite needs, is in use by node.exe (PID 9120). svelteDevAll did not start it, so it was left alone.
Stop it, or use another port with svelte { dev { port = 5174 } }.
```

The app's own port is set in your Ktor configuration, which Gradle does not read, so a foreign program on that port shows up as the app's own "Address already in use" error in the log.

With two terminals instead of `svelteDevAll`, nothing is remembered: run `./gradlew --stop`, or stop the process listening on that port yourself.
