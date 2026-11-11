# Suggestions

Ideas for ktor-svelte. Nothing here is decided.

How to use this file: read the suggestions, and move the ones you want into **Approved** (keep the ID, so commits and PRs can refer to it). Delete the ones you reject, or leave them where they are. Effort is a rough guess: S is under a day, M is a few days, L is a week or more.

## Approved

None yet.

## Suggestions

### Security

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| SEC-01 | Add an opt-in `hsts { maxAge, includeSubDomains, preload }` setting next to the other security headers | Apps that terminate TLS in the JVM have no HSTS today, and the plugin already owns every other security header | S |
| SEC-02 | Send `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Resource-Policy: same-origin` by default, with an opt-out | Isolates the app from other windows and sites at no cost for a same-origin SPA | S |
| SEC-03 | Send a default `Permissions-Policy` that turns off camera, microphone, geolocation, payment and USB | Limits what an injected script can do, and apps that need a feature can widen it like the CSP | S |
| SEC-04 | Leave the `allowedOrigins(...)` hint out of the 403 body in production | Tells an attacker which framework and setting are in use; keep it in development mode | S |
| SEC-05 | Add CSP violation reporting with a `report-to` endpoint that logs reports at a rate limit | Teams only find out about a CSP that breaks their site when users complain | M |
| SEC-06 | Offer `trustedTypes = true`, which adds `require-trusted-types-for 'script'` to the CSP | Stops DOM-based XSS in Chromium browsers, and SvelteKit output already works with it | M |
| SEC-07 | Add a `sessionCookie { }` helper that sets `HttpOnly`, `Secure` outside dev mode, `SameSite=Lax`, `__Host-` prefix and signing in one place | The session recipe shows five settings that every app has to get right | M |
| SEC-08 | Warn at startup when a cookie set by the app lacks `HttpOnly` or `Secure` in production | Insecure cookies are easy to miss in review and easy to detect at runtime | S |
| SEC-09 | Make the rate limit key configurable, for example per user ID after sign in | Many users behind one office NAT share the address-based limit today | S |
| SEC-10 | Add sliding-window and token-bucket options to named rate limits | A fixed window lets a burst of twice the limit through at the window edge | M |
| SEC-11 | Lock out an account key after repeated failed sign ins, separate from the address limit | Address limits do not stop slow credential stuffing spread over many addresses | M |
| SEC-12 | Limit JSON nesting depth and string length before deserialisation | A small body with deep nesting can still cost a lot of CPU inside the 1 MiB limit | S |
| SEC-13 | Reject request bodies with a `Content-Encoding` header on API paths unless decompression is turned on | Makes the decision about compressed requests explicit instead of relying on Ktor defaults | S |
| SEC-14 | Strip `Server` and `X-Powered-By` style headers that reveal versions | Version headers help attackers pick exploits and help nobody else | S |
| SEC-15 | Add a `secrets` scan to `svelteBundle` that fails when a file in the build looks like a private key or token | A key in `static/` ends up in the JAR and on the public site | M |
| SEC-16 | Refuse `PUBLIC_` environment variables in `buildEnv` whose values look like secrets | The frontend build inlines them into public JavaScript | S |
| SEC-17 | Add a `securityReport` Gradle task that prints every active security setting and its value | Reviewers and auditors want one list instead of reading the build and the code | S |
| SEC-18 | Sign the manifest in `svelteBundle` and verify it at startup, opt-in | Detects a tampered JAR or directory build before it serves anything | M |
| SEC-19 | Add subresource integrity hashes to script and style tags in prerendered pages | Protects against a CDN or proxy that changes assets in transit | M |
| SEC-20 | Document and test running behind Cloudflare, nginx and Caddy with the correct forwarded-header setup | Wrong forwarded-header setups are the most common cause of broken origin checks and rate limits | S |

