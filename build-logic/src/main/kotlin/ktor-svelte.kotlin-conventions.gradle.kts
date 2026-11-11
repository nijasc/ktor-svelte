plugins {
    id("org.jetbrains.kotlin.jvm")
    id("org.jlleitschuh.gradle.ktlint")
    id("org.jetbrains.dokka")
}

dokka {
    dokkaSourceSets.configureEach {
        sourceLink {
            localDirectory = layout.projectDirectory.dir("src/main/kotlin")
            remoteUrl("$PROJECT_URL/blob/main/${project.name}/src/main/kotlin")
            remoteLineSuffix = "#L"
        }
    }
}

kotlin {
    explicitApi()
    jvmToolchain(17)
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
