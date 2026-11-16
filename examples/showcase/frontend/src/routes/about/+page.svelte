<script lang="ts">
    import { m } from '#i18n';
    import { modal } from '#lib/ktor-svelte/modal.ts';

    const demoUsers = modal();

    const rows = $derived([
        { feature: m.aboutRowClient(), where: 'src/lib/api, generateTs = true' },
        { feature: m.aboutRowAuth(), where: 'Auth.kt, routing = SvelteRouting.Manual' },
        { feature: m.aboutRowDatabase(), where: 'Database.kt, db/migration' },
        { feature: m.aboutRowValidation(), where: 'Model.kt, use:field' },
        { feature: m.aboutRowUploads(), where: 'TaskRoutes.kt, onUploadProgress' },
        { feature: m.aboutRowPaging(), where: 'Page<Task>, latest()' },
        { feature: m.aboutRowLibraries(), where: 'build.gradle.kts, svelte { libraries { } }' },
        { feature: m.aboutRowLimits(), where: 'rateLimit { limit("login", ...) }' },
        { feature: m.aboutRowHealth(), where: '/_ktor-svelte/health' }
    ]);
</script>

<svelte:head>
    <title>{m.navAbout()} - {m.appTitle()}</title>
</svelte:head>

<article class="prose max-w-none">
    <h1>{m.aboutTitle()}</h1>
    <p>{m.aboutLead()}</p>
    <table>
        <thead>
            <tr><th scope="col">{m.aboutFeature()}</th><th scope="col">{m.aboutWhere()}</th></tr>
        </thead>
        <tbody>
            {#each rows as row (row.feature)}
                <tr><td>{row.feature}</td><td><code>{row.where}</code></td></tr>
            {/each}
        </tbody>
    </table>
</article>
<button class="btn mt-4" type="button" onclick={() => demoUsers.open()}>{m.aboutDemoTitle()}</button>

<dialog class="modal" aria-labelledby="demo-users-title" use:demoUsers.attach>
    <div class="modal-box">
        <h2 id="demo-users-title" class="text-lg font-semibold">{m.aboutDemoTitle()}</h2>
        <p class="py-2">{m.aboutDemoText()}</p>
        <div class="modal-action">
            <button class="btn" type="button" onclick={() => demoUsers.close()}>{m.actionClose()}</button>
        </div>
    </div>
</dialog>
