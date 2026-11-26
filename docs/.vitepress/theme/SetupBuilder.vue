<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';

const scripts = 'https://raw.githubusercontent.com/nijasc/ktor-svelte/main/scripts';

const projectName = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
const packageName = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)*$/;
const localeList = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*(,[a-z]{2,3}(-[A-Za-z0-9]{2,8})*)*$/;
const contextList = /^[a-z][a-z0-9]*(,[a-z][a-z0-9]*)*$/;
const aggregateName = /^[A-Z][A-Za-z0-9]*$/;
const reservedContexts = ['build', 'frontend', 'gradle', 'src', 'shared', 'kernel'];
const licenses = ['none', 'MIT', 'Apache-2.0', 'BSD-3-Clause', 'MPL-2.0', 'GPL-3.0', 'AGPL-3.0'];

const form = reactive({
    name: 'my-app',
    package: 'com.example.app',
    packageManager: 'auto',
    license: 'none',
    licenseHolder: '',
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
    exposedTime: true,
    hexagonal: false,
    contexts: 'orders',
    moduleLayout: 'layers',
    sharedKernel: false,
    conventions: false,
    ideaExt: true,
    docker: true,
    githubActions: true,
    releasePlease: false,
    conventionalCommits: false,
    dependabot: false,
    agents: true,
    railway: false,
    deployOn: '',
    deployBranch: 'production',
    git: true,
    liveTemplates: true,
    openIdea: false
});

const aggregates = reactive<Record<string, string>>({});

type ToggleKey = {
    [K in keyof typeof form]: (typeof form)[K] extends boolean ? K : never;
}[keyof typeof form];

type Toggle = { key: ToggleKey; flag: string; label: string; hint: string };

const frontendToggles: Toggle[] = [
    { key: 'generateTs', flag: 'generate-ts', label: 'TypeScript client', hint: 'A typed client generated from your Ktor routes' },
    { key: 'daisy', flag: 'daisy', label: 'DaisyUI', hint: 'Components and themes, includes Tailwind' },
    { key: 'tailwind', flag: 'tailwind', label: 'Tailwind', hint: 'Utility classes, set up from Gradle' },
    { key: 'lucide', flag: 'lucide', label: 'Lucide icons', hint: 'Typed icons on both sides' },
    { key: 'i18n', flag: 'i18n', label: 'Translations', hint: 'Message files and a language switch' }
];

const backendToggles: Toggle[] = [
    { key: 'auth', flag: 'auth', label: 'Sign in', hint: 'Cookie sessions, hashed passwords, login and account pages' },
    { key: 'database', flag: 'database', label: 'Postgres', hint: 'Exposed, HikariCP and a compose.yaml' },
    { key: 'flyway', flag: 'flyway', label: 'Flyway migrations', hint: 'Versioned SQL, and a task that writes the next one' },
    { key: 'exposedTime', flag: 'exposed-time', label: 'Dates and times', hint: 'Exposed timestamp, date and datetime columns' }
];

const architectureToggles: Toggle[] = [
    { key: 'sharedKernel', flag: 'shared-kernel', label: 'Shared kernel', hint: 'A module for code every context may use' },
    { key: 'conventions', flag: 'conventions', label: 'Convention plugin', hint: 'build-logic with shared Kotlin and ktlint setup' }
];

const workflowToggles: Toggle[] = [
    { key: 'ideaExt', flag: 'idea-ext', label: 'No package folders', hint: 'Kotlin files directly in src/main/kotlin' },
    { key: 'docker', flag: 'docker', label: 'Dockerfile', hint: 'Multi-stage build, runs as a non-root user' },
    { key: 'githubActions', flag: 'github-actions', label: 'GitHub Actions', hint: 'CI with Actions pinned to commit SHAs' },
    { key: 'releasePlease', flag: 'release-please', label: 'release-please', hint: 'Release pull requests, and version.txt sets the Gradle version' },
    { key: 'conventionalCommits', flag: 'conventional-commits', label: 'Conventional Commits', hint: 'A local commit-msg hook that rejects other messages' },
    { key: 'dependabot', flag: 'dependabot', label: 'Dependabot', hint: 'A weekly pull request each for Gradle, the frontend and Actions' },
    { key: 'railway', flag: 'railway', label: 'Railway', hint: 'Deploys with the infrastructure as code in .railway/railway.ts' },
    { key: 'agents', flag: 'agents', label: 'Agentic usage', hint: 'AGENTS.md, CLAUDE.md and agent permissions, written for this project' },
    { key: 'git', flag: 'git', label: 'Git repository', hint: 'Runs git init' },
    { key: 'liveTemplates', flag: 'live-templates', label: 'Live templates', hint: 'ksget, ksapi and more in IntelliJ and WebStorm' },
    { key: 'openIdea', flag: 'open-idea', label: 'Open in IntelliJ', hint: 'Opens the project when it is ready' }
];

