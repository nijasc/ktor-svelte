import { ApiError, request, type RequestOptions } from './client.js';
import type { Greeting } from './types.js';

/** @see twofrontends/Application.kt */
export const greetingList = (options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, operation: 'greeting.list' });

export const greeting = {
    /** @see twofrontends/Application.kt */
    list: greetingList,
};

export interface ApiErrors {
}

const errorStatuses: Record<string, number[]> = {
};

export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

export const api = { greeting };

function bindFetch<T extends object>(target: T, fetch: typeof globalThis.fetch): T {
    const bound: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(target)) {
        if (typeof value !== 'function') {
            bound[key] = bindFetch(value as object, fetch);
            continue;
        }
        const arity = value.length;
        bound[key] = (...args: unknown[]) => {
            const padded = args.slice(0, arity);
            padded.length = arity;
            padded[arity - 1] = { fetch, ...(padded[arity - 1] as RequestOptions | undefined) };
            return value(...padded);
        };
    }
    return bound as T;
}

export function apiWith(event: { fetch: typeof globalThis.fetch }): typeof api {
    return bindFetch(api, event.fetch);
}
