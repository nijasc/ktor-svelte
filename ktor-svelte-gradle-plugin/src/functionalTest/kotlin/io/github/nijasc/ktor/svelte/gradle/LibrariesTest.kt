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
    fun `sync runs before source generation, whatever the order on the command line`() {
        val project = project("lucide()")
        addLucide(project)
        val result = project.run("classes", "svelteSync")
        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteGenerateSources")?.outcome)
        val tasks = result.tasks.map { it.path }
        assertTrue(tasks.indexOf(":svelteSync") < tasks.indexOf(":svelteGenerateSources"))
    }

    private fun emptyProjectWithTwoLocales(): TestProject {
        val project = TestProject(dir)
        project.buildScript(
            """
            import io.github.nijasc.ktor.svelte.gradle.PackageManager

            plugins {
                java
                id("io.github.nijasc.ktor-svelte")
            }

            svelte {
                addRuntimeDependency = false
                packageManager = PackageManager.Bun
                libraries {
                    i18n { locales("en", "de") }
                }
            }
            """.trimIndent(),
        )
        project.frontend
            .listFiles()
            .orEmpty()
            .forEach { it.deleteRecursively() }
        return project
    }

    @Test
    fun `init creates empty message files, so a new project with i18n syncs right away`() {
        val project = emptyProjectWithTwoLocales()

        val result = project.run("svelteInit")

        assertEquals(TaskOutcome.SUCCESS, result.task(":svelteSync")?.outcome)
        assertEquals(
            "{}",
            project.frontend
                .resolve("messages/en.json")
                .readText()
                .trim(),
        )
        assertEquals(
            "{}",
            project.frontend
                .resolve("messages/de.json")
                .readText()
                .trim(),
        )
        assertTrue(project.frontend.resolve("src/lib/ktor-svelte/i18n.ts").isFile)
    }

    @Test
    fun `init keeps message files that are already there`() {
        val project = emptyProjectWithTwoLocales()
        messages(project)

        project.run("svelteInit")

        assertContains(project.frontend.resolve("messages/en.json").readText(), "Hi {name}")
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
                    routes()
                }
            }

            kotlin {
                compilerOptions {
                    allWarningsAsErrors = true
                }
            }
            """.trimIndent(),
        )
        addLucide(project)
        messages(project)
        listOf("", "notes/[id]", "(app)/docs/[[lang]]/[...path]").forEach { route ->
            project.frontend
                .resolve("src/routes/$route/+page.svelte")
                .apply { parentFile.mkdirs() }
                .writeText("")
        }
        project.run("svelteSync")
        assertContains(project.frontend.resolve("src/lib/ktor-svelte/routes.ts").readText(), "notesId: '/notes/[id]'")
        assertContains(project.frontend.resolve("src/lib/ktor-svelte/icons.json").readText(), "Icon3dRotate")
        val source = dir.resolve("src/main/kotlin/App.kt")
        source.parentFile.mkdirs()
        source.writeText(
            """
            import io.github.nijasc.ktorsvelte.AppTheme
            import io.github.nijasc.ktorsvelte.FrontendRoutes
            import io.github.nijasc.ktorsvelte.LucideIcon
            import io.github.nijasc.ktorsvelte.Messages

            val icon = LucideIcon.ArrowRight
            val theme = AppTheme.Light
            val text = Messages.forLocale("de").hello("Nils")
            val links = listOf(FrontendRoutes.home, FrontendRoutes.notesId("1"), FrontendRoutes.docsLangPath(path = "a/b"))
            """.trimIndent(),
        )

        val result = project.run("compileKotlin", "-Psvelte.skip=true")

        assertEquals(TaskOutcome.SUCCESS, result.task(":compileKotlin")?.outcome)
    }

    @Test
    fun `svelteVerifyRoutes lists string links to pages and passes once they are typed`() {
        val project = project("routes()")
        val home = project.frontend.resolve("src/routes/+page.svelte")
        val note = project.frontend.resolve("src/routes/notes/[id]/+page.svelte")
        note.parentFile.mkdirs()
        note.writeText("<a href=\"/\">Home</a>\n")
        home.writeText("<script>\n    let { note } = ${'$'}props();\n</script>\n\n<a href=\"/notes/{note.id}\">Open</a>\n")

        val output = project.runAndFail("svelteVerifyRoutes").output

        assertContains(output, "src/routes/+page.svelte:5  href=\"/notes/{note.id}\"  ->  routes.notesId({ id: note.id })")
        assertContains(output, "src/routes/notes/[id]/+page.svelte:1  href=\"/\"  ->  routes.home()")
        assertContains(output, "2 link(s) to pages are written as strings.")

        home.writeText("<a href={routes.notesId({ id: note.id })}>Open</a>\n")
        note.writeText("<a href={routes.home()}>Home</a>\n")

        assertContains(project.run("svelteVerifyRoutes").output, "every link to a page uses a typed route")
    }

    @Test
    fun `svelteVerifyRoutes also lists string redirects in Kotlin`() {
        val project = project("routes()")
        listOf("", "notes/[id]").forEach { route ->
            project.frontend
                .resolve("src/routes/$route/+page.svelte")
                .apply { parentFile.mkdirs() }
                .writeText("")
        }
        val routes = dir.resolve("src/main/kotlin/Routes.kt")
        routes.parentFile.mkdirs()
        routes.writeText("fun x() {\n    call.respondRedirect(\"/notes/${'$'}{note.id}\")\n    call.respondRedirect(\"/api/docs\")\n}\n")

        val output = project.runAndFail("svelteVerifyRoutes").output

        assertContains(
            output,
            "src/main/kotlin/Routes.kt:2  respondRedirect(\"/notes/${'$'}{note.id}\")  ->  FrontendRoutes.notesId(note.id)",
        )
        assertContains(output, "1 link(s) to pages are written as strings. Use FrontendRoutes in Kotlin instead.")

        routes.writeText("fun x() {\n    call.respondRedirect(FrontendRoutes.notesId(note.id))\n}\n")

        assertContains(project.run("svelteVerifyRoutes").output, "every link to a page uses a typed route")
    }

    @Test
    fun `svelteVerifyRoutes with fix rewrites what it can and lists the rest`() {
        val project = project("routes()")
        val home = project.frontend.resolve("src/routes/+page.svelte")
        val note = project.frontend.resolve("src/routes/notes/[id]/+page.svelte")
        val guard = project.frontend.resolve("src/routes/+layout.ts")
        note.parentFile.mkdirs()
        note.writeText("<a href=\"/\">Home</a>\n<a href=\"/notes/{id}?tab=files\">Files</a>\n")
        home.writeText("<script lang=\"ts\">\n    let { note } = ${'$'}props();\n</script>\n\n<a href=\"/notes/{note.id}\">Open</a>\n")
        guard.writeText("import { redirect } from '@sveltejs/kit';\n\nexport const load = () => redirect(307, '/');\n")
        val routes = dir.resolve("src/main/kotlin/Routes.kt")
        routes.parentFile.mkdirs()
        routes.writeText("package app\n\nfun x() {\n    call.respondRedirect(\"/\")\n}\n")

        val output = project.runAndFail("svelteVerifyRoutes", "--fix").output

        assertContains(output, "rewrote 4 link(s) in 4 file(s)")
        assertContains(output, "src/routes/notes/[id]/+page.svelte:6  href=\"/notes/{id}?tab=files\"  ->  routes.notesId({ id: id })")
        assertContains(output, "1 link(s) to pages are written as strings and need a person to rewrite them.")
        assertEquals(
            "<script lang=\"ts\">\n    import { routes } from '#routes';\n    let { note } = ${'$'}props();\n</script>\n\n" +
                "<a href={routes.notesId({ id: note.id })}>Open</a>\n",
            home.readText(),
        )
        assertEquals(
            "<script lang=\"ts\">\n    import { routes } from '#routes';\n</script>\n\n" +
                "<a href={routes.home()}>Home</a>\n<a href=\"/notes/{id}?tab=files\">Files</a>\n",
            note.readText(),
        )
        assertEquals(
            "import { routes } from '#routes';\nimport { redirect } from '@sveltejs/kit';\n\nexport const load = () => redirect(307, routes.home());\n",
            guard.readText(),
        )
        assertEquals(
            "package app\n\nimport io.github.nijasc.ktorsvelte.FrontendRoutes\n\nfun x() {\n    call.respondRedirect(FrontendRoutes.home)\n}\n",
            routes.readText(),
        )
    }

    @Test
    fun `svelteVerifyLinks lists dead links and only fails when strict`() {
        val project = project("i18n { locales(\"en\", \"de\"); strategy = LocaleStrategy.UrlPrefix }")
        messages(project)
        val home = project.frontend.resolve("src/routes/+page.svelte")
        home.parentFile.mkdirs()
        project.frontend.resolve("src/routes/about").mkdirs()
        project.frontend.resolve("src/routes/about/+page.svelte").writeText("<a href=\"/de\">Start</a>\n")
        project.frontend.resolve("static").mkdirs()
        project.frontend.resolve("static/terms.pdf").writeText("")
        home.writeText(
            "<a href=\"/about\">About</a>\n<a href=\"/abuot\">About</a>\n<a href=\"/terms.pdf\">Terms</a>\n<a href=\"/api/docs\">Docs</a>\n",
        )
        val routes = dir.resolve("src/main/kotlin/Routes.kt")
        routes.parentFile.mkdirs()
        routes.writeText("fun x() {\n    call.respondRedirect(\"/gone\")\n}\n")

        val output = project.run("svelteVerifyLinks").output

        assertContains(output, "src/routes/+page.svelte:2  href=\"/abuot\"  ->  nothing is served at /abuot")
        assertContains(output, "src/main/kotlin/Routes.kt:2  respondRedirect(\"/gone\")  ->  nothing is served at /gone")
        assertContains(output, "2 internal link(s) lead to no page, no API route and no static file. Add --strict")
        assertContains(project.runAndFail("svelteVerifyLinks", "--strict").output, "2 internal link(s) lead to no page")

        home.writeText("<a href=\"/about\">About</a>\n")
        routes.delete()

        assertContains(project.run("svelteVerifyLinks", "--strict").output, "every internal link leads to a page")
    }

    @Test
    fun `svelteRename moves a page, rewrites its typed calls and regenerates the routes`() {
        val project = project("routes()")
        listOf("", "notes", "notes/[id]").forEach { route ->
            project.frontend
                .resolve("src/routes/$route/+page.svelte")
                .apply { parentFile.mkdirs() }
                .writeText("<a href={routes.notesId({ id: 1 })}>Open</a> <a href={routes.notes()}>All</a>\n")
        }
        val kotlin = dir.resolve("src/main/kotlin/Routes.kt")
        kotlin.parentFile.mkdirs()
        kotlin.writeText("val target = FrontendRoutes.notesId(\"1\")\n")
        project.run("svelteSync")

        val output = project.run("svelteRename", "--page=notes", "--to=/memos").output

        assertContains(output, "moved /notes to /memos and updated 7 typed route call(s) in 4 file(s)")
        assertContains(output, "nothing answers at /notes any more")
        assertFalse(project.frontend.resolve("src/routes/notes").exists())
        assertEquals(
            "<a href={routes.memosId({ id: 1 })}>Open</a> <a href={routes.memos()}>All</a>\n",
            project.frontend.resolve("src/routes/memos/[id]/+page.svelte").readText(),
        )
        assertEquals("val target = FrontendRoutes.memosId(\"1\")\n", kotlin.readText())
        val generated = project.frontend.resolve("src/lib/ktor-svelte/routes.ts").readText()
        assertContains(generated, "memosId: '/memos/[id]'")
        assertFalse(generated.contains("notesId"))
    }

    @Test
    fun `svelteRename explains what it needs and refuses a target that exists`() {
        val project = project("routes()")
        listOf("", "notes", "memos").forEach { route ->
            project.frontend
                .resolve("src/routes/$route/+page.svelte")
                .apply { parentFile.mkdirs() }
                .writeText("")
        }
        assertContains(project.runAndFail("svelteRename").output, "svelteRename --page=notes/[id] --to=memos/[id]")
        assertContains(project.runAndFail("svelteRename", "--page=notes", "--to=memos").output, "already exists")
        assertTrue(project.frontend.resolve("src/routes/notes/+page.svelte").isFile)
    }

    @Test
    fun `svelteVerifyLoads names API calls in load functions that do not pass fetch`() {
        val project = project("lucide()")
        val load = project.frontend.resolve("src/routes/notes/+page.ts")
        load.parentFile.mkdirs()
        load.writeText(
            "import { api } from '#api';\n\nexport const load = async ({ fetch }) => {\n" +
                "    const notes = await api.notes.list();\n    const tags = await api.tags.list({ fetch });\n    return { notes, tags };\n};\n",
        )

        val output = project.runAndFail("svelteVerifyLoads").output

        assertContains(
            output,
            "src/routes/notes/+page.ts:4  api.notes.list()  ->  use apiWith(event), or pass { fetch } as the last argument",
        )
        assertContains(output, "1 API call(s) in load functions use neither apiWith(event) nor { fetch }")
        assertContains(output, "features/calling-the-api#in-load-functions")

        load.writeText(load.readText().replace("api.notes.list()", "api.notes.list({ fetch })"))

        assertContains(project.run("svelteVerifyLoads").output, "every API call in a load function goes through SvelteKit's fetch")
    }

    @Test
    fun `svelteVerifyRoutes has nothing to do without typed routes`() {
        val project = project("lucide()")
        project.frontend.resolve("src/routes").mkdirs()
        project.frontend.resolve("src/routes/+page.svelte").writeText("<a href=\"/\">Home</a>\n")

        assertContains(project.run("svelteVerifyRoutes").output, "typed routes are off")
    }
}
