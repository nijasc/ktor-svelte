package io.github.nijasc.ktor.svelte.internal.dev

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.put

private const val DEEPEST_CAUSE = 5
private const val FRAMES_PER_ERROR = 12
private const val LONGEST_MESSAGE = 2000
private val FRAMEWORK_FRAMES =
    listOf(
        "io.netty.",
        "kotlinx.coroutines.",
        "kotlin.coroutines.",
        "io.ktor.util.pipeline.",
        "io.ktor.server.netty.",
        "io.ktor.server.engine.",
        "java.util.concurrent.",
        "java.lang.Thread",
    )

private fun sourceOf(
    frame: StackTraceElement,
    sources: SourceFiles,
): String? {
    val file = frame.fileName?.takeIf { frame.lineNumber > 0 && (it.endsWith(".kt") || it.endsWith(".java")) } ?: return null
    val packagePath = frame.className.substringBeforeLast('.', "").replace('.', '/')
    return sources.pathOf(if (packagePath.isEmpty()) file else "$packagePath/$file")
}

internal fun errorSummary(
    error: Throwable,
    sources: SourceFiles,
): JsonObject {
    val chain = generateSequence(error) { it.cause }.take(DEEPEST_CAUSE).toList()
    return buildJsonObject {
        put("type", error.javaClass.name)
        put("message", error.message.orEmpty().take(LONGEST_MESSAGE))
        put(
            "lines",
            buildJsonArray {
                chain.forEachIndexed { index, cause ->
                    if (index > 0) {
                        add(
                            buildJsonObject {
                                put(
                                    "text",
                                    "Caused by: ${cause.javaClass.name}: ${cause.message.orEmpty().take(LONGEST_MESSAGE)}",
                                )
                            },
                        )
                    }
                    val shown = cause.stackTrace.filterNot { frame -> FRAMEWORK_FRAMES.any { frame.className.startsWith(it) } }
                    shown.take(FRAMES_PER_ERROR).forEach { frame ->
                        add(
                            buildJsonObject {
                                put("text", "    at $frame")
                                sourceOf(frame, sources)?.let { path ->
                                    put("path", path)
                                    put("line", frame.lineNumber)
                                }
                            },
                        )
                    }
                    val hidden = cause.stackTrace.size - minOf(shown.size, FRAMES_PER_ERROR)
                    if (hidden > 0) add(buildJsonObject { put("text", "    ... $hidden more frames, see the server log") })
                }
            },
        )
    }
}
