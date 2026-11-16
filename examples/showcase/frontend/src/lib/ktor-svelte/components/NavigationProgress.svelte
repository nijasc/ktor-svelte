<script lang="ts">
    import { navigating } from '$app/state';

    interface Props {
        delay?: number;
        label?: string;
        class?: string;
    }

    let { delay = 150, label = 'Loading page', class: className = '' }: Props = $props();

    let phase = $state<'idle' | 'running' | 'done'>('idle');

    $effect(() => {
        if (navigating.to === null) return;
        const start = setTimeout(() => (phase = 'running'), delay);
        return () => {
            clearTimeout(start);
            if (phase !== 'running') return;
            phase = 'done';
            setTimeout(() => {
                if (phase === 'done') phase = 'idle';
            }, 300);
        };
    });
</script>

{#if phase !== 'idle'}
    <div
        class={['ktor-svelte-progress', className]}
        role="progressbar"
        aria-label={label}
        aria-busy={phase === 'running'}
        data-phase={phase}
    ></div>
{/if}

<style>
    .ktor-svelte-progress {
        position: fixed;
        inset: 0 auto auto 0;
        z-index: 2147483000;
        width: 100%;
        height: 3px;
        background: var(--ktor-svelte-progress, var(--color-primary));
        transform-origin: left;
        pointer-events: none;
        animation: run 8s cubic-bezier(0.1, 0.6, 0.2, 1) forwards;
    }

    .ktor-svelte-progress[data-phase='done'] {
        opacity: 0;
        transform: scaleX(1);
        transition: opacity 0.25s ease-out;
        animation: none;
    }

    @keyframes run {
        from {
            transform: scaleX(0);
        }

        to {
            transform: scaleX(0.9);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .ktor-svelte-progress {
            opacity: 0.6;
            transform: scaleX(1);
            animation: none;
        }
    }
</style>
