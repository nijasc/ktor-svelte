<script>
    const greeting = fetch('/api/hello').then((response) => response.json());
</script>

<h1>Client-side app</h1>
{#await greeting}
    <p>Loading</p>
{:then data}
    <p id="greeting">{data.message}</p>
{/await}
<a href="/">Home</a>
