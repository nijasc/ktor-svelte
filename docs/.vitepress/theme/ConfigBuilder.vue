<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const themePairs = {
    shadcn: { label: 'shadcn (light and dark)', light: 'ShadcnLight', dark: 'ShadcnDark' },
    daisy: { label: 'DaisyUI (light and dark)', light: 'Light', dark: 'Dark' },
    corporate: { label: 'Corporate and Business', light: 'Corporate', dark: 'Business' },
    nord: { label: 'Nord and Dim', light: 'Nord', dark: 'Dim' },
    cupcake: { label: 'Cupcake and Dracula', light: 'Cupcake', dark: 'Dracula' }
} as const;

type ThemePair = keyof typeof themePairs;

const c = reactive({
    tailwind: true,
    typography: false,
    forms: false,
    daisy: true,
    themes: 'shadcn' as ThemePair,
    lucide: true,
    allIcons: false,
    i18n: false,
    locales: 'en, de',
    urlPrefix: false,
    images: false,
    toasts: true,
    pinBun: false,
    bunVersion: '1.3.14',
    sourceMaps: false,
    generateTs: true,
    apiDocs: true,
    xml: false,
    healthEndpoint: false,
    statusEndpoint: false,
    siteUrl: '',
    sitemap: true,
    maxJsonStringLength: false,
    manualRouting: false,
    loginLimit: false,
    extraOrigin: '',
    analytics: '',
    devPanel: true,
    browserLogs: true
});

function lines(indent: string, items: (string | false | undefined)[]): string[] {
    return items.filter((item): item is string => typeof item === 'string').map((item) => indent + item);
}

const locales = computed(() =>
    c.locales
        .split(',')
        .map((locale) => locale.trim())
        .filter((locale) => /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(locale))
);

const gradle = computed(() => {
    const pair = themePairs[c.themes];
    const imports = lines('', [
        c.daisy && 'import io.github.nijasc.ktor.svelte.gradle.DaisyTheme',
        c.i18n && c.urlPrefix && 'import io.github.nijasc.ktor.svelte.gradle.LocaleStrategy'
    ]);
    const libraries: string[] = [];
    if (c.tailwind && !c.daisy && !c.typography && !c.forms) libraries.push('tailwind()');
    else if (c.tailwind || c.typography || c.forms) {
        if (c.typography || c.forms) libraries.push('tailwind {', ...lines('    ', [c.typography && 'typography()', c.forms && 'forms()']), '}');
    }
    if (c.daisy) {
        libraries.push(
            'daisyUi {',
            `    themes(DaisyTheme.${pair.light}, DaisyTheme.${pair.dark})`,
            `    defaultTheme(DaisyTheme.${pair.light})`,
            `    prefersDark(DaisyTheme.${pair.dark})`,
            '}'
        );
    }
    if (c.lucide) libraries.push(...(c.allIcons ? ['lucide {', '    allIcons()', '}'] : ['lucide()']));
    if (c.images) libraries.push('images()');
    if (c.toasts) libraries.push('toasts()');
    if (c.i18n && locales.value.length > 0) {
        libraries.push(
            'i18n {',
            `    locales(${locales.value.map((locale) => `"${locale}"`).join(', ')})`,
            ...lines('    ', [c.urlPrefix && 'strategy = LocaleStrategy.UrlPrefix']),
            '}'
        );
    }
    const body = [
        ...lines('    ', [c.pinBun && `bunVersion = "${c.bunVersion}"`, c.sourceMaps && 'includeSourceMaps = true']),
        ...(libraries.length > 0 ? ['    libraries {', ...libraries.map((line) => `        ${line}`), '    }'] : [])
    ];
    if (body.length === 0) return '';
    return [...imports, ...(imports.length > 0 ? [''] : []), 'svelte {', ...body, '}'].join('\n');
});

const ktor = computed(() => {
    const origins = c.extraOrigin.trim();
    const analytics = c.analytics.trim();
    const transport = c.xml ? ['transport {', '    json()', '    xml()', '}'] : [];
    const security = analytics
        ? ['securityHeaders {', `    allowCspSources("script-src", "${analytics}")`, `    allowCspSources("connect-src", "${analytics}")`, '}']
        : [];
    const rateLimit = c.loginLimit ? ['rateLimit {', '    limit("login", requests = 5, per = 1.minutes)', '}'] : [];
    const dev = !c.devPanel || !c.browserLogs ? ['dev {', ...lines('    ', [!c.devPanel && 'panel = false', !c.browserLogs && 'browserLogs = false']), '}'] : [];
    const body = [
        ...lines('    ', [
            c.generateTs && 'generateTs = true',
            c.apiDocs && 'apiDocs = true',
            c.manualRouting && 'routing = SvelteRouting.Manual',
            c.healthEndpoint && 'healthEndpoint = true',
            c.statusEndpoint && 'statusEndpoint = true',
            !c.sitemap && 'sitemap = false',
            c.sitemap && c.siteUrl.trim() !== '' && `siteUrl = "${c.siteUrl.trim()}"`,
            c.maxJsonStringLength && 'maxJsonStringLength = 100_000',
            origins !== '' && `allowedOrigins("${origins}")`
        ]),
        ...[transport, security, rateLimit, dev].flatMap((block) => (block.length > 0 ? ['', ...block.map((line) => `    ${line}`)] : []))
    ];
    const imports = [
        'import io.github.nijasc.ktor.svelte.Svelte',
        ...lines('', [c.manualRouting && 'import io.github.nijasc.ktor.svelte.SvelteRouting', c.loginLimit && 'import kotlin.time.Duration.Companion.minutes'])
    ];
    const install = body.length === 0 ? ['install(Svelte)'] : ['install(Svelte) {', ...body.filter((line, index) => index !== 0 || line !== ''), '}'];
    return [...imports, '', ...install].join('\n');
});