const fallbacks: Record<ToggleKey, () => boolean> = {
    generateTs: () => true,
    daisy: () => true,
    tailwind: () => true,
    lucide: () => true,
    i18n: () => false,
    auth: () => false,
    database: () => false,
    flyway: () => true,
    exposedTime: () => true,
    hexagonal: () => false,
    sharedKernel: () => false,
    conventions: () => false,
    ideaExt: () => true,
    docker: () => true,
    githubActions: () => true,
    releasePlease: () => false,
    conventionalCommits: () => releasePleaseOn.value,
    dependabot: () => false,
    agents: () => true,
    railway: () => false,
    git: () => true,
    liveTemplates: () => true,
    openIdea: () => false
};

const releasePleaseOn = computed(() => form.githubActions && form.releasePlease);
const touched = new Set<ToggleKey>();

watch(releasePleaseOn, (on) => {
    if (!touched.has('conventionalCommits')) form.conventionalCommits = on;
});

function disabled(key: ToggleKey): string | null {
    if (key === 'tailwind' && form.daisy) return 'Included with DaisyUI';
    if ((key === 'flyway' || key === 'exposedTime') && !form.database) return 'Needs Postgres';
    if (key === 'releasePlease' && !form.githubActions) return 'Needs GitHub Actions';
    if (key === 'sharedKernel' && !form.hexagonal) return 'Needs hexagonal modules';
    if (key === 'conventions' && form.hexagonal) return 'Always on with hexagonal modules';
    if (key === 'docker' && form.railway) return 'Railway builds the Dockerfile';
    return null;
}

const branchName = /^[A-Za-z0-9][A-Za-z0-9._/-]*$/;
const defaultDeployOn = computed(() => (releasePleaseOn.value ? 'release' : 'main'));
const deployOn = computed(() => form.deployOn || defaultDeployOn.value);
const deployMoments = computed(() => [
    { value: 'release', label: releasePleaseOn.value ? 'On each release (recommended with release-please)' : 'On each published release' },
    { value: 'main', label: 'On each push to main' },
    { value: 'branch', label: 'On each push to another branch' }
]);

function set(key: ToggleKey, event: Event) {
    touched.add(key);
    form[key] = (event.target as HTMLInputElement).checked;
}

function checked(key: ToggleKey): boolean {
    if (key === 'tailwind' && form.daisy) return true;
    if (key === 'conventions' && form.hexagonal) return true;
    if (key === 'docker' && form.railway) return true;
    if (disabled(key)) return false;
    return form[key];
}

const contextNames = computed(() => (contextList.test(form.contexts) ? form.contexts.split(',') : []));

function defaultAggregate(context: string): string {
    const singular = context.length > 3 && context.endsWith('s') && !context.endsWith('ss') ? context.slice(0, -1) : context;
    return singular.charAt(0).toUpperCase() + singular.slice(1);
}

function aggregateOf(context: string): string {
    return aggregates[context]?.trim() || defaultAggregate(context);
}

const steps = ['Project', 'Frontend', 'Backend', 'Architecture', 'Workflow', 'Command'];
const step = ref(0);

