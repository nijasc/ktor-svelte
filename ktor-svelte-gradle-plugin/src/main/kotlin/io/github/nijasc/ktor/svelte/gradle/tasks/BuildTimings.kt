package io.github.nijasc.ktor.svelte.gradle.tasks

import org.gradle.api.logging.Logging
import org.gradle.api.provider.Property
import org.gradle.api.services.BuildService
import org.gradle.api.services.BuildServiceParameters
import org.gradle.tooling.events.FinishEvent
import org.gradle.tooling.events.OperationCompletionListener
import org.gradle.tooling.events.OperationResult
import org.gradle.tooling.events.task.TaskFailureResult
import org.gradle.tooling.events.task.TaskFinishEvent
import org.gradle.tooling.events.task.TaskSkippedResult
import org.gradle.tooling.events.task.TaskSuccessResult
import java.util.Locale
import java.util.concurrent.ConcurrentHashMap

internal enum class StepOutcome(
    val note: String,
) {
    RAN(""),
    UP_TO_DATE("up to date"),
    FROM_CACHE("from cache"),
    SKIPPED("skipped"),
    FAILED("failed"),
}

internal data class StepTime(
    val label: String,
    val millis: Long,
    val outcome: StepOutcome,
)

internal data class TimedStep(
    val taskName: String,
    val label: String,
    val frontend: Boolean,
)

internal val TIMED_STEPS: List<TimedStep> =
    listOf(
        TimedStep("svelteInstall", "install", frontend = true),
        TimedStep("svelteBuild", "frontend build", frontend = true),
        TimedStep("svelteBundle", "bundling", frontend = true),
        TimedStep("compileKotlin", "Kotlin compile", frontend = false),
    )

internal fun timingSummary(
    steps: List<StepTime>,
    frontendLabels: Set<String>,
): String? {
    if (steps.none { it.label in frontendLabels && it.outcome == StepOutcome.RAN }) return null
    val width = (steps.map { it.label } + "total").maxOf { it.length }
    val times = steps.map { seconds(it.millis) }
    val total = seconds(steps.sumOf { it.millis })
    val timeWidth = (times + total).maxOf { it.length }
    val rows =
        steps.mapIndexed { index, step ->
            "  ${step.label.padEnd(width)}  ${times[index].padStart(timeWidth)}  ${step.outcome.note}".trimEnd()
        }
    return (listOf("ktor-svelte build times:") + rows + "  ${"total".padEnd(width)}  ${total.padStart(timeWidth)}").joinToString("\n")
}

private fun seconds(millis: Long): String = String.format(Locale.ROOT, "%.1fs", millis / 1000.0)

internal fun outcomeOf(result: OperationResult): StepOutcome =
    when (result) {
        is TaskSuccessResult ->
            when {
                result.isFromCache -> StepOutcome.FROM_CACHE
                result.isUpToDate -> StepOutcome.UP_TO_DATE
                else -> StepOutcome.RAN
            }
        is TaskSkippedResult -> StepOutcome.SKIPPED
        is TaskFailureResult -> StepOutcome.FAILED
        else -> StepOutcome.RAN
    }

internal abstract class BuildTimings :
    BuildService<BuildTimings.Parameters>,
    OperationCompletionListener,
    AutoCloseable {
    interface Parameters : BuildServiceParameters {
        val projectPath: Property<String>
        val enabled: Property<Boolean>
    }

    private val finished = ConcurrentHashMap<String, StepTime>()

    private fun pathOf(taskName: String): String = "${parameters.projectPath.get().removeSuffix(":")}:$taskName"

    override fun onFinish(event: FinishEvent) {
        if (event !is TaskFinishEvent) return
        val step = TIMED_STEPS.firstOrNull { pathOf(it.taskName) == event.descriptor.taskPath } ?: return
        val result = event.result
        finished[step.taskName] = StepTime(step.label, result.endTime - result.startTime, outcomeOf(result))
    }

    override fun close() {
        if (!parameters.enabled.getOrElse(true)) return
        val steps = TIMED_STEPS.mapNotNull { finished[it.taskName] }
        val frontend = TIMED_STEPS.filter { it.frontend }.map { it.label }.toSet()
        timingSummary(steps, frontend)?.let { Logging.getLogger(BuildTimings::class.java).lifecycle(it) }
    }
}