### Correctness and robustness

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| COR-01 | Answer `Range` requests for files in the build | Video and large downloads in `static/` cannot be resumed or seeked | M |
| COR-02 | Send `Last-Modified` from the build time next to the ETag | Some proxies and crawlers only revalidate with `If-Modified-Since` | S |
| COR-03 | Return 405 with an `Allow` header for wrong methods on frontend paths | A POST to a page answers 404 today, which hides typos in form actions | S |
| COR-04 | Fail `svelteBundle` when two files differ only in case | A build made on Linux can serve the wrong file on a case-insensitive file system | S |
| COR-05 | Support `paths.base` so the frontend can live under a prefix such as `/app` | Apps mounted behind a path prefix cannot use ktor-svelte today | L |
| COR-06 | Handle `HEAD` for API routes the same way as for files | Load balancers and link checkers send HEAD and get 404 or 405 on GET-only routes | S |
| COR-07 | Keep the SPA fallback out of `/.well-known/` paths | Missing `.well-known` files should be real 404s for ACME and app-link checks | S |
| COR-08 | Retry the dev proxy once when Vite restarts during a request | Saving `vite.config.ts` causes a burst of 502 errors in the browser | S |
| COR-09 | Detect a second app instance on the same port in `svelteDevAll` and say which process holds it | "Address already in use" is the most common dev-loop failure | S |
| COR-10 | Make generated files byte-identical on Windows and Linux, including line endings | `svelteVerifyTs` can fail in CI after generating on Windows with autocrlf | S |
| COR-11 | Reload `libraries.properties` in development mode | Changing themes or locales in Gradle needs an app restart before the server sees them | S |
| COR-12 | Treat a manifest entry whose file disappeared as a 404 instead of a 500 | A partially deleted directory build crashes requests today | S |
| COR-13 | Validate `apiPrefixes` at startup: leading slash, no trailing slash, no duplicates, no overlap with `/_app` | A typo in a prefix silently routes API calls into the SPA fallback | S |
| COR-14 | Detect `+page.server.ts`, `+server.ts` and form actions in `svelteDoctor` and explain they never run | Users copy SvelteKit tutorials and wonder why their server code is ignored | S |
| COR-15 | Survive Ktor's development-mode auto reload without leaking the dev proxy's HTTP client | Each reload creates a new client and threads pile up in long sessions | S |
| COR-16 | Return `application/problem+json` (RFC 9457) bodies from the built-in guards, opt-in | Tools and clients understand one standard error shape | M |

### Developer experience

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| DX-01 | Show a small overlay in the browser when the Kotlin app restarted or the API changed, with a reload button | After a Kotlin change the page keeps old types and calls until the developer notices | M |
| DX-02 | Print a startup summary in development with the active security settings, prefixes and proxy target | Secure defaults change behaviour, and seeing them saves debugging a 403, 413 or 429 | S |
| DX-03 | Add `svelteDoctor --ci` with JSON output and a non-zero exit code | Teams can run the same checks in CI instead of only on a laptop | S |
| DX-04 | Detect a frontend folder named `web`, `ui` or `client` when `frontend` is missing, and say which setting to change | The first build of an existing project fails with a generic message | S |
| DX-05 | Add `publicEnv("PUBLIC_X")` to the Gradle DSL, which checks the prefix and adds it to `buildEnv` | Passing a non-public variable to the frontend build by mistake should fail the build | S |
| DX-06 | Reload `publicConfig` in development without restarting the app | Tweaking a config value costs a full restart today | S |
| DX-07 | Add a dev-only switch that delays or fails chosen endpoints, for example `?__ktorSvelteDelay=2000` | Loading and error states are hard to test against a fast local backend | M |
| DX-08 | Serve a route table at `/_ktor-svelte/routes` in development with Ktor routes and SvelteKit pages side by side | Overlaps between API routes and pages are a common source of "why does this 404" | M |
| DX-09 | Warn at startup when a Ktor route shadows a prerendered page | A route registered before the plugin silently wins over a page with the same path | S |
| DX-10 | Answer the missing-build 503 in development with an HTML help page | The browser is where developers look first, and a page can link the fix | S |
| DX-11 | Add `svelteSync --dry-run` that prints the planned package.json and file changes | Developers want to see what the plugin changes before it rewrites files | S |
| DX-12 | Read a shared `.env.development` in Vite and in the Ktor app during development | Ports, URLs and feature flags are configured twice and drift apart | M |
| DX-13 | Add a `svelteUpgrade` task that bumps SvelteKit, Vite, Svelte and the adapter together | Upgrading one of them alone often breaks the build | M |
| DX-14 | Let `svelteDevAll` open the browser once the app is ready, with an opt-out | Saves one step on every start | S |
| DX-15 | Print a short diff when `svelteVerifySync` or `svelteVerifyTs` fails | The task names stale files but not what changed | S |
| DX-16 | Offer `svelte { preset(Preset.Full) }` that turns on Tailwind, DaisyUI, Lucide and i18n | New projects copy the same blocks from the docs | S |
| DX-17 | Add a VS Code extension or snippets file next to the IntelliJ live templates | Not everyone uses IntelliJ for the frontend half | M |
| DX-18 | Make `svelteDevAll` restart only after the Kotlin compile succeeded | A broken compile restarts the app with old classes and confusing errors | S |
| DX-19 | Show compile errors from the continuous Kotlin build in the browser overlay | Developers look at the browser and miss errors in the Gradle output | M |
| DX-20 | Add `svelteRun --script=test --watch` support that keeps the process attached | Frontend test watchers exit when run through Gradle | S |
| DX-21 | Generate a `docs/` page per app with its routes, DTOs and settings, opt-in | Teams want internal API docs without running Swagger | M |
| DX-22 | Let `svelteInit` take a template name: minimal, dashboard, marketing | A blank SvelteKit page is far from what most apps start with | M |
| DX-23 | Add `--port` and `--host` options to `svelteDevAll` | Running two projects at once needs build file changes today | S |
| DX-24 | Keep app state across restarts in development through a `devState` holder, opt-in | Every Kotlin change logs the developer out of their session | M |
| DX-25 | Print the generated client's changes after each regeneration in development | It is hard to tell which services changed after a Kotlin edit | S |
| DX-26 | Add a `svelteClean --frontend-only` option | `deepClean` is too much when only the frontend cache is broken | S |
| DX-27 | Provide a Gradle `--offline` friendly mode that skips the package manager when `node_modules` matches the lockfile hash | Builds on trains and planes fail at `svelteInstall` | S |
| DX-28 | Suggest the closest setting name when an unknown `svelte { }` property is used through Groovy DSL | Groovy users get a generic missing-property error | S |
| DX-29 | Add a `ktor-svelte` CLI wrapper (`kts dev`, `kts build`, `kts doctor`) that calls Gradle | Frontend developers find Gradle task names hard to remember | M |
| DX-30 | Watch `frontend/messages/*.json` in development and regenerate `Messages` without a Gradle run | Adding a translation key needs a manual sync today | M |

