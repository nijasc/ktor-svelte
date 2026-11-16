<script lang="ts">
    import { page } from '$app/state';
    import { routes } from '#routes';
</script>

<h1>{page.status}</h1>
<p>{page.error?.message}</p>
<a href={routes.notes()}>Back to your notes</a>
