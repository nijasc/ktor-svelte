package io.github.nijasc.ktor.svelte.internal.typescript

import java.util.concurrent.ConcurrentHashMap

private val templates = ConcurrentHashMap<String, String>()

internal fun typeScriptTemplate(name: String): String =
    templates.computeIfAbsent(name) {
        val resource =
            TypeScriptGenerator::class.java.getResource(name)
                ?: error("ktor-svelte is missing its TypeScript template $name. The JAR may be damaged.")
        resource.readText()
    }
