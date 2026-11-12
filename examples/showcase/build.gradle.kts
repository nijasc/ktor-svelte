import io.github.nijasc.ktor.svelte.gradle.DaisyTheme
import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy

plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.kotlin.serialization)
    alias(libs.plugins.ktor)
    application
    id("io.github.nijasc.ktor-svelte")
}

kotlin {
    jvmToolchain(17)
}

application {
    mainClass = "showcase.ApplicationKt"
}

ktor {
    openApi {
        enabled = true
        codeInferenceEnabled = true
        onlyCommented = false
    }
}

svelte {
    libraries {
        tailwind {
            typography()
            forms()
        }
        daisyUi {
            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark, DaisyTheme.Nord, DaisyTheme.Dracula)
            customTheme("ktor") {
                primary = "#7f52ff"
                secondary = "#ff3e00"
                accent = "#c711e1"
                base100 = "#fdfcff"
                baseContent = "#1f1b3a"
            }
            defaultTheme(DaisyTheme.ShadcnLight)
            prefersDark(DaisyTheme.ShadcnDark)
        }
        lucide()
        images()
        toasts()
        i18n {
            locales("en", "de")
            defaultLocale = "en"
            strategy = LocaleStrategy.Cookie
        }
    }
}

dependencies {
    implementation(libs.ktor.server.netty)
    implementation(libs.ktor.server.auth)
    implementation(libs.ktor.server.sessions)
    implementation(libs.ktor.server.rate.limit)
    implementation(libs.exposed.jdbc)
    implementation(libs.hikari)
    implementation(libs.flyway.core)
    implementation(libs.logback)
    runtimeOnly(libs.h2)
}

tasks.shadowJar {
    mergeServiceFiles()
}

tasks.register<JavaExec>("installBrowsers") {
    group = "verification"
    description = "Downloads the browser the browser tests use, with its system packages on Linux."
    classpath = sourceSets["browserTest"].runtimeClasspath
    mainClass = "com.microsoft.playwright.CLI"
    val systemPackages = if (System.getProperty("os.name").startsWith("Linux")) listOf("--with-deps") else emptyList()
    args(listOf("install") + systemPackages + providers.gradleProperty("browser").orElse("chromium").get())
}

testing {
    suites {
        register<JvmTestSuite>("e2eTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(libs.kotlin.test.junit5)
            }
            targets.configureEach {
                testTask.configure {
                    val exampleJar = tasks.named<Jar>("shadowJar").flatMap { it.archiveFile }
                    inputs.file(exampleJar).withPathSensitivity(PathSensitivity.NONE)
                    jvmArgumentProviders.add(
                        CommandLineArgumentProvider { listOf("-Dexample.jar=${exampleJar.get().asFile.path}") },
                    )
                }
            }
        }
        register<JvmTestSuite>("browserTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(libs.kotlin.test.junit5)
                implementation(libs.playwright)
                implementation(libs.axe.playwright)
            }
            targets.configureEach {
                testTask.configure {
                    val exampleJar = tasks.named<Jar>("shadowJar").flatMap { it.archiveFile }
                    val browser = providers.gradleProperty("browser").orElse("chromium")
                    inputs.file(exampleJar).withPathSensitivity(PathSensitivity.NONE)
                    inputs.property("browser", browser)
                    systemProperty("browser", browser.get())
                    jvmArgumentProviders.add(
                        CommandLineArgumentProvider { listOf("-Dexample.jar=${exampleJar.get().asFile.path}") },
                    )
                }
            }
        }
        register<JvmTestSuite>("devBrowserTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(libs.kotlin.test.junit5)
                implementation(libs.playwright)
            }
            targets.configureEach {
                testTask.configure {
                    val projectDirectory = layout.projectDirectory.asFile.path
                    outputs.upToDateWhen { false }
                    systemProperty("example.dir", projectDirectory)
                }
            }
        }
    }
}
