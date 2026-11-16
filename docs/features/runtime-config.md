# Runtime config

Pass values to the frontend at startup, so one JAR works in every environment. The type comes along with `generateTs`:

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

The config is also inlined into every page as `<script type="application/json" id="ktor-svelte-config">`, so it is there before your code runs, without a request. Read it synchronously, for example in a store or a component's script:

```ts
import { readPublicConfig } from '#api';

const config = readPublicConfig();
```

`loadPublicConfig()` uses the inlined copy when it is there and only asks the server otherwise, which is the case during development with Vite. The JSON is escaped, so a value cannot close the script tag. Pages with the config are prepared once and cached, with their own ETag and a gzip copy. Set `inlinePublicConfig = false` to keep the config out of pages.

## Changing values without a restart

Pass a function instead of a value when the config comes from somewhere you edit while the app runs, such as a file:

```kotlin
install(Svelte) {
    publicConfig { Json.decodeFromString<AppConfig>(Path("config/public.json").readText()) }
}
```

In development the function runs on every request for the config and for every page, so a saved change shows up on the next page load. Inlined pages get a new ETag when the config changes, so the browser does not keep a stale copy. In production the function runs once at startup and the result is kept, so a broken file fails the start instead of a request.

## Keep secrets out

It is served as JSON from `/_ktor-svelte/config.json` to anyone who asks, so **never put secrets in it**. In SvelteKit, call `loadPublicConfig` only in the browser, because prerendering has no server to ask.

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

An empty variable counts as not set.

### .env.example

`svelteGenerateTs` writes `.env.example` next to `build.gradle.kts` from the same declaration, and dev mode keeps it current. Each variable is there with its description, whether it is required, and its default or example. Secrets are listed without a value. `svelteVerifyTs`, and so `check`, fails when the file is out of date, so a new variable cannot be added without it showing up in a pull request.

The generating run starts the app without your environment. It therefore does not stop for missing variables: a required one reads as its example, or as empty text. Code that runs at startup, such as connecting to the database, should already be skipped in that run or tolerate that, as it must today for `svelteGenerateTs` to work on a build server.

