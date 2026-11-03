import org.jetbrains.kotlin.gradle.dsl.KotlinVersion

plugins {
    `java-gradle-plugin`
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.ktlint)
}

kotlin {
    explicitApi()
    jvmToolchain(17)
    coreLibrariesVersion = "2.1.21"
    compilerOptions {
        apiVersion = KotlinVersion.KOTLIN_2_1
        languageVersion = KotlinVersion.KOTLIN_2_1
    }
}

gradlePlugin {
    plugins {
        create("ktorSvelte") {
            id = "io.github.nijasc.ktor-svelte"
            implementationClass = "io.github.nijasc.ktor.svelte.gradle.KtorSveltePlugin"
            displayName = "ktor-svelte"
            description = "Builds a SvelteKit frontend and packages it into a Ktor application's JAR."
        }
    }
}

@Suppress("UnstableApiUsage")
testing {
    suites {
        named<JvmTestSuite>("test") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(gradleApi())
                implementation(libs.kotlin.test.junit5)
            }
        }
        register<JvmTestSuite>("functionalTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(project())
                implementation(gradleTestKit())
                implementation(libs.kotlin.test.junit5)
            }
            targets.configureEach {
                testTask.configure {
                    systemProperty("ktorSvelte.testGradleVersion", providers.gradleProperty("testGradleVersion").getOrElse(""))
                    listOf("javax.net.ssl.trustStore", "javax.net.ssl.trustStoreType").forEach { name ->
                        providers.systemProperty(name).orNull?.let { value -> systemProperty(name, value) }
                    }
                    systemProperty("ktorSvelte.kotlinVersion", libs.versions.kotlin.get())
                    systemProperty("ktorSvelte.shadowVersion", libs.versions.shadow.get())
                    systemProperty("ktorSvelte.ktorVersion", libs.versions.ktor.get())
                    maxParallelForks = 2
                }
            }
        }
    }
}

gradlePlugin {
    testSourceSets(sourceSets["functionalTest"])
}

tasks.check {
    dependsOn(testing.suites.named("functionalTest"))
}

tasks.processResources {
    val pluginVersion = version.toString()
    inputs.property("version", pluginVersion)
    filesMatching("ktor-svelte-gradle-plugin.properties") {
        expand("version" to pluginVersion)
    }
}
