# Monitoring

What a running ktor-svelte app tells you in production: one log line per request, errors that happen in your visitors' browsers, how fast pages feel, which build is running, and whether the app is healthy.

<Badge type="tip" text="Ktor plugin" /> <Badge type="warning" text="Generated client" />

## Quick start

Everything on this page is off by default. Turn on what you need:

```kotlin
install(Svelte) {
    accessLog = true
    frontendErrors()
    webVitals()
    healthEndpoint = true
}
```

| Setting | You get | Where it shows up |
|---|---|---|
| `accessLog = true` | [One line per request](#request-log) | Logger `ktor-svelte.access` |
| `frontendErrors()` | [Uncaught errors from browsers](#errors-from-the-browser) | Logger `ktor-svelte.frontend` |
| `webVitals()` | [Page timings from real visits](#page-timings) | `svelteMetrics.webVitals`, status endpoint |
| `healthEndpoint = true` | [Up or down for load balancers](#health-and-status-endpoints) | `GET /_ktor-svelte/health` |
| `statusEndpoint = true` | [Build, proxy and refusal details](#health-and-status-endpoints) | `GET /_ktor-svelte/status` |
| `publicBuildInfo = true` | [Version and commit in the browser](#build-info) | `loadBuildInfo()` |

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

- Each line has the method, the path, the status, how long the app took in milliseconds, and the [request ID](../features/calling-the-api.md#request-ids) that the browser also shows for a failed call.
- The query string is left out, because it can hold secrets.
- Requests for build assets under `/_app/` are not logged.
- The lines go to the logger `ktor-svelte.access` at INFO, so your logging config decides where they end up and can turn them off again.
- Development mode never logs these, since the dev log and the [dev panel](./dev-workflow.md#request-log) already show requests.

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

The generated client then reports every error that nothing caught:

- uncaught exceptions,
- promises that were rejected and never handled,
- errors SvelteKit caught while loading or rendering a page.

Each line names the page, the first place in the stack, and for a failed API call its [request ID](../features/calling-the-api.md#request-ids), so you can find the same request in the server's own log. Failed calls that the server answered with a 4xx are left out: those are answers, not faults.

### Limits

It is off by default, because it adds an endpoint that anyone can post to, `POST /_ktor-svelte/errors`. That endpoint is kept small:

- One browser reports an error once, and at most ten different errors per page load.
- One client address may send ten reports a minute. The rest get a 429.
- A report may be 8 KB.
- What is logged is cut to one line of limited length, so a report cannot write lines of its own into your log.
- The page is logged without its query string.

| Setting | Default | What it does |
|---|---|---|
| `perClientPerMinute` | `10` | Reports one client address may send per minute. At least 1 |
| `maxBodyBytes` | `8192` | Largest report in bytes, between 256 and 65536 |

```kotlin
install(Svelte) {
    frontendErrors {
        perClientPerMinute = 30
    }
}
```

The lines go to the logger `ktor-svelte.frontend` at `WARN`, so your logging setup decides where they end up. In development the browser's console already [reaches the dev log](./dev-workflow.md#browser-console-in-the-server-log), and this works there too.

## Page timings

Your API's slow calls show in the server's log. A slow page does not: its time is spent in the browser. `webVitals` has browsers report it:

```kotlin
install(Svelte) {
    webVitals()
}
```

One page load in ten then measures the usual five timings and sends them once, when the page is left:

| Name | What it measures | Good up to | Poor above |
| --- | --- | --- | --- |
| `TTFB` | Time until the first byte of the page arrived | 800 ms | 1800 ms |
| `FCP` | Time until something was painted | 1800 ms | 3000 ms |
| `LCP` | Time until the largest element was painted | 2500 ms | 4000 ms |
| `INP` | The slowest reaction to a click or a key | 200 ms | 500 ms |
| `CLS` | How much the layout moved while loading | 0.1 | 0.25 |

### Web vitals in metrics

The app adds them to its metrics, per page:

```kotlin no-check
application.svelteMetrics.webVitals.forEach { vital ->
    println("${vital.page} ${vital.name}: ${vital.count} loads, average ${vital.average}, ${vital.poor} poor")
}
```

Each entry has the `page`, the `name`, a `count`, the `average`, and how many loads were `good`, `needsImprovement` and `poor`. Hand them to your metrics system from there. The [status endpoint](../features/endpoints.md#status-endpoint) lists them too, under `webVitals`.

Pages are grouped by route and not by address: `/notes/my-first-note` counts for `/notes/[slug]` when that is one of your `paramRoutes`, and a segment that is a number or an id becomes `[id]`. At most 100 pages are kept, and the rest are counted together.

### Limits

Like error reporting, this is off by default, because it adds an endpoint anyone can post to, `POST /_ktor-svelte/vitals`:

| Setting | Default | What it does |
|---|---|---|
| `sampleRate` | `0.1` | Share of page loads that report. Above 0 and at most 1 |
| `perClientPerMinute` | `10` | Reports one client address may send per minute. At least 1 |

```kotlin
install(Svelte) {
    webVitals {
        sampleRate = 0.25
    }
}
```

A report may be 2 KB, only the five names are accepted, and only values that a real page could have.

The timings are measured with the browser's own `PerformanceObserver`, with no extra package. They are close to what the `web-vitals` library reports, not identical: `INP` here is the slowest interaction of the page load. The numbers are kept in memory and start again when the app restarts.

## Refused requests

ktor-svelte counts every request its guards refused, so attacks and misconfigurations show up as numbers. Read them from `application.svelteMetrics`:

| Counter | Counts |
|---|---|
| `crossOriginRefusals` | Writes refused by the origin check |
| `bodyTooLargeRefusals` | Bodies over `maxApiBodySize` |
| `rateLimitRefusals` | Requests over a rate limit |

The status endpoint reports them under `refusals`. How to bind them to Micrometer is in [API request guards](../security.md#api-request-guards).

## Startup log

In production, the app logs which ktor-svelte version and which frontend build it serves, and nothing more:

```text
ktor-svelte 0.9.0 serves frontend build b3f58012c3ff with 19 files
```

The fingerprint is a hash of every file in the build, so two servers with the same fingerprint serve exactly the same frontend. The status endpoint reports the full fingerprint.

In development the app logs more: [the settings in effect](./dev-workflow.md#settings-at-startup) and [what the startup time was spent on](./dev-workflow.md#startup-timing), with the parts you named with `startupStep`. `startupStep` costs nothing in production, so you can leave it in your module.

## Build info

Every build knows what it is. The Gradle plugin writes the project's `version`, the git commit and the time of that commit into the JAR (the `svelteBuildInfo` task), and the app reads them without any setup:

```kotlin
get("/api/about") {
    val build = call.application.buildInfo
    call.respondText("Version ${build.version} (${build.shortCommit})")
}
```

| Property | What it is |
|---|---|
| `version` | The project's `version` from `build.gradle.kts` |
| `commit` | The full git commit |
| `shortCommit` | Its first seven characters |
| `time` | The time of that commit, as an `Instant` |

`version`, `commit` and `time` are `null` when the build could not know them: no `version` in `build.gradle.kts`, or no git repository. The time is the commit's, not the clock's, so building the same commit twice gives the same JAR.

### In the browser

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

The values are served at `/_ktor-svelte/build.json`. It is off by default, because it tells every visitor which version and commit is running. For values only signed-in users or admins should see, leave it off and return `buildInfo` from a route of your own.

## Health and status endpoints

Two built-in endpoints answer the questions a platform and an operator ask:

| Endpoint | Turn on | Answers | Who may ask |
|---|---|---|---|
| `GET /_ktor-svelte/health` | `healthEndpoint = true` | `200 {"status":"up"}` or `503 {"status":"down"}` | Everyone |
| `GET /_ktor-svelte/status` | `statusEndpoint = true` | Build, dev proxy, refusals and web vitals as JSON | This machine, or whom you [allow](../features/endpoints.md#who-may-see-internal-endpoints) |

```kotlin
install(Svelte) {
    healthEndpoint = true
    healthCheck { database.isReachable() }
}
```

Every `healthCheck` must return `true` for the app to be up. Details are on [Built-in endpoints](../features/endpoints.md#health-endpoint). With [`warmUp(...)`](../features/endpoints.md#warm-up-before-ready), it also waits until the app has called a few of its own routes, so the first real visitor does not get the slow first request.

## Full example

A production setup that writes the access log to its own file, reports browser errors, exports refusals to Micrometer and lets an admin page show page timings:

::: code-group

```kotlin no-check [Monitoring.kt]
@Serializable
data class VitalRow(val page: String, val name: String, val average: Double, val poor: Long)

fun Application.monitoring() {
    install(Svelte) {
        accessLog = true
        frontendErrors()
        webVitals { sampleRate = 0.2 }
        healthEndpoint = true
        healthCheck { database.isReachable() }
    }

    val metrics = svelteMetrics
    registry.gauge("svelte.refusals", listOf(Tag.of("reason", "cross_origin")), metrics) { it.crossOriginRefusals.toDouble() }
    registry.gauge("svelte.refusals", listOf(Tag.of("reason", "rate_limit")), metrics) { it.rateLimitRefusals.toDouble() }

    routing {
        get("/api/admin/vitals") {
            call.respond(metrics.webVitals.map { VitalRow(it.page, it.name, it.average, it.poor) })
        }
    }
}
```

```xml [logback.xml]
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder><pattern>%d{HH:mm:ss.SSS} %-5level %logger{36} %msg%n</pattern></encoder>
    </appender>
    <appender name="ACCESS" class="ch.qos.logback.core.FileAppender">
        <file>logs/access.log</file>
        <encoder><pattern>%d{ISO8601} %msg%n</pattern></encoder>
    </appender>

    <logger name="ktor-svelte.access" level="INFO" additivity="false">
        <appender-ref ref="ACCESS" />
    </logger>
    <logger name="ktor-svelte.frontend" level="WARN" />

    <root level="INFO">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```

:::

Guard `/api/admin` with a [permission](../features/auth.md#permissions) so only admins see it.

## Use cases

- Find the request behind a bug report: the browser shows the request ID, the access log has it.
- Notice a broken deploy before users write to you: frontend errors in the server log.
- See which pages feel slow on real devices: page timings per route.
- Tell which build is running on which server: build info and the frontend fingerprint.
- Let a load balancer or orchestrator take a sick instance out: the health endpoint.

## Good to know

- `frontendErrors()` and `webVitals()` each add an endpoint anyone can post to. Both are rate limited and size limited, which is why they are off until you ask.
- Page timings are kept in memory per instance. With several instances, collect them from each one.
- The access log and the frontend error log are ordinary loggers: route, filter or silence them in your logging configuration.
