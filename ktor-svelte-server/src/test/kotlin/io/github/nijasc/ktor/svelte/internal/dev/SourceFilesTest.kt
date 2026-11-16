package io.github.nijasc.ktor.svelte.internal.dev

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class SourceFilesTest {
    @TempDir
    lateinit var dir: File

    private fun file(path: String): String =
        dir
            .resolve(path)
            .apply {
                parentFile.mkdirs()
                writeText("fun placeholder() = Unit\n")
            }.absoluteFile.invariantSeparatorsPath

    @Test
    fun `a route's file is found by its package path, in any module`() {
        val routes = file("app/src/main/kotlin/notes/Routes.kt")
        file("app/src/main/kotlin/tasks/Routes.kt")
        file("app/build/generated/notes/Routes.kt")
        file("frontend/node_modules/pkg/notes/Routes.kt")
        file(".gradle/notes/Routes.kt")

        assertEquals(routes, SourceFiles(dir).pathOf("notes/Routes.kt"))
    }

    @Test
    fun `with flat packages the file name decides, when only one file has it`() {
        val flat = file("src/main/kotlin/Routes.kt")
        val sources = SourceFiles(dir)
        assertEquals(flat, sources.pathOf("com/example/app/Routes.kt"))

        file("src/main/kotlin/admin/Routes.kt")
        assertNull(SourceFiles(dir).pathOf("com/example/app/Routes.kt"), "two candidates and no way to tell them apart")
        assertNull(sources.pathOf("com/example/app/Missing.kt"))
    }

    @Test
    fun `a file created later is found after a moment, without walking the project on every call`() {
        var time = 0L
        val sources = SourceFiles(dir, now = { time })
        assertNull(sources.pathOf("notes/Routes.kt"))
        val created = file("src/main/kotlin/notes/Routes.kt")
        time = 1_000
        assertNull(sources.pathOf("notes/Routes.kt"))
        time = 6_000
        assertEquals(created, sources.pathOf("notes/Routes.kt"))
    }
}
