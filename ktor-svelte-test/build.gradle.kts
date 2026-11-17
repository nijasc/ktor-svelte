plugins {
    id("ktor-svelte.serialization-conventions")
    id("ktor-svelte.library-publishing")
}

dependencies {
    api(libs.playwright)
    api(libs.axe.playwright)
    api(libs.serialization.json)
    api(platform(libs.junit.bom))
    api(libs.junit.jupiter.api)

    testImplementation(libs.kotlin.test.junit5)
    testRuntimeOnly(libs.junit.platform.launcher)
}

mavenPublishing {
    pom {
        name = "ktor-svelte-test"
        description = "Starts a ktor-svelte app and drives a real browser from Kotlin tests."
    }
}
