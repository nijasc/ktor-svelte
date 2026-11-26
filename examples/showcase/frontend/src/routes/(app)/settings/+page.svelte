<script lang="ts">
    import { api, ErrorCode, hasErrorCode, isValidationError, PasswordChange, ProfileInput } from '#api';
    import Field from '#components/Field.svelte';
    import IconInput from '#components/IconInput.svelte';
    import Icon from '#icon';
    import { m } from '#i18n';
    import { toast } from '#lib/ktor-svelte/toasts.ts';
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
            await api.me.update(profile);
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
            else if (hasErrorCode(error, ErrorCode.WrongPassword)) passwordErrors = { current: [error.body.message] };
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
        <Field
            id="profile-name"
            label={m.fieldName()}
            bind:value={profile.name}
            bounds={ProfileInput.bounds.name}
            errors={profileErrors.name}
        />
        <button class="btn btn-primary justify-self-start" type="submit"><Icon name="Check" size={16} /> {m.taskSave()}</button>
    </form>
</section>

<section class="max-w-md" aria-labelledby="password-title">
    <h2 id="password-title" class="mb-3 text-xl font-semibold">{m.settingsPassword()}</h2>
    <form class="grid gap-3" novalidate onsubmit={changePassword}>
        <IconInput
            id="password-current"
            label={m.settingsCurrentPassword()}
            icon="LockKeyhole"
            type="password"
            autocomplete="current-password"
            showLabel={m.settingsShowPassword()}
            hideLabel={m.settingsHidePassword()}
            bind:value={password.current}
            errors={passwordErrors.current}
        />
        <IconInput
            id="password-next"
            label={m.settingsNewPassword()}
            icon="KeyRound"
            type="password"
            autocomplete="new-password"
            showLabel={m.settingsShowPassword()}
            hideLabel={m.settingsHidePassword()}
            bind:value={password.next}
            bounds={PasswordChange.bounds.next}
            errors={passwordErrors.next}
            hint={m.settingsPasswordHint({ min: PasswordChange.bounds.next.minlength ?? 0 })}
        />
        <button class="btn btn-primary justify-self-start" type="submit"><Icon name="KeyRound" size={16} /> {m.settingsChangePassword()}</button>
    </form>
</section>
