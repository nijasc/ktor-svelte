<script module lang="ts">
    const glyph = {
        width: 16,
        height: 16,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'aria-hidden': 'true'
    } as const;
</script>

<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import { field, type FieldBounds } from '#api';
    import Icon from '../Icon.svelte';
    import type { LucideIconName } from '../icons.js';
    import Field from './Field.svelte';

    interface Props extends Omit<HTMLInputAttributes, 'value' | 'class' | 'type'> {
        label: string;
        icon: LucideIconName;
        trailingIcon?: LucideIconName;
        value?: string | null;
        type?: 'text' | 'email' | 'search' | 'url' | 'tel' | 'password';
        clearable?: boolean;
        clearLabel?: string;
        showLabel?: string;
        hideLabel?: string;
        busy?: boolean;
        busyLabel?: string;
        bounds?: FieldBounds;
        errors?: string[];
        hint?: string;
        class?: string;
    }

    let {
        label,
        icon,
        trailingIcon,
        value = $bindable(),
        type,
        clearable = false,
        clearLabel = 'Clear',
        showLabel = 'Show password',
        hideLabel = 'Hide password',
        busy = false,
        busyLabel = 'Checking',
        bounds,
        errors,
        hint,
        id,
        class: className,
        ...rest
    }: Props = $props();

    let input = $state<HTMLInputElement>();
    let revealed = $state(false);
    const shownType = $derived(type === 'password' && revealed ? 'text' : type);
    const canClear = $derived(clearable && value != null && value !== '' && !rest.disabled && !rest.readonly);

    function clear() {
        value = null;
        input?.focus();
    }

    function clearOnEscape(event: KeyboardEvent) {
        if (event.key !== 'Escape' || !canClear) return;
        event.preventDefault();
        clear();
    }

    function keepMessagesBelow(box: HTMLElement) {
        const move = () => box.querySelectorAll(':scope > [role="alert"]').forEach((message) => box.after(message));
        const observer = new MutationObserver(move);
        observer.observe(box, { childList: true });
        move();
        return { destroy: () => observer.disconnect() };
    }
</script>

<Field {label} {bounds} {errors} {hint} {id} class={className}>
    {#snippet control({ id: inputId, options })}
        <div class="input w-full" use:keepMessagesBelow>
            <span class="shrink-0 opacity-60" aria-hidden="true"><Icon name={icon} size={18} /></span>
            <input
                bind:this={input}
                id={inputId}
                class="ktor-svelte-icon-input-control grow"
                type={shownType}
                bind:value
                onkeydown={clearOnEscape}
                aria-busy={busy || undefined}
                use:field={options}
                {...rest}
            />
            {#if busy}
                <span class="loading loading-spinner loading-xs shrink-0 opacity-70" aria-hidden="true"></span>
            {/if}
            <span class="ktor-svelte-icon-input-status" role="status">{busy ? busyLabel : ''}</span>
            {#if canClear}
                <button type="button" class="btn btn-ghost btn-xs btn-square -me-1" aria-label={clearLabel} title={clearLabel} onclick={clear}>
                    <svg {...glyph}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            {/if}
            {#if type === 'password'}
                <button
                    type="button"
                    class="btn btn-ghost btn-xs btn-square -me-1"
                    aria-label={revealed ? hideLabel : showLabel}
                    title={revealed ? hideLabel : showLabel}
                    aria-pressed={revealed}
                    aria-controls={inputId}
                    disabled={rest.disabled}
                    onclick={() => (revealed = !revealed)}
                >
                    {#if revealed}
                        <svg {...glyph}>
                            <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                            <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                            <path d="m2 2 20 20" />
                        </svg>
                    {:else}
                        <svg {...glyph}>
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    {/if}
                </button>
            {:else if trailingIcon && !busy}
                <span class="shrink-0 opacity-60" aria-hidden="true"><Icon name={trailingIcon} size={18} /></span>
            {/if}
        </div>
    {/snippet}
</Field>

<style>
    .ktor-svelte-icon-input-control::-webkit-search-cancel-button {
        appearance: none;
    }

    .ktor-svelte-icon-input-control::-ms-reveal,
    .ktor-svelte-icon-input-control::-ms-clear {
        display: none;
    }

    .ktor-svelte-icon-input-status {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }
</style>
