package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.time.LocalTime
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class DevLogOwnFramesTest {
    @TempDir
    lateinit var dir: File

    private fun source(
        path: String,
        packageName: String?,
    ): File =
        dir.resolve("src/main/kotlin/$path").apply {
            parentFile.mkdirs()
            writeText((packageName?.let { "package $it\n\n" } ?: "") + "fun placeholder() = Unit\n")
        }

    private fun formatter(color: Boolean = false) =
        DevLogFormatter(color, now = { LocalTime.of(9, 5, 7) }, sourceDirectories = listOf(dir.resolve("src/main/kotlin")))

    private fun DevLogFormatter.all(lines: List<String>) =
        (lines.mapNotNull { format(LogSource.APP, it) } + listOfNotNull(flushStackTrace())).flatMap { it.lines() }

    private val trace =
        listOf(
            "09:28:32.120 ERROR app.Errors Request failed",
            "java.lang.IllegalStateException: No such note",
            "\tat io.ktor.utils.io.ByteChannel.getClosedCause(ByteChannel.kt:350)",
            "\tat app.notes.NoteStore.find(NoteStore.kt:42)",
            "\tat app.notes.RoutesKt\$noteRoutes\$1.invokeSuspend(Routes.kt:17)",
            "\tat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:100)",
            "\tat other.library.Routes.handle(Routes.kt:9)",
            "Caused by: java.sql.SQLException: closed",
            "\tat org.sqlite.Database.query(Database.java:88)",
            "\tat app.notes.NoteStore.find(NoteStore.kt:40)",
            "\t... 12 more",
        )

    @Test
    fun `frames from the app's own sources are named first, with a link to the line`() {
        val store = source("app/notes/NoteStore.kt", "app.notes")
        val routes = source("Routes.kt", "app.notes")
        assertEquals(
            listOf(
                "09:28:32  app      ERROR  Errors Request failed",
                "09:05:07  app             java.lang.IllegalStateException: No such note",
                "09:05:07  app                 your code: app.notes.NoteStore.find  ${fileUrl(store)}:42",
                "09:05:07  app                 your code: app.notes.RoutesKt\$noteRoutes\$1.invokeSuspend  ${fileUrl(routes)}:17",
                "09:05:07  app             \tat io.ktor.utils.io.ByteChannel.getClosedCause(ByteChannel.kt:350)",
                "09:05:07  app             \tat app.notes.NoteStore.find(NoteStore.kt:42)",
                "09:05:07  app             \tat app.notes.RoutesKt\$noteRoutes\$1.invokeSuspend(Routes.kt:17)",
                "09:05:07  app             \t... framework frames hidden",
                "09:05:07  app             \tat other.library.Routes.handle(Routes.kt:9)",
                "09:05:07  app             Caused by: java.sql.SQLException: closed",
                "09:05:07  app                 your code: app.notes.NoteStore.find  ${fileUrl(store)}:40",
                "09:05:07  app             \tat org.sqlite.Database.query(Database.java:88)",
                "09:05:07  app             \tat app.notes.NoteStore.find(NoteStore.kt:40)",
                "09:05:07  app             \t... 12 more",
            ),
            formatter().all(trace),
        )
    }

    @Test
    fun `library frames are dimmed and the app's own are not`() {
        source("app/notes/NoteStore.kt", "app.notes")
        val lines = formatter(color = true).all(trace)
        val dim = "\u001B[2m"
        assertTrue(lines.single { "ByteChannel.getClosedCause" in it }.contains("$dim\tat io.ktor"))
        assertTrue(lines.single { "framework frames hidden" in it }.contains("$dim\t... framework"))
        assertTrue(lines.single { "other.library.Routes" in it }.contains("$dim\tat other.library"))
        assertTrue(lines.first { "\tat app.notes.NoteStore.find" in it }.endsWith("  \tat app.notes.NoteStore.find(NoteStore.kt:42)"))
    }

    @Test
    fun `a stack trace waits for its frames and comes out with the next log line or a flush`() {
        source("app/notes/NoteStore.kt", "app.notes")
        val log = formatter()
        assertEquals("09:28:32  app      ERROR  Errors Request failed", log.format(LogSource.APP, trace[0]))
        trace.subList(1, 5).forEach { assertNull(log.format(LogSource.APP, it), it) }
        val next = log.format(LogSource.APP, "09:28:33.000 INFO  app.Main Still serving")!!.lines()
        assertEquals("09:05:07  app             java.lang.IllegalStateException: No such note", next.first())
        assertEquals("09:28:33  app      INFO   Main Still serving", next.last())
        assertEquals(6, next.size)
        assertNull(log.flushStackTrace())

        log.format(LogSource.APP, "09:28:34.000 ERROR app.Errors Another request failed")
        assertNull(log.format(LogSource.APP, trace[1]))
        assertEquals(listOf("09:05:07  app             java.lang.IllegalStateException: No such note"), log.flushStackTrace()?.lines())
        assertEquals(
            "09:05:07  app             \tat app.notes.NoteStore.find(NoteStore.kt:42)",
            log.format(LogSource.APP, trace[3]),
            "a frame that arrives after the flush is printed as it comes",
        )
    }

    @Test
    fun `at most three own frames are named first and a repeated one counts once`() {
        source("app/notes/NoteStore.kt", "app.notes")
        val frames = listOf(42, 42, 43, 44, 45).map { "\tat app.notes.NoteStore.find(NoteStore.kt:$it)" }
        val lines = formatter().all(listOf(trace[0], trace[1]) + frames)
        assertEquals(listOf("42", "43", "44"), lines.filter { "your code: " in it }.map { it.substringAfterLast(':') })
        assertEquals(5, lines.count { "\tat app.notes.NoteStore.find" in it })
    }

    @Test
    fun `a frame is only the app's own when file name and package both match a source file`() {
        val index = SourceIndex(listOf(dir.resolve("src/main/kotlin")))
        val store = source("app/notes/NoteStore.kt", "app.notes")
        val script = source("Main.kt", null)
        assertEquals(OwnFrame("app.notes.NoteStore.find", store, 42), index.ownFrame("\tat app.notes.NoteStore.find(NoteStore.kt:42)"))
        assertEquals(OwnFrame("MainKt.main", script, 3), index.ownFrame("\tat MainKt.main(Main.kt:3)"))
        assertEquals(store, index.ownFrame("\tat app//app.notes.NoteStore\$Companion.find(NoteStore.kt:7)")?.file)
        assertNull(index.ownFrame("\tat other.pkg.NoteStore.find(NoteStore.kt:42)"))
        assertNull(index.ownFrame("\tat app.notes.Missing.find(Missing.kt:1)"))
        assertNull(index.ownFrame("\tat app.notes.NoteStore.find(Unknown Source)"))
        assertNull(index.ownFrame("java.lang.IllegalStateException: at app.notes"))
        assertNull(SourceIndex(emptyList()).ownFrame("\tat app.notes.NoteStore.find(NoteStore.kt:42)"))
    }

    @Test
    fun `a source file created while the task runs is found after a moment`() {
        var time = 0L
        val index = SourceIndex(listOf(dir.resolve("src/main/kotlin")), now = { time })
        source("app/A.kt", "app")
        assertEquals("A.kt", index.ownFrame("\tat app.A.run(A.kt:1)")?.file?.name)
        source("app/B.kt", "app")
        time = 1_000
        assertNull(index.ownFrame("\tat app.B.run(B.kt:1)"))
        time = 6_000
        assertEquals("B.kt", index.ownFrame("\tat app.B.run(B.kt:1)")?.file?.name)
    }
}
