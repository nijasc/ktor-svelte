package io.github.nijasc.ktor.svelte

import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals

class PageTest {
    @Test
    fun `a page serializes its items and the next cursor`() {
        assertEquals("""{"items":[1,2],"next":"2"}""", Json.encodeToString(Page(listOf(1, 2), "2")))
        assertEquals(Page(listOf("a")), Json.decodeFromString<Page<String>>("""{"items":["a"]}"""))
    }
}
