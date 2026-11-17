package io.github.nijasc.ktor.svelte.gradle.libraries

import groovy.json.JsonOutput
import io.github.nijasc.ktor.svelte.gradle.DocLink
import io.github.nijasc.ktor.svelte.gradle.renderTemplate
import org.gradle.api.GradleException
import java.awt.image.BufferedImage
import java.io.File
import java.io.Serializable
import java.security.MessageDigest
import javax.imageio.ImageIO

internal const val DEFAULT_APP_COLOR = "#ffffff"
internal const val DEFAULT_APP_DISPLAY = "standalone"
internal const val APP_STATIC_DIR = "static/ktor-svelte"
internal const val SERVICE_WORKER_DIR = "src/service-worker"
internal const val SERVICE_WORKER = "$SERVICE_WORKER_DIR/index.ts"
internal const val SERVICE_WORKER_TSCONFIG = "$SERVICE_WORKER_DIR/tsconfig.json"
internal const val APP_MANIFEST = "$APP_STATIC_DIR/manifest.webmanifest"
private const val APP_PUBLIC_DIR = "/ktor-svelte"
private const val SMALLEST_SOURCE = 512
private const val APPLE_SIZE = 180
private const val MASKABLE_SAFE_ZONE = 0.8
private const val FULL = 255.0
private const val BYTE = 0xFF
private val ICON_SIZES = listOf(48, 72, 96, 128, 144, 192, 256, 384, 512)
private val MASKABLE_SIZES = listOf(192, 512)
private val DISPLAYS = listOf("standalone", "fullscreen", "minimal-ui", "browser")
private val COLOR = Regex("#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})")
private const val STATIC_ATTRIBUTES = "# $GENERATED_MARKER\n* linguist-generated\n*.png binary\n"

internal val OFFLINE_TEXTS =
    mapOf(
        "offline-title" to "You are offline",
        "offline-text" to "This page needs a connection. It reloads by itself when you are back online.",
        "offline-retry" to "Try again",
    )

@ConsistentCopyVisibility
public data class InstallableSpec internal constructor(
    val name: String,
    val shortName: String,
    val description: String?,
    val themeColor: String,
    val backgroundColor: String,
    val display: String,
    val iconPath: String,
    val iconHash: String,
) : Serializable

private fun problem(text: String): Nothing = throw GradleException("installable: $text" + DocLink.FRONTEND_LIBRARIES.see())

internal fun installableSpecOf(
    name: String?,
    shortName: String?,
    description: String?,
    themeColor: String,
    backgroundColor: String,
    display: String,
    icon: File?,
): InstallableSpec {
    if (name.isNullOrBlank()) problem("name is missing. Set the name people see when they install the app, such as name = \"Notes\".")
    if (icon == null) problem("icon is missing. Set a square PNG of at least 512 pixels, such as icon = file(\"app-icon.png\").")
    if (!icon.isFile) problem("icon ${icon.path} does not exist.")
    listOf("themeColor" to themeColor, "backgroundColor" to backgroundColor).forEach { (setting, value) ->
        if (!COLOR.matches(value)) problem("$setting is '$value'. Write it as a hex color, such as \"#4f46e5\".")
    }
    if (display !in DISPLAYS) problem("display is '$display'. Use one of ${DISPLAYS.joinToString()}.")
    val hash = MessageDigest.getInstance("SHA-256").digest(icon.readBytes()).joinToString("") { "%02x".format(it) }
    return InstallableSpec(
        name = name,
        shortName = shortName?.takeIf { it.isNotBlank() } ?: name,
        description = description?.takeIf { it.isNotBlank() },
        themeColor = themeColor,
        backgroundColor = backgroundColor,
        display = display,
        iconPath = icon.absolutePath,
        iconHash = hash,
    )
}

private fun iconPath(name: String): String = "$APP_STATIC_DIR/$name"

private fun publicPath(name: String): String = "$APP_PUBLIC_DIR/$name"

private fun iconName(size: Int): String = "icon-$size.png"

private fun maskableName(size: Int): String = "icon-maskable-$size.png"

private const val APPLE_ICON = "apple-touch-icon.png"

internal fun installableFiles(
    app: InstallableSpec,
    i18n: I18nSpec?,
    messages: MessageCatalog?,
): Map<String, String> =
    mapOf(
        APP_MANIFEST to webManifest(app, i18n),
        "$APP_STATIC_DIR/.gitattributes" to STATIC_ATTRIBUTES,
        SERVICE_WORKER to serviceWorker(app, i18n, messages),
        SERVICE_WORKER_TSCONFIG to "// $GENERATED_MARKER\n{\n  \"extends\": \"\$app/tsconfig/service-worker\"\n}\n",
    )