const stepErrors = computed<string[][]>(() => {
    const project: string[] = [];
    if (!projectName.test(form.name)) project.push('The project name may use letters, digits, dashes and underscores, and starts with a letter.');
    if (!packageName.test(form.package)) project.push('Use a Kotlin package such as com.example.app.');
    if (form.license !== 'none' && /[[\]]/.test(form.licenseHolder)) project.push('The copyright holder cannot contain square brackets.');
    const frontend: string[] = [];
    if (form.i18n && !localeList.test(form.locales)) frontend.push('Use language tags such as en,de,pt-BR, the default first.');
    const architecture: string[] = [];
    if (form.hexagonal) {
        if (!contextList.test(form.contexts)) {
            architecture.push('Write the contexts in lowercase letters and digits, separated by commas, such as catalog,orders.');
        } else {
            const names = contextNames.value;
            if (new Set(names).size !== names.length) architecture.push('Each bounded context needs its own name.');
            const reserved = names.filter((name) => reservedContexts.includes(name));
            if (reserved.length) architecture.push(`A bounded context cannot be called ${reserved.join(' or ')}.`);
            const chosen = names.map(aggregateOf);
            if (chosen.some((name) => !aggregateName.test(name))) architecture.push('Aggregates are class names, such as Order.');
            if (new Set(chosen).size !== chosen.length) architecture.push('Two contexts cannot have aggregates with the same name.');
        }
    }
    const workflow: string[] = [];
    if (form.railway && deployOn.value === 'branch' && !branchName.test(form.deployBranch)) workflow.push('Use a branch name such as production.');
    return [project, frontend, [], architecture, workflow, []];
});

const allErrors = computed(() => stepErrors.value.flat());

function go(target: number) {
    if (target < 0 || target >= steps.length) return;
    if (target > step.value && stepErrors.value.slice(0, target).some((errors) => errors.length)) {
        step.value = stepErrors.value.findIndex((errors) => errors.length);
        return;
    }
    step.value = target;
}

const flags = computed(() => {
    const result = ['--yes', `--name=${form.name}`];
    if (form.package !== 'com.example.app') result.push(`--package=${form.package}`);
    if (form.packageManager !== 'auto') result.push(`--package-manager=${form.packageManager}`);
    if (form.license !== 'none') {
        result.push(`--license=${form.license}`);
        if (form.licenseHolder) result.push(`--license-holder=${form.licenseHolder}`);
    }
    const add = (toggle: Toggle) => {
        if (disabled(toggle.key)) return;
        const value = form[toggle.key];
        if (value !== fallbacks[toggle.key]()) result.push(value ? `--${toggle.flag}` : `--no-${toggle.flag}`);
    };
    frontendToggles.forEach(add);
    if (form.i18n) {
        if (form.locales !== 'en,de') result.push(`--locales=${form.locales}`);
        if (form.localeStrategy !== 'Cookie') result.push(`--locale-strategy=${form.localeStrategy}`);
    }
    backendToggles.forEach(add);
    if (form.hexagonal) {
        result.push('--hexagonal');
        if (form.contexts !== 'orders') result.push(`--contexts=${form.contexts}`);
        for (const context of contextNames.value) {
            const aggregate = aggregateOf(context);
            if (aggregate !== defaultAggregate(context)) result.push(`--aggregate-${context}=${aggregate}`);
        }
        if (form.moduleLayout !== 'layers') result.push(`--module-layout=${form.moduleLayout}`);
    }
    architectureToggles.forEach(add);
    workflowToggles.forEach(add);
    if (form.railway) {
        if (deployOn.value !== defaultDeployOn.value) result.push(`--deploy-on=${deployOn.value}`);
        if (deployOn.value === 'branch' && form.deployBranch !== 'production') result.push(`--deploy-branch=${form.deployBranch}`);
    }
    return result;
});