### Generated client

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| TS-01 | Generate stable query keys (`api.notes.list.key(query)`) for TanStack Query and similar caches | Every app that adds a data cache writes these keys by hand | S |
| TS-02 | Generate a runes-based `resource()` helper with `data`, `error` and `loading` | Loading and error state around API calls is the most repeated code in components | M |
| TS-03 | Inline `publicConfig` into the served HTML so it is available synchronously | `loadPublicConfig()` forces an async step for values the server already knows | M |
| TS-04 | Read `PUBLIC_API_URL` into `apiConfig.baseUrl` automatically | Frontends served from a CDN need this wiring in every app | S |
| TS-05 | Generate typed WebSocket clients from Ktor `webSocket` routes | Server-sent events are typed, but WebSockets fall back to strings | L |
| TS-06 | Generate form helpers that post `FormData` and map 422 errors to fields | Plain HTML forms are still common and the JSON client does not cover them | M |
| TS-07 | Add request and response interceptors to `apiConfig` | Adding a header per request or logging needs a custom `fetch` today | S |
| TS-08 | Add automatic retries with backoff for idempotent requests, opt-in | Mobile networks drop requests that would succeed on a second try | S |
| TS-09 | Add a timeout option per request and globally | A hanging request blocks the UI until the browser gives up | S |
| TS-10 | Generate JSDoc from route descriptions in `describe { }` | Editors show nothing when hovering a service today | S |
| TS-11 | Generate `zod`-free runtime type guards (`isNote(value)`) for each DTO | Data from local storage or postMessage needs validation too | M |
| TS-12 | Mark deprecated routes with `@deprecated` in the client | Teams want editor warnings before they remove an endpoint | S |
| TS-13 | Support discriminated unions from sealed classes with exhaustive `switch` helpers | Sealed hierarchies are common in Kotlin and awkward to consume in TypeScript | M |
| TS-14 | Generate an `OpenAPI` diff in CI that flags breaking changes | A renamed field breaks old frontends that are still cached | M |
| TS-15 | Offer an Angular, React or plain fetch flavour of the client from the same generator | Some teams have a second frontend that is not Svelte | L |
| TS-16 | Add optimistic update helpers for list endpoints | Optimistic UIs need the same three steps every time | M |
| TS-17 | Generate a mock server from the OpenAPI document for frontend-only development | Frontend work stops when the backend is broken | M |
| TS-18 | Add cancellation of superseded requests, for example search-as-you-type | Out-of-order responses overwrite newer results | S |
| TS-19 | Expose response headers such as `ETag` and support `If-None-Match` in the client | The client cannot use conditional requests for API data | M |
| TS-20 | Generate typed SSE reconnection with `Last-Event-ID` | Live updates stop silently after a network blip | M |

