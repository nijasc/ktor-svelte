# Contributing

## Setup

You need JDK 21 and [Bun](https://bun.sh). Gradle downloads a JDK 17 toolchain for compiling.

## Checks

Run these before opening a pull request:

```bash
./gradlew check apiCheck
```

```bash
./gradlew -p examples/basic e2eTest
```

To test the plugin against Gradle 8.x:

```bash
./gradlew :ktor-svelte-gradle-plugin:functionalTest -PtestGradleVersion=8.14.6 -PtestShadowVersion=9.2.2
```

If you change the public API on purpose, update the baseline and commit the result:

```bash
./gradlew apiDump
```

## Conventions

- No code comments of any kind. Explain behaviour through names, tests and the README.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org): `type(scope): summary`. Scopes are `server`, `gradle-plugin`, `example` and `repo`.
- Format Kotlin with `./gradlew ktlintFormat`.

## Testing dev mode by hand

HMR is not covered by automated tests. Check it before changing the dev proxy:

1. Run `./gradlew -p examples/basic svelteDev`.
2. Run `./gradlew -p examples/basic run -Psvelte.dev=true`.
3. Open `http://localhost:8080/app` and check that the API greeting appears.
4. Edit `examples/basic/frontend/src/routes/app/+page.svelte`, and check that the page updates without a reload.
5. Remove `server.hmr` from `examples/basic/frontend/vite.config.js`, restart both, and repeat step 4. The console should show one WebSocket error and then Vite's direct connection fallback.
6. After stopping both, check that nothing is still listening on ports 5173 and 8080.

## Releasing

Pushing a `v*` tag runs `.github/workflows/release.yml`, which publishes both artifacts and creates a GitHub release from `CHANGELOG.md`. It needs these repository secrets:

- `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`
- `SIGNING_KEY`, `SIGNING_KEY_PASSWORD`
- `GRADLE_PUBLISH_KEY`, `GRADLE_PUBLISH_SECRET`
