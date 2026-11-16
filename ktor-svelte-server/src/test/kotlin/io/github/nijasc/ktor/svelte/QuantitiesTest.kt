package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.typeScriptTemplate
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.jsonSchema
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.routing
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationException
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonObject
import org.junit.jupiter.api.Assumptions.assumeTrue
import org.junit.jupiter.api.io.TempDir
import java.io.File
import java.math.BigDecimal
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.time.Duration
import kotlin.time.Duration.Companion.minutes

@Serializable
data class Invoice(
    val total: Decimal,
    val discount: Decimal? = null,
    val lines: List<Decimal> = emptyList(),
    val payWithin: Duration,
    val reminderAfter: Duration? = null,
    val title: String,
)

@Serializable
data class WithoutQuantities(
    val title: String,
)

class QuantitiesTest {
    @TempDir
    lateinit var dir: File

    @OptIn(ExperimentalKtorApi::class)
    private fun types(withInvoice: Boolean = true): String {
        var types = ""
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").mkdirs()
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").path
                }
                routing {
                    get("/api/items") { call.respondText("x") }.describe {
                        responses {
                            HttpStatusCode.OK { schema = if (withInvoice) jsonSchema<Invoice>() else jsonSchema<WithoutQuantities>() }
                        }
                    }
                }
            }
            startApplication()
            types = dir.resolve("src/lib/api/types.ts").readText()
        }
        return types
    }

    @Test
    fun `a decimal travels as exact text and comes back as the same number`() {
        val invoice =
            Invoice(BigDecimal("1234567890123456789.10"), null, listOf(BigDecimal("0.1"), BigDecimal("1E+3")), 90.minutes, title = "A")
        val json = Json.encodeToString(Invoice.serializer(), invoice)
        assertContains(json, """"total":"1234567890123456789.10"""")
        assertContains(json, """"lines":["0.1","1000"]""")
        assertContains(json, """"payWithin":"PT1H30M"""")
        assertEquals(BigDecimal("1234567890123456789.10"), Json.decodeFromString(Invoice.serializer(), json).total)
        val broken =
            assertFailsWith<SerializationException> {
                Json.decodeFromString(Invoice.serializer(), """{"total":"twelve","payWithin":"PT1S","title":"A"}""")
            }
        assertContains(broken.message.orEmpty(), "'twelve' is not a decimal number such as 12.50.")
    }

    @Test
    fun `decimals and durations have their own types in the generated client`() {
        val types = types()
        val invoice = types.substringAfter("export interface Invoice {").substringBefore("}")
        assertEquals(
            listOf(
                "total: Decimal;",
                "discount?: Decimal | null;",
                "lines?: Decimal[];",
                "payWithin: IsoDuration;",
                "reminderAfter?: IsoDuration | null;",
                "title: string;",
            ),
            invoice.lines().map { it.trim() }.filter { it.isNotEmpty() },
        )
        assertContains(types, "declare const brand: unique symbol;")
        assertContains(types, "export type Decimal = string & { readonly [brand]: 'Decimal' };")
        assertContains(types, "export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };")
        val empty = types.substringAfter("empty: (): Invoice => ({").substringBefore("}),")
        assertContains(empty, "total: '0' as Decimal,")
        assertContains(empty, "payWithin: 'PT0S' as IsoDuration,")
    }

    @Test
    fun `an API without them does not carry the helpers`() {
        val types = types(withInvoice = false)
        assertFalse("Decimal" in types)
        assertFalse("IsoDuration" in types)
        assertFalse("unique symbol" in types)
    }

    @Test
    fun `the helpers add exactly, compare, format and convert`() {
        val bun =
            System
                .getenv("PATH")
                .orEmpty()
                .split(File.pathSeparator)
                .flatMap { folder -> listOf("bun.exe", "bun").map { File(folder, it) } }
                .firstOrNull { it.isFile }
        assumeTrue(bun != null, "bun is not on PATH")
        dir.resolve("quantities.ts").writeText("declare const brand: unique symbol;\n" + typeScriptTemplate("quantities.ts"))
        val harness = dir.resolve("quantities-harness.ts")
        harness.writeText(checkNotNull(javaClass.getResource("/quantities-harness.ts")).readText())
        val process = ProcessBuilder(bun!!.path, harness.path).directory(dir).redirectErrorStream(true).start()
        val output = process.inputStream.bufferedReader().readText()
        assertEquals(true, process.waitFor(60, TimeUnit.SECONDS), output)
        assertEquals(0, process.exitValue(), output)
        val results = Json.parseToJsonElement(output.lines().last { it.startsWith("{") }).jsonObject

        fun list(name: String) = results.getValue(name).toString()
        assertEquals("""["0.3","1234567890123456789.11","-0.50","10","0.00"]""", list("sums"))
        assertEquals("""["0.25","-1.5","39.96","0.00"]""", list("others"))
        assertEquals("""[-1,1,0,0]""", list("compared"))
        assertEquals("""["12.50","7","-3.25","not a decimal","not a decimal","not a decimal","whole numbers only"]""", list("made"))
        assertEquals("""["1,234.50","1.234,50","12.5"]""", list("formatted"))
        assertEquals("""[5400000,500,-1000,172800000,93784005,0,null]""", list("millis"))
        assertEquals("""["PT1H30M","PT0.5S","-PT1S","PT48H","PT0S","PT1M5S"]""", list("durations"))
        assertEquals("""["PT2H","PT0S"]""", list("durationSums"))
        assertEquals("""["1:30:00","0:00:05","-0:01:01","26:02:03"]""", list("clocks"))
    }
}
