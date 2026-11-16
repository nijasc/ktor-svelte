package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.DeclaredEnvironment
import io.github.nijasc.ktor.svelte.internal.DeclaredVariable
import io.github.nijasc.ktor.svelte.internal.ENV_EXAMPLE_FILE
import io.github.nijasc.ktor.svelte.internal.environmentTable
import io.github.nijasc.ktor.svelte.internal.typescript.isGenerateOnlyRun
import io.ktor.utils.io.KtorDsl

private val VARIABLE_NAME = Regex("[A-Z][A-Z0-9_]*")

public class EnvironmentException(
    message: String,
    public val variables: List<String>,
) : IllegalStateException(message)

@KtorDsl
public class EnvironmentScope internal constructor(
    private val source: (String) -> String?,
) {
    internal val problems = linkedMapOf<String, String>()

    private fun read(variable: DeclaredVariable): String? {
        require(VARIABLE_NAME.matches(variable.name)) {
            "'${variable.name}' is not a name for an environment variable. Use capital letters, digits and '_', such as DATABASE_URL."
        }
        DeclaredEnvironment.add(variable)
        val value = source(variable.name)?.takeIf { it.isNotEmpty() }
        if (value == null && variable.required) problems[variable.name] = "missing"
        return value
    }

    public fun string(
        name: String,
        description: String,
        default: String? = null,
        example: String? = null,
    ): String = read(DeclaredVariable(name, description, "text", default == null, default, example, false)) ?: default ?: example.orEmpty()

    public fun optional(
        name: String,
        description: String,
        example: String? = null,
    ): String? = read(DeclaredVariable(name, description, "text", false, null, example, false))

    public fun secret(
        name: String,
        description: String,
    ): String = read(DeclaredVariable(name, description, "text", true, null, null, true)).orEmpty()

    public fun optionalSecret(
        name: String,
        description: String,
    ): String? = read(DeclaredVariable(name, description, "text", false, null, null, true))

    public fun int(
        name: String,
        description: String,
        default: Int? = null,
        example: Int? = null,
    ): Int {
        val text =
            read(DeclaredVariable(name, description, "whole number", default == null, default?.toString(), example?.toString(), false))
        val fallback = default ?: example ?: 0
        if (text == null) return fallback
        return text.toIntOrNull() ?: fallback.also { problems[name] = "\"$text\" is not a whole number" }
    }

    public fun boolean(
        name: String,
        description: String,
        default: Boolean? = null,
    ): Boolean {
        val text = read(DeclaredVariable(name, description, "true or false", default == null, default?.toString(), null, false))
        if (text == null) return default ?: false
        return text.toBooleanStrictOrNull() ?: (default ?: false).also { problems[name] = "\"$text\" is not true or false" }
    }

    @PublishedApi
    internal fun choice(
        name: String,
        description: String,
        choices: List<String>,
        default: String?,
    ): String {
        val text = read(DeclaredVariable(name, description, "one of ${choices.joinToString()}", default == null, default, null, false))
        val fallback = default ?: choices.first()
        if (text == null) return fallback
        return choices.firstOrNull { it.equals(text, ignoreCase = true) }
            ?: fallback.also { problems[name] = "\"$text\" is not one of ${choices.joinToString()}" }
    }

    public inline fun <reified E : Enum<E>> oneOf(
        name: String,
        description: String,
        default: E? = null,
    ): E = enumValueOf(choice(name, description, enumValues<E>().map { it.name }, default?.name))
}

public fun <T> environment(
    source: (String) -> String? = System::getenv,
    declare: EnvironmentScope.() -> T,
): T {
    val scope = EnvironmentScope(source)
    val values = scope.declare()
    if (scope.problems.isEmpty() || isGenerateOnlyRun()) return values
    val count = scope.problems.size
    throw EnvironmentException(
        "The app cannot start: $count environment variable${if (count == 1) " is" else "s are"} missing or wrong.\n\n" +
            environmentTable(scope.problems) +
            "\n\nSet ${if (count == 1) "it" else "them"} in the environment. $ENV_EXAMPLE_FILE lists every variable the app reads.",
        scope.problems.keys.toList(),
    )
}
