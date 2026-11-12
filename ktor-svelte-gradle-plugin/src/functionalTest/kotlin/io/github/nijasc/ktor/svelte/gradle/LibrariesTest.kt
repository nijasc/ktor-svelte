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

class LibrariesTest {
    @TempDir
    lateinit var dir: File

    private fun build(libraries: String): String =
        """
        import io.github.nijasc.ktor.svelte.gradle.DaisyTheme
        import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

        plugins {
            java
            id("io.github.nijasc.ktor-svelte")
        }

        svelte {
            addRuntimeDependency = false
            libraries {
                $libraries
            }
        }
        """.trimIndent()

    private fun project(libraries: String): TestProject {
        val project = TestProject(dir)
        project.buildScript(build(libraries))
        return project
    }

    private fun addLucide(project: TestProject) {
        val icons = project.frontend.resolve("node_modules/@lucide/svelte/dist/icons").apply { mkdirs() }
        listOf("house", "arrow-right", "3d-rotate").forEach { icons.resolve("$it.svelte").writeText("") }
    }

    private fun messages(project: TestProject) {
        val directory = project.frontend.resolve("messages").apply { mkdirs() }
        directory.resolve("en.json").writeText("""{"hello":"Hi {name}"}""")
        directory.resolve("de.json").writeText("""{"hello":"Hallo {name}"}""")
    }

