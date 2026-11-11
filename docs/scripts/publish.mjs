import { cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [version, latestBuild, versionedBuild, site] = process.argv.slice(2);
if (!version || !latestBuild || !versionedBuild || !site) {
    console.error('Usage: bun scripts/publish.mjs <version> <latest build> <versioned build> <gh-pages checkout>');
    process.exit(1);
}
if (version !== 'main' && !/^\d+\.\d+\.\d+$/.test(version)) {
    console.error(`"${version}" is neither main nor a release version such as 1.2.3.`);
    process.exit(1);
}

const parse = (value) => value.split('.').map(Number);
const newestFirst = (a, b) => {
    const left = parse(a);
    const right = parse(b);
    for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return right[i] - left[i];
    return 0;
};

const listFile = join(site, 'versions.json');
const list = existsSync(listFile) ? JSON.parse(readFileSync(listFile, 'utf8')) : {};
const previous = list.versions ?? [];
const versions = version === 'main' ? previous : [...new Set([...previous, version])].sort(newestFirst);
const latest = versions[0] ?? null;
const main = version === 'main' || list.main === true;

const versionedTarget = join(site, version === 'main' ? 'main' : `v${version}`);
rmSync(versionedTarget, { recursive: true, force: true });
cpSync(versionedBuild, versionedTarget, { recursive: true });

if (version === latest) {
    const kept = new Set(['.git', '.nojekyll', 'versions.json', 'main']);
    for (const entry of readdirSync(site)) {
        if (kept.has(entry) || /^v\d+\.\d+\.\d+$/.test(entry)) continue;
        rmSync(join(site, entry), { recursive: true, force: true });
    }
    cpSync(latestBuild, site, { recursive: true });
}

writeFileSync(listFile, `${JSON.stringify({ latest, versions, main }, null, 2)}\n`);
writeFileSync(join(site, '.nojekyll'), '');
console.log(`Published ${version}. Latest is ${latest}. Versions: ${versions.join(', ')}.`);