internal fun webManifest(
    app: InstallableSpec,
    i18n: I18nSpec?,
): String {
    val icons =
        ICON_SIZES.map { size -> icon(iconName(size), size, "any") } +
            MASKABLE_SIZES.map { size -> icon(maskableName(size), size, "maskable") }
    val manifest =
        buildMap {
            put("name", app.name)
            put("short_name", app.shortName)
            app.description?.let { put("description", it) }
            i18n?.let { put("lang", it.defaultLocale) }
            put("start_url", "/")
            put("scope", "/")
            put("display", app.display)
            put("theme_color", app.themeColor)
            put("background_color", app.backgroundColor)
            put("icons", icons)
        }
    return JsonOutput.prettyPrint(JsonOutput.toJson(manifest)) + "\n"
}

private fun icon(
    name: String,
    size: Int,
    purpose: String,
): Map<String, String> = mapOf("src" to publicPath(name), "sizes" to "${size}x$size", "type" to "image/png", "purpose" to purpose)

internal fun installableHeadTags(app: InstallableSpec): String =
    "<link rel=\"manifest\" href=\"${publicPath("manifest.webmanifest")}\">" +
        "<meta name=\"theme-color\" content=\"${app.themeColor}\">" +
        "<link rel=\"apple-touch-icon\" href=\"${publicPath(APPLE_ICON)}\">"

private fun escapeHtml(text: String): String =
    text
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\"", "&quot;")

internal fun offlinePage(
    app: InstallableSpec,
    i18n: I18nSpec?,
    messages: MessageCatalog?,
): String {
    val own = i18n?.let { messages?.locales?.get(it.defaultLocale) }.orEmpty()

    fun text(key: String): String = escapeHtml(own[key]?.takeIf { '{' !in it } ?: OFFLINE_TEXTS.getValue(key))
    val lang = i18n?.defaultLocale ?: "en"
    val dark = isDark(app.backgroundColor)
    val ink = if (dark) "#f5f5f5" else "#1f1f1f"
    return "<!doctype html><html lang=\"$lang\"><head><meta charset=\"utf-8\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
        "<meta name=\"theme-color\" content=\"${app.themeColor}\">" +
        "<title>${text("offline-title")} - ${escapeHtml(app.name)}</title>" +
        "<style>body{margin:0;min-height:100vh;display:grid;place-content:center;gap:1rem;padding:1rem;text-align:center;" +
        "font-family:system-ui,sans-serif;background:${app.backgroundColor};color:$ink}" +
        "h1{margin:0;font-size:1.5rem}p{margin:0;max-width:30rem;opacity:.8}" +
        "button{justify-self:center;padding:.5rem 1rem;border:0;border-radius:.5rem;font:inherit;" +
        "background:${app.themeColor};color:${if (isDark(app.themeColor)) "#ffffff" else "#1f1f1f"};cursor:pointer}</style>" +
        "</head><body><h1>${text("offline-title")}</h1><p>${text("offline-text")}</p>" +
        "<button type=\"button\" onclick=\"location.reload()\">${text("offline-retry")}</button>" +
        "<script>addEventListener('online',function(){location.reload()})</script></body></html>"
}

private fun serviceWorker(
    app: InstallableSpec,
    i18n: I18nSpec?,
    messages: MessageCatalog?,
): String =
    "// $GENERATED_MARKER\n" +
        renderTemplate(
            "service-worker.ts",
            mapOf("offlinePage" to JsonOutput.toJson(offlinePage(app, i18n, messages)).replace("</", "<\\/")),
        )

private fun rgb(color: String): Triple<Int, Int, Int> {
    val hex = color.removePrefix("#").let { if (it.length == 3) it.map { c -> "$c$c" }.joinToString("") else it }
    return Triple(hex.substring(0, 2).toInt(16), hex.substring(2, 4).toInt(16), hex.substring(4, 6).toInt(16))
}

private fun isDark(color: String): Boolean {
    val (r, g, b) = rgb(color)
    return r * 299 + g * 587 + b * 114 < 128_000
}

internal fun readAppIcon(file: File): BufferedImage {
    val image =
        runCatching { ImageIO.read(file) }.getOrNull()
            ?: problem("icon ${file.path} is not an image Java can read. Use a PNG.")
    if (image.width != image.height) problem("icon ${file.path} is ${image.width}x${image.height} pixels. Use a square image.")
    if (image.width < SMALLEST_SOURCE) {
        problem("icon ${file.path} is ${image.width} pixels wide. Use at least $SMALLEST_SOURCE, so the large icons stay sharp.")
    }
    return image
}

