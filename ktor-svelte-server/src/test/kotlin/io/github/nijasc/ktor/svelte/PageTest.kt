package io.github.nijasc.ktor.svelte

import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals

class PageTest {
    @Test
    fun `a page serializes its items and the next cursor`() {
        assertEquals("""{"items":[1,2],"next":"2"}""", Json.encodeToString(Page(listOf(1, 2), "2")))
        assertEquals(Page(listOf("a")), Json.decodeFromString<Page<String>>("""{"items":["a"]}"""))
        assertEquals("""{"items":[1],"total":40}""", Json.encodeToString(Page(listOf(1), total = 40L)))
        assertEquals(Page(listOf("a"), null, 3L), Json.decodeFromString<Page<String>>("""{"items":["a"],"total":3}"""))
        assertEquals(null, PageRequest("c", 10).total { error("not asked") })
        assertEquals(7L, PageRequest("c", 10, wantsTotal = true).total { 7L })
    }
}
