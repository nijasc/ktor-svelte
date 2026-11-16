package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.respondTextWriter
import java.io.IOException
import java.io.Writer

private const val STREAM_OPENED = ": connected\n\n"

internal suspend fun ApplicationCall.respondEventStreamUntilDisconnect(events: suspend Writer.() -> Unit) {
    try {
        respondTextWriter(ContentType.Text.EventStream) {
            write(STREAM_OPENED)
            flush()
            events()
        }
    } catch (_: IOException) {
        return
    }
}
