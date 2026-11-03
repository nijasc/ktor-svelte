import org.jetbrains.kotlin.gradle.dsl.KotlinVersion

plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.kotlin.serialization)
    alias(libs.plugins.ktlint)
    alias(libs.plugins.maven.publish)
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
    api(libs.ktor.server.compression)
    api(libs.ktor.server.content.negotiation)
    api(libs.ktor.server.routing.openapi)
    api(libs.ktor.serialization.json)
    api(libs.serialization.json)
    compileOnly(libs.ktor.serialization.xml)

    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.ktor.serialization.xml)
    testImplementation(libs.kotlin.test.junit5)
    testImplementation(platform(libs.junit.bom))
    testRuntimeOnly(libs.junit.platform.launcher)
    testRuntimeOnly(libs.logback)
}

tasks.test {
    useJUnitPlatform()
}

mavenPublishing {
    publishToMavenCentral()
    signAllPublications()
    pom {
        name = "ktor-svelte-server"
        description = "Ktor plugin that serves a SvelteKit build on the same port as the API."
        url = "https://github.com/nijasc/ktor-svelte"
        licenses {
            license {
                name = "Apache-2.0"
                url = "https://www.apache.org/licenses/LICENSE-2.0"
            }
        }
        developers {
            developer {
                id = "nijasc"
                url = "https://github.com/nijasc"
            }
        }
        scm {
            url = "https://github.com/nijasc/ktor-svelte"
            connection = "scm:git:https://github.com/nijasc/ktor-svelte.git"
        }
    }
}
