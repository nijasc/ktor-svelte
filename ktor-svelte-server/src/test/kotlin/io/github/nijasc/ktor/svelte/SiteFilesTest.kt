package io.github.nijasc.ktor.svelte

import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.install
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class SiteFilesTest {
    private fun ApplicationTestBuilder.serve(
        build: Path = fixtureBuild(),
        configure: SvelteConfig.() -> Unit = {},
    ) {
        application {
            install(Svelte) {
                source = SvelteSource.Directory(build)
                dev { mode = DevMode.NEVER }
                configure()
            }
        }
    }

    @Test
    fun `sitemap lists every prerendered page except the fallback and the 404 page`() =
        testApplication {
            serve()
            val response = client.get("/sitemap.xml") { header(HttpHeaders.Host, "shop.example.com") }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("application/xml; charset=UTF-8", response.headers[HttpHeaders.ContentType])
            assertEquals("no-cache", response.headers[HttpHeaders.CacheControl])
            assertEquals(
                """
                <?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                  <url><loc>http://shop.example.com/</loc></url>
                  <url><loc>http://shop.example.com/about</loc></url>
                  <url><loc>http://shop.example.com/docs/</loc></url>
                </urlset>

                """.trimIndent(),
                response.bodyAsText(),
            )
        }

    @Test
    fun `siteUrl replaces the request host and page paths are encoded`() =
        testApplication {
            serve(fixtureBuild(mapOf("index.html" to "home", "café & bar.html" to "bar"))) { siteUrl = "https://example.com/" }
            val body = client.get("/sitemap.xml") { header(HttpHeaders.Host, "evil.example") }.bodyAsText()
            assertTrue("<loc>https://example.com/</loc>" in body, body)
            assertTrue("<loc>https://example.com/caf%C3%A9%20&amp;%20bar</loc>" in body, body)
            assertTrue("evil" !in body, body)
        }

    @Test
    fun `robots allows pages, keeps crawlers out of the API and points to the sitemap`() =
        testApplication {
            serve { apiPrefixes("/api", "/rpc") }
            val response = client.get("/robots.txt") { header(HttpHeaders.Host, "example.com") }
            assertEquals(HttpStatusCode.OK, response.status)
            assertEquals("text/plain; charset=UTF-8", response.headers[HttpHeaders.ContentType])
            assertEquals(
                "User-agent: *\nDisallow: /api/\nDisallow: /rpc/\nDisallow: /_ktor-svelte/\n\nSitemap: http://example.com/sitemap.xml\n",
                response.bodyAsText(),
            )
        }

    @Test
    fun `files in the build win over the generated ones`() =
        testApplication {
            serve(fixtureBuild(mapOf("index.html" to "home", "robots.txt" to "User-agent: *\nDisallow: /", "sitemap.xml" to "<own/>")))
            assertEquals("User-agent: *\nDisallow: /", client.get("/robots.txt").bodyAsText())
            assertEquals("<own/>", client.get("/sitemap.xml").bodyAsText())
        }

    @Test
    fun `turning the sitemap off answers both paths with 404`() =
        testApplication {
            serve { sitemap = false }
            assertEquals(HttpStatusCode.NotFound, client.get("/sitemap.xml").status)
            assertEquals(HttpStatusCode.NotFound, client.get("/robots.txt").status)
        }

    @Test
    fun `manual routing only serves them where svelte() is routed`() =
        testApplication {
            application {
                install(Svelte) {
                    source = SvelteSource.Directory(fixtureBuild())
                    routing = SvelteRouting.Manual
                    dev { mode = DevMode.NEVER }
                }
                routing {
                    svelte(public = listOf("/", "/about"))
                }
            }
            assertEquals(HttpStatusCode.NotFound, client.get("/sitemap.xml").status)
        }
}
