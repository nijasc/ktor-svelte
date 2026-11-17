<script lang="ts">
    import { tick } from 'svelte';
    import { afterNavigate } from '$app/navigation';

    interface Props {
        selector?: string;
    }

    let { selector = 'main h1, h1' }: Props = $props();

    afterNavigate(async (navigation) => {
        if (navigation.type === 'enter' || navigation.to?.url.hash) return;
        await tick();
        const heading = document.querySelector<HTMLElement>(selector);
        if (!heading) return;
        if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
    });
</script>
