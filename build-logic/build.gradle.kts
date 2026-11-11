plugins {
    `kotlin-dsl`
}

fun plugin(dependency: Provider<PluginDependency>): Provider<String> =
    dependency.map { "${it.pluginId}:${it.pluginId}.gradle.plugin:${it.version}" }

dependencies {
    implementation(plugin(libs.plugins.kotlin.jvm))
    implementation(plugin(libs.plugins.kotlin.serialization))
    implementation(plugin(libs.plugins.ktlint))
    implementation(plugin(libs.plugins.maven.publish))
    implementation(plugin(libs.plugins.plugin.publish))
}
