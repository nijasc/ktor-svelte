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

In IntelliJ, open the repository root, then right-click `ide/settings.gradle.kts` and choose "Link Gradle Project". That build includes the root and both examples, so they all appear as one project. Link only `ide`, and not the root or an example as well, because the examples include the root and you would get duplicate modules. Use JDK 21 as the Gradle JVM. Then run `Notes: Dev` and open `http://localhost:8080` to see everything working together.

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
| `ktor-svelte-gradle-plugin/` | The Gradle plugin. `KtorSveltePlugin.kt` wires the tasks in `tasks/`, and `libraries/` generates the files for configured frontend libraries |
| `build-logic/` | Convention plugins shared by both modules: Kotlin, ktlint and toolchain setup, and the publishing metadata |
| `examples/basic/` | The smallest possible app |
| `examples/notes/` | The feature-rich app. New features should show up here |
| `.run/` | Shared IntelliJ run configurations |

The examples are separate Gradle builds that pull in the root build with `includeBuild`, so they use the plugin the way a real project does. They are also the end-to-end test fixtures.

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
| End to end | `./gradlew -p examples/basic e2eTest` and `./gradlew -p examples/notes e2eTest` | A real SvelteKit build in a real JAR, over real HTTP |
| Frontend types | `./gradlew -p examples/notes svelteCheck` | Generated TypeScript compiles in a real SvelteKit project |

Every behaviour change needs a test. Bug fixes should start with a failing one.

If you change the notes API or the generator, refresh the generated client and commit it. CI fails when it is out of date:

```bash
./gradlew -p examples/notes svelteGenerateTs
```

### Testing dev mode by hand

HMR is not covered by automated tests. Check it before changing the dev proxy:

1. Run `Notes: Dev` in IntelliJ.
2. Open `http://localhost:8080/notes` and check that your notes appear.
3. Edit `examples/notes/frontend/src/routes/notes/+page.svelte`, and check that the page updates without a reload.
4. Change a route in `examples/notes/src/main/kotlin/notes/Routes.kt` and save. The app restarts and `frontend/src/lib/api` updates.
5. Remove `server.hmr` from `vite.config.ts`, restart, and repeat step 3. The console should show one WebSocket error and then Vite's direct connection fallback.
6. Stop the task, and check that nothing is still listening on ports 5173 and 8080. Also try closing the terminal instead of stopping it.

## API reference

The API reference is built with Dokka from the public API of both modules, with links to the source on GitHub. Build it locally into `build/dokka/html`:

```bash
./gradlew dokkaGenerate
```

The release workflow publishes it to GitHub Pages for every release.

## Rules

**No code comments of any kind.** No `//`, no KDoc, no `#` in YAML or properties files, no HTML comments in Svelte. Explain behaviour through names, tests and the README. Generated files and the `x-release-please` markers in the README are the only exceptions.

**Keep the README up to date, in the same commit.** It uses plain ASCII: no em dashes, arrows, box drawing or emoji.

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
| `feat!` or `BREAKING CHANGE:` | Anything that breaks users | Major, or minor before 1.0 |
| `docs`, `test`, `build`, `ci`, `refactor`, `chore` | Everything else | None |

Scopes are `server`, `gradle-plugin`, `example` and `repo`. Write `feat` and `fix` summaries for users, since they appear in the release notes as they are.

There is no changelog file and you never bump a version by hand. [release-please](https://github.com/googleapis/release-please) keeps a release pull request open on `main`. Merging it creates the tag and GitHub release, then publishes both artifacts.

The release workflow needs these repository secrets:

- `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`
- `SIGNING_KEY`, `SIGNING_KEY_PASSWORD`
- `GRADLE_PUBLISH_KEY`, `GRADLE_PUBLISH_SECRET`

It also needs "Allow GitHub Actions to create and approve pull requests" turned on in the repository settings.
