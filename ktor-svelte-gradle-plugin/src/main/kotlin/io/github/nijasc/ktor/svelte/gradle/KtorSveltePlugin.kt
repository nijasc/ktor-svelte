package io.github.nijasc.ktor.svelte.gradle

import io.github.nijasc.ktor.svelte.gradle.libraries.I18nSpec
import io.github.nijasc.ktor.svelte.gradle.libraries.LibrarySpec
import io.github.nijasc.ktor.svelte.gradle.libraries.TailwindSpec
import io.github.nijasc.ktor.svelte.gradle.tasks.DeleteUnlockedFiles
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBuildTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteBundleTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteCheckTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteConfigTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDevAllTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDevTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteDoctorTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteGenerateSourcesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteInitTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteInstallTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteLiveTemplatesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteOutdatedTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRunConfigurationsTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteRunScriptTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteSyncTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteToolTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteUpdateDependenciesTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifySyncTask
import io.github.nijasc.ktor.svelte.gradle.tasks.SvelteVerifyTsTask
import io.github.nijasc.ktor.svelte.gradle.tasks.ToolVersionSource
import org.gradle.api.GradleException
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.plugins.JavaApplication
import org.gradle.api.plugins.JavaPluginExtension
import org.gradle.api.provider.Provider
import org.gradle.api.services.BuildService
import org.gradle.api.services.BuildServiceParameters
import org.gradle.api.tasks.Delete
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.JavaExec
import org.gradle.api.tasks.SourceSetContainer
import org.gradle.api.tasks.TaskProvider
import org.gradle.jvm.tasks.Jar
import org.gradle.jvm.toolchain.JavaToolchainService
import org.gradle.process.CommandLineArgumentProvider
import java.io.File
import java.util.Properties

