# Add to an existing project

Already have a Ktor app, a SvelteKit app, or both? Add ktor-svelte in a few steps. Starting from nothing is quicker with [Getting started](getting-started.md).

**You need** a Kotlin JVM project that uses the `application` plugin, Java 17 or newer, and one of Bun, pnpm, npm or Yarn.

## 1. Add the Gradle plugin

In `build.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
plugins {
    id("io.github.nijasc.ktor-svelte") version "1.4.0"
}
```
<!-- x-release-please-end -->

The Gradle plugin adds the runtime library, `ktor-svelte-server`, for you.

## 2. Add the frontend

### A new frontend

This writes a working SvelteKit 3 project to `frontend/`, with a `.gitignore` and an `.editorconfig` that matches the Kotlin side, and installs it with the first package manager on your `PATH`:

```bash
./gradlew svelteInit
```

Pass `--package-manager=bun`, or `pnpm`, `npm` or `yarn`, to pick one.

### A frontend you already have

Move it to `frontend/`, or point `frontendDir` in `svelte { }` at it. It needs `adapter-static`, and since SvelteKit 3 has no `svelte.config.js`, the configuration goes in `frontend/vite.config.ts`:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html' }) })],
    server: { hmr: { clientPort: 5173, protocol: 'ws' } }
});
```

- `fallback: '200.html'` gives pages that are not prerendered a page to start from.
- `server.hmr` makes Vite's client connect straight to Vite, also when the page comes through Ktor's port. See [Dev workflow](dev-workflow.md).

Run `./gradlew svelteDoctor` to check the rest: the adapter, its output folder, the `#api` import, `tsconfig`, the Kit and Node versions, and more.

## 3. Install the Ktor plugin

```kotlin
import io.github.nijasc.ktor.svelte.Svelte

fun Application.module() {
    install(Svelte)

    routing {
        get("/api/hello") { call.respondText("hi") }
    }
}
```

That is all it needs. Turn on the [TypeScript client](../features/typescript.md) with `generateTs = true` and the [JSON transport](../features/transport.md) with `transport { json() }` inside `install(Svelte) { }` when you want them. Every other setting is in [Ktor settings](../reference/ktor.md).

::: tip Already installing ContentNegotiation, RequestBodyLimit or RateLimit?
ktor-svelte tells you at startup when one of its defaults clashes with a plugin you install yourself. [Troubleshooting](../reference/troubleshooting.md#startup) lists each message and the fix.
:::

## 4. Run it

The frontend is built first and served from the same port as your API:

```bash
./gradlew run
```

For development with hot reload, run `./gradlew svelteDevAll` instead. See [Dev workflow](dev-workflow.md).

## 5. Package one JAR

For one runnable JAR, add [Shadow](https://gradleup.com/shadow/) or Ktor's Gradle plugin and run `shadowJar` or `buildFatJar`. The frontend comes along automatically. See [Deployment](deployment.md).

## Optional extras

### IntelliJ run configurations

This writes run configurations to `.run/`:

```bash
./gradlew svelteGenerateRunConfigurations
```

### Only the library

The Gradle plugin adds the runtime for you. If you only want the library, without the Gradle plugin, add it directly:

<!-- x-release-please-start-version -->
```kotlin
implementation("io.github.nijasc:ktor-svelte-server:1.4.0")
```
<!-- x-release-please-end -->

Without the Gradle plugin, building the frontend and copying it into the JAR is up to you.

### Versions that are tested together

To keep Kotlin, Ktor and ktor-svelte on versions that are tested together, import the published version catalog in `settings.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
dependencyResolutionManagement {
    versionCatalogs {
        create("ktorSvelte") {
            from("io.github.nijasc:ktor-svelte-catalog:1.4.0")
        }
    }
}
```
<!-- x-release-please-end -->

Then use its aliases in `build.gradle.kts`, and upgrade everything by changing that one version:

```kotlin
plugins {
    alias(ktorSvelte.plugins.kotlin.jvm)
    alias(ktorSvelte.plugins.kotlin.serialization)
    alias(ktorSvelte.plugins.ktor)
    alias(ktorSvelte.plugins.ktor.svelte)
}

dependencies {
    implementation(ktorSvelte.ktor.server.netty)
}
```

It has the `kotlin`, `ktor`, `serialization` and `ktor-svelte` versions, the plugins above, `ktor-svelte-server`, `ktor-bom`, the common Ktor server modules and `kotlinx-serialization-json`.

## Next steps

- Check that everything fits: `./gradlew svelteDoctor`, and `./gradlew svelteConfig` for an overview of your settings
- See what goes where: [Project structure](project-structure.md)
- Find a feature: [Everything ktor-svelte does](../features/)
