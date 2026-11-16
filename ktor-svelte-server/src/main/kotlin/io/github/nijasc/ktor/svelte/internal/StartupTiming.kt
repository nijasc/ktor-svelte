package io.github.nijasc.ktor.svelte.internal

import io.ktor.server.application.Application
import io.ktor.util.AttributeKey
import java.lang.management.ManagementFactory
import java.util.Locale
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.atomic.AtomicBoolean

internal data class StartupStep(
    val name: String,
    val millis: Long,
)

internal val StartupStepsKey = AttributeKey<CopyOnWriteArrayList<StartupStep>>("KtorSvelteStartupSteps")

private const val WORTH_A_HINT_MILLIS = 1000L
private const val MILLIS_PER_SECOND = 1000.0
private val firstApplicationOfTheJvm = AtomicBoolean(true)

internal fun Application.startupSteps(): CopyOnWriteArrayList<StartupStep> =
    attributes.computeIfAbsent(StartupStepsKey) {
        CopyOnWriteArrayList()
    }

internal fun jvmStartIfFirstApplication(): Long? =
    if (firstApplicationOfTheJvm.getAndSet(false)) ManagementFactory.getRuntimeMXBean().startTime else null

internal fun took(millis: Long): String =
    if (millis < MILLIS_PER_SECOND) "$millis ms" else String.format(Locale.ROOT, "%.1f s", millis / MILLIS_PER_SECOND)

internal class StartupTiming(
    private val jvmStarted: Long?,
    private val installStarted: Long,
) {
    var installEnded: Long = installStarted
    var modulesEnded: Long? = null

    fun line(
        ready: Long,
        steps: List<StartupStep>,
    ): String {
        val modulesDone = modulesEnded ?: ready
        val beforeInstall = jvmStarted?.let { installStarted - it }
        val afterInstall = modulesDone - installEnded
        val phases =
            listOfNotNull(
                beforeInstall?.let { "${took(it)} for the JVM and your code before install(Svelte)" },
                "${took(installEnded - installStarted)} in install(Svelte)",
                "${took(afterInstall)} in your code after it",
                (ready - modulesDone).takeIf { modulesEnded != null }?.let { "${took(it)} to open the port" },
            )
        val named =
            if (steps.isNotEmpty()) {
                " Steps: " + steps.sortedByDescending { it.millis }.joinToString { "${it.name} ${took(it.millis)}" } + "."
            } else if (maxOf(beforeInstall ?: 0, afterInstall) >= WORTH_A_HINT_MILLIS) {
                " To see what your own code spends it on, wrap the slow parts in startupStep(\"name\") { }."
            } else {
                ""
            }
        return "ktor-svelte: started in ${took(ready - (jvmStarted ?: installStarted))}: ${phases.joinToString()}.$named"
    }
}
