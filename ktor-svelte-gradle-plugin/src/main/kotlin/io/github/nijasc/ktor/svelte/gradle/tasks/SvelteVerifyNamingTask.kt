package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.NamingStyle
import io.github.nijasc.ktor.svelte.gradle.libraries.NamingProblem
import io.github.nijasc.ktor.svelte.gradle.libraries.apiNameProblems
import io.github.nijasc.ktor.svelte.gradle.libraries.messageKeyProblems
import io.github.nijasc.ktor.svelte.gradle.libraries.pageNameProblems
import io.github.nijasc.ktor.svelte.gradle.libraries.readMessages
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.Optional
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import org.gradle.api.tasks.options.Option

internal fun describeRule(pattern: String): String =
    NamingStyle.entries.firstOrNull { it.pattern == pattern }?.description ?: "matching $pattern"

@UntrackedTask(because = "Reads pages, the API description and the message files and reports names that break the project's rules")
public abstract class SvelteVerifyNamingTask : DefaultTask() {
    @get:Internal
    public abstract val frontendDir: DirectoryProperty

    @get:Internal
    public abstract val routesDirectory: DirectoryProperty

    @get:Internal
    public abstract val messagesDirectory: DirectoryProperty

    @get:Input
    public abstract val locales: ListProperty<String>

    @get:Input
    @get:Optional
    public abstract val pages: Property<String>

    @get:Input
    @get:Optional
    public abstract val apiRoutes: Property<String>

    @get:Input
    @get:Optional
    public abstract val dtos: Property<String>

    @get:Input
    @get:Optional
    public abstract val messageKeys: Property<String>

    @get:Input
    @get:Optional
    @get:Option(option = "strict", description = "Fails the build when a name breaks a rule, instead of only listing it")
    public abstract val strict: Property<Boolean>

    @TaskAction
    public fun verify() {
        val rules = listOfNotNull(pages.orNull, apiRoutes.orNull, dtos.orNull, messageKeys.orNull)
        if (rules.isEmpty()) {
            logger.lifecycle(
                "ktor-svelte: no naming rules are set in svelte { naming { } }, so there is nothing to check." + DocLink.NAMING.see(),
            )
            return
        }
        val problems = mutableListOf<Pair<NamingProblem, String>>()
        pages.orNull?.let { rule ->
            pageNameProblems(routesDirectory.get().asFile, Regex(rule)).forEach { problems += it to describeRule(rule) }
        }
        if (apiRoutes.isPresent || dtos.isPresent) {
            val openApi = frontendDir.get().asFile.resolve("src/lib/api/openapi.json")
            if (openApi.isFile) {
                apiNameProblems(openApi.readText(), apiRoutes.orNull?.let(::Regex), dtos.orNull?.let(::Regex)).forEach { problem ->
                    problems += problem to describeRule(if (problem.kind == "dto") dtos.get() else apiRoutes.get())
                }
            } else {
                logger.warn(
                    "ktor-svelte: the API names are not checked, because ${openApi.path} is missing. " +
                        "Turn on generateTs and run svelteGenerateTs.",
                )
            }
        }
        messageKeys.orNull?.let { rule ->
            val configured = locales.get()
            if (configured.isEmpty()) {
                logger.warn("ktor-svelte: the message keys are not checked, because i18n is off.")
            } else {
                val keys = readMessages(messagesDirectory.get().asFile, configured).keys
                messageKeyProblems(keys, Regex(rule)).forEach { problems += it to describeRule(rule) }
            }
        }
        if (problems.isEmpty()) {
            logger.lifecycle("ktor-svelte: every name follows the naming rules.")
            return
        }
        problems.forEach { (problem, rule) ->
            val place = if (problem.where == problem.name) "" else " in ${problem.where}"
            logger.lifecycle("${problem.kind} '${problem.name}'$place  ->  not $rule")
        }
        val summary = "${problems.size} name(s) break the naming rules."
        if (strict.getOrElse(false)) throw GradleException(summary + DocLink.NAMING.see())
        logger.warn(
            "ktor-svelte: $summary Add --strict, or set naming { strict = true }, to fail the build on them." + DocLink.NAMING.see(),
        )
    }
}
