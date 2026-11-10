export const themes = {{themes}} as const;

export type ThemeName = (typeof themes)[number];

export const defaultTheme: ThemeName = '{{defaultTheme}}';

function readCookie(): string | undefined {
    return document.cookie.match(/(?:^|; ){{cookie}}=([^;]+)/)?.[1];
}

export function getTheme(): ThemeName {
    if (typeof document === 'undefined') return defaultTheme;
    const saved = readCookie();
    return themes.find((theme) => theme === saved) ?? defaultTheme;
}

export function setTheme(theme: ThemeName): void {
    document.documentElement.dataset.theme = theme;
    document.cookie = `{{cookie}}=${theme}; path=/; max-age=31536000; samesite=lax`;
}
