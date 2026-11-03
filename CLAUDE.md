# ktor-svelte

Gradle plugin and Ktor library that serve a SvelteKit `adapter-static` build from a Ktor app, on the same port as its API, from a single JAR.

## Working style

- Use the `caveman` plugin (enabled in `.claude/settings.json`) for all chat responses, in every session, unless the user says "stop caveman" or "normal mode".
- Caveman applies to chat only. Code, commits, docs, issues and PRs stay in normal English.
- Developer experience comes first: frontend and backend must integrate out of the box. Avoid bloat: no feature or dependency without a clear payoff.

## Hard rules

- No code comments of any kind: no `//`, `/* */`, KDoc, `#` in YAML, TOML, properties or shell files, and no HTML comments in Svelte files. Explain behaviour through names, tests and the README. Generated files such as `gradlew`, and the `x-release-please` markers release-please needs in `README.md`, are exempt.
- All commits use Conventional Commits: `type(scope): summary`. Types: `feat`, `fix`, `docs`, `test`, `build`, `ci`, `refactor`, `chore`. Scopes: `server`, `gradle-plugin`, `example`, `repo`. release-please derives versions and release notes from them, so `feat` and `fix` must describe what users see.
- There is no changelog file. Never hand-edit `version.txt` or `.release-please-manifest.json`.
- Keep `README.md` up to date in the same commit as any change it describes. README text uses plain ASCII: no em dashes, arrows, box drawing or emoji.
- Never commit directly to `main`. Pushing feature branches is allowed. Never publish artifacts by hand.

## Layout

- `ktor-svelte-server/`: Ktor runtime library. `internal/` holds everything not in the public API.
- `ktor-svelte-gradle-plugin/`: Gradle plugin. Must stay configuration-cache compatible.
- `examples/basic/`: smallest possible app.
- `examples/notes/`: feature-rich app using `generateTs`, `transport` and real CRUD.
- Examples are separate Gradle builds that consume the root build through `includeBuild`, and double as end-to-end test fixtures.
- `.run/`: shared IntelliJ run configurations.
- `ide/`: workspace build that IntelliJ links. It includes the root and both examples. It must stay outside the root build, because Gradle rejects the include cycle otherwise.

## Commands

```bash
./gradlew check apiCheck
./gradlew ktlintFormat
./gradlew apiDump
./gradlew -p examples/basic e2eTest
./gradlew -p examples/notes e2eTest
./gradlew :ktor-svelte-gradle-plugin:functionalTest -PtestGradleVersion=8.14.6 -PtestShadowVersion=9.2.2
```

## Design constraints

- SvelteKit 3 has no `svelte.config.js`. The plugin never reads Kit config, so paths are explicit settings and the build output is validated afterwards.
- The manifest at `ktor-svelte/manifest.json` is the only list of servable files. Request paths are looked up in it and never turned directly into file paths.
- Missing paths under `/_app/` and paths with a file extension return 404, never the SPA fallback.
- Trailing-slash mismatches redirect with 308, because prerendered pages use relative asset paths.
- The runtime compiles against Kotlin API level 2.3. The Gradle plugin targets the Kotlin API level of the oldest supported Gradle.
- The dev proxy uses the JDK `HttpClient`. The runtime has no `ktor-client` dependency.
- The dev proxy only serves loopback clients with a local `Host`, only targets loopback hosts, and never forwards credentials, unless `dev.allowRemote` is set.
- GitHub Actions are pinned to commit SHAs, and jobs declare their own least-privilege permissions.
- TypeScript output from `generateTs` has no npm dependencies and is committed, so a frontend build never needs the JVM app to run first.
