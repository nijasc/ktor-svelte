package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.util.zip.ZipFile
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

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
