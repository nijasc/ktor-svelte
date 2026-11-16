<script lang="ts">
    import { onMount } from 'svelte';
    import { defaultLocale, getLocale, locales, setLocale, type Locale } from '../i18n.js';

    interface Props {
        label?: string;
        labels?: Partial<Record<Locale, string>>;
        id?: string;
        class?: string;
    }

    let { label = 'Language', labels = {}, id, class: className = '' }: Props = $props();

    let locale = $state<Locale>(defaultLocale);

    onMount(() => {
        locale = getLocale();
    });

    function name(of: Locale): string {
        const given = labels[of];
        if (given !== undefined) return given;
        try {
            return new Intl.DisplayNames([of], { type: 'language' }).of(of) ?? of;
        } catch {
            return of;
        }
    }

    function pick(next: Locale) {
        locale = next;
        setLocale(next);
    }
</script>

<select
    {id}
    class={['select select-sm', className]}
    aria-label={label}
    value={locale}
    onchange={(event) => pick(event.currentTarget.value as Locale)}
>
    {#each locales as option (option)}
        <option value={option} lang={option}>{name(option)}</option>
    {/each}
</select>
