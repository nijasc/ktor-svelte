package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.StartupStep
import io.github.nijasc.ktor.svelte.internal.startupSteps
import io.ktor.server.application.Application
import java.util.concurrent.TimeUnit

@PublishedApi
internal fun Application.recordStartupStep(
    name: String,
    nanos: Long,
) {
    startupSteps() += StartupStep(name, TimeUnit.NANOSECONDS.toMillis(nanos))
}

public inline fun <T> Application.startupStep(
    name: String,
    block: () -> T,
): T {
    val started = System.nanoTime()
    try {
        return block()
    } finally {
        recordStartupStep(name, System.nanoTime() - started)
    }
}
