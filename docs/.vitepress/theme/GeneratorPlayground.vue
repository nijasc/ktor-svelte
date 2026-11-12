<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue';
import sample from './playgroundSample.json';

type Result = { files?: Record<string, string>; error?: string };

const spec = ref(JSON.stringify(sample, null, 4));
const prefix = ref('/api');
const generate = shallowRef<((openApi: string, apiPrefix: string) => string) | undefined>();
const result = ref<Result>({});
const selected = ref('types.ts');
const copied = ref(false);

const shownFiles = ['types.ts', 'services.ts', 'client.ts', 'form.ts', 'index.ts'];
const files = computed(() => shownFiles.filter((name) => result.value.files?.[name] !== undefined));
const output = computed(() => result.value.files?.[selected.value] ?? '');

let timer: ReturnType<typeof setTimeout> | undefined;

function run() {
    if (!generate.value) return;
    result.value = JSON.parse(generate.value(spec.value, prefix.value)) as Result;
}

watch([spec, prefix], () => {
    clearTimeout(timer);
    timer = setTimeout(run, 250);
});

onMounted(async () => {
    const module = await import('virtual:typescript-generator');
    generate.value = module.generateTypeScript;
    run();
});

function reset() {
    spec.value = JSON.stringify(sample, null, 4);
    prefix.value = '/api';
}

async function copy() {
    await navigator.clipboard.writeText(output.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
}
</script>

<template>
    <div class="playground">
        <div class="input">
            <div class="toolbar">
                <label>
                    <span>API prefix</span>
                    <input v-model="prefix" spellcheck="false" aria-label="API prefix" />
                </label>
                <button type="button" @click="reset">Reset example</button>
            </div>
            <textarea v-model="spec" spellcheck="false" aria-label="OpenAPI document as JSON"></textarea>
        </div>
        <div class="output">
            <p v-if="!generate" class="status">Loading the generator...</p>
            <p v-else-if="result.error" class="status error" role="alert">{{ result.error }}</p>
            <template v-else>
                <div class="toolbar" role="tablist" aria-label="Generated files">
                    <button
                        v-for="name in files"
                        :key="name"
                        type="button"
                        role="tab"
                        :aria-selected="selected === name"
                        :class="{ active: selected === name }"
                        @click="selected = name"
                    >
                        {{ name }}
                    </button>
                    <button type="button" class="copy" @click="copy">{{ copied ? 'Copied' : 'Copy' }}</button>
                </div>
                <pre role="tabpanel"><code>{{ output }}</code></pre>
            </template>
        </div>
    </div>
</template>

<style scoped>
.playground {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0;
}

@media (min-width: 960px) {
    .playground {
        grid-template-columns: 1fr 1fr;
    }
}

.input,
.output {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
}

.toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 8px;
    min-height: 40px;
}

label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
}

label > span {
    color: var(--vp-c-text-2);
}

input,
textarea,
pre {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    font-family: var(--vp-font-family-mono);
    font-size: 13px;
}

input {
    padding: 6px 10px;
}

textarea,
pre {
    height: 560px;
    margin: 0;
    padding: 12px;
    overflow: auto;
    line-height: 1.5;
    white-space: pre;
}

textarea {
    resize: vertical;
}

button {
    padding: 6px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
}

button:hover,
button.active {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
}

.copy {
    margin-left: auto;
    font-family: var(--vp-font-family-base);
}

.status {
    padding: 12px;
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
}

.error {
    color: var(--vp-c-danger-1);
    background: var(--vp-c-danger-soft);
    white-space: pre-wrap;
}
</style>
