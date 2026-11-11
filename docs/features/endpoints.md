# Built-in endpoints

The status and health endpoints and Swagger UI, all off by default.

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
