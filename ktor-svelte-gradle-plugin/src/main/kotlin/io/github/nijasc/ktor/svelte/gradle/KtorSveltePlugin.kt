package io.github.nijasc.ktor.svelte.gradle

import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBuildTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBundleTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDevTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteInstallTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteToolTask
import io.github.nijasc.ktor.svelte.gradle.tasks.ToolVersionSource
import org.gradle.api.GradleException
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.tasks.Delete
import org.gradle.api.tasks.JavaExec
import org.gradle.api.tasks.SourceSetContainer
import org.gradle.api.tasks.TaskProvider
import org.gradle.jvm.tasks.Jar
import java.util.Properties

private const val TASK_GROUP = "svelte"
private const val SKIP_PROPERTY = "svelte.skip"
private const val DEV_PROPERTY = "svelte.dev"
private const val SKIP_WARNING =
    "ktor-svelte: building a JAR with the frontend build skipped. The JAR may hold a stale frontend, or none."

public class KtorSveltePlugin : Plugin<Project> {
    override fun apply(project: Project) {
        val extension = createExtension(project)
        val devMode = booleanProperty(project, DEV_PROPERTY)
        val skipFrontend = devMode || booleanProperty(project, SKIP_PROPERTY)

        val install = registerInstall(project, extension, skipFrontend)
        val build = registerBuild(project, extension, install, skipFrontend)
        val bundle = registerBundle(project, extension, build, skipFrontend)
        registerDev(project, extension, install)
        configureClean(project, extension)

        project.pluginManager.withPlugin("java") {
            wireResources(project, bundle)
            addRuntimeDependency(project, extension)
            warnOnSkippedJar(project, skipFrontend)
        }
        project.pluginManager.withPlugin("application") {
            if (devMode) {
                project.tasks.named("run", JavaExec::class.java) { run ->
                    run.systemProperty("io.ktor.development", "true")
                }
            }
        }
    }

    private fun createExtension(project: Project): SvelteExtension {
        val extension = project.extensions.create("svelte", SvelteExtension::class.java)
        extension.frontendDir.convention(project.layout.projectDirectory.dir("frontend"))
        extension.outputDir.convention("build")
        extension.packageManager.convention(PackageManager.AUTO)
        extension.buildScript.convention("build")
        extension.addRuntimeDependency.convention(true)
        extension.dev.port.convention(5173)
        extension.dev.script.convention("dev")
        return extension
    }

    private fun booleanProperty(
        project: Project,
        name: String,
    ): Boolean =
        project.providers
            .gradleProperty(name)
            .map { it.toBoolean() }
            .getOrElse(false)

    private fun configureToolTask(
        task: SvelteToolTask,
        extension: SvelteExtension,
    ) {
        task.group = TASK_GROUP
        task.frontendDir.set(extension.frontendDir)
        task.packageManager.set(extension.packageManager)
    }

    private fun registerInstall(
        project: Project,
        extension: SvelteExtension,
        skipFrontend: Boolean,
    ): TaskProvider<SvelteInstallTask> =
        project.tasks.register("svelteInstall", SvelteInstallTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Installs frontend dependencies from the lockfile."
            task.dependencyFiles.from(
                extension.frontendDir.map { dir ->
                    dir.asFileTree.matching { filter ->
                        filter.include("package.json")
                        LOCKFILES.forEach { (lockfile, _) -> filter.include(lockfile) }
                        filter.exclude("node_modules/**")
                    }
                },
            )
            task.stampFile.set(project.layout.buildDirectory.file("ktor-svelte/install.stamp"))
            task.onlyIf("$SKIP_PROPERTY and $DEV_PROPERTY are not set") { !skipFrontend }
        }

