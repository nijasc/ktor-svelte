package io.github.nijasc.ktor.svelte

import io.github.nijasc.ktor.svelte.internal.typescript.BrandedSchemaInference
import io.ktor.openapi.JsonSchema
import io.ktor.openapi.ReferenceOr
import kotlinx.serialization.Serializable
import kotlin.reflect.typeOf
import kotlin.test.Test
import kotlin.test.assertEquals

@Serializable
data class Ticket(
    @JsonSchema.ReadOnly val id: Long = 0,
    val title: String,
    @JsonSchema.ReadOnly val createdAt: String = "",
)

class ReadOnlyFieldsTest {
    @Test
    fun `JsonSchema ReadOnly marks a field as read-only in the schema the generator reads`() {
        val properties = BrandedSchemaInference.buildSchema(typeOf<Ticket>()).properties.orEmpty()

        fun readOnly(name: String) = (properties.getValue(name) as ReferenceOr.Value<JsonSchema>).value.readOnly
        assertEquals(true, readOnly("id"))
        assertEquals(true, readOnly("createdAt"))
        assertEquals(null, readOnly("title"))
    }
}
