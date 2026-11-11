# Suggestions

Ideas for ktor-svelte that came out of the security review, the bug hunt, the package restructure and the pentest of a sample app. Nothing here is decided.

How to use this file: read the suggestions, and move the ones you want into **Approved** (keep the ID, so commits and PRs can refer to it). Delete the ones you reject, or leave them where they are. Effort is a rough guess: S is under a day, M is a few days, L is a week or more.

## Approved

None yet.

## Suggestions

### Security

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| SEC-01 | Add an opt-in `Strict-Transport-Security` header with a `hsts { maxAge, includeSubDomains }` setting | The plugin cannot know about TLS, but apps behind HTTPS should send HSTS, and the plugin already owns the other security headers | S |
| SEC-02 | Send `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Resource-Policy: same-origin` by default, with an opt-out | Isolates the app's window and assets from other sites at no cost for a same-origin SPA | S |
| SEC-03 | Send a default `Permissions-Policy` that turns off camera, microphone, geolocation and similar features | Limits damage from injected scripts; users can widen it like the CSP | S |
| SEC-04 | Drop the "Add the origin with allowedOrigins(...)" hint from the 403 body in production | The pentest showed it tells an attacker which framework and setting are in use; keep it in development mode | S |
| SEC-05 | Only accept a theme or locale cookie in the inline startup script when it is one of the configured values | The script copies any cookie value into `data-theme` and `lang`; not exploitable today, but an allow list is cheap | S |
| SEC-06 | Run `svelteInstall` with `--ignore-scripts` by default, with an opt-out | Postinstall scripts of npm packages are the most common supply-chain attack, and SvelteKit apps rarely need them | S |
| SEC-07 | Memoize `paramRoutes` matching, or limit `[...rest]` segments per pattern | Several rest segments in one pattern make matching grow polynomially with the number of path segments a client sends | S |
| SEC-08 | Add a `rateLimit` helper for API paths, built on Ktor's RateLimit plugin | Login and write endpoints in example apps have no brute-force protection; a one-line default would help | M |
| SEC-09 | Offer a session helper (signed, `HttpOnly`, `Secure`, `SameSite=Lax` cookie) | The pentest app had to hand-roll its session cookie, which is where most real apps make mistakes | M |
| SEC-10 | Add a CI job that runs OWASP ZAP baseline against the notes example | Turns the manual pentest into a regression check for headers, cookies and error leaks | M |
| SEC-11 | Hash `buildEnv` values instead of storing them as task inputs | Secret values passed through `buildEnv` end up in the configuration cache; a hash keeps up-to-date checks working | S |
| SEC-12 | Warn at startup when `allowedOrigins` contains `http://` origins in production | A plain HTTP origin can be spoofed on the network, which defeats the origin check | S |
| SEC-13 | Fail the build when the frontend output contains a `.map` file referenced from JS while `includeSourceMaps` is off | The map is left out, but the `sourceMappingURL` comment still tells attackers where to look | S |
| SEC-14 | Scan the frontend build for strings that look like secrets (API keys, private keys) in `svelteBundle` | `PUBLIC_` env vars are easy to misuse, and a leaked key in a JAR is hard to take back | M |
| SEC-15 | Add a `Content-Security-Policy-Report-Only` mode with a report endpoint | Teams can roll out a stricter CSP without breaking production first | M |
| SEC-16 | Limit JSON nesting depth and array length on received bodies | The 1 MiB body limit still allows deeply nested JSON that is slow to parse and validate | S |
| SEC-17 | Run `npm audit` or `bun audit` in `svelteDoctor` and in CI for the examples | Known vulnerable frontend packages are reported nowhere today | S |
| SEC-18 | Add a `trustedProxies(...)` setting and only honour forwarded headers from those addresses | Today forwarded headers are either fully trusted through Ktor plugins or make a request remote; an allow list makes both cases explicit | M |
| SEC-19 | Make the status endpoint require a token when it is reachable through a proxy | Teams that want to monitor the build fingerprint remotely have no safe way to do it | S |
| SEC-20 | Set `Cache-Control: no-store` on API responses that set or read cookies, unless the route sets its own | Shared caches could keep personal API answers when a proxy is misconfigured | S |
| SEC-21 | Add Subresource Integrity attributes to the entry scripts in prerendered HTML | Protects pages served from a CDN in front of the JAR against a tampered asset | M |
| SEC-22 | Use `strict-dynamic` in the generated CSP when the browser supports it | Lets lazily loaded chunks run without listing them, and makes the policy easier to extend | S |
| SEC-23 | Reject request paths with encoded slashes or backslashes outright with 400 | They never match a manifest entry anyway, and rejecting them early removes a class of proxy confusion bugs | S |
| SEC-24 | Add a `svelteSecurityReport` task that prints the effective headers, CSP and guards of the app | Makes the secure defaults visible and reviewable before a release | M |
| SEC-25 | Pin the Gradle wrapper checksum and verify it in CI | A replaced wrapper JAR runs arbitrary code on every build | S |

