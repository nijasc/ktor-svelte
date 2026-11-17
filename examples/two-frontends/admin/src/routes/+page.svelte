<script lang="ts">
    import { resolve } from '$app/paths';
    import { api } from '#api';

    const greeting = api.greeting.list();
</script>

<h1>The admin area</h1>
{#await greeting then answer}
    <p id="admin-greeting">{answer.message}</p>
{/await}
<nav>
    <a href={resolve('/users')}>Users</a>
    <a href="/" data-sveltekit-reload>Public site</a>
</nav>
