# How it works

What happens at build time and how each request is answered.

At build time, three tasks run before `processResources`:

1. `svelteInstall` installs dependencies from your lockfile.
2. `svelteBuild` runs your build script.
3. `svelteBundle` copies the output to `ktor-svelte/public/` in your resources, and writes `ktor-svelte/manifest.json` with a hash of every file.

`svelteBundle` leaves out hidden files such as `.env` (but keeps `.well-known`), source maps and symlinks, and warns about any hidden files it skipped. `SvelteSource.Directory` also ignores hidden files and symlinks, but serves source maps. It streams each file through a non-blocking file channel with its exact `Content-Length`, which makes it a good fit for large builds served from a volume.

At run time, `install(Svelte)` adds a catch-all route. Ktor always prefers more specific routes, so yours win. GET and HEAD requests that reach the catch-all are resolved in this order:

| Step | Request | Result |
|---|---|---|
| 1 | Path under an API prefix | Not handled, so Ktor returns its normal 404 |
| 2 | Exact file in the manifest | Serve the file |
| 3 | `/about` when `about.html` exists, or `/about/` when `about/index.html` exists | Serve the page |
| 4 | `/about/` when only `about.html` exists, or `/about` when only `about/index.html` exists | 308 redirect to the form that exists, keeping the query string |
| 5 | Missing path under `/_app/` or `/.well-known/`, or any path with a file extension | 404, never the fallback |
| 6 | Other path, with a fallback page and a request that accepts HTML, or a path matching `paramRoutes` | Serve the fallback with status 200 |
| 7 | Anything else | `404.html` with status 404 if it exists, otherwise a plain 404 |

Step 4 exists because prerendered pages load assets with relative paths, so serving `about.html` at `/about/` would break them. Every file from the build answers `Range: bytes=...` requests with 206 and `Content-Range`, so videos can seek and downloads can resume. Ranges are always served without `Content-Encoding`, `If-Range` is honoured, and a range past the end of the file answers 416. Other methods on a path that resolves to a page or file, such as a POST to `/about`, answer 405 with `Allow: GET, HEAD, OPTIONS`, and OPTIONS answers 204 with the same header. Paths that resolve to nothing stay 404. In development, POST, PUT, PATCH and DELETE still go to Vite first.

Step 5 lets SvelteKit recover from stale chunks after a deploy by doing a full page reload.

## Limits

- `adapter-static` only. There is no Node process in production, so `+page.server.ts`, `+server.ts` and form actions are not supported. Ktor is the backend. The [FAQ](faq.md) explains why and what to use instead.
- The app is mounted at the root. `paths.base` is not supported yet.
- Files are served whole or as one byte range. Requests for several ranges at once get the whole file. Very large media still makes the JAR large, so a CDN or object storage is often the better home for it.
- `generateTs` builds on Ktor's OpenAPI support, which Ktor still marks as experimental.
