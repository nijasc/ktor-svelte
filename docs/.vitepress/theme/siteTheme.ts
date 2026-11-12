export interface SiteTheme {
    name: string;
    label: string;
    group: 'ktor-svelte' | 'DaisyUI';
    scheme: 'light' | 'dark';
    colors: Record<string, string>;
}

const mix = (color: string, base: string, percent: number) => `color-mix(in oklch, ${color} ${percent}%, ${base})`;

export function cssVariables(theme: SiteTheme): Record<string, string> {
    const color = (name: string) => theme.colors[`--color-${name}`];
    const base100 = color('base-100');
    const content = color('base-content');
    const primary = color('primary');
    return {
        '--vp-c-bg': base100,
        '--vp-c-bg-alt': color('base-200'),
        '--vp-c-bg-elv': base100,
        '--vp-c-bg-soft': color('base-200'),
        '--vp-c-text-1': content,
        '--vp-c-text-2': mix(content, base100, 75),
        '--vp-c-text-3': mix(content, base100, 55),
        '--vp-c-divider': color('base-300'),
        '--vp-c-border': color('base-300'),
        '--vp-c-gutter': color('base-300'),
        '--vp-c-default-soft': mix(content, base100, 10),
        '--vp-c-brand-1': mix(primary, content, 85),
        '--vp-c-brand-2': primary,
        '--vp-c-brand-3': primary,
        '--vp-c-brand-soft': mix(primary, base100, 16),
        '--vp-button-brand-bg': primary,
        '--vp-button-brand-hover-bg': mix(primary, content, 88),
        '--vp-button-brand-text': color('primary-content'),
        '--vp-button-brand-hover-text': color('primary-content'),
        '--vp-code-block-bg': color('base-200'),
        '--vp-c-tip-1': color('info'),
        '--vp-c-warning-1': color('warning'),
        '--vp-c-danger-1': color('error')
    };
}