### Gradle plugin and tooling

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| GP-01 | Mark `svelteInstall` up to date from a hash of the lockfile instead of the presence of `node_modules` | A changed lockfile with an existing `node_modules` skips the install | S |
| GP-02 | Make `svelteBuild` relocatable for the remote build cache | Teams with a shared Gradle cache rebuild the frontend on every machine | M |
| GP-03 | Stop starting `bun --version` while Gradle configures the build | A process per configuration slows every build that includes frontend tasks | S |
| GP-04 | Restart only the app classloader in `svelteDevAll` instead of the whole JVM | A full JVM restart per Kotlin change costs seconds | L |
| GP-05 | Make `svelteVerifyTs` up to date when classes and resources did not change | `check` starts the app on every run today | S |
| GP-06 | Support Gradle's isolated projects mode | Large builds are moving to it, and plugins that read other projects block them | M |
| GP-07 | Offer an option to download a pinned Node or Bun when none is installed | CI images and new laptops fail at the first build | M |
| GP-08 | Support multiple frontends in one project with `svelte("admin") { }` | Admin panels are often a second SvelteKit app | L |
| GP-09 | Publish a version catalog (`io.github.nijasc:ktor-svelte-catalog`) with matching Ktor, Kotlin and plugin versions | Upgrades need several coordinated version bumps | S |
| GP-10 | Add a `svelteBundleReport` task that lists the largest files, compression ratios and total JAR impact | Nobody notices when a 5 MB image lands in the JAR | S |
| GP-11 | Warn when the frontend build output is larger than a configurable budget | Bundle size creeps up one dependency at a time | S |
| GP-12 | Support Kotlin Multiplatform projects with a JVM target as the server | KMP projects cannot apply the plugin today | L |
| GP-13 | Generate a GitHub Actions workflow from `svelteInit --ci` for existing projects | Only the setup script writes a workflow today | S |
| GP-14 | Report plugin errors through Gradle's Problems API | IDEs show problems reported through the API next to the build script line | M |
| GP-15 | Skip touching package.json in `svelteSync` when the settings did not change | Touching package.json invalidates the install and the build | S |
| GP-16 | Support Maven builds with a small Maven plugin | Some Ktor teams use Maven and cannot use the Gradle plugin | L |

### Performance

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| PERF-01 | Compute the CSP script hashes in `svelteBundle` and store them in the manifest | The runtime reads and hashes every page again after each deploy | S |
| PERF-02 | Build ETag, Cache-Control and content-type strings once per manifest entry | They are formatted again on every request | S |
| PERF-03 | Keep a bounded cache from request path to resolution result | Popular paths resolve the same way every time | S |
| PERF-04 | Read classpath assets on `Dispatchers.IO` or through a non-blocking channel | Classpath streams block the request coroutine | S |
| PERF-05 | Stream dev proxy responses with `BodyHandlers.ofPublisher` | Each proxied Vite response holds a thread while it is copied | S |
| PERF-06 | Recompress with Brotli quality 11 and zopfli in `svelteBundle`, opt-in | The build runs once and maximum compression saves bytes on every download | M |
| PERF-07 | Let apps list extra immutable path prefixes, for example hashed fonts in `static/` | Only `_app/immutable/` gets a one-year cache | S |
| PERF-08 | Send `103 Early Hints` or `Link: rel=preload` for each page's entry chunks | Browsers can start fetching the app before the HTML is parsed | M |
| PERF-09 | Document and test HTTP/2 and HTTP/3 with Netty | A SvelteKit page loads many small chunks, which multiplexing handles better | S |
| PERF-10 | Split i18n message tables into one lazily loaded module per locale | Every visitor downloads all locales today | M |
| PERF-11 | Offer a setting to leave gzip variants out of the JAR when Brotli or zstd exist | Duplicate variants make the JAR noticeably larger | S |
| PERF-12 | Benchmark request handling with JMH in CI and fail on large regressions | Resolver, CSP and validation run on every request and nothing measures them | M |
| PERF-13 | Add ETags generated from the response body for API GET routes, opt-in per route | Repeated reads of unchanged data still cost a full transfer | M |
| PERF-14 | Keep the compressed body of identical API GET responses in memory for a short time, opt-in | Popular endpoints are compressed again for every request | M |
| PERF-15 | Use zstd dictionaries trained on the app's own JSON for API compression | Small JSON responses compress poorly without a dictionary | L |
| PERF-16 | Prefetch data for the next page on link hover through the generated client | SvelteKit prefetches code but not API data | M |
| PERF-17 | Measure and document cold-start time of the JAR, and offer CDS archives | Short-lived containers pay JVM startup on every scale-up | M |
| PERF-18 | Offer a GraalVM native image path with the frontend in resources | Native images start in milliseconds and use less memory | L |

