package io.github.nijasc.ktor.svelte.gradle

import org.junit.jupiter.api.io.TempDir
import java.io.File
import javax.xml.parsers.DocumentBuilderFactory
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class UtilityTasksTest {
    @TempDir
    lateinit var dir: File

    private val javaBuild =
        """
        plugins {
            java
            id("io.github.nijasc.ktor-svelte")
        }

        svelte {
            addRuntimeDependency = false
        }
        """.trimIndent()

    private val applicationBuild =
        """
        plugins {
            java
            application
            id("io.github.nijasc.ktor-svelte")
        }

        svelte {
            addRuntimeDependency = false
        }

        application {
            mainClass = "Main"
        }
        """.trimIndent()

    private fun project(
        toolName: String = "bun",
        lockfile: String = "bun.lock",
    ) = TestProject(dir, toolName, lockfile).apply { buildScript(javaBuild) }

    @Test
    fun `svelteClean deletes everything the frontend generated`() {
        val project = project()
        project.run("jar")
        project.frontend.resolve(".svelte-kit").mkdirs()

        project.run("svelteClean")

        assertFalse(project.frontend.resolve("node_modules").exists())
        assertFalse(project.frontend.resolve(".svelte-kit").exists())
        assertFalse(project.frontend.resolve("build").exists())
        assertTrue(project.frontend.resolve("package.json").exists())
    }

    @Test
    fun `svelteUpdateDependencies uses the command of each tool`() {
        val bun = project()
        bun.run("svelteUpdateDependencies")
        assertEquals(listOf("update"), bun.calls())
    }

    @Test
    fun `svelteUpdateDependencies uses upgrade for yarn`() {
        val yarn = project(toolName = "yarn", lockfile = "yarn.lock")
        yarn.run("svelteUpdateDependencies")
        assertEquals(listOf("upgrade"), yarn.calls())
    }

    @Test
    fun `svelteOutdated installs first and lists`() {
        val project = project()
        project.run("svelteOutdated")
        assertEquals(listOf("install --frozen-lockfile", "outdated"), project.calls())
    }

    @Test
    fun `svelteCheck runs the check script`() {
        val project = project()
        project.run("svelteCheck")
        assertEquals("run check", project.calls().last())
    }

    @Test
    fun `svelteRun runs the named script`() {
        val project = project()
        project.run("svelteRun", "--script=lint")
        assertEquals("run lint", project.calls().last())
    }

    @Test
    fun `svelteRun without a script explains what to do`() {
        val project = project()
        assertContains(project.runAndFail("svelteRun").output, "Name a package.json script")
    }

    @Test
    fun `run configurations are valid xml and include the compound for applications`() {
        val project = project()
        project.buildScript(applicationBuild)

        project.run("svelteGenerateRunConfigurations")

        val files =
            dir
                .resolve(".run")
                .listFiles()
                .orEmpty()
                .map { it.name }
                .toSet()
        assertTrue("Dev.run.xml" in files)
        assertTrue("Ktor.run.xml" in files)
        assertTrue("Vite.run.xml" in files)
        dir.resolve(".run").listFiles().orEmpty().forEach { file ->
            DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(file)
        }
        assertContains(dir.resolve(".run/Ktor.run.xml").readText(), "-Psvelte.dev=true")
        assertContains(dir.resolve(".run/Dev.run.xml").readText(), "toRun name=\"Vite\"")
    }

    @Test
    fun `run configurations leave out app tasks without the application plugin`() {
        val project = project()
        project.run("svelteGenerateRunConfigurations")
        val files =
            dir
                .resolve(".run")
                .listFiles()
                .orEmpty()
                .map { it.name }
        assertTrue("Vite.run.xml" in files)
        assertFalse("Dev.run.xml" in files)
    }

    @Test
    fun `existing run configurations are kept`() {
        val project = project()
        project.run("svelteGenerateRunConfigurations")
        dir.resolve(".run/Vite.run.xml").writeText("mine")

        project.run("svelteGenerateRunConfigurations")

        assertEquals("mine", dir.resolve(".run/Vite.run.xml").readText())
    }

    @Test
    fun `svelteInit creates a project and installs dependencies`() {
        val project = project()
        project.frontend
            .listFiles()
            .orEmpty()
            .forEach { it.delete() }

        project.run("svelteInit")

        assertTrue(project.frontend.resolve("package.json").isFile)
        assertTrue(project.frontend.resolve("vite.config.ts").isFile)
        assertTrue(project.frontend.resolve(".gitignore").isFile)
        assertContains(project.frontend.resolve("package.json").readText(), "#lib/*")
        assertEquals(listOf("install"), project.calls())
    }

    @Test
    fun `svelteInit refuses a folder with files in it`() {
        val project = project()
        val output = project.runAndFail("svelteInit").output
        assertContains(output, "will not overwrite")
        assertEquals("{}", project.frontend.resolve("package.json").readText())
    }

    @Test
    fun `svelteInit rejects an unknown package manager`() {
        val project = project()
        project.frontend
            .listFiles()
            .orEmpty()
            .forEach { it.delete() }
        assertContains(project.runAndFail("svelteInit", "--package-manager=deno").output, "Unknown package manager")
    }

    @Test
    fun `svelteDoctor fails with what to fix`() {
        val project = project()
        val output = project.runAndFail("svelteDoctor").output
        assertContains(output, "OK    Package manager bun is on PATH")
        assertContains(output, "ERROR @sveltejs/kit is not a dependency")
    }

    @Test
    fun `svelteGenerateTs does not build the frontend first`() {
        val project = project()
        project.buildScript(applicationBuild)
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText(
            """
            public class Main {
                public static void main(String[] args) {
                    System.out.println("only=" + System.getProperty("ktor.svelte.generateTsOnly"));
                    System.out.println("frontend=" + System.getProperty("ktor.svelte.frontendDir"));
                }
            }
            """.trimIndent(),
        )

        val output = project.run("svelteGenerateTs").output

        assertContains(output, "only=true")
        assertContains(output, "frontend=")
        assertEquals(emptyList(), project.calls())
    }
}
