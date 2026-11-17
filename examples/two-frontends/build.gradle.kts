plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.kotlin.serialization)
    alias(libs.plugins.ktor)
    application
    id("io.github.nijasc.ktor-svelte")
}

kotlin {
    jvmToolchain(17)
}

application {
    mainClass = "twofrontends.ApplicationKt"
}

fun port(
    name: String,
    default: Int,
): Int =
    providers
        .gradleProperty(name)
        .map { it.toInt() }
        .getOrElse(default)

svelte {
    dev {
        port = port("vitePort", 5173)
        debugPort = port("debugPort", 5005)
        openBrowser = false
    }
    frontend("admin") {
        devPort = port("adminVitePort", 5174)
    }
}

dependencies {
    implementation(libs.ktor.server.netty)
    implementation(libs.logback)
}

tasks.register<JavaExec>("installBrowsers") {
    group = "verification"
    description = "Downloads the browser the browser tests use, with its system packages on Linux."
    classpath = sourceSets["browserTest"].runtimeClasspath
    mainClass = "com.microsoft.playwright.CLI"
    val systemPackages = if (System.getProperty("os.name").startsWith("Linux")) listOf("--with-deps") else emptyList()
    args(listOf("install") + systemPackages + providers.gradleProperty("browser").orElse("chromium").get())
}

testing {
    suites {
        register<JvmTestSuite>("browserTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(project())
                implementation(libs.kotlin.test.junit5)
            }
        }
        register<JvmTestSuite>("devBrowserTest") {
            useJUnitJupiter(libs.versions.junit)
            dependencies {
                implementation(libs.kotlin.test.junit5)
                implementation(libs.playwright)
            }
            targets.configureEach {
                testTask.configure {
                    val projectDirectory = layout.projectDirectory.asFile.path
                    outputs.upToDateWhen { false }
                    systemProperty("example.dir", projectDirectory)
                }
            }
        }
    }
}