const summary = computed(() => {
    const items: string[] = [];
    const on = (key: ToggleKey) => checked(key);
    items.push(`${form.name}, package ${form.package}, ${form.packageManager === 'auto' ? 'first package manager found' : form.packageManager}`);
    items.push(form.license === 'none' ? 'No license, all rights reserved' : `${form.license} license${form.licenseHolder ? `, copyright ${form.licenseHolder}` : ''}`);
    const frontend = frontendToggles.filter((toggle) => on(toggle.key)).map((toggle) => toggle.label);
    items.push(`Frontend: ${frontend.length ? frontend.join(', ') : 'plain SvelteKit'}${form.i18n ? ` (${form.locales}, by ${form.localeStrategy === 'Cookie' ? 'cookie' : 'URL prefix'})` : ''}`);
    const backend = backendToggles.filter((toggle) => on(toggle.key)).map((toggle) => toggle.label);
    items.push(`Backend: ${backend.length ? backend.join(', ') : 'Ktor with JSON and typed errors'}`);
    if (form.hexagonal) {
        const contexts = contextNames.value.map((context) => `${context} (${aggregateOf(context)})`).join(', ');
        items.push(`Hexagonal modules: ${contexts}, ${form.moduleLayout === 'layers' ? 'three modules per context' : 'one module per context'}${form.sharedKernel ? ', with a shared kernel' : ''}`);
    } else {
        items.push(`One module${form.conventions ? ', with a convention plugin in build-logic' : ''}`);
    }
    const workflow = workflowToggles.filter((toggle) => on(toggle.key)).map((toggle) => toggle.label);
    items.push(`Workflow: ${workflow.length ? workflow.join(', ') : 'nothing extra'}`);
    if (form.railway) {
        const moment = deployOn.value === 'branch' ? `each push to ${form.deployBranch}` : deployOn.value === 'release' ? 'each release' : 'each push to main';
        items.push(`Deploys to Railway on ${moment}`);
    }
    return items;
});

const unixCommand = computed(() => {
    const quoted = flags.value.map((flag) => (/^[A-Za-z0-9_=.,/:@+-]+$/.test(flag) ? flag : `'${flag.replace(/'/g, `'\\''`)}'`));
    return `curl -fsSL ${scripts}/setup.sh | sh -s -- ${quoted.join(' ')}`;
});

const windowsCommand = computed(() => {
    const quoted = flags.value.map((flag) => (/[,;'\s]/.test(flag) ? `'${flag.replace(/'/g, "''")}'` : flag));
    return `powershell -c "& ([scriptblock]::Create((irm ${scripts}/setup.ps1))) ${quoted.join(' ')}"`;
});

const createdFiles = computed(() => {
    const licensed = form.license !== 'none' ? ['LICENSE'] : [];
    const files = [
        ...licensed,
        'build.gradle.kts',
        'settings.gradle.kts',
        'gradle.properties',
        'gradle/libs.versions.toml',
        'gradle/wrapper/gradle-wrapper.jar',
        'gradle/wrapper/gradle-wrapper.properties',
        'gradlew',
        'gradlew.bat',
        '.gitignore',
        '.editorconfig',
        '.env.example',
        'README.md',
        '.run/',
        'frontend/package.json',
        'frontend/vite.config.ts',
        'frontend/eslint.config.js',
        'frontend/.prettierrc',
        'frontend/src/routes/+page.svelte',
        'frontend/src/lib/ktor-svelte/',
        'src/main/resources/logback.xml'
    ];
    const on = (key: ToggleKey) => checked(key);
    const source = on('ideaExt') ? 'src/main/kotlin' : `src/main/kotlin/${form.package.replace(/\./g, '/')}`;
    files.push(`${source}/Application.kt`, `${source}/Env.kt`, `${source}/Errors.kt`);
    if (on('auth')) {
        files.push(`${source}/Auth.kt`, `${source}/${on('database') ? 'DatabaseUserStore.kt' : 'MemoryUserStore.kt'}`);
        files.push('frontend/src/lib/auth.ts', 'frontend/src/routes/login/+page.svelte', 'frontend/src/routes/account/+page.svelte');
    }
    if (on('database')) files.push(`${source}/Database.kt`, 'compose.yaml');
    if (on('auth') || on('database')) files.push('.env');
    if (on('flyway')) files.push('src/main/resources/db/migration/V1__create_tables.sql');
    if (on('agents')) files.push('AGENTS.md', 'CLAUDE.md', '.claude/settings.json');
    if (on('generateTs')) files.push('frontend/src/lib/api/');
    if (on('i18n') && localeList.test(form.locales)) form.locales.split(',').forEach((locale) => files.push(`frontend/messages/${locale}.json`));
    if (on('docker')) files.push('Dockerfile', '.dockerignore');
    if (on('railway')) files.push('.railway/railway.ts', '.railway/package.json', '.github/workflows/railway-config.yml', '.github/workflows/deploy.yml');
    if (on('githubActions')) files.push('.github/workflows/ci.yml');
    if (releasePleaseOn.value) files.push('.github/workflows/release.yml', 'release-please-config.json', '.release-please-manifest.json', 'version.txt');
    if (on('conventionalCommits')) files.push('.githooks/commit-msg', '.gitattributes');
    if (on('dependabot')) files.push('.github/dependabot.yml');
    if (on('conventions')) {
        files.push('build-logic/settings.gradle.kts', 'build-logic/build.gradle.kts', 'build-logic/src/main/kotlin/kotlin-conventions.gradle.kts');
        if (form.hexagonal) files.push('build-logic/src/main/kotlin/ktor-routes-conventions.gradle.kts');
    }
    if (form.hexagonal) {
        if (form.sharedKernel) files.push('shared-kernel/build.gradle.kts', 'shared-kernel/src/main/kotlin/.../DomainException.kt');
        for (const context of contextNames.value) {
            const aggregate = aggregateOf(context);
            const repository = `${on('database') ? 'Exposed' : 'InMemory'}${aggregate}Repository.kt`;
            const layered = form.moduleLayout === 'layers';
            const module = (layer: string) => (layered ? `${context}/${layer}` : context);
            const folder = (layer: string) => `${module(layer)}/src/main/kotlin/.../${layer}`;
            for (const layer of layered ? ['domain', 'application', 'adapters'] : ['domain']) files.push(`${module(layer)}/build.gradle.kts`);
            files.push(`${folder('domain')}/${aggregate}.kt`);
            files.push(`${folder('application')}/${aggregate}Repository.kt`, `${folder('application')}/${aggregate}Service.kt`);
            files.push(`${folder('adapters')}/web/${aggregate}Routes.kt`, `${folder('adapters')}/persistence/${repository}`);
        }
    }
    return files;
});

