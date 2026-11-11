package io.github.nijasc.ktor.svelte.gradle

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertFalse

class GroovyDslTest {
    @TempDir
    lateinit var dir: File

    private fun groovyProject(svelteBlock: String): TestProject {
        val project = TestProject(dir)
        dir.resolve("build.gradle.kts").delete()
        dir.resolve("build.gradle").writeText(
            """
            plugins {
                id 'java'
                id 'io.github.nijasc.ktor-svelte'
            }

            svelte {
            $svelteBlock
            }

            tasks.register('showSettings') {
                def frontend = svelte.frontendDir
                def port = svelte.dev.port
                def summary = project.description
                doLast {
                    println "frontend=" + frontend.get().asFile.name
                    println "port=" + port.get()
                    println "description=" + summary
                }
            }
            """.trimIndent(),
        )
        return project
    }

    @Test
    fun `a misspelled setting names the closest one`() {
        val result = groovyProject("fronendDir = file('frontend')").runAndFail("help")
        assertContains(result.output, "ktor-svelte has no setting 'fronendDir' in svelte { }. Did you mean 'frontendDir'?")
    }

    @Test
    fun `a misspelled nested setting names the closest one`() {
        val result = groovyProject("dev { prot = 5174 }").runAndFail("help")
        assertContains(result.output, "ktor-svelte has no setting 'prot' in dev { }. Did you mean 'port'?")
    }

    @Test
    fun `project methods and properties still work inside the block`() {
        val result =
            groovyProject(
                """
                frontendDir = layout.projectDirectory.dir(file('frontend').name)
                dev { port = rootProject.name.length() + 5170 }
                description = "web " + version
                """.trimIndent(),
            ).run("showSettings")
        assertContains(result.output, "frontend=frontend")
        assertContains(result.output, "port=5176")
        assertContains(result.output, "description=web unspecified")
        assertFalse(result.output.contains("has no setting"))
    }
}
