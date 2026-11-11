# Ktor settings

Every setting of `install(Svelte) { }`.

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
    originCheck = true
    hideErrorDetails = true
    apiCompression = true
    allowedOrigins()
    maxApiBodySize = 1048576
    maxJsonDepth = 64
    maxJsonStringLength = null

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
        mode = DevMode.AUTO
        allowRemote = false
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
| `apiDocs` | Serves Swagger UI in development mode. See [API docs](../features/endpoints.md#api-docs) |
| `routing` | `Manual` lets you place the frontend with `svelte()`. See [Auth](../features/auth.md) |
| `originCheck` | Refuses cross-site requests to API paths for every method except GET, HEAD, OPTIONS and TRACE. See [API request guards](../security.md#api-request-guards) |
| `buildHeader` | Sends the frontend build fingerprint on API responses as `X-Ktor-Svelte-Build`, so the client can notice a deploy. On by default |
| `maxJsonDepth` | Refuses JSON request bodies on API paths that nest deeper than this, with 400. `64` by default, `null` turns it off |
| `maxJsonStringLength` | Refuses JSON request bodies on API paths with a longer string, with 400. Off by default |
| `hideErrorDetails` | Answers unhandled exceptions in production without their message. See [API request guards](../security.md#api-request-guards) |
| `apiCompression` | Compresses API responses of 1 KiB or more with gzip, deflate or zstd. On by default. See [API compression](../features/transport.md#api-compression) |
| `allowedOrigins` | Extra origins, such as `https://admin.example.com`, that may write to the API |
| `maxApiBodySize` | Largest request body on API paths, in bytes. `null` disables it |
| `securityHeaders.enabled` | Sends security headers. `false` turns all of them off. See [Security headers](../security.md#security-headers) |
| `securityHeaders.contentSecurityPolicy` | Your own policy, sent unchanged on every response. `null` uses the automatic policy |
| `securityHeaders.automaticContentSecurityPolicy` | Sends a strict CSP built from the inline scripts of each HTML page. Extend it with `allowCspSources(directive, sources)` |
| `publicConfig(value)` | See [Runtime config](../features/runtime-config.md) |
| `cache` | `Cache-Control` values for `_app/immutable/**`, HTML pages and other files |
| `dev.url` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `AUTO` follows Ktor's development mode. `ALWAYS` and `NEVER` force it |
| `dev.allowRemote` | Lets other machines use the dev proxy, and lets `dev.url` point at another machine. Off by default |
| `transport` | JSON, XML and compression. See [Transport](../features/transport.md) |

A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages.

ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts. If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`. Files the adapter did not compress, such as those from `static/`, are gzipped by `svelteBundle` unless you set `precompress = false`. `.zst` files next to them, for example from a Vite compression plugin, are bundled too and preferred for browsers that accept `zstd`, since they decompress faster.

If the frontend build is missing, the app fails at startup in production with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.
