package io.github.nijasc.ktor.svelte.gradle.tasks

import groovy.json.JsonSlurper
import io.github.nijasc.ktor.svelte.gradle.CONFIG_REPORT_SYSTEM_PROPERTY
import io.github.nijasc.ktor.svelte.gradle.DEVELOPMENT_SYSTEM_PROPERTY
import org.gradle.api.DefaultTask
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.MapProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.jvm.toolchain.JavaLauncher
import org.gradle.process.ExecOperations
import java.io.ByteArrayOutputStream
import javax.inject.Inject

@UntrackedTask(because = "Prints the current settings of the build and the app")
public abstract class SvelteConfigTask : DefaultTask() {
    @get:Input
    public abstract val gradleSettings: MapProperty<String, String>

    @get:Input
    @get:Optional
    public abstract val mainClass: Property<String>

    @get:Internal
    public abstract val appClasspath: ConfigurableFileCollection

    @get:Internal
    public abstract val javaLauncher: Property<JavaLauncher>

    @get:Internal
    public abstract val reportFile: RegularFileProperty

    @get:Inject
    protected abstract val execOperations: ExecOperations

    @TaskAction
    public fun report() {
        val (report, note) = readKtorSettings()
        logger.lifecycle(renderReport(gradleSettings.get(), report?.section("settings"), note, report?.section("defaults")))
    }

    private fun readKtorSettings(): Pair<Map<String, Any?>?, String?> {
        val main = mainClass.orNull ?: return null to "Apply the application plugin to see these. They are read from the running app."
        val report = reportFile.get().asFile
        report.delete()
        report.parentFile.mkdirs()
        val output = ByteArrayOutputStream()
        execOperations.javaexec { spec ->
            javaLauncher.orNull?.let { spec.executable = it.executablePath.asFile.path }
            spec.mainClass.set(main)
            spec.classpath = appClasspath
            spec.systemProperty(CONFIG_REPORT_SYSTEM_PROPERTY, report.absolutePath)
            spec.systemProperty(DEVELOPMENT_SYSTEM_PROPERTY, "true")
            spec.environment("PORT", "0")
            spec.standardOutput = output
            spec.errorOutput = output
            spec.isIgnoreExitValue = true
        }
        if (!report.isFile) {
            logger.info(output.toString(Charsets.UTF_8))
            return null to "The app did not report its settings. Check that it installs the Svelte plugin, or run with --info."
        }
        @Suppress("UNCHECKED_CAST")
        return JsonSlurper().parse(report) as Map<String, Any?> to null
    }
}

@Suppress("UNCHECKED_CAST")
private fun Map<String, Any?>.section(name: String): Map<String, Any?>? = get(name) as? Map<String, Any?>
