import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import type { HeadConfig, PageData } from 'vitepress';

const width = 1200;
const height = 630;

const sections: Record<string, string> = {
    guide: 'Guide',
    features: 'Features',
    recipes: 'Recipes',
    reference: 'Reference',
    migrations: 'Upgrading'
};

interface SocialPage {
    file: string;
    title: string;
    section: string;
    summary: string;
}

const pages = new Map<string, SocialPage>();

const fontSets = [
    { family: 'DejaVu Sans', files: ['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'] },
    { family: 'Arial', files: ['C:/Windows/Fonts/arial.ttf', 'C:/Windows/Fonts/arialbd.ttf'] },
    { family: 'Arial', files: ['/System/Library/Fonts/Supplemental/Arial.ttf', '/System/Library/Fonts/Supplemental/Arial Bold.ttf'] }
];

function fontOptions() {
    const found = fontSets.find((set) => set.files.every((file) => existsSync(file)));
    return found
        ? { fontFiles: found.files, loadSystemFonts: false, defaultFontFamily: found.family }
        : { loadSystemFonts: true, defaultFontFamily: 'Arial' };
}

function escapeXml(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrap(text: string, maxChars: number, maxLines: number): string[] {
    const lines: string[] = [];
    let line = '';
    for (const word of text.split(/\s+/).filter(Boolean)) {
        if (line && (line + ' ' + word).length > maxChars) {
            lines.push(line);
            line = word;
        } else {
            line = line ? `${line} ${word}` : word;
        }
    }
    if (line) lines.push(line);
    if (lines.length <= maxLines) return lines;
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[.,;:]?$/, '')}...`;
    return kept;
}

function plainText(markdown: string): string {
    return markdown
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[`*_]/g, '')
        .trim();
}

function firstParagraph(source: string): string {
    const body = source.replace(/^---\n[\s\S]*?\n---\n/, '');
    const lines = body.split('\n');
    const start = lines.findIndex((line) => line.startsWith('# '));
    for (const line of lines.slice(start + 1)) {
        const text = line.trim();
        if (!text) continue;
        if (/^(```|\||:::|<|#|-|\d+\.)/.test(text)) return '';
        return plainText(text);
    }
    return '';
}

function imageName(relativePath: string): string {
    return relativePath.replace(/\.md$/, '').replace(/\//g, '-') + '.png';
}

export function socialHead(pageData: PageData, srcDir: string, siteUrl: string, siteTitle: string, siteDescription: string): HeadConfig[] {
    if (pageData.isNotFound || !pageData.relativePath) return [];
    const isHome = pageData.relativePath === 'index.md';
    const title = isHome ? 'Ktor and SvelteKit' : pageData.title || siteTitle;
    const summary =
        pageData.description ||
        (isHome ? siteDescription : firstParagraph(readFileSync(join(srcDir, pageData.relativePath), 'utf8'))) ||
        siteDescription;
    const file = imageName(pageData.relativePath);
    pages.set(file, { file, title, section: sections[pageData.relativePath.split('/')[0]] ?? '', summary });

    const image = `${siteUrl}og/${file}`;
    const pageUrl = siteUrl + pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '');
    const fullTitle = isHome ? siteTitle : `${title} | ${siteTitle}`;
    return [
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: pageUrl }],
        ['meta', { property: 'og:title', content: fullTitle }],
        ['meta', { property: 'og:description', content: summary }],
        ['meta', { property: 'og:image', content: image }],
        ['meta', { property: 'og:image:width', content: String(width) }],
        ['meta', { property: 'og:image:height', content: String(height) }],
        ['meta', { property: 'og:image:alt', content: fullTitle }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: fullTitle }],
        ['meta', { name: 'twitter:description', content: summary }],
        ['meta', { name: 'twitter:image', content: image }]
    ];
}

function svgFor(page: SocialPage, siteLabel: string): string {
    const titleLines = wrap(page.title, 26, 3);
    const summaryLines = wrap(page.summary, 58, titleLines.length > 2 ? 1 : 2);
    const titleTop = page.section ? 262 : 222;
    const titleText = titleLines
        .map((line, index) => `<text x="96" y="${titleTop + index * 84}" class="title">${escapeXml(line)}</text>`)
        .join('');
    const summaryTop = titleTop + (titleLines.length - 1) * 84 + 80;
    const summaryText = summaryLines
        .map((line, index) => `<text x="96" y="${summaryTop + index * 44}" class="summary">${escapeXml(line)}</text>`)
        .join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<defs>
<linearGradient id="brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0.3" stop-color="#ff3e00"/><stop offset="1" stop-color="#7f52ff"/></linearGradient>
<style>
text { font-family: Arial, 'DejaVu Sans', sans-serif; }
.site { font-size: 34px; font-weight: 700; fill: #ffffff; }
.section { font-size: 30px; font-weight: 700; fill: #ff7a52; letter-spacing: 2px; }
.title { font-size: 72px; font-weight: 700; fill: #ffffff; }
.summary { font-size: 32px; fill: #b8b8c4; }
.url { font-size: 26px; fill: #8a8a99; }
</style>
</defs>
<rect width="${width}" height="${height}" fill="#1b1b1f"/>
<rect width="16" height="${height}" fill="url(#brand)"/>
<circle cx="1080" cy="96" r="44" fill="url(#brand)"/>
<text x="96" y="108" class="site">${escapeXml(siteLabel)}</text>
${page.section ? `<text x="96" y="180" class="section">${escapeXml(page.section.toUpperCase())}</text>` : ''}
${titleText}
${summaryText}
<text x="96" y="574" class="url">nijasc.github.io/ktor-svelte</text>
</svg>`;
}

export function writeSocialImages(outDir: string, siteLabel: string) {
    const directory = join(outDir, 'og');
    mkdirSync(directory, { recursive: true });
    const font = fontOptions();
    for (const page of pages.values()) {
        const png = new Resvg(svgFor(page, siteLabel), { fitTo: { mode: 'width', value: width }, font })
            .render()
            .asPng();
        writeFileSync(join(directory, page.file), png);
    }
}
