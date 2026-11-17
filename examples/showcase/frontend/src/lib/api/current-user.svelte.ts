import { userStore } from './client.js';
import type { CurrentUser } from './types.js';

const state = $state<{ user: CurrentUser | null; ready: boolean }>({ user: null, ready: false });

export const currentUser = userStore<CurrentUser>('/api/current-user', state);
