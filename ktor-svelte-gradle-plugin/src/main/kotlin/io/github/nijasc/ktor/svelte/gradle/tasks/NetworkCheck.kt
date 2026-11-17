package io.github.nijasc.ktor.svelte.gradle.tasks

import java.io.File
import java.io.IOException
import java.net.ConnectException
import java.net.InetSocketAddress
import java.net.ProxySelector
import java.net.URI
import java.net.UnknownHostException
import java.net.http.HttpClient
import java.net.http.HttpConnectTimeoutException
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.net.http.HttpTimeoutException
import java.nio.channels.UnresolvedAddressException
import java.time.Duration
import javax.net.ssl.SSLException

internal const val DEFAULT_REGISTRY = "https://registry.npmjs.org/"

internal data class Setting(
    val value: String,
    val source: String,
)

internal data class NetworkSettings(
    val registry: Setting,
    val proxy: Setting?,
    val certificates: List<Setting>,
    val strictSslOff: Setting?,
)

internal enum class NetworkFailure { CERTIFICATE, TIMEOUT, UNKNOWN_HOST, REFUSED, OTHER }

internal sealed interface RegistryAnswer {
    data class Answered(
        val status: Int,
    ) : RegistryAnswer

    data class Failed(
        val failure: NetworkFailure,
        val detail: String,
    ) : RegistryAnswer
}

private val NPMRC_LINE = Regex("""^\s*([A-Za-z0-9_.:/@-]+)\s*=\s*(.*?)\s*$""")
private val BUNFIG_REGISTRY = Regex("""^\s*registry\s*=\s*["']([^"']+)["']""", RegexOption.MULTILINE)

internal fun readNpmrc(file: File): Map<String, String> =
    if (!file.isFile) {
        emptyMap()
    } else {
        file
            .readLines()
            .filterNot { it.trimStart().startsWith("#") || it.trimStart().startsWith(";") }
            .mapNotNull { NPMRC_LINE.find(it)?.destructured }
            .associate { (key, value) -> key.lowercase() to value.trim('"', '\'') }
    }

internal fun withoutCredentials(url: String): String = url.replace(Regex("""(://)[^/@\s]+@"""), "$1***@")

internal fun networkSettings(
    frontend: File,
    environment: (String) -> String?,
    userHome: File?,
): NetworkSettings {
    val project = readNpmrc(frontend.resolve(".npmrc"))
    val user = userHome?.let { readNpmrc(it.resolve(".npmrc")) }.orEmpty()

    fun env(vararg names: String): Setting? =
        names.firstNotNullOfOrNull { name -> environment(name)?.takeIf { it.isNotBlank() }?.let { Setting(it.trim(), name) } }

    fun npmrc(key: String): Setting? =
        project[key]?.let { Setting(it, "$key in frontend/.npmrc") } ?: user[key]?.let { Setting(it, "$key in ~/.npmrc") }

    val bunfig =
        frontend
            .resolve("bunfig.toml")
            .takeIf { it.isFile }
            ?.let { BUNFIG_REGISTRY.find(it.readText())?.groupValues?.get(1) }
            ?.let { Setting(it, "registry in frontend/bunfig.toml") }
    val registry =
        env("npm_config_registry", "NPM_CONFIG_REGISTRY") ?: project["registry"]?.let { Setting(it, "registry in frontend/.npmrc") }
            ?: bunfig ?: user["registry"]?.let { Setting(it, "registry in ~/.npmrc") } ?: Setting(DEFAULT_REGISTRY, "default")
    val proxy =
        env("npm_config_https_proxy", "NPM_CONFIG_HTTPS_PROXY") ?: npmrc("https-proxy") ?: env("HTTPS_PROXY", "https_proxy")
            ?: npmrc("proxy") ?: env("npm_config_proxy", "NPM_CONFIG_PROXY", "HTTP_PROXY", "http_proxy")
    val noProxy = env("npm_config_noproxy", "NO_PROXY", "no_proxy")?.value ?: npmrc("noproxy")?.value
    val certificates =
        listOfNotNull(
            env("NODE_EXTRA_CA_CERTS"),
            env("npm_config_cafile", "NPM_CONFIG_CAFILE") ?: npmrc("cafile"),
        )
    val strictSslOff =
        (env("npm_config_strict_ssl", "NPM_CONFIG_STRICT_SSL") ?: npmrc("strict-ssl"))?.takeIf { it.value.equals("false", true) }
    val host = runCatching { URI.create(registry.value).host }.getOrNull()
    return NetworkSettings(
        registry = registry,
        proxy = proxy?.takeUnless { host != null && bypassesProxy(host, noProxy) },
        certificates = certificates,
        strictSslOff = strictSslOff,
    )
}

internal fun bypassesProxy(
    host: String,
    noProxy: String?,
): Boolean =
    noProxy
        .orEmpty()
        .split(',', ' ')
        .map { it.trim().lowercase() }
        .filter { it.isNotEmpty() }
        .any { entry ->
            val domain = entry.removePrefix("*").removePrefix(".")
            entry == "*" || host.lowercase() == domain || host.lowercase().endsWith(".$domain")
        }

