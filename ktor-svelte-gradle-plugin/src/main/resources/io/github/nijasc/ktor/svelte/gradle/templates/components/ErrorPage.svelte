<script lang="ts">
    import { page } from '$app/state';
{{imports}}
    interface Props {
        home?: string;
    }

    let { home = '/' }: Props = $props();

    const status = $derived(page.error?.status ?? page.status);
    const given = $derived(page.error?.message ?? '');
    const fallback = $derived(status === 404 ? {{notFound}} : status === 403 ? {{forbidden}} : status === 401 ? {{signIn}} : {{failed}});
    const message = $derived(given === '' || given === 'Not Found' || given === 'Internal Error' ? fallback : given);
    const requestId = $derived(status >= 500 ? page.error?.requestId : undefined);
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div class="{{wrapperClass}}">
    <h1 class="{{statusClass}}">{status}</h1>
    <p id="error-message" class="{{messageClass}}">{message}</p>
    {#if requestId}<p id="error-request-id" class="{{requestClass}}">{{requestText}} <code>{requestId}</code></p>{/if}
    <a class="{{buttonClass}}" href={home}>{{homeText}}</a>
</div>
{{style}}