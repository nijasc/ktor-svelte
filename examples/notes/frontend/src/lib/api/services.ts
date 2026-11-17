import { ApiError, request, type RequestOptions } from './client.js';
import type { Activity, Greeting, Note, NoteInput, NoteStats, NotesExport, Problem, UploadReceipt, PublicConfig } from './types.js';

/** @see notes/Routes.kt */
export const greetingList = (query?: { name?: string }, options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, query, operation: 'greeting.list' });

export const greeting = {
    /** @see notes/Routes.kt */
    list: greetingList,
};

/** @see notes/Routes.kt */
export const notesList = (query?: { search?: string; tag?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' });
/** @see notes/Routes.kt */
export const notesCreate = (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' });
/** @see notes/Routes.kt */
export const notesGetExport = (options?: RequestOptions) => request<NotesExport>('GET', '/api/notes/export', { ...options, operation: 'notes.getExport' });
/** @see notes/Routes.kt */
export const notesGetFeed = (query?: { cursor?: string; limit?: string }, options?: RequestOptions) => request<{
    items: Note[];
    next?: string | null;
}>('GET', '/api/notes/feed', { ...options, query, operation: 'notes.getFeed' });
/** @see notes/Routes.kt */
export const notesGet = (id: number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });
/** @see notes/Routes.kt */
export const notesUpdate = (id: number, body: NoteInput, options?: RequestOptions) => request<Note>('PUT', `/api/notes/${encodeURIComponent(id)}`, { ...options, body, operation: 'notes.update' });
/** @see notes/Routes.kt */
export const notesDelete = (id: number, options?: RequestOptions) => request<void>('DELETE', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.delete' });
/** @see notes/Routes.kt */
export const notesGetActivity = (id: string | number, options?: RequestOptions) => request<Activity[]>('GET', `/api/notes/${encodeURIComponent(id)}/activity`, { ...options, operation: 'notes.getActivity' });
/** @see notes/Routes.kt */
export const notesArchive = (id: string | number, options?: RequestOptions) => request<Note>('POST', `/api/notes/${encodeURIComponent(id)}/archive`, { ...options, operation: 'notes.archive' });
/**
 * Uploads files to a note.
 *
 * Send the files as multipart form data. The response lists the received file names and the total size.
 *
 * @see notes/Routes.kt
 */
export const notesAttachments = (id: string | number, body: FormData, options?: RequestOptions) => request<UploadReceipt>('POST', `/api/notes/${encodeURIComponent(id)}/attachments`, { ...options, body, operation: 'notes.attachments' });

export const notes = {
    /** @see notes/Routes.kt */
    list: notesList,
    /** @see notes/Routes.kt */
    create: notesCreate,
    /** @see notes/Routes.kt */
    getExport: notesGetExport,
    /** @see notes/Routes.kt */
    getFeed: notesGetFeed,
    /** @see notes/Routes.kt */
    get: notesGet,
    /** @see notes/Routes.kt */
    update: notesUpdate,
    /** @see notes/Routes.kt */
    delete: notesDelete,
    /** @see notes/Routes.kt */
    getActivity: notesGetActivity,
    /** @see notes/Routes.kt */
    archive: notesArchive,
    /**
     * Uploads files to a note.
     *
     * Send the files as multipart form data. The response lists the received file names and the total size.
     *
     * @see notes/Routes.kt
     */
    attachments: notesAttachments,
};

/** @see notes/Routes.kt */
export const statsList = (options?: RequestOptions) => request<NoteStats>('GET', '/api/stats', { ...options, operation: 'stats.list' });

export const stats = {
    /** @see notes/Routes.kt */
    list: statsList,
};

export interface ApiErrors {
    'notes.get': Problem;
    'notes.update': Problem;
    'notes.delete': Problem;
    'notes.getActivity': Problem;
    'notes.archive': Problem;
    'notes.attachments': Problem;
}

const errorStatuses: Record<string, number[]> = {
    'notes.get': [404],
    'notes.update': [404],
    'notes.delete': [404],
    'notes.getActivity': [404],
    'notes.archive': [404],
    'notes.attachments': [404],
};

export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

let publicConfig: Promise<PublicConfig> | undefined;

export function readPublicConfig(): PublicConfig | undefined {
    if (typeof document === 'undefined') return undefined;
    const element = document.getElementById('ktor-svelte-config');
    if (!element?.textContent) return undefined;
    return JSON.parse(element.textContent) as PublicConfig;
}

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    const inline = readPublicConfig();
    if (inline) return Promise.resolve(inline);
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

export const api = { greeting, notes, stats };

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
