package io.github.nijasc.ktor.svelte.test

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class TestRecorderTest {
    @Test
    fun `the recorder is Playwright's own, asked for a JUnit test in a file`() {
        assertEquals(
            listOf(
                "java",
                "-cp",
                "a.jar",
                "com.microsoft.playwright.CLI",
                "codegen",
                "--target",
                "java-junit",
                "-o",
                File("out/Recorded.java").path,
                "-b",
                "firefox",
                "http://localhost:1234",
            ),
            recorderCommand("java", "a.jar", File("out/Recorded.java"), "firefox", "http://localhost:1234"),
        )
    }
}