internal fun probeRegistry(settings: NetworkSettings): RegistryAnswer {
    val builder =
        HttpClient
            .newBuilder()
            .followRedirects(HttpClient.Redirect.NORMAL)
            .connectTimeout(Duration.ofSeconds(PROBE_SECONDS))
    settings.proxy?.let { proxy ->
        val address = runCatching { URI.create(if ("://" in proxy.value) proxy.value else "http://${proxy.value}") }.getOrNull()
        if (address?.host != null) {
            val port =
                if (address.port > 0) {
                    address.port
                } else if (address.scheme == "https") {
                    443
                } else {
                    80
                }
            builder.proxy(ProxySelector.of(InetSocketAddress.createUnresolved(address.host, port)))
        }
    }
    val request =
        HttpRequest
            .newBuilder(URI.create(settings.registry.value))
            .timeout(Duration.ofSeconds(PROBE_SECONDS * 2))
            .GET()
            .build()
    return try {
        RegistryAnswer.Answered(builder.build().send(request, HttpResponse.BodyHandlers.discarding()).statusCode())
    } catch (failure: SSLException) {
        RegistryAnswer.Failed(NetworkFailure.CERTIFICATE, failure.message.orEmpty())
    } catch (failure: HttpConnectTimeoutException) {
        RegistryAnswer.Failed(NetworkFailure.TIMEOUT, failure.message.orEmpty())
    } catch (failure: HttpTimeoutException) {
        RegistryAnswer.Failed(NetworkFailure.TIMEOUT, failure.message.orEmpty())
    } catch (failure: ConnectException) {
        val kind = if (failure.isUnresolved()) NetworkFailure.UNKNOWN_HOST else NetworkFailure.REFUSED
        RegistryAnswer.Failed(kind, failure.message.orEmpty())
    } catch (failure: IOException) {
        RegistryAnswer.Failed(
            if (failure.isUnresolved()) NetworkFailure.UNKNOWN_HOST else NetworkFailure.OTHER,
            failure.message ?: failure.javaClass.simpleName,
        )
    } catch (failure: IllegalArgumentException) {
        RegistryAnswer.Failed(NetworkFailure.OTHER, failure.message.orEmpty())
    }
}

private const val PROBE_SECONDS = 5L

private fun IOException.isUnresolved(): Boolean =
    this is UnknownHostException || cause is UnresolvedAddressException || cause is UnknownHostException

internal fun networkFindings(
    settings: NetworkSettings,
    probe: ((NetworkSettings) -> RegistryAnswer)?,
): List<Finding> {
    val registry = withoutCredentials(settings.registry.value)
    val proxy = settings.proxy?.let { "proxy ${withoutCredentials(it.value)} (${it.source})" } ?: "no proxy"
    val certificates =
        if (settings.certificates.isEmpty()) {
            "no extra certificates"
        } else {
            "certificates from " + settings.certificates.joinToString { it.source }
        }
    val summary = Finding(Severity.OK, "Network: registry $registry (${settings.registry.source}), $proxy, $certificates")
    val strictSsl =
        settings.strictSslOff?.let {
            Finding(
                Severity.WARN,
                "strict-ssl=false (${it.source}) turns off certificate checks for every download. " +
                    "Point NODE_EXTRA_CA_CERTS at your company's root certificate instead.",
            )
        }
    val reach =
        if (probe == null) {
            Finding(Severity.OK, "Gradle runs offline, so the registry was not contacted")
        } else {
            reachability(registry, settings, probe(settings))
        }
    return listOfNotNull(summary, reach, strictSsl)
}

private fun reachability(
    registry: String,
    settings: NetworkSettings,
    answer: RegistryAnswer,
): Finding =
    when (answer) {
        is RegistryAnswer.Answered ->
            when {
                answer.status == 407 ->
                    Finding(
                        Severity.WARN,
                        "The proxy wants credentials. Put them in the proxy address: HTTPS_PROXY=http://user:password@host:port.",
                    )
                answer.status == 401 || answer.status == 403 ->
                    Finding(
                        Severity.WARN,
                        "Registry $registry answers HTTP ${answer.status}. Add its token to .npmrc: //host/:_authToken=...",
                    )
                answer.status >= 500 -> Finding(Severity.WARN, "Registry $registry answers HTTP ${answer.status}. Try again later.")
                else -> Finding(Severity.OK, "Registry $registry is reachable")
            }
        is RegistryAnswer.Failed -> Finding(Severity.WARN, "Registry $registry is not reachable: ${advice(answer.failure, settings)}")
    }

private fun advice(
    failure: NetworkFailure,
    settings: NetworkSettings,
): String =
    when (failure) {
        NetworkFailure.CERTIFICATE ->
            "its certificate is not trusted, which happens when a company proxy inspects HTTPS. " +
                if (settings.certificates.isEmpty()) {
                    "Set NODE_EXTRA_CA_CERTS to your company's root certificate (a PEM file), " +
                        "and add it to Java's trust store for Gradle."
                } else {
                    "Node reads ${settings.certificates.joinToString { it.source }}, but Java does not. " +
                        "Add the certificate to Java's trust store too, or ignore this if installs work."
                }
        NetworkFailure.UNKNOWN_HOST ->
            if (settings.proxy == null) {
                "its name does not resolve. Check the address, or set HTTPS_PROXY if your network only goes out through a proxy."
            } else {
                "the proxy ${withoutCredentials(settings.proxy.value)} does not resolve. Check ${settings.proxy.source}."
            }
        NetworkFailure.TIMEOUT, NetworkFailure.REFUSED ->
            if (settings.proxy == null) {
                "no answer. Behind a company proxy, set HTTPS_PROXY=http://host:port, or https-proxy in .npmrc."
            } else {
                "no answer through the proxy ${withoutCredentials(settings.proxy.value)}. Check ${settings.proxy.source}, and NO_PROXY."
            }
        NetworkFailure.OTHER -> "the request failed. Check the registry address and the proxy settings."
    }
