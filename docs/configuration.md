# Configuration

Every setting of `install(Svelte)` and `svelte { }`, and every Gradle task and property.

## Ktor

The values shown are the defaults.

```kotlin
install(Svelte) {
    apiPrefixes("/api")
    paramRoutes()
    spaFallback = "200.html"
    notFoundPage = "404.html"
    source = SvelteSource.Classpath
    generateTs = false
    generateTsOutput = null
    apiDocs = false
    apiDocsPath = "/api/docs"
    routing = SvelteRouting.Automatic
    originCheck = true
    hideErrorDetails = true
    allowedOrigins()
    maxApiBodySize = 1048576

    securityHeaders {
        enabled = true
        contentTypeOptions = "nosniff"
        frameOptions = "DENY"
        referrerPolicy = "strict-origin-when-cross-origin"
        contentSecurityPolicy = null
        automaticContentSecurityPolicy = true
    }

    cache {
        immutable = "public, max-age=31536000, immutable"
        html = "no-cache"
        other = "no-cache"
    }

    dev {
        url = "http://localhost:5173"
        mode = DevMode.AUTO
        allowRemote = false
    }

    transport {
    }
}
```

| Setting | Purpose |
|---|---|
| `apiPrefixes` | Paths the frontend never answers, and the routes included in `generateTs`. `/api` matches `/api` and `/api/x`, not `/apiary` |
| `paramRoutes` | SvelteKit route patterns such as `/items/[id]`, `/docs/[...rest]` and `/blog/[[page]]`. Matching paths get the fallback even when the request does not accept HTML, for example link previews or tests. Paths with a file extension still return 404 |
| `spaFallback` | Page for client-side routes. Must match the adapter's `fallback` option. `null` disables it |
| `notFoundPage` | Page served with status 404. `null` disables it |
| `source` | `SvelteSource.Classpath`, or `SvelteSource.Directory(path)` to serve a build from disk |
| `generateTs` | Generates TypeScript from your routes in development mode |
| `generateTsOutput` | Output directory. Defaults to `src/lib/api` in your frontend |
| `apiDocs` | Serves Swagger UI in development mode. See [API docs](server.md#api-docs) |
| `routing` | `Manual` lets you place the frontend with `svelte()`. See [Auth](server.md#auth) |
| `originCheck` | Refuses cross-site requests to API paths for every method except GET, HEAD, OPTIONS and TRACE. See [API request guards](security.md#api-request-guards) |
| `hideErrorDetails` | Answers unhandled exceptions in production without their message. See [API request guards](security.md#api-request-guards) |
| `allowedOrigins` | Extra origins, such as `https://admin.example.com`, that may write to the API |
| `maxApiBodySize` | Largest request body on API paths, in bytes. `null` disables it |
| `securityHeaders.enabled` | Sends security headers. `false` turns all of them off. See [Security headers](security.md#security-headers) |
| `securityHeaders.contentSecurityPolicy` | Your own policy, sent unchanged on every response. `null` uses the automatic policy |
| `securityHeaders.automaticContentSecurityPolicy` | Sends a strict CSP built from the inline scripts of each HTML page. Extend it with `allowCspSources(directive, sources)` |
| `publicConfig(value)` | See [Runtime config](server.md#runtime-config) |
| `cache` | `Cache-Control` values for `_app/immutable/**`, HTML pages and other files |
| `dev.url` | Vite URL. The `KTOR_SVELTE_DEV_SERVER` environment variable overrides it |
| `dev.mode` | `AUTO` follows Ktor's development mode. `ALWAYS` and `NEVER` force it |
| `dev.allowRemote` | Lets other machines use the dev proxy, and lets `dev.url` point at another machine. Off by default |
| `transport` | JSON, XML and compression. See [Transport](server.md#transport) |

A route of yours such as `get("/{slug}")` beats the frontend. That is intended, but it can hide pages.

ETags are content hashes from the manifest, so 304 responses are cheap and stay valid across restarts. If you set `adapter({ precompress: true })`, the `.br` and `.gz` files are served based on `Accept-Encoding`. Files the adapter did not compress, such as those from `static/`, are gzipped by `svelteBundle` unless you set `precompress = false`. `.zst` files next to them, for example from a Vite compression plugin, are bundled too and preferred for browsers that accept `zstd`, since they decompress faster.

If the frontend build is missing, the app fails at startup in production with a message explaining what to do. In Ktor development mode it logs a warning instead, and frontend routes return a 503 explaining the problem.

## Gradle

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
| `libraries` | Tailwind, DaisyUI, Lucide and i18n. See [Frontend libraries](frontend-libraries.md#frontend-libraries) |
| `addRuntimeDependency` | Adds `ktor-svelte-server` to `implementation`, at the plugin's own version |
| `includeSourceMaps` | Ships `.map` files in the JAR, where anyone can download them. Off by default |
| `precompress` | Gzips text files of 1 KiB or more that have no `.br` or `.gz` variant yet, such as SVG, JSON and fonts from `static/`, and keeps the result only when it saves at least 10%. On by default |
| `dev.port` | Port passed to Vite by `svelteDev` |
| `dev.script` | `package.json` script that starts Vite |
| `dev.debugPort` | Port where the app started by `svelteDevAll` listens for a debugger, on `127.0.0.1` only. `0` turns it off |

The package manager must already be installed. The plugin does not download Node or Bun.

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
