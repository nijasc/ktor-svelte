import io.github.nijasc.ktor.svelte.gradle.DaisyTheme

plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.kotlin.serialization)
    id("io.github.nijasc.ktor-svelte")
}

kotlin {
    jvmToolchain(17)
    sourceSets.main {
        kotlin.srcDir(layout.buildDirectory.dir("snippets/kotlin"))
    }
}

svelte {
    frontendDir = layout.projectDirectory.dir("../../examples/notes/frontend")
    libraries {
        daisyUi {
            themes(DaisyTheme.Light, DaisyTheme.Dark)
        }
        lucide()
        i18n {
            locales("en", "de")
        }
    }
}

dependencies {
    implementation(libs.ktor.server.auth)
    implementation(libs.ktor.server.sessions)
    implementation(libs.ktor.server.sse)
    implementation(libs.ktor.server.status.pages)
    implementation(libs.ktor.server.rate.limit)
    implementation(libs.ktor.server.forwarded.header)
    implementation(libs.ktor.serialization.xml)
    implementation(libs.micrometer.core)
}
