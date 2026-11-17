package io.github.nijasc.ktor.svelte.gradle

import io.github.nijasc.ktor.svelte.gradle.libraries.FontSpec
import io.github.nijasc.ktor.svelte.gradle.libraries.I18nSpec
import io.github.nijasc.ktor.svelte.gradle.libraries.LibrarySpec
import io.github.nijasc.ktor.svelte.gradle.libraries.TailwindSpec
import io.github.nijasc.ktor.svelte.gradle.tasks.DeleteUnlockedFiles
import io.github.nijasc.ktor.svelte.gradle.tasks.GitOutputSource
import io.github.nijasc.ktor.svelte.gradle.tasks.OPENAPI_FILE
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteAddTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteApiChangesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBuildInfoTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBuildTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBundleTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteCheckTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteConfigTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDeployTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDevAllTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDevTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDoctorTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteFormatTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteGenerateSourcesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteGitHooksTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteInitTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteInstallTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteLiveTemplatesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteOutdatedTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRecordTestTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRenameTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRunConfigurationsTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRunScriptTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteSmokeTestTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteSyncTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteToolTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteUpdateDependenciesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyA11yTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyApiRoutesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyLeaksTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyLinksTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyLoadsTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyMessagesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyRoutesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifySyncTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyTsTask
import io.github.nijasc.ktor.svelte.gradle.tasks.ToolVersionSource
import io.github.nijasc.ktor.svelte.gradle.tasks.startPlan
import org.gradle.api.Action
import org.gradle.api.GradleException
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.Task
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.file.FileCollection
import org.gradle.api.plugins.JavaApplication
import org.gradle.api.plugins.JavaPluginExtension
import org.gradle.api.plugins.jvm.JvmTestSuite
import org.gradle.api.provider.Provider
import org.gradle.api.services.BuildService
import org.gradle.api.services.BuildServiceParameters
import org.gradle.api.tasks.Delete
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.JavaExec
import org.gradle.api.tasks.PathSensitivity
import org.gradle.api.tasks.SourceSetContainer
import org.gradle.api.tasks.Sync
import org.gradle.api.tasks.TaskProvider
import org.gradle.jvm.tasks.Jar
import org.gradle.jvm.toolchain.JavaToolchainService
import org.gradle.plugins.ide.idea.model.IdeaModel
import org.gradle.process.CommandLineArgumentProvider
import org.gradle.testing.base.TestingExtension
import java.io.File
import java.util.Properties

private const val TASK_GROUP = "svelte"
private const val DEFAULT_APP_URL = "http://localhost:8080"

private class KotlinFormatter(
    val plugin: String,
    val format: String,
    val check: String,
)

private val KOTLIN_FORMATTERS =
    listOf(
        KotlinFormatter("org.jlleitschuh.gradle.ktlint", "ktlintFormat", "ktlintCheck"),
        KotlinFormatter("com.diffplug.spotless", "spotlessApply", "spotlessCheck"),
    )

private class KotlinFormatterNote(
    private val missing: Boolean,
) : Action<Task> {
    override fun execute(task: Task) {
        if (missing) task.logger.lifecycle("ktor-svelte: neither ktlint nor Spotless is applied, so Kotlin was left as it is.")
    }
}

private val DEEP_CLEAN_FRONTEND_PATHS = listOf("node_modules", ".svelte-kit", ".vite", ".turbo", ".cache", ".eslintcache")
private val DEEP_CLEAN_PROJECT_PATHS = listOf(".gradle", ".kotlin")
private const val SKIP_PROPERTY = "svelte.skip"
private const val DEV_PROPERTY = "svelte.dev"
private const val VERBOSE_PROPERTY = "svelte.verbose"
private const val VERIFY_TS_PROPERTY = "svelte.verifyTs"
private const val SKIP_WARNING =
    "ktor-svelte: building a JAR with the frontend build skipped. The JAR may hold a stale frontend, or none."

