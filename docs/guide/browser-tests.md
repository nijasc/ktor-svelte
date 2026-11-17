# Browser tests

Tests that drive a real browser against the packaged app, written in Kotlin.

<Badge type="info" text="Gradle" /> <Badge type="tip" text="ktor-svelte-test" />

A unit test cannot tell you that the login page still logs someone in. A browser test can, and with ktor-svelte both halves of the app are in one build, so the test can be Kotlin too: it starts the JAR you ship, opens a browser, and uses your typed routes and your own classes.

## Quick start

1. Add a test suite called `browserTest` (see [Set up](#set-up)).
2. Write a class that extends `BrowserTest` in `src/browserTest/kotlin`.
3. Run it:

```bash
./gradlew browserTest
```

Or let the browser write the first test for you with [`svelteRecordTest`](#record-a-test).

## Set up

Add a test suite called `browserTest`:

```kotlin no-check
plugins {
    `jvm-test-suite`
}

testing {
    suites {
        register<JvmTestSuite>("browserTest") {
            useJUnitJupiter()
            dependencies {
                implementation(project())
            }
        }
    }
}
```

The name is what the ktor-svelte plugin looks for. For that suite it:

- adds `io.github.nijasc:ktor-svelte-test`, which brings [Playwright](https://playwright.dev/java/) (unless you turned `addRuntimeDependency` off, then add it yourself),
- packages the app before the tests, with `buildFatJar` or `shadowJar` when the project has them and `installDist` otherwise,
- tells the tests where the packaged app is,
- passes the browser on: `./gradlew browserTest -Pbrowser=firefox`. Chromium unless you say so, and `webkit` is the third.

`implementation(project())` gives the tests your typed routes and your classes. Tests go in `src/browserTest/kotlin`.

## A test

```kotlin no-check
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import io.github.nijasc.ktor.svelte.test.BrowserTest
import io.github.nijasc.ktor.svelte.test.problems
import kotlin.test.Test
import kotlin.test.assertEquals

class NotesBrowserTest : BrowserTest() {
    @Test
    fun `a new note shows up in the list`() {
        val problems = page.problems()
        val note: Note = api.post("/api/notes", NoteInput(title = "Written by a test"))

        page.navigate(FrontendRoutes.notes)
        assertThat(page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName(note.title))).isVisible()
        assertEquals(emptyList(), problems)
    }
}
```

`BrowserTest` gives every test:

| Member | What it is |
| --- | --- |
| `page` | A fresh Playwright page in its own browser context, so tests do not share cookies. Paths are relative to the app |
| `context` | That context, and `newContext()` for a second visitor in the same test |
| `api` | The app's API, called from that context: with its cookies, so as whoever the page is signed in as |
| `app` | The running app, with its `url` and its `log` file |

And you can override:

| Override | Default | What it does |
| --- | --- | --- |
| `environment` | empty | Environment variables for the app. See [What the app needs](#what-the-app-needs) |
| `locale` | `"en-US"` | The browser's language for every context |
| `serviceWorkers` | `false` | Lets service workers run. See [Service workers](#service-workers) |

The app is started once and shared by all tests of the run. It is started the way production starts it, without the development flag, on a free port.

## Record a test

The slow part of a browser test is finding the right way to name each element. Let the browser tell you: click through the app once, and the steps are written down.

```bash
./gradlew svelteRecordTest --name=SignIn
```

The task packages and starts the app and opens it in a browser, with Playwright's recorder next to it. Do what the test should do. The recorder's toolbar can also add assertions: that an element is visible, or has a text. Close the browser, and the steps are in `src/browserTest/kotlin/SignInBrowserTest.kt`:

```kotlin no-check
class SignInBrowserTest : BrowserTest() {
    @Test
    fun `sign in`() {
        page.navigate(FrontendRoutes.login)
        page.getByLabel("Email").fill("ada@example.com")
        page.getByLabel("Password").fill("secret")
        page.getByRole(AriaRole.BUTTON, Page.GetByRoleOptions().setName("Sign in")).click()
        assertThat(page.locator("#signed-in-as")).containsText("Ada Lovelace")
    }
}
```

- An address of your app is written as its typed route, `FrontendRoutes.tasksId("12")` for `/tasks/12`, so the test breaks at compile time when the page moves. An address with a query string stays a path.
- It is a starting point to edit, and the file is yours.
- What it typed in is in the file as you typed it, passwords too, so replace those before you commit.
- The task never replaces a test that is already there.
- Add `-Pbrowser=firefox` to record in another browser.

## The API with your own classes

`api` sends and reads JSON with kotlinx.serialization, so a request body and an answer are your classes:

```kotlin no-check
val user: User = api.post("/api/session", Login("ada@example.com", "secret"))
val notes: List<Note> = api.get("/api/notes")
val changed: Note = api.put("/api/notes/${note.id}", NoteInput(title = "Renamed"))
api.delete("/api/notes/${note.id}")
```

An answer of 400 or above fails the test with the status and the body. To check a refusal, catch it or ask for the status alone:

```kotlin no-check
val refused = assertFailsWith<ApiFailure> { api.get<List<Note>>("/api/notes") }
assertEquals(401, refused.status)
assertEquals(403, api.status("DELETE", "/api/admin/users/1"))
```

::: tip Sign in through the API
Because `api` shares the page's cookies, signing in through `api` signs the page in, which is much faster than filling in the login form in every test.
:::

## What the app needs

The app runs with the environment of the build. Override `environment` for what the tests should set, such as a fresh database:

```kotlin no-check
class NotesBrowserTest : BrowserTest() {
    override val environment = mapOf("DATABASE_URL" to "jdbc:h2:mem:tests", "ADMIN_PASSWORD" to "secret")
}
```

Test classes with the same environment share one app. A class with another environment gets its own.

The port goes to the app as the `PORT` variable and as `-port`, as with the [smoke test](deployment.md#smoke-test), so the app has to read one of them.

## Problems on the page

`page.problems()` collects what went wrong while the test ran: errors in the console, uncaught exceptions and answers of 500 and above. Assert that it is empty at the end of a test, and a broken page fails even when the thing you looked at happened to work.

```kotlin no-check
val problems = page.problems()
page.navigate(FrontendRoutes.board)
// ... the test ...
assertEquals(emptyList(), problems)
```

## Service workers

Browser contexts block service workers by default. In WebKit, a page controlled by a service worker sends its requests past `page.route` and `context.route`, so a request you stubbed would not be stubbed. Blocking the worker keeps stubs working in every browser.

To test the [installable app](../features/installable-app.md)'s worker or its offline page, let them run in that test class:

```kotlin no-check
class OfflineBrowserTest : BrowserTest() {
    override val serviceWorkers = true

    @Test
    fun `the offline page shows without a network`() {
        page.navigate("/")
        page.waitForFunction("navigator.serviceWorker.controller !== null")
        context.setOffline(true)
        page.reload()
        assertThat(page.getByText("You are offline")).isVisible()
    }
}
```

## Accessibility

Many accessibility problems can be found by a machine: an image without a text, text that is too pale to read, a form field without a label. [axe](https://github.com/dequelabs/axe-core) finds them, and a task runs it on your app with no test to write:

```bash
./gradlew svelteVerifyA11y
```

```text
axe found 2 accessibility problems on 4 pages:
  /about in the light theme shadcn-light: image-alt: Images must have alternative text ([img])
  /about in the dark theme dracula: color-contrast: Elements must meet minimum color contrast ratio thresholds ([#content > p])
```

The task packages the app, starts it, and opens every prerendered page in a browser, twice: once light and once dark. With `daisyUi` it uses your `defaultTheme` and your `prefersDark` theme, because contrast is where themes differ. Without it the browser asks for light and for dark colors. It checks the rules of WCAG 2.1 at levels A and AA. The report is also written to `build/ktor-svelte/a11y.txt`.

| Option | What it does |
| --- | --- |
| `--path=/pricing` | Adds a page that is not prerendered. Can be given more than once |
| `-Pbrowser=firefox` | Picks another browser |

- Pages behind a login cannot be checked this way, because the task is not signed in: check those in a browser test.
- It is not part of `check`. It needs a browser, which is downloaded the first time, and the environment the app needs.

In a browser test the same check is one call, for any page in any state:

```kotlin no-check
page.navigate(FrontendRoutes.settings)
assertEquals(emptyList(), page.accessibilityProblems())
```

While you build a page, the [dev panel](./dev-workflow.md#accessibility-check) runs the same check on the page you are looking at.

::: warning What a clean run means
A machine finds about a third of what makes a page hard to use. A clean run means the easy mistakes are gone, not that the page is accessible.
:::

## Browsers

| Browser | How to pick it |
| --- | --- |
| Chromium | The default |
| Firefox | `-Pbrowser=firefox` |
| WebKit | `-Pbrowser=webkit` |

The same property works for `browserTest`, `svelteRecordTest` and `svelteVerifyA11y`.

Playwright downloads the browser the first time it is used. A fresh Linux machine, such as a CI runner, also lacks system packages that a browser needs. Playwright's own command line installs both, and it is on the suite's classpath, so a small task runs it:

```kotlin no-check
tasks.register<JavaExec>("installBrowsers") {
    classpath = sourceSets["browserTest"].runtimeClasspath
    mainClass = "com.microsoft.playwright.CLI"
    args("install", "--with-deps", providers.gradleProperty("browser").orElse("chromium").get())
}
```

## Full example

A test class that signs in through the API, checks a page as a signed-in user, checks it for accessibility, and runs in CI.

::: code-group

```kotlin no-check [BoardBrowserTest.kt]
import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import io.github.nijasc.ktor.svelte.test.BrowserTest
import io.github.nijasc.ktor.svelte.test.accessibilityProblems
import io.github.nijasc.ktor.svelte.test.problems
import kotlin.test.Test
import kotlin.test.assertEquals

class BoardBrowserTest : BrowserTest() {
    override val environment = mapOf("DATABASE_URL" to "jdbc:h2:mem:board", "ADMIN_PASSWORD" to "secret")

    @Test
    fun `a signed-in user sees their tasks`() {
        val problems = page.problems()
        api.post<Login, User>("/api/session", Login("admin@example.com", "secret"))
        api.post<TaskInput, Task>("/api/tasks", TaskInput(title = "Water the plants"))

        page.navigate(FrontendRoutes.board)

        assertThat(page.getByText("Water the plants")).isVisible()
        assertEquals(emptyList(), page.accessibilityProblems())
        assertEquals(emptyList(), problems)
    }

    @Test
    fun `a visitor is sent to the login page`() {
        page.navigate(FrontendRoutes.board)
        assertThat(page).hasURL(Regex(".*/login\\?next=.*"))
    }
}
```

```yaml [.github/workflows/browser-tests.yml]
name: Browser tests
on: [pull_request]
jobs:
  browser-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: 21
      - uses: gradle/actions/setup-gradle@v4
      - run: ./gradlew installBrowsers
      - run: ./gradlew browserTest svelteVerifyA11y
```

:::

## Use cases

- Check the flows that must never break: sign in, sign up, checkout.
- Catch console errors and 500s that unit tests miss, with `page.problems()`.
- Check pages for accessibility in CI with [`svelteVerifyA11y`](./checks-and-tooling.md#svelteverifya11y), and pages behind a login with `accessibilityProblems()`.
- Check the production build itself with the [smoke test](./deployment.md#smoke-test), which needs no browser.
