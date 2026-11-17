package io.github.nijasc.ktor.svelte.gradle

import org.gradle.api.Named
import org.gradle.api.file.DirectoryProperty
import org.gradle.api.provider.Property
import javax.inject.Inject

private val FRONTEND_NAME = Regex("[a-z0-9]+(-[a-z0-9]+)*")

public abstract class SvelteFrontend
    @Inject
    constructor(
        private val frontendName: String,
    ) : Named {
        init {
            require(FRONTEND_NAME.matches(frontendName)) {
                "svelte { frontend(\"$frontendName\") }: a frontend name has lowercase letters, digits and single dashes, " +
                    "such as \"admin\" or \"admin-reports\"."
            }
        }

        override fun getName(): String = frontendName

        public abstract val frontendDir: DirectoryProperty
        public abstract val outputDir: Property<String>
        public abstract val buildScript: Property<String>
        public abstract val basePath: Property<String>
        public abstract val devPort: Property<Int>

        public fun propertyMissing(
            name: String,
            value: Any?,
        ): Nothing = throw unknownSetting(SvelteFrontend::class.java, "frontend", name)
    }

internal fun frontendTaskSuffix(name: String): String =
    name.split('-').joinToString("") { part ->
        part.replaceFirstChar {
            it.uppercaseChar()
        }
    }

internal fun frontendResourceRoot(name: String): String = "ktor-svelte/frontends/$name"

internal fun serverFrontendName(basePath: String): String = basePath.trim('/').replace('/', '-')
