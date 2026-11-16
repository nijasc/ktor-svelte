package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import org.junit.jupiter.api.io.TempDir
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class SetupDoctorFixTest {
    @TempDir
    lateinit var dir: File

    private val dollar = "$"

    private val packages = """"devDependencies":{"@sveltejs/kit":"^3.1.1","@sveltejs/adapter-static":"^4.0.1"}"""

    private fun project(
        manifest: String = """{"imports":{"#api":"./src/lib/api/index.ts"},$packages}""",
        tsconfig: String = """{"extends":"${dollar}app/tsconfig"}""",
    ) {
        dir.resolve("package.json").writeText(manifest)
        dir.resolve("bun.lock").writeText("")
        dir.resolve("tsconfig.json").writeText(tsconfig)
        dir.resolve("vite.config.ts").writeText("adapter({ fallback: '200.html' })")
        listOf("@sveltejs/kit", "@sveltejs/adapter-static").forEach { name ->
            val root = dir.resolve("node_modules/$name")
            root.mkdirs()
            root.resolve("package.json").writeText("""{"main":"index.js"}""")
            root.resolve("index.js").writeText("")
        }
        dir.resolve("src/routes").mkdirs()
        dir.resolve("src/routes/+page.ts").writeText("import { x } from '#lib/x.js';")
    }

    private fun doctor() =
        SetupDoctor(
            dir,
            PackageManager.Auto,
            5173,
            findExecutable = { File(it) },
            isPortFree = { true },
            nodeVersion = { "v22.12.0" },
            environment = { null },
        )

    private fun json(name: String) = JsonSlurper().parse(dir.resolve(name)) as Map<*, *>

    @Test
    fun `a healthy project has nothing to fix`() {
        project()
        assertEquals(emptyList(), doctor().fix())
        assertTrue(doctor().examine().none { it.fix != null })
    }

    @Test
    fun `the api import is added and everything else in package json is kept`() {
        project(manifest = """{"name":"shop","imports":{"#other":"./x.ts"},$packages}""")
        assertEquals(listOf("Added the #api import to package.json"), doctor().fix())
        val manifest = json("package.json")
        assertEquals("shop", manifest["name"])
        assertEquals(mapOf("#other" to "./x.ts", "#api" to "./src/lib/api/index.ts"), manifest["imports"])
        assertEquals(emptyList(), doctor().examine().filter { it.severity != Severity.OK })
    }

    @Test
    fun `tsconfig is made to extend the app config and keeps its options`() {
        project(tsconfig = """{"extends":"./.svelte-kit/tsconfig.json","compilerOptions":{"strict":true}}""")
        assertEquals(listOf("Made tsconfig.json extend ${dollar}app/tsconfig"), doctor().fix())
        assertEquals(mapOf("extends" to "${dollar}app/tsconfig", "compilerOptions" to mapOf("strict" to true)), json("tsconfig.json"))
    }

    @Test
    fun `a tsconfig with comments is reported but left alone`() {
        val withComments = "{\n  // keep\n  \"compilerOptions\": {}\n}\n"
        project(tsconfig = withComments)
        assertEquals(emptyList(), doctor().fix())
        assertEquals(withComments, dir.resolve("tsconfig.json").readText())
        assertTrue(doctor().examine().any { it.severity == Severity.WARN && "tsconfig.json should extend" in it.message })
    }

    @Test
    fun `dollar lib imports are rewritten in every file and the lib import is added`() {
        project()
        val page = dir.resolve("src/routes/+page.svelte")
        val load = dir.resolve("src/routes/+page.ts")
        page.writeText(
            "<script>\n    import Button from \"${dollar}lib/Button.svelte\";\n    const lazy = () => import('${dollar}lib/big.js');\n</script>\n",
        )
        load.writeText("import { x } from '${dollar}lib/x.js';\nimport '${dollar}lib/side-effect.js';\nconst price = '${dollar}lib';\n")
        assertEquals(listOf("Rewrote ${dollar}lib imports to #lib in 2 file(s)"), doctor().fix())
        assertEquals(
            "<script>\n    import Button from \"#lib/Button.svelte\";\n    const lazy = () => import('#lib/big.js');\n</script>\n",
            page.readText(),
        )
        assertEquals("import { x } from '#lib/x.js';\nimport '#lib/side-effect.js';\nconst price = '${dollar}lib';\n", load.readText())
        assertEquals("./src/lib/*", (json("package.json")["imports"] as Map<*, *>)["#lib/*"])
        assertEquals(emptyList(), doctor().examine().filter { it.severity != Severity.OK })
    }

    @Test
    fun `an install that lost its files is removed so it gets installed again`() {
        project()
        dir.resolve("node_modules/@sveltejs/kit/index.js").delete()
        assertEquals(listOf("Deleted node_modules, so the next task that needs it installs it again"), doctor().fix())
        assertFalse(dir.resolve("node_modules").exists())
    }

    @Test
    fun `problems that need a decision are not touched`() {
        project(manifest = """{"imports":{"#api":"./src/lib/api/index.ts"},"devDependencies":{"@sveltejs/kit":"^2.0.0"}}""")
        dir.resolve("node_modules/@sveltejs/adapter-static").deleteRecursively()
        assertEquals(emptyList(), doctor().fix())
        assertTrue(doctor().examine().any { it.severity == Severity.ERROR })
    }
}
