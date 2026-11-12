package showcase

import io.github.nijasc.ktorsvelte.LucideIcon
import org.slf4j.Logger
import java.security.SecureRandom
import java.util.Base64

private const val GENERATED_PASSWORD_BYTES = 12
const val DEMO_ADMIN_EMAIL = "ada@example.com"
const val DEMO_MEMBER_EMAIL = "grace@example.com"

suspend fun seedDemoData(
    users: UserStore,
    tasks: TaskStore,
    log: Logger,
) {
    if (users.count() > 0) return
    val ada = users.create(DEMO_ADMIN_EMAIL, "Ada Lovelace", demoPassword("SHOWCASE_ADMIN_PASSWORD", DEMO_ADMIN_EMAIL, log), Role.ADMIN)
    val grace = users.create(DEMO_MEMBER_EMAIL, "Grace Hopper", demoPassword("SHOWCASE_MEMBER_PASSWORD", DEMO_MEMBER_EMAIL, log), Role.MEMBER)
    if (ada == null || grace == null) return

    val welcome =
        tasks.create(
            TaskInput(
                title = "Welcome to the showcase",
                description = "Every task, comment and file on this board went through a generated TypeScript client and lives in an embedded database.",
                priority = Priority.HIGH,
                labels = listOf("intro"),
                icon = LucideIcon.Rocket,
                assigneeId = grace.id,
            ),
            ada,
        )
    tasks.comment(welcome.id, grace, "Looks good. I will try the upload next.")
    tasks.create(
        TaskInput(
            title = "Try hot reload",
            description = "Run svelteDevAll, change a Svelte file or a Kotlin route, and watch the page update.",
            labels = listOf("intro", "dev"),
            icon = LucideIcon.Flame,
            assigneeId = ada.id,
        ),
        ada,
    )
    val shipped =
        tasks.create(
            TaskInput(
                title = "Ship one JAR",
                description = "The frontend, the API and the database driver are all in a single file.",
                priority = Priority.LOW,
                labels = listOf("deploy"),
                icon = LucideIcon.Package,
            ),
            grace,
        )
    tasks.move(shipped.id, TaskStatus.DONE)
    val names = listOf("Write the changelog", "Review the security headers", "Translate the new pages", "Tune the rate limit")
    names.forEachIndexed { index, title ->
        val task =
            tasks.create(
                TaskInput(
                    title = title,
                    labels = listOf(if (index % 2 == 0) "docs" else "ops"),
                    icon = LucideIcon.SquareCheck,
                    assigneeId = if (index % 2 == 0) ada.id else grace.id,
                    dueOn = "2026-12-${10 + index}",
                ),
                if (index % 2 == 0) grace else ada,
            )
        if (index == 1) tasks.move(task.id, TaskStatus.DOING)
    }
}

private fun demoPassword(
    variable: String,
    email: String,
    log: Logger,
): String {
    System.getenv(variable)?.takeIf { it.length >= MIN_PASSWORD_LENGTH }?.let { return it }
    val bytes = ByteArray(GENERATED_PASSWORD_BYTES).also(SecureRandom()::nextBytes)
    val generated = Base64.getUrlEncoder().withoutPadding().encodeToString(bytes)
    log.warn("{} is not set. Created the demo user {} with the password {}", variable, email, generated)
    return generated
}