    private fun registerBuild(
        project: Project,
        extension: SvelteExtension,
        install: TaskProvider<SvelteInstallTask>,
        skipFrontend: Boolean,
    ): TaskProvider<SvelteBuildTask> =
        project.tasks.register("svelteBuild", SvelteBuildTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Builds the SvelteKit frontend."
            task.dependsOn(install)
            task.script.set(extension.buildScript)
            task.outputDirectory.set(frontendOutput(extension))
            task.sources.from(
                extension.frontendDir.map { dir ->
                    dir.asFileTree.matching { filter ->
                        filter.exclude("node_modules/**", ".svelte-kit/**", "${extension.outputDir.get()}/**")
                    }
                },
            )
            task.declaredEnvironment.set(
                extension.buildEnv.map { names ->
                    names
                        .mapNotNull { name ->
                            project.providers
                                .environmentVariable(name)
                                .orNull
                                ?.let { name to it }
                        }.toMap()
                },
            )
            task.toolVersion.set(
                if (skipFrontend) {
                    project.provider { "skipped" }
                } else {
                    project.providers.of(ToolVersionSource::class.java) { source ->
                        source.parameters.frontendDir.set(extension.frontendDir)
                        source.parameters.packageManager.set(extension.packageManager)
                    }
                },
            )
            task.onlyIf("$SKIP_PROPERTY and $DEV_PROPERTY are not set") { !skipFrontend }
        }

    private fun registerBundle(
        project: Project,
        extension: SvelteExtension,
        build: TaskProvider<SvelteBuildTask>,
        skipFrontend: Boolean,
    ): TaskProvider<SvelteBundleTask> =
        project.tasks.register("svelteBundle", SvelteBundleTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Copies the frontend build into generated resources and writes the manifest."
            task.buildOutput.set(build.flatMap { it.outputDirectory })
            task.outputDirName.set(extension.outputDir)
            task.bundleDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/resources"))
            task.onlyIf("$SKIP_PROPERTY and $DEV_PROPERTY are not set") { !skipFrontend }
        }

    private fun registerDev(
        project: Project,
        extension: SvelteExtension,
        install: TaskProvider<SvelteInstallTask>,
    ) {
        project.tasks.register("svelteDev", SvelteDevTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Starts the Vite dev server."
            task.dependsOn(install)
            task.script.set(extension.dev.script)
            task.port.set(extension.dev.port)
        }
    }

    private fun configureClean(
        project: Project,
        extension: SvelteExtension,
    ) {
        project.pluginManager.withPlugin("base") {
            project.tasks.named("clean", Delete::class.java) { clean ->
                clean.delete(frontendOutput(extension))
                clean.delete(extension.frontendDir.map { it.dir(".svelte-kit") })
            }
        }
    }

    private fun frontendOutput(extension: SvelteExtension) =
        extension.frontendDir.zip(extension.outputDir) { dir, output ->
            if (output.isBlank() || output.startsWith("/") || output.split('/', '\\').contains("..")) {
                throw GradleException("svelte.outputDir must be a path inside svelte.frontendDir, but was '$output'.")
            }
            dir.dir(output)
        }

    private fun wireResources(
        project: Project,
        bundle: TaskProvider<SvelteBundleTask>,
    ) {
        val sourceSets = project.extensions.getByType(SourceSetContainer::class.java)
        sourceSets.named("main") { main ->
            main.resources.srcDir(bundle.flatMap { it.bundleDirectory })
        }
        project.tasks.withType(Jar::class.java).configureEach { jar ->
            if (jar.name == "sourcesJar") jar.exclude("ktor-svelte/**")
        }
    }

    private fun addRuntimeDependency(
        project: Project,
        extension: SvelteExtension,
    ) {
        val notation = "io.github.nijasc:ktor-svelte-server:${pluginVersion()}"
        val dependencies = project.dependencies
        val enabled = extension.addRuntimeDependency
        project.configurations.named("implementation") { configuration ->
            configuration.withDependencies { declared ->
                if (enabled.get()) declared.add(dependencies.create(notation))
            }
        }
    }

    private fun warnOnSkippedJar(
        project: Project,
        skipFrontend: Boolean,
    ) {
        if (!skipFrontend) return
        project.tasks.withType(Jar::class.java).configureEach { jar ->
            if (jar.name == "jar" || jar.name == "shadowJar") {
                jar.doFirst { task -> task.logger.warn(SKIP_WARNING) }
            }
        }
    }

    private fun pluginVersion(): String {
        val properties = Properties()
        KtorSveltePlugin::class.java
            .getResourceAsStream("/ktor-svelte-gradle-plugin.properties")
            .use { stream -> properties.load(stream) }
        return properties.getProperty("version")
    }
}
