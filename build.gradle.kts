plugins {
    alias(libs.plugins.kotlin.jvm) apply false
    alias(libs.plugins.ktlint) apply false
    alias(libs.plugins.maven.publish) apply false
    alias(libs.plugins.plugin.publish) apply false
    alias(libs.plugins.binary.compatibility)
}
