# Getting started

Create a new Ktor and SvelteKit project with everything wired up, and run it. It takes one command and a couple of minutes.

## What you need

- Java 17 or newer
- One of Bun, pnpm, npm or Yarn on your `PATH`

That is all. The setup script brings its own Gradle wrapper and always uses the latest ktor-svelte release.

## 1. Create the project

**macOS and Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh
```

**Windows:**

```powershell
powershell -c "irm https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.ps1 | iex"
```

It asks a few questions. Press Enter to take the defaults. Then it writes the project, installs the frontend, generates the TypeScript client and formats everything.

## 2. Run it

```bash
cd my-app
./gradlew svelteDevAll
```

On Windows, run `gradlew.bat svelteDevAll`. If you chose Postgres, start it first with `docker compose up -d`.

`svelteDevAll` starts Vite, the Kotlin compiler and your app, and opens `http://localhost:8080` once everything answers. `./gradlew dev` is short for the same task. In IntelliJ, open the folder and run the `Dev` configuration instead.

## 3. Look around

The first page of the new app lists what was set up for the answers you gave, each with a link to its docs, and what to do next. Try this:

- Edit `frontend/src/routes/+page.svelte` and save: the page updates without a reload.
- Open `http://localhost:8080/api/hello`: that answer comes from `Application.kt`.
- Click the **API** button in the corner of the page to see every call the app answers.
- Change a route in Kotlin and save: the app restarts, and the typed client in `frontend/src/lib/api` follows.

When something looks off, run `./gradlew svelteDoctor`.

## What the questions mean

