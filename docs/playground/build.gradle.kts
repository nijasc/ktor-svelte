plugins {
    alias(libs.plugins.kotlin.multiplatform)
}

val serverSources = layout.projectDirectory.dir("../../ktor-svelte-server/src/main")
val generatorPackage = "io/github/nijasc/ktor/svelte/internal"

val generatorSources =
    tasks.register<Sync>("generatorSources") {
        from(serverSources.dir("kotlin/$generatorPackage")) {
            include("typescript/TypeScriptGenerator.kt", "validation/ConstraintMessages.kt")
        }
        into(layout.buildDirectory.dir("generated/generator/$generatorPackage"))
    }

val generatorTemplates =
    tasks.register("generatorTemplates") {
        val templates = serverSources.dir("resources/$generatorPackage/typescript")
        val output = layout.buildDirectory.file("generated/templates/Templates.kt")
        inputs.dir(templates)
        outputs.file(output)
        doLast {
            val entries =
                templates.asFile
                    .listFiles()
                    .orEmpty()
                    .filter { it.extension == "ts" }
                    .sortedBy { it.name }
                    .joinToString(",\n") { file ->
                        val escaped =
                            file
                                .readText()
                                .replace("\\", "\\\\")
                                .replace("\"", "\\\"")
                                .replace("$", "\\$")
                                .replace("\r", "")
                                .replace("\n", "\\n")
                        "    \"${file.name}\" to \"$escaped\""
                    }
            output.get().asFile.writeText(
                "package io.github.nijasc.ktor.svelte.internal.typescript\n\n" +
                    "private val templates = mapOf(\n$entries,\n)\n\n" +
                    "internal fun typeScriptTemplate(name: String): String = templates.getValue(name)\n",
            )
        }
    }

kotlin {
    js {
        browser()
        useEsModules()
        binaries.library()
        compilerOptions {
            target = "es2015"
        }
    }
    sourceSets {
        jsMain {
            kotlin.srcDir(generatorSources.map { layout.buildDirectory.dir("generated/generator").get() })
            kotlin.srcDir(generatorTemplates.map { layout.buildDirectory.dir("generated/templates").get() })
            dependencies {
                implementation(libs.serialization.json)
            }
        }
    }
}
