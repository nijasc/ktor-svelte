# ktor-svelte

[![Latest release](https://img.shields.io/github/v/release/nijasc/ktor-svelte?label=release&sort=semver)](https://github.com/nijasc/ktor-svelte/releases/latest)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.nijasc/ktor-svelte-server?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server)
[![Gradle Plugin Portal](https://img.shields.io/gradle-plugin-portal/v/io.github.nijasc.ktor-svelte?label=Gradle%20Plugin%20Portal)](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte)
[![CI](https://img.shields.io/github/actions/workflow/status/nijasc/ktor-svelte/ci.yml?branch=main&label=CI)](https://github.com/nijasc/ktor-svelte/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-nijasc.github.io%2Fktor--svelte-FF3E00?logo=readthedocs&logoColor=white)](https://nijasc.github.io/ktor-svelte/)
[![License](https://img.shields.io/github/license/nijasc/ktor-svelte)](LICENSE)
[![Ktor](https://img.shields.io/badge/Ktor-3.x-087CFA?logo=ktor&logoColor=white)](https://ktor.io)
[![Svelte](https://img.shields.io/badge/Svelte-5.57.3%2B-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)

**Latest release:** [Maven Central](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server) | [Gradle Plugin Portal](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte) | [Release notes](https://github.com/nijasc/ktor-svelte/releases/latest) | [Docs](https://nijasc.github.io/ktor-svelte/) | [API reference](https://nijasc.github.io/ktor-svelte/api/)

Ship your Ktor API and your SvelteKit frontend as one app: one JAR, one port, and a TypeScript client that always matches your routes.

```kotlin
install(Svelte) {
    generateTs = true
    transport {
        json()
        compression()
    }
}
```

Write a route in Kotlin, save, and call it from Svelte with full types:

```ts
import { api } from '#api';

const note = await api.notes.create({ title: 'Buy milk' });
```

No CORS setup, no second server in production, no hand-written API types drifting away from the backend.

> [!WARNING]
> **This project was made heavily with AI, and nothing is guaranteed.** The author needed it for other projects and did not want to spend a lot of time on it. It has real tests, but read the code before you trust it with anything important.

> **Status:** early. Expect breaking changes while the version starts with `0.`.

## What you get

- **One port, one JAR.** Your built frontend goes inside the JAR, next to your API. Works with `jar`, Shadow and Ktor's `buildFatJar`.
- **Your routes win.** Anything you define in Ktor beats the frontend, whatever order you register it in.
- **Generated TypeScript.** Types and services come from your Ktor routes through OpenAPI, with no npm dependencies.
- **Real hot reload.** One command runs everything. You open Ktor's port and get Vite's HMR, with the same origin as production. Change a route and your TypeScript follows.
- **Transport in one place.** JSON, XML and compression are configured inside `install(Svelte)`.
- **Sensible production defaults.** Immutable caching for hashed assets, ETags, precompressed files, compressed API responses, SPA fallback, real 404s for stale chunks, and a generated `sitemap.xml` and `robots.txt`.
- **Frontend libraries from Kotlin.** Turn on Tailwind, DaisyUI, Lucide and i18n in Gradle, with typed icons, themes and messages on both sides.
- **Bring your package manager.** Bun, pnpm, npm or Yarn, picked from your lockfile.
- **Run configurations for IntelliJ.** One click starts Vite and Ktor together.

## Create a project

One command asks a few questions and sets up a working project, always on the latest release. You need Java 17 or newer and one of Bun, pnpm, npm or Yarn.

**macOS and Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh
```

**Windows:**

```powershell
powershell -c "irm https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.ps1 | iex"
```

It asks a few questions, and you can press Enter for the defaults. Then start it:

```bash
./gradlew svelteDevAll
```

| Question | Flag | Default | What you get |
|---|---|---|---|
| Project name, Kotlin package, package manager | `--name`, `--package`, `--package-manager` | `my-app`, `com.example.app`, first one found | |
| TypeScript client | `--generate-ts` | yes | `generateTs` turned on |
| DaisyUI, Tailwind, Lucide | `--daisy`, `--tailwind`, `--lucide` | yes | Configured in `build.gradle.kts` |
| i18n | `--i18n`, `--locales`, `--locale-strategy` | no | Message files and the chosen strategy |
| Sign in | `--auth` | no | Cookie sessions, hashed passwords, routes, and login and account pages |
| Postgres | `--database` | no | Exposed, HikariCP, `compose.yaml` and a small example table |
| Flyway, only with Postgres | `--flyway` | yes | Migrations in `src/main/resources/db/migration` |
| No package folders | `--idea-ext` | yes | Kotlin files directly in `src/main/kotlin`, and IntelliJ knows the package through the `idea-ext` plugin |
| Convention plugin | `--conventions` | no | `build-logic` with shared Kotlin and ktlint setup, for multi-module projects |
| Dockerfile | `--docker` | yes | A multi-stage build that runs the JAR as a non-root user |
| GitHub Actions | `--github-actions` | yes | A CI workflow with Actions pinned to commit SHAs |
| Git repository, only if git is installed | `--git` | yes | `git init` |
| Open in IntelliJ, only if it is installed | `--open-idea` | yes, but no with `--yes` | Opens the project when it is ready |

Every project also gets a Gradle version catalog, JSON and typed error responses, ktlint, ESLint and Prettier, a `README.md`, a `.env.example` and a `.gitignore`. With sign in or Postgres, it also gets a `.env` with random secrets, which is not committed.

To skip the questions, add `--yes` and any options. Turn something off with `--no-`, such as `--no-lucide`:

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=shop
```

Prefer to read scripts before running them? They are in [`scripts/`](scripts).

## Add to an existing project

Add the plugin to a Kotlin JVM project that uses the `application` plugin, in `build.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
plugins {
    id("io.github.nijasc.ktor-svelte") version "0.10.1"
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
implementation("io.github.nijasc:ktor-svelte-server:0.10.1")
```
<!-- x-release-please-end -->

To keep Kotlin, Ktor and ktor-svelte on versions that are tested together, import the published version catalog in `settings.gradle.kts`:

<!-- x-release-please-start-version -->
```kotlin
dependencyResolutionManagement {
    versionCatalogs {
        create("ktorSvelte") {
            from("io.github.nijasc:ktor-svelte-catalog:0.10.1")
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

## Documentation

The full documentation lives at **[nijasc.github.io/ktor-svelte](https://nijasc.github.io/ktor-svelte/)**, with search, guides, recipes, a troubleshooting page, the changelog of every release, and docs for each released version.

| Start here | |
|---|---|
| [What is ktor-svelte?](https://nijasc.github.io/ktor-svelte/guide/introduction) | How the pieces fit together |
| [Getting started](https://nijasc.github.io/ktor-svelte/guide/getting-started) | A new project in one command |
| [Generated TypeScript](https://nijasc.github.io/ktor-svelte/features/typescript) | The typed client and how to call your API |
| [Deployment](https://nijasc.github.io/ktor-svelte/guide/deployment) | JAR, Docker, reverse proxies and health checks |
| [Recipes](https://nijasc.github.io/ktor-svelte/recipes/) | Sessions, uploads, live updates, paging, admin areas |
| [Troubleshooting](https://nijasc.github.io/ktor-svelte/reference/troubleshooting) | Every error message, its cause and its fix |
| [Changelog](https://nijasc.github.io/ktor-svelte/changelog) | What changed in each release |
| [API reference](https://nijasc.github.io/ktor-svelte/api/) | Every public class and setting |

## Examples

| Example | Shows |
|---|---|
| [`examples/basic`](examples/basic) | The smallest possible app: one API route, prerendered pages and an SPA route |
| [`examples/notes`](examples/notes) | Full CRUD with `generateTs`, JSON, XML and compression, validation errors, runtime config, security headers, Swagger, dynamic routes and typed 404 pages |

Open this repository in IntelliJ and run `Notes: Dev`, then visit `http://localhost:8080`. Or from a terminal:

```bash
./gradlew -p examples/notes svelteDevAll
```

## Compatibility

| Tool | Supported | Tested with |
|---|---|---|
| Ktor | 3.6 and newer 3.x | 3.6.1 |
| Kotlin | 2.3 and newer | 2.4.21 |
| JVM | 17 and newer | 17, 21 |
| Gradle | Latest 8.x and 9.x | 8.14.6, 9.9.0 |
| SvelteKit | 3.x | 3.1.1 |
| Svelte | 5.57.3 and newer | 5.57.3 |
| Package managers | Bun, pnpm, npm, Yarn | Bun end to end. The others use fake tools in tests, plus npm in CI |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.

The docs list what every release was built and tested with on the [compatibility page](https://nijasc.github.io/ktor-svelte/reference/compatibility#by-release).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md). Releases are automated with release-please, and release notes live on the [releases page](https://github.com/nijasc/ktor-svelte/releases).

## License

[Apache 2.0](LICENSE)
