import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

export interface Greeting {
    message: string;
    locale: string;
    theme: string;
}

export const Greeting = {
    empty: (): Greeting => ({
        message: '',
        locale: '',
        theme: '',
    }),
};

export interface Note {
    id: number;
    title: string;
    body: string;
    tags: string[];
    status: Status;
    icon: LucideIcon;
}

export const Note = {
    empty: (): Note => ({
        id: 0,
        title: '',
        body: '',
        tags: [],
        status: 'ACTIVE',
        icon: 'AArrowDown',
    }),
};

export interface NoteInput {
    title: string;
    body?: string;
    tags?: string[];
    icon?: LucideIcon;
}

export const NoteInput = {
    empty: (): NoteInput => ({
        title: '',
        body: '',
        tags: [],
        icon: 'AArrowDown',
    }),
};

export interface NoteStats {
    total: number;
    archived: number;
    tags: Record<string, number>;
}

export const NoteStats = {
    empty: (): NoteStats => ({
        total: 0,
        archived: 0,
        tags: {},
    }),
};

export interface NotesExport {
    notes: Note[];
}

export const NotesExport = {
    empty: (): NotesExport => ({
        notes: [],
    }),
};

export interface Problem {
    message: string;
}

export const Problem = {
    empty: (): Problem => ({
        message: '',
    }),
};

export const Status = {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export interface PublicConfig {
    appName: string;
    maxTitleLength: number;
}

export const PublicConfig = {
    empty: (): PublicConfig => ({
        appName: '',
        maxTitleLength: 0,
    }),
};
