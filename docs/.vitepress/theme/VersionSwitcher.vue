<script setup lang="ts">
import { computed } from 'vue';
import { baseFor, currentVersion, useVersions } from './versions';

const { list, pageIn } = useVersions();

const options = computed(() => {
    const versions = list.value?.versions ?? [];
    const named = versions.map((version) => ({
        value: version,
        label: version === list.value?.latest ? `${version} (latest)` : version
    }));
    if (!versions.includes(currentVersion)) named.unshift({ value: currentVersion, label: currentVersion });
    return named;
});

function open(event: Event) {
    const version = (event.target as HTMLSelectElement).value;
    if (!list.value || version === currentVersion) return;
    window.location.href = pageIn(baseFor(version, list.value.latest));
}
</script>

<template>
    <label class="version-switcher">
        <span class="visually-hidden">Documentation version</span>
        <select :value="currentVersion" @change="open">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
    </label>
</template>

<style scoped>
.version-switcher {
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
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
}
</style>
