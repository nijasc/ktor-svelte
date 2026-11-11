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
    fun `enums become const objects with a matching type`() {
        val source = types("""{"S":{"type":"string","enum":["A","it's"]}}""")
        assertContains(source, "export const S = {\n    A: 'A',\n    'it\\'s': 'it\\'s',\n} as const;")
        assertContains(source, "export type S = (typeof S)[keyof typeof S];")
    }

    @Test
    fun `string literals escape line breaks and backslashes`() {
        val source = types("""{"S":{"type":"string","enum":["line\nbreak","back\\slash","tab\tand "]}}""")
        assertContains(source, """    'line\nbreak': 'line\nbreak',""")
        assertContains(source, """    'back\\slash': 'back\\slash',""")
        assertContains(source, "    'tab\\u0009and\\u2028': 'tab\\u0009and\\u2028',")
        assertFalse(source.contains("line\nbreak"))
    }

    @Test
    fun `property keys escape backslashes`() {
        val source = types("""{"A":{"type":"object","properties":{"a\\'b":{"type":"string"}}}}""")
        assertContains(source, """    'a\\\'b'?: string;""")
    }

    @Test
    fun `paths are escaped in generated urls`() {
        val source =
            services(
                """{"/api/it's":{"get":{}},"/api/a`b${'$'}c/{id}":{"get":{}}}""",
            )
        assertContains(source, "request<unknown>('GET', '/api/it\\'s',")
        assertContains(source, "request<unknown>('GET', `/api/a\\`b\\\$c/\${encodeURIComponent(id)}`,")
    }

    @Test
    fun `reserved words and module names never become identifiers`() {
        val source =
            services(
                """{"/api/default/{class}":{"get":{}},"/api/request/{options}":{"get":{}},"/api/notes/{body}":{"get":{}}}""",
            )
        assertContains(source, "export const _default = {\n    get: (_class: string | number, options?: RequestOptions)")
        assertContains(source, "`/api/default/\${encodeURIComponent(_class)}`")
        assertContains(source, "export const _request = {\n    get: (_options: string | number, options?: RequestOptions)")
        assertContains(source, "get: (_body: string | number, options?: RequestOptions)")
        assertContains(source, "export const api = { _default, _request, notes };")
    }

    @Test
    fun `type names never start with a digit`() {
        val source = types("""{"2fa-code":{"type":"string"}}""")
        assertContains(source, "export type _2faCode = string;")
    }

    @Test
    fun `single value enums stay literals`() {
        val source = types("""{"A":{"type":"object","properties":{"kind":{"type":"string","enum":["Only"]}}}}""")
        assertContains(source, "kind?: 'Only';")
        assertFalse(source.contains("as const"))
    }

    @Test
    fun `inline enums with the same values share one const`() {
        val schemas =
            """{"Note":{"type":"object","required":["status"],"properties":{"status":{"type":"string","enum":["ACTIVE","ARCHIVED"]}}},
            "Summary":{"type":"object","properties":{"status":{"type":"string","enum":["ARCHIVED","ACTIVE"]},
            "history":{"type":"array","items":{"type":"string","enum":["ACTIVE","ARCHIVED"]}}}}}"""
        val source = types(schemas)
        assertContains(source, "export const Status = {\n    ACTIVE: 'ACTIVE',\n    ARCHIVED: 'ARCHIVED',\n} as const;")
        assertContains(source, "    status: Status;")
        assertContains(source, "    status?: Status;")
        assertContains(source, "    history?: Status[];")
        assertEquals(1, Regex("export const Status ").findAll(source).count())
    }

    @Test
    fun `different enums on the same property name get the owner as prefix`() {
        val schemas =
            """{"Note":{"type":"object","properties":{"status":{"type":"string","enum":["ACTIVE","ARCHIVED"]}}},
            "Job":{"type":"object","properties":{"status":{"type":"string","enum":["QUEUED","DONE"]}}}}"""
        val source = types(schemas)
        assertContains(source, "export const NoteStatus = {")
        assertContains(source, "export const JobStatus = {")
        assertContains(source, "    status?: NoteStatus;")
        assertContains(source, "    status?: JobStatus;")
    }

    @Test
    fun `an inline enum reuses a named enum with the same values`() {
        val schemas =
            """{"Mood":{"type":"string","enum":["GOOD","BAD"]},
            "Note":{"type":"object","properties":{"mood":{"type":"string","enum":["BAD","GOOD"]}}}}"""
        val source = types(schemas)
        assertContains(source, "    mood?: Mood;")
        assertEquals(1, Regex("as const;").findAll(source).count())
    }

    @Test
    fun `nullable enums keep null`() {
        val schemas = """{"Note":{"type":"object","properties":{"mood":{"type":["string","null"],"enum":["GOOD","BAD",null]}}}}"""
        assertContains(types(schemas), "    mood?: Mood | null;")
    }

    @Test
    fun `enum query parameters and enum consts are imported by services`() {
        val result =
            generate(
                paths =
                    """{"/api/notes":{"get":{"parameters":[{"name":"status","in":"query","schema":{"type":"string",
                    "enum":["ACTIVE","ARCHIVED"]}}]}}}""",
            )
        assertContains(result.getValue("services.ts"), "query?: { status?: Status }")
        assertContains(result.getValue("services.ts"), "import type { Status } from './types.js';")
        assertContains(result.getValue("types.ts"), "export const Status = {")
        assertContains(result.getValue("index.ts"), "export * from './types.js';")
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
    fun `the client can share GET requests in flight when asked to`() {
        val client = generate().getValue("client.ts")
        assertContains(client, "    dedupeGets?: boolean;")
        assertContains(client, "apiConfig.dedupeGets === true && method === 'GET' && !options.signal && !options.fetch && !options.headers")
    }

    @Test
    fun `the client pages through cursor endpoints`() {
        val client = generate().getValue("client.ts")
        assertContains(client, "export async function* pages<Q extends { cursor?: string }, T>(")
        assertContains(client, "cursor = page.next ?? undefined;")
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
    fun `declared error responses become a typed map`() {
        val paths =
            """{"/api/notes":{"post":{"responses":{"201":{"description":"ok"},
            "400":{"description":"bad","content":{"application/json":{"schema":{"${'$'}ref":"#/components/schemas/Problem"}}}},
            "404":{"description":"gone","content":{"application/json":{"schema":{"${'$'}ref":"#/components/schemas/Missing"}}}}}}}}"""
        val source =
            generate(paths = paths, schemas = """{"Problem":{"type":"object"},"Missing":{"type":"object"}}""").getValue("services.ts")
        assertContains(source, "'notes.create': Problem | Missing;")
        assertContains(source, "'notes.create': [400, 404],")
        assertContains(source, "operation: 'notes.create'")
        assertContains(source, "import type { Missing, Problem } from './types.js';")
        assertContains(source, "export function isApiError<K extends keyof ApiErrors>")
    }

    @Test
    fun `routes without declared errors stay out of the map`() {
        val source = services("""{"/api/notes":{"get":{"responses":{"200":{"description":"ok"}}}}}""")
        assertContains(source, "export interface ApiErrors {\n}")
    }

    @Test
    fun `event stream responses become async generators`() {
        val paths =
            """{"/api/ticks":{"get":{"responses":{"200":{"description":"ok","content":{"text/event-stream":
            {"schema":{"${'$'}ref":"#/components/schemas/Tick"}}}}}}},
            "/api/notes":{"get":{"responses":{"200":{"description":"ok"}}}}}"""
        val result = generate(paths = paths, schemas = """{"Tick":{"type":"object"}}""")
        val services = result.getValue("services.ts")
        assertContains(services, "import { ApiError, request, stream, type RequestOptions } from './client.js';")
        assertContains(services, "stream<Tick>('GET', '/api/ticks'")
        assertContains(services, "request<void>('GET', '/api/notes'")
        assertContains(result.getValue("client.ts"), "export async function* stream<T>")
    }

    @Test
    fun `the client import skips stream without event streams`() {
        assertContains(services("""{"/api/notes":{"get":{}}}"""), "import { ApiError, request, type RequestOptions } from './client.js';")
    }

    @Test
    fun `the icon enum becomes one named type`() {
        val result =
            TypeScriptGenerator(listOf("/api"), iconNames = listOf("House", "Plus")).generate(
                """{"paths":{},"components":{"schemas":{"Note":{"type":"object","required":["icon"],
                "properties":{"icon":{"type":"string","enum":["Plus","House"]},"mood":{"type":"string","enum":["Good"]}}}}}}""",
            )
        val types = result.getValue("types.ts")
        assertContains(types, "import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';")
        assertContains(types, "icon: LucideIcon;")
        assertContains(types, "mood?: 'Good';")
    }

    @Test
    fun `output is deterministic`() {
        val paths = """{"/api/b":{"get":{}},"/api/a":{"get":{}}}"""
        assertEquals(generate(paths = paths), generate(paths = paths))
        assertContains(generate(paths = paths).getValue("services.ts"), "export const api = { a, b };")
    }

    @Test
    fun `objects get an empty factory with zero values`() {
        val source =
            types(
                """{"A":{"type":"object","required":["s"],"properties":{
                "s":{"type":"string"},"i":{"type":"integer"},"f":{"type":"number"},"b":{"type":"boolean"},
                "n":{"type":["string","null"]},"l":{"type":"array","items":{"type":"string"}},
                "m":{"type":"object","additionalProperties":{"type":"integer"}},
                "e":{"type":"string","enum":["X","Y"]}}}}""",
            )
        assertContains(
            source,
            """
            export const A = {
                empty: (): A => ({
                    s: '',
                    i: 0,
                    f: 0,
                    b: false,
                    n: null,
                    l: [],
                    m: {},
                    e: 'X',
                }),
            };
            """.trimIndent(),
        )
    }

    @Test
    fun `empty factories nest through references and inline objects`() {
        val source =
            types(
                """{"A":{"type":"object","properties":{"b":{"${'$'}ref":"#/components/schemas/B"},
                "c":{"oneOf":[{"${'$'}ref":"#/components/schemas/B"},{"type":"null"}]},
                "d":{"type":"object","properties":{"x":{"type":"integer"}}}}},
                "B":{"type":"object","properties":{"y":{"type":"string"}}}}""",
            )
        assertContains(source, "        b: B.empty(),")
        assertContains(source, "        c: null,")
        assertContains(source, "        d: {\n            x: 0,\n        },")
        assertContains(source, "export const B = {\n    empty: (): B => ({\n        y: '',\n    }),\n};")
    }

    @Test
    fun `nullable references and openapi 3_0 nullable become null`() {
        val source =
            types(
                """{"A":{"type":"object","properties":{"x":{"type":"string","nullable":true},
                "y":{"anyOf":[{"type":"integer"},{"type":"null"}]}}}}""",
            )
        assertContains(source, "        x: null,")
        assertContains(source, "        y: null,")
    }

    @Test
    fun `index exports type values so empty factories are importable`() {
        assertContains(generate().getValue("index.ts"), "export * from './types.js';")
    }

    @Test
    fun `schema bounds become input attributes`() {
        val source =
            types(
                """{"A":{"type":"object","properties":{
                "name":{"type":"string","minLength":2,"maxLength":80,"pattern":"^[a-z]+$"},
                "age":{"type":"integer","minimum":0,"exclusiveMaximum":130},
                "price":{"type":"number","exclusiveMinimum":0,"maximum":9.5},
                "free":{"type":"string"}}}}""",
            )
        assertContains(
            source,
            "    bounds: {\n" +
                "        name: { required: true, minlength: 2, maxlength: 80, pattern: '^[a-z]+$' },\n" +
                "        age: { min: 0, max: 129 },\n" +
                "        price: { max: 9.5 },\n" +
                "    },\n",
        )
    }

    @Test
    fun `objects without bounds get no bounds entry`() {
        assertFalse(types("""{"A":{"type":"object","properties":{"x":{"type":"string"}}}}""").contains("bounds"))
    }

    @Test
    fun `date formats become branded types with helpers`() {
        val source =
            types(
                """{"A":{"type":"object","required":["day"],"properties":{
                "day":{"type":"string","format":"date"},"at":{"type":"string","format":"time"},
                "created":{"type":"string","format":"date-time"},"due":{"type":["string","null"],"format":"date"}}}}""",
            )
        assertContains(source, "export type IsoDate = string & { readonly [iso]: 'date' };")
        assertContains(source, "export const IsoDateTime = {")
        assertContains(source, "    day: IsoDate;")
        assertContains(source, "    at?: IsoTime;")
        assertContains(source, "    created?: IsoDateTime;")
        assertContains(source, "    due?: IsoDate | null;")
        assertContains(source, "        day: '' as IsoDate,")
        assertContains(source, "        due: null,")
    }

    @Test
    fun `date helpers are left out when no date is used`() {
        assertFalse(types("""{"A":{"type":"object","properties":{"x":{"type":"string"}}}}""").contains("IsoDate"))
    }

    @Test
    fun `services import date types used by parameters`() {
        val source =
            services(
                """{"/api/days":{"get":{"parameters":[{"name":"from","in":"query","schema":{"type":"string","format":"date"}}]}}}""",
            )
        assertContains(source, "import type { IsoDate } from './types.js';")
        assertContains(source, "from?: IsoDate")
    }

    @Test
    fun `required never makes the browser stricter than the server`() {
        val source =
            types(
                """{"A":{"type":"object","required":["count","price","flag","list","kind","nullableCount","name"],"properties":{
                "count":{"type":"integer"},
                "price":{"type":"number"},
                "optionalCount":{"type":"integer"},
                "nullableCount":{"type":["integer","null"]},
                "title":{"type":"string","minLength":1},
                "empty":{"type":"string","minLength":0},
                "nullableTitle":{"type":["string","null"],"minLength":1},
                "name":{"type":"string"},
                "flag":{"type":"boolean"},
                "list":{"type":"array","items":{"type":"string"}},
                "kind":{"type":"string","enum":["X","Y"]}}}}""",
            )
        assertContains(
            source,
            "    bounds: {\n" +
                "        count: { required: true },\n" +
                "        price: { required: true },\n" +
                "        title: { required: true, minlength: 1 },\n" +
                "        empty: { minlength: 0 },\n" +
                "        nullableTitle: { minlength: 1 },\n" +
                "    },\n",
        )
    }

    @Test
    fun `validate mirrors the server rules and messages`() {
        val source =
            types(
                """{"A":{"type":"object","required":["count","name"],"properties":{
                "name":{"type":"string","minLength":1,"maxLength":80,"pattern":"^[a-z]+$"},
                "count":{"type":"integer","minimum":0,"exclusiveMaximum":10},
                "price":{"type":["number","null"],"exclusiveMinimum":0,"maximum":9.5},
                "code":{"type":"string","minLength":3}}}}""",
            )
        assertContains(
            source,
            """
                validate: (value: A): Record<string, string[]> => {
                    const errors: Record<string, string[]> = {};
                    if (typeof value.name === 'string') {
                        const length = [...value.name].length;
                        if (length < 1) addError(errors, 'name', 'Must be at least 1 character.');
                        if (length > 80) addError(errors, 'name', 'Must be at most 80 characters.');
                        if (!matches('^[a-z]+$', value.name)) addError(errors, 'name', 'Must match ^[a-z]+$.');
                    }
                    if (typeof value.count !== 'number' || Number.isNaN(value.count)) addError(errors, 'count', 'Required.');
                    if (typeof value.count === 'number') {
                        if (value.count < 0) addError(errors, 'count', 'Must be at least 0.');
                        if (value.count >= 10) addError(errors, 'count', 'Must be less than 10.');
                    }
                    if (typeof value.price === 'number') {
                        if (value.price <= 0) addError(errors, 'price', 'Must be greater than 0.');
                        if (value.price > 9.5) addError(errors, 'price', 'Must be at most 9.5.');
                    }
                    if (typeof value.code === 'string') {
                        const length = [...value.code].length;
                        if (length < 3) addError(errors, 'code', 'Must be at least 3 characters.');
                    }
                    return errors;
                },
            };
            """.trimIndent(),
        )
        assertContains(source, "function addError(")
        assertContains(source, "function matches(pattern: string, text: string): boolean {")
        assertFalse(source.contains("function addNested("))
    }

    @Test
    fun `validate recurses into references and lists with server paths`() {
        val source =
            types(
                """{"Order":{"type":"object","properties":{
                "address":{"${'$'}ref":"#/components/schemas/Address"},
                "billing":{"oneOf":[{"${'$'}ref":"#/components/schemas/Address"},{"type":"null"}]},
                "lines":{"type":"array","items":{"${'$'}ref":"#/components/schemas/Line"}},
                "grid":{"type":"array","items":{"type":"array","items":{"${'$'}ref":"#/components/schemas/Line"}}},
                "tags":{"type":"array","items":{"type":"string"}}}},
                "Address":{"type":"object","properties":{"street":{"type":"string","maxLength":5}}},
                "Line":{"type":"object","properties":{"sku":{"type":"string","pattern":"^[a-z]+$"}}}}""",
            )
        assertContains(
            source,
            "        if (value.address != null) addNested(errors, `address.`, Address.validate(value.address));\n" +
                "        if (value.billing != null) addNested(errors, `billing.`, Address.validate(value.billing));\n" +
                "        if (Array.isArray(value.lines)) {\n" +
                "            value.lines.forEach((item, index) => {\n" +
                "                if (item != null) addNested(errors, `lines[\${index}].`, Line.validate(item));\n" +
                "            });\n" +
                "        }\n" +
                "        if (Array.isArray(value.grid)) {\n" +
                "            value.grid.forEach((item, index) => {\n" +
                "                if (Array.isArray(item)) {\n" +
                "                    item.forEach((item2, index2) => {\n" +
                "                        if (item2 != null) addNested(errors, `grid[\${index}][\${index2}].`, Line.validate(item2));\n" +
                "                    });\n" +
                "                }\n" +
                "            });\n" +
                "        }\n" +
                "        return errors;\n",
        )
        assertFalse(source.contains("value.tags"))
    }

    @Test
    fun `unconstrained objects get no validate`() {
        val source =
            types(
                """{"A":{"type":"object","required":["id"],"properties":{"id":{"type":"integer"},
                "self":{"${'$'}ref":"#/components/schemas/A"},"b":{"${'$'}ref":"#/components/schemas/B"}}},
                "B":{"type":"object","properties":{"x":{"type":"string"}}}}""",
            )
        assertContains(source, "        id: { required: true },\n")
        assertFalse(source.contains("validate"))
        assertFalse(source.contains("function "))
    }

    @Test
    fun `recursive types validate through themselves`() {
        val source =
            types(
                """{"Tree":{"type":"object","properties":{"name":{"type":"string","maxLength":3},
                "children":{"type":"array","items":{"${'$'}ref":"#/components/schemas/Tree"}}}}}""",
            )
        assertContains(source, "addNested(errors, `children[\${index}].`, Tree.validate(item));")
    }
}
