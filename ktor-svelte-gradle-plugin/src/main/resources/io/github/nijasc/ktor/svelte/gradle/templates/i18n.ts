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

function closing(text: string, open: number): number {
    let depth = 0;
    for (let at = open; at < text.length; at++) {
        if (text[at] === '{') depth++;
        else if (text[at] === '}' && --depth === 0) return at;
    }
    return -1;
}

function pluralForm(forms: string, count: number, locale: string): string | undefined {
    const found = new Map<string, string>();
    let at = 0;
    while (at < forms.length) {
        const open = forms.indexOf('{', at);
        const close = open < 0 ? -1 : closing(forms, open);
        if (close < 0) break;
        found.set(forms.slice(at, open).trim(), forms.slice(open + 1, close));
        at = close + 1;
    }
    return found.get(`=${count}`) ?? found.get(new Intl.PluralRules(locale).select(count)) ?? found.get('other');
}

function format(text: string, values: Record<string, string | number>, locale: string): string {
    let result = '';
    let at = 0;
    while (at < text.length) {
        const open = text.indexOf('{', at);
        const close = open < 0 ? -1 : closing(text, open);
        if (close < 0) return result + text.slice(at);
        result += text.slice(at, open);
        const inner = text.slice(open + 1, close);
        const plural = /^(\w+)\s*,\s*plural\s*,([\s\S]*)$/.exec(inner);
        if (plural) {
            const count = Math.trunc(Number(values[plural[1]])) || 0;
            const form = pluralForm(plural[2], count, locale);
            if (form !== undefined) result += format(form.replaceAll('#', String(count)), values, locale);
        } else if (/^\w+$/.test(inner) && values[inner] !== undefined) {
            result += String(values[inner]);
        } else {
            result += text.slice(open, close + 1);
        }
        at = close + 1;
    }
    return result;
}

function translate(key: keyof (typeof messages)[Locale], values?: Record<string, string | number>): string {
    const locale = getLocale();
    const text: string = messages[locale][key];
    const result = values ? format(text, values, locale) : text;
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
