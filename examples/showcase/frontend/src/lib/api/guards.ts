import { error, redirect } from '@sveltejs/kit';
import { loginPath, matchGuard, type PageGuard } from './client.js';
import { currentUser } from './current-user.svelte.js';
import type { CurrentUser, Permission } from './types.js';

export const pageGuards: readonly PageGuard<Permission>[] = [
    { page: '/admin', permission: 'ManageUsers' },
    { page: '/board' },
    { page: '/settings' },
    { page: '/tasks' },
];

export async function signedInUser(url: URL): Promise<CurrentUser> {
    const user = await currentUser.load();
    if (!user) redirect(307, loginPath(url));
    const guard = matchGuard(pageGuards, url.pathname);
    if (guard?.permission && !currentUser.can(guard.permission)) error(403, 'Forbidden');
    return user;
}

export async function guardPages(event: { url: URL }): Promise<void> {
    if (typeof document === 'undefined' || !matchGuard(pageGuards, event.url.pathname)) return;
    await signedInUser(event.url);
}
