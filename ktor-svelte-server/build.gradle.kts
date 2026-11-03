import org.jetbrains.kotlin.gradle.dsl.KotlinVersion

plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.ktlint)
}

kotlin {
    explicitApi()
    jvmToolchain(17)
    coreLibrariesVersion = "2.3.21"
    compilerOptions {
        apiVersion = KotlinVersion.KOTLIN_2_3
        languageVersion = KotlinVersion.KOTLIN_2_3
    }
}

dependencies {
    api(libs.ktor.server.core)
    implementation(libs.serialization.json)

    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.ktor.server.compression)
    testImplementation(libs.kotlin.test.junit5)
    testImplementation(platform(libs.junit.bom))
    testRuntimeOnly(libs.junit.platform.launcher)
    testRuntimeOnly(libs.logback)
}

tasks.test {
    useJUnitPlatform()
}
