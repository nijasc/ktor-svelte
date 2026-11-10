import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

declare const iso: unique symbol;

const pad = (value: number, width = 2) => String(value).padStart(width, '0');

export type IsoDate = string & { readonly [iso]: 'date' };

export const IsoDate = {
    parse: (value: IsoDate): Date => {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        date.setFullYear(year);
        return date;
    },
    from: (date: Date): IsoDate => `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` as IsoDate,
    today: (): IsoDate => IsoDate.from(new Date()),
};

export type IsoTime = string & { readonly [iso]: 'time' };

export const IsoTime = {
    from: (date: Date): IsoTime => `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` as IsoTime,
};

export type IsoDateTime = string & { readonly [iso]: 'date-time' };

export const IsoDateTime = {
    parse: (value: IsoDateTime): Date => new Date(value),
    from: (date: Date): IsoDateTime => date.toISOString() as IsoDateTime,
    fromLocal: (date: Date): IsoDateTime => `${IsoDate.from(date)}T${IsoTime.from(date)}` as IsoDateTime,
    now: (): IsoDateTime => IsoDateTime.from(new Date()),
};

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
    createdAt: IsoDateTime;
}

export const Note = {
    empty: (): Note => ({
        id: 0,
        title: '',
        body: '',
        tags: [],
        status: 'ACTIVE',
        icon: 'AArrowDown',
        createdAt: '' as IsoDateTime,
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
    bounds: {
        title: { maxlength: 80 },
    },
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
}

export const PublicConfig = {
    empty: (): PublicConfig => ({
        appName: '',
    }),
};
