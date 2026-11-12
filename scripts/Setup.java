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
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HexFormat;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Setup {
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

    private Setup(Map<String, String> flags) {
        this.flags = flags;
        this.acceptDefaults = flags.containsKey("yes");
    }

    public static void main(String[] arguments) {
        try {
            new Setup(parseFlags(arguments)).run();
        } catch (SetupException failure) {
            System.err.println();
            System.err.println("ktor-svelte setup: " + failure.getMessage());
            System.exit(1);
        } catch (Exception failure) {
            System.err.println();
            System.err.println("ktor-svelte setup failed: " + failure);
            System.exit(1);
        }
    }

    private static Map<String, String> parseFlags(String[] arguments) {
        Map<String, String> flags = new HashMap<>();
        for (String argument : arguments) {
            if (!argument.startsWith("--")) throw new SetupException("Unknown argument: " + argument);
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

        List<String> installed = MANAGERS.stream().filter(Setup::isOnPath).collect(Collectors.toList());
        if (installed.isEmpty()) {
            throw new SetupException("No package manager found. Install bun, pnpm, npm or yarn, then run this again.");
        }

        String name = ask("name", "Project name", "my-app", PROJECT_NAME, "Use letters, digits, dashes and underscores.");
        Path directory = Path.of(name).toAbsolutePath();
        if (Files.exists(directory)) {
            try (var entries = Files.list(directory)) {
                if (entries.findAny().isPresent()) throw new SetupException(directory + " already exists and is not empty.");
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
        boolean auth = confirm("auth", "Add sign in with cookie sessions?", false);
        boolean database = confirm("database", "Add a Postgres database with Exposed?", false);
        boolean flyway = database && confirm("flyway", "Add Flyway migrations?", true);
        boolean flatPackages = confirm("idea-ext", "Skip package folders, so IntelliJ treats src/main/kotlin as " + packageName + " (uses the idea-ext plugin)?", true);
        boolean conventions = confirm("conventions", "Add a convention plugin in build-logic, for multi-module projects?", false);
        boolean docker = confirm("docker", "Add a Dockerfile?", true);
        boolean actions = confirm("github-actions", "Add a GitHub Actions workflow?", true);
        boolean git = isOnPath("git") && confirm("git", "Create a git repository?", true);
        Optional<List<String>> idea = findIntellij();
        boolean openIdea = flags.containsKey("open-idea") || (!acceptDefaults && idea.isPresent() && confirm("open-idea", "Open the project in IntelliJ when it is ready?", true));

        Versions versions = resolveVersions();
        System.out.println();
        System.out.println("Creating " + name + " with ktor-svelte " + versions.release + "...");

        Files.createDirectories(directory);
        writeWrapper(directory, versions);
        Files.writeString(directory.resolve("settings.gradle.kts"), settings(name, conventions));
        Files.writeString(directory.resolve("gradle.properties"), "org.gradle.configuration-cache=true\nkotlin.code.style=official\n");
        Files.writeString(directory.resolve(".gitignore"), GITIGNORE);
        Files.writeString(directory.resolve(".editorconfig"), EDITORCONFIG);
        Files.writeString(directory.resolve("gradle/libs.versions.toml"), versionCatalog(versions, auth, database, flyway, flatPackages, conventions));
        Files.writeString(directory.resolve("build.gradle.kts"), buildScript(packageName, auth, database, flyway, flatPackages, conventions, tailwind, daisy, lucide, i18n, locales, strategy));
        if (conventions) writeBuildLogic(directory);
        Files.writeString(directory.resolve(".env.example"), envExample(name, auth, database));
        if (auth || database) Files.writeString(directory.resolve(".env"), localEnv(name, auth, database));
        Files.writeString(directory.resolve("README.md"), projectReadme(name, auth, database, flyway, flatPackages, conventions, docker));
        Path source = flatPackages ? directory.resolve("src/main/kotlin") : directory.resolve("src/main/kotlin").resolve(packageName.replace('.', '/'));
        Files.createDirectories(source);
        Files.writeString(source.resolve("Application.kt"), application(packageName, generateTs, auth, database));
        Files.writeString(source.resolve("Env.kt"), fill(ENV_KT, packageName));
        Files.writeString(source.resolve("Errors.kt"), fill(ERRORS_KT, packageName));
        if (auth) Files.writeString(source.resolve("Auth.kt"), fill(AUTH_KT, packageName));
        if (auth) Files.writeString(source.resolve(database ? "DatabaseUserStore.kt" : "MemoryUserStore.kt"), fill(database ? DATABASE_USER_STORE_KT : MEMORY_USER_STORE_KT, packageName));
        if (database) Files.writeString(source.resolve("Database.kt"), fill(databaseSource(auth, flyway), packageName));
        Files.createDirectories(directory.resolve("src/main/resources"));
        Files.writeString(directory.resolve("src/main/resources/logback.xml"), LOGBACK);
        if (flyway) writeMigration(directory, auth);
        if (i18n) writeMessages(directory, locales);
        if (database) Files.writeString(directory.resolve("compose.yaml"), COMPOSE);
        if (docker) writeDocker(directory, manager);
        if (actions) writeWorkflow(directory, manager);

        gradle(directory, "svelteInit", "--package-manager=" + manager, "svelteGenerateRunConfigurations");
        writeFrontendLinting(directory);
        Files.writeString(directory.resolve("frontend/src/routes/+page.svelte"), startPage(daisy, tailwind, lucide, i18n, auth));
        if (auth) writeAuthPages(directory, daisy, tailwind, i18n);
        installPackages(directory, manager);
        gradle(directory, "svelteRun", "--script=format");
        gradle(directory, "svelteSync");
        if (generateTs) gradle(directory, "svelteGenerateTs");
        if (git) initGit(directory);

        System.out.println();
        System.out.println("Done! Next:");
        System.out.println();
        System.out.println("  cd " + name);
        if (database) System.out.println("  docker compose up -d");
        System.out.println("  " + (WINDOWS ? "gradlew.bat" : "./gradlew") + " svelteDevAll");
        System.out.println();
        System.out.println("Then open http://localhost:8080. In IntelliJ, open the folder and run the Dev configuration.");
        if (openIdea) openInIntellij(idea, directory);
    }

    private static String fill(String template, String packageName) {
        return template.replace("__PACKAGE__", packageName);
    }

    private Optional<List<String>> findIntellij() {
        String home = System.getProperty("user.home");
        List<Path> folders = new ArrayList<>();
        String local = System.getenv("LOCALAPPDATA");
        if (local != null) folders.add(Path.of(local, "JetBrains", "Toolbox", "scripts"));
        folders.add(Path.of(home, ".local", "share", "JetBrains", "Toolbox", "scripts"));
        folders.add(Path.of(home, "Library", "Application Support", "JetBrains", "Toolbox", "scripts"));
        String path = System.getenv(WINDOWS ? "Path" : "PATH");
        if (path != null) {
            for (String entry : path.split(java.io.File.pathSeparator)) {
                String folder = entry.trim().replace("\"", "");
                if (!folder.isEmpty()) folders.add(Path.of(folder));
            }
        }
        List<String> names = WINDOWS ? List.of("idea.cmd", "idea.bat", "idea64.exe") : List.of("idea", "idea.sh");
        for (Path folder : folders) {
            for (String name : names) {
                Path launcher = folder.resolve(name);
                if (!Files.isRegularFile(launcher)) continue;
                String file = launcher.toString();
                return Optional.of(WINDOWS && !name.endsWith(".exe") ? List.of("cmd", "/c", file) : List.of(file));
            }
        }
        if (Files.isDirectory(Path.of("/Applications/IntelliJ IDEA.app"))) {
            return Optional.of(List.of("open", "-na", "IntelliJ IDEA", "--args"));
        }
        if (Files.isDirectory(Path.of("/Applications/IntelliJ IDEA CE.app"))) {
            return Optional.of(List.of("open", "-na", "IntelliJ IDEA CE", "--args"));
        }
        return Optional.empty();
    }

    private static void openInIntellij(Optional<List<String>> idea, Path directory) throws IOException {
        if (idea.isEmpty()) {
            System.out.println("IntelliJ was not found, so open the folder yourself.");
            return;
        }
        List<String> command = new ArrayList<>(idea.get());
        command.add(directory.toString());
        new ProcessBuilder(command)
            .redirectOutput(ProcessBuilder.Redirect.DISCARD)
            .redirectError(ProcessBuilder.Redirect.DISCARD)
            .start();
    }

    private String ask(String flag, String question, String fallback, Pattern valid, String hint) throws IOException {
        if (flags.containsKey(flag)) {
            String value = flags.get(flag);
            if (!valid.matcher(value).matches()) throw new SetupException("--" + flag + "=" + value + " is not valid. " + hint);
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
            if (!options.contains(value)) throw new SetupException("--" + flag + " must be one of " + options + ".");
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
        if (line == null) throw new SetupException("Input ended before all questions were answered. Add --yes to accept the defaults.");
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
        if (start < 0 || end < 0) throw new SetupException("Could not read the latest version from Maven Central.");
        return metadata.substring(start + "<release>".length(), end).trim();
    }

    private static Versions parseVersions(String release, String catalog) {
        Versions versions = new Versions();
        versions.release = release;
        versions.kotlin = catalogVersion(catalog, "kotlin");
        versions.ktor = catalogVersion(catalog, "ktor");
        versions.logback = catalogVersion(catalog, "logback");
        versions.ktlint = catalogVersion(catalog, "ktlint");
        versions.exposed = catalogVersion(catalog, "exposed");
        versions.hikari = catalogVersion(catalog, "hikari");
        versions.postgresql = catalogVersion(catalog, "postgresql");
        versions.flyway = catalogVersion(catalog, "flyway");
        versions.ideaExt = catalogVersion(catalog, "ideaExt");
        return versions;
    }

    private static String catalogVersion(String catalog, String key) {
        return catalog
            .lines()
            .filter(line -> line.startsWith(key + " = "))
            .findFirst()
            .map(line -> line.substring(line.indexOf('"') + 1, line.lastIndexOf('"')))
            .orElseThrow(() -> new SetupException("The release has no " + key + " version."));
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

    private String settings(String name, boolean conventions) {
        String local = flags.get("local-build");
        String gradlePath = local == null ? null : Path.of(local).toAbsolutePath().toString().replace('\\', '/');
        StringBuilder text = new StringBuilder("pluginManagement {\n");
        if (conventions) text.append("    includeBuild(\"build-logic\")\n");
        if (gradlePath != null) text.append("    includeBuild(\"").append(gradlePath).append("\")\n");
        text.append("    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n    }\n}\n\n");
        text.append("dependencyResolutionManagement {\n    repositories {\n        mavenCentral()\n    }\n}\n\n");
        text.append("rootProject.name = \"").append(name).append("\"\n");
        if (gradlePath != null) text.append("\nincludeBuild(\"").append(gradlePath).append("\")\n");
        return text.toString();
    }

    private static void writeBuildLogic(Path directory) throws IOException {
        Path logic = directory.resolve("build-logic");
        Files.createDirectories(logic.resolve("src/main/kotlin"));
        Files.writeString(logic.resolve("settings.gradle.kts"), BUILD_LOGIC_SETTINGS);
        Files.writeString(logic.resolve("build.gradle.kts"), BUILD_LOGIC_BUILD);
        Files.writeString(logic.resolve("src/main/kotlin/kotlin-conventions.gradle.kts"), KOTLIN_CONVENTIONS);
    }

    private static void writeMigration(Path directory, boolean auth) throws IOException {
        Path migrations = directory.resolve("src/main/resources/db/migration");
        Files.createDirectories(migrations);
        String users = auth ? "\nCREATE TABLE users (\n    username VARCHAR(64) PRIMARY KEY,\n    password_hash VARCHAR(255) NOT NULL\n);\n" : "";
        Files.writeString(migrations.resolve("V1__create_tables.sql"), "CREATE TABLE visits (\n    id SERIAL PRIMARY KEY\n);\n" + users);
    }

    private static String databaseSource(boolean auth, boolean flyway) {
        if (!flyway) return DATABASE_KT.replace("__TABLES__", auth ? "Visits, Users" : "Visits");
        return DATABASE_KT
            .replace("import org.jetbrains.exposed.v1.jdbc.SchemaUtils\n", "")
            .replace("import org.jetbrains.exposed.v1.core.Table\n", "import org.flywaydb.core.Flyway\nimport org.jetbrains.exposed.v1.core.Table\n")
            .replace("transaction { SchemaUtils.create(__TABLES__) }", "Flyway\n            .configure()\n            .dataSource(dataSource)\n            .load()\n            .migrate()");
    }

    private static String versionCatalog(Versions versions, boolean auth, boolean database, boolean flyway, boolean flatPackages, boolean conventions) {
        StringBuilder text = new StringBuilder("[versions]\n");
        text.append("kotlin = \"").append(versions.kotlin).append("\"\n");
        text.append("ktor = \"").append(versions.ktor).append("\"\n");
        text.append("ktor-svelte = \"").append(versions.release).append("\"\n");
        text.append("logback = \"").append(versions.logback).append("\"\n");
        text.append("ktlint = \"").append(versions.ktlint).append("\"\n");
        if (database) {
            text.append("exposed = \"").append(versions.exposed).append("\"\n");
            text.append("hikari = \"").append(versions.hikari).append("\"\n");
            text.append("postgresql = \"").append(versions.postgresql).append("\"\n");
        }
        if (flyway) text.append("flyway = \"").append(versions.flyway).append("\"\n");
        if (flatPackages) text.append("ideaExt = \"").append(versions.ideaExt).append("\"\n");
        text.append("\n[libraries]\n");
        if (conventions) {
            text.append("kotlin-gradle-plugin = { module = \"org.jetbrains.kotlin:kotlin-gradle-plugin\", version.ref = \"kotlin\" }\n");
            text.append("kotlin-serialization-plugin = { module = \"org.jetbrains.kotlin:kotlin-serialization\", version.ref = \"kotlin\" }\n");
            text.append("ktlint-gradle-plugin = { module = \"org.jlleitschuh.gradle:ktlint-gradle\", version.ref = \"ktlint\" }\n");
        }
        text.append("ktor-server-netty = { module = \"io.ktor:ktor-server-netty\", version.ref = \"ktor\" }\n");
        text.append("ktor-server-status-pages = { module = \"io.ktor:ktor-server-status-pages\", version.ref = \"ktor\" }\n");
        if (auth) {
            text.append("ktor-server-auth = { module = \"io.ktor:ktor-server-auth\", version.ref = \"ktor\" }\n");
            text.append("ktor-server-sessions = { module = \"io.ktor:ktor-server-sessions\", version.ref = \"ktor\" }\n");
        }
        text.append("logback = { module = \"ch.qos.logback:logback-classic\", version.ref = \"logback\" }\n");
        if (database) {
            text.append("exposed-jdbc = { module = \"org.jetbrains.exposed:exposed-jdbc\", version.ref = \"exposed\" }\n");
            text.append("hikari = { module = \"com.zaxxer:HikariCP\", version.ref = \"hikari\" }\n");
            text.append("postgresql = { module = \"org.postgresql:postgresql\", version.ref = \"postgresql\" }\n");
        }
        if (flyway) {
            text.append("flyway-core = { module = \"org.flywaydb:flyway-core\", version.ref = \"flyway\" }\n");
            text.append("flyway-postgresql = { module = \"org.flywaydb:flyway-database-postgresql\", version.ref = \"flyway\" }\n");
        }
        text.append("\n[plugins]\n");
        if (!conventions) {
            text.append("kotlin-jvm = { id = \"org.jetbrains.kotlin.jvm\", version.ref = \"kotlin\" }\n");
            text.append("kotlin-serialization = { id = \"org.jetbrains.kotlin.plugin.serialization\", version.ref = \"kotlin\" }\n");
            text.append("ktlint = { id = \"org.jlleitschuh.gradle.ktlint\", version.ref = \"ktlint\" }\n");
        }
        if (flatPackages) text.append("idea-ext = { id = \"org.jetbrains.gradle.plugin.idea-ext\", version.ref = \"ideaExt\" }\n");
        text.append("ktor = { id = \"io.ktor.plugin\", version.ref = \"ktor\" }\n");
        text.append("ktor-svelte = { id = \"io.github.nijasc.ktor-svelte\", version.ref = \"ktor-svelte\" }\n");
        return text.toString();
    }

    private static String envExample(String name, boolean auth, boolean database) {
        StringBuilder text = new StringBuilder("PORT=8080\n");
        if (auth) text.append("SESSION_SECRET=\nCOOKIE_SECURE=false\n");
        if (database) {
            String database_name = databaseName(name);
            text.append("DATABASE_URL=jdbc:postgresql://localhost:5432/").append(database_name).append("\n");
            text.append("POSTGRES_DB=").append(database_name).append("\nPOSTGRES_USER=app\nPOSTGRES_PASSWORD=\n");
        }
        return text.toString();
    }

    private static String localEnv(String name, boolean auth, boolean database) {
        return envExample(name, auth, database)
            .replace("SESSION_SECRET=\n", "SESSION_SECRET=" + randomSecret() + "\n")
            .replace("POSTGRES_PASSWORD=\n", "POSTGRES_PASSWORD=" + randomSecret() + "\n");
    }

    private static String databaseName(String name) {
        return name.toLowerCase(Locale.ROOT).replace('-', '_');
    }

    private static String randomSecret() {
        byte[] bytes = new byte[32];
        new SecureRandom().nextBytes(bytes);
        return HexFormat.of().formatHex(bytes);
    }

    private static String projectReadme(String name, boolean auth, boolean database, boolean flyway, boolean flatPackages, boolean conventions, boolean docker) {
        StringBuilder text = new StringBuilder("# ").append(name).append("\n\n");
        text.append("A Ktor app with a SvelteKit frontend, served from one JAR on one port by [ktor-svelte](https://github.com/nijasc/ktor-svelte).\n\n");
        text.append("## Develop\n\n```bash\n");
        if (database) text.append("docker compose up -d\n");
        text.append("./gradlew svelteDevAll\n```\n\n");
        text.append("Then open http://localhost:8080. In IntelliJ, run the `Dev` configuration. On Windows, use `gradlew.bat`.\n\n");
        text.append("## Check\n\n```bash\n./gradlew check svelteCheck\n./gradlew svelteRun --script=lint\n```\n\n");
        text.append("Format with `./gradlew ktlintFormat` and `./gradlew svelteRun --script=format`.\n\n");
        text.append("## Build\n\n```bash\n./gradlew buildFatJar\njava -jar build/libs/").append(name).append("-all.jar\n```\n\n");
        if (docker) {
            text.append("## Docker\n\n```bash\ndocker build -t ").append(name).append(" .\ndocker run -p 8080:8080 --env-file .env ").append(name).append("\n```\n\n");
            if (database) text.append("Inside a container, `localhost` is the container itself, so point `DATABASE_URL` at your database host.\n\n");
        }
        text.append("## Configuration\n\nThe app reads the environment first, then a `.env` file in the working directory. `.env.example` lists every setting, and `.env` is not committed.\n\n");
        text.append("| Setting | Purpose |\n|---|---|\n| `PORT` | HTTP port, 8080 by default |\n");
        if (auth) {
            text.append("| `SESSION_SECRET` | Signs session cookies, at least 32 characters. Without it, a new one is made at each start and everyone is signed out |\n");
            text.append("| `COOKIE_SECURE` | Send the session cookie over HTTPS only. Defaults to `true`, so set `false` only for local HTTP |\n");
        }
        if (database) {
            text.append("| `DATABASE_URL` | JDBC URL of the Postgres database |\n");
            text.append("| `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` | Used by `compose.yaml` and by the app |\n");
        }
        text.append("\n");
        if (auth) {
            text.append("## Sign in\n\n`Auth.kt` has the register, login, logout and current user routes, with passwords hashed by PBKDF2. Wrap your own routes in `authenticate(\"session\")`. ");
            text.append(database ? "Users are stored in Postgres. " : "Users are kept in memory, so they are gone after a restart. Replace `UserStore` before going live. ");
            text.append("Registration is open and login has no rate limit, so restrict both before going live. The pages in `frontend/src/routes/login` and `frontend/src/routes/account` use `frontend/src/lib/auth.ts`.\n\n");
        }
        if (database) {
            text.append("## Database\n\n`docker compose up -d` starts Postgres on this machine, using the settings in `.env`. ");
            text.append(flyway
                ? "`Database.kt` connects when the app starts and Flyway runs any new migration in `src/main/resources/db/migration`. Add a new file for each change and never edit one that has already run. "
                : "`Database.kt` connects when the app starts and creates missing tables, but it does not change existing ones. ");
            text.append("`POST /api/visits` shows the pattern with a small example table, so replace it with your own.\n\n");
        }
        if (flatPackages || conventions) {
            text.append("## Project layout\n\n");
            if (flatPackages) text.append("Kotlin files sit directly in `src/main/kotlin`, without package folders. The `idea-ext` plugin in `build.gradle.kts` sets a package prefix, so IntelliJ creates new files in the right package. Reload the Gradle project if IntelliJ does not pick it up.\n\n");
            if (conventions) text.append("`build-logic` holds the `kotlin-conventions` plugin with the Kotlin and ktlint setup. To add a module, add it to `settings.gradle.kts` and apply `id(\"kotlin-conventions\")` in its build file.\n\n");
        }
        return text.toString();
    }

    private static void writeDocker(Path directory, String manager) throws IOException {
        String install = manager.equals("npm") ? "" : "RUN npm install -g " + manager + "\n";
        Files.writeString(directory.resolve("Dockerfile"), DOCKERFILE.replace("__INSTALL_MANAGER__\n", install));
        Files.writeString(directory.resolve(".dockerignore"), DOCKERIGNORE);
    }

    private static void writeWorkflow(Path directory, String manager) throws IOException {
        String setup = manager.equals("bun")
            ? "      - uses: oven-sh/setup-bun@0c5077e51419868618aeaa5fe8019c62421857d6\n"
            : "      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1\n        with:\n          node-version: 24\n"
                + (manager.equals("npm") ? "" : "      - run: npm install -g " + manager + "\n");
        Files.createDirectories(directory.resolve(".github/workflows"));
        Files.writeString(directory.resolve(".github/workflows/ci.yml"), WORKFLOW.replace("__SETUP_MANAGER__\n", setup));
    }

    private static void writeFrontendLinting(Path directory) throws IOException {
        Path frontend = directory.resolve("frontend");
        Files.writeString(frontend.resolve("eslint.config.js"), ESLINT_CONFIG);
        Files.writeString(frontend.resolve(".prettierrc"), PRETTIER_CONFIG);
        Files.writeString(frontend.resolve(".prettierignore"), PRETTIER_IGNORE);
        Path manifest = frontend.resolve("package.json");
        String json = Files.readString(manifest);
        int scriptsAt = json.indexOf("\"scripts\"");
        String indent = json.substring(json.lastIndexOf('\n', scriptsAt) + 1, scriptsAt).repeat(2);
        String scripts = "\"scripts\": {\n" + indent + "\"lint\": \"prettier --check . && eslint .\",\n" + indent + "\"format\": \"prettier --write .\",\n";
        String dependencies = "\"devDependencies\": {\n" + LINT_PACKAGES.stream().map(entry -> indent + "\"" + entry + "\",\n").collect(Collectors.joining());
        Files.writeString(manifest, json.replace("\"scripts\": {\n", scripts).replace("\"devDependencies\": {\n", dependencies));
    }

    private static void writeAuthPages(Path directory, boolean daisy, boolean tailwind, boolean i18n) throws IOException {
        Path routes = directory.resolve("frontend/src/routes");
        Files.createDirectories(routes.resolve("login"));
        Files.createDirectories(routes.resolve("account"));
        Files.createDirectories(directory.resolve("frontend/src/lib"));
        Files.writeString(directory.resolve("frontend/src/lib/auth.ts"), AUTH_TS);
        String link = i18n ? "    import { localizeHref as link } from '#i18n';\n" : "    const link = (path: string) => path;\n";
        String main = tailwind ? " class=\"mx-auto flex max-w-sm flex-col gap-4 p-8\"" : "";
        String title = tailwind ? " class=\"text-2xl font-bold\"" : "";
        String form = tailwind ? " class=\"flex flex-col gap-2\"" : "";
        String input = daisy ? " class=\"input w-full\"" : "";
        String primary = daisy ? " class=\"btn btn-primary\"" : "";
        String secondary = daisy ? " class=\"btn\"" : "";
        Files.writeString(
            routes.resolve("login/+page.svelte"),
            LOGIN_PAGE.replace("__LINK__\n", link).replace("__MAIN__", main).replace("__TITLE__", title).replace("__FORM__", form)
                .replace("__INPUT__", input).replace("__PRIMARY__", primary).replace("__SECONDARY__", secondary)
        );
        Files.writeString(
            routes.resolve("account/+page.svelte"),
            ACCOUNT_PAGE.replace("__LINK__\n", link).replace("__MAIN__", main).replace("__TITLE__", title).replace("__PRIMARY__", primary)
        );
    }

    private static String buildScript(
        String packageName,
        boolean auth,
        boolean database,
        boolean flyway,
        boolean flatPackages,
        boolean conventions,
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
            libraries.append("        daisyUi {\n            themes(DaisyTheme.ShadcnLight, DaisyTheme.ShadcnDark)\n");
            libraries.append("            defaultTheme(DaisyTheme.ShadcnLight)\n            prefersDark(DaisyTheme.ShadcnDark)\n        }\n");
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
        if (flatPackages) imports.append("import org.jetbrains.gradle.ext.packagePrefix\nimport org.jetbrains.gradle.ext.settings\n");
        if (imports.length() > 0) imports.append("\n");
        String librariesBlock = libraries.length() == 0
            ? ""
            : "svelte {\n    libraries {\n" + libraries + "    }\n}\n\n";
        StringBuilder dependencies = new StringBuilder();
        dependencies.append("    implementation(libs.ktor.server.netty)\n    implementation(libs.ktor.server.status.pages)\n");
        if (auth) dependencies.append("    implementation(libs.ktor.server.auth)\n    implementation(libs.ktor.server.sessions)\n");
        if (database) dependencies.append("    implementation(libs.exposed.jdbc)\n    implementation(libs.hikari)\n    implementation(libs.postgresql)\n");
        if (flyway) dependencies.append("    implementation(libs.flyway.core)\n    runtimeOnly(libs.flyway.postgresql)\n");
        dependencies.append("    implementation(libs.logback)\n");
        return imports
            + "plugins {\n"
            + (conventions
                ? "    id(\"kotlin-conventions\")\n"
                : "    alias(libs.plugins.kotlin.jvm)\n    alias(libs.plugins.kotlin.serialization)\n    alias(libs.plugins.ktlint)\n")
            + "    alias(libs.plugins.ktor)\n"
            + "    application\n"
            + (flatPackages ? "    idea\n    alias(libs.plugins.idea.ext)\n" : "")
            + "    alias(libs.plugins.ktor.svelte)\n"
            + "}\n\n"
            + "group = \"" + packageName + "\"\n"
            + "version = \"0.1.0\"\n\n"
            + "application {\n    mainClass = \"" + packageName + ".ApplicationKt\"\n}\n\n"
            + "ktor {\n    openApi {\n        enabled = true\n        codeInferenceEnabled = true\n        onlyCommented = false\n    }\n}\n\n"
            + (conventions ? "" : "ktlint {\n    filter {\n        exclude { it.file.invariantSeparatorsPath.contains(\"/build/\") }\n    }\n}\n\n")
            + (flatPackages ? "idea {\n    module {\n        settings {\n            packagePrefix[\"src/main/kotlin\"] = \"" + packageName + "\"\n        }\n    }\n}\n\n" : "")
            + (flyway ? "tasks.shadowJar {\n    mergeServiceFiles()\n}\n\n" : "")
            + librariesBlock
            + "dependencies {\n"
            + dependencies
            + "}\n";
    }

    private static String application(String packageName, boolean generateTs, boolean auth, boolean database) {
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
            + "    val port = env(\"PORT\")?.toInt() ?: 8080\n"
            + "    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)\n"
            + "}\n\n"
            + "fun Application.module() {\n"
            + "    install(Svelte) {\n"
            + generate
            + "        transport {\n            json()\n            compression()\n        }\n"
            + "    }\n"
            + "    configureErrors()\n"
            + (database ? "    configureDatabase()\n" : "")
            + (auth ? "    configureAuth()\n" : "")
            + "\n"
            + "    routing {\n"
            + "        get(\"/api/hello\") {\n"
            + "            call.respond(Greeting(\"Hello from Ktor\"))\n"
            + "        }\n"
            + (database ? "        databaseRoutes()\n" : "")
            + (auth ? "        authRoutes(" + (database ? "DatabaseUserStore()" : "MemoryUserStore()") + ")\n" : "")
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

    private static String startPage(boolean daisy, boolean tailwind, boolean lucide, boolean i18n, boolean auth) {
        StringBuilder script = new StringBuilder();
        if (lucide) script.append("    import Icon from '#icon';\n");
        if (i18n) script.append(auth ? "    import { getLocale, localizeHref, m } from '#i18n';\n" : "    import { getLocale, m } from '#i18n';\n");
        String signIn = !auth ? "" : "    <a" + (daisy ? " class=\"btn mt-4\"" : "") + " href=" + (i18n ? "{localizeHref('/login')}" : "\"/login\"") + ">Sign in</a>\n";
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
            + signIn
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
            throw new SetupException(
                "Gradle failed while running " + String.join(" ", tasks) + ". The project is in " + directory + "."
                    + " If the ktor-svelte plugin was not found, its release may still be waiting for approval on the Gradle Plugin Portal."
            );
        }
    }

    private static void installPackages(Path directory, String manager) throws Exception {
        List<String> command = WINDOWS ? List.of("cmd", "/c", manager, "install") : List.of(manager, "install");
        int exit = new ProcessBuilder(command).directory(directory.resolve("frontend").toFile()).inheritIO().start().waitFor();
        if (exit != 0) throw new SetupException(manager + " install failed. The project is in " + directory + ".");
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
        HttpRequest request = HttpRequest.newBuilder(URI.create(url)).header("User-Agent", "ktor-svelte-setup").build();
        HttpResponse<InputStream> response = http.send(request, HttpResponse.BodyHandlers.ofInputStream());
        if (response.statusCode() != 200) {
            response.body().close();
            throw new SetupException("Could not download " + url + " (status " + response.statusCode() + ").");
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
        String ktlint;
        String exposed;
        String hikari;
        String postgresql;
        String flyway;
        String ideaExt;
        Path localBuild;
    }

    private static final class SetupException extends RuntimeException {
        private static final long serialVersionUID = 1L;

        SetupException(String message) {
            super(message);
        }
    }

    private static final List<String> LINT_PACKAGES = List.of(
        "@eslint/js\": \"^10.0.1",
        "eslint\": \"^10.14.0",
        "eslint-config-prettier\": \"^10.1.8",
        "eslint-plugin-svelte\": \"^3.23.1",
        "globals\": \"^17.14.0",
        "prettier\": \"^3.9.10",
        "prettier-plugin-svelte\": \"^4.1.1",
        "typescript-eslint\": \"^8.72.1"
    );

    private static final String BUILD_LOGIC_SETTINGS = """
        dependencyResolutionManagement {
            repositories {
                gradlePluginPortal()
                mavenCentral()
            }
            versionCatalogs {
                create("libs") {
                    from(files("../gradle/libs.versions.toml"))
                }
            }
        }

        rootProject.name = "build-logic"
        """;

    private static final String BUILD_LOGIC_BUILD = """
        plugins {
            `kotlin-dsl`
        }

        dependencies {
            implementation(libs.kotlin.gradle.plugin)
            implementation(libs.kotlin.serialization.plugin)
            implementation(libs.ktlint.gradle.plugin)
        }
        """;

    private static final String KOTLIN_CONVENTIONS = """
        plugins {
            id("org.jetbrains.kotlin.jvm")
            id("org.jetbrains.kotlin.plugin.serialization")
            id("org.jlleitschuh.gradle.ktlint")
        }

        ktlint {
            filter {
                exclude { it.file.invariantSeparatorsPath.contains("/build/") }
            }
        }
        """;

    private static final String GITIGNORE = """
        .gradle/
        .kotlin/
        build/
        out/
        .idea/
        *.iml
        .vscode/
        node_modules/
        .svelte-kit/
        .env
        .env.*
        !.env.example
        *.log
        .DS_Store
        """;

    private static final String EDITORCONFIG = """
        root = true

        [*]
        charset = utf-8
        end_of_line = lf
        insert_final_newline = true
        trim_trailing_whitespace = true
        indent_style = space
        indent_size = 4

        [*.{yml,yaml,json}]
        indent_size = 2

        [*.{kt,kts}]
        ktlint_code_style = ktlint_official
        max_line_length = 140

        [*.bat]
        end_of_line = crlf
        """;

    private static final String ENV_KT = """
        package __PACKAGE__

        import java.io.File

        private val localEnv: Map<String, String> by lazy {
            val file = File(".env")
            if (!file.isFile) {
                emptyMap()
            } else {
                file
                    .readLines()
                    .filter { "=" in it && !it.trimStart().startsWith("#") }
                    .associate { it.substringBefore('=').trim() to it.substringAfter('=').trim() }
                    .filterValues { it.isNotEmpty() }
            }
        }

        fun env(name: String): String? = System.getenv(name) ?: localEnv[name]

        fun requireEnv(name: String): String = env(name) ?: error("Set $name in the environment or in .env. See .env.example.")
        """;

    private static final String ERRORS_KT = """
        package __PACKAGE__

        import io.github.nijasc.ktor.svelte.ValidationException
        import io.ktor.http.HttpStatusCode
        import io.ktor.server.application.Application
        import io.ktor.server.application.install
        import io.ktor.server.application.log
        import io.ktor.server.plugins.BadRequestException
        import io.ktor.server.plugins.NotFoundException
        import io.ktor.server.plugins.statuspages.StatusPages
        import io.ktor.server.response.respond
        import kotlinx.serialization.Serializable

        @Serializable
        data class Problem(
            val message: String,
        )

        class ApiException(
            val status: HttpStatusCode,
            override val message: String,
        ) : RuntimeException(message)

        fun Application.configureErrors() {
            install(StatusPages) {
                exception<ApiException> { call, cause ->
                    call.respond(cause.status, Problem(cause.message))
                }
                exception<BadRequestException> { call, _ ->
                    call.respond(HttpStatusCode.BadRequest, Problem("The request is not valid."))
                }
                exception<NotFoundException> { call, _ ->
                    call.respond(HttpStatusCode.NotFound, Problem("That does not exist."))
                }
                exception<Exception> { call, cause ->
                    if (cause is ValidationException) throw cause
                    call.application.log.error("Request failed", cause)
                    call.respond(HttpStatusCode.InternalServerError, Problem("Something went wrong."))
                }
            }
        }
        """;

    private static final String AUTH_KT = """
        package __PACKAGE__

        import io.github.nijasc.ktor.svelte.Validated
        import io.github.nijasc.ktor.svelte.Validator
        import io.ktor.http.HttpStatusCode
        import io.ktor.openapi.JsonSchema
        import io.ktor.server.application.Application
        import io.ktor.server.application.install
        import io.ktor.server.application.log
        import io.ktor.server.auth.Authentication
        import io.ktor.server.auth.authenticate
        import io.ktor.server.auth.principal
        import io.ktor.server.auth.session
        import io.ktor.server.request.receive
        import io.ktor.server.response.respond
        import io.ktor.server.routing.Route
        import io.ktor.server.routing.get
        import io.ktor.server.routing.post
        import io.ktor.server.routing.route
        import io.ktor.server.sessions.SessionTransportTransformerMessageAuthentication
        import io.ktor.server.sessions.Sessions
        import io.ktor.server.sessions.clear
        import io.ktor.server.sessions.cookie
        import io.ktor.server.sessions.sessions
        import io.ktor.server.sessions.set
        import kotlinx.coroutines.Dispatchers
        import kotlinx.coroutines.withContext
        import kotlinx.serialization.Serializable
        import java.security.MessageDigest
        import java.security.SecureRandom
        import java.util.Base64
        import javax.crypto.SecretKeyFactory
        import javax.crypto.spec.PBEKeySpec

        private const val MIN_SECRET_LENGTH = 32
        private const val MIN_PASSWORD_LENGTH = 12
        private const val MAX_PASSWORD_LENGTH = 200
        private const val MAX_USERNAME_LENGTH = 64
        private const val SESSION_SECONDS = 60L * 60 * 24 * 7
        private const val HASH_ITERATIONS = 600_000
        private const val HASH_BITS = 256
        private const val SALT_BYTES = 16

        @Serializable
        data class UserSession(
            val username: String,
        )

        @Serializable
        data class CurrentUser(
            val username: String,
        )

        @Serializable
        data class Credentials(
            @JsonSchema.MaxLength(MAX_USERNAME_LENGTH)
            val username: String,
            @JsonSchema.MinLength(MIN_PASSWORD_LENGTH)
            @JsonSchema.MaxLength(MAX_PASSWORD_LENGTH)
            val password: String,
        ) : Validated {
            override fun Validator.rules() {
                check(::username, username.isNotBlank()) { "Pick a username." }
            }
        }

        interface UserStore {
            suspend fun create(
                username: String,
                passwordHash: String,
            ): Boolean

            suspend fun passwordHash(username: String): String?
        }

        fun Application.configureAuth() {
            val secret = env("SESSION_SECRET") ?: temporarySecret()
            require(secret.length >= MIN_SECRET_LENGTH) { "SESSION_SECRET needs at least $MIN_SECRET_LENGTH characters." }
            install(Sessions) {
                cookie<UserSession>("session") {
                    cookie.path = "/"
                    cookie.httpOnly = true
                    cookie.secure = env("COOKIE_SECURE")?.toBoolean() ?: true
                    cookie.maxAgeInSeconds = SESSION_SECONDS
                    cookie.extensions["SameSite"] = "Lax"
                    transform(SessionTransportTransformerMessageAuthentication(secret.toByteArray()))
                }
            }
            install(Authentication) {
                session<UserSession>("session") {
                    validate { it }
                    challenge { call.respond(HttpStatusCode.Unauthorized, Problem("Sign in first.")) }
                }
            }
        }

        fun Route.authRoutes(users: UserStore) {
            val unknownUserHash = newPasswordHash(randomToken())
            route("/api/auth") {
                post("/register") {
                    val credentials = call.receive<Credentials>()
                    if (!users.create(credentials.username, hashPassword(credentials.password))) {
                        call.respond(HttpStatusCode.Conflict, Problem("That username is taken."))
                        return@post
                    }
                    call.sessions.set(UserSession(credentials.username))
                    call.respond(HttpStatusCode.Created, CurrentUser(credentials.username))
                }
                post("/login") {
                    val credentials = call.receive<Credentials>()
                    val stored = users.passwordHash(credentials.username)
                    val matches = verifyPassword(credentials.password, stored ?: unknownUserHash)
                    if (stored == null || !matches) {
                        call.respond(HttpStatusCode.Unauthorized, Problem("Wrong username or password."))
                        return@post
                    }
                    call.sessions.set(UserSession(credentials.username))
                    call.respond(CurrentUser(credentials.username))
                }
                post("/logout") {
                    call.sessions.clear<UserSession>()
                    call.respond(HttpStatusCode.NoContent)
                }
                authenticate("session") {
                    get("/me") {
                        call.respond(CurrentUser(call.principal<UserSession>()!!.username))
                    }
                }
            }
        }

        private fun Application.temporarySecret(): String {
            log.warn("SESSION_SECRET is not set, so everyone is signed out when the app restarts.")
            return randomToken()
        }

        private fun randomToken(): String {
            val bytes = ByteArray(MIN_SECRET_LENGTH)
            SecureRandom().nextBytes(bytes)
            return Base64.getEncoder().encodeToString(bytes)
        }

        private fun newPasswordHash(password: String): String {
            val salt = ByteArray(SALT_BYTES)
            SecureRandom().nextBytes(salt)
            val encoder = Base64.getEncoder()
            return "$HASH_ITERATIONS:${encoder.encodeToString(salt)}:${encoder.encodeToString(derive(password, salt, HASH_ITERATIONS))}"
        }

        private suspend fun hashPassword(password: String): String = withContext(Dispatchers.Default) { newPasswordHash(password) }

        private suspend fun verifyPassword(
            password: String,
            stored: String,
        ): Boolean =
            withContext(Dispatchers.Default) {
                val (iterations, salt, hash) = stored.split(':')
                val decoder = Base64.getDecoder()
                MessageDigest.isEqual(decoder.decode(hash), derive(password, decoder.decode(salt), iterations.toInt()))
            }

        private fun derive(
            password: String,
            salt: ByteArray,
            iterations: Int,
        ): ByteArray =
            SecretKeyFactory
                .getInstance("PBKDF2WithHmacSHA256")
                .generateSecret(PBEKeySpec(password.toCharArray(), salt, iterations, HASH_BITS))
                .encoded
        """;

    private static final String MEMORY_USER_STORE_KT = """
        package __PACKAGE__

        import java.util.concurrent.ConcurrentHashMap

        class MemoryUserStore : UserStore {
            private val users = ConcurrentHashMap<String, String>()

            override suspend fun create(
                username: String,
                passwordHash: String,
            ): Boolean = users.putIfAbsent(username, passwordHash) == null

            override suspend fun passwordHash(username: String): String? = users[username]
        }
        """;

    private static final String DATABASE_USER_STORE_KT = """
        package __PACKAGE__

        import kotlinx.coroutines.Dispatchers
        import kotlinx.coroutines.withContext
        import org.jetbrains.exposed.v1.core.Table
        import org.jetbrains.exposed.v1.core.eq
        import org.jetbrains.exposed.v1.jdbc.insertIgnore
        import org.jetbrains.exposed.v1.jdbc.selectAll
        import org.jetbrains.exposed.v1.jdbc.transactions.transaction

        private const val MAX_USERNAME_COLUMN = 64
        private const val MAX_HASH_COLUMN = 255

        object Users : Table("users") {
            val username = varchar("username", MAX_USERNAME_COLUMN)
            val passwordHash = varchar("password_hash", MAX_HASH_COLUMN)

            override val primaryKey = PrimaryKey(username)
        }

        class DatabaseUserStore : UserStore {
            override suspend fun create(
                username: String,
                passwordHash: String,
            ): Boolean =
                withContext(Dispatchers.IO) {
                    transaction {
                        Users
                            .insertIgnore {
                                it[Users.username] = username
                                it[Users.passwordHash] = passwordHash
                            }.insertedCount > 0
                    }
                }

            override suspend fun passwordHash(username: String): String? =
                withContext(Dispatchers.IO) {
                    transaction {
                        Users
                            .selectAll()
                            .where { Users.username eq username }
                            .singleOrNull()
                            ?.get(Users.passwordHash)
                    }
                }
        }
        """;

    private static final String DATABASE_KT = """
        package __PACKAGE__

        import com.zaxxer.hikari.HikariConfig
        import com.zaxxer.hikari.HikariDataSource
        import io.ktor.http.HttpStatusCode
        import io.ktor.server.application.Application
        import io.ktor.server.application.ApplicationStarted
        import io.ktor.server.application.ApplicationStopped
        import io.ktor.server.response.respond
        import io.ktor.server.routing.Route
        import io.ktor.server.routing.post
        import kotlinx.coroutines.Dispatchers
        import kotlinx.coroutines.withContext
        import kotlinx.serialization.Serializable
        import org.jetbrains.exposed.v1.core.Table
        import org.jetbrains.exposed.v1.jdbc.Database
        import org.jetbrains.exposed.v1.jdbc.SchemaUtils
        import org.jetbrains.exposed.v1.jdbc.insert
        import org.jetbrains.exposed.v1.jdbc.selectAll
        import org.jetbrains.exposed.v1.jdbc.transactions.transaction

        private const val MAX_POOL_SIZE = 10
        private const val CONNECTION_TIMEOUT_MILLIS = 5_000L

        object Visits : Table("visits") {
            val id = integer("id").autoIncrement()

            override val primaryKey = PrimaryKey(id)
        }

        @Serializable
        data class VisitCount(
            val visits: Long,
        )

        fun Application.configureDatabase() {
            monitor.subscribe(ApplicationStarted) {
                val dataSource =
                    HikariDataSource(
                        HikariConfig().apply {
                            jdbcUrl = requireEnv("DATABASE_URL")
                            username = requireEnv("POSTGRES_USER")
                            password = requireEnv("POSTGRES_PASSWORD")
                            maximumPoolSize = MAX_POOL_SIZE
                            connectionTimeout = CONNECTION_TIMEOUT_MILLIS
                        },
                    )
                monitor.subscribe(ApplicationStopped) { dataSource.close() }
                Database.connect(dataSource)
                transaction { SchemaUtils.create(__TABLES__) }
            }
        }

        fun Route.databaseRoutes() {
            post("/api/visits") {
                val count =
                    withContext(Dispatchers.IO) {
                        transaction {
                            Visits.insert { }
                            Visits.selectAll().count()
                        }
                    }
                call.respond(HttpStatusCode.Created, VisitCount(count))
            }
        }
        """;

    private static final String COMPOSE = """
        services:
          db:
            image: postgres:18-alpine
            restart: unless-stopped
            ports:
              - "127.0.0.1:5432:5432"
            environment:
              POSTGRES_DB: ${POSTGRES_DB}
              POSTGRES_USER: ${POSTGRES_USER}
              POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
            volumes:
              - db-data:/var/lib/postgresql

        volumes:
          db-data:
        """;

    private static final String DOCKERFILE = """
        FROM eclipse-temurin:21-jdk AS build
        COPY --from=node:24-slim /usr/local/bin/node /usr/local/bin/node
        COPY --from=node:24-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
        RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
        __INSTALL_MANAGER__
        WORKDIR /app
        COPY . .
        RUN chmod +x gradlew && ./gradlew buildFatJar --no-daemon --console=plain
        RUN cp build/libs/*-all.jar /app.jar

        FROM eclipse-temurin:21-jre
        RUN useradd --system --no-create-home app
        COPY --from=build /app.jar /app.jar
        USER app
        ENV PORT=8080
        EXPOSE 8080
        ENTRYPOINT ["java", "-jar", "/app.jar"]
        """;

    private static final String DOCKERIGNORE = """
        .git
        .gradle
        .idea
        .kotlin
        .env
        build
        frontend/node_modules
        frontend/.svelte-kit
        frontend/build
        """;

    private static final String WORKFLOW = """
        name: CI

        on:
          push:
            branches: [main]
          pull_request:

        permissions:
          contents: read

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1
              - uses: actions/setup-java@b843ebf9b913146b38da2eaa7aeddf76074ae1ad
                with:
                  distribution: temurin
                  java-version: 21
              - uses: gradle/actions/setup-gradle@8da46b539cd8fe6ab27ca75128919a18d757604c
        __SETUP_MANAGER__
              - run: chmod +x gradlew
              - run: ./gradlew check buildFatJar svelteCheck
              - run: ./gradlew svelteRun --script=lint
        """;

    private static final String ESLINT_CONFIG = """
        import js from '@eslint/js';
        import prettier from 'eslint-config-prettier';
        import svelte from 'eslint-plugin-svelte';
        import globals from 'globals';
        import ts from 'typescript-eslint';

        export default ts.config(
            {
                ignores: [
                    'build/',
                    '.svelte-kit/',
                    'src/lib/api/',
                    'src/lib/ktor-svelte/',
                    'vite.config.ts',
                    'src/hooks.ts',
                    'src/hooks.server.ts'
                ]
            },
            js.configs.recommended,
            ...ts.configs.recommended,
            ...svelte.configs.recommended,
            prettier,
            ...svelte.configs.prettier,
            { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
            { files: ['**/*.svelte', '**/*.svelte.ts'], languageOptions: { parserOptions: { parser: ts.parser } } },
            { rules: { 'svelte/no-navigation-without-resolve': 'off' } }
        );
        """;

    private static final String PRETTIER_CONFIG = """
        {
          "tabWidth": 4,
          "printWidth": 120,
          "singleQuote": true,
          "trailingComma": "none",
          "plugins": ["prettier-plugin-svelte"],
          "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
        }
        """;

    private static final String PRETTIER_IGNORE = """
        build/
        .svelte-kit/
        node_modules/
        messages/
        src/lib/api/
        src/lib/ktor-svelte/
        vite.config.ts
        src/hooks.ts
        src/hooks.server.ts
        package.json
        bun.lock
        package-lock.json
        pnpm-lock.yaml
        yarn.lock
        """;

    private static final String AUTH_TS = """
        export type User = { username: string };

        type ErrorBody = { message?: string; fields?: Record<string, string[]> };

        async function request(path: string, init: RequestInit = {}): Promise<Response> {
            const response = await fetch(`/api/auth/${path}`, init);
            if (response.ok) return response;
            const body: ErrorBody = await response.json().catch(() => ({}));
            const details = Object.values(body.fields ?? {}).flat();
            throw new Error(details.length > 0 ? details.join(' ') : (body.message ?? 'Something went wrong.'));
        }

        function send(path: string, username: string, password: string): Promise<Response> {
            return request(path, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
        }

        export async function signIn(username: string, password: string): Promise<void> {
            await send('login', username, password);
        }

        export async function signUp(username: string, password: string): Promise<void> {
            await send('register', username, password);
        }

        export async function signOut(): Promise<void> {
            await request('logout', { method: 'POST' });
        }

        export async function currentUser(): Promise<User | null> {
            const response = await fetch('/api/auth/me');
            return response.ok ? response.json() : null;
        }
        """;

    private static final String LOGIN_PAGE = """
        <script lang="ts">
            import { goto } from '$app/navigation';
            import { signIn, signUp } from '#lib/auth.ts';
        __LINK__

            let username = $state('');
            let password = $state('');
            let error = $state('');

            async function submit(action: typeof signIn) {
                error = '';
                try {
                    await action(username, password);
                    await goto(link('/account'));
                } catch (failure) {
                    error = failure instanceof Error ? failure.message : 'Something went wrong.';
                }
            }
        </script>

        <main__MAIN__>
            <h1__TITLE__>Sign in</h1>
            <form__FORM__ onsubmit={(event) => { event.preventDefault(); submit(signIn); }}>
                <input__INPUT__ bind:value={username} placeholder="Username" autocomplete="username" required />
                <input__INPUT__ bind:value={password} type="password" placeholder="Password" autocomplete="current-password" required />
                {#if error}<p role="alert">{error}</p>{/if}
                <button__PRIMARY__ type="submit">Sign in</button>
                <button__SECONDARY__ type="button" onclick={() => submit(signUp)}>Create account</button>
            </form>
        </main>
        """;

    private static final String ACCOUNT_PAGE = """
        <script lang="ts">
            import { goto } from '$app/navigation';
            import { onMount } from 'svelte';
            import { currentUser, signOut, type User } from '#lib/auth.ts';
        __LINK__

            let user = $state<User | null>(null);

            onMount(async () => {
                user = await currentUser();
                if (!user) await goto(link('/login'));
            });

            async function leave() {
                await signOut();
                await goto(link('/login'));
            }
        </script>

        <main__MAIN__>
            <h1__TITLE__>Account</h1>
            {#if user}
                <p>Signed in as {user.username}.</p>
                <button__PRIMARY__ onclick={leave}>Sign out</button>
            {/if}
        </main>
        """;

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
