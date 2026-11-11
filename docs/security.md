# Security

The protections that are on by default, and how to change them.

## Security headers

Security headers are on by default. Every response gets `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` and `Referrer-Policy: strict-origin-when-cross-origin`. Each is a property you can change, or set to `null` to leave out:

```kotlin
install(Svelte) {
    securityHeaders {
        referrerPolicy = "no-referrer"
    }
}
```

Every HTML page from your build also gets a strict `Content-Security-Policy`:

```
default-src 'self'; script-src 'self' 'sha256-...'; style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none';
base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

`script-src` lists the SHA-256 hash of each inline `<script>` in that page, which covers SvelteKit's startup script and the theme and locale script ktor-svelte adds, and nothing else. In production, the hashes of every page are computed once in the background at startup, so the first visit after a deploy does not pay for it. A page that changes is hashed again. Other inline scripts and scripts from other origins are blocked. The other directives exist for these reasons:

- `style-src 'unsafe-inline'`: Svelte transitions and many components set inline styles, and SvelteKit can inline small CSS files.
- `img-src` and `font-src` allow `data:` because Tailwind, DaisyUI and Vite inline small images, icons and fonts as data URLs. `blob:` covers images made in the browser, such as upload previews.
- `frame-ancestors` follows `frameOptions`: `'none'` for `DENY`, `'self'` for `SAMEORIGIN`, and left out when `frameOptions` is `null`.

API responses, JavaScript, CSS and other files get no CSP, since it only matters for documents.

To load something from another origin, such as an analytics script, add sources to a directive. A directive that is not in the policy yet is added with exactly the sources you list:

```kotlin
securityHeaders {
    allowCspSources("script-src", "https://plausible.io")
    allowCspSources("connect-src", "https://plausible.io")
    allowCspSources("img-src", "https://avatars.example.com")
}
```

To use your own policy instead, set `contentSecurityPolicy`. It is then sent unchanged on every response, and `allowCspSources` is ignored. Inline scripts in your pages break unless your policy allows them, for example with SvelteKit's own `csp` option in `hash` mode.

To opt out:

```kotlin
securityHeaders { automaticContentSecurityPolicy = false }
securityHeaders { enabled = false }
```

The first turns off only the automatic CSP. The second turns off all security headers.

No CSP is sent while the dev proxy is active, because Vite injects its own scripts. The other headers are still sent.

## API request guards

Two checks protect every path under your API prefixes. Both are on by default.

**Origin check.** POST, PUT, PATCH, DELETE and every other method except GET, HEAD, OPTIONS and TRACE from a browser on another site are refused with 403, so a cookie session cannot be used for cross-site request forgery. A request is refused when:

- its `Origin` header names a different host than the request, or is `null`, or
- it has no `Origin` but sends `Sec-Fetch-Site: cross-site`.

Only the host is compared, ignoring case, scheme and port, so a TLS-terminating proxy or the Vite dev port does not cause false rejections. The request host comes from Ktor's `origin`, so it follows `XForwardedHeaders` or `ForwardedHeaders` when you install them. Requests with neither header, such as curl, server-to-server calls and tests, are allowed, because browsers always send one of them. GET, HEAD, OPTIONS and TRACE are never checked.

To accept writes from another frontend, such as a separate admin app, list its exact origin:

```kotlin
install(Svelte) {
    allowedOrigins("https://admin.example.com")
}
```

**Body size limit.** Request bodies on API paths are limited to 1 MiB. Larger bodies get 413, whether they send `Content-Length` or are chunked. It uses Ktor's `RequestBodyLimit` plugin, so do not install that plugin yourself unless you set `maxApiBodySize = null`.

A refused cross-origin write gets `{"message":"Cross-origin API request refused."}`. In development mode the message also says how to allow the origin, which production leaves out so it does not tell attackers which setting to look for. Other refused requests get a JSON body such as `{"message":"Request body is larger than the limit of 1048576 bytes."}`.

**Error details.** In production, an exception that no route handles answers with its status and a generic message, such as `{"message":"Internal Server Error."}` on API paths, instead of the exception message, which Ktor sends by default and which can reveal internals. Malformed or unreadable bodies keep their 400 or 415 without naming your classes. The exception is still logged. In development mode, or when you install `StatusPages`, nothing changes. Set `hideErrorDetails = false` to send the messages again.

To raise the limit, or turn the origin check off:

```kotlin
install(Svelte) {
    originCheck = false
    maxApiBodySize = 10L * 1024 * 1024
}
```

Set `maxApiBodySize = null` to remove the limit.

Paths outside your API prefixes, such as frontend files and the dev proxy, are not affected.

**JSON shape.** A small body can still be expensive to parse when it nests thousands of arrays. JSON bodies on API paths are checked while they stream in, before any parsing: more than 64 levels of nesting answers 400 with `{"message":"Request JSON is nested deeper than 64 levels."}`. Set `maxJsonStringLength` to also refuse long strings, which is off by default because the body limit already caps them:

```kotlin
install(Svelte) {
    maxJsonDepth = 32
    maxJsonStringLength = 10_000
}
```

Set `maxJsonDepth = null` to turn the depth check off.

**Rate limit.** Each client may send 120 writes per minute to your API paths, meaning every method except GET, HEAD, OPTIONS and TRACE. More get 429 with a `Retry-After` header. Reads and frontend files are never limited. Clients are told apart by `call.request.origin.remoteHost`, so behind a reverse proxy install `XForwardedHeaders` or `ForwardedHeaders`, or every user shares one limit.

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

By default every client address gets its own budget. Choose another key when that is wrong, for example many users behind one office address. `key` applies to every limit, and a named limit can take its own:

```kotlin
rateLimit {
    key { call -> call.sessions.get<UserSession>()?.userId ?: call.request.origin.remoteHost }
    limit("export", requests = 2, per = 1.hours) { call -> call.sessions.get<UserSession>()?.userId ?: "anonymous" }
}
```

The default limit runs before routing, so read the user from the session there, not from `call.principal()`, which only `authenticate` routes set. Do not read the request body in a key: it would be gone by the time your route receives it.

It uses Ktor's `RateLimit` plugin, so do not install that plugin yourself unless you set `rateLimit { enabled = false }`. `apiWrites = 0` keeps the named limits but drops the default one.

## Reporting a vulnerability

See [SECURITY.md](https://github.com/nijasc/ktor-svelte/blob/main/SECURITY.md) for how to report a vulnerability privately, and for a table of every secure default.
