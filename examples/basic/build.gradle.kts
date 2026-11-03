plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.shadow)
    application
    id("io.github.nijasc.ktor-svelte")
}

kotlin {
    jvmToolchain(17)
}

application {
    mainClass = "ApplicationKt"
}

dependencies {
    implementation(libs.ktor.server.netty)
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
