package io.github.nijasc.ktor.svelte.gradle

import org.gradle.testkit.runner.BuildResult
import org.gradle.testkit.runner.GradleRunner
import java.io.File

private val isWindows = System.getProperty("os.name").startsWith("Windows")

internal val testedGradleVersion: String? = System.getProperty("ktorSvelte.testGradleVersion")?.takeIf { it.isNotBlank() }

internal class TestProject(
    val dir: File,
    private val toolName: String = "bun",
    lockfile: String = "bun.lock",
) {
    val frontend: File = dir.resolve("frontend").apply { mkdirs() }
    private val binDir: File = dir.resolve("fake-bin").apply { mkdirs() }
    private val callLog: File = binDir.resolve("calls.log")
    var environment: Map<String, String> = emptyMap()

    init {
        dir.resolve("settings.gradle.kts").writeText("rootProject.name = \"sample\"\n")
        frontend.resolve("package.json").writeText("{}")
        frontend.resolve(lockfile).writeText("lock")
        frontend.resolve("app.txt").writeText("source")
        writeFakeTool(toolName)
    }

    fun buildScript(content: String) {
        dir.resolve("build.gradle.kts").writeText(content)
    }

    fun calls(): List<String> = if (callLog.isFile) callLog.readLines().map { it.trim() }.filter { it != "--version" } else emptyList()

    fun clearCalls() {
        callLog.delete()
    }

    fun run(vararg arguments: String): BuildResult = runner(*arguments).build()

    fun runAndFail(vararg arguments: String): BuildResult = runner(*arguments).buildAndFail()

    fun removeFakeTool() {
        binDir.listFiles().orEmpty().forEach { it.delete() }
    }

    fun runnerWithoutPluginClasspath(vararg arguments: String): GradleRunner = baseRunner(*arguments)

    private fun runner(vararg arguments: String): GradleRunner = baseRunner(*arguments).withPluginClasspath()

    private fun baseRunner(vararg arguments: String): GradleRunner {
        val inherited = System.getenv().filterKeys { !it.equals("PATH", ignoreCase = true) }
        val path = binDir.path + File.pathSeparator + System.getenv("PATH")
        val runner =
            GradleRunner
                .create()
                .withProjectDir(dir)
                .withEnvironment(inherited + ("PATH" to path) + environment)
                .withArguments(arguments.toList() + "--stacktrace")
                .forwardOutput()
        testedGradleVersion?.let { runner.withGradleVersion(it) }
        return runner
    }

    private fun forwardedTrustStoreProperties(): String =
        listOf("javax.net.ssl.trustStore", "javax.net.ssl.trustStoreType")
            .mapNotNull { name -> System.getProperty(name)?.let { value -> "systemProp.$name=$value" } }
            .joinToString(separator = "\n", postfix = "\n")

    private fun writeFakeTool(name: String) {
        if (isWindows) {
            binDir.resolve("$name.cmd").writeText(
                listOf(
                    "@echo off",
                    "echo %*>>\"%~dp0calls.log\"",
                    "if \"%1\"==\"--version\" (echo 1.0.0& exit /b 0)",
                    "if \"%1\"==\"run\" if exist fail-run (echo fake build error& exit /b 3)",
                    "if \"%1\"==\"run\" (",
                    "  echo fake build output",
                    "  if not exist build\\_app\\immutable mkdir build\\_app\\immutable",
                    "  echo home> build\\index.html",
                    "  echo asset> build\\_app\\immutable\\app.js",
                    "  exit /b 0",
                    ")",
                    "if not exist node_modules mkdir node_modules",
                    "exit /b 0",
                ).joinToString("\r\n") + "\r\n",
            )
        } else {
            val script = binDir.resolve(name)
            script.writeText(
                listOf(
                    "#!/bin/sh",
                    "echo \"\$*\" >> \"\$(dirname \"\$0\")/calls.log\"",
                    "case \"\$1\" in",
                    "  --version) echo 1.0.0 ;;",
                    "  run) if [ -f fail-run ]; then echo fake build error; exit 3; fi; echo fake build output; mkdir -p build/_app/immutable; echo home > build/index.html; echo asset > build/_app/immutable/app.js ;;",
                    "  *) mkdir -p node_modules ;;",
                    "esac",
                ).joinToString("\n") + "\n",
            )
            script.setExecutable(true)
        }
    }
}
