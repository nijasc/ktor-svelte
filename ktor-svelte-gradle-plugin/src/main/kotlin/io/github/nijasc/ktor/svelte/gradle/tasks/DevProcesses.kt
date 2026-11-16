package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.net.InetSocketAddress
import java.net.Socket
import java.util.concurrent.TimeUnit

internal data class RecordedProcess(
    val pid: Long,
    val startedAt: Long,
    val onlyWithParent: Long = 0,
)

internal data class PortOwner(
    val pid: Long,
    val name: String?,
)

private const val CONNECT_MILLIS = 300
private const val LOOKUP_SECONDS = 5L
private const val STOP_SECONDS = 3L
private val LOOPBACK = listOf("127.0.0.1", "::1")
private val PID_IN_SS = Regex("""pid=(\d+)""")

internal fun recordOf(
    handle: ProcessHandle,
    onlyWithParent: Long = 0,
): RecordedProcess? =
    handle
        .info()
        .startInstant()
        .map { RecordedProcess(handle.pid(), it.toEpochMilli(), onlyWithParent) }
        .orElse(null)

internal fun processTree(
    holdingPorts: List<Process>,
    sharingHelpers: List<Process> = emptyList(),
): Set<RecordedProcess> {
    val always =
        holdingPorts
            .filter { it.isAlive }
            .flatMap { listOf(it.toHandle()) + it.descendants().toList() }
            .mapNotNull { recordOf(it) }
    val withParent =
        sharingHelpers.filter { it.isAlive }.flatMap { root ->
            listOfNotNull(recordOf(root.toHandle())) +
                root.descendants().toList().mapNotNull { child ->
                    recordOf(child, child.parent().map { it.pid() }.orElse(0))
                }
        }
    return (always + withParent).toSet()
}

internal class DevProcessRecord(
    private val file: File,
) {
    fun read(): Set<RecordedProcess> =
        runCatching { file.readLines() }
            .getOrDefault(emptyList())
            .mapNotNull { line ->
                val parts = line.trim().split(' ')
                val pid = parts.getOrNull(0)?.toLongOrNull()
                val startedAt = parts.getOrNull(1)?.toLongOrNull()
                val parent = parts.getOrNull(2)?.toLongOrNull()
                if (pid != null && startedAt != null && parent != null && parts.size == 3) RecordedProcess(pid, startedAt, parent) else null
            }.toSet()

    fun write(processes: Set<RecordedProcess>) {
        runCatching {
            file.parentFile.mkdirs()
            file.writeText(processes.joinToString("") { "${it.pid} ${it.startedAt} ${it.onlyWithParent}\n" })
        }
    }

    fun clear() {
        runCatching { file.delete() }
    }
}

internal fun stillRunning(
    recorded: Set<RecordedProcess>,
    lookup: (Long) -> ProcessHandle? = { ProcessHandle.of(it).orElse(null) },
): List<ProcessHandle> {
    val alive =
        recorded.mapNotNull { process ->
            lookup(process.pid)?.takeIf { it.isAlive && recordOf(it, process.onlyWithParent) == process }?.let { process to it }
        }
    val ours = alive.filter { (process, _) -> process.onlyWithParent == 0L }.map { (process, _) -> process.pid }.toMutableSet()
    do {
        val before = ours.size
        alive.filter { (process, _) -> process.onlyWithParent in ours }.forEach { (process, _) -> ours += process.pid }
    } while (ours.size > before)
    return alive.filter { (process, _) -> process.pid in ours }.map { (_, handle) -> handle }
}

internal fun stopLeftovers(leftovers: List<ProcessHandle>) {
    leftovers.forEach { it.destroy() }
    val deadline = System.nanoTime() + TimeUnit.SECONDS.toNanos(STOP_SECONDS)
    while (leftovers.any { it.isAlive } && System.nanoTime() < deadline) Thread.sleep(50)
    leftovers.filter { it.isAlive }.forEach { it.destroyForcibly() }
    leftovers.forEach { handle -> runCatching { handle.onExit().get(STOP_SECONDS, TimeUnit.SECONDS) } }
}

internal fun describe(handle: ProcessHandle): String {
    val name =
        handle
            .info()
            .command()
            .map { File(it).name }
            .orElse("a process")
    return "$name (PID ${handle.pid()})"
}

internal fun portIsInUse(port: Int): Boolean =
    LOOPBACK.any { host ->
        runCatching { Socket().use { it.connect(InetSocketAddress(host, port), CONNECT_MILLIS) } }.isSuccess
    }

internal fun listenerInNetstat(
    output: String,
    port: Int,
): Long? =
    output
        .lineSequence()
        .map { it.trim().split(Regex("\\s+")) }
        .firstOrNull { it.size >= 5 && it[0] == "TCP" && it[1].endsWith(":$port") && it[3] == "LISTENING" }
        ?.last()
        ?.toLongOrNull()

internal fun listenerInSs(output: String): Long? =
    PID_IN_SS
        .find(output)
        ?.groupValues
        ?.get(1)
        ?.toLongOrNull()

internal fun listenerInLsof(output: String): Long? = output.lineSequence().firstNotNullOfOrNull { it.trim().toLongOrNull() }

private fun outputOf(vararg command: String): String? =
    runCatching {
        val process = ProcessBuilder(*command).redirectErrorStream(true).start()
        process.outputStream.close()
        val output = process.inputStream.bufferedReader().readText()
        if (process.waitFor(LOOKUP_SECONDS, TimeUnit.SECONDS)) output else null.also { process.destroyForcibly() }
    }.getOrNull()

internal fun portOwner(
    port: Int,
    osName: String = System.getProperty("os.name"),
): PortOwner? {
    val pid =
        if (osName.startsWith("Windows")) {
            outputOf("netstat", "-ano")?.let { listenerInNetstat(it, port) }
        } else {
            outputOf("lsof", "-nP", "-iTCP:$port", "-sTCP:LISTEN", "-t")?.let(::listenerInLsof)
                ?: outputOf("ss", "-ltnpH", "sport = :$port")?.let(::listenerInSs)
        } ?: return null
    val name =
        ProcessHandle
            .of(pid)
            .flatMap { it.info().command() }
            .map { File(it).name }
            .orElse(null)
    return PortOwner(pid, name)
}

internal fun portInUseMessage(
    port: Int,
    purpose: String,
    setting: String,
    owner: PortOwner?,
): String {
    val holder =
        when {
            owner == null -> "another program"
            owner.name == null -> "the process with PID ${owner.pid}"
            else -> "${owner.name} (PID ${owner.pid})"
        }
    return "Port $port, which $purpose needs, is in use by $holder. svelteDevAll did not start it, so it was left alone. " +
        "Stop it, or use another port with svelte { dev { $setting = ${port + 1} } }."
}
