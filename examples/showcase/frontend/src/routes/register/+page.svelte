<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { api, field, isValidationError, loadPublicConfig, Registration } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { session } from '#lib/session.svelte.ts';

    let draft = $state(Registration.empty());
    let errors = $state<Record<string, string[]>>({});
    let open = $state(true);
    let busy = $state(false);

    onMount(async () => {
        open = (await loadPublicConfig()).registrationOpen;
    });

    async function register(event: SubmitEvent) {
        event.preventDefault();
        errors = Registration.validate(draft);
        if (Object.keys(errors).length > 0) return;
        busy = true;
        try {
            session.user = await api.users.create(draft);
            session.ready = true;
            await goto('/board');
        } catch (error) {
            if (isValidationError(error)) errors = error.body.fields;
        } finally {
            busy = false;
        }
    }
</script>

<svelte:head>
    <title>{m.navRegister()} - {m.appTitle()}</title>
</svelte:head>

<div class="mx-auto max-w-sm">
    <h1 class="mb-6 text-3xl font-bold">{m.navRegister()}</h1>
    {#if open}
        <form class="grid gap-3" novalidate onsubmit={register}>
            <label class="grid gap-1" for="name">
                <span>{m.fieldName()}</span>
                <input
                    id="name"
                    class="input w-full"
                    autocomplete="name"
                    bind:value={draft.name}
                    use:field={{ bounds: Registration.bounds.name, errors: errors.name, errorClass: 'text-error text-sm' }}
                />
            </label>
            <label class="grid gap-1" for="email">
                <span>{m.fieldEmail()}</span>
                <input
                    id="email"
                    class="input w-full"
                    type="email"
                    autocomplete="username"
                    bind:value={draft.email}
                    use:field={{ bounds: Registration.bounds.email, errors: errors.email, errorClass: 'text-error text-sm' }}
                />
            </label>
            <label class="grid gap-1" for="password">
                <span>{m.fieldPassword()}</span>
                <input
                    id="password"
                    class="input w-full"
                    type="password"
                    autocomplete="new-password"
                    bind:value={draft.password}
                    use:field={{ bounds: Registration.bounds.password, errors: errors.password, errorClass: 'text-error text-sm' }}
                />
            </label>
            <button class="btn btn-primary" type="submit" disabled={busy}><Icon name="UserPlus" size={16} /> {m.navRegister()}</button>
        </form>
    {:else}
        <p id="registration-closed" class="alert">{m.problemRegistrationClosed()}</p>
    {/if}
    <p class="mt-4 text-sm">{m.registerHaveAccount()} <a class="link" href="/login">{m.navSignIn()}</a></p>
</div>
