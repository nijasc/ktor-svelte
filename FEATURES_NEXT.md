# Features for 1.2.0

The features chosen for 1.2.0, in the order to build them. Each one is its own pull request. They all land on `main` and ship together in one release, because the organization has reached its monthly limit for releases.

The goal behind the list: the frontend and the backend should feel like one app. What Kotlin knows, TypeScript knows, and neither side repeats what the other already said.

One hundred and nine features is far more than one release holds. The [order](#order) puts the ones that stand alone first, so the release can be cut after any group, and the rest moves to 1.3.0 without rework.

## What matters most

The most important thing is to make what a developer does a hundred times easier. A feature that removes a step from every route, every page, every form or every restart is worth more than one that is impressive once. Within each group of the [order](#order), these come first:

| Done a hundred times | Features |
|---|---|
| Writing a route | Typed path parameters (35), query parameters as a data class (86), input normalisation (97), `call.user` (87), `respondPage` (9) |
| Writing a form or a button | Draft and form state helper (11), confirm helper (89), dialog helper (93), field component (63), refresh page data after writes (70) |
| Linking and navigating | `svelteVerifyRoutes --fix` (2), active link helper (88), server-directed navigation (26) |
| Waiting on and reading the dev loop | Reload data after restart (57), free the dev ports (90), short task names (102), restart summary line (100), fold repeated stack traces (5), highlight your own frames (101) |
| Keeping things tidy | Editor-time lint rules (103), generated files never conflict (104), one format command (55), git pre-commit hook (56), rename a page safely (91) |

## Board

The state of every feature. A card moves when work on it starts, when its pull request opens and when it merges, and the pull request number is added then. The numbers are the ones in the [scope](#scope) table, and the group is the step in the [order](#order).

### In progress

Nothing yet.

### In review

Nothing yet.

### Next up

| # | Feature | Size | Group |
|---|---|---|---|
| 1 | Kotlin redirects in the route check | Small | 1 |
| 2 | `svelteVerifyRoutes --fix` | Medium | 1 |
| 3 | Dead link check | Medium | 1 |

### Done

What these features build on has shipped in 1.1.0:

| Pull request | What |
|---|---|
| #201 | Dev panel streams no longer fail requests |
| #202 | `svelteVerifyRoutes` |
| #203 | `svelteDoctor` catches installs that lost their files |
| #204 | `errorMessage` in the generated client |
| #205 | `.gitattributes` next to generated frontend files |

### Backlog

| # | Feature | Size | Group |
|---|---|---|---|
| 91 | Rename a page safely | Medium | 1 |
| 103 | Editor-time lint rules | Medium | 1 |
| 4 | Flag `window.fetch` in `load` | Small | 2 |
| 5 | Fold repeated stack traces | Small | 2 |
| 6 | `svelteDoctor --fix` | Medium | 2 |
| 7 | i18n message check | Medium | 2 |
| 8 | Retry with backoff | Small | 2 |
| 9 | `respondPage` helper | Small | 2 |
| 10 | Production access log | Small | 2 |
| 18 | Jump from TypeScript to Kotlin | Small | 2 |
| 19 | Field docs and deprecations | Small | 2 |
| 35 | Typed path parameters | Small | 2 |
| 36 | Unused endpoints report | Small | 2 |
| 45 | Rate limit aware client | Small | 2 |
| 53 | Build info on both sides | Small | 2 |
| 55 | One format command | Small | 2 |
| 56 | Git pre-commit hook | Small | 2 |
| 57 | Reload data after restart | Small | 2 |
| 68 | Visitor time zone on the server | Small | 2 |
| 70 | Refresh page data after writes | Small | 2 |
| 76 | Starter page with next steps | Small | 2 |
| 83 | Reload prompt after deploy | Small | 2 |
| 84 | Project guide for coding assistants | Small | 2 |
| 88 | Active link helper | Small | 2 |
| 90 | Free the dev ports | Small | 2 |
| 97 | Input normalisation | Small | 2 |
| 98 | Startup timing breakdown | Small | 2 |
| 100 | Restart summary line | Small | 2 |
| 101 | Highlight your own frames | Small | 2 |
| 102 | Short task names | Small | 2 |
| 104 | Generated files never conflict | Medium | 2 |
| 109 | Protect internal endpoints | Small | 2 |
| 11 | Draft and form state helper | Medium | 3 |
| 12 | Replay and copy as curl | Medium | 3 |
| 13 | Open route in IDE | Small | 3 |
| 14 | Server error overlay | Medium | 3 |
| 89 | Confirm helper | Small | 3 |
| 93 | Dialog helper | Small | 3 |
| 38 | SQL queries per request | Medium | 3 |
| 39 | Override `publicConfig` in dev | Small | 3 |
| 40 | Record requests as fixtures | Medium | 3 |
| 51 | Missing translation highlight | Small | 3 |
| 58 | Route map in dev panel | Medium | 3 |
| 74 | Duplicate request detection | Small | 3 |
| 75 | Live accessibility hints | Medium | 3 |
| 78 | Theme editor | Medium | 3 |
| 80 | Status view | Small | 3 |
| 99 | Sensitive fields | Medium | 3 |
| 25 | Server-sent toasts | Small | 4 |
| 26 | Server-directed navigation | Small | 4 |
| 27 | Upload rules shared | Medium | 4 |
| 20 | Shared constants | Medium | 4 |
| 73 | Typed error codes | Medium | 4 |
| 62 | Typed cookies | Medium | 4 |
| 79 | Cookie and session inspector | Small | 4 |
| 85 | Cookie consent helper | Medium | 4 |
| 63 | Field component | Medium | 5 |
| 64 | Inputs for dates and enums | Medium | 5 |
| 65 | Data table for paged routes | Medium | 5 |
| 69 | Typed error pages | Small | 5 |
| 94 | Theme and language switches | Small | 5 |
| 106 | Navigation progress bar | Small | 5 |
| 71 | Server checks while typing | Medium | 5 |
| 31 | Branded ID types | Medium | 6 |
| 32 | Decimal and duration types | Medium | 6 |
| 33 | Version conflicts | Medium | 6 |
| 43 | `Patch<T>` partial updates | Medium | 6 |
| 44 | Typed multipart uploads | Medium | 6 |
| 95 | File drop zone | Medium | 6 |
| 86 | Query parameters as a data class | Medium | 6 |
| 92 | Exposed helpers | Medium | 6 |
| 72 | Idempotency keys | Medium | 6 |
| 37 | Declared environment variables | Medium | 6 |
| 46 | Secret leak check | Medium | 6 |
| 82 | Deploy presets | Medium | 6 |
| 49 | Plurals in messages | Medium | 7 |
| 50 | Shared formatting | Medium | 7 |
| 96 | Relative time | Small | 7 |
| 59 | Self-hosted fonts | Medium | 7 |
| 108 | Charts preset | Medium | 7 |
| 48 | API change report | Medium | 7 |
| 81 | Production smoke test | Medium | 7 |
| 21 | Typed current user | Medium | 8 |
| 87 | `call.user` in routes | Small | 8 |
| 24 | Login redirect with return | Small | 8 |
| 67 | Session expiry warning | Small | 8 |
| 22 | Shared permissions | Large | 8 |
| 23 | Page guards declared once | Large | 8 |
| 41 | Synced user preferences | Large | 8 |
| 34 | Resource routes DSL | Medium | 9 |
| 15 | Page scaffolding task | Medium | 9 |
| 42 | CRUD scaffold from a DTO | Large | 9 |
| 16 | Nav metadata from routes | Large | 9 |
| 77 | Page metadata for sharing | Medium | 9 |
| 28 | Generated page loads | Large | 9 |
| 66 | Inline page data | Large | 9 |
| 29 | Frontend errors in the server log | Medium | 10 |
| 54 | Web vitals in metrics | Medium | 10 |
| 30 | Kotlin browser test kit | Large | 10 |
| 107 | Browser test recorder | Medium | 10 |
| 47 | Accessibility check task | Large | 10 |
| 105 | HTTPS in development | Medium | 11 |
| 52 | Installable app (PWA) | Large | 11 |
| 61 | Emails from Svelte components | Large | 11 |
| 60 | Multiple frontends | Large | 12 |
| 17 | One-step `svelteUpgrade` | Medium | 13 |

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
| 31 | Branded ID types | Generated client | Medium | |
| 32 | Decimal and duration types | Generated client | Medium | |
| 33 | Version conflicts | Server and generated client | Medium | |
| 34 | Resource routes DSL | Server | Medium | |
| 35 | Typed path parameters | Server | Small | |
| 36 | Unused endpoints report | Gradle plugin | Small | |
| 37 | Declared environment variables | Server and Gradle plugin | Medium | |
| 38 | SQL queries per request | Dev panel | Medium | #201 |
| 39 | Override `publicConfig` in dev | Dev panel | Small | #201 |
| 40 | Record requests as fixtures | Dev panel | Medium | 12 |
| 41 | Synced user preferences | Server and generated client | Large | 21 |
| 42 | CRUD scaffold from a DTO | Gradle plugin | Large | 15 |
| 43 | `Patch<T>` partial updates | Server and generated client | Medium | |
| 44 | Typed multipart uploads | Generated client | Medium | |
| 45 | Rate limit aware client | Generated client | Small | 8 |
| 46 | Secret leak check | Gradle plugin | Medium | 37 |
| 47 | Accessibility check task | Gradle plugin | Large | 30 |
| 48 | API change report | Gradle plugin | Medium | |
| 49 | Plurals in messages | Gradle plugin and generated files | Medium | |
| 50 | Shared formatting | Server and generated files | Medium | |
| 51 | Missing translation highlight | Dev panel | Small | #201 |
| 52 | Installable app (PWA) | Gradle plugin and server | Large | |
| 53 | Build info on both sides | Server and generated client | Small | |
| 54 | Web vitals in metrics | Server and generated files | Medium | 29 |
| 55 | One format command | Gradle plugin | Small | |
| 56 | Git pre-commit hook | Gradle plugin | Small | 55 |
| 57 | Reload data after restart | Dev client | Small | #201 |
| 58 | Route map in dev panel | Dev panel | Medium | #201 |
| 59 | Self-hosted fonts | Gradle plugin | Medium | |
| 60 | Multiple frontends | Server and Gradle plugin | Large | |
| 61 | Emails from Svelte components | Gradle plugin and server | Large | |
| 62 | Typed cookies | Server and generated client | Medium | |
| 63 | Field component | Generated files | Medium | 11 |
| 64 | Inputs for dates and enums | Generated files | Medium | |
| 65 | Data table for paged routes | Generated files | Medium | 9 |
| 66 | Inline page data | Server and Gradle plugin | Large | 28 |
| 67 | Session expiry warning | Server and generated client | Small | 21 |
| 68 | Visitor time zone on the server | Server and generated client | Small | |
| 69 | Typed error pages | Generated files | Small | |
| 70 | Refresh page data after writes | Generated client | Small | |
| 71 | Server checks while typing | Server and generated client | Medium | 11 |
| 72 | Idempotency keys | Server and generated client | Medium | 8 |
| 73 | Typed error codes | Server and generated client | Medium | |
| 74 | Duplicate request detection | Dev panel | Small | #201 |
| 75 | Live accessibility hints | Dev panel | Medium | #201 |
| 76 | Starter page with next steps | Gradle plugin | Small | |
| 77 | Page metadata for sharing | Gradle plugin and generated files | Medium | 16 |
| 78 | Theme editor | Dev panel | Medium | #201 |
| 79 | Cookie and session inspector | Dev panel | Small | 62 |
| 80 | Status view | Dev panel | Small | #201 |
| 81 | Production smoke test | Gradle plugin | Medium | |
| 82 | Deploy presets | Gradle plugin | Medium | 37 |
| 83 | Reload prompt after deploy | Generated files | Small | |
| 84 | Project guide for coding assistants | Gradle plugin | Small | |
| 85 | Cookie consent helper | Server and generated files | Medium | 62 |
| 86 | Query parameters as a data class | Server and generated client | Medium | |
| 87 | `call.user` in routes | Server | Small | 21 |
| 88 | Active link helper | Generated files | Small | |
| 89 | Confirm helper | Generated client | Small | 11 |
| 90 | Free the dev ports | Gradle plugin | Small | |
| 91 | Rename a page safely | Gradle plugin | Medium | 2 |
| 92 | Exposed helpers | New optional module | Medium | 9 |
| 93 | Dialog helper | Generated files | Small | |
| 94 | Theme and language switches | Generated files | Small | |
| 95 | File drop zone | Generated files | Medium | 27, 44 |
| 96 | Relative time | Generated files | Small | 50 |
| 97 | Input normalisation | Server | Small | |
| 98 | Startup timing breakdown | Server | Small | |
| 99 | Sensitive fields | Server | Medium | |
| 100 | Restart summary line | Dev log | Small | |
| 101 | Highlight your own frames | Dev log | Small | 5 |
| 102 | Short task names | Gradle plugin | Small | |
| 103 | Editor-time lint rules | Generated files | Medium | 4, #202 |
| 104 | Generated files never conflict | Gradle plugin | Medium | #205 |
| 105 | HTTPS in development | Server and Gradle plugin | Medium | |
| 106 | Navigation progress bar | Generated files | Small | |
| 107 | Browser test recorder | Test kit | Medium | 30 |
| 108 | Charts preset | Gradle plugin | Medium | |
| 109 | Protect internal endpoints | Server | Small | |

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

### Richer shared types

31. **Branded ID types.** A Kotlin value class such as `NoteId` becomes its own TypeScript type instead of plain `string`, so passing a user ID where a note ID is expected is a compile error on both sides. Dates already work this way.
32. **Decimal and duration types.** `BigDecimal` and `kotlin.time.Duration` get branded TypeScript types with small helpers to parse, format and add, instead of arriving as plain strings or as numbers that lose precision.
33. **Version conflicts.** A DTO carries a version, updates send it back, and a stale write answers a typed 409. The client gets a helper to show that someone else changed the record, with reload or overwrite.

### Kotlin helpers and cross-checks

34. **Resource routes DSL.** `resource<Note>("/api/notes") { list { } get { } create { } update { } delete { } }` registers conventional CRUD routes whose names and types line up with `api.notes.*` on the client.
35. **Typed path parameters.** `call.pathId<UUID>("id")` and its relatives parse a path parameter and answer a typed 400 or 404 when it is malformed, replacing the parse-or-respond code repeated in every route.
36. **Unused endpoints report.** A task that lists API routes no frontend file calls. It is the counterpart to the compile errors you already get for calls to routes that no longer exist.
37. **Declared environment variables.** The app declares the environment variables it needs in Kotlin, fails at startup with one table of what is missing, and `.env.example` is generated from the same list.

### More for the dev panel

38. **SQL queries per request.** With Exposed on the classpath, each request in the dev panel shows how many SQL statements it ran and how long they took, and flags the same statement repeated many times.
39. **Override `publicConfig` in dev.** Change `publicConfig` values from the dev panel for your browser only, to try a feature flag or a limit without editing config or restarting.
40. **Record requests as fixtures.** Save the API calls of a session from the dev panel as JSON fixtures, typed against the generated client, for frontend tests.

### Whole-app features

41. **Synced user preferences.** Theme, locale and app-defined preferences are declared once in Kotlin, stored per user on the server, and available as a typed, reactive store on the frontend.
42. **CRUD scaffold from a DTO.** `svelteAdd --crud=Note` generates list, detail and form pages wired to the generated client, with typed routes, validation bounds and i18n keys, as normal files the app then owns.

### More for the generated client

43. **`Patch<T>` partial updates.** A Kotlin `Patch<Note>` type for PATCH routes that tells "field not sent" from "field set to null", with a matching TypeScript type and an apply helper, so partial updates stop needing a second DTO.
44. **Typed multipart uploads.** Upload routes take a typed object such as `{ file: File, title: string }` instead of a raw `FormData`. Today the generated signature is `body: FormData`, so field names are unchecked.
45. **Rate limit aware client.** A 429 becomes a typed error that carries the wait time from `Retry-After`, and the client can wait and resend once by itself.

### Build and security checks

46. **Secret leak check.** After the frontend build, the bundle is scanned for the values of the app's secrets and server-only environment variables, and the build fails if one was baked into the JavaScript.
47. **Accessibility check task.** A task that opens the built pages in a headless browser and runs axe on them in a light and a dark theme, as the showcase's browser tests do today, available to every app.
48. **API change report.** Compares `openapi.json` with the one on `main` and lists what changed for callers: removed routes, removed or newly required fields, and changed types.

### Languages and installable app

49. **Plurals in messages.** A message can say `{count, plural, one {# note} other {# notes}}`, and both the Kotlin `Messages` and the TypeScript functions pick the right form for the locale. Today messages only have placeholders.
50. **Shared formatting.** `formatDate`, `formatNumber` and `formatMoney` that give the same text in Kotlin and in TypeScript for the visitor's locale, so an email and the page never disagree.
51. **Missing translation highlight.** In development, text that fell back to the default locale is outlined on the page and listed in the dev panel.
52. **Installable app (PWA).** Name, colors and icon are declared once in Gradle, and the app gets a web manifest, icons in every size and a small service worker with an offline page, served with the right caching headers.

### Operations

53. **Build info on both sides.** Version, git commit and build time are available as `BuildInfo` in Kotlin and `buildInfo` in TypeScript, for an about box, bug reports and logs, without any setup.
54. **Web vitals in metrics.** The frontend reports loading and interaction timings per page to the app, which adds them to the existing metrics, so slow pages show up next to slow API calls.

### One toolchain

55. **One format command.** `./gradlew format` runs ktlint on Kotlin and Prettier on the frontend, and `formatCheck` verifies both, so nobody has to remember two commands or two tools.
56. **Git pre-commit hook.** A task installs a pre-commit hook that formats staged Kotlin and frontend files and blocks a commit when generated files are out of sync.

### More for the dev loop

57. **Reload data after restart.** When the app restarts after a Kotlin change, open pages rerun their load functions by themselves, so the new backend behaviour shows up without a manual reload.
58. **Route map in dev panel.** A searchable list of every page and every API route, with method, path, the Kotlin or Svelte file behind it, and a link to open the page or its API docs entry.

### Frontend libraries and app shape

59. **Self-hosted fonts.** `libraries { fonts("Inter") }` installs the font, wires it into the generated CSS and preloads it, with no request to a font CDN and no Content-Security-Policy exception.
60. **Multiple frontends.** One app serves more than one SvelteKit project, such as a public site and an admin area under `/admin`, each with its own build, routes and typed client.

### More on the server

61. **Emails from Svelte components.** Email templates are written as Svelte components. The build renders them to HTML, and Kotlin gets a typed function per template that fills in the values, with the same theme and messages as the app.
62. **Typed cookies.** A cookie is declared once in Kotlin with its type and options, and read and written with the same name and type on both sides, as the theme and locale cookies already are internally.

### Generated UI building blocks

63. **Field component.** A generated `<Field>` renders label, input, hint and validation errors for one DTO field, with bounds from the schema and DaisyUI or plain styling. It uses the existing `field` action underneath.
64. **Inputs for dates and enums.** `<DateInput>`, `<DateTimeInput>` and `<EnumSelect>` bind directly to the generated `IsoDate` types and enum objects, so no page converts strings by hand.
65. **Data table for paged routes.** A generated table component wired to `pages()`: typed columns, load more or page buttons, and loading and empty states, for any route that returns `Page<T>`.
69. **Typed error pages.** A generated `+error.svelte` shows the right message for 404, 403 and 500, the request ID for server errors, and uses the typed error body, in the app's theme and languages.

### Speed, sessions and time

66. **Inline page data.** In production the server puts the answers to a page's first API calls into the HTML it sends, as it already does for `publicConfig`, so the page renders with data and without a second round trip.
67. **Session expiry warning.** The frontend knows when the session ends, warns shortly before, and can extend it with one call, instead of the user losing a half-filled form to a sudden 401.
68. **Visitor time zone on the server.** The visitor's time zone reaches Kotlin with every request as `call.timeZone`, so emails, exports and formatted dates use the user's zone and not the server's.

### Forms, writes and errors

70. **Refresh page data after writes.** After a successful POST, PUT, PATCH or DELETE through the generated client, the current page reruns its load functions, so lists and details update without manual refetching. It is one `apiConfig` switch.
71. **Server checks while typing.** A field can ask the server whether a value is acceptable, such as whether an email is taken, through a typed check route. The call is debounced and the answer is shown like any other validation error.
72. **Idempotency keys.** The client adds a unique key to each write, and the server answers a repeated key with the first result instead of doing the work twice. This makes retrying writes safe.
73. **Typed error codes.** A Kotlin enum of error codes such as `NoteLocked` and `QuotaReached` travels in every error body, arrives as a typed union in TypeScript, and maps to an i18n message per code on both sides.

### What the dev panel can tell you

74. **Duplicate request detection.** The dev panel flags the same GET made more than once while one page loads, and names both call sites.
75. **Live accessibility hints.** The dev panel runs axe on the page you are looking at and lists the problems with the element highlighted, while you develop and not only in CI.

### First steps

76. **Starter page with next steps.** A new project's first page shows what is set up, links to the dev panel, the API docs and the docs for each chosen feature, and suggests what to build first.

### Search engines and sharing

77. **Page metadata for sharing.** A page declares title, description and preview image next to its nav metadata, and the prerendered HTML gets the matching head tags, including Open Graph, with translated text per locale.

### More tools in the dev panel

78. **Theme editor.** Adjust the colors of a DaisyUI theme live on the page, then copy the result as the custom theme block for `build.gradle.kts`.
79. **Cookie and session inspector.** See the cookies and the current session of this browser as the server reads them, with what each declared cookie means, and clear them with one click.
80. **Status view.** The settings, versions, health check result and build fingerprint the status endpoint returns, shown readable in the dev panel instead of as raw JSON.

### Running in production

81. **Production smoke test.** A task builds the JAR, starts it the way production does, requests every prerendered page and a few API routes, and fails if anything is not answered correctly.
82. **Deploy presets.** Generates the config for a host such as Railway, Fly.io or Render from the project's settings: start command, health check path, port and required environment variables.
83. **Reload prompt after deploy.** A ready-made "new version available, reload" toast wired to the existing new-build detection, so apps do not each write the `onNewBuild` handler shown in the docs.

### Coding assistants and privacy

84. **Project guide for coding assistants.** A generated file tells coding assistants how this project works: its API routes, the generated client, typed routes, commands and the files they must not edit by hand. `svelteSync` keeps it current.
85. **Cookie consent helper.** Declared cookies get a category, and a generated consent store and banner let visitors accept or refuse the optional ones, on both sides from the same list.

### Things you do a hundred times

86. **Query parameters as a data class.** `val filter = call.query<NoteFilter>()` reads, converts and validates the query string into a data class, and the generated client takes the same typed object.
87. **`call.user` in routes.** `call.user` and `call.requireUser()` give the typed signed-in user in any route, and answer 401 when there is none.
88. **Active link helper.** `routes.dataNodes.isActive(page)` and an `aria-current` helper for nav links, including "this section or anything below it", instead of comparing path strings in every menu.
89. **Confirm helper.** `confirmed('Delete this note?', () => api.notes.delete(id))` asks first and only then calls, with pending and error state.
90. **Free the dev ports.** When port 8080 or 5173 is still held by a leftover process from an earlier run, `svelteDevAll` names the process and stops it if it is one it started, instead of failing.
91. **Rename a page safely.** `svelteRename --page=notes/[id] --to=memos/[id]` moves the folder and updates every typed route call in Svelte and Kotlin.
92. **Exposed helpers.** Optional helpers for apps that use Exposed: map a row to a DTO by column name, and page a query by cursor straight into `Page<T>`.

### Ready-made pieces

93. **Dialog helper.** `const dialog = modal()` gives `open()`, `close()`, a result promise and the attributes for a `<dialog>`, so a DaisyUI modal needs no `bind:this` and `showModal()` by hand.
94. **Theme and language switches.** `<ThemeToggle>` and `<LocaleSwitch>` components over the theme and i18n helpers the plugin already generates, so a new app has both on day one.
95. **File drop zone.** A drop area and file input bound to a typed upload route, with preview, the route's allowed types and size, and upload progress.
96. **Relative time.** `timeAgo(note.createdAt)` prints "3 minutes ago" in the visitor's language and keeps itself current while the page is open.

### The Kotlin side day to day

97. **Input normalisation.** `@Trim`, `@Lowercase` and `@EmptyAsNull` on DTO fields are applied when a request body is received, before validation, so no route cleans up strings by hand.
98. **Startup timing breakdown.** In development the app logs what its startup time was spent on, so a slow restart can be fixed at the right place.
99. **Sensitive fields.** `@Sensitive` on a DTO field masks its value in the dev panel, the dev log and frontend error reports, so passwords and tokens never show up there.

### Reading the dev log

100. **Restart summary line.** Each restart prints one line: which file caused it, how long compile and startup took, and whether the generated client changed.
101. **Highlight your own frames.** In stack traces the frames from the app's own code are printed first and are clickable in the IDE console, and library frames are dimmed.

### Typing less and fewer snags

102. **Short task names.** `./gradlew dev`, `sync`, `doctor` and `gen` as aliases for `svelteDevAll`, `svelteSync`, `svelteDoctor` and `svelteGenerateTs`.
103. **Editor-time lint rules.** ESLint rules shipped with the generated files flag string links to pages, API calls in `load` without `{ fetch }` and reading `error.body.message` directly, as you type and not only in a Gradle task.
104. **Generated files never conflict.** A git merge driver for the generated folders: on a merge or a rebase the files are regenerated instead of producing conflicts.
105. **HTTPS in development.** `dev { https = true }` serves the dev app over HTTPS with a locally trusted certificate, for secure cookies, service workers and sign-in providers that require it.

### Late additions

106. **Navigation progress bar.** A thin bar at the top of the page while SvelteKit navigates or a load function runs, generated with the app's theme colors.
107. **Browser test recorder.** Click through the running app and get the steps written as a Kotlin browser test with typed routes, as a starting point to edit.
108. **Charts preset.** `libraries { charts() }` sets up a Svelte chart library with the DaisyUI theme colors wired in, light and dark, and typed series helpers.
109. **Protect internal endpoints.** One setting puts the status endpoint, the API docs and metrics behind a token, a role or a private network range, instead of each being open or off.

## Order

1. The route check group (1, 2, 3), then renaming a page (91) and the editor-time lint rules (103), because all of them build on the matcher from #202.
2. The small independent ones (4 to 10, 18, 19, 35, 36, 45, 53, 55, 56, 57, 68, 70, 76, 83, 84, 88, 90, 97, 98, 100, 101, 102, 104, 109). Each is a self-contained pull request.
3. The client helper and the dev panel group (11 to 14, then 89, 93, 38, 39, 40, 51, 58, 74, 75, 78, 80, 99).
4. The server talks to the UI (25, 26, 27), shared constants (20), typed error codes (73) and typed cookies (62), then the cookie inspector (79) and the consent helper (85), which read the declared cookies. They share one mechanism: the server says something once, and the generated client acts on it.
5. Generated UI building blocks (63, 64, 65, 69, 94, 106) and server checks while typing (71). They come after the form state helper (11) and the `respondPage` helper (9), which they use.
6. Richer shared types (31, 32, 33, 43, 44), the file drop zone (95), query parameters as a data class (86), the Exposed helpers (92), idempotency keys (72) and declared environment variables (37), then the secret leak check (46) and the deploy presets (82), which read that declaration.
7. Languages (49, 50, 96), self-hosted fonts (59), the charts preset (108), the API change report (48) and the production smoke test (81).
8. One login (21, then 87, 24, 67, 22, 23), then synced user preferences (41). Typed current user comes first, because the others read it.
9. The resource routes DSL (34), page scaffolding (15), the CRUD scaffold (42), nav metadata (16), page metadata for sharing (77), generated page loads (28) and inline page data (66). All of them change how a route or a page is described, so they are designed together.
10. Frontend errors in the server log (29), web vitals (54), the Kotlin browser test kit (30), then the test recorder (107) and the accessibility check (47), which run on the test kit's browser.
11. HTTPS in development (105), the installable app (52), which needs it for testing, and emails from Svelte components (61).
12. Multiple frontends (60). It changes the one-frontend, one-manifest assumption the whole project rests on, so it is a candidate for 2.0 and not for a minor release.
13. `svelteUpgrade` (17) last.

Groups 1 to 4 are the safe core of 1.2.0. Groups 5 to 11 are enough for 1.3.0 through 1.7.0, and any of them can move there without rework.

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
| Branded ID types, decimal and duration types | Are they on for everyone? | No. They change the type of existing fields, which breaks frontend code that passes a plain `string`, so within 1.x they are a `generateTs` option that is off by default. |
| Version conflicts | How is the version sent? | As a field of the DTO, marked with an annotation, so it works with any storage. `If-Match` headers are not used, because the generated client would hide them. |
| Resource routes DSL | How much does it do? | It only registers ordinary Ktor routes with conventional paths and names. No storage, no generated handlers, and every block is optional. |
| Unused endpoints report | Fail or report? | Report only. A route can be called from outside the frontend. |
| Declared environment variables | Where are they declared? | In a small Kotlin DSL the app calls at startup, which also returns the typed values. The Gradle task reads the same declaration by starting the app once, as `svelteGenerateTs` does. |
| SQL queries per request | Does the runtime depend on Exposed? | No. It is compiled against Exposed as `compileOnly` and turns itself on only when Exposed is on the classpath and the app is in development mode. |
| Synced user preferences | Who stores them? | The app. It gives ktor-svelte a load and a save function, and ktor-svelte generates the endpoint, the types and the store. |
| CRUD scaffold | Who owns the generated pages? | The app. They are written once without the generated header and never touched again, and the task refuses to overwrite an existing file. |
| Typed multipart uploads | What happens to code that passes `FormData`? | It keeps compiling. The generated function accepts the typed object or a `FormData`, and only the typed form is checked. |
| Rate limit aware client | Does it resend by itself? | Only when retry is on, only once, and only when the wait is short. Otherwise it throws the typed error with the wait time. |
| Secret leak check | Which values count as secrets? | Declared environment variables marked as secret, plus the values in `.env`, ignoring anything shorter than eight characters to avoid false alarms. |
| Accessibility check task | Does every app pay for a browser? | No. The browser is downloaded the first time the task runs, as the browser tests do. |
| API change report | Fail or report? | Report only, against a git ref that defaults to `origin/main`. A breaking change inside one JAR is often intended. |
| Plurals in messages | Where do the plural rules come from? | Open. The browser has `Intl.PluralRules`, but the JDK has no public equivalent, and adding ICU4J for it is too heavy. The likely answer is a small generated table for the configured locales. |
| Shared formatting | Can the two sides really print the same text? | Open. The JDK and the browser carry different locale data, so "the same text" only holds for patterns ktor-svelte defines itself. This needs a design note that says which formats are supported. |
| Installable app | What does the service worker cache? | The offline page and hashed assets only. It never caches API responses or HTML pages, so a deploy is never hidden by a stale worker. |
| Web vitals in metrics | On or off by default? | Off by default and sampled, with the same limits as frontend error reporting, because it is an endpoint anyone can post to. |
| One format command | What if the project already has a `format` task, or no ktlint? | The tasks are only registered when the names are free. Kotlin is formatted through whichever of ktlint or Spotless the build applies, and skipped with a note when there is neither. |
| Git pre-commit hook | Is it installed automatically? | Never. Only the explicit task installs it, and it refuses to replace a hook it did not write. |
| Reload data after restart | What happens to what the user typed? | Only load functions rerun, through SvelteKit's `invalidateAll`, so component state and form input stay. Development mode only. |
| Self-hosted fonts | Where do the font files come from? | From the Fontsource packages on npm, installed by `svelteSync` like every other library, so the lockfile pins them. |
| Multiple frontends | Does it fit a minor release? | Probably not. The manifest, the request resolver, the dev proxy and every Gradle task assume one frontend. It needs a design note first and is likely a 2.0 feature. |
| Emails from Svelte components | How are components rendered without a browser? | Open. It needs a second build step that renders components on the server side and inlines their CSS, which the plugin does not have today. It needs a design note before any code. |
| Typed cookies | What about `HttpOnly` cookies? | They stay server-only. The frontend half is generated only for cookies declared readable by scripts. |
| Generated UI building blocks | Does every app get components it did not ask for? | No. They are a library like the others, turned on with `libraries { components() }`, and the files are generated and owned by the plugin. An app that needs a different look writes its own on top of the same helpers. |
| Generated UI building blocks | Does this make ktor-svelte a component library? | It must not. The set stays at the pieces that exist only because of the generated types: a field, typed inputs, a paged table and an error page. Buttons, dialogs and layout stay with DaisyUI or the app. |
| Typed error pages | What if the app already has a `+error.svelte`? | It is left alone. The page is written once when there is none, like the root layout. |
| Inline page data | Whose data is inlined? | Open. The answers depend on the visitor's session, so nothing may be cached or shared between visitors, and the server must make the calls as that visitor. It is designed together with generated page loads (28), which provides the list of calls. |
| Session expiry warning | How does the frontend learn the expiry time? | From the typed current user endpoint, which returns it next to the user. The app supplies it, because ktor-svelte does not own the session. |
| Visitor time zone | How does it reach the server? | A cookie the dev and production client sets from the browser's zone. The first request of a new visitor has none, so `call.timeZone` then falls back to a configured default. |
| Refresh page data after writes | On or off by default? | Off by default, because it changes how many requests an existing app makes. A single call can opt out, and prefetches and silent calls never trigger it. |
| Server checks while typing | What stops it from leaking which emails exist? | The check route is an ordinary route the app writes, so it is rate limited like any write and the app decides what it reveals. The docs must say so. |
| Idempotency keys | Where are the first results kept? | In memory with a short lifetime by default, behind a small interface an app can replace with its database. Only routes that opt in are covered. |
| Typed error codes | Where does the enum live? | In the app, registered once in `install(Svelte)`. `errorMessage()` uses the code's message when there is one, before it falls back to the body's `message`. |
| Live accessibility hints | Does it add a dependency to every app? | No. It is turned on in `dev { }`, and `svelteSync` adds axe as a development dependency only then. It never reaches the production build. |
| Starter page | Can it overwrite a real page? | No. It is only written by `svelteInit` and the setup script, into an empty project. |
| Page metadata for sharing | Does it work for pages with parameters? | Only for the static part. A prerendered page gets its tags at build time, and a page such as `/notes/[id]` sets its own title at runtime, because the server never renders pages. |
| Theme editor | Does it write to the build file? | No. It only shows the block to copy, because the plugin never edits `build.gradle.kts`. |
| Production smoke test | Is it part of `check`? | No. It needs the environment the app needs, such as a database, so it is a task to run in CI where that exists. |
| Deploy presets | Which hosts? | Railway first, because that is what the author deploys to, and others when someone asks. Each preset is written once and then belongs to the app. |
| Reload prompt after deploy | On for everyone who uses toasts? | No, because it would change what existing apps show. It is one option of the toasts library, and it never replaces an `onNewBuild` handler the app already set. |
| Project guide for coding assistants | Which file, and what about one the project already has? | A generated file of its own with the generated header, which the project's `AGENTS.md` or `CLAUDE.md` links to in one line. The plugin never edits those. |
| Cookie consent helper | Does it make an app compliant? | No, and the docs must say so. It provides the mechanics: categories, the stored choice and a guard on both sides so an optional cookie is not set before consent. |
| Query parameters as a data class | How are the fields checked? | With the same `JsonSchema` annotations and `Validated` rules as request bodies, so a wrong value answers the same typed 422. |
| Active link helper | Where does it live? | On the functions in the generated `routes.ts`, so it needs no new import. |
| Confirm helper | Which dialog? | The browser's own `confirm` by default, and a DaisyUI modal when DaisyUI is on. |
| Free the dev ports | Which processes may it stop? | Only ones it started itself, which it recognises by a record written at start. Any other process is named with its ID and left alone. |
| Rename a page safely | What about links from outside the app? | The task prints the old path, so the app can add a redirect. It does not commit anything, and it stops when the working tree has unsaved changes to the files it would touch. |
| Exposed helpers | Does the runtime gain a dependency on Exposed? | No. They ship as a separate small module, `ktor-svelte-exposed`, so `ktor-svelte-server` stays free of it. |
| Ready-made pieces | Are the switches, the dialog helper and the drop zone part of the components library? | Yes. They are generated with `libraries { components() }` and follow the same rule: only pieces that exist because of something the plugin already generates. |
| Input normalisation | When does it run? | In the same step that receives the body, before the validation rules, and the docs state that order. The value the route sees is the normalised one. |
| Startup timing breakdown | How does ktor-svelte know what the app did? | It can time its own phases and the gaps between Ktor's application events. Anything finer needs the app to wrap a step in `startupPhase("database") { }`. |
| Sensitive fields | Does it change what the API returns? | No. It only masks values where ktor-svelte itself shows or logs them. Keeping a field out of a response stays the app's job. |
| Short task names | What if a name is taken? | Each alias is only registered when its name is free, and `svelte { shortTaskNames = false }` turns them all off. |
| Editor-time lint rules | How do they reach the editor? | As a small local ESLint plugin in the generated folder. New projects get it wired into `eslint.config.js`, and existing ones add one line, because the plugin never edits that file. The rules share their logic with tasks 4 and `svelteVerifyRoutes`, so both always agree. |
| Generated files never conflict | Can that be committed? | Only half. `.gitattributes` names the merge driver, but git reads the driver itself from each clone's own config, so a task installs it per clone, together with the pre-commit hook (56). Without it, git behaves as it does today. |
| HTTPS in development | Who trusts the certificate? | Open. The plugin can create a local certificate authority in the user's home folder, but adding it to the system trust store needs the user's approval, and on a managed machine it may not be allowed. The task must explain the step, not perform it silently. |
| Navigation progress bar | Part of the components library? | Yes, generated with `libraries { components() }`. |
| Browser test recorder | Is the recorder written from scratch? | No. It wraps the recorder of the browser automation library the test kit uses, and only translates the result into the kit's Kotlin calls and typed routes. |
| Charts preset | Which chart library? | Open. It must support Svelte 5, read colors from CSS variables so the DaisyUI themes apply, and be small. The choice is made when the feature is built, and the plugin pins its version like every other library. |
| Protect internal endpoints | What is the default? | Nothing changes for existing apps. When turned on, a token from an environment variable is the default, because it works on every host. |
| Kotlin browser test kit | A new published module? | Yes, `ktor-svelte-test`, with Playwright as its only large dependency, so apps that do not use it pay nothing. |

## Considered and left out

These were offered and not chosen for 1.2.0:

- Generated client: query cache with invalidation, mock API for tests, form bindings per endpoint.
- Frontend helpers: unsaved changes guard, typed URL search params, API activity indicator, file download helper.
- Dev tools: fresh-cache reinstall after a broken install, latency and failure injection, LAN URL with a QR code.
- Gradle: bundle size report and budget, a check for mismatched plugin and runtime versions.
- Server: problem details helper, input types without server fields, typed WebSocket channels, automatic ETags for API GETs.
- One contract: enum labels, typed sort and filter params.
- The server talks to the UI: live data pushed from the server, background job progress.
- Dev panel: a login switcher for test users.
- Whole app: maintenance mode.
- Generated client: request batching.
- Gradle: a dependency audit task, a container image task, a task that finds the frontend usages of a Kotlin route.
- One toolchain: frontend checks as part of `check`, frontend tests run from Gradle.
- Dev loop: frontend type errors in the dev log, a locale and theme switcher in the dev panel.
- Setup and editors: adding setup features to an existing project, VS Code configurations.
- Server: redirect rules, a typed Kotlin test client.
- Generated UI: a command palette built from the routes.
- Speed and reach: preload headers, an offline write queue, a publishable client package.
- Sessions and tracing: trace context from the browser to the server, a "report a problem" helper.
- Bigger bets and upkeep: shared Kotlin logic compiled for the browser, undo for destructive actions, a deprecation report.
- Forms and data: draft autosave, sample data builders, development seed data with a reset button, a client split into one file per resource.
- Dev panel: sequential load detection, mocking a response for one route.
- Testing and CI: screenshot comparisons in the test kit, a reusable CI action, a component preview page.
- Search engines and languages: hreflang and canonical links, a task that fills missing translations, a check for untranslated text.
- Dev panel: an icon search.
- Production: an announcement banner.
- Coding assistants and editor: a development MCP server, an IntelliJ plugin.
- Writing routes: routes that return their answer, error shortcuts such as `notFound()`, endpoint scaffolding.
- Loading and calling: a load helper that runs calls together, an action helper with pending and error state.
- Dev loop: holding requests during a restart, messages created on first use, copying a request as a client call, live templates for the new helpers.
- Small frontend helpers: a persisted state rune, debounce and throttle runes, a pack of common actions, a select filled from the API.
- Kotlin side: a transaction per request in the Exposed module.
- Dev log: filters and levels, a summary of what changed in the generated client.
- Dev panel: filtering and searching requests, the call site of each request, a response diff after a change, a keyboard shortcut and remembered layout.
- Renames and cleanup: renaming a message key, removing unused messages, sorted locale files, a report of unused pages and components.
- When something goes wrong: doctor checks on task failure, a response shape check in development, the closest route on an API 404, a warning for unhandled API errors.
- Sign-in: password reset and email verification flows, social sign-in, login attempt throttling, a nav list that respects permissions.
- Lists and feedback: infinite scroll for paged routes, CSV export of a paged route, toasts with actions and progress.
- Look and assets: your own typed SVG icons, a favicon set from one SVG, an app shell scaffold, view transitions.
- Kotlin side: feature flags, an audit log hook, request context in every log line, signed links.
- Testing: tests without a frontend build, signing in as a user in tests, API examples taken from tests.
- Build and delivery: a build cache for the frontend build, assets from a CDN, loading only the visitor's language.
- Production: graceful shutdown, a JSON logs preset, deprecation headers.
- Upkeep: upgrade codemods, export and import of translations, a component error boundary, a license report.

## Release

Every feature pull request merges to `main` when it is ready, and release-please keeps one open release pull request that collects them. That pull request is merged once, after the release limit resets, so 1.2.0 counts as a single release. Fixes found in the meantime ship with it instead of as patch releases, unless one is urgent.
