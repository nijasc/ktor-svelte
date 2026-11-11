import { ApiError, request, type RequestOptions } from './client.js';
import type { Greeting, Note, NoteInput, NoteStats, NotesExport, Problem, PublicConfig } from './types.js';

export const greetingList = (query?: { name?: string }, options?: RequestOptions) => request<Greeting>('GET', '/api/greeting', { ...options, query, operation: 'greeting.list' });

export const greeting = {
    list: greetingList,
};

export const notesList = (query?: { search?: string; tag?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query, operation: 'notes.list' });
export const notesCreate = (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body, operation: 'notes.create' });
export const notesGetExport = (options?: RequestOptions) => request<NotesExport>('GET', '/api/notes/export', { ...options, operation: 'notes.getExport' });
export const notesGet = (id: string | number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.get' });
export const notesUpdate = (id: string | number, body: NoteInput, options?: RequestOptions) => request<Note>('PUT', `/api/notes/${encodeURIComponent(id)}`, { ...options, body, operation: 'notes.update' });
export const notesDelete = (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/notes/${encodeURIComponent(id)}`, { ...options, operation: 'notes.delete' });
export const notesArchive = (id: string | number, options?: RequestOptions) => request<Note>('POST', `/api/notes/${encodeURIComponent(id)}/archive`, { ...options, operation: 'notes.archive' });

export const notes = {
    list: notesList,
    create: notesCreate,
    getExport: notesGetExport,
    get: notesGet,
    update: notesUpdate,
    delete: notesDelete,
    archive: notesArchive,
};

export const statsList = (options?: RequestOptions) => request<NoteStats>('GET', '/api/stats', { ...options, operation: 'stats.list' });

export const stats = {
    list: statsList,
};

export interface ApiErrors {
    'notes.get': Problem;
    'notes.update': Problem;
    'notes.delete': Problem;
    'notes.archive': Problem;
}

const errorStatuses: Record<string, number[]> = {
    'notes.get': [404],
    'notes.update': [404],
    'notes.delete': [404],
    'notes.archive': [404],
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
