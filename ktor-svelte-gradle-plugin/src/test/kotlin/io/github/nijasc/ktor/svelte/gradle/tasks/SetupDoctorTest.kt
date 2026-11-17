package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.PackageManager
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class SetupDoctorTest {
    @TempDir
    lateinit var dir: File

    private val goodManifest =
        """{"imports":{"#api":"./src/lib/api/index.ts"},"devDependencies":{"@sveltejs/kit":"^3.1.1","@sveltejs/adapter-static":"^4.0.1"}}"""

    private val bundle: File get() = dir.resolve("bundle")

    private fun healthyProject() {
        dir.resolve("package.json").writeText(goodManifest)
        dir.resolve("bun.lock").writeText("")
        dir.resolve("tsconfig.json").writeText("""{"extends":"${'$'}app/tsconfig"}""")
        dir.resolve("vite.config.ts").writeText("adapter({ fallback: '200.html' })")
        installPackage("@sveltejs/kit", """{"exports":{".":{"types":"./types/index.d.ts","import":"./src/index.js"}}}""", "src/index.js")
        installPackage("@sveltejs/adapter-static", """{"main":"index.js"}""", "index.js")
        dir.resolve("src/routes").mkdirs()
        dir.resolve("src/routes/+page.ts").writeText("import { x } from '#lib/x.js';")
    }

    private fun installPackage(
        name: String,
        manifest: String,
        vararg files: String,
    ) {
        val root = dir.resolve("node_modules/$name")
        root.mkdirs()
        root.resolve("package.json").writeText(manifest)
        files.forEach { path ->
            root.resolve(path).parentFile.mkdirs()
            root.resolve(path).writeText("")
        }
    }

    private fun bundleFrontend(manifestSize: Long = 5) {
        bundle.resolve("ktor-svelte/public").mkdirs()
        bundle.resolve("ktor-svelte/public/index.html").writeText("12345")
        bundle
            .resolve(
                "ktor-svelte/manifest.json",
            ).writeText("""{"formatVersion":1,"files":{"index.html":{"size":$manifestSize,"hash":"x"}}}""")
    }

    private fun examine(
        toolFound: Boolean = true,
        portFree: Boolean = true,
        packageManager: PackageManager = PackageManager.Auto,
        node: String? = "v22.12.0",
        outputDir: String = "build",
        environment: Map<String, String> = emptyMap(),
    ) = SetupDoctor(
        dir,
        packageManager,
        5173,
        outputDir,
        bundle,
        findExecutable = { if (toolFound) File(it) else null },
        isPortFree = { portFree },
        nodeVersion = { node },
        environment = { environment[it] },
        userHome = null,
        registryProbe = { RegistryAnswer.Answered(200) },
    ).examine()

    private fun List<Finding>.messagesAt(severity: Severity) = filter { it.severity == severity }.map { it.message }

    @Test
    fun `a pinned Node is reported instead of the installed one, and npm comes with it`() {
        healthyProject()
        dir.resolve("bun.lock").delete()
        dir.resolve("package-lock.json").writeText("{}")
        val messages =
            SetupDoctor(
                dir,
                PackageManager.Auto,
                5173,
                "build",
                bundle,
                findExecutable = { null },
                isPortFree = { true },
                nodeVersion = { null },
                pinnedNodeVersion = "22.12.0",
                environment = { null },
                userHome = null,
                registryProbe = { RegistryAnswer.Answered(200) },
            ).examine().map { it.message }
        assertTrue("npm comes with the pinned Node 22.12.0" in messages, messages.toString())
        assertTrue("Node 22.12.0 is pinned, and ktor-svelte downloads it when a task needs it" in messages, messages.toString())
    }

    @Test
    fun `healthy project has no problems`() {
        healthyProject()
        assertEquals(emptyList(), examine().filter { it.severity != Severity.OK })
    }

    @Test
    fun `missing frontend says to run svelteInit`() {
        dir.delete()
        assertTrue(examine().single().message.contains("svelteInit"))
    }

    @Test
    fun `missing tool is an error`() {
        healthyProject()
        assertTrue(examine(toolFound = false).messagesAt(Severity.ERROR).single().contains("bun is not on PATH"))
    }

    @Test
    fun `missing lockfile is an error`() {
        healthyProject()
        dir.resolve("bun.lock").delete()
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("No lockfile"))
    }

    @Test
    fun `svelte config file is an error`() {
        healthyProject()
        dir.resolve("svelte.config.js").writeText("")
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("svelte.config.js is not used"))
    }

    @Test
    fun `dollar lib imports are an error`() {
        healthyProject()
        dir.resolve("src/routes/+page.ts").writeText("import { x } from '${'$'}lib/x';")
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("imports ${'$'}lib"))
    }

    @Test
    fun `other adapters are an error`() {
        healthyProject()
        dir.resolve("package.json").writeText(goodManifest.replace("adapter-static", "adapter-node"))
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("adapter-static"))
    }

    @Test
    fun `older kit is a warning`() {
        healthyProject()
        dir.resolve("package.json").writeText(goodManifest.replace("^3.1.1", "^2.0.0"))
        assertTrue(examine().messagesAt(Severity.WARN).single().contains("SvelteKit 2"))
    }

    @Test
    fun `adapter pages option must match the output directory`() {
        healthyProject()
        dir.resolve("vite.config.ts").writeText("adapter({ pages: 'dist', fallback: '200.html' })")
        val message = examine().messagesAt(Severity.ERROR).single()
        assertTrue(message.contains("writes to 'dist' but svelte.outputDir is 'build'"), message)
        assertEquals(emptyList(), examine(outputDir = "./dist/").messagesAt(Severity.ERROR))
    }

    @Test
    fun `default adapter output is compared with a custom output directory`() {
        healthyProject()
        assertTrue(
            examine(outputDir = "dist").messagesAt(Severity.ERROR).single().contains("writes to 'build' but svelte.outputDir is 'dist'"),
        )
    }

    @Test
    fun `computed pages option is not compared`() {
        healthyProject()
        dir.resolve("vite.config.ts").writeText("adapter({ pages: outputFolder })")
        assertEquals(emptyList(), examine(outputDir = "dist").messagesAt(Severity.ERROR))
    }

    @Test
    fun `missing vite config is a warning`() {
        healthyProject()
        dir.resolve("vite.config.ts").delete()
        assertTrue(examine().messagesAt(Severity.WARN).single().contains("No vite.config"))
    }

    @Test
    fun `old or missing node is a warning`() {
        healthyProject()
        assertTrue(examine(node = "v18.20.1").messagesAt(Severity.WARN).single().contains("too old"))
        assertTrue(examine(node = "v22.11.0").messagesAt(Severity.WARN).single().contains("too old"))
        assertTrue(
            examine(node = null, packageManager = PackageManager.Pnpm).messagesAt(Severity.WARN).single().contains("Node is not on PATH"),
        )
        assertEquals(emptyList(), examine(node = null).filter { it.severity != Severity.OK })
        assertEquals(emptyList(), examine(node = "v20.19.0").filter { it.severity != Severity.OK })
        assertEquals(emptyList(), examine(node = "v24.1.0").filter { it.severity != Severity.OK })
    }

    @Test
    fun `a consistent bundled manifest is fine`() {
        healthyProject()
        bundleFrontend()
        assertTrue(examine().any { it.message == "Bundled manifest lists 1 files" })
    }

    @Test
    fun `a stale bundled manifest says to bundle again`() {
        healthyProject()
        bundleFrontend(manifestSize = 99)
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("index.html does not match its listed size"))
        bundle.resolve("ktor-svelte/public/index.html").delete()
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("index.html is listed but missing"))
    }

    @Test
    fun `a broken manifest is an error`() {
        healthyProject()
        bundle.resolve("ktor-svelte").mkdirs()
        bundle.resolve("ktor-svelte/manifest.json").writeText("not json")
        assertTrue(examine().messagesAt(Severity.ERROR).single().contains("not a valid ktor-svelte manifest"))
    }

    @Test
    fun `busy port and missing imports are warnings`() {
        healthyProject()
        dir.resolve("package.json").writeText(goodManifest.replace("#api", "#other"))
        assertEquals(2, examine(portFree = false).messagesAt(Severity.WARN).size)
    }

    @Test
    fun `packages that lost their files are an error naming the cache command`() {
        healthyProject()
        installPackage("picomatch", """{"main":"index.js"}""")
        installPackage(
            "rolldown",
            """{"exports":{".":"./dist/index.mjs","./parseAst":"./dist/parse-ast-index.mjs"}}""",
            "dist/shared/chunk.mjs",
        )
        installPackage("@types/estree", """{"main":"","types":"index.d.ts"}""")
        val error = examine().messagesAt(Severity.ERROR).single()
        assertTrue(error.contains("3 installed package(s) are missing their files (@types/estree, picomatch, rolldown)"), error)
        assertTrue(error.contains("bun pm cache rm"), error)
    }

    @Test
    fun `packages without declared entry files or with wildcard exports are not judged`() {
        healthyProject()
        installPackage("only-data", """{"name":"only-data"}""")
        installPackage("wildcards", """{"exports":{"./*":"./dist/*.js"}}""")
        installPackage("extensionless", """{"main":"lib/index"}""", "lib/index.js")
        installPackage("folder-main", """{"main":"lib"}""", "lib/index.js")
        assertEquals(emptyList(), examine().filter { it.severity != Severity.OK })
    }

    @Test
    fun `a declared dependency that is not installed is a warning`() {
        healthyProject()
        dir.resolve("node_modules/@sveltejs/adapter-static").deleteRecursively()
        val warning = examine().messagesAt(Severity.WARN).single()
        assertTrue(warning.contains("@sveltejs/adapter-static in package.json is not installed"), warning)
    }

    @Test
    fun `missing node_modules is a warning`() {
        healthyProject()
        dir.resolve("node_modules").deleteRecursively()
        assertTrue(examine().messagesAt(Severity.WARN).single().contains("not installed yet"))
    }

    @Test
    fun `extra certificates that do not exist are a warning`() {
        healthyProject()
        val missing = dir.resolve("corp-root.pem")
        val warning = examine(environment = mapOf("NODE_EXTRA_CA_CERTS" to missing.path)).messagesAt(Severity.WARN).single()
        assertTrue(warning.contains("NODE_EXTRA_CA_CERTS points to ${missing.path}, which does not exist"), warning)
        missing.writeText("certificate")
        val findings = examine(environment = mapOf("NODE_EXTRA_CA_CERTS" to missing.path))
        assertEquals(emptyList(), findings.filter { it.severity != Severity.OK })
        assertTrue(findings.any { it.message == "NODE_EXTRA_CA_CERTS file exists" })
    }
}
