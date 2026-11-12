# What is ktor-svelte?

ktor-svelte is a Gradle plugin and a Ktor plugin that turn a Ktor API and a SvelteKit frontend into one application. In production it is a single JAR on a single port. In development you open Ktor's port and get Vite's hot reload.

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

::: warning Made with AI
This project was made heavily with AI, and nothing is guaranteed. It has real tests, but read the code before you trust it with anything important. While the version starts with `0.`, expect breaking changes.
:::

## How the pieces fit

```
frontend/              SvelteKit with adapter-static
src/main/kotlin/       your Ktor app with install(Svelte)
build.gradle.kts       the ktor-svelte Gradle plugin
```

1. **At build time**, the Gradle plugin installs your frontend dependencies, runs the SvelteKit build and copies the static output into the JAR, together with a manifest that lists every file and its hash.
2. **At run time**, `install(Svelte)` serves those files on the same port as your API. Your Ktor routes always win, missing pages get the SPA fallback, and hashed assets are cached forever.
3. **In development**, the plugin proxies page requests to Vite, so you get hot reload on Ktor's port with the same origin as production, and the TypeScript client is regenerated from your routes whenever the app starts.

The frontend is plain files, so there is no Node process in production. SvelteKit runs in the browser, and Ktor is the only backend. The [FAQ](../reference/faq.md) explains why ktor-svelte uses `adapter-static` and what that means for server-side rendering.

## What you get

- **One port, one JAR.** Works with `jar`, Shadow and Ktor's `buildFatJar`.
- **Your routes win.** Anything you define in Ktor beats the frontend, whatever order you register it in.
- **Generated TypeScript.** Types, services, validation rules and typed errors from your Ktor routes, with no npm dependencies.
- **Real hot reload.** One command runs Vite, the Kotlin compiler and your app.
- **Secure defaults.** CSP, security headers, origin check, body and rate limits, hidden error details.
- **Fast defaults.** Immutable caching, ETags, precompressed files, compressed API responses, real 404s for stale chunks.
- **Frontend libraries from Kotlin.** Tailwind, DaisyUI, Lucide, i18n and image optimization, configured in Gradle.
- **Any package manager.** Bun, pnpm, npm or Yarn, picked from your lockfile.
- **IntelliJ run configurations.** One click starts everything.

## Where to go next

- New project: [Getting started](getting-started.md)
- Existing Ktor or SvelteKit app: [Add to an existing project](existing-project.md)
- See it working first: [Examples](../examples.md)
- Deciding between setups: [Compared with other setups](comparison.md)
- Asking an AI assistant: give it [llms-full.txt](https://nijasc.github.io/ktor-svelte/llms-full.txt), the whole documentation as one Markdown file, or the index at [llms.txt](https://nijasc.github.io/ktor-svelte/llms.txt)
