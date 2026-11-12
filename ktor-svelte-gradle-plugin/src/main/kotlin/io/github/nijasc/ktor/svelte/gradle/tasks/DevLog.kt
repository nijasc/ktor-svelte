package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.net.URI
import java.time.LocalTime
import java.time.format.DateTimeFormatter

internal enum class LogSource(
    val label: String,
    val color: String,
) {
    APP("app", "35"),
    VITE("vite", "33"),
    KOTLIN("kotlin", "34"),
    BROWSER("browser", "36"),
}

internal enum class LogLevel(
    val color: String?,
) {
    ERROR("31"),
    WARN("33"),
    INFO(null),
    DEBUG("2"),
}

private val ANSI = Regex("""\u001B\[[0-9;?]*[A-Za-z]""")
private val APP_LINE =
    Regex("""^(\d{2}:\d{2}:\d{2})(?:[.,]\d+)?\s+(TRACE|DEBUG|INFO|WARN|ERROR)\s+(?:\[[^\]]*]\s+)?(\S+)\s+(?:-\s+)?(.*)$""")
private val VITE_TIME = Regex("""^\d{1,2}:\d{2}:\d{2}(?:\s?[AP]M)?\s+\[vite]\s+""")
private val KOTLIN_PROBLEM = Regex("""^([ew]): (.+?):(\d+):(\d+):? (.*)$""")
private val TIME = DateTimeFormatter.ofPattern("HH:mm:ss")
private const val BROWSER_LOGGER = "ktor-svelte.browser"

private val VITE_NOISE =
    listOf(
        Regex("""^[$>] .*vite"""),
        Regex("""^➜\s+(Local|Network|press)"""),
        Regex("""^(?:->|➜)?\s*press h"""),
    )

private val GRADLE_NOISE =
    listOf(
        "FAILURE:",
        "* What went wrong",
        "* Try:",
        "> Run with",
        "> Get more help",
        "BUILD FAILED",
        "BUILD SUCCESSFUL",
        "[Incubating]",
        "Execution failed",
        "> A failure occurred",
        "> Kotlin compiler",
        "Kotlin compiler error",
        "Location:",
        "Deprecated Gradle features",
        "You can use '--warning-mode",
        "For more on this",
        "modified:",
        "new file:",
        "deleted:",
        "actionable task",
        "Configuration cache",
        "Reusing configuration cache",
    )

internal class DevLogFormatter(
    private val color: Boolean,
    private val projectDirectory: File? = null,
    private val now: () -> LocalTime = LocalTime::now,
) {
    private var errorsThisBuild = 0
    private var compiling = false

    @Synchronized
    fun format(
        source: LogSource,
        raw: String,
    ): String? {
        val line = ANSI.replace(raw, "").trimEnd()
        if (line.isBlank()) return null
        return when (source) {
            LogSource.APP -> app(line)
            LogSource.VITE -> vite(line)
            LogSource.KOTLIN -> kotlin(line)
            LogSource.BROWSER -> render(LogSource.BROWSER, LogLevel.INFO, line, null)
        }
    }

    private fun app(line: String): String? {
        if (line.startsWith("Listening for transport dt_socket")) return null
        val match = APP_LINE.matchEntire(line) ?: return render(LogSource.APP, null, line, null)
        val (time, level, logger, message) = match.destructured
        val source = if (logger == BROWSER_LOGGER || logger.endsWith(".browser")) LogSource.BROWSER else LogSource.APP
        val shown = logger.substringAfterLast('.').takeUnless { source == LogSource.BROWSER || it == "Application" }
        return render(source, levelOf(level), message, shown, time)
    }

    private fun vite(line: String): String? {
        val text = VITE_TIME.replace(line.trim(), "")
        if (VITE_NOISE.any { it.containsMatchIn(text) }) return null
        if (text.startsWith(
                "VITE v",
            )
        ) {
            return render(LogSource.VITE, LogLevel.INFO, "ready in ${text.substringAfter("ready in ", "").trim()}".trimEnd(), null)
        }
        val lower = text.lowercase()
        val level =
            when {
                "error" in lower -> LogLevel.ERROR
                "warn" in lower -> LogLevel.WARN
                else -> LogLevel.INFO
            }
        return render(LogSource.VITE, level, text, null)
    }

    private fun kotlin(line: String): String? {
        val text = line.trim()
        KOTLIN_PROBLEM.matchEntire(text)?.let { match ->
            val (kind, location, row, column, message) = match.destructured
            val level = if (kind == "e") LogLevel.ERROR else LogLevel.WARN
            if (level == LogLevel.ERROR) errorsThisBuild++
            return render(LogSource.KOTLIN, level, "${shortPath(location)}:$row:$column $message", null)
        }
        if (text.startsWith("Change detected")) {
            compiling = true
            errorsThisBuild = 0
            return render(LogSource.KOTLIN, LogLevel.INFO, "compiling", null)
        }
        if (text.startsWith("Waiting for changes")) {
            val errors = errorsThisBuild
            val wasCompiling = compiling
            compiling = false
            errorsThisBuild = 0
            return when {
                errors > 0 ->
                    render(
                        LogSource.KOTLIN,
                        LogLevel.ERROR,
                        "does not compile: $errors error${if (errors == 1) "" else "s"}",
                        null,
                    )
                wasCompiling -> render(LogSource.KOTLIN, LogLevel.INFO, "compiled", null)
                else -> null
            }
        }
        if (line.startsWith(" ") || line.startsWith("\t") || GRADLE_NOISE.any { text.startsWith(it) || text.contains(it) }) return null
        return render(LogSource.KOTLIN, LogLevel.INFO, text, null)
    }

    private fun shortPath(location: String): String {
        val file = runCatching { if (location.startsWith("file:")) File(URI(location)) else File(location) }.getOrNull() ?: return location
        val base = projectDirectory ?: return file.name
        return runCatching { file.absoluteFile.relativeTo(base.absoluteFile).invariantSeparatorsPath }.getOrDefault(file.name)
    }

    private fun levelOf(level: String): LogLevel =
        when (level) {
            "ERROR" -> LogLevel.ERROR
            "WARN" -> LogLevel.WARN
            "DEBUG", "TRACE" -> LogLevel.DEBUG
            else -> LogLevel.INFO
        }

    private fun render(
        source: LogSource,
        level: LogLevel?,
        message: String,
        logger: String?,
        time: String = now().format(TIME),
    ): String {
        val label = source.label.padEnd(LogSource.entries.maxOf { it.label.length })
        val levelText = (level?.name ?: "").padEnd(5)
        val loggerText = logger?.let { paint("2", it) + " " }.orEmpty()
        val body = if (level == LogLevel.ERROR || level == LogLevel.WARN) paint(level.color, message) else message
        return "${paint(
            "2",
            time,
        )}  ${paint(source.color, label)}  ${level?.color?.let { paint(it, levelText) } ?: paint("2", levelText)}  $loggerText$body"
    }

    private fun paint(
        code: String?,
        text: String,
    ): String = if (color && code != null) "\u001B[${code}m$text\u001B[0m" else text
}

internal fun useColor(environment: Map<String, String>): Boolean =
    environment["NO_COLOR"].isNullOrEmpty() && environment["CI"].isNullOrEmpty() && environment["TERM"] != "dumb"
