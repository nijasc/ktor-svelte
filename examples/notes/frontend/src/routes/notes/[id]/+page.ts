import { error } from '@sveltejs/kit';
import { ApiError, api } from '#lib/api/index.js';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ fetch, params }) => {
    try {
        return { note: await api.notes.get(params.id, { fetch }) };
    } catch (failure) {
        if (failure instanceof ApiError && failure.status === 404) error(404, 'That note does not exist.');
        throw failure;
    }
};
