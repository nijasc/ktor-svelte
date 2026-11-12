package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonOutput
import java.io.File
import java.net.URI

internal data class CompileError(
    val file: String,
    val line: Int,
    val column: Int,
    val message: String,
)

private val COMPILER_ERROR = Regex("""^e: (.+?):(\d+):(\d+):? (.+)$""")

internal fun parseCompileError(line: String): CompileError? {
    val match = COMPILER_ERROR.matchEntire(line.trim()) ?: return null
    val (location, row, column, message) = match.destructured
    val path =
        if (location.startsWith("file:")) {
            runCatching { File(URI(location)).path }.getOrDefault(location.removePrefix("file://"))
        } else {
            location
        }
    return CompileError(path, row.toInt(), column.toInt(), message)
}

internal class CompileErrorReport(
    private val file: File,
) {
    private val pending = mutableListOf<CompileError>()

    init {
        write(emptyList())
    }

    @Synchronized
    fun onLine(line: String) {
        val error = parseCompileError(line)
        if (error != null) {
            pending += error
        } else if ("Waiting for changes" in line) {
            write(pending.toList())
            pending.clear()
        }
    }

    private fun write(errors: List<CompileError>) {
        file.parentFile.mkdirs()
        val json = errors.map { mapOf("file" to it.file, "line" to it.line, "column" to it.column, "message" to it.message) }
        file.writeText(JsonOutput.toJson(json))
    }
}
