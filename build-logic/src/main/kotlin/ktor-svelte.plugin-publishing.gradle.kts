plugins {
    `java-gradle-plugin`
    id("com.gradle.plugin-publish")
}

gradlePlugin {
    website = PROJECT_URL
    vcsUrl = PROJECT_GIT_URL
}
