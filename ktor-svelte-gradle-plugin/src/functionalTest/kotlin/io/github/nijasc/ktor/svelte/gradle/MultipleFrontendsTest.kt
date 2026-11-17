package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.zip.ZipFile
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

class MultipleFrontendsTest {
    @TempDir
    lateinit var dir: File

    private fun project(frontends: String): TestProject {
        val project = TestProject(dir)
        listOf("admin", "reports").forEach { name ->
            dir.resolve(name).mkdirs()
            dir.resolve("$name/package.json").writeText("{}")
            dir.resolve("$name/bun.lock").writeText("lock")
        }
        project.buildScript(
            """
            plugins {
                java
                id("io.github.nijasc.ktor-svelte")
            }

            svelte {
                addRuntimeDependency = false
                $frontends
            }
            """.trimIndent(),
        )
        return project
    }

    @Test
    fun `each frontend is installed, built and packaged under its own resource folder`() {
        val project = project("frontend(\"admin\")\n    frontend(\"reports\") { basePath = \"/admin/reports\" }")
        val result = project.run("jar")

        listOf("svelteInstallAdmin", "svelteBuildAdmin", "svelteBundleAdmin", "svelteBundleReports", "svelteBundle").forEach { name ->
            assertEquals(TaskOutcome.SUCCESS, result.task(":$name")?.outcome, name)
        }
        assertEquals(3, project.calls().count { it == "run build" })
        ZipFile(dir.resolve("build/libs/sample.jar")).use { jar ->
            assertNotNull(jar.getEntry("ktor-svelte/public/index.html"))
            assertNotNull(jar.getEntry("ktor-svelte/frontends/admin/public/index.html"))
            assertNotNull(jar.getEntry("ktor-svelte/frontends/admin/public/_app/immutable/app.js"))
            assertNotNull(jar.getEntry("ktor-svelte/frontends/admin-reports/manifest.json"))
            val manifest = jar.getInputStream(jar.getEntry("ktor-svelte/frontends/admin/manifest.json")).readBytes().decodeToString()
            assertContains(manifest, "\"index.html\":{\"size\":")
        }
        assertContains(result.output, "no page of the frontend")
        assertContains(result.output, "/admin/_app/")
    }

    @Test
    fun `a project without frontends registers no frontend tasks`() {
        val result = project("").run("tasks", "--all")
        assertEquals(false, "svelteBuildAdmin" in result.output)
    }

    @Test
    fun `a frontend name must be a plain lowercase name`() {
        val result = project("frontend(\"Admin Area\")").runAndFail("help")
        assertContains(result.output, "a frontend name has lowercase letters, digits and single dashes")
    }
}
