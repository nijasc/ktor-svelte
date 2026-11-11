<script setup lang="ts">
const build = [
    { label: 'frontend/', note: 'your SvelteKit app' },
    { label: 'svelteInstall', note: 'lockfile install' },
    { label: 'svelteBuild', note: 'adapter-static' },
    { label: 'svelteBundle', note: 'manifest and gzip' },
    { label: 'JAR resources', note: 'ktor-svelte/public/' }
];

const request = [
    { label: 'Browser', note: 'GET /about' },
    { label: 'Ktor routing', note: 'your routes first' },
    { label: 'SvelteHandler', note: 'catch-all route' },
    { label: 'RequestResolver', note: 'manifest lookup' },
    { label: 'AssetResponder', note: 'ETag, range, encoding' }
];

const width = 128;
const gap = 16;
const x = (index: number) => 8 + index * (width + gap);
</script>

<template>
    <figure class="architecture">
        <svg viewBox="0 0 728 330" role="img" aria-labelledby="architecture-title architecture-desc">
            <title id="architecture-title">ktor-svelte architecture</title>
            <desc id="architecture-desc">
                At build time the frontend is installed, built and bundled into the JAR with a manifest. At request time Ktor
                routing tries your routes first, then the ktor-svelte catch-all resolves the path against the manifest and
                serves the file. In development the handler proxies to Vite instead.
            </desc>
            <defs>
                <marker id="architecture-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
                </marker>
            </defs>

            <text x="8" y="18" class="lane">Build time (Gradle)</text>
            <g v-for="(step, index) in build" :key="step.label">
                <rect :x="x(index)" y="28" :width="width" height="52" rx="8" class="box" />
                <text :x="x(index) + width / 2" y="50" class="label">{{ step.label }}</text>
                <text :x="x(index) + width / 2" y="68" class="note">{{ step.note }}</text>
                <line v-if="index < build.length - 1" :x1="x(index) + width" y1="54" :x2="x(index + 1)" y2="54" class="arrow" marker-end="url(#architecture-arrow)" />
            </g>

            <text x="8" y="128" class="lane">Request time (Ktor)</text>
            <g v-for="(step, index) in request" :key="step.label">
                <rect :x="x(index)" y="138" :width="width" height="52" rx="8" :class="index === 0 ? 'box outside' : 'box'" />
                <text :x="x(index) + width / 2" y="160" class="label">{{ step.label }}</text>
                <text :x="x(index) + width / 2" y="178" class="note">{{ step.note }}</text>
                <line v-if="index < request.length - 1" :x1="x(index) + width" y1="164" :x2="x(index + 1)" y2="164" class="arrow" marker-end="url(#architecture-arrow)" />
            </g>

            <line :x1="x(4) + width / 2" y1="80" :x2="x(4) + width / 2" y2="138" class="arrow dashed" marker-end="url(#architecture-arrow)" />
            <text :x="x(4) + width / 2 + 6" y="112" class="note start">files</text>
            <line :x1="x(3) + width / 2" y1="80" :x2="x(3) + width / 2" y2="138" class="arrow dashed" marker-end="url(#architecture-arrow)" />
            <text :x="x(3) + width / 2 + 6" y="112" class="note start">manifest</text>

            <line :x1="x(1) + width / 2" y1="190" :x2="x(1) + width / 2" y2="240" class="arrow" marker-end="url(#architecture-arrow)" />
            <rect :x="x(1)" y="240" :width="width" height="52" rx="8" class="box outside" />
            <text :x="x(1) + width / 2" y="262" class="label">Your routes</text>
            <text :x="x(1) + width / 2" y="280" class="note">/api/..., always win</text>

            <line :x1="x(2) + width / 2" y1="190" :x2="x(2) + width / 2" y2="240" class="arrow dashed" marker-end="url(#architecture-arrow)" />
            <rect :x="x(2)" y="240" :width="width" height="52" rx="8" class="box dev" />
            <text :x="x(2) + width / 2" y="262" class="label">DevProxy</text>
            <text :x="x(2) + width / 2" y="280" class="note">to Vite, dev only</text>

            <text x="8" y="318" class="note start">Solid arrows run in production. Dashed arrows read build output or run only in development.</text>
        </svg>
    </figure>
</template>

<style scoped>
.architecture {
    margin: 24px 0;
}

svg {
    width: 100%;
    height: auto;
    font-family: var(--vp-font-family-base);
}

.box {
    fill: var(--vp-c-bg-soft);
    stroke: var(--vp-c-brand-1);
    stroke-width: 1.5;
}

.box.outside {
    stroke: var(--vp-c-text-3);
}

.box.dev {
    stroke: var(--vp-c-text-3);
    stroke-dasharray: 5 4;
}

.label {
    fill: var(--vp-c-text-1);
    font-size: 13px;
    font-weight: 600;
    text-anchor: middle;
}

.note {
    fill: var(--vp-c-text-2);
    font-size: 11px;
    text-anchor: middle;
}

.note.start {
    text-anchor: start;
}

.lane {
    fill: var(--vp-c-text-2);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.arrow {
    stroke: var(--vp-c-text-2);
    stroke-width: 1.5;
}

.arrow.dashed {
    stroke-dasharray: 5 4;
}

.arrow-head {
    fill: var(--vp-c-text-2);
}
</style>