| Question | Flag | Default | What you get |
|---|---|---|---|
| Project name, Kotlin package, package manager | `--name`, `--package`, `--package-manager` | `my-app`, `com.example.app`, first one found | |
| TypeScript client | `--generate-ts` | yes | `generateTs` turned on |
| DaisyUI, Tailwind, Lucide | `--daisy`, `--tailwind`, `--lucide` | yes | Configured in `build.gradle.kts` |
| i18n | `--i18n`, `--locales`, `--locale-strategy` | no | Message files and the chosen strategy |
| Sign in | `--auth` | no | Cookie sessions, hashed passwords, routes, and login and account pages |
| Postgres | `--database` | no | Exposed, HikariCP, `compose.yaml` and a small example table |
| Flyway, only with Postgres | `--flyway` | yes | Migrations in `src/main/resources/db/migration`, and [`generateMigrations`](dev-workflow.md#generate-a-migration) to write the next one from your tables |
| No package folders | `--idea-ext` | yes | Kotlin files directly in `src/main/kotlin`, and IntelliJ knows the package through the `idea-ext` plugin |
| Hexagonal modules | `--hexagonal` | no | A domain driven, multi-module backend. See [Hexagonal modules](#hexagonal-modules) |
| Convention plugin, asked only without hexagonal modules | `--conventions` | no | `build-logic` with shared Kotlin and ktlint setup, for multi-module projects |
| Dockerfile | `--docker` | yes | A multi-stage build that runs the JAR as a non-root user |
| GitHub Actions | `--github-actions` | yes | A CI workflow with Actions pinned to commit SHAs |
| release-please, only with GitHub Actions | `--release-please` | no | A release workflow that keeps a release pull request open, and a `version.txt` that sets the Gradle `version` |
| Conventional Commits | `--conventional-commits` | yes with release-please, otherwise no | A `commit-msg` hook in `.githooks` that rejects other messages |
| Dependabot | `--dependabot` | no | `.github/dependabot.yml` with weekly, grouped updates for Gradle, the frontend packages and, with GitHub Actions, the Actions |
| Git repository, only if git is installed | `--git` | yes | `git init` |
| IntelliJ live templates | `--live-templates` | yes | Installs `ksget`, `ksapi` and the other ktor-svelte live templates into every IntelliJ IDEA and WebStorm on the machine |
| Open in IntelliJ, only if it is installed | `--open-idea` | yes, but no with `--yes` | Opens the project when it is ready |

DaisyUI includes Tailwind, so with `--daisy` the Tailwind question is skipped. The languages for i18n are written default first, such as `en,de`, and the strategy is `Cookie` or `UrlPrefix`.

### Hexagonal modules

With `--hexagonal`, the backend is split into bounded contexts, and the script asks how:

| Question | Flag | Default | What you get |
|---|---|---|---|
| Bounded contexts | `--contexts` | `orders` | One context per name, such as `--contexts=catalog,orders`. Lowercase letters and digits |
| Main aggregate of each context | `--aggregate-<context>` | The name without a trailing `s`, capitalized | An aggregate, a repository port, a service and `/api/<context>`, such as `--aggregate-catalog=Product` |
| Modules per context | `--module-layout` | `layers` | `layers` makes `domain`, `application` and `adapters` modules, so Gradle keeps each layer from seeing the one above it. `single` makes one module with a package per layer |
| Shared kernel | `--shared-kernel` | no | A `shared-kernel` module with `DomainException`, which the app answers with 422 |

The root project starts the app and wires the contexts together in `Application.kt`. The repository adapter uses Exposed when you chose Postgres, and keeps data in memory otherwise. Modules depend on each other through type-safe project accessors such as `projects.ordersDomain`, and every library and plugin version comes from `gradle/libs.versions.toml`. Modules with routes apply `ktor-routes-conventions` from `build-logic`, which adds Ktor's OpenAPI compiler plugin, so `generateTs` sees their request and response types. [Hexagonal modules](hexagonal-modules.md) explains the layers, how a request flows through them, and how to add a context.

Every project also gets a Gradle version catalog, JSON and typed error responses, ktlint, ESLint and Prettier, a `README.md`, a `.env.example` and a `.gitignore`. With sign in or Postgres, it also gets a `.env` with random secrets, which is not committed. [Project structure](project-structure.md) shows where everything lives.

## Build the command

Walk through the steps, or skip to the command at any point, and copy the command for your system. Every step starts with the defaults, and the command skips every question. The page address keeps your answers, so the link on the last step opens the same choices for a teammate.

<SetupBuilder />

To write the command by hand, add `--yes` and any options from the table. `--yes` takes the default for every question you do not answer with a flag. Turn something off with `--no-`, such as `--no-lucide`:

```bash
curl -fsSL https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.sh | sh -s -- --yes --name=shop
```

On Windows, `irm ... | iex` cannot pass options, so run the script as a script block. Put options that contain a comma, such as `--locales=en,de`, in single quotes, or PowerShell splits them:

```powershell
powershell -c "& ([scriptblock]::Create((irm https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts/setup.ps1))) --yes --name=shop --i18n '--locales=en,de'"
```

On macOS and Linux, pick from a list with the arrow keys and Enter, and answer a yes or no question with y, n, the arrow keys or Enter for the highlighted answer. Elsewhere, type the number or y and n. The script shows each step with its time and keeps the Gradle and package manager output out of the way. When a step fails, it prints the last lines of that output and where the full log is. It uses color in a terminal that supports it. Set `NO_COLOR` to turn color off, or `FORCE_COLOR` to keep it when the output is not a terminal.

::: details Preview without writing anything
Add `--dry-run` to see what a command would do. The script asks its questions as usual, then lists every file it would write and every step it would run, and stops. Nothing in the current folder changes.
:::

::: details Pin a release
The script uses the latest release from Maven Central. Pass a release number, such as `--version=1.0.0`, to create the project with that release instead. When a newer release exists, the script says so, and goes on with the one you pinned.
:::

::: tip Read before you run
Prefer to read scripts before running them? They are in [`scripts/`](https://github.com/nijasc/ktor-svelte/tree/main/scripts). [What runs on your machine](../security.md#what-runs-on-your-machine) explains what they download.
:::

## Next steps

- Build something real: the [tutorial](tutorial.md) takes you from an empty project to a notes app in one JAR.
- See every feature at a glance: [Everything ktor-svelte does](../features/).
- Already have an app? [Add to an existing project](existing-project.md).
- Tick settings in a form: the [Configurator](configurator.md).
