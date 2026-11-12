<script lang="ts">
    import { goto } from '$app/navigation';
    import { api, isApiError, Login } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { session } from '#lib/session.svelte.ts';

    let draft = $state(Login.empty());
    let message = $state('');
    let busy = $state(false);

    async function signIn(event: SubmitEvent) {
        event.preventDefault();
        busy = true;
        message = '';
        try {
            session.user = await api.session.create(draft);
            session.ready = true;
            await goto('/board');
        } catch (error) {
            if (isApiError(error, 'session.create')) message = error.body.message;
            else message = m.loginFailed();
        } finally {
            busy = false;
        }
    }
</script>

<svelte:head>
    <title>{m.navSignIn()} - {m.appTitle()}</title>
</svelte:head>

<div class="mx-auto max-w-sm">
    <h1 class="mb-6 text-3xl font-bold">{m.navSignIn()}</h1>
    <form class="grid gap-3" onsubmit={signIn}>
        <label class="grid gap-1" for="email">
            <span>{m.fieldEmail()}</span>
            <input id="email" class="input w-full" type="email" autocomplete="username" required bind:value={draft.email} />
        </label>
        <label class="grid gap-1" for="password">
            <span>{m.fieldPassword()}</span>
            <input id="password" class="input w-full" type="password" autocomplete="current-password" required bind:value={draft.password} />
        </label>
        <p id="login-error" class="text-error min-h-6" role="alert">{message}</p>
        <button class="btn btn-primary" type="submit" disabled={busy}><Icon name="LogIn" size={16} /> {m.navSignIn()}</button>
    </form>
    <p class="mt-4 text-sm">{m.loginNoAccount()} <a class="link" href="/register">{m.navRegister()}</a></p>
    <p class="mt-2 text-sm">{m.loginDemoHint()}</p>
</div>
