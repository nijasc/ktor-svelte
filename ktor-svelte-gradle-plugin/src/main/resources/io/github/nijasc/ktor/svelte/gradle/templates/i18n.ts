const messages = {
{{tables}}
} as const;

export const locales = {{locales}} as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = '{{defaultLocale}}';

declare global {
    var __ktorSvelteLocale: Locale | undefined;
}

function matchLocale(tag: string | undefined): Locale | undefined {
    if (!tag) return undefined;
    const lower = tag.toLowerCase();
    return locales.find((locale) => locale.toLowerCase() === lower) ?? locales.find((locale) => locale.toLowerCase() === lower.split('-')[0]);
}

export function getLocale(): Locale {
    if (typeof document === 'undefined') return globalThis.__ktorSvelteLocale ?? defaultLocale;
{{browserLocale}}    const cookie = document.cookie.match(/(?:^|; ){{cookie}}=([^;]+)/)?.[1];
    return matchLocale(cookie) ?? matchLocale(navigator.language) ?? defaultLocale;
}

export function setLocale(locale: Locale): void {
    document.cookie = `{{cookie}}=${locale}; path=/; max-age=31536000; samesite=lax`;
{{setLocaleBody}}}

export function localizeHref(path: string): string {
    return {{localizeBody}};
}

function translate(key: keyof (typeof messages)[Locale], values?: Record<string, string | number>): string {
    const text: string = messages[getLocale()][key];
    return values ? text.replace(/\{(\w+)}/g, (match, name) => String(values[name] ?? match)) : text;
}

export const m = {
{{functions}}
};

if (typeof document !== 'undefined') {
    document.documentElement.lang = getLocale();
{{prefixCookie}}}
