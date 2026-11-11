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
