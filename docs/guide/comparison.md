# Compared with other setups

ktor-svelte is one way to put a Ktor API and a SvelteKit frontend together. This page compares it with the common alternatives, so you can tell whether it fits before you start.

## At a glance

| | ktor-svelte | SvelteKit `adapter-node` in front of Ktor | Static frontend on a CDN, Ktor API elsewhere | Ktor `staticResources` by hand |
|---|---|---|---|---|
| Processes in production | 1 JVM | Node and JVM | JVM, plus the CDN | 1 JVM |
| Origins | One | One, through the Node server | Two, so CORS | One |
| Server-side rendering per request | No, prerendering at build time | Yes | No | No |
| Typed client for your Ktor routes | Generated | Write or generate it yourself | Write or generate it yourself | Write or generate it yourself |
| SPA fallback, trailing slashes, stale chunk 404s | Built in | Built in | CDN rules | Write them yourself |
| Caching headers, ETags, precompressed files | Built in | Built in for assets | CDN | Partly, configure yourself |
| Dev loop | One command, hot reload on Ktor's port | Two servers, proxy config | Two servers, CORS in dev | Rebuild the frontend or run two servers |
| Deploy | One JAR | Two artifacts | Two artifacts | One JAR |

## SvelteKit with `adapter-node` in front of Ktor

SvelteKit runs as its own Node server, renders pages per request, and calls Ktor from `+page.server.ts` or forwards `/api` to it.

Pick this when you need per-request server-side rendering: pages with personal data that search engines must see, or first paint from data that changes on every request. You also get `+server.ts` endpoints and form actions.

The cost is two runtimes to deploy, monitor and scale, auth that has to work in both, and a hop between them. With ktor-svelte, prerendered pages cover content known at build time, and pages that need API data render in the browser. The [FAQ](../reference/faq.md) explains this choice in more detail.

## A static frontend on a CDN with a separate Ktor API

The frontend is built with `adapter-static` and uploaded to a CDN or object storage, and the browser calls Ktor on another domain.

Pick this when the frontend has a very high share of traffic, or a team that deploys it on its own schedule. The CDN serves files from close to the user.

The cost is two deployments that must stay compatible, CORS and its preflight requests, and cookies that need `SameSite=None` or a shared parent domain. ktor-svelte keeps one origin, so cookies and the origin check work without extra configuration. You can still put a CDN in front of the single app: hashed files under `/_app/immutable/` are marked cacheable forever.

## Ktor serving the build with `staticResources`

You copy the SvelteKit build into your resources yourself and serve it with Ktor's static content support.

This works for a small app with only a few pages. Everything ktor-svelte adds is left to you: wiring the frontend build into Gradle, the SPA fallback that does not swallow API 404s, redirects for trailing slashes, real 404s for missing chunks after a deploy, precompressed files, CSP hashes for SvelteKit's inline scripts, the dev proxy and the TypeScript client.

## Other full-stack frameworks

- **Spring Boot with a frontend build plugin** follows the same idea on Spring. ktor-svelte is the Ktor and SvelteKit version, with the generated client and dev proxy included.
- **Kotlin frontend frameworks**, such as Compose for Web or Kobweb, share one language across the stack. ktor-svelte keeps the frontend in TypeScript and Svelte, and shares types through the generated client instead.
- **JavaScript full-stack frameworks**, such as SvelteKit on its own, Next.js or Nuxt, keep everything in one JavaScript runtime. Choose ktor-svelte when the backend is, or should be, on the JVM.

## When ktor-svelte is not the right fit

- You need server-side rendering on every request.
- The frontend and the backend are deployed by different teams on different schedules.
- The app mounts under a sub-path, which ktor-svelte does not support yet.
- You want SvelteKit's `+page.server.ts`, `+server.ts` or form actions. In ktor-svelte, Ktor routes take their place.