type TreeNode = { children: Map<string, TreeNode>; file: boolean };

const treeText = computed(() => {
    const root: TreeNode = { children: new Map(), file: false };
    for (const path of createdFiles.value) {
        const parts = path.split('/').filter((part) => part !== '');
        let node = root;
        parts.forEach((part, index) => {
            const last = index === parts.length - 1;
            if (!node.children.has(part)) node.children.set(part, { children: new Map(), file: last && !path.endsWith('/') });
            node = node.children.get(part) as TreeNode;
        });
    }
    const lines: string[] = [`${form.name}/`];
    const walk = (node: TreeNode, depth: number) => {
        const entries = [...node.children.entries()].sort(([a, left], [b, right]) => {
            if (left.file !== right.file) return left.file ? 1 : -1;
            return a.localeCompare(b);
        });
        for (const [name, child] of entries) {
            lines.push(`${'  '.repeat(depth)}${name}${child.file ? '' : '/'}`);
            walk(child, depth + 1);
        }
    };
    walk(root, 1);
    return lines.join('\n');
});

const SHARE_PARAM = 'setup';
const DEFAULT_FLAGS = '--yes --name=my-app';
const allToggles = [...frontendToggles, ...backendToggles, ...architectureToggles, ...workflowToggles];

function applyFlags(list: string[]) {
    for (const flag of list) {
        if (!flag.startsWith('--')) continue;
        const [name, ...parts] = flag.slice(2).split('=');
        const value = parts.join('=');
        if (name === 'name') form.name = value;
        else if (name === 'package') form.package = value;
        else if (name === 'package-manager') form.packageManager = value;
        else if (name === 'license') form.license = value;
        else if (name === 'license-holder') form.licenseHolder = value;
        else if (name === 'locales') form.locales = value;
        else if (name === 'locale-strategy') form.localeStrategy = value;
        else if (name === 'contexts') form.contexts = value;
        else if (name === 'module-layout') form.moduleLayout = value;
        else if (name === 'deploy-on') form.deployOn = value;
        else if (name === 'deploy-branch') form.deployBranch = value;
        else if (name === 'hexagonal') form.hexagonal = true;
        else if (name.startsWith('aggregate-')) aggregates[name.slice('aggregate-'.length)] = value;
        else {
            const negative = name.startsWith('no-');
            const toggle = allToggles.find((item) => item.flag === (negative ? name.slice(3) : name));
            if (!toggle) continue;
            touched.add(toggle.key);
            form[toggle.key] = !negative;
        }
    }
}

