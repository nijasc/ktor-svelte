package io.github.nijasc.ktor.svelte.gradle

internal const val DEVELOPMENT_SYSTEM_PROPERTY = "io.ktor.development"
internal const val FRONTEND_DIR_SYSTEM_PROPERTY = "ktor.svelte.frontendDir"
internal const val GENERATE_TS_ONLY_SYSTEM_PROPERTY = "ktor.svelte.generateTsOnly"
internal const val VERIFY_TS_REPORT_SYSTEM_PROPERTY = "ktor.svelte.generateTsVerify"

internal fun isWindowsHost(): Boolean = System.getProperty("os.name").orEmpty().startsWith("Windows")
