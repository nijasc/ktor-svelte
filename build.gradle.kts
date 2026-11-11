plugins {
    id("ktor-svelte.api-reference")
    alias(libs.plugins.binary.compatibility)
}

val releaseVersion = providers.gradleProperty("releaseVersion")
val developmentVersion = file("version.txt").readText().trim() + "-SNAPSHOT"

allprojects {
    version = releaseVersion.getOrElse(developmentVersion)
}

dependencies {
    dokka(project(":ktor-svelte-server"))
    dokka(project(":ktor-svelte-gradle-plugin"))
}
