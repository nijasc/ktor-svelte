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
