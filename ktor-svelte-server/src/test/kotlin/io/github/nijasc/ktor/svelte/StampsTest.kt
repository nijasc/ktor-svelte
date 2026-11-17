package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.ReferenceOr
import kotlinx.serialization.json.Json
import kotlin.reflect.typeOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.time.Instant

class StampsTest {
    private val monday = Instant.parse("2026-11-16T09:00:00Z")
    private val tuesday = Instant.parse("2026-11-17T10:30:00Z")

    @Test
    fun `new stamps say who made the record and when, and a change only moves the update`() {
        val made = Stamps.created(by = "ada", at = monday)
        assertEquals(Stamps(monday, monday, "ada", "ada"), made)
        val changed = made.touched(by = "grace", at = tuesday)
        assertEquals(Stamps(monday, tuesday, "ada", "grace"), changed)
        assertEquals(Stamps(monday, tuesday, "ada", null), made.touched(at = tuesday))
    }

    @Test
    fun `stamps travel as ISO times and the generated client sees date-times`() {
        assertEquals(
            """{"createdAt":"2026-11-16T09:00:00Z","updatedAt":"2026-11-17T10:30:00Z","createdBy":"ada"}""",
            Json.encodeToString(Stamps(monday, tuesday, "ada")),
        )
        val properties = BrandedSchemaInference.buildSchema(typeOf<Stamps>()).properties.orEmpty()

        fun format(name: String) = (properties.getValue(name) as ReferenceOr.Value<JsonSchema>).value.format
        assertEquals("date-time", format("createdAt"))
        assertEquals("date-time", format("updatedAt"))
    }
}
