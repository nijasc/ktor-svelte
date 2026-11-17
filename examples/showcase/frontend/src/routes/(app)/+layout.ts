import { signedInUser } from '#api';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async ({ url }) => ({ user: await signedInUser(url) });
