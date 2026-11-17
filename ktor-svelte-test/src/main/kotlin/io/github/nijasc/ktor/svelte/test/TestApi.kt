package io.github.nijasc.ktor.svelte.test

import com.microsoft.playwright.APIResponse
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Page
import com.microsoft.playwright.options.RequestOptions
import kotlinx.serialization.KSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer

private const val FIRST_ERROR = 400
private const val SERVER_ERRORS = 500
private const val SHOWN_BODY = 500

public class ApiFailure(
    public val status: Int,
    public val body: String,
    message: String,
) : AssertionError(message)

public class TestApi(
    @PublishedApi internal val context: BrowserContext,
    @PublishedApi internal val origin: String,
) {
    @PublishedApi
    internal val json: Json = Json { ignoreUnknownKeys = true }

    @PublishedApi
    internal fun send(
        method: String,
        path: String,
        body: String?,
    ): APIResponse {
        val options =
            RequestOptions
                .create()
                .setMethod(method)
                .setHeader("Origin", origin)
                .setHeader("Accept", "application/json")
        if (body != null) options.setHeader("Content-Type", "application/json").setData(body)
        return context.request().fetch(path, options)
    }

    @PublishedApi
    internal fun <T> read(
        method: String,
        path: String,
        body: String?,
        answer: KSerializer<T>,
    ): T {
        val response = send(method, path, body)
        val text = response.text()
        if (response.status() >= FIRST_ERROR) {
            throw ApiFailure(response.status(), text, "$method $path answered ${response.status()}: ${text.take(SHOWN_BODY)}")
        }
        return json.decodeFromString(answer, text)
    }

    public fun status(
        method: String,
        path: String,
        body: String? = null,
    ): Int = send(method, path, body).status()

    public inline fun <reified T> get(path: String): T = read("GET", path, null, serializer<T>())

    public inline fun <reified B, reified T> post(
        path: String,
        body: B,
    ): T = read("POST", path, json.encodeToString(serializer<B>(), body), serializer<T>())

    public inline fun <reified B, reified T> put(
        path: String,
        body: B,
    ): T = read("PUT", path, json.encodeToString(serializer<B>(), body), serializer<T>())

    public fun delete(path: String) {
        val response = send("DELETE", path, null)
        if (response.status() >= FIRST_ERROR) {
            throw ApiFailure(
                response.status(),
                response.text(),
                "DELETE $path answered ${response.status()}: ${response.text().take(SHOWN_BODY)}",
            )
        }
    }
}

public fun Page.problems(): List<String> {
    val found = java.util.concurrent.CopyOnWriteArrayList<String>()
    onConsoleMessage { message -> if (message.type() == "error") found += "console: ${message.text()}" }
    onPageError { error -> found += "error: $error" }
    onResponse { response -> if (response.status() >= SERVER_ERRORS) found += "${response.status()} ${response.url()}" }
    return found
}
