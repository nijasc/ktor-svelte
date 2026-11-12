package io.github.nijasc.ktor.svelte.internal.dev

import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.response.header
import io.ktor.server.response.respondText
import io.ktor.server.response.respondTextWriter
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import kotlinx.coroutines.delay
import java.io.IOException
import java.nio.file.Path
import kotlin.io.path.Path
import kotlin.io.path.readText

internal const val DEV_CLIENT_PATH = "/_ktor-svelte/dev/client.js"
internal const val COMPILE_ERRORS_PATH = "/_ktor-svelte/dev/compile-errors"
internal const val COMPILE_ERRORS_PROPERTY = "ktor.svelte.compileErrors"
private const val POLL_MILLIS = 300L
private const val NO_ERRORS = "[]"

private val devClientScript: String by lazy {
    DevProxy::class.java.getResource("client.js")?.readText()
        ?: error("ktor-svelte is missing its dev client script. The JAR may be damaged.")
}

internal fun injectDevClient(
    html: String,
    panel: Boolean,
): String {
    if (DEV_CLIENT_PATH in html) return html
    val head = html.indexOf("</head>", ignoreCase = true)
    val source = if (panel) "$DEV_CLIENT_PATH?panel" else DEV_CLIENT_PATH
    val tag = "<script type=\"module\" src=\"$source\"></script>"
    return if (head < 0) html else html.substring(0, head) + tag + html.substring(head)
}

internal fun compileErrorsFile(): Path? = System.getProperty(COMPILE_ERRORS_PROPERTY)?.takeIf { it.isNotBlank() }?.let(::Path)

internal fun readCompileErrors(file: Path?): String {
    if (file == null) return NO_ERRORS
    return try {
        file.readText().trim().ifEmpty { NO_ERRORS }
    } catch (_: IOException) {
        NO_ERRORS
    }
}

internal fun Route.devClientRoutes(
    errors: Path?,
    allowRemote: Boolean,
) {
    get(DEV_CLIENT_PATH) {
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondText(devClientScript, ContentType.Text.JavaScript)
    }
    get(COMPILE_ERRORS_PATH) {
        if (!allowRemote && !isLocalCall(call)) {
            call.respondText("The ktor-svelte dev client only answers this machine.", status = HttpStatusCode.Forbidden)
            return@get
        }
        call.response.header(HttpHeaders.CacheControl, "no-store")
        call.respondTextWriter(ContentType.Text.EventStream) {
            var sent: String? = null
            while (true) {
                val current = readCompileErrors(errors).replace('\n', ' ')
                if (current != sent) {
                    write("data: $current\n\n")
                    flush()
                    sent = current
                }
                delay(POLL_MILLIS)
            }
        }
    }
}