public class KtorSveltePlugin : Plugin<Project> {
    override fun apply(project: Project) {
        val extension = createExtension(project)
        val devMode = booleanProperty(project, DEV_PROPERTY)
        val skipFrontend = devMode || booleanProperty(project, SKIP_PROPERTY)

        val librarySpec = librarySpecProvider(project, extension)
        val install = registerInstall(project, extension, skipFrontend)
        val build = registerBuild(project, extension, install, skipFrontend)
        val bundle = registerBundle(project, extension, build, skipFrontend)
        val verifyLeaks =
            project.tasks.register("svelteVerifyLeaks", SvelteVerifyLeaksTask::class.java) { task ->
                task.group = TASK_GROUP
                task.description = "Fails when a secret value from the environment or a .env file is in the frontend build."
                task.dependsOn(build)
                task.buildOutput.set(build.flatMap { it.outputDirectory })
                task.projectDirectory.set(project.layout.projectDirectory)
                task.frontendDir.set(extension.frontendDir)
                task.publicNames.set(extension.buildEnv)
                val enabled = extension.verifyLeaks
                task.onlyIf("svelte.verifyLeaks is on and the frontend is built") { !skipFrontend && enabled.get() }
            }
        bundle.configure { it.dependsOn(verifyLeaks) }
        project.tasks.register("svelteDeploy", SvelteDeployTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Writes the deploy configuration for a host from this project's settings. Railway so far."
            task.projectDirectory.set(project.layout.projectDirectory)
            task.projectName.set(project.name)
            val plan = project.provider { startPlan(project.name, project.tasks.names) }
            task.buildCommand.set(plan.map { it.build })
            task.startCommand.set(plan.map { it.start })
        }
        registerDev(project, extension, install)
        registerUtilityTasks(project, extension, install)
        registerLibraryTasks(project, extension, install, build, librarySpec, skipFrontend)
        configureClean(project, extension)
        serializeFrontendTasks(project)
        val config = registerConfigReport(project, extension)

        excludeFrontendOutputFromIde(project, extension)
        project.pluginManager.withPlugin("java") {
            wireResources(project, bundle)
            wireGeneratedSources(project, extension, librarySpec)
            addRuntimeDependency(project, extension)
            warnOnSkippedJar(project, skipFrontend)
        }
        project.pluginManager.withPlugin("application") {
            project.tasks.named("run", JavaExec::class.java) { run ->
                run.jvmArgumentProviders.add(FrontendDirArgument(extension.frontendDir))
                if (devMode) run.systemProperty(DEVELOPMENT_SYSTEM_PROPERTY, "true")
            }
            registerGenerateTs(project, extension)
            config.configure { task ->
                val main = project.extensions.getByType(SourceSetContainer::class.java).named("main")
                val toolchains = project.extensions.getByType(JavaToolchainService::class.java)
                task.mainClass.set(project.extensions.getByType(JavaApplication::class.java).mainClass)
                task.appClasspath.from(developmentClasspath(project))
                task.dependsOn(main.map { it.output.classesDirs })
                task.javaLauncher.set(toolchains.launcherFor(project.extensions.getByType(JavaPluginExtension::class.java).toolchain))
            }
        }
    }

    private fun registerConfigReport(
        project: Project,
        extension: SvelteExtension,
    ): TaskProvider<SvelteConfigTask> =
        project.tasks.register("svelteConfig", SvelteConfigTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Prints every ktor-svelte setting of the build and the app, scores them and suggests what to change."
            task.reportFile.set(project.layout.buildDirectory.file("ktor-svelte/config-report.json"))
            val projectDirectory = project.layout.projectDirectory.asFile
            val libraries = extension.libraries
            val settings = task.gradleSettings
            settings.put("frontendDir", extension.frontendDir.map { it.asFile.relativeToOrSelf(projectDirectory).invariantSeparatorsPath })
            settings.put("outputDir", extension.outputDir)
            settings.put("packageManager", extension.packageManager.map { it.name })
            settings.put("bunVersion", extension.bunVersion.orElse("not pinned"))
            settings.put("buildScript", extension.buildScript)
            settings.put("buildEnv", extension.buildEnv.map { it.sorted().joinToString(", ").ifEmpty { "none" } })
            settings.put("addRuntimeDependency", extension.addRuntimeDependency.map { it.toString() })
            settings.put("includeSourceMaps", extension.includeSourceMaps.map { it.toString() })
            settings.put("precompress", extension.precompress.map { it.toString() })
            settings.put("verifyLeaks", extension.verifyLeaks.map { it.toString() })
            settings.put("shortTaskNames", extension.shortTaskNames.map { it.toString() })
            settings.put("dev.port", extension.dev.port.map { it.toString() })
            settings.put("dev.script", extension.dev.script)
            settings.put("dev.debugPort", extension.dev.debugPort.map { it.toString() })
            settings.put("dev.openBrowser", extension.dev.openBrowser.map { it.toString() })
            settings.put("dev.https", extension.dev.https.map { it.toString() })
            settings.put(
                "libraries.tailwind",
                libraries.tailwindSettings.enabled
                    .map { it.toString() }
                    .orElse("false"),
            )
            settings.put(
                "libraries.daisyUi",
                libraries.daisySettings.enabled
                    .map { it.toString() }
                    .orElse("false"),
            )
            settings.put("libraries.lucide", libraries.lucideEnabled.map { it.toString() }.orElse("false"))
            settings.put("libraries.images", libraries.imagesEnabled.map { it.toString() }.orElse("false"))
            settings.put("libraries.toasts", libraries.toastsEnabled.map { it.toString() }.orElse("false"))
            settings.put(
                "libraries.toasts.reloadPrompt",
                libraries.toastsSettings.reloadPromptEnabled
                    .map { it.toString() }
                    .orElse("false"),
            )
            settings.put("libraries.routes", libraries.routesEnabled.map { it.toString() }.orElse("false"))
            settings.put("libraries.components", libraries.componentsEnabled.map { it.toString() }.orElse("false"))
            settings.put("libraries.fonts", libraries.fontSettings.sans.orElse("none"))
            settings.put("libraries.charts", libraries.chartsEnabled.map { it.toString() }.orElse("false"))
            settings.put(
                "libraries.i18n",
                libraries.i18nSettings.enabled
                    .map { it.toString() }
                    .orElse("false"),
            )
            settings.put("verifyTs", project.providers.gradleProperty(VERIFY_TS_PROPERTY).orElse("true"))
        }

