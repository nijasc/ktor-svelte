<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { snippetProject } from './stackblitzProject';

const props = defineProps<{ code: string }>();

const files = ref<Record<string, string> | null>(null);

function decode(value: string): string {
    const bytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

onMounted(async () => {
    files.value = await snippetProject(decode(props.code));
});

function open() {
    if (!files.value) return;
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://stackblitz.com/run?file=src/App.svelte';
    form.target = '_blank';
    form.style.display = 'none';
    const fields: Record<string, string> = {
        'project[title]': 'ktor-svelte snippet',
        'project[description]': 'A snippet from the ktor-svelte docs, with the generated notes client and a mock API.',
        'project[template]': 'node'
    };
    for (const [path, content] of Object.entries(files.value)) fields[`project[files][${path}]`] = content;
    for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    form.remove();
}
</script>

<template>
    <div class="stackblitz">
        <button type="button" :disabled="!files" @click="open">Open in StackBlitz</button>
        <span>Runs with the generated notes client and a mock API.</span>
    </div>
</template>

<style scoped>
.stackblitz {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: -8px 0 16px;
    font-size: 13px;
    color: var(--vp-c-text-2);
}

button {
    padding: 4px 12px;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 6px;
    background: transparent;
    color: var(--vp-c-brand-1);
    font-weight: 600;
    cursor: pointer;
}

button:hover:not(:disabled) {
    background: var(--vp-c-brand-soft);
}

button:disabled {
    opacity: 0.5;
    cursor: default;
}

button:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
}
</style>
