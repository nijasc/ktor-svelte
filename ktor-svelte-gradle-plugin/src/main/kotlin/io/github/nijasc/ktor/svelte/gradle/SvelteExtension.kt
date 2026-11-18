package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.Action
import org.gradle.api.NamedDomainObjectContainer
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.provider.SetProperty
import org.gradle.api.tasks.Nested

public abstract class SvelteExtension {
    public abstract val frontendDir: DirectoryProperty
    public abstract val outputDir: Property<String>
    public abstract val packageManager: Property<PackageManager>
    public abstract val bunVersion: Property<String>
    public abstract val nodeVersion: Property<String>
    public abstract val buildScript: Property<String>
    public abstract val buildEnv: SetProperty<String>
    public abstract val addRuntimeDependency: Property<Boolean>
    public abstract val includeSourceMaps: Property<Boolean>
    public abstract val precompress: Property<Boolean>
    public abstract val verifyLeaks: Property<Boolean>
    public abstract val shortTaskNames: Property<Boolean>
    public abstract val timingSummary: Property<Boolean>

    @get:Nested
    public abstract val dev: SvelteDevSettings

    @get:Nested
    public abstract val libraries: SvelteLibraries

    @get:Nested
    public abstract val naming: SvelteNamingSettings

    @get:Nested
    public abstract val utils: SvelteUtils

    public abstract val frontends: NamedDomainObjectContainer<SvelteFrontend>

    public fun frontend(
        name: String,
        action: Action<SvelteFrontend>,
    ) {
        action.execute(frontends.maybeCreate(name))
    }

    public fun frontend(name: String) {
        frontends.maybeCreate(name)
    }

    public fun dev(action: Action<SvelteDevSettings>) {
        action.execute(dev)
    }

    public fun naming(action: Action<SvelteNamingSettings>) {
        action.execute(naming)
    }

    public fun libraries(action: Action<SvelteLibraries>) {
        action.execute(libraries)
    }

    public fun utils(action: Action<SvelteUtils>) {
        action.execute(utils)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(SvelteExtension::class.java, "svelte", name)
}

public abstract class SvelteNamingSettings {
    public abstract val pages: Property<String>
    public abstract val apiRoutes: Property<String>
    public abstract val dtos: Property<String>
    public abstract val messageKeys: Property<String>
    public abstract val strict: Property<Boolean>

    public fun pages(style: NamingStyle) {
        pages.set(style.pattern)
    }

    public fun apiRoutes(style: NamingStyle) {
        apiRoutes.set(style.pattern)
    }

    public fun dtos(style: NamingStyle) {
        dtos.set(style.pattern)
    }

    public fun messageKeys(style: NamingStyle) {
        messageKeys.set(style.pattern)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(SvelteNamingSettings::class.java, "naming", name)
}

public abstract class SvelteDevSettings {
    public abstract val port: Property<Int>
    public abstract val script: Property<String>
    public abstract val debugPort: Property<Int>
    public abstract val openBrowser: Property<Boolean>
    public abstract val https: Property<Boolean>
    public abstract val httpsPort: Property<Int>

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(SvelteDevSettings::class.java, "dev", name)
}