const shareLink = computed(() => {
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.href);
    url.searchParams.set(SHARE_PARAM, flags.value.join(' '));
    url.hash = 'build-the-command';
    return url.toString();
});

onMounted(() => {
    const shared = new URLSearchParams(window.location.search).get(SHARE_PARAM);
    if (shared) {
        applyFlags(shared.split(/ (?=--)/));
        go(steps.length - 1);
    }
    watch(flags, (current) => {
        const url = new URL(window.location.href);
        const joined = current.join(' ');
        if (joined === DEFAULT_FLAGS) url.searchParams.delete(SHARE_PARAM);
        else url.searchParams.set(SHARE_PARAM, joined);
        window.history.replaceState(window.history.state, '', url);
    });
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
    <div class="setup-wizard">
        <ol class="stepper">
            <li v-for="(title, index) in steps" :key="title">
                <button
                    type="button"
                    :class="{ active: index === step, done: index < step, invalid: stepErrors[index].length > 0 }"
                    :aria-current="index === step ? 'step' : undefined"
                    @click="go(index)"
                >
                    <span class="number">{{ index + 1 }}</span>
                    <span class="title">{{ title }}</span>
                </button>
            </li>
        </ol>

        <section class="panel">
            <template v-if="step === 0">
                <h3>Name your project</h3>
                <p class="lead">The folder, the Gradle project and the JAR get this name.</p>
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
                    <label>
                        <span>License</span>
                        <select v-model="form.license">
                            <option v-for="license in licenses" :key="license" :value="license">{{ license === 'none' ? 'None, all rights reserved' : license }}</option>
                        </select>
                    </label>
                    <label v-if="form.license !== 'none'">
                        <span>Copyright holder</span>
                        <input v-model.trim="form.licenseHolder" placeholder="Your git user name" spellcheck="false" />
                    </label>
                </div>
            </template>

            <template v-else-if="step === 1">
                <h3>Pick the frontend</h3>
                <p class="lead">Everything here is configured in Gradle, so Kotlin and TypeScript agree on it.</p>
                <div class="cards">
                    <label v-for="toggle in frontendToggles" :key="toggle.key" class="card" :class="{ on: checked(toggle.key), muted: disabled(toggle.key) }">
                        <input type="checkbox" :disabled="!!disabled(toggle.key)" :checked="checked(toggle.key)" @change="set(toggle.key, $event)" />
                        <span class="card-label">{{ toggle.label }}</span>
                        <span class="card-hint">{{ disabled(toggle.key) ?? toggle.hint }}</span>
                    </label>
                </div>
                <div v-if="form.i18n" class="fields nested">
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

            <template v-else-if="step === 2">
                <h3>Pick the backend</h3>
                <p class="lead">Every project gets JSON, typed error responses and a <code>.env</code> reader.</p>
                <div class="cards">
                    <label v-for="toggle in backendToggles" :key="toggle.key" class="card" :class="{ on: checked(toggle.key), muted: disabled(toggle.key) }">
                        <input type="checkbox" :disabled="!!disabled(toggle.key)" :checked="checked(toggle.key)" @change="set(toggle.key, $event)" />
                        <span class="card-label">{{ toggle.label }}</span>
                        <span class="card-hint">{{ disabled(toggle.key) ?? toggle.hint }}</span>
                    </label>
                </div>
            </template>

            <template v-else-if="step === 3">
                <h3>Shape the architecture</h3>
                <p class="lead">Keep one module, or split the backend into bounded contexts built as hexagons.</p>
                <div class="choices">
                    <label class="choice" :class="{ on: !form.hexagonal }">
                        <input v-model="form.hexagonal" type="radio" :value="false" />
                        <span class="card-label">One module</span>
                        <span class="card-hint">All Kotlin code in <code>src/main/kotlin</code>. The quickest start.</span>
                    </label>
                    <label class="choice" :class="{ on: form.hexagonal }">
                        <input v-model="form.hexagonal" type="radio" :value="true" />
                        <span class="card-label">Hexagonal modules</span>
                        <span class="card-hint">Domain driven bounded contexts with ports and adapters.</span>
                    </label>
                </div>
                <template v-if="form.hexagonal">
                    <div class="fields nested">
                        <label>
                            <span>Bounded contexts, comma separated</span>
                            <input v-model.trim="form.contexts" spellcheck="false" />
                        </label>
                    </div>
                    <div v-if="contextNames.length" class="fields nested">
                        <label v-for="context in contextNames" :key="context">
                            <span>Main aggregate of {{ context }}</span>
                            <input v-model.trim="aggregates[context]" :placeholder="defaultAggregate(context)" spellcheck="false" />
                        </label>
                    </div>
                    <div class="choices nested">
                        <label class="choice" :class="{ on: form.moduleLayout === 'layers' }">
                            <input v-model="form.moduleLayout" type="radio" value="layers" />
                            <span class="card-label">Three modules per context</span>
                            <span class="card-hint"><code>domain</code>, <code>application</code> and <code>adapters</code>. Gradle keeps each layer from seeing the one above it.</span>
                        </label>
                        <label class="choice" :class="{ on: form.moduleLayout === 'single' }">
                            <input v-model="form.moduleLayout" type="radio" value="single" />
                            <span class="card-label">One module per context</span>
                            <span class="card-hint">A package per layer. Fewer modules, split later when a context grows.</span>
                        </label>
                    </div>
                </template>
                <div class="cards nested">
                    <label v-for="toggle in architectureToggles" :key="toggle.key" class="card" :class="{ on: checked(toggle.key), muted: disabled(toggle.key) }">
                        <input type="checkbox" :disabled="!!disabled(toggle.key)" :checked="checked(toggle.key)" @change="set(toggle.key, $event)" />
                        <span class="card-label">{{ toggle.label }}</span>
                        <span class="card-hint">{{ disabled(toggle.key) ?? toggle.hint }}</span>
                    </label>
                </div>
            </template>

            <template v-else-if="step === 4">
                <h3>Set up the workflow</h3>
                <p class="lead">Tooling around the code: containers, CI, releases and your IDE.</p>
                <div class="cards">
                    <label v-for="toggle in workflowToggles" :key="toggle.key" class="card" :class="{ on: checked(toggle.key), muted: disabled(toggle.key) }">
                        <input type="checkbox" :disabled="!!disabled(toggle.key)" :checked="checked(toggle.key)" @change="set(toggle.key, $event)" />
                        <span class="card-label">{{ toggle.label }}</span>
                        <span class="card-hint">{{ disabled(toggle.key) ?? toggle.hint }}</span>
                    </label>
                </div>
                <div v-if="form.railway" class="fields nested">
                    <label>
                        <span>Deploy to Railway</span>
                        <select :value="deployOn" @change="form.deployOn = ($event.target as HTMLSelectElement).value">
                            <option v-for="moment in deployMoments" :key="moment.value" :value="moment.value">{{ moment.label }}</option>
                        </select>
                    </label>
                    <label v-if="deployOn === 'branch'">
                        <span>Branch that deploys</span>
                        <input v-model.trim="form.deployBranch" spellcheck="false" />
                    </label>
                </div>
            </template>

            <template v-else>
                <h3>Run it</h3>
                <ul v-if="allErrors.length" class="errors" role="alert">
                    <li v-for="error in allErrors" :key="error">{{ error }}</li>
                </ul>
                <template v-else>
                    <ul class="summary">
                        <li v-for="item in summary" :key="item">{{ item }}</li>
                    </ul>
                    <details class="tree">
                        <summary>The files it creates ({{ createdFiles.length }})</summary>
                        <pre><code>{{ treeText }}</code></pre>
                    </details>
                    <div class="command-head share">
                        <span>A link to these answers, to share with your team</span>
                        <button type="button" @click="copy('link', shareLink)">{{ copied === 'link' ? 'Copied' : 'Copy link' }}</button>
                    </div>
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
            </template>

            <ul v-if="step < steps.length - 1 && stepErrors[step].length" class="errors" role="alert">
                <li v-for="error in stepErrors[step]" :key="error">{{ error }}</li>
            </ul>
        </section>

        <div class="nav">
            <button type="button" class="secondary" :disabled="step === 0" @click="go(step - 1)">Back</button>
            <button v-if="step < steps.length - 2" type="button" class="link" @click="go(steps.length - 1)">Skip to the command</button>
            <button v-if="step < steps.length - 1" type="button" class="primary" :disabled="stepErrors[step].length > 0" @click="go(step + 1)">
                {{ step === steps.length - 2 ? 'Show the command' : 'Next' }}
            </button>
            <button v-else type="button" class="link" @click="go(0)">Back to the start</button>
        </div>
    </div>
</template>

<style scoped>
.setup-wizard {
    margin: 24px 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
    overflow: hidden;
}

.stepper {
    display: flex;
    gap: 4px;
    margin: 0;
    padding: 12px;
    list-style: none;
    border-bottom: 1px solid var(--vp-c-divider);
    overflow-x: auto;
}

.stepper li {
    margin: 0;
    flex: 1 0 auto;
}

.stepper button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 10px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--vp-c-text-2);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
}

