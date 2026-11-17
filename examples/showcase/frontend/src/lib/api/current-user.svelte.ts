import { userStore, type UserState } from './client.js';
import type { CurrentUser, Permission } from './types.js';

const state = $state<UserState<CurrentUser, Permission>>({ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

export const currentUser = userStore<CurrentUser, Permission>('/api/current-user', state);

export const can = (permission: Permission): boolean => currentUser.can(permission);
