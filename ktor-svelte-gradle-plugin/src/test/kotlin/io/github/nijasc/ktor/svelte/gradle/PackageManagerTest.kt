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
                "bun.lock" to PackageManager.Bun,
                "bun.lockb" to PackageManager.Bun,
                "pnpm-lock.yaml" to PackageManager.Pnpm,
                "package-lock.json" to PackageManager.Npm,
                "yarn.lock" to PackageManager.Yarn,
            )
        expectations.forEach { (lockfile, expected) ->
            val project = dir.resolve(lockfile + "-project").apply { mkdirs() }
            project.resolve(lockfile).writeText("")
            assertEquals(expected, resolveFrontendTool(project, PackageManager.Auto).packageManager)
        }
    }

    @Test
    fun `explicit package manager overrides the lockfile`() {
        dir.resolve("bun.lock").writeText("")
        assertEquals(PackageManager.Npm, resolveFrontendTool(dir, PackageManager.Npm).packageManager)
    }

    @Test
    fun `missing lockfile explains what to do`() {
        val failure = assertFailsWith<GradleException> { resolveFrontendTool(dir, PackageManager.Auto) }
        assertTrue(failure.message.orEmpty().contains("found no lockfile"))
    }

    @Test
    fun `install uses the frozen lockfile for every tool`() {
        assertEquals(listOf("ci"), FrontendTool(PackageManager.Npm).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.Bun).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.Pnpm).installArguments)
        assertEquals(listOf("install", "--frozen-lockfile"), FrontendTool(PackageManager.Yarn).installArguments)
    }

    @Test
    fun `only npm needs a separator before script arguments`() {
        val arguments = listOf("--port", "5173")
        assertEquals(listOf("run", "dev", "--", "--port", "5173"), FrontendTool(PackageManager.Npm).runArguments("dev", arguments))
        assertEquals(listOf("run", "dev", "--port", "5173"), FrontendTool(PackageManager.Bun).runArguments("dev", arguments))
        assertEquals(listOf("run", "build"), FrontendTool(PackageManager.Npm).runArguments("build"))
    }

    @Test
    fun `windows lookup finds cmd launchers`() {
        val launcher = dir.resolve("npm.cmd").apply { writeText("") }
        launcher.setExecutable(true)
        assertEquals(launcher, locateExecutable("npm", dir.path, isWindows = true))
    }

    @Test
    fun `messy path entries still find tools`() {
        val launcher = dir.resolve("bun.exe").apply { writeText("") }
        launcher.setExecutable(true)
        assertEquals(launcher, locateExecutable("bun", " ${dir.path};; ", isWindows = true))
        assertEquals(launcher, locateExecutable("bun", "\"${dir.path}\"", isWindows = true))
    }

    @Test
    fun `missing executable returns null`() {
        assertNull(locateExecutable("nothing-here", dir.path, isWindows = false))
    }
}
