package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class CompileErrorsTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `compiler lines become file, line, column and message`() {
        val file = File(dir, "Routes.kt")
        val error = parseCompileError("e: ${file.toURI()}:12:5 Unresolved reference 'notes'.")
        assertEquals(CompileError(file.path, 12, 5, "Unresolved reference 'notes'."), error)
        assertEquals(CompileError("src/App.kt", 1, 2, "Syntax error."), parseCompileError("e: src/App.kt:1:2 Syntax error."))
        assertNull(parseCompileError("w: file:///Routes.kt:1:1 Parameter 'x' is never used."))
        assertNull(parseCompileError("BUILD FAILED in 2s"))
    }

    @Test
    fun `each finished build replaces the reported errors`() {
        val output = File(dir, "build/ktor-svelte/compile-errors.json")
        val report = CompileErrorReport(output)
        assertEquals("[]", output.readText())

        report.onLine("e: src/App.kt:3:9 Unresolved reference 'x'.")
        assertEquals("[]", output.readText())
        report.onLine("Waiting for changes to input files...")
        assertEquals("""[{"file":"src/App.kt","line":3,"column":9,"message":"Unresolved reference 'x'."}]""", output.readText())

        report.onLine("Waiting for changes to input files...")
        assertEquals("[]", output.readText())
    }
}
