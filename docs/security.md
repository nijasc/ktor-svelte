# Security

The protections that are on by default, and how to change them. A new app gets safe headers, a strict Content Security Policy, a guard against cross-site writes, size and shape limits on request bodies and a rate limit on writes, without a line of configuration.

<Badge type="tip" text="Ktor plugin" /> <Badge type="info" text="Gradle" />

## Quick start

There is nothing to turn on. Install the plugin and every protection on this page is active:

```kotlin
install(Svelte) {
    generateTs = true
}
```

Change only what your app needs, such as a tighter limit for the login route or a script from another origin:

```kotlin
install(Svelte) {
    rateLimit { limit("login", requests = 5, per = 1.minutes) }
    securityHeaders { allowCspSources("script-src", "https://plausible.io") }
}
```

## At a glance

| Protection | Default | Setting | Section |
| --- | --- | --- | --- |
| `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` | On | `securityHeaders { }` | [Security headers](#security-headers) |
| Content Security Policy for HTML pages | On, with hashes of the inline scripts | `securityHeaders { }` | [Content Security Policy](#content-security-policy) |
| Cross-site writes to the API | Refused with 403 | `originCheck`, `allowedOrigins(...)` | [API request guards](#api-request-guards) |
| Size of API request bodies | 1 MiB | `maxApiBodySize` | [Body size limit](#body-size-limit) |
| Nesting of JSON bodies | 64 levels | `maxJsonDepth`, `maxJsonStringLength` | [JSON shape](#json-shape) |
| Exception messages in production | Hidden | `hideErrorDetails` | [Error details](#error-details) |
| Writes per client | 120 per minute | `rateLimit { }` | [Rate limits](#rate-limits) |
| Broken paths and `Host` headers | 400 | none | [Malformed requests](#malformed-requests) |
| Status endpoint and API docs | This machine, or development only | `internalAccess { }` | [Internal endpoints](#internal-endpoints) |

## Security headers

Security headers are on by default. Every response gets `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` and `Referrer-Policy: strict-origin-when-cross-origin`. Each is a property you can change, or set to `null` to leave out:

```kotlin
install(Svelte) {
    securityHeaders {
        referrerPolicy = "no-referrer"
    }
}
```

| Setting | Default | What it does |
| --- | --- | --- |
| `contentTypeOptions` | `"nosniff"` | The `X-Content-Type-Options` header |
| `frameOptions` | `"DENY"` | The `X-Frame-Options` header. Also sets the CSP's `frame-ancestors` |
| `referrerPolicy` | `"strict-origin-when-cross-origin"` | The `Referrer-Policy` header |
| `automaticContentSecurityPolicy` | `true` | The [automatic CSP](#content-security-policy) on HTML pages |
| `contentSecurityPolicy` | `null` | [Your own policy](#your-own-policy), sent unchanged on every response |
| `allowCspSources(directive, sources...)` | none | [Adds sources](#allow-other-origins) to the automatic policy |
| `enabled` | `true` | `false` turns off all security headers |

To let your pages be framed by your own site, for example:

```kotlin
securityHeaders {
    frameOptions = "SAMEORIGIN"
}
```

## Content Security Policy

Every HTML page from your build also gets a strict `Content-Security-Policy`:

```text
default-src 'self'; script-src 'self' 'sha256-...'; style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none';
base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

`script-src` lists the SHA-256 hash of each inline `<script>` in that page, which covers SvelteKit's startup script and the theme and locale script ktor-svelte adds, and nothing else. `svelteBundle` computes these hashes at build time and stores them in the manifest, so the server never reads a page to build its policy. For builds without them, such as a directory build in development, the server hashes each page once and caches the result. Other inline scripts and scripts from other origins are blocked.

The other directives exist for these reasons:

- `style-src 'unsafe-inline'`: Svelte transitions and many components set inline styles, and SvelteKit can inline small CSS files.
- `img-src` and `font-src` allow `data:` because Tailwind, DaisyUI and Vite inline small images, icons and fonts as data URLs. `blob:` covers images made in the browser, such as upload previews.
- `frame-ancestors` follows `frameOptions`: `'none'` for `DENY`, `'self'` for `SAMEORIGIN`, and left out when `frameOptions` is `null`.

API responses, JavaScript, CSS and other files get no CSP, since it only matters for documents.

No CSP is sent while the dev proxy is active, because Vite injects its own scripts. The other headers are still sent.

### Allow other origins

To load something from another origin, such as an analytics script, add sources to a directive. A directive that is not in the policy yet is added with exactly the sources you list:

```kotlin
securityHeaders {
    allowCspSources("script-src", "https://plausible.io")
    allowCspSources("connect-src", "https://plausible.io")
    allowCspSources("img-src", "https://avatars.example.com")
}
```

### Your own policy

To use your own policy instead, set `contentSecurityPolicy`. It is then sent unchanged on every response, and `allowCspSources` is ignored. Inline scripts in your pages break unless your policy allows them, for example with SvelteKit's own `csp` option in `hash` mode.

### Opting out

```kotlin
securityHeaders { automaticContentSecurityPolicy = false }
securityHeaders { enabled = false }
```

The first turns off only the automatic CSP. The second turns off all security headers.

## API request guards

Two checks protect every path under your API prefixes: the origin check and the body size limit. Both are on by default. The [JSON shape check](#json-shape), [hidden error details](#error-details) and the [rate limit](#rate-limits) add to them.

| Setting | Default | What it does |
| --- | --- | --- |
| `originCheck` | `true` | Refuses writes from other sites with 403 |
| `allowedOrigins(...)` | none | Origins whose writes are accepted anyway |
| `maxApiBodySize` | `1048576` (1 MiB) | Largest request body on API paths, in bytes. `null` removes the limit |
| `maxJsonDepth` | `64` | Deepest nesting of a JSON body. `null` turns the check off |
| `maxJsonStringLength` | `null` | Longest string in a JSON body |
| `hideErrorDetails` | `true` | Hides exception messages in production |

Paths outside your API prefixes, such as frontend files and the dev proxy, are not affected. Repeated slashes count as one, as they do in Ktor's routing, so `//api/notes` is checked like `/api/notes`.

### Origin check

POST, PUT, PATCH, DELETE and every other method except GET, HEAD, OPTIONS and TRACE from a browser on another site are refused with 403, so a cookie session cannot be used for cross-site request forgery. A request is refused when:

- its `Origin` header names a different host than the request, or is `null`, or
- it has no `Origin` but sends `Sec-Fetch-Site: cross-site`.

Only the host is compared, ignoring case, scheme and port, so a TLS-terminating proxy or the Vite dev port does not cause false rejections. The request host comes from Ktor's `origin`, so it follows `XForwardedHeaders` or `ForwardedHeaders` when you install them. Requests with neither header, such as curl, server-to-server calls and tests, are allowed, because browsers always send one of them. GET, HEAD, OPTIONS and TRACE are never checked.

To accept writes from another frontend, such as a separate admin app, list its exact origin:

```kotlin
install(Svelte) {
    allowedOrigins("https://admin.example.com")
}
```

List every origin in one call: a second call replaces the list.

A refused cross-origin write gets `{"message":"Cross-origin API request refused."}`. In development mode the message also says how to allow the origin, which production leaves out so it does not tell attackers which setting to look for.

### Body size limit

Request bodies on API paths are limited to 1 MiB. Larger bodies get 413, whether they send `Content-Length` or are chunked, with a JSON body such as `{"message":"Request body is larger than the limit of 1048576 bytes."}`. It uses Ktor's `RequestBodyLimit` plugin, so do not install that plugin yourself unless you set `maxApiBodySize = null`.

A compressed request body is a way around a size limit, because a few kilobytes can unpack to gigabytes. Ktor only unpacks request bodies when its `Compression` plugin is installed for requests, which `transport { compression() }` does. ktor-svelte then applies the same limit to the unpacked size, so such a body gets 413 as well. The default API compression only compresses responses and never unpacks requests. If you install `Compression` yourself, set its `maxDecodedContentLength`.

To raise the limit, or turn the origin check off:

```kotlin
install(Svelte) {
    originCheck = false
    maxApiBodySize = 10L * 1024 * 1024
}
```

Set `maxApiBodySize = null` to remove the limit. An app that takes uploads raises it to the largest upload it accepts, as in [Upload files](recipes/uploads.md).

### JSON shape

A small body can still be expensive to parse when it nests thousands of arrays. JSON bodies on API paths are checked while they stream in, before any parsing: more than 64 levels of nesting answers 400 with `{"message":"Request JSON is nested deeper than 64 levels."}`. Set `maxJsonStringLength` to also refuse long strings, which is off by default because the body limit already caps them:

```kotlin
install(Svelte) {
    maxJsonDepth = 32
    maxJsonStringLength = 10_000
}
```

Set `maxJsonDepth = null` to turn the depth check off.

### Error details

In production, an exception that no route handles answers with its status and a generic message, such as `{"message":"Internal Server Error."}` on API paths, instead of the exception message, which Ktor sends by default and which can reveal internals. Malformed or unreadable bodies keep their 400 or 415 without naming your classes. The exception is still logged. In development mode, or when you install `StatusPages`, nothing changes. Set `hideErrorDetails = false` to send the messages again.

### Counting refusals

ktor-svelte counts every refused request, so attacks and misconfigurations show up as numbers, not only as log lines. Read the counters from `application.svelteMetrics`, or from the `refusals` object of the [status endpoint](features/endpoints.md#status-endpoint).

| Counter | Counts |
| --- | --- |
| `crossOriginRefusals` | Writes refused by the origin check |
| `bodyTooLargeRefusals` | Bodies refused by the size limit |
| `rateLimitRefusals` | Requests refused by a rate limit |

To export them, bind them to your metrics library, for example Micrometer:

```kotlin
val metrics = svelteMetrics
registry.gauge("svelte.refusals", listOf(Tag.of("reason", "cross_origin")), metrics) { it.crossOriginRefusals.toDouble() }
registry.gauge("svelte.refusals", listOf(Tag.of("reason", "body_too_large")), metrics) { it.bodyTooLargeRefusals.toDouble() }
registry.gauge("svelte.refusals", listOf(Tag.of("reason", "rate_limit")), metrics) { it.rateLimitRefusals.toDouble() }
```

## Rate limits

Each client may send 120 writes per minute to your API paths, meaning every method except GET, HEAD, OPTIONS and TRACE. More get 429 with a `Retry-After` header. Reads and frontend files are never limited. Clients are told apart by `call.request.origin.remoteAddress`, so behind a reverse proxy install `XForwardedHeaders` or `ForwardedHeaders`, or every user shares one limit.

| Setting | Default | What it does |
| --- | --- | --- |
| `apiWrites` | `120` | Writes per client and period. `0` drops the default limit and keeps the named ones |
| `period` | `1.minutes` | The period of the default limit |
| `algorithm` | `RateLimitAlgorithm.FixedWindow` | How the default limit counts. See [Algorithms](#algorithms) |
| `key { call -> }` | The client address | What tells clients apart |
| `limit(name, requests, per, algorithm, key)` | none | A named limit for the routes you wrap in `rateLimit(RateLimitName(name))` |
| `enabled` | `true` | `false` turns off rate limiting |

```kotlin
rateLimit {
    apiWrites = 600
    period = 5.minutes
}
```

### A tighter limit for one route

Routes such as login need a much tighter limit. Name one, and wrap the routes in Ktor's own `rateLimit`:

```kotlin
install(Svelte) {
    rateLimit {
        apiWrites = 300
        limit("login", requests = 5, per = 1.minutes)
    }
}

routing {
    rateLimit(RateLimitName("login")) {
        post("/api/login") { /* ... */ }
    }
}
```

A named limit applies on top of the default one. The generated client knows about 429 answers: see [Rate limits in the client](features/calling-the-api.md#rate-limits).

### Algorithms

Limits use a fixed window by default: the budget refills completely at the end of each period, so a client can send a full budget just before the edge and another just after it. Pick another algorithm when that matters:

| Algorithm | Behaviour |
|---|---|
| `RateLimitAlgorithm.FixedWindow` | The default. Cheapest, but allows a burst of twice the limit around the window edge |
| `RateLimitAlgorithm.SlidingWindow` | Never more than the limit in any period, wherever it starts |
| `RateLimitAlgorithm.TokenBucket` | Allows a burst up to the limit, then refills steadily over the period |

```kotlin
rateLimit {
    algorithm = RateLimitAlgorithm.SlidingWindow
    limit("login", requests = 5, per = 1.minutes, algorithm = RateLimitAlgorithm.TokenBucket)
}
```

### Who counts as one client

By default every client address gets its own budget. Choose another key when that is wrong, for example many users behind one office address. `key` applies to every limit, and a named limit can take its own:

```kotlin
rateLimit {
    key { call -> call.sessions.get<UserSession>()?.userId ?: call.request.origin.remoteAddress }
    limit("export", requests = 2, per = 1.hours) { call -> call.sessions.get<UserSession>()?.userId ?: "anonymous" }
}
```

The default limit runs before routing, so read the user from the session there, not from `call.principal()`, which only `authenticate` routes set. Do not read the request body in a key: it would be gone by the time your route receives it.

It uses Ktor's `RateLimit` plugin, so do not install that plugin yourself unless you set `rateLimit { enabled = false }`. `apiWrites = 0` keeps the named limits but drops the default one.

## Malformed requests

A path with a broken percent escape, such as `/%zz`, and a `Host` header that cannot be parsed answer 400. They are the client's mistake, so they do not show up as errors in your log.

## Internal endpoints

The [status endpoint](features/endpoints.md#status-endpoint) answers only requests from this machine, and the [API docs](features/endpoints.md#api-docs) exist only in development. To open them to a monitoring job, an office network or your admins, and to nobody else, use `internalAccess { }`: see [Who may see internal endpoints](features/endpoints.md#who-may-see-internal-endpoints). The health endpoint answers everyone, since it reveals nothing beyond up or down.

## Full example

A public app behind a reverse proxy, with a sign-in route, an analytics script and a separate admin frontend:

```kotlin no-check
install(XForwardedHeaders) // so the origin check and the rate limit see the real client

install(Svelte) {
    siteUrl = "https://notes.example.com"
    allowedOrigins("https://admin.notes.example.com")
    maxApiBodySize = 5L * 1024 * 1024 // uploads up to 5 MiB
    maxJsonDepth = 32
    securityHeaders {
        allowCspSources("script-src", "https://plausible.io")
        allowCspSources("connect-src", "https://plausible.io")
    }
    rateLimit {
        algorithm = RateLimitAlgorithm.SlidingWindow
        key { call -> call.sessions.get<UserSession>()?.userId ?: call.request.origin.remoteAddress }
        limit("login", requests = 5, per = 1.minutes, algorithm = RateLimitAlgorithm.TokenBucket)
    }
    statusEndpoint = true
    internalAccess { token = env("INTERNAL_TOKEN") }
}

routing {
    rateLimit(RateLimitName("login")) {
        post("/api/session") { /* check the password, set the session */ }
    }
}
```

## Use cases

- **Cookie sessions:** the origin check is what keeps a cookie session safe from cross-site request forgery. See [Sign in with a session cookie](recipes/sessions.md).
- **Login and sign-up routes:** a named rate limit, as above.
- **Uploads:** raise `maxApiBodySize` to the largest file you accept. See [Upload files](recipes/uploads.md).
- **Analytics, maps, avatars from a CDN:** `allowCspSources`.
- **A second frontend on another domain:** `allowedOrigins`.
- **Monitoring:** the refusal counters in `svelteMetrics` and the status endpoint.

## Good to know

::: warning Behind a reverse proxy
Install Ktor's `XForwardedHeaders` or `ForwardedHeaders`. Without it, the origin check compares against the proxy's host, every user shares one rate limit, and `networks` in `internalAccess` lets nobody in.
:::

- The guards only cover paths under your API prefixes. Routes outside them, such as a webhook at `/hooks/stripe`, need their own checks.
- Ktor's `RequestBodyLimit` and `RateLimit` plugins are installed by ktor-svelte. Install them yourself only after turning ktor-svelte's version off.
- Server-sent events count as a GET, so they are never rate limited or blocked by the origin check.

## What runs on your machine

ktor-svelte runs other people's code in three places, and it is worth knowing which.

**The setup script.** `setup.sh` and `setup.ps1` ask Maven Central for the latest version, download `scripts/Setup.java` for that version's tag from this repository over HTTPS, and run it with your `java`. Nothing is installed globally. The shell script does nothing until it has arrived completely, and both scripts refuse a version that is not made of letters, digits, dots and dashes. If you would rather read the code first, download it and run it yourself:

```bash
curl -fsSLO https://raw.githubusercontent.com/nijasc/ktor-svelte/v<version>/scripts/Setup.java
```

```bash
java Setup.java --version=<version>
```

**Your package manager.** `svelteInstall` runs `bun install --frozen-lockfile`, `npm ci`, `pnpm install --frozen-lockfile` or `yarn install --frozen-lockfile`, so a build only installs what your lockfile names. Install scripts of dependencies run as your package manager allows: Bun and pnpm only run them for packages you trust explicitly, npm and Yarn run them for every package unless you set `ignore-scripts`. ktor-svelte does not change that setting for you. Only `svelteSync`, `svelteInit` and `svelteUpdateDependencies` change `package.json` or the lockfile, and never as part of a build.

**The pinned Bun.** With `bunVersion` set, the plugin downloads that exact Bun release from GitHub and checks it against the release's `SHASUMS256.txt` before unpacking it. See [Pin Bun](reference/gradle.md#pin-bun).

## Software bill of materials

Every [GitHub release](https://github.com/nijasc/ktor-svelte/releases) has a [CycloneDX](https://cyclonedx.org) SBOM for each artifact attached: `ktor-svelte-server-<version>.cdx.json` and `ktor-svelte-gradle-plugin-<version>.cdx.json`. They list the runtime dependencies with versions, licenses and hashes, so you can feed them to Dependency-Track or a license scanner before approving an upgrade. Test and compile-only dependencies are left out. The plugin's own list is short, because Gradle provides the rest.

## Verifying a release

Every JAR of a release, for the runtime and for the Gradle plugin, has signed [SLSA build provenance](https://slsa.dev/spec/v1.0/provenance). It records that the file was built by the release workflow of this repository from the tagged commit, and it is signed with [Sigstore](https://www.sigstore.dev) through GitHub artifact attestations. To check a JAR you downloaded, for example from Maven Central or your Gradle cache, use the GitHub CLI:

```bash
gh attestation verify ktor-svelte-server-<version>.jar --repo nijasc/ktor-svelte
```

It fails if the file was changed or built anywhere else. Maven Central also has the usual PGP signature next to every file.

## Reporting a vulnerability

See [SECURITY.md](https://github.com/nijasc/ktor-svelte/blob/main/SECURITY.md) for how to report a vulnerability privately, and for a table of every secure default.
