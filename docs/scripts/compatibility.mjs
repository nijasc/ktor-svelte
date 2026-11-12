import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const output = new URL('../reference/compatibility-matrix.md', import.meta.url);
const repositoryRoot = new URL('../..', import.meta.url);
const version = process.env.DOCS_VERSION ?? 'main';

const parse = (value) => value.replace(/^v/, '').split('.').map(Number);
const compare = (a, b) => {
    const left = parse(a);
    const right = parse(b);
    for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return left[i] - right[i];
    return 0;
};

function git(...args) {
    try {
        return execFileSync('git', args, { cwd: repositoryRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    } catch {
        return undefined;
    }
}

function read(ref, path) {
    return git('show', `${ref}:${path}`) ?? '';
}

function find(text, pattern) {
    return text.match(pattern)?.[1];
}

function row(ref, label) {
    const catalog = read(ref, 'gradle/libs.versions.toml');
    const server = read(ref, 'ktor-svelte-server/build.gradle.kts');
    const ci = read(ref, '.github/workflows/ci.yml');
    const wrapper = read(ref, 'gradle/wrapper/gradle-wrapper.properties');
    const conventions = read(ref, 'build-logic/src/main/kotlin/ktor-svelte.kotlin-conventions.gradle.kts') + server;
    const kit = git('grep', '-h', '"@sveltejs/kit"', ref, '--', 'ktor-svelte-gradle-plugin/src/main') ?? '';
    const ktor = find(catalog, /^ktor = "([^"]+)"/m);
    const kotlin = find(catalog, /^kotlin = "([^"]+)"/m);
    const kotlinApi = find(server, /KotlinVersion\.KOTLIN_(\d+_\d+)/)?.replace('_', '.');
    const oldestGradle = find(ci, /testGradleVersion=([\d.]+)/);
    const newestGradle = find(wrapper, /gradle-([\d.]+)-/);
    const jvm = find(conventions, /jvmToolchain\((\d+)\)/);
    const svelteKit = find(kit, /"@sveltejs\/kit": "\^?([^"]+)"/);
    const cells = [
        label,
        ktor ? `${ktor.split('.').slice(0, 2).join('.')}+ (tested ${ktor})` : '-',
        kotlinApi ? `${kotlinApi}+ (built with ${kotlin})` : (kotlin ?? '-'),
        jvm ? `${jvm}+` : '-',
        [oldestGradle, newestGradle].filter(Boolean).join(', ') || '-',
        svelteKit ? `${svelteKit.split('.')[0]}.x (tested ${svelteKit})` : '-'
    ];
    return `| ${cells.join(' | ')} |`;
}

const tags = (git('tag', '--list', 'v*') ?? '')
    .split('\n')
    .map((tag) => tag.trim())
    .filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag))
    .filter((tag) => version === 'main' || compare(tag, version) <= 0)
    .sort((a, b) => compare(b, a));

const rows = [];
if (version === 'main') rows.push(row('HEAD', 'main (unreleased)'));
rows.push(...tags.map((tag) => row(tag, tag.slice(1))));

const table =
    tags.length === 0 && version !== 'main'
        ? 'The release history is not available in this build. See the [compatibility page on GitHub](https://github.com/nijasc/ktor-svelte/blob/main/docs/reference/compatibility.md).\n'
        : ['| ktor-svelte | Ktor | Kotlin | JVM | Gradle tested | SvelteKit |', '|---|---|---|---|---|---|', ...rows, ''].join('\n');

writeFileSync(output, table);
console.log(`Wrote the compatibility matrix with ${rows.length} rows.`);
