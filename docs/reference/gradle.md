# Gradle settings and tasks

Every setting of `svelte { }`, every task and every Gradle property.

The values shown are the defaults.

```kotlin
import io.github.nijasc.ktor.svelte.gradle.PackageManager

svelte {
    frontendDir = layout.projectDirectory.dir("frontend")
    outputDir = "build"
    packageManager = PackageManager.Auto
    buildScript = "build"
    buildEnv = emptySet()
    addRuntimeDependency = true
    includeSourceMaps = false
    shortTaskNames = true
    precompress = true
    dev {
        port = 5173
        script = "dev"
        debugPort = 5005
        openBrowser = true
    }
}
```

| Setting | Purpose |
|---|---|
| `frontendDir` | Directory of the SvelteKit project |
| `outputDir` | Adapter output, a folder inside `frontendDir` given relative to it. Must match the adapter's `pages` option |
| `packageManager` | `Auto`, `Bun`, `Pnpm`, `Npm` or `Yarn`. `Auto` picks from `bun.lock`, `pnpm-lock.yaml`, `package-lock.json` or `yarn.lock` |
| `bunVersion` | An exact Bun version, such as `"1.3.14"`, that ktor-svelte downloads and uses instead of the Bun on `PATH`. Unset by default. See [Pin Bun](#pin-bun) |
| `buildScript` | `package.json` script that builds the frontend |
| `buildEnv` | Environment variables that affect the build. Declare any your frontend reads through `$env`, or Gradle can reuse a stale build |
| `libraries` | Tailwind, DaisyUI, Lucide, i18n and typed routes. See [Frontend libraries](../features/frontend-libraries.md) |
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
| `shortTaskNames` | Registers `dev`, `sync`, `doctor` and `gen` as [short names](#short-task-names) for the tasks used most. On by default |
| `includeSourceMaps` | Ships `.map` files in the JAR, where anyone can download them. Off by default |
| `precompress` | Gzips text files of 1 KiB or more that have no `.br` or `.gz` variant yet, such as SVG, JSON and fonts from `static/`, and keeps the result only when it saves at least 10%. On by default |
| `dev.port` | Port passed to Vite by `svelteDev` |
| `dev.script` | `package.json` script that starts Vite |
| `dev.debugPort` | Port where the app started by `svelteDevAll` listens for a debugger, on `127.0.0.1` only. `0` turns it off |
| `dev.openBrowser` | Opens the app in the default browser once `svelteDevAll` is ready, the first time only. Never in CI or without a display |

The package manager must already be installed unless you set `bunVersion`. The plugin does not download Node.

In a Groovy `build.gradle`, a misspelled setting such as `fronendDir = file('web')` fails with the closest name and the list of settings, instead of Gradle's generic missing property error. The Kotlin DSL catches the same mistake when it compiles the script.

## Review your configuration

`./gradlew svelteConfig` gives an overview of how ktor-svelte is set up in your app. It lists the Gradle settings, then starts your app once to read the effective `install(Svelte) { }` settings, the same way `svelteGenerateTs` does, so it shows what really runs, including values set from environment variables. Settings you changed are marked with their default, which makes it easy to see what a new version changed or added after an upgrade.

Then it scores the setup and lists what to change:

```text
Scores
  Security              [#########-]  90%  10 of 11
  Performance           [##########] 100%  4 of 4
  Operations            [#######---]  66%  2 of 3
  Developer experience  [##########] 100%  5 of 5

Suggestions
  - [Security] Set maxJsonStringLength = 100_000, or the longest text your API accepts.
  - [Operations] Set healthEndpoint = true and point your orchestrator at /_ktor-svelte/health.
```

The checks cover the origin check, security headers and CSP, error details, body and JSON limits, rate limits, the dev proxy, source maps, compression, caching, image optimization, health and request IDs, the sitemap address, a pinned Bun, generated TypeScript, error toasts, typed routes and dev tooling. A suggestion is advice, not an error: a public API may well do without `healthEndpoint`. Without the `application` plugin, only the Gradle settings are shown.

## Pin Bun

A fresh CI image or laptop often has no package manager, so the first build fails. Set `bunVersion` and the plugin downloads that exact Bun from Bun's GitHub releases the first time a task needs it:

```kotlin
svelte {
    bunVersion = "1.3.14"
}
```

The archive is checked against the release's `SHASUMS256.txt` before it is unpacked into `~/.gradle/ktor-svelte/bun/<version>/`, and every later build reuses it. Every task then uses this Bun, even when another one is on `PATH`, so all machines build with the same version. With `packageManager = AUTO`, Bun becomes the package manager. Bun runs Vite itself, so Node is not needed. It works on Windows, macOS and Linux, including Alpine, on x64 and arm64. Behind a proxy, set Java's `https.proxyHost` and `https.proxyPort` in `gradle.properties` with the `systemProp.` prefix.

## Format both sides

One command formats Kotlin and the frontend, and one checks them:

```bash
./gradlew format
```

```bash
./gradlew formatCheck
```

`format` runs the frontend's `format` script from `package.json`, and `formatCheck` runs its `lint` script. Projects made by the setup script have both, as `prettier --write .` and `prettier --check . && eslint .`. For Kotlin, they run `ktlintFormat` and `ktlintCheck` when the ktlint Gradle plugin is applied, or `spotlessApply` and `spotlessCheck` with Spotless. Without either, Kotlin is left alone and the task says so. A frontend without the script is skipped with a hint.

If your build already has a task called `format` or `formatCheck`, ktor-svelte does not register its own. The frontend half is always there as `svelteFormat` and `svelteFormatCheck`.

### Check before every commit

`svelteGitHooks` installs a git pre-commit hook in your clone that runs `formatCheck` and `svelteVerifySync`, so an unformatted file or a stale generated file never reaches a commit:

```bash
./gradlew svelteGitHooks
```

A commit that fails the check is stopped with the command that fixes it. `git commit --no-verify` skips the hook once, and `./gradlew svelteGitHooks --remove` takes it out again. The hook lives in `.git`, which git does not share, so everyone on the team runs the task once. A pre-commit hook that something else installed is never replaced: the task stops and tells you to call the two tasks from your own hook.

### Generated files without merge conflicts

Two branches that both add a page, an icon or an API route both change the same generated files, and git reports a conflict in a file nobody wrote. The same `svelteGitHooks` run ends that in your clone:

- When both sides of a merge or a rebase changed a generated file, git keeps one side and does not stop.
- Right after the merge or rebase, `svelteSync` and `svelteGenerateTs` run and write the files as they belong to the merged code. If `git status` then shows changes, commit them.

It covers `src/lib/ktor-svelte` and `src/lib/api`, through a `merge=ktor-svelte` attribute in the `.gitattributes` of those folders. Run `svelteSync` and `svelteGenerateTs` once after upgrading so those files get the attribute. In a clone where nobody ran `svelteGitHooks`, git ignores the attribute and merges those files the way it always did.

A merge that stops for a conflict in one of your own files does not regenerate when you finish it. The pre-commit hook and `check` still notice stale generated files, and `./gradlew svelteSync svelteGenerateTs` fixes them. If a `post-merge` or `post-rewrite` hook from another tool is already there, such as Git LFS, it stays, and the task tells you to run those two tasks yourself after such a merge.

## Short task names

The four tasks you type most have a short name:

| Short | Same as |
|---|---|
| `./gradlew dev` | `svelteDevAll` |
| `./gradlew sync` | `svelteSync` |
| `./gradlew doctor` | `svelteDoctor` |
| `./gradlew gen` | `svelteGenerateTs` |

They are the same tasks under another name, so options work as well: `./gradlew doctor --fix`, `./gradlew dev --full-stack-traces`. `dev` and `gen` exist when the long tasks do, which is in a project with the `application` plugin.

A short name that your build or another plugin already uses is left alone, and the long name keeps working. Set `shortTaskNames = false` to register none of them. The docs use the long names, because those always exist.

## Gradle tasks

| Task | What it does |
|---|---|
| `svelteSync` | Installs configured libraries and writes their generated files |
| `svelteVerifySync` | Fails if libraries don't match your config. Runs before every frontend build |
| `svelteGenerateSources` | Generates Kotlin for your libraries. Runs before compiling |
| `svelteBuildInfo` | Writes the version, the git commit and its time into the build, for [`buildInfo`](../guide/deployment.md#build-info). Runs before resources are processed |
| `svelteInit` | Creates a working SvelteKit project in an empty `frontendDir`. Takes `--package-manager=bun` |
| `svelteInstall`, `svelteBuild`, `svelteBundle` | Install the frontend dependencies from the lockfile, build the frontend, and copy the build into the JAR's resources with its manifest. They run as part of `jar` and `processResources`, so you rarely call them yourself |
| `svelteVerifyRoutes` | Lists links to pages that are written as strings, with the [typed route](../features/routes.md#finding-links-that-are-still-strings) to use instead, and fails if it finds any |
| `svelteVerifyLinks` | Lists [internal links that lead to no page, no API route and no static file](../features/routes.md#finding-links-that-lead-nowhere). With `--strict` it fails when it finds one |
| `svelteVerifyLoads` | Fails if an API call inside a `load` function [uses neither `apiWith(event)` nor `{ fetch }`](../features/calling-the-api.md#in-load-functions) |
| `svelteVerifyMessages` | Lists [i18n messages nothing uses](../features/frontend-libraries.md#messages-nothing-uses). With `--strict` it fails when it finds one |
| `svelteRename --page=notes/[id] --to=memos/[id]` | [Moves a page](../features/routes.md#renaming-a-page) and rewrites its typed route calls in the frontend and in Kotlin |
| `svelteDoctor` | Checks adapter, adapter output against `svelte.outputDir`, the bundled manifest, `#api`, tsconfig, Kit version, Node, tool and port, that every installed package still has its files, and that `NODE_EXTRA_CA_CERTS` points to a file, and says what to fix. With `--fix` it repairs what needs no decision |
| `svelteConfig` | Prints every setting of `svelte { }` and of `install(Svelte) { }`, marks the ones you changed from the default, scores security, performance, operations and developer experience, and suggests what to turn on. See [Review your configuration](#review-your-configuration) |
| `svelteDevAll` | Runs Vite, the Kotlin compiler and your app, and restarts the app when Kotlin changes |
| `svelteDev` | Starts Vite |
| `svelteGenerateTs` | Starts your app once to regenerate TypeScript |
| `svelteVerifyTs` | Starts your app once and fails if the committed TypeScript is out of date. Runs as part of `check` |
| `svelteVerifyApiRoutes` | Lists [API routes that nothing in the frontend calls](../features/typescript.md#routes-nothing-calls). With `--strict` it fails when it finds one |
| `svelteApiChanges` | Lists [what changed in the API for callers](../features/typescript.md#what-changed-for-callers) since `origin/main`, or the revision given with `--against`. With `--strict` it fails on a change that can break them |
| `svelteVerifyRoutes` | Lists links to pages that are written as strings, in the frontend and in Kotlin `respondRedirect` calls, with the [typed route](../features/routes.md#finding-links-that-are-still-strings) to use instead, and fails if it finds any. With `--fix` it rewrites the ones it can |
| `svelteCheck` | Runs your `check` script |
| `format`, `formatCheck` | [Format, or check the formatting of, Kotlin and the frontend](#format-both-sides) in one go |
| `svelteFormat`, `svelteFormatCheck` | The frontend half of those: run the `format` and the `lint` script |
| `svelteGitHooks` | Installs a [pre-commit hook](#check-before-every-commit) that runs `formatCheck` and `svelteVerifySync`, and keeps [generated files out of merge conflicts](#generated-files-without-merge-conflicts). With `--remove` it takes the hook out |
| `svelteRun --script=lint` | Runs any `package.json` script. Pass arguments with `--args="--fix --quiet"`; quote an argument that contains spaces |
| `svelteOutdated` | Lists outdated frontend dependencies |
| `svelteUpdateDependencies` | Updates frontend dependencies and the lockfile |
| `svelteClean` | Deletes `node_modules`, `.svelte-kit` and the build output |
| `deepClean` | Runs `clean`, then also deletes the project's `.gradle` and `.kotlin` directories, `node_modules`, `.svelte-kit`, `.vite`, `.turbo`, `.cache`, `.eslintcache` and the build output. Lockfiles and generated files are kept. Files a running Gradle daemon or IDE still holds, which happens on Windows, are skipped with a warning |
| `svelteLiveTemplates` | Writes IntelliJ live templates to `build/ktor-svelte/live-templates/`. `--install` copies them into every IntelliJ IDEA and WebStorm configuration it finds, `--config-dir=...` picks another JetBrains folder |
| `svelteGenerateRunConfigurations` | Writes IntelliJ run configurations to `.run/`, keeping any that exist: `Dev`, `Dev and debug`, `Debug app`, `Debug frontend`, `Ktor`, `Vite`, `Generate TypeScript`, `Build JAR`, `Type check frontend` and `Update frontend dependencies` |

| Property | Effect |
|---|---|
| `-Psvelte.skip=true` | Skips the frontend build, and warns if a JAR is being built |
| `-Psvelte.dev=true` | Same as skip, and also sets `-Dio.ktor.development=true` on `run` |
| `-Psvelte.verifyTs=false` | Leaves `svelteVerifyTs` out of `check` |
| `-Psvelte.verbose=true` | Shows the package manager and Vite output of `svelteInstall`, `svelteBuild`, `svelteSync` and `svelteInit`. Without it, that output is hidden when the command succeeds and printed in full when it fails. `--info` also shows it |
