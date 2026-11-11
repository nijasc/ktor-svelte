# How it works

Build tasks, request resolution, limits and the FAQ.

## Build and request flow

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
| 5 | Missing path under `/_app/`, or any path with a file extension | 404, never the fallback |
| 6 | Other path, with a fallback page and a request that accepts HTML, or a path matching `paramRoutes` | Serve the fallback with status 200 |
| 7 | Anything else | `404.html` with status 404 if it exists, otherwise a plain 404 |

Step 4 exists because prerendered pages load assets with relative paths, so serving `about.html` at `/about/` would break them. Step 5 lets SvelteKit recover from stale chunks after a deploy by doing a full page reload.

## Limits

- `adapter-static` only. There is no Node process in production, so `+page.server.ts`, `+server.ts` and form actions are not supported. Ktor is the backend. The [FAQ](#faq) explains why and what to use instead.
- The app is mounted at the root. `paths.base` is not supported yet.
- No range requests, so large media does not belong in the SvelteKit build.
- `generateTs` builds on Ktor's OpenAPI support, which Ktor still marks as experimental.

## FAQ

**Why `adapter-static` and no server-side rendering?** ktor-svelte exists to ship one JVM app. SSR needs a JavaScript runtime that renders every request, so production would need Node next to the JVM, or a JavaScript engine inside it. That means two processes or a slow embedded engine, two places for auth and config, and two things to deploy and monitor. With `adapter-static`, the frontend is plain files, Ktor is the only backend, and the JAR is the whole app.

**What about SEO and the first paint?** Prerender every page whose content is known at build time with `export const prerender = true`. Those pages are real HTML that search engines and slow devices see right away. Pages that depend on data from your API render in the browser, which suits dashboards, admin areas and anything behind a login.

**How do I load data for a page?** Call your Ktor routes from `load` in `+page.ts` or from the component, through the generated client. `+page.server.ts` and `+server.ts` need a Node server and do not exist here. Write that logic as a Ktor route instead.

**What replaces form actions?** A Ktor route that receives the form as JSON or form data. Validation errors come back as a 422 that `isValidationError` understands, so the form can show them next to each field.

**Can I still add SSR later?** Yes, but not with ktor-svelte. Switch the frontend to `adapter-node`, run it as its own server, and keep Ktor as the API behind it. You lose the single JAR and the same-origin setup, and you need CORS or a proxy.

**Does a dynamic route like `/notes/[id]` work?** Yes. Unknown paths get the fallback page, and SvelteKit renders the route in the browser. List patterns in `paramRoutes` to serve the fallback for them even when a request does not accept HTML.
