package snippets.prelude

import io.github.nijasc.ktor.svelte.Page
import io.micrometer.core.instrument.MeterRegistry
import io.micrometer.core.instrument.simple.SimpleMeterRegistry
import kotlinx.serialization.Serializable

@Serializable
data class Problem(
    val message: String,
)

@Serializable
data class Note(
    val id: Int,
    val title: String,
)

@Serializable
data class Todo(
    val title: String,
)

@Serializable
data class Tick(
    val count: Int,
)

@Serializable
data class User(
    val id: String,
    val admin: Boolean,
)

@Serializable
data class UserSession(
    val userId: String,
)

@Serializable
data class Login(
    val email: String,
    val password: String,
)

@Serializable
data class StoredFile(
    val name: String,
    val size: Int,
)

object store {
    fun <T> create(input: T): T = input

    fun page(
        cursor: String?,
        limit: Int,
    ): Page<Note> = Page(emptyList(), cursor)
}

class Users {
    fun find(id: String): User? = null

    fun all(): List<User> = emptyList()

    fun page(
        cursor: String?,
        limit: Int,
    ): Page<User> = Page(emptyList(), cursor)

    fun check(
        email: String,
        password: String,
    ): User? = null
}

val users = Users()

object files {
    fun store(
        name: String,
        bytes: ByteArray,
    ): StoredFile = StoredFile(name, bytes.size)
}

object database {
    fun isReachable(): Boolean = true
}

val todos = listOf(Todo("Write docs"))

val registry: MeterRegistry = SimpleMeterRegistry()

fun env(name: String): String? = System.getenv(name)
