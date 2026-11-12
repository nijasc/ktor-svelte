plugins {
    `version-catalog`
    id("ktor-svelte.library-publishing")
}

val ktorSvelteVersion = version.toString()

catalog {
    versionCatalog {
        version("ktor-svelte", ktorSvelteVersion)
        version("kotlin", libs.versions.kotlin.get())
        version("ktor", libs.versions.ktor.get())
        version("serialization", libs.versions.serialization.get())

        library("ktor-svelte-server", "io.github.nijasc", "ktor-svelte-server").versionRef("ktor-svelte")
        library("ktor-bom", "io.ktor", "ktor-bom").versionRef("ktor")
        listOf(
            "ktor-server-core",
            "ktor-server-netty",
            "ktor-server-content-negotiation",
            "ktor-server-auth",
            "ktor-server-sessions",
            "ktor-server-sse",
            "ktor-server-status-pages",
            "ktor-server-call-logging",
            "ktor-server-test-host",
            "ktor-serialization-kotlinx-json",
        ).forEach { name -> library(name, "io.ktor", name).versionRef("ktor") }
        library("kotlinx-serialization-json", "org.jetbrains.kotlinx", "kotlinx-serialization-json").versionRef("serialization")
        library("kotlin-test-junit5", "org.jetbrains.kotlin", "kotlin-test-junit5").versionRef("kotlin")

        plugin("kotlin-jvm", "org.jetbrains.kotlin.jvm").versionRef("kotlin")
        plugin("kotlin-serialization", "org.jetbrains.kotlin.plugin.serialization").versionRef("kotlin")
        plugin("ktor", "io.ktor.plugin").versionRef("ktor")
        plugin("ktor-svelte", "io.github.nijasc.ktor-svelte").versionRef("ktor-svelte")
    }
}

mavenPublishing {
    pom {
        name = "ktor-svelte catalog"
        description = "Gradle version catalog with the ktor-svelte runtime and plugin and the Kotlin, Ktor and serialization versions they are built and tested with."
    }
}
