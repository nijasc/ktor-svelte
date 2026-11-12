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

## Status endpoint

```kotlin
install(Svelte) {
    statusEndpoint = true
}
```

`GET /_ktor-svelte/status` returns JSON with the bundled build (`present`, `formatVersion`, `files`, `fingerprint`) and the dev proxy (`proxy`, and when active `url` and `reachable`), and how many requests the security guards refused (`refusals`: `crossOrigin`, `bodyTooLarge`, `rateLimit`). It is off by default, never cached, hidden from the OpenAPI document, and answers only requests from this machine with a local `Host`. Everything else gets 403.

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
