package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.libraries.FrontendRoute
import io.github.nijasc.ktor.svelte.gradle.libraries.RoutePart
import io.github.nijasc.ktor.svelte.gradle.libraries.kotlinName
import io.github.nijasc.ktor.svelte.gradle.libraries.scanRoutes
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option
import org.gradle.jvm.toolchain.JavaLauncher
import org.gradle.process.ExecOperations
import java.io.File
import javax.inject.Inject

private const val RECORDER_MAIN = "io.github.nijasc.ktor.svelte.test.TestRecorder"
private val TEST_NAME = Regex("[A-Z][A-Za-z0-9]*")
private val STATEMENT_START = Regex("""^(page\w*\.|assertThat\(|Page |Locator |Download |context\.)""")
private val NAVIGATION = Regex("""\.navigate\("([^"]*)"\)""")
private val DECLARATION = Regex("""^(?:Page|Locator|Download) (\w+) = """)
private val CAMEL_BREAK = Regex("(?<=[a-z0-9])(?=[A-Z])")
private val KNOWN_IMPORTS =
    listOf(
        "Page" to "com.microsoft.playwright.Page",
        "Locator" to "com.microsoft.playwright.Locator",
        "Download" to "com.microsoft.playwright.Download",
        "AriaRole" to "com.microsoft.playwright.options.AriaRole",
        "assertThat" to "com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat",
    )

internal fun typedRoute(
    path: String,
    routes: List<FrontendRoute>,
): String? {
    if ('?' in path || '#' in path) return null
    val asked = path.trim('/').split('/').filter { it.isNotEmpty() }
    return routes.sortedBy { it.params.size }.firstNotNullOfOrNull { route ->
        if (route.segments.size != asked.size) return@firstNotNullOfOrNull null
        val values = mutableListOf<String>()
        val fits =
            route.segments.indices.all { index ->
                val parts = route.segments[index]
                val single = parts.singleOrNull()
                when {
                    single is RoutePart.Text -> single.value == asked[index]
                    single is RoutePart.Param && !single.rest && !single.optional -> values.add(asked[index])
                    else -> false
                }
            }
        if (!fits) return@firstNotNullOfOrNull null
        val name = kotlinName(route.name)
        if (values.isEmpty()) "FrontendRoutes.$name" else "FrontendRoutes.$name(${values.joinToString { "\"$it\"" }})"
    }
}

internal fun recordedSteps(
    java: String,
    appUrl: String,
    routes: List<FrontendRoute>,
): List<String> =
    java
        .lines()
        .map { it.trim() }
        .filter { STATEMENT_START.containsMatchIn(it) || it == "});" }
        .map { line ->
            val kotlin =
                line
                    .removeSuffix(";")
                    .replace("new ", "")
                    .replace("$", "\\$")
                    .replace("() -> {", "{")
                    .replace(DECLARATION, "val $1 = ")
            NAVIGATION.replace(kotlin) { match ->
                val address = match.groupValues[1]
                val path = if (address.startsWith(appUrl)) address.removePrefix(appUrl).ifEmpty { "/" } else null
                val target = path?.let { typedRoute(it, routes) ?: "\"$it\"" } ?: "\"$address\""
                ".navigate($target)"
            }
        }

internal fun recordedTest(
    name: String,
    steps: List<String>,
    routesPackage: String?,
): String {
    val imports =
        (
            KNOWN_IMPORTS.filter { (word, _) -> steps.any { Regex("\\b$word\\b").containsMatchIn(it) } }.map { it.second } +
                "io.github.nijasc.ktor.svelte.test.BrowserTest" +
                listOfNotNull(routesPackage?.takeIf { steps.any { "FrontendRoutes." in it } }?.let { "$it.FrontendRoutes" }) +
                "kotlin.test.Test"
        ).sorted()
    val title = name.split(CAMEL_BREAK).joinToString(" ") { it.lowercase() }
    return imports.joinToString("\n") { "import $it" } + "\n\n" +
        "class ${name}BrowserTest : BrowserTest() {\n" +
        "    @Test\n" +
        "    fun `$title`() {\n" +
        steps.joinToString("") { "        $it\n" } +
        "    }\n" +
        "}\n"
}

@UntrackedTask(because = "Opens a browser to record what someone does in it")
public abstract class SvelteRecordTestTask : DefaultTask() {
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
    public abstract val projectDirectory: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val typedRoutes: Property<Boolean>

    @get:Internal
    public abstract val generatedPackage: Property<String>

    @get:Internal
    public abstract val workDirectory: DirectoryProperty

    @get:Internal
    public abstract val browser: Property<String>

    @get:Internal
    @get:Option(
        option = "name",
        description = "The name of the test, such as SignIn. The file is src/browserTest/kotlin/SignInBrowserTest.kt",
    )
    public abstract val testName: Property<String>

    @TaskAction
    public fun record() {
        val name = testName.orNull?.removeSuffix("BrowserTest")
        if (name == null || !TEST_NAME.matches(name)) {
            throw GradleException("Give the test a name that can be a class: svelteRecordTest --name=SignIn" + DocLink.BROWSER_TESTS.see())
        }
        val directory = projectDirectory.get().asFile
        val target = directory.resolve("src/browserTest/kotlin/${name}BrowserTest.kt")
        if (target.exists()) {
            throw GradleException(
                "svelteRecordTest does not overwrite: ${target.relativeTo(directory).invariantSeparatorsPath} is already there.",
            )
        }
        val work = workDirectory.get().asFile.apply { mkdirs() }
        val recorded = work.resolve("Recorded.java").apply { delete() }
        val address = work.resolve("app-url.txt").apply { delete() }
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
            spec.mainClass.set(RECORDER_MAIN)
            spec.workingDir = directory
            spec.jvmArgs(app + "-Dbrowser=${browser.getOrElse("chromium")}")
            spec.args(recorded.path, address.path)
        }
        if (!recorded.isFile || !address.isFile) {
            throw GradleException("Nothing was recorded: the browser was closed before any step was taken.")
        }
        val routes = if (typedRoutes.getOrElse(false)) scanRoutes(routesDirectory.get().asFile) else emptyList()
        val steps = recordedSteps(recorded.readText(), address.readText().trim(), routes)
        if (steps.isEmpty()) throw GradleException("Nothing was recorded: the browser was closed before any step was taken.")
        target.parentFile.mkdirs()
        target.writeText(recordedTest(name, steps, generatedPackage.orNull))
        logger.lifecycle(
            "ktor-svelte wrote ${target.relativeTo(directory).invariantSeparatorsPath} with ${steps.size} step(s). " +
                "It is a starting point: add what the test should assert, then run ./gradlew browserTest.",
        )
    }
}
