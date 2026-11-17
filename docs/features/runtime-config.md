# Runtime config

Pass values to the frontend at startup, so one JAR works in every environment, and declare every environment variable the app reads in one place. The frontend gets the config typed, without a request, and the build fails when a secret ends up in the frontend files.

<Badge type="tip" text="Ktor plugin" /> <Badge type="info" text="Gradle" /> <Badge type="warning" text="Generated client" />

## Quick start

Hand a `@Serializable` object to `publicConfig`. The type comes along with `generateTs`:

```kotlin
@Serializable
data class AppConfig(val sentryDsn: String?)

install(Svelte) {
    publicConfig(AppConfig(sentryDsn = System.getenv("SENTRY_DSN")))
}
```

```ts
import { loadPublicConfig } from '#api';

const config = await loadPublicConfig();
```

In TypeScript the type is always called `PublicConfig`, whatever the Kotlin class is named.

## Reading the config

The config is also inlined into every page as `<script type="application/json" id="ktor-svelte-config">`, so it is there before your code runs, without a request. Read it synchronously, for example in a store or a component's script:

```ts
import { readPublicConfig } from '#api';

const config = readPublicConfig();
```

| Function | Returns | Use it |
|---|---|---|
| `readPublicConfig()` | The inlined config, or `undefined` when there is none, such as during development with Vite or on the server | In a store or a component's script, when you can handle `undefined` |
| `loadPublicConfig()` | A promise of the config. It uses the inlined copy when it is there and only asks the server otherwise, once | When you need the value for sure |

- The config is served as JSON from `/_ktor-svelte/config.json`. During development with Vite, `loadPublicConfig()` asks there.
- The JSON is escaped, so a value cannot close the script tag.
- Pages with the config are prepared once and cached, with their own ETag and a gzip copy.

