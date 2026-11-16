<script lang="ts" generics="T extends string">
    import type { HTMLSelectAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';
    import Field from './Field.svelte';

    interface Props extends Omit<HTMLSelectAttributes, 'value' | 'class'> {
        label: string;
        options: Readonly<Record<string, T>>;
        value?: T | null;
        labels?: Partial<Record<T, string | (() => string)>>;
        placeholder?: string;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        class?: string;
    }

    let { label, options, value = $bindable(), labels, placeholder, bounds, errors, hint, id, class: className, ...rest }: Props = $props();

    function text(option: T): string {
        const given = labels?.[option];
        return typeof given === 'function' ? given() : (given ?? option);
    }
</script>

<Field {label} {bounds} {errors} {hint} {id} class={className}>
    {#snippet control({ id: inputId, options: fieldOptions })}
        <select id={inputId} class="select w-full" bind:value use:field={fieldOptions} {...rest}>
            {#if placeholder !== undefined}<option value={null}>{placeholder}</option>{/if}
            {#each Object.values(options) as option (option)}
                <option value={option}>{text(option)}</option>
            {/each}
        </select>
    {/snippet}
</Field>