    @Test
    fun `projects without libraries are not touched`() {
        val project = TestProject(dir)
        project.buildScript(
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
        val result = project.run("svelteSync", "jar")
        assertEquals(TaskOutcome.SKIPPED, result.task(":svelteSync")?.outcome)
        assertFalse(project.frontend.resolve("vite.config.ts").exists())
        assertEquals("{}", project.frontend.resolve("package.json").readText())
    }

    @Test
    fun `sync installs packages and writes files`() {
        val project = project("daisyUi { themes(DaisyTheme.Light, DaisyTheme.Dark) }")

        project.run("svelteSync")

        val manifest = project.frontend.resolve("package.json").readText()
        assertContains(manifest, "tailwindcss")
        assertContains(manifest, "daisyui")
        assertContains(manifest, "#theme")
        assertTrue(project.calls().contains("install"))
        assertTrue(project.frontend.resolve("vite.config.ts").isFile)
        assertContains(project.frontend.resolve("src/lib/ktor-svelte/app.css").readText(), "themes: light --default, dark --prefersdark;")
        assertContains(project.frontend.resolve("src/routes/+layout.svelte").readText(), "app.css")
    }

    @Test
    fun `build fails until synced and then passes`() {
        val project = project("tailwind()")

        val failure = project.runAndFail("jar").output
        assertContains(failure, "Frontend libraries are out of sync")
        assertContains(failure, "Run svelteSync")

        project.run("svelteSync")
        project.clearCalls()
        val result = project.run("jar")
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteVerifySync")?.outcome)
        assertFalse(project.calls().contains("install"))
    }

    @Test
    fun `second sync changes nothing and does not reinstall`() {
        val project = project("tailwind()")
        project.run("svelteSync")
        project.clearCalls()
        val output = project.run("svelteSync").output
        assertContains(output, "frontend libraries are in sync")
        assertEquals(emptyList(), project.calls())
    }

    @Test
    fun `removing a library removes its packages and files`() {
        val project =
            project(
                """
                tailwind()
                lucide()
                """.trimIndent(),
            )
        addLucide(project)
        project.run("svelteSync")
        assertTrue(project.frontend.resolve("src/lib/ktor-svelte/Icon.svelte").isFile)

        project.buildScript(build("tailwind()"))
        project.run("svelteSync")

        assertFalse(project.frontend.resolve("src/lib/ktor-svelte/Icon.svelte").exists())
        assertFalse(
            project.frontend
                .resolve("package.json")
                .readText()
                .contains("lucide"),
        )
        assertFalse(
            project.frontend
                .resolve("package.json")
                .readText()
                .contains("#icon"),
        )
        assertTrue(project.frontend.resolve("src/lib/ktor-svelte/app.css").isFile)
    }

    @Test
    fun `your own vite config is never overwritten`() {
        val project = project("tailwind()")
        project.frontend.resolve("vite.config.ts").writeText("mine")

        val output = project.runAndFail("svelteSync").output

        assertContains(output, "found your own version")
        assertContains(output, "vite.user.ts")
        assertEquals("mine", project.frontend.resolve("vite.config.ts").readText())
    }

    @Test
    fun `vite user config is merged`() {
        val project = project("tailwind()")
        project.frontend.resolve("vite.user.ts").writeText("export default {};")
        project.run("svelteSync")
        assertContains(project.frontend.resolve("vite.config.ts").readText(), "mergeConfig(config, userConfig)")
    }

    @Test
    fun `your own layout gets a warning instead of an edit`() {
        val project = project("tailwind()")
        val layout = project.frontend.resolve("src/routes/+layout.svelte")
        layout.parentFile.mkdirs()
        layout.writeText("mine")
        assertContains(project.run("svelteSync").output, "add import '#lib/ktor-svelte/app.css'")
        assertEquals("mine", layout.readText())
    }

    @Test
    fun `invalid config fails with a useful message`() {
        val project = project("i18n { locales(\"en\"); defaultLocale = \"de\" }")
        assertContains(project.runAndFail("svelteSync").output, "defaultLocale 'de' is not one of [en]")
    }

    @Test
    fun `messages must match across locales`() {
        val project = project("i18n { locales(\"en\", \"de\") }")
        messages(project)
        project.frontend.resolve("messages/de.json").writeText("{}")
        assertContains(project.runAndFail("svelteSync").output, "de is missing 'hello'.")
    }

    @Test
    fun `url prefix generates reroute hook and removes it when switching back`() {
        val project = project("i18n { locales(\"en\", \"de\"); strategy = LocaleStrategy.UrlPrefix }")
        messages(project)
        project.run("svelteSync")
        assertContains(project.frontend.resolve("src/hooks.ts").readText(), "reroute")

        project.buildScript(build("i18n { locales(\"en\", \"de\"); strategy = LocaleStrategy.Cookie }"))
        project.run("svelteSync")
        assertFalse(project.frontend.resolve("src/hooks.ts").exists())
    }

    @Test
    fun `your own hooks are never overwritten`() {
        val project = project("i18n { locales(\"en\") }")
        project.frontend.resolve("messages").mkdirs()
        project.frontend.resolve("messages/en.json").writeText("{}")
        val hooks = project.frontend.resolve("src/hooks.server.ts")
        hooks.parentFile.mkdirs()
        hooks.writeText("mine")
        assertContains(project.runAndFail("svelteSync").output, "found your own version")
        assertEquals("mine", hooks.readText())
    }

    @Test
    fun `runtime settings reach the jar`() {
        val project = project("i18n { locales(\"en\", \"de\"); strategy = LocaleStrategy.UrlPrefix }")
        messages(project)
        project.run("svelteSync")
        project.run("jar", "-Psvelte.skip=true")
        ZipFile(dir.resolve("build/libs/sample.jar")).use { jar ->
            val entry = assertNotNull(jar.getEntry("ktor-svelte/libraries.properties"))
            assertContains(jar.getInputStream(entry).readBytes().decodeToString(), "i18n.strategy=UrlPrefix")
        }
    }

    @Test
    fun `tasks that start the app in development see the library settings`() {
        val project = TestProject(dir)
        project.buildScript(
            """
            plugins {
                java
                application
                id("io.github.nijasc.ktor-svelte")
            }

            svelte {
                addRuntimeDependency = false
                libraries {
                    i18n { locales("en", "de") }
                }
            }

            application {
                mainClass = "Main"
            }
            """.trimIndent(),
        )
        messages(project)
        project.run("svelteSync")
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText(
            """
            public class Main {
                public static void main(String[] args) throws Exception {
                    java.util.Properties settings = new java.util.Properties();
                    try (java.io.InputStream stream = Main.class.getClassLoader().getResourceAsStream("ktor-svelte/libraries.properties")) {
                        if (stream != null) settings.load(stream);
                    }
                    System.out.println("locales=" + settings.getProperty("i18n.locales"));
                }
            }
            """.trimIndent(),
        )

        assertContains(project.run("svelteGenerateTs").output, "locales=en,de")
    }

    @Test
    fun `sync and compile can run in one command on a fresh project`() {
        val project = project("lucide()")
        addLucide(project)
        val result = project.run("svelteSync", "classes")
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteGenerateSources")?.outcome)
        val tasks = result.tasks.map { it.path }
        assertTrue(tasks.indexOf(":svelteSync") < tasks.indexOf(":svelteGenerateSources"))
    }

    @Test
    fun `configuration cache works with libraries`() {
        val project = project("tailwind()")
        project.run("svelteSync", "--configuration-cache")
        assertContains(project.run("svelteSync", "--configuration-cache").output, "Configuration cache entry reused")
    }

    @Test
    fun `generated kotlin compiles in a kotlin project`() {
        val project = TestProject(dir)
        val kotlinVersion = System.getProperty("ktorSvelte.kotlinVersion")
        project.buildScript(
            """
            plugins {
                kotlin("jvm") version "$kotlinVersion"
                id("io.github.nijasc.ktor-svelte")
            }

            repositories {
                mavenCentral()
            }

            svelte {
                addRuntimeDependency = false
                libraries {
                    lucide()
                    daisyUi()
                    i18n { locales("en", "de") }
                }
            }
            """.trimIndent(),
        )
        addLucide(project)
        messages(project)
        project.run("svelteSync")
        assertContains(project.frontend.resolve("src/lib/ktor-svelte/icons.json").readText(), "Icon3dRotate")
        val source = dir.resolve("src/main/kotlin/App.kt")
        source.parentFile.mkdirs()
        source.writeText(
            """
            import io.github.nijasc.ktorsvelte.AppTheme
            import io.github.nijasc.ktorsvelte.LucideIcon
            import io.github.nijasc.ktorsvelte.Messages

            val icon = LucideIcon.ArrowRight
            val theme = AppTheme.Light
            val text = Messages.forLocale("de").hello("Nils")
            """.trimIndent(),
        )

        val result = project.run("compileKotlin", "-Psvelte.skip=true")

        assertEquals(TaskOutcome.SUCCESS, result.task(":compileKotlin")?.outcome)
    }
}
