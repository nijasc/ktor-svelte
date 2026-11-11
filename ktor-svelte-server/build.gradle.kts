import org.jetbrains.kotlin.gradle.dsl.KotlinVersion

plugins {
    id("ktor-svelte.serialization-conventions")
    id("ktor-svelte.library-publishing")
}

kotlin {
    coreLibrariesVersion = "2.3.21"
    compilerOptions {
        apiVersion = KotlinVersion.KOTLIN_2_3
        languageVersion = KotlinVersion.KOTLIN_2_3
    }
}

dependencies {
    api(libs.ktor.server.core)
    api(libs.ktor.server.compression)
    api(libs.ktor.server.content.negotiation)
    api(libs.ktor.server.routing.openapi)
    api(libs.ktor.serialization.json)
    implementation(libs.ktor.server.swagger)
    implementation(libs.ktor.server.body.limit)
    implementation(libs.ktor.server.rate.limit)
    implementation(libs.ktor.server.call.id)
    api(libs.serialization.json)
    compileOnly(libs.ktor.serialization.xml)
    compileOnly(libs.ktor.server.compression.zstd)

    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.ktor.serialization.xml)
    testImplementation(libs.ktor.server.compression.zstd)
    testImplementation(libs.ktor.server.auth)
    testImplementation(libs.ktor.server.forwarded.header)
    testImplementation(libs.kotlin.test.junit5)
    testImplementation(platform(libs.junit.bom))
    testRuntimeOnly(libs.junit.platform.launcher)
    testRuntimeOnly(libs.logback)
}

mavenPublishing {
    pom {
        name = "ktor-svelte-server"
        description = "Ktor plugin that serves a SvelteKit build on the same port as the API."
    }
}

tasks.processResources {
    val runtimeVersion = version.toString()
    inputs.property("version", runtimeVersion)
    filesMatching("ktor-svelte-server.properties") {
        expand("version" to runtimeVersion)
    }
}
