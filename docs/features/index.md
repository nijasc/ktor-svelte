# Everything ktor-svelte does

Every feature in one place, grouped by what you are doing. Each row links to the page that explains it, with snippets and every option.

**Where it lives** tells you where you turn a feature on or use it:

| Label | Means |
|---|---|
| <Badge type="tip" text="Ktor plugin" /> | `install(Svelte) { }` and helpers in your Kotlin routes, from `ktor-svelte-server` |
| <Badge type="info" text="Gradle" /> | `svelte { }` in `build.gradle.kts`, or a Gradle task |
| <Badge type="warning" text="Generated client" /> | Code that ktor-svelte writes into your frontend, imported as `#api`, `#routes` or `#components/...` |
| <Badge type="danger" text="Test kit" /> | `ktor-svelte-test`, for Kotlin tests that drive a browser |

A few rows say Recipe, Script, Docs, Release or This site instead: those are guides, the setup script, or things that happen outside your app.

New here? Start with [Getting started](../guide/getting-started.md) or the [tutorial](../guide/tutorial.md). Looking for a whole solution, such as sign in or uploads? See the [recipes](../recipes/).

[[toc]]

## Kotlin to TypeScript

Your Ktor routes and classes become a typed client, so the frontend breaks at compile time, not in production.

### The generated client

