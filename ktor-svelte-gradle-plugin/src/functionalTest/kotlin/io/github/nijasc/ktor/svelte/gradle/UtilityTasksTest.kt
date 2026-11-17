package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.TaskOutcome
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.InetAddress
import java.net.ServerSocket
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

    private fun withScripts(project: TestProject) {
        project.frontend.resolve("package.json").writeText("""{"scripts":{"format":"prettier --write .","lint":"prettier --check ."}}""")
    }

    @Test
    fun `format runs the frontend's format script and says when Kotlin has no formatter`() {
        val project = project()
        withScripts(project)
        val output = project.run("format", "--configuration-cache").output
        assertEquals("run format", project.calls().last())
        assertContains(output, "neither ktlint nor Spotless is applied, so Kotlin was left as it is")
    }

    @Test
    fun `formatCheck runs the frontend's lint script`() {
        val project = project()
        withScripts(project)
        project.run("formatCheck")
        assertEquals("run lint", project.calls().last())
    }

    @Test
    fun `a frontend without the script is left alone with a hint`() {
        val project = project()
        val output = project.run("format").output
        assertContains(output, "package.json has no \"format\" script, so the frontend was not formatted")
        assertFalse(project.calls().contains("run format"))
    }

    @Test
    fun `a format task the build already has is kept`() {
        val project = project()
        withScripts(project)
        project.buildScript(javaBuild + "\n\ntasks.register(\"format\") { doLast { println(\"the build's own format\") } }\n")
        assertContains(project.run("format").output, "the build's own format")
        assertFalse(project.calls().contains("run format"))
        project.run("svelteFormat")
        assertEquals("run format", project.calls().last())
    }

    @Test
    fun `format also formats Kotlin when ktlint is applied`() {
        val project = project()
        withScripts(project)
        project.buildScript(
            """
            plugins {
                java
                id("org.jlleitschuh.gradle.ktlint") version "14.2.0"
                id("io.github.nijasc.ktor-svelte")
            }

            repositories {
                mavenCentral()
            }

            svelte {
                addRuntimeDependency = false
            }
            """.trimIndent(),
        )
        val planned = project.run("format", "formatCheck", "--dry-run").output
        listOf(":ktlintFormat", ":svelteFormat", ":format", ":ktlintCheck", ":svelteFormatCheck", ":formatCheck").forEach { task ->
            assertContains(planned, "$task SKIPPED")
        }
    }

    private fun git(vararg arguments: String): Boolean =
        runCatching {
            ProcessBuilder(listOf("git", *arguments))
                .directory(dir)
                .redirectErrorStream(true)
                .start()
                .apply { inputStream.readBytes() }
                .waitFor() == 0
        }.getOrDefault(false)

    @Test
    fun `svelteGitHooks installs, keeps and removes the pre-commit hook of this clone`() {
        val project = project()
        assumeTrue(git("init", "-q"))
        val hook = dir.resolve(".git/hooks/pre-commit")

        val installed = project.run("svelteGitHooks").output
        assertContains(installed, "Every commit now runs formatCheck and svelteVerifySync first")
        assertContains(installed, "generated files no longer conflict in this clone.")
        assertContains(installed, "one side is kept and svelteSync run afterwards.")
        assertContains(hook.readText(), "./gradlew --quiet formatCheck svelteVerifySync")
        assertContains(hook.resolveSibling("post-merge").readText(), "./gradlew --quiet svelteSync")
        assertContains(hook.resolveSibling("post-rewrite").readText(), "./gradlew --quiet svelteSync")
        assertContains(dir.resolve(".git/config").readText(), "driver = git update-ref refs/ktor-svelte/regenerate HEAD")
        assertContains(project.run("svelteGitHooks", "--configuration-cache").output, "is up to date")

        assertContains(project.run("svelteGitHooks", "--remove").output, "removed")
        assertFalse(hook.exists())
        assertFalse(hook.resolveSibling("post-merge").exists())
        assertFalse("ktor-svelte" in dir.resolve(".git/config").readText())
        assertContains(project.run("svelteGitHooks", "--remove").output, "there is no ktor-svelte hook")
    }

    @Test
    fun `svelteGitHooks leaves a foreign hook alone and needs a repository`() {
        val project = project()
        assertContains(project.runAndFail("svelteGitHooks").output, "is not inside a git repository")
        assumeTrue(git("init", "-q"))
        val hook = dir.resolve(".git/hooks/pre-commit")
        hook.parentFile.mkdirs()
        hook.writeText("#!/bin/sh\nexit 0\n")
        assertContains(project.runAndFail("svelteGitHooks").output, "was not written by ktor-svelte")
        assertEquals("#!/bin/sh\nexit 0\n", hook.readText())
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
        val frontend = dir.resolve(".run/Debug frontend.run.xml").readText()
        assertContains(frontend, "type=\"JavascriptDebugType\" uri=\"http://localhost:8080\"")
        assertContains(frontend, "<mapping url=\"http://localhost:8080\" local-file=\"${'$'}PROJECT_DIR${'$'}/frontend\" />")
        val compound = dir.resolve(".run/Dev and debug.run.xml").readText()
        assertContains(compound, "type=\"CompoundRunConfigurationType\"")
        assertContains(compound, "<toRun name=\"Dev\" type=\"GradleRunConfiguration\" />")
        assertContains(compound, "<toRun name=\"Debug app\" type=\"Remote\" />")
    }

    @Test
    fun `IntelliJ leaves the frontend build output out of the index`() {
        val project = project()
        dir.resolve("build.gradle.kts").appendText(
            """

            val excluded = provider { extensions.getByType<org.gradle.plugins.ide.idea.model.IdeaModel>().module.excludeDirs.map { it.relativeTo(projectDir).invariantSeparatorsPath }.sorted() }
            tasks.register("printExcluded") {
                val names = excluded
                doLast { println("EXCLUDED " + names.get()) }
            }
            """.trimIndent(),
        )
        assertContains(project.run("printExcluded").output, "EXCLUDED [.gradle, build, frontend/.svelte-kit/output, frontend/build]")
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
    fun `svelteLiveTemplates writes the templates and installs them into each IDE`() {
        val project = project()
        val config = dir.resolve("jetbrains").apply { mkdirs() }
        listOf("IntelliJIdea2026.2", "WebStorm2026.1", "DataSpell2026.1").forEach { config.resolve(it).mkdirs() }

        project.run("svelteLiveTemplates")
        val written = dir.resolve("build/ktor-svelte/live-templates/ktor-svelte.xml")
        assertContains(written.readText(), "<template name=\"ksget\"")
        assertFalse(config.resolve("IntelliJIdea2026.2/templates").exists())

        val output = project.run("svelteLiveTemplates", "--install", "--config-dir=${config.path}").output

        assertEquals(written.readText(), config.resolve("IntelliJIdea2026.2/templates/ktor-svelte.xml").readText())
        assertTrue(config.resolve("WebStorm2026.1/templates/ktor-svelte.xml").isFile)
        assertFalse(config.resolve("DataSpell2026.1/templates").exists())
        assertContains(output, "installed live templates for IntelliJIdea2026.2")
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
    fun `svelteDoctor says what it can fix and fixes it when asked`() {
        val project = project()
        val manifest = project.frontend.resolve("package.json")

        assertContains(project.runAndFail("svelteDoctor").output, "svelteDoctor --fix can fix 1 of these.")
        assertEquals("{}", manifest.readText())

        val output = project.runAndFail("svelteDoctor", "--fix").output

        assertContains(output, "FIXED Added the #api import to package.json")
        assertContains(output, "OK    #api import is configured")
        assertContains(output, "ERROR @sveltejs/kit is not a dependency")
        assertContains(manifest.readText(), "\"#api\": \"./src/lib/api/index.ts\"")
    }

    @Test
    fun `the short task names are the same tasks under another name, options included`() {
        val project = project()
        project.buildScript(applicationBuild)

        val tasks = project.run("tasks", "--all").output
        listOf("dev", "sync", "doctor", "gen").forEach { name ->
            assertTrue(
                Regex("^$name - Short for svelte\\w+\\. ", RegexOption.MULTILINE).containsMatchIn(tasks),
                "$name is missing in: $tasks",
            )
        }
        assertContains(project.run("help", "--task", "doctor").output, "--fix")
        assertContains(project.run("help", "--task", "dev").output, "--full-stack-traces")
        assertContains(project.run("gen", "--dry-run").output, ":gen SKIPPED")
        assertEquals(project.run("svelteSync").task(":svelteSync")?.outcome, project.run("sync").task(":sync")?.outcome)
    }

    @Test
    fun `a short name that is taken is left alone, and one setting turns them all off`() {
        val project = project()
        project.buildScript(
            applicationBuild +
                "\ntasks.register(\"doctor\") { description = \"My own doctor\" }\ntasks.register(\"dev\") { doLast { println(\"my dev\") } }\n",
        )
        val tasks = project.run("tasks", "--all").output
        assertContains(tasks, "doctor - My own doctor")
        assertContains(tasks, "sync - Short for svelteSync.")
        assertContains(project.run("dev").output, "my dev")

        project.buildScript(applicationBuild + "\nsvelte { shortTaskNames = false }\n")
        val without = project.run("tasks", "--all").output
        listOf("dev", "sync", "doctor", "gen").forEach { name ->
            assertFalse(Regex("^$name - ", RegexOption.MULTILINE).containsMatchIn(without), "$name should be gone")
        }
        assertContains(without, "svelteDoctor - ")
    }

    @Test
    fun `svelteDevAll stops everything when Vite stops`() {
        val project = project()
        val port = ServerSocket(0).use { it.localPort }
        project.buildScript("$applicationBuild\nsvelte { dev { port = $port; debugPort = 0 } }\n")
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText("public class Main { public static void main(String[] args) throws Exception { Thread.sleep(600000); } }")

        val output = project.run("svelteDevAll").output

        assertContains(output, "Vite stopped, so everything else is stopping too.")
        assertTrue(project.calls().contains("run dev --port $port --strictPort"))
        assertFalse(dir.resolve("build/ktor-svelte/dev-processes").exists(), "nothing is left to clean up after a normal stop")
        assertFalse(dir.resolve("build/ktor-svelte/dev-classpath").exists(), "the copy the app ran from is removed")
    }

    @Test
    fun `svelteDevAll starts nothing when another program holds Vite's port`() {
        val project = project()
        ServerSocket(0, 1, InetAddress.getByName("127.0.0.1")).use { taken ->
            project.buildScript("$applicationBuild\nsvelte { dev { port = ${taken.localPort}; debugPort = 0 } }\n")
            val source = dir.resolve("src/main/java/Main.java")
            source.parentFile.mkdirs()
            source.writeText("public class Main { public static void main(String[] args) {} }")

            val output = project.runAndFail("svelteDevAll").output

            assertContains(output, "Port ${taken.localPort}, which Vite needs, is in use by ")
            assertContains(output, "svelteDevAll did not start it, so it was left alone.")
            assertContains(output, "svelte { dev { port = ${taken.localPort + 1} } }")
            assertFalse(project.calls().any { it.startsWith("run dev") })
        }
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
    fun `svelteApiChanges compares the committed API with another revision and only fails when asked to`() {
        val project = project()
        val api = project.frontend.resolve("src/lib/api/openapi.json").apply { parentFile.mkdirs() }

        fun document(vararg paths: String): String {
            val operations = paths.joinToString(",") { "\"$it\":{\"get\":{\"responses\":{}}}" }
            return """{"openapi":"3.1.1","paths":{$operations},"components":{"schemas":{}}}"""
        }

        fun git(vararg arguments: String) {
            val process =
                ProcessBuilder(
                    listOf("git", "-c", "user.name=Test", "-c", "user.email=test@example.com") + arguments,
                ).directory(dir).redirectErrorStream(true).start()
            val output = process.inputStream.bufferedReader().readText()
            assertEquals(0, process.waitFor(), output)
        }
        api.writeText(document("/api/notes", "/api/old"))
        assertContains(project.runAndFail("svelteApiChanges").output, "is not in a git repository")

        git("init", "-q", "-b", "main")
        git("add", "frontend/src/lib/api/openapi.json")
        git("commit", "-q", "-m", "first")
        assertContains(project.run("svelteApiChanges", "--against=main").output, "the API is the same for callers as on main.")

        api.writeText(document("/api/notes", "/api/new"))
        val changed = project.run("svelteApiChanges", "--against=main").output
        assertContains(changed, "API changes against main: 1 that can break callers, 1 other.")
        assertContains(changed, "  GET /api/old  removed")
        assertContains(changed, "  GET /api/new  added")
        assertContains(
            project.runAndFail("svelteApiChanges", "--against=main", "--strict").output,
            "1 API change(s) against main can break callers.",
        )
        assertContains(
            project.run("svelteApiChanges").output,
            "origin/main has no frontend/src/lib/api/openapi.json, so there is nothing to compare with yet.",
        )
    }

    private fun servingApp(brokenRoute: Boolean): TestProject {
        val project = project()
        project.buildScript(applicationBuild)
        val source = dir.resolve("src/main/java/Main.java")
        source.parentFile.mkdirs()
        source.writeText(
            """
            import com.sun.net.httpserver.HttpServer;
            import java.net.InetSocketAddress;

            public class Main {
                public static void main(String[] args) throws Exception {
                    String port = System.getenv("PORT");
                    if (port == null) { System.out.println("no port given"); System.exit(7); }
                    System.out.println("development=" + System.getProperty("io.ktor.development"));
                    HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", Integer.parseInt(port)), 0);
                    server.createContext("/", exchange -> {
                        String path = exchange.getRequestURI().getPath();
                        int status = 404;
                        if (path.equals("/")) { status = 200; exchange.getResponseHeaders().add("Content-Type", "text/html; charset=UTF-8"); }
                        if (path.equals("/_app/immutable/app.js") || path.equals("/health")) status = 200;
                        if (path.equals("/api/notes")) status = 401;
                        if (path.equals("/api/stats")) status = ${if (brokenRoute) 500 else 200};
                        byte[] body = "answer".getBytes();
                        exchange.sendResponseHeaders(status, body.length);
                        exchange.getResponseBody().write(body);
                        exchange.close();
                    });
                    server.start();
                }
            }
            """.trimIndent(),
        )
        val routes = listOf("/api/notes", "/api/stats").joinToString(",") { "\"$it\":{\"get\":{\"responses\":{}}}" }
        val api = project.frontend.resolve("src/lib/api/openapi.json").apply { parentFile.mkdirs() }
        api.writeText("""{"openapi":"3.1.1","paths":{$routes,"/api/notes/{id}":{"get":{"responses":{}}}}}""")
        return project
    }

    @Test
    fun `svelteSmokeTest starts the packaged app and asks for its pages, an asset and the API routes`() {
        val result = servingApp(brokenRoute = false).run("svelteSmokeTest", "--path=/health")

        assertEquals(TaskOutcome.SUCCESS, result.task(":installDist")?.outcome)
        assertContains(result.output, "Main runs in production mode on port ")
        assertContains(result.output, "  200  /\n".replace("\n", System.lineSeparator()))
        assertContains(result.output, "  200  /_app/immutable/app.js")
        assertContains(result.output, "  401  GET /api/notes")
        assertContains(result.output, "  200  /health")
        assertContains(result.output, "the production build answered 1 page, 1 asset, 2 API routes, 1 path correctly.")
        assertContains(dir.resolve("build/ktor-svelte/smoke-test.log").readText(), "development=null")
        assertFalse(":svelteSmokeTest" in servingApp(brokenRoute = false).run("check", "--dry-run").output)
    }

    @Test
    fun `svelteSmokeTest fails on a route that answers with a server error, unless it is skipped`() {
        val project = servingApp(brokenRoute = true)
        val output = project.runAndFail("svelteSmokeTest").output

        assertContains(output, "The production build did not answer 1 of 4 requests correctly:")
        assertContains(output, "  500  GET /api/stats  expected anything but 404 and a server error")
        assertContains(output, "The app's output is in build/ktor-svelte/smoke-test.log.")
        assertContains(project.run("svelteSmokeTest", "--skip=/api/stats").output, "answered 1 page, 1 asset, 1 API route correctly.")
    }

    @Test
    fun `svelteSmokeTest shows the app's output when it does not start`() {
        val project = servingApp(brokenRoute = false)
        val source = dir.resolve("src/main/java/Main.java")
        source.writeText(source.readText().replace("System.getenv(\"PORT\")", "null"))
        val output = project.runAndFail("svelteSmokeTest").output

        assertContains(output, "The app stopped with exit code 7 before it listened on port ")
        assertContains(output, "  no port given")
    }

    @Test
    fun `svelteAdd creates a page and a route stub once, and never overwrites`() {
        val project = project()
        project.buildScript(applicationBuild.replace("mainClass = \"Main\"", "mainClass = \"demo.app.MainKt\""))
        val missing = project.runAndFail("svelteAdd").output
        assertContains(missing, "Say what to add: svelteAdd --page=notes/[id]")

        val output = project.run("svelteAdd", "--page=notes/[id]", "--route").output
        assertContains(output, "ktor-svelte added /notes/[id]:")
        assertContains(output, "  frontend/src/routes/notes/[id]/+page.svelte")
        assertContains(output, "  src/main/kotlin/demo/app/NotesIdRoutes.kt")
        assertContains(output, "Add paramRoutes(\"/notes/[id]\") to install(Svelte)")
        assertContains(output, "Call notesIdRoutes() inside routing { } to turn the new route on.")
        assertContains(project.frontend.resolve("src/routes/notes/[id]/+page.ts").readText(), "return { id: params.id };")
        assertContains(dir.resolve("src/main/kotlin/demo/app/NotesIdRoutes.kt").readText(), "package demo.app\n\nimport")

        val again = project.runAndFail("svelteAdd", "--page=notes/[id]").output
        assertContains(
            again,
            "svelteAdd does not overwrite: frontend/src/routes/notes/[id]/+page.svelte, frontend/src/routes/notes/[id]/+page.ts are already there.",
        )

        project.run("svelteAdd", "--page=about")
        assertFalse(dir.resolve("src/main/kotlin/demo/app/AboutRoutes.kt").exists())
        assertContains(project.frontend.resolve("src/routes/about/+page.svelte").readText(), "<h1>About</h1>")
    }

    @Test
    fun `svelteAdd --crud writes the pages for a class of the generated client, once`() {
        val project = project()
        assertContains(project.runAndFail("svelteAdd", "--crud=Note").output, "there is none yet. Run svelteGenerateTs first.")

        val api = project.frontend.resolve("src/lib/api").apply { mkdirs() }
        val list = "request<Note[]>('GET', '/api/notes', { ...options, operation: 'notes.list' });"
        val get = "request<Note>('GET', `/api/notes/\${encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });"
        api.resolve("services.ts").writeText(
            "export const notesList = (options?: RequestOptions) => $list\n" +
                "export const notesGet = (id: string, options?: RequestOptions) => $get\n",
        )
        api.resolve("types.ts").writeText("export interface Note {\n    id: string;\n    title: string;\n}\n")

        val output = project.run("svelteAdd", "--crud=Note").output
        assertContains(output, "ktor-svelte added pages for Note, wired to api.notes:")
        assertContains(output, "  frontend/src/routes/notes/[id]/+page.svelte")
        assertContains(output, "Add paramRoutes(\"/notes/[id]\") to install(Svelte)")
        val page = project.frontend.resolve("src/routes/notes/+page.svelte").readText()
        assertContains(page, "<h1 class=\"mb-4 text-3xl font-bold\">Notes</h1>")
        assertContains(page, "href=\"/notes/{note.id}\"")
        assertFalse(project.frontend.resolve("src/routes/notes/new").exists())

        assertContains(
            project.runAndFail("svelteAdd", "--crud=Note").output,
            "svelteAdd does not overwrite: frontend/src/routes/notes/+page.ts",
        )
        assertContains(project.runAndFail("svelteAdd", "--crud=Order").output, "The generated client has no route that lists Order.")
        assertContains(
            project.run("svelteAdd", "--crud=Note", "--page=(app)/memos").output,
            "  frontend/src/routes/(app)/memos/+page.svelte",
        )
    }

    @Test
    fun `a test suite called browserTest is told which packaged app to start and which browser to use`() {
        val project = project()
        project.buildScript(
            """
            plugins {
                java
                application
                `jvm-test-suite`
                id("io.github.nijasc.ktor-svelte")
            }

            repositories {
                mavenCentral()
            }

            svelte {
                addRuntimeDependency = false
            }

            application {
                mainClass = "demo.Main"
            }

            testing {
                suites {
                    register<JvmTestSuite>("browserTest") {
                        useJUnitJupiter()
                    }
                    register<JvmTestSuite>("otherTest") {
                        useJUnitJupiter()
                    }
                }
            }
            """.trimIndent(),
        )
        dir.resolve("src/main/java/demo/Main.java").apply { parentFile.mkdirs() }.writeText(
            "package demo;\npublic class Main { public static void main(String[] args) {} }\n",
        )
        val told =
            """
            import org.junit.jupiter.api.Test;
            public class ToldTest {
                @Test
                void told() {
                    System.out.println("told browser=" + System.getProperty("browser"));
                    System.out.println("told main=" + System.getProperty("ktorSvelte.test.mainClass"));
                    System.out.println("told classpath=" + System.getProperty("ktorSvelte.test.classpath"));
                }
            }
            """.trimIndent()
        listOf("browserTest", "otherTest").forEach { suite ->
            dir.resolve("src/$suite/java/ToldTest.java").apply { parentFile.mkdirs() }.writeText(told)
        }
        val arguments = arrayOf("-Pbrowser=firefox", "-i")
        val output = project.run("browserTest", *arguments).output
        assertContains(output, "told browser=firefox")
        assertContains(output, "told main=demo.Main")
        assertTrue(
            Regex("told classpath=.*build[/\\\\]install[/\\\\]sample[/\\\\]lib[/\\\\]\\*").containsMatchIn(output),
            output.takeLast(2000),
        )
        assertContains(output, ":installDist")
        assertContains(project.run("otherTest", "-i").output, "told main=null")
    }

    @Test
    fun `svelteVerifyA11y is offered to apps and is not part of check`() {
        val project = project()
        project.buildScript(applicationBuild)
        assertContains(project.run("tasks", "--group=svelte").output, "svelteVerifyA11y")
        assertFalse(":svelteVerifyA11y" in project.run("check", "--dry-run").output)
    }

    @Test
    fun `svelteRecordTest wants a name and never replaces a test`() {
        val project = project()
        project.buildScript(applicationBuild)
        dir
            .resolve("src/main/java/Main.java")
            .apply {
                parentFile.mkdirs()
            }.writeText("public class Main { public static void main(String[] a) {} }")
        assertContains(
            project.runAndFail("svelteRecordTest").output,
            "Give the test a name that can be a class: svelteRecordTest --name=SignIn",
        )
        assertContains(project.runAndFail("svelteRecordTest", "--name=sign-in").output, "Give the test a name that can be a class")
        dir.resolve("src/browserTest/kotlin/SignInBrowserTest.kt").apply { parentFile.mkdirs() }.writeText("class SignInBrowserTest")
        assertContains(
            project.runAndFail("svelteRecordTest", "--name=SignIn").output,
            "svelteRecordTest does not overwrite: src/browserTest/kotlin/SignInBrowserTest.kt is already there.",
        )
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

    private fun pluginVersion(): String =
        TestProject(dir, "bun", "bun.lock")
            .apply { buildScript(javaBuild) }
            .run("svelteUpgradeNotes", "--since=0.0.1")
            .output
            .substringAfter("ktor-svelte 0.0.1 -> ")
            .substringBefore(":")

    @Test
    fun `svelteUpgrade changes the version in the catalog and says what to run next`() {
        val project = project()
        val current = pluginVersion()
        dir.resolve("gradle").mkdirs()
        dir.resolve("gradle/libs.versions.toml").writeText("[versions]\nktor-svelte = \"$current\"\n")

        val result = project.run("svelteUpgrade", "--to=99.0.0", "--bump-only")

        assertEquals("[versions]\nktor-svelte = \"99.0.0\"\n", dir.resolve("gradle/libs.versions.toml").readText())
        assertContains(result.output, "ktor-svelte $current -> 99.0.0 in gradle")
        assertContains(result.output, "Now run: ./gradlew :svelteSync :svelteUpgradeNotes --since=$current")
        assertContains(project.run("svelteUpgrade", "--to=0.1.0").output, "Nothing to upgrade.")
    }

    @Test
    fun `svelteUpgrade without a version to change says where to set it`() {
        val failure = project().runAndFail("svelteUpgrade", "--to=99.0.0", "--bump-only")
        assertContains(failure.output, "svelteUpgrade found no ktor-svelte ${pluginVersion()}")
    }

    @Test
    fun `svelteUpgradeNotes prints the notes since a version that apply to the project`() {
        val project = project()
        val all = project.run("svelteUpgradeNotes", "--since=1.3.0").output
        assertContains(all, "ktor-svelte 1.3.0 -> ${pluginVersion()}")
        assertContains(project.run("svelteUpgradeNotes", "--since=999.0.0").output, "nothing in this upgrade needs your attention")
    }
}
