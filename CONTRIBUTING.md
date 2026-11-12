# Contributing

Thanks for helping out. This project cares about two things more than anything else: great developer experience, and staying small. A feature that needs a paragraph of setup, or a dependency that most users will never touch, is probably not a good fit.

Fair warning: much of this code was written with AI, and the maintainer has limited time. Small, focused pull requests get merged fastest.

Everyone taking part follows the [code of conduct](CODE_OF_CONDUCT.md).

## Getting set up

You need:

- JDK 21. Gradle downloads a JDK 17 toolchain for compiling.
- [Bun](https://bun.sh), for the examples. Node, pnpm and Yarn are optional.
- IntelliJ IDEA, if you want the shared run configurations in `.run/`.

```bash
git clone https://github.com/nijasc/ktor-svelte.git
```

```bash
./gradlew check apiCheck
```

If that passes, you are ready.

In IntelliJ, open the repository root, then right-click `ide/settings.gradle.kts` and choose "Link Gradle Project". That build includes the root and the examples, so they all appear as one project. Link only `ide`, and not the root or an example as well, because the examples include the root and you would get duplicate modules. Use JDK 21 as the Gradle JVM. Then run `Notes: Dev` and open `http://localhost:8080` to see everything working together.

## How the project is laid out

| Path | What lives there |
|---|---|
| `ktor-svelte-server/` | The Ktor plugin. `Svelte.kt` is the entry point and `internal/` is everything users cannot see |
| `ktor-svelte-server/.../internal/` | `SvelteHandler` answers frontend requests, `LibraryConfig` reads the library settings the Gradle plugin bundles |
| `ktor-svelte-server/.../internal/assets/` | Manifest, asset stores, path resolution and the responder that sets caching headers |
| `ktor-svelte-server/.../internal/security/` | Origin check, body limit responses and the per-page Content-Security-Policy |
| `ktor-svelte-server/.../internal/validation/` | `SchemaConstraints`, which checks received values against `JsonSchema` annotations and `Validated` rules |
| `ktor-svelte-server/.../internal/dev/` | The Vite dev proxy and the status endpoint |
| `ktor-svelte-server/.../internal/typescript/` | OpenAPI to TypeScript. `TypeScriptGenerator` takes OpenAPI JSON and returns files, so it is easy to test |
| `ktor-svelte-catalog/` | The published version catalog. It takes the Kotlin, Ktor and serialization versions from `gradle/libs.versions.toml`, so bumping them there updates the catalog too |
| `ktor-svelte-gradle-plugin/` | The Gradle plugin. `KtorSveltePlugin.kt` wires the tasks in `tasks/`, and `libraries/` generates the files for configured frontend libraries |
| `build-logic/` | Convention plugins shared by both modules: Kotlin, ktlint and toolchain setup, and the publishing metadata |
| `examples/basic/` | The smallest possible app |
| `examples/notes/` | The feature-rich app. New features should show up here |
| `examples/showcase/` | A team board with sessions, roles, a database, uploads, search and two languages. It uses every feature together, the way a real app does |
| `.run/` | Shared IntelliJ run configurations |

The examples are separate Gradle builds that pull in the root build with `includeBuild`, so they use the plugin the way a real project does. They are also the end-to-end test fixtures.

The [architecture page](https://nijasc.github.io/ktor-svelte/main/reference/architecture) shows how the build output reaches the JAR and how a request reaches a file, with the source file for each step.

## Frontend libraries

Package versions for `svelteSync` are in `libraries/LibrarySpec.kt`, and the DaisyUI theme list is in `SvelteLibraries.kt`. The fixed parts of generated files are templates in `ktor-svelte-gradle-plugin/src/main/resources/.../gradle/templates/`, and the static TypeScript of `generateTs` sits in `ktor-svelte-server/src/main/resources/.../internal/typescript/`. Templates use `{{name}}` placeholders, and rendering fails when a value is missing or unused, so edit a template like the file it produces. When you change a generator, run `./gradlew -p examples/notes svelteSync` and commit the result. CI fails if the notes app is out of sync.

## Project setup

`scripts/setup.sh` and `scripts/setup.ps1` find the latest release and run `scripts/Setup.java` from that release's tag, so all the logic lives in one file. To try local changes:

```bash
java scripts/Setup.java --local-build=. --yes --name=demo
```

## Tests

| Layer | Command | What it proves |
|---|---|---|
| Runtime | `./gradlew :ktor-svelte-server:test` | Request resolution, caching, dev proxy, transport, TypeScript output |
| Plugin | `./gradlew :ktor-svelte-gradle-plugin:functionalTest` | Task graph, up-to-date checks, configuration cache, packaging, with fake tools on `PATH` |
| Plugin on Gradle 8 | `./gradlew :ktor-svelte-gradle-plugin:functionalTest -PtestGradleVersion=8.14.6 -PtestShadowVersion=9.2.2` | The same, on the oldest supported Gradle |
| End to end | `./gradlew -p examples/basic e2eTest`, `./gradlew -p examples/notes e2eTest` and `./gradlew -p examples/showcase e2eTest` | A real SvelteKit build in a real JAR, over real HTTP |
| Browsers | `./gradlew -p examples/showcase browserTest -Pbrowser=chromium`, also with `firefox` and `webkit` | The showcase JAR in a real browser: sign in, forms, uploads, both languages, the Content-Security-Policy, and accessibility checks with axe in a light and a dark theme |
| Development mode | `./gradlew -p examples/showcase devBrowserTest` | `svelteDevAll` with a real browser: pages through the dev proxy, hot reload of a Svelte file, an app restart after a Kotlin change, and browser errors in the dev log |
| Frontend types | `./gradlew -p examples/notes svelteCheck` | Generated TypeScript compiles in a real SvelteKit project |

Every behaviour change needs a test. Bug fixes should start with a failing one.

If you change the API of an example or the generator, refresh the generated clients and commit them. CI fails when they are out of date:

```bash
./gradlew -p examples/notes svelteGenerateTs
```

```bash
./gradlew -p examples/showcase svelteGenerateTs
```

### Testing dev mode by hand

`devBrowserTest` covers hot reload and restarts on the showcase. It needs ports 8080 and 5173 to be free, and it edits two source files while it runs and puts them back afterwards. The browser tests download their browser on the first run. On Linux, `./gradlew -p examples/showcase installBrowsers -Pbrowser=webkit` also installs the system packages a browser needs.

Some things still need a person. Check them before changing the dev proxy:

1. Run `Notes: Dev` in IntelliJ.
2. Open `http://localhost:8080/notes` and check that your notes appear.
3. Edit `examples/notes/frontend/src/routes/notes/+page.svelte`, and check that the page updates without a reload.
4. Change a route in `examples/notes/src/main/kotlin/notes/Routes.kt` and save. The app restarts and `frontend/src/lib/api` updates.
5. Remove `server.hmr` from `vite.config.ts`, restart, and repeat step 3. The console should show one WebSocket error and then Vite's direct connection fallback.
6. Stop the task, and check that nothing is still listening on ports 5173 and 8080. Also try closing the terminal instead of stopping it.

## Brand

The ktor-svelte colors mix Kotlin and SvelteKit: Kotlin violet `#7f52ff`, Kotlin magenta `#c711e1` and Svelte orange `#ff3e00`, as one gradient in that order. The favicon the runtime serves (`ktor-svelte-server/src/main/resources/.../internal/assets/favicon/`), the docs logo (`docs/public/logo.svg`), the docs colors in `docs/.vitepress/theme/custom.css` and the social preview images all use it. Links and buttons use darker or lighter magentas from the middle of the gradient, so text keeps a contrast of at least 4.5:1. When you change the icon, edit `favicon.svg` and render the PNG and ICO files from it.

## Docs site

The docs in `docs/` are a [VitePress](https://vitepress.dev) site with search. Run it locally with hot reload:

```bash
cd docs && bun install && bun run dev
```

`bun run build` fails on any dead link, and CI runs it for every pull request. The changelog page is generated from the GitHub release notes when the site is built. The "By release" table on the compatibility page is generated by `docs/scripts/compatibility.mjs` from each release tag: the Kotlin and Ktor versions in `gradle/libs.versions.toml`, the Kotlin API level of the runtime, `jvmToolchain`, the oldest Gradle version CI tests and the wrapper version, and the SvelteKit version in the plugin's templates. If you move one of those, update the script too.

CI also compiles every Kotlin block and type-checks every TypeScript and Svelte block in the docs, so a renamed setting or helper breaks the build instead of the docs. Run the same check locally:

```bash
bun docs/scripts/check-snippets.mjs
```

It needs Java and Bun. Kotlin blocks that configure Gradle (`svelte { }`, `plugins { }`, `dependencies`) are evaluated as build scripts, with `ktorSvelte` pointing to the version catalog built from `ktor-svelte-catalog`. Blocks for `settings.gradle.kts` (`dependencyResolutionManagement`, `pluginManagement`) are evaluated as settings scripts, with the catalog coordinates swapped for that local file, since the version in the docs may not be published yet. Other Kotlin blocks are compiled against the server module: statements are wrapped in a function on `Application`, `Route` or `SvelteConfig`, depending on how they start, and blocks on the same page share a package. TypeScript and Svelte blocks are type-checked inside a copy of the notes example frontend, so `#api` is its generated client. Missing imports from `#api` are added automatically. Loose names that a snippet takes for granted, such as `notes` or `showError`, are declared in `docs/snippets/globals.d.ts`, and server stubs such as `store` or `users` live in `docs/snippets/src/main/kotlin/snippets/prelude/Prelude.kt`. Mark a block that can't compile, such as one using routes the notes example lacks, with ` ```ts no-check `. Blocks with placeholders like `"<new version>"` are skipped. Failures name the generated file after the page and line, such as `features_typescript_L31.ts`.

The API reference is built with Dokka from the public API of both modules:

```bash
./gradlew dokkaGenerate
```

Each build also writes `llms.txt`, an index of every page in sidebar order, and `llms-full.txt`, all pages as one Markdown file with absolute links. Both come from `docs/.vitepress/llms.ts` and follow the sidebar, so a new page only needs a sidebar entry.

The generator playground runs `TypeScriptGenerator.kt` in the browser. `docs/playground` is a small Kotlin/JS build that compiles that file and `ConstraintMessages.kt` together with the TypeScript templates, so keep both files free of JVM-only APIs. Build it once before starting the docs, or the playground only shows how to build it:

```bash
./gradlew -p docs/playground compileProductionLibraryKotlinJs
```

Mark a Svelte snippet with ` ```svelte stackblitz ` to give it an "Open in StackBlitz" button. The button opens a Vite project with the snippet as `App.svelte`, the generated client of `examples/notes` behind `#api`, and an in-memory mock of the notes API in `src/mock.ts`. Use it for complete components that only call the notes routes. The project template is `docs/.vitepress/theme/stackblitzProject.ts`.

The pictures of the showcase on the start page are in `docs/public/showcase/`. Run `./gradlew -p examples/showcase screenshots` to take them again after you change how the showcase looks. The task starts the showcase JAR and a headless Chromium.

Each build also renders a 1200x630 social preview image for every page into `og/`, from the page title, its section and its first paragraph, and adds Open Graph and Twitter tags that point to it. The template is in `docs/.vitepress/socialImages.ts`. It renders with `@resvg/resvg-js` and DejaVu Sans on Linux or Arial on Windows and macOS.

Every release runs the `Docs` workflow, which builds the site and the API reference for that version and publishes them to the `gh-pages` branch: under `/v<version>/`, and also at the root when it is the newest release. The version switcher in the site reads `versions.json` from there. The same workflow then deploys the whole `gh-pages` branch to GitHub Pages, so the repository's Pages source stays set to GitHub Actions. To publish a release again, run the `Docs` workflow by hand with its version. Every push to `main` that changes the docs or the public sources also publishes them under `/main/`, listed as "main (unreleased)" in the version switcher. Runs that overlap retry their push to `gh-pages` on a fresh clone, and each deployment serves the newest state of the branch.

## CI

Pull requests only run the jobs their changes can affect. `.github/scripts/changed-areas.sh` sorts the changed files into areas, and each job in `ci.yml` checks the areas it needs:

| Area | Changed paths | Jobs |
|---|---|---|
| code | `ktor-svelte-server/`, `ktor-svelte-gradle-plugin/`, `ktor-svelte-catalog/`, `build-logic/`, `gradle/`, root build files, `version.txt` | everything |
| examples | `examples/` | example builds, generated client check |
| setup | `scripts/` | setup script builds |
| docs | `docs/` | docs site build |

A pull request that only changes Markdown outside `docs/` runs no build at all. Pushes to `main`, and pull requests that change `ci.yml` or the script itself, run every job. A new push to a pull request cancels its previous run. When you add a folder that a job depends on, add it to the script.

Two more workflows run on every pull request. `CodeQL` scans the Kotlin, the TypeScript and JavaScript, and the workflows themselves, and also runs weekly so that new queries reach unchanged code. Its findings appear under the Security tab. `Dependency review` fails a pull request that adds a dependency with a known vulnerability of moderate severity or higher.

## Rules

**No code comments of any kind.** No `//`, no KDoc, no `#` in YAML or properties files, no HTML comments in Svelte. Explain behaviour through names, tests and the docs. Generated files and the `x-release-please` markers in the README are the only exceptions.

**Keep the docs up to date, in the same commit.** `README.md` stays short: what ktor-svelte is, the quick start and links to the docs site. Everything else goes into the matching page in `docs/`, and new pages go into the sidebar in `docs/.vitepress/config.mts`. The docs use plain ASCII: no em dashes, arrows, box drawing or emoji.

**Error messages link to the docs.** Each module has a `DocLink` enum with the page and section each message points at, and `DocLinkTest` fails when a page is moved or a heading is renamed. Update `DocLink` together with the docs.

**Format Kotlin before you commit:**

```bash
./gradlew ktlintFormat
```

**Public API changes are deliberate.** Update the baseline and commit the result, so reviewers can see exactly what changed:

```bash
./gradlew apiDump
```

## Commits and releases

Commits must follow [Conventional Commits](https://www.conventionalcommits.org), because they decide the next version and write the release notes:

```
type(scope): summary
```

| Type | Use for | Effect on the version |
|---|---|---|
| `feat` | Something new for users | Minor |
| `fix` | A bug users can hit | Patch |
| `feat!` or `BREAKING CHANGE:` | Anything that breaks users | Major |
| `docs`, `test`, `build`, `ci`, `refactor`, `chore` | Everything else | None |

A change that makes existing apps behave differently, such as a new default, a new response status or a renamed setting, also adds its steps to the upgrade guide of the next minor release in `docs/migrations/`, and lists it in `docs/migrations/index.md` and the sidebar. The changelog links a release to its guide when the file exists.

Scopes are `server`, `gradle-plugin`, `example` and `repo`. Write `feat` and `fix` summaries for users, since they appear in the release notes as they are.

There is no changelog file and you never bump a version by hand. [release-please](https://github.com/googleapis/release-please) keeps a release pull request open on `main`. Merging it creates the tag and GitHub release, then publishes both artifacts, attaches a CycloneDX SBOM for each, and records signed build provenance for every published JAR with `actions/attest-build-provenance`. Run `./gradlew cyclonedxDirectBom` to see the SBOMs locally in `build/reports/cyclonedx-direct/` of each module.

The release workflow needs these repository secrets:

- `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`
- `SIGNING_KEY`, `SIGNING_KEY_PASSWORD`
- `GRADLE_PUBLISH_KEY`, `GRADLE_PUBLISH_SECRET`

It also needs "Allow GitHub Actions to create and approve pull requests" turned on in the repository settings.
