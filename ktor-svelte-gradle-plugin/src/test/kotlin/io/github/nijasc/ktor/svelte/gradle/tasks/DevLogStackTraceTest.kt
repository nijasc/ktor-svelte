package io.github.nijasc.ktor.svelte.gradle.tasks

import java.time.LocalTime
import kotlin.test.Test
import kotlin.test.assertEquals

class DevLogStackTraceTest {
    private fun formatter(fold: Boolean = true) = DevLogFormatter(color = false, now = { LocalTime.of(9, 5, 7) }, foldStackTraces = fold)

    private fun trace(time: String) =
        listOf(
            "$time.120 ERROR lol.rednode.Errors Request failed",
            "io.ktor.utils.io.ClosedByteChannelException: Cannot write to channel",
            "\tat io.ktor.utils.io.ByteChannel.getClosedCause(ByteChannel.kt:350)",
            "\tat lol.rednode.Routes.list(Routes.kt:42)",
            "\tat kotlinx.coroutines.flow.SharedFlowImpl.collect(SharedFlow.kt:397)",
            "\tat kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)",
            "\tat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:100)",
            "\tat lol.rednode.Application.module(Application.kt:12)",
            "\tat io.netty.util.concurrent.SingleThreadEventExecutor.runAllTasks(SingleThreadEventExecutor.java:535)",
            "\tat java.base/java.lang.Thread.run(Thread.java:1583)",
            "Caused by: io.netty.channel.StacklessClosedChannelException",
            "\tat io.netty.channel.AbstractChannel.write(Unknown Source)",
        )

    private fun DevLogFormatter.all(lines: List<String>) = lines.mapNotNull { format(LogSource.APP, it) }

    @Test
    fun `framework frames collapse into one line per run and your own frames stay`() {
        assertEquals(
            listOf(
                "09:28:32  app      ERROR  Errors Request failed",
                "09:05:07  app             io.ktor.utils.io.ClosedByteChannelException: Cannot write to channel",
                "09:05:07  app             \tat io.ktor.utils.io.ByteChannel.getClosedCause(ByteChannel.kt:350)",
                "09:05:07  app             \tat lol.rednode.Routes.list(Routes.kt:42)",
                "09:05:07  app             \t... framework frames hidden",
                "09:05:07  app             \tat lol.rednode.Application.module(Application.kt:12)",
                "09:05:07  app             \t... framework frames hidden",
                "09:05:07  app             Caused by: io.netty.channel.StacklessClosedChannelException",
                "09:05:07  app             \t... framework frames hidden",
            ),
            formatter().all(trace("09:28:32")),
        )
    }

    @Test
    fun `the same error again shows one line instead of its stack trace`() {
        val log = formatter()
        log.all(trace("09:28:32"))
        assertEquals(
            listOf(
                "09:28:33  app      ERROR  Errors Request failed",
                "09:05:07  app             io.ktor.utils.io.ClosedByteChannelException: Cannot write to channel  " +
                    "(seen 2 times since 09:28:32, stack trace hidden)",
            ),
            log.all(trace("09:28:33")),
        )
        assertEquals(
            "09:05:07  app             io.ktor.utils.io.ClosedByteChannelException: Cannot write to channel  " +
                "(seen 3 times since 09:28:32, stack trace hidden)",
            log.all(trace("09:28:40")).last(),
        )
        assertEquals(
            "09:29:00  app      INFO   Routes back to normal",
            log.format(LogSource.APP, "09:29:00.001 INFO  lol.rednode.Routes back to normal"),
        )
    }

    @Test
    fun `a different error or a different message is shown in full`() {
        val log = formatter()
        log.all(trace("09:28:32"))
        val other = trace("09:28:33").toMutableList().also { it[1] = "java.lang.IllegalStateException: boom" }
        assertEquals(9, log.all(other).size)
        val otherMessage = trace("09:28:34").toMutableList().also { it[0] = "09:28:34.120 ERROR lol.rednode.Errors Upload failed" }
        assertEquals(9, log.all(otherMessage).size)
    }

    @Test
    fun `a restart shows the stack trace again`() {
        val log = formatter()
        log.all(trace("09:28:32"))
        log.format(LogSource.APP, "09:30:00.000 INFO  i.k.s.Application Application started in 0.9 seconds.")
        assertEquals(9, log.all(trace("09:30:05")).size)
    }

    @Test
    fun `lines that follow an ordinary message are untouched`() {
        val log = formatter()
        assertEquals(
            listOf(
                "09:52:56  app      INFO   ktor-svelte settings:",
                "09:05:07  app               API prefixes: /api",
                "09:05:07  app               Dev proxy: http://localhost:5173",
            ),
            log.all(
                listOf(
                    "09:52:56.000 INFO  i.k.s.Application ktor-svelte settings:",
                    "  API prefixes: /api",
                    "  Dev proxy: http://localhost:5173",
                ),
            ),
        )
    }

    @Test
    fun `folding can be turned off`() {
        val log = formatter(fold = false)
        assertEquals(12, log.all(trace("09:28:32")).size)
        assertEquals(12, log.all(trace("09:28:33")).size)
    }
}
