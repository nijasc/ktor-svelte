export const THEME_STORAGE_KEY = 'ktor-svelte-docs-theme';

export const THEME_RESTORE_SCRIPT = `try {
    const saved = JSON.parse(localStorage.getItem('${THEME_STORAGE_KEY}') || 'null');
    if (saved && saved.vars) {
        const root = document.documentElement;
        for (const [name, value] of Object.entries(saved.vars)) root.style.setProperty(name, value);
        root.classList.toggle('dark', saved.scheme === 'dark');
        root.dataset.siteTheme = saved.name;
    }
} catch {}`;
