import { redirect } from '@sveltejs/kit';
import { currentUser, loginPath } from '#api';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async ({ url }) => {
    const user = await currentUser.load();
    if (!user) redirect(307, loginPath(url));
    return { user };
};
