package io.github.nijasc.ktor.svelte.gradle

import io.github.nijasc.ktor.svelte.gradle.libraries.DaisySpec

private val SHADCN_SHAPE =
    mapOf(
        "radius-selector" to "0.375rem",
        "radius-field" to "0.5rem",
        "radius-box" to "0.625rem",
        "size-selector" to "0.25rem",
        "size-field" to "0.25rem",
        "border" to "1px",
        "depth" to "0",
        "noise" to "0",
    )

internal val SHADCN_THEMES: Map<String, DaisyCustomTheme> =
    listOf(
        DaisyCustomTheme(
            DaisyTheme.ShadcnLight.cssName,
            "light",
            mapOf(
                "color-base-100" to "oklch(1 0 0)",
                "color-base-200" to "oklch(0.97 0 0)",
                "color-base-300" to "oklch(0.922 0 0)",
                "color-base-content" to "oklch(0.145 0 0)",
                "color-primary" to "oklch(0.205 0 0)",
                "color-primary-content" to "oklch(0.985 0 0)",
                "color-secondary" to "oklch(0.97 0 0)",
                "color-secondary-content" to "oklch(0.205 0 0)",
                "color-accent" to "oklch(0.97 0 0)",
                "color-accent-content" to "oklch(0.205 0 0)",
                "color-neutral" to "oklch(0.205 0 0)",
                "color-neutral-content" to "oklch(0.985 0 0)",
                "color-info" to "oklch(0.623 0.214 259.815)",
                "color-info-content" to "oklch(0.985 0 0)",
                "color-success" to "oklch(0.627 0.194 149.214)",
                "color-success-content" to "oklch(0.985 0 0)",
                "color-warning" to "oklch(0.769 0.188 70.08)",
                "color-warning-content" to "oklch(0.205 0 0)",
                "color-error" to "oklch(0.577 0.245 27.325)",
                "color-error-content" to "oklch(0.985 0 0)",
            ) + SHADCN_SHAPE,
        ),
        DaisyCustomTheme(
            DaisyTheme.ShadcnDark.cssName,
            "dark",
            mapOf(
                "color-base-100" to "oklch(0.145 0 0)",
                "color-base-200" to "oklch(0.205 0 0)",
                "color-base-300" to "oklch(0.269 0 0)",
                "color-base-content" to "oklch(0.985 0 0)",
                "color-primary" to "oklch(0.922 0 0)",
                "color-primary-content" to "oklch(0.205 0 0)",
                "color-secondary" to "oklch(0.269 0 0)",
                "color-secondary-content" to "oklch(0.985 0 0)",
                "color-accent" to "oklch(0.269 0 0)",
                "color-accent-content" to "oklch(0.985 0 0)",
                "color-neutral" to "oklch(0.269 0 0)",
                "color-neutral-content" to "oklch(0.985 0 0)",
                "color-info" to "oklch(0.623 0.214 259.815)",
                "color-info-content" to "oklch(0.985 0 0)",
                "color-success" to "oklch(0.696 0.17 162.48)",
                "color-success-content" to "oklch(0.145 0 0)",
                "color-warning" to "oklch(0.769 0.188 70.08)",
                "color-warning-content" to "oklch(0.205 0 0)",
                "color-error" to "oklch(0.704 0.191 22.216)",
                "color-error-content" to "oklch(0.985 0 0)",
            ) + SHADCN_SHAPE,
        ),
    ).associateBy { it.name }

internal fun daisySpecOf(
    requested: List<String>,
    userThemes: List<DaisyCustomTheme>,
    defaultTheme: String?,
    prefersDark: String?,
): DaisySpec {
    val customThemes = requested.mapNotNull { SHADCN_THEMES[it] } + userThemes
    val themes =
        requested.filterNot { it in SHADCN_THEMES }.ifEmpty {
            if (customThemes.isEmpty()) {
                listOf(
                    "light",
                    "dark",
                )
            } else {
                emptyList()
            }
        }
    val order = requested + userThemes.map { it.name }
    val all = order.ifEmpty { themes }
    return DaisySpec(
        themes = themes,
        defaultTheme = defaultTheme ?: all.first(),
        prefersDark = prefersDark ?: listOf("dark", DaisyTheme.ShadcnDark.cssName).firstOrNull { it in all },
        customThemes = customThemes,
        order = order,
    )
}
