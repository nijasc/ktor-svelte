<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { baseFor, currentVersion, useVersions } from './versions';

const { list, pageIn } = useVersions();

const message = computed(() => {
    const latest = list.value?.latest;
    if (!latest || latest === currentVersion) return null;
    if (currentVersion === 'main') return { text: 'You are reading the docs for unreleased changes on main.', latest };
    return { text: `You are reading the docs for ktor-svelte ${currentVersion}.`, latest };
});

watchEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.setProperty('--vp-layout-top-height', message.value ? '40px' : '0px');
});

function openLatest() {
    if (list.value) window.location.href = pageIn(baseFor(list.value.latest, list.value.latest));
}
</script>

<template>
    <div v-if="message" class="version-banner" role="status">
        <span>{{ message.text }}</span>
        <a href="#" @click.prevent="openLatest">Read the docs for {{ message.latest }}, the latest release.</a>
    </div>
</template>

<style scoped>
.version-banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    background: var(--vp-c-warning-soft);
    backdrop-filter: blur(8px);
    color: var(--vp-c-text-1);
}

.version-banner a {
    font-weight: 600;
    color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
    .version-banner span {
        display: none;
    }
}
</style>
