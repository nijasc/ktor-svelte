<script lang="ts">
    import { m } from '#i18n';
    import EmailLayout from './parts/EmailLayout.svelte';

    let { name, boardLink }: { name: string; boardLink: string } = $props();
</script>

<svelte:head>
    <title>{m.emailWelcomeSubject({ name })}</title>
</svelte:head>

<EmailLayout>
    <h1 class="title">{m.emailWelcomeTitle({ name })}</h1>
    <p>{m.emailWelcomeText()}</p>
    <p><a class="button" href={boardLink}>{m.emailWelcomeAction()}</a></p>
</EmailLayout>

<style>
    .title {
        margin: 0 0 16px;
        font-size: 24px;
    }
    .button {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 8px;
        background: #7f52ff;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
    }
    .button:hover {
        background: #6a3ff0;
    }
</style>
