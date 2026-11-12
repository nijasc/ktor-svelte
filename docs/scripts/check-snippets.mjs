import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const docs = fileURLToPath(new URL('..', import.meta.url));
const root = join(docs, '..');
const snippetsBuild = join(docs, 'snippets');
const generated = join(snippetsBuild, 'build', 'snippets');
const notesFrontend = join(root, 'examples', 'notes', 'frontend');
const skippedDirectories = new Set(['node_modules', '.vitepress', 'snippets', 'playground', 'scripts']);

const serverImports = [
    'io.github.nijasc.ktor.svelte.*',
    'io.ktor.http.*',
    'io.ktor.http.content.*',
    'io.ktor.openapi.*',
    'io.ktor.server.application.*',
    'io.ktor.server.auth.*',
    'io.ktor.server.plugins.*',
    'io.ktor.server.plugins.ratelimit.*',
    'io.ktor.server.plugins.statuspages.*',
    'io.ktor.server.request.*',
    'io.ktor.server.response.*',
    'io.ktor.server.routing.*',
    'io.ktor.server.routing.openapi.*',
    'io.ktor.server.sessions.*',
    'io.ktor.server.sse.*',
    'io.ktor.sse.*',
    'io.ktor.util.*',
    'io.ktor.utils.io.*',
    'io.micrometer.core.instrument.Tag',
    'kotlin.io.path.*',
    'kotlin.time.Duration.Companion.hours',
    'kotlin.time.Duration.Companion.minutes',
    'kotlin.time.Instant',
    'kotlinx.coroutines.*',
    'kotlinx.io.*',
    'kotlinx.serialization.*',
    'kotlinx.serialization.json.*',
    'snippets.prelude.*'
];

const routeStarts = new Set(['get', 'post', 'put', 'patch', 'delete', 'route', 'sse', 'authenticate']);
const configStarts = new Set(['securityHeaders', 'publicConfig', 'rateLimit', 'transport', 'cache', 'dev', 'allowedOrigins', 'errorResponse', 'healthCheck']);
const declaration = /^(private |internal )?(data class|enum class|sealed class|sealed interface|abstract class|class|interface|object|fun) /;

function markdownFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        if (entry.isDirectory()) return skippedDirectories.has(entry.name) ? [] : markdownFiles(join(directory, entry.name));
        return entry.name.endsWith('.md') ? [join(directory, entry.name)] : [];
    });
}

function codeBlocks() {
    const fence = /^( *)```(\w+)([^\n]*)\n([\s\S]*?)^\1```/gm;
    return markdownFiles(docs).flatMap((file) => {
        const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
        const page = relative(docs, file).replace(/\\/g, '/');
        return [...text.matchAll(fence)].map((match) => ({
            page,
            line: text.slice(0, match.index).split('\n').length,
            lang: match[2],
            info: match[3].trim(),
            body: match[4].replace(new RegExp(`^${match[1]}`, 'gm'), '')
        }));
    });
}

function pagePackage(block) {
    return `snippets.${block.page.replace(/\.md$/, '').replace(/[^A-Za-z0-9]+/g, '_')}`;
}

function snippetId(block) {
    return `${block.page.replace(/\.md$/, '').replace(/[^A-Za-z0-9]+/g, '_')}_L${block.line}`;
}

function isGradle(body) {
    return /^(svelte|plugins|ktor|dependencies) *\{/m.test(body) || /^implementation\(/m.test(body) || /^import io\.github\.nijasc\.ktor\.svelte\.gradle\./m.test(body);
}

function topLevelChunks(lines) {
    const chunks = [];
    let current = [];
    let depth = 0;
    for (const line of lines) {
        if (depth === 0 && line.trim() === '') {
            if (current.length > 0 && !current.at(-1).startsWith('@')) {
                chunks.push(current);
                current = [];
            }
            continue;
        }
        if (depth === 0 && current.length > 0 && !current.at(-1).startsWith('@') && !/^[.)}?]/.test(line.trim())) {
            chunks.push(current);
            current = [];
        }
        current.push(line);
        for (const character of line.replace(/"(\\.|[^"\\])*"/g, '""')) {
            if ('({['.includes(character)) depth++;
            if (')}]'.includes(character)) depth--;
        }
    }
    if (current.length > 0) chunks.push(current);
    return chunks;
}

function receiverFor(statements) {
    const first = statements[0]?.find((line) => !line.startsWith('@'))?.match(/^(\w+)/)?.[1] ?? '';
    if (routeStarts.has(first)) return 'Route';
    if (configStarts.has(first)) return 'SvelteConfig';
    return 'Application';
}