    private fun excludeFrontendOutputFromIde(
        project: Project,
        extension: SvelteExtension,
    ) {
        project.pluginManager.apply("idea")
        project.afterEvaluate {
            val frontend = extension.frontendDir.get().asFile
            project.extensions.getByType(IdeaModel::class.java).module.excludeDirs.addAll(
                listOf(frontend.resolve(extension.outputDir.get()), frontend.resolve(".svelte-kit/output")),
            )
        }
    }

    private fun librarySpecProvider(
        project: Project,
        extension: SvelteExtension,
    ): Provider<LibrarySpec> =
        project.provider {
            val libraries = extension.libraries
            LibrarySpec(
                tailwind =
                    TailwindSpec(
                        libraries.tailwindSettings.typographyPlugin.getOrElse(false),
                        libraries.tailwindSettings.formsPlugin.getOrElse(false),
                    ).takeIf { libraries.tailwindSettings.enabled.getOrElse(false) },
                daisy =
                    libraries.daisySettings.takeIf { it.enabled.getOrElse(false) }?.let { daisy ->
                        daisySpecOf(
                            daisy.themeNames.get(),
                            daisy.customThemes.get(),
                            daisy.defaultThemeName.orNull,
                            daisy.prefersDarkName.orNull,
                        )
                    },
                lucide = libraries.lucideEnabled.getOrElse(false),
                images = libraries.imagesEnabled.getOrElse(false),
                toasts = libraries.toastsEnabled.getOrElse(false),
                routes = libraries.routesEnabled.getOrElse(false),
                components = libraries.componentsEnabled.getOrElse(false),
                charts = libraries.chartsEnabled.getOrElse(false),
                fonts =
                    libraries.fontSettings.sans.orNull?.let { sans ->
                        FontSpec(sans, libraries.fontSettings.mono.orNull, libraries.fontSettings.variable.getOrElse(true))
                    },
                allIcons = libraries.lucideSettings.allIconsEnabled.getOrElse(false),
                reloadPrompt = libraries.toastsSettings.reloadPromptEnabled.getOrElse(false),
                i18n =
                    libraries.i18nSettings.takeIf { it.enabled.getOrElse(false) }?.let { i18n ->
                        I18nSpec(
                            locales = i18n.localeNames.get(),
                            defaultLocale =
                                i18n.defaultLocale.orNull ?: i18n.localeNames
                                    .get()
                                    .firstOrNull()
                                    .orEmpty(),
                            strategy = i18n.strategy.getOrElse(LocaleStrategy.Cookie),
                        )
                    },
                devPort = extension.dev.port.get(),
                generatedPackage = libraries.generatedPackage.getOrElse("io.github.nijasc.ktorsvelte"),
            )
        }

