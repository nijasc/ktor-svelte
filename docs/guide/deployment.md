# Deployment

A ktor-svelte app is one JVM process. The frontend is inside the JAR, so there is no Node, no second server and no CORS setup in production.

## Build the JAR

Any of Gradle's usual ways to package a Ktor app works, and each one builds the frontend first:

```bash
./gradlew buildFatJar
```

```bash
./gradlew shadowJar
```

```bash
./gradlew installDist
```

`buildFatJar` comes with the Ktor Gradle plugin and `shadowJar` with Shadow. Both write one runnable JAR to `build/libs/`. `installDist` from the `application` plugin writes a folder with start scripts and every dependency as its own JAR.

Run it:

```bash
java -jar build/libs/my-app-all.jar
```

The app starts in production mode unless you pass `-Dio.ktor.development=true`. In production, a missing frontend build stops the app at startup, the dev proxy is off, error details are hidden, and every page gets its Content-Security-Policy.

At startup the app logs which ktor-svelte version and which frontend build it serves:

```
ktor-svelte 0.9.0 serves frontend build b3f58012c3ff with 19 files
```

The fingerprint is a hash of every file in the build, so two servers with the same fingerprint serve exactly the same frontend. The status endpoint reports the full fingerprint.

Keep secrets in environment variables, never in `publicConfig` or the frontend. Projects from the setup script read them in `Env.kt` and list them in `.env.example`.

## Docker

The setup script writes this `Dockerfile` when you choose Docker. It builds the JAR in one stage and runs it as a non-root user in a small JRE image:

```dockerfile
FROM eclipse-temurin:21-jdk AS build
COPY --from=node:24-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:24-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
RUN npm install -g bun
WORKDIR /app
COPY . .
RUN chmod +x gradlew && ./gradlew buildFatJar --no-daemon --console=plain
RUN cp build/libs/*-all.jar /app.jar

FROM eclipse-temurin:21-jre
RUN useradd --system --no-create-home app
COPY --from=build /app.jar /app.jar
USER app
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

The `RUN npm install -g bun` line installs the package manager the project uses. Keep `node_modules`, `.svelte-kit`, `build` and `.env` out of the image with a `.dockerignore`.

```bash
docker build -t my-app .
docker run -p 8080:8080 --env-file .env my-app
```

## Railway

`./gradlew svelteDeploy` writes `.railway/railway.ts`, Railway's infrastructure-as-code file, from what the project already knows:

```ts no-check
import { defineRailway, github, preserve, project, service } from "railway/iac";

export default defineRailway(() => {
    const app = service("shop", {
        source: github("acme/shop"),
        build: "./gradlew buildFatJar --no-daemon",
        start: "java -jar build/libs/shop-all.jar",
        healthcheck: "/_ktor-svelte/health",
        healthcheckTimeout: 120,
        env: {
            DATABASE_URL: preserve(),
            SESSION_SIGN_KEY: preserve(),
        },
    });

    return project("shop", {
        resources: [app],
    });
});
```

| Part | Where it comes from |
|---|---|
| Names | The Gradle project name. |
| `source` | The `origin` remote, when it is on GitHub. Left out otherwise. |
| `build` and `start` | `buildFatJar` when the Ktor plugin is applied, `shadowJar` with Shadow, `installDist` otherwise. Left out when the project has a `Dockerfile`, because Railway builds with the Dockerfile it finds. |
| `healthcheck` | The built-in health endpoint. Turn it on with `healthEndpoint = true`. |
| `env` | The required variables in [`.env.example`](../features/runtime-config.md#environment-variables). `preserve()` keeps the value you set in Railway, so no secret is written to the file. |

The file is written once and is yours from then on: add a database, replicas or domains to it as Railway's reference describes. Running the task again refuses to replace it unless you pass `--force`.

To use it, install Railway's package where the file is (`npm install railway`), then `railway login`, `railway link`, `railway config plan` to see what would change and `railway config apply` to do it. Set the listed variables in Railway before the first deploy.

Railway is the only host so far. `--host` exists for the ones to come, and another value says so.

## A plain server

Copy the JAR to the server and run it as a service. A minimal systemd unit:

```ini
[Unit]
Description=my-app
After=network.target

[Service]
User=my-app
EnvironmentFile=/etc/my-app.env
ExecStart=/usr/bin/java -jar /opt/my-app/my-app-all.jar
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

## Behind a reverse proxy

Most deployments put nginx, Caddy, a cloud load balancer or a platform router in front of the app to terminate TLS. Then:

- **Install `XForwardedHeaders` or `ForwardedHeaders`** from `ktor-server-forwarded-header`. The rate limit tells clients apart by their address, and without these plugins every user shares the proxy's address and one limit. The origin check also compares hosts through them.
- **Send HSTS from the proxy**, since only the proxy knows about TLS.
- **Do not compress twice.** The app already compresses API responses and serves precompressed files. Let the proxy pass `Content-Encoding` through.
- **Point health checks at the health endpoint.** Turn it on with `healthEndpoint = true`, and check `GET /_ktor-svelte/health`. See [Built-in endpoints](../features/endpoints.md).

## Faster responses

- Add `io.ktor:ktor-server-compression-zstd` to serve API responses with zstd to browsers that accept it. It adds a native library of about 7 MB. See [Transport and compression](../features/transport.md).
- Set `adapter({ precompress: true })` in `frontend/vite.config.ts`, or keep `svelte { precompress = true }`, so files are compressed once at build time instead of on every request.
- Hashed files under `_app/immutable/` are cached for a year, so returning visitors only download what changed after a deploy.

