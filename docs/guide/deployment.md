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

## Checklist

- The JAR was built without `-Psvelte.skip=true` or `-Psvelte.dev=true`.
- The app runs without `-Dio.ktor.development=true`.
- Secrets come from the environment.
- `XForwardedHeaders` is installed when a proxy sits in front.
- `GET /_ktor-svelte/health` answers 200 if your platform checks health.
