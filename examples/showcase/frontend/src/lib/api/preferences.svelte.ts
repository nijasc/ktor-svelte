import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

const defaults: Required<UserPreferences> = {
    "theme": null,
    "locale": null,
    "compactBoard": false
};

const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>('/api/preferences', state, defaults, { theme: 'ktor_svelte_theme', locale: 'ktor_svelte_locale' });