function kotlinSource(block, packagesByPage) {
    const lines = block.body.trimEnd().split('\n');
    const declaredPackage = lines.find((line) => line.startsWith('package '))?.slice('package '.length).trim();
    const imports = lines.filter((line) => line.startsWith('import ')).map((line) => line.slice('import '.length).trim());
    const code = lines.filter((line) => !line.startsWith('package ') && !line.startsWith('import '));
    const pagePackages = [...(packagesByPage.get(block.page) ?? [])].filter((name) => name !== declaredPackage).map((name) => `${name}.*`);
    const header = [
        '@file:OptIn(kotlin.time.ExperimentalTime::class)',
        '@file:Suppress("unused", "UNUSED_VARIABLE", "UNUSED_PARAMETER", "UNUSED_ANONYMOUS_PARAMETER")',
        '',
        `package ${declaredPackage ?? pagePackage(block)}`,
        '',
        ...[...new Set([...imports, ...serverImports, ...pagePackages])].map((name) => `import ${name}`),
        ''
    ];
    if (declaredPackage) return [...header, ...code].join('\n') + '\n';
    const chunks = topLevelChunks(code);
    const declarations = chunks.filter((chunk) => declaration.test(chunk.find((line) => !line.startsWith('@')) ?? ''));
    const statements = chunks.filter((chunk) => !declarations.includes(chunk));
    const body = statements.length === 0 ? [] : [`fun ${receiverFor(statements)}.snippetL${block.line}() {`, ...statements.flat().map((line) => `    ${line}`), '}'];
    return [...header, ...declarations.flatMap((chunk) => [...chunk, '']), ...body].join('\n') + '\n';
}

