package io.github.nijasc.ktor.svelte.gradle.libraries

import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy
import org.gradle.api.GradleException
import org.junit.jupiter.api.io.TempDir
import java.awt.image.BufferedImage
import java.io.File
import javax.imageio.ImageIO
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class InstallableTest {
    @TempDir
    lateinit var dir: File

    private fun iconFile(
        size: Int = 512,
        height: Int = size,
        paint: (Int, Int) -> Int = { _, _ -> 0xFF4F46E5.toInt() },
    ): File {
        val image = BufferedImage(size, height, BufferedImage.TYPE_INT_ARGB)
        for (y in 0 until height) for (x in 0 until size) image.setRGB(x, y, paint(x, y))
        return dir.resolve("icon-$size-$height.png").also { ImageIO.write(image, "png", it) }
    }

    private fun app(
        icon: File = iconFile(),
        name: String? = "Notes",
        shortName: String? = null,
        themeColor: String = "#4f46e5",
        backgroundColor: String = "#ffffff",
        display: String = "standalone",
    ) = installableSpecOf(name, shortName, "Notes for the team", themeColor, backgroundColor, display, icon)

    private fun spec(app: InstallableSpec) = LibrarySpec(null, null, false, null, 5173, "app.generated", installable = app)

    @Test
    fun `the manifest names the app, its colors and every icon, and starts at the root`() {
        val manifest = webManifest(app(), null)
        assertContains(manifest, "\"name\": \"Notes\"")
        assertContains(manifest, "\"short_name\": \"Notes\"")
        assertContains(manifest, "\"description\": \"Notes for the team\"")
        assertContains(manifest, "\"start_url\": \"/\"")
        assertContains(manifest, "\"scope\": \"/\"")
        assertContains(manifest, "\"display\": \"standalone\"")
        assertContains(manifest, "\"theme_color\": \"#4f46e5\"")
        assertContains(manifest, "\"background_color\": \"#ffffff\"")
        listOf(48, 72, 96, 128, 144, 192, 256, 384, 512).forEach { size ->
            assertContains(manifest, "\"src\": \"/ktor-svelte/icon-$size.png\"")
            assertContains(manifest, "\"sizes\": \"${size}x$size\"")
        }
        assertContains(manifest, "\"src\": \"/ktor-svelte/icon-maskable-512.png\"")
        assertContains(manifest, "\"purpose\": \"maskable\"")
        assertFalse("lang" in manifest)
        assertContains(webManifest(app(), I18nSpec(listOf("de", "en"), "de", LocaleStrategy.Cookie)), "\"lang\": \"de\"")
    }

    @Test
    fun `sync writes the manifest, the service worker and the head tags`() {
        val files = frontendFiles(spec(app(shortName = "N")), null, false)
        assertContains(files.getValue(APP_MANIFEST), "\"short_name\": \"N\"")
        assertContains(files.getValue("$APP_STATIC_DIR/.gitattributes"), "*.png binary")
        val worker = files.getValue(SERVICE_WORKER)
        assertTrue(worker.startsWith("// $GENERATED_MARKER\n"))
        assertContains(worker, "import { immutable } from '\$app/manifest';")
        assertContains(files.getValue(SERVICE_WORKER_TSCONFIG), "\"extends\": \"\$app/tsconfig/service-worker\"")
        val hooks = files.getValue("$GENERATED_DIR/server-hooks.ts")
        assertContains(hooks, "<link rel=\"manifest\" href=\"/ktor-svelte/manifest.webmanifest\">")
        assertContains(hooks, "<meta name=\"theme-color\" content=\"#4f46e5\">")
        assertContains(hooks, "<link rel=\"apple-touch-icon\" href=\"/ktor-svelte/apple-touch-icon.png\">")
        assertEquals(files.getValue("src/hooks.server.ts").lines().first(), "// $GENERATED_MARKER")
    }

    @Test
    fun `the service worker caches only the hashed build files and answers failed page loads with the offline page`() {
        val worker = frontendFiles(spec(app()), null, false).getValue(SERVICE_WORKER)
        assertContains(worker, "cache.addAll(files)")
        assertContains(worker, "if (request.method !== 'GET') return;")
        assertContains(worker, "if (request.mode === 'navigate') {\n        event.respondWith(fetch(request).catch(() => offline()));")
        assertContains(worker, "if (assets.has(url.pathname)) {")
        assertFalse("cache.put" in worker)
        assertFalse("skipWaiting" in worker)
        assertContains(worker, "You are offline")
        assertFalse("</script>" in worker)
    }

    @Test
    fun `the offline page takes its texts from the messages of the default locale`() {
        val i18n = I18nSpec(listOf("de", "en"), "de", LocaleStrategy.Cookie)
        val messages =
            MessageCatalog(
                mapOf(
                    "de" to mapOf("offline-title" to "Keine Verbindung", "offline-text" to "Hallo {name}"),
                    "en" to mapOf("offline-title" to "No connection", "offline-text" to "Hello {name}"),
                ),
            )
        val page = offlinePage(app(), i18n, messages)
        assertContains(page, "<html lang=\"de\">")
        assertContains(page, "<h1>Keine Verbindung</h1>")
        assertContains(page, "<p>${OFFLINE_TEXTS.getValue("offline-text")}</p>")
        assertContains(page, ">Try again</button>")
        assertContains(page, "background:#ffffff")
    }

    @Test
    fun `wrong settings are named with the fix`() {
        assertContains(assertFailsWith<GradleException> { app(name = null) }.message!!, "name is missing")
        assertContains(
            assertFailsWith<GradleException> { installableSpecOf("Notes", null, null, "#fff", "#fff", "standalone", null) }.message!!,
            "icon is missing",
        )
        assertContains(assertFailsWith<GradleException> { app(themeColor = "indigo") }.message!!, "themeColor is 'indigo'")
        assertContains(assertFailsWith<GradleException> { app(display = "window") }.message!!, "display is 'window'")
        assertContains(assertFailsWith<GradleException> { appIcons(app(icon = iconFile(512, 400))) }.message!!, "Use a square image")
        assertContains(assertFailsWith<GradleException> { appIcons(app(icon = iconFile(256))) }.message!!, "at least 512")
    }

    @Test
    fun `icons come in every size, the maskable ones and the Apple one on the background color`() {
        val icons = appIcons(app(icon = iconFile { x, _ -> if (x < 256) 0xFF000000.toInt() else 0 }))
        assertEquals(12, icons.size)
        assertEquals(512, icons.getValue("$APP_STATIC_DIR/icon-512.png").width)
        assertEquals(48, icons.getValue("$APP_STATIC_DIR/icon-48.png").height)
        val small = icons.getValue("$APP_STATIC_DIR/icon-48.png")
        assertEquals(0xFF000000.toInt(), small.getRGB(0, 10))
        assertEquals(0, small.getRGB(47, 10) ushr 24)
        val maskable = icons.getValue("$APP_STATIC_DIR/icon-maskable-512.png")
        assertEquals(0xFFFFFFFF.toInt(), maskable.getRGB(10, 256))
        assertEquals(0xFF000000.toInt(), maskable.getRGB(100, 256))
        assertEquals(0xFFFFFFFF.toInt(), maskable.getRGB(400, 256))
        val apple = icons.getValue("$APP_STATIC_DIR/apple-touch-icon.png")
        assertEquals(180, apple.width)
        assertEquals(0xFFFFFFFF.toInt(), apple.getRGB(170, 90))
    }

    @Test
    fun `scaling averages the pixels it covers`() {
        val stripes = iconFile { x, _ -> if (x % 2 == 0) 0xFF000000.toInt() else 0xFFFFFFFF.toInt() }
        val half = scaled(ImageIO.read(stripes), 256)
        assertEquals(0xFF808080.toInt(), half.getRGB(5, 5))
    }

    @Test
    fun `a written icon is compared by its pixels, not its bytes`() {
        val image = scaled(ImageIO.read(iconFile()), 48)
        val file = dir.resolve("out/icon-48.png")
        assertFalse(samePixels(file, image))
        writePng(file, image)
        assertTrue(samePixels(file, image))
        assertFalse(samePixels(file, scaled(ImageIO.read(iconFile { _, _ -> 0xFF000000.toInt() }), 48)))
    }
}
