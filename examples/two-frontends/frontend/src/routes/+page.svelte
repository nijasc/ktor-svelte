<script lang="ts">
    import { api } from '#api';

    const greeting = api.greeting.list();
</script>

<h1>The public site</h1>
{#await greeting then answer}
    <p id="greeting">{answer.message}</p>
{/await}
<nav>
    <a href="/about">About</a>
    <a href="/admin" data-sveltekit-reload>Admin area</a>
</nav>
