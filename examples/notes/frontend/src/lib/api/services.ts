import { ApiError, request, type RequestOptions } from './client.js';
import type { Greeting, Note, NoteInput, NoteStats, NotesExport, Problem, UploadReceipt, PublicConfig } from './types.js';

export const greeting = {
    list: (query?: { name?: string }, options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, query, operation: 'greeting.list' }),
};

export const notes = {
    list: (query?: { search?: string; tag?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' }),
    create: (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' }),
    getExport: (options?: RequestOptions) => request<NotesExport>('GET', '/api/notes/export', { ...options, operation: 'notes.getExport' }),
    get: (id: string | number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.get' }),
    update: (id: string | number, body: NoteInput, options?: RequestOptions) => request<Note>('PUT', `/api/notes/${encodeURIComponent(id)}`, { ...options, body, operation: 'notes.update' }),
    delete: (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.delete' }),
    archive: (id: string | number, options?: RequestOptions) => request<Note>('POST', `/api/notes/${encodeURIComponent(id)}/archive`, { ...options, operation: 'notes.archive' }),
    attachments: (id: string | number, body: FormData, options?: RequestOptions) => request<UploadReceipt>('POST', `/api/notes/${encodeURIComponent(id)}/attachments`, { ...options, body, operation: 'notes.attachments' }),
};

export const stats = {
    list: (options?: RequestOptions) => request<NoteStats>('GET', '/api/stats', { ...options, operation: 'stats.list' }),
};

export interface ApiErrors {
    'notes.get': Problem;
    'notes.update': Problem;
    'notes.delete': Problem;
    'notes.archive': Problem;
    'notes.attachments': Problem;
}

const errorStatuses: Record<string, number[]> = {
    'notes.get': [404],
    'notes.update': [404],
    'notes.delete': [404],
    'notes.archive': [404],
    'notes.attachments': [404],
};

export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

let publicConfig: Promise<PublicConfig> | undefined;

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

export const api = { greeting, notes, stats };
