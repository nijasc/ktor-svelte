# Built-in endpoints

Small endpoints that every app ends up writing: a sitemap and `robots.txt`, a favicon, a status page for you, a health check for your load balancer and Swagger UI for your API. The status and health endpoints and Swagger UI are off by default; the sitemap, `robots.txt` and the favicon are on until your build brings its own.

<Badge type="tip" text="Ktor plugin" />

## Quick start

```kotlin
install(Svelte) {
    siteUrl = "https://example.com"
    healthEndpoint = true
    statusEndpoint = true
    apiDocs = true
}
```

| Endpoint | Path | Default | Who may call it |
| --- | --- | --- | --- |
| [Sitemap](#sitemap-and-robots-txt) | `/sitemap.xml` | On, unless your build has one | Everyone |
| [robots.txt](#sitemap-and-robots-txt) | `/robots.txt` | On, unless your build has one | Everyone |
| [Favicon](#default-favicon) | `/favicon.ico`, `/favicon.svg`, `/favicon.png`, `/apple-touch-icon.png` | On, until your build has an icon | Everyone |
| [Status](#status-endpoint) | `/_ktor-svelte/status` | Off | This machine, or [whom you allow](#who-may-see-internal-endpoints) |
| [Health](#health-endpoint) | `/_ktor-svelte/health` | Off | Everyone |
| [API docs](#api-docs) | `/api/docs` | Off | Development only, or [whom you allow](#who-may-see-internal-endpoints) |

## Sitemap and robots.txt

Search engines find your pages through `/sitemap.xml` and read `/robots.txt` first. ktor-svelte serves both for you when your build has neither:

- `/sitemap.xml` lists every prerendered page in the build, so `about.html` becomes `/about` and `docs/index.html` becomes `/docs/`. The SPA fallback and the 404 page are left out.
- `/robots.txt` lets crawlers read all pages, keeps them out of your API prefixes and `/_ktor-svelte/`, and points to the sitemap.

Pages that only exist at runtime, such as `/notes/42`, can't be listed, because there is no file for them. URLs in both files must be absolute, so set the public address of your site. Otherwise it is taken from the request, which behind a proxy needs Ktor's `ForwardedHeaders` or `XForwardedHeaders` plugin:

```kotlin
install(Svelte) {
    siteUrl = "https://example.com"
}
```

| Setting | Default | What it does |
| --- | --- | --- |
| `sitemap` | `true` | `false` turns off both `/sitemap.xml` and `/robots.txt` |
| `siteUrl` | `null`, taken from the request | The public address used in both files |

- To write your own, put `sitemap.xml` or `robots.txt` in `frontend/static/`. Files from the build always win.
- With `routing = SvelteRouting.Manual`, they are only served where you route `svelte()`. Put them in the `public` list if the rest is [behind a login](auth.md#put-the-frontend-behind-a-login).
- With [i18n URL prefixes](frontend-libraries.md#i18n), every language's pages are prerendered, so each one is listed.

## Default favicon

Browsers ask every site for `/favicon.ico`. Until your app has its own icon, ktor-svelte answers with a ktor-svelte one, so tabs and bookmarks show something and the log has no 404s for it. It serves `/favicon.ico`, `/favicon.svg`, `/favicon.png` and `/apple-touch-icon.png`, cached for a day.

As soon as your build has any of `favicon.ico`, `favicon.svg` or `favicon.png`, for example in `frontend/static/`, none of the defaults are served and yours are used. In development, ktor-svelte checks `frontend/static/` instead.

```kotlin
install(Svelte) {
    defaultFavicon = false
}
```

turns the default off.

## Status endpoint

```kotlin
install(Svelte) {
    statusEndpoint = true
}
```

`GET /_ktor-svelte/status` returns JSON about the running app:

| Field | What it holds |
| --- | --- |
| `present`, `formatVersion`, `files`, `fingerprint` | The bundled build |
| `proxy`, and when active `url` and `reachable` | The dev proxy |
| `refusals`: `crossOrigin`, `bodyTooLarge`, `rateLimit` | How many requests the [security guards](../security.md#api-request-guards) refused |
| `routes`: `kind`, `method`, `route`, `count`, `serverErrors`, `clientErrors`, `averageMillis`, `p95Millis` | [Latency and errors per route](../guide/monitoring.md#latency-and-errors-per-route), once a call was answered |

It is off by default, never cached, hidden from the OpenAPI document, and answers only requests from this machine with a local `Host`. Everything else gets 403, unless you [open it to more callers](#who-may-see-internal-endpoints).

```bash
curl -s http://localhost:8080/_ktor-svelte/status
```

## Health endpoint

For load balancers, container orchestrators and uptime checks:

```kotlin
install(Svelte) {
    healthEndpoint = true
    healthCheck { database.isReachable() }
}
```

`GET /_ktor-svelte/health` answers `200` with `{"status":"up"}` when the frontend can be served and every `healthCheck` returns `true`, and `503` with `{"status":"down"}` otherwise.

- Add as many `healthCheck { }` blocks as you need. Each is a `suspend` function that returns `true` when its part is fine.
- A check that throws counts as down and is logged.
- Unlike the status endpoint, it answers every client, because it reveals nothing beyond up or down.
- It is off by default, never cached and hidden from the OpenAPI document.

### Warm-up before ready

The first request to a fresh JVM is the slow one: classes load, the JIT has not started, connection pools are empty. `warmUp` lets the app take that request itself:

```kotlin
install(Svelte) {
    healthEndpoint = true
    warmUp("/", "/api/notes", "/api/me")
}
```

Once the port is open, the app sends a `GET` to each path on its own HTTP connector, one after the other. Until the last one has answered, the health endpoint answers `503` with `{"status":"starting"}`, so a load balancer or orchestrator that waits for it sends no visitor to an instance that is still cold.

- A path that fails or answers with a 5xx is logged as a warning, and the app still becomes ready. Each call gives up after 30 seconds.
- The log says how long it took: `ktor-svelte: warmed up 3 route(s) in 840 ms.`
- The calls carry an `X-Ktor-Svelte-Warm-Up: true` header, so your own code can tell them apart. Pick paths that need no sign-in and change nothing; a guarded route still warms up the code up to the guard.
- Without `warmUp`, nothing changes: the app is ready as soon as the port is open.

A Docker health check, for example:

```text
HEALTHCHECK CMD curl -fs http://localhost:8080/_ktor-svelte/health || exit 1
```

## API docs

`apiDocs = true` serves Swagger UI at `/api/docs` in development mode only, using the same OpenAPI document as `generateTs`.

```kotlin
install(Svelte) {
    apiDocs = true
    apiDocsPath = "/api/reference"
}
```

| Setting | Default | What it does |
| --- | --- | --- |
| `apiDocs` | `false` | Serves Swagger UI |
| `apiDocsPath` | `/api/docs` | Where it is served |

The page loads its scripts from a public CDN, so it needs internet access.

To have the docs on a deployed app as well, say [who may see them](#who-may-see-internal-endpoints). Without that they stay a development tool.

## Who may see internal endpoints

The status endpoint and the API docs are for you and your tools, not for visitors. By default the status endpoint answers this machine only, and the docs exist in development only. One block opens both to the callers you name, and to nobody else:

```kotlin
import io.ktor.server.sessions.get
import io.ktor.server.sessions.sessions

install(Svelte) {
    statusEndpoint = true
    apiDocs = true
    internalAccess {
        token = env("INTERNAL_TOKEN")
        networks("10.0.0.0/8", "fd00::/8")
        allow { call -> call.sessions.get<UserSession>()?.userId == "admin" }
    }
}
```

A request gets in when any one of them lets it in. Requests from this machine always do.

| Setting | Lets in | Good for |
|---|---|---|
| `token` | Requests with `Authorization: Bearer <token>`. At least 16 characters, compared in constant time | A monitoring job that reads the status endpoint |
| `networks(...)` | Clients whose address is in one of the ranges, IPv4 or IPv6 | An office network or a VPN |
| `allow { call -> ... }` | Whatever your own check accepts, such as a signed-in user with a role | Opening the API docs in a browser, which cannot send a token |

- With `internalAccess` set, `apiDocs = true` serves the docs outside development too, behind the same rules.
- Everyone else gets 403, or 401 with `WWW-Authenticate: Bearer` when a token is configured and none was sent. The answer says `This endpoint is internal.` and is never cached.
- The app does not start with a token that is too short or a range it cannot read. A long random value, such as the output of `openssl rand -hex 32`, makes a good token.

A monitoring job then reads the status with its token:

```bash
curl -s -H "Authorization: Bearer $INTERNAL_TOKEN" https://example.com/_ktor-svelte/status
```

With [permissions](auth.md#permissions), `allow` can ask for one, so your admins open the docs in their browser:

```kotlin no-check
internalAccess {
    allow { call -> call.can(Permission.UsersManage) }
}
```

::: warning Behind a reverse proxy
Every request reaches the app from the proxy's address, which is usually a private one. A network range would then let the whole internet in, so ktor-svelte refuses it: when a request carries `X-Forwarded-For`, `Forwarded` or `X-Real-IP` and the app has not told Ktor to trust the proxy, `networks` lets nobody in. Install Ktor's `XForwardedHeaders` or `ForwardedHeaders` plugin, and the range is checked against the client's real address.
:::

The health endpoint and the public build info stay open, since they are made for callers you do not know.

## Use cases

- **A public site:** set `siteUrl`, and search engines get a sitemap and `robots.txt` that match your build.
- **Kubernetes, Docker or a load balancer:** `healthEndpoint` with a `healthCheck` per dependency, such as the database.
- **Watching a deployed app:** `statusEndpoint` with a `token` for your monitoring, to see the build fingerprint and the refused requests.
- **Sharing the API with a frontend team or a partner:** `apiDocs` with `internalAccess`, opened to signed-in admins or an office network.

## Good to know

- The status, health and docs endpoints are hidden from the OpenAPI document, so they never show up in the generated client.
- The paths under `/_ktor-svelte/` are kept out of `robots.txt`.
- To check that the JAR you ship really starts and answers, see the [smoke test](../guide/deployment.md#smoke-test).
