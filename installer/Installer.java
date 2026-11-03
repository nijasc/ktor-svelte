import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Installer {
    private static final String REPOSITORY = "https://raw.githubusercontent.com/nijasc/ktor-svelte";
    private static final String METADATA =
        "https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml";
    private static final Pattern PROJECT_NAME = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");
    private static final Pattern PACKAGE_NAME = Pattern.compile("[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)*");
    private static final Pattern LOCALES = Pattern.compile("[a-z]{2,3}(-[A-Za-z0-9]{2,8})*(,[a-z]{2,3}(-[A-Za-z0-9]{2,8})*)*");
    private static final List<String> MANAGERS = List.of("bun", "pnpm", "npm", "yarn");
    private static final boolean WINDOWS = System.getProperty("os.name", "").startsWith("Windows");

    private final Map<String, String> flags;
    private final boolean acceptDefaults;
    private final BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
    private final HttpClient http = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NORMAL).build();

    private Installer(Map<String, String> flags) {
        this.flags = flags;
        this.acceptDefaults = flags.containsKey("yes");
    }

    public static void main(String[] arguments) {
        try {
            new Installer(parseFlags(arguments)).run();
        } catch (InstallerException failure) {
            System.err.println();
            System.err.println("ktor-svelte installer: " + failure.getMessage());
            System.exit(1);
        } catch (Exception failure) {
            System.err.println();
            System.err.println("ktor-svelte installer failed: " + failure);
            System.exit(1);
        }
    }

    private static Map<String, String> parseFlags(String[] arguments) {
        Map<String, String> flags = new HashMap<>();
        for (String argument : arguments) {
            if (!argument.startsWith("--")) throw new InstallerException("Unknown argument: " + argument);
            String body = argument.substring(2);
            int equals = body.indexOf('=');
            if (equals < 0) {
                flags.put(body, "true");
            } else {
                flags.put(body.substring(0, equals), body.substring(equals + 1));
            }
        }
        return flags;
    }

    private void run() throws Exception {
        System.out.println();
        System.out.println("  ktor-svelte: one app, one JAR, one port");
        System.out.println();

        List<String> installed = MANAGERS.stream().filter(Installer::isOnPath).collect(Collectors.toList());
        if (installed.isEmpty()) {
            throw new InstallerException("No package manager found. Install bun, pnpm, npm or yarn, then run this again.");
        }

        String name = ask("name", "Project name", "my-app", PROJECT_NAME, "Use letters, digits, dashes and underscores.");
        Path directory = Path.of(name).toAbsolutePath();
        if (Files.exists(directory)) {
            try (var entries = Files.list(directory)) {
                if (entries.findAny().isPresent()) throw new InstallerException(directory + " already exists and is not empty.");
            }
        }
        String packageName = ask("package", "Kotlin package", "com.example.app", PACKAGE_NAME, "Use a package such as com.example.app.");
        String manager = choose("package-manager", "Package manager", installed);
        boolean generateTs = confirm("generate-ts", "Generate a TypeScript client from your Ktor routes?", true);
        boolean daisy = confirm("daisy", "Add DaisyUI (includes Tailwind)?", true);
        boolean tailwind = daisy || confirm("tailwind", "Add Tailwind?", true);
        boolean lucide = confirm("lucide", "Add Lucide icons?", true);
        boolean i18n = confirm("i18n", "Add i18n?", false);
        List<String> locales = List.of();
        String strategy = "Cookie";
        if (i18n) {
            locales = Arrays.asList(ask("locales", "Languages, default first", "en,de", LOCALES, "Use tags such as en,de,pt-BR.").split(","));
            strategy = choose("locale-strategy", "How is the language chosen?", List.of("Cookie", "UrlPrefix"));
        }
        boolean git = confirm("git", "Create a git repository?", isOnPath("git"));

        Versions versions = resolveVersions();
        System.out.println();
        System.out.println("Creating " + name + " with ktor-svelte " + versions.release + "...");

        Files.createDirectories(directory);
        writeWrapper(directory, versions);
        Files.writeString(directory.resolve("settings.gradle.kts"), settings(name));
        Files.writeString(directory.resolve("gradle.properties"), "org.gradle.configuration-cache=true\nkotlin.code.style=official\n");
        Files.writeString(directory.resolve(".gitignore"), ".gradle/\n.kotlin/\nbuild/\n.idea/\n*.iml\nnode_modules/\n.svelte-kit/\n.env\n.env.*\n!.env.example\n");
        Files.writeString(directory.resolve("build.gradle.kts"), buildScript(packageName, versions, tailwind, daisy, lucide, i18n, locales, strategy));
        Path source = directory.resolve("src/main/kotlin").resolve(packageName.replace('.', '/'));
        Files.createDirectories(source);
        Files.writeString(source.resolve("Application.kt"), application(packageName, generateTs));
        Files.createDirectories(directory.resolve("src/main/resources"));
        Files.writeString(directory.resolve("src/main/resources/logback.xml"), LOGBACK);
        if (i18n) writeMessages(directory, locales);

        gradle(directory, "svelteInit", "--package-manager=" + manager, "svelteGenerateRunConfigurations");
        Files.writeString(directory.resolve("frontend/src/routes/+page.svelte"), startPage(daisy, tailwind, lucide, i18n));
        if (generateTs) gradle(directory, "svelteGenerateTs");
        if (git) initGit(directory);

        System.out.println();
        System.out.println("Done! Next:");
        System.out.println();
        System.out.println("  cd " + name);
        System.out.println("  " + (WINDOWS ? "gradlew.bat" : "./gradlew") + " svelteDevAll");
        System.out.println();
        System.out.println("Then open http://localhost:8080. In IntelliJ, open the folder and run the Dev configuration.");
    }

    private String ask(String flag, String question, String fallback, Pattern valid, String hint) throws IOException {
        if (flags.containsKey(flag)) {
            String value = flags.get(flag);
            if (!valid.matcher(value).matches()) throw new InstallerException("--" + flag + "=" + value + " is not valid. " + hint);
            return value;
        }
        if (acceptDefaults) return fallback;
        while (true) {
            String answer = prompt(question + " (" + fallback + "): ");
            String value = answer.isEmpty() ? fallback : answer;
            if (valid.matcher(value).matches()) return value;
            System.out.println("  " + hint);
        }
    }

    private String choose(String flag, String question, List<String> options) throws IOException {
        if (flags.containsKey(flag)) {
            String value = flags.get(flag);
            if (!options.contains(value)) throw new InstallerException("--" + flag + " must be one of " + options + ".");
            return value;
        }
        if (acceptDefaults || options.size() == 1) return options.get(0);
        System.out.println(question + ":");
        for (int index = 0; index < options.size(); index++) {
            System.out.println("  " + (index + 1) + ") " + options.get(index));
        }
        while (true) {
            String answer = prompt("Choose (1): ");
            if (answer.isEmpty()) return options.get(0);
            if (options.contains(answer)) return answer;
            try {
                return options.get(Integer.parseInt(answer) - 1);
            } catch (NumberFormatException | IndexOutOfBoundsException failure) {
                System.out.println("  Enter a number from 1 to " + options.size() + ".");
            }
        }
    }

    private boolean confirm(String flag, String question, boolean fallback) throws IOException {
        if (flags.containsKey(flag)) return !flags.get(flag).equals("false");
        if (flags.containsKey("no-" + flag)) return false;
        if (acceptDefaults) return fallback;
        while (true) {
            String answer = prompt(question + (fallback ? " (Y/n): " : " (y/N): ")).toLowerCase(Locale.ROOT);
            if (answer.isEmpty()) return fallback;
            if (answer.equals("y") || answer.equals("yes")) return true;
            if (answer.equals("n") || answer.equals("no")) return false;
            System.out.println("  Answer y or n.");
        }
    }

    private String prompt(String text) throws IOException {
        System.out.print(text);
        System.out.flush();
        String line = input.readLine();
        if (line == null) throw new InstallerException("Input ended before all questions were answered. Add --yes to accept the defaults.");
        return line.trim();
    }

    private Versions resolveVersions() throws Exception {
        String local = flags.get("local-build");
        if (local != null) {
            Path root = Path.of(local).toAbsolutePath();
            Versions versions = parseVersions("0.0.0", Files.readString(root.resolve("gradle/libs.versions.toml")));
            versions.localBuild = root;
            return versions;
        }
        String release = flags.containsKey("version") ? flags.get("version") : latestRelease();
        return parseVersions(release, download(REPOSITORY + "/v" + release + "/gradle/libs.versions.toml"));
    }

    private String latestRelease() throws Exception {
        String metadata = download(METADATA);
        int start = metadata.indexOf("<release>");
        int end = metadata.indexOf("</release>");
        if (start < 0 || end < 0) throw new InstallerException("Could not read the latest version from Maven Central.");
        return metadata.substring(start + "<release>".length(), end).trim();
    }

    private static Versions parseVersions(String release, String catalog) {
        Versions versions = new Versions();
        versions.release = release;
        versions.kotlin = catalogVersion(catalog, "kotlin");
        versions.ktor = catalogVersion(catalog, "ktor");
        versions.logback = catalogVersion(catalog, "logback");
        return versions;
    }

    private static String catalogVersion(String catalog, String key) {
        return catalog
            .lines()
            .filter(line -> line.startsWith(key + " = "))
            .findFirst()
            .map(line -> line.substring(line.indexOf('"') + 1, line.lastIndexOf('"')))
            .orElseThrow(() -> new InstallerException("The release has no " + key + " version."));
    }

    private void writeWrapper(Path directory, Versions versions) throws Exception {
        Files.createDirectories(directory.resolve("gradle/wrapper"));
        for (String file : List.of("gradlew", "gradlew.bat", "gradle/wrapper/gradle-wrapper.jar", "gradle/wrapper/gradle-wrapper.properties")) {
            Path target = directory.resolve(file);
            if (versions.localBuild != null) {
                Files.copy(versions.localBuild.resolve(file), target, StandardCopyOption.REPLACE_EXISTING);
            } else {
                HttpResponse<InputStream> response = get(REPOSITORY + "/v" + versions.release + "/" + file);
                try (InputStream body = response.body()) {
                    Files.copy(body, target, StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }
        directory.resolve("gradlew").toFile().setExecutable(true);
    }

    private String settings(String name) {
        String local = flags.get("local-build");
        String gradlePath = local == null ? null : Path.of(local).toAbsolutePath().toString().replace('\\', '/');
        StringBuilder text = new StringBuilder("pluginManagement {\n");
        if (gradlePath != null) text.append("    includeBuild(\"").append(gradlePath).append("\")\n");
        text.append("    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n    }\n}\n\n");
        text.append("dependencyResolutionManagement {\n    repositories {\n        mavenCentral()\n    }\n}\n\n");
        text.append("rootProject.name = \"").append(name).append("\"\n");
        if (gradlePath != null) text.append("\nincludeBuild(\"").append(gradlePath).append("\")\n");
        return text.toString();
    }

    private static String buildScript(
        String packageName,
        Versions versions,
        boolean tailwind,
        boolean daisy,
        boolean lucide,
        boolean i18n,
        List<String> locales,
        String strategy
    ) {
        StringBuilder libraries = new StringBuilder();
        if (tailwind && !daisy) libraries.append("        tailwind {\n            typography()\n        }\n");
        if (daisy) {
            libraries.append("        tailwind {\n            typography()\n        }\n");
            libraries.append("        daisyUi {\n            themes(DaisyTheme.Light, DaisyTheme.Dark)\n");
            libraries.append("            defaultTheme(DaisyTheme.Light)\n            prefersDark(DaisyTheme.Dark)\n        }\n");
        }
        if (lucide) libraries.append("        lucide()\n");
        if (i18n) {
            String quoted = locales.stream().map(locale -> "\"" + locale + "\"").collect(Collectors.joining(", "));
            libraries.append("        i18n {\n            locales(").append(quoted).append(")\n");
            libraries.append("            defaultLocale = \"").append(locales.get(0)).append("\"\n");
            libraries.append("            strategy = LocaleStrategy.").append(strategy).append("\n        }\n");
        }
        StringBuilder imports = new StringBuilder();
        if (daisy) imports.append("import io.github.nijasc.ktor.svelte.gradle.DaisyTheme\n");
        if (i18n) imports.append("import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy\n");
        if (imports.length() > 0) imports.append("\n");
        String librariesBlock = libraries.length() == 0
            ? ""
            : "svelte {\n    libraries {\n" + libraries + "    }\n}\n\n";
        return imports
            + "plugins {\n"
            + "    kotlin(\"jvm\") version \"" + versions.kotlin + "\"\n"
            + "    kotlin(\"plugin.serialization\") version \"" + versions.kotlin + "\"\n"
            + "    id(\"io.ktor.plugin\") version \"" + versions.ktor + "\"\n"
            + "    application\n"
            + "    id(\"io.github.nijasc.ktor-svelte\") version \"" + versions.release + "\"\n"
            + "}\n\n"
            + "group = \"" + packageName + "\"\n"
            + "version = \"0.1.0\"\n\n"
            + "application {\n    mainClass = \"" + packageName + ".ApplicationKt\"\n}\n\n"
            + "ktor {\n    openApi {\n        enabled = true\n        codeInferenceEnabled = true\n        onlyCommented = false\n    }\n}\n\n"
            + librariesBlock
            + "dependencies {\n"
            + "    implementation(\"io.ktor:ktor-server-netty\")\n"
            + "    implementation(\"ch.qos.logback:logback-classic:" + versions.logback + "\")\n"
            + "}\n";
    }

    private static String application(String packageName, boolean generateTs) {
        String generate = generateTs ? "        generateTs = true\n" : "";
        return "package " + packageName + "\n\n"
            + "import io.github.nijasc.ktor.svelte.Svelte\n"
            + "import io.ktor.server.application.Application\n"
            + "import io.ktor.server.application.install\n"
            + "import io.ktor.server.engine.embeddedServer\n"
            + "import io.ktor.server.netty.Netty\n"
            + "import io.ktor.server.response.respond\n"
            + "import io.ktor.server.routing.get\n"
            + "import io.ktor.server.routing.routing\n"
            + "import kotlinx.serialization.Serializable\n\n"
            + "@Serializable\ndata class Greeting(\n    val message: String,\n)\n\n"
            + "fun main() {\n"
            + "    val port = System.getenv(\"PORT\")?.toInt() ?: 8080\n"
            + "    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)\n"
            + "}\n\n"
            + "fun Application.module() {\n"
            + "    install(Svelte) {\n"
            + generate
            + "        transport {\n            json()\n            compression()\n        }\n"
            + "    }\n\n"
            + "    routing {\n"
            + "        get(\"/api/hello\") {\n"
            + "            call.respond(Greeting(\"Hello from Ktor\"))\n"
            + "        }\n"
            + "    }\n"
            + "}\n";
    }

    private static void writeMessages(Path directory, List<String> locales) throws IOException {
        Path messages = directory.resolve("frontend/messages");
        Files.createDirectories(messages);
        for (String locale : locales) {
            Files.writeString(messages.resolve(locale + ".json"), "{\n  \"welcome\": \"Welcome to your app ({language})\"\n}\n");
        }
    }

    private static String startPage(boolean daisy, boolean tailwind, boolean lucide, boolean i18n) {
        StringBuilder script = new StringBuilder();
        if (lucide) script.append("    import Icon from '#icon';\n");
        if (i18n) script.append("    import { getLocale, m } from '#i18n';\n");
        String scriptBlock = script.length() == 0 ? "" : "<script lang=\"ts\">\n" + script + "</script>\n\n";
        String title = i18n ? "{m.welcome({ language: getLocale() })}" : "Welcome to your app";
        String icon = lucide ? "<Icon name=\"Rocket\" /> " : "";
        String titleClass = tailwind ? " class=\"flex items-center gap-2 text-3xl font-bold\"" : "";
        String mainClass = tailwind ? " class=\"mx-auto max-w-2xl p-8\"" : "";
        String button = daisy ? " class=\"btn btn-primary mt-4\"" : "";
        return scriptBlock
            + "<main" + mainClass + ">\n"
            + "    <h1" + titleClass + ">" + icon + title + "</h1>\n"
            + "    <p>Edit <code>frontend/src/routes/+page.svelte</code>. Your API is at <code>/api/hello</code>.</p>\n"
            + "    <a" + button + " href=\"https://github.com/nijasc/ktor-svelte\">Read the docs</a>\n"
            + "</main>\n";
    }

    private void gradle(Path directory, String... tasks) throws Exception {
        List<String> command = new ArrayList<>();
        if (WINDOWS) {
            command.add(directory.resolve("gradlew.bat").toString());
        } else {
            command.add(directory.resolve("gradlew").toString());
        }
        command.addAll(Arrays.asList(tasks));
        command.add("--console=plain");
        ProcessBuilder builder = new ProcessBuilder(command).directory(directory.toFile()).inheritIO();
        builder.environment().put("PORT", "0");
        int exit = builder.start().waitFor();
        if (exit != 0) {
            throw new InstallerException(
                "Gradle failed while running " + String.join(" ", tasks) + ". The project is in " + directory + "."
                    + " If the ktor-svelte plugin was not found, its release may still be waiting for approval on the Gradle Plugin Portal."
            );
        }
    }

    private static void initGit(Path directory) throws Exception {
        new ProcessBuilder("git", "init", "--quiet").directory(directory.toFile()).inheritIO().start().waitFor();
    }

    private String download(String url) throws Exception {
        HttpResponse<InputStream> response = get(url);
        try (InputStream body = response.body()) {
            return new String(body.readAllBytes());
        }
    }

    private HttpResponse<InputStream> get(String url) throws Exception {
        HttpRequest request = HttpRequest.newBuilder(URI.create(url)).header("User-Agent", "ktor-svelte-installer").build();
        HttpResponse<InputStream> response = http.send(request, HttpResponse.BodyHandlers.ofInputStream());
        if (response.statusCode() != 200) {
            response.body().close();
            throw new InstallerException("Could not download " + url + " (status " + response.statusCode() + ").");
        }
        return response;
    }

    private static boolean isOnPath(String command) {
        String path = System.getenv(WINDOWS ? "Path" : "PATH");
        if (path == null) path = System.getenv("PATH");
        if (path == null) return false;
        List<String> names = WINDOWS ? List.of(command + ".exe", command + ".cmd", command + ".bat") : List.of(command);
        for (String entry : path.split(java.io.File.pathSeparator)) {
            String directory = entry.trim().replace("\"", "");
            if (directory.isEmpty()) continue;
            for (String name : names) {
                if (new java.io.File(directory, name).isFile()) return true;
            }
        }
        return false;
    }

    private static final class Versions {
        String release;
        String kotlin;
        String ktor;
        String logback;
        Path localBuild;
    }

    private static final class InstallerException extends RuntimeException {
        private static final long serialVersionUID = 1L;

        InstallerException(String message) {
            super(message);
        }
    }

    private static final String LOGBACK =
        "<configuration>\n"
            + "    <appender name=\"STDOUT\" class=\"ch.qos.logback.core.ConsoleAppender\">\n"
            + "        <encoder>\n"
            + "            <pattern>%d{HH:mm:ss.SSS} %-5level %logger{20} %msg%n</pattern>\n"
            + "        </encoder>\n"
            + "    </appender>\n"
            + "    <root level=\"INFO\">\n"
            + "        <appender-ref ref=\"STDOUT\" />\n"
            + "    </root>\n"
            + "</configuration>\n";
}
