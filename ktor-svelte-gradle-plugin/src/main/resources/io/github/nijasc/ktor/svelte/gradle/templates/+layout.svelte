<script lang="ts">
    import '#lib/ktor-svelte/app.css';

    let { children } = $props();
</script>

{@render children()}
