package io.github.nijasc.ktor.svelte.gradle

import groovy.lang.MissingPropertyException
import org.gradle.api.GradleException
import java.lang.reflect.Modifier

private const val MAX_SUGGESTION_DISTANCE = 2

internal fun unknownSetting(
    type: Class<*>,
    block: String,
    name: String,
): RuntimeException {
    val names = settingNames(type)
    val closest = closestName(name, names) ?: return MissingPropertyException(name, type)
    return GradleException(
        "ktor-svelte has no setting '$name' in $block { }. Did you mean '$closest'? Available: ${names.joinToString(", ")}." +
            DocLink.GRADLE.see(),
    )
}

internal fun settingNames(type: Class<*>): List<String> =
    type.declaredMethods
        .asSequence()
        .filter { Modifier.isPublic(it.modifiers) && !it.isSynthetic && '$' !in it.name && it.name != "propertyMissing" }
        .map { method ->
            if (method.name.startsWith("get") && method.name.length > 3 && method.parameterCount == 0) {
                method.name.removePrefix("get").replaceFirstChar { it.lowercase() }
            } else {
                method.name
            }
        }.distinct()
        .sorted()
        .toList()

internal fun closestName(
    name: String,
    candidates: List<String>,
): String? =
    candidates
        .map { it to editDistance(name.lowercase(), it.lowercase()) }
        .filter { (candidate, distance) -> distance <= minOf(MAX_SUGGESTION_DISTANCE, candidate.length / 2) }
        .minByOrNull { it.second }
        ?.first

private fun editDistance(
    a: String,
    b: String,
): Int {
    var previous = IntArray(b.length + 1) { it }
    for (i in a.indices) {
        val current = IntArray(b.length + 1)
        current[0] = i + 1
        for (j in b.indices) {
            val substitution = previous[j] + if (a[i] == b[j]) 0 else 1
            current[j + 1] = minOf(previous[j + 1] + 1, current[j] + 1, substitution)
        }
        previous = current
    }
    return previous[b.length]
}
