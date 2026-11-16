# Features for 1.2.0

The features chosen for 1.2.0, in the order to build them. Each one is its own pull request. They all land on `main` and ship together in one release, because the organization has reached its monthly limit for releases.

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
| 9 | `Page<T>` on the Kotlin side | Server | Small | |
| 10 | Production access log | Server | Small | |
| 11 | Draft and form state helper | Generated client | Medium | #204 |
| 12 | Replay and copy as curl | Dev panel | Medium | #201 |
| 13 | Open route in IDE | Dev panel | Small | #201 |
| 14 | Server error overlay | Dev panel | Medium | #201 |
| 15 | Page scaffolding task | Gradle plugin | Medium | |
| 16 | Nav metadata from routes | Gradle plugin and generated files | Large | #202 |
| 17 | One-step `svelteUpgrade` | Gradle plugin | Medium | |

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

9. **`Page<T>` on the Kotlin side.** A `Page<T>` response type and a `call.respondPage(items, next)` helper that match the client's existing `pages()` generator, so cursor pagination needs no hand-written DTO.
10. **Production access log.** One structured log line per request in production with method, path, status, duration and request ID, configured in `install(Svelte)`.

### App structure

16. **Nav metadata from routes.** A page declares its title and icon once, and a typed nav list, breadcrumbs and page titles are generated from it, instead of a hand-written sidebar.

## Order

1. The route check group (1, 2, 3), because all three build on the matcher from #202.
2. The small independent ones (4 to 10). Each is a self-contained pull request.
3. The client helper and the dev panel group (11 to 14).
4. Page scaffolding (15) and nav metadata (16). Both touch how pages are described, so they are designed together.
5. `svelteUpgrade` (17) last.

## Open decisions

| Feature | Question | Proposed answer |
|---|---|---|
| Nav metadata | Where does a page declare its title and icon? | An export in `+page.ts`, such as `export const nav = { title, icon }`. The plugin never reads Kit config and already scans page files. The alternative is a Gradle block, which keeps it out of the frontend but away from the page. |
| Dead link check | Does it fail the build or only report? | Report only at first, because it must know the API prefixes and the static files to avoid false alarms. |
| Retry | Which defaults? | Off by default, GET only, three attempts, on network errors, timeouts and 502, 503 and 504. |
| Production access log | On or off by default? | Off by default, so an upgrade does not change what an app logs. |
| Open route in IDE | How is the IDE opened? | Through IntelliJ's built-in server on localhost, with a copyable `file:line` as the fallback when it does not answer. |
| Page scaffolding | Does it also write the Ktor route stub? | Only with `--route`, and only into a file the task creates, never into an existing one. |

## Considered and left out

These were offered and not chosen for 1.2.0:

- Generated client: query cache with invalidation, mock API for tests.
- Frontend helpers: unsaved changes guard, typed URL search params, API activity indicator, file download helper.
- Dev tools: fresh-cache reinstall after a broken install, latency and failure injection, LAN URL with a QR code.
- Gradle: bundle size report and budget, a check for mismatched plugin and runtime versions.
- Server: problem details helper, input types without server fields, typed WebSocket channels, automatic ETags for API GETs.

## Release

Every feature pull request merges to `main` when it is ready, and release-please keeps one open release pull request that collects them. That pull request is merged once, after the release limit resets, so 1.2.0 counts as a single release. Fixes found in the meantime ship with it instead of as patch releases, unless one is urgent.