### Correctness and robustness

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| COR-01 | Let the generated client-side `validate()` cover map values and sealed subtypes | The server now checks them, so the browser shows those errors only after a round trip | M |
| COR-02 | Install `AutoHeadResponse` for API routes, or document it | HEAD on a GET API route answers 404 today, which confuses monitoring tools | S |
| COR-03 | Fail at startup when two JARs on the classpath ship `ktor-svelte/manifest.json` | The first one wins silently, so a library that bundles a frontend could replace the app's | S |
| COR-04 | Validate `Manifest` entries at load time and report the bad entry | A truncated or hand-edited manifest fails on the first request with an unclear exception | S |
| COR-05 | Stream the dev proxy request body instead of reading it into a byte array | Large uploads in development load fully into memory before reaching Vite | S |
| COR-06 | Use the app's JSON configuration in `SchemaConstraints` | Contextual serializers registered in `transport { json { } }` are unknown to the validator, so those fields are skipped | M |
| COR-07 | Return 405 with an `Allow` header for wrong methods on frontend paths | A POST to a page answers 404 today, which hides typos in form actions | S |
| COR-08 | Answer `Range` requests for large static assets | Video and large downloads in `static/` cannot be resumed or seeked without range support | M |
| COR-09 | Add `Last-Modified` from the build time next to the ETag | Some proxies and crawlers only revalidate with `If-Modified-Since` | S |
| COR-10 | Fail `svelteBundle` when two files differ only in case | A build made on Linux can serve the wrong file on a case-insensitive file system | S |
| COR-11 | Reload `libraries.properties` in development mode | Changing themes or locales in Gradle needs an app restart before the server sees them | S |
| COR-12 | Handle `Accept-Encoding: br;q=0.5, gzip;q=1` by preferring the higher quality | Encoding selection ignores q-values except zero, so the client preference is not respected | S |
| COR-13 | Answer `If-None-Match` on the SPA fallback and the 404 page with weak ETags only | The same fallback body is served for many URLs, so a strong ETag per body can confuse caches | S |
| COR-14 | Make the dev proxy forward WebSocket upgrades instead of answering 502 | Apps that use their own WebSockets through Vite in development cannot test them on the Ktor port | M |
| COR-15 | Shut the dev proxy HTTP client down when the application stops | Repeated restarts in `svelteDevAll` leave idle client threads behind | S |
| COR-16 | Report a clear error when `generateTsOutput` points outside the project | Generated files can land in an unexpected folder without a warning | S |
| COR-17 | Keep the order of fields in validation errors the same as in the DTO | Errors from annotations and from rules are reported in two passes, so forms show them in a different order | S |

