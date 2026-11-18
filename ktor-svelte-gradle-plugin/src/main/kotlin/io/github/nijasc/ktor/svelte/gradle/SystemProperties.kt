package io.github.nijasc.ktor.svelte.gradle

internal const val DEVELOPMENT_SYSTEM_PROPERTY = "io.ktor.development"
internal const val FRONTEND_DIR_SYSTEM_PROPERTY = "ktor.svelte.frontendDir"
internal const val CONFIG_REPORT_SYSTEM_PROPERTY = "ktor.svelte.configReport"
internal const val COMPILE_ERRORS_SYSTEM_PROPERTY = "ktor.svelte.compileErrors"
internal const val GENERATE_TS_ONLY_SYSTEM_PROPERTY = "ktor.svelte.generateTsOnly"
internal const val VERIFY_TS_REPORT_SYSTEM_PROPERTY = "ktor.svelte.generateTsVerify"
internal const val GENERATE_MIGRATION_SYSTEM_PROPERTY = "ktor.svelte.generateMigration"
internal const val MIGRATION_NAME_SYSTEM_PROPERTY = "ktor.svelte.migrationName"
internal const val MIGRATION_CLASSES_SYSTEM_PROPERTY = "ktor.svelte.migrationClasses"
internal const val MIGRATION_REPORT_SYSTEM_PROPERTY = "ktor.svelte.migrationReport"

internal fun isWindowsHost(): Boolean = System.getProperty("os.name").orEmpty().startsWith("Windows")
