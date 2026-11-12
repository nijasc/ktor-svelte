# Compatibility

Supported and tested versions of every tool ktor-svelte works with.

| Tool | Supported | Tested with |
|---|---|---|
| Ktor | 3.6 and newer 3.x | 3.6.1 |
| Kotlin | 2.3 and newer | 2.4.21 |
| JVM | 17 and newer | 17, 21 |
| Gradle | Latest 8.x and 9.x | 8.14.6, 9.9.0 |
| SvelteKit | 3.x | 3.1.1 |
| Svelte | 5.57.3 and newer | 5.57.3 |
| Package managers | Bun, pnpm, npm, Yarn | All four build and test an example end to end in CI |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.

## By release

What each release was built and tested with, read from the release's tagged sources when the site is built. Kotlin shows the oldest language version the runtime compiles against, Ktor and SvelteKit the versions the release was tested with, and Gradle the oldest and newest Gradle that CI ran the plugin on.

<!--@include: ./compatibility-matrix.md-->