### Developer experience

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| DX-01 | Make enum constants consistent in the next breaking release (`DevMode.Auto`, `PackageManager.Bun`) | `DevMode` and `PackageManager` use UPPER_CASE while `SvelteRouting` and `LocaleStrategy` use PascalCase | S |
| DX-02 | Rename `DevMode` to `SvelteDevMode` in the same release | Every other public type has the `Svelte` prefix, and `DevMode` is a likely clash in user code | S |
| DX-03 | Add a `svelteNew` task or a Gradle init script that creates the Kotlin side as well | `svelteInit` creates the frontend only; a new user still writes `Application.kt` and the build by hand | M |
| DX-04 | Print the URL of the app, Vite and the API docs when `svelteDevAll` is ready | The current output is long, and the one link people need is easy to miss | S |
| DX-05 | Make `svelteDoctor` check that a reverse proxy forwards `Host` and `X-Forwarded-*` | Wrong proxy settings break the origin check and the local-only endpoints in ways that are hard to debug | M |
| DX-06 | Generate typed route helpers (`routes.notes.id(5)`) for SvelteKit pages | Links between pages are untyped strings today, while API calls are fully typed | M |
| DX-07 | Ship a VS Code launch configuration next to the IntelliJ ones | Many Svelte developers use VS Code, and `svelteGenerateRunConfigurations` only helps IntelliJ users | S |
| DX-08 | Add error codes to 4xx JSON bodies (`{"code":"cross_origin","message":...}`) | Frontends can branch on a stable code instead of matching message text | S |
| DX-09 | Generate a typed `fetch` wrapper for SvelteKit `load` functions that passes `event.fetch` automatically | Forgetting `event.fetch` in `load` breaks prerendering in a way that is hard to spot | S |
| DX-10 | Show validation errors next to inputs with a small generated Svelte action (`use:field`) | `bounds` and `validate()` exist, but wiring them to inputs is still manual in every form | M |
| DX-11 | Add a `svelteUpgrade` task that bumps SvelteKit, Vite and the adapter together | Upgrading one of them alone often breaks the build | M |
| DX-12 | Let `svelteDevAll` open the browser once the app is ready, with an opt-out | Saves one step on every start and matches what `vite dev --open` users expect | S |
| DX-13 | Print a one-line diff summary when `svelteVerifySync` or `svelteVerifyTs` fails | The task names the stale files, but not what changed, so users rerun locally to find out | S |
| DX-14 | Offer a Kotlin DSL shortcut `svelte { preset(Preset.Full) }` that turns on Tailwind, DaisyUI, Lucide and i18n | New projects copy the same five blocks from the README | S |
| DX-15 | Generate a mock API module from the OpenAPI document for frontend tests | Frontend unit tests need a fake backend, and the types to build one already exist | M |
| DX-16 | Add a `svelteGenerateTs --watch` mode that does not need the full app to start | Large apps take seconds to boot just to refresh the generated client | L |
| DX-17 | Generate a `routes.json` that maps each service function to its Ktor route file and line, for an IDE plugin or a quick search | Jumping from a frontend call to its Kotlin route is manual today | M |
| DX-18 | Warn in development when a route under the API prefix has no documented response type | Those routes become `unknown` in TypeScript, which is easy to miss | S |
| DX-19 | Support `@JsonSchema.Description` in generated types as part of the type name or a separate docs JSON | Field descriptions are lost on the way to the frontend | M |
| DX-20 | Let `svelteDoctor --fix` apply the fixes it can do on its own | Most doctor findings have one obvious fix, such as adding `#api` to package.json | M |
| DX-21 | Provide an IntelliJ live template set for routes, DTOs and generated client calls | Speeds up the most common edits in a ktor-svelte project | S |

