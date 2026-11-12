<script setup lang="ts">
import { onMounted, ref } from 'vue';
import themes from 'virtual:site-themes';
import { THEME_STORAGE_KEY } from '../themeScript';
import { cssVariables, type SiteTheme } from './siteTheme';

const all = themes as SiteTheme[];
const groups = [
    { label: 'ktor-svelte', themes: all.filter((theme) => theme.group === 'ktor-svelte') },
    { label: 'DaisyUI', themes: all.filter((theme) => theme.group === 'DaisyUI') }
];
const selected = ref('');
const applied = new Set<string>();

function clear() {
    const root = document.documentElement;
    applied.forEach((name) => root.style.removeProperty(name));
    applied.clear();
    root.style.cssText
        .split(';')
        .map((rule) => rule.split(':')[0].trim())
        .filter((name) => name.startsWith('--vp-'))
        .forEach((name) => root.style.removeProperty(name));
    delete root.dataset.siteTheme;
}

function choose(name: string) {
    selected.value = name;
    clear();
    const theme = all.find((candidate) => candidate.name === name);
    try {
        if (!theme) {
            localStorage.removeItem(THEME_STORAGE_KEY);
            const appearance = localStorage.getItem('vitepress-theme-appearance') ?? 'auto';
            const dark = appearance === 'dark' || (appearance === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
            document.documentElement.classList.toggle('dark', dark);
            return;
        }
        const vars = cssVariables(theme);
        const root = document.documentElement;
        Object.entries(vars).forEach(([key, value]) => {
            root.style.setProperty(key, value);
            applied.add(key);
        });
        root.classList.toggle('dark', theme.scheme === 'dark');
        root.dataset.siteTheme = theme.name;
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({ name: theme.name, scheme: theme.scheme, vars }));
    } catch {
        return;
    }
}

onMounted(() => {
    selected.value = document.documentElement.dataset.siteTheme ?? '';
});
</script>

<template>
    <label class="theme-switcher" title="Preview the site in any theme ktor-svelte ships">
        <span class="visually-hidden">Theme</span>
        <select :value="selected" @change="choose(($event.target as HTMLSelectElement).value)">
            <option value="">Theme: default</option>
            <optgroup v-for="group in groups" :key="group.label" :label="group.label">
                <option v-for="theme in group.themes" :key="theme.name" :value="theme.name">{{ theme.label }}</option>
            </optgroup>
        </select>
    </label>
</template>

<style scoped>
.theme-switcher {
    display: flex;
    align-items: center;
    margin-left: 12px;
}

select {
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg-alt);
    color: var(--vp-c-text-1);
    font-size: 13px;
    padding: 4px 8px;
    cursor: pointer;
    max-width: 150px;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
}
</style>
