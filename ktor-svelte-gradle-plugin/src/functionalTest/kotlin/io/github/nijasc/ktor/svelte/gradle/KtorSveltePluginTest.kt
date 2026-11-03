package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.zip.ZipFile
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class KtorSveltePluginTest {
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

    private fun project(
        toolName: String = "bun",
        lockfile: String = "bun.lock",
    ) = TestProject(dir, toolName, lockfile).apply { buildScript(javaBuild) }

    @Test
    fun `jar contains frontend files and manifest`() {
        val project = project()
        val result = project.run("jar")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteInstall")?.outcome)
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteBuild")?.outcome)
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteBundle")?.outcome)
        assertEquals(listOf("install --frozen-lockfile", "run build"), project.calls())

        ZipFile(dir.resolve("build/libs/sample.jar")).use { jar ->
            assertNotNull(jar.getEntry("ktor-svelte/public/index.html"))
            assertNotNull(jar.getEntry("ktor-svelte/public/_app/immutable/app.js"))
            val manifest = jar.getInputStream(jar.getEntry("ktor-svelte/manifest.json")).readBytes().decodeToString()
            assertContains(manifest, "\"formatVersion\":1")
            assertContains(manifest, "\"index.html\":{\"size\":")
            assertContains(manifest, "\"_app/immutable/app.js\":{\"size\":")
        }
    }

    @Test
    fun `second run is up to date and does not call the tool`() {
        val project = project()
        project.run("jar")
        project.clearCalls()

        val result = project.run("jar")

        assertEquals(TaskOutcome.UP_TO_DATE, result.task(":svelteInstall")?.outcome)
        assertEquals(TaskOutcome.UP_TO_DATE, result.task(":svelteBuild")?.outcome)
        assertEquals(TaskOutcome.UP_TO_DATE, result.task(":svelteBundle")?.outcome)
        assertEquals(emptyList(), project.calls())
    }

    @Test
    fun `configuration cache is stored and reused`() {
        val project = project()
        val first = project.run("jar", "--configuration-cache")
        assertContains(first.output, "Configuration cache entry stored")

        val second = project.run("jar", "--configuration-cache")
        assertContains(second.output, "Configuration cache entry reused")
    }

    @Test
    fun `source change reruns the build but not the install`() {
        val project = project()
        project.run("jar")
        project.clearCalls()
        project.frontend.resolve("app.txt").writeText("changed")

        val result = project.run("jar")

        assertEquals(TaskOutcome.UP_TO_DATE, result.task(":svelteInstall")?.outcome)
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteBuild")?.outcome)
        assertEquals(listOf("run build"), project.calls())
    }

    @Test
    fun `lockfile change reruns the install`() {
        val project = project()
        project.run("jar")
        project.clearCalls()
        project.frontend.resolve("bun.lock").writeText("changed")

        val result = project.run("jar")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteInstall")?.outcome)
    }

    @Test
    fun `deleted node_modules reruns the install`() {
        val project = project()
        project.run("jar")
        project.frontend.resolve("node_modules").deleteRecursively()

        val result = project.run("jar")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteInstall")?.outcome)
    }

    @Test
    fun `declared build environment is a build input`() {
        val project = project()
        project.buildScript(
            javaBuild +
                """

                svelte {
                    buildEnv.add("PUBLIC_API_URL")
                }
                """.trimIndent(),
        )
        project.environment = mapOf("PUBLIC_API_URL" to "one")
        project.run("jar")

        project.environment = mapOf("PUBLIC_API_URL" to "two")
        val result = project.run("jar")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteBuild")?.outcome)
    }

    @Test
    fun `skip property skips every frontend task`() {
        val project = project()
        val result = project.run("jar", "-Psvelte.skip=true")

        assertEquals(TaskOutcome.SKIPPED, result.task(":svelteInstall")?.outcome)
        assertEquals(TaskOutcome.SKIPPED, result.task(":svelteBuild")?.outcome)
        assertEquals(TaskOutcome.SKIPPED, result.task(":svelteBundle")?.outcome)
        assertEquals(emptyList(), project.calls())
        assertContains(result.output, "building a JAR with the frontend build skipped")
    }

    @Test
    fun `dev property skips the frontend and enables Ktor development mode`() {
        val project = project()
        project.buildScript(
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
            """.trimIndent(),
        )
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText(
            """
            public class Main {
                public static void main(String[] args) {
                    System.out.println("development=" + System.getProperty("io.ktor.development"));
                }
            }
            """.trimIndent(),
        )

        val result = project.run("run", "-Psvelte.dev=true")

        assertContains(result.output, "development=true")
        assertEquals(TaskOutcome.SKIPPED, result.task(":svelteBuild")?.outcome)
        assertEquals(emptyList(), project.calls())
    }

    @Test
    fun `npm uses ci and is detected from its lockfile`() {
        val project = project(toolName = "npm", lockfile = "package-lock.json")
        project.run("jar")
        assertEquals(listOf("ci", "run build"), project.calls())
    }

    @Test
    fun `svelteDev passes the configured port to the dev script`() {
        val project = project(toolName = "npm", lockfile = "package-lock.json")
        project.buildScript(
            javaBuild +
                """

                svelte {
                    dev {
                        port = 6000
                        script = "start"
                    }
                }
                """.trimIndent(),
        )

        project.run("svelteDev")

        assertEquals(listOf("ci", "run start -- --port 6000 --strictPort"), project.calls())
    }

    @Test
    fun `missing tool fails with a useful message`() {
        val project = project(toolName = "ktor-svelte-missing-tool")
        project.frontend.resolve("bun.lock").delete()
        project.frontend.resolve("yarn.lock").writeText("")
        project.buildScript(
            javaBuild +
                """

                svelte {
                    packageManager = io.github.nijasc.ktor.svelte.gradle.PackageManager.PNPM
                }
                """.trimIndent(),
        )
        val pathWithoutPnpm = mapOf("PATH" to dir.resolve("fake-bin").path)
        project.environment = pathWithoutPnpm

        val result = project.runAndFail("jar")

        assertContains(result.output, "could not find pnpm on PATH")
    }

    @Test
    fun `missing lockfile fails with a useful message`() {
        val project = project()
        project.frontend.resolve("bun.lock").delete()

        val result = project.runAndFail("jar")

        assertContains(result.output, "found no lockfile")
    }

    @Test
    fun `build without html fails with a useful message`() {
        val project = project()
        project.buildScript(
            javaBuild +
                """

                svelte {
                    outputDir = "dist"
                }
                """.trimIndent(),
        )

        val result = project.runAndFail("jar")

        assertContains(result.output, "found no HTML files")
    }

    @Test
    fun `output directory outside the frontend is rejected`() {
        val project = project()
        project.buildScript(
            javaBuild +
                """

                svelte {
                    outputDir = "../outside"
                }
                """.trimIndent(),
        )

        val result = project.runAndFail("jar")

        assertContains(result.output, "must be a path inside svelte.frontendDir")
    }

    @Test
    fun `clean removes generated output and keeps node_modules`() {
        val project = project()
        project.run("jar")
        assertTrue(project.frontend.resolve("build/index.html").isFile)

        project.run("clean")

        assertFalse(project.frontend.resolve("build").exists())
        assertFalse(dir.resolve("build").exists())
        assertTrue(project.frontend.resolve("node_modules").isDirectory)
    }

    @Test
    fun `precompressed files become encodings of the original`() {
        val project = project()
        project.run("jar")
        project.frontend.resolve("build/index.html.br").writeText("compressed")
        project.frontend.resolve("build/index.html.gz").writeText("compressed!")

        project.run("svelteBundle", "-x", "svelteBuild")

        val manifest = dir.resolve("build/generated/ktor-svelte/resources/ktor-svelte/manifest.json").readText()
        assertContains(manifest, "\"encodings\":{\"br\":{\"size\":10},\"gzip\":{\"size\":11}}")
        assertFalse(manifest.contains("\"index.html.br\":"))
    }

    @Test
    fun `runtime dependency uses the plugin version and can be disabled`() {
        val printDependencies =
            """

            tasks.register("printDependencies") {
                val names = configurations.runtimeClasspath.get().incoming.dependencies.map { it.group + ":" + it.name }
                doLast { println("dependencies=" + names) }
            }
            """.trimIndent()
        val project = TestProject(dir)
        project.buildScript(
            """
            plugins {
                java
                id("io.github.nijasc.ktor-svelte")
            }
            """.trimIndent() + printDependencies,
        )
        assertContains(project.run("printDependencies").output, "dependencies=[io.github.nijasc:ktor-svelte-server]")

        project.buildScript(javaBuild + printDependencies)
        assertContains(project.run("printDependencies").output, "dependencies=[]")
    }
}
