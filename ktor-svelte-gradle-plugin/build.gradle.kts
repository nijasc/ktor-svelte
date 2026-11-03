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

dependencies {
    testImplementation(libs.kotlin.test.junit5)
    testImplementation(platform(libs.junit.bom))
    testRuntimeOnly(libs.junit.platform.launcher)
}

tasks.test {
    useJUnitPlatform()
}
