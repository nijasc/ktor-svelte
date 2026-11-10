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

### Correctness and robustness

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| COR-01 | Let the generated client-side `validate()` cover map values and sealed subtypes | The server now checks them, so the browser shows those errors only after a round trip | M |
| COR-02 | Install `AutoHeadResponse` for API routes, or document it | HEAD on a GET API route answers 404 today, which confuses monitoring tools | S |
| COR-03 | Fail at startup when two JARs on the classpath ship `ktor-svelte/manifest.json` | The first one wins silently, so a library that bundles a frontend could replace the app's | S |
| COR-04 | Validate `Manifest` entries at load time and report the bad entry | A truncated or hand-edited manifest fails on the first request with an unclear exception | S |
| COR-05 | Stream the dev proxy request body instead of reading it into a byte array | Large uploads in development load fully into memory before reaching Vite | S |
| COR-06 | Use the app's JSON configuration in `SchemaConstraints` | Contextual serializers registered in `transport { json { } }` are unknown to the validator, so those fields are skipped | M |

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

### Project setup and tooling

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| SET-01 | Measure coverage with Kover and post it on PRs | The bug hunt found validation gaps that a coverage report would have shown as untested branches | S |
| SET-02 | Run the generated TypeScript through `tsc --strict` in a test | The escaping bugs fixed in #41 compiled fine in Kotlin and only failed in the frontend | S |
| SET-03 | Add a Renovate or Dependabot config for Gradle, npm and GitHub Actions | Versions are pinned in several places (version catalog, `LibrarySpec`, examples, Actions SHAs) | S |
| SET-04 | Run the functional tests on Windows and macOS in CI | The Windows `outputDir` bug (#42) only showed up on Windows paths | M |
| SET-05 | Add a `detekt` setup next to ktlint | ktlint covers formatting; detekt would have flagged the dead `compoundConfiguration` and duplicated helpers | S |
| SET-06 | Add a test that every resource template is used and renders without leftover `{{` | Templates now live outside the code, so an orphaned or broken template would go unnoticed | S |

### Documentation

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| DOC-01 | Add a "Deploying behind a reverse proxy" section with nginx and Caddy snippets | Forwarded headers, the origin check and the local-only endpoints all depend on it | S |
| DOC-02 | Add a `SECURITY.md` with a reporting address and the list of secure defaults | Makes the security story visible on GitHub and gives researchers a contact | S |
| DOC-03 | Publish an API reference with Dokka | The README is long, and readers cannot jump from a setting to its type and default | M |
| DOC-04 | Add a troubleshooting page that maps common error messages to fixes | Most plugin errors already say what to do, but users search for them by text | S |

### Performance

| ID | Suggestion | Why | Effort |
|---|---|---|---|
| PERF-01 | Watch the build folder with `WatchService` in development instead of walking it per request | A rescan is still one `stat` per file on every request, even with cached hashes | M |
| PERF-02 | Read small classpath assets into memory once | Every request opens a classpath stream; caching files under a size limit avoids that | S |
| PERF-03 | Precompute the CSP of every HTML page at startup | The first request to each page reads and hashes it, which shows up as latency right after a deploy | S |
