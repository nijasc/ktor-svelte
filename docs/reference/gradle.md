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
| `libraries` | Tailwind, DaisyUI, Lucide and i18n. See [Frontend libraries](../features/frontend-libraries.md) |
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
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
  Developer experience  [##########] 100%  4 of 4

Suggestions
  - [Security] Set maxJsonStringLength = 100_000, or the longest text your API accepts.
  - [Operations] Set healthEndpoint = true and point your orchestrator at /_ktor-svelte/health.
```

The checks cover the origin check, security headers and CSP, error details, body and JSON limits, rate limits, the dev proxy, source maps, compression, caching, image optimization, health and request IDs, the sitemap address, a pinned Bun, generated TypeScript, error toasts and dev tooling. A suggestion is advice, not an error: a public API may well do without `healthEndpoint`. Without the `application` plugin, only the Gradle settings are shown.

## Pin Bun

A fresh CI image or laptop often has no package manager, so the first build fails. Set `bunVersion` and the plugin downloads that exact Bun from Bun's GitHub releases the first time a task needs it:

```kotlin
svelte {
    bunVersion = "1.3.14"
}
```

The archive is checked against the release's `SHASUMS256.txt` before it is unpacked into `~/.gradle/ktor-svelte/bun/<version>/`, and every later build reuses it. Every task then uses this Bun, even when another one is on `PATH`, so all machines build with the same version. With `packageManager = AUTO`, Bun becomes the package manager. Bun runs Vite itself, so Node is not needed. It works on Windows, macOS and Linux, including Alpine, on x64 and arm64. Behind a proxy, set Java's `https.proxyHost` and `https.proxyPort` in `gradle.properties` with the `systemProp.` prefix.

## Gradle tasks

| Task | What it does |
|---|---|
| `svelteSync` | Installs configured libraries and writes their generated files |
| `svelteVerifySync` | Fails if libraries don't match your config. Runs before every frontend build |
| `svelteGenerateSources` | Generates Kotlin for your libraries. Runs before compiling |
| `svelteInit` | Creates a working SvelteKit project in an empty `frontendDir`. Takes `--package-manager=bun` |
| `svelteDoctor` | Checks adapter, adapter output against `svelte.outputDir`, the bundled manifest, `#api`, tsconfig, Kit version, Node, tool and port, and says what to fix |
| `svelteConfig` | Prints every setting of `svelte { }` and of `install(Svelte) { }`, marks the ones you changed from the default, scores security, performance, operations and developer experience, and suggests what to turn on. See [Review your configuration](#review-your-configuration) |
| `svelteDevAll` | Runs Vite, the Kotlin compiler and your app, and restarts the app when Kotlin changes |
| `svelteDev` | Starts Vite |
| `svelteGenerateTs` | Starts your app once to regenerate TypeScript |
| `svelteVerifyTs` | Starts your app once and fails if the committed TypeScript is out of date. Runs as part of `check` |
| `svelteCheck` | Runs your `check` script |
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
