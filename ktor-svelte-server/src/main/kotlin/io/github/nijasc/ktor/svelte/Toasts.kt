package io.github.nijasc.ktor.svelte

import io.ktor.http.encodeURLParameter
import io.ktor.server.application.ApplicationCall
import io.ktor.server.response.header

internal const val TOAST_HEADER = "X-Ktor-Svelte-Toast"
private const val LONGEST_TOAST = 500
private const val MOST_TOASTS = 5

public enum class ToastKind {
    Info,
    Success,
    Warning,
    Error,
}

public fun ApplicationCall.toast(
    message: String,
    kind: ToastKind = ToastKind.Info,
) {
    val sent = response.headers.values(TOAST_HEADER)
    if (message.isBlank() || sent.size >= MOST_TOASTS) return
    response.header(TOAST_HEADER, kind.name.lowercase() + ":" + message.take(LONGEST_TOAST).encodeURLParameter(spaceToPlus = false))
}