interface Recommendation {
    area: string;
    text: string;
    apply: () => void;
}

const recommendations = computed<Recommendation[]>(() => {
    const list: (Recommendation | false)[] = [
        !c.generateTs && { area: 'Developer experience', text: 'Generate a typed TypeScript client from your routes.', apply: () => (c.generateTs = true) },
        c.generateTs &&
            !c.toasts && { area: 'Developer experience', text: 'Show failed API calls as toasts, without error handling code.', apply: () => (c.toasts = true) },
        !c.apiDocs && { area: 'Developer experience', text: 'Browse and try your API in Swagger UI while developing.', apply: () => (c.apiDocs = true) },
        !c.pinBun && { area: 'Operations', text: 'Pin Bun so CI and new laptops build without installing anything.', apply: () => (c.pinBun = true) },
        !c.healthEndpoint && { area: 'Operations', text: 'Add a health endpoint for Docker, Kubernetes or a load balancer.', apply: () => (c.healthEndpoint = true) },
        c.sitemap &&
            c.siteUrl.trim() === '' && {
                area: 'Operations',
                text: 'Set your public address so sitemap.xml and robots.txt never depend on the Host header.',
                apply: () => (c.siteUrl = 'https://example.com')
            },
        !c.maxJsonStringLength && { area: 'Security', text: 'Refuse JSON bodies with huge strings.', apply: () => (c.maxJsonStringLength = true) },
        !c.loginLimit && { area: 'Security', text: 'Add a strict rate limit for your login route.', apply: () => (c.loginLimit = true) },
        c.sourceMaps && { area: 'Security', text: 'Leave source maps out of the production JAR.', apply: () => (c.sourceMaps = false) },
        !c.images && { area: 'Performance', text: 'Resize images and serve AVIF and WebP automatically.', apply: () => (c.images = true) },
        c.lucide &&
            c.allIcons && { area: 'Performance', text: 'Ship only the Lucide icons you use, unless users pick icons.', apply: () => (c.allIcons = false) },
        c.daisy &&
            c.themes !== 'shadcn' && { area: 'Design', text: 'Try the shadcn themes, the default for new projects.', apply: () => (c.themes = 'shadcn') }
    ];
    return list.filter((item): item is Recommendation => item !== false);
});

const copied = ref('');

async function copy(name: string, text: string) {
    await navigator.clipboard.writeText(text);
    copied.value = name;
    setTimeout(() => (copied.value = ''), 1500);
}
</script>

