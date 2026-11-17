---
aside: false
---

# Configurator

Tick what your app needs, and copy the two blocks into your project: one for `build.gradle.kts`, one for `install(Svelte)`.

- Only settings that differ from the defaults appear, so the result stays short.
- The panel on the right recommends what most apps should turn on. Click **Apply** to take a recommendation.

<ConfigBuilder />

## Where to go from here

- Every option is explained in [Gradle settings and tasks](../reference/gradle.md) and [Ktor settings](../reference/ktor.md).
- For an existing project, `./gradlew svelteConfig` shows what is set now and scores it the same way. See [Review your configuration](../reference/gradle.md#review-your-configuration).
- Starting from scratch? The [setup script](getting-started.md#build-the-command) writes a whole project for you.
