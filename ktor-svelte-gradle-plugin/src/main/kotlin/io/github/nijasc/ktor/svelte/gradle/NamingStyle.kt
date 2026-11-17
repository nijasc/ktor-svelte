package io.github.nijasc.ktor.svelte.gradle

public enum class NamingStyle(
    public val pattern: String,
    internal val description: String,
) {
    KebabCase("[a-z0-9]+(-[a-z0-9]+)*", "kebab-case"),
    CamelCase("[a-z][a-zA-Z0-9]*", "camelCase"),
    PascalCase("[A-Z][a-zA-Z0-9]*", "PascalCase"),
    SnakeCase("[a-z0-9]+(_[a-z0-9]+)*", "snake_case"),
}
