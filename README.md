# ktor-svelte

[![Latest release](https://img.shields.io/github/v/release/nijasc/ktor-svelte?label=release&sort=semver)](https://github.com/nijasc/ktor-svelte/releases/latest)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.nijasc/ktor-svelte-server?label=Maven%20Central)](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server)
[![Gradle Plugin Portal](https://img.shields.io/gradle-plugin-portal/v/io.github.nijasc.ktor-svelte?label=Gradle%20Plugin%20Portal)](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte)
[![CI](https://img.shields.io/github/actions/workflow/status/nijasc/ktor-svelte/ci.yml?branch=main&label=CI)](https://github.com/nijasc/ktor-svelte/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/nijasc/ktor-svelte)](LICENSE)
[![Ktor](https://img.shields.io/badge/Ktor-3.x-087CFA?logo=ktor&logoColor=white)](https://ktor.io)
[![Svelte](https://img.shields.io/badge/Svelte-5.57.3%2B-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)

**Latest release:** [Maven Central](https://central.sonatype.com/artifact/io.github.nijasc/ktor-svelte-server) | [Gradle Plugin Portal](https://plugins.gradle.org/plugin/io.github.nijasc.ktor-svelte) | [Release notes](https://github.com/nijasc/ktor-svelte/releases/latest) | [API reference](https://nijasc.github.io/ktor-svelte/)

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
- **Sensible production defaults.** Immutable caching for hashed assets, ETags, precompressed files, compressed API responses, SPA fallback and real 404s for stale chunks.
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
    id("io.github.nijasc.ktor-svelte") version "0.7.0"
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
implementation("io.github.nijasc:ktor-svelte-server:0.7.0")
```
<!-- x-release-please-end -->

## Documentation

| Page | Covers |
|---|---|
| [Frontend libraries](docs/frontend-libraries.md) | Tailwind, DaisyUI, Lucide and i18n, configured in Gradle with typed helpers on both sides. |
| [Generated TypeScript](docs/typescript.md) | Types and a client generated from your Ktor routes, and how to call the API from Svelte. |
| [Server features](docs/server.md) | Validation, transport, auth, runtime config and the endpoints ktor-svelte can add. |
| [Security](docs/security.md) | The protections that are on by default, and how to change them. |
| [Configuration](docs/configuration.md) | Every setting of `install(Svelte)` and `svelte { }`, and every Gradle task and property. |
| [Dev workflow](docs/dev-workflow.md) | Hot reload for Svelte and Kotlin, debugging and the dev proxy. |
| [How it works](docs/how-it-works.md) | Build tasks, request resolution, limits and the FAQ. |
| [Recipes](docs/recipes.md) | Sessions, uploads, live updates, paging and an admin area, end to end. |
| [API reference](https://nijasc.github.io/ktor-svelte/) | Every public class and setting, generated from the code. |

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
| Gradle | Latest 8.x and 9.x | 8.14.6, 9.8.2 |
| SvelteKit | 3.x | 3.1.1 |
| Svelte | 5.57.3 and newer | 5.57.3 |
| Package managers | Bun, pnpm, npm, Yarn | Bun end to end. The others use fake tools in tests, plus npm in CI |

On Gradle 8.x, use Shadow 9.2 or older if you use Shadow. Newer versions need a newer Gradle.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md). Releases are automated with release-please, and release notes live on the [releases page](https://github.com/nijasc/ktor-svelte/releases).

## License

[Apache 2.0](LICENSE)