    private fun registerLibraryTasks(
        project: Project,
        extension: SvelteExtension,
        install: TaskProvider<SvelteInstallTask>,
        build: TaskProvider<SvelteBuildTask>,
        librarySpec: Provider<LibrarySpec>,
        skipFrontend: Boolean,
    ) {
        val messages =
            extension.libraries.i18nSettings.messagesDir
                .convention(extension.frontendDir.dir("messages"))
        val routes =
            extension.libraries.routesSettings.dir
                .convention(extension.frontendDir.dir("src/routes"))
        val hasLibraries = librarySpec.map { !it.isEmpty }
        val sync =
            registerWithShortName(project, extension, "svelteSync", "sync", SvelteSyncTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Installs configured frontend libraries and writes their generated files."
                task.spec.set(librarySpec)
                task.messagesDirectory.set(messages)
                task.routesDirectory.set(routes)
                task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
                task.onlyIf("libraries are configured") { hasLibraries.get() }
            }
        val verify =
            project.tasks.register("svelteVerifySync", SvelteVerifySyncTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Fails if frontend libraries do not match the Gradle configuration."
                task.spec.set(librarySpec)
                task.messagesDirectory.set(messages)
                task.routesDirectory.set(routes)
                task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
                task.mustRunAfter(sync)
                task.onlyIf("libraries are configured") { hasLibraries.get() && !skipFrontend }
            }
        project.tasks.register("svelteVerifyRoutes", SvelteVerifyRoutesTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Fails if a link to a page is written as a string instead of a typed route. Add --fix to rewrite them."
            task.frontendDir.set(extension.frontendDir)
            task.routesDirectory.set(routes)
            task.routesEnabled.set(librarySpec.map { it.routes })
            task.generatedPackage.set(librarySpec.map { it.generatedPackage })
            task.projectDirectory.set(project.layout.projectDirectory)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
        }
        project.tasks.register("svelteVerifyLinks", SvelteVerifyLinksTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Lists internal links that lead to no page, no API route and no static file. Add --strict to fail on them."
            task.frontendDir.set(extension.frontendDir)
            task.routesDirectory.set(routes)
            task.projectDirectory.set(project.layout.projectDirectory)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
            task.localePrefixes.set(
                librarySpec.map { spec ->
                    spec.i18n
                        ?.takeIf { it.strategy == LocaleStrategy.UrlPrefix }
                        ?.locales
                        .orEmpty()
                },
            )
        }
        project.tasks.register("svelteVerifyMessages", SvelteVerifyMessagesTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Lists i18n messages that nothing uses. Add --strict to fail on them."
            task.frontendDir.set(extension.frontendDir)
            task.messagesDirectory.set(messages)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
            task.locales.set(librarySpec.map { it.i18n?.locales.orEmpty() })
        }
        project.tasks.register("svelteApiChanges", SvelteApiChangesTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description =
                "Lists what changed in the API for callers since another git revision. Add --strict to fail on breaking changes."
            task.frontendDir.set(extension.frontendDir)
        }
        project.tasks.register("svelteVerifyApiRoutes", SvelteVerifyApiRoutesTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Lists API routes that nothing in the frontend calls. Add --strict to fail on them."
            task.frontendDir.set(extension.frontendDir)
        }
        project.tasks.register("svelteVerifyLoads", SvelteVerifyLoadsTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Fails if an API call inside a load function uses neither apiWith(event) nor { fetch }."
            task.frontendDir.set(extension.frontendDir)
            task.routesDirectory.set(routes)
        }
        project.tasks.register("svelteAdd", SvelteAddTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description =
                "Creates a page with a typed load, svelteAdd --page=notes/[id], or the pages for a class: svelteAdd --crud=Note"
            task.frontendDir.set(extension.frontendDir)
            task.routesDirectory.set(routes)
            task.messagesDirectory.set(messages)
            task.projectDirectory.set(project.layout.projectDirectory)
            project.plugins.withId("application") {
                task.mainClass.set(project.extensions.getByType(JavaApplication::class.java).mainClass)
            }
            task.finalizedBy(sync)
        }
        project.tasks.register("svelteRename", SvelteRenameTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Moves a page and updates its typed route calls: svelteRename --page=notes/[id] --to=memos/[id]"
            task.frontendDir.set(extension.frontendDir)
            task.routesDirectory.set(routes)
            task.projectDirectory.set(project.layout.projectDirectory)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
            task.finalizedBy(sync)
        }
        install.configure { it.mustRunAfter(sync) }
        build.configure { it.dependsOn(verify) }
        project.tasks.named("svelteInit").configure { it.finalizedBy(sync, "svelteGenerateRunConfigurations") }
        sync.configure { it.mustRunAfter("svelteInit") }
        project.tasks.named("svelteDev", SvelteDevTask::class.java).configure { task ->
            task.dependsOn(sync)
            task.spec.set(librarySpec)
            task.messagesDirectory.set(messages)
            task.routesDirectory.set(routes)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
        }
        project.tasks.matching { it.name == "svelteDevAll" }.configureEach { it.dependsOn(sync) }
    }

    private fun registerFormatTasks(
        project: Project,
        extension: SvelteExtension,
        install: TaskProvider<SvelteInstallTask>,
    ) {
        val frontendFormat =
            project.tasks.register("svelteFormat", SvelteFormatTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Formats the frontend with its format script."
                task.script.set("format")
                task.purpose.set("formatted")
                task.example.set("prettier --write .")
                task.dependsOn(install)
            }
        val frontendCheck =
            project.tasks.register("svelteFormatCheck", SvelteFormatTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Checks the frontend's formatting with its lint script."
                task.script.set("lint")
                task.purpose.set("checked")
                task.example.set("prettier --check .")
                task.dependsOn(install)
            }
        project.afterEvaluate {
            val kotlinFormatters = KOTLIN_FORMATTERS.filter { project.pluginManager.hasPlugin(it.plugin) }
            registerIfFree(project, "format", "Formats Kotlin and the frontend.", frontendFormat, kotlinFormatters.map { it.format })
            registerIfFree(
                project,
                "formatCheck",
                "Fails if Kotlin or the frontend is not formatted.",
                frontendCheck,
                kotlinFormatters.map { it.check },
            )
        }
    }

    private fun <T : Task> registerWithShortName(
        project: Project,
        extension: SvelteExtension,
        name: String,
        shortName: String,
        type: Class<T>,
        configure: (T) -> Unit,
    ): TaskProvider<T> {
        val registerShortName = {
            if (extension.shortTaskNames.get() && shortName !in project.tasks.names) {
                project.tasks.register(shortName, type) { task ->
                    configure(task)
                    task.description = "Short for $name. ${task.description.orEmpty()}".trim()
                }
            }
        }
        if (project.state.executed) registerShortName() else project.afterEvaluate { registerShortName() }
        return project.tasks.register(name, type) { configure(it) }
    }

    private fun registerIfFree(
        project: Project,
        name: String,
        description: String,
        frontend: TaskProvider<SvelteFormatTask>,
        kotlinTasks: List<String>,
    ) {
        if (name in project.tasks.names) return
        val noKotlinFormatter = kotlinTasks.isEmpty()
        project.tasks.register(name) { task ->
            task.group = TASK_GROUP
            task.description = description
            task.dependsOn(frontend)
            task.dependsOn(kotlinTasks)
            task.doLast(KotlinFormatterNote(noKotlinFormatter))
        }
    }

    private fun gitOutput(
        project: Project,
        vararg arguments: String,
    ): Provider<String> =
        project.providers.of(GitOutputSource::class.java) { source ->
            source.parameters.directory.set(project.layout.projectDirectory)
            source.parameters.arguments.set(arguments.toList())
        }

