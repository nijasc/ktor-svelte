<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const scripts = 'https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts';

const projectName = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
const packageName = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)*$/;
const localeList = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*(,[a-z]{2,3}(-[A-Za-z0-9]{2,8})*)*$/;

const form = reactive({
    name: 'my-app',
    package: 'com.example.app',
    packageManager: 'auto',
    generateTs: true,
    daisy: true,
    tailwind: true,
    lucide: true,
    i18n: false,
    locales: 'en,de',
    localeStrategy: 'Cookie',
    auth: false,
    database: false,
    flyway: true,
    ideaExt: true,
    conventions: false,
    docker: true,
    githubActions: true,
    git: true,
    openIdea: false
});

const toggles: { key: keyof typeof form; flag: string; label: string; fallback: boolean; group: string }[] = [
    { key: 'generateTs', flag: 'generate-ts', label: 'TypeScript client from your routes', fallback: true, group: 'Frontend' },
    { key: 'daisy', flag: 'daisy', label: 'DaisyUI, includes Tailwind', fallback: true, group: 'Frontend' },
    { key: 'tailwind', flag: 'tailwind', label: 'Tailwind', fallback: true, group: 'Frontend' },
    { key: 'lucide', flag: 'lucide', label: 'Lucide icons', fallback: true, group: 'Frontend' },
    { key: 'i18n', flag: 'i18n', label: 'Translations (i18n)', fallback: false, group: 'Frontend' },
    { key: 'auth', flag: 'auth', label: 'Sign in with cookie sessions', fallback: false, group: 'Backend' },
    { key: 'database', flag: 'database', label: 'Postgres with Exposed', fallback: false, group: 'Backend' },
    { key: 'flyway', flag: 'flyway', label: 'Flyway migrations', fallback: true, group: 'Backend' },
    { key: 'ideaExt', flag: 'idea-ext', label: 'No package folders in src/main/kotlin', fallback: true, group: 'Project' },
    { key: 'conventions', flag: 'conventions', label: 'Convention plugin in build-logic', fallback: false, group: 'Project' },
    { key: 'docker', flag: 'docker', label: 'Dockerfile', fallback: true, group: 'Project' },
    { key: 'githubActions', flag: 'github-actions', label: 'GitHub Actions workflow', fallback: true, group: 'Project' },
    { key: 'git', flag: 'git', label: 'Git repository', fallback: true, group: 'Project' },
    { key: 'liveTemplates', flag: 'live-templates', label: 'IntelliJ live templates', fallback: true, group: 'Project' },
    { key: 'openIdea', flag: 'open-idea', label: 'Open in IntelliJ when ready', fallback: false, group: 'Project' }
];

const groups = ['Frontend', 'Backend', 'Project'];

function disabled(key: keyof typeof form): boolean {
    return (key === 'tailwind' && form.daisy) || (key === 'flyway' && !form.database);
}

const errors = computed(() => {
    const found: string[] = [];
    if (!projectName.test(form.name)) found.push('The project name may use letters, digits, dashes and underscores, and starts with a letter.');
    if (!packageName.test(form.package)) found.push('Use a Kotlin package such as com.example.app.');
    if (form.i18n && !localeList.test(form.locales)) found.push('Use language tags such as en,de,pt-BR, the default first.');
    return found;
});

const flags = computed(() => {
    const result = ['--yes', `--name=${form.name}`];
    if (form.package !== 'com.example.app') result.push(`--package=${form.package}`);
    if (form.packageManager !== 'auto') result.push(`--package-manager=${form.packageManager}`);
    for (const toggle of toggles) {
        if (disabled(toggle.key)) continue;
        const value = form[toggle.key] as boolean;
        if (value !== toggle.fallback) result.push(value ? `--${toggle.flag}` : `--no-${toggle.flag}`);
        if (toggle.key === 'i18n' && value) {
            if (form.locales !== 'en,de') result.push(`--locales=${form.locales}`);
            if (form.localeStrategy !== 'Cookie') result.push(`--locale-strategy=${form.localeStrategy}`);
        }
    }
    return result;
});

const unixCommand = computed(() => `curl -fsSL ${scripts}/setup.sh | sh -s -- ${flags.value.join(' ')}`);

