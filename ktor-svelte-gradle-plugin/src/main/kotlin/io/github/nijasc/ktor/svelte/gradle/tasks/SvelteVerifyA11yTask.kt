package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import org.gradle.jvm.toolchain.JavaLauncher
import org.gradle.process.ExecOperations
import java.io.File
import javax.inject.Inject

private const val A11Y_MAIN = "io.github.nijasc.ktor.svelte.test.AccessibilityCheck"

internal fun a11yFailure(
    problems: List<String>,
    pages: Int,
): String =
    "axe found ${problems.size} accessibility problem${if (problems.size == 1) "" else "s"} " +
        "on $pages page${if (pages == 1) "" else "s"}:\n" +
        problems.joinToString("\n") { "  $it" } + "\nEach rule is explained at https://dequeuniversity.com/rules/axe/." +
        DocLink.BROWSER_TESTS.see()

@UntrackedTask(because = "Starts the packaged app and a browser")
public abstract class SvelteVerifyA11yTask : DefaultTask() {
    @get:Inject
    protected abstract val execOperations: ExecOperations

    @get:Internal
    public abstract val javaLauncher: Property<JavaLauncher>

    @get:Internal
    public abstract val runnerClasspath: ConfigurableFileCollection

    @get:Internal
    public abstract val jarFile: RegularFileProperty

    @get:Internal
    public abstract val libDirectory: DirectoryProperty

    @get:Internal
    public abstract val mainClass: Property<String>

    @get:Internal
    public abstract val buildOutput: DirectoryProperty

    @get:Internal
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val reportFile: RegularFileProperty

    @get:Internal
    public abstract val lightTheme: Property<String>

    @get:Internal
    public abstract val darkTheme: Property<String>

    @get:Internal
    public abstract val browser: Property<String>

    @get:Internal
    @get:Option(option = "path", description = "Another page to check. Can be given more than once.")
    public abstract val paths: ListProperty<String>

    @TaskAction
    public fun verify() {
        val directory = projectDirectory.get().asFile
        val pages =
            (
                prerenderedPages(
                    buildOutput.get().asFile,
                ) + paths.getOrElse(emptyList()).map { if (it.startsWith("/")) it else "/$it" }
            ).distinct()
        if (pages.isEmpty()) {
            throw GradleException(
                "svelteVerifyA11y found no prerendered page to check. Name one with --path=/." + DocLink.BROWSER_TESTS.see(),
            )
        }
        val report = reportFile.get().asFile.apply { delete() }
        val jar = jarFile.orNull?.asFile
        val app =
            if (jar != null) {
                listOf("-D$TEST_JAR_PROPERTY=${jar.path}")
            } else {
                listOf(
                    "-D$TEST_CLASSPATH_PROPERTY=${libDirectory.get().asFile.path}${File.separator}*",
                    "-D$TEST_MAIN_PROPERTY=${mainClass.get()}",
                )
            }
        execOperations.javaexec { spec ->
            spec.executable =
                javaLauncher
                    .get()
                    .executablePath.asFile.path
            spec.classpath = runnerClasspath
            spec.mainClass.set(A11Y_MAIN)
            spec.workingDir = directory
            spec.jvmArgs(app + "-Dbrowser=${browser.getOrElse("chromium")}")
            spec.args(listOf(report.path, lightTheme.getOrElse(""), darkTheme.getOrElse("")) + pages)
        }
        val problems =
            report.takeIf(File::isFile)?.readLines()?.filter { it.isNotBlank() }
                ?: throw GradleException("svelteVerifyA11y did not finish: the check wrote no report.")
        if (problems.isNotEmpty()) throw GradleException(a11yFailure(problems, pages.size))
        logger.lifecycle("ktor-svelte: axe found no accessibility problems on ${pages.size} page(s), in light and in dark.")
    }
}

internal const val TEST_JAR_PROPERTY = "ktorSvelte.test.jar"
internal const val TEST_CLASSPATH_PROPERTY = "ktorSvelte.test.classpath"
internal const val TEST_MAIN_PROPERTY = "ktorSvelte.test.mainClass"
