package io.github.nijasc.ktor.svelte.gradle.tasks

import io.github.nijasc.ktor.svelte.gradle.libraries.routeOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class RecordTestTest {
    private val routes = listOf("/", "/(app)/board", "/(app)/tasks/[id]", "/(app)/tasks/new", "/login", "/files/[...path]").map(::routeOf)

    private val recorded =
        """
        import com.microsoft.playwright.junit.UsePlaywright;
        import com.microsoft.playwright.Page;
        import com.microsoft.playwright.options.*;

        import org.junit.jupiter.api.*;
        import static com.microsoft.playwright.assertions.PlaywrightAssertions.*;

        @UsePlaywright
        public class TestExample {
          @Test
          void test(Page page) {
            page.navigate("http://localhost:51234/login");
            page.getByLabel("Email").fill("ada@example.com");
            page.getByLabel("Password").fill("pa${'$'}${'$'}word");
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign in")).click();
            page.navigate("http://localhost:51234/tasks/12");
            page.navigate("http://localhost:51234/board?mine=true");
            page.navigate("https://example.com/docs");
            Page page1 = page.waitForPopup(() -> {
              page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Docs")).click();
            });
            assertThat(page.locator("#signed-in-as")).containsText("Ada Lovelace");
          }
        }
        """.trimIndent()

    @Test
    fun `an address of the app becomes its typed route`() {
        assertEquals("FrontendRoutes.home", typedRoute("/", routes))
        assertEquals("FrontendRoutes.board", typedRoute("/board", routes))
        assertEquals("FrontendRoutes.tasksNew", typedRoute("/tasks/new", routes))
        assertEquals("FrontendRoutes.tasksId(\"12\")", typedRoute("/tasks/12/", routes))
        assertNull(typedRoute("/board?mine=true", routes))
        assertNull(typedRoute("/nowhere", routes))
        assertNull(typedRoute("/files/a/b", routes))
    }

    @Test
    fun `recorded Java steps become Kotlin steps with typed routes`() {
        assertEquals(
            listOf(
                "page.navigate(FrontendRoutes.login)",
                "page.getByLabel(\"Email\").fill(\"ada@example.com\")",
                "page.getByLabel(\"Password\").fill(\"pa\\${'$'}\\${'$'}word\")",
                "page.getByRole(AriaRole.BUTTON, Page.GetByRoleOptions().setName(\"Sign in\")).click()",
                "page.navigate(FrontendRoutes.tasksId(\"12\"))",
                "page.navigate(\"/board?mine=true\")",
                "page.navigate(\"https://example.com/docs\")",
                "val page1 = page.waitForPopup({",
                "page.getByRole(AriaRole.LINK, Page.GetByRoleOptions().setName(\"Docs\")).click()",
                "})",
                "assertThat(page.locator(\"#signed-in-as\")).containsText(\"Ada Lovelace\")",
            ),
            recordedSteps(recorded, "http://localhost:51234", routes),
        )
    }

    @Test
    fun `the steps are written as a test of the kit, with the imports they need`() {
        val steps = listOf("page.navigate(FrontendRoutes.login)", "assertThat(page.getByRole(AriaRole.HEADING)).isVisible()")
        assertEquals(
            "import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat\n" +
                "import com.microsoft.playwright.options.AriaRole\n" +
                "import demo.generated.FrontendRoutes\n" +
                "import io.github.nijasc.ktor.svelte.test.BrowserTest\n" +
                "import kotlin.test.Test\n\n" +
                "class SignInAgainBrowserTest : BrowserTest() {\n" +
                "    @Test\n" +
                "    fun `sign in again`() {\n" +
                "        page.navigate(FrontendRoutes.login)\n" +
                "        assertThat(page.getByRole(AriaRole.HEADING)).isVisible()\n" +
                "    }\n" +
                "}\n",
            recordedTest("SignInAgain", steps, "demo.generated"),
        )
        val plain = recordedTest("Open", listOf("page.navigate(\"/\")"), null)
        assertEquals(listOf("import io.github.nijasc.ktor.svelte.test.BrowserTest", "import kotlin.test.Test"), plain.lines().take(2))
    }
}
