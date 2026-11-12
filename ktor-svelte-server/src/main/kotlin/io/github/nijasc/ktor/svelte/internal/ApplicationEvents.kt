package io.github.nijasc.ktor.svelte.internal

import io.ktor.events.EventDefinition
import io.ktor.server.application.Application
import io.ktor.server.application.ApplicationStopped
import kotlinx.coroutines.DisposableHandle

internal fun <T : Any> Application.subscribeWhileRunning(
    event: EventDefinition<T>,
    belongsHere: (T) -> Boolean,
    handler: (T) -> Unit,
) {
    val application = this
    val handle = monitor.subscribe(event) { value -> if (belongsHere(value)) handler(value) }
    lateinit var stopped: DisposableHandle
    stopped =
        monitor.subscribe(ApplicationStopped) { app ->
            if (app === application) {
                handle.dispose()
                stopped.dispose()
            }
        }
}

internal fun Application.onOwn(
    event: EventDefinition<Application>,
    handler: (Application) -> Unit,
) = subscribeWhileRunning(event, { it === this }, handler)
