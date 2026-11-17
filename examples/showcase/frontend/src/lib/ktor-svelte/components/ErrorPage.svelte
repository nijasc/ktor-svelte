<script lang="ts">
    import { page } from '$app/state';
    import { m } from '#i18n';

    interface Props {
        home?: string;
    }

    let { home = '/' }: Props = $props();

    const status = $derived(page.error?.status ?? page.status);
    const given = $derived(page.error?.message ?? '');
    const fallback = $derived(status === 404 ? m.errorNotFound() : status === 403 ? m.errorForbidden() : status === 401 ? m.errorSignIn() : m.errorFailed());
    const standard = ['', 'Not Found', 'Internal Error', 'Forbidden', 'Unauthorized'];
    const message = $derived(standard.includes(given) ? fallback : given);
    const requestId = $derived(status >= 500 ? page.error?.requestId : undefined);
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div class="grid justify-items-center gap-4 py-16 text-center">
    <h1 class="text-6xl font-bold">{status}</h1>
    <p id="error-message" class="text-lg">{message}</p>
    {#if requestId}<p id="error-request-id" class="text-sm opacity-70">{m.errorRequestId()} <code>{requestId}</code></p>{/if}
    <a class="btn btn-primary" href={home}>{m.errorHome()}</a>
</div>
