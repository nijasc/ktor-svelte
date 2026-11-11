plugins {
    id("com.vanniktech.maven.publish")
}

mavenPublishing {
    publishToMavenCentral()
    signAllPublications()
    pom {
        url = PROJECT_URL
        licenses {
            license {
                name = "Apache-2.0"
                url = "https://www.apache.org/licenses/LICENSE-2.0"
            }
        }
        developers {
            developer {
                id = "nijasc"
                name = "nijasc"
                url = "https://github.com/nijasc"
            }
        }
        scm {
            url = PROJECT_URL
            connection = "scm:git:$PROJECT_GIT_URL"
        }
    }
}
