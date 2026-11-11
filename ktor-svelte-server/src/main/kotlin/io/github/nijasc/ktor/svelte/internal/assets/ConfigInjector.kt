package io.github.nijasc.ktor.svelte.internal.assets

import java.io.ByteArrayOutputStream
import java.security.MessageDigest
import java.util.concurrent.ConcurrentHashMap
import java.util.zip.GZIPOutputStream

internal const val CONFIG_ELEMENT_ID = "ktor-svelte-config"
private val HEAD_TAG = Regex("<head(\\s[^>]*)?>", RegexOption.IGNORE_CASE)

internal class InjectedPage(
    val plain: ByteArray,
    val gzip: ByteArray,
    val eTag: String,
)

private class RenderedConfig(
    val json: String,
) {
    val element = "<script type=\"application/json\" id=\"$CONFIG_ELEMENT_ID\">${escapeForScript(json)}</script>"
    val hash = sha256(json.toByteArray()).take(12)
}

internal class ConfigInjector(
    private val store: AssetStore,
    private val config: PublicConfigSource,
) {
    @Volatile
    private var rendered: RenderedConfig? = null
    private val pages = ConcurrentHashMap<String, Pair<String, InjectedPage>>()

    fun pageFor(
        path: String,
        entry: ManifestEntry,
    ): InjectedPage? {
        val current = renderedConfig()
        val eTag = "${entry.hash}-c${current.hash}"
        pages[path]?.let { (cachedETag, page) -> if (cachedETag == eTag) return page }
        val html = store.open(path)?.use { it.readBytes().decodeToString() } ?: return null
        val plain = inject(html, current.element).toByteArray()
        val page = InjectedPage(plain, gzip(plain), eTag)
        pages[path] = eTag to page
        return page
    }

    private fun renderedConfig(): RenderedConfig {
        val json = config.current()
        rendered?.takeIf { it.json == json }?.let { return it }
        return RenderedConfig(json).also { rendered = it }
    }

    private fun inject(
        html: String,
        element: String,
    ): String {
        val head = HEAD_TAG.find(html) ?: return element + html
        return html.substring(0, head.range.last + 1) + element + html.substring(head.range.last + 1)
    }
}

internal fun escapeForScript(json: String): String = json.replace("<", "\\u003c").replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")

private fun gzip(bytes: ByteArray): ByteArray {
    val output = ByteArrayOutputStream()
    GZIPOutputStream(output).use { it.write(bytes) }
    return output.toByteArray()
}

private fun sha256(bytes: ByteArray): String = MessageDigest.getInstance("SHA-256").digest(bytes).joinToString("") { "%02x".format(it) }
