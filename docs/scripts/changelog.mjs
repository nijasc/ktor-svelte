import { existsSync, writeFileSync } from 'node:fs';

const repository = 'nijasc/ktor-svelte';
const releasesUrl = `https://github.com/${repository}/releases`;
const output = new URL('../changelog.md', import.meta.url);
const version = process.env.DOCS_VERSION ?? 'main';
const unreleased = version === 'main';

const parse = (value) => value.replace(/^v/, '').split('-')[0].split('.').map(Number);
const compare = (a, b) => {
    const left = parse(a);
    const right = parse(b);
    for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return left[i] - right[i];
    return 0;
};
const includes = (tag) => unreleased || compare(tag, version) <= 0;

async function releases() {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'ktor-svelte-docs' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const all = [];
    for (let page = 1; page <= 10; page++) {
        const response = await fetch(`https://api.github.com/repos/${repository}/releases?per_page=100&page=${page}`, { headers });
        if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
        const batch = await response.json();
        all.push(...batch);
        if (batch.length < 100) break;
    }
    return all.filter((release) => !release.draft && /^v?\d+\.\d+\.\d+$/.test(release.tag_name));
}

function migrationGuide(name) {
    const [major, minor, patch] = name.split('.');
    if (patch !== '0') return '';
    const guide = `${major}.${minor}`;
    return existsSync(new URL(`../migrations/${guide}.md`, import.meta.url)) ? `, <a href="./migrations/${guide}">upgrade guide</a>` : '';
}

function highlights(name) {
    const [major, minor, patch] = name.split('.');
    if (patch !== '0') return '';
    const page = `${major}.${minor}`;
    return existsSync(new URL(`../releases/${page}.md`, import.meta.url)) ? `, <a href="./releases/${page}">highlights</a>` : '';
}

function notes(body) {
    const lines = (body ?? '').replace(/\r\n/g, '\n').split('\n');
    if (lines[0]?.startsWith('## ')) lines.shift();
    const text = lines
        .join('\n')
        .replace(/^#{1,3} /gm, '### ')
        .trim();
    return text === '' ? 'No notes for this release.' : text;
}

const intro = unreleased
    ? `These docs follow \`main\`, which can contain changes that are not released yet. Every released version is listed below and on [GitHub](${releasesUrl}).`
    : `Release notes for ktor-svelte ${version} and every version before it. Each release is also on [GitHub](${releasesUrl}).`;

let page;
try {
    const list = (await releases())
        .filter((release) => includes(release.tag_name))
        .sort((a, b) => compare(b.tag_name, a.tag_name));
    const sections = list.map((release) => {
        const date = (release.published_at ?? release.created_at ?? '').slice(0, 10);
        const name = release.tag_name.replace(/^v/, '');
        return `## ${name}\n\n<p class="changelog-meta">Released ${date}, <a href="${release.html_url}">GitHub release</a>${highlights(name)}${migrationGuide(name)}</p>\n\n::: v-pre\n${notes(release.body)}\n:::\n`;
    });
    page = `# Changelog\n\n${intro}\n\n${sections.join('\n') || 'No releases yet.\n'}`;
} catch (error) {
    console.warn(`ktor-svelte docs: could not load release notes (${error.message}). The changelog page links to GitHub instead.`);
    page = `# Changelog\n\nThe release notes could not be loaded while these docs were built. Read them on [GitHub](${releasesUrl}).\n`;
}
writeFileSync(output, page);
console.log(`ktor-svelte docs: changelog for ${version} written`);
