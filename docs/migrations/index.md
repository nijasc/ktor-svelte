# Upgrading

While the version starts with `0.`, a minor release such as 0.8.0 to 0.9.0 can change behaviour. Patch releases such as 0.9.0 to 0.9.1 only fix bugs. Each release that changes what your app does, or what you need to write, has a guide with the steps to adopt it. The [changelog](../changelog.md) links each release to its guide.

To upgrade across several releases, follow the guides in order.

| Release | What changes for you |
|---|---|
| [0.10](0.10.md) | `publicConfig` is inlined into pages, API responses carry a build header, and `svelteDevAll` opens the browser |
| [0.9](0.9.md) | Wrong methods on pages answer 405, JSON request bodies have a nesting limit, and every request gets an `X-Request-Id` |
| [0.8](0.8.md) | API responses of 1 KiB or more are compressed |
| [0.7](0.7.md) | API writes are rate limited per client |
| [0.6](0.6.md) | Security headers, a strict Content-Security-Policy, an origin check and a body size limit |

Releases before 0.6 only added features, so they need no steps.

## Bump the version

The Gradle plugin adds the matching runtime library for you, so one version change upgrades both:

```kotlin
plugins {
    id("io.github.nijasc.ktor-svelte") version "<new version>"
}
```

If you set `addRuntimeDependency = false` and declare `ktor-svelte-server` yourself, bump it to the same version. Then run `./gradlew svelteSync` once, because generated files and frontend library setup can change between releases.
