# Deployment

A ktor-svelte app is one JVM process. The frontend is inside the JAR, so there is no Node, no second server and no CORS setup in production.

<Badge type="info" text="Gradle" /> <Badge type="tip" text="Ktor plugin" />

## Quick start

```bash
./gradlew buildFatJar
java -jar build/libs/my-app-all.jar
```

Before the first deploy, run the [smoke test](#smoke-test) and go through the [checklist](#checklist). To watch the app once it runs, see [Monitoring](./monitoring.md).

## Build the JAR

Any of Gradle's usual ways to package a Ktor app works, and each one builds the frontend first:

| Task | Comes with | Writes |
|---|---|---|
| `./gradlew buildFatJar` | The Ktor Gradle plugin | One runnable JAR in `build/libs/` |
| `./gradlew shadowJar` | Shadow | One runnable JAR in `build/libs/` |
| `./gradlew installDist` | The `application` plugin | A folder with start scripts and every dependency as its own JAR |

Run it:

```bash
java -jar build/libs/my-app-all.jar
```

The app starts in production mode unless you pass `-Dio.ktor.development=true`. In production:

- a missing frontend build stops the app at startup,
- the dev proxy is off,
- error details are hidden,
- every page gets its Content-Security-Policy.

At startup the app logs which ktor-svelte version and which frontend build it serves:

```text
ktor-svelte 0.9.0 serves frontend build b3f58012c3ff with 19 files
```

The fingerprint is a hash of every file in the build, so two servers with the same fingerprint serve exactly the same frontend. The status endpoint reports the full fingerprint.

::: warning Secrets
Keep secrets in environment variables, never in `publicConfig` or the frontend. Projects from the setup script read them in `Env.kt` and list them in `.env.example`. [`svelteVerifyLeaks`](../features/runtime-config.md#secrets-in-the-frontend-build) fails the build when a secret value ends up in the frontend.
:::

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

The `RUN npm install -g bun` line installs the package manager the project uses. Keep `node_modules`, `.svelte-kit`, `build` and `.env` out of the image with a `.dockerignore`:

```text
**/node_modules
**/.svelte-kit
**/build
.gradle
.env
```

Build and run it:

```bash
docker build -t my-app .
docker run -p 8080:8080 --env-file .env my-app
```

## Railway

`svelteDeploy` writes the deploy configuration for a host from what the project already knows. For [Railway](https://railway.com) it writes `.railway/railway.ts`, Railway's infrastructure-as-code file:

```bash
./gradlew svelteDeploy
```

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

To use it:

1. Install Railway's package where the file is: `npm install railway`.
2. `railway login`, then `railway link`.
3. Set the listed variables in Railway before the first deploy.
4. `railway config plan` shows what would change, and `railway config apply` does it.

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

```bash
sudo systemctl enable --now my-app
journalctl -u my-app -f
```

## Behind a reverse proxy

Most deployments put nginx, Caddy, a cloud load balancer or a platform router in front of the app to terminate TLS. Then:

- **Install `XForwardedHeaders` or `ForwardedHeaders`** from `ktor-server-forwarded-header`. The rate limit tells clients apart by their address, and without these plugins every user shares the proxy's address and one limit. The origin check also compares hosts through them.
- **Send HSTS from the proxy**, since only the proxy knows about TLS.
- **Do not compress twice.** The app already compresses API responses and serves precompressed files. Let the proxy pass `Content-Encoding` through.
- **Point health checks at the health endpoint.** Turn it on with `healthEndpoint = true`, and check `GET /_ktor-svelte/health`. See [Built-in endpoints](../features/endpoints.md#health-endpoint).

```kotlin
import io.ktor.server.plugins.forwardedheaders.XForwardedHeaders

install(XForwardedHeaders)
install(Svelte) {
    healthEndpoint = true
}
```

Only install `XForwardedHeaders` when a proxy really sits in front and sets those headers. Otherwise any client can claim another address.

### Caddy

Caddy gets a certificate by itself and sends the `X-Forwarded-*` headers by default:

```text
shop.example.com {
    header Strict-Transport-Security "max-age=31536000; includeSubDomains"
    reverse_proxy localhost:8080
}
```

There is no `encode` line on purpose: the app compresses its own responses.

### nginx

```nginx
server {
    listen 443 ssl;
    http2 on;
    server_name shop.example.com;

    ssl_certificate     /etc/letsencrypt/live/shop.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/shop.example.com/privkey.pem;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;

        # Server-sent events and WebSockets
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_buffering off;
    }
}

map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
```

Leave nginx's `gzip` off for this server, which is its default, so responses are not compressed twice. `proxy_buffering off` matters only when your app [streams live updates](../recipes/live-updates.md).

## Faster responses

- Add `io.ktor:ktor-server-compression-zstd` to serve API responses with zstd to browsers that accept it. It adds a native library of about 7 MB. See [Transport and compression](../features/transport.md).
- Set `adapter({ precompress: true })` in `frontend/vite.config.ts`, or keep `svelte { precompress = true }`, so files are compressed once at build time instead of on every request.
- Hashed files under `_app/immutable/` are cached for a year, so returning visitors only download what changed after a deploy.

## Request log

The production access log moved to [Monitoring](./monitoring.md#request-log).

## Errors from the browser

Reporting frontend errors to the server log moved to [Monitoring](./monitoring.md#errors-from-the-browser).

## Page timings

Web vitals from real browsers moved to [Monitoring](./monitoring.md#page-timings).

## Build info

The version and commit of a build, on the server and in the browser, moved to [Monitoring](./monitoring.md#build-info).

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

| Option | What it does |
|---|---|
| `--path=/_ktor-svelte/health` | Adds a path that must answer with a status below 400. Can be given more than once |
| `--skip=/api/export` | Leaves an API route out, for a `GET` route that is slow or does something. Can be given more than once |
| `--start-seconds=120` | Gives a slow app more than the 60 seconds it has to start |

```bash
./gradlew svelteSmokeTest --path=/_ktor-svelte/health --skip=/api/export
```

The app gets the environment of the build, so it needs what it needs in production, such as a database. That is why the task is not part of `check`: run it in the pipeline, where that environment exists. The port is passed as the `PORT` variable and as `-port`, which `EngineMain` reads, so an app that takes its port from somewhere else cannot be tested this way.

In GitHub Actions, as a step before the deploy:

```yaml
- name: Smoke test the production JAR
  env:
    DATABASE_URL: ${{ secrets.STAGING_DATABASE_URL }}
    SESSION_SIGN_KEY: ${{ secrets.SESSION_SIGN_KEY }}
  run: ./gradlew svelteSmokeTest --path=/_ktor-svelte/health
```

More checks for the pipeline are in [Checks and tooling](./checks-and-tooling.md#full-example).

## Checklist

- `./gradlew svelteSmokeTest` passes.
- The JAR was built without `-Psvelte.skip=true` or `-Psvelte.dev=true`.
- The app runs without `-Dio.ktor.development=true`.
- Secrets come from the environment.
- `XForwardedHeaders` is installed when a proxy sits in front.
- `GET /_ktor-svelte/health` answers 200 if your platform checks health.
- Logs reach you: see [Monitoring](./monitoring.md).

## Good to know

- A page that shows a blank screen after a deploy usually means something in front of the app caches HTML. See [Troubleshooting](../reference/troubleshooting.md#a-page-shows-a-blank-screen-after-a-deploy).
- `./gradlew svelteConfig` scores your setup for security and operations and suggests what to turn on. See [Review your configuration](../reference/gradle.md#review-your-configuration).
