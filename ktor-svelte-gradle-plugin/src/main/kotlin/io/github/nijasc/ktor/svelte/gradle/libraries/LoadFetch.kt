package io.github.nijasc.ktor.svelte.gradle.libraries

import java.io.File

internal data class LoadCall(
    val line: Int,
    val written: String,
)

private const val SHOWN_CALL_LENGTH = 80
private val LOAD_FILE = Regex("""\+(page|layout)\.(ts|js)""")
private val LOAD_START = Regex("""\bexport\s+(?:const\s+load\b|(?:async\s+)?function\s+load\b)""")
private val API_CALL = Regex("""\bapi(?:\s*\.\s*\w+)+\s*\(""")
private val COMMENT = Regex("""//[^\n]*|/\*[\s\S]*?\*/""")
private val OPTIONS_NAME = Regex("""(?i)\w*(?:options|opts|init)""")
private val FETCH = Regex("""\bfetch\b|\.\.\.""")
private val WHITESPACE = Regex("""\s+""")
private val CLOSERS = mapOf('(' to ')', '[' to ']', '{' to '}')

internal fun loadFiles(routesDirectory: File): List<File> =
    routesDirectory
        .walkTopDown()
        .filter { it.isFile && LOAD_FILE.matches(it.name) }
        .sortedBy { it.invariantSeparatorsPath }
        .toList()

internal fun findLoadCallsWithoutFetch(source: String): List<LoadCall> {
    val code = COMMENT.replace(source) { match -> match.value.replace(Regex("""[^\n]"""), " ") }
    val load = LOAD_START.find(code) ?: return emptyList()
    return API_CALL
        .findAll(code, load.range.last)
        .mapNotNull { match ->
            val close = closingIndex(code, match.range.last) ?: return@mapNotNull null
            val arguments = code.substring(match.range.last + 1, close)
            if (passesFetch(arguments)) return@mapNotNull null
            val written = WHITESPACE.replace(code.substring(match.range.first, close + 1), " ")
            val shown = if (written.length > SHOWN_CALL_LENGTH) written.take(SHOWN_CALL_LENGTH - 3) + "..." else written
            LoadCall(code.substring(0, match.range.first).count { it == '\n' } + 1, shown)
        }.toList()
}

private fun closingIndex(
    code: String,
    open: Int,
): Int? {
    val expected = ArrayDeque<Char>()
    var index = open
    while (index < code.length) {
        val character = code[index]
        when {
            character == '"' || character == '\'' || character == '`' -> index = endOfString(code, index)
            character in CLOSERS -> expected.addLast(CLOSERS.getValue(character))
            expected.isNotEmpty() && character == expected.last() -> {
                expected.removeLast()
                if (expected.isEmpty()) return index
            }
        }
        index++
    }
    return null
}

private fun endOfString(
    code: String,
    start: Int,
): Int {
    var index = start + 1
    while (index < code.length && code[index] != code[start]) {
        if (code[index] == '\\') index++
        index++
    }
    return index
}

private fun passesFetch(arguments: String): Boolean {
    val last = topLevelArguments(arguments).lastOrNull()?.trim().orEmpty()
    return when {
        last.isEmpty() -> false
        last.startsWith("{") -> FETCH.containsMatchIn(withoutStrings(last))
        else -> OPTIONS_NAME.matches(last)
    }
}

private fun withoutStrings(code: String): String =
    buildString {
        var index = 0
        while (index < code.length) {
            val character = code[index]
            if (character == '"' || character == '\'' || character == '`') index = endOfString(code, index) else append(character)
            index++
        }
    }

private fun topLevelArguments(arguments: String): List<String> {
    val parts = mutableListOf<String>()
    var depth = 0
    var start = 0
    var index = 0
    while (index < arguments.length) {
        val character = arguments[index]
        when {
            character == '"' || character == '\'' || character == '`' -> index = endOfString(arguments, index)
            character in CLOSERS -> depth++
            character in CLOSERS.values -> depth--
            character == ',' && depth == 0 -> {
                parts += arguments.substring(start, index)
                start = index + 1
            }
        }
        index++
    }
    return (parts + arguments.substring(start)).filter { it.isNotBlank() }
}
