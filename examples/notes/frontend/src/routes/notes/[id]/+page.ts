import { error } from '@sveltejs/kit';
import { apiWith, isApiError } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => {
    try {
        return { note: await apiWith(event).notes.get(event.params.id) };
    } catch (failure) {
        if (isApiError(failure, 'notes.get')) error(failure.status, failure.body.message);
        throw failure;
    }
};
