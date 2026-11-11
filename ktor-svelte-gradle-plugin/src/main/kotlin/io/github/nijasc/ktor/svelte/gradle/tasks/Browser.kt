package io.github.nijasc.ktor.svelte.gradle.tasks

internal fun browserCommand(
    osName: String,
    environment: Map<String, String>,
    url: String,
): List<String>? {
    if (!environment["CI"].isNullOrBlank()) return null
    return when {
        osName.startsWith("Windows") -> listOf("cmd", "/c", "start", "", url)
        osName.startsWith("Mac") -> listOf("open", url)
        environment.containsKey("DISPLAY") || environment.containsKey("WAYLAND_DISPLAY") -> listOf("xdg-open", url)
        else -> null
    }
}
