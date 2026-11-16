package io.github.nijasc.ktor.svelte.internal.dev

import org.jetbrains.exposed.v1.core.Transaction
import org.jetbrains.exposed.v1.core.statements.GlobalStatementInterceptor
import org.jetbrains.exposed.v1.core.statements.StatementContext
import org.jetbrains.exposed.v1.core.statements.api.PreparedStatementApi

public class ExposedSqlCounter : GlobalStatementInterceptor {
    private val startedAt = ThreadLocal<Long>()

    override fun beforeExecution(
        transaction: Transaction,
        context: StatementContext,
    ) {
        if (currentRequestSql.get() != null) startedAt.set(System.nanoTime())
    }

    override fun afterExecution(
        transaction: Transaction,
        contexts: List<StatementContext>,
        executedStatement: PreparedStatementApi,
    ) {
        val sql = currentRequestSql.get() ?: return
        val took = startedAt.get()?.let { System.nanoTime() - it } ?: 0
        startedAt.remove()
        contexts.forEachIndexed { index, context ->
            val text = runCatching { context.statement.prepareSQL(transaction, true) }.getOrDefault("a statement")
            sql.ran(text, if (index == 0) took else 0)
        }
    }
}