| Feature | What it does | Where it lives |
|---|---|---|
| [Generated TypeScript](./typescript.md) | Types, services, `validate()`, `empty()` and enum objects for every route, written to `frontend/src/lib/api` with no npm dependencies | Ktor plugin, Generated client |
| [Exact types](./typescript.md#getting-exact-types) | Ktor's compiler plugin reads `receive` and `respond`, or you describe a route by hand | Gradle |
| [Documentation in the editor](./typescript.md#documentation-in-the-editor) | `describe { }` and `@JsonSchema.Description` become JSDoc, deprecations become `@deprecated`, and each function names its Kotlin file | Generated client |
| [Dates](./typescript.md) | `LocalDate`, `LocalTime`, `Instant` and `LocalDateTime` become `IsoDate`, `IsoTime` and `IsoDateTime`, with safe converters | Generated client |
| [Shared constants](./typescript.md#shared-constants) | A Kotlin object with limits and lists, written to `constants.ts` | Ktor plugin, Generated client |
| [IDs that cannot be mixed up](./typescript.md#ids-that-cannot-be-mixed-up) | A Kotlin value class becomes its own TypeScript type | Generated client |
| [Money and durations](./typescript.md#money-and-durations) | Exact `Decimal` values and `Duration` as text, with helpers | Ktor plugin, Generated client |
| [Sealed classes](./typescript.md#sealed-classes) | A union with a `type` field and an exhaustive `match` | Generated client |
| [Resource routes](./typescript.md#resource-routes) | `resource` registers list, get, create, update and delete with the names the client expects | Ktor plugin |
| [Routes nothing calls](./typescript.md#routes-nothing-calls) | `svelteVerifyApiRoutes` lists API routes the frontend never uses | Gradle |
| [What changed for callers](./typescript.md#what-changed-for-callers) | `svelteApiChanges` compares the API with another git revision | Gradle |
| [Generator playground](./playground.md) | Paste an OpenAPI document and see the TypeScript it becomes, in the browser | This site |

### Calling the API

| Feature | What it does | Where it lives |
|---|---|---|
| [Typed calls and errors](./calling-the-api.md) | `api.notes.list()`, `isApiError`, `isValidationError`, `errorMessage`, event streams and uploads | Generated client |
| [Prefetch on hover](./calling-the-api.md#prefetch-on-hover) | Load a page's data, or one call, while the pointer rests on a link | Generated client |
| [Error codes](./calling-the-api.md#error-codes) | Named errors from one Kotlin enum instead of status numbers | Ktor plugin, Generated client |
| [Query parameters as a class](./calling-the-api.md#query-parameters-as-a-class) | `call.query<T>()` reads the query string into a class, and the client gets its type | Ktor plugin |
| [Changing some fields](./calling-the-api.md#changing-some-fields) | `Patch<T>` for `PATCH` routes that tell "not sent" from "set to null" | Ktor plugin, Generated client |
| [Two people, one record](./calling-the-api.md#two-people-one-record) | A version check that refuses a save over someone else's change | Ktor plugin, Generated client |
| [Path parameters](../reference/ktor.md#path-parameters) | `call.pathParameter<T>(name)` reads a path parameter as a number, UUID or enum | Ktor plugin |
| [Paged lists](../recipes/pagination.md) | `Page<T>` and `getPage` on the server, `pages()` in the browser | Ktor plugin, Generated client |
| [Uploads](../recipes/uploads.md) | `FormData` bodies with upload progress, and size and type rules shared by both sides | Ktor plugin, Generated client |
| [Live updates](../recipes/live-updates.md) | Server-sent events become async generators in the client | Ktor plugin, Generated client |
| [In load functions](./calling-the-api.md#in-load-functions) | `apiWith(event)` runs every call through SvelteKit's `fetch` | Generated client |
| [Refresh the page after a write](./calling-the-api.md#refresh-the-page-after-a-write) | `onWrite` reruns the page's `load` functions after a successful write | Generated client |
| [Ask before a call](./calling-the-api.md#ask-before-a-call) | `confirmed` asks first and only calls on yes | Generated client |
| [Show errors automatically](./calling-the-api.md#show-errors-automatically) | Every failed call shows a toast, with no error handling in components | Gradle, Generated client |
| [Toasts from the server](./calling-the-api.md#toasts-from-the-server) | `call.toast(...)` in a route shows a message in the browser | Ktor plugin |
| [Navigation from the server](./calling-the-api.md#navigation-from-the-server) | `call.navigateTo(...)` tells the browser which page to open next | Ktor plugin |
| [Reload after a deploy](./calling-the-api.md#reload-after-a-deploy) | The client notices a new build and can offer a reload | Ktor plugin, Generated client |
| [Request IDs](./calling-the-api.md#request-ids) | Every call carries an `X-Request-Id` that reaches your logs and the error | Ktor plugin, Generated client |
| [Timeouts](./calling-the-api.md#timeouts) | One timeout for every call, or one per call | Generated client |
| [Retries](./calling-the-api.md#retries) | GET requests that failed on the network are tried again | Generated client |
| [Rate limits](./calling-the-api.md#rate-limits) | `isRateLimitError` and `retryAfter`, and with retries on, one automatic wait and retry | Generated client |
| [Writes that are safe to send twice](./calling-the-api.md#writes-that-are-safe-to-send-twice) | Idempotency keys, so a repeated write is answered once | Ktor plugin, Generated client |
| [The visitor's time zone](./calling-the-api.md#the-visitor-s-time-zone) | `call.timeZone` in every route, sent by the client | Ktor plugin, Generated client |
| [Search as you type](./calling-the-api.md#search-as-you-type) | `latest` aborts the previous call, so an old answer never wins | Generated client |
| [Fixtures for frontend tests](./calling-the-api.md#fixtures-for-frontend-tests) | Record real answers in the dev panel and replay them without a backend | Generated client |

### Validation and forms

| Feature | What it does | Where it lives |
|---|---|---|
| [Validation](./validation.md) | `@JsonSchema` bounds and `Validated` rules, checked on every `receive`, with field errors in a 422 and the same bounds in the browser | Ktor plugin, Generated client |
| [Cleaning up input](./validation.md#cleaning-up-input) | `@Trim`, `@Lowercase` and `@EmptyAsNull`, declared on the field | Ktor plugin |
| [Sensitive fields](./validation.md#sensitive-fields) | Mark a password or token once, and the dev tools show `***` | Ktor plugin |
| [Form state](./validation.md#form-state) | `formState` holds the values, changes, submit state and errors of a form | Generated client |
| [Checks only the server can make](./validation.md#checks-only-the-server-can-make) | "Is this email taken?" while the visitor types | Ktor plugin, Generated client |

### Config and transport

| Feature | What it does | Where it lives |
|---|---|---|
| [Runtime config](./runtime-config.md) | `publicConfig` passes values to the frontend at startup, inlined into every page | Ktor plugin, Generated client |
| [Changing values without a restart](./runtime-config.md#changing-values-without-a-restart) | Pass a function, and development picks up edits on the next page load | Ktor plugin |
| [Environment variables](./runtime-config.md#environment-variables) | `environment` declares every variable in one place, with types and a `.env.example` | Ktor plugin, Gradle |
| [Secrets in the frontend build](./runtime-config.md#secrets-in-the-frontend-build) | `svelteVerifyLeaks` fails the build when a secret reached the built files | Gradle |
| [Transport](./transport.md) | `json()`, `xml()`, other formats and `compression()` in one block | Ktor plugin |
| [API compression](./transport.md#api-compression) | API responses compressed by default, with zstd when you add it | Ktor plugin |

## Frontend

Pages, links, styling and components, turned on in Gradle and typed on both sides. [Frontend libraries](./frontend-libraries.md) is the overview of every library.

### Pages and links

| Feature | What it does | Where it lives |
|---|---|---|
| [Typed routes](./routes.md) | Every page as a typed constant: `routes` in Svelte, `FrontendRoutes` in Kotlin | Gradle, Generated client |
| [Marking the open page](./routes.md#marking-the-open-page-in-a-menu) | `isActive` for menus, without comparing paths | Generated client |
| [Menu, titles and breadcrumbs](./routes.md#menu-titles-and-breadcrumbs) | Each page says its own title and icon in `+page.ts` | Gradle, Generated client |
| [Link previews](./routes.md#link-previews) | Tags for chat and social previews, from the same page metadata | Gradle, Generated client |
| [A new page](./routes.md#a-new-page) | `svelteAdd --page` writes a page with a typed load | Gradle |
| [Pages for a class](./routes.md#pages-for-a-class) | `svelteAdd --crud` writes list, detail and form pages from the generated client | Gradle |
| [Renaming a page](./routes.md#renaming-a-page) | `svelteRename` moves a page and fixes every typed call to it | Gradle |
| [Links that are still strings](./routes.md#finding-links-that-are-still-strings) | `svelteVerifyRoutes` finds string links and suggests the typed call | Gradle |
| [Links that lead nowhere](./routes.md#finding-links-that-lead-nowhere) | `svelteVerifyLinks` finds links to pages that do not exist | Gradle |

### Look and feel

| Feature | What it does | Where it lives |
|---|---|---|
| [Tailwind](./styling.md#tailwind) | Tailwind 4 in Vite and the CSS, with the typography and forms plugins | Gradle |
| [DaisyUI themes](./styling.md#daisyui) | Components and themes, typed in TypeScript and Kotlin, with no flash of the wrong theme | Gradle, Generated client |
| [shadcn themes](./styling.md#shadcn-themes) | The shadcn/ui look for every DaisyUI component | Gradle |
| [Custom themes](./styling.md#custom-themes) | Your own colors, and a dev panel editor to tune them live | Gradle |
| [Fonts](./styling.md#fonts) | A font served from your own app, preloaded | Gradle |
| [Lucide icons](./icons-and-images.md#lucide-icons) | A typed `LucideIcon` enum and an `<Icon>` component, with only the icons you use | Gradle, Generated client |
| [Images](./icons-and-images.md#images) | `<enhanced:img>` with AVIF and WebP in several widths | Gradle |
| [Charts](./charts.md) | LayerChart in your theme colors, with typed series | Gradle, Generated client |
| [Installable app](./installable-app.md) | A web manifest, icons, a service worker and an offline page | Gradle, Ktor plugin |
| [Emails](./emails.md) | Svelte components rendered to HTML and text emails at build time, with a typed Kotlin function per email | Gradle |

### Languages

| Feature | What it does | Where it lives |
|---|---|---|
| [i18n](./i18n.md) | Typed messages from one JSON file per language, in Svelte and in Kotlin | Gradle, Generated client |
| [Strategies](./i18n.md#strategies) | The language from a cookie or from a URL prefix | Gradle |
| [Plurals](./i18n.md#plurals) | "1 note" and "2 notes" as one message | Gradle, Generated client |
| [Numbers, money and dates](./i18n.md#numbers-money-and-dates) | Formats that read the same in the browser and on the server | Gradle, Generated client |
| [Relative time](./i18n.md#relative-time) | "3 minutes ago", in the visitor's language | Generated client |
| [Messages nobody translated yet](./i18n.md#messages-nobody-translated-yet) | The dev panel marks copied, untranslated texts | Gradle |
| [Messages nothing uses](./i18n.md#messages-nothing-uses) | `svelteVerifyMessages` lists keys you can delete | Gradle |

### Components

| Feature | What it does | Where it lives |
|---|---|---|
| [Components](./components.md) | Svelte components over the generated helpers, imported as `#components/...` | Gradle, Generated client |
| [Field](./components.md#field) | Label, input, hint and validation errors in one | Generated client |
| [DateInput and DateTimeInput](./components.md#dateinput-and-datetimeinput) | Inputs that bind to `IsoDate` and `IsoDateTime` | Generated client |
| [EnumSelect](./components.md#enumselect) | A `<select>` over a generated enum | Generated client |
| [DataTable](./components.md#datatable) | A table over any paged route, with loading, empty and error states | Generated client |
| [FileDrop](./components.md#filedrop) | A drop area with previews, progress and refusal reasons | Generated client |
| [ErrorPage](./components.md#errorpage) | The page SvelteKit shows when a page cannot load | Generated client |
| [ThemeToggle and LocaleSwitch](./components.md#themetoggle-and-localeswitch) | Theme and language switches that know your configuration | Generated client |
| [TimeAgo](./components.md#timeago) | A relative time that keeps itself current | Generated client |
| [NavigationProgress](./components.md#navigationprogress) | A thin bar while SvelteKit navigates | Generated client |
| [Modals](./components.md#modals) | `modal()` opens a `<dialog>` and tells you how it closed | Generated client |
| [Toasts](./components.md#toasts) | A `toast()` helper and an optional reload prompt | Gradle, Generated client |

## Users and security

Sign in, permissions and the protections that are on by default.

| Feature | What it does | Where it lives |
|---|---|---|
| [Auth](./auth.md) | Put the frontend behind Ktor's authentication, with public paths you list | Ktor plugin |
| [The current user](./auth.md#the-current-user) | Declare once how the server finds the user, and get a typed `currentUser` store | Ktor plugin, Generated client |
| [The user in routes](./auth.md#in-routes) | `call.user` in every route, typed | Ktor plugin |
| [When the session ends](./auth.md#when-the-session-ends) | A warning before the session ends, with an optional way to extend it | Ktor plugin, Generated client |
| [Permissions](./auth.md#permissions) | One enum and one function, checked on the server and shown in the browser | Ktor plugin, Generated client |
| [Page guards](./auth.md#page-guards) | Which pages need a user or a permission, declared once by page | Ktor plugin |
| [User preferences](./auth.md#user-preferences) | Theme, language and other choices that follow a person to every device | Ktor plugin, Generated client |
| [The login page](./auth.md#the-login-page) | Every "please sign in" ends at your login page, and returns where it started | Ktor plugin, Generated client |
| [Sessions](../recipes/sessions.md) | Sign in with a session cookie, as a recipe | Recipe |
| [Typed cookies](../recipes/sessions.md#typed-cookies) | Cookies as typed values on both sides | Ktor plugin, Generated client |
| [Cookie consent](../recipes/sessions.md#cookie-consent) | A consent helper for cookies that need one | Ktor plugin, Generated client |
| [Admin area](../recipes/admin-area.md) | Pages and routes only admins may use, as a recipe | Recipe |
| [Security headers](../security.md#security-headers) | `nosniff`, frame and referrer headers, and a strict Content-Security-Policy from build hashes | Ktor plugin |
| [API request guards](../security.md#api-request-guards) | Origin check, body size limit, JSON depth, rate limit and hidden error details | Ktor plugin |
| [Malformed requests](../security.md#malformed-requests) | Broken paths and hosts answer 400, without noise in your log | Ktor plugin |
| [Who may see internal endpoints](./endpoints.md#who-may-see-internal-endpoints) | Open the status endpoint and API docs to the callers you name | Ktor plugin |
| [Verifying a release](../security.md#verifying-a-release) | Signed build provenance and an SBOM for every release | Release |

## Develop

The dev loop, the dev panel and the tools around them.

| Feature | What it does | Where it lives |
|---|---|---|
| [Setup script](../guide/getting-started.md) | One command creates a project with everything wired up | Script |
| [Configurator](../guide/configurator.md) | Tick options and copy the settings | This site |
| [Dev workflow](../guide/dev-workflow.md) | `svelteDevAll` runs Vite, the compiler and your app with hot reload on one port, in one readable log | Gradle |
| [Dev panel](../guide/dev-workflow.md) | Every API call with replay, curl, payload size, SQL counts and duplicates, plus status, slowest routes, environment, migrations, memory and threads, caught emails, cookies, clear site data, routes, public config, accessibility and a theme editor | Ktor plugin |
| [Server error overlay](../guide/dev-workflow.md) | A failed call shows the exception and a link to your code in the browser | Ktor plugin |
| [Browser logs in your console](../guide/dev-workflow.md) | `console.log` and browser errors land in the dev log | Ktor plugin |
| [Restart summary and startup timing](../guide/dev-workflow.md) | What caused a restart, how long it took, and where startup time went | Gradle, Ktor plugin |
| [Multiple frontends](../guide/multiple-frontends.md) | A public site and an admin area as two SvelteKit projects under their own path prefixes, in one app and one JAR | Ktor plugin, Gradle |
| [HTTPS in development](../guide/dev-workflow.md#https-in-development) | Develop with `Secure` cookies and service workers | Gradle |
| [When a port is still in use](../guide/dev-workflow.md#when-a-port-is-still-in-use) | Leftover processes from a crash are cleaned up | Gradle |
| [Debugging](../guide/dev-workflow.md) | Run configurations to debug Kotlin and the frontend, in one click | Gradle |
| [Live templates](../guide/checks-and-tooling.md#sveltelivetemplates) | `ksget`, `ksapi` and more for IntelliJ and WebStorm | Gradle |
| [Checks and tooling](../guide/checks-and-tooling.md) | Every verify task, what it catches and when it runs | Gradle |
| [svelteDoctor](../guide/checks-and-tooling.md#sveltedoctor) | Checks the setup and fixes what it can with `--fix` | Gradle |
| [svelteConfig](../guide/checks-and-tooling.md#svelteconfig) | Every setting on both sides, scored with suggestions | Gradle |
| [Format both sides](../guide/checks-and-tooling.md#format-and-formatcheck) | `format` and `formatCheck` for Kotlin and the frontend | Gradle |
| [Git pre-commit hook](../guide/checks-and-tooling.md#the-git-pre-commit-hook) | Stops unformatted or stale files before a commit, and merges generated files | Gradle |
| [Lint rules](../guide/checks-and-tooling.md#lint-rules) | ESLint rules for mistakes that are easy to make in a ktor-svelte app, shown while you type | Gradle, Generated client |
| [Guide for coding assistants](./components.md#guide-for-coding-assistants) | An `AGENTS.md` that tells assistants how the project works | Gradle |
| [Short task names](../reference/gradle.md#short-task-names) | `dev`, `sync`, `doctor` and `gen` | Gradle |
| [Pin Bun](../reference/gradle.md#pin-bun) | Set `bunVersion`, and the plugin downloads that exact Bun, so a fresh machine builds too | Gradle |

## Test

| Feature | What it does | Where it lives |
|---|---|---|
| [Browser tests](../guide/browser-tests.md) | Kotlin tests that drive Chromium, Firefox or WebKit against the packaged app | Test kit, Gradle |
| [Record a test](../guide/browser-tests.md#record-a-test) | Click through the app once and get the test written down | Gradle |
| [The API with your own classes](../guide/browser-tests.md#the-api-with-your-own-classes) | Call the API from a test with your Kotlin classes | Test kit |
| [Accessibility](../guide/browser-tests.md#accessibility) | `svelteVerifyA11y` runs axe on every prerendered page, light and dark | Gradle |
| [Smoke test](../guide/deployment.md#smoke-test) | `svelteSmokeTest` starts the packaged app in production mode and checks every page | Gradle |
| [Fixtures for frontend tests](./calling-the-api.md#fixtures-for-frontend-tests) | Frontend tests that answer from recorded calls | Generated client |

## Ship and run

| Feature | What it does | Where it lives |
|---|---|---|
| [Build the JAR](../guide/deployment.md#build-the-jar) | `jar`, Shadow or `buildFatJar`, each with the frontend inside | Gradle |
| [Docker](../guide/deployment.md#docker) | A multi-stage build that runs as a non-root user | Script |
| [Railway](../guide/deployment.md#railway) | `svelteDeploy` writes Railway's config from what the project knows | Gradle |
| [A plain server](../guide/deployment.md#a-plain-server) | A systemd unit for the JAR | Docs |
| [Behind a reverse proxy](../guide/deployment.md#behind-a-reverse-proxy) | nginx, Caddy or a load balancer in front to terminate TLS | Docs |
| [Caching and precompressed files](../reference/how-it-works.md) | Immutable caching, ETags, zstd, Brotli and gzip, real 404s for stale chunks | Ktor plugin, Gradle |
| [Built-in endpoints](./endpoints.md) | Sitemap, `robots.txt`, a default favicon, status, health and Swagger UI | Ktor plugin |
| [Health endpoint](./endpoints.md#health-endpoint) | `/_ktor-svelte/health` for load balancers, with your own checks | Ktor plugin |
| [Monitoring](../guide/monitoring.md) | What to watch in production, in one place | Ktor plugin |
| [Request log](../guide/monitoring.md#request-log) | One line per request in production | Ktor plugin |
| [Errors from the browser](../guide/monitoring.md#errors-from-the-browser) | Frontend errors reach your server log | Ktor plugin, Generated client |
| [Page timings](../guide/monitoring.md#page-timings) | Web vitals from real browsers, also as metrics | Ktor plugin, Generated client |
| [Refused requests](../guide/monitoring.md#refused-requests) | Counters for every request the guards refused | Ktor plugin |
| [Build info](../guide/monitoring.md#build-info) | Version and commit on both sides, without setup | Gradle, Ktor plugin |
| [Checklist](../guide/deployment.md#checklist) | What to check before the first deploy | Docs |

## Still missing something?

- Settings by name: [Gradle settings and tasks](../reference/gradle.md) and [Ktor settings](../reference/ktor.md)
- Something broke: [Troubleshooting](../reference/troubleshooting.md)
- What is planned next: [`FEATURES_NEXT.md`](https://github.com/nijasc/ktor-svelte/blob/main/FEATURES_NEXT.md)
