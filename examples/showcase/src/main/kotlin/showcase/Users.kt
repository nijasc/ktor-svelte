package showcase

import org.jetbrains.exposed.v1.core.ResultRow
import org.jetbrains.exposed.v1.core.eq
import org.jetbrains.exposed.v1.core.inList
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.update
import java.security.MessageDigest
import java.security.SecureRandom
import java.util.Base64
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.PBEKeySpec
import kotlin.time.Clock
import kotlin.time.Instant

private const val HASH_ITERATIONS = 210_000
private const val HASH_BITS = 256
private const val SALT_BYTES = 16

object Passwords {
    private val random = SecureRandom()
    private val decoy = hash("a password nobody has")

    fun hash(password: String): String {
        val salt = ByteArray(SALT_BYTES).also(random::nextBytes)
        val encoder = Base64.getEncoder()
        return "pbkdf2:$HASH_ITERATIONS:${encoder.encodeToString(salt)}:${encoder.encodeToString(derive(password, salt, HASH_ITERATIONS))}"
    }

    fun matches(
        password: String,
        stored: String?,
    ): Boolean {
        val parts = (stored ?: decoy).split(':')
        if (parts.size != 4 || parts[0] != "pbkdf2") return false
        val iterations = parts[1].toIntOrNull() ?: return false
        val decoder = Base64.getDecoder()
        val expected = decoder.decode(parts[3])
        val actual = derive(password, decoder.decode(parts[2]), iterations)
        return MessageDigest.isEqual(expected, actual) && stored != null
    }

    private fun derive(
        password: String,
        salt: ByteArray,
        iterations: Int,
    ): ByteArray =
        SecretKeyFactory
            .getInstance("PBKDF2WithHmacSHA256")
            .generateSecret(PBEKeySpec(password.toCharArray(), salt, iterations, HASH_BITS))
            .encoded
}

class UserStore {
    suspend fun find(id: Int): User? = query { Users.selectAll().where { Users.id eq id }.singleOrNull()?.toUser() }

    suspend fun findActive(id: Int): User? = find(id)?.takeIf { it.active }

    suspend fun all(): List<User> = query { Users.selectAll().orderBy(Users.id).map { it.toUser() } }

    suspend fun count(): Long = query { Users.selectAll().count() }

    suspend fun check(
        email: String,
        password: String,
    ): User? {
        val row = query { Users.selectAll().where { Users.email eq normalize(email) }.singleOrNull() }
        val matches = Passwords.matches(password, row?.get(Users.passwordHash))
        return row?.toUser()?.takeIf { matches && it.active }
    }

    suspend fun create(
        email: String,
        name: String,
        password: String,
        role: Role,
    ): User? {
        val hash = Passwords.hash(password)
        val address = normalize(email)
        return query {
            if (Users.selectAll().where { Users.email eq address }.any()) return@query null
            val id =
                Users.insert {
                    it[Users.email] = address
                    it[Users.name] = name.trim()
                    it[passwordHash] = hash
                    it[Users.role] = role.name
                    it[active] = true
                    it[createdAt] = Clock.System.now().toEpochMilliseconds()
                } get Users.id
            Users.selectAll().where { Users.id eq id }.single().toUser()
        }
    }

    suspend fun rename(
        id: Int,
        name: String,
    ): User? {
        query { Users.update({ Users.id eq id }) { it[Users.name] = name.trim() } }
        return find(id)
    }

    suspend fun changePassword(
        id: Int,
        current: String,
        next: String,
    ): Boolean {
        val stored = query { Users.selectAll().where { Users.id eq id }.singleOrNull()?.get(Users.passwordHash) }
        if (!Passwords.matches(current, stored)) return false
        val hash = Passwords.hash(next)
        query { Users.update({ Users.id eq id }) { it[passwordHash] = hash } }
        return true
    }

    suspend fun setRole(
        id: Int,
        role: Role,
    ): User? {
        query { Users.update({ Users.id eq id }) { it[Users.role] = role.name } }
        return find(id)
    }

    suspend fun setActive(
        id: Int,
        active: Boolean,
    ): User? {
        query { Users.update({ Users.id eq id }) { it[Users.active] = active } }
        return find(id)
    }

    suspend fun admins(): Int = query { Users.selectAll().where { Users.role eq Role.ADMIN.name }.count { it[Users.active] } }

    fun refs(ids: Collection<Int>): Map<Int, UserRef> =
        if (ids.isEmpty()) {
            emptyMap()
        } else {
            Users.selectAll().where { Users.id inList ids.toSet() }.associate { it[Users.id] to UserRef(it[Users.id], it[Users.name]) }
        }

    private fun normalize(email: String): String = email.trim().lowercase()

    private fun ResultRow.toUser(): User =
        User(
            id = this[Users.id],
            email = this[Users.email],
            name = this[Users.name],
            role = Role.valueOf(this[Users.role]),
            active = this[Users.active],
            createdAt = Instant.fromEpochMilliseconds(this[Users.createdAt]),
        )
}
