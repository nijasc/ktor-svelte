package io.github.nijasc.ktor.svelte.test

import java.io.File
import kotlin.system.exitProcess

private const val CODE_GENERATOR = "com.microsoft.playwright.CLI"

internal fun recorderCommand(
    java: String,
    classpath: String,
    output: File,
    browser: String,
    url: String,
): List<String> = listOf(java, "-cp", classpath, CODE_GENERATOR, "codegen", "--target", "java-junit", "-o", output.path, "-b", browser, url)

public object TestRecorder {
    @JvmStatic
    public fun main(arguments: Array<String>) {
        val output = File(arguments[0])
        val address = File(arguments[1])
        val java = File(System.getProperty("java.home"), "bin/java").path
        val status =
            TestApp.start().use { app ->
                address.writeText(app.url)
                println("ktor-svelte: the app runs at ${app.url}. Click through it in the browser that opens, then close the browser.")
                ProcessBuilder(recorderCommand(java, System.getProperty("java.class.path"), output, SharedBrowser.name, app.url))
                    .inheritIO()
                    .start()
                    .waitFor()
            }
        exitProcess(status)
    }
}
