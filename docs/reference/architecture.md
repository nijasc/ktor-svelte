# Architecture

How a SvelteKit build ends up in the JAR, and how a request reaches a file. Read this before changing the plugin or the runtime. [How it works](how-it-works.md) has the exact resolution rules.

<ArchitectureDiagram />

## Build time

The Gradle plugin turns the frontend into resources of your app. Each step is a cacheable task, wired before `processResources`:

| Step | What it does | Source |
|---|---|---|
| `svelteInstall` | Installs dependencies from the lockfile with the detected package manager | `tasks/SvelteTasks.kt`, `PackageManager.kt` |
| `svelteBuild` | Runs the build script. Its inputs include a fingerprint of the package manager | `tasks/SvelteTasks.kt`, `tasks/ToolFingerprint.kt` |
| `svelteBundle` | Copies the output to `ktor-svelte/public/`, gzips what the adapter did not compress, hashes inline scripts and writes `ktor-svelte/manifest.json` | `tasks/SvelteBundleTask.kt`, `tasks/InlineScripts.kt` |
| `svelteSync` | Writes the frontend library setup and generated files from `svelte { libraries { } }` | `tasks/SvelteSyncTasks.kt`, `libraries/` |

Paths are relative to `ktor-svelte-gradle-plugin/src/main/kotlin/io/github/nijasc/ktor/svelte/gradle/`.

The manifest is the contract between the two halves. It lists every servable file with its size, hash, precompressed variants and, for HTML pages, the hashes of their inline scripts. The runtime never turns a request path into a file path. It only looks paths up in the manifest.

## Request time

`install(Svelte)` adds a catch-all route and a few hooks. Ktor prefers more specific routes, so your own routes always win.

| Step | What it does | Source |
|---|---|---|
| Guards | Origin check, body size, JSON shape limits and rate limits on API paths | `internal/security/RequestGuards.kt`, `JsonShapeLimits.kt`, `RateLimits.kt` |
| Catch-all | Takes GET and HEAD requests that no route of yours answered, and answers 405 for other methods on known pages | `internal/SvelteHandler.kt` |
| Resolution | Maps the path to a manifest entry, a 308 redirect, the SPA fallback or a 404 | `internal/assets/RequestResolver.kt` |
| Response | Sets `Cache-Control`, `ETag` and CSP, picks a precompressed variant, serves byte ranges and injects `publicConfig` | `internal/assets/AssetResponder.kt`, `ByteRanges.kt`, `ConfigInjector.kt` |
| Storage | Opens files from the classpath or from `SvelteSource.Directory` | `internal/assets/AssetStore.kt`, `Manifest.kt` |

Paths are relative to `ktor-svelte-server/src/main/kotlin/io/github/nijasc/ktor/svelte/`. The root package holds only the public API, such as `Svelte.kt` and `SvelteConfig.kt`.

## Development

In development mode the same catch-all sends frontend requests to Vite through `internal/dev/DevProxy.kt`, which uses the JDK `HttpClient` and only serves local clients. Your API routes still answer directly, so the browser talks to one origin.

`generateTs` reads Ktor's OpenAPI model of your routes when the app starts and writes the TypeScript client. That code lives in `internal/typescript/`, and the client templates are TypeScript files under `src/main/resources`. The development-only endpoints, such as the route table and the status page, are in `internal/dev/`.

`svelteDevAll` starts Vite and the app together, waits until both answer, and prints one ready banner. See `tasks/SvelteDevAllTask.kt` and `tasks/ReadyBanner.kt`.
