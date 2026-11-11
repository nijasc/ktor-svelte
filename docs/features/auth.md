# Auth

Use Ktor authentication with the generated client.

To put the frontend behind Ktor's authentication, take over its routing. List what stays public. Those paths must include your login page and `/_app/*`, or the login page cannot load. Anyone can still download the JS bundles under `/_app`, so keep secrets on the server.

```kotlin
install(Svelte) {
    routing = SvelteRouting.Manual
}

routing {
    svelte(public = listOf("/login", "/_app/*"))
    authenticate("session") {
        svelte()
    }
}
```

Pages served by a plain `svelte()` get `private` caching, so shared proxies do not keep them. Paths in the `public` list keep normal caching.

In the browser, react to expired sessions in one place:

```ts
apiConfig.onUnauthorized = () => goto('/login');
```

In development mode, `svelte(public = ...)` also opens the paths Vite needs, so hot reload works on your login page.
