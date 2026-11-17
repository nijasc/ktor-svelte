<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';
    import Field from './Field.svelte';
    import { caretAfter, keptBefore, maskFor, type Mask, type MaskName } from './masks.js';

    interface Props extends Omit<HTMLInputAttributes, 'value' | 'class' | 'type' | 'inputmode'> {
        label: string;
        mask: MaskName | Mask;
        value?: string | null;
        locale?: string;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        class?: string;
    }

    let { label, mask, value = $bindable(), locale, bounds, errors, hint, id, class: className, ...rest }: Props = $props();

    const pageLocale = typeof document === 'undefined' ? undefined : document.documentElement.lang || undefined;
    const chosen = $derived(maskFor(mask, locale ?? pageLocale));
    let typed = $state<string | undefined>(undefined);
    const shown = $derived(typed ?? chosen.show(value ?? ''));

    function retype(event: Event & { currentTarget: HTMLInputElement }) {
        const node = event.currentTarget;
        const kept = keptBefore(node.value, node.selectionStart ?? node.value.length, chosen.keeps);
        const next = chosen.retype(node.value);
        typed = next;
        node.value = next;
        const caret = caretAfter(next, kept, chosen.keeps);
        node.setSelectionRange(caret, caret);
        const clean = chosen.clean(next);
        value = clean === '' ? null : clean;
    }

    function settle() {
        if (value != null || typed === '') typed = undefined;
    }
</script>

<Field {label} {bounds} {errors} {hint} {id} class={className}>
    {#snippet control({ id: inputId, options })}
        <input
            id={inputId}
            class="{{input}}"
            type="text"
            inputmode={chosen.inputMode}
            value={shown}
            oninput={retype}
            onblur={settle}
            use:field={options}
            {...rest}
        />
    {/snippet}
</Field>
