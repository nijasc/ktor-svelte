import java.io.BufferedReader;
import java.io.Console;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.Charset;
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
import java.util.concurrent.Callable;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Setup {
    private static final String REPOSITORY = "https://raw.githubusercontent.com/nijasc/ktor-svelte";
    private static final String METADATA =
        "https://repo1.maven.org/maven2/io/github/nijasc/ktor-svelte-server/maven-metadata.xml";
    private static final Pattern PROJECT_NAME = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");
    private static final Pattern PACKAGE_NAME = Pattern.compile("[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)*");
    private static final Pattern LOCALES = Pattern.compile("[a-z]{2,3}(-[A-Za-z0-9]{2,8})*(,[a-z]{2,3}(-[A-Za-z0-9]{2,8})*)*");
    private static final Pattern CONTEXTS = Pattern.compile("[a-z][a-z0-9]*(,[a-z][a-z0-9]*)*");
    private static final Pattern AGGREGATE = Pattern.compile("[A-Z][A-Za-z0-9]*");
    private static final Pattern BRANCH_NAME = Pattern.compile("[A-Za-z0-9][A-Za-z0-9._/-]*");
    private static final List<String> RESERVED_CONTEXTS = List.of("build", "frontend", "gradle", "src", "shared", "kernel");
    private static final List<String> LAYERS = List.of("domain", "application", "adapters");
    private static final List<String> MANAGERS = List.of("bun", "pnpm", "npm", "yarn");
    private static final boolean WINDOWS = System.getProperty("os.name", "").startsWith("Windows");
    private static final Ui UI = new Ui();
    private static final Keys KEYS = new Keys();

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
            UI.failure(failure.getMessage());
            System.exit(1);
        } catch (Exception failure) {
            UI.failure("Setup failed: " + failure);
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
        long started = System.nanoTime();
        UI.banner();

        List<String> installed = MANAGERS.stream().filter(Setup::isOnPath).collect(Collectors.toList());
        if (installed.isEmpty()) {
            throw new SetupException("No package manager found. Install bun, pnpm, npm or yarn, then run this again.");
        }

        UI.section("Project");
        String name = ask("name", "Project name", "my-app", PROJECT_NAME, "Use letters, digits, dashes and underscores.");
        Path directory = Path.of(name).toAbsolutePath();
        if (Files.exists(directory)) {
            try (var entries = Files.list(directory)) {
                if (entries.findAny().isPresent()) throw new SetupException(directory + " already exists and is not empty.");
            }
        }
        String packageName = ask("package", "Kotlin package", "com.example.app", PACKAGE_NAME, "Use a package such as com.example.app.");
        String manager = choose("package-manager", "Package manager", installed);
        UI.section("Frontend");
        boolean generateTs = confirm("generate-ts", "Generate a TypeScript client from your Ktor routes?", true);
        boolean daisy = confirm("daisy", "Add DaisyUI (includes Tailwind)?", true);
        boolean tailwind = daisy || confirm("tailwind", "Add Tailwind?", true);
        boolean lucide = confirm("lucide", "Add Lucide icons?", true);
        boolean i18n = confirm("i18n", "Add i18n?", false);
        List<String> locales = i18n
            ? Arrays.asList(ask("locales", "Languages, default first", "en,de", LOCALES, "Use tags such as en,de,pt-BR.").split(","))
            : List.of();
        String strategy = i18n ? choose("locale-strategy", "How is the language chosen?", List.of("Cookie", "UrlPrefix")) : "Cookie";
        UI.section("Backend");
        boolean auth = confirm("auth", "Add sign in with cookie sessions?", false);
        boolean database = confirm("database", "Add a Postgres database with Exposed?", false);
        boolean flyway = database && confirm("flyway", "Add Flyway migrations?", true);
        boolean exposedTime = database && confirm("exposed-time", "Add Exposed dates and times (timestamp, date and datetime columns)?", true);
        UI.section("Architecture");
        Hexagon hexagon = confirm("hexagonal", "Split the backend into domain driven, hexagonal modules?", false) ? askHexagon() : null;
        boolean conventions = hexagon != null || confirm("conventions", "Add a convention plugin in build-logic, for multi-module projects?", false);
        UI.section("Workflow");
        boolean flatPackages = confirm("idea-ext", "Skip package folders, so IntelliJ treats src/main/kotlin as " + packageName + " (uses the idea-ext plugin)?", true);
        boolean actions = confirm("github-actions", "Add a GitHub Actions workflow?", true);
        boolean releasePlease = actions && confirm("release-please", "Add release-please, which sets the version and writes releases from your commit messages?", false);
        boolean commitCheck = confirm("conventional-commits", "Check commit messages for Conventional Commits in a local git hook?", releasePlease);
        boolean dependabot = confirm("dependabot", "Add Dependabot, which opens a pull request for dependency updates every week?", false);
        Railway railway = confirm("railway", "Deploy to Railway, with the infrastructure as code in .railway/railway.ts?", false) ? askRailway(releasePlease) : null;
        boolean docker = railway != null || confirm("docker", "Add a Dockerfile?", true);
        if (railway != null && flags.containsKey("no-docker")) UI.note("Railway builds the Dockerfile, so it is added anyway.");
        boolean agents = confirm("agents", "Prepare the project for agentic usage (AGENTS.md, CLAUDE.md and agent permissions)?", true);
        Extras extras = new Extras(agents, railway, exposedTime);
        boolean liveTemplates = confirm("live-templates", "Install the ktor-svelte live templates into IntelliJ and WebStorm?", true);
        boolean git = isOnPath("git") && confirm("git", "Create a git repository?", true);
        Optional<List<String>> idea = findIntellij();
        boolean openIdea = flags.containsKey("open-idea") || (!acceptDefaults && idea.isPresent() && confirm("open-idea", "Open the project in IntelliJ when it is ready?", true));

        UI.section("Creating " + name);
        Versions versions = UI.step(flags.containsKey("local-build") ? "Reading the local build" : "Finding the latest release", this::resolveVersions);
        UI.note("ktor-svelte " + versions.release);
        newerRelease(versions.release).ifPresent(latest -> UI.warn(
            "ktor-svelte " + latest + " is out. Leave out --version to use it, or pass --version=" + latest + "."));

        if (flags.containsKey("dry-run")) {
            Path preview = Files.createTempDirectory("ktor-svelte-dry-run");
            try {
                Path planned = preview.resolve(name);
                UI.step("Planning the project files", () -> {
                    writeProjectFiles(planned, name, packageName, manager, versions, generateTs, daisy, tailwind, lucide, i18n, locales, strategy,
                        auth, database, flyway, flatPackages, hexagon, conventions, docker, actions, releasePlease, commitCheck, dependabot, extras);
                    return null;
                });
                UI.section("It writes");
                UI.tree(planned, name);
                UI.section("Then it runs");
                UI.item("svelteInit: the SvelteKit app in frontend/ and the IntelliJ run configurations");
                if (liveTemplates) UI.item("svelteLiveTemplates --install: the live templates in IntelliJ and WebStorm");
                UI.item("the start page, ESLint and Prettier" + (auth ? ", and the sign in pages" : ""));
                UI.item(manager + " install: the frontend packages");
                UI.item("svelteRun --script=format and svelteSync: formatted sources and the generated frontend files");
                if (generateTs) UI.item("svelteGenerateTs: the TypeScript client in frontend/src/lib/api");
                if (git) UI.item("git init" + (commitCheck ? ", with the commit-msg hook turned on" : ""));
                if (openIdea) UI.item("IntelliJ, with the project open");
            } finally {
                deleteRecursively(preview);
            }
            UI.finishDryRun(name);
            return;
        }

        UI.step("Writing the project files", () -> {
            writeProjectFiles(directory, name, packageName, manager, versions, generateTs, daisy, tailwind, lucide, i18n, locales, strategy,
                auth, database, flyway, flatPackages, hexagon, conventions, docker, actions, releasePlease, commitCheck, dependabot, extras);
            return null;
        });

        gradle(directory, "Creating the SvelteKit app", "svelteInit", "--package-manager=" + manager, "svelteGenerateRunConfigurations");
        if (liveTemplates) gradle(directory, "Installing the live templates", "svelteLiveTemplates", "--install");
        writeFrontendLinting(directory, tailwind || lucide || i18n);
        Files.writeString(directory.resolve("frontend/src/routes/+page.svelte"), startPage(daisy, tailwind, lucide, i18n, auth, generateTs, database, hexagon));
        if (auth) writeAuthPages(directory, daisy, tailwind, i18n);
        installPackages(directory, manager);
        gradle(directory, "Formatting the frontend", "svelteRun", "--script=format");
        gradle(directory, "Syncing the frontend libraries", "svelteSync");
        if (generateTs) gradle(directory, "Generating the TypeScript client", "svelteGenerateTs");
        if (git) UI.step("Creating the git repository", () -> {
            initGit(directory, commitCheck);
            return null;
        });

        List<String> next = new ArrayList<>();
        next.add("cd " + name);
        if (database) next.add("docker compose up -d");
        next.add((WINDOWS ? "gradlew.bat" : "./gradlew") + " svelteDevAll");
        UI.done(name, System.nanoTime() - started, next, "Then open http://localhost:8080. In IntelliJ, open the folder and run the Dev configuration.");
        if (openIdea) openInIntellij(idea, directory);
    }

    private void writeProjectFiles(
        Path directory, String name, String packageName, String manager, Versions versions, boolean generateTs, boolean daisy, boolean tailwind,
        boolean lucide, boolean i18n, List<String> locales, String strategy, boolean auth, boolean database, boolean flyway, boolean flatPackages,
        Hexagon hexagon, boolean conventions, boolean docker, boolean actions, boolean releasePlease, boolean commitCheck, boolean dependabot, Extras extras
    ) throws Exception {
        Files.createDirectories(directory);
        writeWrapper(directory, versions);
        Files.writeString(directory.resolve("settings.gradle.kts"), settings(name, conventions, hexagon));
        Files.writeString(directory.resolve("gradle.properties"), "org.gradle.configuration-cache=true\nkotlin.code.style=official\n");
        Files.writeString(directory.resolve(".gitignore"), GITIGNORE);
        Files.writeString(directory.resolve(".editorconfig"), EDITORCONFIG);
        Files.writeString(directory.resolve("gradle/libs.versions.toml"), versionCatalog(versions, auth, database, flyway, flatPackages, conventions, hexagon, extras.exposedTime()));
        Files.writeString(directory.resolve("build.gradle.kts"), buildScript(packageName, auth, database, flyway, flatPackages, conventions, tailwind, daisy, lucide, i18n, locales, strategy, hexagon, releasePlease)
            .replace("    implementation(libs.exposed.jdbc)\n",
                extras.exposedTime() ? "    implementation(libs.exposed.jdbc)\n    implementation(libs.exposed.kotlin.datetime)\n" : "    implementation(libs.exposed.jdbc)\n"));
        if (conventions) writeBuildLogic(directory, hexagon != null);
        if (hexagon != null) writeHexagon(directory, packageName, hexagon, database, extras.exposedTime());
        Files.writeString(directory.resolve(".env.example"), envExample(name, auth, database));
        if (auth || database) Files.writeString(directory.resolve(".env"), localEnv(name, auth, database));
        Files.writeString(directory.resolve("README.md"), projectReadme(name, auth, database, flyway, flatPackages, conventions, docker, hexagon, releasePlease, commitCheck, dependabot, extras.railway(), extras.exposedTime()));
        if (extras.agents()) {
            AgentGuide guide = new AgentGuide(name, packageName, manager, flatPackages, generateTs, tailwind || lucide || i18n, i18n, auth, database, flyway,
                hexagon, docker, actions, releasePlease, commitCheck, dependabot, extras.railway(), extras.exposedTime());
            writeAgentFiles(directory, guide);
        }
        Path source = flatPackages ? directory.resolve("src/main/kotlin") : directory.resolve("src/main/kotlin").resolve(packageName.replace('.', '/'));
        Files.createDirectories(source);
        Files.writeString(source.resolve("Application.kt"), application(packageName, generateTs, auth, database, hexagon, extras.railway() != null));
        Files.writeString(source.resolve("Env.kt"), fill(ENV_KT, packageName));
        Files.writeString(source.resolve("Errors.kt"), errorsSource(packageName, hexagon));
        if (auth) Files.writeString(source.resolve("Auth.kt"), fill(AUTH_KT, packageName));
        if (auth) Files.writeString(source.resolve(database ? "DatabaseUserStore.kt" : "MemoryUserStore.kt"), fill(database ? DATABASE_USER_STORE_KT : MEMORY_USER_STORE_KT, packageName));
        if (database) Files.writeString(source.resolve("Database.kt"), fill(databaseSource(packageName, auth, flyway, hexagon, extras.exposedTime()), packageName));
        Files.createDirectories(directory.resolve("src/main/resources"));
        Files.writeString(directory.resolve("src/main/resources/logback.xml"), LOGBACK);
        if (flyway) writeMigration(directory, auth, hexagon, extras.exposedTime());
        if (i18n) writeMessages(directory, locales);
        if (database) Files.writeString(directory.resolve("compose.yaml"), COMPOSE);
        if (docker) writeDocker(directory, manager);
        if (actions) writeWorkflow(directory, manager);
        if (dependabot) writeDependabot(directory, manager, actions);
        if (releasePlease) writeReleasePlease(directory, name, extras.railway());
        if (extras.railway() != null) writeRailway(directory, name, auth, database, extras.railway());
        if (commitCheck) writeCommitHook(directory);
    }

    private static void deleteRecursively(Path root) throws IOException {
        if (!Files.exists(root)) return;
        try (var paths = Files.walk(root)) {
            for (Path path : paths.sorted(java.util.Comparator.reverseOrder()).collect(Collectors.toList())) Files.delete(path);
        }
    }

    private static String fill(String template, String packageName) {
        return template.replace("__PACKAGE__", packageName);
    }

    private Hexagon askHexagon() throws IOException {
        List<String> names = Arrays.asList(ask("contexts", "Bounded contexts, comma separated", "orders", CONTEXTS, "Use lowercase names such as catalog,orders.").split(","));
        if (names.stream().distinct().count() != names.size()) throw new SetupException("Each bounded context needs its own name.");
        for (String context : names) {
            if (RESERVED_CONTEXTS.contains(context)) throw new SetupException("A bounded context cannot be called " + context + ". Pick another name.");
        }
        List<BoundedContext> contexts = new ArrayList<>();
        for (String context : names) {
            String aggregate = ask("aggregate-" + context, "Main aggregate of " + context, defaultAggregate(context), AGGREGATE, "Use a class name such as Order.");
            if (contexts.stream().anyMatch(other -> other.aggregate().equals(aggregate))) {
                throw new SetupException("Two contexts cannot both have an aggregate called " + aggregate + ".");
            }
            contexts.add(new BoundedContext(context, aggregate));
        }
        boolean layered = choose("module-layout", "Modules per context (layers: domain, application and adapters modules, single: one module with a package per layer)", List.of("layers", "single")).equals("layers");
        boolean kernel = confirm("shared-kernel", "Add a shared kernel module for code every context uses?", false);
        return new Hexagon(contexts, layered, kernel);
    }

    private Railway askRailway(boolean releasePlease) throws IOException {
        List<String> moments = releasePlease ? List.of("release", "main", "branch") : List.of("main", "release", "branch");
        String recommended = releasePlease ? "release is recommended with release-please" : "release, main or another branch";
        String deployOn = choose("deploy-on", "When should it deploy? (" + recommended + ")", moments);
        String branch = deployOn.equals("branch")
            ? ask("deploy-branch", "Branch that deploys", "production", BRANCH_NAME, "Use a branch name such as production.")
            : null;
        return new Railway(deployOn, branch, releasePlease);
    }

    private static String defaultAggregate(String context) {
        String singular = context.length() > 3 && context.endsWith("s") && !context.endsWith("ss") ? context.substring(0, context.length() - 1) : context;
        return Character.toUpperCase(singular.charAt(0)) + singular.substring(1);
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
            UI.note("IntelliJ was not found, so open the folder yourself.");
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
            UI.answered(question, value, 0);
            return value;
        }
        if (acceptDefaults) {
            UI.answered(question, fallback, 0);
            return fallback;
        }
        int lines = 0;
        while (true) {
            String answer = prompt(UI.question(question, fallback));
            lines++;
            String value = answer.isEmpty() ? fallback : answer;
            if (valid.matcher(value).matches()) {
                UI.answered(question, value, lines);
                return value;
            }
            UI.hint(hint);
            lines++;
        }
    }

    private String choose(String flag, String question, List<String> options) throws IOException {
        if (flags.containsKey(flag)) {
            String value = flags.get(flag);
            if (!options.contains(value)) throw new SetupException("--" + flag + " must be one of " + options + ".");
            UI.answered(question, value, 0);
            return value;
        }
        if (acceptDefaults || options.size() == 1) {
            UI.answered(question, options.get(0), 0);
            return options.get(0);
        }
        if (KEYS.available()) {
            String picked = UI.menu(question, options, KEYS);
            UI.answered(question, picked, options.size() + 1);
            return picked;
        }
        UI.choices(question, options);
        int lines = options.size() + 1;
        while (true) {
            String answer = prompt(UI.question("Choose a number", "1"));
            lines++;
            String value = null;
            if (answer.isEmpty()) value = options.get(0);
            else if (options.contains(answer)) value = answer;
            else {
                try {
                    value = options.get(Integer.parseInt(answer) - 1);
                } catch (NumberFormatException | IndexOutOfBoundsException failure) {
                    UI.hint("Enter a number from 1 to " + options.size() + ".");
                    lines++;
                }
            }
            if (value != null) {
                UI.answered(question, value, lines);
                return value;
            }
        }
    }

    private boolean confirm(String flag, String question, boolean fallback) throws IOException {
        Boolean preset = null;
        if (flags.containsKey(flag)) preset = !flags.get(flag).equals("false");
        else if (flags.containsKey("no-" + flag)) preset = false;
        else if (acceptDefaults) preset = fallback;
        if (preset != null) {
            UI.answered(question, preset ? "Yes" : "No", 0);
            return preset;
        }
        if (KEYS.available()) {
            boolean picked = UI.toggle(question, fallback, KEYS);
            UI.answered(question, picked ? "Yes" : "No", 1);
            return picked;
        }
        int lines = 0;
        while (true) {
            String answer = prompt(UI.question(question, fallback ? "Y/n" : "y/N")).toLowerCase(Locale.ROOT);
            lines++;
            Boolean value = null;
            if (answer.isEmpty()) value = fallback;
            else if (answer.equals("y") || answer.equals("yes")) value = true;
            else if (answer.equals("n") || answer.equals("no")) value = false;
            if (value != null) {
                UI.answered(question, value ? "Yes" : "No", lines);
                return value;
            }
            UI.hint("Answer y or n.");
            lines++;
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

    private Optional<String> newerRelease(String release) {
        if (!flags.containsKey("version") || flags.containsKey("local-build")) return Optional.empty();
        try {
            String latest = latestRelease();
            return compareVersions(latest, release) > 0 ? Optional.of(latest) : Optional.empty();
        } catch (Exception unreachable) {
            return Optional.empty();
        }
    }

    static int compareVersions(String left, String right) {
        String[] leftParts = left.split("[.-]");
        String[] rightParts = right.split("[.-]");
        for (int index = 0; index < Math.max(leftParts.length, rightParts.length); index++) {
            String leftPart = index < leftParts.length ? leftParts[index] : "0";
            String rightPart = index < rightParts.length ? rightParts[index] : "0";
            boolean leftNumber = leftPart.chars().allMatch(Character::isDigit);
            boolean rightNumber = rightPart.chars().allMatch(Character::isDigit);
            int result = leftNumber && rightNumber
                ? Long.compare(Long.parseLong(leftPart), Long.parseLong(rightPart))
                : leftNumber != rightNumber ? (leftNumber ? 1 : -1) : leftPart.compareTo(rightPart);
            if (result != 0) return result;
        }
        return 0;
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

    private String settings(String name, boolean conventions, Hexagon hexagon) {
        String base = baseSettings(name, conventions);
        if (hexagon == null) return base;
        StringBuilder text = new StringBuilder(base).append("\n");
        text.append("enableFeaturePreview(\"TYPESAFE_PROJECT_ACCESSORS\")\n\n");
        if (hexagon.layered()) {
            text.append("fun boundedContext(name: String) {\n");
            text.append("    listOf(\"domain\", \"application\", \"adapters\").forEach { layer ->\n");
            text.append("        include(\"$name-$layer\")\n");
            text.append("        project(\":$name-$layer\").projectDir = file(\"$name/$layer\")\n");
            text.append("    }\n}\n\n");
            if (hexagon.kernel()) text.append("include(\"shared-kernel\")\n");
            for (BoundedContext context : hexagon.contexts()) text.append("boundedContext(\"").append(context.name()).append("\")\n");
        } else {
            List<String> modules = new ArrayList<>();
            if (hexagon.kernel()) modules.add("\"shared-kernel\"");
            hexagon.contexts().forEach(context -> modules.add("\"" + context.name() + "\""));
            text.append("include(").append(String.join(", ", modules)).append(")\n");
        }
        return text.toString();
    }

    private String baseSettings(String name, boolean conventions) {
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

    private static void writeHexagon(Path directory, String packageName, Hexagon hexagon, boolean database, boolean exposedTime) throws IOException {
        if (hexagon.kernel()) {
            Path kernel = directory.resolve("shared-kernel");
            writeModuleBuild(kernel, false, List.of());
            Path source = packageFolder(kernel, packageName + ".kernel");
            Files.writeString(source.resolve("DomainException.kt"), kotlinFile(packageName + ".kernel", List.of(), DOMAIN_EXCEPTION_KT));
        }
        for (BoundedContext context : hexagon.contexts()) {
            String base = packageName + "." + context.name();
            Path domain = hexagon.layered() ? directory.resolve(context.name()).resolve("domain") : directory.resolve(context.name());
            Path application = hexagon.layered() ? directory.resolve(context.name()).resolve("application") : domain;
            Path adapters = hexagon.layered() ? directory.resolve(context.name()).resolve("adapters") : domain;
            List<String> adapterLibraries = new ArrayList<>(List.of("implementation(libs.ktor.server.core)", "implementation(libs.ktor.svelte.server)"));
            if (database) adapterLibraries.add("implementation(libs.exposed.jdbc)");
            if (exposedTime) adapterLibraries.add("implementation(libs.exposed.kotlin.datetime)");
            if (hexagon.layered()) {
                writeModuleBuild(domain, false, hexagon.kernel() ? List.of("api(projects.sharedKernel)") : List.of());
                writeModuleBuild(application, false, List.of("api(projects." + accessor(context.name() + "-domain") + ")"));
                List<String> adapterDependencies = new ArrayList<>();
                adapterDependencies.add("api(projects." + accessor(context.name() + "-application") + ")");
                adapterDependencies.addAll(adapterLibraries);
                writeModuleBuild(adapters, true, adapterDependencies);
            } else {
                List<String> dependencies = new ArrayList<>();
                if (hexagon.kernel()) dependencies.add("api(projects.sharedKernel)");
                dependencies.addAll(adapterLibraries);
                writeModuleBuild(domain, true, dependencies);
            }
            String aggregate = context.aggregate();
            String variable = Character.toLowerCase(aggregate.charAt(0)) + aggregate.substring(1);
            String names = "__AGGREGATE__";
            Path domainSource = packageFolder(domain, base + ".domain");
            String invariant = hexagon.kernel()
                ? "        if (name.isBlank()) throw DomainException(\"" + aggregate + " needs a name.\")\n"
                : "        require(name.isNotBlank()) { \"" + aggregate + " needs a name.\" }\n";
            Files.writeString(
                domainSource.resolve(aggregate + ".kt"),
                kotlinFile(base + ".domain", hexagon.kernel() ? List.of(packageName + ".kernel.DomainException") : List.of(), AGGREGATE_KT.replace("__INVARIANT__\n", invariant).replace(names, aggregate)));
            Path applicationSource = packageFolder(application, base + ".application");
            Files.writeString(
                applicationSource.resolve(aggregate + "Repository.kt"),
                kotlinFile(base + ".application", List.of(base + ".domain." + aggregate), REPOSITORY_KT.replace(names, aggregate).replace("__VARIABLE__", variable)));
            Files.writeString(
                applicationSource.resolve(aggregate + "Service.kt"),
                kotlinFile(
                    base + ".application",
                    List.of(base + ".domain." + aggregate, base + ".domain." + aggregate + "Id", "java.util.UUID"),
                    SERVICE_KT.replace(names, aggregate).replace("__VARIABLE__", variable)));
            Path web = packageFolder(adapters, base + ".adapters.web");
            Files.writeString(
                web.resolve(aggregate + "Routes.kt"),
                kotlinFile(
                    base + ".adapters.web",
                    List.of(
                        "io.github.nijasc.ktor.svelte.Validated",
                        "io.github.nijasc.ktor.svelte.Validator",
                        "io.ktor.http.HttpStatusCode",
                        "io.ktor.openapi.JsonSchema",
                        "io.ktor.server.request.receive",
                        "io.ktor.server.response.respond",
                        "io.ktor.server.routing.Route",
                        "io.ktor.server.routing.get",
                        "io.ktor.server.routing.post",
                        "io.ktor.server.routing.route",
                        "kotlinx.serialization.Serializable",
                        base + ".application." + aggregate + "Service",
                        base + ".domain." + aggregate),
                    ROUTES_KT.replace(names, aggregate).replace("__CONTEXT__", context.name())));
            Path persistence = packageFolder(adapters, base + ".adapters.persistence");
            List<String> repositoryImports = List.of(base + ".application." + aggregate + "Repository", base + ".domain." + aggregate);
            if (database) {
                List<String> imports = new ArrayList<>(repositoryImports);
                imports.addAll(List.of(
                    base + ".domain." + aggregate + "Id",
                    "kotlinx.coroutines.Dispatchers",
                    "kotlinx.coroutines.withContext",
                    "org.jetbrains.exposed.v1.core.Table",
                    "org.jetbrains.exposed.v1.jdbc.selectAll",
                    "org.jetbrains.exposed.v1.jdbc.transactions.transaction",
                    "org.jetbrains.exposed.v1.jdbc.upsert"));
                Files.writeString(
                    persistence.resolve("Exposed" + aggregate + "Repository.kt"),
                    kotlinFile(base + ".adapters.persistence", imports, EXPOSED_REPOSITORY_KT.replace(names, aggregate).replace("__VARIABLE__", variable).replace("__TABLE__", tableName(context))));
            } else {
                List<String> imports = new ArrayList<>(repositoryImports);
                imports.add(base + ".domain." + aggregate + "Id");
                imports.add("java.util.concurrent.ConcurrentHashMap");
                Files.writeString(
                    persistence.resolve("InMemory" + aggregate + "Repository.kt"),
                    kotlinFile(base + ".adapters.persistence", imports, MEMORY_REPOSITORY_KT.replace(names, aggregate).replace("__VARIABLE__", variable)));
            }
        }
    }

    private static String tableName(BoundedContext context) {
        return context.name() + "_" + context.aggregate().replaceAll("([a-z0-9])([A-Z])", "$1_$2").toLowerCase(Locale.ROOT);
    }

    private static String accessor(String projectName) {
        StringBuilder text = new StringBuilder();
        boolean upper = false;
        for (char character : projectName.toCharArray()) {
            if (character == '-') {
                upper = true;
            } else {
                text.append(upper ? Character.toUpperCase(character) : character);
                upper = false;
            }
        }
        return text.toString();
    }

    private static List<String> rootModules(Hexagon hexagon) {
        return hexagon.contexts().stream()
            .map(context -> "implementation(projects." + accessor(hexagon.layered() ? context.name() + "-adapters" : context.name()) + ")")
            .collect(Collectors.toList());
    }

    private static Path packageFolder(Path module, String packageName) throws IOException {
        Path folder = module.resolve("src/main/kotlin").resolve(packageName.replace('.', '/'));
        Files.createDirectories(folder);
        return folder;
    }

    private static void writeModuleBuild(Path module, boolean ktor, List<String> dependencies) throws IOException {
        Files.createDirectories(module);
        StringBuilder text = new StringBuilder("plugins {\n    id(\"").append(ktor ? "ktor-routes-conventions" : "kotlin-conventions").append("\")\n}\n");
        if (!dependencies.isEmpty()) {
            text.append("\ndependencies {\n");
            dependencies.forEach(dependency -> text.append("    ").append(dependency).append("\n"));
            text.append("}\n");
        }
        Files.writeString(module.resolve("build.gradle.kts"), text.toString());
    }

    private static String kotlinFile(String packageName, List<String> imports, String body) {
        StringBuilder text = new StringBuilder("package ").append(packageName).append("\n\n");
        List<String> sorted = sortImports(imports);
        if (!sorted.isEmpty()) {
            sorted.forEach(name -> text.append("import ").append(name).append("\n"));
            text.append("\n");
        }
        return text.append(body).toString();
    }

    private static List<String> sortImports(List<String> imports) {
        List<String> others = new ArrayList<>();
        List<String> java = new ArrayList<>();
        List<String> javax = new ArrayList<>();
        List<String> kotlin = new ArrayList<>();
        for (String name : imports.stream().distinct().sorted().collect(Collectors.toList())) {
            if (name.startsWith("java.")) java.add(name);
            else if (name.startsWith("javax.")) javax.add(name);
            else if (name.startsWith("kotlin.")) kotlin.add(name);
            else others.add(name);
        }
        List<String> result = new ArrayList<>(others);
        result.addAll(java);
        result.addAll(javax);
        result.addAll(kotlin);
        return result;
    }

    private static String mergeImports(String source, List<String> extra) {
        List<String> lines = source.lines().collect(Collectors.toList());
        List<String> imports = new ArrayList<>(extra);
        int first = -1;
        int last = -1;
        for (int index = 0; index < lines.size(); index++) {
            if (lines.get(index).startsWith("import ")) {
                if (first < 0) first = index;
                last = index;
                imports.add(lines.get(index).substring("import ".length()));
            }
        }
        List<String> result = new ArrayList<>(lines.subList(0, first));
        sortImports(imports).forEach(name -> result.add("import " + name));
        result.addAll(lines.subList(last + 1, lines.size()));
        return String.join("\n", result) + "\n";
    }

    private static void writeReleasePlease(Path directory, String name, Railway railway) throws IOException {
        Files.writeString(directory.resolve("version.txt"), "0.1.0\n");
        Files.writeString(directory.resolve(".release-please-manifest.json"), "{\n  \".\": \"0.1.0\"\n}\n");
        Files.writeString(directory.resolve("release-please-config.json"), RELEASE_PLEASE_CONFIG.replace("__NAME__", name));
        Files.createDirectories(directory.resolve(".github/workflows"));
        String workflow = railway != null && railway.fromReleasePlease()
            ? RELEASE_WORKFLOW.replace("      - uses: googleapis/", "      - id: release\n        uses: googleapis/")
                .replace("    runs-on: ubuntu-latest\n", "    runs-on: ubuntu-latest\n    outputs:\n"
                    + "      release_created: ${{ steps.release.outputs.release_created }}\n"
                    + "      tag_name: ${{ steps.release.outputs.tag_name }}\n")
                + RELEASE_DEPLOY_JOB
            : RELEASE_WORKFLOW;
        Files.writeString(directory.resolve(".github/workflows/release.yml"), workflow);
    }

    private static void writeRailway(Path directory, String name, boolean auth, boolean database, Railway railway) throws IOException {
        Path folder = directory.resolve(".railway");
        Files.createDirectories(folder);
        Files.writeString(folder.resolve("package.json"), RAILWAY_PACKAGE.replace("__NAME__", name));
        Files.writeString(folder.resolve("railway.ts"), railwayConfig(name, auth, database));
        Files.createDirectories(directory.resolve(".github/workflows"));
        Files.writeString(directory.resolve(".github/workflows/railway-config.yml"), RAILWAY_CONFIG_WORKFLOW);
        String trigger = switch (railway.deployOn()) {
            case "release" -> railway.releasePlease()
                ? "  workflow_call:\n    inputs:\n      ref:\n        required: true\n        type: string\n"
                : "  release:\n    types: [published]\n";
            case "branch" -> "  push:\n    branches: [" + railway.branch() + "]\n";
            default -> "  push:\n    branches: [main]\n";
        };
        String checkout = railway.fromReleasePlease() ? "        with:\n          ref: ${{ inputs.ref }}\n          persist-credentials: false\n" : "        with:\n          persist-credentials: false\n";
        Files.writeString(
            directory.resolve(".github/workflows/deploy.yml"),
            DEPLOY_WORKFLOW.replace("__TRIGGER__\n", trigger).replace("__CHECKOUT__\n", checkout).replace("__NAME__", name));
    }

    private static String railwayConfig(String name, boolean auth, boolean database) {
        List<String> imports = new ArrayList<>(List.of("defineRailway", "project", "service"));
        if (database) imports.add("postgres");
        if (auth) imports.add("preserve");
        StringBuilder env = new StringBuilder();
        if (database) env.append("            DATABASE_URL: db.env.DATABASE_URL,\n");
        if (auth) env.append("            SESSION_SECRET: preserve(),\n            COOKIE_SECURE: 'true',\n");
        StringBuilder text = new StringBuilder("import { ")
            .append(imports.stream().sorted().collect(Collectors.joining(", ")))
            .append(" } from 'railway/iac';\n\nexport default defineRailway(() => {\n");
        if (database) text.append("    const db = postgres('postgres');\n");
        text.append("    const app = service('").append(name).append("', {\n");
        text.append("        healthcheck: '/_ktor-svelte/health'");
        if (env.length() > 0) text.append(",\n        env: {\n").append(env).append("        }");
        text.append(",\n    });\n\n");
        text.append("    return project('").append(name).append("', {\n");
        text.append("        resources: [").append(database ? "db, app" : "app").append("],\n    });\n});\n");
        return text.toString();
    }

    private static void writeAgentFiles(Path directory, AgentGuide guide) throws IOException {
        Files.writeString(directory.resolve("AGENTS.md"), agentGuide(guide));
        Files.writeString(directory.resolve("CLAUDE.md"), "@AGENTS.md\n");
        Files.createDirectories(directory.resolve(".claude"));
        Files.writeString(directory.resolve(".claude/settings.json"), agentSettings(guide.manager()));
    }

    private static String agentSettings(String manager) {
        List<String> allowed = List.of(
            "Bash(./gradlew:*)",
            "Bash(gradlew.bat:*)",
            "Bash(" + manager + " install)",
            "Bash(" + manager + " run:*)",
            "Bash(git status)",
            "Bash(git diff:*)",
            "Bash(git log:*)");
        return "{\n"
            + "  \"$schema\": \"https://json.schemastore.org/claude-code-settings.json\",\n"
            + "  \"permissions\": {\n"
            + "    \"allow\": [\n"
            + allowed.stream().map(rule -> "      \"" + rule + "\"").collect(Collectors.joining(",\n")) + "\n"
            + "    ],\n"
            + "    \"deny\": [\n"
            + "      \"Read(./.env)\"\n"
            + "    ]\n"
            + "  }\n"
            + "}\n";
    }

    private static String agentGuide(AgentGuide guide) {
        String source = guide.flatPackages() ? "src/main/kotlin" : "src/main/kotlin/" + guide.packageName().replace('.', '/');
        StringBuilder text = new StringBuilder("# ").append(guide.name()).append("\n\n");
        text.append("A Ktor backend and a SvelteKit frontend, served from one JAR on one port by [ktor-svelte](https://nijasc.github.io/ktor-svelte). ");
        text.append("The Kotlin package is `").append(guide.packageName()).append("`, and the frontend uses ").append(guide.manager()).append(".\n\n");
        if (guide.libraryGuide()) {
            text.append("Read `frontend/src/lib/ktor-svelte/AGENTS.md` before frontend work. It is generated, always current, and lists the helpers and components this project has.\n\n");
        }

        text.append("## Commands\n\n");
        text.append("Run them from the project root. On Windows, use `gradlew.bat` instead of `./gradlew`.\n\n");
        text.append("| Task | Command |\n|---|---|\n");
        text.append("| Run everything for development, then open http://localhost:8080 | `./gradlew svelteDevAll` |\n");
        if (guide.database()) text.append("| Start Postgres first | `docker compose up -d` |\n");
        text.append("| Kotlin tests and ktlint | `./gradlew check` |\n");
        text.append("| Frontend type check | `./gradlew svelteCheck` |\n");
        text.append("| Frontend lint | `./gradlew svelteRun --script=lint` |\n");
        text.append("| Format everything | `./gradlew ktlintFormat` and `./gradlew svelteRun --script=format` |\n");
        if (guide.generateTs()) text.append("| Regenerate the TypeScript client after changing a route or a DTO | `./gradlew svelteGenerateTs` |\n");
        text.append("| Regenerate frontend files after changing `svelte { }` in `build.gradle.kts` | `./gradlew svelteSync` |\n");
        if (guide.flyway()) text.append("| Write the next migration after changing a table | `./gradlew generateMigrations` |\n");
        text.append("| Build the JAR | `./gradlew buildFatJar` |\n");
        if (guide.docker()) text.append("| Build the container image | `docker build -t ").append(guide.name()).append(" .` |\n");
        text.append("| Find out why something does not work | `./gradlew svelteDoctor` |\n\n");
        text.append("Add frontend packages with `").append(guide.manager()).append("` in `frontend/`. Gradle runs the package manager for every other task.\n\n");

        text.append("## Where things are\n\n");
        text.append("- `").append(source).append("/Application.kt`: starts Ktor, installs ktor-svelte and registers the routes.\n");
        text.append("- `").append(source).append("/Env.kt`: `env()` and `requireEnv()` read the environment, then `.env`.\n");
        text.append("- `").append(source).append("/Errors.kt`: turns exceptions into JSON problems. Throw `ApiException(status, message)` for an error the user should see.\n");
        if (guide.auth()) text.append("- `").append(source).append("/Auth.kt`: sessions, register, login and logout. Wrap protected routes in `authenticate(\"session\")`.\n");
        if (guide.database()) text.append("- `").append(source).append("/Database.kt`: the connection pool and Exposed").append(guide.flyway() ? ", with Flyway migrations in `src/main/resources/db/migration`" : "").append(".\n");
        if (guide.hexagon() != null) {
            String contexts = guide.hexagon().contexts().stream().map(context -> "`" + context.name() + "`").collect(Collectors.joining(", "));
            text.append("- Bounded contexts: ").append(contexts).append(", each in its own folder. See Architecture below.\n");
        }
        text.append("- `frontend/src/routes`: the pages. `frontend/src/lib`: your own frontend code.\n");
        if (guide.i18n()) text.append("- `frontend/messages/<locale>.json`: the texts. Use `m.key()` in Svelte and `call.messages` in Kotlin.\n");
        text.append("- `build.gradle.kts`: dependencies and the `svelte { }` block, which configures frontend libraries. `gradle/libs.versions.toml`: every version.\n");
        text.append("- `.env.example`: every setting the app reads. `.env` holds local secrets and is never committed or printed.\n\n");

        text.append("## How the backend and frontend fit together\n\n");
        text.append("- API routes live under `/api`. Every other path is the SvelteKit app, built as static files.\n");
        if (guide.generateTs()) {
            text.append("- The frontend calls the API only through the generated client: `import { api } from '#api'`, then `await api.notes.list()`. Do not call `fetch` for `/api` by hand.\n");
            text.append("- Request and response bodies are `@Serializable` Kotlin classes. Their types, `empty()`, `bounds` and `validate()` appear in `#api` after `svelteGenerateTs`, which also runs when the app restarts in development. Commit the generated files.\n");
            text.append("- Put limits on DTO properties with `@JsonSchema` annotations such as `@JsonSchema.MaxLength(200)`, and extra rules with `Validated`. The server and the browser then check the same rules.\n");
        } else {
            text.append("- Request and response bodies are `@Serializable` Kotlin classes. The frontend calls them with `fetch('/api/...')`.\n");
        }
        text.append("- Keep business rules in Kotlin. Svelte components show data and collect input.\n\n");

        if (guide.hexagon() != null) {
            text.append("## Architecture\n\n");
            text.append("The backend is split into bounded contexts, each a hexagon:\n\n");
            text.append("- `domain`: aggregates and their rules. No Ktor, no Exposed, no serialization.\n");
            text.append("- `application`: use cases and the ports they need, such as repository interfaces.\n");
            text.append("- `adapters`: `web` for Ktor routes and DTOs, `persistence` for repositories.\n");
            text.append("- The root project only wires adapters into use cases in `Application.kt`.\n\n");
            text.append(guide.hexagon().layered()
                ? "Each layer is its own Gradle module, so a wrong import does not compile. "
                : "Each context is one module with a package per layer, so keep to these rules by hand. ");
            text.append("Never let a context use another context's adapters or tables. Route modules apply `ktor-routes-conventions`, so their DTOs reach the TypeScript client. ");
            text.append("To add a context, copy an existing one and register it in `settings.gradle.kts` and the root `build.gradle.kts`.\n\n");
        }

        if (guide.database()) {
            text.append("## Database\n\n");
            text.append(guide.flyway()
                ? "Tables change only through migrations. Never edit a migration that has run. After changing an Exposed table, run `./gradlew generateMigrations` and review the new file.\n\n"
                : "Missing tables are created when the app starts, but existing ones are never changed. Add Flyway before you need to change a table that holds data.\n\n");
            if (guide.exposedTime()) {
                text.append("For dates and times, use the columns from `org.jetbrains.exposed.v1.datetime`: `timestamp` for a moment as `kotlin.time.Instant`, ");
                text.append("`date` for a `kotlinx.datetime.LocalDate`, `datetime` for a `LocalDateTime`. Use the same types in DTOs, and the TypeScript client gets `IsoDateTime` and `IsoDate`.\n\n");
            }
        }

        if (guide.railway() != null) {
            text.append("## Deployment\n\n");
            text.append("The app runs on Railway and deploys on ").append(guide.railway().trigger()).append(" through `.github/workflows/deploy.yml`. ");
            text.append("The infrastructure is code in `.railway/railway.ts`: change services, databases and variables there, never in the Railway dashboard. ");
            text.append("A pull request that touches `.railway/` gets a plan comment, and merging applies it. Run `railway config plan` locally to preview a change. ");
            text.append("Secrets stay in Railway: `preserve()` keeps their values, so never write a secret into the file.\n\n");
        }

        text.append("## Files you must not edit\n\n");
        if (guide.generateTs()) text.append("- `frontend/src/lib/api/`: the generated client. Change the Kotlin side and regenerate.\n");
        text.append("- `frontend/src/lib/ktor-svelte/`, `frontend/vite.config.ts` and any file that starts with \"Generated by ktor-svelte\". Change `build.gradle.kts` and run `./gradlew svelteSync`. Your own Vite settings go in `frontend/vite.user.ts`.\n");
        if (guide.releasePlease()) text.append("- `version.txt`, `.release-please-manifest.json` and `CHANGELOG.md`: release-please owns them.\n");
        text.append("\n");

        text.append("## Conventions\n\n");
        text.append("- Kotlin follows ktlint's official style with lines up to 140 characters. The frontend uses Prettier and ESLint.\n");
        text.append("- Keep versions in `gradle/libs.versions.toml` and reference them as `libs.*`.\n");
        text.append("- Read a new setting with `env()` or `requireEnv()`, and list it in `.env.example` and the README in the same change.\n");
        if (guide.commitCheck() || guide.releasePlease()) {
            text.append("- Commit messages follow Conventional Commits: `type(scope): summary` with `feat`, `fix`, `docs`, `test`, `build`, `ci`, `refactor` or `chore`");
            text.append(guide.releasePlease() ? ". `feat` and `fix` become release notes, so describe what users notice.\n" : ".\n");
        }
        if (guide.dependabot()) text.append("- Dependabot pull requests that change a library ktor-svelte configures need `./gradlew svelteSync` and a commit of the generated files.\n");
        if (guide.actions()) text.append("- CI runs `./gradlew check buildFatJar svelteCheck` and the frontend lint on every push, so run them before you finish.\n");
        text.append("\n");

        text.append("## Before you finish\n\n");
        text.append("1. `./gradlew check svelteCheck` passes.\n");
        text.append("2. `./gradlew svelteRun --script=lint` passes. If it does not, run the format commands first.\n");
        if (guide.generateTs()) text.append("3. If a route or DTO changed, `./gradlew svelteGenerateTs` ran and its output is part of the change.\n");
        else text.append("3. If frontend settings changed, `./gradlew svelteSync` ran and its output is part of the change.\n");
        text.append("4. The README and `.env.example` describe any new command or setting.\n\n");

        text.append("## Learn more\n\n");
        text.append("The ktor-svelte docs are at https://nijasc.github.io/ktor-svelte. `./gradlew svelteDoctor` checks the setup and links to the right page.\n");
        return text.toString();
    }

    private static void writeDependabot(Path directory, String manager, boolean actions) throws IOException {
        StringBuilder text = new StringBuilder("version: 2\nupdates:\n");
        text.append(dependabotEntry("gradle", "/", "gradle"));
        text.append(dependabotEntry(manager.equals("bun") ? "bun" : "npm", "/frontend", "frontend"));
        if (actions) text.append(dependabotEntry("github-actions", "/", "actions"));
        Files.createDirectories(directory.resolve(".github"));
        Files.writeString(directory.resolve(".github/dependabot.yml"), text.toString());
    }

    private static String dependabotEntry(String ecosystem, String folder, String group) {
        return "  - package-ecosystem: " + ecosystem + "\n"
            + "    directory: " + folder + "\n"
            + "    schedule:\n"
            + "      interval: weekly\n"
            + "    groups:\n"
            + "      " + group + ":\n"
            + "        patterns:\n"
            + "          - \"*\"\n";
    }

    private static void writeCommitHook(Path directory) throws IOException {
        Path hooks = directory.resolve(".githooks");
        Files.createDirectories(hooks);
        Path hook = hooks.resolve("commit-msg");
        Files.writeString(hook, COMMIT_MSG_HOOK);
        hook.toFile().setExecutable(true);
        Files.writeString(directory.resolve(".gitattributes"), "/.githooks/** text eol=lf\n");
    }

    private static void writeBuildLogic(Path directory, boolean routeModules) throws IOException {
        Path logic = directory.resolve("build-logic");
        Files.createDirectories(logic.resolve("src/main/kotlin"));
        Files.writeString(logic.resolve("settings.gradle.kts"), BUILD_LOGIC_SETTINGS);
        Files.writeString(logic.resolve("build.gradle.kts"), BUILD_LOGIC_BUILD);
        Files.writeString(logic.resolve("src/main/kotlin/kotlin-conventions.gradle.kts"), KOTLIN_CONVENTIONS);
        if (routeModules) Files.writeString(logic.resolve("src/main/kotlin/ktor-routes-conventions.gradle.kts"), KTOR_ROUTES_CONVENTIONS);
    }

    private static void writeMigration(Path directory, boolean auth, Hexagon hexagon, boolean exposedTime) throws IOException {
        Path migrations = directory.resolve("src/main/resources/db/migration");
        Files.createDirectories(migrations);
        StringBuilder tables = new StringBuilder(exposedTime
            ? "CREATE TABLE visits (\n    id SERIAL PRIMARY KEY,\n    at TIMESTAMP NOT NULL\n);\n"
            : "CREATE TABLE visits (\n    id SERIAL PRIMARY KEY\n);\n");
        if (auth) tables.append("\nCREATE TABLE users (\n    username VARCHAR(64) PRIMARY KEY,\n    password_hash VARCHAR(255) NOT NULL\n);\n");
        if (hexagon != null) {
            for (BoundedContext context : hexagon.contexts()) {
                tables.append("\nCREATE TABLE ").append(tableName(context)).append(" (\n    id VARCHAR(36) PRIMARY KEY,\n    name VARCHAR(200) NOT NULL\n);\n");
            }
        }
        Files.writeString(migrations.resolve("V1__create_tables.sql"), tables.toString());
    }

    private static String databaseSource(String packageName, boolean auth, boolean flyway, Hexagon hexagon, boolean exposedTime) {
        String source = databaseSource(packageName, auth, flyway, hexagon);
        if (!exposedTime) return source;
        return mergeImports(
            source
                .replace("    val id = integer(\"id\").autoIncrement()\n", "    val id = integer(\"id\").autoIncrement()\n    val at = timestamp(\"at\")\n")
                .replace("    val visits: Long,\n)", "    val visits: Long,\n    val at: Instant,\n)")
                .replace("        val count =\n", "        val now = Clock.System.now()\n        val count =\n")
                .replace("Visits.insert { }", "Visits.insert { it[at] = now }")
                .replace("VisitCount(count)", "VisitCount(count, now)"),
            List.of("org.jetbrains.exposed.v1.datetime.timestamp", "kotlin.time.Clock", "kotlin.time.Instant"));
    }

    private static String databaseSource(String packageName, boolean auth, boolean flyway, Hexagon hexagon) {
        if (!flyway) {
            List<String> tables = new ArrayList<>(List.of("Visits"));
            if (auth) tables.add("Users");
            List<String> imports = new ArrayList<>();
            if (hexagon != null) {
                for (BoundedContext context : hexagon.contexts()) {
                    tables.add(context.aggregate() + "Table");
                    imports.add(packageName + "." + context.name() + ".adapters.persistence." + context.aggregate() + "Table");
                }
            }
            String source = DATABASE_KT.replace("__TABLES__", String.join(", ", tables));
            return imports.isEmpty() ? source : mergeImports(source, imports);
        }
        return DATABASE_KT
            .replace("import org.jetbrains.exposed.v1.jdbc.SchemaUtils\n", "")
            .replace("import org.jetbrains.exposed.v1.core.Table\n", "import org.flywaydb.core.Flyway\nimport org.jetbrains.exposed.v1.core.Table\n")
            .replace("transaction { SchemaUtils.create(__TABLES__) }", "Flyway\n            .configure()\n            .dataSource(dataSource)\n            .load()\n            .migrate()");
    }

    private static String versionCatalog(
        Versions versions, boolean auth, boolean database, boolean flyway, boolean flatPackages, boolean conventions, Hexagon hexagon, boolean exposedTime) {
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
        if (hexagon != null) {
            text.append("ktor-compiler-plugin = { module = \"io.ktor:ktor-compiler-plugin\", version.ref = \"ktor\" }\n");
            text.append("ktor-server-core = { module = \"io.ktor:ktor-server-core\", version.ref = \"ktor\" }\n");
            text.append("ktor-server-routing-openapi = { module = \"io.ktor:ktor-server-routing-openapi\", version.ref = \"ktor\" }\n");
            text.append("ktor-svelte-server = { module = \"io.github.nijasc:ktor-svelte-server\", version.ref = \"ktor-svelte\" }\n");
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
            if (exposedTime) text.append("exposed-kotlin-datetime = { module = \"org.jetbrains.exposed:exposed-kotlin-datetime\", version.ref = \"exposed\" }\n");
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

    private static String projectReadme(
        String name, boolean auth, boolean database, boolean flyway, boolean flatPackages, boolean conventions, boolean docker,
        Hexagon hexagon, boolean releasePlease, boolean commitCheck, boolean dependabot, Railway railway, boolean exposedTime) {
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
            text.append("| `DATABASE_URL` | JDBC URL of the Postgres database, or a `postgresql://user:password@host:port/name` URL that carries the user and password too |\n");
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
                ? "`Database.kt` connects when the app starts and Flyway runs any new migration in `src/main/resources/db/migration`. Add a new file for each change and never edit one that has already run: after changing a table, `./gradlew generateMigrations` writes the next one for you. "
                : "`Database.kt` connects when the app starts and creates missing tables, but it does not change existing ones. ");
            text.append("`POST /api/visits` shows the pattern with a small example table, so replace it with your own.\n\n");
            if (exposedTime) {
                text.append("Exposed's date and time module is included: `timestamp`, `date` and `datetime` columns from `org.jetbrains.exposed.v1.datetime` read and write `kotlin.time.Instant` and kotlinx-datetime values, as the `at` column of the example table shows.\n\n");
            }
        }
        if (flatPackages || conventions) {
            text.append("## Project layout\n\n");
            if (flatPackages) text.append("Kotlin files sit directly in `src/main/kotlin`, without package folders. The `idea-ext` plugin in `build.gradle.kts` sets a package prefix, so IntelliJ creates new files in the right package. Reload the Gradle project if IntelliJ does not pick it up.\n\n");
            if (conventions) text.append("`build-logic` holds the `kotlin-conventions` plugin with the Kotlin and ktlint setup. To add a module, add it to `settings.gradle.kts` and apply `id(\"kotlin-conventions\")` in its build file.\n\n");
        }
        if (hexagon != null) {
            text.append("## Architecture\n\n");
            text.append("The backend is split into bounded contexts, each built as a hexagon. The root project only starts the app and wires the contexts together in `Application.kt`.\n\n");
            text.append("| Context | Aggregate | API |\n|---|---|---|\n");
            for (BoundedContext context : hexagon.contexts()) {
                text.append("| `").append(context.name()).append("` | `").append(context.aggregate()).append("` | `/api/").append(context.name()).append("` |\n");
            }
            text.append("\n");
            if (hexagon.layered()) {
                text.append("Each context has three modules, and Gradle only lets each one see the layer below it:\n\n");
                text.append("- `<context>/domain`: the aggregate and its rules. No framework code.\n");
                text.append("- `<context>/application`: use cases, and the ports they need, such as the repository interface.\n");
                text.append("- `<context>/adapters`: the HTTP routes in `web` and the repository in `persistence`, which plug Ktor").append(database ? " and Exposed" : "").append(" into the ports.\n\n");
                text.append("To add a context, add `boundedContext(\"name\")` to `settings.gradle.kts`, create the three folders with a `build.gradle.kts` like the existing ones, and depend on its adapters in the root `build.gradle.kts`.\n\n");
            } else {
                text.append("Each context is one module with a package per layer: `domain` for the aggregate and its rules, `application` for use cases and ports, and `adapters` for the HTTP routes and the repository. Keep the domain free of framework code, so it can move into its own module later.\n\n");
                text.append("To add a context, add it to `include(...)` in `settings.gradle.kts`, give it a `build.gradle.kts` like the existing ones, and depend on it in the root `build.gradle.kts`.\n\n");
            }
            if (hexagon.kernel()) text.append("`shared-kernel` holds code every context may use, such as `DomainException`, which the app answers with 422. Keep it small: everything in it couples the contexts.\n\n");
            text.append("Modules depend on each other through type-safe accessors such as `projects.").append(accessor(hexagon.layered() ? hexagon.contexts().get(0).name() + "-domain" : hexagon.contexts().get(0).name())).append("`, and on libraries through `gradle/libs.versions.toml`.\n\n");
        }
        if (releasePlease) {
            text.append("## Releases\n\n");
            text.append("[release-please](https://github.com/googleapis/release-please) reads the commit messages on `main` and keeps a release pull request open. Merging it raises the version in `version.txt`, which `build.gradle.kts` uses, writes `CHANGELOG.md` and creates the GitHub release. ");
            text.append("`feat` raises the minor version, `fix` the patch version, and a `!` after the type marks a breaking change. ");
            text.append("In the repository settings, under Actions, allow GitHub Actions to create pull requests. Never edit `version.txt` or `.release-please-manifest.json` by hand.\n\n");
        }
        if (railway != null) {
            text.append("## Deploy to Railway\n\n");
            text.append("`.railway/railway.ts` describes the Railway project as code: the `").append(name).append("` service, built from the `Dockerfile`, with its health check");
            text.append(database ? ", and a Postgres database whose `DATABASE_URL` the app reads" : "").append(". ");
            text.append("`.github/workflows/deploy.yml` deploys on ").append(railway.trigger()).append(", and `.github/workflows/railway-config.yml` plans changes to `.railway/` on pull requests and applies them when they merge.\n\n");
            text.append("Set it up once:\n\n");
            text.append("1. Install the [Railway CLI](https://docs.railway.com/cli), sign in with `railway login`, and create a project with `railway init`.\n");
            text.append("2. Apply the configuration: `npm install --prefix .railway`, then `railway config apply`.\n");
            if (auth) text.append("3. Give the app a session secret: `railway variables --service ").append(name).append(" --set SESSION_SECRET=$(openssl rand -hex 32)`.\n");
            text.append(auth ? "4. " : "3. ").append("Create a project token for the production environment in the project settings, and save it as the `RAILWAY_TOKEN` secret of this GitHub repository.\n");
            text.append(auth ? "5. " : "4. ").append("Give the service a public address with `railway domain`.\n\n");
            text.append("After that, change the infrastructure only in `.railway/railway.ts`. Run the deploy workflow by hand from the Actions tab to deploy without waiting.\n\n");
        }
        if (dependabot) {
            text.append("## Dependency updates\n\n");
            text.append("Dependabot opens one pull request a week for the Gradle dependencies, one for the frontend packages");
            text.append(" and, with GitHub Actions, one for the Actions. ");
            text.append("When an update changes a frontend library that ktor-svelte configures, such as Lucide or DaisyUI, the build asks you to run `./gradlew svelteSync`. ");
            text.append("Check out the pull request, run it, and commit the generated files.\n\n");
        }
        if (commitCheck) {
            text.append("## Commit messages\n\n");
            text.append("Commit messages follow [Conventional Commits](https://www.conventionalcommits.org), such as `feat(orders): show the total`. `.githooks/commit-msg` rejects any other message. After cloning, turn it on once:\n\n");
            text.append("```bash\ngit config core.hooksPath .githooks\n```\n\n");
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

    private static void writeFrontendLinting(Path directory, boolean generatedFiles) throws IOException {
        Path frontend = directory.resolve("frontend");
        String rulesImport = generatedFiles ? "import ktorSvelte from './src/lib/ktor-svelte/eslint.js';\n" : "";
        String rules = generatedFiles ? "    ...ktorSvelte.configs.recommended,\n" : "";
        Files.writeString(
            frontend.resolve("eslint.config.js"),
            ESLINT_CONFIG.replace("__KTOR_SVELTE_IMPORT__\n", rulesImport).replace("__KTOR_SVELTE_RULES__\n", rules));
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
        String strategy,
        Hexagon hexagon,
        boolean releasePlease
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
        StringBuilder svelte = new StringBuilder();
        if (libraries.length() > 0) svelte.append("    libraries {\n").append(libraries).append("    }\n");
        if (flyway) svelte.append("    utils {\n        flyway()\n    }\n");
        String librariesBlock = svelte.length() == 0 ? "" : "svelte {\n" + svelte + "}\n\n";
        StringBuilder dependencies = new StringBuilder();
        if (hexagon != null) rootModules(hexagon).forEach(module -> dependencies.append("    ").append(module).append("\n"));
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
            + (releasePlease
                ? "version = file(\"version.txt\").readText().trim()\n\n"
                : "version = \"0.1.0\"\n\n")
            + "application {\n    mainClass = \"" + packageName + ".ApplicationKt\"\n}\n\n"
            + OPEN_API_BLOCK + "\n"
            + (conventions ? "" : "ktlint {\n    filter {\n        exclude { it.file.invariantSeparatorsPath.contains(\"/build/\") }\n    }\n}\n\n")
            + (flatPackages ? "idea {\n    module {\n        settings {\n            packagePrefix[\"src/main/kotlin\"] = \"" + packageName + "\"\n        }\n    }\n}\n\n" : "")
            + (flyway ? "tasks.shadowJar {\n    mergeServiceFiles()\n}\n\n" : "")
            + librariesBlock
            + "dependencies {\n"
            + dependencies
            + "}\n";
    }

    private static String application(String packageName, boolean generateTs, boolean auth, boolean database, Hexagon hexagon, boolean healthEndpoint) {
        String generate = generateTs ? "        generateTs = true\n" : "";
        List<String> imports = new ArrayList<>(List.of(
            "io.github.nijasc.ktor.svelte.Svelte",
            "io.ktor.server.application.Application",
            "io.ktor.server.application.install",
            "io.ktor.server.engine.embeddedServer",
            "io.ktor.server.netty.Netty",
            "io.ktor.server.response.respond",
            "io.ktor.server.routing.get",
            "io.ktor.server.routing.routing",
            "kotlinx.serialization.Serializable"));
        StringBuilder contextRoutes = new StringBuilder();
        if (hexagon != null) {
            for (BoundedContext context : hexagon.contexts()) {
                String base = packageName + "." + context.name();
                String repository = (database ? "Exposed" : "InMemory") + context.aggregate() + "Repository";
                imports.add(base + ".adapters.persistence." + repository);
                imports.add(base + ".adapters.web." + context.name() + "Routes");
                imports.add(base + ".application." + context.aggregate() + "Service");
                contextRoutes.append("        ").append(context.name()).append("Routes(")
                    .append(context.aggregate()).append("Service(").append(repository).append("()))\n");
            }
        }
        return kotlinFile(packageName, imports, "")
            + "@Serializable\ndata class Greeting(\n    val message: String,\n)\n\n"
            + "fun main() {\n"
            + "    val port = env(\"PORT\")?.toInt() ?: 8080\n"
            + "    embeddedServer(Netty, port = port, module = Application::module).start(wait = true)\n"
            + "}\n\n"
            + "fun Application.module() {\n"
            + "    install(Svelte) {\n"
            + generate
            + (healthEndpoint ? "        healthEndpoint = true\n" : "")
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
            + contextRoutes
            + "    }\n"
            + "}\n";
    }

    private static String errorsSource(String packageName, Hexagon hexagon) {
        String source = fill(ERRORS_KT, packageName);
        if (hexagon == null || !hexagon.kernel()) return source;
        String handler = "        exception<DomainException> { call, cause ->\n"
            + "            call.respond(HttpStatusCode.UnprocessableEntity, Problem(cause.message))\n"
            + "        }\n";
        return mergeImports(
            source.replace("        exception<BadRequestException>", handler + "        exception<BadRequestException>"),
            List.of(packageName + ".kernel.DomainException"));
    }

    private static void writeMessages(Path directory, List<String> locales) throws IOException {
        Path messages = directory.resolve("frontend/messages");
        Files.createDirectories(messages);
        for (String locale : locales) {
            Files.writeString(messages.resolve(locale + ".json"), "{\n  \"welcome\": \"Welcome to your app ({language})\"\n}\n");
        }
    }

    private static String startPage(
        boolean daisy, boolean tailwind, boolean lucide, boolean i18n, boolean auth, boolean generateTs, boolean database, Hexagon hexagon) {
        StringBuilder script = new StringBuilder();
        if (lucide) script.append("    import Icon from '#icon';\n");
        if (i18n) script.append(auth ? "    import { getLocale, localizeHref, m } from '#i18n';\n" : "    import { getLocale, m } from '#i18n';\n");
        if (script.length() > 0) script.append("\n");
        script.append("    const docs = 'https://nijasc.github.io/ktor-svelte';\n");
        String signIn = !auth ? "" : "    <a" + (daisy ? " class=\"btn mt-4\"" : "") + " href=" + (i18n ? "{localizeHref('/login')}" : "\"/login\"") + ">Sign in</a>\n";
        String title = i18n ? "{m.welcome({ language: getLocale() })}" : "Welcome to your app";
        String icon = lucide ? "<Icon name=\"Rocket\" /> " : "";
        String titleClass = tailwind ? " class=\"flex items-center gap-2 text-3xl font-bold\"" : "";
        String mainClass = tailwind ? " class=\"mx-auto max-w-2xl p-8\"" : "";
        String button = daisy ? " class=\"btn btn-primary mt-4\"" : "";
        String heading = tailwind ? " class=\"mt-8 text-xl font-semibold\"" : "";
        String list = tailwind ? " class=\"mt-2 list-disc pl-6\"" : "";
        String link = daisy ? " class=\"link\"" : "";
        List<String> setUp = new ArrayList<>();
        setUp.add("<code>/api/hello</code> answers from Kotlin, in <code>Application.kt</code>");
        if (generateTs) setUp.add(docsLink(link, "features/typescript", "A typed client") + " in <code>src/lib/api</code>");
        if (daisy) setUp.add(docsLink(link, "features/frontend-libraries#daisyui", "DaisyUI") + ", themed from Gradle");
        if (tailwind && !daisy) setUp.add(docsLink(link, "features/frontend-libraries#tailwind", "Tailwind") + ", set up from Gradle");
        if (lucide) setUp.add(docsLink(link, "features/frontend-libraries#lucide", "Lucide icons") + ", typed on both sides");
        if (i18n) setUp.add(docsLink(link, "features/frontend-libraries#i18n", "Messages") + " in <code>messages</code>");
        if (auth) setUp.add(docsLink(link, "features/auth", "Sign in") + " with sessions and hashed passwords");
        if (database) setUp.add("Postgres with Exposed. Start it with <code>docker compose up -d</code>");
        if (hexagon != null) {
            for (BoundedContext context : hexagon.contexts()) {
                setUp.add("The <code>" + context.name() + "</code> context, with <code>" + context.aggregate() + "</code> at <code>/api/" + context.name() + "</code>, split into domain, application and adapters");
            }
        }
        List<String> next = new ArrayList<>();
        next.add("Add a route in Kotlin and save: the app restarts" + (generateTs ? " and the typed client follows" : ""));
        next.add("Click the API button in the corner of this page to see every call the app answers");
        next.add(docsLink(link, "guide/tutorial", "Follow the tutorial") + " to build a first feature");
        next.add("Run <code>./gradlew svelteDoctor</code> when something looks off");
        return "<script lang=\"ts\">\n" + script + "</script>\n\n"
            + "<main" + mainClass + ">\n"
            + "    <h1" + titleClass + ">" + icon + title + "</h1>\n"
            + "    <p>Edit <code>frontend/src/routes/+page.svelte</code>. Your API is at <code>/api/hello</code>.</p>\n"
            + "    <a" + button + " href={docs}>Read the docs</a>\n"
            + signIn
            + "    <h2" + heading + ">What is set up</h2>\n"
            + startPageList(list, setUp)
            + "    <h2" + heading + ">What to do next</h2>\n"
            + startPageList(list, next)
            + "</main>\n";
    }

    private static String docsLink(String link, String path, String text) {
        return "<a" + link + " href=\"{docs}/" + path + "\">" + text + "</a>";
    }

    private static String startPageList(String list, List<String> items) {
        return "    <ul" + list + ">\n"
            + items.stream().map(item -> "        <li>" + item + "</li>\n").collect(Collectors.joining())
            + "    </ul>\n";
    }

    private void gradle(Path directory, String label, String... tasks) throws Exception {
        List<String> command = new ArrayList<>();
        if (WINDOWS) {
            command.add(directory.resolve("gradlew.bat").toString());
        } else {
            command.add(directory.resolve("gradlew").toString());
        }
        command.addAll(Arrays.asList(tasks));
        command.add("--console=plain");
        ProcessBuilder builder = new ProcessBuilder(command).directory(directory.toFile());
        builder.environment().put("PORT", "0");
        UI.process(
            label,
            builder,
            "Gradle failed while running " + String.join(" ", tasks) + ". The project is in " + directory + "."
                + " If the ktor-svelte plugin was not found, its release may still be waiting for approval on the Gradle Plugin Portal."
        );
    }

    private static void installPackages(Path directory, String manager) throws Exception {
        List<String> command = WINDOWS ? List.of("cmd", "/c", manager, "install") : List.of(manager, "install");
        UI.process(
            "Installing the frontend packages with " + manager,
            new ProcessBuilder(command).directory(directory.resolve("frontend").toFile()),
            manager + " install failed. The project is in " + directory + ".");
    }

    private static void initGit(Path directory, boolean commitCheck) throws Exception {
        git(directory, "init", "--quiet");
        if (commitCheck) {
            git(directory, "config", "core.hooksPath", ".githooks");
            git(directory, "add", "--chmod=+x", ".githooks/commit-msg");
        }
    }

    private static void git(Path directory, String... arguments) throws Exception {
        List<String> command = new ArrayList<>(List.of("git"));
        command.addAll(Arrays.asList(arguments));
        new ProcessBuilder(command)
            .directory(directory.toFile())
            .redirectOutput(ProcessBuilder.Redirect.DISCARD)
            .redirectError(ProcessBuilder.Redirect.DISCARD)
            .start()
            .waitFor();
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

    private static final class Ui {
        private final PrintStream out = System.out;
        private final boolean live;
        private final boolean ansi;
        private final boolean color;
        private final boolean unicode;
        private final String mark;
        private final String check;
        private final String cross;
        private final String pending;
        private final String[] frames;

        Ui() {
            boolean forced = System.getenv("FORCE_COLOR") != null;
            live = interactive();
            ansi = forced || (live && ansiTerminal());
            color = forced || (ansi && System.getenv("NO_COLOR") == null);
            String encoding = System.getProperty("stdout.encoding", System.getProperty("sun.stdout.encoding", Charset.defaultCharset().name()));
            unicode = encoding.equalsIgnoreCase("UTF-8") || encoding.equalsIgnoreCase("UTF8");
            mark = unicode ? "◆" : "?";
            check = unicode ? "✔" : "+";
            cross = unicode ? "✖" : "x";
            pending = unicode ? "◇" : "-";
            frames = unicode
                ? new String[] {"⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"}
                : new String[] {"|", "/", "-", "\\"};
        }

        private static boolean interactive() {
            Console console = System.console();
            if (console == null) return false;
            try {
                return (Boolean) Console.class.getMethod("isTerminal").invoke(console);
            } catch (ReflectiveOperationException failure) {
                return true;
            }
        }

        private static boolean ansiTerminal() {
            String term = System.getenv("TERM");
            if ("dumb".equals(term)) return false;
            if (!WINDOWS) return true;
            return term != null
                || System.getenv("WT_SESSION") != null
                || System.getenv("TERM_PROGRAM") != null
                || System.getenv("ANSICON") != null
                || "ON".equalsIgnoreCase(System.getenv("ConEmuANSI"));
        }

        private String paint(String codes, String text) {
            return color ? "\033[" + codes + "m" + text + "\033[0m" : text;
        }

        String bold(String text) {
            return paint("1", text);
        }

        String dim(String text) {
            return paint("2", text);
        }

        String accent(String text) {
            return paint("38;5;99", text);
        }

        String cyan(String text) {
            return paint("36", text);
        }

        String green(String text) {
            return paint("32", text);
        }

        String yellow(String text) {
            return paint("33", text);
        }

        String red(String text) {
            return paint("31", text);
        }

        void banner() {
            out.println();
            String badge = color ? "\033[48;5;99;97;1m ktor-svelte \033[0m" : "ktor-svelte";
            out.println("  " + badge + "  " + dim("one app, one JAR, one port"));
        }

        void section(String title) {
            out.println();
            out.println("  " + bold(accent(title)));
        }

        String question(String question, String fallback) {
            return "  " + cyan(mark) + " " + bold(question) + " " + dim("(" + fallback + ")") + " ";
        }

        void choices(String question, List<String> options) {
            out.println("  " + cyan(mark) + " " + bold(question));
            for (int index = 0; index < options.size(); index++) {
                out.println("      " + dim(String.valueOf(index + 1)) + "  " + options.get(index) + (index == 0 ? dim("  default") : ""));
            }
        }

        void hint(String text) {
            out.println("    " + yellow(text));
        }

        void answered(String question, String value, int linesToReplace) {
            if (ansi && linesToReplace > 0) out.print("\033[" + linesToReplace + "A\r\033[J");
            String label = question.endsWith("?") ? question.substring(0, question.length() - 1) : question;
            out.println("  " + green(check) + " " + label + dim(" : ") + cyan(value));
        }

        String menu(String question, List<String> options, Keys keys) throws IOException {
            String keysHint = unicode ? "↑ ↓ and Enter" : "up, down and Enter";
            out.println("  " + cyan(mark) + " " + bold(question) + " " + dim("(" + keysHint + ")"));
            int[] selected = {0};
            drawOptions(options, selected[0]);
            return keys.raw(() -> {
                while (true) {
                    String key = keys.key();
                    int count = options.size();
                    if (key.equals("enter") || key.equals("space")) return options.get(selected[0]);
                    if (key.equals("up") || key.equals("k")) selected[0] = (selected[0] + count - 1) % count;
                    else if (key.equals("down") || key.equals("j") || key.equals("tab")) selected[0] = (selected[0] + 1) % count;
                    else if (key.length() == 1 && Character.isDigit(key.charAt(0))) {
                        int number = key.charAt(0) - '0';
                        if (number >= 1 && number <= count) selected[0] = number - 1;
                    } else continue;
                    out.print("\033[" + count + "A");
                    drawOptions(options, selected[0]);
                }
            });
        }

        private void drawOptions(List<String> options, int selected) {
            String pointer = unicode ? "❯" : ">";
            for (int index = 0; index < options.size(); index++) {
                String line = index == selected ? "    " + cyan(pointer) + " " + bold(options.get(index)) : "      " + dim(options.get(index));
                out.print("\r\033[2K" + line + "\n");
            }
            out.flush();
        }

        boolean toggle(String question, boolean fallback, Keys keys) throws IOException {
            boolean[] value = {fallback};
            drawToggle(question, value[0]);
            boolean picked = keys.raw(() -> {
                while (true) {
                    String key = keys.key();
                    if (key.equals("y")) return true;
                    if (key.equals("n")) return false;
                    if (key.equals("enter")) return value[0];
                    if (List.of("left", "right", "space", "tab", "h", "l").contains(key)) {
                        value[0] = !value[0];
                        drawToggle(question, value[0]);
                    }
                }
            });
            out.println();
            return picked;
        }

        private void drawToggle(String question, boolean yes) {
            String on = unicode ? "●" : "(*)";
            String off = unicode ? "○" : "( )";
            String choices = yes
                ? cyan(on + " " + bold("Yes")) + "  " + dim(off + " No")
                : dim(off + " Yes") + "  " + cyan(on + " " + bold("No"));
            out.print("\r\033[2K  " + cyan(mark) + " " + bold(question) + "  " + choices);
            out.flush();
        }

        void item(String text) {
            out.println("  " + accent(pending) + " " + text);
        }

        void tree(Path root, String name) throws IOException {
            out.println("    " + bold(name + "/"));
            branch(root, 1);
        }

        private void branch(Path folder, int depth) throws IOException {
            List<Path> entries;
            try (var listed = Files.list(folder)) {
                entries = listed
                    .sorted(java.util.Comparator.comparing((Path path) -> !Files.isDirectory(path)).thenComparing(path -> path.getFileName().toString()))
                    .collect(Collectors.toList());
            }
            for (Path entry : entries) {
                if (!Files.isDirectory(entry)) {
                    out.println("    " + "  ".repeat(depth) + entry.getFileName());
                    continue;
                }
                StringBuilder label = new StringBuilder(entry.getFileName() + "/");
                Path inner = entry;
                Optional<Path> only = onlyFolder(inner);
                while (only.isPresent()) {
                    inner = only.get();
                    label.append(inner.getFileName()).append('/');
                    only = onlyFolder(inner);
                }
                out.println("    " + "  ".repeat(depth) + accent(label.toString()));
                branch(inner, depth + 1);
            }
        }

        private static Optional<Path> onlyFolder(Path folder) throws IOException {
            try (var listed = Files.list(folder)) {
                List<Path> children = listed.collect(Collectors.toList());
                return children.size() == 1 && Files.isDirectory(children.get(0)) ? Optional.of(children.get(0)) : Optional.empty();
            }
        }

        void finishDryRun(String name) {
            out.println();
            out.println("  " + green(check) + " " + bold("Nothing was written") + dim(" (dry run)"));
            out.println("  " + dim("Run the same command without --dry-run to create " + name + "."));
            out.println();
        }

        void warn(String text) {
            out.println("    " + yellow(text));
        }

        void note(String text) {
            out.println("    " + dim(text));
        }

        <T> T step(String label, Callable<T> work) throws Exception {
            long started = System.nanoTime();
            Thread spinner = null;
            if (ansi) {
                spinner = new Thread(() -> {
                    int frame = 0;
                    while (!Thread.currentThread().isInterrupted()) {
                        out.print("\r\033[2K  " + accent(frames[frame++ % frames.length]) + " " + label + "  " + dim(elapsed(System.nanoTime() - started)));
                        out.flush();
                        try {
                            Thread.sleep(80);
                        } catch (InterruptedException stop) {
                            return;
                        }
                    }
                });
                spinner.setDaemon(true);
                spinner.start();
            } else {
                out.println("  " + pending + " " + label + "...");
            }
            try {
                T result = work.call();
                stop(spinner);
                finish(green(check), label, started);
                return result;
            } catch (Exception failure) {
                stop(spinner);
                finish(red(cross), label, started);
                throw failure;
            }
        }

        void process(String label, ProcessBuilder builder, String failureMessage) throws Exception {
            Path log = Files.createTempFile("ktor-svelte-setup", ".log");
            builder.redirectErrorStream(true).redirectOutput(log.toFile());
            try {
                step(label, () -> {
                    Process process = builder.start();
                    process.getOutputStream().close();
                    if (process.waitFor() != 0) throw new ProcessFailed();
                    return null;
                });
            } catch (ProcessFailed failure) {
                List<String> lines = new String(Files.readAllBytes(log), Charset.defaultCharset()).lines().collect(Collectors.toList());
                out.println();
                lines.subList(Math.max(0, lines.size() - 30), lines.size()).forEach(line -> out.println("    " + dim(line)));
                out.println();
                out.println("    " + dim("Full output: " + log));
                throw new SetupException(failureMessage);
            }
            Files.deleteIfExists(log);
        }

        private void stop(Thread spinner) throws InterruptedException {
            if (spinner == null) return;
            spinner.interrupt();
            spinner.join();
            out.print("\r\033[2K");
        }

        private void finish(String symbol, String label, long started) {
            out.println("  " + symbol + " " + label + "  " + dim(elapsed(System.nanoTime() - started)));
        }

        void done(String name, long nanos, List<String> commands, String after) {
            out.println();
            out.println("  " + green(check) + " " + bold("Created " + name) + " " + dim("in " + elapsed(nanos)));
            out.println();
            out.println("  " + bold(accent("Next")));
            commands.forEach(command -> out.println("    " + dim("$") + " " + cyan(command)));
            out.println();
            out.println("  " + dim(after));
            out.println();
        }

        void failure(String message) {
            System.err.println();
            System.err.println("  " + red(cross + " " + message));
            System.err.println();
        }

        private static String elapsed(long nanos) {
            long tenths = nanos / 100_000_000L;
            if (tenths < 600) return (tenths / 10) + "." + (tenths % 10) + "s";
            long seconds = tenths / 10;
            return (seconds / 60) + "m " + (seconds % 60) + "s";
        }
    }

    private interface KeyWork<T> {
        T run() throws IOException;
    }

    private static final class Keys {
        private Boolean available;

        boolean available() {
            if (available == null) available = !WINDOWS && UI.live && UI.ansi && stty("-g").isPresent();
            return available;
        }

        <T> T raw(KeyWork<T> work) throws IOException {
            String saved = stty("-g").orElseThrow(() -> new SetupException("Could not read the terminal settings."));
            Thread restore = new Thread(() -> stty(saved));
            Runtime.getRuntime().addShutdownHook(restore);
            stty("-icanon", "-echo", "min", "1");
            try {
                return work.run();
            } finally {
                stty(saved);
                Runtime.getRuntime().removeShutdownHook(restore);
            }
        }

        String key() throws IOException {
            int first = read();
            if (first == 27) {
                int second = read();
                if (second != '[' && second != 'O') return "other";
                return switch (read()) {
                    case 'A' -> "up";
                    case 'B' -> "down";
                    case 'C' -> "right";
                    case 'D' -> "left";
                    default -> "other";
                };
            }
            if (first == '\r' || first == '\n') return "enter";
            if (first == ' ') return "space";
            if (first == '\t') return "tab";
            return String.valueOf((char) first).toLowerCase(Locale.ROOT);
        }

        private static int read() throws IOException {
            int next = System.in.read();
            if (next < 0) throw new SetupException("Input ended before all questions were answered. Add --yes to accept the defaults.");
            return next;
        }

        private static Optional<String> stty(String... arguments) {
            List<String> command = new ArrayList<>(List.of("stty"));
            command.addAll(Arrays.asList(arguments));
            try {
                Process process = new ProcessBuilder(command)
                    .redirectInput(new java.io.File("/dev/tty"))
                    .redirectError(ProcessBuilder.Redirect.DISCARD)
                    .start();
                String output = new String(process.getInputStream().readAllBytes()).trim();
                return process.waitFor() == 0 ? Optional.of(output) : Optional.empty();
            } catch (IOException | InterruptedException failure) {
                return Optional.empty();
            }
        }
    }

    private static final class ProcessFailed extends Exception {
        private static final long serialVersionUID = 1L;
    }

    private record Extras(boolean agents, Railway railway, boolean exposedTime) {}

    private record Railway(String deployOn, String branch, boolean releasePlease) {
        boolean fromReleasePlease() {
            return deployOn.equals("release") && releasePlease;
        }

        String trigger() {
            return switch (deployOn) {
                case "release" -> releasePlease ? "each release that release-please creates" : "each published GitHub release";
                case "branch" -> "each push to " + branch;
                default -> "each push to main";
            };
        }
    }

    private record AgentGuide(
        String name,
        String packageName,
        String manager,
        boolean flatPackages,
        boolean generateTs,
        boolean libraryGuide,
        boolean i18n,
        boolean auth,
        boolean database,
        boolean flyway,
        Hexagon hexagon,
        boolean docker,
        boolean actions,
        boolean releasePlease,
        boolean commitCheck,
        boolean dependabot,
        Railway railway,
        boolean exposedTime
    ) {}

    private record BoundedContext(String name, String aggregate) {}

    private record Hexagon(List<BoundedContext> contexts, boolean layered, boolean kernel) {}

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

    private static final String OPEN_API_BLOCK = """
        ktor {
            openApi {
                enabled = true
                codeInferenceEnabled = true
                onlyCommented = false
            }
        }
        """;

    private static final String DOMAIN_EXCEPTION_KT = """
        class DomainException(
            override val message: String,
        ) : RuntimeException(message)
        """;

    private static final String AGGREGATE_KT = """
        @JvmInline
        value class __AGGREGATE__Id(
            val value: String,
        )

        data class __AGGREGATE__(
            val id: __AGGREGATE__Id,
            val name: String,
        ) {
            init {
        __INVARIANT__
            }
        }
        """;

    private static final String REPOSITORY_KT = """
        interface __AGGREGATE__Repository {
            suspend fun save(__VARIABLE__: __AGGREGATE__)

            suspend fun all(): List<__AGGREGATE__>
        }
        """;

    private static final String SERVICE_KT = """
        class __AGGREGATE__Service(
            private val repository: __AGGREGATE__Repository,
        ) {
            suspend fun create(name: String): __AGGREGATE__ {
                val __VARIABLE__ = __AGGREGATE__(__AGGREGATE__Id(UUID.randomUUID().toString()), name.trim())
                repository.save(__VARIABLE__)
                return __VARIABLE__
            }

            suspend fun list(): List<__AGGREGATE__> = repository.all()
        }
        """;

    private static final String ROUTES_KT = """
        private const val MAX_NAME_LENGTH = 200

        @Serializable
        data class New__AGGREGATE__(
            @JsonSchema.MaxLength(MAX_NAME_LENGTH)
            val name: String,
        ) : Validated {
            override fun Validator.rules() {
                check(::name, name.isNotBlank()) { "Enter a name." }
            }
        }

        @Serializable
        data class __AGGREGATE__View(
            val id: String,
            val name: String,
        )

        fun Route.__CONTEXT__Routes(service: __AGGREGATE__Service) {
            route("/api/__CONTEXT__") {
                get {
                    call.respond(service.list().map { it.toView() })
                }
                post {
                    val request = call.receive<New__AGGREGATE__>()
                    call.respond(HttpStatusCode.Created, service.create(request.name).toView())
                }
            }
        }

        private fun __AGGREGATE__.toView() = __AGGREGATE__View(id.value, name)
        """;

    private static final String MEMORY_REPOSITORY_KT = """
        class InMemory__AGGREGATE__Repository : __AGGREGATE__Repository {
            private val items = ConcurrentHashMap<__AGGREGATE__Id, __AGGREGATE__>()

            override suspend fun save(__VARIABLE__: __AGGREGATE__) {
                items[__VARIABLE__.id] = __VARIABLE__
            }

            override suspend fun all(): List<__AGGREGATE__> = items.values.sortedBy { it.name }
        }
        """;

    private static final String EXPOSED_REPOSITORY_KT = """
        private const val ID_LENGTH = 36
        private const val NAME_LENGTH = 200

        object __AGGREGATE__Table : Table("__TABLE__") {
            val id = varchar("id", ID_LENGTH)
            val name = varchar("name", NAME_LENGTH)

            override val primaryKey = PrimaryKey(id)
        }

        class Exposed__AGGREGATE__Repository : __AGGREGATE__Repository {
            override suspend fun save(__VARIABLE__: __AGGREGATE__) {
                withContext(Dispatchers.IO) {
                    transaction {
                        __AGGREGATE__Table.upsert {
                            it[__AGGREGATE__Table.id] = __VARIABLE__.id.value
                            it[__AGGREGATE__Table.name] = __VARIABLE__.name
                        }
                    }
                }
            }

            override suspend fun all(): List<__AGGREGATE__> =
                withContext(Dispatchers.IO) {
                    transaction {
                        __AGGREGATE__Table
                            .selectAll()
                            .orderBy(__AGGREGATE__Table.name)
                            .map { __AGGREGATE__(__AGGREGATE__Id(it[__AGGREGATE__Table.id]), it[__AGGREGATE__Table.name]) }
                    }
                }
        }
        """;

    private static final String RELEASE_PLEASE_CONFIG = """
        {
          "$schema": "https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json",
          "release-type": "simple",
          "include-component-in-tag": false,
          "bump-minor-pre-major": true,
          "packages": {
            ".": {
              "package-name": "__NAME__"
            }
          }
        }
        """;

    private static final String RELEASE_WORKFLOW = """
        name: Release

        on:
          push:
            branches: [main]

        permissions: {}

        jobs:
          release-please:
            runs-on: ubuntu-latest
            permissions:
              contents: write
              pull-requests: write
            steps:
              - uses: googleapis/release-please-action@45996ed1f6d02564a971a2fa1b5860e934307cf7
                with:
                  config-file: release-please-config.json
                  manifest-file: .release-please-manifest.json
        """;

    private static final String RELEASE_DEPLOY_JOB = """

          deploy:
            needs: release-please
            if: ${{ needs.release-please.outputs.release_created == 'true' }}
            permissions:
              contents: read
            uses: ./.github/workflows/deploy.yml
            with:
              ref: ${{ needs.release-please.outputs.tag_name }}
            secrets: inherit
        """;

    private static final String RAILWAY_PACKAGE = """
        {
          "name": "__NAME__-infrastructure",
          "private": true,
          "type": "module",
          "devDependencies": {
            "railway": "3.18.0"
          }
        }
        """;

    private static final String RAILWAY_CONFIG_WORKFLOW = """
        name: Railway config

        on:
          pull_request:
            types: [opened, synchronize, reopened, closed]
            paths:
              - .railway/**

        permissions: {}

        jobs:
          plan:
            if: ${{ github.event.action != 'closed' && github.event.pull_request.head.repo.full_name == github.repository }}
            runs-on: ubuntu-latest
            permissions:
              contents: read
              pull-requests: write
              id-token: write
            steps:
              - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1
                with:
                  persist-credentials: false
              - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1
                with:
                  node-version: 24
              - run: npm install --prefix .railway
              - uses: railwayapp/config@9e17d413dbe219f19d62538d9c06b5dbb5e9abf8
                with:
                  command: plan
                  railway-token: ${{ secrets.RAILWAY_TOKEN }}

          apply:
            if: ${{ github.event.action == 'closed' && github.event.pull_request.merged && github.event.pull_request.head.repo.full_name == github.repository }}
            runs-on: ubuntu-latest
            permissions:
              contents: read
              actions: read
              id-token: write
            steps:
              - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1
                with:
                  ref: ${{ github.event.pull_request.merge_commit_sha }}
                  persist-credentials: false
              - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1
                with:
                  node-version: 24
              - run: npm install --prefix .railway
              - uses: railwayapp/config@9e17d413dbe219f19d62538d9c06b5dbb5e9abf8
                with:
                  command: apply
                  railway-token: ${{ secrets.RAILWAY_TOKEN }}
        """;

    private static final String DEPLOY_WORKFLOW = """
        name: Deploy

        on:
        __TRIGGER__
          workflow_dispatch:

        permissions: {}

        concurrency:
          group: deploy
          cancel-in-progress: false

        jobs:
          deploy:
            runs-on: ubuntu-latest
            permissions:
              contents: read
            environment: production
            steps:
              - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1
        __CHECKOUT__
              - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1
                with:
                  node-version: 24
              - run: npm install --global @railway/cli@5.75.0
              - run: railway up --ci --service __NAME__
                env:
                  RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
        """;

    private static final String COMMIT_MSG_HOOK = """
        #!/bin/sh
        subject=$(head -n 1 "$1")
        case "$subject" in
          "Merge "*|"Revert "*|"fixup! "*|"squash! "*|"amend! "*) exit 0 ;;
        esac
        if printf '%s\\n' "$subject" | grep -Eq '^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\\([a-z0-9._/-]+\\))?!?: [^ ].*'; then
          exit 0
        fi
        echo "The commit message does not follow Conventional Commits:" >&2
        echo "  $subject" >&2
        echo "Write it as type(scope): summary, such as feat(orders): show the total." >&2
        echo "Types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test." >&2
        exit 1
        """;

    private static final String KTOR_ROUTES_CONVENTIONS = """
        plugins {
            id("kotlin-conventions")
            id("org.jetbrains.kotlin.jvm")
        }

        val libs = extensions.getByType<VersionCatalogsExtension>().named("libs")
        val ktorCompilerPlugin = "plugin:io.ktor.ktor-compiler-plugin"

        dependencies {
            kotlinCompilerPluginClasspathMain(libs.findLibrary("ktor-compiler-plugin").get())
            implementation(libs.findLibrary("ktor-server-routing-openapi").get())
        }

        kotlin {
            compilerOptions {
                freeCompilerArgs.addAll(
                    "-P",
                    "$ktorCompilerPlugin:openApiEnabled=true",
                    "-P",
                    "$ktorCompilerPlugin:openApiCodeInference=true",
                    "-P",
                    "$ktorCompilerPlugin:openApiOnlyCommented=false",
                )
                freeCompilerArgs.addAll(
                    layout.buildDirectory.map { listOf("-P", "$ktorCompilerPlugin:openApiLogDir=${it.asFile.absolutePath}") },
                )
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
        import java.net.URI
        import java.net.URLDecoder

        private const val MAX_POOL_SIZE = 10
        private const val CONNECTION_TIMEOUT_MILLIS = 5_000L

        private data class ConnectionSettings(
            val url: String,
            val user: String,
            val password: String,
        )

        private fun connectionSettings(databaseUrl: String): ConnectionSettings {
            if (databaseUrl.startsWith("jdbc:")) {
                return ConnectionSettings(databaseUrl, requireEnv("POSTGRES_USER"), requireEnv("POSTGRES_PASSWORD"))
            }
            val uri = URI(databaseUrl)
            val credentials =
                uri.rawUserInfo
                    .orEmpty()
                    .split(':', limit = 2)
                    .map { URLDecoder.decode(it, Charsets.UTF_8) }
            val port = if (uri.port == -1) "" else ":${uri.port}"
            val query = uri.rawQuery?.let { "?$it" }.orEmpty()
            return ConnectionSettings(
                "jdbc:postgresql://${uri.host}$port${uri.rawPath}$query",
                credentials.getOrElse(0) { "" },
                credentials.getOrElse(1) { "" },
            )
        }

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
                val settings = connectionSettings(requireEnv("DATABASE_URL"))
                val dataSource =
                    HikariDataSource(
                        HikariConfig().apply {
                            jdbcUrl = settings.url
                            username = settings.user
                            password = settings.password
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
        __KTOR_SVELTE_IMPORT__

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
        __KTOR_SVELTE_RULES__
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
