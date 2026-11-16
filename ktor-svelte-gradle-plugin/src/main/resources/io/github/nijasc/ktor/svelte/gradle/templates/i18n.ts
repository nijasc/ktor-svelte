const messages = {
{{tables}}
} as const;

export const locales = {{locales}} as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = '{{defaultLocale}}';

declare global {
    var __ktorSvelteLocale: Locale | undefined;
    var __ktorSvelteUntranslated: Map<string, { key: string; locale: string }> | undefined;
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
    const locale = getLocale();
    const text: string = messages[locale][key];
    const result = values ? text.replace(/\{(\w+)}/g, (match, name) => String(values[name] ?? match)) : text;
    if (import.meta.env.DEV && locale !== defaultLocale && typeof document !== 'undefined' && text === messages[defaultLocale][key]) {
        (globalThis.__ktorSvelteUntranslated ??= new Map()).set(result, { key, locale });
    }
    return result;
}

export const m = {
{{functions}}
};

if (typeof document !== 'undefined') {
    document.documentElement.lang = getLocale();
{{prefixCookie}}}
