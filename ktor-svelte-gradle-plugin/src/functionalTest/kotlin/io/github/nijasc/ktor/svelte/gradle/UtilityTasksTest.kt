package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
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
    fun `deepClean runs clean and removes frontend caches but keeps sources`() {
        val project = project()
        project.run("jar")
        listOf(".svelte-kit", ".vite", ".turbo", ".cache").forEach { project.frontend.resolve(it).mkdirs() }
        project.frontend.resolve(".eslintcache").writeText("{}")
        val buildOutput = dir.resolve("build/marker").apply { parentFile.mkdirs() }
        buildOutput.writeText("x")
        val gradleMarker = dir.resolve(".gradle/stale-marker").apply { parentFile.mkdirs() }
        gradleMarker.writeText("x")
        val kotlinMarker = dir.resolve(".kotlin/sessions/marker").apply { parentFile.mkdirs() }
        kotlinMarker.writeText("x")

        project.run("deepClean")

        assertFalse(gradleMarker.exists())
        assertFalse(kotlinMarker.exists())

        listOf("node_modules", ".svelte-kit", ".vite", ".turbo", ".cache", ".eslintcache", "build").forEach {
            assertFalse(project.frontend.resolve(it).exists(), it)
        }
        assertFalse(buildOutput.exists())
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
    fun `svelteRun passes extra arguments to the script`() {
        val project = project()
        project.run("svelteRun", "--script=lint", "--args=--fix --quiet")
        assertEquals("run lint --fix --quiet", project.calls().last())
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
        assertContains(dir.resolve(".run/Dev.run.xml").readText(), "svelteDevAll")
        val debug = dir.resolve(".run/Debug app.run.xml").readText()
        assertContains(debug, "type=\"Remote\"")
        assertContains(debug, "value=\"5005\"")
        assertContains(debug, "AUTO_RESTART")
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
        assertFalse("Debug app.run.xml" in files)
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
        assertContains(project.frontend.resolve(".editorconfig").readText(), "end_of_line = lf")
        assertContains(project.frontend.resolve("package.json").readText(), "#api")
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
    fun `svelteDevAll stops everything when Vite stops`() {
        val project = project()
        project.buildScript(applicationBuild)
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText("public class Main { public static void main(String[] args) throws Exception { Thread.sleep(600000); } }")

        val output = project.run("svelteDevAll").output

        assertContains(output, "Vite stopped, so everything else is stopping too.")
        assertTrue(project.calls().contains("run dev --port 5173 --strictPort"))
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

    private fun verifyingApp(staleFile: String?): TestProject {
        val project = project()
        project.buildScript(applicationBuild)
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        val report =
            if (staleFile == null) {
                "\"\""
            } else {
                "new java.io.File(\"$staleFile\").getAbsolutePath() + System.lineSeparator()"
            }
        source.writeText(
            """
            public class Main {
                public static void main(String[] args) throws Exception {
                    System.out.println("development=" + System.getProperty("io.ktor.development"));
                    System.out.println("frontend=" + System.getProperty("ktor.svelte.frontendDir"));
                    String target = System.getProperty("ktor.svelte.generateTsVerify");
                    if (target != null) java.nio.file.Files.writeString(java.nio.file.Path.of(target), $report);
                }
            }
            """.trimIndent(),
        )
        return project
    }

    @Test
    fun `svelteVerifyTs exists only with the application plugin`() {
        val project = project()
        assertContains(project.runAndFail("svelteVerifyTs").output, "not found")
        project.buildScript(applicationBuild)
        assertContains(project.run("tasks", "--group=svelte").output, "svelteVerifyTs")
    }

    @Test
    fun `check verifies generated TypeScript and passes when it is up to date`() {
        val result = verifyingApp(staleFile = null).run("check", "--configuration-cache")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteVerifyTs")?.outcome)
        assertContains(result.output, "development=true")
        assertContains(result.output, "frontend=")
        assertContains(result.output, "generated TypeScript is up to date")
    }

    @Test
    fun `svelteVerifyTs lists stale files and says how to fix them`() {
        val output = verifyingApp(staleFile = "frontend/src/lib/api/types.ts").runAndFail("check").output

        assertContains(output, "Generated TypeScript is out of date: frontend/src/lib/api/types.ts.")
        assertContains(output, "Run svelteGenerateTs, or start the app in development mode, and commit the result.")
    }

    @Test
    fun `svelteVerifyTs passes when the app does not generate TypeScript`() {
        val project = project()
        project.buildScript(applicationBuild)
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText("public class Main { public static void main(String[] args) {} }")

        assertContains(project.run("svelteVerifyTs").output, "generateTs is off")
    }

    @Test
    fun `verifyTs property takes svelteVerifyTs out of check`() {
        val result = verifyingApp(staleFile = "frontend/src/lib/api/types.ts").run("check", "-Psvelte.verifyTs=false")

        assertEquals(null, result.task(":svelteVerifyTs"))
    }
}
