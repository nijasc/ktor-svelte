package io.github.nijasc.ktor.svelte.gradle.tasks

import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.net.InetAddress
import java.net.ServerSocket
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class DevProcessesTest {
    @TempDir
    lateinit var dir: File

    private fun sleeper(): Process {
        val source = dir.resolve("Sleeper.java")
        source.writeText("public class Sleeper { public static void main(String[] a) throws Exception { Thread.sleep(120000); } }")
        val java =
            ProcessHandle
                .current()
                .info()
                .command()
                .get()
        return ProcessBuilder(java, source.path).redirectErrorStream(true).start()
    }

    @Test
    fun `the record survives a round trip and ignores lines it does not understand`() {
        val record = DevProcessRecord(dir.resolve("nested/dev-processes"))
        assertEquals(emptySet(), record.read())
        val processes = setOf(RecordedProcess(41, 1_700_000_000_000), RecordedProcess(42, 1_700_000_000_500, onlyWithParent = 41))
        record.write(processes)
        assertEquals(processes, record.read())
        dir.resolve("nested/dev-processes").appendText("not a pid\n77\n78 x 0\n79 1\n80 1 2 3\n")
        assertEquals(processes, record.read())
        record.clear()
        assertEquals(emptySet(), record.read())
    }

    @Test
    fun `a leftover process is found by its PID and start time, and stopped`() {
        val process = sleeper()
        try {
            val tree = processTree(listOf(process))
            val own = assertNotNull(recordOf(process.toHandle()))
            assertTrue(own in tree)

            assertTrue(process.pid() in stillRunning(tree).map { it.pid() })
            val reusedPid = setOf(own.copy(startedAt = own.startedAt - 60_000))
            assertEquals(emptyList(), stillRunning(reusedPid), "another process that got the same PID later is not ours")
            assertEquals(emptyList(), stillRunning(setOf(RecordedProcess(Long.MAX_VALUE - 7, 1))))
            assertTrue(describe(process.toHandle()).endsWith("(PID ${process.pid()})"))

            stopLeftovers(stillRunning(tree))
            assertTrue(process.waitFor(10, TimeUnit.SECONDS))
            assertEquals(emptyList(), stillRunning(tree))
        } finally {
            process.destroyForcibly()
        }
    }

    @Test
    fun `a helper of the compiler is only stopped together with the process that started it`() {
        val parent = sleeper()
        val helper = sleeper()
        try {
            val parentRecord = assertNotNull(recordOf(parent.toHandle()))
            val helperRecord = assertNotNull(recordOf(helper.toHandle(), onlyWithParent = parent.pid()))

            assertEquals(setOf(parent.pid(), helper.pid()), stillRunning(setOf(parentRecord, helperRecord)).map { it.pid() }.toSet())
            assertEquals(emptyList(), stillRunning(setOf(helperRecord)), "its parent is gone, so it may serve other builds by now")
            val chain = helperRecord.copy(onlyWithParent = Long.MAX_VALUE - 7)
            assertEquals(listOf(parent.pid()), stillRunning(setOf(parentRecord, chain)).map { it.pid() })
        } finally {
            parent.destroyForcibly()
            helper.destroyForcibly()
        }
    }

    @Test
    fun `the compiler's own process is always recorded, its children with their parent`() {
        val process = sleeper()
        try {
            val asCompiler = processTree(holdingPorts = emptyList(), sharingHelpers = listOf(process))
            assertEquals(0, asCompiler.single { it.pid == process.pid() }.onlyWithParent)
            assertTrue(asCompiler.filter { it.pid != process.pid() }.all { it.onlyWithParent != 0L })
            assertTrue(processTree(listOf(process)).all { it.onlyWithParent == 0L })
        } finally {
            process.destroyForcibly()
        }
    }

    @Test
    fun `a port counts as in use while something listens on it`() {
        val server = ServerSocket(0, 1, InetAddress.getByName("127.0.0.1"))
        val port = server.localPort
        try {
            assertTrue(portIsInUse(port))
            val owner = portOwner(port)
            if (owner != null) assertEquals(ProcessHandle.current().pid(), owner.pid)
        } finally {
            server.close()
        }
        assertFalse(portIsInUse(port))
    }

    @Test
    fun `the listener is read from netstat, ss and lsof output`() {
        val netstat =
            """
            Active Connections

              Proto  Local Address          Foreign Address        State           PID
              TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1432
              TCP    127.0.0.1:51730        0.0.0.0:0              LISTENING       9001
              TCP    127.0.0.1:5173         127.0.0.1:60211        ESTABLISHED     7777
              TCP    127.0.0.1:5173         0.0.0.0:0              LISTENING       4242
              TCP    [::1]:8080             [::]:0                 LISTENING       5151
            """.trimIndent()
        assertEquals(4242, listenerInNetstat(netstat, 5173))
        assertEquals(5151, listenerInNetstat(netstat, 8080))
        assertNull(listenerInNetstat(netstat, 517))
        assertNull(listenerInNetstat(netstat, 3000))

        assertEquals(812, listenerInSs("""LISTEN 0 511 127.0.0.1:5173 0.0.0.0:* users:(("node",pid=812,fd=23))"""))
        assertNull(listenerInSs("LISTEN 0 511 127.0.0.1:5173 0.0.0.0:*"))
        assertEquals(812, listenerInLsof("812\n813\n"))
        assertNull(listenerInLsof(""))
    }

    @Test
    fun `the message names the program that holds the port and how to move`() {
        assertEquals(
            "Port 5173, which Vite needs, is in use by node.exe (PID 4242). svelteDevAll did not start it, so it was left alone. " +
                "Stop it, or use another port with svelte { dev { port = 5174 } }.",
            portInUseMessage(5173, "Vite", "port", PortOwner(4242, "node.exe")),
        )
        assertTrue("in use by the process with PID 9. " in portInUseMessage(5005, "the debugger", "debugPort", PortOwner(9, null)))
        assertTrue("in use by another program. " in portInUseMessage(5005, "the debugger", "debugPort", null))
        assertTrue(portInUseMessage(5005, "the debugger", "debugPort", null).endsWith("svelte { dev { debugPort = 5006 } }."))
    }
}
