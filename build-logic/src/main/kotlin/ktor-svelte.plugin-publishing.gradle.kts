plugins {
    `java-gradle-plugin`
    id("com.gradle.plugin-publish")
    id("org.cyclonedx.bom")
}

gradlePlugin {
    website = PROJECT_URL
    vcsUrl = PROJECT_GIT_URL
}

tasks.cyclonedxDirectBom {
    includeConfigs = listOf("runtimeClasspath")
}