<template>
    <div class="configurator">
        <form class="options" @submit.prevent>
            <fieldset>
                <legend>Frontend libraries <span>svelte { }</span></legend>
                <label><input v-model="c.tailwind" type="checkbox" /> Tailwind</label>
                <label class="nested"><input v-model="c.typography" type="checkbox" /> Typography plugin</label>
                <label class="nested"><input v-model="c.forms" type="checkbox" /> Forms plugin</label>
                <label><input v-model="c.daisy" type="checkbox" /> DaisyUI</label>
                <label v-if="c.daisy" class="nested">
                    Themes
                    <select v-model="c.themes">
                        <option v-for="(pair, key) in themePairs" :key="key" :value="key">{{ pair.label }}</option>
                    </select>
                </label>
                <label><input v-model="c.lucide" type="checkbox" /> Lucide icons</label>
                <label v-if="c.lucide" class="nested"><input v-model="c.allIcons" type="checkbox" /> Keep all icons (icon pickers)</label>
                <label><input v-model="c.i18n" type="checkbox" /> i18n</label>
                <label v-if="c.i18n" class="nested">Locales <input v-model="c.locales" type="text" spellcheck="false" /></label>
                <label v-if="c.i18n" class="nested"><input v-model="c.urlPrefix" type="checkbox" /> Language in the URL, for SEO</label>
                <label><input v-model="c.images" type="checkbox" /> Optimized images</label>
                <label><input v-model="c.toasts" type="checkbox" /> Error toasts</label>
            </fieldset>
            <fieldset>
                <legend>Build <span>svelte { }</span></legend>
                <label><input v-model="c.pinBun" type="checkbox" /> Pin and download Bun</label>
                <label v-if="c.pinBun" class="nested">Version <input v-model="c.bunVersion" type="text" spellcheck="false" /></label>
                <label><input v-model="c.sourceMaps" type="checkbox" /> Include source maps</label>
            </fieldset>
            <fieldset>
                <legend>API <span>install(Svelte) { }</span></legend>
                <label><input v-model="c.generateTs" type="checkbox" /> Generate TypeScript</label>
                <label><input v-model="c.apiDocs" type="checkbox" /> Swagger UI in development</label>
                <label><input v-model="c.xml" type="checkbox" /> XML next to JSON</label>
                <label><input v-model="c.manualRouting" type="checkbox" /> Place the frontend yourself (auth)</label>
            </fieldset>
            <fieldset>
                <legend>Operations</legend>
                <label><input v-model="c.healthEndpoint" type="checkbox" /> Health endpoint</label>
                <label><input v-model="c.statusEndpoint" type="checkbox" /> Status endpoint</label>
                <label><input v-model="c.sitemap" type="checkbox" /> sitemap.xml and robots.txt</label>
                <label v-if="c.sitemap" class="nested">Site URL <input v-model="c.siteUrl" type="url" placeholder="https://example.com" /></label>
            </fieldset>
            <fieldset>
                <legend>Security</legend>
                <label><input v-model="c.maxJsonStringLength" type="checkbox" /> Limit JSON string length</label>
                <label><input v-model="c.loginLimit" type="checkbox" /> Rate limit for login</label>
                <label>Extra allowed origin <input v-model="c.extraOrigin" type="url" placeholder="https://admin.example.com" /></label>
                <label>Analytics host for CSP <input v-model="c.analytics" type="url" placeholder="https://plausible.io" /></label>
            </fieldset>
            <fieldset>
                <legend>Development</legend>
                <label><input v-model="c.devPanel" type="checkbox" /> API panel in the page</label>
                <label><input v-model="c.browserLogs" type="checkbox" /> Browser logs in the console</label>
            </fieldset>
        </form>
        <div class="output">
            <section v-if="recommendations.length > 0" class="recommendations" aria-label="Recommendations">
                <h3>Recommended</h3>
                <ul>
                    <li v-for="item in recommendations" :key="item.text">
                        <span class="area">{{ item.area }}</span>
                        <span>{{ item.text }}</span>
                        <button type="button" @click="item.apply()">Apply</button>
                    </li>
                </ul>
            </section>
            <p v-else class="done">Nothing left to recommend.</p>
            <div class="block">
                <div class="head">
                    <strong>build.gradle.kts</strong>
                    <button v-if="gradle" type="button" @click="copy('gradle', gradle)">{{ copied === 'gradle' ? 'Copied' : 'Copy' }}</button>
                </div>
                <pre v-if="gradle"><code>{{ gradle }}</code></pre>
                <p v-else class="empty">Nothing to add: the defaults fit.</p>
            </div>
            <div class="block">
                <div class="head">
                    <strong>Application.kt</strong>
                    <button type="button" @click="copy('ktor', ktor)">{{ copied === 'ktor' ? 'Copied' : 'Copy' }}</button>
                </div>
                <pre><code>{{ ktor }}</code></pre>
            </div>
            <p class="hint">Only settings that differ from the defaults are shown. Run <code>./gradlew svelteSync</code> after changing libraries, and <code>./gradlew svelteConfig</code> to review the result.</p>
        </div>
    </div>
</template>

<style scoped>
.configurator {
    display: grid;
    gap: 20px;
    margin: 24px 0;
}

@media (min-width: 960px) {
    .configurator {
        grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    }
}

fieldset {
    margin: 0 0 12px;
    padding: 12px 14px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
}

legend {
    padding: 0 6px;
    font-weight: 600;
}

legend span {
    font-family: var(--vp-font-family-mono);
    font-size: 12px;
    font-weight: 400;
    color: var(--vp-c-text-2);
}

label {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    padding: 3px 0;
    font-size: 14px;
}

label.nested {
    margin-left: 24px;
    color: var(--vp-c-text-2);
}

input[type='text'],
input[type='url'],
select {
    flex: 1;
    min-width: 140px;
    padding: 4px 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    font-size: 13px;
}

.recommendations {
    padding: 12px 14px;
    border-radius: 10px;
    background: var(--vp-c-brand-soft);
}

.recommendations h3 {
    margin: 0 0 8px;
    font-size: 15px;
}

.recommendations ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.recommendations li {
    display: grid;
    grid-template-columns: 9em 1fr auto;
    gap: 8px;
    align-items: center;
    padding: 4px 0;
    font-size: 14px;
}

.area {
    color: var(--vp-c-text-2);
    font-size: 12px;
}

button {
    padding: 2px 10px;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 6px;
    color: var(--vp-c-brand-1);
    font-size: 13px;
}

.block {
    margin-top: 16px;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    font-size: 14px;
}

pre {
    margin: 0;
    padding: 12px 14px;
    overflow-x: auto;
    border-radius: 8px;
    background: var(--vp-code-block-bg);
    font-family: var(--vp-font-family-mono);
    font-size: 13px;
    line-height: 1.6;
}

.empty,
.done,
.hint {
    color: var(--vp-c-text-2);
    font-size: 14px;
}
</style>