### Features

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| FEAT-01 | Add a `serverData` hook that inlines JSON for the first page load into the HTML | Saves the first API round trip on pages without server rendering | M |
| FEAT-02 | Add first-class OAuth and OpenID Connect sign in on top of the session recipe | Social and company sign in is the next thing most apps need | L |
| FEAT-03 | Add CSRF tokens as an option for apps that must support old browsers without `Origin` | The origin check relies on modern browsers sending `Origin` or `Sec-Fetch-Site` | M |
| FEAT-04 | Add a feature-flag helper shared between Ktor and Svelte through `publicConfig` | Flags are needed on both sides and should be typed once | M |
| FEAT-05 | Add a maintenance mode that serves a static page and 503 on API paths | Deploys and migrations need a clean way to pause the app | S |
| FEAT-06 | Serve a generated `sitemap.xml` and `robots.txt` from prerendered pages | SEO needs both, and the manifest knows every page | S |
| FEAT-07 | Add Open Graph and meta tag helpers that read `publicConfig` | Social previews need per-environment URLs | S |
| FEAT-08 | Add server-side page view counting without third-party scripts | Many apps add a tracker only to count page views | M |
| FEAT-09 | Add a PWA option that generates a web manifest and service worker from the build | Installable apps and offline caching are common requests | M |
| FEAT-10 | Resize images and add modern formats for files in `static/` at build time | Unoptimised images are the largest files in most builds | M |
| FEAT-11 | Support Ktor's resources plugin (type-safe routes) in the TypeScript generator | Teams using type-safe routes lose some route information today | M |
| FEAT-12 | Add a background job helper with progress reported over SSE | Long tasks need progress in the UI, and the pieces exist already | M |
| FEAT-13 | Add email templates written in Svelte and rendered at build time | Apps need branded emails and already have Svelte and Tailwind | L |
| FEAT-14 | Add a typed notifications channel over SSE for server-to-browser messages | Many apps build the same toast-from-server pattern | M |
| FEAT-15 | Add a multi-tenant mode that serves different builds per host name | White-label apps want one JAR with several frontends | L |
| FEAT-16 | Support GraphQL in the generator for apps that use a Kotlin GraphQL server | Some Ktor apps expose GraphQL instead of REST | L |
| FEAT-17 | Add a `ktor-svelte-admin` module that generates CRUD screens from DTOs | Internal tools need list and edit pages for every entity | L |
| FEAT-18 | Map SvelteKit remote functions to Ktor routes once they are stable | They could replace hand-written client calls entirely | L |
| FEAT-19 | Share DTOs through Kotlin/JS or Kotlin/Wasm as an alternative to generated TypeScript | Teams that use Kotlin on the frontend want the same classes | L |
| FEAT-20 | Add a browser panel in development with requests, timings and validation errors | Debugging the API from the page is faster than switching to DevTools | M |

### Docs site

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| SITE-01 | Add an interactive page that builds the setup command from checkboxes | The setup flags table is long, and a form is faster | M |
| SITE-02 | Add a playground that runs the generator on pasted OpenAPI and shows the TypeScript | People want to see the client before they install anything | M |
| SITE-03 | Add a migration guide for every breaking release, linked from the changelog | Release notes list changes but not the steps to adopt them | S |
| SITE-04 | Add an architecture page with a diagram of build, bundle, manifest and request flow | Contributors read four files to see how a request reaches a file | S |
| SITE-05 | Add a comparison page with adapter-node, Ktor plus a separate frontend, and other full-stack setups | Helps people decide whether ktor-svelte fits | S |
| SITE-06 | Add a tutorial that builds the notes app step by step | The examples show the result but not the path to it | M |
| SITE-07 | Generate each setting's default value in the reference from the code | Hand-written defaults drift from the code | M |
| SITE-08 | Add "open in StackBlitz" buttons to frontend snippets | Readers try snippets faster | S |
| SITE-09 | Add a feedback link per page that opens a prefilled GitHub issue | Feedback on unclear pages is otherwise lost | S |
| SITE-10 | Translate the docs into German as a second locale | Part of the audience prefers German | L |
| SITE-11 | Add an `llms.txt` and a single-page Markdown export of the docs | AI assistants answer questions better with one clean file | S |
| SITE-12 | Compile the Kotlin and type-check the TypeScript in every docs code block in CI | Snippets break silently when the API changes | M |
| SITE-13 | Add social preview images per page | Shared links look empty in chat apps | S |
| SITE-14 | Publish a "main" version of the docs on every push to `main` | Contributors want to read the docs for unreleased changes | S |