| Setting in `install(Svelte)` | Default | What it does |
|---|---|---|
| `publicConfig(value)` | none | The config, fixed at startup |
| `publicConfig { ... }` | none | A function that gives the config, see [below](#changing-values-without-a-restart) |
| `inlinePublicConfig` | `true` | `false` keeps the config out of pages, so only `loadPublicConfig()` finds it |

## Changing values without a restart

Pass a function instead of a value when the config comes from somewhere you edit while the app runs, such as a file:

```kotlin
install(Svelte) {
    publicConfig { Json.decodeFromString<AppConfig>(Path("config/public.json").readText()) }
}
```

- In development the function runs on every request for the config and for every page, so a saved change shows up on the next page load.
- Inlined pages get a new ETag when the config changes, so the browser does not keep a stale copy.
- In production the function runs once at startup and the result is kept, so a broken file fails the start instead of a request.

## Keep secrets out

::: danger
It is served as JSON from `/_ktor-svelte/config.json` to anyone who asks, so **never put secrets in it**.
:::

In SvelteKit, call `loadPublicConfig` only in the browser, because prerendering has no server to ask.

## Trying other values in development

To see the frontend with another value, you do not have to change the config: the [dev panel](../guide/dev-workflow.md) can override `publicConfig` values for your browser only.

## Environment variables

An app that reads `System.getenv` here and there finds out one variable at a time what is missing, in production, and nobody knows the full list. Declare them in one place instead:

```kotlin no-check
import io.github.nijasc.ktor.svelte.EnvironmentScope
import io.github.nijasc.ktor.svelte.environment

class AppEnvironment(env: EnvironmentScope) {
    val databaseUrl = env.string("DATABASE_URL", "JDBC URL of the database", example = "jdbc:postgresql://localhost/app")
    val port = env.int("PORT", "Port the server listens on", default = 8080)
    val signKey = env.secret("SESSION_SIGN_KEY", "Signs the session cookie")
    val siteUrl = env.optional("SITE_URL", "Public address, for links in emails")
    val signUps = env.oneOf<SignUps>("SIGN_UPS", "Whether new people can register", default = SignUps.Open)
}

fun main() {
    val env = environment(declare = ::AppEnvironment)
    embeddedServer(Netty, port = env.port) { module(env) }.start(wait = true)
}
```

`environment` reads every variable, converts it, and returns your class with typed values. When something is missing or does not fit, the app stops before it does anything else, with all of it in one table:

```text
The app cannot start: 2 environment variables are missing or wrong.

  DATABASE_URL  missing                         JDBC URL of the database, such as jdbc:postgresql://localhost/app
  PORT          "eighty" is not a whole number  Port the server listens on

Set them in the environment. .env.example lists every variable the app reads.
```

| Function | Value |
|---|---|
| `string(name, description, default?, example?)` | Text. Required unless it has a default. |
| `optional(name, description, example?)` | Text or null. |
| `secret(name, description)`, `optionalSecret(...)` | Text that must not be shown. Its value never appears in the example file or in messages. |
| `int(name, description, default?, example?)` | A whole number. |
| `boolean(name, description, default?)` | `true` or `false`. |
| `oneOf<E>(name, description, default?)` | One of the values of an enum, in any letter case. |

- An empty variable counts as not set.
- A name has to be written in capital letters, digits and `_`, such as `DATABASE_URL`.
- The failure is an `EnvironmentException`, whose `variables` lists the names that are missing or wrong.
- `environment(source = { name -> ... }, declare = ...)` reads from somewhere else than `System.getenv`, such as a map in a test.

### .env.example

`svelteGenerateTs` writes `.env.example` next to `build.gradle.kts` from the same declaration, and dev mode keeps it current. Each variable is there with its description, whether it is required, and its default or example. Secrets are listed without a value.

`svelteVerifyTs`, and so `check`, fails when the file is out of date, so a new variable cannot be added without it showing up in a pull request.

::: info The generating run
The generating run starts the app without your environment. It therefore does not stop for missing variables: a required one reads as its example, or as empty text. Code that runs at startup, such as connecting to the database, should already be skipped in that run or tolerate that, as it must today for `svelteGenerateTs` to work on a build server.
:::

## Secrets in the frontend build

Everything in the frontend build is sent to browsers. A secret gets in there easily: a server-only variable imported in a component, a key pasted into a config file, a `.env` value Vite was told to expose. Nothing fails, and the key is public from the next deploy on.

`svelteVerifyLeaks` runs after `svelteBuild`, before the build is packed into the JAR, and looks for secret values in the built files. When it finds one, the build fails:

```text
ktor-svelte found secret values in the frontend build. Everything in that folder is sent to browsers.

  SESSION_SIGN_KEY (declared as a secret)  _app/immutable/chunks/B3kq9.js
  STRIPE_KEY (.env)                        _app/immutable/nodes/2.Dx1.js

Read such values on the server only. A value that is meant to be public belongs in svelte { buildEnv }, or gets a name that starts with PUBLIC_.
```

It names the variable and the file, never the value. The values it looks for are:

- the [declared environment variables](#environment-variables) marked as `secret`, with the value they have in the environment of the build
- every value in `.env`, `.env.local`, `.env.production` and `.env.production.local`, next to `build.gradle.kts` and in the frontend folder

Left out are:

- variables listed in `buildEnv`
- names that start with `PUBLIC_` or `VITE_`
- values shorter than eight characters
- values that are one plain word, such as `production`

Those would be found in almost any build.

The check can only find a secret whose value it knows. On a build server that does not have the production secrets, it has nothing to compare, which is one more reason to build with the real environment or not at all. To turn it off:

```kotlin
svelte {
    verifyLeaks = false
}
```

## Full example

An app that reads its settings from the environment, hands the public part to the frontend, and shows a banner and a sign-up link depending on it.

::: code-group

```kotlin no-check [Environment.kt]
enum class SignUps { Open, InviteOnly, Closed }

class AppEnvironment(env: EnvironmentScope) {
    val port = env.int("PORT", "Port the server listens on", default = 8080)
    val databaseUrl = env.string("DATABASE_URL", "JDBC URL of the database", example = "jdbc:postgresql://localhost/app")
    val signKey = env.secret("SESSION_SIGN_KEY", "Signs the session cookie")
    val sentryDsn = env.optional("SENTRY_DSN", "Where the frontend reports errors")
    val banner = env.optional("BANNER", "A short notice shown on every page, such as planned maintenance")
    val signUps = env.oneOf<SignUps>("SIGN_UPS", "Whether new people can register", default = SignUps.Open)
}

@Serializable
data class AppConfig(
    val sentryDsn: String?,
    val banner: String?,
    val registrationOpen: Boolean,
)

fun main() {
    val env = environment(declare = ::AppEnvironment)
    embeddedServer(Netty, port = env.port) { module(env) }.start(wait = true)
}

fun Application.module(env: AppEnvironment) {
    install(Svelte) {
        generateTs = true
        publicConfig(
            AppConfig(
                sentryDsn = env.sentryDsn,
                banner = env.banner,
                registrationOpen = env.signUps == SignUps.Open,
            ),
        )
    }
}
```

```svelte no-check [+layout.svelte]
<script lang="ts">
    import { loadPublicConfig, type PublicConfig } from '#api';

    let { children } = $props();

    let config = $state<PublicConfig | undefined>(undefined);

    $effect(() => {
        loadPublicConfig().then((loaded) => (config = loaded));
    });
</script>

{#if config?.banner}
    <p role="status" class="banner">{config.banner}</p>
{/if}

<header>
    <a href="/">Notes</a>
    {#if config?.registrationOpen}<a href="/register">Sign up</a>{/if}
</header>

{@render children()}
```

```text [.env.example]
# Generated by ktor-svelte from the environment variables the app declares. Do not edit.
# See https://nijasc.github.io/ktor-svelte/features/runtime-config

# Port the server listens on. A whole number. Default: 8080.
# PORT=8080

# JDBC URL of the database. Required.
DATABASE_URL=jdbc:postgresql://localhost/app

# Signs the session cookie. Required. Secret.
SESSION_SIGN_KEY=

# Where the frontend reports errors. Optional.
# SENTRY_DSN=

# A short notice shown on every page, such as planned maintenance. Optional.
# BANNER=

# Whether new people can register. One of Open, InviteOnly, Closed. Default: Open.
# SIGN_UPS=Open
```

:::

- The same JAR runs in staging and production; only the environment differs.
- A missing `DATABASE_URL` or `SESSION_SIGN_KEY` stops the start with one table of everything that is wrong.
- `SESSION_SIGN_KEY` never reaches the frontend. If it did, `svelteVerifyLeaks` would fail the build.
- `.env.example` is written by `svelteGenerateTs` and dev mode. Required variables are written as they are, optional ones commented out, and secrets without a value.

## Use cases

- Values that differ between environments, such as an error reporting DSN, a support email or a feature switch: [`publicConfig`](#quick-start).
- Notices you change without a deploy: [a function](#changing-values-without-a-restart) that reads a file.
- Knowing every variable the app needs, and failing early when one is missing: [environment variables](#environment-variables).
- Making sure a key never ships to browsers: [`svelteVerifyLeaks`](#secrets-in-the-frontend-build).

## Good to know

- The config is public. Anything in it can be read by anyone.
- In SvelteKit, call `loadPublicConfig` only in the browser.
- `readPublicConfig()` is `undefined` during development with Vite, because Vite serves the pages. Use `loadPublicConfig()` when you need the value.
- The generator playground leaves `readPublicConfig()` out, because it has no `publicConfig`. See [Generator playground](./playground.md).
