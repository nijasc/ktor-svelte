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
    const options = $derived({ bounds, errors, errorClass: '{{error}}', describedBy: hint ? hintId : undefined });
    const textareaRest = $derived(rest as unknown as HTMLTextareaAttributes);
</script>

<div class={['{{wrapper}}', className]}>
    <label class="{{label}}" for={inputId}>{label}</label>
    {#if multiline}
        <textarea id={inputId} class="{{textarea}}" bind:value use:field={options} {...textareaRest}></textarea>
    {:else}
        <input id={inputId} class="{{input}}" bind:value use:field={options} {...rest} />
    {/if}
    {#if hint}<p class="{{hint}}" id={hintId}>{hint}</p>{/if}
</div>
{{style}}