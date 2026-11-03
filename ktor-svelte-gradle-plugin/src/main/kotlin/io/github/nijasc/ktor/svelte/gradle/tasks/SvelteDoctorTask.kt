package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.LOCKFILES
import io.github.nijasc.ktor.svelte.gradle.PackageManager
import io.github.nijasc.ktor.svelte.gradle.locateExecutable
import io.github.nijasc.ktor.svelte.gradle.resolveFrontendTool
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.io.File
import java.net.BindException
import java.net.InetAddress
import java.net.ServerSocket

internal enum class Severity { OK, WARN, ERROR }

internal data class Finding(
    val severity: Severity,
    val message: String,
)

internal class SetupDoctor(
    private val frontend: File,
    private val packageManager: PackageManager,
    private val devPort: Int,
    private val findExecutable: (String) -> File? = { locateExecutable(it) },
    private val isPortFree: (Int) -> Boolean = ::portIsFree,
) {
    fun examine(): List<Finding> {
        if (!frontend.isDirectory) return listOf(Finding(Severity.ERROR, "No frontend at $frontend. Run svelteInit to create one."))
        val packageJson = frontend.resolve("package.json")
        if (!packageJson.isFile) return listOf(Finding(Severity.ERROR, "No package.json in $frontend. Run svelteInit in an empty folder."))
        val manifest = packageJson.readText()
        return listOf(
            tool(),
            kitVersion(manifest),
            adapter(manifest),
            legacyConfig(),
            subpathImports(manifest),
            tsconfig(),
            legacyLibImports(),
            dependenciesInstalled(),
            port(),
        )
    }

    private fun tool(): Finding {
        if (packageManager == PackageManager.AUTO && LOCKFILES.none { (name, _) -> frontend.resolve(name).isFile }) {
            return Finding(Severity.ERROR, "No lockfile found. Install dependencies once, or set svelte.packageManager.")
        }
        val name = resolveFrontendTool(frontend, packageManager).executableName
        return if (findExecutable(name) != null) {
            Finding(Severity.OK, "Package manager $name is on PATH")
        } else {
            Finding(Severity.ERROR, "$name is not on PATH. Install it, or set svelte.packageManager.")
        }
    }

    private fun kitVersion(manifest: String): Finding {
        val major = Regex("\"@sveltejs/kit\"\\s*:\\s*\"[^0-9\"]*(\\d+)").find(manifest)?.groupValues?.get(1)
        return when {
            major == null -> Finding(Severity.ERROR, "@sveltejs/kit is not a dependency.")
            major == "3" -> Finding(Severity.OK, "SvelteKit 3")
            else -> Finding(Severity.WARN, "SvelteKit $major is not tested. ktor-svelte supports SvelteKit 3.")
        }
    }

    private fun adapter(manifest: String): Finding =
        if ("@sveltejs/adapter-static" in manifest) {
            Finding(Severity.OK, "Uses adapter-static")
        } else {
            Finding(Severity.ERROR, "@sveltejs/adapter-static is not a dependency. ktor-svelte serves static builds only.")
        }

    private fun legacyConfig(): Finding {
        val legacy = listOf("svelte.config.js", "svelte.config.ts").firstOrNull { frontend.resolve(it).isFile }
        return if (legacy == null) {
            Finding(Severity.OK, "No svelte.config file")
        } else {
            Finding(Severity.ERROR, "$legacy is not used by SvelteKit 3. Move its options to sveltekit() in the Vite config.")
        }
    }

    private fun subpathImports(manifest: String): Finding =
        if ("\"#lib/*\"" in manifest) {
            Finding(Severity.OK, "#lib import is configured")
        } else {
            Finding(Severity.WARN, "package.json has no \"#lib/*\" import. Generated TypeScript is imported through #lib.")
        }

    private fun tsconfig(): Finding {
        val file = frontend.resolve("tsconfig.json")
        return when {
            !file.isFile -> Finding(Severity.OK, "No tsconfig.json, so type checking is off")
            "\$app/tsconfig" in file.readText() -> Finding(Severity.OK, "tsconfig.json extends \$app/tsconfig")
            else -> Finding(Severity.WARN, "tsconfig.json should extend \$app/tsconfig on SvelteKit 3.")
        }
    }

    private fun legacyLibImports(): Finding {
        val offender =
            frontend
                .resolve("src")
                .walkTopDown()
                .filter { it.isFile && it.extension in setOf("ts", "js", "svelte") }
                .firstOrNull { "from '\$lib" in it.readText() || "from \"\$lib" in it.readText() }
        return if (offender == null) {
            Finding(Severity.OK, "No \$lib imports")
        } else {
            Finding(Severity.ERROR, "${offender.relativeTo(frontend).invariantSeparatorsPath} imports \$lib. SvelteKit 3 uses #lib.")
        }
    }

    private fun dependenciesInstalled(): Finding =
        if (frontend.resolve("node_modules").isDirectory) {
            Finding(Severity.OK, "Dependencies are installed")
        } else {
            Finding(Severity.WARN, "Dependencies are not installed yet. svelteInstall runs automatically when needed.")
        }

    private fun port(): Finding =
        if (isPortFree(devPort)) {
            Finding(Severity.OK, "Port $devPort is free")
        } else {
            Finding(Severity.WARN, "Port $devPort is in use. If Vite is not running, a process was left behind.")
        }
}

private fun portIsFree(port: Int): Boolean =
    try {
        ServerSocket(port, 1, InetAddress.getLoopbackAddress()).close()
        true
    } catch (_: BindException) {
        false
    }

@UntrackedTask(because = "Checks the state of the machine and the frontend project")
public abstract class SvelteDoctorTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Input
    public abstract val packageManager: Property<PackageManager>

    @get:Input
    public abstract val devPort: Property<Int>

    @TaskAction
    public fun examine() {
        val findings = SetupDoctor(frontendDir.get().asFile, packageManager.get(), devPort.get()).examine()
        findings.forEach { finding -> logger.lifecycle("${finding.severity.name.padEnd(5)} ${finding.message}") }
        val errors = findings.count { it.severity == Severity.ERROR }
        if (errors > 0) throw GradleException("svelteDoctor found $errors problem(s) to fix.")
    }
}
