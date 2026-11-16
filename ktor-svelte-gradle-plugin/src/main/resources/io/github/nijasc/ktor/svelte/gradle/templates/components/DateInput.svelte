<script lang="ts" generics="T extends string = string">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';
    import Field from './Field.svelte';

    interface Props extends Omit<HTMLInputAttributes, 'value' | 'class' | 'type'> {
        label: string;
        value?: T | null;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        class?: string;
    }

    let { label, value = $bindable(), bounds, errors, hint, id, class: className, ...rest }: Props = $props();
</script>

<Field {label} {bounds} {errors} {hint} {id} class={className}>
    {#snippet control({ id: inputId, options })}
        <input
            id={inputId}
            class="{{input}}"
            type="date"
            bind:value={() => value ?? '', (text) => (value = text === '' ? null : (text as T))}
            use:field={options}
            {...rest}
        />
    {/snippet}
</Field>
