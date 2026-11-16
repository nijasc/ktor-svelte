<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { api, loadPublicConfig, Registration } from '#api';
    import Field from '#components/Field.svelte';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { routes } from '#routes';
    import { formState } from '#lib/api/form-state.svelte.ts';
    import { session } from '#lib/session.svelte.ts';

    const form = formState<Registration>(Registration.empty(), {
        validate: Registration.validate,
        checks: { email: api.checks.getEmail }
    });
    let open = $state(true);

    onMount(async () => {
        open = (await loadPublicConfig()).registrationOpen;
    });

    async function register(event: SubmitEvent) {
        event.preventDefault();
        const user = await form.submit((draft) => api.users.create(draft));
        if (!user) return;
        session.user = user;
        session.ready = true;
        await goto(routes.board());
    }
</script>

<svelte:head>
    <title>{m.navRegister()} - {m.appTitle()}</title>
</svelte:head>

<div class="mx-auto max-w-sm">
    <h1 class="mb-6 text-3xl font-bold">{m.navRegister()}</h1>
    {#if open}
        <form class="grid gap-3" novalidate onsubmit={register}>
            <Field
                id="name"
                label={m.fieldName()}
                autocomplete="name"
                bind:value={form.draft.name}
                bounds={Registration.bounds.name}
                errors={form.errors.name}
            />
            <Field
                id="email"
                label={m.fieldEmail()}
                type="email"
                autocomplete="username"
                bind:value={form.draft.email}
                bounds={Registration.bounds.email}
                errors={form.errors.email}
            />
            <Field
                id="password"
                label={m.fieldPassword()}
                type="password"
                autocomplete="new-password"
                bind:value={form.draft.password}
                bounds={Registration.bounds.password}
                errors={form.errors.password}
            />
            <button class="btn btn-primary" type="submit" disabled={form.submitting}><Icon name="UserPlus" size={16} /> {m.navRegister()}</button>
        </form>
    {:else}
        <p id="registration-closed" class="alert">{m.problemRegistrationClosed()}</p>
    {/if}
    <p class="mt-4 text-sm">{m.registerHaveAccount()} <a class="link" href={routes.login()}>{m.navSignIn()}</a></p>
</div>