    private fun wireGeneratedSources(
        project: Project,
        extension: SvelteExtension,
        librarySpec: Provider<LibrarySpec>,
    ) {
        val generate =
            project.tasks.register("svelteGenerateSources", SvelteGenerateSourcesTask::class.java) { task ->
                task.group = TASK_GROUP
                task.description = "Generates Kotlin for configured frontend libraries."
                task.spec.set(librarySpec)
                task.hasRuntimeDependency.set(extension.addRuntimeDependency)
                task.iconsFile.from(extension.frontendDir.file("src/lib/ktor-svelte/icons.json"))
                task.messagesDirectory.set(extension.libraries.i18nSettings.messagesDir)
                task.routesDirectory.set(extension.libraries.routesSettings.dir)
                task.routeFiles.from(
                    librarySpec.zip(extension.libraries.routesSettings.dir) { spec, dir ->
                        if (spec.routes) dir.asFileTree.matching { it.include("**/+page*") } else emptyList<Any>()
                    },
                )
                task.messageFiles.from(
                    extension.libraries.i18nSettings.messagesDir
                        .map { it.asFileTree },
                )
                task.kotlinDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/kotlin"))
                task.resourcesDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/config"))
                task.onlyIf("libraries are configured") { !librarySpec.get().isEmpty }
                task.mustRunAfter("svelteSync")
            }
        val buildInfo =
            project.tasks.register("svelteBuildInfo", SvelteBuildInfoTask::class.java) { task ->
                task.group = TASK_GROUP
                task.description = "Writes the version, commit and commit time of this build for the app to read."
                task.version.set(project.provider { project.version.toString() })
                task.commit.set(gitOutput(project, "rev-parse", "HEAD"))
                task.commitTime.set(gitOutput(project, "log", "-1", "--format=%cI"))
                task.outputDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/build-info"))
            }
        val sourceSets = project.extensions.getByType(SourceSetContainer::class.java)
        sourceSets.named("main") { main ->
            main.java.srcDir(generate.flatMap { it.kotlinDirectory })
            main.resources.srcDir(generate.flatMap { it.resourcesDirectory })
            main.resources.srcDir(buildInfo.flatMap { it.outputDirectory })
        }
    }

    private fun registerUtilityTasks(
        project: Project,
        extension: SvelteExtension,
        install: TaskProvider<SvelteInstallTask>,
    ) {
        project.tasks.register("svelteClean", Delete::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Deletes node_modules, .svelte-kit and the frontend build output."
            task.delete(frontendOutput(extension))
            task.delete(extension.frontendDir.map { it.dir(".svelte-kit") })
            task.delete(extension.frontendDir.map { it.dir("node_modules") })
        }
        project.tasks.register("deepClean", Delete::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Runs clean and deletes .gradle, .kotlin, node_modules, frontend caches and the frontend build output."
            project.pluginManager.withPlugin("base") { task.dependsOn("clean") }
            task.delete(frontendOutput(extension))
            task.doLast(
                DeleteUnlockedFiles(
                    DEEP_CLEAN_PROJECT_PATHS.map {
                        project.layout.projectDirectory
                            .dir(it)
                            .asFile
                    },
                ),
            )
            DEEP_CLEAN_FRONTEND_PATHS.forEach { path ->
                task.delete(extension.frontendDir.map { it.dir(path) })
            }
        }
        project.tasks.register("svelteUpdateDependencies", SvelteUpdateDependenciesTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Updates frontend dependencies and the lockfile."
        }
        project.tasks.register("svelteOutdated", SvelteOutdatedTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Lists outdated frontend dependencies."
            task.dependsOn(install)
        }
        registerFormatTasks(project, extension, install)
        project.tasks.register("svelteGitHooks", SvelteGitHooksTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description =
                "Installs a pre-commit hook that checks formatting and generated files, " +
                "and keeps generated files out of merge conflicts. Add --remove to take it out."
            task.projectDirectory.set(project.layout.projectDirectory)
            task.hookTasks.set(listOf("formatCheck", "svelteVerifySync"))
            task.regenerateTasks.set(project.provider { listOf("svelteSync", "svelteGenerateTs").filter { it in project.tasks.names } })
        }
        project.tasks.register("svelteCheck", SvelteCheckTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Runs the frontend's check script."
            task.dependsOn(install)
        }
        project.tasks.register("svelteRun", SvelteRunScriptTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Runs a package.json script: svelteRun --script=lint --args=\"--fix\""
            task.dependsOn(install)
        }
        project.tasks.register("svelteInit", SvelteInitTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Creates a working SvelteKit project in the frontend directory."
            val i18n = extension.libraries.i18nSettings
            task.locales.set(
                i18n.enabled
                    .orElse(
                        false,
                    ).zip(i18n.localeNames.orElse(emptyList())) { enabled, names -> if (enabled) names else emptyList() },
            )
            task.messagesDirectory.set(i18n.messagesDir)
        }
        registerWithShortName(project, extension, "svelteDoctor", "doctor", SvelteDoctorTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Checks the frontend setup and says what to fix."
            task.frontendDir.set(extension.frontendDir)
            task.packageManager.set(extension.packageManager)
            task.bunVersion.set(extension.bunVersion)
            task.devPort.set(extension.dev.port)
            task.outputDir.set(extension.outputDir)
            task.bundleDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/resources"))
        }
        val hasApplicationPlugin = project.provider { project.pluginManager.hasPlugin("application") }
        project.tasks.register("svelteLiveTemplates", SvelteLiveTemplatesTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Writes IntelliJ live templates for routes, DTOs and client calls. Add --install to copy them into the IDE."
            task.templateFile.set(project.layout.buildDirectory.file("ktor-svelte/live-templates/ktor-svelte.xml"))
        }
        project.tasks.register("svelteGenerateRunConfigurations", SvelteRunConfigurationsTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Writes IntelliJ run configurations to .run in the root project."
            task.outputDirectory.set(
                project.rootProject.layout.projectDirectory
                    .dir(".run"),
            )
            task.hasApplicationPlugin.set(hasApplicationPlugin)
            task.debugPort.set(extension.dev.debugPort)
            task.externalProjectPath.set("\$PROJECT_DIR\$")
            task.taskPrefix.set(if (project == project.rootProject) "" else "${project.path}:")
            task.namePrefix.set(if (project == project.rootProject) "" else "${project.name}: ")
            task.appUrl.set(DEFAULT_APP_URL)
            val rootDirectory = project.rootDir
            task.frontendPath.set(
                extension.frontendDir.map { "\$PROJECT_DIR\$/" + it.asFile.relativeToOrSelf(rootDirectory).invariantSeparatorsPath },
            )
        }
    }