function gradleProject(block) {
    const lines = block.body.trimEnd().split('\n');
    const imports = lines.filter((line) => line.startsWith('import '));
    let code = lines.filter((line) => !line.startsWith('import ')).join('\n');
    const pluginLines = [];
    code = code.replace(/^plugins \{\n([\s\S]*?)^\}\n?/m, (_, inner) => {
        pluginLines.push(...inner.split('\n').filter((line) => line.trim() && !line.includes('io.github.nijasc.ktor-svelte')));
        return '';
    });
    code = code.replace(/^(implementation\(.*\))$/gm, 'dependencies {\n    $1\n}');
    const plugins = ['    java', '    id("io.github.nijasc.ktor-svelte")', ...pluginLines.map((line) => line.replace(/ version "[^"]*"/, ''))];
    return [...imports, '', 'plugins {', ...plugins, '}', '', code.trim(), ''].join('\n');
}

function frontendExports(directory) {
    const values = new Set();
    const types = new Set();
    for (const name of readdirSync(directory).filter((file) => file.endsWith('.ts'))) {
        const text = readFileSync(join(directory, name), 'utf8');
        for (const match of text.matchAll(/^export (?:async )?(const|function|class|let|interface|type) (\w+)/gm)) {
            (match[1] === 'interface' || match[1] === 'type' ? types : values).add(match[2]);
        }
    }
    for (const name of values) types.delete(name);
    return { values, types };
}

function usesRouteTypes(block) {
    return block.body.includes("from './$types'");
}

function frontendPath(block, blocks) {
    if (!usesRouteTypes(block)) return `lib/docs-snippets/${snippetId(block)}.${block.lang}`;
    if (block.lang === 'svelte') {
        const load = blocks.filter((other) => other.page === block.page && other.lang === 'ts' && other.line < block.line && usesRouteTypes(other)).at(-1);
        return `routes/(docs-snippets)/${snippetId(load ?? block)}/+page.svelte`;
    }
    return `routes/(docs-snippets)/${snippetId(block)}/${block.body.includes('LayoutLoad') ? '+layout.ts' : '+page.ts'}`;
}

function missingImports(code, apiExports) {
    const imported = new Set([...code.matchAll(/import\s+(?:type\s+)?\{([^}]*)\}/g)].flatMap((match) => match[1].split(',').map((name) => name.replace(/^\s*type\s+/, '').trim().split(/\s+as\s+/).pop())));
    const declared = new Set([...code.matchAll(/\b(?:const|let|var|function|class)\s+(\w+)/g)].map((match) => match[1]));
    const withoutStrings = code.replace(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g, '').replaceAll('...', ' ');
    const used = new Set(withoutStrings.match(/(?<![.\w$])[A-Za-z_$][\w$]*/g) ?? []);
    const wanted = (name) => used.has(name) && !imported.has(name) && !declared.has(name) && !globals.has(name);
    const api = [...apiExports.values].filter(wanted).concat([...apiExports.types].filter(wanted).map((name) => `type ${name}`));
    const lines = [];
    if (api.length > 0) lines.push(`import { ${api.join(', ')} } from '#api';`);
    if (wanted('goto')) lines.push("import { goto } from '$app/navigation';");
    return lines;
}

function frontendSource(block, apiExports) {
    const body = block.body.trimEnd();
    const imports = missingImports(body, apiExports);
    if (block.lang === 'ts') return [...imports, body, '', 'export {};', ''].join('\n');
    const script = body.match(/<script lang="ts">\n/);
    if (!script) return [`<script lang="ts">`, ...imports.map((line) => `    ${line}`), '</script>', '', body, ''].join('\n');
    const at = script.index + script[0].length;
    return body.slice(0, at) + imports.map((line) => `    ${line}\n`).join('') + body.slice(at) + '\n';
}

function run(command, args, cwd) {
    console.log(`> ${command} ${args.join(' ')}`);
    const result = spawnSync(command, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' });
    return result.status === 0;
}

const globalDeclarations = readFileSync(join(snippetsBuild, 'globals.d.ts'), 'utf8');
const globals = new Set([...globalDeclarations.matchAll(/^declare (?:let|const|function) (\w+)/gm)].map((match) => match[1]));
const gradlew = join(root, process.platform === 'win32' ? 'gradlew.bat' : 'gradlew');
const blocks = codeBlocks();
const placeholder = /"[^"\n]*<[a-z][a-z ]*>[^"\n]*"/;
const skipped = blocks.filter((block) => block.info.includes('no-check') || placeholder.test(block.body));
const checked = blocks.filter((block) => !skipped.includes(block));

const frontend = join(generated, 'frontend');
rmSync(join(generated, 'kotlin'), { recursive: true, force: true });
rmSync(join(generated, 'gradle'), { recursive: true, force: true });
if (existsSync(frontend)) {
    for (const name of readdirSync(frontend).filter((entry) => entry !== 'node_modules')) rmSync(join(frontend, name), { recursive: true, force: true });
}

const kotlin = checked.filter((block) => block.lang === 'kotlin');
const gradle = kotlin.filter((block) => isGradle(block.body));
const server = kotlin.filter((block) => !isGradle(block.body));

const packagesByPage = new Map();
for (const block of server) {
    const name = block.body.match(/^package (\S+)/m)?.[1];
    if (name) packagesByPage.set(block.page, new Set([...(packagesByPage.get(block.page) ?? []), name]));
}
for (const block of server) {
    const file = join(generated, 'kotlin', `${snippetId(block)}.kt`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, kotlinSource(block, packagesByPage));
}

const gradleRoot = join(generated, 'gradle');
mkdirSync(gradleRoot, { recursive: true });
const rootPath = root.replace(/\\/g, '/');
writeFileSync(
    join(gradleRoot, 'settings.gradle.kts'),
    [
        'pluginManagement {',
        `    includeBuild("${rootPath}")`,
        '    repositories {',
        '        gradlePluginPortal()',
        '        mavenCentral()',
        '    }',
        '}',
        '',
        'dependencyResolutionManagement {',
        '    versionCatalogs {',
        '        create("libs") {',
        `            from(files("${rootPath}/gradle/libs.versions.toml"))`,
        '        }',
        '    }',
        '}',
        '',
        'rootProject.name = "gradle-snippets"',
        '',
        ...gradle.map((block) => `include("${snippetId(block)}")`),
        ''
    ].join('\n')
);
writeFileSync(join(gradleRoot, 'build.gradle.kts'), 'plugins {\n    alias(libs.plugins.kotlin.jvm) apply false\n    alias(libs.plugins.ktor) apply false\n}\n');
for (const block of gradle) {
    const directory = join(gradleRoot, snippetId(block));
    mkdirSync(directory, { recursive: true });
    writeFileSync(join(directory, 'build.gradle.kts'), gradleProject(block));
}

const frontendBlocks = checked.filter((block) => block.lang === 'ts' || block.lang === 'svelte');
for (const name of ['package.json', 'bun.lock', 'tsconfig.json', 'vite.config.ts', 'src', 'messages']) {
    cpSync(join(notesFrontend, name), join(frontend, name), { recursive: true });
}
const apiExports = frontendExports(join(notesFrontend, 'src', 'lib', 'api'));
writeFileSync(join(frontend, 'src', 'docs-snippets.d.ts'), globalDeclarations);
for (const block of frontendBlocks) {
    const file = join(frontend, 'src', frontendPath(block, frontendBlocks));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, frontendSource(block, apiExports));
}

console.log(`Checking ${server.length} Kotlin, ${gradle.length} Gradle and ${frontendBlocks.length} TypeScript and Svelte snippets. Skipped ${skipped.length}:`);
for (const block of skipped) console.log(`  ${block.page}:${block.line} (${block.lang})`);

const results = [
    run(gradlew, ['-p', relative(root, snippetsBuild), 'compileKotlin', '--console=plain', '-q'], root),
    run(gradlew, ['-p', relative(root, gradleRoot), 'help', '--console=plain', '-q'], root),
    run('bun', ['install', '--frozen-lockfile'], frontend) &&
        run('bun', ['x', 'svelte-kit', 'sync'], frontend) && run('bun', ['x', 'svelte-check', '--tsconfig', './tsconfig.json', '--threshold', 'error'], frontend)
];

if (results.includes(false)) {
    console.error('Some docs snippets do not compile. Generated files are in docs/snippets/build/snippets, named after the page and line.');
    process.exit(1);
}
