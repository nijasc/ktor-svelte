package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.ktor.http.HttpStatusCode
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.jsonSchema
import io.ktor.server.application.install
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.openapi.describe
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import io.ktor.utils.io.ExperimentalKtorApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path
import kotlin.io.path.createDirectories
import kotlin.io.path.readText
import kotlin.io.path.writeText
import kotlin.reflect.typeOf
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

@JvmInline
@Serializable
value class BrandedNoteId(
    val value: Long,
)

@JvmInline
@Serializable
value class BrandedSlug(
    val value: String,
)

@JvmInline
@Serializable
value class BrandedFlag(
    val value: Boolean,
)

@JvmInline
@Serializable
value class BrandedTags(
    val value: List<String>,
)

@Serializable
data class BrandedRef(
    val id: BrandedNoteId,
)

@Serializable
data class BrandedNote(
    val id: BrandedNoteId,
    val parent: BrandedNoteId? = null,
    val slug: BrandedSlug,
    val related: List<BrandedNoteId> = emptyList(),
    val byId: Map<String, BrandedNoteId> = emptyMap(),
    val ref: BrandedRef? = null,
    val done: BrandedFlag = BrandedFlag(false),
    val tags: BrandedTags = BrandedTags(emptyList()),
    val title: String,
)

@Serializable
data class PlainNote(
    val id: Long,
    val title: String,
)

class BrandedIdsTest {
    @TempDir
    lateinit var dir: Path

    @OptIn(ExperimentalKtorApi::class)
    private fun generated(block: suspend ApplicationTestBuilder.(types: String) -> Unit) =
        testApplication {
            dir.resolve("package.json").writeText("{}")
            dir.resolve("src/lib").createDirectories()
            val build = fixtureBuild()
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(build)
                    dev { mode = DevMode.Never }
                    generateTs = true
                    generateTsOutput = dir.resolve("src/lib/api").toString()
                }
                routing {
                    get("/api/notes") { call.respondText("x") }.describe {
                        responses { HttpStatusCode.OK { schema = jsonSchema<BrandedNote>() } }
                    }
                    get("/api/plain") { call.respondText("x") }.describe {
                        responses { HttpStatusCode.OK { schema = jsonSchema<PlainNote>() } }
                    }
                }
            }
            startApplication()
            block(dir.resolve("src/lib/api/types.ts").readText())
        }

    @Test
    fun `a value class over a number or text becomes its own type with a function to make one`() =
        generated { types ->
            assertContains(types, "declare const brand: unique symbol;\n")
            assertContains(
                types,
                "export type BrandedNoteId = number & { readonly [brand]: 'BrandedNoteId' };\n\n" +
                    "export const BrandedNoteId = (value: number): BrandedNoteId => value as BrandedNoteId;\n",
            )
            assertContains(types, "export type BrandedSlug = string & { readonly [brand]: 'BrandedSlug' };")
            assertFalse("BrandedNoteId2" in types)
        }

    @Test
    fun `it is used wherever the value class is, also when optional, in a list or in a map`() =
        generated { types ->
            val note = types.substringAfter("export interface BrandedNote {").substringBefore("}")
            assertEquals(
                listOf(
                    "id: BrandedNoteId;",
                    "parent?: BrandedNoteId | null;",
                    "slug: BrandedSlug;",
                    "related?: BrandedNoteId[];",
                    "byId?: Record<string, BrandedNoteId>;",
                    "ref?: BrandedRef | null;",
                    "done?: boolean;",
                    "tags?: string[];",
                    "title: string;",
                ),
                note.lines().map { it.trim() }.filter { it.isNotEmpty() },
            )
            assertContains(types.substringAfter("export interface BrandedRef {").substringBefore("}"), "id: BrandedNoteId;")
        }

    @Test
    fun `the empty value of a class makes its ids with their own function`() =
        generated { types ->
            val empty = types.substringAfter("empty: (): BrandedNote => ({").substringBefore("}),")
            assertContains(empty, "id: BrandedNoteId(0),")
            assertContains(empty, "parent: null,")
            assertContains(empty, "slug: BrandedSlug(''),")
        }

    @Test
    fun `classes without value classes are generated as before`() =
        generated { types ->
            assertContains(types, "export interface PlainNote {\n    id: number;\n    title: string;\n}")
        }

    @Test
    fun `only a value class that is one plain number or text is given a name`() {
        fun schema(type: kotlin.reflect.KType) = Json.encodeToString(JsonSchema.serializer(), BrandedSchemaInference.buildSchema(type))
        assertEquals("""{"type":"integer","title":"io.github.nijasc.ktor.svelte.BrandedNoteId"}""", schema(typeOf<BrandedNoteId>()))
        assertEquals("""{"type":"boolean"}""", schema(typeOf<BrandedFlag>()))
        assertEquals("""{"type":"array","items":{"type":"string"}}""", schema(typeOf<BrandedTags>()))
        assertEquals("""{"type":"integer"}""", schema(typeOf<Long>()))
    }
}
