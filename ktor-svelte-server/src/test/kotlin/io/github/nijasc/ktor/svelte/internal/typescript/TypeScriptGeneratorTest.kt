package io.github.nijasc.ktor.svelte.internal.typescript

import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class TypeScriptGeneratorTest {
    private fun generate(
        paths: String = "{}",
        schemas: String = "{}",
        prefixes: List<String> = listOf("/api"),
    ) = TypeScriptGenerator(prefixes).generate(
        """{"openapi":"3.1.1","info":{"title":"t","version":"1"},"paths":$paths,"components":{"schemas":$schemas}}""",
    )

    private fun types(schemas: String) = generate(schemas = schemas).getValue("types.ts")

    private fun services(paths: String) = generate(paths = paths).getValue("services.ts")

    @Test
    fun `required and optional properties`() {
        val source = types("""{"A":{"type":"object","required":["x"],"properties":{"x":{"type":"string"},"y":{"type":"integer"}}}}""")
        assertContains(source, "export interface A {")
        assertContains(source, "    x: string;")
        assertContains(source, "    y?: number;")
    }

    @Test
    fun `nullable type arrays become unions`() {
        val source = types("""{"A":{"type":"object","required":["x"],"properties":{"x":{"type":["string","null"]}}}}""")
        assertContains(source, "x: string | null;")
    }

    @Test
    fun `enums become literal unions`() {
        assertContains(types("""{"S":{"type":"string","enum":["A","it's"]}}"""), "export type S = 'A' | 'it\\'s';")
    }

    @Test
    fun `sealed types become unions of references`() {
        val source = types("""{"U":{"oneOf":[{"${'$'}ref":"#/components/schemas/A"},{"${'$'}ref":"#/components/schemas/B"}]}}""")
        assertContains(source, "export type U = A | B;")
    }

    @Test
    fun `arrays of unions get parentheses`() {
        val source = types("""{"L":{"type":"array","items":{"oneOf":[{"type":"string"},{"type":"integer"}]}}}""")
        assertContains(source, "export type L = (string | number)[];")
    }

    @Test
    fun `maps become records`() {
        val source = types("""{"M":{"type":"object","additionalProperties":{"type":"integer"}}}""")
        assertContains(source, "export type M = Record<string, number>;")
    }

    @Test
    fun `generic component names are sanitized`() {
        val paths =
            """{"/api/pages":{"get":{"responses":{"200":{"description":"ok","content":{"application/json":{"schema":
            {"${'$'}ref":"#/components/schemas/Page<Note>"}}}}}}}}"""
        val result =
            generate(
                paths = paths,
                schemas = """{"Page<Note>":{"type":"object","properties":{"total":{"type":"integer"}}}}""",
            )
        assertContains(result.getValue("types.ts"), "export interface PageNote {")
        assertContains(result.getValue("services.ts"), "request<PageNote>")
        assertContains(result.getValue("services.ts"), "import type { PageNote } from './types.js';")
    }

    @Test
    fun `non identifier property names are quoted`() {
        assertContains(types("""{"A":{"type":"object","properties":{"content-type":{"type":"string"}}}}"""), "'content-type'?: string;")
    }

    @Test
    fun `undescribed routes still get a service with unknown result`() {
        val source = services("""{"/api/users/{userId}/posts/{postId}":{"get":{}}}""")
        assertContains(source, "export const users = {")
        assertContains(source, "userId: string | number, postId: string | number")
        assertContains(source, "encodeURIComponent(userId)")
        assertContains(source, "encodeURIComponent(postId)")
        assertContains(source, "request<unknown>")
    }

    @Test
    fun `sub resources are named from their path`() {
        val source =
            services(
                """{"/api/notes/{id}/archive":{"post":{"responses":{"204":{"description":"ok"}}}},
                "/api/notes/export":{"get":{"responses":{"200":{"description":"ok","content":{"application/xml":{}}}}}}}""",
            )
        assertContains(source, "archive: (id: string | number")
        assertContains(source, "request<void>")
        assertContains(source, "getExport: (options?: RequestOptions) => request<string>")
    }

    @Test
    fun `operation id wins over the conventional name`() {
        assertContains(services("""{"/api/notes":{"get":{"operationId":"search-notes"}}}"""), "searchNotes: (")
    }

    @Test
    fun `name collisions stay unique`() {
        val source = services("""{"/api/a/{x}":{"get":{}},"/api/a/{y}":{"get":{}}}""")
        assertContains(source, "get: (x:")
        assertContains(source, "getY: (y:")
    }

    @Test
    fun `required query parameters make the query argument required`() {
        val source =
            services(
                """{"/api/s":{"get":{"parameters":[{"name":"q","in":"query","required":true,"schema":{"type":"string"}},
                {"name":"page","in":"query","schema":{"type":"integer"}}]}}}""",
            )
        assertContains(source, "query: { q: string; page?: number }")
    }

    @Test
    fun `routes outside api prefixes are left out`() {
        val result = generate(paths = """{"/health":{"get":{}},"/api/ok":{"get":{}}}""")
        assertFalse(result.getValue("services.ts").contains("health"))
        assertFalse(result.getValue("openapi.json").contains("/health"))
    }

    @Test
    fun `empty api still produces valid modules`() {
        val result = generate()
        assertEquals("export {};\n", result.getValue("types.ts"))
        assertContains(result.getValue("services.ts"), "export const api = {  };")
    }

    @Test
    fun `output is deterministic`() {
        val paths = """{"/api/b":{"get":{}},"/api/a":{"get":{}}}"""
        assertEquals(generate(paths = paths), generate(paths = paths))
        assertContains(generate(paths = paths).getValue("services.ts"), "export const api = { a, b };")
    }
}
