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
        """{"imports":{"#lib/*":"./src/lib/*"},"devDependencies":{"@sveltejs/kit":"^3.1.1","@sveltejs/adapter-static":"^4.0.1"}}"""

    private fun healthyProject() {
        dir.resolve("package.json").writeText(goodManifest)
        dir.resolve("bun.lock").writeText("")
        dir.resolve("tsconfig.json").writeText("""{"extends":"${'$'}app/tsconfig"}""")
        dir.resolve("node_modules").mkdirs()
        dir.resolve("src/routes").mkdirs()
        dir.resolve("src/routes/+page.ts").writeText("import { x } from '#lib/x.js';")
    }

    private fun examine(
        toolFound: Boolean = true,
        portFree: Boolean = true,
        packageManager: PackageManager = PackageManager.AUTO,
    ) = SetupDoctor(
        dir,
        packageManager,
        5173,
        findExecutable = { if (toolFound) File(it) else null },
        isPortFree = { portFree },
    ).examine()

    private fun List<Finding>.messagesAt(severity: Severity) = filter { it.severity == severity }.map { it.message }

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
    fun `busy port and missing imports are warnings`() {
        healthyProject()
        dir.resolve("package.json").writeText(goodManifest.replace("#lib/*", "#other"))
        assertEquals(2, examine(portFree = false).messagesAt(Severity.WARN).size)
    }
}
