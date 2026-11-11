# Gradle settings and tasks

Every setting of `svelte { }`, every task and every Gradle property.

The values shown are the defaults. `PackageManager` needs `import io.github.nijasc.ktor.svelte.gradle.PackageManager` at the top of the build script.

```kotlin
svelte {
    frontendDir = layout.projectDirectory.dir("frontend")
    outputDir = "build"
    packageManager = PackageManager.AUTO
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
| `packageManager` | `AUTO`, `BUN`, `PNPM`, `NPM` or `YARN`. `AUTO` picks from `bun.lock`, `pnpm-lock.yaml`, `package-lock.json` or `yarn.lock` |
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

The package manager must already be installed. The plugin does not download Node or Bun.

In a Groovy `build.gradle`, a misspelled setting such as `fronendDir = file('web')` fails with the closest name and the list of settings, instead of Gradle's generic missing property error. The Kotlin DSL catches the same mistake when it compiles the script.

## Gradle tasks

| Task | What it does |
|---|---|
| `svelteSync` | Installs configured libraries and writes their generated files |
| `svelteVerifySync` | Fails if libraries don't match your config. Runs before every frontend build |
| `svelteGenerateSources` | Generates Kotlin for your libraries. Runs before compiling |
| `svelteInit` | Creates a working SvelteKit project in an empty `frontendDir`. Takes `--package-manager=bun` |
| `svelteDoctor` | Checks adapter, adapter output against `svelte.outputDir`, the bundled manifest, `#api`, tsconfig, Kit version, Node, tool and port, and says what to fix |
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
| `svelteGenerateRunConfigurations` | Writes IntelliJ run configurations to `.run/`, keeping any that exist |

| Property | Effect |
|---|---|
| `-Psvelte.skip=true` | Skips the frontend build, and warns if a JAR is being built |
| `-Psvelte.dev=true` | Same as skip, and also sets `-Dio.ktor.development=true` on `run` |
| `-Psvelte.verifyTs=false` | Leaves `svelteVerifyTs` out of `check` |
| `-Psvelte.verbose=true` | Shows the package manager and Vite output of `svelteInstall`, `svelteBuild`, `svelteSync` and `svelteInit`. Without it, that output is hidden when the command succeeds and printed in full when it fails. `--info` also shows it |
