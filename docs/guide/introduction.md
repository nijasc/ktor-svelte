# What is ktor-svelte?

ktor-svelte turns a Ktor API and a SvelteKit frontend into one application. In production it is a single JAR on a single port. In development you open Ktor's port and get Vite's hot reload.

<Badge type="tip" text="Ktor plugin" /> <Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated client" />

It comes in parts that work together:

| Part | Artifact | What it does |
|---|---|---|
| Ktor plugin | `ktor-svelte-server` | `install(Svelte)` serves the frontend next to your API, adds the security and caching defaults, and writes the TypeScript client |
| Gradle plugin | `io.github.nijasc.ktor-svelte` | Builds the frontend into the JAR, runs the dev loop, sets up frontend libraries, and checks that generated files are current |
| Generated client | `frontend/src/lib/api` | Types, services and validation helpers for every Ktor route, imported as `#api`, with no npm dependencies |
| Test kit | `ktor-svelte-test` | Kotlin tests that drive a real browser against the packaged app |

## In 30 seconds

Install the plugin in Ktor:

```kotlin
install(Svelte) {
    generateTs = true
    transport {
        json()
    }
}
```

Write a route in Kotlin, save, and call it from Svelte with full types:

```ts
import { api } from '#api';

const note = await api.notes.create({ title: 'Buy milk' });
```

Then build one JAR that holds both:

```bash
./gradlew buildFatJar
```

::: warning Made with AI
This project was made heavily with AI, and nothing is guaranteed. It has real tests, but read the code before you trust it with anything important. Since 1.0, releases follow semantic versioning, so only a major release can break your build.
:::

## How the pieces fit

```text
frontend/              SvelteKit with adapter-static
src/main/kotlin/       your Ktor app with install(Svelte)
build.gradle.kts       the ktor-svelte Gradle plugin
```

1. **At build time**, the Gradle plugin installs your frontend dependencies, runs the SvelteKit build and copies the static output into the JAR, together with a manifest that lists every file and its hash.
2. **At run time**, `install(Svelte)` serves those files on the same port as your API. Your Ktor routes always win, missing pages get the SPA fallback, and hashed assets are cached forever.
3. **In development**, the plugin proxies page requests to Vite, so you get hot reload on Ktor's port with the same origin as production, and the TypeScript client is regenerated from your routes whenever the app starts.

The frontend is plain files, so there is no Node process in production. SvelteKit runs in the browser, and Ktor is the only backend. The [FAQ](../reference/faq.md) explains why ktor-svelte uses `adapter-static` and what that means for server-side rendering, and [How it works](../reference/how-it-works.md) follows a request through the app.

## What you get

- **One port, one JAR.** Works with `jar`, Shadow and Ktor's `buildFatJar`.
- **Your routes win.** Anything you define in Ktor beats the frontend, whatever order you register it in.
- **Generated TypeScript.** Types, services, validation rules and typed errors from your Ktor routes, with no npm dependencies. See [Generated TypeScript](../features/typescript.md).
- **Real hot reload.** One command runs Vite, the Kotlin compiler and your app. See [Dev workflow](dev-workflow.md).
- **Secure defaults.** CSP, security headers, origin check, body and rate limits, hidden error details. See [Security](../security.md).
- **Fast defaults.** Immutable caching, ETags, precompressed files, compressed API responses, real 404s for stale chunks. See [Transport and compression](../features/transport.md).
- **Frontend libraries from Kotlin.** Tailwind, DaisyUI, Lucide, i18n, image optimization and error toasts, configured in Gradle. See [Frontend libraries](../features/frontend-libraries.md).
- **Any package manager.** Bun, pnpm, npm or Yarn, picked from your lockfile.
- **IntelliJ run configurations.** One click starts everything.

The full list, grouped by what you are doing, is on [Everything ktor-svelte does](../features/).

## Is it for you?

It fits well when:

- the backend is, or should be, on the JVM, and you want a SvelteKit frontend with it,
- you want to deploy one artifact and run one process,
- you want the frontend to break at compile time, not in production, when an API changes.

Look elsewhere when you need server-side rendering on every request, or when the frontend and backend are deployed by different teams. [Compared with other setups](comparison.md) goes through the alternatives.

## Where to go next

- New project: [Getting started](getting-started.md)
- Learn by building: [Tutorial](tutorial.md)
- Existing Ktor or SvelteKit app: [Add to an existing project](existing-project.md)
- See it working first: [Examples](../examples.md)
- Deciding between setups: [Compared with other setups](comparison.md)
- Asking an AI assistant: give it [llms-full.txt](https://nijasc.github.io/ktor-svelte/llms-full.txt), the whole documentation as one Markdown file, or the index at [llms.txt](https://nijasc.github.io/ktor-svelte/llms.txt)
