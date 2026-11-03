# ktor-svelte

Gradle plugin and Ktor library that serve a SvelteKit `adapter-static` build from a Ktor app, on the same port as its API, from a single JAR.

## Working style

- Use the `caveman` skill in `.claude/skills/caveman/` for all chat responses, in every session, unless the user says "stop caveman" or "normal mode".
- Caveman applies to chat only. Code, commits, docs, issues and PRs stay in normal English.

## Hard rules

- No code comments of any kind: no `//`, `/* */`, KDoc, `#` in YAML, TOML, properties or shell files, and no HTML comments in Svelte files. Explain behaviour through names, tests and the README. Generated files such as `gradlew` are exempt.
- All commits use Conventional Commits: `type(scope): summary`. Types: `feat`, `fix`, `docs`, `test`, `build`, `ci`, `refactor`, `chore`. Scopes: `server`, `gradle-plugin`, `example`, `repo`.
- Never commit directly to `main`.
- Never publish artifacts or push without an explicit request from the user.

## Layout

- `ktor-svelte-server/`: Ktor runtime library. `internal/` holds everything not in the public API.
- `ktor-svelte-gradle-plugin/`: Gradle plugin. Must stay configuration-cache compatible.
- `examples/basic/`: separate Gradle build that consumes the root build through `includeBuild`. Also the end-to-end test fixture.
- `.claude/skills/caveman/`: vendored from `JuliusBrussee/caveman` at commit `2e068f735253cce28256744804785f01887d9646`, Apache-2.0. Do not edit. To update, replace `SKILL.md` and `LICENSE` and change the commit here.

## Commands

```bash
./gradlew build
./gradlew :ktor-svelte-server:test
./gradlew :ktor-svelte-gradle-plugin:functionalTest
./gradlew apiCheck
./gradlew ktlintCheck
./gradlew -p examples/basic e2eTest
```

## Design constraints

- SvelteKit 3 has no `svelte.config.js`. The plugin never reads Kit config, so paths are explicit settings and the build output is validated afterwards.
- The manifest at `ktor-svelte/manifest.json` is the only list of servable files. Request paths are looked up in it and never turned directly into file paths.
- Missing paths under `/_app/` and paths with a file extension return 404, never the SPA fallback.
- Trailing-slash mismatches redirect with 308, because prerendered pages use relative asset paths.
- The runtime compiles against Kotlin API level 2.3. The Gradle plugin targets the Kotlin API level of the oldest supported Gradle.
- The runtime has no `ktor-client` or `WebSockets` dependency. The dev proxy uses the JDK `HttpClient`.