## Request log

To see every request in your production logs, turn the access log on:

```kotlin
install(Svelte) {
    accessLog = true
}
```

```text
method=GET path=/api/notes status=200 ms=12 id=8b0c6a52-5f0e-4a51-9a7e-0e5d6f0c1a2b
method=POST path=/api/notes status=422 ms=3 id=1f3e9d10-7c44-4d3b-b0a1-9a2f4e6c8d70
```

Each line has the method, the path without its query string, the status, how long the app took in milliseconds, and the request ID that the browser also shows for a failed call. The lines go to the logger `ktor-svelte.access` at INFO, so your logging config decides where they end up and can turn them off again. Requests for build assets under `/_app/` are not logged.

## Errors from the browser

An error in the browser happens on someone else's computer, and in production nobody tells you about it. Turn reporting on and it reaches the log of your app:

```kotlin
install(Svelte) {
    frontendErrors()
}
```

```text
WARN  ktor-svelte.frontend Frontend error on /board: TypeError: x is not a function (at save (app.js:1:2))
WARN  ktor-svelte.frontend Frontend error on /notes: ApiError: Request to /api/notes failed with status 503, after the API call with request ID 9f2c41
```

The generated client then reports every error that nothing caught: uncaught exceptions, promises that were rejected and never handled, and errors SvelteKit caught while loading or rendering a page. Each line names the page, the first place in the stack, and for a failed API call its [request ID](../features/calling-the-api.md#request-ids), so you can find the same request in the server's own log. Failed calls that the server answered with a 4xx are left out: those are answers, not faults.

It is off by default, because it adds an endpoint that anyone can post to. That endpoint is kept small:

- One browser reports an error once, and at most ten different errors per page load.
- One client address may send ten reports a minute. Set `perClientPerMinute` for another number. The rest get a 429.
- A report may be 8 KB. Set `maxBodyBytes` for another size.
- What is logged is cut to one line of limited length, so a report cannot write lines of its own into your log.
- The page is logged without its query string.

```kotlin
install(Svelte) {
    frontendErrors {
        perClientPerMinute = 30
    }
}
```

The lines go to the logger `ktor-svelte.frontend` at `WARN`, so your logging setup decides where they end up. In development the browser's console already reaches the dev log, and this works there too.

## Build info

Every build knows what it is. The Gradle plugin writes the project's `version`, the git commit and the time of that commit into the JAR, and the app reads them without any setup:

```kotlin
get("/api/about") {
    val build = call.application.buildInfo
    call.respondText("Version ${build.version} (${build.shortCommit})")
}
```

`buildInfo.version`, `commit` and `time` are `null` when the build could not know them: no `version` in `build.gradle.kts`, or no git repository. The time is the commit's, not the clock's, so building the same commit twice gives the same JAR.

The browser can read the same values once you allow it:

```kotlin
install(Svelte) {
    publicBuildInfo = true
}
```

```ts
import { loadBuildInfo } from '#api';

const build = await loadBuildInfo();
const label = `${build.version ?? 'dev'} (${build.commit?.slice(0, 7) ?? 'no commit'})`;
```

It is off by default, because it tells every visitor which version and commit is running. For values only signed-in users or admins should see, leave it off and return `buildInfo` from a route of your own.

## Smoke test

Tests run the app in development mode, from class folders. What you deploy is a JAR in production mode, and some mistakes only exist there: a frontend that did not make it into the JAR, a page that is no longer prerendered, a variable the app needs to start. `svelteSmokeTest` checks the thing you ship:

```bash
./gradlew svelteSmokeTest
```

```text
ktor-svelte: build/libs/my-app-all.jar runs in production mode on port 55269.
  200  /
  200  /about
  200  /login
  200  /_app/immutable/assets/0.CtcRfiw7.css
  200  GET /api/greeting
  401  GET /api/me
  401  GET /api/tasks
ktor-svelte: the production build answered 3 pages, 1 asset, 3 API routes correctly.
```

The task packages the app the way you do, with `buildFatJar` or `shadowJar` when the project has them and `installDist` otherwise, starts it on a free port without the development flag, and requests:

- Every prerendered page. Each must answer 200 with HTML.
- One file of the frontend build, which must answer 200.
- Every `GET` route of the API that needs no path parameter and no required query parameter. It sends no session, so 401 and 403 are correct answers. A 404 or a server error is not.

Then it stops the app. If anything was answered wrongly, or the app did not start, the build fails and says what happened. The app's output is in `build/ktor-svelte/smoke-test.log`.

```bash
./gradlew svelteSmokeTest --path=/_ktor-svelte/health --skip=/api/export
```

`--path` adds a path that must answer with a status below 400, and `--skip` leaves an API route out, for a `GET` route that is slow or does something. Both can be given more than once. `--start-seconds` gives a slow app more than the 60 seconds it has to start.

The app gets the environment of the build, so it needs what it needs in production, such as a database. That is why the task is not part of `check`: run it in the pipeline, where that environment exists. The port is passed as the `PORT` variable and as `-port`, which `EngineMain` reads, so an app that takes its port from somewhere else cannot be tested this way.

## Checklist

- `./gradlew svelteSmokeTest` passes.

- The JAR was built without `-Psvelte.skip=true` or `-Psvelte.dev=true`.
- The app runs without `-Dio.ktor.development=true`.
- Secrets come from the environment.
- `XForwardedHeaders` is installed when a proxy sits in front.
- `GET /_ktor-svelte/health` answers 200 if your platform checks health.
