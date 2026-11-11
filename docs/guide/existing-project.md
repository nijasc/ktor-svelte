# Add to an existing project

Already have a Ktor app, a SvelteKit app, or both? Add ktor-svelte in a few steps.

Add the plugin to a Kotlin JVM project that uses the `application` plugin, in `build.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
plugins {
    id("io.github.nijasc.ktor-svelte") version "0.10.0"
}
```
<!-- x-release-please-end -->

Create the frontend. This writes a working SvelteKit 3 project to `frontend/`, with a `.gitignore` and an `.editorconfig` that matches the Kotlin side, and installs it with the first package manager on your `PATH`:

```bash
./gradlew svelteInit
```

Already have a frontend? It needs `adapter-static`, and since SvelteKit 3 has no `svelte.config.js`, the configuration goes in `frontend/vite.config.ts`. Run `./gradlew svelteDoctor` to check the rest:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit({ adapter: adapter({ fallback: '200.html' }) })],
    server: { hmr: { clientPort: 5173 } }
});
```

Install the Ktor plugin:

```kotlin
import io.github.nijasc.ktor.svelte.Svelte

fun Application.module() {
    install(Svelte)

    routing {
        get("/api/hello") { call.respondText("hi") }
    }
}
```

Run it. The frontend is built first and served from the same port as your API:

```bash
./gradlew run
```

For one runnable JAR, add [Shadow](https://gradleup.com/shadow/) or Ktor's Gradle plugin and run `shadowJar` or `buildFatJar`. The frontend comes along automatically.

Want an IDE setup? This writes run configurations to `.run/`:

```bash
./gradlew svelteGenerateRunConfigurations
```

The Gradle plugin adds the runtime for you. If you only want the library, add it directly:

<!-- x-release-please-start-version -->
```kotlin
implementation("io.github.nijasc:ktor-svelte-server:0.10.0")
```
<!-- x-release-please-end -->