### Project setup and tooling

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| SET-01 | Measure coverage with Kover and post it on PRs | The bug hunt found validation gaps that a coverage report would have shown as untested branches | S |
| SET-02 | Run the generated TypeScript through `tsc --strict` in a test | The escaping bugs fixed in #41 compiled fine in Kotlin and only failed in the frontend | S |
| SET-03 | Add a Renovate or Dependabot config for Gradle, npm and GitHub Actions | Versions are pinned in several places (version catalog, `LibrarySpec`, examples, Actions SHAs) | S |
| SET-04 | Run the functional tests on Windows and macOS in CI | The Windows `outputDir` bug (#42) only showed up on Windows paths | M |
| SET-05 | Add a `detekt` setup next to ktlint | ktlint covers formatting; detekt would have flagged the dead `compoundConfiguration` and duplicated helpers | S |
| SET-06 | Add a test that every resource template is used and renders without leftover `{{` | Templates now live outside the code, so an orphaned or broken template would go unnoticed | S |
| SET-07 | Add a template repository on GitHub that uses the latest release | "Use this template" is the fastest start for people who do not run the setup script | S |
| SET-08 | Cache bun, npm and pnpm stores in CI | Example jobs spend most of their time installing frontend dependencies | S |
| SET-09 | Run CI against the newest Ktor and Kotlin snapshots weekly | Breaking changes upstream show up before users report them | S |
| SET-10 | Add a `.editorconfig` | Keeps LF line endings and indentation consistent in editors that ignore Gradle and ktlint | S |
| SET-11 | Add a pre-commit hook script that runs `ktlintFormat` and the no-comment check | Formatting and comment violations are caught before CI instead of after | S |
| SET-12 | Add a check that fails on code comments | The no-comment rule is only enforced by review today | S |
| SET-13 | Use Gradle convention plugins in `build-logic` for shared build configuration | Publishing, ktlint and toolchain setup are repeated across modules | M |
| SET-14 | Turn on the Gradle build cache in CI with a remote cache or the GitHub Actions cache | Unchanged modules rebuild on every push | S |
| SET-15 | Add `CODEOWNERS` and branch protection rules as code | Review requirements live only in GitHub settings today | S |
| SET-16 | Add a Dev Container definition with JDK, bun and node | Contributors get a working setup in one click, including on Codespaces | S |
| SET-17 | Check links in README and docs in CI | Docs point to many anchors and external pages that move | S |
| SET-18 | Lint the template resource files with prettier in CI | Templates are no longer formatted by ktlint, so style drift goes unnoticed | S |

### Documentation

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| DOC-01 | Add a "Deploying behind a reverse proxy" section with nginx and Caddy snippets | Forwarded headers, the origin check and the local-only endpoints all depend on it | S |
| DOC-02 | Add a `SECURITY.md` with a reporting address and the list of secure defaults | Makes the security story visible on GitHub and gives researchers a contact | S |
| DOC-03 | Publish an API reference with Dokka | The README is long, and readers cannot jump from a setting to its type and default | M |
| DOC-04 | Add a troubleshooting page that maps common error messages to fixes | Most plugin errors already say what to do, but users search for them by text | S |
| DOC-05 | Add a migration guide section for every breaking release | release-please notes list changes but not the steps to adopt them | S |
| DOC-06 | Add a short architecture page with a diagram of build, bundle, manifest and request flow | Contributors have to read four files to see how a request reaches a file | S |
| DOC-07 | Document how to deploy the single JAR to Docker, Fly.io and a plain VM | The single-JAR story is the main selling point but stops at `java -jar` | S |
| DOC-08 | Add a comparison with SvelteKit adapter-node and with Ktor plus a separate frontend server | Helps people decide whether ktor-svelte fits before they try it | S |
| DOC-09 | Split the README into a short landing page and a docs site | The README is long enough that new users miss the quick start | M |
| DOC-10 | Add a "Recipes" section: auth with sessions, file uploads, SSE, pagination, admin area | The examples show features, but not how to solve common app tasks | M |
| DOC-11 | Document every system property and Gradle property the plugin reads | `svelte.skip`, `svelte.dev`, `svelte.verifyTs` and the runtime properties are spread across sections | S |
| DOC-12 | Add a FAQ about SSR and why ktor-svelte uses adapter-static | It is the first question people ask | S |
| DOC-13 | Record a two minute screencast of `svelteDevAll` with HMR and generated types | Shows the main benefit faster than text | S |

### Performance

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| PERF-01 | Watch the build folder with `WatchService` in development instead of walking it per request | A rescan is still one `stat` per file on every request, even with cached hashes | M |
| PERF-02 | Read small classpath assets into memory once | Every request opens a classpath stream; caching files under a size limit avoids that | S |
| PERF-03 | Precompute the CSP of every HTML page at startup | The first request to each page reads and hashes it, which shows up as latency right after a deploy | S |
| PERF-04 | Serve `immutable` assets with `Content-Length` and zero-copy file regions when the source is a directory | Netty can send files without copying them through the JVM heap | M |
| PERF-05 | Add a `103 Early Hints` or `Link: rel=preload` header for the entry chunks of each page | Browsers can start fetching the app before the HTML is parsed | M |
| PERF-06 | Benchmark request handling with JMH in CI and fail on large regressions | Resolver, CSP and validation run on every request, and nothing measures them today | M |
| PERF-07 | Cache the result of `acceptsHtml` and `needsLocalePrefix` checks per path pattern | Every request repeats string splitting that only depends on the path | S |
| PERF-08 | Skip `SchemaConstraints` for types without constraints or `Validated` rules, cached per class | Since the nested walk landed, every received object is walked even when nothing can fail | S |
| PERF-09 | Parse the manifest during startup instead of on the first request | The first visitor after a deploy pays for parsing a large manifest, and a broken manifest is found late | S |

### Features

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| FEAT-01 | Generate typed WebSocket clients from Ktor `webSocket` routes | Server-sent events are typed already, but WebSockets fall back to strings | L |
| FEAT-02 | Generate form helpers that post `FormData` and map 422 errors to fields | Many apps still use plain forms, and the JSON client does not cover them | M |
| FEAT-03 | Support multiple frontends in one app (`svelte("admin") { }`) | Admin panels are often a second SvelteKit app, and today that needs two Ktor apps or manual routing | L |
| FEAT-04 | Add a `serverData` hook that inlines JSON for the first page load into the HTML | Saves the first API round trip on SPA pages without server rendering | M |
| FEAT-05 | Add an optional health endpoint for production (`/_ktor-svelte/health`) that only reports up or down | Load balancers need a cheap check, and the status endpoint is local-only on purpose | S |
| FEAT-06 | Generate `ApiErrors` types from `StatusPages` handlers as well as from route docs | Errors thrown through StatusPages are missing from the typed error map | M |
| FEAT-07 | Generate Zod-free runtime decoders for response types, opt-in | Responses are trusted as typed today; a decoder catches backend and frontend drift at runtime | M |
| FEAT-08 | Add pagination helpers that generate typed `page()` iterators for list endpoints | Paged lists are common, and each app writes its own loop | M |
| FEAT-09 | Support file upload endpoints in the generated client with progress callbacks | Multipart uploads are the main case `fetch` makes awkward | M |
| FEAT-10 | Add an auth integration that wires Ktor `Authentication` to `onUnauthorized` and a login redirect | Every app with login rebuilds the same glue | M |
| FEAT-11 | Add an optional offline mode with a generated service worker that caches the app shell | A static SPA served from one JAR is a good fit for offline-capable internal tools | L |
| FEAT-12 | Expose server-side feature flags through the public config with typed accessors | `publicConfig` already exists; flags are its most common use | S |

### Testing

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| TEST-01 | Add property-based tests for `RequestResolver` with random paths | Path resolution is security critical, and example-based tests only cover the cases someone thought of | S |
| TEST-02 | Fuzz `SchemaConstraints` and the TypeScript generator with random schemas | Both walk arbitrary user types, which is where the nested-validation and escaping bugs were | M |
| TEST-03 | Add Playwright tests to the notes example for HMR, theme switching and locale switching | e2e tests check HTTP responses but never run the frontend in a browser | M |
| TEST-04 | Test the Gradle plugin against the newest Gradle nightly | Configuration-cache rules change often and break plugins silently | S |
| TEST-05 | Add a test that the published POM and Gradle module metadata have the expected dependencies | A wrong scope on a dependency only shows up for users | S |
| TEST-06 | Add mutation testing with Pitest for the runtime | Shows which tests would not notice a broken guard or resolver | M |
| TEST-07 | Test the published JARs in a separate Gradle build that uses Maven Local instead of `includeBuild` | The examples use composite builds, so packaging mistakes are only caught after release | S |
| TEST-08 | Snapshot-test the full generated client for the notes example | A focused unit test can pass while the full output changes in unexpected places | S |
| TEST-09 | Run the e2e tests against all supported package managers in one matrix job | bun, npm, pnpm and yarn each have their own lockfile quirks | S |

### Release and distribution

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| REL-01 | Sign release artifacts with Sigstore and publish SLSA provenance | Lets users verify that a JAR was built from this repository | M |
| REL-02 | Publish an SBOM (CycloneDX) with every release | Companies need it to approve dependencies | S |
| REL-03 | Publish snapshot builds from `main` | Users can try fixes before a release without building from source | S |
| REL-04 | Add a compatibility table of Ktor, Kotlin, Gradle and SvelteKit versions per release | Users upgrading one of them need to know which ktor-svelte version supports it | S |
| REL-05 | Publish the Gradle plugin marker to Maven Central as well as the Gradle Plugin Portal | Some companies block the Plugin Portal | S |
| REL-06 | Announce releases with a short summary in GitHub Discussions | release-please notes are complete but hard to skim | S |
| REL-07 | Add a deprecation policy: one minor release of warnings before removal | Users know how long renamed APIs such as `SvelteSecurityHeaders` keep working | S |

### Observability

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| OBS-01 | Log one line per refused request (origin check, body limit, local-only endpoints) with the reason | Refusals are silent on the server, which makes support requests hard to answer | S |
| OBS-02 | Expose Micrometer metrics for served assets, cache hits, 304s, refusals and validation failures | Teams can see whether caching and guards behave in production | M |
| OBS-03 | Add the request path and status to the generated client's `ApiError` message and a hook for error reporting | Frontend error reports today only show "Request failed" without context | S |
| OBS-04 | Add an OpenTelemetry trace header passthrough in the generated client | Frontend and backend spans cannot be linked today | S |
| OBS-05 | Log the manifest fingerprint and file count at startup | Makes it obvious which frontend build a running JAR serves | S |

### Accessibility and internationalisation

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| A11Y-01 | Run axe accessibility checks on the example pages in CI | The examples are what users copy, so their accessibility matters | S |
| A11Y-02 | Generate translated validation messages from the i18n catalog | Validation errors are English only, even in apps that configure i18n | M |
| A11Y-03 | Support plural rules in i18n messages (`{count, plural, one {...} other {...}}`) | Simple placeholders produce wrong grammar for counts | M |
| A11Y-04 | Add right-to-left support: set `dir` next to `lang` for RTL locales | Arabic or Hebrew apps need it and the plugin already sets `lang` | S |
| A11Y-05 | Fail `svelteSync` when a message key is missing in one locale, with an opt-out | Missing translations fall back silently today | S |

### Examples

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| EX-01 | Add an `auth` example with login, sessions, CSRF protection and role checks | Security features are easier to adopt when shown in a complete app | M |
| EX-02 | Add a `realtime` example with server-sent events and the generated stream client | Streaming is supported but not shown anywhere | S |
| EX-03 | Add a Docker example with a small runtime image built from the single JAR | Most deployments are containers | S |
| EX-04 | Add a multi-module example where the API lives in its own Gradle module | Larger teams split API and app, and the plugin setup changes slightly | M |
| EX-05 | Add an example with a database (Exposed and SQLite) | CRUD with an in-memory list hides questions about transactions and errors | M |

### Architecture

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| ARC-01 | Split the TypeScript generator into a model step (OpenAPI to types) and a rendering step | The generator mixes analysis and string building in one 800-line class | L |
| ARC-02 | Move `KtorSveltePlugin` task registration into one file per feature (build, dev, libraries, TypeScript) | The plugin class is the longest file in the plugin and touches every feature | M |
| ARC-03 | Share the manifest format between the Gradle plugin and the runtime through a tiny common module | The format constant and encoding list are duplicated in both modules | M |
| ARC-04 | Replace the hand-written manifest JSON in `SvelteBundleTask` with kotlinx.serialization or Gradle's JSON support | Manual quoting is easy to get wrong for unusual file names | S |
| ARC-05 | Introduce a small `SvelteFeature` interface for optional runtime parts (status, public config, docs, guards) | Each optional part is wired inline in the plugin body today | M |

### Community and governance

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| COM-01 | Add issue templates for bug reports and feature requests that ask for versions and the doctor output | Most bug reports need the same information | S |
| COM-02 | Add a PR template with a checklist (README updated, apiDump, tests, no comments) | The hard rules are easy to forget for outside contributors | S |
| COM-03 | Label beginner-friendly issues with `good first issue` and keep a few open | Helps new contributors find a starting point | S |
| COM-04 | Add a `CODE_OF_CONDUCT.md` | Expected by many contributors and companies before they engage | S |
| COM-05 | Publish a public roadmap built from the approved suggestions in this file | Users can see what is planned and comment early | S |
