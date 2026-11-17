# FAQ

Questions people ask before and while using ktor-svelte. Each answer is short and links to the page with the details.

## The idea

### Why `adapter-static` and no server-side rendering?

ktor-svelte exists to ship one JVM app. SSR needs a JavaScript runtime that renders every request, so production would need Node next to the JVM, or a JavaScript engine inside it. That means two processes or a slow embedded engine, two places for auth and config, and two things to deploy and monitor. With `adapter-static`, the frontend is plain files, Ktor is the only backend, and the JAR is the whole app.

### What about SEO and the first paint?

Prerender every page whose content is known at build time with `export const prerender = true`. Those pages are real HTML that search engines and slow devices see right away. Pages that depend on data from your API render in the browser, which suits dashboards, admin areas and anything behind a login. A [sitemap and robots.txt](../features/endpoints.md#sitemap-and-robots-txt) are generated for you.

### Can I still add SSR later?

Yes, but not with ktor-svelte. Switch the frontend to `adapter-node`, run it as its own server, and keep Ktor as the API behind it. You lose the single JAR and the same-origin setup, and you need CORS or a proxy.

### Do I need Node in production?

No. The frontend is inside the JAR, and production runs one JVM process. Node or Bun is only needed to build. See [Deployment](../guide/deployment.md).

## Writing the app

### How do I load data for a page?

Call your Ktor routes from `load` in `+page.ts` or from the component, through the generated client. `+page.server.ts` and `+server.ts` need a Node server and do not exist here. Write that logic as a Ktor route instead. In a `load` function, use `apiWith(event)` or pass `{ fetch }`. See [In load functions](../features/calling-the-api.md#in-load-functions).

### What replaces form actions?

A Ktor route that receives the form as JSON or form data. Validation errors come back as a 422 that `isValidationError` understands, so the form can show them next to each field. See [Validation](../features/validation.md).

### Does a dynamic route like `/notes/[id]` work?

Yes. Unknown paths get the fallback page, and SvelteKit renders the route in the browser. List patterns in `paramRoutes` to serve the fallback for them even when a request does not accept HTML. See [Ktor settings](./ktor.md#serving-the-frontend).

### My Ktor route hides a page. Why?

A route of yours such as `get("/{slug}")` beats the frontend. Keep API routes under your API prefix, `/api` by default. The app logs which route hides which page.

### How do I put pages behind a login?

Either declare [page guards](../features/auth.md#page-guards) for the pages that need a user, or take over routing with `routing = SvelteRouting.Manual` and wrap `svelte()` in `authenticate`. See [Route.svelte()](./ktor.md#route-svelte) and [Auth](../features/auth.md).

### How do I keep secrets out of the frontend?

Read them from environment variables on the server, never in `publicConfig`. `svelteVerifyLeaks` fails the build when a secret value ends up in the built files. See [Secrets in the frontend build](../features/runtime-config.md#secrets-in-the-frontend-build).

## Developing

### Which port do I open while developing?

Ktor's, such as `http://localhost:8080`, not Vite's. The [ready banner](../guide/dev-workflow.md#the-ready-banner) prints it, and the browser opens it the first time.

### Do I have to restart after a Kotlin change?

No. `svelteDevAll` restarts the app, regenerates the TypeScript client, and open pages reload their data by themselves. See [Hot reload and restart](../guide/dev-workflow.md#hot-reload-and-restart).

### How do I debug Kotlin and the frontend?

Start `Dev`, then `Debug app` for Kotlin and `Debug frontend` for the browser, or `Dev and debug` for both. Outside IntelliJ, attach a debugger to `127.0.0.1:5005`. See [Debugging](../guide/dev-workflow.md#debugging).

### How do I see why an API call failed?

Open the [dev panel](../guide/dev-workflow.md#the-dev-panel) with the **API** button. It lists every call with its status and validation errors, shows the server's exception as an overlay, and can replay a call or copy it as `curl`.

### How do I try the app from my phone during development?

Set `dev { allowRemote = true }`, and only on a network you trust. The phone must also reach Vite's port. See [The dev proxy](../guide/dev-workflow.md#the-dev-proxy).

### I need HTTPS locally, for `Secure` cookies or a sign-in provider.

Set `svelte { dev { https = true } }` and trust the development certificate once. See [HTTPS in development](../guide/dev-workflow.md#https-in-development).

## Checks and tests

### Which checks run on every build?

`svelteVerifySync` before every frontend build, `svelteVerifyLeaks` before the build goes into the JAR, and `svelteVerifyTs` as part of `check`. The others are yours to add. See [Checks and tooling](../guide/checks-and-tooling.md).

### Can I write browser tests in Kotlin?

Yes. A test suite called `browserTest` gets Playwright, the packaged app and an `api` that speaks your own classes. `svelteRecordTest` writes the first test while you click. See [Browser tests](../guide/browser-tests.md).

### How do I check accessibility?

While you build a page, with the **Accessibility** section of the dev panel. For every prerendered page, with `./gradlew svelteVerifyA11y`. For pages behind a login, with `page.accessibilityProblems()` in a browser test. See [Accessibility](../guide/browser-tests.md#accessibility).

### How do I know my production JAR works before I deploy it?

Run `./gradlew svelteSmokeTest`. It starts the JAR in production mode and requests every prerendered page and the `GET` API routes. See [Smoke test](../guide/deployment.md#smoke-test).

## Running in production

### How do I deploy?

Build one JAR with `./gradlew buildFatJar` and run it with `java -jar`, in Docker, on Railway or as a systemd service. See [Deployment](../guide/deployment.md).

### What do I need behind nginx or Caddy?

Install `XForwardedHeaders`, send HSTS from the proxy, and do not compress twice. See [Behind a reverse proxy](../guide/deployment.md#behind-a-reverse-proxy).

### How do I find out about errors in my users' browsers?

Turn on `frontendErrors()`, and uncaught errors from browsers land in your server log with the page and the request ID. See [Monitoring](../guide/monitoring.md#errors-from-the-browser).

### How do I know which version is running?

The startup log names the frontend fingerprint, and `application.buildInfo` has the version and commit. With `publicBuildInfo = true` the browser can read them too. See [Build info](../guide/monitoring.md#build-info).

### Is there a health check for my load balancer?

Yes: set `healthEndpoint = true` and point it at `GET /_ktor-svelte/health`. Add your own checks with `healthCheck { }`. See [Health endpoint](../features/endpoints.md#health-endpoint).

### Something is wrong with my setup. Where do I start?

Run `./gradlew svelteDoctor` for the frontend setup and `./gradlew svelteConfig` for the settings in effect. Then see [Troubleshooting](./troubleshooting.md).
