package io.github.nijasc.ktor.svelte.internal

import io.github.nijasc.ktor.svelte.Validated
import io.github.nijasc.ktor.svelte.ValidationException
import io.github.nijasc.ktor.svelte.Validator
import io.github.nijasc.ktor.svelte.internal.validation.SchemaConstraints
import io.ktor.openapi.JsonSchema
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@Serializable
sealed interface Pet : Validated

@Serializable
data class Dog(
    val name: String,
) : Pet {
    override fun Validator.rules() {
        check(::name, name.isNotBlank()) { "Name the dog." }
    }
}

@Serializable
enum class Size { S, M }

@Serializable
data class Owner(
    val pet: Pet,
    val nickname: Pet? = null,
    val bySize: Map<Size, Tag> = emptyMap(),
    val byNumber: Map<Int, Tag> = emptyMap(),
    val nested: List<List<Tag>> = emptyList(),
)

@Serializable
data class Tag(
    @JsonSchema.MinLength(1)
    val text: String,
)

class SchemaConstraintsTest {
    private val constraints = SchemaConstraints()

    private fun failures(value: Any): Map<String, List<String>> =
        assertFailsWith<ValidationException> { constraints.requireValid(value) }.fields

    @Test
    fun `rules of a sealed or nullable value run once`() {
        assertEquals(
            mapOf("pet.name" to listOf("Name the dog."), "nickname.name" to listOf("Name the dog.")),
            failures(Owner(Dog(" "), nickname = Dog(""))),
        )
    }

    @Test
    fun `enum and number map keys name the path`() {
        assertEquals(
            mapOf(
                "bySize[M].text" to listOf("Must be at least 1 character."),
                "byNumber[7].text" to listOf("Must be at least 1 character."),
            ),
            failures(Owner(Dog("a"), bySize = mapOf(Size.M to Tag("")), byNumber = mapOf(7 to Tag("")))),
        )
    }

    @Test
    fun `lists of lists keep both indexes`() {
        assertEquals(
            mapOf("nested[1][0].text" to listOf("Must be at least 1 character.")),
            failures(Owner(Dog("a"), nested = listOf(listOf(Tag("a")), listOf(Tag(""))))),
        )
    }

    @Test
    fun `values without a serializer are left alone`() {
        constraints.requireValid(StringBuilder("x"))
        constraints.requireValid(listOf(1, null, "a"))
        constraints.requireValid(byteArrayOf(1, 2))
    }
}