const windowsCommand = computed(() => {
    const quoted = flags.value.map((flag) => (/[,;'\s]/.test(flag) ? `'${flag.replace(/'/g, "''")}'` : flag));
    return `powershell -c "& ([scriptblock]::Create((irm ${scripts}/setup.ps1))) ${quoted.join(' ')}"`;
});

const copied = ref('');

async function copy(which: string, text: string) {
    try {
        await navigator.clipboard.writeText(text);
        copied.value = which;
        setTimeout(() => (copied.value = ''), 1500);
    } catch {
        copied.value = '';
    }
}
</script>

<template>
    <div class="setup-builder">
        <div class="fields">
            <label>
                <span>Project name</span>
                <input v-model.trim="form.name" spellcheck="false" />
            </label>
            <label>
                <span>Kotlin package</span>
                <input v-model.trim="form.package" spellcheck="false" />
            </label>
            <label>
                <span>Package manager</span>
                <select v-model="form.packageManager">
                    <option value="auto">First one installed</option>
                    <option value="bun">Bun</option>
                    <option value="pnpm">pnpm</option>
                    <option value="npm">npm</option>
                    <option value="yarn">Yarn</option>
                </select>
            </label>
        </div>

        <div class="groups">
            <fieldset v-for="group in groups" :key="group">
                <legend>{{ group }}</legend>
                <template v-for="toggle in toggles.filter((item) => item.group === group)" :key="toggle.key">
                    <label class="toggle" :class="{ muted: disabled(toggle.key) }">
                        <input v-model="form[toggle.key]" type="checkbox" :disabled="disabled(toggle.key)" />
                        <span>{{ toggle.label }}</span>
                    </label>
                    <div v-if="toggle.key === 'i18n' && form.i18n" class="nested">
                        <label>
                            <span>Languages, default first</span>
                            <input v-model.trim="form.locales" spellcheck="false" />
                        </label>
                        <label>
                            <span>Language from</span>
                            <select v-model="form.localeStrategy">
                                <option value="Cookie">A cookie</option>
                                <option value="UrlPrefix">The URL, such as /de/about</option>
                            </select>
                        </label>
                    </div>
                </template>
            </fieldset>
        </div>

        <ul v-if="errors.length" class="errors" role="alert">
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <template v-else>
            <div class="command">
                <div class="command-head">
                    <span>macOS and Linux</span>
                    <button type="button" @click="copy('unix', unixCommand)">{{ copied === 'unix' ? 'Copied' : 'Copy' }}</button>
                </div>
                <pre><code>{{ unixCommand }}</code></pre>
            </div>
            <div class="command">
                <div class="command-head">
                    <span>Windows</span>
                    <button type="button" @click="copy('windows', windowsCommand)">{{ copied === 'windows' ? 'Copied' : 'Copy' }}</button>
                </div>
                <pre><code>{{ windowsCommand }}</code></pre>
            </div>
        </template>
    </div>
</template>

<style scoped>
.setup-builder {
    margin: 24px 0;
    padding: 20px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
}

.fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
}

label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
}

label > span {
    color: var(--vp-c-text-2);
}

input:not([type='checkbox']),
select {
    padding: 6px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 14px;
}

input:focus-visible,
select:focus-visible,
button:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 1px;
}

.groups {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin-top: 16px;
}

fieldset {
    margin: 0;
    padding: 10px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
}

legend {
    padding: 0 4px;
    font-size: 13px;
    font-weight: 600;
    color: var(--vp-c-text-2);
}

.toggle {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 3px 0;
    color: var(--vp-c-text-1);
}

.toggle > span {
    color: var(--vp-c-text-1);
}

.toggle.muted > span {
    color: var(--vp-c-text-3);
}

.nested {
    display: grid;
    gap: 8px;
    margin: 4px 0 8px 24px;
}

.errors {
    margin: 16px 0 0;
    padding-left: 20px;
    color: var(--vp-c-danger-1);
    font-size: 14px;
}

.command {
    margin-top: 16px;
}

.command-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--vp-c-text-2);
}

.command-head button {
    padding: 2px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 13px;
    cursor: pointer;
}

pre {
    margin: 6px 0 0;
    padding: 12px;
    border-radius: 8px;
    background: var(--vp-code-block-bg);
    overflow-x: auto;
}

code {
    font-family: var(--vp-font-family-mono);
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-all;
    color: var(--vp-c-text-1);
}
</style>
