import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import { writeLlmsFiles } from './llms';
import { THEME_RESTORE_SCRIPT } from './themeScript';
import { siteThemes } from './themes';
import { socialHead, writeSocialImages } from './socialImages';

const repository = 'https://github.com/nijasc/ktor-svelte';
const siteRoot = '/ktor-svelte/';
const base = process.env.DOCS_BASE ?? siteRoot;
const version = process.env.DOCS_VERSION ?? 'main';
const description = 'Ship a Ktor API and a SvelteKit frontend as one app: one JAR, one port, and a TypeScript client that matches your routes.';

export default defineConfig({
    title: 'ktor-svelte',
    description,
    base,
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ['api-reference.md', 'reference/compatibility-matrix.md', 'node_modules/**'],
    head: [
        ['meta', { name: 'theme-color', content: '#c711e1' }],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
        ['script', {}, THEME_RESTORE_SCRIPT]
    ],
    transformHead({ pageData, siteConfig }) {
        return socialHead(pageData, siteConfig.srcDir, `https://nijasc.github.io${base}`, 'ktor-svelte', description);
    },
    buildEnd(siteConfig) {
        writeSocialImages(siteConfig.outDir, version === 'main' ? 'ktor-svelte' : `ktor-svelte ${version}`);
        writeLlmsFiles({
            srcDir: siteConfig.srcDir,
            outDir: siteConfig.outDir,
            siteUrl: `https://nijasc.github.io${base}`,
            title: `ktor-svelte ${version}`,
            description,
            sidebar: siteConfig.site.themeConfig.sidebar
        });
    },
    markdown: {
        config(md) {
            const fence = md.renderer.rules.fence!;
            md.renderer.rules.fence = (tokens, index, options, env, self) => {
                const token = tokens[index];
                const words = token.info.trim().split(/\s+/);
                if (!words.includes('stackblitz')) return fence(tokens, index, options, env, self);
                token.info = words.filter((word) => word !== 'stackblitz').join(' ');
                const code = Buffer.from(token.content, 'utf8').toString('base64');
                return fence(tokens, index, options, env, self) + `<StackBlitzButton code="${code}" />`;
            };
        }
    },
    vite: {
        plugins: [
            {
                name: 'notes-client',
                resolveId: (id) => (id === 'virtual:notes-client' ? '\0virtual:notes-client' : undefined),
                load(id) {
                    if (id !== '\0virtual:notes-client') return undefined;
                    const directory = fileURLToPath(new URL('../../examples/notes/frontend/src/lib/api/', import.meta.url));
                    const files = Object.fromEntries(
                        readdirSync(directory)
                            .filter((name) => name.endsWith('.ts'))
                            .map((name) => [name, readFileSync(directory + name, 'utf8')])
                    );
                    return `export default ${JSON.stringify(files)};`;
                }
            },
            {
                name: 'site-themes',
                resolveId: (id) => (id === 'virtual:site-themes' ? '\0virtual:site-themes' : undefined),
                load(id) {
                    if (id !== '\0virtual:site-themes') return undefined;
                    return `export default ${JSON.stringify(siteThemes(new URL('../../', import.meta.url)))};`;
                }
            },
            {
                name: 'typescript-generator',
                resolveId(id) {
                    if (id !== 'virtual:typescript-generator') return undefined;
                    const built = fileURLToPath(new URL('../playground/build/compileSync/js/main/productionLibrary/kotlin/playground.mjs', import.meta.url));
                    if (existsSync(built)) return built;
                    if (process.env.CI) throw new Error('Build the generator first: ./gradlew -p docs/playground compileProductionLibraryKotlinJs');
                    return '\0virtual:typescript-generator';
                },
                load(id) {
                    if (id !== '\0virtual:typescript-generator') return undefined;
                    const error = 'The generator is not built. Run ./gradlew -p docs/playground compileProductionLibraryKotlinJs and restart the docs server.';
                    return `export function generateTypeScript() { return ${JSON.stringify(JSON.stringify({ error }))}; }`;
                }
            }
        ],
        define: {
            __DOCS_VERSION__: JSON.stringify(version),
            __DOCS_SITE_ROOT__: JSON.stringify(siteRoot)
        }
    },
    themeConfig: {
        logo: '/logo.svg',
        search: { provider: 'local' },
        nav: [
            { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
            { text: 'Features', link: '/features/typescript', activeMatch: '/features/' },
            { text: 'Recipes', link: '/recipes/', activeMatch: '/recipes/' },
            { text: 'Reference', link: '/reference/ktor', activeMatch: '/reference/' },
            {
                text: 'More',
                items: [
                    { text: 'Examples', link: '/examples' },
                    { text: 'Security', link: '/security' },
                    { text: 'Changelog', link: '/changelog' },
                    { text: 'API reference', link: `https://nijasc.github.io${base}api/` },
                    { text: 'Contributing', link: `${repository}/blob/main/CONTRIBUTING.md` }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'What is ktor-svelte?', link: '/guide/introduction' },
                    { text: 'Compared with other setups', link: '/guide/comparison' },
                    { text: 'Getting started', link: '/guide/getting-started' },
                    { text: 'Configurator', link: '/guide/configurator' },
                    { text: 'Tutorial: a notes app', link: '/guide/tutorial' },
                    { text: 'Add to an existing project', link: '/guide/existing-project' },
                    { text: 'Project structure', link: '/guide/project-structure' },
                    { text: 'Dev workflow', link: '/guide/dev-workflow' },
                    { text: 'Deployment', link: '/guide/deployment' },
                    { text: 'Examples', link: '/examples' }
                ]
            },
            {
                text: 'Features',
                items: [
                    { text: 'Generated TypeScript', link: '/features/typescript' },
                    { text: 'Generator playground', link: '/features/playground' },
                    { text: 'Calling the API', link: '/features/calling-the-api' },
                    { text: 'Validation', link: '/features/validation' },
                    { text: 'Transport and compression', link: '/features/transport' },
                    { text: 'Auth', link: '/features/auth' },
                    { text: 'Runtime config', link: '/features/runtime-config' },
                    { text: 'Built-in endpoints', link: '/features/endpoints' },
                    { text: 'Frontend libraries', link: '/features/frontend-libraries' },
                    { text: 'Security', link: '/security' }
                ]
            },
            {
                text: 'Recipes',
                collapsed: false,
                items: [
                    { text: 'Overview', link: '/recipes/' },
                    { text: 'Sign in with a session cookie', link: '/recipes/sessions' },
                    { text: 'Upload files', link: '/recipes/uploads' },
                    { text: 'Stream live updates', link: '/recipes/live-updates' },
                    { text: 'Page through long lists', link: '/recipes/pagination' },
                    { text: 'Add an admin area', link: '/recipes/admin-area' }
                ]
            },
            {
                text: 'Reference',
                items: [
                    { text: 'Ktor settings', link: '/reference/ktor' },
                    { text: 'Gradle settings and tasks', link: '/reference/gradle' },
                    { text: 'How it works', link: '/reference/how-it-works' },
                    { text: 'Architecture', link: '/reference/architecture' },
                    { text: 'Troubleshooting', link: '/reference/troubleshooting' },
                    { text: 'FAQ', link: '/reference/faq' },
                    { text: 'Compatibility', link: '/reference/compatibility' },
                    { text: 'Changelog', link: '/changelog' },
                    { text: 'API reference', link: `https://nijasc.github.io${base}api/` }
                ]
            },
            {
                text: 'Upgrading',
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/migrations/' },
                    { text: 'To 0.11', link: '/migrations/0.11' },
                    { text: 'To 0.10', link: '/migrations/0.10' },
                    { text: 'To 0.9', link: '/migrations/0.9' },
                    { text: 'To 0.8', link: '/migrations/0.8' },
                    { text: 'To 0.7', link: '/migrations/0.7' },
                    { text: 'To 0.6', link: '/migrations/0.6' }
                ]
            }
        ],
        socialLinks: [{ icon: 'github', link: repository }],
        editLink: {
            pattern: `${repository}/edit/main/docs/:path`,
            text: 'Edit this page on GitHub'
        },
        outline: { level: [2, 3] },
        footer: {
            message: `Documentation for ktor-svelte ${version}. Released under the Apache 2.0 license.`,
            copyright: 'Made with Ktor, SvelteKit and VitePress.'
        }
    }
});
