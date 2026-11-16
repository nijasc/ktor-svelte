<script lang="ts">
    import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';

    interface Props extends Omit<HTMLInputAttributes, 'value' | 'class'> {
        label: string;
        value?: string | number | null;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        multiline?: boolean;
        class?: string;
    }

    let { label, value = $bindable(), bounds, errors, hint, multiline = false, id, class: className = '', ...rest }: Props = $props();

    const uid = $props.id();
    const inputId = $derived(id ?? uid);
    const hintId = `${uid}-hint`;
    const options = $derived({ bounds, errors, errorClass: 'text-error text-sm', describedBy: hint ? hintId : undefined });
    const textareaRest = $derived(rest as unknown as HTMLTextareaAttributes);
</script>

<div class={['grid gap-1', className]}>
    <label class="text-sm font-medium" for={inputId}>{label}</label>
    {#if multiline}
        <textarea id={inputId} class="textarea w-full" bind:value use:field={options} {...textareaRest}></textarea>
    {:else}
        <input id={inputId} class="input w-full" bind:value use:field={options} {...rest} />
    {/if}
    {#if hint}<p class="text-sm opacity-70" id={hintId}>{hint}</p>{/if}
</div>
