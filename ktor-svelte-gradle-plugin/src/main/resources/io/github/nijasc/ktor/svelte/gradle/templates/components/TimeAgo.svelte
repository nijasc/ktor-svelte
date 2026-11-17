<script module lang="ts">
    const TICK = 30_000;
    let now = $state(Date.now());
    let watchers = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    function watch(): () => void {
        if (watchers++ === 0) {
            now = Date.now();
            timer = setInterval(() => (now = Date.now()), TICK);
        }
        return () => {
            if (--watchers === 0) clearInterval(timer);
        };
    }
</script>

<script lang="ts">
    import { formatDateTime, timeAgo } from '../format.js';

    interface Props {
        value: string | Date;
        class?: string;
    }

    let { value, class: className = '' }: Props = $props();

    const date = $derived(typeof value === 'string' ? new Date(value) : value);

    $effect(watch);
</script>

<time class={className} datetime={date.toISOString()} title={formatDateTime(date)}>{timeAgo(date, new Date(now))}</time>