    private fun registerGenerateTs(
        project: Project,
        extension: SvelteExtension,
    ) {
        val main = project.extensions.getByType(SourceSetContainer::class.java).named("main")
        val application = project.extensions.getByType(JavaApplication::class.java)
        val generateTs =
            registerWithShortName(project, extension, "svelteGenerateTs", "gen", JavaExec::class.java) { task ->
                configureGenerateTsExec(project, extension, task)
                task.description = "Starts the app once to regenerate TypeScript from its routes. Needs generateTs = true."
                task.systemProperty(GENERATE_TS_ONLY_SYSTEM_PROPERTY, "true")
            }
        val verifyTs =
            project.tasks.register("svelteVerifyTs", SvelteVerifyTsTask::class.java) { task ->
                configureGenerateTsExec(project, extension, task)
                task.description = "Starts the app once and fails if the committed generated TypeScript is out of date."
                task.reportFile.set(project.layout.buildDirectory.file("ktor-svelte/verify-ts.txt"))
                task.projectDirectory.set(project.layout.projectDirectory)
                task.mustRunAfter(generateTs)
            }
        val verifyTsInCheck =
            project.providers
                .gradleProperty(VERIFY_TS_PROPERTY)
                .map { it.toBoolean() }
                .getOrElse(true)
        if (verifyTsInCheck) project.tasks.named("check").configure { it.dependsOn(verifyTs) }
        val toolchains = project.extensions.getByType(JavaToolchainService::class.java)
        val toolchain = project.extensions.getByType(JavaPluginExtension::class.java).toolchain
        val install = project.tasks.named("svelteInstall", SvelteInstallTask::class.java)
        val gradleHome = project.gradle.gradleHomeDir
        registerWithShortName(project, extension, "svelteDevAll", "dev", SvelteDevAllTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Runs Vite, the Kotlin compiler and the app together, and restarts the app when Kotlin changes."
            task.dependsOn(install, main.map { it.output })
            task.script.set(extension.dev.script)
            task.port.set(extension.dev.port)
            task.debugPort.set(extension.dev.debugPort)
            task.openBrowser.set(extension.dev.openBrowser)
            task.https.set(extension.dev.https)
            task.httpsPort.set(extension.dev.httpsPort)
            task.certificateDirectory.set(File(System.getProperty("user.home"), ".ktor-svelte/dev-https"))
            task.mainClass.set(application.mainClass)
            task.appClasspath.from(developmentClasspath(project))
            task.classesDirectories.from(main.map { it.output.classesDirs })
            task.classesDirectories.from(main.map { it.output.resourcesDir })
            task.sourceDirectories.from(main.map { it.allSource.sourceDirectories })
            task.projectDirectory.set(project.layout.projectDirectory)
            task.gradleExecutable.set(gradleExecutablePath(gradleHome))
            task.javaLauncher.set(toolchains.launcherFor(toolchain))
            task.compileErrorsFile.set(project.layout.buildDirectory.file("ktor-svelte/compile-errors.json"))
        }
        configureBrowserTests(project, extension, application)
        val a11yRunner =
            project.configurations.detachedConfiguration(
                project.dependencies.create("io.github.nijasc:ktor-svelte-test:${pluginVersion()}"),
            )
        project.tasks.register("svelteRecordTest", SvelteRecordTestTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Opens the packaged app in a browser and writes what you do there as a Kotlin browser test: --name=SignIn"
            val names = project.tasks.names
            if ("shadowJar" in names) {
                task.dependsOn(if ("buildFatJar" in names) "buildFatJar" else "shadowJar")
                task.jarFile.set(project.tasks.named("shadowJar", Jar::class.java).flatMap { it.archiveFile })
            } else {
                val installed = project.tasks.named("installDist", Sync::class.java)
                task.dependsOn(installed)
                task.libDirectory.fileProvider(installed.map { it.destinationDir.resolve("lib") })
            }
            task.mainClass.set(application.mainClass)
            task.javaLauncher.set(toolchains.launcherFor(toolchain))
            task.runnerClasspath.from(a11yRunner)
            task.dependsOn(a11yRunner)
            task.projectDirectory.set(project.layout.projectDirectory)
            task.routesDirectory.set(
                extension.libraries.routesSettings.dir
                    .orElse(extension.frontendDir.dir("src/routes")),
            )
            task.typedRoutes.set(extension.libraries.routesEnabled.orElse(false))
            task.generatedPackage.set(extension.libraries.generatedPackage.orElse("io.github.nijasc.ktorsvelte"))
            task.workDirectory.set(project.layout.buildDirectory.dir("ktor-svelte/recorded"))
            task.browser.set(project.providers.gradleProperty("browser"))
        }
        project.tasks.register("svelteVerifyA11y", SvelteVerifyA11yTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Packages the app, opens its prerendered pages in a browser and fails on accessibility problems axe finds."
            val names = project.tasks.names
            if ("shadowJar" in names) {
                task.dependsOn(if ("buildFatJar" in names) "buildFatJar" else "shadowJar")
                task.jarFile.set(project.tasks.named("shadowJar", Jar::class.java).flatMap { it.archiveFile })
            } else {
                val installed = project.tasks.named("installDist", Sync::class.java)
                task.dependsOn(installed)
                task.libDirectory.fileProvider(installed.map { it.destinationDir.resolve("lib") })
            }
            task.mainClass.set(application.mainClass)
            task.javaLauncher.set(toolchains.launcherFor(toolchain))
            task.runnerClasspath.from(a11yRunner)
            task.dependsOn(a11yRunner)
            task.buildOutput.set(extension.frontendDir.dir(extension.outputDir))
            task.projectDirectory.set(project.layout.projectDirectory)
            task.reportFile.set(project.layout.buildDirectory.file("ktor-svelte/a11y.txt"))
            task.browser.set(project.providers.gradleProperty("browser"))
            val daisy = extension.libraries.daisySettings
            task.lightTheme.set(daisy.enabled.zip(daisy.defaultThemeName) { on, name -> if (on) name else "" })
            task.darkTheme.set(daisy.enabled.zip(daisy.prefersDarkName) { on, name -> if (on) name else "" })
        }
        project.tasks.register("svelteSmokeTest", SvelteSmokeTestTask::class.java) { task ->
            task.group = TASK_GROUP
            task.description = "Packages the app, starts it in production mode and fails unless its pages and API routes are answered."
            val names = project.tasks.names
            if ("shadowJar" in names) {
                task.dependsOn(if ("buildFatJar" in names) "buildFatJar" else "shadowJar")
                task.jarFile.set(project.tasks.named("shadowJar", Jar::class.java).flatMap { it.archiveFile })
            } else {
                val installed = project.tasks.named("installDist", Sync::class.java)
                task.dependsOn(installed)
                task.libDirectory.fileProvider(installed.map { it.destinationDir.resolve("lib") })
            }
            task.mainClass.set(application.mainClass)
            task.javaLauncher.set(toolchains.launcherFor(toolchain))
            task.buildOutput.set(extension.frontendDir.dir(extension.outputDir))
            task.openApiFile.set(extension.frontendDir.file(OPENAPI_FILE))
            task.projectDirectory.set(project.layout.projectDirectory)
            task.logFile.set(project.layout.buildDirectory.file("ktor-svelte/smoke-test.log"))
        }
    }

