# Runtime config

Pass values to the frontend at startup, so one JAR works in every environment.

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

It is served as JSON from `/_ktor-svelte/config.json` to anyone who asks, so **never put secrets in it**. In SvelteKit, call `loadPublicConfig` only in the browser, because prerendering has no server to ask.