.stepper button:hover {
    background: var(--vp-c-default-soft);
}

.stepper .number {
    display: inline-grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 50%;
    background: var(--vp-c-bg);
    font-size: 12px;
}

.stepper .done .number {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
}

.stepper .active {
    color: var(--vp-c-text-1);
}

.stepper .active .number {
    border-color: var(--vp-button-brand-border);
    background: var(--vp-button-brand-bg);
    color: var(--vp-button-brand-text);
}

.stepper .invalid .number {
    border-color: var(--vp-c-danger-1);
    color: var(--vp-c-danger-1);
}

.panel {
    padding: 20px;
}

.panel h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 18px;
}

.lead {
    margin: 4px 0 16px;
    color: var(--vp-c-text-2);
    font-size: 14px;
}

.fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
}

.nested {
    margin-top: 16px;
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

input:not([type='checkbox']):not([type='radio']),
select {
    padding: 6px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 14px;
}

input::placeholder {
    color: var(--vp-c-text-3);
}

input:focus-visible,
select:focus-visible,
button:focus-visible,
.card:focus-within,
.choice:focus-within {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 1px;
}

.cards,
.choices {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.choices {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card,
.choice {
    position: relative;
    gap: 2px;
    padding: 12px 12px 12px 38px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg);
    cursor: pointer;
    transition: border-color 0.15s, background-color 0.15s;
}

.card:hover,
.choice:hover {
    border-color: var(--vp-c-brand-2);
}

.card.on,
.choice.on {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-soft);
}

.card.muted {
    cursor: not-allowed;
    opacity: 0.6;
}

.card input,
.choice input {
    position: absolute;
    top: 14px;
    left: 12px;
    margin: 0;
    accent-color: var(--vp-c-brand-1);
}

.card-label {
    color: var(--vp-c-text-1) !important;
    font-weight: 600;
}

.card-hint {
    font-size: 13px;
    line-height: 1.4;
}

.summary {
    margin: 12px 0 0;
    padding-left: 20px;
    font-size: 14px;
}

.summary li {
    margin: 2px 0;
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

.tree {
    margin-top: 12px;
    font-size: 14px;
}

.tree summary {
    cursor: pointer;
    color: var(--vp-c-text-2);
}

.tree pre code {
    white-space: pre;
    word-break: normal;
}

.share {
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--vp-c-divider);
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

pre code {
    font-family: var(--vp-font-family-mono);
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-all;
    color: var(--vp-c-text-1);
}

.nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-top: 1px solid var(--vp-c-divider);
}

.nav .secondary {
    margin-right: auto;
}

.nav button {
    padding: 6px 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}

.nav button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.nav .primary {
    border-color: var(--vp-button-brand-border);
    background: var(--vp-button-brand-bg);
    color: var(--vp-button-brand-text);
}

.nav .primary:hover:not(:disabled) {
    border-color: var(--vp-button-brand-hover-border);
    background: var(--vp-button-brand-hover-bg);
    color: var(--vp-button-brand-hover-text);
}

.nav .link {
    border: 0;
    background: transparent;
    color: var(--vp-c-brand-1);
}
</style>
