import { request, type RequestOptions } from './client.js';
import type { Note, NoteInput, NoteStats, NotesExport } from './types.js';

export const notes = {
    list: (query?: { search?: string; tag?: string }, options?: RequestOptions) => request<Note[]>('GET', '/api/notes', { ...options, query }),
    create: (body: NoteInput, options?: RequestOptions) => request<Note>('POST', '/api/notes', { ...options, body }),
    getExport: (options?: RequestOptions) => request<NotesExport>('GET', '/api/notes/export', { ...options }),
    get: (id: string | number, options?: RequestOptions) => request<Note>('GET', `/api/notes/${encodeURIComponent(id)}`, { ...options }),
    update: (id: string | number, body: NoteInput, options?: RequestOptions) => request<Note>('PUT', `/api/notes/${encodeURIComponent(id)}`, { ...options, body }),
    delete: (id: string | number, options?: RequestOptions) => request<void>('DELETE', `/api/notes/${encodeURIComponent(id)}`, { ...options }),
    archive: (id: string | number, options?: RequestOptions) => request<Note>('POST', `/api/notes/${encodeURIComponent(id)}/archive`, { ...options }),
};

export const stats = {
    list: (options?: RequestOptions) => request<NoteStats>('GET', '/api/stats', { ...options }),
};

export const api = { notes, stats };
