import { readdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const [emailsDir, outputFile, localeList = ''] = process.argv.slice(2);
const root = process.cwd();
const locales = localeList ? localeList.split(',') : [];
const ignoredProps = new Set(['children', 'then', 'toJSON']);

function recordingProps(names) {
    return new Proxy(
        {},
        {
            get(_, key) {
                if (typeof key !== 'string' || key.startsWith('$$') || ignoredProps.has(key)) return undefined;
                if (!names.includes(key)) names.push(key);
                return `${key}`;
            },
        },
    );
}

const server = await createServer({
    configFile: false,
    root,
    tsconfig: resolve(dirname(fileURLToPath(import.meta.url)), 'tsconfig.json'),
    logLevel: 'error',
    appType: 'custom',
    clearScreen: false,
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    resolve: { alias: { $lib: resolve(root, 'src/lib') } },
    optimizeDeps: { noDiscovery: true, include: [] },
    plugins: [svelte({ configFile: false, emitCss: false, compilerOptions: { css: 'injected' } })],
});

let failed = false;
try {
    const { render } = await server.ssrLoadModule('svelte/server');
    const templates = [];
    const files = readdirSync(emailsDir, { withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.svelte'))
        .map((entry) => entry.name)
        .sort();
    for (const file of files) {
        const name = file.slice(0, -'.svelte'.length);
        try {
            const component = (await server.ssrLoadModule(resolve(emailsDir, file))).default;
            for (const locale of locales.length ? locales : ['default']) {
                globalThis.__ktorSvelteLocale = locales.length ? locale : undefined;
                const props = [];
                const { head, body } = render(component, { props: recordingProps(props) });
                templates.push({ name, locale, props, head, body });
            }
        } catch (error) {
            failed = true;
            console.error(`ktor-svelte could not render src/emails/${file}: ${error?.stack ?? error}`);
        }
    }
    if (!failed) writeFileSync(outputFile, JSON.stringify(templates));
} finally {
    await server.close();
}
if (failed) process.exit(1);
