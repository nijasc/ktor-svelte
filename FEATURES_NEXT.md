# Features for 1.2.0

The features chosen for 1.2.0, in the order to build them. Each one is its own pull request. They all land on `main` and ship together in one release, because the organization has reached its monthly limit for releases.

The goal behind the list: the frontend and the backend should feel like one app. What Kotlin knows, TypeScript knows, and neither side repeats what the other already said.

Thirty features is more than one release usually holds. The [order](#order) puts the ones that stand alone first, so the release can be cut after any group, and the rest moves to 1.3.0 without rework.

## Scope

| # | Feature | Area | Size | Builds on |
|---|---|---|---|---|
| 1 | Kotlin redirects in the route check | Gradle plugin | Small | #202 |
| 2 | `svelteVerifyRoutes --fix` | Gradle plugin | Medium | #202 |
| 3 | Dead link check | Gradle plugin | Medium | #202 |
| 4 | Flag `window.fetch` in `load` | Gradle plugin | Small | |
| 5 | Fold repeated stack traces | Dev log | Small | |
| 6 | `svelteDoctor --fix` | Gradle plugin | Medium | #203 |
| 7 | i18n message check | Gradle plugin | Medium | |
| 8 | Retry with backoff | Generated client | Small | |
| 9 | `respondPage` helper | Server | Small | |
| 10 | Production access log | Server | Small | |
| 11 | Draft and form state helper | Generated client | Medium | #204 |
| 12 | Replay and copy as curl | Dev panel | Medium | #201 |
| 13 | Open route in IDE | Dev panel | Small | #201 |
| 14 | Server error overlay | Dev panel | Medium | #201 |
| 15 | Page scaffolding task | Gradle plugin | Medium | |
| 16 | Nav metadata from routes | Gradle plugin and generated files | Large | #202 |
| 17 | One-step `svelteUpgrade` | Gradle plugin | Medium | |
| 18 | Jump from TypeScript to Kotlin | Generated client | Small | |
| 19 | Field docs and deprecations | Generated client | Small | |
| 20 | Shared constants | Server and generated client | Medium | |
| 21 | Typed current user | Server and generated client | Medium | |
| 22 | Shared permissions | Server and generated client | Large | 21 |
| 23 | Page guards declared once | Server and Gradle plugin | Large | 21, 22 |
| 24 | Login redirect with return | Generated client | Small | 21 |
| 25 | Server-sent toasts | Server and generated client | Small | |
| 26 | Server-directed navigation | Server and generated client | Small | |
| 27 | Upload rules shared | Server and generated client | Medium | |
| 28 | Generated page loads | Server and Gradle plugin | Large | |
| 29 | Frontend errors in the server log | Server and generated files | Medium | |
| 30 | Kotlin browser test kit | New module | Large | |

## What each one does

### Route checks

1. **Kotlin redirects in the route check.** `svelteVerifyRoutes` also reads Kotlin sources, so `respondRedirect("/login")` is reported with `FrontendRoutes.login` as the replacement.
2. **`svelteVerifyRoutes --fix`.** Rewrites the string links it finds to typed route calls and adds the `#routes` import. Links it cannot read, which it shows as `...`, are left for a person.
3. **Dead link check.** The inverse check: reports internal links whose path matches no page, no API route and no static file, so a typo in an `href` is caught at build time.

### Other checks and tasks

4. **Flag `window.fetch` in `load`.** Finds API calls inside `+page.ts` and `+layout.ts` load functions that do not pass `{ fetch }`, which is SvelteKit's `window_fetch_in_load` warning, and names the file and the call to fix.
6. **`svelteDoctor --fix`.** Applies the fixes the doctor can make safely by itself: add the `#api` import, make `tsconfig.json` extend `$app/tsconfig`, rewrite `$lib` imports to `#lib`, and reinstall after an install that lost files.
7. **i18n message check.** Reports message keys that no source file uses, and calls for keys that do not exist in every locale.
15. **Page scaffolding task.** `svelteAdd --page=notes/[id]` creates `+page.svelte` and `+page.ts` with a typed load, optionally with a matching Ktor route stub, and updates `routes.ts`.
17. **One-step `svelteUpgrade`.** One task that bumps the plugin version, runs `svelteSync` and `svelteGenerateTs`, and prints the upgrade notes that apply. It is built last, so its notes can cover everything else in this release.

### Dev log and dev panel

5. **Fold repeated stack traces.** The dev log prints an identical stack trace once and then says how many more times it happened, and trims Netty and coroutine framework frames.
12. **Replay and copy as curl.** In the dev panel's request list, replay an API call or copy it as a curl command, with its body and request ID.
13. **Open route in IDE.** Click a request in the dev panel to open the Kotlin route that answered it in IntelliJ. The app already records file and line for every route in `build/ktor-svelte/routes.json`.
14. **Server error overlay.** When an API call answers 500 in development, the browser overlay shows the Kotlin exception and a trimmed stack trace, the way Vite shows frontend errors.

### Generated client

8. **Retry with backoff.** `apiConfig.retry` for GET requests that fail with a network error, a timeout or a 502, 503 or 504, with capped exponential backoff.
11. **Draft and form state helper.** A small rune helper with `draft`, `dirty`, `reset()` and `submit(fn)`, with loading and error state, that feeds validation errors into the existing `field` action.

### Server

9. **`respondPage` helper.** `Page<T>` already ships and the client's `pages()` generator reads it. What is missing is the server half of the convenience: `call.respondPage(items, next)` and a helper to read the `cursor` and a bounded `limit` from the query, so a paged route is two lines.
10. **Production access log.** One structured log line per request in production with method, path, status, duration and request ID, configured in `install(Svelte)`.

### App structure

16. **Nav metadata from routes.** A page declares its title and icon once, and a typed nav list, breadcrumbs and page titles are generated from it, instead of a hand-written sidebar.

### One contract

18. **Jump from TypeScript to Kotlin.** Every generated service function carries a link to the Kotlin route that defines it, with file and line, so from `api.notes.create` in the editor you land in `Routes.kt` in one click.
19. **Field docs and deprecations.** KDoc on DTO fields becomes JSDoc on the generated types, and `@Deprecated` on a Kotlin route or field becomes `@deprecated` in TypeScript, so the editor strikes it through. Route summaries and descriptions already reach the generated services.
20. **Shared constants.** Kotlin constants such as limits, patterns and page sizes are marked as shared and arrive as typed constants in TypeScript, so a rule such as a maximum title length is written once.

### One login

21. **Typed current user.** The session's user type is declared once in `install(Svelte)`, and the frontend gets a generated, typed `currentUser` store that loads once and clears on sign-out.
22. **Shared permissions.** Permissions are declared in Kotlin and checked on routes, and the frontend gets a typed `can('notes.delete')` from the same list, so a button hides exactly when the API would refuse.
23. **Page guards declared once.** Pages are marked in Kotlin as needing a signed-in user or a permission. The frontend gets a generated layout guard, and the same rule protects the matching API prefix.
24. **Login redirect with return.** A 401 sends the visitor to the typed login route with the page they were on, and after signing in they land back there. It replaces a hand-written `apiConfig.onUnauthorized`.

### The server talks to the UI

25. **Server-sent toasts.** `call.toast("Note saved")` in a Kotlin route shows a toast in the browser through the existing toasts library, with a kind and i18n messages.
26. **Server-directed navigation.** A route answers with `call.navigateTo(FrontendRoutes.notesId(id))` and the client follows it with `goto`, so "create, then open" needs no code on the frontend.
27. **Upload rules shared.** Accepted file types and the maximum size are declared on the Kotlin upload route, and the generated client checks them before sending and reports the same typed error.

### One data flow and one toolchain

28. **Generated page loads.** Kotlin says which API calls a page needs, and the plugin generates its `+page.ts` load with `{ fetch }` and typed data, so most pages need no hand-written load file.
29. **Frontend errors in the server log.** Uncaught browser errors in production are reported to an endpoint and logged by the app with the request ID and the page, rate limited. Today browser logs only reach the dev log.
30. **Kotlin browser test kit.** A published test library that starts the app and drives a real browser from Kotlin tests, with typed routes and the app's own DTOs, like the showcase's `browserTest`.

## Order

1. The route check group (1, 2, 3), because all three build on the matcher from #202.
2. The small independent ones (4 to 10, 18, 19). Each is a self-contained pull request.
3. The client helper and the dev panel group (11 to 14).
4. The server talks to the UI (25, 26, 27) and shared constants (20). They share one mechanism: the server adds something to a response, and the generated client acts on it.
5. One login (21, then 24, 22, 23). Typed current user comes first, because the other three read it.
6. Page scaffolding (15), nav metadata (16) and generated page loads (28). All three change how a page is described, so they are designed together.
7. Frontend errors in the server log (29) and the Kotlin browser test kit (30).
8. `svelteUpgrade` (17) last.

Groups 1 to 4 are the safe core of 1.2.0. Groups 5 to 7 hold the four large features, and any of them can move to 1.3.0.

## Open decisions

| Feature | Question | Proposed answer |
|---|---|---|
| Nav metadata | Where does a page declare its title and icon? | An export in `+page.ts`, such as `export const nav = { title, icon }`. The plugin never reads Kit config and already scans page files. The alternative is a Gradle block, which keeps it out of the frontend but away from the page. |
| Dead link check | Does it fail the build or only report? | Report only at first, because it must know the API prefixes and the static files to avoid false alarms. |
| Retry | Which defaults? | Off by default, GET only, three attempts, on network errors, timeouts and 502, 503 and 504. |
| Production access log | On or off by default? | Off by default, so an upgrade does not change what an app logs. |
| Open route in IDE | How is the IDE opened? | Through IntelliJ's built-in server on localhost, with a copyable `file:line` as the fallback when it does not answer. |
| Page scaffolding | Does it also write the Ktor route stub? | Only with `--route`, and only into a file the task creates, never into an existing one. |
| Server-sent toasts and navigation | How does the instruction travel? | Response headers that the generated client reads, so the body and its type stay unchanged. Only same-origin responses are honoured, and navigation only to paths that are pages. |
| Typed current user | Does ktor-svelte own the session? | No. The app keeps its own `Sessions` and `Authentication` setup and tells ktor-svelte how to read the user from a call. ktor-svelte only generates the endpoint and the store. |
| Shared permissions | Strings or an enum? | A Kotlin enum, so both sides get exhaustive checks and a rename is a compile error. |
| Page guards | Where are they declared? | In `install(Svelte)`, next to the routes they protect, by page name from `FrontendRoutes`. The frontend guard is a convenience and the API check is the security. |
| Generated page loads | Where does Kotlin say what a page needs? | Open. It conflicts with the rule that the plugin never reads Kit config and that files without the generated header are never overwritten, so it needs a design note before any code. |
| Shared constants | How are they marked? | An annotation on a `const val` or an object, read at the same time as the routes, written to `constants.ts` next to the client. |
| Frontend errors in the server log | On or off by default? | Off by default, with a small body limit and its own rate limit, because it is an endpoint anyone can post to. |
| Kotlin browser test kit | A new published module? | Yes, `ktor-svelte-test`, with Playwright as its only large dependency, so apps that do not use it pay nothing. |

## Considered and left out

These were offered and not chosen for 1.2.0:

- Generated client: query cache with invalidation, mock API for tests, form bindings per endpoint.
- Frontend helpers: unsaved changes guard, typed URL search params, API activity indicator, file download helper.
- Dev tools: fresh-cache reinstall after a broken install, latency and failure injection, LAN URL with a QR code.
- Gradle: bundle size report and budget, a check for mismatched plugin and runtime versions.
- Server: problem details helper, input types without server fields, typed WebSocket channels, automatic ETags for API GETs.
- One contract: enum labels.
- The server talks to the UI: live data pushed from the server.

## Release

Every feature pull request merges to `main` when it is ready, and release-please keeps one open release pull request that collects them. That pull request is merged once, after the release limit resets, so 1.2.0 counts as a single release. Fixes found in the meantime ship with it instead of as patch releases, unless one is urgent.
