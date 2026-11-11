# Getting started

Create a new Ktor and SvelteKit project with everything wired up, then run it.

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

Next, build something real in the [tutorial](tutorial.md).

Prefer to read scripts before running them? They are in [`scripts/`](https://github.com/nijasc/ktor-svelte/tree/main/scripts).
