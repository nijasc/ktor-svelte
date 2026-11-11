# Stream live updates

Server-sent events need no extra client library, and the generated client turns them into an async generator:

```kotlin
install(SSE)
routing {
    sse("/api/ticks") {
        repeat(10) { count ->
            send(ServerSentEvent(Json.encodeToString(Tick(count))))
            delay(1000)
        }
    }.describe {
        responses {
            HttpStatusCode.OK {
                ContentType.Text.EventStream { schema = jsonSchema<Tick>() }
            }
        }
    }
}
```

```svelte
<script lang="ts">
    import { api, type Tick } from '#api';

    let ticks = $state<Tick[]>([]);

    $effect(() => {
        const controller = new AbortController();
        (async () => {
            for await (const tick of api.ticks.list({ signal: controller.signal })) ticks.push(tick);
        })().catch(() => undefined);
        return () => controller.abort();
    });
</script>
```

- The `describe` block gives the events a type. Without it, each event is a string.
- Aborting the signal when the component goes away closes the connection.
- SSE counts as a GET, so it is never rate limited or blocked by the origin check.
