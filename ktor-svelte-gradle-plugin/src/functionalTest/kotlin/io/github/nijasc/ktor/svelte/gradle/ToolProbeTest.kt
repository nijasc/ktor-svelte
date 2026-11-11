package io.github.nijasc.ktor.svelte.gradle

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals

class ToolProbeTest {
    @TempDir
    lateinit var dir: File

    private fun project() =
        TestProject(dir).apply {
            buildScript(
                """
                plugins {
                    java
                    id("io.github.nijasc.ktor-svelte")
                }

                svelte {
                    addRuntimeDependency = false
                }
                """.trimIndent(),
            )
        }

    @Test
    fun `configuring the build starts no frontend tool`() {
        val project = project()
        project.run("help", "--configuration-cache")
        project.run("compileJava", "--configuration-cache")
        assertEquals(emptyList(), project.allCalls())
    }

    @Test
    fun `a reused configuration cache entry starts no frontend tool`() {
        val project = project()
        project.run("svelteBuild", "--configuration-cache")
        project.clearCalls()
        val second = project.run("svelteBuild", "--configuration-cache")
        assertContains(second.output, "Configuration cache entry reused")
        assertEquals(emptyList(), project.allCalls())
    }
}
