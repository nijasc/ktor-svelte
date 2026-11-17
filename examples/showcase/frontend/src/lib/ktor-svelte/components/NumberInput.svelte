<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import MaskedInput from './MaskedInput.svelte';
    import { numberMask } from './masks.js';

    interface Props extends Omit<ComponentProps<typeof MaskedInput>, 'mask' | 'value'> {
        value?: string | number | null;
        fractionDigits?: number;
        number?: boolean;
    }

    let { value = $bindable(), fractionDigits = 2, number = false, locale, ...rest }: Props = $props();

    const pageLocale = typeof document === 'undefined' ? undefined : document.documentElement.lang || undefined;
    const mask = $derived(numberMask(locale ?? pageLocale, fractionDigits));
    const asNumber = $derived(number || typeof value === 'number');
</script>

<MaskedInput
    {...rest}
    {locale}
    {mask}
    bind:value={() => (value == null ? null : String(value)), (text) => (value = text == null ? null : asNumber ? Number(text) : text)}
/>