    private fun configureBrowserTests(
        project: Project,
        extension: SvelteExtension,
        application: JavaApplication,
    ) {
        val kit = "io.github.nijasc:ktor-svelte-test:${pluginVersion()}"
        val browser = project.providers.gradleProperty("browser").orElse("chromium")
        project.plugins.withId("jvm-test-suite") {
            val suites = project.extensions.getByType(TestingExtension::class.java).suites
            suites.withType(JvmTestSuite::class.java).matching { it.name == BROWSER_TEST_SUITE }.configureEach { suite ->
                suite.dependencies { dependencies ->
                    if (extension.addRuntimeDependency.get()) dependencies.implementation.add(kit)
                }
                suite.targets.configureEach { target ->
                    target.testTask.configure { test ->
                        test.inputs.property("browser", browser)
                        test.systemProperty("browser", browser.get())
                        val names = project.tasks.names
                        if ("shadowJar" in names) {
                            val jar = project.tasks.named("shadowJar", Jar::class.java).flatMap { it.archiveFile }
                            test.dependsOn(if ("buildFatJar" in names) "buildFatJar" else "shadowJar")
                            test.inputs.file(jar).withPathSensitivity(PathSensitivity.NONE)
                            test.jvmArgumentProviders.add(
                                CommandLineArgumentProvider { listOf("-D$BROWSER_TEST_JAR=${jar.get().asFile.path}") },
                            )
                        } else {
                            val installed = project.tasks.named("installDist", Sync::class.java)
                            val mainClass = application.mainClass
                            test.dependsOn(installed)
                            test.inputs.dir(installed.map { it.destinationDir })
                            test.jvmArgumentProviders.add(
                                CommandLineArgumentProvider {
                                    listOf(
                                        "-D$BROWSER_TEST_CLASSPATH=${installed.get().destinationDir.resolve("lib").path}${File.separator}*",
                                        "-D$BROWSER_TEST_MAIN=${mainClass.get()}",
                                    )
                                },
                            )
                        }
                    }
                }
            }
        }
    }

