package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.Action
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.provider.SetProperty
import org.gradle.api.tasks.Nested

public abstract class SvelteExtension {
    public abstract val frontendDir: DirectoryProperty
    public abstract val outputDir: Property<String>
    public abstract val packageManager: Property<PackageManager>
    public abstract val buildScript: Property<String>
    public abstract val buildEnv: SetProperty<String>
    public abstract val addRuntimeDependency: Property<Boolean>

    @get:Nested
    public abstract val dev: SvelteDevSettings

    public fun dev(action: Action<SvelteDevSettings>) {
        action.execute(dev)
    }
}

public abstract class SvelteDevSettings {
    public abstract val port: Property<Int>
    public abstract val script: Property<String>
}
