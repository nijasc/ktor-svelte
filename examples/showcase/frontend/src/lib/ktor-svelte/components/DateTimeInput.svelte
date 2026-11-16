<script lang="ts" generics="T extends string = string">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';
    import Field from './Field.svelte';

    interface Props extends Omit<HTMLInputAttributes, 'value' | 'class' | 'type'> {
        label: string;
        value?: T | null;
        local?: boolean;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        class?: string;
    }

    let { label, value = $bindable(), local = false, bounds, errors, hint, id, class: className, ...rest }: Props = $props();

    const pad = (part: number, length = 2) => String(part).padStart(length, '0');

    function shown(current: T | null | undefined): string {
        if (!current) return '';
        if (local) return current.slice(0, 16);
        const date = new Date(current);
        if (Number.isNaN(date.getTime())) return '';
        const day = `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        return `${day}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }

    function read(text: string): T | null {
        if (text === '') return null;
        if (local) return (text.length === 16 ? `${text}:00` : text) as T;
        const date = new Date(text);
        return Number.isNaN(date.getTime()) ? null : (date.toISOString() as T);
    }
</script>

<Field {label} {bounds} {errors} {hint} {id} class={className}>
    {#snippet control({ id: inputId, options })}
        <input
            id={inputId}
            class="input w-full"
            type="datetime-local"
            bind:value={() => shown(value), (text) => (value = read(text))}
            use:field={options}
            {...rest}
        />
    {/snippet}
</Field>
