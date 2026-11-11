# Compatibility

Supported and tested versions of every tool ktor-svelte works with.

| Tool | Supported | Tested with |
|---|---|---|
| Ktor | 3.6 and newer 3.x | 3.6.1 |
| Kotlin | 2.3 and newer | 2.4.21 |
| JVM | 17 and newer | 17, 21 |
| Gradle | Latest 8.x and 9.x | 8.14.6, 9.8.2 |
| SvelteKit | 3.x | 3.1.1 |
| Svelte | 5.57.3 and newer | 5.57.3 |
| Package managers | Bun, pnpm, npm, Yarn | Bun end to end. The others use fake tools in tests, plus npm in CI |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.
