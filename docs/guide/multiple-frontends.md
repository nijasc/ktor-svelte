# Multiple frontends

One app can serve more than one SvelteKit project, such as a public site at `/` and an admin area under `/admin`. Each frontend has its own build, its own pages and its own fallback page, and they all share the one Ktor API.

It is opt-in: an app that declares no second frontend works exactly as before.

## How it works

- **The main frontend** is the one you already have. It keeps every path that no other frontend claims.
- **Each other frontend** gets a path prefix, such as `/admin`. A request goes to the frontend with the longest prefix that covers it, so `/admin/reports` can be a frontend of its own inside `/admin`. A prefix covers whole path segments only: `/admin` covers `/admin` and `/admin/users`, but not `/administrator`.
- **The API stays global.** `apiPrefixes` are checked first, for every frontend, and a frontend may not sit inside an API prefix.
- **Each frontend has its own build and manifest.** In the JAR they live under `ktor-svelte/frontends/<name>/`, next to the main frontend's `ktor-svelte/`. The name is the prefix without its slashes, such as `admin` for `/admin` and `admin-reports` for `/admin/reports`.
- **Each frontend answers like the main one**: its pages, its `_app` files with the same cache headers, compression and Content-Security-Policy, its own `spaFallback` and `notFoundPage`, and redirects that stay inside its prefix.

## On the server

```kotlin
install(Svelte) {
    frontend("/admin") {
        spaFallback = "200.html"
        notFoundPage = "404.html"
    }
}
```

| Setting | Default | What it does |
|---|---|---|
| `source` | `SvelteSource.Classpath` | Where the build is: from the classpath under `ktor-svelte/frontends/<name>/`, or `SvelteSource.Directory(path)` |
| `spaFallback` | `"200.html"` | The page for paths that have no page of their own, inside this frontend |
| `notFoundPage` | `"404.html"` | The page for missing paths, when there is no fallback |
| `paramRoutes(...)` | none | Like the main `paramRoutes`, with paths relative to the prefix |

Outside development, a frontend without a build stops the start, like the main frontend does. In development it is a warning.

## In the frontend project

A second frontend is a SvelteKit project with `adapter-static` like the main one, built for its prefix. Set the base path in its Vite config, so its links and its `_app` files carry the prefix:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html', precompress: true }), paths: { base: '/admin' } })]
});
```

Links inside it go through `resolve()` from `$app/paths`, as SvelteKit asks for any app with a base path.

## Limits

These parts of ktor-svelte know only the main frontend for now:

- The sitemap and `robots.txt`, the default favicon and the language redirect of i18n.
- The startup warning about Ktor routes that hide a page, the route table and the route map of the dev panel.
- The build fingerprint in `X-Ktor-Svelte-Build` and in the status endpoint.
