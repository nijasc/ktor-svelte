# Ktor settings

Every setting of `install(Svelte) { }`, grouped by topic, with its default. To pick settings with checkboxes instead, use the [configurator](../guide/configurator.md). To see the settings your app really runs with, run [`./gradlew svelteConfig`](./gradle.md#review-your-configuration).

<Badge type="tip" text="Ktor plugin" />

## All defaults at a glance

The values shown are the defaults.

```kotlin
install(Svelte) {
    apiPrefixes("/api")
    paramRoutes()
    spaFallback = "200.html"
    notFoundPage = "404.html"
    source = SvelteSource.Classpath
    generateTs = false
    generateTsOutput = null
    apiDocs = false
    apiDocsPath = "/api/docs"
    routing = SvelteRouting.Automatic
    loginPage = null
    statusEndpoint = false
    internalAccess { }
    healthEndpoint = false
    warmUp()
    originCheck = true
    hideErrorDetails = true
    apiCompression = true
    mailer = null
    inlinePublicConfig = true
    buildHeader = true
    requestIds = true
    accessLog = false
    publicBuildInfo = false
    defaultTimeZone = "UTC"
    allowedOrigins()
    maxApiBodySize = 1048576
    maxJsonDepth = 64
    maxJsonStringLength = null
    sitemap = true
    defaultFavicon = true
    siteUrl = null

    securityHeaders {
        enabled = true
        contentTypeOptions = "nosniff"
        frameOptions = "DENY"
        referrerPolicy = "strict-origin-when-cross-origin"
        contentSecurityPolicy = null
        automaticContentSecurityPolicy = true
    }

    cache {
        immutable = "public, max-age=31536000, immutable"
        html = "no-cache"
        other = "no-cache"
    }

    dev {
        url = "http://localhost:5173"
        mode = DevMode.Auto
        allowRemote = false
        slowApiCall = 500.milliseconds
        panel = true
        browserLogs = true
        refreshAfterRestart = true
        errorOverlay = true
        startupTiming = true
        catchEmails = true
    }

    rateLimit {
        enabled = true
        apiWrites = 120
        period = 1.minutes
        algorithm = RateLimitAlgorithm.FixedWindow
    }

    transport {
    }
}
```

Features that are off until you call them, such as `frontendErrors()`, `webVitals()`, `idempotency()`, `currentUser`, `guards` or `errorCodes`, are in the tables below.

## Serving the frontend

| Setting | Default | What it does |
|---|---|---|
| `apiPrefixes(...)` | `"/api"` | Paths the frontend never answers, and the routes included in `generateTs`. `/api` matches `/api` and `/api/x`, not `/apiary` |
| `paramRoutes(...)` | none | SvelteKit route patterns such as `/items/[id]`, `/docs/[...rest]` and `/blog/[[page]]`. Matching paths get the fallback even when the request does not accept HTML, for example link previews or tests. Paths with a file extension still return 404. Also used to group [page timings](../guide/monitoring.md#page-timings) |
| `spaFallback` | `"200.html"` | Page for client-side routes. Must match the adapter's `fallback` option. `null` disables it |
| `notFoundPage` | `"404.html"` | Page served with status 404. `null` disables it |
| `source` | `SvelteSource.Classpath` | Where the build comes from. `SvelteSource.Directory(path)` serves a build from disk |
| `routing` | `SvelteRouting.Automatic` | `Manual` lets you place the frontend yourself with [`svelte()`](#route-svelte), for example behind authentication. See [Auth](../features/auth.md) |
| `cache { }` | see below | `Cache-Control` values |
| `frontend(prefix) { }` | none | Another SvelteKit build served under a path prefix such as `"/admin"`, with its own `source`, `spaFallback`, `notFoundPage`, `paramRoutes`, `devUrl` and `generateTsOutput`. See [Multiple frontends](../guide/multiple-frontends.md) |
| `sitemap` | `true` | Serves a generated `/sitemap.xml` and `/robots.txt` when the build has none. See [Sitemap and robots.txt](../features/endpoints.md#sitemap-and-robots-txt) |
| `siteUrl` | `null` | Public address used in the sitemap, such as `https://example.com`. `null` takes it from the request |
| `defaultFavicon` | `true` | Serves a ktor-svelte favicon while the app has none of its own. See [Default favicon](../features/endpoints.md#default-favicon) |

### cache { }

| Setting | Default | Used for |
|---|---|---|
| `immutable` | `"public, max-age=31536000, immutable"` | Hashed files under `_app/immutable/**` |
| `html` | `"no-cache"` | HTML pages |
| `other` | `"no-cache"` | Every other file |

```kotlin
install(Svelte) {
    paramRoutes("/notes/[id]", "/docs/[...rest]")
    cache {
        other = "public, max-age=3600"
    }
}
```

## Generated TypeScript and API docs

| Setting | Default | What it does |
|---|---|---|
| `generateTs` | `false` | Generates TypeScript from your routes in development mode. See [Generated TypeScript](../features/typescript.md) |
| `generateTsOutput` | `null` | Output directory. `null` means `src/lib/api` in your frontend |
| `apiDocs` | `false` | Serves Swagger UI in development mode, and elsewhere when `internalAccess` is set. See [API docs](../features/endpoints.md#api-docs) |
| `apiDocsPath` | `"/api/docs"` | Path of the Swagger UI page |
| `errorResponse<T>(statuses)` | none | Declares an error body that handlers outside your routes send, so the generated client types it. Takes status codes of 400 and above. See [Calling the API](../features/calling-the-api.md) |
| `errorCodes<E>(message)` | none | One enum of named error codes for the whole app, optionally with a message for each. See [Error codes](../features/calling-the-api.md#error-codes) |
| `constants(...)` | none | Kotlin objects whose values are copied into the frontend. See [Shared constants](../features/typescript.md#shared-constants) |
| `cookies(...)` | none | [Typed cookies](../recipes/sessions.md#typed-cookies) that both sides read and write. A name may be declared once |

## Runtime config

| Setting | Default | What it does |
|---|---|---|
| `publicConfig(value)` | none | Values for the frontend. `publicConfig { ... }` reads them again on every request in development. See [Runtime config](../features/runtime-config.md) |
| `inlinePublicConfig` | `true` | Puts the public config into every page, so the frontend has it without a request |
| `defaultTimeZone` | `"UTC"` | What [`call.timeZone`](../features/calling-the-api.md#the-visitor-s-time-zone) returns when a request does not say which zone the visitor is in |

## Users and sign-in

| Setting | Default | What it does |
|---|---|---|
| `currentUser<T>(path, signInMessage, sessionEnds, extendSession) { find }` | none | How the server finds the signed-in user. Served at `/api/current-user` (under your first API prefix) unless you pass `path`. See [The current user](../features/auth.md#the-current-user) |
| `permissions<P, U>(refusedMessage) { of }` | none | One enum of permissions and how to read a user's set. See [Permissions](../features/auth.md#permissions) |
| `guards { }` | none | Which pages need a signed-in user (`signedIn(...)`) or a permission (`permission(p, ...)`). Closes the API below the same name too. See [Page guards](../features/auth.md#page-guards) |
| `preferences<T, U>(defaults, path, load, save)` | none | Per-user preferences kept on the server. Served at `/api/preferences` unless you pass `path`. See [User preferences](../features/auth.md#user-preferences) |
| `loginPage` | `null` | Path of the login page. A 401 from the API then opens it with the current page as `next`. See [The login page](../features/auth.md#the-login-page) |

An app has one `currentUser`, one `permissions` enum, one `errorCodes` enum and one `preferences` class. Declaring one twice fails at startup.

## Security

| Setting | Default | What it does |
|---|---|---|
| `originCheck` | `true` | Refuses cross-site requests to API paths for every method except GET, HEAD, OPTIONS and TRACE. See [API request guards](../security.md#api-request-guards) |
| `allowedOrigins(...)` | none | Extra origins, such as `https://admin.example.com`, that may write to the API |
| `maxApiBodySize` | `1048576` (1 MiB) | Largest request body on API paths, in bytes. `null` disables it |
| `maxJsonDepth` | `64` | Refuses JSON request bodies on API paths that nest deeper than this, with 400. `null` turns it off |
| `maxJsonStringLength` | `null` | Refuses JSON request bodies on API paths with a longer string, with 400. Off by default |
| `hideErrorDetails` | `true` | Answers unhandled exceptions in production without their message. See [API request guards](../security.md#api-request-guards) |
| `securityHeaders { }` | see below | Security headers and the Content-Security-Policy |
| `rateLimit { }` | see below | Limits API writes per client, and holds named limits |
| `idempotency { }` | off | Answers a repeated `Idempotency-Key` with the stored first answer. See [Writes that are safe to send twice](../features/calling-the-api.md#writes-that-are-safe-to-send-twice) |

### securityHeaders { }

See [Security headers](../security.md#security-headers).

| Setting | Default | What it does |
|---|---|---|
| `enabled` | `true` | Sends security headers. `false` turns all of them off |
| `contentTypeOptions` | `"nosniff"` | `X-Content-Type-Options`. `null` leaves it out |
| `frameOptions` | `"DENY"` | `X-Frame-Options`. `null` leaves it out |
| `referrerPolicy` | `"strict-origin-when-cross-origin"` | `Referrer-Policy`. `null` leaves it out |
| `contentSecurityPolicy` | `null` | Your own policy, sent unchanged on every response. `null` uses the automatic policy |
| `automaticContentSecurityPolicy` | `true` | Sends a strict CSP built from the inline scripts of each HTML page |
| `allowCspSources(directive, sources)` | none | Adds sources to one directive of the automatic policy |

```kotlin
install(Svelte) {
    securityHeaders {
        allowCspSources("img-src", "https://images.example.com")
    }
}
```

### rateLimit { }

See [API request guards](../security.md#api-request-guards).

| Setting | Default | What it does |
|---|---|---|
| `enabled` | `true` | `false` removes the default limit and lets you install Ktor's `RateLimit` yourself |
| `apiWrites` | `120` | Writes per client and period on API paths. `0` keeps the named limits but drops the default one |
| `period` | `1.minutes` | The period of the default limit |
| `algorithm` | `RateLimitAlgorithm.FixedWindow` | `FixedWindow`, `SlidingWindow` or `TokenBucket` |
| `key { call -> }` | the client address | What tells clients apart, for every limit |
| `limit(name, requests, per, algorithm, key)` | none | A named limit for Ktor's `rateLimit(RateLimitName(name))`, such as for login |

### idempotency { }

| Setting | Default | What it does |
|---|---|---|
| `ttl` | `10.minutes` | How long an answer is kept. Must be above zero |
| `maxEntries` | `10000` | How many answers are kept in memory. At least 1 |

## Responses

| Setting | Default | What it does |
|---|---|---|
| `apiCompression` | `true` | Compresses API responses of 1 KiB or more with gzip, deflate or zstd. See [API compression](../features/transport.md#api-compression) |
| `transport { }` | nothing installed | JSON, XML and compression: `json { }`, `xml()`, `negotiation { }`, `compression { }`. See [Transport](../features/transport.md) |
| `mailer` | `null` | The `Mailer` that sends `application.mailer` emails outside development. See [Emails](../guide/dev-workflow.md#emails) |
| `buildHeader` | `true` | Sends the frontend build fingerprint on API responses as `X-Ktor-Svelte-Build`, so the client can notice a deploy |
| `requestIds` | `true` | Gives every request an `X-Request-Id`, keeps one sent by the client and logs it with unhandled errors |

## Built-in endpoints

See [Built-in endpoints](../features/endpoints.md).

| Setting | Default | What it does |
|---|---|---|
| `healthEndpoint` | `false` | Serves `/_ktor-svelte/health` for load balancers and orchestrators. See [Health endpoint](../features/endpoints.md#health-endpoint) |
| `warmUp(...)` | none | Paths the app calls on itself once the port is open, before the health endpoint reports it up. See [Warm-up before ready](../features/endpoints.md#warm-up-before-ready) |
| `healthCheck { }` | none | Adds a check of your own. Every check must return `true` for the app to be up |
| `statusEndpoint` | `false` | Serves build and proxy details at `/_ktor-svelte/status`, to this machine only. See [Status endpoint](../features/endpoints.md#status-endpoint) |
| `internalAccess { }` | this machine only | Who may see the status endpoint and the API docs besides this machine: a `token`, `networks(...)` or your own `allow { }` check. See [Who may see internal endpoints](../features/endpoints.md#who-may-see-internal-endpoints) |
| `publicBuildInfo` | `false` | Serves the app's [build info](../guide/monitoring.md#build-info) at `/_ktor-svelte/build.json`, for `loadBuildInfo()` in the browser. Off because it tells every visitor the version and the commit |

## Monitoring

See [Monitoring](../guide/monitoring.md).

| Setting | Default | What it does |
|---|---|---|
| `accessLog` | `false` | Logs one line per request in production to the `ktor-svelte.access` logger: `method=GET path=/api/notes status=200 ms=12 id=...`. The query string is left out, because it can hold secrets, and requests for build assets under `/_app/` are skipped. Development mode never logs these |
| `frontendErrors { }` | off | Browsers report uncaught errors to the `ktor-svelte.frontend` logger. Settings: `perClientPerMinute = 10`, `maxBodyBytes = 8192` (256 to 65536) |
| `webVitals { }` | off | Browsers report page timings into `svelteMetrics`. Settings: `sampleRate = 0.1` (above 0, at most 1), `perClientPerMinute = 10` |

## Development

See [Dev workflow](../guide/dev-workflow.md).

| Setting | Default | What it does |
|---|---|---|
| `dev.url` | `"http://localhost:5173"` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `DevMode.Auto` | `Auto` follows Ktor's development mode. `Always` and `Never` force it |
| `dev.allowRemote` | `false` | Lets other machines use the dev proxy, and lets `dev.url` point at another machine |
| `dev.slowApiCall` | `500.milliseconds` | Logs API calls that take longer than this in development. `null` turns it off |
| `dev.panel` | `true` | Shows the [dev panel](../guide/dev-workflow.md#the-dev-panel) of recent API calls, with status, timing and validation errors, on pages proxied from Vite |
| `dev.browserLogs` | `true` | Sends browser console output, uncaught errors and unhandled rejections from pages proxied from Vite to the app's log |
| `dev.refreshAfterRestart` | `true` | After the app restarts in development, open pages rerun their `load` functions, so a Kotlin change shows up without a manual reload |
| `dev.errorOverlay` | `true` | Shows the Kotlin exception of a failed API call in the browser, in development. Needs `dev.panel` |
| `dev.catchEmails` | `true` | In development, `application.mailer` keeps emails for the [dev panel](../guide/dev-workflow.md#emails) instead of sending them |
| `dev.startupTiming` | `true` | Logs what the startup time was spent on in development, with the parts you wrapped in [`startupStep`](../guide/dev-workflow.md#startup-timing) |

## Route.svelte()

With `routing = SvelteRouting.Manual`, you place the frontend in your own routing. Call `install(Svelte)` first.

| Call | What it does |
|---|---|
| `svelte()` | Serves the frontend for every path under this route. Pages get `private` caching, so shared proxies do not keep them |
| `svelte(public = listOf(...))` | Serves only the listed paths, with normal caching. A path ending in `/*` covers everything below it |

```kotlin
routing {
    svelte(public = listOf("/login", "/_app/*"))
    authenticate("session") {
        svelte()
    }
}
```

The `public` list must include your login page and `/_app/*`, or the login page cannot load. In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page. The files of an [installable app](../features/frontend-libraries.md#installable-app), such as `/service-worker.js` and `/ktor-svelte/*`, stay public too, since a browser fetches them without a session. See [Auth](../features/auth.md).

## Functions for your routes

Besides the settings, the plugin gives your routes these helpers:

| Function | What it does | See |
|---|---|---|
| `call.pathParameter<T>(name)` | Reads a path parameter in the type you need | [Path parameters](#path-parameters) |
| `call.timeZone` | The visitor's time zone, or `defaultTimeZone` | [The visitor's time zone](../features/calling-the-api.md#the-visitor-s-time-zone) |
| `call.toast(...)` | Sends a toast with the answer | [Toasts from the server](../features/calling-the-api.md#toasts-from-the-server) |
| `call.navigateTo(path)` | Tells the client to go to a page after the call | [Navigation from the server](../features/calling-the-api.md#navigation-from-the-server) |
| `call.respondIfStale(sent, current) { record }` | Answers 409 with the current record when the write was based on an old version | [Two people, one record](../features/calling-the-api.md#two-people-one-record) |
| `call.requireOwner(record) { user: User, record -> ... }` | Returns the record when it belongs to the caller, answers 404, 401 or 403 otherwise; `route.ownerChecked()` describes those answers | [Owner checks](../features/auth.md#owner-checks) |
| `call.respondLoginRedirect()` | Redirects to `loginPage`, carrying the current page | [The login page](../features/auth.md#the-login-page) |
| `route.timeout(30.seconds)` | Cancels the handler after the limit with a 503, and makes the generated call use it as its timeout | [A time limit per route](../features/calling-the-api.md#a-time-limit-per-route) |
| `getPage<T>(path) { }` | A paged `GET` route with `cursor` and `limit` | [Page through long lists](../recipes/pagination.md) |
| `resource<T, ID>(path) { }` | The routes of one class, declared in one block | [Resource routes](../features/typescript.md#resource-routes) |
| `application.buildInfo` | Version, commit and commit time of the build | [Build info](../guide/monitoring.md#build-info) |
| `application.mailer.send(Email(...))` | Sends an email through `mailer`, or catches it for the dev panel in development | [Emails](../guide/dev-workflow.md#emails) |
| `application.svelteMetrics` | Refusal counters and web vitals | [Monitoring](../guide/monitoring.md) |
| `startupStep(name) { }` | Names a part of startup for the dev startup log | [Startup timing](../guide/dev-workflow.md#startup-timing) |

## Path parameters

`call.pathParameter<T>(name)` reads a path parameter in the type you need, so a route does not parse it by hand:

```kotlin
get("/api/notes/{id}") {
    val id = call.pathParameter<Int>("id")
    call.respond(store.create(Note(id, "x")))
}
```

| Type | Reads |
|---|---|
| `String` | The text as it is |
| `Int`, `Long` | A whole number |
| `UUID` | A UUID |
| An enum | A constant by name, in any case |

A value that does not fit, such as `/api/notes/abc`, ends the request with Ktor's `NotFoundException`: the address names nothing, so the answer is 404, through your `StatusPages` if you have one. Asking for a parameter the route's path does not have, or for a type it cannot read, is a mistake in the route and fails with a 500 that says so.

## Good to know

- A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages. The app logs it: "the Ktor route GET /about hides the frontend page about.html. Move the route or rename the page."
- ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts.
- If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`. Files the adapter did not compress, such as those from `static/`, are gzipped by `svelteBundle` unless you set `precompress = false` in [Gradle](./gradle.md). `.zst` files next to them, for example from a Vite compression plugin, are bundled too and preferred for browsers that accept `zstd`, since they decompress faster.
- If the frontend build is missing, the app fails at startup in production with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.
- ktor-svelte installs Ktor's `RequestBodyLimit` and `RateLimit` itself. To use your own, set `maxApiBodySize = null` or `rateLimit { enabled = false }`. The same goes for `ContentNegotiation` and `Compression` when you use `transport { }`.
