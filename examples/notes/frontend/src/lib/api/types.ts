import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

export interface Greeting {
    message: string;
    locale: string;
    theme: string;
}

export interface Note {
    id: number;
    title: string;
    body: string;
    tags: string[];
    status: Status;
    icon: LucideIcon;
}

export interface NoteInput {
    title: string;
    body?: string;
    tags?: string[];
    icon?: LucideIcon;
}

export interface NoteStats {
    total: number;
    archived: number;
    tags: Record<string, number>;
}

export interface NotesExport {
    notes: Note[];
}

export interface Problem {
    message: string;
}

export const Status = {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export interface PublicConfig {
    appName: string;
    maxTitleLength: number;
}
