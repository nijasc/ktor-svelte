import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import type { DefaultTheme } from 'vitepress';

interface Page {
    section: string;
    title: string;
    link: string;
}

const excluded = new Set(['/changelog']);

function pagesOf(sidebar: DefaultTheme.SidebarItem[]): Page[] {
    const seen = new Set<string>();
    return sidebar.flatMap((group) =>
        (group.items ?? [])
            .filter((item) => item.link?.startsWith('/') && !excluded.has(item.link) && !seen.has(item.link) && seen.add(item.link))
            .map((item) => ({ section: group.text ?? '', title: item.text ?? '', link: item.link! }))
    );
}

function pagePath(link: string): string {
    return link.endsWith('/') ? `${link}index` : link;
}

function sourceFile(srcDir: string, link: string): string | undefined {
    const file = join(srcDir, `${pagePath(link)}.md`);
    return existsSync(file) ? file : undefined;
}

function absoluteLink(page: Page, target: string, siteUrl: string): string {
    const [path, anchor = ''] = target.split('#');
    const resolved = posix.resolve(posix.dirname(pagePath(page.link)), path.replace(/\.md$/, '')).replace(/^\//, '');
    const clean = resolved.endsWith('/index') ? resolved.slice(0, -'index'.length) : resolved === 'index' ? '' : resolved;
    return `${siteUrl}${clean}${anchor ? `#${anchor}` : ''}`;
}

function plainMarkdown(source: string, page: Page, siteUrl: string): string {
    return source
        .replace(/^---\n[\s\S]*?\n---\n/, '')
        .replace(/^::: (?:tip|warning|danger|info|details) ?(.*)$/gm, (_, title: string) => (title ? `**${title}**` : ''))
        .replace(/^::: ?v-pre$/gm, '')
        .replace(/^:::$/gm, '')
        .replace(/^( *```\w+) (?:no-check|stackblitz)$/gm, '$1')
        .replace(/^<[A-Z][A-Za-z]* *\/>$/gm, '')
        .replace(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g, (_, target: string) => `](${absoluteLink(page, target, siteUrl)})`)
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

export function writeLlmsFiles(options: {
    srcDir: string;
    outDir: string;
    siteUrl: string;
    title: string;
    description: string;
    sidebar: DefaultTheme.SidebarItem[];
}) {
    const pages = pagesOf(options.sidebar).filter((page) => sourceFile(options.srcDir, page.link));
    const url = (link: string) => options.siteUrl + link.replace(/^\//, '');

    const sections = new Map<string, Page[]>();
    for (const page of pages) sections.set(page.section, [...(sections.get(page.section) ?? []), page]);

    const index = [
        `# ${options.title}`,
        '',
        `> ${options.description}`,
        '',
        `The whole documentation as one Markdown file: ${url('llms-full.txt')}`,
        '',
        ...[...sections].flatMap(([section, items]) => [`## ${section}`, '', ...items.map((page) => `- [${page.title}](${url(page.link)})`), '']),
        '## Optional',
        '',
        `- [Changelog](${url('changelog')})`,
        `- [API reference](${url('api/')})`,
        ''
    ].join('\n');

    const full = [
        `# ${options.title}`,
        '',
        `> ${options.description}`,
        '',
        ...pages.map((page) => {
            const body = plainMarkdown(readFileSync(sourceFile(options.srcDir, page.link)!, 'utf8'), page, options.siteUrl);
            return `Source: ${url(page.link)}\n\n${body}\n`;
        })
    ].join('\n');

    writeFileSync(join(options.outDir, 'llms.txt'), index);
    writeFileSync(join(options.outDir, 'llms-full.txt'), full);
}
