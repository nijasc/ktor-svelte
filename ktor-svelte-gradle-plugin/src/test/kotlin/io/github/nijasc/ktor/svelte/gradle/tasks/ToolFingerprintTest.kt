package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals

class ToolFingerprintTest {
    @TempDir
    lateinit var dir: File

    private fun file(
        path: String,
        content: String,
    ): File = dir.resolve(path).apply { parentFile.mkdirs() }.apply { writeText(content) }

    @Test
    fun `a shim next to its package uses the package version`() {
        val shim = file("bin/npm.cmd", "@node npm-cli.js %*")
        file("bin/node_modules/npm/package.json", """{"name":"npm","version":"10.9.2"}""")
        assertEquals("npm@10.9.2", toolFingerprint(shim, "npm"))
    }

    @Test
    fun `a script inside its package uses the package version`() {
        val script = file("lib/node_modules/pnpm/bin/pnpm.cjs", "#!/usr/bin/env node")
        file("lib/node_modules/pnpm/package.json", """{"name":"pnpm","version":"9.15.0"}""")
        assertEquals("pnpm@9.15.0", toolFingerprint(script, "pnpm"))
    }

    @Test
    fun `a native binary uses its size`() {
        val binary = file("bun/bin/bun", "binary-content")
        assertEquals("size 14", toolFingerprint(binary, "bun"))
    }

    @Test
    fun `an unrelated package json is ignored`() {
        val binary = file("project/tools/bun", "bin")
        file("project/package.json", """{"name":"my-app","version":"1.0.0"}""")
        assertEquals("size 3", toolFingerprint(binary, "bun"))
    }

    @Test
    fun `a version change changes the fingerprint`() {
        val shim = file("bin/yarn", "shim")
        val packageJson = file("bin/node_modules/yarn/package.json", """{"name":"yarn","version":"1.22.21"}""")
        val before = toolFingerprint(shim, "yarn")
        packageJson.writeText("""{"name":"yarn","version":"1.22.22"}""")
        assertEquals(false, before == toolFingerprint(shim, "yarn"))
    }
}
