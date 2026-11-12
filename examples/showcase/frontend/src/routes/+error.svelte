<script lang="ts">
    import { page } from '$app/state';
    import { m } from '#i18n';
</script>

<svelte:head>
    <title>{page.status} - {m.appTitle()}</title>
</svelte:head>

<h1 class="text-3xl font-bold">{page.status}</h1>
<p id="error-message" class="my-4">{page.error?.message ?? m.errorUnknown()}</p>
<a class="btn btn-primary" href="/">{m.errorHome()}</a>
