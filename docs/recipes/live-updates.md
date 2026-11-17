# Stream live updates

You want a page to change while someone looks at it: a counter that ticks, a list that grows when a colleague adds an item, a progress bar for a job that runs on the server.

**Time:** about 15 minutes. **Level:** intermediate.

Server-sent events need no extra client library, and the generated client turns them into an async generator. The browser opens one long `GET`, the server writes events into it, and the page reads them in a `for await` loop.

## Step 1: an event route

Install Ktor's `SSE` plugin (`io.ktor:ktor-server-sse`) and declare the route. The `describe` block gives the events a type:

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

Without the `describe` block, each event is a string. Run `./gradlew svelteGenerateTs` and the client has `api.ticks.list`.

## Step 2: read the events in a component

```svelte no-check
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

<p>{ticks.length} ticks so far</p>
```

- Each event's `data` is parsed as JSON into the declared type.
- Aborting the signal when the component goes away closes the connection. Without it, the stream stays open after the visitor has left the page.
- The loop ends when the server closes the stream.

## Step 3: send one change to everyone

A real app sends an event when something happens, to every open page. Keep a `MutableSharedFlow` of changes, emit into it from the routes that write, and let each event route collect it:

::: code-group

```kotlin no-check [Changes.kt]
@Serializable
data class NoteChanged(val id: Int, val kind: String)

class Changes {
    private val flow = MutableSharedFlow<NoteChanged>(extraBufferCapacity = 64)
    val events: SharedFlow<NoteChanged> = flow
    fun publish(change: NoteChanged) {
        flow.tryEmit(change)
    }
}
```

```kotlin no-check [Routes.kt]
fun Route.liveNotes(store: NoteStore, changes: Changes) {
    post("/api/notes") {
        val note = store.create(call.receive<NoteInput>())
        changes.publish(NoteChanged(note.id, "created"))
        call.respond(HttpStatusCode.Created, note)
    }

    sse("/api/notes/changes") {
        changes.events.collect { change -> send(ServerSentEvent(Json.encodeToString(change))) }
    }.describe {
        responses {
            HttpStatusCode.OK {
                ContentType.Text.EventStream { schema = jsonSchema<NoteChanged>() }
            }
        }
    }
}
```

```svelte no-check [notes/+page.svelte]
<script lang="ts">
    import { api, isAbortError, type Note } from '#api';

    let { data } = $props();
    let notes = $state<Note[]>(data.notes);

    $effect(() => {
        const controller = new AbortController();
        (async () => {
            for await (const change of api.notes.getChanges({ signal: controller.signal })) {
                if (change.kind === 'created') notes = await api.notes.list();
            }
        })().catch((error) => {
            if (!isAbortError(error)) console.warn('Live updates stopped', error);
        });
        return () => controller.abort();
    });
</script>

{#each notes as note (note.id)}
    <p>{note.title}</p>
{/each}
```

:::

`tryEmit` never blocks the route that writes. A page that is too slow to keep up misses events beyond the buffer, which is why the page above reloads the list instead of patching it event by event.

## Good to know

- SSE counts as a GET, so it is never rate limited or blocked by the origin check.
- The default API compression leaves `text/event-stream` alone, so events arrive as soon as they are sent.
- An event route under a [page guard](../features/auth.md#page-guards) or inside `authenticate` needs a session like any other route. The browser sends the cookie with the stream.
- When the connection drops, the loop ends with an error. Start it again after a short pause if the page must stay live.
- For simpler cases you may not need a stream at all: [refresh the page after a write](../features/calling-the-api.md#refresh-the-page-after-a-write), [toasts from the server](../features/calling-the-api.md#toasts-from-the-server) and [navigation from the server](../features/calling-the-api.md#navigation-from-the-server) all ride on normal responses.
