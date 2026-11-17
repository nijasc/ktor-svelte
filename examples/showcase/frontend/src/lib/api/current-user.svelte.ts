import { userStore, type UserState } from './client.js';
import type { CurrentUser } from './types.js';

const state = $state<UserState<CurrentUser>>({ user: null, ready: false, sessionEnds: null, sessionEnding: false });

export const currentUser = userStore<CurrentUser>('/api/current-user', state);
