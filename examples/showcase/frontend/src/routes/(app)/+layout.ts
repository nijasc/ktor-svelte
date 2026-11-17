import { redirect } from '@sveltejs/kit';
import { currentUser } from '#api';
import { routes } from '#routes';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async () => {
    const user = await currentUser.load();
    if (!user) redirect(307, routes.login());
    return { user };
};
