package io.github.nijasc.ktor.svelte.internal.validation

internal class RuleCheck(
    val pattern: String,
    val requirement: String,
)

internal class RulePreset(
    val format: String,
    val checks: List<RuleCheck>,
    val message: String,
)

internal object RulePresets {
    val email =
        RulePreset(
            "email",
            listOf(RuleCheck("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "an email address")),
            "Must be an email address, such as name@example.com.",
        )
    val webAddress =
        RulePreset(
            "uri",
            listOf(RuleCheck("^https?://[^\\s/?#.]+\\.[^\\s]+$", "a web address")),
            "Must be a web address that starts with http:// or https://.",
        )
    val phone =
        RulePreset(
            "phone",
            listOf(RuleCheck("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$", "a phone number")),
            "Must be a phone number, such as +49 30 1234567.",
        )
    val slug =
        RulePreset(
            "slug",
            listOf(RuleCheck("^[a-z0-9]+(-[a-z0-9]+)*$", "lowercase letters, digits and single dashes")),
            "Must be lowercase letters and digits, with single dashes between words.",
        )
    val strongPassword =
        RulePreset(
            "strong-password",
            listOf(
                RuleCheck("^[\\s\\S]{10,}$", "at least 10 characters"),
                RuleCheck("[a-z]", "a lowercase letter"),
                RuleCheck("[A-Z]", "an uppercase letter"),
                RuleCheck("[0-9]", "a digit"),
            ),
            "Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit.",
        )

    val all: List<RulePreset> = listOf(email, webAddress, phone, slug, strongPassword)

    fun forFormat(format: String?): RulePreset? = all.firstOrNull { it.format == format }
}