internal fun appIcons(app: InstallableSpec): Map<String, BufferedImage> {
    val source = readAppIcon(File(app.iconPath))
    val background = rgb(app.backgroundColor)
    return buildMap {
        ICON_SIZES.forEach { size -> put(iconPath(iconName(size)), scaled(source, size)) }
        MASKABLE_SIZES.forEach { size ->
            val inner = (size * MASKABLE_SAFE_ZONE).toInt()
            put(iconPath(maskableName(size)), placed(scaled(source, inner), size, background))
        }
        put(iconPath(APPLE_ICON), placed(scaled(source, APPLE_SIZE), APPLE_SIZE, background))
    }
}

internal fun scaled(
    source: BufferedImage,
    size: Int,
): BufferedImage {
    val width = source.width
    val pixels = source.getRGB(0, 0, width, source.height, null, 0, width)
    val ratio = width.toDouble() / size
    val result = BufferedImage(size, size, BufferedImage.TYPE_INT_ARGB)
    for (y in 0 until size) {
        val top = y * ratio
        val bottom = (y + 1) * ratio
        for (x in 0 until size) {
            val left = x * ratio
            val right = (x + 1) * ratio
            var alpha = 0.0
            var red = 0.0
            var green = 0.0
            var blue = 0.0
            var area = 0.0
            for (sy in top.toInt() until minOf(width, kotlin.math.ceil(bottom).toInt())) {
                val coverY = minOf(bottom, sy + 1.0) - maxOf(top, sy.toDouble())
                for (sx in left.toInt() until minOf(width, kotlin.math.ceil(right).toInt())) {
                    val cover = coverY * (minOf(right, sx + 1.0) - maxOf(left, sx.toDouble()))
                    val pixel = pixels[sy * width + sx]
                    val a = (pixel ushr 24 and BYTE) / FULL * cover
                    alpha += a
                    red += (pixel shr 16 and BYTE) * a
                    green += (pixel shr 8 and BYTE) * a
                    blue += (pixel and BYTE) * a
                    area += cover
                }
            }
            result.setRGB(x, y, argb(alpha / area, red, green, blue, alpha))
        }
    }
    return result
}

private fun argb(
    opacity: Double,
    red: Double,
    green: Double,
    blue: Double,
    weight: Double,
): Int {
    if (weight == 0.0) return 0
    val a = Math.round(opacity * FULL).toInt()
    val r = Math.round(red / weight).toInt()
    val g = Math.round(green / weight).toInt()
    val b = Math.round(blue / weight).toInt()
    return (a shl 24) or (r shl 16) or (g shl 8) or b
}

private fun placed(
    image: BufferedImage,
    size: Int,
    background: Triple<Int, Int, Int>,
): BufferedImage {
    val result = BufferedImage(size, size, BufferedImage.TYPE_INT_ARGB)
    val offset = (size - image.width) / 2
    for (y in 0 until size) {
        for (x in 0 until size) {
            val inside = x - offset in 0 until image.width && y - offset in 0 until image.height
            val pixel = if (inside) image.getRGB(x - offset, y - offset) else 0
            val a = (pixel ushr 24 and BYTE) / FULL

            fun mix(
                channel: Int,
                back: Int,
            ): Int = Math.round(channel * a + back * (1 - a)).toInt()
            val r = mix(pixel shr 16 and BYTE, background.first)
            val g = mix(pixel shr 8 and BYTE, background.second)
            val b = mix(pixel and BYTE, background.third)
            result.setRGB(x, y, (BYTE shl 24) or (r shl 16) or (g shl 8) or b)
        }
    }
    return result
}

internal fun samePixels(
    file: File,
    image: BufferedImage,
): Boolean {
    if (!file.isFile) return false
    val existing = runCatching { ImageIO.read(file) }.getOrNull() ?: return false
    if (existing.width != image.width || existing.height != image.height) return false
    val width = image.width
    val left = existing.getRGB(0, 0, width, image.height, null, 0, width)
    val right = image.getRGB(0, 0, width, image.height, null, 0, width)
    return left.indices.all { index -> left[index] == right[index] || (left[index] ushr 24 == 0 && right[index] ushr 24 == 0) }
}

internal fun writePng(
    file: File,
    image: BufferedImage,
) {
    file.parentFile.mkdirs()
    ImageIO.write(image, "png", file)
}
