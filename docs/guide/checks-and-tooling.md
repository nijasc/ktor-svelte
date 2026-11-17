# Checks and tooling

Every check and helper task ktor-svelte adds to your build, in one place: what it catches, how to run it, how to make it fail the build, and what its output looks like.

<Badge type="info" text="Gradle" />

## Quick start

Run the everyday checks before you push:

```bash
./gradlew check svelteVerifyRoutes svelteVerifyLoads svelteVerifyLinks --strict
```

And let a git hook keep formatting and generated files right on every commit:

```bash
./gradlew svelteGitHooks
```

## Overview

| Task | Catches | Runs by itself | Fails the build |
|---|---|---|---|
| [`svelteVerifySync`](#svelteverifysync) | Frontend libraries out of sync with `build.gradle.kts` | Before every frontend build | Always |
| [`svelteVerifyTs`](#svelteverifyts) | Generated TypeScript out of date | Part of `check` | Always |
| [`svelteVerifyLeaks`](#svelteverifyleaks) | Secret values in the frontend build | Before the build goes into the JAR | Always |
| [`svelteVerifyRoutes`](#svelteverifyroutes) | Links to pages written as strings | No | Always. `--fix` rewrites them |
| [`svelteVerifyLoads`](#svelteverifyloads) | API calls in `load` without SvelteKit's `fetch` | No | Always |
| [`svelteVerifyLinks`](#svelteverifylinks) | Internal links that lead nowhere | No | With `--strict` |
| [`svelteVerifyMessages`](#svelteverifymessages) | i18n messages nothing uses | No | With `--strict` |
| [`svelteVerifyApiRoutes`](#svelteverifyapiroutes) | API routes nothing in the frontend calls | No | With `--strict` |
| [`svelteApiChanges`](#svelteapichanges) | API changes that can break callers | No | With `--strict` |
| [`svelteVerifyA11y`](#svelteverifya11y) | Accessibility problems on prerendered pages | No | Always |
| [`svelteSmokeTest`](#sveltesmoketest) | A production JAR that does not serve its pages | No | Always |
| [`svelteDoctor`](#sveltedoctor) | A broken frontend setup | No | On errors. `--fix` repairs some |
| [`formatCheck`](#format-and-formatcheck) | Unformatted Kotlin or frontend code | No | Always |

Helpers that change or describe your project: [`svelteConfig`](#svelteconfig), [`format`](#format-and-formatcheck), [`svelteGitHooks`](#the-git-pre-commit-hook), [`svelteAdd`](#svelteadd), [`svelteRename`](#svelterename), [`svelteLiveTemplates`](#sveltelivetemplates), and the [lint rules](#lint-rules) in your editor. Every task is listed in the [Gradle reference](../reference/gradle.md#gradle-tasks).

## Checks that run by themselves

### svelteVerifySync

**Catches:** `build.gradle.kts` changed the [frontend libraries](../features/frontend-libraries.md), but `package.json`, the lockfile or the generated files were not updated.

**Runs:** before every frontend build, so a JAR is never built from a stale setup. Run it by hand with `./gradlew svelteVerifySync`.

```text
Frontend libraries are out of sync: src/lib/ktor-svelte/routes.ts, package.json. Run svelteSync and commit the result. See https://nijasc.github.io/ktor-svelte/features/frontend-libraries
```

**Fix:** `./gradlew svelteSync`, then commit. The [pre-commit hook](#the-git-pre-commit-hook) runs this check too.

### svelteVerifyTs

**Catches:** a route or DTO changed, but the committed TypeScript client in `frontend/src/lib/api` did not.

**Runs:** as part of `check`. It starts your app once, like `svelteGenerateTs`.

```text
Generated TypeScript is out of date: frontend/src/lib/api/services.ts. Run svelteGenerateTs, or start the app in development mode, and commit the result.
```

**Fix:** `./gradlew svelteGenerateTs` and commit. Leave it out of `check` with `-Psvelte.verifyTs=false`. With `generateTs` off, it has nothing to verify and says so.

### svelteVerifyLeaks

**Catches:** a secret value from the environment or a `.env` file that ended up in the frontend build, which is sent to every browser.

**Runs:** after `svelteBuild`, before the build is packed into the JAR.

```text
ktor-svelte found secret values in the frontend build. Everything in that folder is sent to browsers.

  SESSION_SIGN_KEY (declared as a secret)  _app/immutable/chunks/B3kq9.js
  STRIPE_KEY (.env)                        _app/immutable/nodes/2.Dx1.js
```

It names the variable and the file, never the value. What it looks for and what it leaves out is in [Secrets in the frontend build](../features/runtime-config.md#secrets-in-the-frontend-build). Turn it off with `svelte { verifyLeaks = false }`.

## Checks you run

### svelteVerifyRoutes

**Catches:** links to your pages written as strings, in `href`, `goto` and `redirect` in the frontend and in `respondRedirect` in Kotlin, when a [typed route](../features/routes.md) exists.

```bash
./gradlew svelteVerifyRoutes
```

```text
src/routes/+page.svelte:12  href="/notes/{note.id}"  ->  routes.notesId({ id: note.id })
src/lib/NoteForm.svelte:31  goto("/notes/" + created.id)  ->  routes.notesId({ id: created.id })
src/main/kotlin/notes/Routes.kt:48  respondRedirect("/notes/${note.id}")  ->  FrontendRoutes.notesId(note.id)
```

**Fix it for you:** `--fix` rewrites what it can without losing anything and adds the `#routes` import. Links with a query string or a fragment, paths too dynamic to read and Kotlin redirects with parameters stay listed for you.

```bash
./gradlew svelteVerifyRoutes --fix
```

**Strict:** it always fails when it finds a link. It needs typed routes on (`routes()` in `libraries`), otherwise it says there is nothing to verify. Details: [Finding links that are still strings](../features/routes.md#finding-links-that-are-still-strings).

### svelteVerifyLoads

**Catches:** an API call inside a `load` function that uses neither `apiWith(event)` nor `{ fetch }`, so SvelteKit cannot track or reuse it.

```bash
./gradlew svelteVerifyLoads
```

```text
src/routes/notes/[id]/+page.ts:6  api.notes.get(params.id)  ->  use apiWith(event), or pass { fetch } as the last argument
```

**Strict:** it always fails when it finds one. It reads every `+page.ts`, `+page.js`, `+layout.ts` and `+layout.js`. Details: [In load functions](../features/calling-the-api.md#in-load-functions).

### svelteVerifyLinks

**Catches:** internal links whose path is not one of your pages, not under your API and not a file in `static`, such as a typo in an `href`.

```bash
./gradlew svelteVerifyLinks
```

```text
src/routes/+page.svelte:14  href="/abuot"  ->  nothing is served at /abuot
src/main/kotlin/notes/Routes.kt:52  respondRedirect("/notes/${id}/edit")  ->  nothing is served at /notes/{}/edit
ktor-svelte: 2 internal link(s) lead to no page, no API route and no static file. Add --strict to fail the build on them.
```

**Strict:** `--strict` fails the build. It works with or without typed routes. Details: [Finding links that lead nowhere](../features/routes.md#finding-links-that-lead-nowhere).

### svelteVerifyMessages

**Catches:** [i18n](../features/frontend-libraries.md#i18n) messages that are in every locale file but used nowhere.

```bash
./gradlew svelteVerifyMessages
```

```text
old-banner  ->  nothing calls oldBanner() and no source names 'old-banner'
ktor-svelte: 1 message(s) are in every locale file but used nowhere. Add --strict to fail the build on them.
```

**Strict:** `--strict` fails the build. Details: [Messages nothing uses](../features/frontend-libraries.md#messages-nothing-uses).

### svelteVerifyApiRoutes

**Catches:** API routes that nothing in the frontend calls, so you can see what is safe to remove.

```bash
./gradlew svelteVerifyApiRoutes
```

```text
GET /api/notes/export  ->  nothing in the frontend calls api.notes.export
ktor-svelte: 1 API route(s) are not called by the frontend. Add --strict to fail the build on them.
```

**Strict:** `--strict` fails the build. Leave it off when other callers, such as a webhook or another service, use routes the frontend does not. Details: [Routes nothing calls](../features/typescript.md#routes-nothing-calls).

### svelteApiChanges

**Catches:** changes to the API that a caller outside this repository would notice, compared with `origin/main` or the revision you name.

```bash
./gradlew svelteApiChanges --against=v1.1.0
```

```text
API changes against v1.1.0: 2 that can break callers, 3 other.

Can break callers
  GET /api/tasks  query  limit            was string, is integer
  POST /api/tasks  request  folder        is new and required

Other changes
  GET /api/tasks  response  items[].version  added
  POST /api/tasks  request  version          added
  PATCH /api/tasks/{id}                      added
```

**Strict:** `--strict` fails on a change that can break callers. It reads the committed `openapi.json`, so run it after `svelteGenerateTs`. Details: [What changed for callers](../features/typescript.md#what-changed-for-callers).

### svelteVerifyA11y

**Catches:** accessibility problems that axe finds on every prerendered page, in light and in dark.

```bash
./gradlew svelteVerifyA11y --path=/pricing
```

```text
axe found 2 accessibility problems on 4 pages:
  /about in the light theme shadcn-light: image-alt: Images must have alternative text ([img])
  /about in the dark theme dracula: color-contrast: Elements must meet minimum color contrast ratio thresholds ([#content > p])
```

**Strict:** it always fails on a problem. It needs a browser and the environment the app needs, so it is not part of `check`. Details: [Accessibility](./browser-tests.md#accessibility).

### svelteSmokeTest

**Catches:** a production JAR that does not start, or does not serve its prerendered pages, its frontend files or its `GET` API routes.

```bash
./gradlew svelteSmokeTest
```

```text
ktor-svelte: build/libs/my-app-all.jar runs in production mode on port 55269.
  200  /
  200  /about
  200  /_app/immutable/assets/0.CtcRfiw7.css
  200  GET /api/greeting
  401  GET /api/me
ktor-svelte: the production build answered 2 pages, 1 asset, 2 API routes correctly.
```

**Strict:** it always fails on a wrong answer. Options: `--path`, `--skip` and `--start-seconds`. Details: [Smoke test](./deployment.md#smoke-test).

### svelteDoctor

**Catches:** a frontend setup that cannot work: the adapter, the adapter output against `svelte.outputDir`, the bundled manifest, `#api`, `tsconfig.json`, the SvelteKit version, Node, the package manager and port, packages that lost their files, whether `NODE_EXTRA_CA_CERTS` points to a file, and whether the package registry is reachable.

```bash
./gradlew svelteDoctor
```

```text
OK    Package manager bun is on PATH
OK    Uses adapter-static
OK    adapter-static writes to build, matching svelte.outputDir
OK    SvelteKit 3
ERROR src/routes/+page.svelte imports $lib. SvelteKit 3 uses #lib.
WARN  Node 20.10.0 is too old for Vite. Use Node 20.19, 22.12 or newer.
OK    Network: registry https://registry.npmjs.org/ (default), proxy http://proxy.corp:8080 (HTTPS_PROXY), no extra certificates
WARN  Registry https://registry.npmjs.org/ is not reachable: its certificate is not trusted, which happens when a company proxy inspects HTTPS. Set NODE_EXTRA_CA_CERTS to your company's root certificate (a PEM file), and add it to Java's trust store for Gradle.
ktor-svelte: svelteDoctor --fix can fix 1 of these.
```

**Network:** a first install that hangs or fails behind a company proxy is hard to read from the package manager's output. The doctor shows which registry, proxy and certificate settings apply and where each comes from, then asks the registry once:

| Setting | Read from, first match wins |
|---|---|
| Registry | `npm_config_registry`, `registry` in `frontend/.npmrc`, `registry` in `frontend/bunfig.toml`, `registry` in `~/.npmrc`, else `https://registry.npmjs.org/` |
| Proxy | `npm_config_https_proxy`, `https-proxy` in `.npmrc`, `HTTPS_PROXY`, `proxy` in `.npmrc`, `npm_config_proxy`, `HTTP_PROXY`. `NO_PROXY` and `noproxy` take the registry out of it |
| Certificates | `NODE_EXTRA_CA_CERTS`, and `npm_config_cafile` or `cafile` in `.npmrc` |

When the registry does not answer, it says what to set: `HTTPS_PROXY` when there is no proxy, the proxy's source when there is one, `NODE_EXTRA_CA_CERTS` when a proxy replaces the registry's certificate, a token when the registry answers 401, and credentials when the proxy answers 407. `strict-ssl=false` gets a warning, because it turns off certificate checks for every download. Passwords in proxy addresses are shown as `***`. The check uses Java's network stack, so a certificate Node trusts through `NODE_EXTRA_CA_CERTS` can still fail here; the message then says so. Network findings are warnings, and `./gradlew svelteDoctor --offline` skips the request.

**Fix it for you:** `--fix` repairs what needs no decision from you: a missing `#api` import, a `tsconfig.json` that does not extend `$app/tsconfig`, `$lib` imports left over from SvelteKit 2, and a `node_modules` folder whose packages lost their files, which it deletes so the next build installs it again. Each change is printed as `FIXED`.

```bash
./gradlew svelteDoctor --fix
```

**Strict:** it fails when a finding is an `ERROR`. Warnings only inform. `./gradlew doctor` is its [short name](../reference/gradle.md#short-task-names).

## Helpers

### svelteConfig

Prints every setting of `svelte { }` and of `install(Svelte) { }`, marks the ones you changed from the default, scores the setup and suggests what to turn on. It starts your app once to read the settings that really run.

```bash
./gradlew svelteConfig
```

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

A suggestion is advice, not an error, and the task never fails on one. Details: [Review your configuration](../reference/gradle.md#review-your-configuration).

### svelteReadme

**Writes:** the part of the project's `README.md` that says how to run this app: the commands, the addresses in development and the environment variables. It takes them from the build, so the README does not go stale when a port or a variable changes.

Put two marker lines where the section belongs, then run the task:

```text
## Development

<!-- ktor-svelte:start -->
<!-- ktor-svelte:end -->
```

```bash
./gradlew svelteReadme
```

Everything between the markers is replaced, and nothing outside them is touched. Without the markers, or without a `README.md`, the task writes nothing and says how to add them. The section has three tables:

| Table | Comes from |
|---|---|
| Commands | The tasks of the project: `svelteDevAll`, `build`, `shadowJar` or `buildFatJar` when there is one, `run`, `check`, `svelteSync svelteGenerateTs` and `svelteDoctor`. In a subproject they carry its path, such as `./gradlew :web:build` |
| Addresses in development | The app at `http://localhost:8080`, Vite at `dev.port`, the HTTPS address when `dev.https` is on, and the debugger at `dev.debugPort` |
| Environment variables | The variables the app declares, read from the [`.env.example`](../features/runtime-config.md#env-example) the app writes, and the names in `svelte { buildEnv }` |

**Strict:** `./gradlew svelteReadme --check` fails when the section differs from what the task would write, so CI can catch a README that someone forgot to update. Add it to `check` the way [any other check](#make-a-check-part-of-check) is added.

### format and formatCheck

One command formats Kotlin and the frontend, and one checks them:

```bash
./gradlew format
./gradlew formatCheck
```

| Side | `format` runs | `formatCheck` runs |
|---|---|---|
| Frontend | the `format` script of `package.json` | the `lint` script |
| Kotlin with ktlint | `ktlintFormat` | `ktlintCheck` |
| Kotlin with Spotless | `spotlessApply` | `spotlessCheck` |

- Projects made by the setup script have both scripts, as `prettier --write .` and `prettier --check . && eslint .`.
- Without ktlint or Spotless, Kotlin is left alone and the task says so. A frontend without the script is skipped with a hint.
- If your build already has a task called `format` or `formatCheck`, ktor-svelte does not register its own. The frontend half is always there as `svelteFormat` and `svelteFormatCheck`.

Details: [Format both sides](../reference/gradle.md#format-both-sides).

### The git pre-commit hook

`svelteGitHooks` installs a pre-commit hook in your clone that runs `formatCheck` and `svelteVerifySync`, so an unformatted file or a stale generated file never reaches a commit:

```bash
./gradlew svelteGitHooks
```

```text
ktor-svelte: installed .git/hooks/pre-commit. Every commit now runs formatCheck and svelteVerifySync first.
ktor-svelte: generated files no longer conflict in this clone. When both sides of a merge or rebase changed one, one side is kept and svelteSync and svelteGenerateTs run afterwards.
```

- A commit that fails the check is stopped with the command that fixes it. `git commit --no-verify` skips the hook once.
- `./gradlew svelteGitHooks --remove` takes it out again.
- The hook lives in `.git`, which git does not share, so everyone on the team runs the task once.
- A pre-commit hook that something else installed is never replaced: the task stops and tells you to call the two tasks from your own hook.
- The same run keeps [generated files out of merge conflicts](../reference/gradle.md#generated-files-without-merge-conflicts).

### svelteAdd

Creates a page with a typed `load`, and optionally a Kotlin route to start from:

```bash
./gradlew svelteAdd --page=notes/[id] --route
```

`--crud=Note` writes list, detail and form pages for a class of your API instead. It runs `svelteSync` afterwards. Details: [A new page](../features/routes.md#a-new-page) and [Pages for a class](../features/routes.md#pages-for-a-class).

### svelteRename

Moves a page and rewrites its typed route calls in the frontend and in Kotlin:

```bash
./gradlew svelteRename --page=notes/[id] --to=memos/[id]
```

It stops before it changes anything when a file it would rewrite has uncommitted changes, so the rename stays one clean diff. `--force` renames anyway. Details: [Renaming a page](../features/routes.md#renaming-a-page).

### svelteLiveTemplates

Installs IntelliJ live templates such as `ksget`, `kspost` and `ksload`:

```bash
./gradlew svelteLiveTemplates --install
```

```text
Restart the IDE, then type ksget, kspost, kspage, ksdto, ksinput, ksapi, ksload or kserror and press Tab.
```

The list of templates is in [Live templates](./dev-workflow.md#live-templates).

### Lint rules

`svelteSync` writes a small ESLint plugin to `src/lib/ktor-svelte/eslint.js`, so some of the checks above show up in the editor while you type:

| Rule | Same as |
|---|---|
| `ktor-svelte/no-string-page-links` | `svelteVerifyRoutes`, for the frontend |
| `ktor-svelte/fetch-in-load` | `svelteVerifyLoads` |
| `ktor-svelte/no-error-body-message` | No task: reading `error.body.message` without `isApiError` |

All three are warnings. Make one an error like any other ESLint rule. Setup: [Lint rules](../features/frontend-libraries.md#lint-rules).

## Make a check part of check

Tasks that only list can fail the build when you set `strict`, and any of them can join `check`:

```kotlin no-check
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyLinksTask

tasks.named<SvelteVerifyLinksTask>("svelteVerifyLinks") {
    strict.set(true)
}

tasks.check {
    dependsOn("svelteVerifyRoutes", "svelteVerifyLoads", "svelteVerifyLinks")
}
```

`svelteVerifyMessages`, `svelteVerifyApiRoutes` and `svelteApiChanges` have the same `strict` setting. Keep `svelteVerifyA11y` and `svelteSmokeTest` out of `check`: they need a browser or the production environment, which belongs in the pipeline.

## Full example

A GitHub Actions workflow that runs the fast checks on every pull request, and the checks that start the packaged app after them:

```yaml
name: Checks
on:
  pull_request:
  push:
    branches: [main]

jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # svelteApiChanges compares with origin/main
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: 21
      - uses: gradle/actions/setup-gradle@v4
      - uses: oven-sh/setup-bun@v2 # or set svelte { bunVersion } and skip this step

      - name: Build, unit tests and generated files
        run: ./gradlew check formatCheck

      - name: Frontend checks
        run: >
          ./gradlew svelteVerifyRoutes svelteVerifyLoads
          svelteVerifyLinks --strict
          svelteVerifyMessages --strict
          svelteApiChanges --strict

      - name: Production build
        env:
          DATABASE_URL: jdbc:h2:mem:ci
        run: ./gradlew svelteSmokeTest

      - name: Accessibility
        env:
          DATABASE_URL: jdbc:h2:mem:ci
        run: ./gradlew installBrowsers svelteVerifyA11y
```

- A Gradle option belongs to the task right before it, so each `--strict` goes after its own task.
- `installBrowsers` is the small task from [Browsers](./browser-tests.md#browsers).
- The smoke test and the accessibility check start the app, so give them the environment it needs.

## Good to know

- `svelteVerifySync`, `svelteVerifyTs` and `svelteVerifyLeaks` already guard every build. The others are yours to add.
- The tasks that read your sources (`svelteVerifyRoutes`, `svelteVerifyLinks`, `svelteVerifyMessages`, `svelteVerifyApiRoutes`) skip the generated folders `src/lib/ktor-svelte` and `src/lib/api`.
- `svelteDoctor` is the first thing to run when a build fails for a reason you do not understand. See [Troubleshooting](../reference/troubleshooting.md).
