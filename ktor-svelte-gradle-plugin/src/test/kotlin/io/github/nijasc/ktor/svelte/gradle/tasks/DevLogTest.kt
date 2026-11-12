package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.time.LocalTime
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class DevLogTest {
    private val project = File("/work/shop")
    private val log = DevLogFormatter(color = false, projectDirectory = project, now = { LocalTime.of(9, 5, 7) })

    @Test
    fun `app lines keep their time and level and drop the noise`() {
        assertEquals(
            "10:03:35  app      INFO   Application started in 0.983 seconds.",
            log.format(LogSource.APP, "10:03:35.436 INFO  i.k.s.Application Application started in 0.983 seconds."),
        )
        assertEquals(
            "10:03:36  app      WARN   Routes slow API call",
            log.format(LogSource.APP, "10:03:36.001 WARN  shop.Routes slow API call"),
        )
        assertEquals("09:05:07  app             \tat shop.Routes.kt:12", log.format(LogSource.APP, "\tat shop.Routes.kt:12"))
        assertNull(log.format(LogSource.APP, "Listening for transport dt_socket at address: 5005"))
    }

    @Test
    fun `browser logs from the app get their own source`() {
        assertEquals(
            "10:00:01  browser  WARN   Missing translation [/notes]",
            log.format(LogSource.APP, "10:00:01.000 WARN  ktor-svelte.browser Missing translation [/notes]"),
        )
    }

    @Test
    fun `vite loses its colors, banner and duplicate timestamps`() {
        assertNull(log.format(LogSource.VITE, "$ vite dev --port \"5173\" --strictPort"))
        assertNull(log.format(LogSource.VITE, "  \u001B[32m➜\u001B[39m  \u001B[1mLocal\u001B[22m:   http://localhost:5173/"))
        assertNull(log.format(LogSource.VITE, "   "))
        assertEquals(
            "09:05:07  vite     INFO   ready in 1772 ms",
            log.format(LogSource.VITE, "  \u001B[32mVITE v8.3.6\u001B[39m  ready in 1772 ms"),
        )
        assertEquals(
            "09:05:07  vite     INFO   (ssr) connected.",
            log.format(LogSource.VITE, "\u001B[2m10:03:35\u001B[22m \u001B[36m[vite]\u001B[39m (ssr) connected."),
        )
        assertEquals(
            "09:05:07  vite     ERROR  Internal server error: boom",
            log.format(LogSource.VITE, "10:03:35 [vite] Internal server error: boom"),
        )
    }

    @Test
    fun `kotlin builds become compiling, compiled or a count of errors`() {
        assertNull(log.format(LogSource.KOTLIN, "Waiting for changes to input files..."))
        assertEquals("09:05:07  kotlin   INFO   compiling", log.format(LogSource.KOTLIN, "Change detected, executing build..."))
        assertNull(log.format(LogSource.KOTLIN, "modified: /work/shop/src/main/kotlin/shop/Routes.kt"))
        assertEquals(
            "09:05:07  kotlin   ERROR  src/main/kotlin/shop/Routes.kt:24:23 Unresolved reference 'x'.",
            log.format(LogSource.KOTLIN, "e: ${File(project, "src/main/kotlin/shop/Routes.kt").toURI()}:24:23 Unresolved reference 'x'."),
        )
        assertNull(log.format(LogSource.KOTLIN, "FAILURE: Build failed with an exception."))
        assertNull(log.format(LogSource.KOTLIN, "         Unresolved reference 'x'."))
        assertEquals(
            "09:05:07  kotlin   ERROR  does not compile: 1 error",
            log.format(LogSource.KOTLIN, "Waiting for changes to input files..."),
        )
        log.format(LogSource.KOTLIN, "Change detected, executing build...")
        assertEquals("09:05:07  kotlin   INFO   compiled", log.format(LogSource.KOTLIN, "Waiting for changes to input files..."))
    }

    @Test
    fun `colors are off in CI, with NO_COLOR or a dumb terminal`() {
        assertTrue(useColor(emptyMap()))
        assertFalse(useColor(mapOf("CI" to "true")))
        assertFalse(useColor(mapOf("NO_COLOR" to "1")))
        assertFalse(useColor(mapOf("TERM" to "dumb")))
        val colored = DevLogFormatter(color = true, now = { LocalTime.NOON }).format(LogSource.VITE, "boom error")!!
        assertTrue(colored.contains("\u001B[33mvite"))
        assertTrue(colored.contains("\u001B[31mERROR"))
    }
}
