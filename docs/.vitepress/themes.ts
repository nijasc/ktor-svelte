import { readFileSync } from 'node:fs';
import daisyThemes from 'daisyui/theme/object.js';

export interface SiteTheme {
    name: string;
    label: string;
    group: 'ktor-svelte' | 'DaisyUI';
    scheme: 'light' | 'dark';
    colors: Record<string, string>;
}

const enumSource = (root: URL) =>
    readFileSync(new URL('ktor-svelte-gradle-plugin/src/main/kotlin/io/github/nijasc/ktor/svelte/gradle/SvelteLibraries.kt', root), 'utf8');
const shadcnSource = (root: URL) =>
    readFileSync(new URL('ktor-svelte-gradle-plugin/src/main/kotlin/io/github/nijasc/ktor/svelte/gradle/ShadcnThemes.kt', root), 'utf8');

function shadcnThemes(source: string): Record<string, { scheme: 'light' | 'dark'; colors: Record<string, string> }> {
    const themes: Record<string, { scheme: 'light' | 'dark'; colors: Record<string, string> }> = {};
    const blocks = source.split('DaisyCustomTheme(').slice(1);
    for (const block of blocks) {
        const name = block.match(/DaisyTheme\.(\w+)\.cssName/)?.[1];
        const scheme = block.match(/"(light|dark)"/)?.[1] as 'light' | 'dark' | undefined;
        if (!name || !scheme) continue;
        const colors = Object.fromEntries([...block.matchAll(/"(color-[\w-]+)" to "([^"]+)"/g)].map((match) => [`--${match[1]}`, match[2]]));
        themes[name] = { scheme, colors };
    }
    return themes;
}

export function siteThemes(root: URL): SiteTheme[] {
    const entries = [...enumSource(root).matchAll(/^\s{4}(\w+)\("([\w-]+)"\),?$/gm)].map((match) => ({ constant: match[1], css: match[2] }));
    const shadcn = shadcnThemes(shadcnSource(root));
    const daisy = daisyThemes as Record<string, Record<string, string>>;
    const themes = entries.flatMap(({ constant, css }): SiteTheme[] => {
        const own = shadcn[constant];
        if (own) return [{ name: css, label: constant, group: 'ktor-svelte', scheme: own.scheme, colors: own.colors }];
        const theme = daisy[css];
        if (!theme) return [];
        const colors = Object.fromEntries(Object.entries(theme).filter(([key]) => key.startsWith('--color-')));
        return [{ name: css, label: constant, group: 'DaisyUI', scheme: theme['color-scheme'] === 'dark' ? 'dark' : 'light', colors }];
    });
    return [...themes.filter((theme) => theme.group === 'ktor-svelte'), ...themes.filter((theme) => theme.group === 'DaisyUI')];
}
