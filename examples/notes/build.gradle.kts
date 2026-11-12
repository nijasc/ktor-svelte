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
    mainClass = "notes.ApplicationKt"
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
        }
        daisyUi {
            themes(DaisyTheme.Light, DaisyTheme.Dark, DaisyTheme.Cupcake)
            customTheme("ktor") {
                primary = "#6b57ff"
                secondary = "#f97316"
                base100 = "#fdfcff"
                baseContent = "#1f1b3a"
            }
            defaultTheme(DaisyTheme.Light)
            prefersDark(DaisyTheme.Dark)
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
    implementation(libs.ktor.serialization.xml)
    implementation(libs.logback)
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
    }
}
