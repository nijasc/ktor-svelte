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

internal class ConfigInjector(
    private val store: AssetStore,
    configJson: String,
) {
    private val element = "<script type=\"application/json\" id=\"$CONFIG_ELEMENT_ID\">${escapeForScript(configJson)}</script>"
    private val configHash = sha256(configJson.toByteArray()).take(12)
    private val pages = ConcurrentHashMap<String, Pair<String, InjectedPage>>()

    fun pageFor(
        path: String,
        entry: ManifestEntry,
    ): InjectedPage? {
        pages[path]?.let { (hash, page) -> if (hash == entry.hash) return page }
        val html = store.open(path)?.use { it.readBytes().decodeToString() } ?: return null
        val plain = inject(html).toByteArray()
        val page = InjectedPage(plain, gzip(plain), "${entry.hash}-c$configHash")
        pages[path] = entry.hash to page
        return page
    }

    fun inject(html: String): String {
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
