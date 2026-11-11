plugins {
    id("org.jetbrains.dokka")
}

dokka {
    moduleName = "ktor-svelte"
    dokkaPublications.html {
        includes.from("docs/api-reference.md")
    }
}
