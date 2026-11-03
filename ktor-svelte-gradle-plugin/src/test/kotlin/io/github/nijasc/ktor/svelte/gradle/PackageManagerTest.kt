package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue

class PackageManagerTest {
    @TempDir
    lateinit var dir: File

    @Test
    fun `lockfiles select the matching tool`() {
        val expectations =
            mapOf(
                "bun.lock" to PackageManager.BUN,
                "bun.lockb" to PackageManager.BUN,
                "pnpm-lock.yaml" to PackageManager.PNPM,
                "package-lock.json" to PackageManager.NPM,
                "yarn.lock" to PackageManager.YARN,
            )
        expectations.forEach { (lockfile, expected) ->
            val project = dir.resolve(lockfile + "-project").apply { mkdirs() }
            project.resolve(lockfile).writeText("")
            assertEquals(expected, resolveFrontendTool(project, PackageManager.AUTO).packageManager)
        }
    }

    @Test
    fun `explicit package manager overrides the lockfile`() {
        dir.resolve("bun.lock").writeText("")
        assertEquals(PackageManager.NPM, resolveFrontendTool(dir, PackageManager.NPM).packageManager)
    }

    @Test
    fun `missing lockfile explains what to do`() {
        val failure = assertFailsWith<GradleException> { resolveFrontendTool(dir, PackageManager.AUTO) }
        assertTrue(failure.message.orEmpty().contains("found no lockfile"))
    }

    @Test
    fun `install uses the frozen lockfile for every tool`() {
        assertEquals(listOf("ci"), FrontendTool(PackageManager.NPM).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.BUN).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.PNPM).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.YARN).installArguments)
    }

    @Test
    fun `only npm needs a separator before script arguments`() {
        val arguments = listOf("--port", "5173")
        assertEquals(listOf("run", "dev", "--", "--port", "5173"), FrontendTool(PackageManager.NPM).runArguments("dev", arguments))
        assertEquals(listOf("run", "dev", "--port", "5173"), FrontendTool(PackageManager.BUN).runArguments("dev", arguments))
        assertEquals(listOf("run", "build"), FrontendTool(PackageManager.NPM).runArguments("build"))
    }

    @Test
    fun `windows lookup finds cmd launchers`() {
        val launcher = dir.resolve("npm.cmd").apply { writeText("") }
        launcher.setExecutable(true)
        assertEquals(launcher, locateExecutable("npm", dir.path, isWindows = true))
    }

    @Test
    fun `missing executable returns null`() {
        assertNull(locateExecutable("nothing-here", dir.path, isWindows = false))
    }
}
