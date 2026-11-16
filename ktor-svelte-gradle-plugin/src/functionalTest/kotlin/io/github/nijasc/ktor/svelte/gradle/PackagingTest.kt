package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.zip.ZipFile
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class PackagingTest {
    @TempDir
    lateinit var dir: File

    private val kotlinVersion = System.getProperty("ktorSvelte.kotlinVersion")
    private val shadowVersion = System.getProperty("ktorSvelte.shadowVersion")
    private val ktorVersion = System.getProperty("ktorSvelte.ktorVersion")

    private fun projectWith(
        plugins: String,
        extra: String = "",
    ): TestProject {
        val project = TestProject(dir)
        project.buildScript(
            """
            plugins {
                kotlin("jvm") version "$kotlinVersion"
                $plugins
                id("io.github.nijasc.ktor-svelte")
            }

            repositories {
                mavenCentral()
            }

            svelte {
                addRuntimeDependency = false
            }

            $extra
            """.trimIndent(),
        )
        return project
    }

    private fun assertContainsFrontend(jarFile: File) {
        ZipFile(jarFile).use { jar ->
            assertNotNull(jar.getEntry("ktor-svelte/manifest.json"), "manifest missing from ${jarFile.name}")
            assertNotNull(jar.getEntry("ktor-svelte/public/index.html"), "index.html missing from ${jarFile.name}")
            assertNotNull(jar.getEntry("ktor-svelte/public/_app/immutable/app.js"), "asset missing from ${jarFile.name}")
        }
    }

    @Test
    fun `kotlin jvm project packages the frontend into jar`() {
        val project = projectWith(plugins = "")

        val result = project.run("jar")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteBundle")?.outcome)
        assertContainsFrontend(dir.resolve("build/libs/sample.jar"))
    }

    @Test
    fun `shadow jar contains the frontend`() {
        val project =
            projectWith(
                plugins = "id(\"com.gradleup.shadow\") version \"$shadowVersion\"",
            )

        project.run("shadowJar")

        assertContainsFrontend(dir.resolve("build/libs/sample-all.jar"))
    }

    @Test
    fun `ktor buildFatJar contains the frontend`() {
        val project =
            projectWith(
                plugins = "id(\"io.ktor.plugin\") version \"$ktorVersion\"",
                extra =
                    """
                    application {
                        mainClass = "Main"
                    }
                    """.trimIndent(),
            )

        project.run("buildFatJar")

        assertContainsFrontend(dir.resolve("build/libs/sample-all.jar"))
    }

    private fun git(vararg arguments: String): Boolean =
        runCatching {
            ProcessBuilder(listOf("git", "-c", "user.name=test", "-c", "user.email=test@example.com", *arguments))
                .directory(dir)
                .redirectErrorStream(true)
                .start()
                .apply { inputStream.readBytes() }
                .waitFor() == 0
        }.getOrDefault(false)

    private fun buildInfoIn(jarFile: File): String =
        ZipFile(jarFile).use { jar ->
            val entry = assertNotNull(jar.getEntry("ktor-svelte/build-info.properties"), "build info missing from ${jarFile.name}")
            jar.getInputStream(entry).reader().readText()
        }

    @Test
    fun `the jar says which version it is, without a repository too`() {
        val project = projectWith("", extra = "version = \"1.4.0\"")
        project.run("jar", "--configuration-cache")
        assertEquals("version=1.4.0\n", buildInfoIn(dir.resolve("build/libs/sample-1.4.0.jar")))
    }

    @Test
    fun `the jar names the commit it was built from`() {
        val project = projectWith("", extra = "version = \"1.4.0\"")
        dir.resolve(".gitignore").writeText("build/\n.gradle/\nfake-bin/\n")
        assumeTrue(git("init", "-q") && git("add", "-A") && git("commit", "-q", "-m", "first"))
        project.run("jar")
        val info = buildInfoIn(dir.resolve("build/libs/sample-1.4.0.jar")).lines()
        assertEquals("version=1.4.0", info[0])
        assertTrue(Regex("commit=[0-9a-f]{40}").matches(info[1]), info[1])
        assertTrue(Regex("""time=\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})""").matches(info[2]), info[2])
        assertEquals(TaskOutcome.UP_TO_DATE, project.run("jar").task(":svelteBuildInfo")?.outcome)
    }

    @Test
    fun `sources jar leaves the frontend out`() {
        val project =
            projectWith(
                plugins = "",
                extra =
                    """
                    java {
                        withSourcesJar()
                    }
                    """.trimIndent(),
            )

        project.run("sourcesJar")

        ZipFile(dir.resolve("build/libs/sample-sources.jar")).use { jar ->
            assertEquals(null, jar.getEntry("ktor-svelte/manifest.json"))
        }
    }
}
