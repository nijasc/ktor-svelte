# Ktor settings

Every setting of `install(Svelte) { }`. To pick settings with checkboxes instead, use the [configurator](../guide/configurator.md).

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
    statusEndpoint = false
    internalAccess { }
    healthEndpoint = false
    originCheck = true
    hideErrorDetails = true
    apiCompression = true
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

| Setting | Purpose |
|---|---|
| `apiPrefixes` | Paths the frontend never answers, and the routes included in `generateTs`. `/api` matches `/api` and `/api/x`, not `/apiary` |
| `paramRoutes` | SvelteKit route patterns such as `/items/[id]`, `/docs/[...rest]` and `/blog/[[page]]`. Matching paths get the fallback even when the request does not accept HTML, for example link previews or tests. Paths with a file extension still return 404 |
| `spaFallback` | Page for client-side routes. Must match the adapter's `fallback` option. `null` disables it |
| `notFoundPage` | Page served with status 404. `null` disables it |
| `source` | `SvelteSource.Classpath`, or `SvelteSource.Directory(path)` to serve a build from disk |
| `generateTs` | Generates TypeScript from your routes in development mode |
| `generateTsOutput` | Output directory. Defaults to `src/lib/api` in your frontend |
| `apiDocs` | Serves Swagger UI in development mode, and elsewhere when `internalAccess` is set. See [API docs](../features/endpoints.md#api-docs) |
| `apiDocsPath` | Path of the Swagger UI page |
| `routing` | `Manual` lets you place the frontend with `svelte()`. See [Auth](../features/auth.md) |
| `internalAccess { }` | Who may see the status endpoint and the API docs besides this machine: a `token`, `networks(...)` or your own `allow { }` check. See [Who may see internal endpoints](../features/endpoints.md#who-may-see-internal-endpoints) |
| `statusEndpoint` | Serves build and proxy details at `/_ktor-svelte/status`, to this machine only. Off by default. See [Status endpoint](../features/endpoints.md#status-endpoint) |
| `healthEndpoint` | Serves `/_ktor-svelte/health` for load balancers and orchestrators. Off by default. `healthCheck { ... }` adds your own checks. See [Health endpoint](../features/endpoints.md#health-endpoint) |
| `originCheck` | Refuses cross-site requests to API paths for every method except GET, HEAD, OPTIONS and TRACE. See [API request guards](../security.md#api-request-guards) |
| `buildHeader` | Sends the frontend build fingerprint on API responses as `X-Ktor-Svelte-Build`, so the client can notice a deploy. On by default |
| `maxJsonDepth` | Refuses JSON request bodies on API paths that nest deeper than this, with 400. `64` by default, `null` turns it off |
| `maxJsonStringLength` | Refuses JSON request bodies on API paths with a longer string, with 400. Off by default |
| `sitemap` | Serves a generated `/sitemap.xml` and `/robots.txt` when the build has none. On by default. See [Sitemap and robots.txt](../features/endpoints.md#sitemap-and-robots-txt) |
| `siteUrl` | Public address used in the sitemap, such as `https://example.com`. `null` takes it from the request |
| `defaultFavicon` | Serves a ktor-svelte favicon while the app has none of its own. On by default. See [Default favicon](../features/endpoints.md#default-favicon) |
| `accessLog` | Logs one line per request in production to the `ktor-svelte.access` logger: `method=GET path=/api/notes status=200 ms=12 id=...`. The query string is left out, because it can hold secrets, and requests for build assets under `/_app/` are skipped. Development mode never logs these, since the dev log and the API panel already show requests. Off by default |
| `publicBuildInfo` | Serves the app's [build info](../guide/deployment.md#build-info) at `/_ktor-svelte/build.json`, for `loadBuildInfo()` in the browser. Off by default, because it tells every visitor the version and the commit |
| `defaultTimeZone` | What [`call.timeZone`](../features/calling-the-api.md#the-visitors-time-zone) returns when a request does not say which zone the visitor is in. `UTC` by default |
| `requestIds` | Gives every request an `X-Request-Id`, keeps one sent by the client and logs it with unhandled errors. On by default |
| `hideErrorDetails` | Answers unhandled exceptions in production without their message. See [API request guards](../security.md#api-request-guards) |
| `apiCompression` | Compresses API responses of 1 KiB or more with gzip, deflate or zstd. On by default. See [API compression](../features/transport.md#api-compression) |
| `allowedOrigins` | Extra origins, such as `https://admin.example.com`, that may write to the API |
| `maxApiBodySize` | Largest request body on API paths, in bytes. `null` disables it |
| `securityHeaders.enabled` | Sends security headers. `false` turns all of them off. See [Security headers](../security.md#security-headers) |
| `securityHeaders.contentSecurityPolicy` | Your own policy, sent unchanged on every response. `null` uses the automatic policy |
| `securityHeaders.automaticContentSecurityPolicy` | Sends a strict CSP built from the inline scripts of each HTML page. Extend it with `allowCspSources(directive, sources)` |
| `securityHeaders.contentTypeOptions`, `frameOptions`, `referrerPolicy` | Values of `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy`. `null` leaves that header out |
| `inlinePublicConfig` | Puts the public config into every page, so the frontend has it without a request. On by default |
| `publicConfig(value)` | Values for the frontend. `publicConfig { ... }` reads them again on every request in development. See [Runtime config](../features/runtime-config.md) |
| `cache` | `Cache-Control` values for `_app/immutable/**`, HTML pages and other files |
| `dev.url` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `Auto` follows Ktor's development mode. `Always` and `Never` force it |
| `dev.allowRemote` | Lets other machines use the dev proxy, and lets `dev.url` point at another machine. Off by default |
| `dev.slowApiCall` | Logs API calls that take longer than this in development. `null` turns it off |
| `dev.startupTiming` | Logs what the startup time was spent on in development, with the parts you wrapped in [`startupStep`](../guide/dev-workflow.md). On by default |
| `dev.errorOverlay` | Shows the Kotlin exception of a failed API call in the browser, in development. On by default, needs `dev.panel` |
| `dev.refreshAfterRestart` | After the app restarts in development, open pages rerun their `load` functions, so a Kotlin change shows up without a manual reload. On by default |
| `dev.browserLogs` | Sends browser console output, uncaught errors and unhandled rejections from pages proxied from Vite to the app's log. On by default |
| `dev.panel` | Shows a panel of recent API calls, with status, timing and validation errors, on pages proxied from Vite. On by default. See [Dev workflow](../guide/dev-workflow.md) |
| `transport` | JSON, XML and compression. See [Transport](../features/transport.md) |
| `rateLimit` | Limits API writes per client, and holds named limits for routes such as login. See [API request guards](../security.md#api-request-guards) |
| `errorResponse<T>(statuses)` | Declares an error body that handlers outside your routes send, so the generated client types it. See [Calling the API](../features/calling-the-api.md) |

A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages.

ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts. If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`. Files the adapter did not compress, such as those from `static/`, are gzipped by `svelteBundle` unless you set `precompress = false`. `.zst` files next to them, for example from a Vite compression plugin, are bundled too and preferred for browsers that accept `zstd`, since they decompress faster.

If the frontend build is missing, the app fails at startup in production with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.

## Path parameters

`call.pathParameter<T>(name)` reads a path parameter in the type you need, so a route does not parse it by hand:

```kotlin
get("/api/notes/{id}") {
    val id = call.pathParameter<Int>("id")
    call.respond(store.create(Note(id, "x")))
}
```

It reads `String`, `Int`, `Long`, `UUID` and enums, which match by name in any case. A value that does not fit, such as `/api/notes/abc`, ends the request with Ktor's `NotFoundException`: the address names nothing, so the answer is 404, through your `StatusPages` if you have one. Asking for a parameter the route's path does not have, or for a type it cannot read, is a mistake in the route and fails with a 500 that says so.
