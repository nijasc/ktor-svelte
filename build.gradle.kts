plugins {
    alias(libs.plugins.binary.compatibility)
}

val releaseVersion = providers.gradleProperty("releaseVersion")
val developmentVersion = file("version.txt").readText().trim() + "-SNAPSHOT"

allprojects {
    version = releaseVersion.getOrElse(developmentVersion)
}
