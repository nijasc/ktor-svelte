package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.Action
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.ListProperty
import org.gradle.api.provider.MapProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Nested
import java.io.Serializable

public enum class DaisyTheme(
    public val cssName: String,
) {
    Light("light"),
    Dark("dark"),
    Cupcake("cupcake"),
    Bumblebee("bumblebee"),
    Emerald("emerald"),
    Corporate("corporate"),
    Synthwave("synthwave"),
    Retro("retro"),
    Cyberpunk("cyberpunk"),
    Valentine("valentine"),
    Halloween("halloween"),
    Garden("garden"),
    Forest("forest"),
    Aqua("aqua"),
    Lofi("lofi"),
    Pastel("pastel"),
    Fantasy("fantasy"),
    Wireframe("wireframe"),
    Black("black"),
    Luxury("luxury"),
    Dracula("dracula"),
    Cmyk("cmyk"),
    Autumn("autumn"),
    Business("business"),
    Acid("acid"),
    Lemonade("lemonade"),
    Night("night"),
    Coffee("coffee"),
    Winter("winter"),
    Dim("dim"),
    Nord("nord"),
    Sunset("sunset"),
    Caramellatte("caramellatte"),
    Abyss("abyss"),
    Silk("silk"),
    ShadcnLight("shadcn-light"),
    ShadcnDark("shadcn-dark"),
}

public enum class LocaleStrategy {
    Cookie,
    UrlPrefix,
}

public data class DaisyCustomTheme(
    val name: String,
    val colorScheme: String,
    val colors: Map<String, String>,
) : Serializable

public class DaisyCustomThemeBuilder {
    private val values = linkedMapOf<String, String>()

    public var primary: String? by color("primary")
    public var secondary: String? by color("secondary")
    public var accent: String? by color("accent")
    public var neutral: String? by color("neutral")
    public var base100: String? by color("base-100")
    public var base200: String? by color("base-200")
    public var base300: String? by color("base-300")
    public var baseContent: String? by color("base-content")
    public var info: String? by color("info")
    public var success: String? by color("success")
    public var warning: String? by color("warning")
    public var error: String? by color("error")

    public fun variable(
        name: String,
        value: String,
    ) {
        values[name] = value
    }

    internal fun colors(): Map<String, String> = values.toMap()

    private fun color(name: String) =
        object : kotlin.properties.ReadWriteProperty<Any?, String?> {
            override fun getValue(
                thisRef: Any?,
                property: kotlin.reflect.KProperty<*>,
            ): String? = values["color-$name"]

            override fun setValue(
                thisRef: Any?,
                property: kotlin.reflect.KProperty<*>,
                value: String?,
            ) {
                if (value == null) values.remove("color-$name") else values["color-$name"] = value
            }
        }
}

public abstract class TailwindSettings {
    public abstract val enabled: Property<Boolean>
    public abstract val typographyPlugin: Property<Boolean>
    public abstract val formsPlugin: Property<Boolean>

    public fun typography() {
        typographyPlugin.set(true)
    }

    public fun forms() {
        formsPlugin.set(true)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(TailwindSettings::class.java, "tailwind", name)
}

public abstract class DaisySettings {
    public abstract val enabled: Property<Boolean>
    public abstract val themeNames: ListProperty<String>
    public abstract val defaultThemeName: Property<String>
    public abstract val prefersDarkName: Property<String>
    public abstract val customThemes: ListProperty<DaisyCustomTheme>

    public fun themes(vararg themes: DaisyTheme) {
        themeNames.addAll(themes.map { it.cssName })
    }

    public fun defaultTheme(theme: DaisyTheme) {
        defaultThemeName.set(theme.cssName)
    }

    public fun defaultTheme(name: String) {
        defaultThemeName.set(name)
    }

    public fun prefersDark(theme: DaisyTheme) {
        prefersDarkName.set(theme.cssName)
    }

    public fun prefersDark(name: String) {
        prefersDarkName.set(name)
    }

    public fun customTheme(
        name: String,
        colorScheme: String = "light",
        action: Action<DaisyCustomThemeBuilder>,
    ) {
        val builder = DaisyCustomThemeBuilder()
        action.execute(builder)
        customThemes.add(DaisyCustomTheme(name, colorScheme, builder.colors()))
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(DaisySettings::class.java, "daisyUi", name)
}

public abstract class I18nSettings {
    public abstract val enabled: Property<Boolean>
    public abstract val localeNames: ListProperty<String>
    public abstract val defaultLocale: Property<String>
    public abstract val strategy: Property<LocaleStrategy>
    public abstract val messagesDir: DirectoryProperty

    public fun locales(vararg locales: String) {
        localeNames.addAll(locales.toList())
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(I18nSettings::class.java, "i18n", name)
}

public abstract class LucideSettings {
    public abstract val allIconsEnabled: Property<Boolean>

    public fun allIcons() {
        allIconsEnabled.set(true)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(LucideSettings::class.java, "lucide", name)
}

public abstract class SvelteLibraries {
    public abstract val lucideEnabled: Property<Boolean>
    public abstract val imagesEnabled: Property<Boolean>
    public abstract val toastsEnabled: Property<Boolean>
    public abstract val generatedPackage: Property<String>

    @get:Nested
    public abstract val tailwindSettings: TailwindSettings

    @get:Nested
    public abstract val daisySettings: DaisySettings

    @get:Nested
    public abstract val i18nSettings: I18nSettings

    @get:Nested
    public abstract val lucideSettings: LucideSettings

    public abstract val overrides: MapProperty<String, String>

    public fun lucide() {
        lucideEnabled.set(true)
    }

    public fun lucide(action: Action<LucideSettings>) {
        lucideEnabled.set(true)
        action.execute(lucideSettings)
    }

    public fun images() {
        imagesEnabled.set(true)
    }

    public fun toasts() {
        toastsEnabled.set(true)
    }

    public fun tailwind(action: Action<TailwindSettings> = Action { }) {
        tailwindSettings.enabled.set(true)
        action.execute(tailwindSettings)
    }

    public fun daisyUi(action: Action<DaisySettings> = Action { }) {
        daisySettings.enabled.set(true)
        tailwindSettings.enabled.set(true)
        action.execute(daisySettings)
    }

    public fun i18n(action: Action<I18nSettings>) {
        i18nSettings.enabled.set(true)
        action.execute(i18nSettings)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(SvelteLibraries::class.java, "libraries", name)
}
