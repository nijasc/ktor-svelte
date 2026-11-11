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

export type Activity = Archived | Created;

export const Activity = {
    types: ['archived', 'created'] as const,
    match: <R>(value: Activity, cases: { [K in Activity['type']]: (value: Extract<Activity, { type: K }>) => R }): R =>
        (cases[value['type']] as (value: Activity) => R)(value),
};

export interface Archived {
    type: 'archived';
    at: IsoDateTime;
    title: string;
}

export const Archived = {
    empty: (): Archived => ({
        type: 'archived',
        at: '' as IsoDateTime,
        title: '',
    }),
};

export interface Created {
    type: 'created';
    at: IsoDateTime;
}

export const Created = {
    empty: (): Created => ({
        type: 'created',
        at: '' as IsoDateTime,
    }),
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
    bounds: {
        id: { required: true },
    },
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
        title: { required: true, minlength: 1, maxlength: 80 },
    },
    validate: (value: NoteInput): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
        if (typeof value.title === 'string') {
            const length = [...value.title].length;
            if (length < 1) addError(errors, 'title', 'Must be at least 1 character.');
            if (length > 80) addError(errors, 'title', 'Must be at most 80 characters.');
        }
        return errors;
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
    bounds: {
        total: { required: true },
        archived: { required: true },
    },
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

export interface UploadReceipt {
    files: string[];
    bytes: number;
}

export const UploadReceipt = {
    empty: (): UploadReceipt => ({
        files: [],
        bytes: 0,
    }),
    bounds: {
        bytes: { required: true },
    },
};

export interface PublicConfig {
    appName: string;
}

export const PublicConfig = {
    empty: (): PublicConfig => ({
        appName: '',
    }),
};

function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
