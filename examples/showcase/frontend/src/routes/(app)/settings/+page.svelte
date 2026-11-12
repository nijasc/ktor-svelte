<script lang="ts">
    import { api, field, isApiError, isValidationError, PasswordChange, ProfileInput } from '#api';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
    import { session } from '#lib/session.svelte.ts';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let profile = $state(ProfileInput.empty());
    let profileErrors = $state<Record<string, string[]>>({});
    let password = $state(PasswordChange.empty());
    let passwordErrors = $state<Record<string, string[]>>({});

    $effect(() => {
        profile.name = data.user.name;
    });

    async function saveProfile(event: SubmitEvent) {
        event.preventDefault();
        profileErrors = ProfileInput.validate(profile);
        if (Object.keys(profileErrors).length > 0) return;
        try {
            session.user = await api.me.update(profile);
            toast(m.settingsSaved(), { kind: 'success' });
        } catch (error) {
            if (!isValidationError(error)) throw error;
            profileErrors = error.body.fields;
        }
    }

    async function changePassword(event: SubmitEvent) {
        event.preventDefault();
        passwordErrors = PasswordChange.validate(password);
        if (Object.keys(passwordErrors).length > 0) return;
        try {
            await api.me.putPassword(password, { silent: true });
            password = PasswordChange.empty();
            toast(m.settingsPasswordChanged(), { kind: 'success' });
        } catch (error) {
            if (isValidationError(error)) passwordErrors = error.body.fields;
            else if (isApiError(error, 'me.putPassword')) passwordErrors = { current: [error.body.message] };
            else throw error;
        }
    }
</script>

<svelte:head>
    <title>{m.navSettings()} - {m.appTitle()}</title>
</svelte:head>

<h1 class="mb-6 text-3xl font-bold">{m.navSettings()}</h1>

<section class="mb-10 max-w-md" aria-labelledby="profile-title">
    <h2 id="profile-title" class="mb-3 text-xl font-semibold">{m.settingsProfile()}</h2>
    <p class="mb-3 text-sm">{data.user.email}</p>
    <form class="grid gap-3" novalidate onsubmit={saveProfile}>
        <label class="grid gap-1" for="profile-name">
            <span>{m.fieldName()}</span>
            <input
                id="profile-name"
                class="input w-full"
                autocomplete="name"
                bind:value={profile.name}
                use:field={{ bounds: ProfileInput.bounds.name, errors: profileErrors.name, errorClass: 'text-error text-sm' }}
            />
        </label>
        <button class="btn btn-primary justify-self-start" type="submit"><Icon name="Check" size={16} /> {m.taskSave()}</button>
    </form>
</section>

<section class="max-w-md" aria-labelledby="password-title">
    <h2 id="password-title" class="mb-3 text-xl font-semibold">{m.settingsPassword()}</h2>
    <form class="grid gap-3" novalidate onsubmit={changePassword}>
        <label class="grid gap-1" for="password-current">
            <span>{m.settingsCurrentPassword()}</span>
            <input
                id="password-current"
                class="input w-full"
                type="password"
                autocomplete="current-password"
                bind:value={password.current}
                use:field={{ errors: passwordErrors.current, errorClass: 'text-error text-sm' }}
            />
        </label>
        <label class="grid gap-1" for="password-next">
            <span>{m.settingsNewPassword()}</span>
            <input
                id="password-next"
                class="input w-full"
                type="password"
                autocomplete="new-password"
                bind:value={password.next}
                use:field={{ bounds: PasswordChange.bounds.next, errors: passwordErrors.next, errorClass: 'text-error text-sm' }}
            />
        </label>
        <button class="btn btn-primary justify-self-start" type="submit"><Icon name="KeyRound" size={16} /> {m.settingsChangePassword()}</button>
    </form>
</section>
