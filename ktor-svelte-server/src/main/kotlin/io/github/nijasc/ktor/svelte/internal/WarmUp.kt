package io.github.nijasc.ktor.svelte.internal

import io.ktor.server.application.Application
import io.ktor.server.application.log
import io.ktor.server.engine.EngineConnectorConfig
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.IOException
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration

internal const val WARM_UP_HEADER = "X-Ktor-Svelte-Warm-Up"
internal const val HEALTH_STARTING_JSON = """{"status":"starting"}"""
private const val WARM_UP_SECONDS = 30L
private val ANY_ADDRESS = setOf("0.0.0.0", "::", "[::]", "")

internal class WarmUpResult(
    val path: String,
    val status: Int?,
    val problem: String?,
)

internal class WarmUp(
    private val paths: List<String>,
) {
    @Volatile
    var done: Boolean = paths.isEmpty()
        private set

    suspend fun run(
        application: Application,
        baseUrl: String?,
        call: suspend (String) -> WarmUpResult = { path -> request(baseUrl.orEmpty(), path) },
    ) {
        if (done) return
        try {
            if (baseUrl == null) {
                application.log.warn("ktor-svelte: found no HTTP connector to warm up on, so the app reports ready without it.")
                return
            }
            val started = System.currentTimeMillis()
            val results = paths.map { call(it) }
            results.filter { it.problem != null }.forEach { result ->
                application.log.warn("ktor-svelte: warm-up call GET ${result.path} ${result.problem}")
            }
            application.log.info(warmUpLine(results, System.currentTimeMillis() - started))
        } finally {
            done = true
        }
    }
}

internal fun warmUpLine(
    results: List<WarmUpResult>,
    millis: Long,
): String {
    val failed = results.count { it.problem != null }
    val note = if (failed == 0) "" else ", $failed of them did not answer well"
    return "ktor-svelte: warmed up ${results.size} route(s) in ${took(millis)}$note."
}

internal fun warmUpBaseUrl(connectors: List<EngineConnectorConfig>): String? {
    val connector = connectors.firstOrNull { it.type.name == "HTTP" } ?: return null
    val host = if (connector.host in ANY_ADDRESS) "127.0.0.1" else connector.host
    val bracketed = if (':' in host && !host.startsWith("[")) "[$host]" else host
    return "http://$bracketed:${connector.port}"
}

private val client: HttpClient by lazy {
    HttpClient
        .newBuilder()
        .connectTimeout(Duration.ofSeconds(WARM_UP_SECONDS))
        .followRedirects(HttpClient.Redirect.NEVER)
        .build()
}

private suspend fun request(
    baseUrl: String,
    path: String,
): WarmUpResult =
    withContext(Dispatchers.IO) {
        try {
            val request =
                HttpRequest
                    .newBuilder(URI.create(baseUrl + path))
                    .timeout(Duration.ofSeconds(WARM_UP_SECONDS))
                    .header(WARM_UP_HEADER, "true")
                    .GET()
                    .build()
            val status = client.send(request, HttpResponse.BodyHandlers.discarding()).statusCode()
            WarmUpResult(path, status, if (status >= 500) "answered $status" else null)
        } catch (failure: IOException) {
            WarmUpResult(path, null, "failed: ${failure.message ?: failure.javaClass.simpleName}")
        } catch (failure: InterruptedException) {
            Thread.currentThread().interrupt()
            WarmUpResult(path, null, "was interrupted")
        }
    }