    private fun developmentClasspath(project: Project): FileCollection {
        val main = project.extensions.getByType(SourceSetContainer::class.java).named("main")
        val librarySettings =
            project.tasks
                .named("svelteGenerateSources", SvelteGenerateSourcesTask::class.java)
                .flatMap { it.resourcesDirectory }
        return project.files(
            main.map { it.output.classesDirs },
            project.layout.projectDirectory.dir("src/main/resources"),
            librarySettings,
            project.configurations.named("runtimeClasspath"),
        )
    }

    private fun configureGenerateTsExec(
        project: Project,
        extension: SvelteExtension,
        task: JavaExec,
    ) {
        task.group = TASK_GROUP
        task.mainClass.set(project.extensions.getByType(JavaApplication::class.java).mainClass)
        task.classpath = developmentClasspath(project)
        task.systemProperty(DEVELOPMENT_SYSTEM_PROPERTY, "true")
        task.jvmArgumentProviders.add(FrontendDirArgument(extension.frontendDir))
    }

    private fun serializeFrontendTasks(project: Project) {
        val lock =
            project.gradle.sharedServices.registerIfAbsent(
                "ktorSvelteFrontend${project.path}",
                FrontendLock::class.java,
            ) { it.maxParallelUsages.set(1) }
        project.tasks.withType(SvelteToolTask::class.java).configureEach { task ->
            if (task !is SvelteDevTask && task !is SvelteDevAllTask) task.usesService(lock)
        }
    }

    private fun gradleExecutablePath(gradleHome: File?): String {
        val name = if (isWindowsHost()) "gradle.bat" else "gradle"
        return gradleHome?.resolve("bin/$name")?.path ?: name
    }

    private fun createExtension(project: Project): SvelteExtension {
        val extension = project.extensions.create("svelte", SvelteExtension::class.java)
        extension.frontendDir.convention(project.layout.projectDirectory.dir("frontend"))
        extension.outputDir.convention("build")
        extension.packageManager.convention(PackageManager.Auto)
        extension.buildScript.convention("build")
        extension.addRuntimeDependency.convention(true)
        extension.includeSourceMaps.convention(false)
        extension.precompress.convention(true)
        extension.verifyLeaks.convention(true)
        extension.shortTaskNames.convention(true)
        extension.dev.port.convention(5173)
        extension.dev.script.convention("dev")
        extension.dev.debugPort.convention(5005)
        extension.dev.openBrowser.convention(true)
        extension.dev.https.convention(false)
        extension.dev.httpsPort.convention(DEFAULT_HTTPS_PORT)
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
        task.bunVersion.set(extension.bunVersion)
        task.toolCacheDirectory.set(File(task.project.gradle.gradleUserHomeDir, "ktor-svelte/bun"))
        task.verbose.set(
            task.project.providers
                .gradleProperty(VERBOSE_PROPERTY)
                .map { it.toBoolean() }
                .orElse(false),
        )
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
                        source.parameters.bunVersion.set(extension.bunVersion)
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
            task.includeSourceMaps.set(extension.includeSourceMaps)
            task.precompress.set(extension.precompress)
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
            if (!isFolderInsideFrontend(output)) {
                throw GradleException(
                    "svelte.outputDir must be a path inside svelte.frontendDir, but was '$output'." + DocLink.GRADLE.see(),
                )
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

private val DRIVE_PREFIX = Regex("^[A-Za-z]:")

internal fun isFolderInsideFrontend(output: String): Boolean {
    if (output.isBlank() ||
        output.startsWith("/") ||
        output.startsWith("\\") ||
        DRIVE_PREFIX.containsMatchIn(output) ||
        File(output).isAbsolute
    ) {
        return false
    }
    val segments = output.split('/', '\\').filter { it.isNotEmpty() && it != "." }
    return segments.isNotEmpty() && ".." !in segments
}

private class FrontendDirArgument(
    @get:Internal
    val frontendDir: DirectoryProperty,
) : CommandLineArgumentProvider {
    override fun asArguments(): Iterable<String> = listOf("-D$FRONTEND_DIR_SYSTEM_PROPERTY=${frontendDir.get().asFile.absolutePath}")
}

internal abstract class FrontendLock : BuildService<BuildServiceParameters.None>

internal const val BROWSER_TEST_SUITE = "browserTest"
internal const val DEFAULT_HTTPS_PORT = 8443
internal const val BROWSER_TEST_JAR = "ktorSvelte.test.jar"
internal const val BROWSER_TEST_CLASSPATH = "ktorSvelte.test.classpath"
internal const val BROWSER_TEST_MAIN = "ktorSvelte.test.mainClass"
