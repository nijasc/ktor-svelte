# Built-in endpoints

The status and health endpoints and Swagger UI, all off by default.

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

To write your own, put `sitemap.xml` or `robots.txt` in `frontend/static/`. Files from the build always win. `sitemap = false` turns both off. With `routing = SvelteRouting.Manual`, they are only served where you route `svelte()`.

## Default favicon

Browsers ask every site for `/favicon.ico`. Until your app has its own icon, ktor-svelte answers with a ktor-svelte one, so tabs and bookmarks show something and the log has no 404s for it. It serves `/favicon.ico`, `/favicon.svg`, `/favicon.png` and `/apple-touch-icon.png`, cached for a day.

As soon as your build has any of `favicon.ico`, `favicon.svg` or `favicon.png`, for example in `frontend/static/`, none of the defaults are served and yours are used. In development, ktor-svelte checks `frontend/static/` instead. Turn the default off with `defaultFavicon = false`.

## Status endpoint

```kotlin
install(Svelte) {
    statusEndpoint = true
}
```

`GET /_ktor-svelte/status` returns JSON with the bundled build (`present`, `formatVersion`, `files`, `fingerprint`) and the dev proxy (`proxy`, and when active `url` and `reachable`), and how many requests the security guards refused (`refusals`: `crossOrigin`, `bodyTooLarge`, `rateLimit`). It is off by default, never cached, hidden from the OpenAPI document, and answers only requests from this machine with a local `Host`. Everything else gets 403, unless you [open it to more callers](#who-may-see-internal-endpoints).

## Health endpoint

For load balancers, container orchestrators and uptime checks:

```kotlin
install(Svelte) {
    healthEndpoint = true
    healthCheck { database.isReachable() }
}
```

`GET /_ktor-svelte/health` answers `200` with `{"status":"up"}` when the frontend can be served and every `healthCheck` returns `true`, and `503` with `{"status":"down"}` otherwise. A check that throws counts as down and is logged. Unlike the status endpoint, it answers every client, because it reveals nothing beyond up or down. It is off by default, never cached and hidden from the OpenAPI document.

## API docs

`apiDocs = true` serves Swagger UI at `/api/docs` in development mode only, using the same OpenAPI document as `generateTs`. Change the path with `apiDocsPath`. The page loads its scripts from a public CDN, so it needs internet access.

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

With `internalAccess` set, `apiDocs = true` serves the docs outside development too, behind the same rules. Everyone else gets 403, or 401 when a token is configured and none was sent. The app does not start with a token that is too short or a range it cannot read.

Behind a reverse proxy, every request reaches the app from the proxy's address, which is usually a private one. A network range would then let the whole internet in, so ktor-svelte refuses it: when a request carries `X-Forwarded-For` or `Forwarded` and the app has not told Ktor to trust the proxy, `networks` lets nobody in. Install Ktor's `XForwardedHeaders` or `ForwardedHeaders` plugin, and the range is checked against the client's real address.

The health endpoint and the public build info stay open, since they are made for callers you do not know.
