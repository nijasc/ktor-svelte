package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.Action
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Nested

public abstract class SvelteUtils {
    @get:Nested
    public abstract val flyway: FlywaySettings

    public fun flyway(action: Action<FlywaySettings> = Action { }) {
        flyway.enabled.set(true)
        action.execute(flyway)
    }

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(SvelteUtils::class.java, "utils", name)
}

public abstract class FlywaySettings {
    public abstract val enabled: Property<Boolean>
    public abstract val migrationsDir: DirectoryProperty

    public fun propertyMissing(
        name: String,
        value: Any?,
    ): Nothing = throw unknownSetting(FlywaySettings::class.java, "flyway", name)
}