private const val TASK_GROUP = "svelte"
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
        registerDev(project, extension, install)
        registerUtilityTasks(project, extension, install)
        registerLibraryTasks(project, extension, install, build, librarySpec, skipFrontend)
        configureClean(project, extension)
        serializeFrontendTasks(project)
        val config = registerConfigReport(project, extension)

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
                task.appClasspath.from(
                    main.map { it.output.classesDirs },
                    project.layout.projectDirectory.dir("src/main/resources"),
                    project.configurations.named("runtimeClasspath"),
                )
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
            settings.put("buildScript", extension.buildScript)
            settings.put("buildEnv", extension.buildEnv.map { it.sorted().joinToString(", ").ifEmpty { "none" } })
            settings.put("addRuntimeDependency", extension.addRuntimeDependency.map { it.toString() })
            settings.put("includeSourceMaps", extension.includeSourceMaps.map { it.toString() })
            settings.put("precompress", extension.precompress.map { it.toString() })
            settings.put("dev.port", extension.dev.port.map { it.toString() })
            settings.put("dev.script", extension.dev.script)
            settings.put("dev.debugPort", extension.dev.debugPort.map { it.toString() })
            settings.put("dev.openBrowser", extension.dev.openBrowser.map { it.toString() })
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
            settings.put(
                "libraries.i18n",
                libraries.i18nSettings.enabled
                    .map { it.toString() }
                    .orElse("false"),
            )
            settings.put("verifyTs", project.providers.gradleProperty(VERIFY_TS_PROPERTY).orElse("true"))
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
                allIcons = libraries.lucideSettings.allIconsEnabled.getOrElse(false),
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
        val hasLibraries = librarySpec.map { !it.isEmpty }
        val sync =
            project.tasks.register("svelteSync", SvelteSyncTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Installs configured frontend libraries and writes their generated files."
                task.spec.set(librarySpec)
                task.messagesDirectory.set(messages)
                task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
                task.onlyIf("libraries are configured") { hasLibraries.get() }
            }
        val verify =
            project.tasks.register("svelteVerifySync", SvelteVerifySyncTask::class.java) { task ->
                configureToolTask(task, extension)
                task.description = "Fails if frontend libraries do not match the Gradle configuration."
                task.spec.set(librarySpec)
                task.messagesDirectory.set(messages)
                task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
                task.mustRunAfter(sync)
                task.onlyIf("libraries are configured") { hasLibraries.get() && !skipFrontend }
            }
        install.configure { it.mustRunAfter(sync) }
        build.configure { it.dependsOn(verify) }
        project.tasks.named("svelteInit").configure { it.finalizedBy(sync) }
        sync.configure { it.mustRunAfter("svelteInit") }
        project.tasks.named("svelteDev", SvelteDevTask::class.java).configure { task ->
            task.dependsOn(sync)
            task.spec.set(librarySpec)
            task.messagesDirectory.set(messages)
            task.kotlinSources.from(project.layout.projectDirectory.dir("src/main/kotlin"))
        }
        project.tasks.matching { it.name == "svelteDevAll" }.configureEach { it.dependsOn(sync) }
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
                task.messageFiles.from(
                    extension.libraries.i18nSettings.messagesDir
                        .map { it.asFileTree },
                )
                task.kotlinDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/kotlin"))
                task.resourcesDirectory.set(project.layout.buildDirectory.dir("generated/ktor-svelte/config"))
                task.onlyIf("libraries are configured") { !librarySpec.get().isEmpty }
            }
        val sourceSets = project.extensions.getByType(SourceSetContainer::class.java)
        sourceSets.named("main") { main ->
            main.java.srcDir(generate.flatMap { it.kotlinDirectory })
            main.resources.srcDir(generate.flatMap { it.resourcesDirectory })
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
        }
        project.tasks.register("svelteDoctor", SvelteDoctorTask::class.java) { task ->
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
        }
    }

    private fun registerGenerateTs(
        project: Project,
        extension: SvelteExtension,
    ) {
        val main = project.extensions.getByType(SourceSetContainer::class.java).named("main")
        val application = project.extensions.getByType(JavaApplication::class.java)
        val generateTs =
            project.tasks.register("svelteGenerateTs", JavaExec::class.java) { task ->
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
        project.tasks.register("svelteDevAll", SvelteDevAllTask::class.java) { task ->
            configureToolTask(task, extension)
            task.description = "Runs Vite, the Kotlin compiler and the app together, and restarts the app when Kotlin changes."
            task.dependsOn(install, main.map { it.output.classesDirs })
            task.script.set(extension.dev.script)
            task.port.set(extension.dev.port)
            task.debugPort.set(extension.dev.debugPort)
            task.openBrowser.set(extension.dev.openBrowser)
            task.mainClass.set(application.mainClass)
            task.appClasspath.from(
                main.map { it.output.classesDirs },
                project.layout.projectDirectory.dir("src/main/resources"),
                project.configurations.named("runtimeClasspath"),
            )
            task.classesDirectories.from(main.map { it.output.classesDirs })
            task.projectDirectory.set(project.layout.projectDirectory)
            task.gradleExecutable.set(gradleExecutablePath(gradleHome))
            task.javaLauncher.set(toolchains.launcherFor(toolchain))
            task.compileErrorsFile.set(project.layout.buildDirectory.file("ktor-svelte/compile-errors.json"))
        }
    }

    private fun configureGenerateTsExec(
        project: Project,
        extension: SvelteExtension,
        task: JavaExec,
    ) {
        val main = project.extensions.getByType(SourceSetContainer::class.java).named("main")
        task.group = TASK_GROUP
        task.mainClass.set(project.extensions.getByType(JavaApplication::class.java).mainClass)
        task.classpath =
            project.files(
                main.map { it.output.classesDirs },
                project.layout.projectDirectory.dir("src/main/resources"),
                project.configurations.named("runtimeClasspath"),
            )
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
        extension.packageManager.convention(PackageManager.AUTO)
        extension.buildScript.convention("build")
        extension.addRuntimeDependency.convention(true)
        extension.includeSourceMaps.convention(false)
        extension.precompress.convention(true)
        extension.dev.port.convention(5173)
        extension.dev.script.convention("dev")
        extension.dev.debugPort.convention(5005)
        extension.dev.openBrowser.convention(true)
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
