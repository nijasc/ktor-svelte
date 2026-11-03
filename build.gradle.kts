plugins {
    alias(libs.plugins.kotlin.jvm) apply false
    alias(libs.plugins.kotlin.serialization) apply false
    alias(libs.plugins.ktlint) apply false
    alias(libs.plugins.maven.publish) apply false
    alias(libs.plugins.plugin.publish) apply false
    alias(libs.plugins.binary.compatibility)
}

val releaseVersion = providers.gradleProperty("releaseVersion")
val developmentVersion = file("version.txt").readText().trim() + "-SNAPSHOT"

allprojects {
    version = releaseVersion.getOrElse(developmentVersion)
}
